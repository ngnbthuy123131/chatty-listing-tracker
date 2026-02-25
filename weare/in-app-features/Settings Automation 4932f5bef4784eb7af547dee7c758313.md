# Settings | Automation

Created by: TienTT
Category: Settings
Status: In progress

# BẢNG SỬA ĐỔI

| Updated at | Updated by | **A* M, D** | **Mô tả thay đổi** | Task |
| --- | --- | --- | --- | --- |
| 13/05/2024 |  | M | General: Store name & avatar | [Thêm settings store name & avatar](https://www.notion.so/Th-m-settings-store-name-avatar-bccb239b0b2740e39f04f0e147ba1ee6?pvs=21)  |
| 30/07/2024 |  | M | General: Cập nhật settings disclaimer consent link | [[Subscribe chatbot] Upload discount icon, thêm name input field](https://www.notion.so/Subscribe-chatbot-Upload-discount-icon-th-m-name-input-field-384c522b73314db1a789d89c4af9c2bd?pvs=21)  |
| 08/08/2024 |  | A | General settings: Thêm setting Deep link  | [Deep link (mở chatbox popup từ link)](https://www.notion.so/Deep-link-m-chatbox-popup-t-link-8b1cdd0304704492a609760c9d6ef1ca?pvs=21)  |
| 05/09/2024 | TienTT1 | M | **General:**
Đối với plan Free: 
- Giới hạn upload icon Store avatar
- Disable tính năng Follow up email
[3.1.1. General](https://www.notion.so/3-1-1-General-145b0da449f181fd8787da3110d35945?pvs=21) 

**Advanced:**
- Thêm checkbox Branding removal
[3.3.2. Brand removal](https://www.notion.so/3-3-2-Brand-removal-145b0da449f1814e8ec3cd723e3f1ecf?pvs=21) 
 | [Pricing Chatty](https://www.notion.so/Pricing-Chatty-fffb0da449f180cfa0a6f6214b0ac2ce?pvs=21)  |
| 19/12/2024 | TienTT | M | Cập nhật cài đặt Assignment
+ Sửa field Assign when replying 
+ Thêm cài đặt Assignment method [**3.1.2. Assignment method**](https://www.notion.so/3-1-2-Assignment-method-fdfaec2fd5f44e0b969bac67fd79e3ee?pvs=21)  | [[Automation] Cài đặt Assignment method](https://www.notion.so/Automation-C-i-t-Assignment-method-fe020dafc3f04f7086198150f2b26794?pvs=21)  |
| 11/3/2025 | TienTT | M | Thêm cài đặt Satisfaction survey, Survey analytics  | [Satisfaction survey](https://www.notion.so/Satisfaction-survey-1a1b0da449f18057aebce7bc2e204617?pvs=21)  |
| 03/04/2025 | TienTT | M | Sửa default value của Auto-resolution = ON | [Update default value cho Auto-resolution](https://www.notion.so/Update-default-value-cho-Auto-resolution-1cab0da449f1800d9b10eba21be298b0?pvs=21)  |
| 11/08/2025 | TungKT | M | Thêm rule auto assign to online member | [Auto assign cho online member](https://www.notion.so/Auto-assign-cho-online-member-23fb0da449f1804baf54e6db8abcb421?pvs=21)  |
| 13/10/2025 | TungKT | M | Thêm màn quản lý user trong auto assgin | [Thêm lựa chọn team member được assign](https://www.notion.so/Th-m-l-a-ch-n-team-member-c-assign-27ab0da449f1802da8b4f7aa8e9817f1?pvs=21)  |
| 13/10/2025 | TungKT | M | Thêm setting Advanced spam function | [[Inbox] AI guardrails](https://www.notion.so/Inbox-AI-guardrails-fab4d299c2ad49f7be5c4684cf68563c?pvs=21)  |

# **MỤC LỤC**

# 1. Overview

# 2. Workflow

### 2.1. Auto assign

### 2.2. Auto resolve

![AI assistant = ON](Settings%20Automation/image.png)

AI assistant = ON

![AI assistant = OFF](Settings%20Automation/image%201.png)

AI assistant = OFF

# 3. Screen description

## 3.1. Assignment

![image.png](Settings%20Automation/image%202.png)

| **Field Name** | **Control type** | **Mandatory** | **Description** |
| --- | --- | --- | --- |
| Assignment method | Radio button | Có | Lựa chọn phương thức assign khi có conversation mới 
Áp dụng cho tất cả conversation từ live chat, Messenger, Instagram, Email
Nếu bật AI assistant, conversation sẽ được assign khi conversation transfer to human

Danh sách giá trị bao gồm:
+ Manual: không tự động assign (giá trị mặc định) 
+ Round robin: tự động assign cho các member lần lượt theo thứ tự trong “user list” 

 |
| Reassign conversations based on replies | ~~Toggle~~  Radio button | Có | Cho phép lựa chọn cài đặt tự động assign mỗi khi trả lời: 
+ Conversations stay with assigned member (or stay unassigned) (mặc định)
+ Conversations will be assigned to whoever replies |

### **3.1.2. Assignment method**

![image.png](Settings%20Automation/image%203.png)

![image.png](Settings%20Automation/image%204.png)

| **Field Name** | **Control type** | **Mandatory** | **Description** |
| --- | --- | --- | --- |
| **Manual assignment**  | Radio button | Có | Lựa chọn phương thức assign khi có conversation mới (áp dụng cho tất cả conversation từ live chat, Messenger, Instagram, Email)
Conversation được áp dụng assign: conversation mới từ các channel hoặc transfer từ AI assistant

+ Manual: không tự động assign (giá trị mặc định) 
 |
| Automatic assignment  | Radio button | Có | + Auto: tự đông assign tin nhắn cho các member. 2 option: All members vs specific members |
| All members | Radio button | Có | **Default**: trạng thái default khi chọn method auto assign. Mặc định chọn tất cả member
 |
| Specific members | Radio button  | Có | **Title**: User list  
**Desc**: Select the users below to assign coversation
**Type**: Drop list
**Default: Blank
Action:** 
+ User tick or untick to manange account user in list.
+ Each user display as tag with delete button (following system design Popover) 
**Validation:** 
+ When choose option Auto assign, must have at least one member, if no member select show error mess: “You have to choose at least 1 member.” |
| Only assign to online member | Check-box | Không | **Default:** **Untick** (không chọn)
**Điều kiện hiển thị:** Chỉ hiển thị khi merchant chọn "Automatic assignment to each member in order"
**Mô tả chức năng:**
Khi **Untick** (mặc định): Hệ thống phân công cuộc hội thoại cho tất cả thành viên trong team theo round-robin, không phân biệt trạng thái online/offline của thành viên.
Khi **tick checkbox**: Hệ thống chỉ phân công cuộc hội thoại cho các thành viên đang có trạng thái online. Nếu không có thành viên nào online, cuộc hội thoại sẽ được giữ ở trạng thái **unassigned**. Khi có thành viên online trở lại, hệ thống sẽ tự động phân công các cuộc hội thoại unassigned này cho thành viên đó theo thứ tự FIFO (first in, first out).
**Text Information:** "Conversations are only assigned to team members who are currently online"

Cách xác định trạng thái online của member:
refer to [4.1. App header](https://www.notion.so/4-1-App-header-585d39dfd91e440c8f89b4fca704edc7?pvs=21)  |
|  |  |  |  |

## 3.2. Automatic resolution

![image.png](Settings%20Automation/image%205.png)

| Field | Control type | Mandatory | Description |
| --- | --- | --- | --- |
| Automatic resolution | Toggle | Có | ・Dùng để bật tính năng tự động resolve conversation khi không có tin nhắn từ khách hàng sau một khoảng thời gian nhất định 
・Áp dụng cho tất cả conversation được tạo từ các channel ngoại trừ Email (gồm Online store, Messenger, Instagram, WhatsApp)
・Default = ON 
・Hiển thị activity tại Inbox khi conversation được tự động resolve

**TH1. AI = ON** 
Auto resolve khi
・AI reply, không có tin nhắn mời từ khách hàng 
・User không submit pre-chat form
・Conversation được transfer to human: agent reply, không có tin nhắn mới từ khách hàng (không tự động resolve khi khách chọn Continue with AI cho đến khi agent reply) 

**TH2. AI = OFF**
Auto resolve khi
・Agent reply, không có tin nhắn mời từ khách hàng 
・User không submit pre-chat form |
| Resolve conversation after | Number | N/A | ・Nhập thời gian để resolve conversation khi không có tin nhắn mới từ khách hàng 
・Bắt buộc nhập, thông báo khi để trống “This field is required”
・Chỉ cho phép nhập số nguyên dương, mặc định là 60 |
| Minute/Hour/Day | Dropdown | Có | Lựa chọn đơn vị thời gian Resolve conversation after, gồm:
・Minute (giá trị mặc định)
・Hour 
・Day |
| Resolved alert | Text box | Có | ・Nhập thông báo hiển thị khi conversation được resolve tự động
・Giá trị mặc định: This conversation has been automatically resolved due to inactivity. Feel free to reopen chat if you need further help
・Hiển thị thông báo inline khi để trống: Resolved alert is required  
・Tự động dịch trường này cho các ngôn ngữ published khi được chỉnh sửa (cập nhật trên trang Translations) |

## 3.3. Satisfaction survey

![image.png](Settings%20Automation/image%206.png)

| Item | Control type | Required | Description |
| --- | --- | --- | --- |
| Back icon | Button | N/A | Click để mở trang trước đó |
| Satisfaction survey | Label | N/A | Page title |

**Display satisfaction survey**

![image.png](Settings%20Automation/image%207.png)

| Item | Control type | Required | Description |
| --- | --- | --- | --- |
| Display satisfaction survey | Toggle | N/A | Click để Turn ON/OFF satisfaction survey 
Mặc định = OFF |

**Survey format**

![image.png](Settings%20Automation/image%208.png)

| Item | Control type | Required | Description |
| --- | --- | --- | --- |
| Survey format | Option list | Có | Lựa chọn template survey, gồm
+ Star rating (mặc định)  
+ Emoji scale  |

**Survey content**

![image.png](Settings%20Automation/image%209.png)

| Item | Control type | Required | Description |
| --- | --- | --- | --- |
| Intro | Text box | Có | ・Nhập intro của survey
・Giá trị mặc định: How was your experience?
・Validate: 
  ・ Bắt buộc, tin nhắn cảnh báo “Intro is required” 
   ・ Max length 100, chặn khi nhập quá số ký tự cho phép
Tự động dịch (cập nhật translation) khi chỉnh sửa |
| Thank you message | Text box | Có | ・Nhập intro của survey
・Giá trị mặc định: Thank you for your feedback!
・Validate: 
  ・ Bắt buộc, tin nhắn cảnh báo “Thank you message is required” 
   ・ Max length 100, chặn khi nhập quá số ký tự cho phép

・Tự động dịch (cập nhật translation) khi chỉnh sửa |

**Trigger time**

![image.png](Settings%20Automation/image%2010.png)

| Item | Control type | Required | Description |
| --- | --- | --- | --- |
| Conversation is resolved | Checkbox | N/A | Tích để gửi survey khi trạng thái conversation = Resolved, sau **5s** không có tin nhắn mới  |
| When specific keywords appear in conversation | Checkbox | N/A | ・Tích để gửi survey khi tin nhắn của khách hàng chứa từ khoá nhất định
・Thời gian gửi: sau **10s** không có thêm tin nhắn mới từ user (không tính tin nhắn từ AI) 
   ・Conversation AI đang xử lý: gửi survey sau tin nhắn trả lời của AI
   ・Còn lại: gửi survey sau tin nhắn cuối của user

・Mặc định = TICKED |
| Keyword | Tag | Có  | ・Hiển thị khi When specific keywords appear in conversation = TICKED
・Placeholder: Enter keywords to add
・Nhập keyword để nhận dạng gửi survey: gõ keyword → hiển thị dropdown “+ <keyword> → click / nhấn enter để thêm → hiển thị keyword đã thêm
・Validate bắt buộc, tin nhắn cảnh báo “Keyword is required”
・Giá trị mặc định: 
Thank you
Thanks
Got it
That helps
Perfect |
| ~~After X seconds user is inactive~~  | ~~Checkbox~~ | ~~N/A~~ | ~~・Tích để gửi survey sau một khoảng thời gian nhất định kể từ thời điểm user không trả lời tin nhắn cuối cùng
TH1. AI assistant = OFF: kể từ tin nhắn cuối cùng của agent 
TH2. AI assistant = ON: kể từ tin nhắn cuối cùng của AI / agent 
・Mặc định = TICKED~~ |
| ~~Inactive time~~  | ~~Slider~~ | ~~Có~~ | ~~・Lựa chọn khoảng thời gian user inactive kể từ tin nhắn cuối cùng 
・Khoảng giá trị: 0 - 30 (seconds) 
・Giá trị mặc định: 15s~~ |
| Banner lỗi không chọn Trigger time | Banner | N/A | Hiển thị banner khi submit form với điều kiện:
+ Display satisfaction survey = OFF
+ Untick cả 2 lựa chọn Conversation is resolved, When specific keywords appear in conversation

Ẩn khi nhấn close hoặc tích 1 trong các lựa chọn  Trigger time  |

**Additional informations**

| Item | Description |
| --- | --- |
| Frequency  | Cho phép gửi maximum tối đa 1 lần / conversation
Không hiển thị lại khi user lựa chọn Skip  |
| Condition | Điều kiện mặc định**:** 
+ Ít nhất 1 tin nhắn từ khách hàng
+ Tổng ký tự của tin nhắn > 250 ký tự |
| Permission | Customer và Admin đều không thể sửa và xoá survey sau khi đã submit  |
| ~~Phương thức gửi~~ | ~~Gửi tại chatbox khi thoả mãn điều kiện 
Gửi qua cả chatbox và email trong trường hợp khách hàng offline (chỉ áp dụng với customer / guest đã cung cấp email trước đó qua pre-chat form)~~ |
| Hiển thị tại Inbox | Sau khi gửi survey, hiển thị kết quả survey tại lịch sử conversation và section Conversation details
[3.4.8. Satisfaction survey](https://www.notion.so/3-4-8-Satisfaction-survey-1b2b0da449f180439bbac2bad06afb84?pvs=21) 
[**3.8.7. Satisfaction survey**](https://www.notion.so/3-8-7-Satisfaction-survey-1b3b0da449f1803b9cf1da874fe01892?pvs=21)  |

## 3.4 Advanced Spam Function

### 3.4.1 Chi tiết workflow

**1.Khởi động tính năng**

![image.png](Settings%20Automation/image%2011.png)

- Merchant truy cập **Settings →Automation**.
- Thấy mục **Smart Spam Protection**.
- Nhấn **toggle ON** để bật.
- Nếu tài khoản ở bản free plan: hiển thị nút **Upgrade** để nâng cấp gói, và disable toggle

**2. Detect Spam conversation**

- Khi có tin nhắn mới đến, hệ thống gửi nội dung sang AI moderation để phân tích.
- AI xác định mức độ rủi ro và phân loại (spam, harassment, violence, self-harm, v.v.).
- Nếu phát hiện nội dung vi phạm:
    - Gắn nhãn “Spam Detected”.
    - Tự động chuyển hội thoại sang **Blocklist**.
    - Ghi lại mess log : “Conversation automatically moved to Blocklist due to policy violation detected by AI moderation”

![image.png](Settings%20Automation/image%2012.png)