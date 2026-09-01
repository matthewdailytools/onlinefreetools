Date: 2026-09-01 18:08
Summary: Registered site topic /topics/text-compare and moved five compare tools to primaryTopic text-compare with secondary back-links.

[question]
创建主题页（方案 2：五个工具的 primaryTopic 都改成 text-compare）

[try to solve]
- Added `text-compare` to `ToolTopic` / `TOOL_TOPIC_ORDER` / `TOOL_TOPIC_IDS` (after `dev-data`).
- Filled ten-locale topic leaf copy in `scripts/site/i18n-topics.mjs` (intro, choose, limits, FAQ×3) and short labels in `src/site/i18n/core/{lang}.ts` so tool-page breadcrumbs/nav resolve (scripts `i18n-topics` alone is not enough for prerendered tools).
- Catalog: all five tools `primaryTopic: "text-compare"`; four keep `secondaryTopics: ["dev-data"]`; Word compare keeps `["pdf-docs"]`.
- `npm run build:site` publishes `/topics/text-compare` (and lang variants) in sitemap/`_pages`, Primary tools = 5; secondary listings appear on `dev-data` / `pdf-docs`.
- Docs note: site topic page is `/topics/text-compare`; still no custom hub `/text-compare`.

[actions]
- `src/site/topics.ts`, `scripts/site/topics.mjs`, `scripts/tool-modules/merge-all.mjs`
- `scripts/site/i18n-topics.mjs`, `src/site/i18n/core/*.ts`
- `src/site/tool-catalog.d/{text-diff,compare-two-text-files-online,compare-two-word-documents-for-differences,json-diff-checker-online,excel-compare-files}.json`
- `docs/seo/keywords/text-compare/README.md`, `docs/seo/keywords/text-compare/2026-09-01-text-compare-topic.md`
- `npm run build:site`
