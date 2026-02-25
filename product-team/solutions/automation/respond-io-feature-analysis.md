---
product: "Respond.io"
type: feature-analysis
category: automation
last_updated: 2026-02-09
---

# Respond.io - Full Feature Analysis
*Updated: Q1 2026*

## 1. FEATURE LIST BY PRICING PLAN

### Starter ($79/month | $66/month billed annually)

**Quota:**
- 5 Users included
- 1,000 Monthly Active Contacts (MACs) included
- Overage: Additional MACs available at $12/100 MACs

**Core Features:**
- Omnichannel Inbox (unified inbox for all channels)
- Team Inbox organization
- Custom Inboxes for workflow segmentation
- Mobile App (iOS & Android)
- Growth Widgets (web chat widgets)
- Contact management & merging
- Conversation history
- Internal notes & mentions
- Basic Reports (overview metrics)
- Two-Factor Authentication (2FA)
- Contact Import/Export

**AI Features:**
- AI Prompt (quick AI-assisted responses)
- AI Assist (AI suggestions while typing)

**Channels Supported:**
- WhatsApp Business API
- Facebook Messenger
- Instagram Direct Messages
- Telegram
- LINE
- WeChat
- SMS (via Twilio/MessageBird)
- Email
- Web Chat

**Limitations:**
- No Workflows automation
- No AI Agents
- No Broadcasts
- No API access
- No Zapier/Make integrations
- Basic reporting only

---

### Growth ($159/month | $133/month billed annually) - Most Popular

**Quota:**
- 10 Users included (additional users at $20/month each)
- 1,000 Monthly Active Contacts included (scalable)
- Overage: $12/100 additional MACs

**Everything in Starter, plus:**

**Core Features:**
- Workflows Automation (no-code visual builder)
- Workflow Templates library
- Broadcasts (bulk messaging across channels)
- Advanced Reports (detailed analytics)
- Developer API access
- Zapier Integration (5,000+ apps)
- Make.com Integration
- Custom fields for contacts
- Tags and segments
- Conversation assignment rules

**AI Features:**
- AI Agents (autonomous conversation handling)
- Pre-built AI Agent roles:
  - AI Sales Agent
  - AI Support Agent
  - AI Receptionist
- Custom AI Agent creation
- AI Knowledge Base (PDFs, URLs, documents)
- AI Actions (trigger workflows, update CRM, book appointments)
- Voice note transcription

**Automation Capabilities:**
- Trigger-based workflows
- Multi-step automation sequences
- Conditional branching
- Time delays and scheduling
- Lead qualification flows
- Auto-assignment rules
- Escalation rules
- SLA management

---

### Advanced ($279/month | $233/month billed annually)

**Quota:**
- 10 Users included (additional users at $24/month each)
- 1,000 Monthly Active Contacts included (scalable)
- Overage: $15/100 additional MACs

**Everything in Growth, plus:**

**Core Features:**
- Multiple Workspaces (manage multiple brands/teams)
- HTTP Requests in Workflows (external API calls)
- Webhooks (inbound event triggers)
- Single Sign-On (SSO) via SAML
- Custom Channels (bring your own channel)
- Priority support

**Privacy & Security:**
- Mask Phone Number (hide agent phone numbers)
- Mask Email Address (hide agent emails)
- Advanced access controls
- IP whitelisting

**AI Features:**
- Voice AI (AI-powered phone calls)
- AI Agents can answer incoming calls
- Real-time voice conversations
- Automated call transcription

**Integrations:**
- Native HubSpot integration
- Native Salesforce integration
- Direct database connections
- Custom webhook configurations

---

### Enterprise (Custom Pricing)

**Quota:**
- Unlimited Users
- Custom MACs allocation
- Volume discounts available

**Everything in Advanced, plus:**

**Core Features:**
- Dedicated account manager
- Custom onboarding & training
- Custom SLA agreements
- Elevated API rate limits
- Higher workspace limits
- Custom contract terms

**Security & Compliance:**
- SOC 2 compliance support
- HIPAA compliance (healthcare)
- Custom data retention policies
- Dedicated infrastructure options

**Support:**
- 24/7 priority support
- Direct engineering escalation
- Quarterly business reviews

---

## 2. AI/AUTOMATION FEATURES (Deep Dive)

### AI Agent Architecture

Respond.io uses an **AI Orchestrator** model that coordinates multiple specialized micro-agents:

| Component | Function |
|-----------|----------|
| **Orchestrator** | Routes conversations to appropriate micro-agents |
| **Retrieval Agent** | Fetches answers from knowledge sources |
| **Action Agent** | Executes tasks (CRM updates, bookings, etc.) |
| **Routing Agent** | Determines escalation and handoff rules |

### Pre-built AI Agent Templates

| Agent Type | Use Case | Capabilities |
|------------|----------|--------------|
| **AI Sales Agent** | Lead qualification | Qualify leads, recommend products, send payment links, schedule demos |
| **AI Support Agent** | Customer service | Answer FAQs, troubleshoot issues, create tickets, process refunds |
| **AI Receptionist** | Front desk | Handle inquiries, book appointments, route to departments |
| **Custom Agent** | Specialized tasks | User-defined instructions and actions |

### AI Knowledge Management

**Supported Knowledge Sources:**
- PDF documents
- DOCX files
- Product catalogs
- Website URLs (auto-crawling)
- Images (product photos, diagrams)
- Manual Q&A entries

**Knowledge Updates:**
- Real-time sync for connected URLs
- Manual upload refresh
- Version control for documents

### AI Actions (What AI Agents Can Do)

| Action Category | Specific Actions |
|-----------------|------------------|
| **Data Collection** | Capture name, email, phone, custom fields |
| **Lead Management** | Update lifecycle stage, add tags, score leads |
| **CRM Integration** | Push data to HubSpot/Salesforce, update records |
| **Commerce** | Send payment links, product recommendations |
| **Scheduling** | Book appointments via calendar integrations |
| **Workflow Triggers** | Start other workflows based on conversation |
| **Escalation** | Transfer to human agent with context |
| **Translation** | Translate messages in real-time |

### Voice AI Capabilities (Advanced Plan)

- Answer incoming phone calls automatically
- Hold natural voice conversations
- Understand spoken questions
- Ask follow-up questions
- Collect information verbally
- Transcribe calls automatically
- Process voice notes from messaging apps

### Workflow Automation

**Trigger Types:**
- Conversation opened
- Message received
- Keyword detected
- Contact created/updated
- Lifecycle stage changed
- Webhook received
- Scheduled time
- Manual shortcut

**Step Types:**
- Send message
- Add tag
- Update contact field
- Assign to user/team
- Wait (time delay)
- Branch (if/else conditions)
- AI Agent (autonomous handling)
- HTTP Request (external API)
- Trigger another workflow
- Close conversation

**Workflow Templates:**
- Welcome message series
- Lead qualification
- VIP customer identification
- After-hours auto-reply
- Survey collection
- Appointment booking
- Order status updates

---

## 3. INTEGRATION ECOSYSTEM

### Native Messaging Channels

| Channel | Status | Notes |
|---------|--------|-------|
| WhatsApp Business API | Full support | BSP partner, includes Calling API |
| Facebook Messenger | Full support | Includes Messenger Calls (coming soon) |
| Instagram DM | Full support | Business accounts |
| TikTok Business Messaging | Beta | Limited availability |
| Telegram | Full support | Bot API |
| WeChat | Full support | Official accounts |
| LINE | Full support | LINE Official Account |
| Viber | Full support | Business messages |
| SMS | Via Twilio/MessageBird | Requires separate account |
| Email | Full support | SMTP/IMAP |
| Web Chat | Full support | Customizable widget |
| VoIP Calls | Full support (Advanced) | SIP integration |

### CRM Integrations

| Platform | Integration Type | Features |
|----------|-----------------|----------|
| **HubSpot** | Native | Bi-directional sync, contact merge, deal updates |
| **Salesforce** | Native | Lead/contact sync, opportunity tracking |
| **Zoho CRM** | Via Zapier/Make | Contact sync, deal management |
| **Pipedrive** | Via Zapier/Make | Deal and contact sync |

### E-commerce Integrations

| Platform | Integration Type | Features |
|----------|-----------------|----------|
| **Shopify** | Native + Webhook | Web chat widget, order notifications, abandoned cart |
| **Magento** | Via Zapier | Contact sync, order updates |
| **WooCommerce** | Via Zapier | Order notifications, customer sync |

### Automation Platforms

| Platform | Features |
|----------|----------|
| **Zapier** | 5,000+ app connections, triggers & actions |
| **Make.com** | Advanced workflow automation |
| **n8n** | Self-hosted automation option |
| **MCP Server** | AI tools connectivity |

### Other Integrations

| Category | Platforms |
|----------|-----------|
| **Spreadsheets** | Google Sheets (automated data entry) |
| **Calendars** | Google Calendar, Calendly (appointment booking) |
| **Payments** | Stripe (payment links) |
| **Marketing** | TikTok Ads (click-to-message) |
| **Custom** | Webhooks, HTTP Requests, Developer API |

---

## 4. ANALYTICS & REPORTING

### Basic Reports (Starter)

- Total conversations
- Response time overview
- Messages sent/received
- Contact growth

### Advanced Reports (Growth+)

**Conversation Metrics:**
- Conversations by channel
- First response time
- Resolution time
- Conversations by status (open/resolved/snoozed)
- Peak hours analysis

**Agent Performance:**
- Messages per agent
- Response time per agent
- Conversations handled
- Resolution rate

**Contact Analytics:**
- New contacts over time
- Contacts by channel
- Contact lifecycle distribution
- Tag distribution

**Broadcast Analytics:**
- Delivery rate
- Read rate
- Click-through rate
- Opt-out rate

**Workflow Analytics:**
- Workflow completion rate
- Drop-off points
- Average completion time

### Reporting Limitations (User Feedback)

- Limited customization options
- No custom dashboard builder
- SLA metrics not flexible
- Export options limited
- No real-time dashboards
- Historical data retention unclear

---

## 5. UNIQUE/DIFFERENTIATING FEATURES

### 1. True Omnichannel Inbox

Unlike competitors that focus on 2-3 channels, Respond.io supports **13+ messaging channels** including voice. All conversations appear in a single unified inbox with full context.

### 2. WhatsApp Business Solution Provider (BSP)

Respond.io is an official Meta partner, enabling:
- Direct WhatsApp Business API provisioning
- No third-party BSP fees
- WhatsApp Business Calling API access
- Higher message throughput

### 3. Voice AI (Advanced Plan)

One of few platforms offering **AI-powered phone call handling**:
- AI answers incoming calls
- Natural voice conversations
- Real-time speech recognition
- Automatic call transcription
- Seamless handoff to human agents

### 4. AI Orchestrator Architecture

Multi-agent system where specialized micro-agents collaborate:
- More reliable than single-agent systems
- Better task specialization
- Improved accuracy for complex queries

### 5. Multimodal AI Processing

AI agents can process:
- Text messages
- Images (product photos, screenshots)
- Audio files and voice notes
- PDF documents
- Multiple file types simultaneously

### 6. No-Code Workflow Builder

Visual workflow builder with:
- Drag-and-drop interface
- Pre-built templates
- Conditional branching
- HTTP requests (for API calls)
- Multi-step automation

### 7. Contact Lifecycle Management

Built-in CRM-lite features:
- Custom lifecycle stages
- Lead scoring
- Tag management
- Segment creation
- Pipeline visualization

---

## 6. FEATURE GAPS (vs. Chatty and Competitors)

### Gaps vs. Chatty

| Feature | Respond.io | Chatty | Gap Assessment |
|---------|------------|--------|----------------|
| **Shopify Native App** | No (via Zapier/webhook) | Yes ("Built for Shopify") | **Major gap** - Chatty has deeper Shopify integration |
| **Pricing for SMB** | $79-279/month | $0-199/month | **Major gap** - 4-8x more expensive |
| **Shopify App Store presence** | None | 4.9 stars, 1,735+ reviews | **Major gap** - No discovery channel |
| **Flat-rate AI pricing** | MACs-based | Conversation-based | Chatty's model scales better |
| **E-commerce focus** | Generic | E-commerce specialized | Chatty better for online stores |
| **FAQ Help Center** | No dedicated builder | Yes (SEO-optimized) | Chatty has built-in FAQ system |

### Gaps vs. Other Competitors

| Feature | Respond.io | Competitors with Feature | Gap Assessment |
|---------|------------|-------------------------|----------------|
| **24/7 Support** | Weekdays only | Tidio, Intercom | Users complain about weekend gaps |
| **Custom Analytics Dashboards** | No | Zendesk, Intercom | Reporting inflexible |
| **Native Magento Integration** | Via Zapier only | eDesk, Gorgias | Adds cost/complexity |
| **Ticketing System** | Basic | Zendesk, Freshdesk, Gorgias | Not a helpdesk replacement |
| **Community Forum** | No | Zendesk, HubSpot | No user community |
| **Free Tier** | 7-day trial only | Tidio, ManyChat, Chatty | No freemium option |

### Features Respond.io Has That Chatty Lacks

| Feature | Respond.io | Chatty Status | Opportunity for Chatty |
|---------|------------|---------------|----------------------|
| **Voice AI** | Yes (incoming calls) | No | Future roadmap item |
| **Email Channel** | Yes | No | Multi-channel expansion |
| **WeChat, LINE, Viber** | Yes | No | Asia market expansion |
| **TikTok DM** | Yes (Beta) | No | Gen-Z commerce channel |
| **Multiple Workspaces** | Yes | No | Agency/multi-brand use case |
| **SSO/SAML** | Yes | No | Enterprise requirement |
| **Developer API** | Full API | Limited | Platform play opportunity |
| **HTTP Requests in Workflows** | Yes | No | Advanced automation |

### Pricing Comparison

| Plan Level | Respond.io | Chatty | Price Difference |
|------------|------------|--------|------------------|
| **Free/Entry** | $79/mo (Starter) | $0 (Free) | Chatty wins by $79 |
| **Mid-tier** | $159/mo (Growth) | $19.99/mo (Basic) | Chatty 8x cheaper |
| **Professional** | $279/mo (Advanced) | $68.99/mo (Pro) | Chatty 4x cheaper |
| **Enterprise** | Custom | $199/mo (Plus) | Chatty significantly cheaper |

### Strategic Recommendations for Chatty

**Learn from Respond.io:**
1. **Voice AI**: Monitor this space; may become table stakes
2. **Workflow Builder**: Invest in more powerful no-code automation
3. **Multi-channel**: Consider adding Email and TikTok DM
4. **Developer API**: Build out API for integrations

**Maintain Advantage Over Respond.io:**
1. **Shopify-native**: Keep deepening Shopify integration
2. **Pricing**: Maintain flat-rate, affordable pricing
3. **SMB Focus**: Don't chase enterprise at cost of SMB experience
4. **Support Quality**: Continue white-glove support (4.9-star advantage)

---

## Summary: Respond.io vs. Chatty Positioning

| Dimension | Respond.io | Chatty |
|-----------|------------|--------|
| **Target Market** | B2C mid-market/enterprise | SMB Shopify merchants |
| **Pricing Model** | MACs + Users | Flat-rate + AI conversations |
| **Price Range** | $79-279/month | $0-199/month |
| **Channel Focus** | Omnichannel (13+ channels) | Social + Website (5-6 channels) |
| **Platform Focus** | Multi-platform | Shopify-only |
| **AI Model** | AI Orchestrator (multi-agent) | GPT-4 (single model) |
| **Key Strength** | Omnichannel breadth | E-commerce depth + price |
| **Key Weakness** | Price, no Shopify app | Channel limitations |

**Bottom Line**: Respond.io and Chatty serve different segments. Respond.io targets B2C businesses needing true omnichannel (especially WhatsApp-heavy markets in SEA/LATAM), while Chatty dominates Shopify SMB with superior value and native integration. Direct competition is limited, but Chatty should monitor Respond.io's AI and workflow innovations for future roadmap inspiration.

---

*Analysis based on public information as of Q1 2026*
*Sources: respond.io official website, G2, Capterra, GetLatka, Crunchbase, SimilarWeb*
