Date: 2026-09-02 01:28
Summary: Reviewed all 18 topic leaf pages and added tool-specific guide sections plus a fourth FAQ across ten locales to improve Information Gain for indexing.

[question]
对所有的topic页进行review，根据主题和工具进行分析，增加足够的info gain，以促进google的index

[try to solve]
## Context
Site topic hubs live at `/topics/{id}` (18 leaves + hub). Each leaf already had intro, choose, limits, three FAQs, and primary/secondary tool grids—but **choose** copy was generic and did not map concrete slugs to user jobs. Catalog grew (e.g. CIDR cluster, prompt AI cluster, image platform specs) while hub editorial content stayed thin relative to SERP hub competitors.

## Process
1. Inventoried all 18 topics and primary/secondary tool membership from `tool-catalog.json`.
2. Compared existing copy in `scripts/site/i18n-topics.mjs` against per-topic SEO briefs (`text-compare`, `ai-prompt-template-builder`) and `tool-i18n-seo` IG expectations (rules, boundaries, cross-tool routing—not keyword lists).
3. Extended topic schema with `guide_title` / `guide_body` (scene→tool paragraphs) and `faq_q4` / `faq_a4`.
4. Added rendering in `content-topics.mjs` (`#topic-guide`, split `\n\n` paragraphs; FAQ now 4 items).
5. Authored English + Chinese guides from catalog analysis; filled es/ar/pt/id/fr/ja/ru/de in `build-topic-guides.mjs`; generated `i18n-topics-guides.mjs` and merged in `i18n.mjs`.

## Root cause / analysis
Topic pages risked **thin hub** classification: tool cards alone repeat catalog metadata; without editorial routing, Google sees a directory—not verifiable decision support. Info Gain for hubs should mirror tool pages: **which tool when**, workflow order (e.g. PDF merge→compress), and honest cross-topic boundaries (primary vs secondary listing).

## Solution
Each of 18 topics now includes:
- **Guide section**: 4–5 paragraphs mapping jobs to named tools (grouped for large topics like image-media and pdf-docs).
- **Fourth FAQ**: workflow or boundary question specific to that topic cluster.
- **Ten locales** via `topicGuideTranslations` (72 keys per lang).

Verified with `npm run build:site`—`_pages/{lang}/topics/*.html` contains `#topic-guide` and expanded FAQ; sitemap unchanged URL count, lastmod refreshed for changed pages.

## Notes / boundaries
- Source of truth for guide copy: `scripts/site/build-topic-guides.mjs` → run `node scripts/site/build-topic-guides.mjs` after edits.
- Hub pages still use `CollectionPage` + `ItemList` JSON-LD; no new schema types added.
- Indexing depends on crawl + people-first quality over time; this change adds crawlable unique prose, not rank guarantees.
- Future topic members: update `build-topic-guides.mjs` when primary tool sets shift materially.

[actions]
- `src/site/topics.ts`, `scripts/site/topics.mjs`, `scripts/site/components/content-topics.mjs`, `scripts/site/i18n.mjs`
- `scripts/site/build-topic-guides.mjs`, `scripts/site/i18n-topics-guides.mjs` (generated)
- `npm run build:site`
