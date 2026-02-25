#!/usr/bin/env node

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });
import matter from 'gray-matter';
import { marked } from 'marked';

// ─── Config ──────────────────────────────────────────────────────────────────

const WP_URL = process.env.WP_URL?.replace(/\/$/, '');
const WP_USER = process.env.WP_USER;
const WP_APP_PASSWORD = process.env.WP_APP_PASSWORD;
const BLOG_DIR = path.resolve(process.cwd(), 'blog-posts');

const DRY_RUN = process.argv.includes('--dry-run');
const SPECIFIC_FILE = process.argv.find(
  (a) => a.endsWith('.md') && !a.startsWith('--')
);

if (!WP_URL || !WP_USER || !WP_APP_PASSWORD) {
  console.error(
    'Missing credentials. Set WP_URL, WP_USER, WP_APP_PASSWORD in scripts/.env'
  );
  process.exit(1);
}

const AUTH_HEADER =
  'Basic ' + Buffer.from(`${WP_USER}:${WP_APP_PASSWORD}`).toString('base64');

// ─── WordPress API helpers ───────────────────────────────────────────────────

async function wpFetch(endpoint, options = {}) {
  const url = `${WP_URL}/wp-json/wp/v2${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH_HEADER,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`WP API ${res.status} ${res.statusText}: ${body}`);
  }

  return res.json();
}

async function findPostBySlug(slug) {
  // Search in all statuses (draft, publish, etc.)
  const posts = await wpFetch(
    `/posts?slug=${encodeURIComponent(slug)}&status=any`
  );
  return posts.length > 0 ? posts[0] : null;
}

async function findOrCreateCategory(name) {
  const cats = await wpFetch(
    `/categories?search=${encodeURIComponent(name)}&per_page=100`
  );
  const match = cats.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
  if (match) return match.id;

  const created = await wpFetch('/categories', {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
  return created.id;
}

async function findOrCreateTags(tagNames) {
  const tagIds = [];
  for (const name of tagNames) {
    const tags = await wpFetch(
      `/tags?search=${encodeURIComponent(name)}&per_page=100`
    );
    const match = tags.find(
      (t) => t.name.toLowerCase() === name.toLowerCase()
    );
    if (match) {
      tagIds.push(match.id);
    } else {
      const created = await wpFetch('/tags', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      tagIds.push(created.id);
    }
  }
  return tagIds;
}

// ─── Markdown processing ─────────────────────────────────────────────────────

function slugFromFilename(filePath) {
  return path.basename(filePath, '.md');
}

function parsePost(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(raw);
  const html = marked(content);
  const slug = slugFromFilename(filePath);

  return { frontmatter, html, slug, filePath };
}

// ─── Sync logic ──────────────────────────────────────────────────────────────

async function syncPost({ frontmatter, html, slug, filePath }) {
  const fileName = path.basename(filePath);

  console.log(`\n--- ${fileName} ---`);

  // Resolve category & tags
  let categoryIds = [];
  let tagIds = [];

  if (frontmatter.category) {
    if (DRY_RUN) {
      console.log(`  Category: "${frontmatter.category}" (would resolve)`);
    } else {
      const catId = await findOrCreateCategory(frontmatter.category);
      categoryIds = [catId];
      console.log(`  Category: "${frontmatter.category}" → ID ${catId}`);
    }
  }

  if (frontmatter.tags?.length) {
    if (DRY_RUN) {
      console.log(
        `  Tags: ${frontmatter.tags.map((t) => `"${t}"`).join(', ')} (would resolve)`
      );
    } else {
      tagIds = await findOrCreateTags(frontmatter.tags);
      console.log(
        `  Tags: ${frontmatter.tags.map((t, i) => `"${t}" → ${tagIds[i]}`).join(', ')}`
      );
    }
  }

  const postData = {
    title: frontmatter.title || slug,
    slug,
    content: html,
    status: 'draft',
    date: frontmatter.date
      ? new Date(frontmatter.date).toISOString()
      : undefined,
    excerpt: frontmatter.description || '',
    categories: categoryIds.length ? categoryIds : undefined,
    tags: tagIds.length ? tagIds : undefined,
  };

  if (DRY_RUN) {
    console.log(`  Slug: ${slug}`);
    console.log(`  Title: ${postData.title}`);
    console.log(`  Status: draft`);
    console.log(`  HTML length: ${html.length} chars`);
    console.log('  [DRY RUN — no changes made]');
    return;
  }

  // Check if post already exists
  const existing = await findPostBySlug(slug);

  if (existing) {
    console.log(`  Found existing post (ID: ${existing.id}) — updating...`);
    await wpFetch(`/posts/${existing.id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
    console.log(`  Updated: ${WP_URL}/?p=${existing.id}`);
  } else {
    console.log('  No existing post found — creating...');
    const created = await wpFetch('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
    console.log(`  Created: ${WP_URL}/?p=${created.id} (ID: ${created.id})`);
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`Syncing to ${WP_URL}`);
  if (DRY_RUN) console.log('DRY RUN MODE — no changes will be made\n');

  let files;
  if (SPECIFIC_FILE) {
    const resolved = path.resolve(SPECIFIC_FILE);
    if (!fs.existsSync(resolved)) {
      console.error(`File not found: ${resolved}`);
      process.exit(1);
    }
    files = [resolved];
  } else {
    if (!fs.existsSync(BLOG_DIR)) {
      console.error(`Blog directory not found: ${BLOG_DIR}`);
      process.exit(1);
    }
    files = fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.md'))
      .map((f) => path.join(BLOG_DIR, f));
  }

  if (files.length === 0) {
    console.log('No markdown files found to sync.');
    return;
  }

  console.log(`Found ${files.length} post(s) to sync.`);

  for (const file of files) {
    const post = parsePost(file);
    await syncPost(post);
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error('Sync failed:', err.message);
  process.exit(1);
});
