# Chatty Release Notes Documentation

Complete release history and feature documentation for Chatty AI Chatbot & Live Chat.

## Overview

- **Total Releases:** 326
- **Date Range:** November 16, 2023 to February 6, 2026
- **Time Span:** 27 months
- **Top Category:** AI Assistant (58.3% of all releases)

## Files Generated

### 1. QUICK_REFERENCE.md (START HERE)
**Best for:** Quick overview of latest features and key milestones

Contains:
- Latest 20 releases from 2026
- Top 10 AI Assistant features
- Top 10 Live Chat features
- All integration features
- Key product milestones

### 2. SUMMARY_REPORT.md
**Best for:** Executive summary and strategic insights

Contains:
- Release timeline breakdown
- Feature category distribution
- Key insights and trends
- Major feature areas overview

### 3. RELEASE_NOTES.md (265 KB)
**Best for:** Complete chronological changelog

Contains:
- All 326 releases in reverse chronological order (newest first)
- Grouped by month/year
- Full details: date, description, task URL, changelog URL

### 4. FEATURE_LIST.md (212 KB)
**Best for:** Features organized by category

Contains:
- Features grouped into 12 categories
- Table of contents with category counts
- Full feature details within each category

Categories:
- AI Assistant (190 features)
- Live Chat / Inbox (48 features)
- Widget / Chatbox (24 features)
- FAQ Page (13 features)
- Integrations (7 features)
- Analytics / Dashboard (4 features)
- Settings (4 features)
- Translations (3 features)
- Notifications (2 features)
- Onboarding (1 feature)
- Design / UI/UX (5 features)
- Other (25 features)

### 5. releases_summary.csv (131 KB)
**Best for:** Spreadsheet analysis and filtering

Columns:
- Index number
- Time
- Feature Name
- Description (truncated to 200 chars)
- Task URL
- Changelog URL

### 6. releases_combined.json (280 KB)
**Best for:** Programmatic access and custom processing

Structure:
```json
[
  {
    "time": "February 6, 2026",
    "feature_name": "Update product list view",
    "description": "Full description...",
    "task": "https://www.notion.so/...",
    "changelog": "https://..."
  }
]
```

### 7. release_statistics.json (13 KB)
**Best for:** Quick stats and metrics

Contains:
- Overview statistics
- Category breakdown with counts
- Monthly release breakdown
- Recent features (2026)
- Top features by category

## Feature Category Breakdown

| Category | Count | Percentage |
|----------|-------|------------|
| AI Assistant | 190 | 58.3% |
| Live Chat / Inbox | 48 | 14.7% |
| Widget / Chatbox | 24 | 7.4% |
| Other | 25 | 7.7% |
| FAQ Page | 13 | 4.0% |
| Integrations | 7 | 2.1% |
| Design / UI/UX | 5 | 1.5% |
| Analytics / Dashboard | 4 | 1.2% |
| Settings | 4 | 1.2% |
| Translations | 3 | 0.9% |
| Notifications | 2 | 0.6% |
| Onboarding | 1 | 0.3% |

## Key Insights

1. **AI-First Product Strategy**
   - 58.3% of all releases focus on AI Assistant capabilities
   - Strong emphasis on AI training data, chatbot flows, and intelligent recommendations

2. **Consistent Innovation**
   - Average of ~12 releases per month over 27 months
   - Sustained velocity from Nov 2023 through Feb 2026

3. **Recent Advanced Features (2026)**
   - Zendesk integration for ticket management
   - Conversation attributes for custom metadata
   - Related conversations for context
   - Enhanced product list management
   - Customer segment-based discount filtering

4. **Strong Live Chat Foundation**
   - 48 features dedicated to inbox and conversation management
   - Focus on agent productivity and customer context

5. **Integration Ecosystem**
   - Zendesk, Shopify, Email, Messenger, Instagram
   - Growing third-party platform connectivity

## Most Recent Releases (February 2026)

1. **Update product list view** - Enhanced AI training data management
2. **Improve FAQs translation** - Streamlined translation workflow
3. **Zendesk integration** - Auto-create tickets with conversation transcripts
4. **AI Test suggestions** - Common topic-based test questions
5. **Related conversations** - Customer conversation history in context
6. **Auto-create FAQs by language** - Language-aware onboarding
7. **Discount eligibility filtering** - Customer segment-based filtering
8. **Conversation attributes** - Custom metadata for conversations
9. **Additional AI charge display** - Improved billing transparency
10. **Quick link insertion** - Paste links directly in messages

## Usage Recommendations

**For Product Managers:**
- Start with QUICK_REFERENCE.md for latest features
- Use SUMMARY_REPORT.md for strategic insights
- Reference FEATURE_LIST.md for capability mapping

**For Developers:**
- Use releases_combined.json for programmatic access
- Reference RELEASE_NOTES.md for implementation details
- Check release_statistics.json for metrics

**For Marketing/Sales:**
- Use QUICK_REFERENCE.md for recent highlights
- Reference FEATURE_LIST.md by category for positioning
- Check release_statistics.json for growth metrics

**For Data Analysis:**
- Import releases_summary.csv into Excel/Google Sheets
- Use releases_combined.json for custom queries
- Reference release_statistics.json for quick stats

## Source Files

- `Release manager 09e6a96a941849dc8d1bd23f1e0ba3f3_all.csv` (original, older format)
- `Release manager 09e6a96a941849dc8d1bd23f1e0ba3f3.csv` (original, newer format)

Both source files contain 326 releases. The generated files merge and deduplicate from both sources.

## Contact

For questions about this documentation or the release data:
- **Owner:** Sam Nguyen (CEO, Avada Group)
- **Product:** Chatty AI Chatbot & Live Chat
- **Repository:** chatty-research-data

---

Last Updated: February 9, 2026
