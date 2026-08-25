Date: 2026-08-09 19:30
Summary: Implemented the full S1 SEO package (four new tools plus website-headers enhancements) under tool-creation and coverage-gate flow.

[question]
立项按S1（第 1–5 项），然后实现，不要跳过规则和skill中的步骤

[try to solve]
Completed `docs/2026-08-09-seo-webmaster-tools-survey.md` §5 S1 items end-to-end, following tool-creation / tool-i18n-localization / tool-coverage-pass (0b→2→4 gates) and merge:tools / build:site / lint:

1. **meta-serp-preview**: catalog shard, en master + 9 locale rewrites, page (char/pixel estimates + desktop/mobile SERP preview), SVG icon; onpage module primarySlugs + remove i18n-taxonomy upcoming; coverage:gate 0b/2/4 green.
2. **schema-jsonld-generator**: FAQ/Article/Breadcrumb/Organization JSON-LD (including “breadcrumb needs ≥2 levels” error key); schema module primarySlugs; 10 locales; 0b/2/4 green.
3. **robots-txt-generator**: AI crawler User-agents (GPTBot/ClaudeBot/Google-Extended, etc.); crawl module primarySlugs; English title initially failed param-enum directory-cavity gate — retitled to action H1 “Robots.txt Generator — Manage Allow & Disallow Rules for AI Crawlers”; 10 locales; 0b/2/4 green.
4. **sitemap-xml-generator**: per-line URL with optional lastmod/changefreq/priority (pipe-separated), URL escaping, lastmod validation, >50k split hint; crawl module primarySlugs; crawl upcoming emptied for ten locales; 10 locales; 0b/2/4 green.
5. **website-headers enhance**: Worker uses `redirect: manual` and follows ≤5 hops returning a `redirects` chain; results add “SEO header checks” subcard — Cache-Control directive-by-directive, X-Robots-Tag noindex/nofollow/none/max-snippet with block warnings, Redirect 301/302 semantics + cross-host tip; 10 locales +27 keys, keyset 62 identical (script-checked).

Wrap-up: README EN/ZH tool lists +4 tools and refreshed website-headers blurb; `tool-inventory-table.md` §6 added robots/sitemap rows, fixed schema slug, marked 73/74 shipped, renumbered to 1–161 (script: no dupes/gaps), shipped count 114→118, P0 14→13; meta-serp-preview removed from P0 quick list; schema-jsonld-generator inbound orphan fixed (meta-serp-preview related backlink).

Verification: `npm run merge:tools` (119 tools / 10 locales), `npm run build:site` (1420 sitemap URLs), `npm run lint:seo` (Title/coverage OK, Link validator 0 inbound warn; 15 legacy WARNs on older tools), `npm run lint:tool-isolation` (skipped without TOOL_SLUG). Each new tool’s 0b/1b/2b rounds and per-locale “round 2 rewritten / spot-check locale round 3” marks written into `work-tasks/{slug}/03-locale-briefs.md`.

[actions]
- Added `src/site/tool-catalog.d/{meta-serp-preview,schema-jsonld-generator,robots-txt-generator,sitemap-xml-generator}.json`
- Added `src/site/i18n/tools/{4 slug}/` ×10 locales; `src/pages/{4 Page}.ts`; `public/icons/tools/{4}.svg`
- Updated `scripts/site/scenario-modules.mjs` (onpage/schema/crawl), `scripts/site/i18n-taxonomy.mjs` (upcoming remove/empty)
- Enhanced `src/tools/websiteHeaders.ts` (manual redirect chain) and `src/pages/websiteHeadersPage.ts` (SEO header readouts); website-headers i18n +27 keys
- Updated `README.md`, `docs/2026-08-08-tool-inventory-table.md`, `work-tasks/{4 slug}/` and `work-tasks/website-headers/` 03 briefs
