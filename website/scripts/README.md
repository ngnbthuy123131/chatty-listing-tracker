# Scripts

WordPress sync scripts for managing blog posts between this repo and [chatty.net](https://chatty.net).

## Setup

1. Install dependencies (from project root):

   ```bash
   npm install
   ```

2. Create `website/scripts/.env` with your WordPress credentials:

   ```
   WP_URL=https://chatty.net
   WP_USER=your-wordpress-username
   WP_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
   ```

   To generate an Application Password: WordPress Admin > Users > Profile > Application Passwords.

## Scripts

### `pull-from-wp.mjs` — Pull posts from WordPress

Downloads all posts from chatty.net and saves them as markdown files in `website/blog-posts/`.

```bash
# Preview what would be downloaded
npm run pull:dry

# Pull all posts
npm run pull
```

Each file gets YAML frontmatter with `title`, `date`, `status`, `wp_id`, `category`, and `tags`. HTML content is converted to markdown automatically.

### `sync-to-wp.mjs` — Push posts to WordPress

Pushes markdown files from `website/blog-posts/` to chatty.net as **draft** posts.

```bash
# Preview what would be pushed
npm run sync:dry

# Push all posts
npm run sync

# Push a specific file
node website/scripts/sync-to-wp.mjs website/blog-posts/my-post.md
```

Posts are matched by **slug** (derived from filename). Running the script multiple times updates existing posts rather than creating duplicates.

## How it works

| Direction | Script | Matching | Post status |
|-----------|--------|----------|-------------|
| WP --> local | `pull-from-wp.mjs` | Fetches all posts via REST API | Preserves original status in frontmatter |
| Local --> WP | `sync-to-wp.mjs` | Matches by slug (filename) | Always creates as **draft** |

Both scripts use the [WordPress REST API](https://developer.wordpress.org/rest-api/) with Basic Auth (Application Passwords).
