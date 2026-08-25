Date: 2026-08-09 18:24
Summary: Added a modular SEO where2use page with seven SEO modules.

[question]
创建一个SEO where2use，根据调研创建一个SEO为主题的where2use页面，页面上对SEO进行系统性的分模块和解释，和描述，以及该模块对应用到的工具。

[try to solve]
Added where2use scenario `seo` at canonical URL `/where-to-use-tools/seo` (ten locales + sitemap). The page has seven modules—crawl & indexing, technical checks, Meta/SERP, structured data, performance/CWV, campaigns & i18n, social & brand—each with explanation, primary tools, cross-scenario related links, and a planned list. Primary tools retagged `scenario: seo`: indexnow, website-headers, domain-lookup, add-www-to-dns. Module config lives in `scripts/site/scenario-modules.mjs`; leaf rendering supports the modular layout. `lint:taxonomy` and `build:site` passed.

[actions]
- src/site/taxonomy.ts, scripts/site/taxonomy.mjs
- scripts/site/scenario-modules.mjs
- scripts/site/components/content-taxonomy.mjs
- scripts/site/i18n-taxonomy.mjs
- tool-catalog.d: indexnow, website-headers, domain-lookup, add-www-to-dns
- scripts/dev/apply-taxonomy-tags.mjs
- docs/2026-08-09-seo-webmaster-tools-survey.md §9
- npm run lint:taxonomy && npm run build:site
