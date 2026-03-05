# Chatty Shopify Listing Tracker

A live dashboard for tracking and optimizing Chatty's Shopify App Store listing — covering content changes, keyword rankings, competitor intelligence, and install attribution.

**Live dashboard:** https://ngnbthuy123131.github.io/chatty-listing-tracker/
**GitHub repo:** https://github.com/ngnbthuy123131/chatty-listing-tracker

---

## What This Tracks

| Area | What It Does |
|---|---|
| Listing content | Records every change to App Name, Subtitle, Features, Alt Texts, etc. with char counts |
| Keyword rankings | Daily organic rank on apps.shopify.com for 12 tracked keywords |
| Competitor intel | Weekly snapshot of 9 competitors' listings, detects changes |
| Install attribution | BigQuery — how many installs each keyword drove (last 7d / 30d) |
| Traffic (pending) | BigQuery — keyword traffic/page views (data pipeline in progress) |

---

## Dashboard Tabs

### Content
Two-panel view: current listing on the left, change history on the right. Click any date to see exactly what changed, with character counts and before/after content.

### Rankings
- Current organic rank per keyword (12 keywords)
- Ranking trend chart over time
- Chatty vs 9 competitors side-by-side
- **Keyword Install Attribution table** — organic installs per keyword from BigQuery (last 30d, 7d, trend vs prior 30d)

### Change Reports
One card per listing change. Each card shows:
- Which fields were updated
- Rank impact 7 days after the change (P0 keywords)
- Install impact — keyword installs before vs after the change date (BigQuery)

### Competitor Intel
- Live snapshots of 9 competitors: Tidio, Rep AI, Moosedesk, Zipchat, LiveChat, tawk.to, Gorgias, Vanchat, Reamaze
- Detects changes in tagline, description, features, pricing, rating, and Built for Shopify badge
- Side-by-side comparison table

### ASO Factors
Ranking algorithm weight breakdown with Chatty's current status on each factor (content signals, trust, growth). Includes next-action recommendations.

### Optimizer
Live content simulator. Edit any listing field and see:
- Keyword score signal impact (before vs after)
- Estimated rank impact per keyword
- Estimated install delta per keyword per month (based on CTR curve x actual install data from BigQuery)

---

## Tracked Keywords (12)

| Priority | Keywords |
|---|---|
| P0 (highest) | live chat, AI chatbot, chatbot, chat, inbox, livechat, ai chat |
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
Content history is stored directly in `index.html` inside the `history` array at the top of the `<script>` block. Each entry has:
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
To log a new change: add a new entry to the array, push `index.html` to GitHub.

### 2. Keyword Rankings (automated)
Scraped daily from `apps.shopify.com` search results using Playwright + Chromium.

- Uses `surface_intra_position` URL parameter to detect organic rank
- Separates organic (`surface_type=search`) from paid (`surface_type=search_ad`)
- Results stored in `ranking-log.json` (pushed to GitHub Pages)

### 3. Competitor Snapshots (automated)
Scraped weekly from each competitor's App Store page using Node.js `https`.

- Parses JSON-LD structured data + HTML regex
- Detects changes in: name, tagline, description, features, pricing, rating, review count, Built for Shopify
- Snapshots stored in `competitor-snapshots.json`

### 4. BigQuery — Install Data
- **Project:** `resonant-forge-446302-u5` (billing) / `avada-crm` (data)
- **Dataset:** `avada-crm.chatty`
- **Install table:** `chatty_daily_growth_metric_add_keyword_lv3`
  - 66K+ rows (Jan 2024 to present)
  - Key fields: `keyword`, `surface_type`, `install_date`, `install_check`, `customer_growth_segment`
  - Filter `surface_type = 'search'` for organic keyword installs
- **Traffic table:** `chatty_traffic_to_subs` (access granted, Chatty data pending)

---

## Automated Scripts

All scripts live in `scripts/` and run via OpenClaw cron.

| Script | Purpose | When to Run |
|---|---|---|
| `rank-check-daily.cjs` | Scrapes 12 keywords, detects rank changes, sends Slack alerts | Auto: daily 8pm Bangkok |
| `competitor-watch.cjs` | Scrapes 9 competitors, detects listing changes, sends Slack alerts | Auto: Sundays 8pm Bangkok |
| `bq-fetch-metrics.cjs` | Fetches keyword install data from BigQuery, writes `bq-metrics.json` | Manual or add to daily cron |
| `rank-tracker.cjs` | Manual one-off ranking check (no alerts, no push) | On-demand |

---

## Cron Jobs (OpenClaw)

| ID | Name | Schedule | What It Does |
|---|---|---|---|
| `bc64ba3b` | chatty-rank-tracker | Daily 8pm Bangkok | Rankings check + Slack alert on drops |
| `3b1c6ada` | chatty-competitor-watch | Sundays 8pm Bangkok | Competitor snapshot + change detection |
| `24b86d7a` | release-note-poller | Daily 9:05am Bangkok | Polls Slack for new release notes |

Manage crons: `openclaw cron list` / `openclaw cron pause <id>` / `openclaw cron resume <id>`

---

## Slack Alerts

All alerts go to **#chatty-super-bot** (`C0AJBNMS732`) in the Avada Group workspace.

**Rank alerts trigger when:**
- Chatty drops 2+ positions on a P0 keyword
- Chatty drops 4+ positions on any other keyword
- A competitor rises 3+ positions or enters the top 3

**Competitor alerts trigger when:**
- Any tracked field changes (tagline, description, features, pricing, rating, BfS badge)

---

## File Structure

```
chatty-listing-tracker/          (GitHub repo)
├── index.html                   Main dashboard (all JS/CSS inline)
├── ranking-log.json             Daily rank history (auto-updated by cron)
├── bq-metrics.json              BigQuery install metrics (run bq-fetch-metrics.cjs to refresh)
└── competitor-snapshots.json    Latest competitor snapshots (auto-updated by cron)

workspace/scripts/
├── rank-check-daily.cjs         Daily rank checker + alerter
├── rank-tracker.cjs             Manual rank check
├── competitor-watch.cjs         Competitor snapshot + change detector
├── bq-fetch-metrics.cjs         BigQuery metrics fetcher
└── slack-release-poller.js      Slack release note monitor
```

---

## How to Update the Dashboard

### Log a listing change
1. Open `chatty-listing-tracker.html` (local file)
2. Find the `history` array in the `<script>` block
3. Add a new entry (copy format from existing entries)
4. Push `index.html` to GitHub:
   ```
   node scripts/_push-tracker.cjs   # or push manually via GitHub
   ```

### Refresh BigQuery install data
```bash
node scripts/bq-fetch-metrics.cjs
# Then push bq-metrics.json to the GitHub repo
```

### Run a manual rank check
```bash
node scripts/rank-tracker.cjs
```

### Run a manual competitor snapshot
```bash
node scripts/competitor-watch.cjs
```

---

## Requirements

- **Node.js** v18+
- **Playwright + Chromium** — for rank scraping
  ```bash
  npm install playwright
  npx playwright install chromium
  ```
- **@google-cloud/bigquery** — for install data
  ```bash
  npm install @google-cloud/bigquery
  ```
- **BigQuery service account key** — `bigquery-key.json` in workspace root
  - Service account: `chatty-tracker-reader@resonant-forge-446302-u5.iam.gserviceaccount.com`
  - Needs: BigQuery Data Viewer on `avada-crm.chatty`, BigQuery Job User on `resonant-forge-446302-u5`
- **Slack token** — for alerts to `#chatty-super-bot`

---

## Alert Thresholds Reference

| Condition | Threshold |
|---|---|
| Chatty rank drop (P0 keyword) | 2+ positions |
| Chatty rank drop (other keyword) | 4+ positions |
| Competitor rank rise | 3+ positions |
| Competitor enters top 3 | any movement into #1, #2, or #3 |

---

*Maintained by Cleo (AI assistant). Questions: ask Carla (thuyntt@avadagroup.com).*
