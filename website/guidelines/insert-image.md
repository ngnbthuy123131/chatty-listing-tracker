# Guideline: Inserting Player Images into Blog Posts

> **Purpose:** Define rules for inserting product/player images into "Top X" blog posts.

---

## Image Location

All player images are stored in the blog post's media folder:

```
website/blog-posts/media/{blog-post-slug}/{player-slug}.webp
```

**Example:**
```
website/blog-posts/media/top-10-ai-chatbot-ecommerce-2026/chatty.webp
website/blog-posts/media/top-10-ai-chatbot-ecommerce-2026/tidio.webp
website/blog-posts/media/top-10-ai-chatbot-ecommerce-2026/gorgias.webp
```

---

## Insertion Rule

**Insert each player's image immediately after the first paragraph of their section.**

The first paragraph is the introductory text that follows the `### N\. Player Name — ...` heading. The image goes between this paragraph and the rest of the section content.

### Before

```markdown
### 1\. Chatty — Best AI Chatbot for Shopify Stores

Chatty is a Shopify-native AI chatbot and live chat platform built by Avada Commerce, trusted by over 20,000 merchants with a 4.9-star rating across 1,735+ reviews on the Shopify App Store — the highest combination of rating and review volume among established competitors.

What sets Chatty apart from the crowded field is its approach to pricing...
```

### After

```markdown
### 1\. Chatty — Best AI Chatbot for Shopify Stores

Chatty is a Shopify-native AI chatbot and live chat platform built by Avada Commerce, trusted by over 20,000 merchants with a 4.9-star rating across 1,735+ reviews on the Shopify App Store — the highest combination of rating and review volume among established competitors.

![Chatty](media/top-10-ai-chatbot-ecommerce-2026/chatty.webp)

What sets Chatty apart from the crowded field is its approach to pricing...
```

---

## Markdown Format

```markdown
![{Player Name}](media/{blog-post-slug}/{player-slug}.webp)
```

- **Alt text:** Use the player's display name (e.g., `Chatty`, `Rep AI`, `Manifest AI`)
- **Path:** Relative from the `blog-posts/` folder
- **Format:** `.webp` preferred

---

## Player Slug Mapping

| Player | Slug | Image File |
|--------|------|------------|
| Chatty | `chatty` | `chatty.webp` |
| Tidio | `tidio` | `tidio.webp` |
| Gorgias | `gorgias` | `gorgias.webp` |
| VanChat | `vanchat` | `vanchat.webp` |
| Rep AI | `rep-ai` | `rep-ai.webp` |
| Manifest AI | `manifest-ai` | `manifest-ai.webp` |
| ManyChat | `manychat` | `manychat.webp` |
| Intercom | `intercom` | `intercom.webp` |
| Ada | `ada` | `ada.webp` |
| Chatfuel | `chatfuel` | `chatfuel.webp` |

---

## Rules

1. **One image per player** — inserted after the first paragraph only
2. **No caption text** — the alt text is sufficient
3. **Blank line before and after** the image markdown
4. **Only insert if the image file exists** — skip players without uploaded images
5. **Never insert inside a paragraph** — always between paragraphs
