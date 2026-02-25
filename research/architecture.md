# Chatty — Production Architecture Document

*Version 1.0 | February 2026*
*Avada Group — Shopify App*

---

## Table of Contents

1. [System Architecture Overview](#1-system-architecture-overview)
2. [Database: Firestore](#2-database-firestore)
3. [Analytics: BigQuery](#3-analytics-bigquery)
4. [Data Pipeline](#4-data-pipeline)
5. [Real-time Communication](#5-real-time-communication)
6. [AI Architecture](#6-ai-architecture)
7. [Shopify Integration](#7-shopify-integration)
8. [Storage](#8-storage)
9. [Hosting](#9-hosting)
10. [Queue & Async Processing](#10-queue--async-processing)
11. [Cache](#11-cache)
12. [Security](#12-security)
13. [CDN](#13-cdn)
14. [Mixpanel Analytics](#14-mixpanel-analytics)
15. [Infrastructure Costs](#15-infrastructure-costs)
16. [API Endpoints](#16-api-endpoints)
17. [Frontend Component Tree](#17-frontend-component-tree)
18. [Storefront Widget](#18-storefront-widget)

---

## 1. System Architecture Overview

### High-Level Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                        STOREFRONT (Merchant's Shop)                 │
│  ┌──────────────┐                                                   │
│  │ Preact Widget │◄──── Cloudflare CDN (widget.chatty.net)          │
│  │  (~15KB gz)   │                                                  │
│  └──────┬───────┘                                                   │
│         │ WebSocket / SSE                                           │
└─────────┼───────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     CLOUD RUN (api.chatty.net)                      │
│                                                                     │
│  ┌─────────┐   ┌──────────┐   ┌──────────────┐                     │
│  │ Handlers │──▶│ Services  │──▶│ Repositories │                    │
│  │ (routes) │   │ (logic)   │   │(1 per coll.) │                    │
│  └─────────┘   └──────────┘   └──────┬───────┘                     │
│                                       │                             │
│  Response: { success, data, error }   │                             │
└───────────────────────────────────────┼─────────────────────────────┘
          │                             │
          │              ┌──────────────┼──────────────┐
          │              ▼              ▼              ▼
          │     ┌──────────────┐ ┌───────────┐ ┌────────────┐
          │     │  Firestore   │ │   Redis   │ │    GCS     │
          │     │  (primary)   │ │ (cache)   │ │ (uploads)  │
          │     └──────┬───────┘ └───────────┘ └────────────┘
          │            │
          │            │ onSnapshot (real-time)
          │            ▼
          │     ┌──────────────┐
          │     │ Agent Admin  │  (React/Polaris — Shopify App Bridge)
          │     │  Dashboard   │
          │     └──────────────┘
          │
          │            ┌──────────────┐    ┌──────────────┐
          │            │   Pub/Sub    │───▶│  BigQuery    │
          │            │  (events)    │    │ (analytics)  │
          │            └──────────────┘    └──────────────┘
          │                    │
          │                    ▼
          │            ┌──────────────┐
          │            │ Cloud Tasks  │
          │            │ (async jobs) │
          │            └──────────────┘
          │
          │     ┌──────────────┐
          └────▶│  LLM APIs    │  (OpenAI / Anthropic)
                │  + RAG       │
                └──────────────┘
```

### Backend Pattern (Avada Standard)

```
Request → Handler (validation, auth) → Service (business logic) → Repository (data access)
                                                                         │
                                                              1 repo per Firestore collection
```

**Standard response format:**
```json
{
  "success": true,
  "data": { ... },
  "error": null
}
```

On error:
```json
{
  "success": false,
  "data": null,
  "error": { "code": "NOT_FOUND", "message": "Conversation not found" }
}
```

---

## 2. Database: Firestore

All collections are scoped by `shopId`. Each collection has exactly one repository class.

### Collection Schema

#### `shops`
Primary store configuration. Created on app install.

```
shops/{shopId}
├── shopId: string (Shopify shop domain, e.g. "cool-store.myshopify.com")
├── shopifyAccessToken: string (encrypted)
├── plan: string ("free" | "pro" | "business" | "enterprise")
├── planExpiresAt: timestamp
├── installedAt: timestamp
├── uninstalledAt: timestamp | null
├── settings: {
│   ├── widgetEnabled: boolean
│   ├── widgetPosition: string ("bottom-right" | "bottom-left")
│   ├── widgetColor: string (#hex)
│   ├── brandName: string
│   ├── welcomeMessage: string
│   ├── offlineMessage: string
│   ├── operatingHours: { timezone, schedule[] }
│   ├── language: string (ISO 639-1)
│   ├── autoReplyEnabled: boolean
│   ├── soundEnabled: boolean
│   └── removeBranding: boolean
│   }
├── channels: {
│   ├── email: { enabled, forwardAddress }
│   ├── whatsapp: { enabled, phoneNumber, apiKey }
│   ├── messenger: { enabled, pageId, pageToken }
│   └── instagram: { enabled, accountId, token }
│   }
├── shopifyData: {
│   ├── shopName: string
│   ├── email: string
│   ├── domain: string
│   ├── currency: string
│   ├── timezone: string
│   └── planName: string (Shopify plan)
│   }
└── onboardingCompleted: boolean
```

**Repository:** `ShopRepository`

---

#### `conversations`
One document per conversation thread. Always filtered by `shopId`.

```
conversations/{conversationId}
├── conversationId: string (auto-generated)
├── shopId: string (indexed)
├── visitorId: string (ref → visitors)
├── assignedAgentId: string | null
├── channel: string ("web" | "email" | "whatsapp" | "messenger" | "instagram")
├── status: string ("open" | "pending" | "resolved" | "closed")
├── priority: string ("low" | "normal" | "high" | "urgent")
├── tags: string[]
├── subject: string | null
├── lastMessage: {
│   ├── text: string (truncated preview)
│   ├── sender: string ("visitor" | "agent" | "ai")
│   └── timestamp: timestamp
│   }
├── aiHandled: boolean
├── aiResolutionConfidence: number (0-1)
├── csatRating: number | null (1-5)
├── csatComment: string | null
├── revenue: number (attributed sales, USD cents)
├── firstResponseAt: timestamp | null
├── resolvedAt: timestamp | null
├── createdAt: timestamp
└── updatedAt: timestamp
```

**Indexes:** `shopId + status`, `shopId + assignedAgentId + status`, `shopId + channel + createdAt`

**Repository:** `ConversationRepository`

---

#### `messages`
Individual messages within conversations. Subcollection of conversations for query efficiency; also a top-level collection for cross-conversation queries.

```
messages/{messageId}
├── messageId: string
├── conversationId: string (indexed)
├── shopId: string (indexed)
├── sender: {
│   ├── type: string ("visitor" | "agent" | "ai" | "system")
│   ├── id: string (visitorId or agentId)
│   └── name: string
│   }
├── content: {
│   ├── type: string ("text" | "image" | "file" | "product_card" | "order_card" | "quick_reply")
│   ├── text: string | null
│   ├── attachments: [{ url, mimeType, fileName, size }]
│   ├── productCard: { productId, title, imageUrl, price, variantId } | null
│   └── quickReplies: string[] | null
│   }
├── metadata: {
│   ├── aiModel: string | null (e.g. "gpt-4o-mini")
│   ├── aiConfidence: number | null
│   ├── aiSources: string[] | null (KB article IDs used)
│   ├── isInternalNote: boolean
│   └── editedAt: timestamp | null
│   }
├── readBy: { [agentId]: timestamp }
├── createdAt: timestamp
└── deletedAt: timestamp | null
```

**Repository:** `MessageRepository`

---

#### `visitors`
Storefront visitors / customers. Identified by cookie or Shopify customer ID.

```
visitors/{visitorId}
├── visitorId: string
├── shopId: string (indexed)
├── shopifyCustomerId: string | null
├── email: string | null
├── name: string | null
├── phone: string | null
├── avatarUrl: string | null
├── location: { country, region, city, timezone }
├── device: { browser, os, deviceType }
├── currentPage: string | null (live browsing page)
├── cartContents: [{ productId, variantId, title, quantity, price }]
├── cartTotal: number (cents)
├── tags: string[]
├── customFields: { [key]: value }
├── shopifyData: {
│   ├── totalOrders: number
│   ├── totalSpent: number (cents)
│   ├── lastOrderAt: timestamp | null
│   ├── acceptsMarketing: boolean
│   └── note: string | null
│   }
├── conversationCount: number
├── firstSeenAt: timestamp
├── lastSeenAt: timestamp
├── isOnline: boolean
└── createdAt: timestamp
```

**Repository:** `VisitorRepository`

---

#### `articles`
Knowledge base articles for AI training and customer-facing FAQ.

```
articles/{articleId}
├── articleId: string
├── shopId: string (indexed)
├── title: string
├── slug: string
├── content: string (markdown/HTML)
├── contentPlainText: string (for search/embedding)
├── category: string
├── tags: string[]
├── status: string ("published" | "draft" | "archived")
├── embedding: bytes | null (vector for RAG — stored in dedicated vector index)
├── viewCount: number
├── helpfulCount: number
├── unhelpfulCount: number
├── locale: string (ISO 639-1)
├── seoTitle: string | null
├── seoDescription: string | null
├── sortOrder: number
├── createdAt: timestamp
├── updatedAt: timestamp
└── publishedAt: timestamp | null
```

**Repository:** `ArticleRepository`

---

#### `tickets`
Support tickets for async/email-based workflows.

```
tickets/{ticketId}
├── ticketId: string
├── shopId: string (indexed)
├── conversationId: string | null (linked conversation)
├── visitorId: string
├── assignedAgentId: string | null
├── subject: string
├── status: string ("new" | "open" | "pending" | "on_hold" | "resolved" | "closed")
├── priority: string ("low" | "normal" | "high" | "urgent")
├── category: string | null
├── tags: string[]
├── dueAt: timestamp | null
├── resolvedAt: timestamp | null
├── createdAt: timestamp
└── updatedAt: timestamp
```

**Repository:** `TicketRepository`

---

#### `automations`
Workflow rules and triggers.

```
automations/{automationId}
├── automationId: string
├── shopId: string (indexed)
├── name: string
├── description: string
├── enabled: boolean
├── trigger: {
│   ├── type: string ("new_conversation" | "message_received" | "visitor_on_page" |
│   │                   "cart_abandoned" | "no_agent_online" | "tag_added" | "schedule")
│   └── conditions: [{ field, operator, value }]
│   }
├── actions: [{
│   ├── type: string ("send_message" | "assign_agent" | "add_tag" | "set_priority" |
│   │                  "trigger_ai" | "send_email" | "set_status" | "send_product_card")
│   └── config: { ... }
│   }]
├── runCount: number
├── lastRunAt: timestamp | null
├── createdAt: timestamp
└── updatedAt: timestamp
```

**Repository:** `AutomationRepository`

---

#### `aiConfigs`
Per-shop AI configuration, model preferences, and custom instructions.

```
aiConfigs/{shopId}
├── shopId: string
├── enabled: boolean
├── model: string ("gpt-4o-mini" | "gpt-4o" | "claude-3-haiku" | "claude-sonnet-4")
├── temperature: number (0.0-1.0, default 0.3)
├── systemPrompt: string (custom merchant instructions)
├── persona: {
│   ├── name: string ("Luna", "Sam", custom)
│   ├── tone: string ("friendly" | "professional" | "casual")
│   └── language: string
│   }
├── capabilities: {
│   ├── productRecommendation: boolean
│   ├── orderLookup: boolean
│   ├── discountCodes: boolean
│   ├── cartRecovery: boolean
│   └── handoffThreshold: number (confidence below this → human)
│   }
├── knowledgeSources: {
│   ├── articles: boolean (use KB articles)
│   ├── products: boolean (use Shopify product catalog)
│   ├── policies: boolean (use store policies)
│   └── customUrls: string[] (additional pages to index)
│   }
├── rateLimits: {
│   ├── maxAiRepliesPerConversation: number
│   ├── maxAiRepliesPerDay: number
│   └── maxTokensPerReply: number
│   }
├── usageThisMonth: {
│   ├── totalReplies: number
│   ├── totalTokens: number
│   └── estimatedCost: number (USD cents)
│   }
├── updatedAt: timestamp
└── createdAt: timestamp
```

**Repository:** `AiConfigRepository`

---

#### `analytics`
Pre-aggregated daily analytics snapshots (for fast dashboard queries).

```
analytics/{shopId}/daily/{YYYY-MM-DD}
├── shopId: string
├── date: string (YYYY-MM-DD)
├── conversations: {
│   ├── total: number
│   ├── byChannel: { web, email, whatsapp, messenger, instagram }
│   ├── avgFirstResponseTime: number (seconds)
│   ├── avgResolutionTime: number (seconds)
│   └── csatAverage: number
│   }
├── messages: {
│   ├── total: number
│   ├── byAgent: number
│   ├── byAi: number
│   └── byVisitor: number
│   }
├── ai: {
│   ├── totalReplies: number
│   ├── autoResolved: number
│   ├── handoffs: number
│   ├── avgConfidence: number
│   └── tokenUsage: number
│   }
├── visitors: {
│   ├── uniqueVisitors: number
│   ├── newVisitors: number
│   └── returningVisitors: number
│   }
├── sales: {
│   ├── totalRevenue: number (cents)
│   ├── assistedConversations: number
│   ├── avgOrderValue: number (cents)
│   └── conversionRate: number
│   }
└── createdAt: timestamp
```

**Repository:** `AnalyticsRepository`

---

### Firestore Indexes Summary

| Collection | Composite Index | Purpose |
|---|---|---|
| conversations | `shopId` + `status` + `updatedAt` DESC | Agent inbox (open conversations) |
| conversations | `shopId` + `assignedAgentId` + `status` | My assigned conversations |
| conversations | `shopId` + `channel` + `createdAt` DESC | Filter by channel |
| messages | `conversationId` + `createdAt` ASC | Message thread |
| messages | `shopId` + `createdAt` DESC | Cross-conversation search |
| visitors | `shopId` + `lastSeenAt` DESC | Online visitors |
| visitors | `shopId` + `isOnline` | Currently online |
| articles | `shopId` + `status` + `category` | Published KB articles |
| tickets | `shopId` + `status` + `priority` | Ticket queue |
| automations | `shopId` + `enabled` | Active automations |

---

## 3. Analytics: BigQuery

BigQuery handles historical analytics, complex aggregations, and reporting that would be too expensive in Firestore.

### Dataset: `chatty_analytics`

#### Table: `conversations`
```sql
CREATE TABLE chatty_analytics.conversations (
  conversation_id STRING NOT NULL,
  shop_id STRING NOT NULL,
  visitor_id STRING,
  assigned_agent_id STRING,
  channel STRING,          -- web | email | whatsapp | messenger | instagram
  status STRING,           -- open | pending | resolved | closed
  priority STRING,
  tags ARRAY<STRING>,
  ai_handled BOOL,
  ai_resolution_confidence FLOAT64,
  csat_rating INT64,
  revenue_cents INT64,
  first_response_seconds INT64,
  resolution_seconds INT64,
  message_count INT64,
  created_at TIMESTAMP,
  resolved_at TIMESTAMP,
  updated_at TIMESTAMP
)
PARTITION BY DATE(created_at)
CLUSTER BY shop_id, channel;
```

#### Table: `messages`
```sql
CREATE TABLE chatty_analytics.messages (
  message_id STRING NOT NULL,
  conversation_id STRING NOT NULL,
  shop_id STRING NOT NULL,
  sender_type STRING,      -- visitor | agent | ai | system
  sender_id STRING,
  content_type STRING,     -- text | image | file | product_card | order_card
  text_length INT64,
  has_attachment BOOL,
  ai_model STRING,
  ai_confidence FLOAT64,
  ai_token_count INT64,
  is_internal_note BOOL,
  created_at TIMESTAMP
)
PARTITION BY DATE(created_at)
CLUSTER BY shop_id, sender_type;
```

#### Table: `ai_interactions`
```sql
CREATE TABLE chatty_analytics.ai_interactions (
  interaction_id STRING NOT NULL,
  shop_id STRING NOT NULL,
  conversation_id STRING,
  visitor_id STRING,
  model STRING,            -- gpt-4o-mini | claude-3-haiku | etc.
  prompt_tokens INT64,
  completion_tokens INT64,
  total_tokens INT64,
  latency_ms INT64,
  confidence FLOAT64,
  action_type STRING,      -- reply | recommend_product | order_lookup | handoff
  sources_used ARRAY<STRING>,  -- KB article IDs, product IDs
  was_helpful BOOL,        -- visitor feedback
  cost_usd FLOAT64,
  created_at TIMESTAMP
)
PARTITION BY DATE(created_at)
CLUSTER BY shop_id, model;
```

#### Table: `sales_attribution`
```sql
CREATE TABLE chatty_analytics.sales_attribution (
  attribution_id STRING NOT NULL,
  shop_id STRING NOT NULL,
  conversation_id STRING,
  visitor_id STRING,
  shopify_order_id STRING,
  order_total_cents INT64,
  currency STRING,
  products ARRAY<STRUCT<product_id STRING, title STRING, quantity INT64, price_cents INT64>>,
  attribution_type STRING,  -- direct (chat → purchase <1h) | assisted (chat → purchase <24h) | influenced (chat → purchase <7d)
  channel STRING,
  ai_involved BOOL,
  created_at TIMESTAMP
)
PARTITION BY DATE(created_at)
CLUSTER BY shop_id, attribution_type;
```

### Key BigQuery Queries

| Query | Purpose | Used By |
|---|---|---|
| Revenue by conversation channel (30d) | Analytics dashboard | Dashboard page |
| AI resolution rate trend (weekly) | AI performance | AI settings page |
| Agent response time percentiles | Agent performance | Analytics page |
| Sales attribution by type | Revenue dashboard | Dashboard page |
| Token usage & cost by model | Cost monitoring | Internal admin |
| CSAT trend by channel | Service quality | Analytics page |

---

## 4. Data Pipeline

### Firestore → Pub/Sub → BigQuery

```
Firestore (writes)
     │
     ├── Cloud Function trigger (onWrite)
     │       │
     │       ▼
     │   Pub/Sub Topic
     │   ├── chatty.conversations.events
     │   ├── chatty.messages.events
     │   ├── chatty.ai-interactions.events
     │   └── chatty.sales.events
     │       │
     │       ▼
     │   BigQuery Streaming Insert (Cloud Function subscriber)
     │   (real-time, <5s latency)
     │
     └── Nightly Batch Job (Cloud Scheduler → Cloud Run Job)
             │
             ▼
         Full reconciliation: Firestore export → GCS → BigQuery load
         - Runs at 02:00 UTC daily
         - Catches any missed streaming events
         - Rebuilds daily aggregates in analytics collection
         - Computes sales attribution windows
```

### Event Schema (Pub/Sub)

```json
{
  "eventType": "conversation.created",
  "shopId": "cool-store.myshopify.com",
  "resourceId": "conv_abc123",
  "data": { ... },
  "timestamp": "2026-02-22T13:00:00Z",
  "version": "1.0"
}
```

### Pipeline Components

| Component | Trigger | Target | Latency |
|---|---|---|---|
| `fn-firestore-to-pubsub` | Firestore onWrite (conversations, messages) | Pub/Sub topics | <1s |
| `fn-pubsub-to-bigquery` | Pub/Sub subscription | BigQuery streaming insert | <5s |
| `job-nightly-reconcile` | Cloud Scheduler (02:00 UTC) | BigQuery batch load + Firestore analytics | ~15min |
| `job-sales-attribution` | Cloud Scheduler (every 1h) | BigQuery sales_attribution table | ~5min |

---

## 5. Real-time Communication

### Visitor ↔ Agent Chat: WebSocket + SSE

```
┌─────────────┐     WebSocket (wss://ws.chatty.net)     ┌──────────────┐
│  Storefront  │◄──────────────────────────────────────►│  Cloud Run   │
│  Widget      │     Fallback: SSE + POST               │  WS Service  │
└─────────────┘                                          └──────┬───────┘
                                                                │
                                                          Firestore write
                                                                │
┌─────────────┐     Firestore onSnapshot                 ┌──────┴───────┐
│  Agent       │◄───────────────────────────────────────│  Firestore   │
│  Dashboard   │     (real-time listener)                └──────────────┘
└─────────────┘
```

**Why this hybrid approach:**
- **WebSocket** for visitor widget: lightweight, works on all browsers, Cloud Run supports it
- **Firestore onSnapshot** for agent dashboard: built into Firebase SDK, auto-reconnects, handles offline, works with Polaris admin

### Connection Management

| Concern | Solution |
|---|---|
| WebSocket scaling | Cloud Run auto-scales; each instance handles ~1000 connections |
| Connection persistence | Cloud Run timeout set to 3600s for WebSocket |
| Reconnection | Client exponential backoff (1s, 2s, 4s, 8s, max 30s) |
| Presence (online status) | Redis `SETEX` with 30s TTL; heartbeat every 20s |
| Typing indicators | WebSocket pub/sub; not persisted |
| Message ordering | Firestore server timestamps; client-side sort |

### Event Types (WebSocket)

```typescript
// Visitor → Server
{ type: "message.send", data: { text, attachments? } }
{ type: "typing.start" }
{ type: "typing.stop" }
{ type: "page.view", data: { url, title } }
{ type: "cart.update", data: { items, total } }

// Server → Visitor
{ type: "message.new", data: { message } }
{ type: "agent.typing" }
{ type: "agent.assigned", data: { agent } }
{ type: "conversation.resolved" }
{ type: "quick_replies", data: { options[] } }
```

---

## 6. AI Architecture

### LLM Integration

```
┌──────────────────────────────────────────────────────────┐
│                    AI Service Layer                        │
│                                                           │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐   │
│  │ LLM Router  │  │ RAG Pipeline │  │ Context Manager │   │
│  │             │  │              │  │                │    │
│  │ • Model     │  │ • Embed query│  │ • Last 20 msgs │   │
│  │   selection │  │ • Vector     │  │ • Visitor data  │   │
│  │ • Fallback  │  │   search     │  │ • Cart contents │   │
│  │ • Rate      │  │ • Re-rank    │  │ • Order history │   │
│  │   limiting  │  │ • Inject     │  │ • Store policies│   │
│  └──────┬──────┘  └──────┬───────┘  └───────┬────────┘   │
│         │                │                   │            │
│         ▼                ▼                   ▼            │
│  ┌────────────────────────────────────────────────────┐   │
│  │              Prompt Assembly                        │   │
│  │  system_prompt + context + rag_results + user_msg  │   │
│  └─────────────────────┬──────────────────────────────┘   │
│                        │                                  │
└────────────────────────┼──────────────────────────────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
     ┌──────────────┐     ┌──────────────┐
     │   OpenAI     │     │  Anthropic   │
     │  gpt-4o-mini │     │ claude-haiku │
     │  gpt-4o      │     │ claude-sonnet│
     └──────────────┘     └──────────────┘
```

### Model Selection Strategy

| Use Case | Primary Model | Fallback | Max Tokens | Rationale |
|---|---|---|---|---|
| Simple FAQ / order status | gpt-4o-mini | claude-3-haiku | 300 | Fast, cheap ($0.15/1M input) |
| Product recommendation | gpt-4o | claude-sonnet-4 | 500 | Needs nuanced understanding |
| Complex support (returns, complaints) | gpt-4o | claude-sonnet-4 | 800 | Quality matters for brand voice |
| Conversation summary | gpt-4o-mini | claude-3-haiku | 200 | Bulk processing, cost-sensitive |

### RAG Pipeline (Knowledge Base + Product Catalog)

```
Index Time (async, on content change):
  Article/Product created or updated
       │
       ▼
  Cloud Task: generate embedding
       │
       ▼
  OpenAI text-embedding-3-small (1536 dims)
       │
       ▼
  Store in Firestore Vector Search index
  (or Vertex AI Vector Search for scale)

Query Time (per AI reply):
  Visitor message
       │
       ▼
  Generate query embedding
       │
       ▼
  Vector similarity search (top-k=5, threshold=0.75)
       │
       ├── KB articles (matched)
       ├── Products (matched)
       └── Store policies (matched)
       │
       ▼
  Re-rank by relevance score
       │
       ▼
  Inject top 3 results into LLM context
```

### Product Catalog Indexing

```
Shopify Products Webhook (products/update, products/create)
       │
       ▼
  Extract: title, description, variants, price, tags, type, vendor
       │
       ▼
  Generate structured text:
    "[Product] Hydrating Face Cream | $29.99 | For dry/normal skin |
     Ingredients: hyaluronic acid, vitamin E | Available in 50ml, 100ml"
       │
       ▼
  Generate embedding → store in vector index
```

### Conversation Context Window

```typescript
interface AIContext {
  // System
  systemPrompt: string;        // Merchant custom instructions + persona
  storeInfo: StoreInfo;        // Name, policies, shipping info

  // RAG results
  knowledgeBase: KBResult[];   // Top 3 relevant articles
  products: ProductResult[];   // Top 3 relevant products

  // Conversation
  recentMessages: Message[];   // Last 20 messages (or last 4000 tokens)
  conversationSummary?: string; // If conversation > 20 messages, summary of earlier

  // Visitor context
  visitor: {
    name?: string;
    cart: CartItem[];
    currentPage: string;
    orderHistory: Order[];     // Last 5 orders
    previousConversations: number;
  };
}
```

### AI Confidence & Handoff

| Confidence | Action |
|---|---|
| ≥ 0.85 | Auto-reply to visitor |
| 0.60 – 0.84 | Auto-reply + flag for agent review |
| < 0.60 | Handoff to human agent; AI suggests draft reply |
| N/A (no context) | Handoff immediately with "Let me connect you with a team member" |

---

## 7. Shopify Integration

### Required API Scopes

```
read_products          # Product catalog for AI recommendations
read_orders            # Order lookup in chat
read_customers         # Customer data enrichment
read_themes            # Theme app extension injection
write_themes           # Widget installation
read_script_tags       # Legacy widget injection (fallback)
write_script_tags      # Legacy widget injection (fallback)
read_checkouts         # Cart data for proactive chat
read_content           # Store policies (shipping, returns)
read_shop              # Shop info
```

### Webhooks

| Webhook Topic | Purpose | Handler |
|---|---|---|
| `orders/create` | Sales attribution — match to conversations | `handleOrderCreate` |
| `orders/updated` | Order status updates for chat context | `handleOrderUpdate` |
| `orders/fulfilled` | Proactive shipping notification in chat | `handleOrderFulfilled` |
| `products/create` | Re-index product for AI/RAG | `handleProductCreate` |
| `products/update` | Re-index product for AI/RAG | `handleProductUpdate` |
| `products/delete` | Remove from vector index | `handleProductDelete` |
| `customers/create` | Link visitor to Shopify customer | `handleCustomerCreate` |
| `customers/update` | Update visitor profile data | `handleCustomerUpdate` |
| `app/uninstalled` | Cleanup, mark shop as uninstalled | `handleAppUninstalled` |
| `shop/update` | Refresh shop settings | `handleShopUpdate` |

### App Bridge Integration

- **App Bridge 4.x** — for embedded admin experience
- **Session Token Authentication** — JWT from App Bridge for API auth
- **Navigation** — integrated in Shopify Admin sidebar
- **Toast notifications** — for save confirmations, errors
- **ResourcePicker** — for selecting products in automation rules
- **Modal** — for confirmation dialogs

### Theme App Extension (Chat Widget)

```
extensions/
  chatty-widget/
    ├── blocks/
    │   └── chat-widget.liquid
    ├── assets/
    │   └── chatty-loader.js    # Lightweight loader (~2KB)
    └── locales/
        ├── en.default.json
        └── ...
```

`chat-widget.liquid`:
```liquid
{% comment %} Chatty Chat Widget {% endcomment %}
<div id="chatty-widget-root" data-shop-id="{{ shop.permanent_domain }}" style="display:none;"></div>
<script src="https://widget.chatty.net/v1/chatty.min.js" defer></script>
```

The Theme App Extension is the preferred method. ScriptTag is the fallback for Online Store 1.0 themes.

---

## 8. Storage

### Google Cloud Storage

**Bucket:** `chatty-uploads-{env}`

```
chatty-uploads-prod/
  ├── {shopId}/
  │   ├── attachments/
  │   │   └── {conversationId}/{messageId}/{filename}
  │   ├── kb-images/
  │   │   └── {articleId}/{filename}
  │   └── avatars/
  │       └── {agentId}.jpg
```

| Config | Value |
|---|---|
| Storage class | Standard (frequently accessed) |
| Location | us-central1 (multi-region for CDN) |
| Max file size | 10 MB (chat attachments), 5 MB (KB images) |
| Allowed types | jpg, png, gif, webp, pdf, doc, docx, csv, xlsx |
| Retention | 90 days after conversation closed (configurable) |
| Access | Signed URLs (15min expiry) for downloads |
| Upload | Signed URLs for direct upload from client → GCS |

### Upload Flow

```
Client → API (request signed URL) → GCS (direct upload) → API (confirm + save metadata)
```

---

## 9. Hosting

### Cloud Run Configuration

| Service | Min Instances | Max Instances | CPU | Memory | Concurrency | Timeout |
|---|---|---|---|---|---|---|
| `chatty-api` | 1 | 50 | 1 vCPU | 512 MB | 80 | 300s |
| `chatty-ws` | 1 | 20 | 1 vCPU | 512 MB | 1000 | 3600s |
| `chatty-ai-worker` | 0 | 30 | 2 vCPU | 1 GB | 10 | 120s |
| `chatty-webhook-handler` | 1 | 20 | 1 vCPU | 256 MB | 50 | 30s |

### Auto-Scaling Policy

```yaml
# chatty-api
scaling:
  minInstanceCount: 1          # Always warm (avoid cold starts)
  maxInstanceCount: 50
  targetCPUUtilization: 0.65
  targetConcurrency: 80

# chatty-ws (WebSocket)
scaling:
  minInstanceCount: 1
  maxInstanceCount: 20
  targetConcurrency: 1000      # WebSocket connections per instance

# chatty-ai-worker (scale to zero OK — async)
scaling:
  minInstanceCount: 0
  maxInstanceCount: 30
  targetConcurrency: 10        # Low concurrency, high CPU per request
```

### Cloud Run Jobs (Scheduled)

| Job | Schedule | Purpose |
|---|---|---|
| `job-nightly-analytics` | `0 2 * * *` | Aggregate daily analytics, reconcile BigQuery |
| `job-sales-attribution` | `0 * * * *` | Compute sales attribution (hourly) |
| `job-embedding-refresh` | `0 4 * * 0` | Weekly re-index of all product embeddings |
| `job-cleanup` | `0 3 * * *` | Archive old conversations, purge expired uploads |

---

## 10. Queue & Async Processing

### Pub/Sub Topics

| Topic | Publishers | Subscribers | Purpose |
|---|---|---|---|
| `chatty.ai.requests` | chatty-api | chatty-ai-worker | AI reply generation |
| `chatty.conversations.events` | Firestore trigger | fn-pubsub-to-bigquery | Analytics pipeline |
| `chatty.messages.events` | Firestore trigger | fn-pubsub-to-bigquery | Analytics pipeline |
| `chatty.webhooks.shopify` | chatty-webhook-handler | chatty-api | Shopify webhook processing |
| `chatty.notifications` | chatty-api | fn-send-notifications | Email/push notifications |
| `chatty.embeddings` | chatty-api | chatty-ai-worker | Vector embedding generation |

### Cloud Tasks Queues

| Queue | Rate Limit | Purpose |
|---|---|---|
| `ai-processing` | 100/s | AI reply generation with retry |
| `email-notifications` | 50/s | Agent notification emails, conversation transcripts |
| `bulk-operations` | 10/s | Bulk tag, bulk assign, bulk close |
| `shopify-api` | 4/s per shop | Rate-limited Shopify API calls (2 calls/s leaky bucket) |
| `embedding-generation` | 50/s | KB article & product embedding generation |

### AI Processing Flow

```
Visitor sends message
       │
       ▼
  chatty-api: save message to Firestore
       │
       ▼
  Pub/Sub → chatty.ai.requests
       │
       ▼
  chatty-ai-worker:
    1. Load conversation context (last 20 messages)
    2. Load visitor data (cart, history)
    3. RAG: vector search KB + products
    4. Assemble prompt
    5. Call LLM API
    6. Evaluate confidence
    7. Save AI message to Firestore
    8. WebSocket push to visitor
    9. Log to ai_interactions (Pub/Sub → BigQuery)
       │
  Total latency target: <3s (p95)
```

---

## 11. Cache

### Memorystore (Redis) — `chatty-redis`

**Instance:** Basic tier, 1 GB, us-central1

| Cache Key Pattern | TTL | Purpose |
|---|---|---|
| `shop:{shopId}:config` | 5 min | Shop settings (avoid Firestore read per request) |
| `shop:{shopId}:ai-config` | 5 min | AI configuration |
| `visitor:{visitorId}:online` | 30s | Online presence (heartbeat refreshed) |
| `agent:{agentId}:online` | 30s | Agent online status |
| `shop:{shopId}:agents-online` | 30s | Set of online agents for routing |
| `rate:{shopId}:ai` | 1 min (sliding) | AI reply rate limiting |
| `rate:{ip}:widget` | 1 min (sliding) | Widget API rate limiting |
| `session:{sessionToken}` | 24h | Visitor chat session |
| `ws:{connectionId}` | 1h | WebSocket connection → shopId/visitorId mapping |
| `conv:{conversationId}:typing` | 5s | Typing indicator state |

### Rate Limiting

```
Widget API:       100 req/min per IP
Agent API:        300 req/min per shopId
AI replies:       60/min per shopId (free), 200/min (paid)
Shopify webhooks: No limit (but deduplicate by webhook ID)
```

---

## 12. Security

### Authentication

| Context | Method | Details |
|---|---|---|
| Agent (Shopify Admin) | Shopify Session Token (JWT) | App Bridge issues JWT; backend verifies with Shopify secret |
| Visitor (widget) | Ephemeral session token | Generated on widget load; stored in cookie + Redis |
| Shopify Webhooks | HMAC-SHA256 | Verify `X-Shopify-Hmac-Sha256` header with app secret |
| Internal services | IAM | Cloud Run service-to-service auth via IAM |
| API keys (channels) | API key + shop verification | For WhatsApp/Messenger webhook receivers |

### IDOR Prevention

Every data access query includes `shopId` as a mandatory filter:

```typescript
// Repository pattern — shopId always required
class ConversationRepository {
  async getById(shopId: string, conversationId: string) {
    const doc = await db.collection('conversations').doc(conversationId).get();
    if (doc.data()?.shopId !== shopId) throw new ForbiddenError();
    return doc.data();
  }

  async list(shopId: string, filters: ConversationFilters) {
    return db.collection('conversations')
      .where('shopId', '==', shopId)  // Always scoped
      .where('status', '==', filters.status)
      .orderBy('updatedAt', 'desc')
      .limit(50)
      .get();
  }
}
```

### Additional Security Measures

| Measure | Implementation |
|---|---|
| Input sanitization | DOMPurify for message content; strip XSS vectors |
| Content Security Policy | Widget script served with strict CSP headers |
| Encryption at rest | Firestore default encryption; GCS encryption; Redis TLS |
| Encryption in transit | TLS 1.3 everywhere; WSS for WebSocket |
| Access token encryption | Shopify access tokens encrypted with KMS before Firestore storage |
| Audit logging | All admin actions logged (agent assignments, settings changes) |
| Data retention | Configurable per shop; default 1 year; GDPR delete on request |
| Secrets management | Secret Manager for API keys, tokens, LLM keys |

---

## 13. CDN

### Cloudflare Configuration

**Domain:** `widget.chatty.net`

| Asset | Cache TTL | Purpose |
|---|---|---|
| `chatty.min.js` (widget) | 1h (+ versioned URL) | Main widget bundle |
| `chatty.css` | 1h (+ versioned URL) | Widget styles |
| Widget assets (icons, fonts) | 30d | Static assets |
| API responses | No cache | Dynamic data |

### Widget Delivery

```
Merchant's storefront
       │
       ▼
  <script src="https://widget.chatty.net/v1/chatty.min.js?v={hash}" defer>
       │
       ▼
  Cloudflare Edge (nearest POP)
       │ (cache HIT → serve)
       │ (cache MISS → origin)
       ▼
  GCS bucket (widget build artifacts)
```

### Performance Budget

| Metric | Target |
|---|---|
| Widget JS (gzipped) | < 15 KB |
| Widget CSS (gzipped) | < 5 KB |
| Time to interactive | < 500ms |
| Lighthouse impact | < 2 points |
| Core Web Vitals impact | None (deferred loading) |

---

## 14. Mixpanel Analytics

### SDK Setup

```typescript
// Server-side (Cloud Run)
import Mixpanel from 'mixpanel';

const mixpanel = Mixpanel.init(MIXPANEL_TOKEN, {
  host: 'api-eu.mixpanel.com', // EU residency if needed
});
```

### User Identification

```typescript
// Identify by shopId (one "user" = one shop)
mixpanel.people.set(shopId, {
  $name: shopData.shopName,
  $email: shopData.email,
  shopify_plan: shopData.shopifyPlan,
  chatty_plan: shopData.plan,
  installed_at: shopData.installedAt,
  country: shopData.country,
});
```

### Super Properties (set on every event)

```typescript
{
  shop_id: string,
  chatty_plan: string,       // "free" | "pro" | "business" | "enterprise"
  shopify_plan: string,      // "basic" | "shopify" | "advanced" | "plus"
  days_since_install: number,
  ai_enabled: boolean,
  channels_active: string[], // ["web", "whatsapp", "email"]
  total_conversations: number // bucket: "0" | "1-50" | "50-500" | "500+"
}
```

### Key Events

| Event | Properties | Trigger |
|---|---|---|
| `app_installed` | source, referrer | App install |
| `app_uninstalled` | days_active, plan, reason | App uninstall |
| `plan_upgraded` | from_plan, to_plan, mrr | Plan change |
| `plan_downgraded` | from_plan, to_plan, mrr | Plan change |
| `conversation_started` | channel, visitor_type | New conversation |
| `ai_reply_sent` | model, confidence, response_time_ms | AI generates reply |
| `ai_handoff` | reason, confidence | AI hands off to human |
| `message_sent_agent` | channel, response_time_s | Agent sends message |
| `widget_loaded` | page_type, load_time_ms | Widget renders on storefront |
| `kb_article_created` | word_count, has_embedding | KB article published |
| `automation_created` | trigger_type, action_types | Automation rule created |
| `sale_attributed` | attribution_type, order_value, ai_involved | Revenue attributed |
| `onboarding_step` | step_name, completed | Onboarding progress |
| `feature_used` | feature_name | Any feature interaction |

### Key Funnels

1. **Install → Activation**
   - `app_installed` → `widget_enabled` → `first_conversation` → `first_ai_reply`

2. **Free → Paid Conversion**
   - `app_installed` → `ai_limit_hit` → `upgrade_prompt_shown` → `plan_upgraded`

3. **Onboarding Completion**
   - `onboarding_started` → `widget_customized` → `ai_configured` → `kb_article_created` → `onboarding_completed`

4. **AI Value Realization**
   - `ai_enabled` → `ai_reply_sent` (×10) → `ai_resolution` → `sale_attributed`

---

## 15. Infrastructure Costs

### Cost Estimates (USD/month)

| Component | Launch (1K shops) | 10K shops | 50K shops |
|---|---|---|---|
| **Cloud Run** (api + ws + workers) | $50 | $400 | $2,000 |
| **Firestore** (reads/writes/storage) | $30 | $300 | $1,500 |
| **Redis (Memorystore)** | $35 (basic 1GB) | $70 (basic 2GB) | $200 (standard 5GB) |
| **BigQuery** (storage + queries) | $10 | $50 | $250 |
| **Pub/Sub** | $5 | $30 | $150 |
| **Cloud Tasks** | $2 | $10 | $50 |
| **GCS** (uploads) | $5 | $20 | $80 |
| **Cloud Functions** (triggers) | $5 | $30 | $100 |
| **Secret Manager** | $1 | $2 | $5 |
| **Cloudflare** (Pro plan) | $20 | $20 | $200 (Business) |
| **LLM API costs** (OpenAI/Anthropic) | $100 | $2,000 | $12,000 |
| **Mixpanel** | $0 (free tier) | $0 (free tier) | $200 (Growth) |
| **Monitoring** (Cloud Monitoring) | $0 | $50 | $150 |
| **Domain/SSL** | $15 | $15 | $15 |
| | | | |
| **Total** | **~$280/mo** | **~$3,000/mo** | **~$16,700/mo** |
| **Per shop** | **$0.28** | **$0.30** | **$0.33** |

### LLM Cost Breakdown (largest variable cost)

| Assumption | Value |
|---|---|
| Avg AI replies per shop/month (active) | 150 |
| Avg tokens per reply (prompt + completion) | 2,000 |
| Model mix | 80% gpt-4o-mini ($0.15/$0.60 per 1M), 20% gpt-4o ($2.50/$10 per 1M) |
| Cost per AI reply (blended) | ~$0.002 |
| Active AI shops (% of total) | 40% at launch, 60% at scale |

### Revenue vs Cost at Scale

| Scale | Est. MRR | Infra Cost | LLM Cost | Gross Margin |
|---|---|---|---|---|
| 1K shops | $5,000 | $180 | $100 | 94% |
| 10K shops | $50,000 | $1,000 | $2,000 | 94% |
| 50K shops | $250,000 | $4,700 | $12,000 | 93% |

---

## 16. API Endpoints

### Authentication
All agent endpoints require Shopify Session Token. Widget endpoints use session cookie.

### Agent API (`/api/v1/`)

| Method | Endpoint | Service | Data Source | Description |
|---|---|---|---|---|
| **Conversations** | | | | |
| GET | `/conversations` | ConversationService | Firestore | List conversations (filtered by status, agent, channel) |
| GET | `/conversations/:id` | ConversationService | Firestore | Get conversation with last 50 messages |
| PATCH | `/conversations/:id` | ConversationService | Firestore | Update status, assign agent, add tags |
| POST | `/conversations/:id/messages` | MessageService | Firestore | Send agent message |
| POST | `/conversations/:id/resolve` | ConversationService | Firestore | Resolve conversation + optional CSAT request |
| POST | `/conversations/:id/assign` | ConversationService | Firestore | Assign to agent |
| **Messages** | | | | |
| GET | `/conversations/:id/messages` | MessageService | Firestore | Paginated message history |
| POST | `/messages/:id/internal-note` | MessageService | Firestore | Add internal note |
| **Visitors** | | | | |
| GET | `/visitors` | VisitorService | Firestore | List visitors (online, recent) |
| GET | `/visitors/:id` | VisitorService | Firestore | Visitor profile + Shopify data |
| GET | `/visitors/:id/orders` | VisitorService | Shopify API | Fetch visitor's Shopify orders |
| **Knowledge Base** | | | | |
| GET | `/articles` | ArticleService | Firestore | List KB articles |
| POST | `/articles` | ArticleService | Firestore | Create article (triggers embedding) |
| PUT | `/articles/:id` | ArticleService | Firestore | Update article |
| DELETE | `/articles/:id` | ArticleService | Firestore | Archive article |
| POST | `/articles/import` | ArticleService | Firestore | Bulk import articles |
| **Tickets** | | | | |
| GET | `/tickets` | TicketService | Firestore | List tickets |
| POST | `/tickets` | TicketService | Firestore | Create ticket |
| PATCH | `/tickets/:id` | TicketService | Firestore | Update ticket |
| **Automations** | | | | |
| GET | `/automations` | AutomationService | Firestore | List automations |
| POST | `/automations` | AutomationService | Firestore | Create automation rule |
| PUT | `/automations/:id` | AutomationService | Firestore | Update automation |
| DELETE | `/automations/:id` | AutomationService | Firestore | Delete automation |
| **AI Config** | | | | |
| GET | `/ai/config` | AiConfigService | Firestore | Get AI settings |
| PUT | `/ai/config` | AiConfigService | Firestore | Update AI settings |
| POST | `/ai/test` | AiService | LLM API | Test AI reply with sample question |
| GET | `/ai/usage` | AiConfigService | Firestore + BigQuery | AI usage stats |
| **Analytics** | | | | |
| GET | `/analytics/overview` | AnalyticsService | Firestore (daily aggs) | Dashboard overview (7d/30d) |
| GET | `/analytics/conversations` | AnalyticsService | **BigQuery** | Conversation analytics (custom range) |
| GET | `/analytics/agents` | AnalyticsService | **BigQuery** | Agent performance report |
| GET | `/analytics/ai` | AnalyticsService | **BigQuery** | AI performance (resolution rate, confidence) |
| GET | `/analytics/revenue` | AnalyticsService | **BigQuery** | Revenue attribution report |
| GET | `/analytics/export` | AnalyticsService | **BigQuery** | CSV export of analytics data |
| **Settings** | | | | |
| GET | `/settings` | ShopService | Firestore | Get shop settings |
| PUT | `/settings` | ShopService | Firestore | Update settings |
| PUT | `/settings/widget` | ShopService | Firestore | Widget appearance settings |
| PUT | `/settings/channels` | ShopService | Firestore | Channel configuration |
| GET | `/settings/agents` | ShopService | Firestore | List team members |
| POST | `/settings/agents/invite` | ShopService | Firestore | Invite agent |

### Widget API (`/widget/v1/`)

| Method | Endpoint | Service | Data Source | Description |
|---|---|---|---|---|
| POST | `/init` | WidgetService | Firestore + Redis | Initialize widget session, return config |
| POST | `/conversations` | ConversationService | Firestore | Start new conversation |
| POST | `/conversations/:id/messages` | MessageService | Firestore | Send visitor message |
| GET | `/conversations/:id/messages` | MessageService | Firestore | Load message history |
| POST | `/conversations/:id/typing` | WidgetService | Redis (pub/sub) | Typing indicator |
| POST | `/conversations/:id/csat` | ConversationService | Firestore | Submit CSAT rating |
| GET | `/articles/search` | ArticleService | Firestore | Search FAQ articles |
| POST | `/upload` | UploadService | GCS | Upload attachment (signed URL) |
| POST | `/track` | TrackingService | Firestore + Redis | Page view / cart update |

### Webhook Endpoints (`/webhooks/`)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/shopify` | HMAC-SHA256 | All Shopify webhooks (topic in header) |
| POST | `/whatsapp` | API key | WhatsApp Business API callbacks |
| POST | `/messenger` | Verify token | Facebook Messenger webhooks |
| POST | `/instagram` | Verify token | Instagram DM webhooks |

---

## 17. Frontend Component Tree

### Tech Stack
- **Framework:** React 18
- **UI Library:** Shopify Polaris 12
- **State Management:** React Query (TanStack Query) for server state; Zustand for UI state
- **Routing:** React Router v6 (inside App Bridge)
- **Real-time:** Firebase SDK (onSnapshot)

### Page Structure

```
<AppBridgeProvider>
  <PolarisProvider>
    <QueryClientProvider>
      <Router>
        ├── <DashboardPage />
        │   ├── <OverviewCards />           # Conversations today, AI resolutions, revenue
        │   ├── <ConversationChart />        # 7-day trend chart
        │   ├── <RecentConversations />      # Last 5 conversations
        │   ├── <OnlineVisitors />           # Currently online visitors
        │   └── <QuickActions />             # Enable AI, add FAQ, customize widget
        │
        ├── <ConversationsPage />
        │   ├── <ConversationSidebar />
        │   │   ├── <ConversationFilters />  # Status, channel, agent, tags
        │   │   ├── <SearchBar />
        │   │   └── <ConversationList />     # Scrollable conversation list
        │   │       └── <ConversationItem /> # Preview: name, last msg, time, channel icon
        │   ├── <ConversationPanel />
        │   │   ├── <ConversationHeader />   # Visitor name, status, assign button
        │   │   ├── <MessageThread />        # Scrollable messages
        │   │   │   ├── <MessageBubble />    # Text, attachments, product cards
        │   │   │   ├── <AIBadge />          # AI-generated indicator
        │   │   │   ├── <InternalNote />     # Agent internal notes
        │   │   │   └── <SystemMessage />    # Assignment changes, status changes
        │   │   ├── <MessageComposer />
        │   │   │   ├── <RichTextEditor />
        │   │   │   ├── <AttachmentButton />
        │   │   │   ├── <ProductPicker />    # Insert product card
        │   │   │   ├── <CannedResponses />  # Quick insert macros
        │   │   │   └── <AIAssistButton />   # Generate AI draft
        │   │   └── <QuickResolve />         # Resolve + CSAT buttons
        │   └── <VisitorDetailPanel />
        │       ├── <VisitorInfo />          # Name, email, location, device
        │       ├── <CartPreview />          # Current cart contents
        │       ├── <OrderHistory />         # Recent Shopify orders
        │       ├── <ConversationHistory />  # Previous conversations
        │       ├── <VisitorTags />          # Editable tags
        │       └── <CustomFields />
        │
        ├── <KnowledgeBasePage />
        │   ├── <KBHeader />                # Search, filter by category, create button
        │   ├── <CategorySidebar />         # Category tree
        │   ├── <ArticleList />             # Article grid/list
        │   │   └── <ArticleCard />         # Title, status, views, helpful %
        │   └── <ArticleEditor />           # (Route: /kb/:id/edit)
        │       ├── <TitleInput />
        │       ├── <RichTextEditor />       # Markdown/WYSIWYG
        │       ├── <CategorySelector />
        │       ├── <TagInput />
        │       ├── <SEOFields />           # Title, description, slug
        │       └── <PublishControls />     # Draft / Published / Archive
        │
        ├── <SettingsPage />
        │   ├── <SettingsTabs />
        │   │   ├── <GeneralSettings />      # Brand name, operating hours, language
        │   │   ├── <WidgetSettings />
        │   │   │   ├── <WidgetPreview />    # Live preview
        │   │   │   ├── <ColorPicker />
        │   │   │   ├── <PositionSelector />
        │   │   │   ├── <WelcomeMessage />
        │   │   │   └── <BrandingToggle />
        │   │   ├── <AISettings />
        │   │   │   ├── <ModelSelector />
        │   │   │   ├── <PersonaConfig />    # Name, tone
        │   │   │   ├── <CustomInstructions />
        │   │   │   ├── <CapabilityToggles />
        │   │   │   ├── <HandoffThreshold />
        │   │   │   ├── <AITestPanel />      # Test AI with sample questions
        │   │   │   └── <UsageMeter />       # Token usage, cost
        │   │   ├── <ChannelSettings />
        │   │   │   ├── <EmailConfig />
        │   │   │   ├── <WhatsAppConfig />
        │   │   │   ├── <MessengerConfig />
        │   │   │   └── <InstagramConfig />
        │   │   ├── <TeamSettings />
        │   │   │   ├── <AgentList />
        │   │   │   └── <InviteAgent />
        │   │   ├── <AutomationSettings />
        │   │   │   ├── <AutomationList />
        │   │   │   └── <AutomationBuilder />
        │   │   │       ├── <TriggerSelector />
        │   │   │       ├── <ConditionBuilder />
        │   │   │       └── <ActionSelector />
        │   │   └── <BillingSettings />
        │   │       ├── <CurrentPlan />
        │   │       ├── <PlanComparison />
        │   │       └── <UsageOverview />
        │
        └── <AnalyticsPage />
            ├── <DateRangePicker />
            ├── <AnalyticsTabs />
            │   ├── <OverviewTab />
            │   │   ├── <KPICards />         # Total convos, resolution time, CSAT, revenue
            │   │   ├── <ConversationTrendChart />
            │   │   ├── <ChannelBreakdown />
            │   │   └── <RevenueAttribution />
            │   ├── <AITab />
            │   │   ├── <AIResolutionRate />
            │   │   ├── <AIConfidenceDistribution />
            │   │   ├── <TopAITopics />
            │   │   └── <AIHandoffReasons />
            │   ├── <AgentsTab />
            │   │   ├── <AgentPerformanceTable />
            │   │   ├── <ResponseTimeChart />
            │   │   └── <CSATByAgent />
            │   └── <RevenueTab />
            │       ├── <RevenueOverTime />
            │       ├── <AttributionBreakdown />  # Direct / Assisted / Influenced
            │       ├── <TopConvertingTopics />
            │       └── <ROICalculator />          # "Chatty generated $X in sales"
            └── <ExportButton />
      </Router>
    </QueryClientProvider>
  </PolarisProvider>
</AppBridgeProvider>
```

---

## 18. Storefront Widget

### Tech Stack
- **Framework:** Preact (3KB gzipped — React-compatible, 1/10th the size)
- **Styling:** CSS-in-JS (no external CSS framework)
- **Build:** Vite with Rollup, tree-shaking, code splitting
- **Target:** ES2018+ (covers 95%+ of browsers)

### Widget Architecture

```
chatty-loader.js (2KB)        # Loader: check config, lazy-load main bundle
       │
       ▼ (dynamic import)
chatty-widget.js (13KB gz)    # Main widget: UI + chat logic
       │
       ▼ (on first chat open)
chatty-ws.js (3KB gz)         # WebSocket client (loaded on demand)
```

### Component Tree

```
<ChattyWidget>
  ├── <WidgetBubble />           # Floating chat button (always visible)
  │   ├── <UnreadBadge />        # Unread message count
  │   └── <PulseAnimation />     # Attention animation (configurable)
  │
  └── <ChatWindow />             # Opens on click (animated slide-up)
      ├── <ChatHeader />
      │   ├── <BrandInfo />      # Logo, name, "Online" / "Away"
      │   ├── <MinimizeButton />
      │   └── <CloseButton />
      │
      ├── <ChatTabs />           # "Chat" | "FAQ" toggle
      │
      ├── <FAQPanel />           # (when FAQ tab active)
      │   ├── <FAQSearch />
      │   ├── <CategoryList />
      │   └── <ArticleView />
      │
      ├── <ChatPanel />          # (when Chat tab active)
      │   ├── <WelcomeMessage />  # Initial greeting
      │   ├── <MessageList />
      │   │   ├── <VisitorMessage />
      │   │   ├── <AgentMessage />
      │   │   ├── <AIMessage />
      │   │   ├── <ProductCard />   # Clickable product recommendation
      │   │   ├── <OrderCard />     # Order status display
      │   │   └── <QuickReplies />  # Tap-to-send suggested replies
      │   ├── <TypingIndicator />
      │   └── <MessageInput />
      │       ├── <TextArea />     # Auto-growing textarea
      │       ├── <AttachButton /> # File upload
      │       ├── <EmojiButton />
      │       └── <SendButton />
      │
      ├── <PreChatForm />        # Name, email (if required)
      └── <CSATPrompt />         # Post-resolution rating
```

### Performance Optimizations

| Optimization | Implementation |
|---|---|
| Deferred loading | `<script defer>` — widget loads after page content |
| Lazy bundle | Main widget bundle loaded only when bubble clicked |
| WebSocket on demand | WS connection established only when chat opens |
| Shadow DOM | Widget styles isolated; no CSS conflicts with store theme |
| Minimal DOM | Preact virtual DOM; only ~50 DOM nodes when closed |
| Asset preconnect | `<link rel="preconnect" href="https://widget.chatty.net">` |
| Service Worker | Cache widget assets for instant subsequent loads |
| No external fonts | System font stack only |

### Widget Initialization

```javascript
// chatty-loader.js — injected via Theme App Extension
(function() {
  var s = document.getElementById('chatty-widget-root');
  if (!s) return;

  var shopId = s.dataset.shopId;

  // Fetch widget config (cached by Cloudflare)
  fetch('https://widget.chatty.net/v1/config/' + shopId)
    .then(function(r) { return r.json(); })
    .then(function(config) {
      if (!config.data.widgetEnabled) return;

      // Lazy load main widget
      var script = document.createElement('script');
      script.src = 'https://widget.chatty.net/v1/chatty-widget.' + config.data.version + '.js';
      script.defer = true;
      document.body.appendChild(script);
    });
})();
```

### Data Flow (Widget ↔ Backend)

```
Page Load:
  1. Loader fetches /widget/v1/config/{shopId} (Cloudflare cached, 1min)
  2. Widget renders bubble with brand colors
  3. Track page view → POST /widget/v1/track

Chat Open:
  1. POST /widget/v1/init → session token + visitor data + recent messages
  2. Establish WebSocket connection (wss://ws.chatty.net)
  3. Subscribe to conversation events

Message Send:
  1. POST /widget/v1/conversations/{id}/messages
  2. Optimistic UI update (show message immediately)
  3. Server processes → AI evaluates → reply via WebSocket

Cart Update (passive tracking):
  1. Listen to Shopify cart AJAX events
  2. POST /widget/v1/track { type: "cart.update", items: [...] }
  3. Available to agent in VisitorDetailPanel
```

---

## Appendix: Repository Class Map

| Collection | Repository Class | Key Methods |
|---|---|---|
| `shops` | `ShopRepository` | `getByShopId`, `upsert`, `updateSettings`, `updatePlan` |
| `conversations` | `ConversationRepository` | `create`, `getById`, `list`, `updateStatus`, `assign`, `addTag` |
| `messages` | `MessageRepository` | `create`, `listByConversation`, `markRead` |
| `visitors` | `VisitorRepository` | `upsert`, `getById`, `getByShopifyCustomerId`, `updatePresence` |
| `articles` | `ArticleRepository` | `create`, `update`, `delete`, `listByShop`, `search` |
| `tickets` | `TicketRepository` | `create`, `update`, `list`, `assign` |
| `automations` | `AutomationRepository` | `create`, `update`, `delete`, `listEnabled` |
| `aiConfigs` | `AiConfigRepository` | `get`, `update`, `incrementUsage` |
| `analytics` | `AnalyticsRepository` | `getDailyStats`, `upsertDaily`, `getRange` |
