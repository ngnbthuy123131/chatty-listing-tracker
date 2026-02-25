---
product: "Tidio"
type: deep-research
category: automation
last_updated: 2026-02-09
see_also: ../ai-chatbot/tidio.md
---

# Tidio Automation & Lyro AI: Nền tảng AI customer service hàng đầu cho SMB

**Tidio là công ty SaaS có trụ sở tại Ba Lan và San Francisco, đã phát triển Lyro AI — một trong những conversational AI agent tiên phong dành cho SMB, đạt tỷ lệ resolution rate trung bình 67% (cao nhất ngành theo Tidio công bố).** Với tổng vốn huy động **$26,8 triệu**, trạng thái cash-flow positive từ 2022, và hơn **300.000 businesses** sử dụng platform, Tidio đã định vị thành công ở phân khúc automation-first customer service. Lyro AI được xây dựng trên nền tảng **Claude (Anthropic)** — khác biệt so với đa số đối thủ sử dụng OpenAI — và có khả năng hoạt động đa kênh (Live Chat, Email, WhatsApp, Messenger, Instagram) với hỗ trợ **48+ ngôn ngữ**. Báo cáo này tập trung vào khía cạnh **Automation & AI** của Tidio, đặc biệt là Lyro AI Agent và Flows — hai sản phẩm cốt lõi trong chiến lược tự động hóa customer service.

---

## 1. Tổng quan về Tidio Automation & Lyro AI

### Lịch sử phát triển automation capabilities

Tidio bắt đầu với **live chat widget** từ năm 2013-2014, sau đó dần phát triển thêm **Flows** (chatbot rule-based) như một công cụ automation không cần code. Bước ngoặt lớn nhất là **tháng 7/2023** khi ra mắt **Lyro AI** — conversational AI agent đầu tiên của công ty, được xây dựng trên Claude (Anthropic).

| Mốc thời gian | Sự kiện automation |
|---|---|
| 2013-2014 | Thành lập Tidio, ra mắt live chat widget |
| ~2017-2018 | Ra mắt Flows — visual chatbot builder đầu tiên |
| 2019-2022 | Phát triển 40+ Flow templates, tích hợp sâu với Shopify |
| **07/2023** | **Ra mắt Lyro AI** — conversational AI agent đầu tiên |
| 09/2024 | Lyro nâng cấp lên Claude 3.0 |
| **11/2024** | **Lyro mở rộng sang Email channel** — đạt ~90% resolution rate cho email |
| 01/2025 | Ra mắt Lyro Smart Actions — AI thực hiện tác vụ qua API |
| Đầu 2025 | Được vinh danh **AI Company of the Year** tại Global Business Tech Awards 2025 |

(Nguồn: TechCrunch 05/2022, Tidio blog, PeakSpan Capital, PRWeb)

### Hai trụ cột automation: Lyro AI vs Flows

Tidio có **hai hệ thống automation riêng biệt** nhưng bổ trợ lẫn nhau:

**Lyro AI Agent** là conversational AI sử dụng Large Language Models (Claude/Anthropic) để hiểu ngữ cảnh và trả lời tự nhiên như con người. Lyro học từ knowledge base của doanh nghiệp (FAQ, help articles, website content) và chỉ trả lời dựa trên thông tin đã được cung cấp — không "bịa" (hallucinate). Lyro xử lý các câu hỏi phức tạp, multi-turn conversations, và có thể thực hiện actions qua API.

**Flows** là hệ thống automation rule-based truyền thống với visual drag-and-drop builder. Flows hoạt động theo logic "if X happens, then do Y" — không có AI suy luận mà chạy theo kịch bản cố định. Flows phù hợp cho các tác vụ có quy trình rõ ràng: welcome messages, cart abandonment, lead capture, appointment booking.

| Tiêu chí | Lyro AI | Flows |
|---|---|---|
| **Logic** | AI/NLP — hiểu ngữ cảnh | Rule-based — theo kịch bản |
| **Flexibility** | Cao — xử lý câu hỏi không lường trước | Thấp — chỉ theo flow đã định |
| **Setup** | Upload knowledge base | Drag-and-drop builder |
| **Best for** | FAQ, support inquiries, complex questions | Lead gen, cart recovery, proactive triggers |
| **Pricing** | Per conversation (add-on riêng) | Per visitor reached (add-on riêng) |

(Nguồn: Tidio Help Center, Tidio Features page)

---

## 2. Lyro AI Agent: Công nghệ và khả năng

### Nền tảng AI: Claude (Anthropic) — không phải OpenAI

Điểm khác biệt quan trọng nhất của Lyro so với đa số đối thủ (Intercom Fin, Zendesk, các chatbot dùng ChatGPT) là việc sử dụng **Claude của Anthropic** thay vì OpenAI. Tidio lựa chọn Claude vì:

- **Trustworthiness**: Claude được fine-tune để "helpful and harmless" — giảm thiểu responses không phù hợp
- **No hallucination by design**: Lyro chỉ trả lời từ knowledge base đã cung cấp, từ chối trả lời nếu không có thông tin
- **Security**: Conversations không được dùng để train public AI models

Theo Anthropic case study, Tidio đã phát triển **hệ thống multi-agent** — nhiều Claude instances làm việc song song: một agent đánh giá conversation quality, agent khác tóm tắt, tạo thành network chuyên biệt (Source: claude.com/customers/tidio).

### Resolution rate: 67% trung bình, peak 90%

Tidio công bố Lyro đạt **67% average resolution rate** — cao nhất ngành theo benchmark nội bộ của họ. Một số case studies cụ thể:

| Khách hàng | Ngành | Resolution Rate | Kết quả khác |
|---|---|---|---|
| **Axioma** | Automotive repair | **89%** | 21% sales bot engagement |
| **Borrowell** | Fintech | **83%** | Zendesk integration thành công |
| **Your KAYA** | Personal care | **75%** | Giảm workload support team |
| **MattressNextDay** | Retail | **73%** | Tiết kiệm 400+ giờ/tháng |
| **Cove Smart** | Smart security | **70%** | Tăng CSAT 35% |
| **Secureframe** | Compliance SaaS | **59%** | 20x improvement từ bot cũ |
| **NRVTA** | Education | **94%** | Case study highlight |

(Nguồn: tidio.com/resources/case-studies/)

**Lưu ý quan trọng**: Đây là dữ liệu từ case studies do Tidio tự công bố — có thể cherry-pick các cases thành công nhất. Resolution rate thực tế across all customers có thể thấp hơn. Intercom Fin và Zendesk cũng claim 50-86% resolution rates.

### Lyro Actions: AI thực hiện tác vụ qua API

**Lyro Actions** biến Lyro từ Q&A bot thành **AI agent có khả năng thực hiện hành động**. Thay vì chỉ trả lời câu hỏi, Lyro có thể:

| Use case | Action | Hệ thống tích hợp |
|---|---|---|
| **WISMO** | Kiểm tra trạng thái đơn hàng | Shopify, WooCommerce |
| **Address change** | Cập nhật địa chỉ giao hàng | E-commerce platforms |
| **Returns** | Khởi tạo quy trình đổi trả | CRM, helpdesk |
| **Lead capture** | Thu thập thông tin prospect | HubSpot, Salesforce, Pipedrive |
| **Booking** | Đặt lịch demo/appointment | Calendly, Google Calendar |
| **Account updates** | Cập nhật thông tin khách hàng | CRM systems |

Lyro Smart Actions có **visual builder** — không cần code để tạo API workflows. Tuy nhiên, đây là feature cho **Plus plan ($749/tháng)** trở lên, với giới hạn số Actions (Free: 1 action, Plus: 10 actions).

(Nguồn: Tidio Lyro Actions page, help.tidio.com)

### Multi-channel: Live Chat, Email, Social, WhatsApp

Lyro hoạt động trên **tất cả các kênh** mà Tidio hỗ trợ:

| Channel | Lyro support | Ghi chú |
|---|---|---|
| **Live Chat (widget)** | Full | Primary channel, fastest response |
| **Email (Ticketing)** | Full (từ 11/2024) | ~90% resolution rate theo Tidio |
| **Facebook Messenger** | Full | Via Tidio Multichannel |
| **Instagram DM** | Full | Via Tidio Multichannel |
| **WhatsApp** | Full | Via Tidio Multichannel integration |

Lyro trả lời **48+ ngôn ngữ** với native language processing (không phải translation) — competitive advantage cho businesses serving international customers.

(Nguồn: help.tidio.com/hc/en-us/articles/9003475527196)

### Lyro Connect: Tích hợp với helpdesks khác

**Lyro Connect** cho phép sử dụng Lyro AI như một **standalone AI layer** trên các helpdesk hiện có mà không cần migrate sang Tidio:

- **Zendesk**: Lyro reply emails, auto-create tickets, import Zendesk articles
- **Salesforce**: Create/update cases, sync transcripts, escalate conversations
- **Intercom, Gorgias**: Similar integrations via API

Đây là chiến lược thông minh để mở rộng TAM — thay vì compete head-on với Zendesk/Intercom, Tidio bán Lyro như AI add-on cho users của competitors.

(Nguồn: Tidio Build and Integrate page, eesel.ai review)

---

## 3. Tidio Flows: Automation rule-based

### Visual builder và templates

Flows là **no-code chatbot builder** với drag-and-drop interface. Tidio cung cấp **40+ pre-built templates** cho các use cases phổ biến:

**Sales & Conversion:**
- Cart Booster — nhắc mua hàng khi có items trong cart
- Cart Abandonment — recover abandoned carts với discount
- Product Recommendations — gợi ý sản phẩm dựa trên browsing
- Discount for New Visitors
- Spinning Wheel — gamification lead capture
- Last Items in Stock — tạo urgency

**Lead Generation:**
- Welcome Message — greet visitors proactively
- Lead Gen for Real Estate / Beauty / SaaS
- Newsletter Signup
- Quote Request
- Gated Content Download

**Support:**
- FAQ Automation
- Operating Hours — inform khi offline
- Appointment Booking
- Return/Refund Process

(Nguồn: Tidio Flows page, Tidio blog)

### Cách Flows hoạt động với Lyro và Live Agents

Tidio có **priority system** để phối hợp 3 thành phần:

1. **Flows chạy đầu tiên** — khi visitor trigger một condition (visit specific page, click button, etc.)
2. **Lyro AI xử lý** — nếu Flows không match hoặc sau khi Flow kết thúc
3. **Human agents tiếp nhận** — khi Lyro không thể giải quyết hoặc visitor yêu cầu

Điều này cho phép businesses tự động hóa ở nhiều tầng: proactive engagement (Flows) → AI support (Lyro) → human escalation.

(Nguồn: help.tidio.com/hc/en-us/articles/14667264947356)

---

## 4. Pricing chi tiết cho Automation features

### Base plans và vị trí của automation

| Plan | Giá/tháng | Lyro AI conversations | Flows visitors | Ghi chú |
|---|---|---|---|---|
| **Free** | $0 | 50 lifetime (không renew) | 100/tháng | Trial để test |
| **Starter** | $29 ($24.17 annual) | 50 one-off | 100/tháng | Không có AI add-on discount |
| **Growth** | $59-$349 ($49.17+ annual) | Add-on riêng | Add-on riêng | Conversation-based pricing |
| **Plus** | $749+ | Custom | Custom | 10 Lyro Actions, Lyro Connect |
| **Premium** | $2,999+ | 3,000+ | Custom | **Guaranteed 50% resolution**, managed service |

(Nguồn: Tidio Pricing page, Featurebase 12/2025, Amio 01/2026)

### Lyro AI Add-on pricing

Lyro AI được bán **riêng biệt** với base plan. Pricing theo số conversations:

| Tier | Giá/tháng | AI Conversations | Cost per conversation |
|---|---|---|---|
| Base | $32.50 | 50 | $0.65 |
| Tier 1 | ~$39 | 100 | $0.39 |
| Tier 2 | ~$79 | 150 | $0.53 |
| Tier 3 | ~$119 | 200 | $0.60 |
| Tier 4 | ~$199 | 300 | $0.66 |
| Tier 5 | ~$349 | 500 | $0.70 |
| Custom | Contact Sales | 1,000+ | Negotiable |

**Alternative pricing**: Tidio cũng offer **$0.50 per conversation** pay-as-you-go (theo một số nguồn).

(Nguồn: eesel.ai Lyro pricing breakdown, Tidio Pricing page)

### Flows Add-on pricing

| Tier | Giá/tháng | Visitors Reached |
|---|---|---|
| Base | $24.17 | 2,000 |
| Tier 2 | ~$34 | 3,000 |
| Tier 3 | ~$49 | 5,000 |
| Tier 4 | ~$79 | 10,000 |
| Up to | ~$149+ | 100,000 |

(Nguồn: Tidio Pricing page)

### Hidden costs và total cost analysis

**Ví dụ realistic cost cho SMB:**
- Growth plan: $59/tháng
- Lyro AI (200 convos): $119/tháng
- Flows (5,000 visitors): $49/tháng
- Branding removal: $17/tháng
- **Total: ~$244/tháng**

Đây là điểm bị phàn nàn nhiều trên G2 và Trustpilot — **add-on model làm double/triple total cost** so với base plan advertised.

---

## 5. So sánh Tidio Automation với Chatty

### Head-to-head comparison

| Tiêu chí | **Tidio (Lyro + Flows)** | **Chatty** |
|---|---|---|
| **AI Model** | Claude (Anthropic) | GPT-4 (OpenAI) |
| **Resolution rate claimed** | 67% avg, peak 90% | 95-98% (case studies) |
| **Pricing model** | Per conversation + add-ons | Flat-rate by tier |
| **Entry price (with AI)** | ~$70-100/tháng (Starter + Lyro) | $19.99/tháng (Basic) |
| **Free tier AI** | 50 convos lifetime | 50 convos lifetime |
| **Multi-channel** | Chat, Email, Messenger, IG, WhatsApp | Chat, WhatsApp, Messenger, IG, Email |
| **Shopify integration depth** | Deep — orders, products, cart | Deep — Built for Shopify badge |
| **Shopify rating** | 4.7/5 (~1,147 reviews) | **4.9/5 (~1,735 reviews)** |
| **Visual flow builder** | Yes — 40+ templates | Yes — proactive triggers |
| **AI Actions (API)** | Yes — Lyro Actions | Yes — order tracking, discounts |
| **AI tone customization** | Friendly/Neutral/Formal | Yes — brand voice training |
| **Branding removal** | $17/tháng extra | Included from Basic |
| **Rule-based + AI hybrid** | Yes — separate products | Yes — integrated |

### Chatty's advantages vs Tidio Automation

| Lợi thế | Chi tiết |
|---|---|
| **Flat-rate pricing** | Predictable cost; Tidio's add-ons gây confusion |
| **Lower entry with AI** | $19.99 vs ~$70-100/tháng cho comparable features |
| **Higher Shopify rating** | 4.9 vs 4.7 — better user satisfaction |
| **Sales-first positioning** | AI sells, không chỉ support; revenue attribution |
| **Simpler setup** | One product vs Lyro + Flows separate |
| **Built for Shopify badge** | Tidio không có |

### Tidio's advantages vs Chatty

| Lợi thế | Chi tiết |
|---|---|
| **Larger scale & resources** | ~$20-35M revenue vs ~$800K; $27M funding vs $0 |
| **Email channel AI** | Lyro on email ticketing; Chatty limited |
| **Lyro Connect** | Sell AI to Zendesk/Intercom users; Chatty không có |
| **Enterprise features** | SSO, compliance, managed service (Premium) |
| **Multi-platform** | Shopify + WooCommerce + BigCommerce + more; Chatty Shopify-only |
| **40+ Flow templates** | More pre-built automation options |
| **Copilot (free)** | AI reply assistant cho agents; Chrome extension |

---

## 6. Competitive Landscape: Tidio vs Other Automation Platforms

### So sánh với các đối thủ automation

| Tiêu chí | **Tidio** | **Intercom** | **Zendesk** | **ManyChat** | **Gorgias** |
|---|---|---|---|---|---|
| **Primary focus** | SMB customer service | Mid-market messaging | Enterprise support | Social chat marketing | E-commerce helpdesk |
| **AI Agent** | Lyro (Claude) | Fin AI ($0.99/resolution) | Advanced AI ($50/agent) | AI Step ($29/mo add-on) | AI Agent (beta) |
| **Resolution rate** | 67% (claimed) | 50-86% (claimed) | Up to 80% (claimed) | N/A — flow-based | Limited data |
| **Automation type** | AI + Rule-based | AI + Rule-based | AI + Rule-based | Rule-based + AI layer | Macros + AI |
| **Entry price** | $29/mo | $29/seat/mo | $55/agent/mo | $15/mo | $60/mo |
| **Shopify integration** | Good | Limited | Limited | Removed | **Excellent** |
| **E-commerce focus** | High | Medium | Low | Medium | **Very High** |

### Market position assessment

Tidio chiếm vị trí **strong challenger** trong phân khúc SMB automation. Đối thủ trực tiếp nhất là:

- **Intercom** (ở phân khúc cao hơn, giá đắt hơn 3-5x)
- **Crisp** (ở phân khúc thấp hơn, features ít hơn)
- **LiveChat/ChatBot.com** (cùng Poland, cùng target SMB)

Với **Chatty**, Tidio cạnh tranh ở Shopify ecosystem nhưng với pricing phức tạp hơn và positioning support-first thay vì sales-first.

---

## 7. Tidio Copilot: AI Assistant cho Agents

### Overview và features

**Tidio Copilot** là AI assistant **miễn phí** giúp human agents respond nhanh hơn. Khác với Lyro (tự động reply), Copilot **suggest responses** để agent approve/edit.

| Feature | Chi tiết |
|---|---|
| **Real-time suggestions** | Gợi ý reply khi agent đang gõ |
| **Knowledge base search** | Tự động tìm relevant FAQ/articles |
| **Chrome extension** | Hoạt động trên Zendesk, Intercom, Gorgias, Gmail |
| **On-brand responses** | Học từ company knowledge base |
| **No hallucination** | Chỉ suggest từ approved content |
| **Price** | **Free** |

Copilot giúp **giảm 30% workload** theo Tidio claim. Đây là smart strategy — free tool thu hút users, sau đó upsell Lyro AI.

(Nguồn: copilot.tidio.com, Tidio Help Center)

---

## 8. Đánh giá người dùng về Automation features

### Positive feedback

Từ G2 (~1,800 reviews, 4.7/5) và Shopify (~1,147 reviews, 4.7/5):

- **Easy setup**: "Cài đặt Lyro chỉ mất 5-10 phút"
- **Good AI accuracy**: "Lyro trả lời đúng 70-80% câu hỏi"
- **Flow builder intuitive**: "Không cần code, tạo automation dễ dàng"
- **Time savings**: "Giảm 50% ticket volume nhờ AI"
- **Multi-language support**: "Hỗ trợ tiếng Việt rất tốt"

### Negative feedback

Từ Trustpilot (3.7/5, ~220 reviews) và G2 negative reviews:

- **Pricing confusing**: "Không biết sẽ pay bao nhiêu cho tới khi bị charge"
- **Add-ons expensive**: "Lyro + Flows + base plan = gấp 3 advertised price"
- **AI limitations**: "Lyro không handle được complex questions"
- **Billing issues**: "Auto-renew không clear, khó cancel"
- **Actions require Plus**: "Muốn AI làm actions phải pay $749/tháng"

(Nguồn: G2, Capterra, Trustpilot, Shopify App Store reviews)

---

## 9. Rủi ro và cơ hội

### Rủi ro chính

**1. Pricing complexity gây churn (High)**
Add-on model (Lyro + Flows + base) tạo confusion và "bill shock" khi users scale. Đối thủ như Chatty với flat-rate pricing có thể win on simplicity.

**2. AI model dependency (Moderate)**
Lyro phụ thuộc vào Claude/Anthropic. Nếu Anthropic tăng giá hoặc thay đổi terms, Tidio's margins bị ảnh hưởng.

**3. Competition từ AI-native platforms (Moderate)**
Các startup mới như Decagon, 14.ai building AI-first từ đầu có thể disrupt. Đồng thời, Intercom Fin và Zendesk Advanced AI đang cải thiện nhanh chóng.

**4. Shopify native AI threat (Low-Moderate)**
Nếu Shopify build native AI chat/support (đã có Shopify Magic và Inbox), Tidio mất kênh acquisition quan trọng.

### Cơ hội chính

**1. Lyro Connect expansion (High impact)**
Bán Lyro AI cho Zendesk/Intercom/Salesforce users — mở rộng TAM vượt ra ngoài Tidio's own platform.

**2. Email AI leadership (High impact)**
Lyro on Email là differentiator — nhiều đối thủ chưa có AI reply cho email channel.

**3. SMB AI democratization (Medium impact)**
Thị trường SMB đang adopt AI nhanh chóng; Tidio positioned tốt với Lyro pricing phù hợp SMB.

**4. M&A potential**
Tidio có thể là acquisition target cho Shopify, HubSpot, hoặc PE firms. Lyro AI technology có giá trị.

---

## 10. Đánh giá chiến lược và góc nhìn Chatty

### SWOT Analysis cho Tidio Automation

| **Strengths** | **Weaknesses** |
|---|---|
| Lyro AI 67% resolution rate — strong performance | Pricing phức tạp với nhiều add-ons |
| Claude/Anthropic foundation — trustworthy AI | Flows và Lyro là sản phẩm riêng biệt, gây confusion |
| Lyro Connect — bán AI cho competitors' users | Actions chỉ available từ Plus ($749/tháng) |
| 40+ Flow templates — quick setup | Trustpilot rating thấp (3.7/5) do billing issues |
| Multi-channel AI (Chat, Email, Social) | Enterprise features thiếu so với Intercom/Zendesk |
| Free Copilot — agent productivity tool | |

| **Opportunities** | **Threats** |
|---|---|
| Email AI adoption đang tăng | Intercom Fin AI cải thiện liên tục |
| SMB AI market growing 20%+ CAGR | Chatty và các flat-rate competitors |
| Lyro Connect mở rộng TAM | Shopify có thể build native AI |
| Geographic expansion với 48 languages | LLM cost inflation ảnh hưởng margins |

### Tại sao Tidio Automation thành công?

1. **First-mover trong SMB AI**: Lyro ra mắt sớm (07/2023) khi đa số SMB tools chưa có AI
2. **Claude partnership**: Chọn Anthropic thay vì OpenAI — differentiation và trust
3. **Freemium PLG**: 50 free AI conversations để hook users, sau đó upsell
4. **Multi-product approach**: Flows + Lyro + Copilot cover nhiều use cases

### Góc nhìn Chatty: Điểm tấn công vào Tidio Automation

**1. Pricing simplicity**
Chatty's flat-rate model ($19.99 / $68.99 / $199) dễ hiểu hơn Tidio's base + Lyro + Flows + branding removal. **Message: "No hidden costs, no confusing add-ons."**

**2. Sales-first positioning**
Tidio là support tool; Chatty là sales assistant. **Message: "AI that sells, not just answers."**

**3. Higher Shopify rating**
4.9 vs 4.7 — Chatty có proof point về user satisfaction. **Message: "Highest-rated AI chat on Shopify."**

**4. Integrated product**
Chatty's AI + automation + live chat là một product; Tidio có Lyro, Flows, Ticketing riêng. **Message: "One tool, not three."**

**5. Revenue attribution**
Chatty tracks revenue từ chat; Tidio focus metrics là resolution rate. **Message: "See exactly how much revenue chat generates."**

### Lessons Chatty có thể học từ Tidio

1. **Lyro Connect model**: Consider selling Chatty AI as standalone to Gorgias/Zendesk users
2. **Email AI**: Expand AI to email channel như Tidio đã làm
3. **Copilot concept**: Free agent assist tool để acquire users, upsell later
4. **Case studies**: Tidio có extensive case studies với specific metrics — Chatty nên develop more
5. **Templates library**: 40+ templates cho quick setup — Chatty có thể expand proactive triggers

### Kết luận

Tidio Automation (Lyro AI + Flows) là một **strong, mature platform** với AI capabilities hàng đầu trong phân khúc SMB. Tuy nhiên, **pricing complexity** và **add-on model** tạo opportunity cho competitors như Chatty với flat-rate, integrated approach. Chatty nên tập trung vào **simplicity, sales positioning, và Shopify-native depth** để differentiate, đồng thời học từ Tidio's successes trong email AI và enterprise features.

---

*Cập nhật: Q1 2026*
*Nguồn chính: Tidio.com, help.tidio.com, G2, Capterra, Shopify App Store, eesel.ai, Featurebase, TechCrunch, PeakSpan Capital, claude.com/customers/tidio*
