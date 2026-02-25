# Chatty — Product Requirements Document

**Version:** 1.0
**Date:** 2026-02-22
**Product:** Chatty by Avada Group (chatty.net)
**Platform:** Shopify App Store

---

## 1. Problem Statement

Shopify SMB merchants (revenue $1K–$100K/mo) face an impossible trilemma:

1. **They can't afford dedicated support staff** — A single CS agent costs $3K+/mo
2. **Free tools don't sell** — Shopify Inbox and tawk.to handle basic chat but can't recommend products, recover carts, or drive revenue
3. **Premium tools are overkill** — Gorgias ($300+/mo), Tidio with AI ($100+/mo effective), and Intercom ($74+/mo) are built for larger teams with enterprise needs

The result: **SMB merchants lose sales every hour they're offline.** 82% of consumers prefer chatbot interaction over waiting for a human, yet the average SMB Shopify store has zero AI-powered sales automation. Repetitive questions (shipping, returns, sizing) consume 60–70% of merchant time that could be spent on growth.

**The market gap:** No affordable, Shopify-native solution exists that combines live chat + AI chatbot + basic helpdesk with a focus on **driving sales**, not just deflecting tickets.

---

## 2. Unique Value Proposition

> **"AI chatbot that sells, not just supports"** — affordable for SMBs

Every competitor positions as a support/helpdesk tool. Chatty reframes the category:

| Competitors Say | Chatty Says |
|----------------|-------------|
| "Deflect tickets with AI" | "Convert browsers into buyers with AI" |
| "Reduce support costs" | "Generate revenue while you sleep" |
| "Automate customer service" | "Your AI sales assistant that knows every product" |

**Core differentiators:**
- **AI that sells:** Product recommendations, upsell detection, cart recovery — not just FAQ answers
- **Shopify-native depth:** Cart contents, browsing behavior, order history, product catalog — all feeding the AI
- **SMB-affordable:** Flat-rate AI (no per-resolution charges), transparent pricing, generous free tier
- **5-minute setup:** Opinionated Shopify defaults, auto-trains from product catalog, works immediately
- **Revenue attribution:** "Chatty generated $X in sales this month" — proves ROI

---

## 3. User Stories by Segment

### 3.1 Free Tier (Dev/Micro Stores — $0–$1K/mo revenue)

| ID | Story | Acceptance Criteria |
|----|-------|-------------------|
| F-1 | As a new store owner, I want to install a chat widget in under 2 minutes so customers can contact me | Widget appears on storefront within 1 click of install |
| F-2 | As a solo founder, I want the AI to answer basic questions (shipping, returns) so I don't miss messages while sleeping | AI responds to top-5 FAQ categories using store policies |
| F-3 | As a budget-conscious merchant, I want a professional-looking chat widget for free so my store looks credible | Customizable colors, position; Chatty branding acceptable |
| F-4 | As a dev store owner, I want to test the full chat experience before launch so I'm ready on day one | Full functionality on dev/test stores |
| F-5 | As a free user, I want to see basic chat analytics so I know if customers are engaging | Dashboard shows: total chats, response time, AI vs human ratio |

### 3.2 SMB / Starter ($19–$29/mo — $1K–$50K/mo revenue)

| ID | Story | Acceptance Criteria |
|----|-------|-------------------|
| S-1 | As an SMB owner, I want the AI to recommend products based on customer questions so I convert more browsers | AI matches customer intent to product attributes and shows product cards |
| S-2 | As a 2-person team, I want to remove Chatty branding so my store looks professional | White-label widget on Starter+ plans |
| S-3 | As a merchant, I want WhatsApp and Messenger messages in one inbox so I don't juggle apps | Unified inbox shows all channels with source labels |
| S-4 | As a store owner, I want to see what's in the customer's cart during chat so I can help them decide | Cart contents sidebar visible during active conversations |
| S-5 | As a merchant who gets the same 10 questions daily, I want to create FAQ entries that the AI uses automatically | FAQ builder with AI auto-training; AI references FAQs in responses |
| S-6 | As a growing store, I want to hand off complex questions from AI to me seamlessly | AI detects low confidence → transfers to human with full context |
| S-7 | As a merchant, I want to send discount codes in chat to close hesitant buyers | Quick-action button to apply discount code in chat |
| S-8 | As a store owner, I want proactive chat triggers on high-value pages so I engage potential buyers | Configurable triggers: time on page, cart value, exit intent |

### 3.3 Mid-Market / Pro ($49–$79/mo — $50K–$500K/mo revenue)

| ID | Story | Acceptance Criteria |
|----|-------|-------------------|
| M-1 | As a support team lead, I want to see agent performance metrics so I can optimize coverage | Dashboard: response time, resolution time, CSAT per agent |
| M-2 | As a growing brand, I want the AI to handle Tier-1 tickets automatically so agents focus on complex issues | AI auto-resolves order status, shipping ETA, return eligibility |
| M-3 | As a mid-market merchant, I want a knowledge base / FAQ page for SEO and self-service | Standalone KB with categories, search, SEO-optimized URLs |
| M-4 | As a team manager, I want ticket assignment rules and routing so the right agent handles each issue | Auto-routing by topic, language, customer segment |
| M-5 | As a brand, I want CSAT surveys after chat so I can measure customer satisfaction | Post-chat rating (1–5 stars) + optional comment |
| M-6 | As a data-driven merchant, I want to see revenue attributed to AI conversations | Dashboard: AI-assisted revenue, conversion rate, avg order value from chat |
| M-7 | As a multi-agent team, I want internal notes and collision detection so we don't double-reply | Agent sees "X is viewing this conversation" + internal note thread |
| M-8 | As a merchant, I want automation workflows (if X then Y) beyond basic triggers | Visual workflow builder: conditions → actions (tag, assign, reply, escalate) |

### 3.4 Enterprise / Plus ($149+/mo — $500K+/mo revenue)

| ID | Story | Acceptance Criteria |
|----|-------|-------------------|
| E-1 | As an enterprise merchant, I want SSO so my team uses existing auth | SAML/OAuth SSO integration |
| E-2 | As a Plus store, I want API access to integrate chat data with our BI tools | REST/GraphQL API with webhooks |
| E-3 | As a compliance-conscious brand, I want data export and audit logs | Full conversation export, API access logs, user activity audit |
| E-4 | As a multi-store operator, I want to manage all stores from one dashboard | Multi-store switcher with unified or per-store views |
| E-5 | As an enterprise team, I want a dedicated CSM and SLA guarantees | Named CSM, 99.9% uptime SLA, priority support queue |
| E-6 | As a large team, I want custom roles and permissions | Configurable roles: admin, supervisor, agent, viewer |

---

## 4. Pricing Strategy

### Pricing Philosophy
- **Flat-rate AI** — No per-resolution charges (anti-Gorgias/Intercom)
- **Per-workspace, not per-agent** — Include multiple seats per plan (anti-Zendesk)
- **Generous free tier** — Best free plan in category to drive installs and reviews
- **Value anchored to revenue** — "Chatty pays for itself" with attribution

### Pricing Tiers

| | **Free** | **Starter** ($19–$29/mo) | **Pro** ($49–$79/mo) | **Enterprise** ($149+/mo) |
|---|---------|--------------------------|----------------------|--------------------------|
| **Seats** | 2 | 5 | 10 | Unlimited |
| **Live chat** | ✅ | ✅ | ✅ | ✅ |
| **AI conversations/mo** | 50 | 500 | 2,000 | Unlimited |
| **Channels** | Web chat only | + WhatsApp, Messenger | + Email, Instagram | + Custom channels |
| **FAQ entries** | 10 | 50 | Unlimited | Unlimited |
| **Knowledge base** | ❌ | ❌ | ✅ | ✅ |
| **Remove branding** | ❌ | ✅ | ✅ | ✅ |
| **Analytics** | Basic | Standard | Advanced + revenue | Custom dashboards |
| **Automation workflows** | ❌ | Basic triggers | Visual workflow builder | + API workflows |
| **CSAT** | ❌ | ❌ | ✅ | ✅ |
| **SSO** | ❌ | ❌ | ❌ | ✅ |
| **Multi-store** | ❌ | ❌ | ❌ | ✅ |
| **Support** | Community | Email (24h) | Priority (4h) | Dedicated CSM |

### Competitive Price Positioning

| Feature Parity With | Their Price | Chatty Price | Savings |
|---------------------|-----------|-------------|---------|
| Tidio Starter + Lyro AI | $56+/mo | $19–29/mo (Starter) | 48–66% less |
| Gorgias Basic (300 tickets) | $50/mo + $0.90/AI | $49–79/mo (Pro, unlimited AI) | Flat rate, no anxiety |
| Tidio Growth | $49/mo (limited AI) | $49–79/mo (Pro, 2K AI convos) | More AI included |
| Re:amaze Basic (per agent) | $29/agent/mo | $19–29/mo (5 seats) | 80% less for small teams |

### Revenue Projections (Base Scenario)

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Active installs | 30K | 55K | 80K |
| Paid conversion | 12% | 18% | 22% |
| Blended ARPU | $22/mo | $28/mo | $35/mo |
| MRR | $79K | $277K | $616K |
| ARR | $950K | $3.3M | $7.4M |

---

## 5. Product Phases

### Phase 1 — MVP: Core Livechat + AI Chatbot + Basic Helpdesk
**Timeline:** 3 months | **Goal:** Product-market fit with SMB segment

**Features:**
- Live chat widget (lightweight, <50KB, customizable)
- AI chatbot auto-trained from Shopify product catalog + store policies
- Shopify sidebar: cart contents, order history, customer profile
- Unified inbox (web chat + email)
- FAQ builder (in-widget search)
- Canned responses / macros
- Human handoff with context preservation
- Proactive chat triggers (time on page, exit intent)
- Product cards in chat (AI recommends products)
- Discount code delivery in chat
- Basic analytics (chats, response time, AI resolution rate)
- Mobile agent app (React Native or PWA)
- Operating hours + offline message collection
- Free + Starter plans launched

**Success Criteria:**
- 10K+ installs in first 90 days
- 4.7+ star rating with 100+ reviews
- <5 min median setup time
- 40%+ AI resolution rate on supported queries
- 8% free-to-paid conversion

### Phase 2 — Growth: Advanced AI + Knowledge Base + Ticketing
**Timeline:** Months 4–9 | **Goal:** Monetization & mid-market expansion

**Features:**
- Advanced AI: product recommendations based on browsing behavior, purchase history
- AI sales attribution dashboard ("Chatty generated $X in revenue")
- Knowledge base / FAQ page builder (SEO-optimized, standalone pages)
- Ticketing system (status, priority, tags, assignment rules)
- CSAT surveys (post-chat rating)
- Agent performance analytics
- Visual automation workflow builder
- WhatsApp + Facebook Messenger + Instagram DM integration
- Collision detection (agent presence indicators)
- Internal notes on conversations
- Conversation merging and tagging
- AI confidence scoring with human review queue
- Pro plan launched

**Success Criteria:**
- 40K+ installs
- $150K+ MRR
- 15% free-to-paid conversion
- 60%+ AI resolution rate
- Revenue attribution showing positive ROI for 70%+ of Pro merchants
- NPS 50+

### Phase 3 — Platform: Multi-channel + AI Agent Workflows + Analytics
**Timeline:** Months 10–18 | **Goal:** Platform expansion & enterprise readiness

**Features:**
- AI agent workflows (autonomous actions: process returns, update orders, issue refunds)
- Multi-channel inbox expansion (SMS, TikTok DM)
- Advanced analytics dashboard (custom reports, BigQuery export)
- Multi-store management
- SSO / SAML authentication
- Custom roles and permissions
- API + webhooks for custom integrations
- Shopify Flow integration
- AI vertical models (fashion, beauty, electronics, food)
- Migration tools (import from Tidio, Gorgias, Zendesk)
- Enterprise plan launched

**Success Criteria:**
- 80K+ installs
- $500K+ MRR
- 20%+ paid conversion
- 5+ enterprise accounts ($149+/mo)
- Multi-channel adoption by 30%+ of paid users

---

## 6. Success Metrics & KPIs

### North Star Metric
**AI-Attributed Revenue per Merchant** — The dollar amount of sales directly influenced by Chatty's AI conversations.

### KPIs by Category

#### Acquisition
| Metric | Phase 1 Target | Phase 2 Target | Phase 3 Target |
|--------|---------------|---------------|---------------|
| Monthly new installs | 3,000 | 5,000 | 7,000 |
| Install-to-activation rate | 60% | 65% | 70% |
| Activation = first AI conversation | — | — | — |
| App Store rating | 4.7+ | 4.7+ | 4.6+ |
| Review count (cumulative) | 100 | 400 | 800 |

#### Engagement
| Metric | Phase 1 | Phase 2 | Phase 3 |
|--------|---------|---------|---------|
| DAU/MAU (agent dashboard) | 30% | 35% | 40% |
| AI conversations/merchant/mo | 50 | 150 | 300 |
| Avg response time (human) | <5 min | <3 min | <2 min |
| AI resolution rate | 40% | 60% | 75% |

#### Revenue
| Metric | Phase 1 | Phase 2 | Phase 3 |
|--------|---------|---------|---------|
| MRR | $30K | $150K | $500K |
| Free-to-paid conversion | 8% | 15% | 20% |
| Blended ARPU | $18 | $25 | $32 |
| Monthly churn (paid) | <8% | <6% | <5% |
| LTV:CAC ratio | >3:1 | >4:1 | >5:1 |

#### AI Quality
| Metric | Phase 1 | Phase 2 | Phase 3 |
|--------|---------|---------|---------|
| AI accuracy (correct responses) | 85% | 90% | 95% |
| AI-to-human escalation rate | 60% | 40% | 25% |
| AI-attributed revenue/merchant | $50/mo | $200/mo | $500/mo |
| CSAT on AI conversations | — | 4.0/5.0 | 4.3/5.0 |

---

## 7. Mixpanel Tracking Plan

### 7.1 Onboarding Events

| Event | Properties | Trigger |
|-------|-----------|---------|
| `app_installed` | `source`, `shopify_plan`, `store_country`, `products_count`, `monthly_orders` | App install complete |
| `onboarding_started` | `step_name` | User enters onboarding flow |
| `onboarding_step_completed` | `step_name`, `duration_seconds` | Each onboarding step finished |
| `onboarding_completed` | `total_duration_seconds`, `steps_skipped[]` | Full onboarding complete |
| `onboarding_abandoned` | `last_step`, `duration_seconds` | User exits before completion |
| `widget_installed` | `method` (auto/manual), `theme_name` | Chat widget live on storefront |
| `first_chat_received` | `channel`, `is_ai_handled` | First customer message received |
| `first_ai_response` | `confidence_score`, `topic` | AI sends its first response |
| `activation` | `time_to_activate_hours` | Widget installed + first AI conversation |

### 7.2 Feature Usage Events

| Event | Properties | Trigger |
|-------|-----------|---------|
| `chat_started` | `channel`, `is_proactive`, `page_url`, `cart_value` | New conversation initiated |
| `chat_message_sent` | `sender` (merchant/ai/customer), `channel`, `has_product_card` | Any message sent |
| `ai_response_generated` | `confidence`, `topic`, `products_recommended`, `fallback_to_human` | AI generates response |
| `ai_product_recommended` | `product_ids[]`, `recommendation_reason`, `accepted` | AI shows product card |
| `ai_handoff_to_human` | `reason`, `confidence_score`, `messages_before_handoff` | AI escalates to human |
| `faq_created` | `source` (manual/import), `category` | FAQ entry added |
| `faq_matched` | `query`, `faq_id`, `confidence` | AI matches incoming query to FAQ |
| `canned_response_used` | `response_id`, `channel` | Agent uses macro |
| `proactive_trigger_fired` | `trigger_type`, `page_url`, `cart_value` | Proactive chat initiated |
| `discount_sent` | `code`, `value`, `type` (percent/fixed) | Discount code sent in chat |
| `order_viewed_in_chat` | `order_id` | Agent views order in sidebar |
| `kb_article_created` | `category`, `word_count` | Knowledge base article added |
| `kb_article_viewed` | `article_id`, `source` (widget/page/search) | KB article viewed by customer |
| `workflow_created` | `trigger_type`, `action_count` | Automation workflow saved |
| `workflow_triggered` | `workflow_id`, `result` (success/error) | Automation fires |
| `ticket_created` | `source`, `priority`, `assigned_to` | Support ticket created |
| `ticket_resolved` | `resolution_time_hours`, `resolved_by` (ai/human) | Ticket closed |
| `csat_submitted` | `rating`, `has_comment`, `channel`, `was_ai_handled` | Customer rates conversation |

### 7.3 Revenue & Conversion Events

| Event | Properties | Trigger |
|-------|-----------|---------|
| `ai_attributed_sale` | `order_id`, `order_value`, `products[]`, `conversation_id`, `time_from_chat_minutes` | Order placed within 24h of AI chat |
| `cart_recovery_initiated` | `cart_value`, `channel`, `trigger` | Abandoned cart chat triggered |
| `cart_recovered` | `cart_value`, `order_value`, `time_to_recover_hours` | Recovered cart converted to order |

### 7.4 Subscription Events

| Event | Properties | Trigger |
|-------|-----------|---------|
| `plan_viewed` | `current_plan`, `viewed_plan` | User views pricing page |
| `plan_upgrade_started` | `from_plan`, `to_plan`, `trigger` (limit_hit/manual/promo) | Upgrade flow initiated |
| `plan_upgraded` | `from_plan`, `to_plan`, `mrr_change`, `billing_cycle` | Upgrade confirmed |
| `plan_downgraded` | `from_plan`, `to_plan`, `reason` | Downgrade confirmed |
| `plan_cancelled` | `plan`, `reason`, `lifetime_days`, `lifetime_revenue` | Cancellation confirmed |
| `trial_started` | `plan`, `duration_days` | Trial begins |
| `trial_converted` | `plan`, `trial_duration_days` | Trial → paid |
| `trial_expired` | `plan`, `usage_during_trial` | Trial ends without conversion |
| `limit_reached` | `limit_type` (ai_convos/seats/faqs), `current_plan`, `usage_value` | User hits plan limit |
| `upgrade_prompt_shown` | `limit_type`, `context`, `current_plan` | Upgrade nudge displayed |
| `upgrade_prompt_clicked` | `limit_type`, `context` | User clicks upgrade from nudge |

### 7.5 User Properties (Mixpanel Profile)

| Property | Type | Description |
|----------|------|-------------|
| `shopify_plan` | string | basic/shopify/advanced/plus |
| `store_country` | string | ISO country code |
| `products_count` | number | Total products in store |
| `monthly_orders` | number | Orders in last 30 days |
| `plan` | string | free/starter/pro/enterprise |
| `activation_date` | datetime | When first AI conversation happened |
| `total_ai_conversations` | number | Lifetime AI conversations |
| `total_ai_revenue` | number | Lifetime AI-attributed revenue |
| `agents_count` | number | Team members added |
| `channels_connected` | string[] | Active channels |
| `features_used` | string[] | Features activated at least once |

---

## 8. Competitive Positioning

### Positioning Matrix

```
                    PRICE
         Low ($0-50/mo)       High ($100+/mo)
        ┌─────────────────┬─────────────────┐
  SALES │ ★ CHATTY ★      │                 │
  FOCUS │ AI sells +      │ (Future Chatty  │
        │ supports, SMB   │  Enterprise)    │
        ├─────────────────┼─────────────────┤
 SUPPORT│ Willdesk        │ Gorgias         │
  FOCUS │ HelpCenter      │ Intercom        │
        │ Crisp           │ Zendesk         │
        │ Tidio (base)    │ Tidio Plus      │
        └─────────────────┴─────────────────┘
```

### Head-to-Head Positioning

#### vs. Tidio (Primary competitor)
- **Their weakness:** Complex pricing — base plan + Lyro AI add-on + Flows add-on = $100+/mo for real AI. Platform-agnostic, not Shopify-optimized.
- **Chatty's angle:** "All-in-one AI chat for Shopify at half the price. No add-on surprises."

#### vs. Gorgias (Aspiration competitor)
- **Their weakness:** Starts at $300/mo effective. Ticket-based pricing creates anxiety. Complex setup.
- **Chatty's angle:** "Enterprise AI sales power at SMB prices. Setup in 5 minutes, not 5 days."

#### vs. Zendesk / Intercom (Enterprise competitors)
- **Their weakness:** Not built for e-commerce. Poor Shopify integration. $55–$132/agent/mo.
- **Chatty's angle:** "Built for Shopify from day one. Your AI knows your products, not just your tickets."

#### vs. Shopify Inbox (Platform risk)
- **Their weakness:** Basic chat only. No AI sales recommendations. No omnichannel. No helpdesk.
- **Chatty's angle:** "Where Shopify Inbox ends, Chatty begins. Same simplicity, 10× the intelligence."

#### vs. Willdesk / HelpCenter (Budget competitors)
- **Their weakness:** No real AI. Basic feature sets. Limited automation.
- **Chatty's angle:** "Same price. Actual AI. Real revenue impact."

### Key Messaging by Channel

| Channel | Message |
|---------|---------|
| **App Store listing** | "AI chatbot that sells 24/7. Free plan. Setup in 2 minutes." |
| **Competitor switchers** | "Switch from [X] — same features, flat pricing, no surprises." |
| **Content marketing** | "How SMB Shopify stores use AI chat to add $X/mo in revenue" |
| **Social proof** | "4.9★ rated by 1,751+ Shopify merchants" |
| **Upgrade prompts** | "Your AI helped 47 customers this week. Unlock unlimited AI conversations →" |

---

## 9. Technical Constraints & Assumptions

### Avada Tech Stack
- **Backend:** Node.js, Firebase Functions, Firestore
- **Frontend:** React, Shopify Polaris v12+
- **Hosting:** Google Cloud Run
- **Queue:** Pub/Sub + Cloud Tasks
- **Analytics:** BigQuery + Mixpanel
- **CDN:** Cloudflare
- **Backend pattern:** handlers (orchestrate) → services (logic) → repositories (1 per collection)
- **Response format:** `{success, data, error}`

### Key Technical Assumptions
1. AI powered by OpenAI GPT-4o / Anthropic Claude via API (not self-hosted)
2. Real-time chat via WebSocket (Cloud Run supports it) or Firebase Realtime DB
3. Widget delivered via Shopify Theme App Extension (lightweight JS)
4. Shopify data accessed via Admin API (GraphQL) + webhooks
5. AI training data stored in Firestore; embeddings in vector store (Pinecone or Firestore vector search)
6. Mixpanel client-side (widget) + server-side (backend) dual tracking

### Performance Requirements
- Widget load: <50KB gzipped, <100ms to interactive
- AI response time: <3 seconds (p95)
- Chat message delivery: <500ms (p95)
- Dashboard load: <2 seconds
- 99.9% uptime SLA (Phase 3)

---

## Appendix A: Glossary

| Term | Definition |
|------|-----------|
| **AI Resolution** | AI fully answers customer query without human intervention |
| **AI Attribution** | Order placed within 24h of an AI-assisted conversation |
| **Activation** | Widget installed + first AI conversation completed |
| **CSAT** | Customer Satisfaction Score (1–5 star post-chat rating) |
| **Handoff** | AI transfers conversation to human agent |
| **Proactive trigger** | Chat initiated by system based on visitor behavior |

## Appendix B: Open Questions

1. **AI cost model:** At scale, LLM API costs could exceed $0.02–0.05/conversation. Need to model unit economics for unlimited AI plans.
2. **Voice/video:** Do SMB merchants need voice/video chat? Research suggests text-first is sufficient. Defer to Phase 3+.
3. **Shopify Inbox coexistence:** Can Chatty and Shopify Inbox run simultaneously, or must merchants choose? Need testing.
4. **Multi-language AI:** How many languages to support in Phase 1? Recommend English-first, add top 5 languages in Phase 2.
5. **Data residency:** Enterprise customers may require EU data residency. Plan infrastructure accordingly for Phase 3.
