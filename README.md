# Chatty Shopify Listing Tracker

A live dashboard for tracking and optimizing Chatty's Shopify App Store listing — covering content changes, keyword rankings, competitor intelligence, ads performance, and install attribution.

**Live dashboard:** https://ngnbthuy123131.github.io/chatty-listing-tracker/
**GitHub repo:** https://github.com/ngnbthuy123131/chatty-listing-tracker

---

## Dashboard Tabs (10 tabs)

### 1. Content
Two-panel view: current listing on the left, change history on the right. Click any date to see exactly what changed, with character counts and before/after content.

### 2. Rankings
- Current organic rank per keyword (12 keywords)
- Ranking trend chart over time
- Chatty vs 9 competitors side-by-side
- **Keyword Install Attribution table** — organic installs per keyword from BigQuery (last 30d, 7d, trend vs prior 30d)
- Traffic CVR per keyword (visits to installs, from BigQuery)

### 3. Change Reports
One card per listing change. Each card shows:
- Which fields were updated
- Rank impact 7 days after the change (P0 keywords)
- Install impact — keyword installs before vs after the change date (BigQuery)

### 4. Competitor Intel
- Live snapshots of 9 competitors: Tidio, Rep AI, Moosedesk, Zipchat, LiveChat, tawk.to, Gorgias, Vanchat, Reamaze
- Detects changes in: tagline, description, features, pricing, rating, and Built for Shopify badge
- Side-by-side comparison table

### 5. ASO Factors
Ranking algorithm weight breakdown with Chatty's current status on each factor (content signals, trust, growth). Includes next-action recommendations.

### 6. Ads Overview
6-month historical view (Sep 2025 to Feb 2026) across 4 ad campaigns:
- Spend, installs, and CPI per campaign per month
- Best/worst months at a glance
- Campaign performance bar charts

### 7. Keywords Intel
Cross-reference table combining organic rank + ad impressions + spend signal:
- Signal legend: Stop bidding / Organic wins / Sweet spot / Opportunity / High opp / Not ranking
- Identifies where to bid harder, where to stop wasting budget, and where Chatty has gaps

### 8. Ads Report
Keyword-level ad performance table (6-month totals):
- Impressions, clicks, spend, installs, CPI per keyword
- Sorted by spend descending
- Quick action labels per keyword

### 9. KW Advisor
Enter any keyword and get a full strategy report on the spot:
- **Organic rank** — from daily scraper
- **Impressions** — search volume proxy from 6-month ad data
- **Ad spend + CPI** — historical 6-month performance
- **Traffic CVR** — page visits to installs (BigQuery)
- **Opportunity score 1–10** — rules-based across all signals
- **Ads recommendation** — stop / scale / probe, based on rank + spend
- **Content gaps** — checks if keyword is in title, subtitle, intro
- **Ask Cleo** button — copies a pre-filled summary to clipboard; paste in Telegram for deeper strategy

### 10. Optimizer
Live content simulator. Edit any listing field and see estimated rank + install impact per keyword.

---

## Tracked Keywords (12)

| Priority | Keywords |
|---|---|
| P0 (critical) | live chat, AI chatbot, chatbot, chat, inbox, livechat, ai chat |
| Standard | help center, FAQ, WhatsApp, helpdesk, customer support |

---

## Tracked Competitors (9)

| Name | App Store Handle |
|---|---|
| Tidio | tidio-chat |
| Rep AI | rep-ai-sales-associate |
| Moosedesk | moosedesk |
| Zipchat | zipchat |
| LiveChat | livechat |
| tawk.to | tawk-to |
| Gorgias | helpdesk |
| Vanchat | vanchat |
| Reamaze | reamaze |

---

## Data Sources

### 1. Listing Content (manual)
Content history is stored in `index.html` inside the `history` array at the top of the `<script>` block. Each entry:
```js
{
  id: 'YYYY-MM-DD',
  date: 'Month DD, YYYY',
  proposed: false,       // true = not yet applied
  changes: [
    { field: 'App Card Subtitle', content: '...', chars: 62 }
  ]
}
```
To log a new change: add an entry, push `index.html` to GitHub.

### 2. Keyword Rankings (automated)
Scraped daily from `apps.shopify.com` search results using Playwright + Chromium.
- Uses `surface_intra_position` to detect organic rank
- Separates organic (`surface_type=search`) from paid (`surface_type=search_ad`)
- Results stored in `ranking-log.json`

### 3. Competitor Snapshots (automated)
Scraped weekly using Node.js `https`.
- Parses JSON-LD structured data + HTML regex
- Detects changes in: name, tagline, description, features, pricing, rating, review count, Built for Shopify badge
- Stored in `competitor-snapshots.json`

### 4. BigQuery — Install + Traffic Data
- **Project:** `resonant-forge-446302-u5` / **Dataset:** `avada-crm.chatty`
- **Install table:** `chatty_daily_growth_metric_add_keyword_lv3` — 66K+ rows, Jan 2024 to present
- **Traffic table:** `chatty_traffic_to_subs` — 234K+ rows, visits by keyword
- Fetched by `scripts/bq-fetch-metrics.cjs`, output to `bq-metrics.json`

### 5. Ads History (manual CSV export)
- Exported from Shopify Partner Dashboard (Active campaigns only)
- 25 CSV files covering Sep 2025 to Feb 2026
- Processed by `chatty-ads-dashboard/process-data.cjs` into `ads-data/history.json`
- Embedded in the dashboard at build time

---

## Automated Scripts

| Script | Purpose | Schedule |
|---|---|---|
| `scripts/rank-check-daily.cjs` | Scrapes 12 keywords, detects rank changes, sends Slack alerts | Daily 8pm Bangkok |
| `scripts/competitor-watch.cjs` | Scrapes 9 competitors, detects listing changes, sends Slack alerts | Sundays 8pm Bangkok |
| `scripts/bq-fetch-metrics.cjs` | Fetches install + traffic data from BigQuery | Manual (refresh as needed) |
| `scripts/rank-tracker.cjs` | Manual one-off ranking check, no alerts | On-demand |

---

## Active Cron Jobs (OpenClaw)

| ID | Name | Schedule | What It Does |
|---|---|---|---|
| `bc64ba3b` | chatty-rank-tracker | Daily 8pm Bangkok | Rankings check + Slack alert on drops |
| `3b1c6ada` | chatty-competitor-watch | Sundays 8pm Bangkok | Competitor snapshot + change detection |
| `24b86d7a` | release-note-poller | Daily 9:05am Bangkok | Polls Slack for new release notes |

Manage: `openclaw cron list` / `openclaw cron pause <id>` / `openclaw cron resume <id>`

---

## Slack Alerts

Rank + competitor alerts go to **#chatty-super-bot** (`C0AJBNMS732`).
Ads reports go to **Carla's DM** (`U06G6NV1WH0`).

| Alert Type | Trigger |
|---|---|
| Rank drop (P0 keyword) | Chatty drops 2+ positions |
| Rank drop (other keyword) | Chatty drops 4+ positions |
| Competitor rank rise | 3+ positions, or enters top 3 |
| Competitor listing change | Any tracked field changes |

---

## File Structure

```
chatty-listing-tracker/          (GitHub repo — GitHub Pages root)
+-- index.html                   Main dashboard (all JS/CSS inline, single file)
+-- ranking-log.json             Daily rank history (auto-updated by cron)
+-- bq-metrics.json              BigQuery install + traffic metrics
+-- competitor-snapshots.json    Latest competitor snapshots (auto-updated by cron)

workspace/chatty-ads-dashboard/
+-- ads-data/history.json        Processed 6-month ads history (all campaigns + keywords)
+-- process-data.cjs             Converts raw CSVs to history.json
+-- csv-raw/                     25 raw CSV exports from Shopify Partner Dashboard

workspace/scripts/
+-- rank-check-daily.cjs         Daily rank checker + Slack alerter
+-- rank-tracker.cjs             Manual rank check
+-- competitor-watch.cjs         Competitor snapshot + change detector
+-- bq-fetch-metrics.cjs         BigQuery metrics fetcher
+-- slack-release-poller.js      Slack release note monitor
```

---

## How to Update the Dashboard

### Log a listing change
1. Open `chatty-listing-tracker.html` locally
2. Find the `history` array in the `<script>` block
3. Add a new entry (copy format from existing entries)
4. Push via GitHub API or `scripts/_push-tracker.cjs`

### Refresh BigQuery data
```bash
node scripts/bq-fetch-metrics.cjs
# Push bq-metrics.json to repo
```

### Refresh ads data (new CSVs)
```bash
# Export CSVs from Shopify Partner Dashboard (Active campaigns only)
# Place in chatty-ads-dashboard/csv-raw/
node chatty-ads-dashboard/process-data.cjs
node rebuild-final.cjs   # Rebuilds index.html with new data
```

### Manual rank check
```bash
node scripts/rank-tracker.cjs
```

---

## Requirements

- **Node.js** v18+
- **Playwright + Chromium** — for rank scraping
  ```bash
  npm install playwright
  npx playwright install chromium
  ```
- **@google-cloud/bigquery** — for install + traffic data
  ```bash
  npm install @google-cloud/bigquery
  ```
- **BigQuery service account key** at `bigquery-key.json` in workspace root
  - SA: `chatty-tracker-reader@resonant-forge-446302-u5.iam.gserviceaccount.com`
  - Needs: BigQuery Data Viewer on `avada-crm.chatty`, BigQuery Job User on `resonant-forge-446302-u5`
- **Slack token** for alerts

---

## Alert Thresholds

| Condition | Threshold |
|---|---|
| Chatty rank drop (P0 keyword) | 2+ positions |
| Chatty rank drop (other keyword) | 4+ positions |
| Competitor rank rise | 3+ positions |
| Competitor enters top 3 | Any movement into #1, #2, or #3 |

---

*Maintained by Cleo (AI assistant). Questions: Carla (thuyntt@avadagroup.com)*
