# Data Sources

> Source: https://help.chatty.net/ai/data-sources

## Availability

This feature is accessible to all users.

## Purpose

The platform enables training AI systems on proprietary business information. By integrating custom data sources, organizations can develop AI assistants with expertise in their specific offerings and operational procedures.

## Data Source Categories

### Store Data (Auto-Synced)

Information automatically synchronized from existing Shopify infrastructure:
- Product details (descriptions, variants, pricing, stock status)
- Discount information created within Shopify
- Market configurations (regional settings, currency conversion rates)
- FAQ sections already present in the platform

### Custom Data Sources (Manual)

- Question-and-answer pairs
- Website URLs
- Document files

## Product Information Synchronization

### Synced Elements

- Item names, written content, visual assets, producer identifications, classifications
- Variant options (colors, dimensions, design variations)
- Cost structures and comparative pricing
- Technical attributes and distinguishing characteristics
- Product groupings
- Quantity availability
- Custom field data

Updates occur automatically at 12:00 AM PST each day.

### Metafield Support Limitations

Nearly all Shopify metafield classifications are supported, with these exceptions:

**Unsupported Reference Types:**
- collection_reference, customer_reference, file_reference, metaobject_reference, mixed_reference, page_reference, product_reference, product_taxonomy_value_reference, variant_reference

**Other Unsupported Types:**
- Hyperlink formats
- Web addresses

## Auto-Synced Shopify Pages

Upon AI activation, the following pages synchronize automatically:
- Shipping information
- Return procedures
- Privacy information
- Legal terms
- Frequently asked questions
- Support contact details
- Company background

If synchronization fails, navigate to Data sources and select "Sync store pages" or reactivate the AI feature.

## Implementation Process

### Step 1: Access AI Assistant
Navigate to the AI assistant section within your account.

### Step 2: Activate Store Data Synchronization
Enable automatic syncing for product inventories, promotional offers, regional configurations, and support materials.

### Step 3: Incorporate Custom Data

Three options are available:
- **Question-Based Content:** Submit individual or batch question entries
- **URL-Based Content:** Include website links for scraping
- **File-Based Content:** Upload documents (.JSON, .TXT, .PDF, .CSV) up to 2MB each. Note: image-heavy PDFs and table-formatted content lack support currently.

### Step 4: Evaluation
Proceed to testing functionality to assess assistant performance.

**Important:** Even without AI activation, you can evaluate assistant capabilities using added information.

### Step 5: Ongoing Modifications
Update, revise, or eliminate data sources as needed.

## Data Source Management

### Bulk Operations

Access "Data sources," select a specific category to view complete listings.

**Available Actions:** Activate, deactivate, or remove multiple sources simultaneously.

### FAQs Management
Support materials reside in the dedicated FAQ section. All entries automatically integrate into training processes.

### Product Management

After initial synchronization:

1. Navigate to Products section
2. Access product listings
3. Toggle each item between "Enabled/Disabled" to control inclusion in training

**Restrictions:** Only in-stock, published items are compatible. Subscription-based products are incompatible.

**Product-Specific FAQs:**

1. Navigate to Products section
2. Access product listings
3. Select "Add FAQs" or "Manage FAQs" to attach specialized guidance

### Discount Management

All promotional offers (both active and inactive) automatically integrate. To refresh listings, click "Sync now."

### Smart Recommendations

Manage promoted item suggestions across four pre-built categories:

1. **Best Seller:** Responds to popularity inquiries
2. **New Arrival:** Addresses new product questions
3. **Sales Promotion:** Suggests discounted items
4. **Special Occasions:** Recommends gift-appropriate selections

**Intelligent Auto-Syncing:**

By default, "Bestseller" and "New Arrival" implement:
- Automatic ranking of top 20 items by sales volume (previous 30-day window)
- Daily list refreshment

**Hybrid Approach:** Combine automated selection with personal curation by:
- Activating intelligent syncing
- Manually adding or removing items (maximum 20 per collection)

### Question Management

Operations available: Deletion, editing, status modification (Active/Inactive).

**Export Capability:** Download all questions or active-only selections as CSV format.

### URL Management

Available actions: Editing, status adjustment (Active/Inactive), content refresh.

When content on a linked page changes, select "Resync" to capture current versions.

### File Management

Operations: Editing and status modification (Active/Inactive) for each document.
