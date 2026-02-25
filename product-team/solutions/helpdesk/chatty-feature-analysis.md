---
product: "Chatty"
type: feature-analysis
category: helpdesk
last_updated: 2026-02-08
see_also: ../ai-chatbot/chatty-feature-analysis.md
---

# Chatty - Full Feature Analysis (Helpdesk Perspective)
*Updated: Q1 2026*

**Chatty is an AI chatbot & live chat platform positioned as a "sales assistant" — NOT a traditional helpdesk.** This analysis evaluates Chatty's features through the helpdesk lens, comparing against Gorgias, eDesk, Re:amaze, and Richpanel. The key finding: Chatty has strong AI and multi-channel foundations but lacks core helpdesk infrastructure (ticketing, SLA, routing, agent management). Its opportunity is not to become a full helpdesk, but to be the **AI-first support layer** that complements or replaces basic helpdesks for Shopify SMBs.

---

## 1. FEATURE LIST BY PRICING PLAN (Helpdesk Focus)

### Free Plan ($0/month)
**Quota:** 50 lifetime AI conversations, 100 products for AI training, 1 agent seat
**Helpdesk Features:**
- Live chat widget (website only)
- Basic FAQ help center (limited categories)
- AI chatbot (GPT-4) — handles basic product Q&A
- WhatsApp channel (basic)

**What's Missing for Helpdesk:**
- No multi-channel inbox
- No email support
- No team collaboration
- No CSAT
- No analytics beyond basic

---

### Basic Plan ($19.99/month | $16.99/month annual)
**Quota:** 50 AI conversations/month, 500 products for AI training, 5 agent seats
**Core Features (everything in Free, plus):**
- **Unified inbox** — conversations from all channels in one view
- **Multi-channel support** — WhatsApp, Facebook Messenger, Instagram, Email, website chat
- **Team collaboration** — invite up to 5 agents
- **CSAT surveys** — basic customer satisfaction tracking
- **Quick replies** — pre-written response shortcuts
- **Order tracking** — integrated with DHL, FedEx, UPS (read-only)
- **Smart triggers** — proactive messages (cart booster, welcome message, newsletter capture)
- **Mobile app** — iOS & Android for agent response on-the-go

**What's Missing for Helpdesk:**
- No ticketing system (conversations only, no ticket lifecycle)
- No SLA management
- No routing or assignment rules
- No agent performance metrics
- No internal notes (unconfirmed)
- No priority levels
- No ticket merging or snoozing
- No departments/teams
- No macros/canned responses (only quick replies)
- No voice/phone support
- No SMS channel
- No returns/refund workflow
- No order modification (only tracking)
- No rules engine / workflow automation

---

### Pro Plan ($68.99/month | $58.99/month annual)
**Quota:** 300 AI conversations/month, 8,000 products for AI training, 10 agent seats
**Core Features (everything in Basic, plus):**
- **Enhanced analytics** — conversation metrics, AI performance data
- **Smart product recommendations** — AI suggests products during conversations
- **Full FAQ analytics** — track top questions, popular categories
- **Advanced AI training** — more products, better context understanding

**What's Missing for Helpdesk:** Same as Basic — no ticketing, SLA, routing, agent metrics, voice, returns, order actions.

---

### Plus Plan ($199/month | $169.99/month annual)
**Quota:** 700 AI conversations/month, 20,000 products for AI training, unlimited agent seats
**Core Features (everything in Pro, plus):**
- **Unlimited agents** — no seat limits
- **Full analytics suite** — comprehensive conversation and AI performance data
- **Priority support** — faster response from Chatty's support team
- **Advanced customization** — deeper branding and configuration options

**What's Missing for Helpdesk:** Same gaps persist across all plans — fundamental helpdesk infrastructure is absent.

---

### Enterprise Plan (Custom pricing)
**Quota:** Custom AI conversations, custom products, custom seats
**Core Features (everything in Plus, plus):**
- **Custom AI training** — tailored AI behavior
- **Dedicated support** — account management
- **Custom integrations** — beyond standard channels
- **Volume discounts** — conversation-based pricing negotiation

**Note:** Enterprise plan details are sparse. It's unclear whether enterprise includes any helpdesk-specific features not available in lower plans.

---

## 2. HELPDESK FEATURES ASSESSMENT

### 2.1 Inbox & Conversation Management

| Feature | Status | Plan | Notes |
|---------|--------|------|-------|
| Unified inbox | **Yes** | Basic+ | All channels in one view |
| Conversation list/filtering | **Basic** | Basic+ | Limited filtering options |
| Search conversations | **Basic** | Basic+ | Text search across conversations |
| Conversation assignment | **Not confirmed** | — | No explicit documentation found |
| Auto-assignment rules | **No** | — | Not available |
| Round-robin distribution | **No** | — | Not available |
| Priority levels | **No** | — | Not available |
| Tags/labels | **Not confirmed** | — | Not documented for conversations |
| Internal notes | **Not confirmed** | — | Not documented |
| Ticket merging | **No** | — | No ticket concept exists |
| Ticket snoozing | **No** | — | No ticket concept exists |
| Collision detection | **No** | — | Not available |
| Bulk actions | **No** | — | Not available |
| CSV/data export | **Not confirmed** | — | Not documented |
| Custom fields | **No** | — | Not available |

### 2.2 Channel Support

| Channel | Status | Plan | Notes |
|---------|--------|------|-------|
| Website live chat | **Yes** | Free+ | Core channel, customizable widget |
| Email | **Yes** | Basic+ | Receives email in inbox, but no AI on email |
| WhatsApp | **Yes** | Free+ | Business API integration |
| Facebook Messenger | **Yes** | Basic+ | Page integration |
| Instagram DM | **Yes** | Basic+ | Business account integration |
| Voice/Phone | **No** | — | Not available on any plan |
| SMS | **No** | — | Not available on any plan |
| TikTok | **No** | — | Not available (Gorgias has TikTok Shop) |
| Twitter/X | **No** | — | Not available |

**Channel comparison vs. helpdesk competitors:**

| Channel | Chatty | Gorgias | eDesk | Re:amaze | Richpanel |
|---------|--------|---------|-------|----------|-----------|
| Email | Yes | Yes | Yes | Yes | Yes |
| Live Chat | Yes | Yes | Yes | Yes | Yes |
| WhatsApp | Yes | Add-on | Yes | No | Yes |
| Messenger | Yes | Yes | Yes | Yes | Yes |
| Instagram | Yes | Yes | Yes | Yes | Yes |
| Voice/Phone | **No** | Twilio | Add-on | Pro+ | Aircall |
| SMS | **No** | Add-on | No | Pro+ | No |
| TikTok | **No** | Yes | Yes | No | No |
| Amazon/eBay | **No** | ChannelReply | **300+ native** | No | No |

### 2.3 Ticketing & Workflow

| Feature | Status | Notes |
|---------|--------|-------|
| Ticket creation (manual/auto) | **No** | Conversations exist but no formal ticketing |
| Ticket lifecycle (open/pending/resolved/closed) | **No** | Conversations have basic open/closed states |
| SLA policies | **No** | No time-based escalation |
| SLA timers/breach alerts | **No** | — |
| Business hours configuration | **No** | No evidence of business hours logic |
| Rules engine (if/then automation) | **Basic** | Smart triggers only (page-based, time-based) |
| Macros/canned responses | **Basic** | Quick replies only — not templated macros |
| Auto-responders | **AI-based** | AI handles conversations but no rule-based auto-replies |
| Workflows (multi-step) | **No** | No visual workflow builder |
| Escalation rules | **No** | No escalation logic |
| Departments/routing | **No** | — |

### 2.4 Customer Management

| Feature | Status | Notes |
|---------|--------|-------|
| Customer profile | **Yes** | Via Shopify integration — name, email, order history |
| Customer timeline | **Basic** | Conversation history per customer |
| Customer segments | **No** | Not available |
| Customer tags | **Not confirmed** | Not documented |
| Order lookup | **Yes** | Within conversation, via Shopify |
| Order tracking | **Yes** | DHL, FedEx, UPS integration |
| Order modification | **No** | Cannot edit, cancel, or refund orders |
| Returns/exchange processing | **No** | No returns workflow |
| Subscription management | **No** | — |
| Custom data fields | **No** | — |

### 2.5 Reporting & Analytics

| Feature | Status | Plan | Notes |
|---------|--------|------|-------|
| Conversation volume | **Yes** | Pro+ | Basic conversation counts |
| AI resolution metrics | **Yes** | Basic+ | AI conversations handled, success rate |
| Revenue attribution | **Basic** | Pro+ | Assisted revenue tracking (limited) |
| Agent performance | **No** | — | No per-agent metrics |
| Response time tracking | **Not confirmed** | — | Not documented |
| Resolution time tracking | **Not confirmed** | — | Not documented |
| CSAT scores | **Basic** | Basic+ | Survey available but limited reporting |
| Channel analytics | **Not confirmed** | — | Not documented per channel |
| Custom reports | **No** | — | Not available |
| Data export | **Not confirmed** | — | Not documented |
| Real-time dashboard | **No** | — | Not available |
| Topic/category analytics | **No** | — | Not available |

---

## 3. AI/AUTOMATION FEATURES (Deep Dive)

### AI Chatbot (GPT-4)
- **Training sources:** Product catalog (auto-sync from Shopify), FAQ pages, custom Q&A pairs, URLs, uploaded files
- **Catalog capacity:** Up to 20,000 products (Plus plan)
- **Learning speed:** Trains overnight on full catalog
- **Languages:** Multi-language support (responds in customer's language)
- **Resolution rate:** ~95% claimed (case studies: Yoeleo Bike 98.94%, Happy Hair Brush 95.83%)
- **Conversation style:** End-to-end autonomous (not just "suggest" like Tidio Lyro)

### AI Capabilities vs. Helpdesk Competitors

| AI Feature | Chatty | Gorgias | eDesk | Re:amaze | Richpanel |
|------------|--------|---------|-------|----------|-----------|
| AI chatbot (autonomous) | **GPT-4 (strong)** | AI Agent 2.0 | AI chatbot | Basic bots | Sidekick AI |
| AI email responses | **No** | Yes (AI Agent) | Yes (HandsFree) | No | No |
| AI actions (order mgmt) | **No** | Yes (refund, cancel, edit) | No | No | No |
| AI agent assist/copilot | **No** | No | AI Assist | No | Sidekick drafts |
| AI product recommendations | **Yes** (in chat) | Shopping Assistant | No | No | No |
| AI revenue attribution | **Basic** | Yes (Shopping Asst.) | No | No | No |
| AI quality check | **No** | Auto QA | No | No | No |
| AI image reading | **No** | Yes (email) | No | No | No |
| AI intent detection | **Basic** | 16-language library | Sentiment | Customer Intents | No |
| AI multi-language | **Yes** | 80+ languages | AI Translation | No | No |

### Proactive Messaging / Smart Triggers

| Trigger Type | Available | Notes |
|--------------|-----------|-------|
| Cart booster | **Yes** | Proactive message when items in cart |
| Cart reminder | **Yes** | Follow-up on abandoned carts |
| Welcome message | **Yes** | New visitor greeting |
| Collection boost | **Yes** | Promote specific collections |
| Newsletter capture | **Yes** | Lead gen popup |
| Exit intent | **No** | Not available (Rep AI has this) |
| Time-on-page | **Basic** | Via smart triggers |
| URL-based | **Basic** | Via smart triggers |
| Custom behavioral | **No** | No advanced behavioral triggers |

---

## 4. INTEGRATION ECOSYSTEM

### Confirmed Integrations

| Category | Integration | Depth |
|----------|------------|-------|
| **eCommerce** | Shopify | **Deep native** — products, orders, customers, checkout, Shopify Flow |
| **Loyalty** | Joy (Avada) | Native Avada ecosystem |
| **Reviews** | Air Reviews (Avada) | Native Avada ecosystem |
| **Email Marketing** | Klaviyo | Integration available |
| **Social** | WhatsApp Business API | Channel integration |
| **Social** | Facebook Messenger | Channel integration |
| **Social** | Instagram DMs | Channel integration |
| **Shipping** | DHL, FedEx, UPS | Order tracking only |

### Missing Integrations (vs. Helpdesk Competitors)

| Category | Missing | Who Has It |
|----------|---------|-----------|
| **Helpdesk** | Gorgias, Zendesk, Freshdesk | Rep AI, Manifest AI |
| **Returns** | Loop, AfterShip Returns, Narvar | Gorgias, eDesk |
| **Subscriptions** | Recharge, Skio, Bold | Gorgias |
| **SMS Marketing** | Postscript, Attentive | Gorgias |
| **Reviews (external)** | Yotpo, Judge.me, Okendo | Gorgias, eDesk |
| **Shipping** | ShipBob, ShipStation, Wonderment | Gorgias, eDesk |
| **Universal** | Zapier, Make | Gorgias (via Zapier), eDesk |
| **CRM** | HubSpot, Salesforce | Gorgias, eDesk |
| **Voice** | Twilio, Aircall | Gorgias, Richpanel |
| **Marketplace** | Amazon, eBay, Walmart | eDesk (300+), Gorgias (ChannelReply) |

**Integration ecosystem gap:** Chatty has ~8-10 integrations vs. Gorgias's 100+ and eDesk's 300+. This is the single biggest gap for helpdesk use cases.

---

## 5. UNIQUE/DIFFERENTIATING FEATURES

### What Chatty Has That Helpdesk Competitors Don't

| Feature | Description | Competitive Advantage |
|---------|-------------|----------------------|
| **AI Sales Focus** | AI trained to sell, not just support. Product recommendations, upsell suggestions during conversations | Unique positioning — no helpdesk is sales-first |
| **Flat-Rate Pricing** | $19.99–$199/month regardless of ticket/conversation volume | Only flat-rate option in helpdesk space (Re:amaze has $59 flat-rate Starter but limited) |
| **Free Plan** | Functional free tier with AI chatbot | Gorgias: trial only. eDesk: no free. Richpanel: no free |
| **Highest Shopify Rating** | 4.9★ (1,739 reviews) vs. Gorgias 4.3★ | Trust signal for SMB merchants |
| **White-Glove Onboarding** | Support team sets up entire chatbot for merchants | Gorgias only offers this at $900+/month (Advanced) |
| **Avada Ecosystem** | Native integration with Joy (loyalty), Air Reviews, SEO Suite | Proprietary distribution advantage (300K+ merchants) |
| **5-Minute Setup** | Install-to-live in minutes, not hours/days | Gorgias and eDesk require significant configuration |
| **AI Autonomy** | End-to-end conversation handling, not just "suggest" | Tidio Lyro suggests; Chatty AI resolves autonomously |
| **Revenue Attribution** | Ties conversations to sales (basic) | Gorgias has this (Pro+); eDesk/Re:amaze/Richpanel don't |

### What Chatty Can Leverage for Helpdesk

1. **AI-first architecture** — competitors added AI to existing helpdesks. Chatty can build helpdesk around AI.
2. **Pricing structure** — "unlimited conversations at flat rate" is uniquely attractive for growing support volume.
3. **Support team quality** — white-glove onboarding creates switching costs and loyalty.
4. **Shopify-native depth** — deeper Shopify integration than multi-platform competitors.

---

## 6. FEATURE GAPS (vs. Helpdesk Competitors)

### Critical Gaps (Must address to enter helpdesk market)

| # | Gap | Impact | Who Does It Best | Effort |
|---|-----|--------|-----------------|--------|
| 1 | **Ticketing system** | Cannot track, assign, or manage support requests at scale | Gorgias, eDesk | High |
| 2 | **Advanced analytics & agent metrics** | Managers can't measure team performance — #1 user complaint | Gorgias (Pro+), eDesk (Growth+) | High |
| 3 | **Order actions (modify, cancel, refund)** | Agents must leave Chatty to handle 40-60% of support requests | Gorgias (AI Agent Actions) | High |
| 4 | **AI email support** | Email is #1 support channel; Chatty AI only works on chat | Gorgias (AI Agent), eDesk (HandsFree) | High |

### High Gaps (Growth enablers)

| # | Gap | Impact | Who Does It Best | Effort |
|---|-----|--------|-----------------|--------|
| 5 | **SLA management** | No time-based escalation for critical issues | Gorgias (Pro+), eDesk | Medium |
| 6 | **Routing & assignment rules** | No intelligent distribution of conversations to agents | Gorgias, eDesk, Richpanel | Medium |
| 7 | **Returns/exchange workflow** | Cannot initiate returns — high-volume support use case | Gorgias (Loop), eDesk | Medium |
| 8 | **Voice/phone support** | No voice channel — required for mid-market | Gorgias (Twilio), Re:amaze (Pro+) | High |
| 9 | **Integration ecosystem** | 8-10 integrations vs. 100-300+ for competitors | eDesk (300+), Gorgias (100+) | Ongoing |
| 10 | **Rules engine / workflow builder** | Only basic smart triggers, no if/then automation | Gorgias (Rules Engine), Richpanel | High |

### Medium Gaps (Nice-to-have for helpdesk)

| # | Gap | Impact | Who Does It Best | Effort |
|---|-----|--------|-----------------|--------|
| 11 | **Self-service portal** | No customer-facing order management portal | Gorgias, Richpanel (unique) | High |
| 12 | **Marketplace support** | No Amazon, eBay, Walmart channels | eDesk (300+), Gorgias (ChannelReply) | High |
| 13 | **Multi-platform (WooCommerce, BigCommerce)** | Shopify-only limits TAM | All helpdesk competitors | Very High |
| 14 | **Internal notes** | Agents can't leave notes for teammates on conversations | Gorgias, Re:amaze, Richpanel | Low |
| 15 | **Business hours** | No time-based behavior changes | Gorgias, eDesk, Re:amaze | Low |

### Recommended Priority Order for Helpdesk Features

| Priority | Feature | Why | Timeline |
|----------|---------|-----|----------|
| P0 | **Analytics & Agent Metrics** | Closes #1 user complaint; table stakes for any support tool | Q1-Q2 2026 |
| P0 | **AI Order Actions** | Check/modify/cancel orders via Shopify API — transforms support capability | Q2-Q3 2026 |
| P0 | **AI Email Support** | Extends AI to email — biggest support channel gap | Q2-Q3 2026 |
| P1 | **Basic Ticketing** | Conversation-to-ticket conversion, assignment rules, status tracking | Q3-Q4 2026 |
| P1 | **Gorgias/Zendesk Integration** | Complement rather than compete — AI layer for existing helpdesks | Q3-Q4 2026 |
| P1 | **Returns Workflow** | High-volume support automation — 40-60% of tickets | Q3-Q4 2026 |
| P2 | **SLA Management** | Mid-market requirement | 2027 |
| P2 | **Voice/Phone** | Channel expansion for larger teams | 2027 |
| P2 | **Self-Service Portal** | Customer-facing order management | 2027 |

---

## 7. PRICING COMPARISON (Helpdesk Context)

### Chatty vs. Helpdesk Competitors — Total Cost for Typical Use Cases

**Use Case 1: Solo merchant, 50 conversations/month**

| Product | Plan | Cost/month | Notes |
|---------|------|-----------|-------|
| **Chatty** | **Free** | **$0** | 50 lifetime AI conversations, then paid |
| Chatty | Basic | $19.99 | 50 AI conversations/month |
| Gorgias | Starter | $10 | 50 tickets, 3 seats |
| eDesk | Essential | $39 | 1 agent seat |
| Re:amaze | Basic | $29 | 1 agent |
| Richpanel | Pro | $69 | 1 agent |

**Use Case 2: Small team (3 agents), 500 conversations/month**

| Product | Plan | Cost/month | Notes |
|---------|------|-----------|-------|
| **Chatty** | **Pro** | **$68.99** | 300 AI + manual. 3 of 10 seats used |
| Gorgias | Basic | $140 | $60 + 200 overage tickets × $0.40 |
| eDesk | Essential | $117 | $39 × 3 agents |
| Re:amaze | Basic | $87 | $29 × 3 agents |
| Richpanel | Pro | $207 | $69 × 3 agents |

**Use Case 3: Growing team (10 agents), 2,000 conversations/month**

| Product | Plan | Cost/month | Notes |
|---------|------|-----------|-------|
| **Chatty** | **Plus** | **$199** | Unlimited agents, 700 AI convos |
| Gorgias | Pro | $360 | 2,000 tickets, 500 seats |
| eDesk | Essential | $390 | $39 × 10 agents |
| Re:amaze | Basic | $290 | $29 × 10 agents |
| Richpanel | Pro | $690 | $69 × 10 agents |

**Chatty is consistently the cheapest option** at every scale. However, it also provides the fewest helpdesk features at every price point. The value proposition is: **pay less, get AI-first support (but not full helpdesk)**.

---

*This analysis evaluates Chatty's current capabilities through a helpdesk lens, drawing on data from meetchatty.com, chatty.net, Shopify App Store, G2 reviews, and comparative feature analyses of Gorgias, eDesk, Re:amaze, and Richpanel from this repository.*
