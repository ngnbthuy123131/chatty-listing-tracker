# Chatty Team Scope - Product Division

**Effective Date:** February 2026

## Overview

Chia team Chatty thành 3 đội phát triển sản phẩm song song, tối ưu hóa expertise và ownership theo từng product line.

---

## 🤖 Team 1: AI-Chatbot

**Mission:** Phát triển AI assistant & chatbox để tự động trả lời khách hàng

**Product Owner:** Drake Quach (CPO)

### Team Members

| Name | Role | Primary Responsibility |
|------|------|------------------------|
| **ĐôngNV** | **Team Lead** | AI/LLM integration, training data, Bedrock KB |
| ĐăngTH | Developer | AI workflow, scenarios, chatbox UI/UX |
| ĐôngGV | Developer | AI recommendations, product lookup (Weaviate) |
| ĐạtVM | Tech Lead (Shared) | Architecture oversight, technical decisions |

### Scope

**Core Features:**
- AI Assistant (chatbot logic, behavior, personality)
- LLM Integration (OpenAI, Bedrock, translation)
- Training Data Management (products, FAQs, custom data)
- Chatbox UI/UX (frontend, responsive, dark mode)
- Product Recommendations (similar, best seller, new arrival)
- Suggested Questions (AI-generated, merchant questions)
- AI Testing & Preview (test AI screen, preview chat)
- RAG & Knowledge Base (Bedrock KB, auto-generate QnA)

**Tech Stack:**
- Backend: LangChain, LangGraph, Langfuse
- AI: OpenAI, AWS Bedrock, Weaviate (vector search)
- Frontend: React, Zustand, chatbox widget

**Key Metrics:**
- AI response accuracy
- Customer satisfaction with AI answers
- AI conversation completion rate
- Training data coverage

---

## 📢 Team 2: Automation

**Mission:** Phát triển marketing automation & proactive messaging để tăng engagement

**Product Owner:** Drake Quach (CPO)

### Team Members

| Name | Role | Primary Responsibility |
|------|------|------------------------|
| **ĐăngTH** | **Team Lead** (Shared) | Proactive chat workflow, scenarios |
| ĐôngGV | Developer (Shared) | Proactive chat rules, triggers |
| Phuc | Developer | Automation flows, Shopify Flow templates |
| HưngNB | Developer | Campaigns, auto-actions |
| ĐạtVM | Tech Lead (Shared) | Architecture oversight |

### Scope

**Core Features:**
- Proactive Chat (welcome visitors, cart abandonment, order tracking)
- Campaign Management (message campaigns, targeting rules)
- Automation Workflows (auto-resolve, auto-assign, triggers)
- Scenarios & Rules (country, cart value, inventory, customer segment)
- Shopify Flow Templates
- Welcome Popup & Chat Availability
- Subscribe Newsletter Chatbot
- Customer Segmentation for campaigns

**Tech Stack:**
- Backend: Event-driven, PubSub, Queue
- Automation: Shopify Flow, custom workflow engine
- Frontend: Campaign builder, scenario editor

**Key Metrics:**
- Proactive chat engagement rate
- Campaign conversion rate
- Automation workflow success rate
- Lead generation via subscribe chatbot

---

## 🎫 Team 3: Helpdesk

**Mission:** Phát triển omnichannel helpdesk & team collaboration cho support teams

**Product Owner:** Drake Quach (CPO)

### Team Members

| Name | Role | Primary Responsibility |
|------|------|------------------------|
| **DũngNT** | **Team Lead** | Inbox, conversation management, multi-channel |
| AnhTH | Developer | Analytics, reports, team performance |
| Phuc | Developer (Shared) | Integrations (Zendesk, Klaviyo, email) |
| HưngNB | Developer (Shared) | Integrations, satisfaction survey |
| ĐạtVM | Tech Lead (Shared) | Architecture oversight |

### Scope

**Core Features:**
- Inbox & Conversation Management (create, resolve, reset, attributes)
- Multi-Channel Integration (Instagram, Messenger, WhatsApp, Email)
- Customer & Order Details (Shopify customer data, order history)
- Team Collaboration (assign, transfer, online status, notifications)
- Analytics & Reports (chat analytics, agent performance, team performance)
- Integrations (Zendesk, Klaviyo, email transcript, web push)
- Usage & Pricing (plan limits, additional charges, subscription logic)
- Satisfaction Survey & CSAT tracking
- Related Conversations (conversation history)

**Tech Stack:**
- Backend: Real-time messaging, webhook integrations
- Channels: Meta Graph API (IG, Messenger, WhatsApp), Email
- Analytics: Event tracking, Customer.io, reporting dashboard
- Integrations: Zendesk API, Klaviyo API

**Key Metrics:**
- Average first response time
- Conversation resolution rate
- Multi-channel message volume
- Agent productivity & CSAT score

---

## 🔧 Shared Infrastructure & Cross-Team

### ĐạtVM - Tech Lead (All Teams)

**Responsibilities:**
- Architecture decisions across all products
- Code review & technical mentoring
- Performance optimization & security
- System design & scalability
- Cross-team technical alignment

### Shared Responsibilities

**Translation & i18n** (All Teams)
- Owner: Phuc, HưngNB
- Auto translation, multi-language support
- Translation for chatbox, FAQs, campaigns, email

**FAQ System** (AI-Chatbot + Helpdesk)
- Owner: Phuc, HưngNB
- FAQ management, categories, SEO
- FAQ page, FAQ blocks

**Data & Analytics** (All Teams)
- Backend: ĐôngNV, AnhTH, ĐôngGV
- Event tracking, analytics schema, reporting

---

## Team Collaboration Model

### Daily Standup
- Each team: 15-min standup (progress, blockers, plan)
- All-hands: 1x/week (cross-team sync, dependencies)

### Sprint Planning
- 2-week sprints per team
- Aligned sprint start/end dates across teams
- Cross-team dependency planning in advance

### Code Review
- ĐạtVM reviews architecture-level changes
- Team leads review within-team PRs
- Cross-team reviews for shared infrastructure

### Knowledge Sharing
- Weekly tech talk (rotate across teams)
- Shared documentation in Notion
- Slack channels: #ai-chatbot, #automation, #helpdesk

---

## Decision Framework

### Product Decisions
- **Product Owner (Drake)** decides feature priority & roadmap
- **Team Leads** decide implementation approach
- **ĐạtVM** decides architecture & tech stack

### Escalation Path
1. Team Lead → ĐạtVM (technical)
2. Team Lead → Drake (product)
3. ĐạtVM → Sam (strategic/resource)

---

## Success Metrics by Team

### AI-Chatbot Team
- ✅ AI response accuracy > 85%
- ✅ AI conversation completion rate > 60%
- ✅ Merchant satisfaction with AI training > 4.5/5

### Automation Team
- ✅ Proactive chat engagement rate > 30%
- ✅ Campaign conversion rate > 5%
- ✅ Lead capture via subscribe chatbot > 1000/month

### Helpdesk Team
- ✅ Average first response time < 2 minutes
- ✅ CSAT score > 4.5/5
- ✅ Multi-channel message volume growth > 20% MoM

---

## Notes

- **Shared members** (ĐăngTH, ĐôngGV, Phuc, HưngNB) allocate time based on sprint priorities
- **ĐạtVM** provides 20% time to each team + 40% on infrastructure
- Teams can request temporary help from other teams via ĐạtVM coordination
- Product roadmap priorities may shift team focus quarter-by-quarter

**Last Updated:** February 9, 2026
