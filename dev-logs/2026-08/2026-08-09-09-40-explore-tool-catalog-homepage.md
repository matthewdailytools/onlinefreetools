Date: 2026-08-09 09:40
Summary: Explored tool-catalog schema, homepage grouping, routing, and listing SEO rules.

[question]
Explore /Users/xuli/vscodeai/onlinefreetools for tool categorization and homepage listing. Return catalog structure, homepage render paths, category routes, tool count/samples, routing pattern, and SEO listing rules.

[try to solve]
1) Catalog: shards in src/site/tool-catalog.d/{slug}.json (114); merge strips `page` into src/site/tool-catalog.json. Fields: slug, path, category, featured, ymyl, i18nKey, homeTitleKey, homeDescKey, faqPrefix, related, logo, localProcessing; shard-only page.{module,export,style}. Unique categories: calculator(62), image(19), developer(18), pdf(11), design(4). No tags/subcategory fields.

2) Homepage: build:site → public/_pages/{lang}/index.html via scripts/site/pages/home.mjs + content-home.mjs; groups by TOOL_CATEGORY_ORDER with anchors #cat-*; sidebar hash links; no separate featured section in current renderer (featured flag unused in home HTML).

3) No category/tag listing routes; only homepage anchors; tool breadcrumbs link to /#cat-*.

4) 114 tools; samples across 5 categories with ymyl/localProcessing variants.

5) Tools: Worker registerToolPage → /tools/{slug} and /:lang/tools/{slug}. Static: ASSETS /_pages/{lang}/*.html for home/about/privacy/terms/contact.

6) SEO: seo-html-defaults allows CollectionPage/ItemList for pillars (homepage currently no JSON-LD); tool-creation/home i18n localization rules for home_cat_* and no-upload tags; no dedicated per-category listing SEO pages.

[actions]
- Read src/site/tool-catalog.d, tool-catalog.json, categories.ts, tools.ts, content-home.mjs, home.mjs, index.ts, toolRegistrar.ts, merge-all.mjs, seo-html-defaults.mdc, tool-creation.mdc
