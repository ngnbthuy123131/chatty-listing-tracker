# Chatty — Product Phases

**Version:** 1.0 | **Date:** 2026-02-22

---

## Phase Overview

```
Phase 1: MVP          Phase 2: Growth           Phase 3: Platform
(Months 1–3)          (Months 4–9)              (Months 10–18)
─────────────────     ─────────────────         ─────────────────
Core livechat         Advanced AI               Multi-channel
AI chatbot            Knowledge base            AI agent workflows
Basic helpdesk        Ticketing                 Analytics dashboard
Free + Starter        Pro plan                  Enterprise plan
```

---

## Phase 1 — MVP (Months 1–3)

**Goal:** Achieve product-market fit with SMB Shopify merchants. Validate that "AI that sells" resonates.

### Scope

| Category | Features |
|----------|----------|
| **Chat widget** | Lightweight (<50KB), customizable colors/position, theme app extension, offline messages, operating hours, pre-chat form, file sharing |
| **AI chatbot** | Auto-train from product catalog + store policies, FAQ matching, product card recommendations, confidence scoring, human handoff |
| **Shopify integration** | Customer profile sidebar, cart contents, order history, discount code delivery, browsing page context |
| **Inbox** | Unified inbox (web chat + email), canned responses/macros, conversation assignment, basic tagging |
| **Proactive engagement** | Time-on-page triggers, exit-intent triggers, cart-value triggers |
| **Analytics** | Total chats, AI vs human ratio, response time, resolution rate |
| **Mobile** | PWA agent dashboard or React Native app |
| **Pricing** | Free (2 seats, 50 AI convos/mo) + Starter ($19–29, 5 seats, 500 AI convos/mo) |
| **Tracking** | Mixpanel: onboarding events, core feature events, subscription events |

### Timeline

| Week | Milestone |
|------|-----------|
| 1–2 | Architecture setup, Firestore schema, Shopify auth + app scaffold, widget skeleton |
| 3–4 | Chat widget MVP (real-time messaging), Shopify data integration (customer/cart/orders) |
| 5–6 | AI chatbot core (LLM integration, product catalog training, FAQ matching) |
| 7–8 | Inbox UI, canned responses, human handoff, proactive triggers |
| 9–10 | Analytics dashboard, mobile agent experience, Mixpanel instrumentation |
| 11–12 | Billing integration (Shopify), onboarding flow, beta testing, bug fixes |
| 13 | Shopify App Store submission, soft launch to Avada user base |

### KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Installs (90 days) | 10,000 | Shopify App Store |
| App Store rating | 4.7+ | Shopify App Store |
| Reviews | 100+ | Shopify App Store |
| Median setup time | <5 min | Mixpanel: `app_installed` → `activation` |
| AI resolution rate | 40% | AI conversations resolved without human |
| Free → Starter conversion | 8% | Mixpanel: `plan_upgraded` / `app_installed` |
| 30-day retention (free) | 40% | Mixpanel: DAU/MAU at day 30 |
| 30-day retention (paid) | 80% | Billing data |
| Widget performance | <50KB, <100ms TTI | Lighthouse / RUM |

### Go/No-Go Criteria for Phase 2

| Criterion | Threshold | Status |
|-----------|-----------|--------|
| ✅ Installs | ≥5,000 active | Required |
| ✅ Rating | ≥4.5 stars | Required |
| ✅ Free→Paid conversion | ≥5% | Required |
| ✅ AI resolution rate | ≥30% | Required |
| ✅ 30-day paid retention | ≥70% | Required |
| 🟡 MRR | ≥$15K | Desired |
| 🟡 Qualitative feedback | Positive merchant interviews (≥8/10 NPS) | Desired |
| 🔴 Blocker: Critical bugs | 0 P0 bugs open | Hard gate |
| 🔴 Blocker: AI accuracy | <20% hallucination rate | Hard gate |

**Decision point:** End of Month 3. If all ✅ criteria met, proceed. If any 🔴 blockers exist, fix before proceeding. If ✅ criteria partially met but 🟡 trending positive, proceed with caution.

---

## Phase 2 — Growth / MMP (Months 4–9)

**Goal:** Drive monetization. Expand to mid-market. Prove revenue attribution.

### Scope

| Category | Features |
|----------|----------|
| **Advanced AI** | Browsing-behavior product recommendations, purchase-history personalization, AI sales attribution, confidence scoring with human review queue, multi-language (top 5) |
| **Knowledge base** | Standalone FAQ/KB pages (SEO-optimized URLs, categories, search), in-widget KB search, article analytics |
| **Ticketing** | Ticket status/priority/tags, assignment rules, auto-routing by topic/language, SLA timers (display only), merge conversations |
| **Team features** | Agent performance dashboard, CSAT surveys, collision detection, internal notes, custom agent roles (basic) |
| **Automation** | Visual workflow builder (if/then conditions → actions), auto-tag, auto-assign, auto-reply templates |
| **Channels** | WhatsApp Business API, Facebook Messenger, Instagram DM |
| **Revenue** | AI-attributed revenue dashboard, cart recovery tracking, conversion analytics |
| **Pricing** | Pro plan launched ($49–79/mo, 10 seats, 2K AI convos/mo, KB, CSAT, workflows) |
| **Tracking** | Mixpanel: revenue events, channel events, KB events, workflow events, CSAT events |

### Timeline

| Month | Milestone |
|-------|-----------|
| 4 | Knowledge base MVP (pages + in-widget), WhatsApp integration, AI sales attribution backend |
| 5 | Ticketing system, auto-routing, CSAT surveys, agent performance analytics |
| 6 | Visual workflow builder, collision detection, internal notes, Instagram DM |
| 7 | AI product recommendations v2 (browsing + history), revenue dashboard, Facebook Messenger |
| 8 | Multi-language AI, conversation merge, Pro plan billing, migration tools (Tidio import) |
| 9 | Polish, performance optimization, load testing, content marketing launch |

### KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Active installs | 40,000 | Shopify App Store |
| MRR | $150K | Billing |
| Free → Paid conversion | 15% | Mixpanel |
| AI resolution rate | 60% | AI analytics |
| AI-attributed revenue/merchant | $200/mo avg | Revenue dashboard |
| Pro plan adoption | 20% of paid users | Billing |
| CSAT (AI conversations) | 4.0/5.0 | CSAT surveys |
| NPS | 50+ | Survey |
| Monthly paid churn | <6% | Billing |
| KB articles created/merchant | 10+ (avg, Pro users) | Firestore |

### Go/No-Go Criteria for Phase 3

| Criterion | Threshold | Status |
|-----------|-----------|--------|
| ✅ MRR | ≥$80K | Required |
| ✅ Pro plan adoption | ≥15% of paid | Required |
| ✅ AI resolution rate | ≥50% | Required |
| ✅ Revenue attribution working | ≥60% of Pro merchants see positive ROI | Required |
| ✅ Multi-channel adoption | ≥20% of paid use 2+ channels | Required |
| 🟡 Monthly paid churn | <7% | Desired |
| 🟡 Inbound enterprise requests | ≥3 merchants requesting enterprise features | Desired |
| 🔴 Blocker: Infrastructure | System handles 10× current load in stress test | Hard gate |
| 🔴 Blocker: Unit economics | AI cost per conversation <$0.05 at current volume | Hard gate |

---

## Phase 3 — Platform (Months 10–18)

**Goal:** Platform expansion. Enterprise readiness. Category leadership in SMB AI commerce chat.

### Scope

| Category | Features |
|----------|----------|
| **AI agent workflows** | Autonomous actions: process returns, update orders, issue refunds, cancel orders (with merchant-defined guardrails) |
| **Channels** | SMS (Twilio), TikTok DM (if API available) |
| **Analytics** | Custom report builder, BigQuery export, real-time dashboard, cohort analysis |
| **Enterprise** | SSO/SAML, custom roles & permissions, multi-store management, audit logs, API + webhooks |
| **AI vertical models** | Industry-specific training (fashion/beauty/electronics/food) for better product matching |
| **Migration** | Import tools for Tidio, Gorgias, Zendesk (conversations, contacts, macros) |
| **Integrations** | Shopify Flow, Klaviyo, Judge.me, ReCharge, Loop Returns |
| **Pricing** | Enterprise plan ($149+/mo, unlimited seats, unlimited AI, SSO, multi-store, dedicated CSM) |
| **Tracking** | Mixpanel: enterprise events, workflow events, integration events, advanced funnels |

### Timeline

| Month | Milestone |
|-------|-----------|
| 10–11 | AI agent workflows (return/refund/cancel actions), Shopify Flow integration |
| 12–13 | SSO/SAML, custom roles, multi-store, audit logs, API v1 |
| 14–15 | Advanced analytics dashboard, BigQuery export, SMS channel |
| 16 | Vertical AI models (fashion, beauty), migration tools (Gorgias, Zendesk) |
| 17 | Partner integrations (Klaviyo, Judge.me, ReCharge, Loop), webhooks |
| 18 | Enterprise plan launch, load testing at scale, SOC2 prep |

### KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Active installs | 80,000 | Shopify App Store |
| MRR | $500K | Billing |
| ARR | $6M+ | Billing |
| Paid conversion | 20%+ | Mixpanel |
| Enterprise accounts | 5+ | Billing (Enterprise plan) |
| AI-attributed revenue/merchant | $500/mo avg | Revenue dashboard |
| Multi-channel adoption | 30% of paid | Analytics |
| Monthly paid churn | <5% | Billing |
| AI resolution rate | 75% | AI analytics |
| API/webhook adoption | 10% of Pro+ | Usage tracking |

### Go/No-Go Criteria for Beyond Phase 3

| Criterion | Threshold |
|-----------|-----------|
| ARR | ≥$4M |
| Enterprise pipeline | ≥10 enterprise prospects |
| Platform stability | 99.9% uptime over 90 days |
| Unit economics | Positive contribution margin per merchant |
| Market position | Top 5 in Shopify App Store "Customer Support" category |

---

## Risk Checkpoints (All Phases)

| Risk | Check Frequency | Escalation Trigger |
|------|----------------|-------------------|
| Shopify Inbox feature parity | Monthly (each Shopify Editions) | Shopify adds AI product recommendations |
| AI unit economics | Weekly | Cost/conversation >$0.08 |
| Competitor pricing changes | Monthly | Tidio/Gorgias drops price >30% |
| Churn spike | Weekly | Paid churn >10% in any month |
| App Store rating drop | Daily | Rating falls below 4.5 |
| AI hallucination rate | Weekly | >15% inaccurate responses |

---

## Resource Estimates

| Phase | Engineering | Design | PM | QA | Total |
|-------|------------|--------|----|----|-------|
| Phase 1 (3 mo) | 3–4 FE + 2–3 BE + 1 AI/ML | 1 | 1 | 1 | 8–10 |
| Phase 2 (6 mo) | 4–5 FE + 3–4 BE + 1–2 AI/ML | 1–2 | 1 | 1–2 | 11–15 |
| Phase 3 (9 mo) | 5–6 FE + 4–5 BE + 2 AI/ML | 2 | 1–2 | 2 | 16–20 |

**Note:** "FE" includes widget + dashboard + mobile. "BE" includes API + real-time + integrations. "AI/ML" includes LLM integration + training pipeline + vector search.
