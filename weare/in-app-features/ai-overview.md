# Technical Document

###### We need technical information translated into benefits that merchants care about

###### Date Jan 29, 2026

###### Owner Carla

###### For use (can share publicly) For understanding only (won't share directly)

## 1. AI Model & architecture

###### Why we need this: To build credibility and explain "how it works"

- Model used: [e.g., GPT-4, Claude 3.5, Custom]:

###### Chatty does not use just one AI for everything. Each process uses a different model that

###### is best suited for that job. Think of it like a company with different departments, each

###### one handles what it does best.

**Main conversation models (Google Gemini):**

```
Process Model What it does
```
```
Chat response Gemini 2.
Flash Lite
```
```
Writes customer-facing replies
```

```
Retrieval (tool calling) Gemini 2.
Flash Lite
```
```
Searches FAQs, products, orders, discounts
```
```
Query rewrite +
language detection
```
```
Gemini 3
Flash
```
```
Rewrites customer questions for better search
accuracy, detects language
```
**Background processing models (OpenAI):**

```
Process Model What it does
```
```
Topic detection GPT-5 Nano Classifies what the customer wants in
real-time
```
```
Suggestion generation GPT-5 Nano Creates follow-up question buttons
```
```
Product question
generation
```
```
GPT-5 Nano Generates FAQs for products
```
```
Size guide detection from
image
```
```
GPT-5 Nano Reads size charts from uploaded
photos
```
```
Conversation summary GPT-4.1 Mini Writes conversation summaries for
merchant review
```
```
Message translation GPT-4.1 Mini Translates chat messages between
languages
```
```
Page classification GPT-4.1 Mini Identifies page type (FAQ, shipping
policy, etc.)
```
```
Email auto-reply
evaluation
```
```
GPT-4.1 Mini Decides if an email should get an
automated reply
```
```
Spam detection Moderation +
GPT-4.1 Mini
```
```
Filters inappropriate messages
```
```
Conversation topic
tagging
```
```
GPT-4.1 Nano Tags conversations with topics after
they end
```
**Search, embedding, and translation:**


```
Process Provider What it does
```
```
Vector embeddings OpenAI
text-embedding-3-small
```
```
Turns text into searchable codes for
the knowledge base
```
```
Knowledge base
retrieval
```
```
AWS Bedrock Runs alongside Weaviate search for
better results
```
```
Widget and UI
translation
```
```
Google Cloud
Translation API
```
```
Translates storefront widget text into
44+ languages
```
```
Example - how these AIs work together:
```
```
Step What happens Model used
```
```
1 Customer writes: "I want a shirt for my mom's birthday under
$50"
```
-

```
2 Classify the request as "product recommendation" GPT-5 Nano
```
```
3 Rewrite the question for better search accuracy Gemini 3 Flash
```
```
4 Search the product catalog and find matching items Gemini 2.5 Flash
Lite
```
```
5 Write a friendly reply and suggest specific products Gemini 2.5 Flash
Lite
```
```
6 Create 3 follow-up question buttons GPT-5 Nano
```
```
7 Customer gets a reply in about 2 seconds -
```
- Version/Update frequency:

**Type Frequency Impact**


Manual updates by dev Every We update each process to help AI response
better

```
Normal
```
Big updates from AI provider Every 3 to 6 months, AI pro tested carefully before
switching

```
High
```
Small updates from AI
provider

```
AI providers improve models regularly, we adopt
automatically
```
```
Small
```
```
You do not need to do anything. Your bot just keeps getting smarter on its own.
```
- Unique approach:
https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flas
h-lite
**Difference 1: A multi-agent system instead of one**

```
Most chatbots use one AI to do everything, which often leads to mistakes. Chatty uses 4 specialized
agents, each powered by the model best suited for its job:
```
```
Agent Model Role
```
```
Retrieval
Agent
```
```
Gemini 2.
Flash Lite
```
```
Calls the right tools to find information (FAQs,
products, orders, discounts). Focuses only on
finding data, not writing replies.
```
```
Response
Agent
```
```
Gemini 2.
Flash Lite
```
```
Takes all information found and writes a natural,
helpful reply for the customer.
```
```
Language
Detection
Agent
```
```
Gemini 3 Flash Detects the customer's language and rewrites the
query for better search results. Uses a smarter
model because accurate detection matters.
```
```
Suggestio
n Agent
```
```
GPT-5 Nano Creates follow-up question buttons so the
customer can keep the conversation going with
one click.
```
```
This separation means each agent does its job well, giving more accurate answers with fewer
mistakes.
```
```
Difference 2: Two separate search clusters
```

Chatty uses Weaviate (a specialized search database) with two separate clusters:

```
Cluster Contains
```
```
Store
Knowledge
```
```
FAQs, custom Q&A, scenarios, smart recommendations, web
pages, uploaded files, discount data
```
```
Products Full product catalog, variants, inventory, images, prices,
metafields, collections
```
We also run AWS Bedrock Knowledge Base in parallel for additional search coverage.

Why separate them? So a store with thousands of products does not slow down FAQ searches.
Each cluster works on its own and stays fast.

All text is turned into searchable codes using OpenAI's text-embedding-3-small model. This allows
the system to find results by meaning, not just exact words.

## 2. Training & learning

###### Why we need this: To explain setup process and show it gets smarter

- How merchants train AI:

#### 2.1. How do merchants train the AI?

Chatty does not learn from customer conversations on its own. This is on purpose so you have full
control. You teach the bot by giving it information in 3 ways:

**Step 1: Turn on Shopify data**

Go to Settings, then Training Data. Choose which Shopify data the AI can use:

```
● Product descriptions
● Collections
● Custom metafields
● Store web pages
● Product-specific FAQs
● Size guides
```

The AI updates automatically when you change something on Shopify. For example, you change a
shirt price from $30 to $35, the bot knows the new price within seconds.

Product sync limits depend on your plan:

```
Plan Product limit
```
```
Free 100
```
```
Basic 500
```
```
Pro 8,
```
```
Plus 20,
```
**Step 2: Add your own knowledge**

This is the most important step. You have 4 options:

**Method 1: Q&A (Questions and Answers)** - best method

You write common questions and the correct answers. The bot uses your answers when customers
ask similar things.

Example:

```
● You write: Q: "What is your return policy?" A: "30 days, free return shipping, items must have
original tags"
● Bot tells customers: "We accept returns within 30 days of delivery. Return shipping is free.
Items need their original tags and be unused."
```
Your Q&A entries are stored in the Weaviate FAQ collection and synced to AWS Bedrock in parallel.
When a customer asks something, the system finds the closest matching Q&A by meaning, not just
keywords.

Tips:

```
● Look at your conversation history to see what customers actually ask
● Keep answers short with specific details (days, amounts)
● Update monthly
```
**Method 2: Upload files (PDF, Word, TXT)**

Good for long documents like catalogs, user manuals, or size charts. When you upload a file:

1. The system reads all the text


2. Breaks it into small pieces (about 2,000 tokens each, with overlap between pieces so context
    is not lost)
3. Each piece is turned into a searchable code using OpenAI's embedding model
4. Saved to the knowledge base so the bot can search through them quickly
5. When a customer asks a question, the bot finds the most relevant piece

Tips:

```
● One file per topic
● Use clear headings
● Do not mix unrelated topics in one file
● Max 10MB per file, up to 50 files
```
**Method 3: Add web pages (Index URL)**

The bot can read and learn from your store's web pages. When you add a URL:

1. The system fetches the page and converts it to clean text (removes menus, footers,
    navigation)
2. An AI agent extracts the useful content
3. The content is saved to the knowledge base

```
Good pages to add Pages you should not add
```
```
About Us Login pages
```
```
Shipping Policy Shopping Cart
```
```
Warranty Policy Individual Product pages (use Shopify data instead)
```
```
Store Locations Pages that change often (flash sales)
```
```
Brand Story
```
Limits: Up to 10 pages per day

**Method 4: Product metafields from Shopify**

You choose which custom product details the AI can use. Metafields are synced alongside your
product data.

```
Metafield What bot says
```
```
Material: "100% organic cotton" "This shirt is made from organic cotton"
```

```
Care: "Machine wash 30 C" "You can machine wash at 30 C"
```
```
Origin: "Vietnam" "This product is made in Vietnam"
```
```
Warranty: "12 months" "12-month warranty"
```
**Step 3: Write instructions for the bot**

You write guidelines that tell the bot how to behave. Think of it as a handbook for a new employee.

There are 4 parts:

```
Part Required? Limit Description
```
```
Role Yes 250 characters Tell the bot who it is. Example: "You
are Lily, the AI assistant for Eco
Fashion Store."
```
```
Custom
Instructions
```
```
Recommended Configurable How the bot should respond and
handle conversations. Your main
space for detailed guidance.
```
```
Tone of Voice Recommended 250 characters
(custom)
```
```
Choose Friendly, Professional,
Empathetic, or write your own.
```
```
Boundaries Optional 1,
characters
```
```
What the AI should NOT do.
Example: "Do not give medical
advice."
```
Chatty provides 9 industry-specific templates: Apparel, Home and Garden, Beauty and Fitness,
Food and Drinks, Health, Sports, Toys and Hobbies, Pets and Animals, General (custom).

#### 2.2. How does Shopify data stay up to date?

Chatty uses the Shopify GraphQL Admin API to pull data. There are 2 sync methods:

**Method 1: Daily auto sync (scheduled)**

Runs automatically every day at midnight UTC. The system uses Shopify's Bulk Operation API to
export all your active products, then compares with the previous sync to find what changed (new,
updated, or deleted products). Only changed products are re-synced to save time.

**Method 2: Manual sync (user-triggered)**


You click the "Sync products" button in Settings > Training Data. This starts the same process as
daily sync but on demand. Limited to 10 manual syncs per day.

Both methods follow the same pipeline:

```
Step What happens
```
```
1 Chatty sends a Bulk Operation query to Shopify GraphQL API
```
```
2 Shopify processes the query in the background and generates a JSONL file
```
```
3 Shopify notifies Chatty when the export is ready (bulk operation finish webhook)
```
```
4 Chatty downloads the file, parses all products, and compares with previous sync
```
```
5 Only new, updated, or deleted products are synced to Weaviate and Bedrock
```
```
6 Products are sent in batches (100 per batch, 30s delay between batches)
```
**Sync details by data type:**

```
Data type Daily auto
sync
```
```
Manual sync How it works
```
```
Products Yes (midnight
UTC)
```
```
Yes (button, max
10/day)
```
```
Shopify Bulk Operation API,
differential sync
```
```
Discounts No Yes (button) Shopify GraphQL
cursor-based pagination
```
```
Store pages On first AI
activation
```
```
Yes (resync button) Shopify Admin API + AI
content evaluation
```
```
Q&A / Custom
answers
```
```
No Manual add/edit in
dashboard
```
```
Saved directly to Weaviate
```
```
Uploaded files No Manual upload in
dashboard
```
```
Chunked and saved to
Weaviate
```
Products are synced to both Weaviate (vector search) and AWS Bedrock (knowledge base) in
parallel. The system applies your plan's product limit during sync (Free: 100, Basic: 500, Pro: 8,000,
Plus: 20,000).


#### 2.3. Does the AI learn from conversations by itself?

No. And this is a good thing:

1. **You stay in control** - the bot only knows what you told it, so it never says something you did
    not approve
2. **Customer privacy is protected** - conversations are not used to train the AI (safe under
    GDPR)
3. **Bad info does not spread** - if a customer says something wrong, the bot does not pick it up
4. **Easy to fix** - if the bot says something wrong, you know exactly where to look

Instead, Chatty shows you which questions the bot could not answer. You then add new Q&A entries
to fill those gaps.

###### We will update ability to learn from conversation in 2026

#### 3. Product Recommendation Engine

This is one of Chatty's biggest strengths. The bot does not just answer questions, it actively helps
sell your products.

#### 3.1. How does the AI understand what customers want?

**Step 1: Figure out the customer's goal (Topic Detection)**

The AI uses a fast model (GPT-5 Nano) to classify the customer's message into one of 10 topics:

```
Topic Customer intent
```
```
Product recommendation Wants product suggestions
```
```
Best selling Asks for popular items
```
```
Newest arrivals Asks for new products
```
```
Product comparison Wants to compare products
```
```
FAQ / Policy Questions about returns, shipping, warranty, payment
```
```
Promotion Looking for discounts, coupons, sales
```

```
Order / Account Order tracking, delivery status, login issues
```
```
After sale Returns, refunds, exchanges, damaged or missing items
```
```
Human escalation Wants to talk to a real person
```
```
General inquiry Feedback, complaints, suggestions, or anything else
```
This classification happens in the background and helps the bot pick the right tools and search
strategy.

**Step 2: Pick out the details (Attribute Extraction)**

For product searches, the AI pulls out specific details from the question:

```
Source Attributes extracted
```
```
Text Product name, type, SKU, barcode, color, material, size,
brand, style, pattern, gender, features
```
```
Image (when customer
sends a photo)
```
```
Product type (e.g., "t-shirt"), color and shades, gender (men,
women, unisex)
```
```
Budget Minimum and maximum price, sort preference (cheapest first,
most expensive first)
```
Example: "I need a blue shirt, cotton, under $50, for my boyfriend" The AI picks out: Color=Blue,
Material=Cotton, Budget=Under $50, Gender=Male, Purpose=Gift Then it filters your catalog to
show men's blue cotton shirts at $50 or less.

#### 3.3. Smart Recommendations - Rules you create

You set up your own recommendation rules based on your business.

Example rule: "Birthday Gift"

```
● Trigger words: "birthday", "gift", "present"
● Show products from: Gifts collection, Premium Items collection
● Price range: $20 to $
● Only in-stock items
● Sort by: Popularity
```

Result: When anyone asks about birthdays, the bot automatically suggests the right gifts.

Chatty comes with 2 default rules:

```
Rule Trigger keywords
```
```
Special Occasions gift, birthday, anniversary
```
```
Sale Promotion sale, discount, deal
```
You can create as many more as you want.

How matching works: The system uses hybrid search (keywords + meaning) to match customer
messages against your rules. Trigger words are weighted 3x higher than titles, so exact keyword
matches are prioritized.

#### 3.4. Smart Search - Finding products by meaning

Regular search only finds exact word matches. Chatty understands meaning.

```
Customer says Regular search Chatty search
```
```
"athletic shirt" Only finds products with those
exact words
```
```
Also finds "gym top", "yoga
top"
```
```
"I go to the gym every
morning"
```
```
No results Suggests gym tops, shorts,
running shirts
```
```
"office wear" No results Suggests dress shirts, slacks,
blazers
```
How it works: Every product gets a code (vector embedding) that represents its meaning. Customer
questions also get a code. The system finds products whose meaning is closest to what the
customer asked for. It uses hybrid search that combines keyword matching and meaning matching
for the best results.

#### 3.5. What product info does the AI use?

```
Category Fields
```

```
Basic Product name (title), vendor (brand), product type, tags (up to 10,
characters)
```
```
Pricing Price range (min/max), compare-at prices, currency
```
```
Media Product image, product URL
```
```
Organization Collections, collection IDs
```
```
Variants Options (size, color), SKU, barcode, weight, inventory status per variant
```
```
Custom data Metafields (from your active metafield definitions)
```
```
Status Available for sale or not
```
```
Smart tags "best_selling" and "newest" flags for filtering
```
Important: The bot never suggests out-of-stock products. If your store has more than 10,

###### products, out-of-stock items are excluded from sync entirely to save space.

#### 4.1. Detecting buying intent (Topic Detection)

The AI classifies customer messages into topics (see section 3.1) and adjusts how it responds:

```
Topic
group
```
```
Topics Bot behavior
```
```
Product-rel
ated
```
```
Recommendation, best selling,
newest, comparison
```
```
Searches products, provides
suggestions with "Add to Cart" options
```
```
Policy and
info
```
```
FAQ, promotion Searches knowledge base, gives
informative answers
```
```
Service Order tracking, after sale, human
escalation
```
```
Uses specialized tools (order lookup,
support forms, agent transfer)
```

```
General General inquiry Gives helpful responses based on
available knowledge
```
#### 4.2. Features that help turn chats into sales

The bot has 12 specialized tools it can use during a conversation:

```
Category Tool What it does
```
```
Knowledge faq_lookup Search your FAQ and custom Q&A knowledge
base
```
```
Knowledge product_lookup Find and recommend products from your catalog
```
```
Knowledge product_faq_lookup Find FAQs specific to a product
```
```
Knowledge size_guide_lookup Look up size charts and fit information
```
```
Knowledge discount_lookup Find active discounts and promotions
```
```
Cart create_cart Add products to the customer's cart
```
```
Cart update_cart Change quantities or remove items
```
```
Cart get_cart View what is currently in the cart
```
```
Service check_order_status Look up order status and tracking
```
```
Service joy_loyalty_lookup Check loyalty points and rewards
```
```
Service customer_support Handle after-sale requests (returns, refunds, etc.)
```
```
Service human_agent_transfer Connect customer to a live person
```
Each tool is only available if you have enabled the corresponding feature in your settings.

**Add to cart in the chat**


Customers can add products to their cart without leaving the conversation. Chatty supports both
regular Online Store (Remix) themes and Headless/Hydrogen storefronts.

How it works:

```
Ste
p
```
```
What happens
```
```
1 Customer: "Add that shirt to my cart"
```
```
2 Bot asks: "What size and color?"
```
```
3 Customer: "Size M, blue"
```
```
4 Bot confirms product, size, color, and price
```
```
5 Bot adds it to their Shopify cart using the Cart API
```
```
6 Bot sends a checkout link
```
After adding, the bot dispatches a "chatty:cart:changed" event so your theme can update the cart
icon.

Safety rules:

```
● Always confirms size and color first
● Will not add out-of-stock products
● Adds 1 item by default
● Checks current cart before making changes
```
**Automatic discount suggestions**

When a customer asks about discounts, the bot checks your Shopify store for 3 types of active
discounts:

```
Discount type Example
```
```
Percentage or fixed amount "20% off with code SAVE20"
```
```
Buy X Get Y "Buy 2, Get 1 Free"
```
```
Free shipping "Free shipping on orders over $50"
```

For each discount, the bot shows: the code, what it does, minimum purchase requirements, and
expiration date. It only shows discounts the customer qualifies for.

**Order tracking**

Customers can check their order status right in the chat. The bot supports 3 lookup methods:

```
Customer type How it works
```
```
Logged-in customer Bot uses their Shopify customer ID to find orders automatically
```
```
Guest customer Bot asks for email/phone and order number
```
```
Tracking number Bot returns the tracking URL directly
```
The bot shows: order number, status, fulfillment status, line items, and tracking information. It also
translates order status labels into the customer's language automatically.

**Loyalty points (Joy Loyalty)**

If your store uses the Joy Loyalty app, customers can do 7 things in the chat:

```
Query What customer sees
```
```
Check points balance Current points and tier status
```
```
Learn how to earn points All earning programs
```
```
See available rewards Rewards they can redeem
```
```
View earned rewards Active reward codes and expiration dates
```
```
Check tier levels Tier structure and what is needed to level up
```
```
View recent activity Points history filtered by type
```
```
Get general info Overview of the loyalty program
```
The bot connects to Joy Loyalty via API with secure authentication. Results support pagination for
customers with lots of activity.

#### 4.3. Recovering abandoned carts


Chatty tracks cart activity through Shopify's Web Pixel Extension. When a customer adds or
removes items, the system logs:

```
● Session ID
● Product name, variants, SKU
● Quantity and cart amount
● Timestamp
```
The system includes an "abandoned_cart_reminder" campaign type that can send recovery
messages when a customer leaves items in their cart.

**Follow-up question buttons**

After suggesting a product, the Suggestion Agent automatically creates exactly 3 clickable buttons
with follow-up questions (max 100 characters each).

Example after suggesting a red sweater:

```
● [How to style this?]
● [Add to cart?]
● [See other colors?]
```
The questions are generated in the customer's language and written in first person ("What...",
"How...", "Can I..."). The system avoids repeating questions that were already suggested.

This feature is controlled by the "Product Suggestions" scenario setting and only activates for

###### product-related conversations.

## 5. Customization

###### Why we need this: Merchants want AI that sounds like their brand

#### 5.1. Choose your bot's voice (Tone of Voice)

```
Tone Description
```
```
Friendly Warm, approachable, and enthusiastic. Uses light-hearted greetings,
conversational language, and occasionally emojis.
```

```
Professiona
l
```
```
Formal, respectful, and confident. Uses concise and clear sentences, formal
language, and maintains professional distance.
```
```
Empathetic Understanding, compassionate, and supportive. Acknowledges the
customer's feelings, uses soothing language, and offers reassurance.
```
```
Custom You write your own tone description (max 250 characters). Example: "Talk
like a knowledgeable friend who loves fashion."
```
Same question, different styles:

```
Tone Customer asks: "Does the shirt fade?"
```
```
Friendly "No worries! Our shirts use a color-lock process. They stay vibrant even
after 50 washes!"
```
```
Professional "This product uses a certified color-lock process. It keeps color for at least
50 washes."
```
```
Empathetic "Great question, and I understand the concern. We use a special dyeing
process so colors stay bright. You can feel confident."
```
#### 5.2. Customize the bot's identity

```
Setting Description Default
```
```
Bot name Give it a name like "Lily" or
"Alex"
```
```
"Chatty AI"
```

Avatar Choose from 4 built-in icons or
upload your own image via URL

```
Built-in icon
```
Welcome
message

```
Customize the first message.
Supports {{customer_name}}
variable.
```
```
"Hello {{customer_name}} I'm Chatty AI
assistant, here to help you find what
you're looking for."
```
Default
language

```
Choose one or let the bot detect
automatically
```
```
Auto-detect
```

#### 5.3. Write the bot's rulebook (Instructions)

In AI Training, you write guidelines. A good set has 4 parts (see section 2.1 Step 3 for details).

Full example:

You are Hana, the sustainable fashion expert at EcoWear.

The store specializes in:

```
● Fashion from recycled and organic materials
● OEKO-TEX and Global Organic Textile Standard certified
```
Always mention:

```
● 60-day return policy (best in the market)
● Free shipping on orders from $
● 1 tree planted for every order
```
When recommending products:

```
● Mention the positive environmental impact
● Suggest sustainable outfit combinations
● Provide care tips to extend product lifespan
```
Do not mention:

```
● Animal leather products
● Competitor brands
● Discounts unless the customer asks
```
Chatty provides 9 industry-specific templates (Apparel, Home and Garden, Beauty, Food, Health,
Sports, Toys, Pets, General) so you do not have to start from scratch.

#### 5.4. Set up special scenarios

Chatty comes with 5 built-in scenarios:

```
Scenario Default Description
```
```
Size Guide Off Help customers find their perfect fit using your size charts
```

```
Human Agent
Transfer
```
```
On Let customers request a live person. Customize messages for
business hours and after hours separately.
```
```
After-Sales
Support
```
```
On Handle returns/refunds, order cancellations, order issues, and
order edits. Includes a multi-step form (email, description,
order number, optional phone and photo upload).
```
```
Order Tracking On Let customers check order status in the chat
```
```
Product
Suggestions
```
```
Off Show follow-up question buttons after product
recommendations
```
You can also create your own custom scenarios with keywords and instructions.

Example custom scenarios:

```
● Wholesale customers: If a customer has the "wholesale" tag, bot shares bulk pricing
● VIP customers: If a VIP asks about new products, bot tells them about exclusive early
access
```
#### 5.5. Customize the chat widget

You can change how the chat window looks on your website:

**Layout:**

```
Setting Options Default
```
```
Position Bottom right, bottom left Bottom right
```
```
Float button size Custom px 55px
```
```
Float button style Icon only, icon with label Icon only
```

```
Float button label Custom text "Chat with us"
```
```
Hide on mobile Yes / No No
```
**Colors:**

```
Setting Format
```
```
Brand color Hex
```
```
Text color Hex
```
```
Action color (buttons) Hex
```
```
Float button label color Hex
```
```
Gradient Two gradient colors or solid
```
```
Color mode Light or dark
```
**Content:**

```
Setting Default
```
```
Welcome heading text "Hi"
```
```
Welcome description "How can we help you?"
```

```
Theme selection "cloud"
```
```
Custom CSS For advanced styling
```
**Welcome popup:**

```
Setting Options
```
```
Messages Different for online vs offline
```
```
Show on Desktop, mobile, or both
```
```
Trigger After a set number of seconds (default: 5)
```
```
Custom fonts For title and message
```
**Features you can turn on or off:**

```
● FAQ articles and categories
● Product recommendations
● Add to cart
● Transfer to human support
● Order tracking
● Quick reply suggestions
● Navigation menu
●
```
#### 5.6. Multi-channel support

Chatty works on 5 AI chatbot channels:

```
Channel Type
```

```
Online Store Primar
y
```
```
Email
```
```
Facebook Messenger
```
```
Instagram DM
```
```
WhatsApp
```
Additional contact methods you can show to customers: WhatsApp, Messenger, Phone Call, Email,
Instagram, Telegram, Skype, Line, Zalo, SMS, TikTok.

#### 5.7. Multi-language support

Chatty supports 44+ languages including: English, French, German, Spanish, Portuguese, Italian,
Dutch, Swedish, Danish, Norwegian, Finnish, Polish, Czech, Hungarian, Romanian, Bulgarian,
Croatian, Slovak, Slovenian, Estonian, Latvian, Lithuanian, Greek, Turkish, Arabic, Hebrew, Hindi,
Bengali, Urdu, Thai, Vietnamese, Indonesian, Malay, Japanese, Korean, Chinese (Simplified and
Traditional), and more.

```
Feature Details
```
```
Language
detection
```
```
Google Cloud Translation API, minimum 70% confidence threshold,
needs at least 6 characters
```
```
Auto-translation Widget text, FAQ answers, campaign messages, and order status
labels
```
```
Translation
caching
```
```
Cached in Redis for 30 days for fast performance
```

## 🚧Current limitations

```
Limitation Details
```
```
Conversation
memory
```
```
The bot keeps the last 10 messages as direct context. For older
messages, it uses tool history (last 3 turns of tool calls and results,
stored up to 10 turns). Query rewrite uses the last 20 messages for
context. Very long conversations beyond these limits may lose earlier
details.
```
```
Products per
reply
```
```
Up to 10 products at a time (hard limit)
```
```
Similar products Up to 5 when using "View similar"
```
```
Languages English and European languages work best, some may be slightly less
accurate
```
```
Understanding
images
```
```
Can recognize product type, color, and gender from photos, but not
perfect
```
```
Data freshness Products sync daily (auto) or manually, not in real-time
```
```
No self-learning Does not learn from conversations on its own
```
```
Product limits Depends on plan: Free=100, Basic=500, Pro=8,000, Plus=20,000
```
```
Page indexing Up to 10 web pages per day
```
```
Manual sync
limit
```
```
Up to 10 manual product syncs per day
```
## Others


### Performance benchmarks

**Chat-to-sales**

4.3%

```
Resolution rate
```
```
81.56%
```
```
Merchant join
rate
4.5%
```
```
Assisted rev
```
```
990k
```
```
Assisted order
```
```
4,955
```
###### AI That Sells

```
Metric Value What It Means
Chat-to-sale
conversion
```
```
4.3% Nearly 1 in 5 chats leads to a
purchase
Assisted revenue $29,586/month AI-generated sales from day one
Top use case Product
recommendations
```
```
370K questions — AI suggests,
shoppers buy
```
###### AI That Scales

```
Metric Value What It Means
Daily
conversations
```
```
6,100+ Replaces 3-5 full-time support
agents
Shoppers
served
```
```
542K in 90 days Handles Black Friday volume,
every day
Peak scaling 20 → 200+
chats/day
```
```
Grows with your store, no hiring
needed
24/7 coverage Always on Nights, weekends, holidays —
covered
```
###### Customers CSAT

```
Metric Value What It Means
```

###### Shopper

###### approval

###### 72.5% positive Shoppers rate AI responses

###### thumbs up

###### CSAT score 3.69/5 67% gave 4-5 stars

###### Shopify rating 4.9★ (1,735+

###### reviews)

###### #1 rated chat app on Shopify

###### Merchant

###### feedback

###### 51% positive 7x more praise than complaints

##### CSAT — Shopper Satisfaction After Chat

###### Metric Value

###### Average rating 3.69 / 5

###### 5-star ratings 56.83% — majority give top

###### score

###### 4-5 star

###### (satisfied)

###### 66.74%

###### Peak

###### satisfaction

###### 80.44% (Nov 2025)

###### Surveys

###### collected

###### 1,362 from 394 merchants

###### Rating Count Share

###### ★★★★★ 774 56.83

###### %

###### ★★★★ 135 9.91%

###### ★★★ 54 3.96%

###### ★★ 50 3.67%

###### ★ 349 25.62

###### %

##### Shopper Approval — Thumbs Up/Down on AI Answers

###### Metric Value

###### Approval rate 72.52%

###### Thumbs up 15,115

###### Thumbs down 5,728

###### Total rated

###### responses

###### 20,843 across 1,744 merchants


###### Trend 59.6% → 72.9% (improving over 6

###### months)

## Competitive advantages

###### The core thesis: Chatty wins on price, trust, simplicity, and AI-native economics — the

###### gaps to close are in analytics, AI actions, and sales conversion features (add-to-cart,

###### upsell,...)

```
Advantage vs.
Gorgias
```
```
vs. Tidio vs. Intercom vs. VanChat vs. Rep
AI
```
```
Lower price Yes Yes Yes Comparable Yes
```
```
Higher Shopify rating Yes (4.3) Yes
(4.7)
```
```
N/A Yes (4.8) Yes (4.8)
```
```
Sales-first positioning No No No Partial Partial
```
## Roadmap (plan 2026)

###### Q1-Q2

###### Upcoming big release


