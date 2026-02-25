# Chatty — Implementation Checklist

**Ordered by dependency. Granular enough for AI coding agents.**
**Tech stack:** Node.js, Firebase Functions, Firestore, React, Polaris v12+, Cloud Run, Pub/Sub, Cloud Tasks, BigQuery, Mixpanel, Cloudflare
**Pattern:** handlers (orchestrate) → services (logic) → repositories (1 per collection)
**Response format:** `{success, data, error}`

---

## Legend

- 🔴 = Blocking dependency (must complete before downstream tasks)
- 🟡 = Soft dependency (can parallel with care)
- 🟢 = Independent (can start anytime within phase)
- **[MP]** = Includes Mixpanel tracking task
- **[BQ]** = Includes BigQuery pipeline task

---

## Phase 1 — MVP (Months 1–3)

### 1.0 Foundation & Infrastructure 🔴

- [ ] **1.0.1** Create Firebase project, configure Firestore (production + staging)
- [ ] **1.0.2** Set up Cloud Run service scaffold (Node.js, Dockerfile, cloudbuild.yaml)
- [ ] **1.0.3** Configure Cloudflare CDN for widget assets + API proxy
- [ ] **1.0.4** Set up Pub/Sub topics: `chat-messages`, `ai-requests`, `analytics-events`, `webhooks`
- [ ] **1.0.5** Set up Cloud Tasks queues: `ai-processing`, `email-notifications`, `webhook-delivery`
- [ ] **1.0.6** Create CI/CD pipeline (GitHub Actions → Cloud Build → Cloud Run)
- [ ] **1.0.7** Set up Mixpanel project (server-side + client-side tokens, environments) **[MP]**
- [ ] **1.0.8** Set up BigQuery dataset: `chatty_analytics` with tables for events, conversations, AI metrics **[BQ]**
- [ ] **1.0.9** Create shared error handling middleware (`{success, data, error}` format)
- [ ] **1.0.10** Set up logging (Cloud Logging) and error tracking (Sentry or equivalent)

### 1.1 Shopify App Scaffold 🔴

- [ ] **1.1.1** Shopify app registration (Partner Dashboard, API keys, scopes)
- [ ] **1.1.2** `handlers/auth.handler.js` — OAuth install flow (Shopify App Bridge)
- [ ] **1.1.3** `services/auth.service.js` — Token exchange, session management
- [ ] **1.1.4** `repositories/shop.repository.js` — Firestore `shops` collection (shop domain, access token, plan, settings)
- [ ] **1.1.5** `handlers/webhook.handler.js` — Shopify webhook registration (app/uninstalled, orders/*, products/*, customers/*)
- [ ] **1.1.6** `services/webhook.service.js` — Webhook verification + routing to relevant services
- [ ] **1.1.7** `services/shop.service.js` — Shop data sync (products, policies, store info)
- [ ] **1.1.8** `repositories/product.repository.js` — Firestore `products` subcollection (catalog mirror for AI)
- [ ] **1.1.9** Shopify App Bridge v4 setup in React frontend
- [ ] **1.1.10** Track `app_installed`, `app_uninstalled` events **[MP]**

### 1.2 Firestore Data Model 🔴

- [ ] **1.2.1** `shops/{shopId}` — Shop config, settings, plan, widget config
- [ ] **1.2.2** `shops/{shopId}/agents/{agentId}` — Team member profiles, roles
- [ ] **1.2.3** `shops/{shopId}/conversations/{conversationId}` — Conversation metadata (status, channel, assigned agent, customer, tags)
- [ ] **1.2.4** `shops/{shopId}/conversations/{conversationId}/messages/{messageId}` — Individual messages (sender, content, type, timestamp, AI metadata)
- [ ] **1.2.5** `shops/{shopId}/customers/{customerId}` — Customer profiles (Shopify customer ID, email, order count, lifetime value)
- [ ] **1.2.6** `shops/{shopId}/faqs/{faqId}` — FAQ entries (question, answer, category, embedding)
- [ ] **1.2.7** `shops/{shopId}/products/{productId}` — Product mirror (title, description, price, images, variants, tags)
- [ ] **1.2.8** `shops/{shopId}/cannedResponses/{responseId}` — Macros/templates
- [ ] **1.2.9** `shops/{shopId}/triggers/{triggerId}` — Proactive trigger configs
- [ ] **1.2.10** Firestore security rules + indexes
- [ ] **1.2.11** `shops/{shopId}/analytics/{date}` — Daily aggregate counters

### 1.3 Chat Widget (Storefront) 🟡 (depends on 1.0, 1.1)

- [ ] **1.3.1** Shopify Theme App Extension (app block + app embed)
- [ ] **1.3.2** Widget JS bundle — Preact/lightweight framework, <50KB gzipped
- [ ] **1.3.3** Widget UI: chat bubble, open/close animation, message list, input field
- [ ] **1.3.4** Widget UI: customizable colors, position (left/right), welcome message
- [ ] **1.3.5** Widget UI: pre-chat form (name, email — configurable fields)
- [ ] **1.3.6** Widget UI: offline state (collect email, show operating hours)
- [ ] **1.3.7** Widget UI: typing indicator, read receipts, timestamps
- [ ] **1.3.8** Widget UI: file/image upload in chat
- [ ] **1.3.9** Widget UI: product cards (image, title, price, "Add to cart" button)
- [ ] **1.3.10** Widget UI: FAQ search panel (in-widget)
- [ ] **1.3.11** Widget UI: satisfaction rating prompt (post-chat, Phase 1 = simple thumbs up/down)
- [ ] **1.3.12** Real-time connection: WebSocket or Firestore onSnapshot for live messages
- [ ] **1.3.13** Widget context collection: current page URL, cart contents (Shopify AJAX API), customer ID (if logged in)
- [ ] **1.3.14** Chatty branding footer (removable on Starter+)
- [ ] **1.3.15** Performance: lazy-load widget, defer until user interaction or timer
- [ ] **1.3.16** Track widget events: `chat_started`, `chat_message_sent` **[MP]**

### 1.4 Real-Time Chat Backend 🔴 (depends on 1.0, 1.2)

- [ ] **1.4.1** `handlers/chat.handler.js` — WebSocket/SSE connection management OR Firestore real-time listeners
- [ ] **1.4.2** `services/chat.service.js` — Message routing (customer → AI or agent), conversation lifecycle
- [ ] **1.4.3** `services/conversation.service.js` — Create, assign, close, reopen conversations
- [ ] **1.4.4** `repositories/conversation.repository.js` — CRUD for conversations + messages
- [ ] **1.4.5** `repositories/customer.repository.js` — Customer profile upsert, Shopify data enrichment
- [ ] **1.4.6** `services/notification.service.js` — Push notifications to agents (FCM / web push)
- [ ] **1.4.7** Message delivery guarantees: retry logic, dedup, ordering
- [ ] **1.4.8** Rate limiting per visitor (anti-spam)
- [ ] **1.4.9** Track `chat_started`, `chat_message_sent`, `ai_handoff_to_human` **[MP]**

### 1.5 AI Chatbot Engine 🟡 (depends on 1.2, 1.4)

- [ ] **1.5.1** `services/ai.service.js` — LLM orchestration (OpenAI GPT-4o / Anthropic Claude API)
- [ ] **1.5.2** `services/ai-training.service.js` — Auto-ingest product catalog into vector embeddings
- [ ] **1.5.3** `services/ai-training.service.js` — Ingest store policies (shipping, returns, about) from Shopify
- [ ] **1.5.4** `services/ai-training.service.js` — Ingest FAQ entries into vector store
- [ ] **1.5.5** Vector store setup (Firestore vector search or Pinecone) for RAG retrieval
- [ ] **1.5.6** `services/ai.service.js` — RAG pipeline: embed query → retrieve context → generate response
- [ ] **1.5.7** `services/ai.service.js` — Product recommendation logic (match customer intent → product attributes → return product cards)
- [ ] **1.5.8** `services/ai.service.js` — Confidence scoring (high/medium/low) per response
- [ ] **1.5.9** `services/ai.service.js` — Human handoff trigger (low confidence, customer requests human, sensitive topics)
- [ ] **1.5.10** `services/ai.service.js` — Context injection: cart contents, current page, customer history
- [ ] **1.5.11** `services/ai.service.js` — Response guardrails: no pricing hallucination, no inventory lies, polite tone enforcement
- [ ] **1.5.12** AI conversation counter per shop per billing period (for plan limits)
- [ ] **1.5.13** Pub/Sub consumer for async AI processing (non-blocking chat)
- [ ] **1.5.14** Track `ai_response_generated`, `ai_product_recommended`, `ai_handoff_to_human`, `faq_matched` **[MP]**

### 1.6 Shopify Data Integration 🟡 (depends on 1.1)

- [ ] **1.6.1** `services/shopify-sync.service.js` — Full product catalog sync (on install + daily cron)
- [ ] **1.6.2** `services/shopify-sync.service.js` — Incremental product sync via webhooks (products/create, update, delete)
- [ ] **1.6.3** `services/shopify-data.service.js` — Fetch customer profile by email/ID (orders, lifetime value, tags)
- [ ] **1.6.4** `services/shopify-data.service.js` — Fetch order details (status, tracking, line items)
- [ ] **1.6.5** `services/shopify-data.service.js` — Fetch cart contents via Storefront API (for widget context)
- [ ] **1.6.6** `services/shopify-data.service.js` — Discount code application (create/send price rule)
- [ ] **1.6.7** Webhook handlers for order events (orders/create → update customer profile + AI context)
- [ ] **1.6.8** GraphQL Admin API client with rate limit handling + retry

### 1.7 Agent Dashboard (Shopify Admin Embedded App) 🟡 (depends on 1.1, 1.4)

- [ ] **1.7.1** React app scaffold with Shopify Polaris v12+ and App Bridge v4
- [ ] **1.7.2** **Inbox page** — Conversation list (open/closed/all), real-time updates, unread badges
- [ ] **1.7.3** **Conversation view** — Message thread, reply composer, file upload
- [ ] **1.7.4** **Customer sidebar** — Profile, order history, cart contents, lifetime value, Shopify admin link
- [ ] **1.7.5** **Canned responses** — CRUD for macros, quick-insert in composer
- [ ] **1.7.6** **FAQ manager** — CRUD for FAQ entries, categories, bulk import
- [ ] **1.7.7** **Proactive triggers** — Configure triggers (page URL match, time on page, cart value threshold, exit intent)
- [ ] **1.7.8** **Widget settings** — Colors, position, welcome message, operating hours, pre-chat form config
- [ ] **1.7.9** **Analytics page** — Charts: total chats, AI vs human, response time, resolution rate (daily/weekly/monthly)
- [ ] **1.7.10** **Team management** — Invite agents, assign roles (admin/agent), manage seats
- [ ] **1.7.11** **Billing page** — Current plan, usage (AI convos), upgrade/downgrade, Shopify billing API integration

### 1.8 Proactive Chat Triggers 🟢 (depends on 1.3, 1.4)

- [ ] **1.8.1** `services/trigger.service.js` — Evaluate trigger conditions against visitor context
- [ ] **1.8.2** `repositories/trigger.repository.js` — CRUD for trigger configs
- [ ] **1.8.3** Widget-side trigger evaluation (time on page, exit intent, scroll depth)
- [ ] **1.8.4** Server-side trigger evaluation (cart value, customer segment, page URL pattern)
- [ ] **1.8.5** Trigger display: auto-open widget with message, product card, or discount offer
- [ ] **1.8.6** Trigger frequency capping (don't re-trigger same visitor within session)
- [ ] **1.8.7** Track `proactive_trigger_fired` **[MP]**

### 1.9 Email Channel (Basic) 🟢 (depends on 1.4)

- [ ] **1.9.1** `services/email.service.js` — Receive emails via inbound webhook (SendGrid/Mailgun)
- [ ] **1.9.2** `services/email.service.js` — Convert email to conversation in unified inbox
- [ ] **1.9.3** `services/email.service.js` — Send reply emails from inbox (agent reply → email to customer)
- [ ] **1.9.4** Email threading (group by subject/conversation ID)
- [ ] **1.9.5** Email template (branded, with store logo)

### 1.10 Billing & Plans 🟡 (depends on 1.1)

- [ ] **1.10.1** `services/billing.service.js` — Shopify Billing API integration (recurring charges)
- [ ] **1.10.2** `services/billing.service.js` — Plan definitions (Free, Starter), feature gating
- [ ] **1.10.3** `services/billing.service.js` — Usage tracking (AI conversations/mo), limit enforcement
- [ ] **1.10.4** `handlers/billing.handler.js` — Upgrade/downgrade/cancel flows
- [ ] **1.10.5** `services/billing.service.js` — Grace period on limit hit (soft limit → warning → hard block)
- [ ] **1.10.6** Track `plan_viewed`, `plan_upgrade_started`, `plan_upgraded`, `plan_downgraded`, `plan_cancelled`, `limit_reached`, `upgrade_prompt_shown`, `upgrade_prompt_clicked` **[MP]**

### 1.11 Onboarding Flow 🟢 (depends on 1.7)

- [ ] **1.11.1** Step 1: Welcome + store scan (auto-detect products, policies)
- [ ] **1.11.2** Step 2: Widget customization (colors, position — preview)
- [ ] **1.11.3** Step 3: AI setup (review auto-generated FAQ from policies, edit/confirm)
- [ ] **1.11.4** Step 4: Install widget (1-click theme app extension activation)
- [ ] **1.11.5** Step 5: Test chat (open storefront, send test message)
- [ ] **1.11.6** Onboarding progress persistence (resume if abandoned)
- [ ] **1.11.7** Track `onboarding_started`, `onboarding_step_completed`, `onboarding_completed`, `onboarding_abandoned`, `widget_installed`, `activation` **[MP]**

### 1.12 Mobile Agent Experience 🟢 (depends on 1.4, 1.7)

- [ ] **1.12.1** PWA manifest for dashboard (or React Native shell)
- [ ] **1.12.2** Push notifications (FCM) for new messages
- [ ] **1.12.3** Mobile-responsive inbox and conversation views
- [ ] **1.12.4** Quick reply from notification

### 1.13 Phase 1 Analytics Pipeline 🟢 (depends on 1.0.7, 1.0.8)

- [ ] **1.13.1** Mixpanel server-side SDK integration in Node.js backend **[MP]**
- [ ] **1.13.2** Mixpanel client-side SDK in widget (lightweight) **[MP]**
- [ ] **1.13.3** Mixpanel client-side SDK in dashboard (React) **[MP]**
- [ ] **1.13.4** BigQuery streaming inserts for conversation events **[BQ]**
- [ ] **1.13.5** BigQuery daily aggregation Cloud Task (conversation counts, AI metrics, revenue) **[BQ]**
- [ ] **1.13.6** User properties sync to Mixpanel (shop plan, products count, monthly orders) **[MP]**

---

## Phase 2 — Growth (Months 4–9)

### 2.0 Advanced AI 🔴

- [ ] **2.0.1** `services/ai-recommendation.service.js` — Product recommendations from browsing behavior (pages visited, time spent)
- [ ] **2.0.2** `services/ai-recommendation.service.js` — Recommendations from purchase history (complementary products, repurchase timing)
- [ ] **2.0.3** `services/ai-attribution.service.js` — Revenue attribution: link orders to prior AI conversations (24h window)
- [ ] **2.0.4** `repositories/attribution.repository.js` — Firestore `attributions` collection (conversation_id, order_id, order_value, products)
- [ ] **2.0.5** `services/ai.service.js` — Multi-language support (detect language → respond in same language, top 5: EN, ES, FR, DE, PT)
- [ ] **2.0.6** `services/ai.service.js` — AI confidence review queue (low-confidence responses flagged for merchant review)
- [ ] **2.0.7** `services/ai.service.js` — AI learning feedback loop (merchant approves/rejects AI responses → improve future accuracy)
- [ ] **2.0.8** Track `ai_attributed_sale`, `cart_recovery_initiated`, `cart_recovered` **[MP]**
- [ ] **2.0.9** BigQuery pipeline for AI attribution analytics **[BQ]**

### 2.1 Knowledge Base 🟡

- [ ] **2.1.1** `repositories/article.repository.js` — Firestore `articles` collection (title, body, category, slug, SEO metadata)
- [ ] **2.1.2** `services/kb.service.js` — Article CRUD, category management, reordering
- [ ] **2.1.3** `handlers/kb-public.handler.js` — Public KB page rendering (SSR or static generation for SEO)
- [ ] **2.1.4** KB frontend: article list, category navigation, search, breadcrumbs
- [ ] **2.1.5** KB SEO: meta tags, structured data, sitemap generation, clean URLs
- [ ] **2.1.6** In-widget KB search: search articles from chat widget
- [ ] **2.1.7** AI integration: auto-ingest KB articles into vector store for RAG
- [ ] **2.1.8** Article analytics: views, helpfulness ratings, search queries
- [ ] **2.1.9** Dashboard: KB manager page in Polaris
- [ ] **2.1.10** Track `kb_article_created`, `kb_article_viewed` **[MP]**

### 2.2 Ticketing System 🟡

- [ ] **2.2.1** Extend `conversations` schema: add `type` (chat/ticket), `priority` (low/medium/high/urgent), `status` (open/pending/resolved/closed), `sla_due_at`
- [ ] **2.2.2** `services/ticket.service.js` — Ticket lifecycle (create from chat, email, or manual; status transitions; resolution)
- [ ] **2.2.3** `services/routing.service.js` — Auto-assignment rules (round-robin, by topic, by language, by customer segment)
- [ ] **2.2.4** `repositories/rule.repository.js` — Routing rule configs
- [ ] **2.2.5** Dashboard: Ticket queue view (filterable by status, priority, assigned agent)
- [ ] **2.2.6** Dashboard: Ticket detail view (full thread, internal notes, status controls)
- [ ] **2.2.7** Collision detection: show "Agent X is viewing this" via Firestore presence
- [ ] **2.2.8** Internal notes: messages visible only to agents within conversation thread
- [ ] **2.2.9** Conversation merge: combine duplicate conversations about same issue
- [ ] **2.2.10** Track `ticket_created`, `ticket_resolved` **[MP]**

### 2.3 CSAT & Agent Analytics 🟢

- [ ] **2.3.1** `services/csat.service.js` — Post-chat survey trigger (1–5 stars + optional comment)
- [ ] **2.3.2** `repositories/csat.repository.js` — CSAT responses collection
- [ ] **2.3.3** Widget: CSAT prompt UI (after conversation closed)
- [ ] **2.3.4** Dashboard: Agent performance page (response time, resolution time, CSAT per agent, conversations handled)
- [ ] **2.3.5** Dashboard: CSAT overview (avg rating, trend, by channel, by AI vs human)
- [ ] **2.3.6** Track `csat_submitted` **[MP]**
- [ ] **2.3.7** BigQuery: agent performance aggregation pipeline **[BQ]**

### 2.4 Automation Workflows 🟡

- [ ] **2.4.1** `services/workflow.service.js` — Workflow engine (evaluate triggers → execute actions)
- [ ] **2.4.2** `repositories/workflow.repository.js` — Workflow configs (trigger, conditions, actions)
- [ ] **2.4.3** Triggers: new conversation, keyword match, customer segment, channel, time-based
- [ ] **2.4.4** Conditions: if/else branching (customer tag, order count, cart value, language)
- [ ] **2.4.5** Actions: auto-reply, assign agent, add tag, set priority, send to AI, close conversation
- [ ] **2.4.6** Dashboard: Visual workflow builder (drag-and-drop nodes/edges in React)
- [ ] **2.4.7** Workflow execution logging (for debugging)
- [ ] **2.4.8** Track `workflow_created`, `workflow_triggered` **[MP]**

### 2.5 Multi-Channel: WhatsApp, Messenger, Instagram 🟡

- [ ] **2.5.1** `services/channel-whatsapp.service.js` — WhatsApp Business API integration (send/receive messages)
- [ ] **2.5.2** `services/channel-messenger.service.js` — Facebook Messenger webhook + send API
- [ ] **2.5.3** `services/channel-instagram.service.js` — Instagram DM webhook + send API
- [ ] **2.5.4** `services/channel.service.js` — Unified channel abstraction (normalize messages across channels)
- [ ] **2.5.5** Dashboard: Channel connection settings (OAuth flows for FB/IG, WhatsApp number setup)
- [ ] **2.5.6** Inbox: Channel source badge on conversations (web/email/whatsapp/messenger/instagram)
- [ ] **2.5.7** Widget-equivalent rich messages per channel (product cards via WhatsApp templates, etc.)
- [ ] **2.5.8** Track channel-specific events with `channel` property on all chat events **[MP]**

### 2.6 Revenue Dashboard 🟢

- [ ] **2.6.1** Dashboard: AI-attributed revenue chart (daily/weekly/monthly)
- [ ] **2.6.2** Dashboard: Conversion rate from AI conversations
- [ ] **2.6.3** Dashboard: Average order value from AI-assisted vs non-assisted
- [ ] **2.6.4** Dashboard: Top AI-recommended products by conversion
- [ ] **2.6.5** Dashboard: Cart recovery stats (attempts, recoveries, revenue)
- [ ] **2.6.6** BigQuery: Revenue attribution materialized views **[BQ]**

### 2.7 Pro Plan & Billing Updates 🟢

- [ ] **2.7.1** Add Pro plan to Shopify Billing API ($49–79/mo)
- [ ] **2.7.2** Feature gating for Pro features (KB, CSAT, workflows, advanced analytics, revenue dashboard)
- [ ] **2.7.3** Annual billing discount (20% off)
- [ ] **2.7.4** Upgrade prompts when Pro features are attempted on Starter/Free
- [ ] **2.7.5** Trial mechanism for Pro plan (14 days)
- [ ] **2.7.6** Track `trial_started`, `trial_converted`, `trial_expired` **[MP]**

### 2.8 Migration Tools 🟢

- [ ] **2.8.1** `services/migration-tidio.service.js` — Import Tidio conversations and contacts via export CSV
- [ ] **2.8.2** Dashboard: Migration wizard (upload export file, map fields, preview, import)

---

## Phase 3 — Platform (Months 10–18)

### 3.0 AI Agent Workflows (Autonomous Actions) 🔴

- [ ] **3.0.1** `services/ai-actions.service.js` — Define available AI actions (check order status, process return, issue refund, cancel order, update shipping address)
- [ ] **3.0.2** `services/ai-actions.service.js` — Merchant-configurable guardrails (max refund amount, require approval above $X, allowed actions toggle)
- [ ] **3.0.3** `services/shopify-actions.service.js` — Execute Shopify mutations (refund order, cancel order, update order) via Admin API
- [ ] **3.0.4** AI action confirmation UX: "I can process a refund of $X for order #Y. Shall I proceed?" → customer confirms → execute
- [ ] **3.0.5** Action audit log (who/what/when for every AI-initiated action)
- [ ] **3.0.6** Dashboard: AI actions config page (enable/disable per action, set limits)
- [ ] **3.0.7** Dashboard: AI action history/audit page

### 3.1 Enterprise Features 🟡

- [ ] **3.1.1** `services/sso.service.js` — SAML/OAuth SSO integration
- [ ] **3.1.2** `services/rbac.service.js` — Custom roles and permissions engine
- [ ] **3.1.3** `repositories/role.repository.js` — Roles collection (permissions matrix)
- [ ] **3.1.4** Dashboard: Roles & permissions management page
- [ ] **3.1.5** Multi-store: shared dashboard with store switcher, per-store or unified inbox
- [ ] **3.1.6** `services/audit.service.js` — Audit log for all admin actions
- [ ] **3.1.7** `repositories/audit.repository.js` — Audit events collection
- [ ] **3.1.8** Dashboard: Audit log viewer (filterable, exportable)
- [ ] **3.1.9** Data export: full conversation history + customer data (CSV/JSON)

### 3.2 API & Webhooks 🟡

- [ ] **3.2.1** `handlers/api-v1.handler.js` — Public REST API (conversations, customers, messages, analytics)
- [ ] **3.2.2** API authentication (API key per shop, rate limiting)
- [ ] **3.2.3** API documentation (OpenAPI/Swagger)
- [ ] **3.2.4** `services/webhook-outbound.service.js` — Outbound webhooks (new conversation, message, ticket status change)
- [ ] **3.2.5** Dashboard: API key management, webhook endpoint configuration
- [ ] **3.2.6** Shopify Flow integration: custom triggers + actions

### 3.3 Advanced Analytics 🟡

- [ ] **3.3.1** Dashboard: Custom report builder (select metrics, dimensions, date range, filters)
- [ ] **3.3.2** BigQuery: scheduled query pipeline for advanced analytics **[BQ]**
- [ ] **3.3.3** BigQuery export: allow merchants to connect their own BigQuery for raw data **[BQ]**
- [ ] **3.3.4** Dashboard: Real-time overview (active conversations, agents online, queue depth)
- [ ] **3.3.5** Dashboard: Cohort analysis (retention by install date, plan upgrade timing)

### 3.4 Additional Channels 🟢

- [ ] **3.4.1** `services/channel-sms.service.js` — Twilio SMS integration
- [ ] **3.4.2** Dashboard: SMS channel setup (Twilio account connection, phone number config)

### 3.5 AI Vertical Models 🟢

- [ ] **3.5.1** `services/ai-vertical.service.js` — Industry detection (auto-classify store: fashion, beauty, electronics, food)
- [ ] **3.5.2** Vertical-specific prompt tuning (e.g., fashion: size matching, beauty: skin type → product)
- [ ] **3.5.3** Vertical-specific product attribute extraction and matching

### 3.6 Migration Tools (Extended) 🟢

- [ ] **3.6.1** `services/migration-gorgias.service.js` — Import Gorgias tickets, macros, rules via API
- [ ] **3.6.2** `services/migration-zendesk.service.js` — Import Zendesk tickets and articles via API
- [ ] **3.6.3** Dashboard: Extended migration wizard for each platform

### 3.7 Partner Integrations 🟢

- [ ] **3.7.1** Klaviyo integration: sync customer data, trigger flows from chat events
- [ ] **3.7.2** Judge.me integration: request review after positive chat resolution
- [ ] **3.7.3** ReCharge integration: subscription data in customer sidebar
- [ ] **3.7.4** Loop Returns integration: initiate return from chat

### 3.8 Enterprise Plan & Billing 🟢

- [ ] **3.8.1** Enterprise plan ($149+/mo) in Shopify Billing API
- [ ] **3.8.2** Feature gating for enterprise (SSO, multi-store, API, custom roles, audit logs)
- [ ] **3.8.3** Custom pricing negotiation flow for high-volume merchants
- [ ] **3.8.4** Dedicated CSM assignment workflow

### 3.9 Phase 3 Analytics & Tracking 🟢

- [ ] **3.9.1** Track enterprise-specific events: `sso_configured`, `api_key_created`, `webhook_configured`, `store_added` **[MP]**
- [ ] **3.9.2** Track integration events: `integration_connected`, `integration_synced` **[MP]**
- [ ] **3.9.3** Track AI action events: `ai_action_requested`, `ai_action_confirmed`, `ai_action_executed`, `ai_action_rejected` **[MP]**
- [ ] **3.9.4** BigQuery: enterprise analytics pipeline (multi-store aggregation) **[BQ]**

---

## Cross-Phase: Ongoing Tasks

### Testing
- [ ] Unit tests for all services (Jest, ≥80% coverage)
- [ ] Integration tests for Shopify API interactions (mock + live)
- [ ] E2E tests for critical flows: install → onboard → chat → AI response → upgrade (Playwright)
- [ ] Load testing: 1K concurrent conversations per shop, 100K total system conversations
- [ ] Widget performance testing: Lighthouse CI, <50KB budget, <100ms TTI

### Security
- [ ] Input sanitization on all user inputs (XSS, injection)
- [ ] Shopify webhook HMAC verification
- [ ] API rate limiting (per shop, per IP)
- [ ] PII handling: encrypt customer emails at rest, GDPR data deletion endpoint
- [ ] Content Security Policy headers for widget

### DevOps
- [ ] Staging environment (separate Firebase project, Cloud Run service)
- [ ] Blue-green deployments on Cloud Run
- [ ] Automated database backups (Firestore export to Cloud Storage, daily)
- [ ] Alerting: error rate >1%, latency p95 >3s, AI failure rate >5%
- [ ] Runbook for common incidents (API down, AI provider outage, Shopify webhook backlog)

### Documentation
- [ ] API documentation (internal + public)
- [ ] Merchant-facing help docs (setup guide, FAQ, troubleshooting)
- [ ] Architecture decision records (ADRs)
- [ ] Onboarding guide for new engineers

---

## Dependency Graph (Simplified)

```
1.0 Foundation ──┬──→ 1.1 Shopify Auth ──→ 1.2 Data Model ──┬──→ 1.4 Chat Backend ──→ 1.5 AI Engine
                 │                                            │         │
                 │                                            ├──→ 1.6 Shopify Data
                 │                                            │
                 └──→ 1.3 Widget ─────────────────────────────┘
                                                              │
                 1.7 Dashboard ←──────────────────────────────┘
                      │
                 1.10 Billing
                 1.11 Onboarding
                      │
              ┌───────┴──────────────────────┐
              ▼                              ▼
         Phase 2                        Phase 2
    2.0 Advanced AI                 2.1 Knowledge Base
    2.2 Ticketing                   2.4 Workflows
    2.3 CSAT                        2.5 Channels
    2.6 Revenue Dashboard
              │
              ▼
         Phase 3
    3.0 AI Actions     3.1 Enterprise
    3.2 API            3.3 Analytics
    3.4 Channels       3.5 Verticals
```
