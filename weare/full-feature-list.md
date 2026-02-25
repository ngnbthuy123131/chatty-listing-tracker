# Chatty Feature List

**Total Features:** 326

## Table of Contents

- [AI Assistant](#user-content-ai-assistant) (190)
- [Live Chat / Inbox](#user-content-live-chat--inbox) (48)
- [Widget / Chatbox](#user-content-widget--chatbox) (24)
- [FAQ Page](#user-content-faq-page) (13)
- [Analytics / Dashboard](#user-content-analytics--dashboard) (4)
- [Integrations](#user-content-integrations) (7)
- [Notifications](#user-content-notifications) (2)
- [Translations](#user-content-translations) (3)
- [Settings](#user-content-settings) (4)
- [Onboarding](#user-content-onboarding) (1)
- [Design / UI/UX](#user-content-design--uiux) (5)
- [Other](#user-content-other) (25)

---

## AI Assistant

**Total:** 190 features

### 1. Update product list view

**Released:** February 6, 2026

[Improvement] Hiển thị & quản lý toàn bộ sản phẩm trong Product List
• Vấn đề: Hiện tại chỉ các sản phẩm được sync theo plan limit mới hiển thị trong list view, khiến MC khó xem và quản lý toàn bộ sản phẩm từ Shopify cho AI training (phải search → Add thủ công)
• Mục đích: Giúp MC dễ dàng xem, quản lý và kiểm soát toàn bộ danh sách sản phẩm khi setup dữ liệu cho AI training
• Vị trí: AI Assistant → Training Data → Products
• Mô tả:
    ◦ Cập nhật Product List View để hiển thị toàn bộ sản phẩm từ...

**Task:** Update màn list product | Training Data (https://www.notion.so/Update-m-n-list-product-Training-Data-2ccb0da449f180b893dee89c31d397ec?pvs=21)


### 2. Zendesk integration

**Released:** February 4, 2026

[New Feature] Zendesk integration – Tự động tạo ticket gửi transcript sau khi resolve 
• Mục đích: Giúp MC tự động lưu lại lịch sử hội thoại trên Zendesk để theo dõi chất lượng hỗ trợ và quản lý ticket tập trung
• Vị trí: Settings | Integrations, Zendesk
• Mô tả:
Các bước connect:
    ◦ Nhập sub-domain của tài khoản Zendesk → nhấn Connect https://capture.avada.io/i/se8zASU6gltL
    ◦ Nhấn Connect → mở trang Zendesk Oauth https://capture.avada.io/i/ITwxMhZjPNne
    ◦ Nhấn Allow → redirect về app ...

**Task:** Integration Zendesk (https://www.notion.so/Integration-Zendesk-288b0da449f180f7ae69ec1dea2a749a?pvs=21)


### 3. [Improvement] Gợi ý câu hỏi Test AI theo bộ câu hỏi chung

**Released:** February 4, 2026

[Improvement] Gợi ý câu hỏi Test AI theo chủ đề chung
• Vấn đề: Câu hỏi gợi ý khi Test AI hiện phụ thuộc vào custom training data, gây khó khăn khi merchant muốn test nhanh AI ở giai đoạn setup ban đầu
• Mục đích: Giúp merchant dễ dàng test AI với các câu hỏi phổ biến, áp dụng cho mọi store và ngành hàng
• Vị trí: AI → Test AI.
• Mô tả:
    ◦ Bổ sung bộ câu hỏi test chung theo các common topics (những chủ đề khách hàng thường hỏi).
    ◦ Merchant có thể chọn chủ đề test, hệ thống sẽ hiển thị dan...

**Task:** Gợi ý test case trong preview chat (https://www.notion.so/G-i-test-case-trong-preview-chat-296b0da449f180528df5c20b543add7c?pvs=21)


### 4. Related conversation tại inbox

**Released:** February 4, 2026

[New Feature] Related conversations tại Inbox
- Mục đích: giúp agent xem nhanh lịch sử các conversation liên quan của khách hàng ngay khi đang chat, để hỗ trợ nhanh và hiệu quả hơn mà không cần rời khỏi conversation hiện tại
- Vị trí: Inbox → Conversation Details https://capture.avada.io/i/Z1IGwaxiBzDQ
- Mô tả:
◦ Hiển thị danh sách Related Conversations liên quan đến conversation hiện tại, dựa trên customer identity và session
▪ Customer: các conversation thuộc cùng customer profile (bao gồm log...

**Task:** [Inbox] Related conversation  (https://www.notion.so/Inbox-Related-conversation-2e5b0da449f180918423f161c7ce1a85?pvs=21)


### 5. [Improvement] Hiển thị Discount đúng đối tượng khách hàng

**Released:** February 4, 2026

[Improvement] Hiển thị Discount đúng đối tượng khách hàng
• Mục đích: Đảm bảo khách chỉ thấy các mã giảm giá họ thực sự đủ điều kiện sử dụng, tăng tính cá nhân hoá và cải thiện tỷ lệ convert
• Mô tả:
    1. Đồng bộ thêm dữ liệu từ Shopify
        ▪ Lưu customer segments
        ▪ Lưu điều kiện áp dụng của discount (All customers / Specific segments / Specific customers)
    2. Lọc discount theo Eligibility khi AI gợi ý
        ▪ AI chỉ hiển thị mã giảm giá phù hợp với từng khách, dựa trên eligib...

**Task:** Sync điều kiện về customer segment trên discount (https://www.notion.so/Sync-i-u-ki-n-v-customer-segment-tr-n-discount-2b8b0da449f180e59c32ff14f06c3780?pvs=21)


### 6. Conversation attribute

**Released:** February 4, 2026

[New Feature] Conversation attributes
• Mục đích: Cho phép MC gắn thêm thông tin tuỳ chỉnh vào từng conversation để quản lý, lọc và phân tích dữ liệu hiệu quả hơn
• Vị trí: Inbox → Conversation details
• Mô tả:
    ◦ Cho phép thêm / sửa / xoá các attribute cho từng conversation
    ◦ Mỗi attribute gồm name, value (MC tự định nghĩa)
    ◦ Note: sẽ improve thêm về filter theo attribute

**Task:** Set attribute cho conversation (https://www.notion.so/Set-attribute-cho-conversation-2f0b0da449f1805bb407dbf1db882944?pvs=21)


### 7. [Improvement] Cập nhật hiển thị Additional AI Conversation Charge

**Released:** February 3, 2026

[Improvement] Hiển thị đúng additional AI conversation charge
• Vấn đề: Khi phát sinh additional AI conversation charge, app tạo bill theo từng $10 và reset additional charge tại bảng Subscription → MC ko theo dõi được tổng additional charge theo tháng và banner cảnh báo chưa chính xác
• Mục đích: Giúp MC nắm rõ tổng chi phí AI phát sinh trong billing cycle, tăng tính minh bạch và dễ theo dõi
• Mô tả: 
1. Đổi AI Conversation History → AI Conversation Billing Summary
▪ Chỉ cập nhật khi đạt mốc tí...

**Task:** [Subscription] Update logic hiển thị additional charge, usage (https://www.notion.so/Subscription-Update-logic-hi-n-th-additional-charge-usage-2f5b0da449f180fe97dbf231337dbdd1?pvs=21)


### 8. Refactor code proactive chat

**Released:** February 2, 2026

[Improvement] Chuẩn hoá luồng gửi proactive chat 
• Vấn đề: 1 số proactive chat hiện không theo cùng quy chuẩn do mở rộng tính năng theo thời gian, dẫn đến hành vi không nhất quán và khó maintain
• Mục đích: chuẩn hoá luồng gửi message cho các proactive chat để đảm bảo hoạt động ổn định, nhất quán và dễ mở rộng
•  Mô tả: 
    ◦ Refactor luồng gửi message cho các proactive chat sau: 
        ▪ Welcome visitor: cập nhật lại loại Customer message và Quick question về đúng luồng chuẩn 
        ▪ Sub...

**Task:** Refactor luồng gửi message campaign hiện tại (https://www.notion.so/Refactor-lu-ng-g-i-message-campaign-hi-n-t-i-2eab0da449f1800e8c5ed875e739f98d?pvs=21)


### 9. Improve trả lời câu hỏi về collection

**Released:** February 2, 2026

[Improvement] Cải thiện AI trả lời câu hỏi về Collection
• Mục đích: Giúp AI tư vấn đúng sản phẩm trong collection, phù hợp với nhu cầu tìm kiếm của khách hàng.
• Mô tả: Cải thiện cách AI xử lý các câu hỏi về collection, tập trung vào 2 trường hợp chính:
1. Hỏi trend (best seller / new arrival) trong một collection cụ thể
• AI ưu tiên lọc sản phẩm theo trend trong collection.
• Nếu không có sản phẩm phù hợp, AI fallback sang danh sách sản phẩm trong collection (bỏ điều kiện trend).
2. Hỏi về col...

**Task:** Improve trả lời câu hỏi về collection (https://www.notion.so/Improve-tr-l-i-c-u-h-i-v-collection-280b0da449f18045ba03ff7da1478c07?pvs=21)


### 10. Định nghĩa conversation tính vào usage

**Released:** February 2, 2026

[Improvement] Chuẩn hoá cách tính AI usage theo conversation
• Mục đích: Làm rõ khi nào 1 conversation được tính vào AI usage, giúp MC dễ hiểu, minh bạch usage
• Mô tả: AI usage được tính theo conversation, không phụ thuộc vào số lượng message
    ◦ 1 conversation hợp lệ = 1 AI usage, chỉ được tính 1 lần khi conversation kết thúc
    ◦ Conversation kết thúc khi:
       ◦ Resolve (auto/manual) 
       ◦ Reset 
       ◦ Session expired (5 ngày, áp dụng với cả customer, kết thúc kể cả khi status = ...

**Task:** Định nghĩa conversation cho AI usage pricing (https://www.notion.so/nh-ngh-a-conversation-cho-AI-usage-pricing-2e5b0da449f180d2a111d28dac2ac4fc?pvs=21)


### 11. Thêm email thông báo khi đạt monthly usage (trường hợp spending limit > 0)

**Released:** January 28, 2026

[Improvement] Cập nhật email thông báo AI usage charge
Vấn đề
Với spending limit mặc định = $1000, merchant không nhận được thông báo khi vượt monthly limit, dẫn đến việc phát sinh chi phí mà không được biết kịp thời
Mục đích: giúp MC nhận biết sớm thời điểm bắt đầu phát sinh chi phí, chủ động quản lý AI usage và ngân sách
Mô tả cập nhật
• Thêm email thông báo ngay khi đạt monthly limit, áp dụng cho trường hợp spending limit = $1000 (mặc định)
• Nội dung email:
    ◦ Thông báo AI bắt đầu phát si...

**Task:** Thêm email thông báo khi đạt monthly usage (trường hợp spending limit > 0) (https://www.notion.so/Th-m-email-th-ng-b-o-khi-t-monthly-usage-tr-ng-h-p-spending-limit-0-2f5b0da449f180999627f38542b8a4da?pvs=21)


### 12. Update onboarding segment tệp khách hàng

**Released:** January 28, 2026

Update onboarding experience
Mục đích
• Khảo sát để phân loại đúng nhu cầu merchant
• Thể hiện rõ value của AI, giúp merchant setup nhanh và đúng hướng
Mô tả 
Cập nhật survey: 
• Câu hỏi chính: Bạn muốn xử lý customer support như thế nào?
AI / Hybrid / Human
• Câu hỏi phụ (chỉ hiện khi chọn Human / Hybrid):
Số lượng team member xử lý support
Onboarding theo từng nhu cầu
Với AI / Hybrid
• Your brand, your tone (AI): cài đặt nhanh: chatbox color, AI name, welcome message, language
• How AI transfe...

**Task:** Update onboarding segment tệp khách hàng (https://www.notion.so/Update-onboarding-segment-t-p-kh-ch-h-ng-299b0da449f180b197eff4cf05bc74f0?pvs=21) 

Update onboarding segment tệp khách hàng 2 (https://www.notion.so/Update-onboarding-segment-t-p-kh-ch-h-ng-2-2e1b0da449f180d182c8d8aa85b4948d?pvs=21)


### 13. [Joy integration] Require ultimate plan

**Released:** January 26, 2026

[Improvement] Cải thiện UX khi kết nối JOY Loyalty
• Vấn đề: JOY chỉ cấp quyền API từ plan Ultimate, khiến merchant ở các plan khác không sử dụng được integration (hiển thị profile & AI trả lời loyalty) nhưng app chưa có thông báo rõ ràng khi kết nối.
• Mục đích: Giúp merchant hiểu rõ điều kiện sử dụng integration JOY và tránh thao tác kết nối không hợp lệ.
• Vị trí: Settings → Integrations → JOY Loyalty
• Mô tả:
    1. Kiểm tra plan JOY trước khi kết nối (Step 2):
        ▪ JOY Ultimate: bật nú...

**Task:** [JOY integration] Thêm require Ultimate plan khi connect (https://www.notion.so/JOY-integration-Th-m-require-Ultimate-plan-khi-connect-2efb0da449f180b4b450dafbfdffda24?pvs=21)


### 14. Create new conversation

**Released:** January 26, 2026

[New Feature] Tạo Conversation trực tiếp tại Inbox
• Mục đích: giúp MC chủ động tạo hội thoại với khách hàng ngay từ Inbox để xử lý hỗ trợ hoặc follow-up nhanh hơn
• Mô tả:
    ◦ Thêm nút Create Conversation tại Inbox https://capture.avada.io/i/EML7Of5ZoIY5
    ◦ Khi click, mở modal tạo conversation 
        ▪ Email: tìm kiếm email khách hàng từ danh sách hoặc nhập email mới
        ▪ Participant: nhập email CC (tối đa 5 người)
        ▪ Subject: tiêu đề email
    ◦ Nhấn Create để tạo conversati...

**Task:** [Inbox] Create conversation (https://www.notion.so/Inbox-Create-conversation-2ecb0da449f180d8b9e6ee0ed03f35c8?pvs=21)


### 15. Update AI assistant list view layout

**Released:** January 23, 2026

[Improvement] Tối ưu layout màn AI để dễ tập trung thao tác
• Vấn đề: Màn AI hiện hiển thị nhiều layout khác nhau, khiến merchant khó tập trung vào tác vụ chính
• Mục đích: Đơn giản hóa giao diện, giúp merchant thao tác kích hoạt AI, cấu hình và kiểm tra hiệu quả nhanh hơn
• Vị trí: AI assistant 
• Mô tả:
    ◦ Cập nhật layout trang AI:
        ▪ Activate AI chuyển lên page action:
            • Click Activate → hiển thị banner nhắc train & review AI
            • Click Deactivate → hiển thị mod...

**Task:** Improve AI assistant layout P2 (https://www.notion.so/Improve-AI-assistant-layout-P2-2a3b0da449f180e09b1ae9a845dfdb64?pvs=21)


### 16. Tách general instruction

**Released:** January 23, 2026

[Improvement] Cấu trúc lại trang General Instruction để train AI hiệu quả hơn
• Vấn đề: Merchant gặp khó khăn khi thêm instruction cho AI, dễ nhập trùng với system prompt hoặc thêm nội dung thừa/sai, làm giảm chất lượng trả lời của AI 
• Mục đích: giúp merchant train AI đúng cách và hiệu quả hơn, từ đó cải thiện chất lượng AI trả lời
• Vị trí: AI assistant | Instruction 
• Mô tả: Tách text field General Instruction thành các section rõ ràng, có cấu trúc gồm: 
        1. Role: xác định vai trò củ...

**Task:** Tách general instruction thành các mục (https://www.notion.so/T-ch-general-instruction-th-nh-c-c-m-c-277b0da449f1801b9380d572162c7415?pvs=21)


### 17. [Analytics] Agent performance report

**Released:** January 19, 2026

[New feature] Thêm report về Handling time & Resolution time
• Mục đích: giúp MC đánh giá hiệu quả xử lý hội thoại và tối ưu hiệu suất support
• Vị trí: Analytics | Human agent  https://capture.avada.io/i/fYiVPJnOBD9V
• Mô tả: bổ sung 2 chỉ số: Handling Time và Resolution Time
    ◦ Handling time: thời gian trung bình agent xử lý 1 conversation, tính từ lúc tiếp nhận đến khi resolve (ko bao gồm thời gian AI xử lý và ngoài giờ làm việc)
    ◦ Resolution time: thời gian từ lúc khách gửi tin nhắn đ...

**Task:** [Analytics] Agent performance report (https://www.notion.so/Analytics-Agent-performance-report-2a4b0da449f180c6a891dad0ab4fefdd?pvs=21)


### 18. [Improvement] Thêm tuỳ chọn Subscribe trên Pre-chat form

**Released:** January 19, 2026

[Improvement] Thêm tuỳ chọn subscribe trên pre-chat form
• Vấn đề: khách sau khi submit pre-chat form chỉ được tạo dưới dạng lead và ko tự động convert thành customer, khó follow-up hoặc gửi campaign marketing sau đó
• Mục đích: tăng tỷ lệ convert lead → customer và thúc đẩy subscribe newsletter
• Vị trí: Chatbox | Chat page https://capture.avada.io/i/MKxDjEbSRm8A
• Mô tả:
    ◦ Thêm tuỳ chọn Subscribe trên Pre-chat Form
        ▪ Chỉ hiển thị khi chọn How to start chat = Chat as guest/Show both...

**Task:** Thêm subscribe newsletter trên pre-chat form để convert lead (https://www.notion.so/Th-m-subscribe-newsletter-tr-n-pre-chat-form-convert-lead-2a4b0da449f1801d80c1e70088a8f9d7?pvs=21)


### 19. [Improvement] Thêm chỉ số Chatty Contributed Sales

**Released:** January 19, 2026

[Improvement] Thêm chỉ số Chatty contributed sales
• Mục đích: giúp MC đo lường mức độ đóng góp doanh thu của Chatty đối với store
• Vị trí: https://capture.avada.io/i/x4Wd67ZjJycd, https://capture.avada.io/i/z7btqOisQznM
• Mô tả: bổ sung chỉ số Chatty contributed sales
    ◦ Công thức: (Total sales tạo ra từ Chatty/Total sales của store)×100
    ◦ Thời gian sync: daily

**Task:** [Analytics] Thêm chỉ số Chatty contributed sales  (https://www.notion.so/Analytics-Th-m-ch-s-Chatty-contributed-sales-2a4b0da449f18040bad5f791402962aa?pvs=21)


### 20. [Improvement] Sync cart updates với custom theme

**Released:** January 13, 2026

[Improvement] Sync cart updates với custom stheme
• Vấn đề:
    ◦ 1 số Shopify theme (đặc biệt là custom cart / cart drawer tự build) ko tuân theo chuẩn Shopify
    ◦ Khi Chatty AI add / update / remove sản phẩm trong cart, UI ko tự refresh, khiến khách hàng ko thấy cart cập nhật realtime và dễ hiểu nhầm AI ko hoạt động
• Mục đích: đảm bảo cart luôn được đồng bộ chính xác và hiển thị đúng trạng thái khi AI thao tác
• Mô tả:
    ◦ Bổ sung custom event của Chatty: chatty:cart:changed để theme có t...


### 21. [Improvement] Nâng trải nghiệm trial với conversation bonus & product limit

**Released:** January 13, 2026

[Improvement] Nâng trải nghiệm trial với conversation bonus & product limit
• Mục đích: Tăng activation và conversion từ Trial sang Paid plan, đồng thời giúp MC trải nghiệm đầy đủ giá trị của AI trước khi chọn gói phù hợp
• Dự kiến release: 15/01/2026
• Mô tả:
    ◦ Trong thời gian trial (Basic/Pro):
        ▪ Thêm lifetime conversation bonus: +100 cho Basic, 300 cho Pro
        ▪ Hiển thị banner thông báo tại Dashboard và cập nhật usage tại Subscription
        ▪ Tăng product limit lên 10,000 t...

**Task:** Tăng limit product cho trial Basic, Pro (https://www.notion.so/T-ng-limit-product-cho-trial-Basic-Pro-2ccb0da449f180268e79c0c076fa1493?pvs=21) 
Offer AI usage credit với trial plan (https://www.notion.so/Offer-AI-usage-credit-v-i-trial-plan-2bfb0da449f1803eb980f01b5f775f75?pvs=21)


### 22. [Design] Update UI các form trên inbox và storefront

**Released:** January 8, 2026

[Improvement] Cải thiện UI các form trên inbox, chatbox 
Sửa lại UI các form trên inbox, trang test AI và chatbox (light/dark mode)
• CSAT form
• contact form
• transfer form
• pre-chat form
• subscribe form
• order tracking

**Task:** [Design] Update UI các form trên inbox và storefront  (https://www.notion.so/Design-Update-UI-c-c-form-tr-n-inbox-v-storefront-2a2b0da449f18017aea2ce637df8d975?pvs=21)


### 23. Filter sản phẩm gợi ý còn hàng ở proactive chat

**Released:** January 8, 2026

[Improvement] Chỉ gợi ý sản phẩm còn hàng trong Proactive Chat
• Vấn đề: Proactive chat có thể gợi ý sản phẩm đã hết hàng, khiến khách không thể mua dù được AI đề xuất
• Mô tả:
    ◦ Cập nhật logic proactive chat để chỉ gợi ý các sản phẩm còn hàng.
    ◦ Giúp đảm bảo đề xuất của AI luôn khả dụng và tăng khả năng convert

**Task:** Filter sản phẩm gợi ý còn hàng ở proactive chat (https://www.notion.so/Filter-s-n-ph-m-g-i-c-n-h-ng-proactive-chat-2c5b0da449f180f5a370e9d6b728cb5f?pvs=21)


### 24. [Improvement] Report Issue cho AI Response

**Released:** January 8, 2026

[Improvement] Report issue cho AI response 
• Vấn đề: khi MC gửi feedback về AI response, team sẽ nhận qua Slack và liên hệ lại qua Crisp dẫn đến hỗ trợ chậm 
• Mục đích: thu thập feedback từ merchant nhanh hơn để hỗ trợ kịp thời 
• Vị trí: AI Response trong Inbox và Test AI
• Mô tả:
    ◦ Thêm nút Report issue dưới mỗi AI response, giúp merchant dễ dàng gửi feedback
    ◦ Click Report issue sẽ mở modal Share feedback
    ◦ Khi merchant gửi feedback, hệ thống tự động đẩy message vào Crisp chat đ...

**Task:** Thêm report issue dưới mỗi AI response (https://www.notion.so/Th-m-report-issue-d-i-m-i-AI-response-2c0b0da449f1809fa91bd9258ba46604?pvs=21)


### 25. Đổi domain email forwarding

**Released:** December 31, 2025

[Improvement] Fix lỗi không kết nối được email forwarding từ Outlook
• Vấn đề: Email forwarding từ Outlook và 1 số nhà cung cấp khác không kết nối được do bị Cloudflare Email Routing chặn
• Mục đích: Đảm bảo merchant có thể sử dụng email forwarding ổn định với Outlook và các email provider dùng SRS
• Mô tả:
    ◦ Thiết lập mail server phụ để nhận email từ Outlook và các provider sử dụng SRS → dùng để nhận email và forward đến Chatty 
    ◦ Giúp tránh việc email bị reject bởi Cloudflare, đảm bảo ...

**Task:** Self-hosted Mail Server (Postfix + AWS) (https://www.notion.so/Self-hosted-Mail-Server-Postfix-AWS-2d6b0da449f1804d89cedb58be82eb25?pvs=21)


### 26. Scenarop Inventory status

**Released:** December 31, 2025

[Improvement] Tùy chỉnh AI trả lời theo Inventory status
• Vấn đề: Với sản phẩm out of stock nhưng vẫn cho phép bán, AI trả lời là “in stock”, gây hiểu nhầm cho khách hàng
• Mục đích: giúp AI trả lời chính xác hơn về tình trạng tồn kho, phù hợp với từng kịch bản bán hàng
• Vị trí: AI assistant | Agent instruction, Inventory status
• Mô tả: Thêm scenario Inventory status cho phép tùy chỉnh cách AI trả lời theo trạng thái tồn kho: In stock, Out of stock, Available on backorders
    ◦ Để trống: AI ...

**Task:** Scenario inventory status  (https://www.notion.so/Scenario-inventory-status-2d1b0da449f180d0bbf0cfac868fde23?pvs=21)


### 27. Custom after-sales support scenario

**Released:** December 30, 2025

[Improvement] Tùy chỉnh Scenario After-sales Service
• Vấn đề: luồng after-sales hiện đang cố định, khiến merchant không thể tùy chỉnh cách xử lý (nhiều MC tắt scenario mặc định để tạo custom scenario) 
• Mục đích: tăng mức độ tùy chỉnh theo từng scenario after-sales, giúp merchant xử lý linh hoạt hơn
• Vị trí: AI assistant | Agent instruction, After sales support https://capture.avada.io/i/gdTNzfvG4Lt0 
• Mô tả: Bổ sung settings cho scenario After-sales Service gồm:
    ◦ Hướng dẫn merchant thê...

**Task:** Custom scenario after sales (https://www.notion.so/Custom-scenario-after-sales-23fb0da449f1803491cac959f7d885dc?pvs=21)


### 28. Đọc ảnh sản phẩm trong tin nhắn từ các channel

**Released:** December 30, 2025

[Improvement] AI đọc ảnh sản phẩm từ các kênh social
• Mục đích: giúp AI hiểu ngữ cảnh tốt hơn khi khách gửi hình ảnh sản phẩm từ các kênh 
• Mô tả:
    ◦ Trước đây: AI chỉ có thể đọc ảnh được gửi từ live chat
    ◦ Cập nhật: AI đọc và phân tích ảnh sản phẩm trong tin nhắn từ các kênh: WhatsApp, Messenger, Instagram → phản hồi tin nhắn chính xác hơn trên mọi kênh chat

**Task:** Suggest sản phẩm tương tự ảnh sản phẩm trong tin nhắn từ các channel  (https://www.notion.so/Suggest-s-n-ph-m-t-ng-t-nh-s-n-ph-m-trong-tin-nh-n-t-c-c-channel-2c0b0da449f180b8b755d0ed7e07a54d?pvs=21)


### 29. Thêm AI thinking state khi AI trả lời

**Released:** December 25, 2025

[New Feature] AI Thinking State khi trả lời
• Mục đích: giúp người dùng hiểu cách AI phân tích câu hỏi, tạo cảm giác phản hồi tức thì trong quá trình xử lý, nâng cao trải nghiệm tương tác
• Vị trí: Chatbox (cả trang Test và trên storefront)
• Mô tả: Khi người dùng gửi tin nhắn, AI sẽ hiển thị thinking state trong quá trình xử lý trước khi trả lời (analyzing query, searching for products…) https://somup.com/cTlTQiRSud


### 30. Dịch email message admin gửi cho customer

**Released:** December 23, 2025

- Thêm translation cho New message from {{ http://shop.name }}
- Lấy ngôn ngữ từ conversation hoặc last message

**Task:** Dịch email message admin gửi cho customer (https://www.notion.so/D-ch-email-message-admin-g-i-cho-customer-2c3b0da449f180f58cb6f3798553b6d7?pvs=21)


### 31. [New Feature] Integration với Powerful Contact Form

**Released:** December 18, 2025

[New Feature] Integration với Powerful Contact Form
•Vấn đề: Khi MC dùng app contact form, mọi form submission đều tạo chung một conversation do email sender mặc định của app, gây khó khăn trong việc theo dõi và xử lý từng KH
• Mục đích: Tạo conversation đúng theo từng khách submit form và thúc đẩy cross-install giữa các app
• Vị trí: Settings → Integrations → Powerful Contact Form
• Mô tả: Thêm setting integration với Powerful Contact Form 
Các bước integrate 
- Cài app Powerful contact form 
-...

**Task:** [Integration] Powerful form builder (https://www.notion.so/Integration-Powerful-form-builder-296b0da449f180cebbcfde1ce6238efb?pvs=21)


### 32. Bỏ setting “Send transcript history”

**Released:** December 12, 2025

[Improvement] Cập nhật gửi transcript cho khách hàng
• Vấn đề:
    ◦ Khách có thể gửi transcript bất kỳ lúc nào từ chatbox
    ◦ App đã có tính năng Send transcript trong Inbox (dùng cho gửi nội bộ hoặc khi conversation được resolve)
→ Việc bật/tắt email transcript và forward email trong Settings không còn cần thiết
• Mô tả:
    ◦ Loại bỏ mục cài đặt “Send transcript history” khỏi trang Email preference (Settings → Channels → Email)
    ◦ Thêm event log tại Inbox khi khách gửi transcript từ chat...

**Task:** Bỏ setting “Send transcript history” (https://www.notion.so/B-setting-Send-transcript-history-2a9b0da449f180df8369d20a7d762b4e?pvs=21)


### 33. [Improvement] Tự động mark as read cho resolved conversation

**Released:** December 11, 2025

We currently do not offer installment payment plans. However, you may want to consider alternative payment options available at checkout. For more details, please refer to our [payment information](URL).

If you have any other questions or need further assistance, feel free to ask!

**Task:** Auto mark as read cho resolved conversation (https://www.notion.so/Auto-mark-as-read-cho-resolved-conversation-2beb0da449f180599466dba3df80472d?pvs=21)


### 34. Improve Chatty buddy

**Released:** December 11, 2025

[Improvement] Tối ưu Chatty Buddy để tăng tỷ lệ Activate AI
• Mục đích: Giúp merchant hoàn tất setup nhanh hơn
• Mô tả:
    ◦ Tự động bật AI khi merchant enable Chatty embed app trong Theme Editor, không phải quay lại app bật thêm 1 lần nữa
    ◦ Điều chỉnh luồng hiển thị: sau khi merchant hoàn thành đủ 4 bước, → chỉ hiển thị bước “Optimize” để tập trung vào tối ưu AI

**Task:** Improve Chatty buddy (https://www.notion.so/Improve-Chatty-buddy-2bfb0da449f1805fac65f550f8cfdf16?pvs=21)


### 35. [Shopify flow] Tạo trigger create customer

**Released:** December 9, 2025

[New Feature] Sync Contact từ Pre-chat sang App Marketing (Shopify Flow Event)
• Mục đích: Giúp merchant đồng bộ thông tin contact thu được từ Chatty sang các app marketing để gửi campaign tự động
• Vị trí: Settings → Integrations → Shopify Flow https://capture.avada.io/i/AQd8e5X2HdxK
• Mô tả:
A. Thêm event “Pre-chat Submitted” cho Shopify Flow
    ◦ Trigger khi khách submit pre-chat form
    ◦ Event bao gồm các field: email, phone, name, page_url, contact type, tag
    ◦ Tích hợp với app market...

**Task:** [Shopify flow] Tạo trigger create customer (https://www.notion.so/Shopify-flow-T-o-trigger-create-customer-2b5b0da449f180a7903dcf0feadd3f04?pvs=21)


### 36. Update màn Test AI

**Released:** December 2, 2025

[Improvement] Cập nhật giao diện trang Test AI
• Mục đích: Giúp thao tác test AI thuận tiện hơn
• Mô tả:
    ◦ Thêm nút Test trên page header tại tất cả các trang ở màn AI 
    ◦ Click Test → Mở panel test AI từ bên phải, tương tự Sidekick, nhấn Close để đóng

**Task:** Improve màn Test AI (https://www.notion.so/Improve-m-n-Test-AI-2a0b0da449f18019ae8af3cea0a87959?pvs=21)


### 37. [New Feature]

**Released:** November 28, 2025

[New Feature] Tùy chỉnh màu của campaign teaser
• Mục đích: Hiển thị campaign teaser nổi bật, thu hút người mua và phù hợp với giao diện của store
• Vị trí: Proactive chat → Edit proactive chat https://prnt.sc/uIWV1V_SOnBV
• Mô tả:
   • Thêm cài đặt màu sắc cho teaser: cho phép tùy chỉnh background color và button color để đồng bộ với theme của store
   •  Thêm badge cho product teaser để nổi bật hơn, nội dung badge thay đổi theo loại sản phẩm recommend (best/new/similar/custom)

**Task:** Thêm design cho Campaign teaser (https://www.notion.so/Th-m-design-cho-Campaign-teaser-253b0da449f18028aeb1e1b993e77845?pvs=21)


### 38. Thêm button Ask about it trên product card

**Released:** November 27, 2025

[New Feature] Cập nhật CTA trên teaser của proactive chat 
• Vấn đề: trên product teaser chỉ hiển thị button View và Click to reply → mức độ tương tác thấp 
• Mục đích: Tăng mức độ tương tác của khách hàng sau khi xem proactive chat, hỗ trợ họ khám phá sản phẩm và bắt đầu hội thoại dễ dàng hơn
• Mô tả: Hiển thị các button trên product card tuỳ theo trạng thái AI:
1. Bật AI:
    ◦ Ask about it: gửi tin nhắn tự động khi khách click → giúp thúc đẩy khách trò chuyện, hỗ trợ quyết định mua
    ◦ View...

**Task:** Update CTA trên product teaser, thêm button Ask about it (https://www.notion.so/Update-CTA-tr-n-product-teaser-th-m-button-Ask-about-it-25ab0da449f1806fb75adb0f66a821fe?pvs=21)


### 39. [New Feature] Quick Question cho Welcome Visitor

**Released:** November 26, 2025

Chatty – 26/11/2025
[New Feature] Quick Question cho Welcome Visitor
• Mục đích: Tăng tương tác ban đầu và giúp khách truy cập bắt đầu hội thoại nhanh hơn.
• Vị trí: Proactive chat → Welcome visitor https://prnt.sc/rbxi7UcBbA4Z
• Mô tả:
    ◦ Với proactive chat “Welcome visitor”, thêm teaser dạng câu hỏi 
    ◦ Mặc định thêm 3 câu, cho phép thêm sửa xoá, max 10 câu hỏi 
    ◦ User flow: 
1. User truy cập homepage 
2. Hiển thị teaser 3 câu hỏi ngẫu nhiên trong danh sách
3. User click chọn câu hỏi...

**Task:** [Welcome visitor] Thêm message type “Quick question” (https://www.notion.so/Welcome-visitor-Th-m-message-type-Quick-question-25cb0da449f1803b8a28f48d8a3b9879?pvs=21)


### 40. [New feature] Auto tag conversation

**Released:** November 26, 2025

Chatty – 26/11/2025
[New Feature] Auto tag conversation by topic
• Mục đích: tự động gắn tag conversation theo chủ đề, giúp phân loại và quản lý conversation tốt hơn
• Vị trí: Inbox | Conversation details
• Mô tả 
    ◦ Tự động gắn tag cho conversation khi cuộc trò chuyện được Resolved hoặc Transferred to human https://prnt.sc/FAqWRLExQfbI
    ◦ Tag được gắn dựa trên nội dung của conversation, theo list tag có sẵn
    ◦ Thêm filter conversation by Tag trong Conversation Inbox https://prnt.sc/m9p...

**Task:** [Inbox] Auto-detect conversation topics (https://www.notion.so/Inbox-Auto-detect-conversation-topics-19ab0da449f180c6b75ddb7caa8f9260?pvs=21)


### 41. Thêm filter, search tại modal select product

**Released:** November 20, 2025

[Improvement] Thêm filter, search khi chọn sản phẩm 
Mục đích: giúp chọn nhóm sản phẩm nhanh hơn khi setup → giảm thao tác chọn thủ công
Mô tả cập nhật
Thêm bộ lọc & ô search trong modal Browse product, gồm:
• Filter: Vendor, Collection, Tag, Type
• Search by keyword…
Khu vực cập nhật: Proactive chat, AI assistant 
1. Proactive chat
• Send message on = Specific product pages: chọn danh sách product hiển thị proactive chat dễ hơn nhờ filter
• Message = Custom product recommendation: nhanh chóng c...

**Task:** Thêm filter custom product recommendation (https://www.notion.so/Th-m-filter-custom-product-recommendation-25cb0da449f18077bd2bf9978d6ed7df?pvs=21)


### 42. Product follow up button

**Released:** November 20, 2025

[New Feature] Follow-up questions khi AI recommend sản phẩm
Mục đích: giúp khách tiếp tục khám phá sản phẩm dễ dàng hơn, tăng khả năng mua hàng
Mô tả tính năng
Sau mỗi câu trả lời của AI về sản phẩm, AI tự động tạo 3–4 câu hỏi follow-up hiển thị dưới dạng button https://prnt.sc/hh8sap_JsU_U
Quy tắc generate câu hỏi gợi ý:  
1. Xác định context: sp đang hỏi, intent
2. Tìm “gap” thông tin
    ◦ So sánh dữ liệu có về sp với nội dung đã trả lời
    ◦ Xác định phần thông tin chưa hỏi
3. Generate câu ...

**Task:** Product follow up button (https://www.notion.so/Product-follow-up-button-23fb0da449f18083863becbad9cea604?pvs=21)


### 43. [New Feature] Advanced spam filter

**Released:** November 19, 2025

[New Feature] Advanced spam filter 
Vấn đề: trước đây, merchant chỉ có thể block conversation thủ công. AI có nhận diện spam từ email nhưng chỉ để ngăn AI trả lời, không tự động chặn hội thoại → dẫn đến spam vẫn xuất hiện trong Inbox.
Mục đích: tự động chặn tin nhắn spam để giúp merchant tiết kiệm AI usage 
Đối tượng: Pro trở lên 
Mô tả tính năng
- Thêm cài đặt Advanced spam filter, limit với Free và Basic https://prnt.sc/m_-yIIxueTS0
- Khi bật: hệ thống tự động phân tích nội dung tin nhắn và ch...

**Task:** [Inbox] AI guardrails (https://www.notion.so/Inbox-AI-guardrails-fab4d299c2ad49f7be5c4684cf68563c?pvs=21)


### 44. Tạo conversation riêng khi gửi qua contact form trên store

**Released:** November 18, 2025

[New Feature] Tạo conversation riêng cho mỗi contact form từ store
Vấn đề: Hiện tại, tất cả yêu cầu gửi từ Shopify contact form đều gửi vào 1 conversation duy nhất (do cùng gửi từ email Shopify) → merchant khó theo dõi và quản lý từng khách hàng riêng lẻ
Mục đích: 
Tạo conversation riêng với mỗi contact form được submit, giúp merchant dễ dàng quản lý, phân công và follow up
Mô tả cập nhật
- Tự động nhận diện email gửi từ Shopify contact form (mailer@shopify) 
- Gắn đúng email khách hàng vào conv...

**Task:** Tạo conversation riêng khi gửi qua contact form trên store (https://www.notion.so/T-o-conversation-ri-ng-khi-g-i-qua-contact-form-tr-n-store-27ab0da449f180acb541e3f27d936408?pvs=21)


### 45. Thêm insert video ở menu inbox

**Released:** November 18, 2025

[New Feature] Gửi & xem video trong Inbox
Mục đích: Giúp merchant và khách hàng trao đổi video trực quan, hỗ trợ tư vấn sản phẩm, demo tính năng hoặc xử lý vấn đề (hỏng, lỗi…) — đặc biệt phổ biến với các ngành Skincare, Fashion, Pet, Fitness,…
Vị trí: 
• Inbox: https://prnt.sc/aro9tcVT2EMB
• Chatbox: https://prnt.sc/b6E54p3r5tjm
Mô tả tính năng
Hỗ trợ upload video tại Inbox & Chatbox
• Gửi video bằng cách đính kèm như file
• Định dạng hỗ trợ: MP4 (H.264/AAC), MOV, WebM
• Dung lượng tối đa: 200MB...

**Task:** Thêm insert video ở menu inbox (https://www.notion.so/Th-m-insert-video-menu-inbox-27ab0da449f1804485b1ed3262ce3520?pvs=21)


### 46. [New Feature] AI đọc & phân tích ảnh khách hàng gửi qua chat

**Released:** November 14, 2025

[New Feature] AI đọc & phân tích ảnh khách hàng gửi
Mục đích: giúp khách gửi ảnh để mô tả vấn đề trực quan hơn và giúp AI hiểu nội dung ảnh để tư vấn
Mô tả tính năng
1. Upload ảnh khi chat với AI
• Cho phép gửi ảnh trực tiếp khi chat với AI (trước đây chỉ hỗ trợ khi dùng live chat) https://prnt.sc/DFafaHJb4aWZ
2. AI phân tích ảnh
AI sẽ xử lý ảnh theo các bước:
1. Nhận diện product attribute trên ảnh: product type, color, gender
2. Tìm sản phẩm liên quan ở product catalog 
3. Trả lời dựa trên tin...

**Task:** Suggest sản phẩm tương tự ảnh sản phẩm trong tin nhắn từ khách hàng P2 (https://www.notion.so/Suggest-s-n-ph-m-t-ng-t-nh-s-n-ph-m-trong-tin-nh-n-t-kh-ch-h-ng-P2-25ab0da449f180cb8e75c7c4d3956e68?pvs=21)


### 47. [New feature] AI đọc thông tin từ Joy loyalty

**Released:** November 14, 2025

[New Feature] AI trả lời câu hỏi từ thông tin của Joy Loyalty
Mục đích: giúp AI tự động trả lời các câu hỏi liên quan đến chương trình loyalty của Joy, hỗ trợ KH ngay trong chat mà ko cần liên hệ agent 
Đối tượng: Khách hàng cài Chatty + Joy (plan Advanced trở lên)
Mô tả tính năng
1. Cập nhật Integration Settings với Joy Loyalty
• Khi connect Joy Loyalty:
    ◦ Ko đủ điều kiện: hiển thị badge AI support disabled + tooltip upgrade Joy https://prnt.sc/RsQ6nPj9dQ7Y
    ◦ Đủ điều kiện: hiển thị badg...

**Task:** Integrate Joy API (https://www.notion.so/Integrate-Joy-API-2a3b0da449f180c2bd77c9ec94462c3d?pvs=21)


### 48. Limit auto-translate FAQs

**Released:** November 13, 2025

[Improvement] Giới hạn Auto-translate FAQs theo từng plan
Vấn đề: tính năng auto-translate cho FAQs ở các gói trả phí đang tạo chi phí rất cao, đặc biệt với store có số lượng FAQ lớn
Mục đích: Kiểm soát chi phí auto-translate, đồng thời vẫn hỗ trợ merchant dịch FAQs theo nhu cầu phù hợp với từng plan
Mô tả cập nhật
• Giới hạn số ngôn ngữ được auto-translate theo plan:
    ◦ Free: không hỗ trợ auto-translate
    ◦ Basic: 2 languages
    ◦ Pro: 9 languages
    ◦ Plus: Unlimited
• Cập nhật giao diệ...

**Task:** Limit auto translation P2 (https://www.notion.so/Limit-auto-translation-P2-295b0da449f18071b04cd688bb7a13d7?pvs=21)


### 49. Cung cấp đúng variant khi khách hỏi specific variant

**Released:** November 11, 2025

[Improvement] Hiển thị đúng ảnh & tồn kho theo Variant trong product card
Vấn đề
• Product card đã có tên + link variant nhưng chưa hiển thị ảnh variant.
• AI đôi lúc trả lời sai trạng thái tồn kho của variant.
Mô tả cập nhật
• Ảnh variant chính xác: Product card hiển thị đúng hình của variant mà khách đang hỏi https://prnt.sc/e8m7R8wMykSJ
• Tồn kho variant chính xác: AI truy xuất tồn kho theo variant cụ thể và phản hồi đúng trạng thái (in stock / out of stock / low stock).

**Task:** Cung cấp đúng variant khi khách hỏi specific variant (https://www.notion.so/Cung-c-p-ng-variant-khi-kh-ch-h-i-specific-variant-286b0da449f180a0b6b0fa211ad1e05e?pvs=21)


### 50. Cài đặt hiển thị online status trên chatbox

**Released:** November 11, 2025

[New Feature] Cài đặt hiển thị online status trên chatbox
Vấn đề: Trạng thái online luôn hiển thị theo working hour và member status, gây cảm giác phải phản hồi ngay cả khi chỉ dùng AI
Mục đích: cho phép merchant tắt hiển thị online status, giúp khách có thể gửi tin nhắn bất cứ lúc nào và phù hợp với mô hình AI tự động
Mô tả: Thêm toggle “Enable/Disable online status” trong cài đặt Chatbox để bật/tắt hiển thị trạng thái hoạt động https://prnt.sc/R_VGybq_j08J

**Task:** Cài đặt trạng thái hiển thị online status  (https://www.notion.so/C-i-t-tr-ng-th-i-hi-n-th-online-status-27ab0da449f180aa837ff4e29164f68c?pvs=21)


### 51. Send transcript tại inbox

**Released:** November 11, 2025

[New Feature] Send conversation transcript
Mục đích: giúp merchant chia sẻ nhanh nội dung hội thoại qua email cho khách hàng, chính mình hoặc các bộ phận liên quan để follow-up và xử lý khách hàng hiệu quả hơn
Vị trí: Conversation header ở inbox 
Mô tả: 
Thêm tuỳ chọn Send transcript trong Inbox" https://prnt.sc/Hjlsk5uhlDff
Gồm các giá trị https://prnt.sc/SzacJLebYgNO
• To me: gửi email transcript đến tài khoản agent đang truy cập inbox
• To [Customer Name]: chỉ hiển thị với conversation từ cus...

**Task:** Send conversation transcript tại inbox (https://www.notion.so/Send-conversation-transcript-t-i-inbox-26fb0da449f18032bb5befc13e989467?pvs=21)


### 52. WhatsApp AI

**Released:** November 11, 2025

[New Feature] AI auto-reply trên WhatsApp
Mục đích: Giúp AI tự động trả lời khách hàng trên WhatsApp để giảm nguồn lực hỗ trợ và rút ngắn thời gian xử lý conversation
Vị trí: AI assistant | Settings https://prnt.sc/ebaNF_pSSPeG
Mô tả tính năng
• Cài đặt: thêm tùy chọn bật/tắt AI assistant cho WhatsApp
• Điều kiện:
    ◦ Đã activate AI assistant
    ◦ Đã connect WhatsApp
• Khi bật:
    ◦ AI sẽ tự động trả lời tin nhắn từ WhatsApp
    ◦ AI replies được tính vào AI reply usage của plan
    ◦ Produc...

**Task:** AI in WhatsApp channel (https://www.notion.so/AI-in-WhatsApp-channel-27db0da449f180138d0fe0dc6294ce0b?pvs=21)


### 53. Sync order metafield cho AI training

**Released:** November 7, 2025

[New Feature] AI đọc & sử dụng Order Metafield
Mục đích: Giúp AI đọc và hiểu dữ liệu từ order metafield để trả lời chính xác các câu hỏi liên quan đến đơn hàng, tăng tỷ lệ self-service và giảm effort support
Vị trí: AI assistant | Training data | Product, Manage metafield https://prnt.sc/8FXUVmtqBC8D
Đối tượng: PRO trở lên
Mô tả
1. Settings “Manage Order Metafield”
• Sync toàn bộ metafield của order (trừ reference, video, file)
• Disable với Free, Basic 
• Action:
    ◦ Enable / Disable: chọn me...

**Task:** Sync order metafield cho AI training (https://www.notion.so/Sync-order-metafield-cho-AI-training-268b0da449f1807d9851c70a2d6b725b?pvs=21)


### 54. Update settings AI theo agent

**Released:** November 4, 2025

Improvement] Cập nhật layout trang AI Assistant
• Vấn đề: giao diện AI Assistant chia thành nhiều tab → khó theo dõi và thao tác setup AI
• Mục đích: đơn giản hóa bố cục, giúp merchant setup và tối ưu AI nhanh, dễ hiểu hơn
• Mô tả cập nhật 
    ◦ Bỏ cấu trúc tab, gộp thành một màn hình gồm: Training data, Instructions, Unresolved questions 
    ◦ Training data: 
        ▪ Chia các loại dữ liệu thành tab để dễ truy cập
        ▪ Điều chỉnh layout & action tại từng tab (bật/tắt, resync,...) 
    ◦...

**Task:** Update settings AI theo agent (https://www.notion.so/Update-settings-AI-theo-agent-284b0da449f1809aa756c27792076381?pvs=21)


### 55. Dịch chat conversation

**Released:** November 3, 2025

[New Feature] Dịch toàn bộ hội thoại
• Mục đích: Giúp CS đọc tin nhắn đa ngôn ngữ tiện hơn, không cần dùng công cụ dịch bên ngoài.
• Vị trí: Conversation Details (CRM mở từ Store).
• Mô tả:
    ◦ Thêm nút Dịch toàn bộ conversation sang tiếng Anh, tiếng Việt https://prnt.sc/9s9O22Ib5DFn
    ◦ Hỗ trợ dịch toàn bộ nội dung trong một lần, giúp CS xử lý nhanh hơn khi khách dùng ngôn ngữ khác

**Task:** Dịch chat conversation (https://www.notion.so/D-ch-chat-conversation-29bb0da449f180c9a7a3e71559abc009?pvs=21)


### 56. [Improvement] Update footer email transcript

**Released:** October 31, 2025

[Improvement] Update footer cho Email transcript
• Vấn đề: email transcript gửi cho KH dùng signature mặc định “Chatty”, ko đồng bộ với email signature mà merchant đã cài đặt trong app
• Mục đích: giúp email transcript đồng bộ với brand của store
• Mô tả cập nhật
    ◦ Cập nhật settings Email signature: áp dụng cho cả email transcript
    ◦ Thêm footer “Powered by Chatty”: https://prnt.sc/wQeuF9NXc60Z → CS có thể tắt footer khi có yêu cầu từ khách https://prnt.sc/nPtRQ_CBQsU1

**Task:** Update footer email transcript (https://www.notion.so/Update-footer-email-transcript-295b0da449f1809b9f11f32748e767a1?pvs=21)


### 57. [Proactive chat] Gợi ý sản phẩm tương tự với sản phẩm đang xem

**Released:** October 31, 2025

[New Feature] Recommend sản phẩm dựa trên lịch sử xem sản phẩm
• Mục đích: giúp AI tự động gợi ý sản phẩm tương tự với sản phẩm khách đang xem, từ đó tăng tính cá nhân hoá và khả năng quyết định mua hàng
• Vị trí: Proactive chat | Product recommendation, Cart booster https://prnt.sc/RYFyY0FyiUD-
• Mô tả: Với loại proactive chat có gợi ý sản phẩm, thêm lựa chọn “Recommend similar products”
    ◦ Chỉ có ở plan Pro
    ◦ Gợi ý sản phẩm cùng collection với sản phẩm đang xem

**Task:** [Proactive chat] Thêm similar product recommendation  (https://www.notion.so/Proactive-chat-Th-m-similar-product-recommendation-23fb0da449f180219230eaa63c0a663d?pvs=21)


### 58. Embed AI chat on product page

**Released:** October 31, 2025

[New Feature] Embed AI chat trên trang sản phẩm
• Mục đích: giúp KH chat trực tiếp với AI trên trang sản phẩm mà ko cần rời trang → tăng tương tác và thúc đẩy quyết định mua hàng
• Vị trí: AI Assistant | Settings, Embed product AI Assistant https://prnt.sc/QkvGYjQ2lks0
• Mô tả: thêm setting Embed product AI assistant
    ◦ Dùng để bật/tắt block AI dạng inline trên trang sản phẩm, chỉ bật được khi activate AI
    ◦ MC thêm vào storefront bằng cách add block trên theme editor, cho phép customize đ...

**Task:** Embed AI chat on product page (https://www.notion.so/Embed-AI-chat-on-product-page-23fb0da449f18083923ecfdc85d441bb?pvs=21)


### 59. AI trả lời dựa vào sản phẩm đang xem

**Released:** October 31, 2025

[New Feature] AI trả lời dựa trên sản phẩm khách đang xem
Mục đích: giúp khách hàng đặt câu hỏi và nhận phản hồi chính xác từ AI về sản phẩm họ đang xem mà không cần nhập lại tên sản phẩm
Mô tả tính năng
• Tự động lưu context sản phẩm khi khách mở trang product → AI dùng context này để trả lời các câu hỏi liên quan
• Khi khách mở chat, hiển thị preview của sản phẩm đang xem trong ô nhập tin nhắn https://prnt.sc/3UfJc2hx1tXy
     • Nhập tin nhắn để hỏi về sản phẩm 
     • Click Add to cart để gửi...

**Task:** AI trả lời dựa vào sản phẩm đang xem (https://www.notion.so/AI-tr-l-i-d-a-v-o-s-n-ph-m-ang-xem-268b0da449f18075ba5dfed311842643?pvs=21)


### 60. Auto-assign cho online member

**Released:** October 28, 2025

[New feature] Auto assign cho online member
Vấn đề: khi lựa chọn auto assign, conversation vẫn được assign cho cả member offline → khách hàng không được phản hồi
Mục đích: đảm bảo conversation chỉ được assign cho agent đang online, giúp phản hồi khách hàng nhanh hơn
Mô tả cập nhật
• Thêm tùy chọn “Online member” trong Assignment method → Auto Assign https://prnt.sc/0Rm1HPHFIPwt
    ◦ Chỉ assign cho member có status = Online
    ◦ Nếu không có ai online → conversation được chuyển thành Unassigned...

**Task:** Auto assign cho online member (https://www.notion.so/Auto-assign-cho-online-member-23fb0da449f1804baf54e6db8abcb421?pvs=21)


### 61. Custom setting for scenario “Transfer to human”

**Released:** October 27, 2025

[Improvement] Tuỳ chỉnh linh hoạt scenario “Transfer to Human”
Vấn đề: Scenario “Transfer to human” được fix cứng luồng, merchant ko thể tuỳ chỉnh điều kiện, nội dung transfer
Mục đích: Cho phép merchant tùy chỉnh điều kiện AI chuyển sang human agent, giúp AI xử lý đúng theo từng tình huống cụ thể  
Mô tả cập nhật
1. Scenario: “When customers ask about human support”
• Intent: Transfer to human (giữ nguyên) 
• Transfer method:
    ◦ Always transfer: luôn chuyển sang human
    ◦ Conditional trans...

**Task:** Custom setting for scenario “Transfer to human” (https://www.notion.so/Custom-setting-for-scenario-Transfer-to-human-23ab0da449f1802ba892e5c5a63bdc96?pvs=21)


### 62. Size guide recommendation

**Released:** October 23, 2025

[New Feature] Quản lý & tư vấn size guide bằng AI
• Vấn đề
    ◦ AI hiện chưa đọc được size chart nếu thêm ở theme hoặc bằng app thứ 3
    ◦ Khi sản phẩm không có size guide, AI vẫn tư vấn hoặc tự tạo thông tin không chính xác
• Mục đích
    ◦ Giúp merchant quản lý size guide theo sản phẩm và hướng dẫn AI tư vấn chính xác hơn
    ◦ Tăng trải nghiệm mua hàng
• Mô tả tính năng
    ◦ Thêm scenario “Size guide”  https://prnt.sc/bRJLB6G2hzSt
        ▪ Cho phép tạo và quản lý size guide theo từng sản ...

**Task:** Scenario size recommendation (https://www.notion.so/Scenario-size-recommendation-23fb0da449f1809b8779ee30ea981c7a?pvs=21)


### 63. [New Feature] Banner khuyến mãi BFCM Early Bird

**Released:** October 23, 2025

[New Feature] Banner khuyến mãi BFCM Early Bird
User story
Hiển thị deal BFCM Early Bird để khách hàng có thể claim ưu đãi 50% cho annual plan, đồng thời nhận consultation và tài liệu hỗ trợ BFCM
Mục đích
• Tăng tỷ lệ convert gói Yearly 
• Collect email khách hàng tiềm năng để hỗ trợ chiến dịch BFCM.
Mô tả tính năng
• Hiển thị banner BFCM trên toàn bộ app (trừ trang AI Assistant) https://prnt.sc/N2mDPpFwESEw
• Điều kiện hiển thị:
    ◦ Plan hiện tại = Basic / Pro / Plus
    ◦ AI Assistant = ON
 ...

**Task:** Deal BFCM annually  (https://www.notion.so/Deal-BFCM-annually-277b0da449f180dbadeec623b0b35f27?pvs=21)


### 64. [New feature] Sync variant metafield

**Released:** October 22, 2025

[New feature] Sync variant metafield cho AI training
Mục đích: 
• Tăng độ chính xác và kiến thức của AI khi tư vấn sản phẩm
• Giúp AI phản hồi câu hỏi liên quan đến từng variant cụ thể
Vị trí: AI assistant | Product, Manage metafields https://prnt.sc/nOEHmaO5Zwmk
Mô tả tính năng:
• Cập nhật modal Product metafield → Manage metafield
• Thêm lựa chọn sync Variant metafield
• Click Resync để lấy lại toàn bộ variant metafield từ Shopify
• Enable / Disable để bật hoặc tắt việc sử dụng dữ liệu variant...

**Task:** Sync variant metafield cho AI training (https://www.notion.so/Sync-variant-metafield-cho-AI-training-270b0da449f18059b5ffffdd8f9ab1a2?pvs=21)


### 65. [Data source] Thêm sync Shopify discount

**Released:** October 21, 2025

[New Feature] AI tư vấn discount & promotion từ Shopify
Mục đích
• Giúp AI tư vấn chính xác các chương trình giảm giá hoặc khuyến mãi đang hoạt động
• Tăng tỷ lệ chuyển đổi (sales conversion) bằng cách khuyến khích KH  sử dụng ưu đãi
Vị trí: AI assistant | Data source | Discount
Mô tả tính năng
1. Tại trang Manage discount:
• Tự động sync discount từ Shopify với điều kiện còn hạn sử dụng
• Thông tin được sync:
    ◦ Discount type (Automatic / Code)
    ◦ Discount code
    ◦ Type (Percentage, Amo...

**Task:** [Data source] Thêm sync Shopify discount (https://www.notion.so/Data-source-Th-m-sync-Shopify-discount-202b0da449f1804cb0a2e6dce0e82f8c?pvs=21)


### 66. Promote sản phẩm sales, occasion

**Released:** October 20, 2025

[New Feature] Promote sản phẩm theo Sales & Occasion
Mục đích
• Giúp AI tự động gợi ý sản phẩm theo chiến lược bán hàng, chiến dịch hoặc mùa vụ của store.
• Tăng độ chính xác và mức độ liên quan trong các gợi ý sản phẩm (Sales / Occasion).
Vị trí: AI Assistant → Smart recommendations
Mô tả tính năng
• Tự động tạo hai collection mặc định:
    ◦ Sale promotion: Gợi ý sản phẩm giảm giá, ưu đãi.
    ◦ Special occasions: Gợi ý quà tặng, sản phẩm cho các dịp đặc biệt (sinh nhật, lễ, kỷ niệm...).
• Sea...

**Task:** Product recommendations: Sale & occasion (https://www.notion.so/Product-recommendations-Sale-occasion-23fb0da449f18087af5ad53a65eaf5a3?pvs=21)


### 67. Website integration

**Released:** October 14, 2025

[New Feature] Website Integration – Embed Chat Page ngoài Shopify
Mục đích
Cho phép merchant hiển thị Chatty chat page trên các website tùy chỉnh (non-Shopify) để khách hàng có thể chat trực tiếp với AI từ bất kỳ trang nào — như blog, landing page, hoặc website ngoài Shopify
Vị trí: Settings | Integrations | Website integration https://prnt.sc/t9N-RgcDhl1H
Mô tả tính năng
• Tạo code snippet để chèn vào website ngoài Shopify
• Render chat page vào vị trí mong muốn (merchant có thể chọn element cụ...

**Task:** Tạo snippet để chèn chat page vào custom page (https://www.notion.so/T-o-snippet-ch-n-chat-page-v-o-custom-page-279b0da449f1805e8108dcabc0ab61e8?pvs=21)


### 68. Bổ sung tình huống xử lý order tracking

**Released:** October 14, 2025

[Improvement] Cải thiện luồng trả lời về order tracking của AI 
Mục đích: Nâng cao trải nghiệm tra cứu đơn hàng, giúp AI trả lời chính xác và nhanh hơn tuỳ theo thông tin khách hàng cung cấp
Mô tả cập nhật
1. Bổ sung logic xử lý theo loại khách hàng
• Khách đã đăng nhập (Logged-in):
    ◦ Nếu có 1 đơn hàng → AI trả kết quả ngay, không cần hỏi thêm thông tin.
    ◦ Nếu có nhiều đơn hàng → chỉ yêu cầu nhập order number
• Guest (chưa đăng nhập): nếu đã nhập email/phone ở pre-chat form → AI xác nhận...

**Task:** Improve scenario Order tracking (https://www.notion.so/Improve-scenario-Order-tracking-23fb0da449f1804e8512e442d756a89b?pvs=21)


### 69. [Improvement] Cập nhật filter trên inbox

**Released:** October 1, 2025

[Improvement] Cập nhật filter tại inbox
Mục đích
• Giúp merchant lọc conversation được transfer từ AI để xử lý nhanh hơn và tối ưu workflow support
Mô tả cập nhật
1. Tab Conversation
• Tab All: thêm filter Assignee = AI assistant để lọc conversation AI đang xử lý hoặc đã resolve (theo status open/resolved) 
• Tab Resolve: bỏ (có thể dùng filter Resolve trong tab All thay thế)
2. AI assistant (thêm nhóm tab riêng)
• Processing: conversation AI đang xử lý (Assignee = AI, bao gồm transfer to human ...

**Task:** Thêm filter AI conversation (https://www.notion.so/Th-m-filter-AI-conversation-201b0da449f1800e87b3c68f6334227d?pvs=21)


### 70. [Improvement] Update banner liên hệ hỗ trợ AI training

**Released:** October 1, 2025

[Improvement] Update banner hỗ trợ AI training
Mục đích: Tăng lượng chat và giúp merchant gửi yêu cầu training AI nhanh chóng, dễ dàng hơn.
Vị trí: AI assistant → Data source
Mô tả cập nhật
• Thay thế modal Book call bằng banner Submit request
• Nội dung banner mới: 🔗 https://prnt.sc/kdd7MXh9XSKQ
Flow:
1. User nhấn Submit
2. Hiện modal nhập thông tin request
3. Hệ thống tự động gửi tin nhắn đến Crisp kèm note:AI training request: [note]

**Task:** Update banner contact team (https://www.notion.so/Update-banner-contact-team-277b0da449f18045bba5e1506af0ef08?pvs=21)


### 71. Smart collection

**Released:** September 29, 2025

[New Feature] Quản lý sản phẩm Best Seller & New Arrival cho AI training
Vấn đề: Hệ thống tự động gắn tag Best seller và New arrival để AI có dữ liệu recommend → khách có thể chỉnh sửa tag nhưng ko thể quản lý danh sách sản phẩm muốn promote (theo collection / promote theo season, campaign) 
Mục đích
• Giúp merchant linh hoạt quản lý sản phẩm best seller, new arrival mà AI sử dụng để cung cấp cho KH → promote sản phẩm đúng theo mục tiêu kinh doanh 
Vị trí: AI assistant | Data source, Smart colle...

**Task:** Best seller/ new arrival collection management for AI (https://www.notion.so/Best-seller-new-arrival-collection-management-for-AI-23fb0da449f18065802cd1e07115152f?pvs=21)


### 72. Hiển thị giá sản phẩm theo domain

**Released:** September 29, 2025

[New Feature] Hiển thị giá sản phẩm theo domain
Vấn đề
Hiện tại, khi AI recommend sản phẩm chỉ hiển thị tên sản phẩm và giá gốc (original product price) → không phản ánh đúng giá theo từng thị trường/domain mà khách đang truy cập
Mục đích
• Giúp khách hàng thấy giá chính xác theo market và domain của họ
• Đảm bảo trải nghiệm mua sắm thống nhất với thông tin trên store
Mô tả tính năng
• Khi AI recommend sản phẩm trong chat: hiển thị giá sản phẩm dựa trên market và domain mà người dùng đang truy c...

**Task:** Hiển thị giá sản phẩm theo domain  (https://www.notion.so/Hi-n-th-gi-s-n-ph-m-theo-domain-270b0da449f1802dbdd3f385c4ce22d2?pvs=21)


### 73. Recommend sản phẩm với thông tin đúng theo domain

**Released:** September 29, 2025

[New Feature] AI gợi ý link sản phẩm theo region & domain
Vấn đề:
Với các store bán hàng đa thị trường, mỗi locale có domain riêng. Tuy nhiên, AI hiện đang trả về link sản phẩm mặc định, không khớp với domain khách đang truy cập → gây nhầm lẫn và trải nghiệm không đồng bộ
Mục đích
• Đảm bảo AI gợi ý sản phẩm theo đúng domain và locale của khách
• Giúp khách hàng có trải nghiệm mua sắm mạch lạc, không bị chuyển sai vùng
Mô tả tính năng
• Sync thông tin domain theo từng market
• Map dữ liệu produc...

**Task:** Get product by Storefront API to display URL for current locale (https://www.notion.so/Get-product-by-Storefront-API-to-display-URL-for-current-locale-265b0da449f1805bbfc0f417d20f1088?pvs=21) 

Hiển thị giá sản phẩm theo domain  (https://www.notion.so/Hi-n-th-gi-s-n-ph-m-theo-domain-270b0da449f1802dbdd3f385c4ce22d2?pvs=21)


### 74. [New Feature] Button “View similar” trên Product Card

**Released:** September 23, 2025

New Feature] Button “View similar” trên Product Card
Mục đích: giúp khách hàng xem nhanh sản phẩm liên quan ngay sau khi AI gợi ý sản phẩm, giúp tăng tương tác và nâng cao trải nghiệm mua hàng
Mô tả tính năng
• Thêm nút “View similar” trên mỗi product card khi AI recommend sản phẩm 
• Khi click → hệ thống tự động gửi tin nhắn từ phía khách hàng: “View similar”
• AI sẽ generate response và gợi ý thêm các sản phẩm tương tự để khách tham khảo.

**Task:** Thêm button “View similar” ở product card (https://www.notion.so/Th-m-button-View-similar-product-card-23fb0da449f18035ad2dcfc6d1379a29?pvs=21)


### 75. Thêm tin nhắn tự động sau khi submit pre-chat form

**Released:** September 23, 2025

[New Feature] Auto-reply sau khi submit Pre-chat form
Vấn đề
Hiện tại, sau khi khách submit pre-chat form, AI chưa trả lời ngay mà phải đợi khách gửi thêm tin nhắn → trải nghiệm không liền mạch.
Mục đích
• Cải thiện trải nghiệm bắt đầu hội thoại.
• Giúp khách cảm thấy được phản hồi ngay lập tức sau khi điền form.
Mô tả tính năng
• Áp dụng khi AI được bật và How customers start a chat = Chat as guest
• Ngay sau khi khách submit pre-chat form, AI sẽ gửi auto-reply đầu tiên
• Nội dung auto-reply tự...

**Task:** Thêm tin nhắn tự động sau khi submit pre-chat form (https://www.notion.so/Th-m-tin-nh-n-t-ng-sau-khi-submit-pre-chat-form-263b0da449f18068acddef1d9036821f?pvs=21)


### 76. AI in Messenger, Instagram

**Released:** September 19, 2025

[New Feature] AI auto-reply trên Instagram & Messenger
Mục đích
Giúp AI tự động trả lời khách hàng trên kênh social để giảm nguồn lực hỗ trợ và rút ngắn thời gian xử lý conversation
Mô tả tính năng
• Cài đặt: thêm tùy chọn bật/tắt AI assistant cho Instagram và Messenger
• Điều kiện:
    ◦ Đã activate AI assistant
    ◦ Đã connect kênh tương ứng (Instagram / Messenger)
• Khi bật:
    ◦ AI sẽ tự động trả lời tin nhắn từ Instagram, Messenger (delay 20-25s)
    ◦ AI replies được tính vào AI reply us...

**Task:** AI in social channel (Messenger) (https://www.notion.so/AI-in-social-channel-Messenger-239b0da449f180179b2bd3c162fd0123?pvs=21) 

AI in social channel (Instagram) (https://www.notion.so/AI-in-social-channel-Instagram-239b0da449f1805893a8f325c30a1b3c?pvs=21)


### 77. Thêm action Send transcription tại chatbox header

**Released:** September 18, 2025

[Improvement]Thay đổi cách gửi chat transcript 
Vấn đề: 
• User chỉ có thể yêu cầu nhận transcript sau khi conversation được resolve
• Sau khi resolve, app ưu tiên hiển thị form Conversation history email rồi mới đến form survey → gây nhầm lẫn và ảnh hưởng đến việc collect feedback
Mục đích
• Giúp khách hàng chủ động nhận lại lịch sử hội thoại bất kỳ lúc nào
• Đơn giản hóa luồng survey sau khi resolve, đảm bảo ưu tiên CSAT feedback.
Mô tả tính năng
1. Chuyển form transcript thành button cố định ...

**Task:** Thêm action Send transcription tại chatbox header (https://www.notion.so/Th-m-action-Send-transcription-t-i-chatbox-header-209b0da449f180a9aa25dcee22d3fd07?pvs=21)


### 78. Embed chat page in storefront

**Released:** September 12, 2025

[New Feature] Chat assistant block 
 Mục đích: cho phép merchant dễ dàng tùy chỉnh giao diện chat và thêm vào các page
Mô tả tính năng
1. Chatbox settings
• Tại Chatbox | Advanced: thêm cài đặt Chat assistant block https://prnt.sc/K2FWEeR79nif
• Click Go to theme để mở Theme editor thêm block 
2. Theme editor
• Thêm block Chatty assistant block, cho phép add vào bất kỳ page nào
• Customization options:
    ◦ Sử dụng theme mặc định của chatbox
    ◦ Gồm các cài đặt khác: https://prnt.sc/3jpFzDWzR...

**Task:** Embed chat page in storefront (https://www.notion.so/Embed-chat-page-in-storefront-202b0da449f180a59e9cfd4ad54718d1?pvs=21)


### 79. Cập nhật logic pre-chat form với Delay after X min

**Released:** September 12, 2025

[Improvement] Cập nhật logic hiển thị Pre-chat form (Both option)
Vấn đề
• Cài đặt delay theo phút khiến thời gian chờ quá dài, trong khi khách thường cần hỗ trợ nhanh
• Form chỉ hiển thị sau khi AI đã trả lời → khách dễ rời đi mà không điền form.
Mục đích
Tăng tỷ lệ khách điền form bằng cách hiển thị form đúng thời điểm
Mô tả cập nhật: 
• Bỏ cài đặt: When the form appears after delay X minutes
• Bỏ field: When the form appears, thay bằng field “Show form after X messages from visitors” https://...

**Task:** Cập nhật logic pre-chat form với Delay after X min (https://www.notion.so/C-p-nh-t-logic-pre-chat-form-v-i-Delay-after-X-min-257b0da449f18022a274d39469a6305d?pvs=21)


### 80. Bỏ AI completion score

**Released:** September 12, 2025

[Improvement] Tối ưu cách hiển thị hiệu suất AI
Vấn đề
• User dễ hiểu nhầm rằng score thấp = AI trả lời kém
• Logic hiện tại chưa phù hợp khi tính score dựa cả vào resolution rate – chỉ số không phản ánh chất lượng AI
Mục đích
• Tạo động lực để merchant tối ưu AI thường xuyên
• Hiển thị thông tin rõ ràng, tập trung vào yếu tố thực sự ảnh hưởng đến hiệu suất AI
Mô tả
• Loại bỏ card “AI completion score”.
• Thêm banner thông báo số lượng unresolved question tại trang Data source (chỉ hiển thị khi ...

**Task:** Bỏ card AI completion score (https://www.notion.so/B-card-AI-completion-score-248b0da449f1806c9027ca662fd3c077?pvs=21)


### 81. Proactive chat analytics

**Released:** September 11, 2025

[New Feature] Proactive Chat Analytics
Mục đích
Cung cấp báo cáo chi tiết giúp merchant đo lường hiệu quả của proactive chat, từ đó tối ưu cách triển khai và tăng doanh thu

Vị trí:
https://prnt.sc/aBorwmQEkNZ0
Mô tả 
1. Overview report
• Áp dụng cho tất cả campaign
• Có filter theo thời gian
• Hiển thị các chỉ số chính:
    ◦ Impression
    ◦ Engagement
    ◦ Revenue
    ◦ Order
2. Campaign report
• Hiển thị chỉ số View/CTR theo từng campaign tại list view

**Task:** Proactive chat analytics (https://www.notion.so/Proactive-chat-analytics-24eb0da449f1806189e2d328e42dcd64?pvs=21)


### 82. [Improvement] Cho phép điều chỉnh tag Best seller, New arrival cho AI recommend

**Released:** September 11, 2025

[New Feature] Quản lý tag sản phẩm “Best seller” & “New arrival
Vấn đề: Hệ thống tự động gắn tag Best seller và New arrival để AI có dữ liệu recommend → khách không thể tùy chỉnh sản phẩm nào được gợi ý
Mục đích: cho phép merchant chủ động quản lý sản phẩm recommend
Mô tả
• Sau khi app tự động gắn tag “Best seller” & “New arrival”, merchant có thể thêm/xoá tag cho mỗi sản phẩm https://prnt.sc/Iq2XnPO8eo2i
• Với sản phẩm đã được manual tag → hệ thống sẽ không ghi đè khi auto-update hàng ngày

**Task:** Manage best seller, new arrival meta tags (https://www.notion.so/Manage-best-seller-new-arrival-meta-tags-25cb0da449f180139fa5f56c3b993665?pvs=21)


### 83. [New feature] AI replies usage history

**Released:** September 10, 2025

[New Feature] AI replies usage charge history
Vấn đề: MC không thể theo dõi số AI replies và chi phí phát sinh hàng tháng, gây khó khăn khi quản lý ngân sách và lựa chọn plan phù hợp

Mục đích: giúp merchant dễ dàng theo dõi AI usage và chi phí bổ sung để lựa chọn plan tối ưu

Mô tả
1. Thêm card “AI replies usage charge history”
Gồm các thông tin: Billing period, Plan, AI replies used, Total extra cost
2. Chia layout subscription theo plan
◦ Free plan: giữ nguyên, thêm mục AI replies usage histo...

**Task:** Thêm AI replies usage history (https://www.notion.so/Th-m-AI-replies-usage-history-21bb0da449f1801f8794f06eaac8fc46?pvs=21)


### 84. [Improvement] Cải thiện màn AI product management

**Released:** September 4, 2025

[Improvement] Quản lý sản phẩm cho AI training
• Vấn đề: danh sách sản phẩm hiển thị cả sản phẩm không được dùng cho AI training, merchant khó quản lý và train AI
• Mục đích: đơn giản hoá màn quản lý sản phẩm, đồng bộ dữ liệu ổn định hơn
• Mô tả:
    ◦ Danh sách sản phẩm: chỉ hiển thị sản phẩm dùng cho AI training
    ◦ Bỏ status Enable/Disable, thay bằng action Remove để xoá sản phẩm khỏi AI training https://prnt.sc/oEsynIFyzlUa
    ◦ Thêm action Add product https://prnt.sc/EKvAJ3iBRKsD
       ...

**Task:** Improve AI product list management (https://www.notion.so/Improve-AI-product-list-management-25ab0da449f1801dac17e98dbdda321c?pvs=21)


### 85. [AI Assistant] Thêm FAQ cho từng product

**Released:** September 4, 2025

[New Feature] Product FAQs for AI training

Vấn đề
AI hiện chỉ dùng knowledge base sản phẩm để trả lời. Khi merchant thêm thông tin sản phẩm dưới dạng Q&A/metafield không hỗ trợ, AI không sử dụng dữ liệu này → hạn chế khả năng phản hồi
Mục đích
Cho phép merchant tạo FAQs riêng cho từng sản phẩm, dùng để train AI, giúp AI trả lời chính xác hơn các câu hỏi chi tiết liên quan đến sản phẩm
Mô tả tính năng
1. Quản lý Product FAQs
• Tại trang Product:
    ◦ Cho phép thêm / quản lý FAQs cho mỗi sản phẩ...

**Task:** [AI Assistant] Thêm FAQ cho từng product (https://www.notion.so/AI-Assistant-Th-m-FAQ-cho-t-ng-product-216b0da449f1806ca935cef824d1eff3?pvs=21)


### 86. Auto add to cart in chatbox

**Released:** August 27, 2025

[New Feature] Add to cart trực tiếp trong chatbox 
Vấn đề
• Luồng add to cart hiện tạo cart session riêng → khách mở cart không thấy sản phẩm vừa yêu cầu thêm trong chat
• Khách không thể checkout chung với các sản phẩm đã tự thêm trên store
Mục đích: tăng engagement bằng thao tác mua nhanh khi đang chat
Mô tả
1. Tự động cập nhật cart 
    ◦ Trên product card thêm nút Add to cart → click sẽ tự động gửi tin nhắn thêm giỏ hàng 
    ◦ AI nhận intent thêm/sửa/xoá cart qua tin nhắn → tự động cập nhật...

**Task:** Auto add to cart in chatbox (https://www.notion.so/Auto-add-to-cart-in-chatbox-20ab0da449f1802fbf30daa7231607f7?pvs=21)


### 87. Show ‘Powered by Chatty’

**Released:** August 19, 2025

Mục đích: tăng độ nhận diện của Chatty
Mô tả:
Hiển thị Powered by chatty mặc định tại các khu vực sau:
• Chatbox
• FAQs page
• FAQ block
• Chat assistant block 
Lưu ý:
• Store cũ giữ nguyên, ko show branding
• CS có thể mở cho khách ở DEV ZONE  https://prnt.sc/jKMSZoiK2dOM

**Task:** Show lại ‘Powered by Chatty’ (https://www.notion.so/Show-l-i-Powered-by-Chatty-226b0da449f180118c51cb40007b2444?pvs=21)


### 88. [New feature] Welcome message theo online status

**Released:** August 19, 2025

[New feature] Welcome message theo online status
Vấn đề: welcome message ko thể hiện online status, 1st auto reply message (theo online status) lại gửi sau khi khách gửi tin nhắn đầu tiên → khách ko biết khi gửi tin nhắn, gây nhầm lẫn 
Mục đích: Cải thiện UX khi bắt đầu chat, giúp khách nắm rõ trạng thái online/offline của agent ngay từ đầu
Mô tả tính năng
1. Tại Chatbox | Chat page
• Welcome message được tách thành 2 field:
    ◦ Online message
    ◦ Offline message
• Tin nhắn hiển thị theo wor...

**Task:** Welcome message theo online status (https://www.notion.so/Welcome-message-theo-online-status-249b0da449f180a5b790ec0e5f53b9b0?pvs=21)


### 89. Update AI setup checklist

**Released:** August 14, 2025

Bổ sung bước Optimize sau khi hoàn thành 4 bước

**Task:** Thêm step Optimize AI tại AI checklist  (https://www.notion.so/Th-m-step-Optimize-AI-t-i-AI-checklist-237b0da449f18028aed7ec1e984624ca?pvs=21)


### 90. Tạo mẫu instruction theo ngành hàng

**Released:** August 14, 2025

[Improvement] Tự động tạo instruction mặc định theo ngành hàng
Vấn đề
Khi cài app, nhiều merchant không chủ động tạo instruction, dẫn đến chất lượng trả lời AI chưa tối ưu
Mục đích
Hỗ trợ merchant train AI dễ dàng hơn ngay từ khi bắt đầu bằng cách cung cấp instruction mẫu theo ngành hàng để cải thiện chất lượng phản hồi
Mô tả cập nhật
1. Tự động tạo instruction theo ngành hàng
    ◦ Detect ngành hàng từ danh mục sản phẩm
    ◦ Tạo custom instruction mặc định ngay sau khi cài app
2. Giảm giới hạn...

**Task:** Tạo mẫu instruction dựa trên ngành hàng  (https://www.notion.so/T-o-m-u-instruction-d-a-tr-n-ng-nh-h-ng-241b0da449f1809796a4ee879c059e81?pvs=21)

**Changelog:** https://prnt.sc/wxfhyEZw2TRR


### 91. Đánh intent cho mỗi AI response

**Released:** August 13, 2025

[New Feature] Gắn intent cho mỗi AI response – Phân tích xu hướng & nhu cầu khách hàng

Vấn đề
Merchant ko thể phân loại và phân tích intent của câu hỏi AI trả lời → khó nắm xu hướng, nhu cầu khách hàng để tối ưu AI

Mục đích
Tự động gắn intent cho mỗi AI response theo danh sách intent phổ biến, giúp theo dõi customer trends và cải thiện AI training

Mô tả tính năng
1. Inbox
• Modal Review sources (cả ở Inbox và Test):
    ◦ Hiển thị intent của câu hỏi AI trả lời https://prnt.sc/rYR-4BDrFwg5
   ...

**Task:** Đánh intent cho mỗi AI response (https://www.notion.so/nh-intent-cho-m-i-AI-response-1ffb0da449f180e6b364f0a5a3fd0984?pvs=21)


### 92. [New Feature] Nâng cấp Automation thành Campaign – Proactive chat theo hành trình khách hàng

**Released:** August 11, 2025

[New Feature] Nâng cấp Automation thành Campaign – Proactive chat theo hành trình khách hàng
🛠 Vấn đề
Automation cũ chỉ hỗ trợ luồng đơn giản (Welcome visitor, Subscribe newsletter) → ít tùy chỉnh, chưa đáp ứng nhu cầu tạo kịch bản tiếp cận khách hàng 1 cách đa dạng

🎯 Mục đích
Cho phép xây dựng campaign với nhiều flow, targeting nâng cao, tạo proactive chat bám sát hành trình khách hàng và tận dụng AI để tăng hiệu quả chuyển đổi

⚙️ Mô tả tính năng
1. Danh sách campaign 🔗 https://prnt.sc/Ah3C4j...

**Task:** [Automation/Campaign] Làm automation (campaign) theo logic mới (welcome visitor) (https://www.notion.so/Automation-Campaign-L-m-automation-campaign-theo-logic-m-i-welcome-visitor-152337e26dfd4680afd42b4249b35571?pvs=21)


### 93. [Improvement] Stream AI

**Released:** August 5, 2025

Mục đích: Giảm độ trễ khi AI trả lời bằng cách tách các bước xử lý và sử dụng streaming – cơ chế giúp AI vừa nghĩ vừa trả lời, hiển thị nội dung từng phần để phản hồi nhanh và mượt hơn

**Task:** Stream AI response (https://www.notion.so/Stream-AI-response-223b0da449f180a7a555e426a390c130?pvs=21)


### 94. [Improvement] Cập nhật cài đặt giới hạn AI usage

**Released:** August 5, 2025

Vấn đề
• Modal "Set usage limit" chưa rõ ràng
    ◦ Toggle bật/tắt limit gây hiểu nhầm
    ◦ Không hiển thị số lượng AI replies đã sử dụng / hạn mức
    ◦ Có thể set limit < current limit 
Mục đích
Giúp merchant hiểu rõ và quản lý AI usage dễ dàng hơn, tránh nhầm lẫn
Mô tả cập nhật
1. Cập nhật modal “Set AI replies spending limit”
• Bỏ toggle, mặc định limit $1000, set = 0 để dừng AI khi đạt limit 
• Tự động reactivate AI nếu tăng limit
• Thêm hiển thị current spent / limit, ước tính số AI repli...

**Task:** Update logic AI usage limit (https://www.notion.so/Update-logic-AI-usage-limit-201b0da449f18040bbd2cda16e6dfa08?pvs=21)


### 95. Cải thiện gửi ảnh kèm văn bản tại inbox qua email

**Released:** August 5, 2025

Vấn đề: 
Gửi nhiều ảnh/text từ inbox qua email sẽ tạo nhiều email riêng biệt gây phiền và thiếu chuyên nghiệp 
Mô tả: 
Khi gửi tin nhắn qua email từ Inbox, hệ thống sẽ:
• Gộp nội dung text + tất cả ảnh đính kèm vào một email duy nhất
• Ảnh được đính kèm đúng định dạng, không chia nhỏ thành nhiều email

**Task:** Improve send attachment từ Inbox (https://www.notion.so/Improve-send-attachment-t-Inbox-1eab0da449f18030a8d0f63916d182ce?pvs=21)


### 96. Send survey for AI conversation

**Released:** August 5, 2025

[Improvement] Thêm logic gửi survey với conversation do AI xử lý
Vấn đề
Survey không được gửi nếu AI trả lời sau tin nhắn cuối của user chứa keyword
Mục đích
Tăng cơ hội thu thập đánh giá, kể cả những conversation do AI xử lý 
Mô tả cập nhật: Khi xác định keyword từ tin nhắn của user, hệ thống sẽ chờ AI trả lời xong và gửi survey sau 10s nếu không có thêm tin nhắn mới

**Task:** Send survey for AI conversation (https://www.notion.so/Send-survey-for-AI-conversation-22db0da449f18048b797d23168cb473c?pvs=21)


### 97. Thêm card “Book call” tại trang AI Instruction

**Released:** August 1, 2025

Mục đích: hỗ trợ merchant thiết lập AI dễ dàng hơn và tăng tỷ lệ hoàn tất setup, từ đó cải thiện hiệu quả sử dụng và conversion
Mô tả tính năng
• Thêm card “Let’s set up your AI together!” tại trang AI Instruction
    ◦ Book call: mở link lịch hẹn https://calendly.com/drake-meetchatty/30min
    ◦ Chat with us: mở Crisp prefill message:“I need help getting my AI Assistant set up.”

**Task:** Thêm card “Book call” tại trang AI Instruction (https://www.notion.so/Th-m-card-Book-call-t-i-trang-AI-Instruction-23eb0da449f1809aa876e103a1f7eeb7?pvs=21)


### 98. [Improvement] Cập nhật luồng hiển thị pre-chat form

**Released:** August 1, 2025

Vấn đề
Với tùy chọn Pre-chat form = Show both options, hệ thống hiện form sau khi AI đã trả lời → khách đã nhận được thông tin nên không còn động lực điền form, dẫn đến tỷ lệ rời đi cao
Mục đích
Hiển thị form trước khi AI trả lời để tăng tỷ lệ thu thập thông tin khách hàng
Mô tả cập nhật
Khi khách gửi số lượng tin nhắn vượt mức cài đặt, hệ thống hiển thị pre-chat form trước, yêu cầu submit sau đó AI mới trả lời

**Task:** Cập nhật luồng hiển thị pre-chat form khi chọn both options (https://www.notion.so/C-p-nh-t-lu-ng-hi-n-th-pre-chat-form-khi-ch-n-both-options-226b0da449f180819857d15e7638027b?pvs=21)


### 99. [New feature] Thêm filter tag, vendor, collection

**Released:** July 29, 2025

[New Feature] Thêm filter lọc sản phẩm cho AI training 
Mục đích
Giúp merchant lọc và lựa chọn nhóm sản phẩm cụ thể để train AI (đặc biệt với store có số lượng sản phẩm lớn), giúp giảm thời gian set up AI
Mô tả tính năng
• Thêm các filter: Vendor, Tag, Collection, Meta tag (Best seller, New): https://prnt.sc/W4fzeJrDTYB3
• Có thể kết hợp nhiều điều kiện filter cùng lúc

**Task:** [AI assistant] Thêm filter tag, vendor, collection (https://www.notion.so/AI-assistant-Th-m-filter-tag-vendor-collection-239b0da449f180c4a2e4d166c7f797f0?pvs=21)


### 100. [New feature] Cài đăt AI chỉ trả lời lúc agent offline

**Released:** July 29, 2025

[New Feature] Cài đặt AI chỉ trả lời khi agent offline
Vấn đề: Khi activate AI, AI luôn trả lời dù agent đang online → không tối ưu cho store muốn ưu tiên human support hoặc tiết kiệm chi phí AI
Mục đích
• Giúp merchant kiểm soát khi nào AI được sử dụng, tối ưu hiệu quả hỗ trợ và chi phí
• Đảm bảo khách hàng luôn được kết nối với người hoặc AI phù hợp, tùy theo trạng thái online của agent
Mô tả 
• Thêm cài đặt AI trả lời dựa trên thời gian online   
   • Always: mặc định AI trả lời kể cả khi age...

**Task:** Cài đặt AI chỉ trả lời lúc agent offline (https://www.notion.so/C-i-t-AI-ch-tr-l-i-l-c-agent-offline-1f8b0da449f180308461c08355d0f2d5?pvs=21)


### 101. [New feature] Gợi ý giá sản phẩm theo market

**Released:** July 29, 2025

Vấn đề: 
AI chỉ gợi ý giá sản phẩm mặc định, không phản ảnh đúng giá theo từng thị trường hoặc đơn vị tiền tệ của KH
→ Dễ gây hiểu nhầm và ảnh hưởng đến trải nghiệm mua hàng, đặc biệt với store hoạt động ở nhiều quốc gia

Mục đích
Giúp AI tư vấn chính xác giá sản phẩm theo thị trường của KH, hỗ trợ tốt hơn cho các store đa quốc gia và tăng tính cá nhân hóa trong hội thoại

Mô tả tính năng
• Sync dữ liệu theo thị trường cho AI training gồm:
    ◦ Thông tin market
    ◦ Currency, Exchange rate
   ...

**Task:** [AI Assistant] Sync product price theo market (https://www.notion.so/AI-Assistant-Sync-product-price-theo-market-1afb0da449f180bea303dddc5c7d18aa?pvs=21)


### 102. [New feature] Bật AI trả lời tự động trên email channels

**Released:** July 17, 2025

Mục đích: mở rộng khả năng của AI assistant sang nhiều kênh, giúp merchant tiết kiệm thời gian khi xử lý conversation 
Vị trí: AI assistant → Settings → AI channels
Mô tả:
• Thêm cài đặt bật/tắt AI assistant cho các channel 
https://prnt.sc/2xh9Snx3tSCa
• Chỉ hỗ trợ Email (các kênh còn lại hiện badge coming soon) 
• Điều kiện set up:
    ◦ Bật AI assistant
    ◦ Connect Email forwarding
• Khi bật AI cho Email: AI sẽ tự động phản hồi các tin nhắn đến từ email sau 5 phút không có tin nhắn từ agent

**Task:** AI in social channel (Email) (https://www.notion.so/AI-in-social-channel-Email-1f3b0da449f1804bb08fe71f3b19d729?pvs=21)


### 103. [Improvement] Sync thêm thông tin product cho AI training

**Released:** July 17, 2025

[Improvement] Bổ sung thông tin product cho AI training
Mục đích: giúp AI có thêm thông tin về sản phẩm để trả lời chính xác hơn các tình huống tư vấn sản phẩm liên quan đến đặc điểm kỹ thuật
Mô tả: 
- Sync ngầm các thông tin sau trên variant của sản phẩm: sku, barcode, weight 
- Sử dụng thông tin trên cho AI trả lời các câu hỏi liên quan

**Task:** Update sku, barcode, weight of product (https://www.notion.so/Update-sku-barcode-weight-of-product-230b0da449f180bcbe31dba78ff2d111?pvs=21)


### 104. [Improvement] Update AI assistant layout

**Released:** July 17, 2025

[Improvement] Update AI assistant layout
Vấn đề
Giao diện trang AI Assistant chưa trực quan, khó thao tác khi quản lý nhiều nguồn dữ liệu
Mục đích: giúp user set up AI dễ dàng và nhanh cho
Mô tả cập nhật 
1. Gộp Store URL vào trường URL
• Trước đây được tách thành 2 khu vực → dễ gây nhầm lẫn việc đã sync store URL hay chưa
2. Chia lại khu vực Data source để dễ thao tác hơn:
• Store FAQs: Products, FAQs
• Custom data: Questions, URLs, Files
→ Thêm nút Manage để mở trang quản lý data source
3. Cập...

**Task:** Update layout AI assistant (https://www.notion.so/Update-layout-AI-assistant-1cfb0da449f180998902d9dc9cf7470e?pvs=21)


### 105. Thêm proactive chat hướng dẫn thêm AI instruction

**Released:** July 17, 2025

Mục đích: chủ động hỗ trợ khách set up instruction
Mô tả:
- Trigger tin nhắn tự động từ Crisp khi người dùng vào trang Instruction lần đầu (sau 5s) 
- Tần suất: chỉ trigger 1 lần
- Nội dung: Not sure what to write? Instructions help your AI sound smart and on-brand. https://help.meetchatty.com/ai/data-sources/what-goes-in-each-data-source

**Task:** Thêm proactive chat ở trang Instruction (https://www.notion.so/Th-m-proactive-chat-trang-Instruction-229b0da449f1806c8cc7dc7a695c778b?pvs=21)


### 106. [New feature] Rate AI response

**Released:** July 15, 2025

[New feature] Rate AI response
• Vấn đề: hiện tại, KH ko thể phản hồi chất lượng trả lời của AI, dẫn đến việc merchant khó đánh giá và cải thiện độ chính xác của AI
• Mục đích: cho phép KH đánh giá nhanh mỗi phản hồi của AI, giúp thu thập dữ liệu để cải thiện AI
• Mô tả tính năng
    ◦ Chatbox: thêm lựa chọn Helpful/Unhelpful tại mỗi câu trả lời của AI, có thể chọn lại/bỏ chọn sau khi đánh giá https://go.screenpal.com/watch/cTioQlnld25
    ◦ Analytics | AI Assistant: thêm các chỉ số: tổng AI rep...

**Task:** Rate AI response (https://www.notion.so/Rate-AI-response-199b0da449f180fdb546f4a170eb4a2b?pvs=21)


### 107. Scenario “Transfer to human”

**Released:** July 15, 2025

Scenario “Transfer to human”
• Vấn đề:
    ◦ Merchant ko thể cặt đặt khi nào chuyển conversation cho agent (do đã bỏ phần "Transfer message", hiện tại AI ko có logic để xác định khi nào cần transfer)
    ◦ AI đôi khi hiểu sai intent chuyển agent → khách chưa thực sự muốn transfer cho agent nhưng vẫn bị chuyển, gây gián đoạn trải nghiệm
• Mục đích: giúp merchant kiểm soát rõ khi nào AI nên chuyển tiếp cho agent, đồng thời giảm chuyển nhầm ko cần thiết, đảm bảo luồng hội thoại tự nhiên và hiệu quả...

**Task:** Update scenario Transfer to human (https://www.notion.so/Update-scenario-Transfer-to-human-223b0da449f18072a157da6091703128?pvs=21)


### 108. [Improvement] Tối ưu luồng hiển thị Subscribe & Pre-chat – Tránh hiển thị chồng chéo khi mở chat

**Released:** July 11, 2025

Vấn đề
Với luồng mới của subscribe newsletter, khi pre-chat = Chat as guest, hệ thống đồng thời hiển thị:
• Welcome message
• Subscribe form
• Pre-chat form
→ Gây quá tải và nhầm lẫn cho người dùng do cả subscribe và pre-chat đều chứa field tương tự (email, tên)

Mục đích
• Đơn giản hóa trải nghiệm ban đầu khi mở chat
• Tránh hiển thị chồng chéo nhiều form
• Đảm bảo conversation được tạo đúng thời điểm phù hợp
 Mô tả cập nhật
✅ Thay đổi luồng hiển thị & tạo conversation:
• Mặc định chỉ hiển thị ...

**Task:** Update pre-chat kết hợp campaign subscribe newsletter (https://www.notion.so/Update-pre-chat-k-t-h-p-campaign-subscribe-newsletter-214b0da449f180849fe5e78d6888a9a2?pvs=21)


### 109. [Improvement] Thêm conversation history trên AI notification email

**Released:** July 11, 2025

[Improvement] Cập nhật nội dung tại email thông báo conversation từ AI
• Vấn đề: email thông báo AI conversation hiện tại chỉ hiển thị tin nhắn từ KH, ko có nội dung phản hồi từ AI, khiến merchant ko biết AI đã trả lời gì
• Mục đích: giúp merchant nhận email thông báo có đầy đủ nội dung cuộc hội thoại (cả KH và AI) để kịp thời can thiệp nếu AI ko phản hồi được hoặc phản hồi chưa phù hợp
• Mô tả tính năng
    ◦ Bổ sung nội dung hiển thị trên email thông báo AI conversation gồm cả tin nhắn từ KH v...

**Task:** Thêm conversation history trên email AI notification (https://www.notion.so/Th-m-conversation-history-tr-n-email-AI-notification-1f9b0da449f180fe995ced64379ffc82?pvs=21)


### 110. [Improvement] AI trả về đúng link sản phẩm theo từng variant

**Released:** July 10, 2025

Vấn đề
AI hiện chỉ gửi được link sản phẩm chung, không phân biệt theo variant (màu, size…), khiến KH khó tìm đúng sản phẩm họ quan tâm
Mục đích
• Giúp AI trả lời chính xác hơn theo nhu cầu cụ thể của khách
• Tăng khả năng tư vấn đúng và khả năng convert
Mô tả tính năng
• Lưu ẩn link các variant của sản phẩm để sử dụng cho AI trả lời 
◦ Hỗ trợ các trường hợp:
    ◦ Hỏi variant cụ thể
    ◦ Kiểm tra tồn kho/giá của variant cụ thể

**Task:** [AI assistant] Xử lý các câu hỏi liên quan đến variant, thêm link cho từng variant (https://www.notion.so/AI-assistant-X-l-c-c-c-u-h-i-li-n-quan-n-variant-th-m-link-cho-t-ng-variant-1bdb0da449f180fba1d8f1e71a452319?pvs=21)


### 111. [New feature] Reset conversation

**Released:** July 10, 2025

Vấn đề
Session 1 conversation là 7 ngày khiến conversation có thể kéo dài và chứa nhiều chủ đề khác nhau
→ Dễ dẫn đến việc AI trả lời sai ngữ cảnh, giảm độ chính xác
Mục đích
• Giúp khách hàng chủ động làm mới luồng trò chuyện khi cần
• Đảm bảo AI phản hồi trong đúng ngữ cảnh hiện tại, tránh ảnh hưởng từ lịch sử cũ

Mô tả tính năng
1. Chatbox
• Thêm nút “Reset conversation” tại chat header: https://monosnap.com/file/AGyTqSSxSBboNY2QqMCizlb5PXhN66
• Khi user nhấn "Reset conversation":
    ◦ Xóa t...

**Task:** [Chatbox] Reset conversation (https://www.notion.so/Chatbox-Reset-conversation-831b4c8b8b81474cad7b9a1eba651a28?pvs=21)


### 112. [Improvement] Update Scenario instruction

**Released:** July 10, 2025

Vấn đề
Việc xác định intent dựa trên field “Keyword” chưa đủ chính xác, dễ gây hiểu sai ngữ cảnh dẫn đến sử dụng sai scenario
Mục đích
Cải thiện khả năng nhận diện intent của AI, giúp áp dụng đúng scenario với tình huống thực tế mà KH đang hỏi
Vị trí: AI assistant → Personality → Scenario instruction
Mô tả cập nhật
• Loại bỏ field “Keyword” (vẫn hiển thị cho store cũ)
• Xác định intent áp dụng scenario dựa trên
   • Mô tả tại field “Scenario name”
   • Nội dung instruction

**Task:** Update context cho scenario instruction (https://www.notion.so/Update-context-cho-scenario-instruction-224b0da449f180c5b813c4a3165ad903?pvs=21)


### 113. [New feature] AI hỗ trợ tra cứu trạng thái đơn hàng

**Released:** July 8, 2025

Vấn đề:
KH thường xuyên đặt câu hỏi về trạng thái đơn hàng qua live chat. Tuy nhiên, hiện tại AI chưa thể tự động phản hồi, phải chờ agent hỗ trợ thủ công → làm gián đoạn trải nghiệm và tăng effort cho support

Mục đích: 
- Giúp KH tra cứu đơn hàng nhanh chóng, tự động ngay trong khung chat
- Giảm khối lượng công việc cho agent, tăng tỷ lệ self-service

Mô tả tính năng
1. Scenario “Order tracking” (mặc định)
Thêm sẵn một scenario “Order tracking” để AI tự động nhận diện và phản hồi câu hỏi liên ...

**Task:** [AI assistant] Update order tracking scenario  (https://www.notion.so/AI-assistant-Update-order-tracking-scenario-1aeb0da449f180949c1ed7cb8c0a68a6?pvs=21) 

Move setting order tracking to integrations in setting page, sửa lại màn chatbox (https://www.notion.so/Move-setting-order-tracking-to-integrations-in-setting-page-s-a-l-i-m-n-chatbox-21bb0da449f180cfa026f8ec80b578fb?pvs=21)


### 114. Update proactive chat in app, focus on AI

**Released:** July 1, 2025

Vấn đề: Proactive chat trên app bị outdate, ko còn phù hợp với mục tiêu hỗ trợ AI 
Mục đích: Chủ động hỗ trợ merchant setup và test AI đúng cách
Mô tả cập nhật
1. Dashboard 
• Khi click “Let us set up for you”: gửi checklist ngắn gọn gồm 3 bước chính: Set up live chat, Set up chatbox, Train AI assistant 
• Sau 5s vào Dashboard (nếu còn bước chưa hoàn thành): gửi teaser hỗ trợ setup
2. Trang Test AI – Tăng hỗ trợ tương tác
• Card “Share your feedback”: chuyển từ trang General → Test, tự động gửi ...

**Task:** [Growth] Update Crisp proactive chat (https://www.notion.so/Growth-Update-Crisp-proactive-chat-214b0da449f1809cadb5f26af0bcb109?pvs=21)


### 115. [Improvement] Update customer profile edit, auto convert customer

**Released:** July 1, 2025

Vấn đề: khi merchant chỉnh sửa email cho Lead hoặc Anonymous, hệ thống ko tự động chuyển đổi thành Customer → merchant phải thao tác thủ công gây bất tiện
Mục đích: rút gọn thao tác chỉnh sửa profile, gợi ý convert customer khi phát hiện trùng thông tin profile 
Mô tả cập nhật:
1. Cập nhật modal Edit Profile (Name / Email / Phone)
• Gộp thành 1 nút Edit → mở modal mới cho phép chỉnh sửa cả 3 trường https://prnt.sc/WgGl7DeTr1Si
• Yêu cầu nhập ít nhất 1 trong 3 thông tin https://prnt.sc/blhOojrXx8...

**Task:** [Inbox] Sửa form edit profile, Auto convert guest/anonymous to customer khi edit profile (https://www.notion.so/Inbox-S-a-form-edit-profile-Auto-convert-guest-anonymous-to-customer-khi-edit-profile-1c0b0da449f180a9a41cc655196a8d10?pvs=21)


### 116. [Improvement] Update transfer setting

**Released:** July 1, 2025

Mục đích
• Loại bỏ cài đặt không cần thiết, ít sử dụng, thay thế bằng AI scenario và instruction
Vị trí: AI assistant → Settings (chuyển sang page header)  
https://prnt.sc/BOI0z24kDhbE, https://prnt.sc/Q5-FFrFgA9px
Mô tả cập nhật:
• Giới thiệu trang: Bỏ
• Feedback messages: Bỏ, tự động detect intent transfer to human
• Transfer messages: Bỏ, dùng prompt cho AI và data source liên quan (chat availability, email support)
• Pre-transfer information: Bỏ, do tỷ lệ sử dụng thấp, không có giá trị với ...

**Task:** Update transfer setting (https://www.notion.so/Update-transfer-setting-203b0da449f180e8bc36c8ad784836c9?pvs=21)


### 117. [New feature] Form hỗ trợ xử lý post purchase

**Released:** June 27, 2025

[New feature] Scenario hỗ trợ xử lý post-purchase
• Mục đích: giúp hướng dẫn AI xử lý các tình huống liên quan đến post purchase và chuyển giao qua email, giảm thời gian xử lý issue của khách hàng
• Vị trí: AI assistant | Instruction | Scenario instruction https://prnt.sc/F-EdDnfF3CIu
• Mô tả tính năng: Thêm scenario mặc định về After sales service:
    ◦ Trigger: tự động detect intent liên quan đến post-purchase (order issue, return/refund/exchange order/cancel order/update order)
    ◦ Instruc...

**Task:** Form hỗ trợ xử lý post purchase (https://www.notion.so/Form-h-tr-x-l-post-purchase-1f3b0da449f1802495d2ec044812665c?pvs=21)


### 118. [Improvement] Cài đặt email nhận thông báo về budget

**Released:** June 24, 2025

Mục đích: 
Giúp merchant chủ động kiểm soát AI usage budget, nhận cảnh báo kịp thời khi sắp vượt giới hạn để tránh phát sinh ngoài ý muốn và điều chỉnh kịp thời
Mô tả tính năng
• Khi bật Budget control (https://prnt.sc/vzyGukhK9UWr): gửi email thông báo khi đạt 80%, 100% budget 
• Trường hợp đạt budget thì tự động deactivate AI, khi tăng budget sẽ tự động bật lại

**Task:** Settings nhận email noti về budget (https://www.notion.so/Settings-nh-n-email-noti-v-budget-1ebb0da449f1802f97c5c7f95ced9aeb?pvs=21)


### 119. [Improvement] Update default chat page setting

**Released:** June 23, 2025

Vấn đề:
Mở Chatbox → Chat page: ko tự động mở preview chat, khiến người dùng khó hiểu cải đặt Chat page là gì 

Mô tả thay đổi:
1. Tự động preview trang Chat khi mở setting “Chat page”
2. Tự động preview tương ứng với cài đặt 
- Bật/tắt/chỉnh sửa conversation starter: hiện/ẩn/cập nhật suggested question trên preview 
- Pre-chat
- Disclaimer consent

**Task:** [Chatbox setting] Update default chat page (https://www.notion.so/Chatbox-setting-Update-default-chat-page-203b0da449f18050bf93e51826658512?pvs=21)


### 120. [New feature] Detect intent transfer to human

**Released:** June 23, 2025

Vấn đề:
Hiện tại, để chuyển cuộc trò chuyện từ AI sang agent, user phải click vào button "Feedback message" sau mỗi câu trả lời của AI → gây bất tiện
Mục đích: 
• Giúp AI tự động nhận diện ý định của khách hàng muốn nói chuyện với người thật
• Tự động thực hiện chuyển giao sang agent mà không cần thao tác thủ công
Mô tả tính năng
• Thêm một scenario ẩn trong hệ thống để hướng dẫn AI tự động transfer khi phát hiện ý định của khách hàng (eg: I want to talk to a real person, Can I speak to a human ...

**Task:** Intent detection: talk to agent (https://www.notion.so/Intent-detection-talk-to-agent-1ffb0da449f1809583b4d51df866b3f5?pvs=21)


### 121. [Improvement] Chặn gửi tin nhắn khi AI đang trả lời

**Released:** June 13, 2025

Vấn đề
Trong lúc AI đang phản hồi, user vẫn có thể tiếp tục gửi thêm tin nhắn → khiến AI trả lời nhiều tin cùng lúc, gây lặp nội dung hoặc mâu thuẫn thông tin, ảnh hưởng đến trải nghiệm.

Mục đích
• Tránh trùng lặp hoặc xung đột nội dung trả lời
• Cải thiện tính rõ ràng và mượt mà của luồng hội thoại
Mô tả tính năng
• Khi AI đang trả lời:
    ◦ Vẫn cho phép gõ nội dung trong ô chat
    ◦ Ẩn nút “Send”
    ◦ Chặn gửi tin bằng phím Enter
• Phạm vi áp dụng:
    ◦ Chatbox giao diện khách hàng
    ◦ ...

**Task:** Chặn gửi tin nhắn khi AI đang trả lời (https://www.notion.so/Ch-n-g-i-tin-nh-n-khi-AI-ang-tr-l-i-207b0da449f1806fa084d6305245e477?pvs=21)


### 122. [New feature] Gửi email thông báo về report trên app

**Released:** June 13, 2025

Vấn đề
Chưa có email gửi báo cáo hiệu suất ứng dụng định kỳ cho merchant, dẫn đến thiếu dữ liệu để đánh giá giá trị app, khó thúc đẩy engagement và retention
Mục đích
• Tăng retention: giúp merchant chủ động theo dõi hiệu quả, từ đó duy trì và tối ưu việc sử dụng app
• Nâng cao nhận diện giá trị của app thông qua báo cáo
Vị trí: Settings → General → Report
Mô tả tính năng
• Bật/Tắt report: 
     • Unresolved Question Reminder: chuyển từ Settings/Notifications 
     • App performance report: cài ...

**Task:** Email reports in app (https://www.notion.so/Email-reports-in-app-1afb0da449f180f6919efc1d78428244?pvs=21)


### 123. [Improvement] Cập nhật pre-chat form dạng inline

**Released:** June 13, 2025

Vấn đề: 
Pre-chat form hiển thị dạng modal, tạo cảm giác cứng nhắc, gián đoạn trải nghiệm và khiến nhiều khách rời đi trước khi điền thông tin

Mục đích: 
• Tăng tỷ lệ engagement: tạo trải nghiệm tự nhiên và liền mạch hơn trong giao diện chat
• Giảm tỷ lệ abandon: tránh gây cản trở khi bắt đầu trò chuyện

Mô tả tính năng:
1. Thay đổi hình thức pre-chat form
• Hiển thị dạng inline ở trong nội dung chat thay vì mở modal như trước
• Luồng xử lý tuỳ theo cài đặt “How customers start a chat”
TH1. Cha...

**Task:** [Chatbox] Sửa pre-chat form dạng inline trong chat (https://www.notion.so/Chatbox-S-a-pre-chat-form-d-ng-inline-trong-chat-1bcb0da449f180c0b899edeece581571?pvs=21)


### 124. [Pre-chat form] Show form sau một vài message/certain time

**Released:** June 10, 2025

[New feature] Show pre-form sau một vài message/certain time
• Mục đích: cho phép visitor bắt đầu trò chuyện ngay lập tức mà không bị bắt buộc cung cấp thông tin từ đầu. Tăng tỷ lệ tương tác và giảm tình trạng từ bỏ khi phải điền form trước khi nhận được phản hồi
• Vị trí: Chatbox → Chat page → Pre-chat form https://prnt.sc/sLQ4yC8bcVWo
• Mô tả tính năng
    ◦ Tuỳ chọn thời điểm hiển thị pre-chat form:
        ▪ Chỉ có thể cài đặt khi chế độ chat là “Chat as guest” hoặc “Show both options”
     ...

**Task:** [Pre-chat form] Show form sau một vài message/certain time (https://www.notion.so/Pre-chat-form-Show-form-sau-m-t-v-i-message-certain-time-1c7b0da449f18068b77ef82a3dfcb33d?pvs=21)


### 125. Satisfaction survey

**Released:** June 10, 2025

[New feature] Satisfaction survey
• Mục đích: giúp merchant thu thập phản hồi từ khách hàng sau khi cuộc hội thoại được xử lý, nhằm đo lường chất lượng hỗ trợ, nâng cao trải nghiệm và cải thiện dịch vụ
• Vị trí: Settings → Automation → Satisfaction survey https://prnt.sc/5ka1kBLCLvUQ
• Mô tả tính năng:1. Cài đặt khảo sát https://prnt.sc/9blkgKQ9OATd
• Template dạng: Star ⭐ hoặc Emoji 😃
• Tùy chỉnh nội dung khảo sát: intro, thank you message
• Trigger gửi khảo sát:
    ◦ Khi conversation được đán...

**Task:** Satisfaction survey (https://www.notion.so/Satisfaction-survey-1a1b0da449f18057aebce7bc2e204617?pvs=21)


### 126. [Growth hacking] Mở data source limit & offer discount theo tệp khách hàng

**Released:** June 6, 2025

1. Tăng AI usage của các gói 
- Tăng số lượng AI replies cho các gói trả phí để giảm lo ngại về chi phí phát sinh và giúp khách dễ ra quyết định đăng ký
- Chi tiết: https://prnt.sc/5Srn93zipY32

2. Offer discount by segment
• Tự động offer discount dựa trên thời gian tạo shop & số lượng đơn hàng:
• Shop <1 năm hoặc < 2000 order: Offer 35% gói Basic first 3 months
• Còn lại: Offer $1 gói PRO first month
https://prnt.sc/tOBR8XEUbxxT

3. Mở data source limit 
- Áp dụng cho tất cả plan (trừ Free và ...

**Task:** Growth tasks (https://www.notion.so/Growth-tasks-1fab0da449f180aca9cffcbaeea9010b?pvs=21)


### 127. [Improvement] Tích hợp Shopify MCP storefront

**Released:** June 4, 2025

###Chatty - 04/06/2025
[Improvement] Tích hợp Shopify MCP storefront
• Mục đích: tích hợp với Shopify MCP để truy xuất dữ liệu từ cửa hàng, nhằm hỗ trợ AI trả lời hiệu quả hơn các câu hỏi liên quan đến pre-purchase
• Các kịch bản sử dụng MCP
    ◦ Product Search: cho phép AI tra cứu thông tin sản phẩm trực tiếp từ catalog, giúp cải thiện khả năng trả lời các câu hỏi liên quan đến sản phẩm
    ◦ Policy Information (đang check lại thông tin lấy được): hỗ trợ trả lời các câu hỏi liên quan đến store...

**Task:** Add Shopify MCP storefront (https://www.notion.so/Add-Shopify-MCP-storefront-1fbb0da449f180b99decfd34170e9a8e?pvs=21)


### 128. [Improvement] Hỗ trợ mailto ở tin nhắn chứa email

**Released:** May 28, 2025

• Mục đích: hỗ trợ người dùng mở nhanh ứng dụng email khi nhấn vào email trong tin nhắn, giảm thao tác và nâng cao hiệu quả liên hệ qua email
• Mô tả:
    ◦ Tích hợp mailto ở tin nhắn chứa email
    ◦ Khi người dùng nhấn vào một địa chỉ email trong tin nhắn, hệ thống sẽ tự động mở ứng dụng gửi email mặc định trên thiết bị và điền sẵn địa chỉ người nhận https://prnt.sc/i5s5z23okCwq

**Task:** Improve nhập email tại transfer message (https://www.notion.so/Improve-nh-p-email-t-i-transfer-message-1f8b0da449f180c1aca7ce2192628bab?pvs=21)


### 129. [Improvement] Optimize dashboard setup guide

**Released:** May 28, 2025

• Mục đích: tối ưu setup guide tại dashboard, giúp merchant setup nhanh và đạt đúng mục tiêu hơn
• Vị trí: Dashboard → Set up https://prnt.sc/KNVFSw5OtZbh
• Mô tả
    ◦ Set up live chat
        ▪ Chuyển lên đầu thay cho AI: do setup AI cần nhiều thời gian hơn, để bật AI thì phải setup chatbox và bật live chat trước
        ▪ Sửa và bỏ bớt step
    ◦ Set up AI assistant: thêm các bước để set up AI

**Task:** Update setup guide on Dashboard (focus on AI) (https://www.notion.so/Update-setup-guide-on-Dashboard-focus-on-AI-1afb0da449f180739b8df9d950ef1803?pvs=21)


### 130. Generate instruction by AI

**Released:** May 21, 2025

• Mục đích: giúp merchant training AI theo instruction một cách nhanh chóng và phù hợp với ngành hàng của store để tạo ra 1 nhân viên bán hàng chuyên nghiệp
• Vị trí: AI assistant → Personality → General instruction
• Mô tả user flow
1. User mở AI assistant | Personality 
2. Tại mục Instruction, click Create with AI → mở modal Create AI instruction
3. User lựa chọn ngành hàng, nhập mô tả business (pre-fill hướng dẫn theo ngành hàng)
4. AI generate instruction dựa trên mô tả business theo templat...

**Task:** Generate instruction by AI (https://www.notion.so/Generate-instruction-by-AI-1c8b0da449f1808d8acbc94d49fc6a6a?pvs=21)


### 131. [Improvement] Sắp xếp layout Automation, Chatbox settings

**Released:** May 20, 2025

• Mục đích: sắp xếp lại cài đặt trang Automation và Chatbox giúp người dùng setup dễ dàng hơn 
• Vị trí: Chatbox -> General, Chat page
• Mô tả:
    ◦ Thêm tab Chat page tại trang Chatbox setting bao gồm set up liên quan đến live chat gồm:
        ◦  Welcome message, Suggested FAQ: move từ trang Automation)
        ◦  Chat avatar, Pre-chat Form (move từ trang Chatbox/General) 
    ◦ Với Pre-chat form: move Disclaimer consent từ trang Settings/General

**Task:** Move Welcome message, Suggested FAQs to Chatbox settings  (https://www.notion.so/Move-Welcome-message-Suggested-FAQs-to-Chatbox-settings-1ecb0da449f180b2a3e8f2ce1bbd27f6?pvs=21)


### 132. [Improvement] Recommend product variant with lowest price

**Released:** May 20, 2025

• Mục đích: giúp AI gợi ý sản phẩm giá thấp nhất, thu hút khách xem sản phẩm để tăng cơ hội convert
• Mô tả:
    ◦ Trước cập nhật: AI gợi ý ngẫu nhiên variant của sản phẩm 
    ◦ Sau cập nhật: gợi ý sản phẩm có variant có giá thấp nhất trong trường hợp sản phẩm có nhiều variant giá khác nhau

**Task:** AI suggest product (nhiều variant, giá) với giá thấp nhất  (https://www.notion.so/AI-suggest-product-nhi-u-variant-gi-v-i-gi-th-p-nh-t-1edb0da449f180769606da54469d389d?pvs=21)


### 133. Record conversation test in merchant’s store

**Released:** May 20, 2025

Mục đích:
- Lưu lịch sử test của merchant với AI tại trang AI assistant | Test 
- Sử dụng để phân tích các trường hợp AI không xử lý được để cải thiện, giảm tỷ lệ merchant rời đi sau khi test AI ko thành công 

Mô tả: 
- Lưu trữ conversation test của merchant với AI  
trên Dev zone https://prnt.sc/f5tmdLyXqk4A
- Click Open: mở conversation test, xem được lịch sử test và resource AI response

**Task:** Record conversation test in merchant’s store (https://www.notion.so/Record-conversation-test-in-merchant-s-store-1c4b0da449f180c29c0ee4dbe0b45b67?pvs=21)


### 134. [New feature] Reply new and best seller product

**Released:** May 20, 2025

Mục đích: giúp AI trả lời được các câu hỏi liên quan đến new arrival và best seller 
Mô tả: 
- Gắn tag new, best seller theo Shopify (dựa trên thời gian tạo order và số lượng order)
- Cập nhật tag này mỗi khi sync product 
- Sử dụng tag trên để trả lời các câu hỏi về New arrival và Best seller

**Task:** Sync product attributes new and best selling (https://www.notion.so/Sync-product-attributes-new-and-best-selling-1e4b0da449f180cea033f3bb16765e4a?pvs=21)


### 135. [New feature] Sync metafield product cho AI training

**Released:** May 20, 2025

Mục đích: giúp merchant sync product metafield để train AI, giúp AI trả lời đúng/đầy đủ hơn các câu hỏi về sản phẩm
Vị trí: AI assistant | Data source
Mô tả tính năng:
・Trang assistant/Data sources/Products:
　・Click btn Sync metafield: mở modal Sync product metafield
　・Hiển thị danh sách product metafield sync từ Shopify
　・Click Re-sync để lấy lại list metafield từ Shopify
　・Cho phép chuyển status Enable/Disable để bật/tắt sử dụng metafield cho AI training 
・Các loại metafield hỗ trợ: tất cả tro...

**Task:** [AI assistant] Sync metafield của product (https://www.notion.so/AI-assistant-Sync-metafield-c-a-product-1b2b0da449f1808792c1cc933ef2b8e6?pvs=21)


### 136. [New feature] Thêm cài đặt bắt buộc cho thông tin trên pre-chat form

**Released:** May 20, 2025

Mục đích: giúp merchant tăng tỷ lệ collect lead, dễ dàng tạo profile khách hàng trong Shopify ngay khi chat ở Inbox

Mô tả:
- Pre-chat form: thêm cài đặt optional/required cho các thông tin hiển thị (First name/Last name/Phone/Email), validate required ít nhất 1 field contact
- Tại inbox & Contact: để convert customer từ anonymous hoặc lead thì chỉ cần nhập ít nhất 1 thông tin First name/Last name/Phone/Email (trước đây bắt buộc điền email)

**Task:** [Pre-chat form] Require ít nhất 1 contact field (https://www.notion.so/Pre-chat-form-Require-t-nh-t-1-contact-field-1bdb0da449f18026b2ebe483bec04f09?pvs=21)


### 137. Handover by contact form

**Released:** May 16, 2025

Mục đích: giúp merchant gửi thông tin đoạn hội thoại đến email khi AI không trả lời được, để xử lý nhanh chóng mà không cần mở app (phù hợp với store nhỏ, không có nguồn lực để trực chat) 

• Mục đích: giúp merchant nhận thông tin về vấn đề của khách hàng qua email khi AI không trả lời được, để xử lý nhanh chóng mà không cần mở app (phù hợp với store không có nguồn lực để trực chat)
• Vị trí: AI assistant → Transfer https://prnt.sc/REhneNWM_DIM
• Mô tả tính năng:
    ◦ Thêm cài đặt "Show contact...

**Task:** [AI assistant] Send contact form after handover (https://www.notion.so/AI-assistant-Send-contact-form-after-handover-19ab0da449f18015af78ed3f25b1eb47?pvs=21)


### 138. [New feature] Refresh URL, Preview content từ URL

**Released:** May 13, 2025

• Mục đích: giúp merchant xem thông tin đọc được từ URL dùng để traing AI, làm mới dữ liệu sync từ URL khi nội dung trang thay đổi
• Vị trí: AI Assistant → Data Source → URL
• Mô tả:
    ◦ Tại danh sách data source, click view URL để xem nội dung đọc được từ URL dưới dạng text https://prnt.sc/ku05S8VWAaRq
    ◦ Re-sync URL: cho phép làm mới dữ liệu của URL https://prnt.sc/yROPQloGx-uO

**Task:** [AI assistant/Data sources] Refresh URL, Preview content từ URL (https://www.notion.so/AI-assistant-Data-sources-Refresh-URL-Preview-content-t-URL-1a7b0da449f1801d8addf0161e34efbd?pvs=21)


### 139. Train AI with store’s page URL

**Released:** May 13, 2025

Mục đích: giúp merchant nhanh chóng train AI ngay sau khi cài đặt app bằng cách tự động đồng bộ thông tin từ website của store
Vị trí: AI Assistant → Data Source → URL
Mô tả: 
• Thời điểm sync: khi activate AI assistant (nếu lựa chọn sync data tại step 3 onboarding thì sync ngay khi hoàn tất onboarding) 
• Thông tin sync: 
   • Các trang có trạng thái visible trên Shopify 
   • Chỉ sync các trang phổ biến thuộc faq, shipping-policy, return-policy, privacy-policy ,terms-of-service, contact-us, ab...

**Task:** [AI assistant/Data sources] Sync pages URL từ Shopify (https://www.notion.so/AI-assistant-Data-sources-Sync-pages-URL-t-Shopify-1a7b0da449f180f4a70bd5b83263c41f?pvs=21)


### 140. [New feature] Review source khi test AI

**Released:** May 6, 2025

Mục đích: giúp merchant biết AI dựa vào thông tin nào để trả lời khi test, để có thể hướng dẫn AI trả lời đúng theo mong muốn 
Đối tượng: all users
Vị trí: trang AI assistant | Test https://prnt.sc/VHJY0xlp184q
Mô tả: 
• Tại trang Test, mở rộng khu vực test để giúp user dễ dàng view và test AI response 
・Thêm button Review sources ở mỗi AI response → click thì mở modal Review sources để xem dữ liệu AI dùng để trả lời 
・Modal review sources (tương tự Review sources ở Inbox)
　・Show list data sourc...

**Task:** Review sources khi test AI (https://www.notion.so/Review-sources-khi-test-AI-1c3b0da449f1805fa5d2c5207945d4f5?pvs=21)


### 141. [New feature] AI instruction by scenarios

**Released:** May 6, 2025

Mục đích: giúp merchant train AI theo tình huống cụ thể, giúp AI trả lời tốt hơn các câu hỏi của khách hàng 
Đối tượng: all users
Vị trí: trang AI assistant | Personality, mục Instructions https://prnt.sc/-d9JlyQ_beDs
Mô tả: 
• Nhấn Add scenario để thêm mới instruction theo tình huống cụ thể
• Các thông tin gồm: 
   • Tên scenario
   •  Keyword nhận dạng scenario
   • Instruction: nhập hướng dẫn cho AI khi gặp các tình huống tương ứng 
• Mặc định thêm 2 scenario Product recommendation và Order r...

**Task:** AI instruction by scenarios and industry (https://www.notion.so/AI-instruction-by-scenarios-and-industry-1a4b0da449f1806bba4aec80a6a2c46c?pvs=21)


### 142. Thêm thông báo về AI completion rate

**Released:** May 5, 2025

Vấn đề:
- Ko thể hiện rõ hành động cần thực hiện 
- Trường hợp Unanswerred question = 0, vẫn hiển thị button Go to review

Sau cập nhật:
1. Thêm banner Next action tại card AI completion rate
- Điều kiện hiển thị: chỉ hiển thị khi có số unresolved AI conversation / Unresolved question > 0 
- Nội dung: 
+ Số AI conversation cần kiểm tra và resolve 
+ Số Unresolved question chưa kiểm tra → hướng dẫn review

**Task:** [AI completion rate] Thêm next action (https://www.notion.so/AI-completion-rate-Th-m-next-action-1c1b0da449f1806ba628c53794bac5cf?pvs=21)


### 143. Cài đặt usage charge limit

**Released:** May 5, 2025

Mục đích: giúp merchant cài đặt giới hạn AI replies usage charge, để kiểm soát được chi phí từ AI replies phát sinh mỗi tháng
Đối tượng: Paid plan
Vị trí: Subscription 
Mô tả: Tại mục Subscription details, thêm nút Set usage limit https://prnt.sc/0k66oOjs6TdT
- Cho phép bật/tắt tính phí AI replies khi đạt limit 
- Month usage limit: nhập số tiền limit mỗi tháng cho additional charge
- Khi đạt limit:
+ Tự động tắt AI cho đến next billing cycle
+ Gửi thông báo qua email

**Task:** [Pricing] Thêm limit usage charge (https://www.notion.so/Pricing-Th-m-limit-usage-charge-1e0b0da449f1806eacfad0437a890588?pvs=21)


### 144. [New feature] [AI assistant] Bulk delete, set active/inactive

**Released:** April 26, 2025

Mục đích: giúp merchant xoá, set active/inactive hàng hoạt data source để tiết kiệm thời gian chỉnh sửa
Vị trí: AI assistant | General | Data source
Mô tả tính năng:
- Tại list data source, thêm checkbox tại mỗi data source → tích để lựa chọn nhiều data sources 
- Click Delete / Set active/inactive và nhấn xác nhận để thực hiện action hàng hoạt
https://prnt.sc/R9GYbNsTSa82

**Task:** [AI assistant] Bulk delete, set active/inactive (https://www.notion.so/AI-assistant-Bulk-delete-set-active-inactive-1c0b0da449f180cd9fe3ea9111a1a314?pvs=21)


### 145. [Improvement] Transfer admin to other member

**Released:** April 26, 2025

Vấn đề:
- 1 merchant có nhiều store, khi đổi email của tk admin ở 1 store thì đồng thời các store khác đổi theo
- Merchant muốn đổi admin email riêng của 1 store:
Vị trí: Setting | Team 
Các bước thực hiện
1. Bật Transfer admin tại Dev zone https://prnt.sc/TleITZEaCACw)
2. Tại trang Edit admin profile, click “Transfer admin” https://prnt.sc/1eJz7Qo2RDct
3. Lựa chọn member chuyển đổi thành admin và xác nhận https://prnt.sc/xmc6vcB3uw-0
4. Chuyển đổi admin và member

**Task:** [Team] Convert member thành admin (https://www.notion.so/Team-Convert-member-th-nh-admin-1d8b0da449f18061a91bdaf32158aead?pvs=21)


### 146. [New feature] Resize chat zone

**Released:** April 23, 2025

Mục đích: giúp merchant xem được nhiều dòng thông tin tại ô chat dể dễ dảng review thông tin (đặc biệt là với email)

Mô tả tính năng
1. Chỉnh size mặc định / tối đa của ô chat: 
- Default: 3 dòng (desktop), 1 dòng (mobile) 
- Max: 12 dòng (desktop), 3 dòng (mobile) 
2. Thêm icon resize ô chat: 
- Hiển thị khi hover vào đường ngăn cách, kéo để điều chỉnh kích thước của ô chat 
- Cho phép kéo đến max height (tuỳ theo thiết bị)

**Task:** [UI] [Inbox] Update chat zone size  (https://www.notion.so/UI-Inbox-Update-chat-zone-size-1afb0da449f18033a0bef9d6422e9517?pvs=21)


### 147. [Improvement] Improve chat performance

**Released:** April 23, 2025

1. Cải thiện tốc độ loading pre-chat form
2. Thêm transition khi gửi tin nhắn AI replies và tin nhắn của KH

**Task:** [Chatbox] Improve chatbox performance (https://www.notion.so/Chatbox-Improve-chatbox-performance-1b4b0da449f180e6ad72cf26648fdb33?pvs=21)


### 148. [Notifications] Thêm event “New message from AI conversations”

**Released:** April 18, 2025

Mục đích: Giúp merchant nhận thông báo về những conversation do Ai trả lời, để có thể chủ động xử lý conversation khi đang không mở mở Inbox (trước đó chỉ gửi thông báo khi conversation được chuyển giao cho agent)
Vị trí: Settings | Notifications
Mô tả tính năng:
• Thêm cài đặt “There is a new message from conversations assigned to AI assistant
• Gửi thông báo khi có tin nhắn mới từ conversation do AI xử lý (Assignee = AI assistant)
• Mặc định tắt, chỉ cài đặt được khi bật AI assistant

**Task:** [Notifications] Thêm event “New message from AI conversations” (https://www.notion.so/Notifications-Th-m-event-New-message-from-AI-conversations-1b9b0da449f1801eab27cd118880ac77?pvs=21)


### 149. Sửa UI product card ở AI replies

**Released:** April 14, 2025

Sửa giao diện product card gửi tại chatbox, giúp user dễ dàng thao tác để xem sản phẩm:
• Thêm dark mode
• Thêm button next/back

**Task:** Sửa UI product card ở AI replies (https://www.notion.so/S-a-UI-product-card-AI-replies-1c2b0da449f180ac8423e3fac92815fa?pvs=21)


### 150. [Improvement] Xử lý với open conversation khi tắt AI assistant

**Released:** April 14, 2025

###Chatty - 11/04/2025
[Improvement] Xử lý với open conversation khi tắt AI assistant
• Why
Giúp merchant kiểm soát việc sử dụng AI, tránh trường hợp AI tiếp tục trả lời ngoài ý muốn gây phát sinh expected usage/cost
• What
Trước cập nhật: Khi tắt AI, AI vẫn tiếp tục trả lời tại những conversation AI đang xử lý trước đó, dẫn đến sai lệch về AI replies usage
Sau cập nhật: Khi tắt AI hoặc AI bị tắt khi đạt limit usage với bản Free, những conversation do AI đang xử lý có trạng thái Open sẽ:
    ◦ I...

**Task:** Xử lý với open conversation khi tắt AI assistant (https://www.notion.so/X-l-v-i-open-conversation-khi-t-t-AI-assistant-1c7b0da449f18037979cc1c043a665f8?pvs=21)


### 151. [Improvement] Bổ sung context cho AI với link gửi tại chatbox

**Released:** April 14, 2025

Mục đích: Giúp AI trả lời chính xác khi khách hàng gửi câu hỏi kèm link 
Flow:
1. KH chat kèm link (product, FAQs page…)
2. AI đọc trang để lấy thông tin lưu vào context 
3. AI sử dụng context để trả lời

**Task:** [AI assistant] Đọc product link ở tin nhắn và trên màn đang mở - Shopify page (https://www.notion.so/AI-assistant-c-product-link-tin-nh-n-v-tr-n-m-n-ang-m-Shopify-page-1bbb0da449f1807291cbd313fa14dce6?pvs=21)


### 152. [Inbox] Thêm review data source (URL, File)

**Released:** April 14, 2025

Mục đích: Giúp merchant review source từ câu trả lời của AI đầy đủ với các loại data source 
Flow
1. Tại inbox, click Review sources tại câu trả lời của AI 
2. Tại mục Review sources, hiển thị danh sách data source được sử dụng
- URL, File: click để mở URL/file ở tab mới của browser

**Task:** [AI correction] Thêm review sources URL và files (https://www.notion.so/AI-correction-Th-m-review-sources-URL-v-files-1c0b0da449f1809d9b8ff1e548ed5b56?pvs=21)


### 153. [Improvement] Auto sync products after onboarding

**Released:** April 2, 2025

###Chatty - 02/04/2025
[Improvement] Auto sync products after onboarding
• Why: giúp merchant nhanh chóng sync sản phẩm theo plan đã chọn, phục vụ cho AI training mà ko phải thao tác thủ công
• Where: AI assistant | General | Products
• What:
    ◦ Trước đây: tại bước 2 onboarding, khi user nhấn Start sync, app sẽ chỉ sync 100 products (theo limit mặc định của Free plan). Sau khi user chọn plan tại bước 4, app ko tự động sync tiếp
    ◦ Cập nhật: sau khi user chọn plan tại bước 4 mới sync produc...

**Task:** Auto sync product từ Onboarding (https://www.notion.so/Auto-sync-product-t-Onboarding-1bab0da449f180d793f1d1c29bdc6f71?pvs=21)


### 154. Analytics overview

**Released:** April 2, 2025

###Chatty - 02/04/2025
[New feature] Analytics overview
• Why: Giúp merchant nhanh chóng nắm bắt hiệu suất sử dụng app thông qua các số liệu tổng quan hiển thị trên dashboard.
• Where: Dashboard (top section)
• What:
    ◦ Total conversations: tổng số cuộc trò chuyện từ tất cả các kênh, kèm chỉ số phụ thể hiện số lượng và tỷ lệ conversation được xử lý bởi AI
    ◦ Resolution rate: tỷ lệ phần trăm cuộc hội thoại có trạng thái ”Resolved”, kèm chỉ số phụ thể hiện số lượng conversation được resolved...

**Task:** [Dashboard - Conversations] Update analytics (https://www.notion.so/Dashboard-Conversations-Update-analytics-1b9b0da449f180d1bbe2e53b527c3c25?pvs=21)


### 155. [Inbox] Update list view Your inbox, Unassigned, AI

**Released:** November 5, 2024

1. Update tab Unassigned trên list view
- Hiện tại: hiển thị tất cả status
- Thay đổi: chỉ hiển thị status = Open → giúp merchant tập trung vào các conversation chưa được xử lý 
2. Thêm filter:
+ Open/Resolved: Your inbox, All, Messenger, Email, AI
+ Unread: bỏ ở tab Resolved, Starred, Blocked list
+ Assignee: All, Email, Messenger, Resolved

**Task:** [Inbox] Update list view Your inbox, Unassigned, AI  (https://www.notion.so/Inbox-Update-list-view-Your-inbox-Unassigned-AI-5da4b50b1901462db765111e93bb7bb2?pvs=21)


### 156. [Email channel] Giới hạn connect email ở Free plan

**Released:** November 5, 2024

Giới hạn số lượng email được connect với Free plan:
- Free plan: Chỉ connect được 1 email (khi downgrade thì giữ lại email đầu tiên, ưu tiên email đã verified, udpate các email khác thành unverified)
- Basic+Pro: Không giới hạn số lượng email được connect

**Task:** [Email channel] Giới hạn connect email ở Free plan (https://www.notion.so/Email-channel-Gi-i-h-n-connect-email-Free-plan-1fba37163ca6491da435ec0433d91f17?pvs=21)


### 157. Lỗi Outlook email channel bị chặn forward

**Released:** November 5, 2024

Thông báo lỗi khi connect Outlook:
Nguyên nhân:
• Automatic forwarding bị disable vì lý do bảo mật 
• Phổ biến với company/organization Outlook accounts
Chi tiết lỗi và cách khắc phục được cập nhật trên Guide

**Task:** Lỗi Outlook email channel bị chặn forward (https://www.notion.so/L-i-Outlook-email-channel-b-ch-n-forward-a49cb67b6319419d982af763a2e9073d?pvs=21)


### 158. [Bug] Manage Contact

**Released:** November 5, 2024

1. Guest: gộp chung 1 profile với conversation:
+ Type = Guest
+ Cùng email 
2. Lỗi sửa address
3. Lỗi  không tự động convert customer với conversation từ email
và 1 số lỗi nhỏ khác

**Task:** [Bug] Manage Contact (https://www.notion.so/Bug-Manage-Contact-c3f091e1a744482c912a8bb49862e9a9?pvs=21)


### 159. Improve UI/UX chatbox

**Released:** November 5, 2024

Cải thiện UX:
1. Lỗi các element khác đè lên chatbox khi mở https://prnt.sc/HFiur3QY4jmq
2. Scroll bottom sheet mượt hơn 
3. Fix page background khi scroll trong chatbox

**Task:** Improve UI/UX chatbox (https://www.notion.so/Improve-UI-UX-chatbox-ab9c4a4ff3cc4e79af145e8fefe46fd4?pvs=21)


### 160. Update luồng tạo conversation

**Released:** August 23, 2024

Vấn đề: Merchant bị miss first message do khách hàng không điền email trong pre-chat form hoặc click Continue as anonymous
Giải pháp:
• Tạo conversation ngay khi khách nhắn lần đầu tiên
• Khi merchant trả lời customer trước khi khách điền email, skip Pre-chat và khách đó sẽ là anonymous. 
• Thêm activity https://prnt.sc/1w_aIe34dNSu
• Bỏ cụm ‘My email is…’ sau khi khách hàng điền email tại pre-chat form, chỉ hiện email như tin nhắn https://prnt.sc/R2okbzS9dn1M

Update tracking order status: Thêm...


### 161. First auto reply

**Released:** August 20, 2024

• Thêm tin nhắn tự động khi khách hàng hỏi lần đầu tiên theo status và availability của store
• Chat bot sẽ hoạt động hết luồng, khi khách hàng nhắn thì First reply mới hoạt động
• Sửa lỗi hiện issue khi set đúng start & end time của Working hour, break time https://go.screenpal.com/watch/cZithUVPkaI
• Khách có thể translate 1st reply tại category Livechat https://prnt.sc/1hF95BaG6iNX https://prnt.sc/OtvVUOKah0V3


### 162. [Email channel] Gộp email khi reply

**Released:** August 14, 2024

• Sửa vấn đề luồng tin nhắn qua email không liền mạch do customer gửi bằng email cho merchant bằng nhiều hình thức thì khi trả lời sẽ tạo một email mới mà không reply vào email khách hàng gửi.


### 163. Send email sumup

**Released:** August 13, 2024

Giúp merchant gửi email sumup về đoạn hội thoại cho khách hàng sau khi resolved
• Tại Settings -> Thêm ‘Conversation sum-up notification’ https://prnt.sc/9q0xmzL6fFda
• Sau khi mark ‘Resolved’: Sumup của đoạn hội thoại sẽ được gửi tới khách hàng sau khi điền email hoặc sau khi confirm (trường hợp đã điền email)
• Forward to email sẽ được cc khi gửi đi https://prnt.sc/vt7dahCwK9le
• Tại chatbox (FE): Khách hàng chưa để lại email sẽ cần điền email sau đó confirm, khách đã có chỉ cần confirm để gửi...


### 164. Tự động matching customer

**Released:** August 8, 2024

• Khi guest nhập email tại Prechat form https://prnt.sc/yMx52uke3Y2i, nếu email trùng với email của customer đã có, phía chat inbox sẽ tự động matching thông tin và show các thông tin về Profile và Order của customer đó https://prnt.sc/Lbp31I7Ip1Z5
• Update icon Create Customer https://prnt.sc/sTh3mtZ-F0jq, khi click tự động convert và tạo customer profile trên Shopify https://prnt.sc/lPVy1rukyzy1


### 165. Open & Share chat thông qua standalone

**Released:** August 8, 2024

Tại Dashboard -> Go to inbox https://prnt.sc/XyJsZjHW4xXi:  mở standalone version
• Khách hàng có thể dùng link để mở lại chat trước đó
• Tại menu inbox, vẫn mở full-width modal. Thêm nút Open fullscreen (đang sửa lại icon) https://prnt.sc/UJ1Wh4nkni81
• Update email notification dẫn link tới standalone https://prnt.sc/IUQgmVqZcjBr


### 166. Improve customer profile

**Released:** August 6, 2024

• Order information: Update icon,thêm tooltip và toast khi copy https://take.ms/60YzE
• Customer information:
• Thêm icon copy khi hover tại các trường: Name, Email, Phone https://take.ms/j6Cjv
• Cho phép edit từng trường Name, Email, Phone thay vì mở modal edit https://take.ms/dVvYv


### 167. [Channel] Email inbox

**Released:** July 31, 2024

Giúp merchant kết nối email vào chat, merchant có thể nhận và gửi mail thông qua tin nhắn https://prnt.sc/K-w4tPQTGvoeMerchant:
• Nhận email tại Chatty inbox: https://prnt.sc/y3jm4OsKp-m6
• Hiển thị plain text (rich text) version của email nhận được https://prnt.sc/zpj3rq1e1DxD
• Hiển thị icon email ở conversation https://prnt.sc/LV-O-SQY38hg
• Thêm trường Conversation participants, khi reply back email sẽ gửi vào participant default và cc qua các participant còn lại https://prnt.sc/IxgaapqenK0A...


### 168. Manage profile guest/anonymous

**Released:** July 25, 2024

Giúp admin convert và edit các thông tin của khách hàng chưa phải customer (guest, anonymous)Các thông tin gồm có name, email, phone, location, tag. Đối với email, sẽ chia rõ ra 2 case:
• Create profile:
• Update banner thông báo Create profile https://i.imgur.com/It3kIyc.png. Khi create, tạo customer trên Shopify https://i.imgur.com/lcYk4I2.png
• Khi thay đổi thông tin, thêm banner thông báo sẽ tạo email https://i.imgur.com/NiUIzJq.png
• Edit profile: https://i.imgur.com/EybrC4n.png
• Update th...


### 169. Online/offline status

**Released:** July 23, 2024

Giúp merchant xem trạng thái hoạt động của khách hàng
• Các trạng thái:
• Offline sẽ hiển thị khi thời gian hoạt động cuối cùng của khách >5 phút
• Online: Hiện "Just now" khi hoạt động <1 phút, hiện "Active x minute ago" nếu hoạt động từ 1-5 phút
• Nối luồng từ các function trước đó:
• Gửi email khi offline: khi detect customer & guest offline, mở modal send email https://i.imgur.com/JMQU5ca.png
• Với Anonymous: Mở modal điền email khi detect khách hàng offline để đảm bảo anonymous nhận được ti...


### 170. Update Subscribe newsletter chatbot

**Released:** July 12, 2024

Dịch thông tin của discount theo ngôn ngữ của khách hàng https://i.imgur.com/vknr41s.pngKhi khách hàng select coupon, tự động xác định dạng discount và dịch theo ngôn ngữ đã publish của khách hàngUpdate hiển thị subscribe form gồm:
• Discount type
• Discount amount/ percentage
• Condition: số lượng / số tiền tối thiểu cần mua*NOTE: Với khách hàng chưa được dịch, hướng dẫn khách hàng Remove discount -> Save, Chọn lại discount -> Save

**Task:** Translate discount (https://www.notion.so/Translate-discount-c9c7e9bd6bbb41588c7026b3874974b1?pvs=21)


### 171. Subscribe newsletter chatbot improvements

**Released:** July 9, 2024

Update từ feedback của khách hàng và trải nghiệm sau khi live tính năng
• Admin: bỏ lựa chọn Select audience, mặc định hiển thị cho toàn bộ new visitor và customer chưa subscribe https://i.imgur.com/dny2as9.png
• Update trường hợp khi bật cả Welcome message chatbot
• Thay đổi: Hiển thị cả teaser welcome và subscriber https://i.imgur.com/81zr3wu.png
• Sau khi mở chat: Gửi teaser https://i.imgur.com/VzqUydJ.png
• Nếu khách không bật livechat: gửi subscribe form, không có chat
• Bật livechat: Hiển ...

**Task:** Subscribe newsletter chatbot feedback (https://www.notion.so/Subscribe-newsletter-chatbot-feedback-a1bd837a605b4b52b5df3a63e9d28682?pvs=21)


### 172. Gửi tin nhắn cho customer qua email (hidden feature)

**Released:** July 9, 2024

Đảm bảo customer k bị miss chat, cho phép merchant gửi chat cho customer qua email
• Khi chat hết session, app sẽ show modal giúp merchant nhắn cho khách hàng. Khi confirm sẽ gửi qua email, khi không confirm vẫn sẽ gửi chat như bình thường https://i.imgur.com/37CJn9L.png
• Khi tick 'Do not show this action again', sẽ tiếp tục gửi theo option mà khách hàng đã chọn https://i.imgur.com/37CJn9L.png
• Hiện chưa detect được status Online/Offline của Customer nên có thể thử ở dev zone -> enable online ...

**Task:** Gửi tin nhắn cho customer qua email (https://www.notion.so/G-i-tin-nh-n-cho-customer-qua-email-0eaabec9515e4929a0be0be9792b9fbb?pvs=21)


### 173. Update customer profile

**Released:** July 9, 2024

cho phép merchant update thông tin của khách hàng
• Các thông tin gồm có: Name, Email, Phone, Location, Tag
• Với customer: Show các thông tin của customer dưới tên của khách hàng

**Task:** Update customer profile (https://www.notion.so/Update-customer-profile-1cccaec937d444fbad1a53c311cb9c4f?pvs=21)


### 174. Update Preheader email notification

**Released:** July 8, 2024

Giúp khách xem nhanh được khách đã nhắn gì
• Các thông tin được ngắn gọn hơn và hiển thị tin nhắn của khách hàng thay vì quá nhiều thông tin

**Task:** Thêm preheader ở email notification (https://www.notion.so/Th-m-preheader-email-notification-a2c9dcedfc224da895c4d91aa1444b6b?pvs=21)


### 175. Order info in conversation

**Released:** July 8, 2024

Hiện thông tin order nếu matching tài khoản customer
• Với guest (khách đã để lại email nhưng chưa đăng nhập), nếu matching email với customer, hiện banner thông báo match với thông tin của customer sẵn có https://i.imgur.com/aQDPYwa.png. Nếu khách hàng Confirm đó là khách hàng, sẽ show thông tin order của customer đó kể cả khi khách đó là guest

**Task:** Order in conversation (https://www.notion.so/Order-in-conversation-893d24cda9e8464ca07220446359ae7f?pvs=21)


### 176. Convert anoymous & guest to customer

**Released:** July 8, 2024

Giúp merchant chuyển đổi & generate lead sang customer profile và chăm sóc tốt hơn
• Tại Profile, khi khách hàng là anonymous & guest (đã để lại email), thêm banner giúp khách hàng update thành customer https://i.imgur.com/HmKT9g5.png
• Thông tin khách hàng được convert sẽ update trên Customer list của Shopify https://i.imgur.com/iXvKgH9.png
• Khi điền thông tin của khách hàng đã là customer rồi, hiện thông báo matching và confirm https://i.imgur.com/VQbWGuI.png

**Task:** Convert anonymous & guest to customer (https://www.notion.so/Convert-anonymous-guest-to-customer-8eb05755faeb4b5183243657e24e1eea?pvs=21)


### 177. Update Chat availability

**Released:** June 26, 2024

Giúp merchant show clear hơn về trạng thái hoạt động cho customer
• Các settings về Chat appearance, Chat availability & Notification sẽ được move vào trong Menu settings https://prnt.sc/NcrVAn7Y30e9
• Update settings của Offline status (https://prnt.sc/bLjwPk1Du6DO): 
• Hiển thị trang thái trên Dashboard của widget https://prnt.sc/qTxL_7glM1ZG
• Hiển thị trạng thái trên chatbox (đang sửa lại label)


### 178. Search conversation by name, email

**Released:** June 26, 2024

Cho phép khách hàng search đoạn hội thoại theo tên và email của khách hàng


### 179. Update chat availability

**Released:** June 26, 2024

Giúp merchant show clear hơn về trạng thái hoạt động cho customer
• Các settings về Chat appearance, Chat availability & Notification sẽ được move vào trong Menu settings https://prnt.sc/NcrVAn7Y30e9
• Update settings của Offline status (https://prnt.sc/bLjwPk1Du6DO): 
• Hiển thị trang thái trên Dashboard của widget https://prnt.sc/qTxL_7glM1ZG
• Hiển thị trạng thái trên chatbox

**Task:** Cập nhật Chat availability (https://www.notion.so/C-p-nh-t-Chat-availability-464e674af5164e2ba0fc010558f94e41?pvs=21)


### 180. Thêm settings disclaimer consent

**Released:** June 25, 2024

Move settings về disclaimer consent vào settings: Khách hàng có thể custom text và link policy https://prnt.sc/PYCUG-3xh49p


### 181. Search conversation, Update expiration

**Released:** June 25, 2024

Search conversation by name, email ở admin: Cho phép khách hàng search đoạn hội thoại theo tên và email của khách hàng
Update expiration cho chat session của guest và anonymous:Update session thành 30 ngày kể từ tin nhắn cuối cùng của khách - thay vì tin nhắn đầu tiên

**Task:** [Inbox] Search customer message (https://www.notion.so/Inbox-Search-customer-message-7b353a4124ad40ef9c6990072ecebeef?pvs=21) 
Update expiration cho chat session của guest/anonymous (https://www.notion.so/Update-expiration-cho-chat-session-c-a-guest-anonymous-2997873ac08d429781eca70d55dc9fb3?pvs=21)


### 182. Assistant -> Subscribe newsletter chatbot:

**Released:** June 25, 2024

Giúp merchant generate lead bằng cách cho phép customer subscrible email
• General settings: cho phép chọn hiển thị chatbot với Not logged in & All visitors https://prnt.sc/BeCn3gR_Ou2s
• Offer reward: discount khi khách hàng subscribe email https://prnt.sc/_oW2faeqXlFS
• Teaser: lời chào khi khách vào trang https://prnt.sc/g_qg7Z1A1NoY
• Chatflow: Hiển thị content các tin nhắn tự động chat
• Success: Tin nhắn khi subscribe thành công https://prnt.sc/JQ0D1OY6g_RrKhi customer điền email, chatbot ...

**Task:** Subscribe newsletter chatbot (https://www.notion.so/Subscribe-newsletter-chatbot-ffa37e6c55da4892b46d52be15c65c91?pvs=21)


### 183. Hiển thị thông tin Customer & Orders tại Conversation details

**Released:** June 20, 2024

• Customer: thông tin của khách hàng đã login tại store (Name, email, phone, location, order, spent amout, tag) https://prnt.sc/LC6UIjxANTGX
• Order: Hiển thị thông tin order của customer (tối đa 60 ngày gần nhất) https://prnt.sc/OweghmvPpHxF
• Khi Order được thêm, sửa, sẽ có thông báo để Admin update https://prnt.sc/4CCXzR1KlLwA*Lưu ý: App sẽ xin quyền Customer & Edit Customer

**Task:** [Livechat #0.4.2] Conversation details > Customers (https://www.notion.so/Livechat-0-4-2-Conversation-details-Customers-d1af1840bfc3443188babe35f57a44b6?pvs=21) 
[Livechat #0.4.1] Conversation details > Orders (https://www.notion.so/Livechat-0-4-1-Conversation-details-Orders-a571c4eaff534d6a85ffea56719363ff?pvs=21)


### 184. Menu Assistant

**Released:** May 31, 2024

• Bổ sung Assistant menu
• Thêm chat bot welcome visitors, các chatbot còn lại để coming soon
• Các settings của welcome popup (https://prnt.sc/JnBrRwkkcK6O) trước đó sẽ được chuyển vào Welcome visitor chatbot
• Bổ sung thêm setting về audience

**Task:** Welcome new visitor chatbot (https://www.notion.so/Welcome-new-visitor-chatbot-55102c244fd5481298c50c54fbe89f4b?pvs=21)


### 185. Update luồng order tracking

**Released:** May 30, 2024

Cập nhật tính năng order tracking, cho phép track order tại chatbox với 2 cách sau:
1. Order number và email/phone 
2. Tracking number và email 
+ Nếu điền email: hiển thị thông tin tracking tại chatbox 
+ Nếu không điền email: direct đến trang tracking tương ứng điền ở admin (theo cách tracking cũ)

**Task:** Update luồng order tracking (widget only) (https://www.notion.so/Update-lu-ng-order-tracking-widget-only-5adeae70e18c4364ad52b7fee3184e70?pvs=21)


### 186. Cho phép điều chỉnh độ rộng cột Conversation list và conversation details

**Released:** May 30, 2024

Trên trang Inbox, cho phép người dùng kéo chuột để thay đổi độ rộng của 2 cột conversation preview và conversation details
+ Khi kéo, các phần nội dung bên trong sẽ tự động điều chỉnh theo để phù hợp với kích thước mới. 
+ Lưu giao diện trong 30 ngày

**Task:** [Inbox] Điều chỉnh độ rộng conversation preview & conversation details (https://www.notion.so/Inbox-i-u-ch-nh-r-ng-conversation-preview-conversation-details-15ba9989485a466387ab0ec6d4bdbee5?pvs=21)


### 187. [Livechat] Cài đặt thông báo tin nhắn mới

**Released:** May 23, 2024

Cài đặt gửi thông báo
1. Loại thông báo:
+ New message: tin nhắn chưa đọc trong 1 phút
+ No replies: tin nhắn chưa trả lời trong 15 phút
2. Người nhận thông báo: nhập 1 hoặc nhiều email

**Task:** Push notification email (https://www.notion.so/Push-notification-email-dafe30ae908240658c68d6c8ef594058?pvs=21)

**Changelog:** https://help.meetchatty.com/live-chat/notifications


### 188. Update settings, add welcome popup & chat availability functions

**Released:** November 16, 2023 9:00 AM (GMT+7)

• Update new widget settings: https://trello.com/c/FECx6TuA
• New feature Chat availability: https://trello.com/c/syrt3L9d
• New feature: Welcome popup: https://trello.com/c/xCQPvmIT

**Task:** https://trello.com/c/FECx6TuA

**Changelog:** https://helpdesk.avada.io/changelog#1.2.9


### 189. Block conversation từ channels (email, messenger, instagram)

**Released:** April 2, 2025 → December 31, 2025

Fix lỗi block/unblock conversation trên các channel: Email, Messenger, Instagram


### 190. Update AI limitation mới


---

## Live Chat / Inbox

**Total:** 48 features

### 1. [Inbox menu] Improve insert link

**Released:** February 2, 2026

[New Feature] Paste link nhanh vào tin nhắn tại Inbox
• Mục đích: Giúp merchant chèn link vào tin nhắn nhanh chóng khi trả lời khách hàng.
• Vị trí: Inbox → Ô nhập tin nhắn.
• Mô tả:
    ◦ Cho phép paste link trực tiếp (Ctrl + V) để chèn vào tin nhắn.
    ◦ Khi bôi đen một đoạn text và paste link, hệ thống sẽ tự động gắn link vào đoạn text đã chọn.
    ◦ Giúp thao tác soạn tin nhanh hơn, không cần mở menu chèn link thủ công.

**Task:** [Inbox menu] Improve insert link (https://www.notion.so/Inbox-menu-Improve-insert-link-6eb8e058d61b47f2a31acbcfa0a7b34f?pvs=21)


### 2. Proactive chat “Search page”

**Released:** January 9, 2026

[New Feature] Proactive chat “Search page welcome”
• Mục đích: chủ động tiếp cận khách hàng trên trang tìm kiếm, tăng tương tác, khuyến khích mua hàng 
• Vị trí: Proactive chat → Create proactive chat https://capture.avada.io/i/PmBehIzgz8l5
• Mô tả:
    ◦ Thêm loại proactive chat “Search page” 
    ◦ Trigger: khách nhấn tìm kiếm trên storefront 
    ◦ Điều kiện hiển thị:
        ▪ Áp dụng các điều kiện tương tự proactive chat hiện có - audience, device, display time, display duration
    ◦ Messa...

**Task:** [Proactive chat] Search page (https://www.notion.so/Proactive-chat-Search-page-25ab0da449f18009bc41f06ef37538dc?pvs=21)


### 3. Bổ sung các loại message cho proactive chat

**Released:** January 8, 2026

[Improvement] Bổ sung loại Message cho Proactive Chat
• Vấn đề: Một số proactive chat chưa hỗ trợ đầy đủ các loại message như coupon hoặc product recommendation.
• Mô tả:
    ◦ Welcome Visitor: bổ sung thêm message Coupon và Product Recommendation.
    ◦ Product Recommendation: bổ sung thêm message Coupon

**Task:** Bổ sung các loại message cho proactive chat  (https://www.notion.so/B-sung-c-c-lo-i-message-cho-proactive-chat-263b0da449f18080b8a6d6187ff2597e?pvs=21)


### 4. LinkeIn banner

**Released:** December 27, 2025

Banner follow Chatty trên LinkedIn
• Mục đích: cập nhật thông tin mới nhất cho merchant, tăng retention
• Vị trí: Dashboard https://capture.avada.io/i/HczNQbn9s92d
• Mô tả:
    ◦ Thêm banner follow trang https://www.linkedin.com/company/meetchatty/
    ◦ Banner tự động tắt vào ngày 05/01
    ◦ Hiển thị banner theo 2 tệp KH:
        ▪ MC có Avg monthly order > 40 https://capture.avada.io/i/TeKwbJcKNgC4
            • MC click button → mở LinkedIn và tự động gửi Crisp message: “Hi there. Just follo...

**Task:** LinkedIn banner - Homepage (https://www.notion.so/LinkedIn-banner-Homepage-2d5b0da449f180019ac9cfb5bcc53d81?pvs=21)


### 5. Sales analytics

**Released:** December 24, 2025

[New Feature] Sales Analytics
• Mục đích: Giúp merchant theo dõi hiệu quả của Chatty trong việc tạo doanh thu, từ đó tăng mức độ gắn bó và sử dụng app lâu dài
• Vị trí: Analytics → Sales https://capture.avada.io/i/TACJZu8XoP2e
• Mô tả:
    1. Chỉ số Sales tổng quan
        ▪ Hiển thị các metrics: Total Sales, Total Orders, AOV, Conversion Rate
        ▪ Cho phép xem các chỉ số này theo thời gian để đánh giá xu hướng tăng trưởng
    2. Bảng Assisted Orders chi tiết
        ▪ Danh sách đơn hàng có...

**Task:** [Analytics] Sales analytics  (https://www.notion.so/Analytics-Sales-analytics-1a6b0da449f180718e5ffe584b63b355?pvs=21)


### 6. Thêm paste ảnh tại chatbox

**Released:** December 18, 2025

[New Feature] Paste ảnh trực tiếp vào ô nhập tin nhắn
• Mục đích: Giúp khách hàng và CS gửi hình ảnh nhanh hơn khi chat, không cần thao tác upload thủ công.
• Vị trí: Chatbox → Ô nhập tin nhắn.
• Mô tả:
    ◦ Hỗ trợ paste ảnh trực tiếp từ clipboard vào ô input tin nhắn.
    ◦ Ảnh sẽ được tự động đính kèm và gửi như một message trong conversation https://capture.avada.io/i/eJF9OFjPdb4T

**Task:** Paste ảnh ở ô input chat trên chatbox (https://www.notion.so/Paste-nh-input-chat-tr-n-chatbox-2c7b0da449f180b19406fa31f5d5abd7?pvs=21)


### 7. [Subscribe newsletter] Thêm CTA trên teaser

**Released:** December 18, 2025

[Improvement] Cập nhật teaser proactive chat  “Subscribe newsletter”
• Vấn đề: Với luồng subscribe newsletter hiện tại, khi khách click teaser sẽ gửi teaser + form ngay, dễ khiến khách rời đi
• Mục đích: Cải thiện trải nghiệm subscribe và tăng tỷ lệ hoàn thành form
• Vị trí: Proactive Chat → Subscribe Newsletter 
• Mô tả:
1. Cập nhật layout Message card https://capture.avada.io/i/UAhtaVk2isAf
• Chỉ gồm loại message là Coupon, hiển thị cài đặt Collect lead 
• Bổ sung field Trigger button text để ...

**Task:** [Subscribe newsletter] Thêm CTA trên teaser (https://www.notion.so/Subscribe-newsletter-Th-m-CTA-tr-n-teaser-264b0da449f1805e8e3ec02acd4375c8?pvs=21)


### 8. Block conversation theo IP customer

**Released:** December 15, 2025

[New Feature] Block Conversation theo IP Customer
• Vấn đề: Chức năng block hiện tại chỉ áp dụng cho từng conversation, → trường hợp spam vẫn có thể tiếp tục tạo hội thoại mới bằng cách ẩn danh hoặc xóa cookie
• Mục đích: Ngăn chặn hiệu quả hành vi spam lặp lại
• Mô tả:
    ◦ Hệ thống tự động block conversation theo IP customer khi admin chặn conversation từ cùng một IP quá 3 lần
    ◦ Sau khi bị block IP, các conversation mới từ IP đó sẽ được tự động chuyển vào mục Blocked, user vẫn có thể gửi ...

**Task:** Block conversation theo IP customer (https://www.notion.so/Block-conversation-theo-IP-customer-2b9b0da449f1801a8a77d83b7fc36ac0?pvs=21)


### 9. [Proactive: Product recommendation] Thêm quick message button (custom, auto)

**Released:** December 11, 2025

[New Feature] Text message và quick question cho proactive chat “Product recommendation” 
• Mục đích: giúp khách dễ dàng đặt câu hỏi → tăng tương tác khám phá sản phẩm
• Vị trí: Proactive Chat → Product Recommendation
• Mô tả: 
Thêm teaser dạng text message cho proactive chat “Product recommendation”, gồm 
• Custom text: nhập tin nhắn văn bản 
• Quick question: mặc định thêm 3 câu, cho phép thêm sửa xoá, max 10 câu hỏi. Khách click vào một câu hỏi → tự động gửi câu hỏi https://capture.avada.io/i...

**Task:** [Proactive: Product recommendation] Thêm quick message button (custom, auto) (https://www.notion.so/Proactive-Product-recommendation-Th-m-quick-message-button-custom-auto-25ab0da449f1804d9813cc68a456ad6e?pvs=21)


### 10. Export conversation to CSV, TXT

**Released:** December 9, 2025

[New Feature] Export conversation transcript
• Mục đích: giúp merchant tải và lưu trữ conversation transcript để phục vụ lưu trữ, phân tích nội bộ 
• Vị trí: Inbox → Conversation header 
• Mô tả:
Thêm nút Export transcript tại mỗi conversation https://capture.avada.io/i/JBprz3CwaL6g
Nhấn → hiện modal cho phép lựa chọn export dưới dạng CSV / TXT https://capture.avada.io/i/aUIyUQOwmvPG
Nội dung file gồm: thời gian gửi/nhận, người gửi, nội dung tin nhắn: https://capture.avada.io/i/urIBIfso3eom, htt...

**Task:** Export conversation to CSV (https://www.notion.so/Export-conversation-to-CSV-2a4b0da449f18003b00ce6a648a04c81?pvs=21)


### 11. Proactive chat “Cart reminder”

**Released:** December 2, 2025

[New Feature] Proactive Chat “Abandoned cart reminder”
• Mục đích: Remind khách sau khi thêm sản phẩm vào giỏ nhưng chưa hoàn tất mua hàng, giúp tăng tỷ lệ convert
• Vị trí: Proactive Chat → Create proactive chat https://go.screenpal.com/watch/cTlnj0nqdQD
• Mô tả:
    ◦ Thêm loại proactive chat “Abandoned Cart Reminder”
    ◦ Trigger:
        ▪ Khách không cập nhật giỏ hàng hoặc checkout trong X phút sau khi add to cart
        ▪ Điều kiện bổ sung: Cart amount
    ◦ Điều kiện hiển thị:
        ▪...

**Task:** Thêm proactive chat “Abandoned cart reminder” (https://www.notion.so/Th-m-proactive-chat-Abandoned-cart-reminder-25cb0da449f180cfaa43fdad992961a5?pvs=21)


### 12. Thêm hướng dẫn cài đặt mobile app tại Inbox

**Released:** December 2, 2025

[Improvement] Banner hướng dẫn cài đặt mobile app tại Inbox
• Vấn đề: Setting cài đặt mobile app đang bị ẩn (Setting → Notification), nhiều merchant không biết cách cài app để nhận thông báo
• Vị trí: Inbox
• Mô tả:
    ◦ Thêm banner hướng dẫn cài đặt Mobile App trực tiếp trong Inbox → Click Install để modal mở hướng dẫn cài app

**Task:** Thêm hướng dẫn cài đặt mobile app (https://www.notion.so/Th-m-h-ng-d-n-c-i-t-mobile-app-2b5b0da449f180ba8666f635b391500a?pvs=21)


### 13. [New feature] Rewrite message in inbox

**Released:** November 26, 2025

[New Feature] Rewrite message tại Inbox
Mục đích: giúp merchant chỉnh sửa tin nhắn chuẩn ngữ pháp, rõ nghĩa và chuyên nghiệp hơn trước khi gửi cho khách hàng
Vị trí: Inbox → Chat menu https://prnt.sc/ZAhUb8wwaPTI
Mô tả tính năng:
• Thêm nút Rewrite tại Inbox
• Sau khi nhập tin nhắn, click Rewrite để viết lại nội dung dựa trên các tiêu chí: tone voice, grammar, clarity

**Task:** Rewrite message tại inbox (https://www.notion.so/Rewrite-message-t-i-inbox-25ab0da449f180b69a06f06c455aed2c?pvs=21)


### 14. Thêm lựa chọn team member được assign

**Released:** November 12, 2025

[New Feature] Chọn thành viên được Auto-Assign
Vấn đề: theo rule auto-assignment hiện tại, conversation được phân đều cho tất cả thành viên gồm cả admin → admin có thể chỉ tham gia quản lý, không trực chat
Mục đích: giúp merchant giới hạn nhóm thành viên được nhận hội thoại, đảm bảo tin nhắn chỉ được assign đến đúng team phụ trách hỗ trợ KH
Vị trí: Settings | Automations, Assignment
Mô tả tính năng
• Thêm cài đặt Assignment member trong phần auto-assignment:
    ◦ All members: assign cho toàn bộ...

**Task:** Thêm lựa chọn team member được assign (https://www.notion.so/Th-m-l-a-ch-n-team-member-c-assign-27ab0da449f1802da8b4f7aa8e9817f1?pvs=21)


### 15. Toggle push notification for online store only

**Released:** November 4, 2025

Mục đích: giúp cài đặt chỉ nhận thông báo web push cho conversation từ online store
Mô tả: thêm toggle bật/tắt ở dev zone

**Task:** Add toggle push only OS notifications (https://www.notion.so/Add-toggle-push-only-OS-notifications-2a0b0da449f180a79a2ef7f7fd9ada90?pvs=21)


### 16. [New proactive chat] Browse collection page

**Released:** October 31, 2025

[New Feature] Proactive chat – Browse collection page
• Mục đích: tăng tương tác với khách hàng khi họ xem collection page, gợi ý nội dung và ưu đãi phù hợp theo từng collection → giúp tăng conversion và boost sales
• Vị trí: Proactive chat | Browse collection page https://prnt.sc/9D7hUAeAUrlW
• Mô tả: thêm template mới: “Browse collection page”
    ◦ Cấu trúc tương tự “Browse product recommendation”, chỉ khác điều kiện hiển thị "View all collections/Specific collections"
    ◦ Message type: def...

**Task:** Thêm proactive chat “Browse collection page”  (https://www.notion.so/Th-m-proactive-chat-Browse-collection-page-25ab0da449f180d1ba76fc836a01dcde?pvs=21)


### 17. [Improvement] Thông báo reach đạt metafield

**Released:** October 22, 2025

[Improvement] Thông báo khi đạt giới hạn Metafield
Vấn đề
Khi vượt quá giới hạn 10 metafield, hệ thống chỉ hiển thị toast lỗi mặc định (“Cannot enable more than 10 metafields”) → message chưa rõ ràng, dễ gây nhầm lẫn cho người dùng
 Mục đích
• Làm rõ giới hạn metafield để người dùng hiểu nguyên nhân lỗi.
• Giúp merchant dễ dàng liên hệ CS khi cần mở rộng giới hạn.
Mô tả cập nhật
1. Cảnh báo khi sync > 10 metafields
    ◦ Hệ thống vẫn sync toàn bộ nhưng tự động disable metafield vượt giới hạn.
  ...

**Task:** Thông báo reach limit metafield (https://www.notion.so/Th-ng-b-o-reach-limit-metafield-245b0da449f1801b9241f13219c1c91e?pvs=21)


### 18. [Improvement] Cập nhật logic Welcome message theo online status

**Released:** September 11, 2025

[Improvement] Cập nhật logic Welcome message theo online status
Vấn đề
Welcome message và 1st auto reply hiện chỉ dựa vào working hour và agent online status (auto-detect khi mở app) → không phản ánh đúng nếu agent chuyển trạng thái thủ công bằng Quick button
Mục đích
• Đảm bảo welcome message gửi đúng theo trạng thái online thực tế của store
Mô tả 
1. Cập nhật logic online status cho Welcome message:
    ◦ Dựa trên working hour kết hợp với member online status (theo nút bật/tắt ở web app)
2. Th...

**Task:** Update logic xác định online status sử dụng cho welcome message (https://www.notion.so/Update-logic-x-c-nh-online-status-s-d-ng-cho-welcome-message-255b0da449f1809c8fe6e3eaa6604e0d?pvs=21)


### 19. [Improvement]

**Released:** September 11, 2025

[Improvement] Đơn giản hoá cài đặt “Page to show” cho Proactive Chat
Vấn đề
Proactive chat “Welcome visitor” và “Product recommendation” đều có cài đặt trang hiển thị, ko phù hợp với mục tiêu của mỗi loại proactive chat
Mục đích
• Loại bỏ cài đặt không cần thiết
• Đảm bảo tính năng phù hợp với mục tiêu chính của từng loại proactive chat
Mô tả cập nhật
1. Product recommendation
    ◦ Bỏ lựa chọn All pages và Specific page
    ◦ Chỉ giữ lại giá trị All product page, Specific product page
https://p...

**Task:** [Product recommendation] Bỏ option tại cài đặt Page to show (https://www.notion.so/Product-recommendation-B-option-t-i-c-i-t-Page-to-show-268b0da449f180338e6dea431270ec8c?pvs=21) 

[Welcome visitor] Bỏ cài đặt Page to show (https://www.notion.so/Welcome-visitor-B-c-i-t-Page-to-show-25cb0da449f1801da6f6c98a3653c416?pvs=21)


### 20. [Improvement] Cập nhật Conversation Starter

**Released:** September 4, 2025

[Improvement] Cập nhật Conversation Starter

Vấn đề
• Conversation starter mặc định đang tắt → user không biết để bật.
• Khi xoá hết question, hệ thống không validate, dẫn đến lỗi hiển thị 
🔗 https://prnt.sc/0TS90nuh36ll?utm_source=chatgpt.com
Mục đích
• Giúp user dễ dàng sử dụng Conversation starter ngay từ đầu.
• Tránh trường hợp bật tính năng nhưng không có câu hỏi gợi ý.
Mô tả cập nhật
1. Mặc định ON cho Conversation starter khi cài app.
2. Thêm validate:
Nếu bật Conversation starter nhưng c...

**Task:** Cập nhật conversation starter (https://www.notion.so/C-p-nh-t-conversation-starter-254b0da449f180deb540e2a40b418ae0?pvs=21)


### 21. Xoá conversation, contacts

**Released:** August 27, 2025

[New Feature] Xoá Conversation & Contact
Vấn đề
App chưa hỗ trợ xoá conversation/contact, gây ra:
• Nhiều conversation test, spam khó quản lý
• Không đáp ứng yêu cầu xóa dữ liệu theo GDPR
 Mục đích
• Đảm bảo tuân thủ quy định bảo mật dữ liệu
• Quản lý conversation tại inbox tốt hơn và không ảnh hưởng đến số liệu trên report 
Mô tả
1. Xoá conversation từ Inbox
• Mở conversation → chọn Delete https://prnt.sc/b38kfIzZ93zu
• Sau khi xoá:
    ◦ Với Anonymous/Lead → xoá luôn contact
    ◦ Với Customer...

**Task:** Xoá conversation, contact (https://www.notion.so/Xo-conversation-contact-20db0da449f1805aaf12ed26f9a012a4?pvs=21)


### 22. [Improvement] Thêm format tin nhắn tại các kênh Messenger, Instagram

**Released:** August 27, 2025

Mục đích
• Tăng trải nghiệm người dùng trên các kênh social 
Mô tả 
Mở rộng menu chat khi xử lý conversation từ Messenger và Instagram, hỗ trợ thêm các loại tin nhắn: File, Image, FAQs, Quick replies https://prnt.sc/h1aZGhgWd-XZ

**Task:** [Messenger, Instagram] Thêm insert image, file, FAQs, quick replies (https://www.notion.so/Messenger-Instagram-Th-m-insert-image-file-FAQs-quick-replies-1eeb0da449f1804ebc9ec510cdec028e?pvs=21)


### 23. [New Feature] Quick button chuyển trạng thái Online/Offline

**Released:** August 20, 2025

[New Feature] Quick button chuyển trạng thái Online/Offline
Vấn đề
• Trạng thái online hiện chỉ hiển thị theo working hours và khi có ít nhất 1 agent mở Inbox
• Agent ko thể tự thay đổi thủ công trạng thái online/offline trong app → khó thông báo chính xác trạng thái online cho KH 
Mục đích
Cho phép agent chủ động bật/tắt trạng thái online bất kỳ lúc nào, đảm bảo KH luôn thấy đúng tình trạng hỗ trợ 
Mô tả tính năng
Thêm Quick button chuyển trạng thái online trên web app
• Thêm cài đặt cho phép a...

**Task:** Quick button to change online status (https://www.notion.so/Quick-button-to-change-online-status-c649d338e37c4babb4577a814da997d1?pvs=21)


### 24. Show chatbox in Checkout & Thank you page

**Released:** July 8, 2025

Mục đích
Hỗ trợ khách hàng tương tác ngay trong quá trình thanh toán và sau khi mua hàng, giúp tăng conversion và cải thiện trải nghiệm sau mua

Mô tả tính năng 
• Hiển thị chatbox trên cả 2 trang: Checkout page, Thank you page
• Chỉ áp dụng cho store dùng Shopify Plus
• Giới hạn dimension và alignment theo Shopify quy định:
    • Dimension: mặc định theo kích thước sau, ko apply theo cài đặt trên app https://prnt.sc/cd9V1HAAvkVn
    • Alignment: luôn cố định bên phải màn hình
• Chat được reset ...

**Task:** Chat in Checkout page (https://www.notion.so/Chat-in-Checkout-page-202b0da449f1802dbe33d72ed344fff4?pvs=21)


### 25. WhatsApp Channel

**Released:** June 5, 2025

Mục đích: Giúp merchant dễ dàng kết nối với khách hàng qua WhatsApp và quản lý toàn bộ hội thoại tập trung trong Inbox
Mô tả:
Cách kết nối:
1. Truy cập Settings → Channels → WhatsApp https://prnt.sc/FtjvpBW3s-fR
2. Nhấn Connect → Đăng nhập Facebook → Chọn tài khoản WhatsApp để kết nối https://prnt.sc/fLP_WTDUaYSC
3. Sau khi kết nối, hiển thị danh sách tài khoản WhatsApp đã liên kết https://prnt.sc/urjR_cvmIbOw
Tại inbox:
- Tin nhắn từ WhatsApp hiển thị trực tiếp tại Inbox https://prnt.sc/lH9a8jw...

**Task:** Whatsapp business integration (https://www.notion.so/Whatsapp-business-integration-0e6b557b65ca4f84be0cc4db49289fb1?pvs=21) 
Create WhatsApp template (https://www.notion.so/Create-WhatsApp-template-1f2b0da449f18002b051e56760f0416d?pvs=21)


### 26. [New feature] Manual summarize chat

**Released:** May 26, 2025

Mục đích: giúp merchant tóm tắt đoạn hội thoại khi chuyển giao cho thành viên khác hoặc đóng conversation 
Vị trí: Inbox → Menu chat https://prnt.sc/QOfiwITxVmYo
Mô tả
Để summarize đoạn hội thoại, click icon “Summarize 
Tự động tóm tắt nội dung chính của toàn bộ đoạn chat và lưu dưới dạng draft internal note, cho phép chỉnh sửa trước khi gửi

**Task:** [Inbox] Manual summarize conversations   (https://www.notion.so/Inbox-Manual-summarize-conversations-1b9b0da449f1807199c8fe69188180ac?pvs=21)


### 27. [New feature] Conversation analytics

**Released:** May 23, 2025

Vị trí: Analytics → Conversation
Mô tả: 
 • All vs Resolved conversations: thể hiện xu hướng của tổng conversation nhận được và resolved conversation → cho thấy hiệu suất xử lý conversation 
 • First response time overtime: thể hiện xu hướng tăng giảm của thời gian phản hồi tin nhắn đầu tiên từ khách hàng → cho thấy hiệu suất trả lời của agent

**Task:** [Analytics] 1.1 Conversations (https://www.notion.so/Analytics-1-1-Conversations-a0ba9666a789498eab0c5ed3d71accd0?pvs=21)


### 28. Thêm analytics về revenue trên dashboard

**Released:** April 19, 2025

Thêm số liệu về sales trên dashboard:
• Assisted revenue: tổng giá trị đơn hàng được tạo ra từ conversation với Chatty
• Chat-to-sales rate: tỷ lệ phần trăm conversation tạo ra sales

**Task:** [Dashboard - Sales] Update analytics (https://www.notion.so/Dashboard-Sales-Update-analytics-1a1b0da449f18094a799daf4d9462681?pvs=21)


### 29. Manage contacts

**Released:** October 3, 2024

Thêm trang quản lý khách hàng từ inbox

**Task:** Manage contacts(simple) (https://www.notion.so/Manage-contacts-simple-8d6b9f44cdce4161988f3ffa4cb3f9ce?pvs=21)


### 30. Keep last chat screen & activity

**Released:** August 12, 2024

Giữ nguyên trang inbox widget đang mở khi chuyển page thay vì phải mở lại trang và điều hướng tới menu vừa xem


### 31. Improve insert FAQs

**Released:** August 7, 2024

• Thêm insert ảnh FAQs:
• Admin có thể upload ảnh lên FAQs, giới hạn số lượng ảnh là 10 ảnh (ảnh) https://prnt.sc/jzIcH-6MX6a6
• Khi gửi tin nhắn tại inbox: Cho phép admin Insert FAQs trên chat bao gồm cả ảnh https://prnt.sc/BoYLEydegtVo
• Thêm responsive mobile khi insert FAQs https://prnt.sc/BRbre4-f_lxU
• Sửa lỗi modal vẫn hiện khi chọn ảnh sau đó select tool khác trên mobile


### 32. Migrate customer data

**Released:** August 6, 2024

Migrate customer data: Giúp merchant quản lý thông tin của 1 customer liền mạch khi customer đó có nhiều đoạn hội thoại
• Khi merchant update profile ở 1 conversation, các conver liên quan cũng sẽ được update


### 33. Public live chat features for all customer, no more Beta version

**Released:** August 6, 2024

• Tại Onboarding, cho phép enable Livechat, Bỏ các badge ‘Beta’ thay bằng ‘New’ https://take.ms/gIW3D
• Hiển thị step Activate live chat tại Setup guide với tất cả users (ẩn step Enable notifications for new messages, Install mobile app) https://take.ms/77nxs
• Khi activate live chat thành công:
• Hiện menu Inbox, Settings notification https://take.ms/lWjWN
• Hiện setup guide của enable notification, install mobile app https://take.ms/TSG2h
• Tại inbox -> Survey form: Update label https://take.m...


### 34. Xoá image, file ở chat inbox và Shopify files

**Released:** August 5, 2024

• Admin có thể xoá ảnh & files đã gửi https://take.ms/wjepr
• Ảnh và files khi xoá đồng thời được xoá tại Shopify files


### 35. Remove, edit message

**Released:** August 5, 2024

• Admin có thể remove hoặc sửa tin nhắn đã gửi tới khách hàng https://take.ms/pQ0xi
• Edit: Tin nhắn sau khi chỉnh sửa sẽ có định dạng <Message> (edited) (chỉ hiển thị ở backend) Chỉ cho phép chỉnh sửa tin nhắn trong 24h https://take.ms/5vZ1I
• Remove: Hiển thị modal xác nhận được khi xóa, click Remove để xóa, Cancel để hủy lệnh xóa Sau khi xóa, hiển thị lịch sử xóa tin nhắn tại trang Inbox https://take.ms/2Rk7J


### 36. Star, filter starred

**Released:** July 29, 2024

Giúp admin đánh dấu conversation quan trọng
• Thêm nút Star cạnh Resolve button https://prnt.sc/1Gr1fhFpDVyC
• Khi đánh dấu Star, thêm note activity https://prnt.sc/SOuOJLW4IX1G
• Thêm filter các conversation đã đánh Star https://prnt.sc/GPTQ8nIfiKN9
Dùng cache API lưu lại FAQs & Shortcut ở trang inbox:
• Lưu lại data của FAQs và Shortcut, tránh tốn resource đọc mỗi khi load ra


### 37. Improvement: Cập nhật banner refresh order

**Released:** July 25, 2024

Với trường hợp Guest/Customer có nhiều conversationKhi có order mới, click Refresh ở banner refresh order đồng thời sẽ update order của các conversation của guest/customer đó


### 38. Resolved/unresolved conversation:

**Released:** July 18, 2024

Đánh dấu đoạn hội thoại đã được hoàn thành
• Ở inbox, thêm nút Resolve https://i.imgur.com/zBvOT5Q.png
• Đổi filter mặc định là open https://i.imgur.com/ObrW7cJ.png
• Khi resolved, thêm admin activities log. Đoạn hội thoại được resolve sẽ chuyển vào filter Resolved https://i.imgur.com/eufbw5e.png
• Khi khách hoặc admin nhắn tiếp trong conver, đoạn hội thoại sẽ trở về Open https://i.imgur.com/0k7CWb6.png


### 39. Block customer & Filter blocked

**Released:** July 9, 2024

Giúp merchant block những conver xấu (như cách bạn hay block nyc vậy :oke:)
• Thêm filter Block ở Inbox https://i.imgur.com/cVZ1NUG.png
• Khi ấn block https://i.imgur.com/MQPEJFV.png, hiên modal confirm https://i.imgur.com/RxkCgDQ.png
• Merchant có thể Unblock user sau khi filter Blocked list https://i.imgur.com/dafOAZZ.png
• Các tin nhắn sau khi block sẽ bị chặn hoàn toàn, khách hàng vẫn sẽ nhắn được nhưng merchant không nhận được tin nhắn nữa

**Task:** Block customer | Filter blocked (https://www.notion.so/Block-customer-Filter-blocked-4b24740572bc44f7af2c6f08162f0f30?pvs=21)


### 40. Mobile PWA

**Released:** July 8, 2024

• Show app icon ở Home screen https://i.imgur.com/S5FJC9P.png
• Hỗ trợ Push notification trên cách device sử dụng IOS & Android https://i.imgur.com/rrJ646I.png
• PWA cắt gọn function so với desktop, chỉ cho phép chat và settings https://i.imgur.com/D93cRuK.png
• Bổ sung hướng dẫn cài Progressive web app, khách hàng có thể quét QR hoặc truy cập link và làm theo guide
• Với khách chưa có conversation: Guide cho IOS https://i.imgur.com/bZilNp2.png, Guide cho Android https://i.imgur.com/3S76Y2b.png
...

**Task:** Push notification trên iOS: Chrome, Safari (https://www.notion.so/Push-notification-tr-n-iOS-Chrome-Safari-56e8f5f3ca994d598c526230295227bc?pvs=21)


### 41. Thêm count unread conversation in menu

**Released:** June 27, 2024

Count unread conversation in menu:
Giúp merchant preview số tin nhắn chờ ở inbox
• Khi không có unread conver, không hiện count
• Khi >100 unread conversation, hiện 99+
Giảm size scripttag: giúp tối ưu performance của widget, tránh ảnh hưởng tới speed của store


### 42. Thêm số unread conversation trên menu

**Released:** June 27, 2024


### 43. Thêm unread status và filter unread

**Released:** June 25, 2024

Với những tin nhắn chưa đọc, hiện chữ đậm hơn và chấm xanh bên cạnh
Thêm filter 'Unread'. Giúp khách filter những conversation chưa đọc để reply

**Task:** Thêm unread | filter read/unread (https://www.notion.so/Th-m-unread-filter-read-unread-e73e0ac631db491c8a9db5dd232f98a3?pvs=21)


### 44. Cải thiện giao diện front end chatbox

**Released:** June 10, 2024

1. Cải thiện giao diện inbox và chatbox đẹp và chuyên nghiệp hơn:
+ Cập nhật về màu chữ, font chữ, spacing
+ Transition khi đóng mở, chuyển trang trên chatbox 
2. Chỉnh sửa giao điện setting trên app theo tiêu chuẩn design

**Task:** Cải thiện front end chatbox (https://www.notion.so/C-i-thi-n-front-end-chatbox-96f2186b267846aab5dadc4c35b706f6?pvs=21)


### 45. Sent, Unread status

**Released:** June 10, 2024

Cho phép xem trạng thái tin nhắn của merchant trên inbox để biết khách hàng đã đọc chưa, bao gồm:
+ Chưa đọc: Sending 
+ Chưa đọc: Sent 
+ Đã đọc: Seen

**Task:** Hiện sent, read status (https://www.notion.so/Hi-n-sent-read-status-314a0b2ade5444ad893418a27a1643c7?pvs=21)


### 46. Chat analytics

**Released:** June 5, 2024

Thêm các số liệu về livechat cho khách hàng, gồm: 
+ All conversation
+ New conversation
+ Average first response time - p75) 

Hình ảnh: https://prnt.sc/tWHvNye14UHF

**Task:** [Dashboard] Chat analytics (https://www.notion.so/Dashboard-Chat-analytics-8d81e84a1f854777b88e01e42dc24cea?pvs=21)


### 47. Live chat & translation

**Released:** April 23, 2024

- Tính năng Livechat - bản beta
- Khách hàng có thể


### 48. Bổ sung translation cho widget và FAQ page

**Released:** January 30, 2024

Bổ sung các trường dịch các thông tin còn thiếu:
• Trạng thái Online / Offline trên widget
• Tên tab “All” trên FAQ page
• Message khi không có kết quả search

**Task:** https://trello.com/c/LzvEuYjc


---

## Widget / Chatbox

**Total:** 24 features

### 1. Improve proactive chat design settings

**Released:** January 8, 2026

[Improvement] Cập nhật design proactive chat 
• Mô tả:
    ◦ Cập nhật ảnh preview của proactive chat trong list view.
    ◦ Bổ sung cài đặt Button Label Color để tùy chỉnh màu chữ trên button https://capture.avada.io/i/vtISXfUzdQZt
    ◦ Cập nhật màu button cho các preset nhằm đảm bảo hiển thị nhất quán và dễ nhìn hơn

**Task:** Improve proactive chat design settings  (https://www.notion.so/Improve-proactive-chat-design-settings-2bdb0da449f18092bb68e1bd31743b96?pvs=21)


### 2. Update quy tắc hiển thị preview product đang xem

**Released:** December 24, 2025

[Improvement] Cập nhật logic hiển thị Product Preview trong Chatbox
• Vấn đề: Khi khách click proactive chat gợi ý sản phẩm khác với sản phẩm đang xem, chatbox vẫn hiển thị preview sản phẩm cũ, gây nhầm lẫn và ảnh hưởng trải nghiệm hỏi–đáp
• Mục đích: Đảm bảo product preview trong chatbox luôn phản ánh đúng sản phẩm mà khách đang hỏi, giúp hội thoại chính xác và liền mạch hơn.
• Mô tả:
    ◦ Cập nhật quy tắc hiển thị product preview theo ngữ cảnh người dùng:
        1. Auto preview theo product ...

**Task:** Update quy tắc hiển thị preview product đang xem (https://www.notion.so/Update-quy-t-c-hi-n-th-preview-product-ang-xem-2c3b0da449f18048823ee9f61faf859a?pvs=21)


### 3. Improve proactive chat design settings

**Released:** December 24, 2025

- Update ảnh preview 
- Thêm button label color 
- Update field Button color 
- Sửa teaser quick question của Welcome visitor đồng nhất với proactive chat khác

**Task:** Improve proactive chat design settings  (https://www.notion.so/Improve-proactive-chat-design-settings-2bdb0da449f18092bb68e1bd31743b96?pvs=21)


### 4. [Improvement] Thêm embed float chatbox button

**Released:** December 4, 2025

[Improvement] Thêm embed float chatbox button
Mục đích: thêm chatbox  vào website ngoài Shopify dạng float button (trước đó chỉ thêm dưới dạng embed chatbox) 
Vị trí: Settings | Integrations  | Website integration 
Mô tả: Thêm cài đặt sử dụng code cho floating button https://capture.avada.io/i/Vl2snyC-a

**Task:** Thêm embed float button widget (https://www.notion.so/Th-m-embed-float-button-widget-2bcb0da449f1802bbf9cc7464a50e6d2?pvs=21)


### 5. [Improvement] Cải thiện hiển thị tin nhắn trên chatbox

**Released:** October 15, 2025

[Improvement] Cải thiện hiển thị tin nhắn trên chatbox
Mục đích: tăng trải nghiệm trò chuyện mượt mà hơn khi khách hàng nhận tin nhắn mới, đặc biệt trong các cuộc hội thoại dài.
Mô tả cập nhật
• Giữ vị trí cuộn (scroll position) khi có tin nhắn mới — luôn dừng ở đầu tin nhắn mới nhất 
• Thêm nút “Click to scroll” → cho phép người dùng nhanh chóng cuộn đến tin nhắn mới nhất https://prnt.sc/wSdayUQFySiK
• Giúp hiển thị mượt và ổn định hơn với số lượng lớn tin nhắn

**Task:** Improve UI chat page to maintain scroll position (https://www.notion.so/Improve-UI-chat-page-to-maintain-scroll-position-257b0da449f180348912f9a3e5e69437?pvs=21)


### 6. [Improvement] Thêm translation cho order status

**Released:** September 4, 2025

[Improvement] Thêm translation cho order status
Mô tả: Thêm bản dịch cho section Order tracking tại chatbox: Order status, Placeholder các field trên form Order tracking

**Task:** Thêm translation cho order status (https://www.notion.so/Th-m-translation-cho-order-status-263b0da449f180119068dd110af3f713?pvs=21)


### 7. [New feature] Mặc định mở cửa sổ chat khi mở chatbox

**Released:** May 13, 2025

Mục đích: giúp khách hàng kết nối với support chỉ trong 1 bước, để tăng sự tương tác, tăng conversion rate và nâng cao trải nghiệm khách hàng
Vị trí: Chatbox → General  
Mô tả:
• Thêm cài đặt Chat focus mode, cho phép tự động mở cửa sổ chat khi mở chatbox lần đầu trên website (mặc định bật cho khách mới)

**Task:** Mặc định mở chat khi mở chatbox (https://www.notion.so/M-c-nh-m-chat-khi-m-chatbox-e45a708fb9de427eb0557b7f0ead66d6?pvs=21)


### 8. [Improvement] Cập nhật order status trên trang Order tracking

**Released:** May 12, 2025

[Improvement] Cập nhật thêm order status
Mục đích: giúp khách hàng của merchant tra cứu trạng thái order chính xác hơn
Vị trí: Chatbox | section Order tracking
Mô tả
Trước thay đổi:
Order status: chỉ hiển thị 1 số order status chính theo điều kiện (Confirmed, On it ways, Delivered, Canceled, Voided)
Item status (for mutiple shipments): chỉ hiển thị 1 số status chính (Confirmed, On it ways, Attempted delivery, Completed, Delivered)
Sau thay đổi
Order status: bổ sung thêm trạng thái và hiển thị th...

**Task:** [Chatbox] Update order tracking status (https://www.notion.so/Chatbox-Update-order-tracking-status-1c2b0da449f180a781cdfd71750c6c7e?pvs=21)


### 9. [New feature] Upload category icon

**Released:** May 6, 2025

Mục đích: cho phép merchant customize icon category hiển thị tại Chatbox, FAQs page 
Đối tượng: all users
Mô tả: 
• Cho phép upload file với các định dạng .svg, .jpg, .jpeg, .gif, .png.,
• Được phép upload nhiều file

**Task:** [FAQs] Thêm upload category icon (https://www.notion.so/FAQs-Th-m-upload-category-icon-1dab0da449f1805ab973e2c803dfda0b?pvs=21)


### 10. Cải thiện chatbox để đảm bảo accessibility

**Released:** May 5, 2025

Cải thiện chatbox để đảm bảo accessibility
• Ưu tiên đọc chatbox button khi sử dụng screen reader giúp người dùng dễ dàng tương tác với chatbox hơn
• Thêm accessibility label cho các element trên chatbox, hỗ trợ đọc các thông tin trên chatbox

**Task:** [Accessibility] Hỗ trợ cho người khiếm khuyết về mắt (https://www.notion.so/Accessibility-H-tr-cho-ng-i-khi-m-khuy-t-v-m-t-1d2b0da449f1805b8478e3f5e2f40eed?pvs=21)


### 11. Deeplink

**Released:** August 16, 2024

• Giúp merchant lấy quick link để hướng khách hàng mở trang và mặc định open chat theo menu (vd: Chat, Order tracking, help,…)
• Thêm setting Deeplink tại Chatbox -> Advanced https://prnt.sc/AG2y3oUpjWas


### 12. Include/Exclude pages/URL to display chatbox widget

**Released:** August 6, 2024

• Cho phép setup hiển thị Chatbox tại device (mobile/ desktop)
• Merchant có thể setup chatbox hiển thị hoặc không hiển thị theo setting


### 13. Thêm chat activity

**Released:** August 1, 2024

Thêm các sự kiện giúp merchant nắm được action của customer và đưa ra câu trả lời phù hợp gồm có:
• Place order: khách đặt hàng
• View FAQs: khách view FAQs trên chatbox
• Track order: khách track order trên chatbox


### 14. Sắp xếp giao diện app

**Released:** July 30, 2024

Bố cục app gọn gàng, rõ ràng hơn các chức năng chính, thuận tiện đẩy thêm tính năng sau này
• Move FAQs page vào menu FAQs https://prnt.sc/_YDxFVKIWqld
• Tại menu Chatbox, chia 3 tab:
• General: gồm các settings chung giúp update chat widget & blocks https://prnt.sc/l_VYsY4fPsqu
• Appearance: setting hiển thị màu sắc, style của button và style chatbox https://prnt.sc/gfFKaE2ZCQEg
• Advanced: Custom css


### 15. Update translation

**Released:** July 23, 2024

User story: tôi là merchant ở Anh nhưng tôi bán cho khách ở Đức, tôi muốn dịch ngôn ngữ mặc định của Chatbox theo tiếng ĐứcFix bugs + Update translation status: Với trường hợp ngôn ngữ Default khác với ngôn ngữ được viết ở FAQs
• Khi add/sửa FAQs, app sẽ tự động kiểm tra ngôn ngữ FAQs có giống ngôn ngữ default không
• Nếu ngôn ngữ FAQs không phải Default
• Tự động cập cập bản dịch của Default language dựa theo FAQs https://i.imgur.com/f2vMFG6.png
• Ngôn ngữ của FAQs sẽ không cập nhật gì, status ...


### 16. Inline chat button

**Released:** July 22, 2024

Merchant đã có thể add chat button nhằm thúc đẩy khách hàng contact
• Merchant cần add block vào vị trí mong muốn từ Chatbox -> Contact button (https://i.imgur.com/FmAADcD.png)
• Turn on/turn off để ẩn/hiện tất cả các block đã thêm https://i.imgur.com/QdmLZHp.png
• Ở app block, cung cấp các settings cơ bản như:
• Chọn contact method, tự động lấy theo settings của app https://i.imgur.com/60xmyhQ.png
• Button shape (round, square), Label, color, width, device https://i.imgur.com/VtmPNqN.png
• Với ...


### 17. Copy text ở admin & front end

**Released:** June 19, 2024

Copy text:
• Khách hàng có thể bôi đen text để copy
• Ở mobile, khi giữ vào textbox, hiện nút Copy

Sửa/ update nhỏ về giao diện
• Khi mở chatbox, btn của chatbox bị khuyết https://prnt.sc/E6CDxkKPOjSR
• Sửa lỗi khoảng cách tin nhắn liền nhau trên IOS
• Thêm shadow cho chatbox button, chỉnh lại logo nhỏ hơn

**Task:** Không chọn & copy được text tại admin & store front (https://www.notion.so/Kh-ng-ch-n-copy-c-text-t-i-admin-store-front-ad1c56eb5e304931bb6dee5fb52cc694?pvs=21)


### 18. Cập nhật preset mới

**Released:** June 10, 2024

1. Cập nhật preset mới và giao diện chatbox theo preset mới 
2. Cho phép customize header dạng gradient 
3. Thêm color mode: dark/light

**Task:** Theme concepts (https://www.notion.so/Theme-concepts-81fa9092a4004befafe8e5efb4586283?pvs=21)


### 19. Update app theo polaris 12

**Released:** May 14, 2024

• Đổi toggle theo polaris mới: https://prnt.sc/iZpeFBEmzoLy
• Đổi tất cả những cả những chỗ có màu branding Avada thành màu đen (#303030)
• Những chỗ text link ko để màu branding Avada, thay bằng màu #005BD3
• Lỗi khi mở trang Chatbox lần đầu bị nháy trắng trang

**Task:** Update app theo polaris mới (https://www.notion.so/Update-app-theo-polaris-m-i-703031ef716e434393f7da288b442396?pvs=21)


### 20. Disable remove branding

**Released:** March 8, 2024

• Giữ nguyên dòng branding ở footer của widget & FAQ page
• Bỏ button close ở dòng branding “Powered by Avada” trên FAQ page

**Task:** https://trello.com/c/KIjEKdIm/176-disable-remove-branding


### 21. [Widget] Bổ sung widget display style & Mobile widget ratio

**Released:** March 6, 2024

• Thêm preview desktop trên widget setting https://prnt.sc/EwabIrlZ7lfZ
• Bổ sung setting về cách hiển thị widget
• Widget display style: No navigation/Show navigation https://prnt.sc/OXltckGJUgqN
• Mobile widget ratio https://prnt.sc/0nUoIgIV2z_p
• Cập nhật giao diện mới và thêm hiệu ứng cho widget

**Task:** https://trello.com/c/N1QXP54t/148-sprint-121-update-widget-preview


### 22. [Chat] More widget button type

**Released:** February 2, 2024

thêm lựa chọn về widget button gồm các giá trị:
• Icon only
• Label only
• Icon & Label

**Task:** https://trello.com/c/RzPeAROk


### 23. [Onboarding+Dashboard] Cập nhật checklist status trên Dashboard khi hoàn thành onboarding

**Released:** January 30, 2024

Tự động cập nhật checklist status trên Dashboard khi hoàn thành step tương ứng trên onboarding:
1. User chuyển đến step 2 -> tự động tích Completed task Customize widget appearance
2. User chuyển đến step 3 -> tự động tích completed task Customize widget appearance + task Set up welcome popup

**Task:** https://trello.com/c/NeNjtWcp


### 24. [Widget] Update widget launcher

**Released:** January 29, 2024

Bổ sung cách hiển thị widget button: Icon only, Label only, Icon & label  • - • Khuyến khích chat/tìm kiếm trợ giúp
• Tăng tương tác với người dùng
https://prnt.sc/Szgki0Qwn3Sb

**Task:** https://trello.com/c/RzPeAROk/114-chat-more-widget-button-type


---

## FAQ Page

**Total:** 13 features

### 1. Improve FAQs translation (Bỏ Updated status)

**Released:** February 6, 2026

**Task:** Improve FAQs translation (Bỏ Updated status) (https://www.notion.so/Improve-FAQs-translation-B-Updated-status-2b5b0da449f18070afb0ec979661ce60?pvs=21)


### 2. Tạo default FAQs theo ngôn ngữ lựa chọn tại Onboarding

**Released:** February 4, 2026

[Improvement] Tự động tạo FAQs theo ngôn ngữ onboarding
• Vấn đề: Sau khi cài app, FAQs mặc định luôn là tiếng Anh, khiến MC phải chỉnh sửa thủ công và đổi default language (đặc biệt với Free plan chỉ hỗ trợ 1 ngôn ngữ)
• Mục đích: Giúp MC setup FAQs nhanh hơn, giảm thao tác thủ công và tiết kiệm chi phí dịch 
• Vị trí: Onboarding → FAQs, Translation settings https://capture.avada.io/i/md6VEx8BzijH
• Mô tả:
    ◦ Sử dụng ngôn ngữ MC chọn trong Onboarding để:
        ▪ Tạo danh sách FAQs mặc định...

**Task:** Tạo default FAQs theo ngôn ngữ lựa chọn tại Onboarding (https://www.notion.so/T-o-default-FAQs-theo-ng-n-ng-l-a-ch-n-t-i-Onboarding-2d5b0da449f180f5ba95cfdc3b180acc?pvs=21)


### 3. [New feature] Tạo script cho FAQs block

**Released:** December 4, 2025

[New Feature] Tạo script cho FAQs Block
• Mục đích: cho phép merchant chèn FAQs block vào bất kỳ trang nào bằng snippet code 
• Vị trí: FAQs | FAQs Block | Edit FAQs block https://capture.avada.io/i/9hIDC2faC
• Mô tả:
    ◦ Thêm mục hiển thị code của FAQs block trong phần Advanced
    ◦ Nhấn để copy đoạn code và paste vào HTML hoặc Liquid của website

**Task:** [FAQs] Tạo script cho FAQs block (https://www.notion.so/FAQs-T-o-script-cho-FAQs-block-2b6b0da449f180b683abc3c25c3a529c?pvs=21)


### 4. Index FAQs entries in Search engine

**Released:** August 25, 2025

Mục đích: thay đổi structure FAQs page JSON-LD để google đọc được và index content → tăng khả năng search và index content trên Google search

**Task:** Index FAQs entries in Search engine (https://www.notion.so/Index-FAQs-entries-in-Search-engine-1cbb0da449f180438356d82701d90f83?pvs=21)


### 5. Update translation settings

**Released:** August 15, 2024

Giúp khách hàng quản lý danh sách ngôn ngữ tốt hơn
• Cập nhật giao diện trang Edit translation: Chia thành 2 block Published languages, Unpublished languages để tìm kiếm dễ hơn https://prnt.sc/0n2c6Pbm10QX
• ‘Add language’ sẽ đẩy vào Unpublished language để khách hàng review trước khi update https://prnt.sc/_xnY0p-s0k66
• Khi Add language, các label đều tự động dịch theo bản mới nhất, status ‘Updated’ https://prnt.sc/lvoU3UZ7Jgss
• Update ‘Set As Default Language’ action: Khách có thể change def...


### 6. Export FAQs

**Released:** July 30, 2024

Thêm nút export, khách hàng có thể lựa chọn All FAQs hoặc published FAQs để export https://prnt.sc/VhWOzKhL29Av


### 7. FAQs block

**Released:** July 30, 2024

Khách có thể add block FAQs ở các trang khác nhau
• Tại FAQs -> Click FAQs block: Redirect tới hướng dẫn add block FAQs
• Khách có thể lựa chọn FAQs từ Block, section để add vào trong trang https://prnt.sc/0hD-8G2lhBdI


### 8. Insert FAQs in chat

**Released:** July 22, 2024

Cho phép merchant add các FAQs vào chat
• Khi insert, khách hàng có thể xem trước Category, Question & Answers https://i.imgur.com/0DPJcsS.png


### 9. Cho phép dịch Question & Answer tại FAQs:

**Released:** June 13, 2024

• Tại Translations -> chọn ngôn ngữ: thêm trường FAQs ở menu https://prnt.sc/LC1j3znnXeR-
• Cho phép dịch Category (https://prnt.sc/3FAKn23SE-XW) và Q&A (https://prnt.sc/s39_DhzXMNud)
• Khi khách hàng update FAQs mới:
• thông báo update translation lại trang FAQs (https://prnt.sc/WSjk6aNDbdYh)
• Ở trang translation, thêm badge 'Out dated' với những ngôn ngữ chưa update theo FAQs mới https://prnt.sc/fIh3_MsSJGo9
• Với những ngôn ngữ chưa được publish, khi publish lên cũng yêu cầu update FAQs trướ...

**Task:** Translate Q&A hiển thị trên widget & FAQ page (https://www.notion.so/Translate-Q-A-hi-n-th-tr-n-widget-FAQ-page-af86e033e7b342929489b5b703d5a22b?pvs=21)


### 10. Move FAQs sang partner Chatty

**Released:** March 31, 2024

Chuyển sang partner Chatty
Update lại app listing content


### 11. [FAQ page] Update category display

**Released:** February 25, 2024

• Hiển thị category theo dạng tab -> dễ dàng đọc và tìm kiếm FAQ theo chủ đề https://prnt.sc/sos_prTD0lmY
• Bổ sung preview mobile https://prnt.sc/1NRLjL9W2nzy

**Task:** https://trello.com/c/CSEcuvGv


### 12. [FAQ page] Update category display

**Released:** January 25, 2024

• Hiển thị category theo dạng tab -> dễ dàng đọc và tìm kiếm FAQ theo chủ đề https://prnt.sc/sos_prTD0lmY
• Bổ sung preview mobile https://prnt.sc/1NRLjL9W2nzy

**Task:** https://trello.com/c/CSEcuvGv/95-sprint-15-c%E1%BA%A3i-thi%E1%BB%87n-faq-pagecategory-d%E1%BA%A1ng-accordion


### 13. Update in-app app name

**Released:** December 4, 2023

Change name: Avada WhatsApp Chat, FAQ Page → Avada Helpdesk & FAQ


---

## Analytics / Dashboard

**Total:** 4 features

### 1. [Improvement] Điều chỉnh hiển thị App Embed Settings

**Released:** September 23, 2025

[Improvement] Điều chỉnh hiển thị App Embed Settings
Vấn đề: mô tả và vị trí hiển thị App embed settings chưa rõ ràng, dễ gây nhầm lẫn cho người dùng
Mục đích: Làm rõ trạng thái và vị trí hiển thị của App embed để merchant dễ theo dõi và quản lý
Mô tả cập nhật
• Khi Status = OFF → hiển thị ở cả Dashboard và Settings https://prnt.sc/gMq0qQRBCbVM
• Khi Status = ON → hiển thị tại Settings | General https://prnt.sc/HY_BPGSuoqoV

**Task:** Thêm điều kiện hiển thị App embed settings (https://www.notion.so/Th-m-i-u-ki-n-hi-n-th-App-embed-settings-26fb0da449f18058a979d2f6d10e4f56?pvs=21)


### 2. [New feature] Satisfaction survey analytics

**Released:** August 13, 2025

[New Feature] CSAT Analytics 
Mục đích: cung cấp báo cáo CSAT trực quan giúp merchant theo dõi và cải thiện support
Mô tả tính năng: 
Hiển thị các chỉ số CSAT:
• CSAT rate: Tỷ lệ hài lòng của khách hàng
• Response rate: Tỷ lệ khách phản hồi survey
• Ratings: Điểm trung bình (theo thang 1–5) kèm biểu đồ phân bổ rating

**Task:** Satisfaction survey analytics  (https://www.notion.so/Satisfaction-survey-analytics-1dab0da449f180a7ad4ad0344216d4a2?pvs=21)


### 3. [Improvement] Cải thiện layout Overview analytics

**Released:** May 20, 2025

• Mục đích: tối ưu hiển thị chỉ số quan trọng ở Dashboard 
• Mô tả: 
    ◦ Tại màn Dashboard: move chỉ số phụ sang màn Analytics_Overview https://prnt.sc/NNTqeFpXFIoD
    ◦ Thêm link redirect to View full analytics https://prnt.sc/RxPK6zTs1kvU

**Task:** Move chỉ số phụ ở Dasbhoard sang Analytics (https://www.notion.so/Move-ch-s-ph-Dasbhoard-sang-Analytics-1edb0da449f180b988d1f564f1e55327?pvs=21)


### 4. Overview analytics

**Released:** April 19, 2025

Mục đích: giúp merchant xem report tổng quan về các chỉ số của app tại trang Analytics

**Task:** [Analytics] Thêm tab Overview  (https://www.notion.so/Analytics-Th-m-tab-Overview-1a6b0da449f180feb8a9f177b1e98a42?pvs=21)


---

## Integrations

**Total:** 7 features

### 1. [New Feature] Gợi ý Complementary Products trong Proactive Chat

**Released:** January 28, 2026

[New Feature] Gợi ý complementary products trong proactive chat
• Mục đích: giúp MC gợi ý sản phẩm bổ trợ để tăng giá trị đơn hàng
• Vị trí: Proactive chat → Product recommendation
• Mô tả:
    ◦ Bổ sung tuỳ chọn Recommend complementary product cho proactive chat dạng gợi ý sản phẩm
    ◦ Khi trigger proactive chat, gợi ý ngẫu nhiên trong danh sách complementary products cho sp đang xem, lấy từ Shopify API
    ◦ Tự động loại trừ các sp: hết hàng, giá = 0, gift card và sản phẩm đã có trong giỏ hà...

**Task:** [Product recommendation teaser] Thêm gợi ý sản phẩm complementary (https://www.notion.so/Product-recommendation-teaser-Th-m-g-i-s-n-ph-m-complementary-2cbb0da449f18065a5f5f92b1b9adb73?pvs=21)


### 2. Upload image to CDN

**Released:** November 11, 2025

[New Feature] Upload ảnh & file qua CDN riêng
Mục đích: Giúp merchant lưu trữ ảnh và file khách gửi qua chat an toàn, nhanh và độc lập, không phụ thuộc vào hệ thống lưu trữ của Shopify
Mô tả tính năng
• Hệ thống sử dụng CDN riêng để lưu trữ file (thêm mô tả ở bảng so sánh subscription https://prnt.sc/Gvwzc_FLn8we)
• Khi khách gửi ảnh hoặc file qua chat, dữ liệu sẽ được upload tự động lên CDN, không lưu ở Shopify 
• File được tự động xoá sau vài ngày khi shop uninstall, nhằm đảm bảo bảo mật dữ li...

**Task:** Upload images files to own CDN for premium shops (https://www.notion.so/Upload-images-files-to-own-CDN-for-premium-shops-24eb0da449f180dc9f13d39591d0a20f?pvs=21)


### 3. [Improvement] Tăng bảo mật khi download app

**Released:** April 23, 2025

Vấn đề: Khi sử dụng mã QR / link web app để cài app, user tự động vào tài khoản đang đăng nhập trên Shopify mà không phải log in lại
Sau cập nhật: Khi mở web app, kiểm tra trình duyệt đã lưu thông tin đăng nhập chưa:
+ Có: mở web app, tự động log in 
+ Không: mở trang Log in, có yêu cầu OTP nếu khác device

**Task:** [Download app] Yêu cầu login khi mở web app (https://www.notion.so/Download-app-Y-u-c-u-login-khi-m-web-app-1b9b0da449f1807fa33fc206e4625eb3?pvs=21)


### 4. Support pasting & sending images

**Released:** August 16, 2024

Giúp merchant & customer gửi ảnh bằng cách Copy + Paste. Ảnh vẫn được upload vào File của Shopify https://prnt.sc/oXXqLIf4nEdM

Admin:
• Có thể upload nhiều ảnh (như trước)
• Update modal khi quá 20MB hoặc không đúng format https://prnt.sc/-Cip7HAdxEAC
• Update loading khi tải ảnh lên https://prnt.sc/3yaaJl60T4UM
Customer:
• Chỉ cho phép upload 1 ảnh tại ô chat
• Khi gửi ảnh kèm text, gửi text trước ảnh sau
• Thêm toast thông báo khi quá 20MB hoặc không đúng format https://prnt.sc/JHNLWdDjV-9R
•...


### 5. Sửa lỗi update customer profile

**Released:** July 24, 2024

• Bỏ thông báo lỗi khi đóng modal
• Sửa lỗi update location https://go.screenpal.com/watch/cZibiRVP6Ar
• Sửa lỗi Nhập/Edit Phone number > mở modal > Phone number bị bỏ trống > mở lần 2 mới hiện lại https://somup.com/cZib6mEWtR
• Khi convert guest thành customer, cập nhật Customer for theo thời gian tạo customer trên profile của Shopify


### 6. Upload image & file

**Released:** July 18, 2024

Admin có thể upload ảnh & file để gửi cho người dùng https://i.imgur.com/oYmqDvR.png
• Giới hạn cho mỗi tệp hoặc ảnh là 20MB
• Với ảnh, hỗ trợ JPG, JPEG, PNG, GIF
• Khách hàng có thể gửi nhiều ảnh và files (giới hạn 10 items 1 lần gửi)https://i.imgur.com/bh6oBx0.png
• Ảnh và file upload sẽ đồng thời được upload tại Files của Shopify https://i.imgur.com/B006L6d.pngApp sẽ xin quyền Edit Shopify Admin -> File để hỗ trợ function upload media và file nhé


### 7. Insert discount

**Released:** July 11, 2024

• Khách hàng khi nhận discount có thể sử dụng discount theo setting của shopify và checkout
• Tính năng cho phép add static discount - chưa hỗ trợ dynamic discount
• Thêm preview discount ở chat

**Task:** Insert discount - Static (https://www.notion.so/Insert-discount-Static-e3d82b2f675b4bf2bd70df52b9e37d6f?pvs=21)


---

## Notifications

**Total:** 2 features

### 1. Play sound notification ở admin và storefront

**Released:** July 8, 2024

Play sound notification ở admin và storefront:
• Khác với push notification, Merchant và customer của merchant đều sẽ mặc định nhận được âm thanh thông báo khi có tin nhắn mới
• Với Admin:
• Thêm settings 'Play sound notification' https://i.imgur.com/tIpB9FM.png
• Mặc định sẽ enable play sound và thông báo khi có tin nhắn mới
• Nháy thông báo ở tab khi nhận tin nhắn mới mà chưa đọc (ẢNH)
• Với Merchant:
• Hiển thị tin nhắn mới  https://i.imgur.com/BpSMQhj.png
• Hiển thị số tin nhắn chưa đọc ở ic...

**Task:** Play sound to customer & admin (https://www.notion.so/Play-sound-to-customer-admin-eaa0488d1771438eb2d1e1e71998e22f?pvs=21)


### 2. Web Push notification

**Released:** June 5, 2024

Cho phép merchant nhận thông báo khi có tin nhắn từ customer

**Task:** Push web notification (https://www.notion.so/Push-web-notification-b7724214378f4fa2bf7c6709fa193870?pvs=21)


---

## Translations

**Total:** 3 features

### 1. Translation in app

**Released:** December 9, 2025

[New Feature] Cài đặt ngôn ngữ hiển thị trên app
• Mục đích: giúp merchant xem và sử dụng app bằng ngôn ngữ quen thuộc, từ đó thao tác cài đặt và quản lý dễ dàng hơn
• Vị trí: Settings → App Language
• Mô tả:
    ◦ Bổ sung tùy chọn chọn ngôn ngữ hiển thị cho toàn bộ giao diện app
    ◦ Hỗ trợ 10 ngôn ngữ phổ biến: Chinese, Dutch, English, French, German, Italian, Japanese, Turkish, Vietnamese, Spanish
    ◦ Sau khi lựa chọn, hệ thống tự động cập nhật tất cả label và mô tả trên app sang ngôn ngữ ...

**Task:** Translation in app  (https://www.notion.so/Translation-in-app-07efa4a7ac96409197d2c110217cc470?pvs=21)


### 2. [Improvement] Cải thiện giao diện quản lý Translation

**Released:** August 27, 2025

[Improvement] Cải thiện giao diện quản lý Translation
Vấn đề: có quá nhiều field dịch → khó quản lý và chỉnh sửa bản dịch
Mục đích: Giúp merchant quản lý, tìm kiếm và chỉnh sửa bản dịch dễ dàng hơn
Mô tả 
• Cập nhật layout dạng bảng: hiển thị song song giá trị default + translation
• Chia lại section tại list để dễ quản lý hơn

**Task:** Sửa lại trang Translation (https://www.notion.so/S-a-l-i-trang-Translation-1ecb0da449f18008aafaf004436c19e9?pvs=21)


### 3. [Translation] Bổ sung dịch label, ngôn ngữ phổ biến

**Released:** March 8, 2024

• Bổ sung translation trường hợp chọn Show navigation
• Thêm translate cho các ngôn ngữ: German, Dutch, Italian, Turkish

**Task:** https://trello.com/c/ghuKcUfW/159-th%C3%AAm-ng%C3%B4n-ng%E1%BB%AF-translate-cho-c%C3%A1c-label-c%C3%B2n-thi%E1%BA%BFu-ch%C6%B0a-%C4%91%E1%BB%A7-faqs


---

## Settings

**Total:** 4 features

### 1. Thêm preview scenario “Transfer to human”

**Released:** November 10, 2025

Thêm preview cho scenario “Transfer to human”, hiển thị luồng tương ứng trên preview theo setting, không cho phép thao tác trên preview

**Task:** Preview scenario Transfer to human (https://www.notion.so/Preview-scenario-Transfer-to-human-29ab0da449f180d8a1b4cb0309d28d67?pvs=21)


### 2. Quick replies

**Released:** July 18, 2024

Cho phép admin quản lý các shortcut để trả lời câu hỏi nhanh chóng
• Thêm Settings -> Quick replies https://i.imgur.com/CnCF4JZ.png
• Bảng quản lý Quick replies https://i.imgur.com/HjQir4s.png
• Thêm/sửa quick replies https://i.imgur.com/kNgiX6x.png
• Admin có thể add quick reply từ chat function hoặc từ phím tắt '/' https://i.imgur.com/TjX63C2.png


### 3. Thêm setting name & avatar

**Released:** June 10, 2024

Thêm menu Settings:
• Cho phép cài đặt tên và avatar hiển thị trên cửa sổ chat 
• Default tên và avatar của store, cho phép chọn từ icon có sẵn và upload ảnh

**Task:** Thêm settings store name & avatar (https://www.notion.so/Th-m-settings-store-name-avatar-bccb239b0b2740e39f04f0e147ba1ee6?pvs=21)


### 4. Ẩn contact method WeChat

**Released:** May 6, 2024

- Tạm ẩn contact method We chat tại trang setting Chat box: https://prnt.sc/u3c6n3SavukY

**Task:** [Chatbox] Ẩn contact method We chat (https://www.notion.so/Chatbox-n-contact-method-We-chat-8114eaeed778449496c27ca82c7c4f94?pvs=21)


---

## Onboarding

**Total:** 1 features

### 1. Update BFS mandatory @January 8, 2024

**Released:** January 8, 2024

Cải thiện onboarding steps
Update tiêu chuẩn hiển thị theo BFS

**Task:** https://trello.com/c/MK1xGGq2
https://trello.com/c/j4BzOHqK
https://trello.com/c/rty4kyow


---

## Design / UI/UX

**Total:** 5 features

### 1. Improve UI scenario size guide

**Released:** January 23, 2026

Update layout, UI, fix bug Agent instruction | Size guide

**Task:** Improve UI scenario size guide  (https://www.notion.so/Improve-UI-scenario-size-guide-2b6b0da449f180349c63d3fe23529d69?pvs=21)


### 2. Update font & style trên admin

**Released:** August 12, 2024

Update font, skeleton load, avatar,… giúp trải nghiệm về UX/UI tốt hơn


### 3. Sửa logo Chatty in app & top save bar

**Released:** June 27, 2024

Thay logo Avada bằng logo Chatty trên app để tăng trải nghiệm người dùng và đẩy mạnh branding
1. Top save bar: https://prnt.sc/4Vet9HuJvFNQ → Đổi top save bar theo polaris (chuyển lên trên, bỏ logo)
2. Loading screen: https://prnt.sc/uIwlYLfqiZFV
3. Trang standalone (cả desktop & mobile app): https://prnt.sc/nu55SvNtrLOR, https://prnt.sc/oTYl6lph_RG-

**Task:** Đổi Chatty logo in app  (https://www.notion.so/i-Chatty-logo-in-app-ce03b1eb8b4d45309ae72dc2a3d54c04?pvs=21)


### 4. Sửa logo Chatty khi reload, đổi top save bar lên trên header

**Released:** June 27, 2024

Thay logo Avada bằng logo Chatty trên app để tăng trải nghiệm người dùng, đẩy mạnh branding 
1. Top save bar: https://prnt.sc/4Vet9HuJvFNQ → Đổi top save bar theo polaris (chuyển lên trên, bỏ logo)
2. Loading screen: https://prnt.sc/uIwlYLfqiZFV
3. Trang standalone (cả desktop & mobile app): https://prnt.sc/nu55SvNtrLOR, https://prnt.sc/oTYl6lph_RG-

**Task:** Đổi Chatty logo in app  (https://www.notion.so/i-Chatty-logo-in-app-ce03b1eb8b4d45309ae72dc2a3d54c04?pvs=21)


### 5. Cập nhật user guide trên Avada Helpdesk center

**Released:** February 23, 2024

Cập nhật lại user guide theo danh sách https://www.notion.so/e152de4967a143838a6575ac520c489f?pvs=21

**Task:** https://trello.com/c/Jv9svFm1


---

## Other

**Total:** 25 features

### 1. New pricing 2026

**Released:** January 12, 2026

**Task:** Update pricing tháng 11 (https://www.notion.so/Update-pricing-th-ng-11-299b0da449f180beb4ecdf283cfaeb75?pvs=21) 
[Pricing] Update AI usage từ số reply sang số conversation (https://www.notion.so/Pricing-Update-AI-usage-t-s-reply-sang-s-conversation-2b0b0da449f180198498c2563a6deb20?pvs=21)


### 2. Thêm default proactive chat cho store mới

**Released:** January 8, 2026

[Improvement] Cập nhật Proactive Chat mặc định
• Mô tả:
    1. Tự động tạo proactive chat mặc định khi cài app, bao gồm:
        ▪ Cart Booster
        ▪ Abandoned Cart Reminder
        ▪ Collection Boost
    2. Cart Booster:
        ▪ Bỏ validate bắt buộc Minimum Cart Value > 0, giúp merchant linh hoạt hơn khi cấu hình.
    3. Abandoned Cart Reminder:
        ▪ Bổ sung field Maximum Cart Value để kiểm soát điều kiện hiển thị chính xác hơn.

**Task:** Thêm default proactive chat cho store mới (https://www.notion.so/Th-m-default-proactive-chat-cho-store-m-i-2bfb0da449f1804a97d3c8ff678d47cd?pvs=21)


### 3. Cập nhật rule hiển thị lại proactive chat

**Released:** December 24, 2025

[Improvement] Cập nhật tần suất hiển thị Proactive Chat
• Vấn đề: Proactive chat hiện chỉ hiển thị một lần; khi khách nhấn Close, teaser sẽ không xuất hiện lại
• Mục đích: Cho phép proactive chat hiển thị lại linh hoạt hơn dựa trên hành vi người dùng, giúp tăng tương tác và tỷ lệ convert
• Mô tả:
    ◦ Welcome / Subscribe Newsletter: hiển thị 1 lần mỗi session 
    ◦ Product Recommendation / Collection Boost
        ▪ Cập nhật tần suất hiển thị 1 lần cho mỗi product hoặc collection
        ▪ Khi...

**Task:** Update tần suất hiển thị proactive chat (https://www.notion.so/Update-t-n-su-t-hi-n-th-proactive-chat-288b0da449f180c58a0ff81f6bf6b350?pvs=21)


### 4. [Improvement] Thêm điều kiện Maximum Cart Value cho Cart Booster

**Released:** December 2, 2025

[Improvement] Thêm điều kiện Maximum Cart Value cho Cart Booster
Vấn đề: Proactive chat “Cart Booster” chỉ hỗ trợ cài đặt minimum cart value → merchant ko thể giới hạn hiển thị proactive chat khi giá trị cart vượt quá một mức nhất định
Mục đích: Cho phép merchant kiểm soát tốt hơn khi nào proactive chat Cart Booster được kích hoạt, tránh hiển thị khi cart đã vượt mức mong muốn
Vị trí: Proactive Chat → Cart Booster → Conditions 
Mô tả:
• Bổ sung điều kiện mới: Maximum Cart Value https://go.screen...

**Task:** Thêm điều kiện maximum cart value cho Cart Booster (https://www.notion.so/Th-m-i-u-ki-n-maximum-cart-value-cho-Cart-Booster-2b2b0da449f1809ab2bbe880d9eade9c?pvs=21)


### 5. Thêm điều kiện hiển thị proactive chat

**Released:** October 29, 2025

[New Feature] Hiển thị Proactive chat theo quốc gia
• Mục đích: giúp tùy chỉnh hiển thị proactive chat với nội dung khác nhau ở từng thị trường, để phù hợp với ngôn ngữ và chiến lược bán hàng theo từng quốc gia
• Vị trí: Proactive chat | Conditions https://prnt.sc/MdQmSY6M9wAN
• Mô tả: thêm điều kiện Countries khi cài đặt proactive chat, gồm:
    ◦ All countries: hiển thị trên toàn bộ thị trường
    ◦ Selected countries: chọn quốc gia cụ thể để hiển thị proactive chat

**Task:** Thêm điều kiện hiển thị proactive chat theo countries (https://www.notion.so/Th-m-i-u-ki-n-hi-n-th-proactive-chat-theo-countries-27ab0da449f18087b763f7efa98af8d4?pvs=21)


### 6. [Improvement] Thêm tuỳ chọn bật/tắt Market sync

**Released:** August 27, 2025

Vấn đề
Hiện tại app luôn tự động sync market (currency, exchange rate) và quy đổi giá theo công thức. Với store sử dụng app thứ 3 đề điều chỉnh giá theo quốc gia, merchant muốn tắt tính năng này để hiển thị giá gốc
Mục đích
Cho phép merchant linh hoạt quản lý hiển thị giá
Mô tả
• Thêm toggle Market sync trong cài đặt (mặc định bật) https://prnt.sc/7GQyUoQnHLxc
• Khi tắt, hệ thống sẽ hiển thị giá theo giá gốc, không áp dụng quy đổi theo exchange rate

**Task:** Thêm setting tắt sync Market (https://www.notion.so/Th-m-setting-t-t-sync-Market-25ab0da449f18068b661f6c13a4d6e1c?pvs=21)


### 7. [Improvement] Gộp First name, Last name  trên pre-chat, subscribe form

**Released:** August 1, 2025

[Improvement] Gộp First name & Last name trên Pre-chat và Subscribe form
Trước đây: form hiển thị 2 field First name và Last name:
• Gây tốn thời gian điền form, cản trở việc start chat
• 1 số quốc gia không sử dụng họ riêng biệt
Cập nhật
• Chỉ hiển thị field “Name” trên pre-chat form và subscribe newsletter form
• Sau khi submit, cập nhật dữ liệu tại field First name trên profile

**Task:** Gộp First name, Last name  trên pre-chat, subscribe form (https://www.notion.so/G-p-First-name-Last-name-tr-n-pre-chat-subscribe-form-21bb0da449f1805f81ebd633a26512ce?pvs=21)


### 8. [Improvement] Tách trang Manage account

**Released:** June 27, 2025

[Improvement] Tách trang Manage account
• Vấn đề: gộp chung màn Edit member profile và Manage account, khiến user gặp khó khăn khi muốn cập nhật thông tin cá nhân hoặc thay đổi mật khẩu
• Mục đích: giúp team member dễ dàng quản lý thông tin cá nhân, đổi mật khẩu, và kiểm soát đăng nhập, tách biệt rõ ràng với phần quản lý Team
• Mô tả tính năng:
    ◦ Tạo mới màn Manage account https://prnt.sc/13Er2EcQSZEG
        ▪ Profile: cập nhật thông tin từ trang Edit member profile và cho phép sửa
        ...

**Task:** Tách trang Manage account ở Web app (https://www.notion.so/T-ch-trang-Manage-account-Web-app-206b0da449f180aa8cd4f3b95ece3192?pvs=21)


### 9. [New Feature] Hỗ trợ thiết lập số Zalo tùy chỉnh & Zalo Business

**Released:** June 13, 2025

Vấn đề
Trước đây, cài đặt Zalo chỉ chấp nhận số điện thoại có đầu số theo quốc gia (ví dụ: Việt Nam = +84)
→ Không phù hợp với:
• Merchant dùng hotline nước ngoài (ví dụ: +1 – US/Canada)
• Merchant sử dụng Zalo Business (liên hệ qua link hoặc QR, không dùng số điện thoại)

Mô tả tính năng
Tại Dev Zone, bổ sung tùy chọn thiết lập Zalo:
• Enable custom phone number: cho phép bỏ qua đầu số cố định theo quốc gia, nhập bất kỳ số điện thoại nào
• Enable custom Zalo number: hỗ trợ nhập link liên hệ qua...

**Task:** Create enable custom zalo  (https://www.notion.so/Create-enable-custom-zalo-210b0da449f1804abf0ef08881ee5114?pvs=21)


### 10. [New feature] Manage account in web app

**Released:** May 28, 2025

• Mục đích: giúp team member của store quản lý tài khoản cá nhân và thay đổi mật khẩu
• Vị trí: Web app → My account https://prnt.sc/CPIrJQrDE8_q
• Mô tả:
    ◦ Cập nhật profile: cho phép chỉnh sửa Avatar, Name
    ◦ Thay đổi mật khẩu: click Change password → Mở modal Change password cho phép nhập và và xác nhận mật khẩu mới https://prnt.sc/3yjmQQEUhnwr
• Lưu ý: Nếu user log in bằng Google account và chưa tạo tài khoản trước đó, user cần nhấn “Reset password” để tạo tài khoản

**Task:** [Web app] Manage account  (https://www.notion.so/Web-app-Manage-account-1d5b0da449f18059b18afd90d054e032?pvs=21)


### 11. Feature request by feedbear

**Released:** April 26, 2025

Sử dụng feature request power bởi Feedbear để tránh vi phạm BFS trên app và quản lý feature request tốt hơn https://prnt.sc/Zv5AFj6DqB13

**Task:** Feature request by feedbear (https://www.notion.so/Feature-request-by-feedbear-1d9b0da449f1806bbb51ed0ed14c452c?pvs=21)


### 12. Feature request by feedbear

**Released:** April 26, 2025

Sử dụng feature request power bởi Feedbear để tránh vi phạm BFS trên app và quản lý feature request tốt hơn https://prnt.sc/Zv5AFj6DqB13

**Task:** Feature request by feedbear (https://www.notion.so/Feature-request-by-feedbear-1d9b0da449f1806bbb51ed0ed14c452c?pvs=21)


### 13. [Improvement]

**Released:** April 23, 2025

**Task:** Assign AI to conversation được follow up by email (https://www.notion.so/Assign-AI-to-conversation-c-follow-up-by-email-1deb0da449f180fcbc19f300a1a26f2a?pvs=21)


### 14. New pricing

**Released:** April 11, 2025

**Task:** New pricing in 1/2025 (https://www.notion.so/New-pricing-in-1-2025-77527f9bbf864cf4b360fcf505e21a15?pvs=21) 
[Pricing] Convert shop cũ đang sub sang pricing mới có limit (https://www.notion.so/Pricing-Convert-shop-c-ang-sub-sang-pricing-m-i-c-limit-1b9b0da449f18061af2eeac1f11230fb?pvs=21) 
[Subscription] Thêm Yearly plan (https://www.notion.so/Subscription-Th-m-Yearly-plan-1afb0da449f1807598bcfd349e287962?pvs=21)


### 15. Update list view

**Released:** October 3, 2024

Bổ sung cột List view trên navigation 
Update filter

**Task:** [Inbox] Update list view (https://www.notion.so/Inbox-Update-list-view-b290c5c4a2444bcb9a73da93505e77f7?pvs=21)


### 16. Update phone number input

**Released:** August 14, 2024

• Đổi quốc gia sẽ update đầu số theo quốc gia đó, update tại trường phone trên các field điền phone trên admin https://prnt.sc/CvbjQGcdwJK9


### 17. Specific offline status

**Released:** August 6, 2024


### 18. Insert emoji

**Released:** July 24, 2024


### 19. Insert link

**Released:** July 24, 2024

• Gửi link với format gạch chân
• Khi gửi link sản phẩm của store bất kỳ: hiện thông tin sản phẩm gồm title, description và price và CTA view product (sẽ delay một chút) https://i.imgur.com/ZjRMDI2.png
• Sửa link và text hiển thị cho link https://i.imgur.com/LTP8M05.png https://i.imgur.com/PUnSVsy.png


### 20. Update menu PWA

**Released:** July 8, 2024

Thêm menu navigation tới các tính năng
Update nút Unread

**Task:** Đồng nhất giao diện PWA với mobile/desktop (https://www.notion.so/ng-nh-t-giao-di-n-PWA-v-i-mobile-desktop-d6449ac284b34e63b31350e30d5caee2?pvs=21)


### 21. Update expiration cho chat session của guest và anonymous:

**Released:** June 26, 2024

Update session thành 30 ngày kể từ tin nhắn cuối cùng của khách - thay vì tin nhắn đầu tiên


### 22. Show customer activities tại store ở admin chat

**Released:** June 12, 2024

• Tính năng giúp merchant nhìn thấy được activity & intent của khách hàng, từ đó đưa ra response phù hợp
• Những activities bao gồm:
• Start chat
• Add to cart
• Add to existing cart
• Remove item from cart (chia trường hợp chuyển thành empty cart, vẫn còn item trong cart)
Note: Update cần xin quyền product

**Task:** Customer activities in store front (https://www.notion.so/Customer-activities-in-store-front-8875dcf36bf94b3586fe28dac2bceab6?pvs=21)


### 23. Update app listing logo

**Released:** April 3, 2024

**Task:** https://drive.google.com/drive/u/1/folders/11_rox0fvESagZ0R-ha1WlyxBdDf5ax6O


### 24. Template

**Released:** April 1, 2025 → December 31, 2025


### 25. Preview scenario Transfer to human


---
