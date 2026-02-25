#!/usr/bin/env node

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import TurndownService from 'turndown';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

// ─── Config ──────────────────────────────────────────────────────────────────

const WP_URL = process.env.WP_URL?.replace(/\/$/, '');
const WP_USER = process.env.WP_USER;
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD;
const BLOG_DIR = path.resolve(process.cwd(), 'blog-posts');
const PER_PAGE = 100;

const DRY_RUN = process.argv.includes('--dry-run');

if (!WP_URL || !WP_USER || !WP_APP_PASSWORD) {
  console.error(
    'Missing credentials. Set WP_URL, WP_USER, WP_APP_PASSWORD in scripts/.env'
  );
  process.exit(1);
}

const AUTH_HEADER =
  'Basic ' + Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString('base64');

// ─── Turndown (HTML → Markdown) ─────────────────────────────────────────────

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

// ─── WordPress API helpers ───────────────────────────────────────────────────

async function wpFetch(endpoint) {
  const url = `${WP_URL}/wp-json/wp/v2${endpoint}`;
  const res = await fetch(url, {
    headers: {
      Authorization: AUTH_HEADER,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`WP API ${res.status} ${res.statusText}: ${body}`);
  }

  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
  const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);
  const data = await res.json();

  return { data, totalPages, total };
}

async function fetchAllPosts() {
  const allPosts = [];
  let page = 1;

  const { data: firstPage, totalPages, total } = await wpFetch(
    `/posts?per_page=${PER_PAGE}&page=1&status=publish,draft,pending,private&orderby=date&order=desc`
  );

  allPosts.push(...firstPage);
  console.log(`  Page 1/${totalPages} (${total} total posts)`);

  while (page < totalPages) {
    page++;
    const { data } = await wpFetch(
      `/posts?per_page=${PER_PAGE}&page=${page}&status=publish,draft,pending,private&orderby=date&order=desc`
    );
    allPosts.push(...data);
    console.log(`  Page ${page}/${totalPages}`);
  }

  return allPosts;
}

async function fetchTaxonomyMap(type) {
  const map = {};
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const { data, totalPages: tp } = await wpFetch(
      `/${type}?per_page=${PER_PAGE}&page=${page}`
    );
    totalPages = tp;
    for (const item of data) {
      map[item.id] = item.name;
    }
    page++;
  }

  return map;
}

// ─── Build markdown with frontmatter ─────────────────────────────────────────

function buildMarkdown(post, categoryMap, tagMap) {
  const title = post.title.rendered.replace(/"/g, '\\"');
  const description = post.excerpt.rendered
    ? turndown.turndown(post.excerpt.rendered).replace(/"/g, '\\"').trim()
    : '';
  const date = post.date.split('T')[0];
  const status = post.status;

  const categories = (post.categories || [])
    .map((id) => categoryMap[id])
    .filter(Boolean);
  const tags = (post.tags || [])
    .map((id) => tagMap[id])
    .filter(Boolean);

  const content = turndown.turndown(post.content.rendered);

  let frontmatter = `---\n`;
  frontmatter += `title: "${title}"\n`;
  if (description) frontmatter += `description: "${description}"\n`;
  frontmatter += `date: ${date}\n`;
  frontmatter += `status: ${status}\n`;
  frontmatter += `wp_id: ${post.id}\n`;
  if (categories.length) {
    frontmatter += `category: "${categories[0]}"\n`;
  }
  if (tags.length) {
    frontmatter += `tags: [${tags.map((t) => `"${t}"`).join(', ')}]\n`;
  }
  frontmatter += `---\n`;

  return `${frontmatter}\n${content}\n`;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Pulling posts from ${WP_URL}`);
  if (DRY_RUN) console.log('DRY RUN MODE — no files will be written\n');

  // Fetch taxonomy maps for resolving IDs → names
  console.log('Fetching categories...');
  const categoryMap = await fetchTaxonomyMap('categories');
  console.log(`  ${Object.keys(categoryMap).length} categories`);

  console.log('Fetching tags...');
  const tagMap = await fetchTaxonomyMap('tags');
  console.log(`  ${Object.keys(tagMap).length} tags`);

  // Fetch all posts
  console.log('Fetching posts...');
  const posts = await fetchAllPosts();

  if (posts.length === 0) {
    console.log('No posts found.');
    return;
  }

  // Ensure output directory exists
  if (!DRY_RUN) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const post of posts) {
    const slug = post.slug;
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const markdown = buildMarkdown(post, categoryMap, tagMap);

    if (DRY_RUN) {
      const exists = fs.existsSync(filePath);
      console.log(
        `  [DRY RUN] ${slug}.md — ${exists ? 'would update' : 'would create'} (${post.status})`
      );
      continue;
    }

    const exists = fs.existsSync(filePath);
    fs.writeFileSync(filePath, markdown, 'utf-8');

    if (exists) {
      updated++;
      console.log(`  Updated: ${slug}.md`);
    } else {
      created++;
      console.log(`  Created: ${slug}.md`);
    }
  }

  if (!DRY_RUN) {
    console.log(
      `\nDone! ${created} created, ${updated} updated, ${skipped} skipped.`
    );
  } else {
    console.log(`\n[DRY RUN] ${posts.length} posts would be synced.`);
  }
}

main().catch((err) => {
  console.error('Pull failed:', err.message);
  process.exit(1);
});
