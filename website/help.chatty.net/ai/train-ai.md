# Train AI

> Source: https://help.chatty.net/ai/train-ai

## What is AI Training?

AI training involves teaching your AI assistant to comprehend your business and respond appropriately to customer inquiries. By supplying high-quality, relevant data sources, you establish an AI assistant that authentically reflects your brand's voice and expertise.

### Capabilities of a Well-Trained AI Assistant

- Address detailed questions regarding your offerings
- Clarify your establishment's operational policies
- Maintain consistent brand representation throughout interactions

## How to Train Your AI Assistant Effectively

### 1. Add High-Quality & Relevant Data Sources

**Planning your AI training content** is essential before adding data. Categorizing information improves training effectiveness and reveals gaps.

#### AI Training Content Template

| Content Category | What to Include | How to Add to Chatty |
|---|---|---|
| Product information | Details, specifications, variants, pricing | Enable product syncing and add FAQs per product |
| Store information | Business hours, contact details, locations | Activate store data syncing |
| Shipping & delivery | Methods, costs, delivery times | Enable FAQ syncing for shipping/delivery topics or add custom questions |
| Returns & refunds | Policy details, process steps, timeframes | Enable FAQ syncing for return/refund topics or add custom questions |
| Product-specific topics | Care instructions, usage guides, FAQs | Add to Custom data source → Add questions, or to Products → Add FAQs to specific product |
| Special scenarios | Seasonal info, event-based policies, geographic details | Go to Instructions → Add custom scenarios |

#### Best Practices for Each Data Source

**Products:**

1. **Product Description**
   - Incorporate detailed specifications
   - Reference compatible or complementary products
   - Enumerate key features and benefits

2. **Variant Organization**
   - Apply consistent naming conventions for variants
   - Furnish transparent variant descriptions

3. **Price Information**
   - Keep pricing current
   - Ensure consistent price formatting

**Market Information Note:** Product information synced across different Markets (varying pricing, region-specific availability, local variants) enables AI to:
- Answer region-specific details like pricing and availability
- Transmit product links featuring regional variations

**Limitations:**
- Cannot identify bestsellers or highly-rated items without collection data
- Limited seasonal item suggestion capacity without explicit smart recommendations
- Can recommend complementary products only if mentioned in product descriptions

### 2. Customize Your AI Assistant

After establishing data sources, tailor how your AI communicates with customers.

#### A. Set Basic Response Preferences

- **Name & avatar:** Determine how customers perceive your chatbot
- **Welcome message:** Personalize the initial message customers receive

#### B. Add Custom Instructions

Custom instructions shape AI behavior beyond basic settings, defining personality and specific role parameters.

**What to include for effective custom instructions:**

- **Role & Identity Definition**: Specify which role the AI embodies (sales associate, support specialist, product expert). Detail self-reference conventions and store terminology.
- **Knowledge Boundaries**: Clarify subject matter the AI should address. Establish protocols for handling out-of-scope questions.
- **Response Approach**: Establish response structure and formatting guidelines. Define desired response depth. Determine when to provide supplementary information.
- **Conversation Flow**: Instruction for handling multi-part inquiries. Clarifying question protocols. Purchase guidance strategies.
- **Language & Tone Parameters**: Specify vocabulary to employ or avoid. Establish formality level (professional vs. casual). Consider cultural sensitivities.

**Example 1: Furniture Store Customer Support**

> You are a knowledgeable furniture store customer support associate representing [Store Name]. When responding to customers:
>
> **ROLE:** Act as a helpful furniture expert who understands products, materials, and design styles. Use "I" for self-reference and "we" or "[Store Name]" for the store.
>
> **KNOWLEDGE:** Understand furniture collections, materials, dimensions, and pricing. When asked about stock status, direct customers to product pages or customer service.
>
> **APPROACH:** Maintain conversational yet professional tone. Include specific product details (dimensions, materials, colors). Suggest complementary items appropriately.
>
> **GUIDELINES:** Emphasize quality materials and craftsmanship. Reference 30-day return policy and 1-year warranty when applicable.
>
> **AVOID:** Don't assert definitive availability or delivery dates. Don't fabricate product specifications. Don't extensively discuss competitor products.

**Example 2: Clothing Store Sales Assistant**

> You are a knowledgeable and stylish sales assistant for [Store Name]. Your goal is providing excellent customer service while helping customers find perfect clothing items.
>
> **ROLE:** Act as a friendly, fashion-forward sales associate understanding clothing collections, styles, and trends.
>
> **STYLING GUIDANCE:** Offer styling advice and outfit combinations. Provide suggestions for different body types and occasions.
>
> **SIZING ASSISTANCE:** Provide clear sizing guidance. Ask clarifying questions about fit preferences when needed.
>
> **CONVERSION FOCUS:** Guide conversations toward purchase decisions without pressure. Highlight product benefits and material quality.

#### Tips for Writing Effective Custom Instructions

1. **Be specific and concrete** - Use clear examples rather than vague guidelines
2. **Structure instructions logically** - Organize by categories (knowledge, tone, approach)
3. **Define boundaries clearly** - Specify what the AI should NOT say or do
4. **Consider customer journey** - Include instructions for different stages
5. **Review and refine regularly** - Test instructions with various customer questions

#### C. AI Skills

Manage how AI handles conversations through AI shopping skills and other customer support capabilities.

#### D. Add Scenario Instructions

Scenario instructions train your AI to handle specific customer situations with targeted, relevant responses.

**Common scenarios to add:**
- Product recommendations
- Order returns and refunds
- Shipping inquiries
- Technical support issues
- Complaint handling
- Promotional offers

**How to Add a Scenario:**

1. **Name your scenario** - Enter a clear, descriptive name (e.g., "Product return request", "Shipping delays")
2. **Set keywords** - Enter keywords triggering this scenario. Include words or phrases customers commonly use plus variations and synonyms (e.g., "refund", "return", "money back", "send back")
3. **Write instructions** - Provide detailed guidance for AI to follow when triggered. Keep instructions under 1000 characters.
4. **Set scenario status** - Choose Active (currently in use) or Inactive (saved but not applied)
