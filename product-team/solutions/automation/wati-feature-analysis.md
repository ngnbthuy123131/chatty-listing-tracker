---
product: "Wati"
type: feature-analysis
category: automation
last_updated: 2026-02-09
---

# Wati - Full Feature Analysis
*Updated: Q1 2026*

## 1. FEATURE LIST BY PRICING PLAN

### Growth Plan ($69/month or $59/month billed annually)

**Quota:**
- 5 users included
- 1,000 chatbot sessions/month
- WhatsApp Business API access
- Conversation markup fee applies (~20% on top of Meta rates)

**Core Features:**
- Shared Team Inbox for WhatsApp
- Contact management with unlimited contacts
- Canned responses (pre-written reply templates)
- Basic analytics and reporting
- WhatsApp Business API onboarding
- Template message management
- Multi-device support
- Basic contact segmentation
- Export contacts and conversations
- Real-time notifications

**Chatbot Features:**
- Basic chatbot builder (keyword-based)
- Simple automated replies
- Welcome messages
- Away messages
- Business hours configuration

**Integrations:**
- Zapier (basic triggers/actions)
- Webhooks
- REST API access

**Broadcast Features:**
- WhatsApp broadcast messaging
- Template message sending
- Basic audience segmentation
- Schedule broadcasts

**NOT Included:**
- Knowbot (AI Support Agent)
- Advanced chatbot builder
- Shopify integration
- Advanced analytics
- Custom roles and permissions
- Instagram/Facebook integration

---

### Pro Plan ($149/month or $119/month billed annually)

**Quota:**
- 5 users included (additional users ~$25-30/user/month)
- 2,000 chatbot sessions/month
- 20 URLs for Knowbot training
- Conversation markup fee applies

**Everything in Growth, plus:**

**Advanced Chatbot Features:**
- Advanced Chatbot Builder (drag-and-drop)
- Up to 200 steps per chatbot flow
- Conditional logic and branching
- Question nodes with variable storage
- API calls within chatbot flows
- NLP (Natural Language Processing)
- Multi-language support (auto-detect)

**AI Features:**
- Wati Knowbot (AI Support Agent)
- GPT-4 Turbo powered responses
- Train on PDF files (up to 200MB)
- Train on website URLs (up to 20 URLs)
- Auto-detect customer language
- Knowledge base management
- AI-suggested responses

**E-commerce Integration:**
- Shopify integration (separate fee may apply)
- Product catalog sync to WhatsApp
- Order confirmation messages
- Abandoned cart recovery messages
- Shipping update notifications
- WhatsApp Catalog enablement
- Shopify checkout within WhatsApp

**Advanced Analytics:**
- Message delivery reports
- Conversation analytics
- Agent performance metrics
- Response time tracking
- Customer satisfaction metrics

**Team Management:**
- Custom roles and permissions
- Team assignment rules
- Agent workload distribution
- Internal notes on conversations

---

### Business Plan ($349/month or $279/month billed annually)

**Quota:**
- 5 users included (additional users ~$25-30/user/month)
- 5,000 chatbot sessions/month
- 50 URLs for Knowbot training
- Conversation markup fee applies

**Everything in Pro, plus:**

**Enhanced AI Capabilities:**
- Extended Knowbot training (50 URLs vs 20)
- More chatbot sessions (5,000 vs 2,000)
- Priority AI processing
- Advanced AI customization

**Omnichannel Features:**
- Instagram DM integration
- Facebook Messenger integration
- Unified inbox across channels
- Cross-channel conversation history

**Enterprise Features:**
- Priority support
- Dedicated account manager
- Custom onboarding
- SLA guarantees
- Advanced security features
- Audit logs
- IP whitelisting
- Custom contract terms

**Advanced Integrations:**
- HubSpot native integration
- Salesforce integration
- Zoho CRM integration
- Custom API development support
- Webhook customization
- Multiple WhatsApp numbers

**Advanced Broadcast:**
- A/B testing for broadcasts
- Advanced segmentation
- Click-through tracking
- Conversion attribution
- Campaign performance analytics

---

## 2. AI/AUTOMATION FEATURES (Deep Dive)

### Wati Knowbot (AI Support Agent)

**Overview:**
Knowbot is Wati's GPT-powered AI chatbot that can answer customer questions based on uploaded knowledge bases. It uses ChatGPT, GPT-4 Turbo, and other OpenAI models.

**Training Sources:**
- PDF documents (max 200MB per file)
- Website URLs (Pro: 20 URLs, Business: 50 URLs)
- No support for: Shopify product catalog auto-training, custom Q&A pairs

**Language Support:**
- Auto-detect customer language
- Respond in customer's preferred language
- Multi-language knowledge base support

**Limitations:**
- WhatsApp channel only (no web chat, no email)
- Pro and Business plans only (not available on Growth)
- Session-based pricing (uses monthly quota)
- Cannot initiate proactive conversations
- Limited to support use cases (not sales-focused)

### No-Code Chatbot Builder

**Capabilities:**
- Drag-and-drop visual flow builder
- Up to 200 steps per flow
- Node types:
  - Send Message
  - Ask Question
  - Set Condition
  - API Call
  - Set Variable
  - Assign to Agent
  - Trigger Knowbot

**Trigger Options:**
- Keyword match
- Customer action
- Time-based (business hours)
- First message
- Specific template response

**Automation Features:**
- Welcome message automation
- Away message (out of office)
- Business hours auto-replies
- FAQ automation
- Order status lookup
- Appointment booking flows

### Comparison: Wati Knowbot vs Chatty AI

| Feature | Wati Knowbot | Chatty AI |
|---------|--------------|-----------|
| **AI Model** | GPT-4 Turbo | GPT-4 |
| **Training Source** | PDF + URLs | Product catalog (auto), FAQ, URLs, files, custom Q&A |
| **Auto-learn from catalog** | No | Yes (overnight training) |
| **Sales capabilities** | No (support only) | Yes (product recommendations, cart boosting) |
| **Proactive engagement** | No | Yes (smart triggers, cart reminders) |
| **Channels** | WhatsApp only | Web, WhatsApp, Messenger, Instagram, Email |
| **Pricing model** | Session-based quota | Conversation-based quota |
| **Revenue attribution** | No | Yes |
| **Plan availability** | Pro+ ($149+/mo) | Free tier available |

---

## 3. INTEGRATION ECOSYSTEM

### Native Integrations

| Category | Integrations |
|----------|-------------|
| **E-commerce** | Shopify (separate fee), WooCommerce (via Zapier), Magento (via API) |
| **CRM** | HubSpot (Business plan), Salesforce (Business plan), Zoho CRM, Freshsales |
| **Helpdesk** | Zendesk, Freshdesk, Zoho Desk |
| **Payment** | WhatsApp Pay (select regions), Stripe (via webhook) |
| **Spreadsheet** | Google Sheets (via Zapier/Zoho Flow), Airtable |

### Zapier Integration

- 1,000+ app connections
- Triggers: New message, New contact, Message status change
- Actions: Send message, Create contact, Update contact, Send template

### API Access

- REST API available on all plans
- Webhooks for real-time events
- Rate limits vary by plan
- Documentation available

### Comparison: Wati vs Chatty Integrations

| Integration | Wati | Chatty |
|-------------|------|--------|
| **Shopify** | Yes (app, separate fee possible) | Yes (Built for Shopify, native) |
| **Klaviyo** | Via Zapier | Native |
| **Joy Loyalty** | No | Native |
| **Air Reviews** | No | Native |
| **Shopify Flow** | Limited | Native |
| **Multi-channel inbox** | Business plan only | All paid plans |
| **WhatsApp** | Core focus | Supported channel |
| **Facebook Messenger** | Business plan only | All paid plans |
| **Instagram** | Business plan only | All paid plans |
| **Email** | No | All paid plans |
| **Web chat** | No | Core focus |

---

## 4. ANALYTICS & REPORTING

### Available Metrics

**Message Analytics:**
- Messages sent/received
- Delivery rate
- Read rate (open rate)
- Response rate

**Conversation Analytics:**
- Total conversations
- Average response time
- First response time
- Resolution time
- Conversations per agent

**Agent Performance:**
- Messages handled per agent
- Average handling time
- Customer satisfaction (CSAT)
- Agent availability

**Broadcast Analytics:**
- Broadcast delivery rate
- Open rate
- Click-through rate (CTR)
- Opt-out rate

### Limitations

- No revenue attribution (unlike Chatty)
- No sales conversion tracking
- Limited AI performance metrics
- No predictive analytics
- No custom dashboards (basic reports only)
- Export options limited

### Comparison: Wati vs Chatty Analytics

| Feature | Wati | Chatty |
|---------|------|--------|
| **Revenue attribution** | No | Yes |
| **AI resolution rate** | Limited | Yes |
| **Chat-to-sale conversion** | No | Yes |
| **Assisted revenue tracking** | No | Yes |
| **Agent performance** | Basic | Basic |
| **Custom reports** | No | No |

---

## 5. UNIQUE/DIFFERENTIATING FEATURES

### WhatsApp-Native Capabilities

1. **Official WhatsApp BSP Status**
   - Direct API access from Meta
   - Faster template approvals
   - Higher messaging limits
   - Green tick verification support

2. **WhatsApp Catalog Integration**
   - Sync product catalogs from Shopify
   - Display products within WhatsApp
   - In-chat product browsing
   - Direct checkout via WhatsApp Pay (select regions)

3. **Broadcast & Campaign Management**
   - Template message library
   - Pre-approved message templates
   - Scheduled broadcasts
   - Audience segmentation
   - Campaign A/B testing (Business plan)

4. **WhatsApp Pay Integration**
   - In-chat payment collection
   - Order confirmation via WhatsApp
   - Payment status notifications
   - Available in India, Brazil, and select markets

### Emerging Market Focus

- Optimized for India, Brazil, Mexico, Southeast Asia
- Local currency pricing (INR, BRL)
- Regional support teams
- Compliance with local regulations (RBI, LGPD)

### Multi-Number Support

- Business plan supports multiple WhatsApp numbers
- Separate inboxes or unified view
- Number-specific routing rules

---

## 6. FEATURE GAPS (vs. Chatty and Top Competitors)

### Features Wati Lacks (That Chatty Has)

| Feature | Wati Status | Chatty Status |
|---------|-------------|---------------|
| **Web chat widget** | Not available | Core feature |
| **AI sales assistant** | No (support only) | Yes (product recommendations, cart boosting) |
| **Auto-train from product catalog** | No (manual training only) | Yes (overnight auto-learning) |
| **Email integration** | Not available | Available |
| **Revenue tracking** | Not available | Core feature |
| **Smart sales triggers** | Not available | Yes (cart reminders, collection boosts) |
| **Flat-rate pricing** | No (markup + add-ons) | Yes |
| **Free tier** | No (7-day trial only) | Yes (50 lifetime conversations) |
| **Built for Shopify badge** | No | Yes |
| **4.5+ Shopify rating** | No (3.7 stars) | Yes (4.9 stars) |

### Features Wati Lacks (That Respond.io Has)

| Feature | Wati Status | Respond.io Status |
|---------|-------------|-------------------|
| **Voice/Calling API** | Not available | Available |
| **AI Agent for calls** | Not available | Available |
| **Advanced workflow logic** | Basic (200 steps) | Advanced (unlimited) |
| **Multi-channel (equal focus)** | WhatsApp-centric | True omnichannel |
| **Enterprise scalability** | Limited | Strong |

### Features Wati Lacks (That Interakt Has)

| Feature | Wati Status | Interakt Status |
|---------|-------------|-----------------|
| **Lower pricing** | $69+ | $49+ |
| **Simpler pricing model** | Complex (markup + add-ons) | Simpler |
| **Better Shopify app rating** | 3.7 stars | Higher |

### Areas for Wati Improvement

1. **Pricing Transparency**
   - Hidden markup fees create trust issues
   - Need clearer total cost calculator
   - Consider flat-rate options

2. **Support Quality**
   - Multiple complaints about declining support
   - Need to scale support team with customer growth
   - Implement better ticketing and SLAs

3. **Shopify App Quality**
   - 3.7-star rating is concerning
   - Fix bugs and stability issues
   - Improve onboarding experience

4. **AI Capabilities**
   - Knowbot is support-focused only
   - Need sales/commerce AI features
   - Add product recommendation capabilities

5. **Web Chat**
   - No website chat widget
   - Limits appeal to businesses wanting unified solution
   - Consider adding web chat channel

6. **Analytics**
   - No revenue attribution
   - Limited sales conversion tracking
   - Need better ROI measurement tools

---

## Pricing Comparison Summary

| Plan | Wati | Chatty |
|------|------|--------|
| **Free** | Not available | $0 (50 lifetime AI conversations) |
| **Entry** | $69/mo (Growth) | $19.99/mo (Basic) |
| **Mid** | $149/mo (Pro) | $68.99/mo (Pro) |
| **Top** | $349/mo (Business) | $199/mo (Plus) |
| **Pricing model** | Subscription + markup + add-ons | Flat-rate + overage |
| **Hidden costs** | Yes (20% markup, extra users, integrations) | Minimal ($0.40/extra AI convo) |
| **Annual discount** | ~20-25% | ~15% |

### Total Cost Comparison (Example: 5 users, 500 AI conversations/month)

| Cost Component | Wati Pro | Chatty Pro |
|----------------|----------|------------|
| **Base subscription** | $149/mo | $68.99/mo |
| **Additional users** | $0 (5 included) | $0 (10 included) |
| **AI/Chatbot quota** | 2,000 sessions | 300 conversations |
| **Conversation markup** | ~$50-100/mo (est.) | $0 |
| **Estimated total** | **$200-250/mo** | **$68.99/mo** |

**Note:** Wati's actual costs can be 2-3x the base price due to conversation markups and add-ons (Source: Product Hunt user reviews).

---

*Analysis based on publicly available information as of Q1 2026. Features and pricing may change.*
