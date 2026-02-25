---
product: "Gorgias"
type: feature-analysis
category: helpdesk
last_updated: 2026-02-08
---

# Gorgias: Complete competitive intelligence feature analysis

**Gorgias is the dominant eCommerce-specific helpdesk, serving 15,000+ merchants with deep Shopify integration, ticket-based pricing, and an aggressive pivot toward AI-driven revenue generation.** The platform's core competitive moat is its native Shopify partnership (Shopify is an investor) — enabling in-ticket order management, revenue attribution, and AI Agent actions that no general-purpose helpdesk can match. However, its pricing complexity (ticket fees + AI resolution fees + channel add-ons), Shopify dependency, and weak B2B/marketplace capabilities represent exploitable vulnerabilities. Gorgias serves **40% of Shopify's top 250 merchants** and generates approximately **$70M ARR** at a $530M valuation as of its May 2024 Series C-II.

---

## Pricing architecture and feature-tier mapping

Gorgias uses a **ticket-based pricing model** (not per-agent), with five tiers spanning $10/month to custom enterprise pricing. Every plan above Starter includes **500 agent seats** — a major differentiator for seasonal businesses. The critical pricing mechanic: a "billable ticket" is any conversation where a customer receives at least one response (human, AI, or rule-triggered). After ~3 days of inactivity, a new reply creates a new billable ticket.

| Dimension | Starter ($10/mo) | Basic ($60/mo) | Pro ($360/mo) | Advanced ($900/mo) | Enterprise (Custom) |
|---|---|---|---|---|---|
| **Tickets included** | 50 | 300 | 2,000 | 5,000 | 6,000+ custom |
| **Overage/ticket** | $0.40 | $0.40 | $0.36 | $0.36 | $0.32 |
| **Agent seats** | 3 | 500 | 500 | 500 | 500+ |
| **Channels** | Email, chat | + Facebook, Instagram, TikTok, WhatsApp | All Basic channels | All Pro channels | All channels |
| **Voice/SMS** | ❌ | Add-on | Add-on | Add-on | Add-on |
| **eCommerce platforms** | Shopify, WooCommerce | + BigCommerce | + Magento | All | All + custom |
| **Revenue statistics** | ❌ | ❌ | ✅ | ✅ | ✅ |
| **CSAT surveys** | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Live statistics** | ❌ | ❌ | ✅ | ✅ | ✅ |
| **SLA tracking** | ❌ | ❌ | ✅ | ✅ | ✅ |
| **AI Agent add-on** | ❌ | ✅ | ✅ | ✅ | ✅ |
| **Multi-brand** | ❌ | ❌ | ❌ | ✅ | ✅ |
| **SSO / audit logs** | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Dedicated CSM** | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Integration limit** | Limited | 150 | 150 | 150 | 600 |
| **Onboarding** | Self-serve | Self-serve | Lite session | Full onboarding | White-glove |

**Voice add-on pricing** scales from $1.20/ticket (0–24 monthly tickets) down to $0.40/ticket (500–999 tickets). **SMS add-on pricing** ranges from $0.80/ticket down to $0.41/ticket at similar volume tiers. Both are unavailable on Starter.

**AI Agent pricing** operates at **$0.90/resolution (annual)** or **$1.00/resolution (monthly)**, with $1.50/resolution overage. A critical May 28, 2025 pricing change introduced **double-billing**: AI-resolved tickets now count as both a helpdesk ticket AND an automated interaction. Legacy accounts created before this date remain on single-count billing — a significant grandfathering advantage.

---

## Core helpdesk and channel capabilities

Gorgias's unified inbox consolidates **email, live chat, voice, SMS, Facebook (Messenger + comments + ads), Instagram (DMs + comments + mentions), TikTok Shop, WhatsApp, and Twitter/X** into a single dashboard. Cross-channel message history tracks customers across touchpoints, and agents can transition conversations between channels seamlessly.

**Ticketing features** include manual and automatic creation, round-robin and rule-based assignment, priority levels (Urgent/High/Normal/Low), ticket merging, snoozing with date/event triggers, custom ticket fields, bulk actions, and CSV export. Internal notes enable team collaboration, while AI-generated ticket summaries streamline handoffs. The platform supports **SLA policies** with response/resolution time targets, timer pausing during non-business hours (added Spring 2025), and performance tracking. One notable limitation: explicit collision detection (showing when another agent is viewing the same ticket) is not confirmed in documentation.

**Live chat** offers extensive customization — gradient/solid colors, pixel-level positioning, custom launchers, agent avatars, multi-language auto-detection, removable branding, and HTML/JavaScript/Liquid customization. **Chat Campaigns** enable proactive messaging based on URL, UTM parameters, and time-on-page triggers, with scheduling and performance tracking. Chat automation includes **Flows** (guided self-service decision trees), Quick Responses, AI article recommendations, and an in-chat order management portal. Campaigns become billable only when the customer replies.

**Voice capabilities** (powered by Twilio) include inbound/outbound calling, visual IVR editor with multi-level menus and business-hours branching, call queues, active call transfers, recording with pause/resume, automatic transcription, AI call summaries, voicemail with 6-month retention, spam caller recognition, and a Fall 2025 addition of **call whispering** for live agent coaching. A "Send to SMS" IVR step transitions callers to text-based support.

**Self-service** encompasses a Help Center/Knowledge Base builder, FAQ widgets, AI-generated article suggestions that identify knowledge gaps, and a standalone Order Management portal where customers can independently track, return, or cancel orders — claimed to automate up to **30% of live chat volume**.

---

## AI and automation: Gorgias's strategic pivot

The most consequential competitive development is Gorgias's transformation from a helpdesk into a **"Conversational AI Platform for Support and Sales."** The July 2025 launch of **AI Agent 2.0** introduced a dual-purpose autonomous system that both resolves support tickets and actively drives revenue.

**AI Agent capabilities** span autonomous resolution of common inquiries (WISMO, returns, FAQs, cancellations) in under one minute, with claimed **60% deflection rates**. The agent uses OpenAI's LLMs with Gorgias's proprietary eCommerce prompt engineering, performs a quality check via a separate AI model (Auto QA) before sending responses, and supports **80+ languages** — responding in any language regardless of knowledge-source language. It can **read images** in email tickets (damaged items, proof of return) and performs real-world actions: processing refunds, editing/canceling Shopify orders, canceling Recharge subscriptions, and sending Loop Returns portal links.

**Shopping Assistant** (Spring/Summer 2025) is the revenue-generation engine — a virtual sales associate that proactively engages shoppers on chat and email, serves **personalized product recommendation cards** based on real-time browsing and purchase history, enables one-click add-to-cart, offers intelligent upselling with configurable selling styles (educational/balanced/promotional), and deploys **intent-based dynamic discounting** where hesitant shoppers receive nudges while confident shoppers don't. Brands report **up to 2.5× conversion increases** from support chat with Shopping Assistant enabled.

**The Rules Engine** supports five triggers (ticket created, updated, new message, assigned, snooze ended), extremely granular conditions (message keywords, intent, sentiment, channel, Shopify customer data, business hours with AND/OR nesting), and actions including auto-reply, tagging, assignment, priority setting, status changes, internal notes, and webhook calls. A **70-rule limit per account** and a **5,000-macro limit** constrain larger operations. Auto-reply throttling prevents more than one automated reply per 5 minutes per customer.

**Intent detection** operates on a fixed, predefined eCommerce intent library (shipping/status, refund/request, cancellation, exchange, damaged item, etc.) across **16 languages** — critically, **custom intents cannot be created**. **Sentiment analysis** detects positive, negative, threatening, offensive, and urgent signals, understanding nuanced mixed sentiment and emoji context.

---

## Integration ecosystem: 100+ apps with deep Shopify preference

Gorgias maintains **100+ integrations** with a clear hierarchy: Shopify receives dramatically deeper integration than any other platform.

**Shopify/Shopify Plus** integration enables full CRUD operations on orders (create, duplicate, edit, cancel, refund), real-time inventory checks, discount code creation, product sharing, customer/order tag editing, metafield visibility, and Shopify Flow compatibility. AI Agent can autonomously execute Shopify actions. This is the only platform supporting the Order Management self-service portal and full AI Agent Actions.

**BigCommerce** provides customer/order data display in the sidebar but lacks order editing, refunding, or Order Management portal support. **Magento** (Pro plan+) offers customer profile data and macro variables but similarly limited actions. **WooCommerce** provides real-time data sync with basic display capabilities. The disparity is stark: **Shopify gets 10x the integration depth** of any other platform.

Key integration categories and notable partners:

- **Email marketing/CRM**: Klaviyo (deepest — bidirectional sync, SMS/WhatsApp routing, review moderation), Attentive, Omnisend, Bloomreach, Postscript, SMSBump, HubSpot, Salesforce
- **Subscriptions**: Recharge (AI Agent can cancel subscriptions), Skio, Smartrr, Loop Subscriptions, ARPU, Bold, Ordergroove
- **Returns**: Loop Returns (AI Agent Actions, self-service portal integration), AfterShip Returns, Returnly, Narvar
- **Shipping**: ShipBob (multi-account), AfterShip, ShipStation, Wonderment, ShipMonk
- **Reviews**: Yotpo (deep — moderate reviews, auto-ticketing, loyalty data), Okendo, Judge.me, Trustpilot, Stamped.io
- **Loyalty**: Smile.io, LoyaltyLion, Yotpo Loyalty
- **Marketplace**: ChannelReply (Amazon, eBay, Walmart, Etsy, Back Market, Newegg — **$31+/month add-on**)
- **Voice**: Native Gorgias Voice, Aircall, CloudTalk, CallHippo, RingCentral
- **QA**: Klaus, Loris CQA, Stella Connect/Medallia
- **Productivity**: Slack (native), Zapier (8,000+ apps), Alloy Automation, Pipedream
- **Analytics**: Daasity, Daton (warehouse replication), NetSuite, Brightpearl
- **AI augmentation**: Ada, DigitalGenius, Siena AI, eesel AI, Certainly

---

## Revenue scale suitability and vertical coverage

### By merchant revenue

**Starter/hobby merchants (<$10K/month revenue)** fit the Starter ($10/mo, 50 tickets) or Basic ($60/mo, 300 tickets) tiers. They get multichannel inbox, basic macros/rules, and Shopify integration. However, no voice/SMS, no revenue statistics, no CSAT, and self-serve onboarding only. For the smallest brands, Gorgias may be overkill — Shopify Inbox (free) is a viable alternative. The Basic-to-Pro jump ($60→$360/month) is a frequently cited pricing complaint.

**SMBs ($10K–$100K/month)** align with the Pro plan ($360/mo, 2,000 tickets) — Gorgias's "recommended" tier. Revenue statistics, CSAT surveys, live statistics, SLA tracking, and lite onboarding unlock at this level. With the AI Agent add-on, a brand automating 30% of tickets pays approximately **$720/month total**. This is where Gorgias's value proposition peaks: enough volume to justify automation investment, enough features to measure ROI.

**Mid-market ($100K–$1M/month)** maps to Advanced ($900/mo, 5,000 tickets) with dedicated CSM, full onboarding, multi-brand support, and advanced analytics. AI Agent at 50% automation pushes total costs to **$2,900–$3,900/month**. Multi-store management and brand-specific configurations become critical at this scale.

**Enterprise (>$1M/month)** requires custom pricing (average ~$17K/year per Vendr data, max ~$30K/year). Benefits include 600 active integrations (vs. 150), custom integrations built by Gorgias developers, SSO, granular permissions, audit logs, and the lowest overage rate ($0.32/ticket). Gorgias serves Steve Madden, Glossier, Dollar Shave Club, and Reebok at this tier.

### By vertical

Gorgias does **not offer vertical-specific feature modules** — no shade-matching for beauty, no assembly scheduling for furniture, no dietary-info tools for F&B. Instead, it provides a horizontal platform with vertical customization through its integration ecosystem, AI Agent training on brand-specific product data, and configurable self-service flows. The platform publishes **industry-specific benchmark data and policy guides** for Fashion, F&B, Electronics, and Health & Wellness verticals, and maintains case studies across all major eCommerce categories. Its customer base breaks down as: **Retail (16%), Fashion (11%), Manufacturing (10%), Food & Beverage (6%), Health & Wellness (5%), Beauty & Fitness (12.2% of Shopify stores)**.

### By business model

**DTC is Gorgias's primary market** — the entire product is optimized for brand-owned Shopify stores with revenue attribution, Shopping Assistant, and in-ticket order management. **Subscription commerce** is well-supported through deep Recharge, Skio, and Smartrr integrations enabling in-ticket subscription management and AI-powered cancellation handling. **Dropshipping** is compatible but not purpose-built — automated WISMO and Parcel Panel integration help, but no native supplier communication exists and per-ticket pricing can become expensive at high volume. **Marketplace sellers** require the ChannelReply add-on ($31+/month) for Amazon/eBay/Walmart support — functional but secondary. **B2B/Wholesale is a clear weakness** — multiple sources explicitly state Gorgias "is not ideal for B2B," lacking complex ticket workflows, account management, bulk order tools, and quoting features.

---

## Review sentiment and competitive positioning

Across review platforms, Gorgias earns **4.6/5 on G2** (475+ reviews), **4.6–4.7/5 on Capterra** (132+ reviews), and **4.3/5 on the Shopify App Store** (607+ reviews, ~21,000 installs). The consistent strengths cited are seamless Shopify integration, multichannel unification, and automation that dramatically reduces response times (one reviewer reported dropping from 72 hours to 30 minutes).

The most exploitable weaknesses for competitive positioning:

- **Pricing unpredictability**: Ticket-based billing + AI resolution fees + channel add-ons create difficult-to-forecast monthly costs. One Shopify reviewer reported **~$1,000/month for fewer than 50 inquiries** ($14.50/inquiry)
- **Double-billing controversy**: The May 2025 change charging both ticket and AI fees for automated resolutions has generated significant backlash
- **BigCommerce/Magento parity gap**: Many automated features and order management capabilities are Shopify-exclusive, leaving non-Shopify merchants underserved
- **AI quality instability**: Multiple January 2026 reviews report AI Agent degradation after apparent LLM model changes
- **Gorgias's own support quality**: Ironic for a helpdesk company — reviews cite slow response times (36+ hours) and poor complex-issue resolution
- **Rule engine constraints**: 70-rule limit and non-customizable intent categories constrain larger operations
- **No free tier**: Freshdesk and others offer free plans; Gorgias starts at $10/month

Against specific competitors: Gorgias dominates Zendesk and Freshdesk on **Shopify integration depth and eCommerce-specific AI**. It loses to Zendesk on enterprise analytics, B2B capabilities, and platform maturity. It's more expensive than Freshdesk (which has a free tier) but offers significantly deeper eCommerce functionality. Intercom targets B2B/SaaS and is poorly rated for eCommerce. Gladly competes at the premium retail segment. Kustomer offers stronger CRM-centric workflows but less eCommerce depth.

---

## Conclusion: strategic implications for competitive positioning

Gorgias's strategic direction is clear — transforming customer support from a cost center into a **revenue-generating channel** through AI-powered shopping assistance, proactive chat campaigns, and revenue attribution. This "support as revenue" positioning is its strongest narrative differentiator.

The most actionable competitive opportunities lie in three areas. First, **transparent and predictable pricing** — Gorgias's double-billing model, volume-based scaling, and multi-layered add-on costs create genuine customer pain that a simpler pricing structure could exploit. Second, **platform parity** — building equally deep integrations across Shopify, BigCommerce, WooCommerce, and marketplaces would capture the merchants Gorgias underserves on non-Shopify platforms. Third, **customizable AI** — Gorgias's rigid, predefined intent categories and rule limits create a ceiling for larger, more sophisticated operations that a more flexible automation engine could serve.

The deepest moat to respect is Gorgias's Shopify relationship (investor + technical integration + 40% of top-250 penetration). Competing head-to-head on Shopify integration depth is a long-term investment. The faster competitive play targets the pricing-sensitive SMB segment ($10K–$100K/month revenue) with simpler billing, stronger multi-platform support, and comparable AI capabilities — where Gorgias's $60→$360 plan jump and unpredictable automation costs create the widest gap between merchant expectations and reality.