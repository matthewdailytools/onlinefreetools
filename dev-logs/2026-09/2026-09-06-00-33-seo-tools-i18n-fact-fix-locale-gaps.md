Date: 2026-09-06 00:33
Summary: Filled remaining ja/ru/ar SEO fact-correction gaps for meta-serp, meta-tag, chatgpt; sitemap ja/ru/ar already aligned; skipped complete OG/hreflang sets.
Visibility: project

[question]
补齐 SEO 类工具事实修正的尚未同步语种（只补缺口，不覆盖已正确文件）。

[try to solve]
## Context
English SEO fact corrections were done; several locales already synced by other agents. Gap check used `git status` / `git diff --stat`.

## Process
1. Confirmed open-graph-preview and hreflang-generator already had all ten locales (including ja/ru/ar) with correct semantics → skipped.
2. Confirmed sitemap-xml-generator ja/ru/ar already carried discovery/lastmod-accuracy wording → no overwrite.
3. Patched meta-serp-preview, meta-tag-generator, chatgpt-export-to-markdown for ja/ru/ar only.
4. Acceptance `rg` for banned English remnants → CLEAN.

## Solution
- meta-serp: `tool_serp_faq_q3` / `tool_serp_faq_a3` — no Google tool previews final text snippet; URL Inspection / Rich Results do not; Google may rewrite titles.
- meta-tag: `tool_meta_description` — snippet shaping + canonical picks URL among duplicates (no “Google card / splits signals”).
- chatgpt: `tool_chatgpt_export_to_markdown_faq_a3` — same converter parses Claude `chat_messages`; removed “second URL”.
- chatgpt follow-up: `how_item_4` for ja/ru/ar — replaced first-paint / already-ran wording with an actionable “Load sample” click.

## Notes / boundaries
de/fr/id for meta-serp / meta-tag / chatgpt were already modified before this pass; not re-edited. sitemap ja/ru/ar left as already-aligned discovery + lastmod-consistency copy.

[actions]
- Updated `src/site/i18n/tools/meta-serp-preview/{ja,ru,ar}.ts`
- Updated `src/site/i18n/tools/meta-tag-generator/{ja,ru,ar}.ts`
- Updated `src/site/i18n/tools/chatgpt-export-to-markdown/{ja,ru,ar}.ts` (faq_a3 + how_item_4)
