Date: 2026-07-28 21:05
Summary: Implemented the three-phase Google SEO remediation plan (sitemap, About, FAQ/YMYL, catalog, lint).

[question]
Implement the Online Free Tools SEO 修改方案 as specified. Do NOT edit the plan file. Complete all to-dos.
随后：生成 devlogs。

[try to solve]
Shipped the plan in three phases, aligned with current Google rules (do not rely on FAQ/HowTo rich results; avoid scaled content and doorway pages):

Phase 1 (entry requirements)
- `build-site.mjs` now auto-generates a full `sitemap.xml` (per-language home / About / all tools / devlogs, with xhtml hreflang and x-default); about 171 URLs
- Both layouts (`src/pages/site/layout.ts`, `scripts/site/layout.mjs`) gained `x-default`, favicon, and apple-touch-icon
- Added `public/og-image.png`, `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`
- Home is driven by `tool-catalog.json`, including percentage-change; categories are Calculators / Developer; links use `withLangPath`
- Worker: `/en`, `/en/tools/:slug`, `/en/about` 301 to prefix-free canonical URLs; `toolRegistrar` likewise 301s default-language explicit prefixes

Phase 2 (trust and content)
- New multilingual About page (Who / How / Why / disclaimer) plus footer link and sitemap entry
- Extracted `toolContent.ts`: visible FAQ, YMYL disclaimer/references, related-tool cross-links
- Tool pages inject those blocks plus `BreadcrumbList` + `WebApplication` JSON-LD (not as a rich-result KPI)
- en/zh FAQ and YMYL copy completed; other locales fall back to English via `t()`

Phase 3 (structure)
- Single source of truth `src/site/tool-catalog.json` (runtime `tools.ts` + build `tool-catalog.mjs`)
- Extended `lint:seo` (description + FAQ pairs + YMYL disclaimer)
- Updated `docs/SEO_TOOL_RULES.md`, added `docs/SEO_PUBLISH_CHECKLIST.md`; `predeploy` runs `build:site && lint:seo`

Verification noted in source: `npm run build:site` and `npm run lint:seo` passed; `wrangler deploy --dry-run` packaged successfully.

[actions]
- Added: `src/site/tool-catalog.json`, `scripts/site/tool-catalog.mjs`, `src/pages/site/toolContent.ts`
- Added: `scripts/site/pages/about.mjs`, `docs/SEO_PUBLISH_CHECKLIST.md`, `docs/SEO_TOOL_RULES.md` (rules sync)
- Added assets: `public/og-image.png`, `public/favicon.ico`, `public/favicon.svg`, `public/apple-touch-icon.png`, `public/favicon-32.png`
- Updated: `scripts/build-site.mjs` (buildAbout / buildSitemap), `scripts/site/layout.mjs`, `src/pages/site/layout.ts`
- Updated: `scripts/site/components/content-home.mjs`, `scripts/site/pages/home.mjs`, footer (build and runtime)
- Updated: `src/index.ts`, `src/site/toolRegistrar.ts`, `src/site/tools.ts`
- Updated: all `src/pages/*Page.ts`, `src/site/i18n/en.ts` / `zh.ts`, `scripts/site/i18n.mjs`
- Updated: `scripts/validate-tool-seo.mjs`, `package.json` (predeploy), `docs/SEO_ANALYSIS_PLAN.md` progress notes
