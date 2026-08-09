Date: 2026-08-09 18:24
Summary: Add modular SEO where2use page with seven SEO modules

[question]
创建一个SEO where2use，根据调研创建一个SEO为主题的where2use页面，页面上对SEO进行系统性的分模块和解释，和描述，以及该模块对应用到的工具。

[try to solve]
已新增 where2use 场景 `seo`，规范 URL `/where-to-use-tools/seo`（十语 + sitemap）。页内 7 个模块：抓取与索引、技术检查、Meta/SERP、结构化数据、性能/CWV、活动与国际化、社交与品牌——每模块含说明、主工具、跨场景相关互链、规划中清单。主工具改挂 `scenario: seo`：indexnow、website-headers、domain-lookup、add-www-to-dns。模块配置在 `scripts/site/scenario-modules.mjs`；leaf 渲染支持分模块布局。`lint:taxonomy` 与 `build:site` 通过。

[actions]
- src/site/taxonomy.ts, scripts/site/taxonomy.mjs
- scripts/site/scenario-modules.mjs
- scripts/site/components/content-taxonomy.mjs
- scripts/site/i18n-taxonomy.mjs
- tool-catalog.d: indexnow, website-headers, domain-lookup, add-www-to-dns
- scripts/dev/apply-taxonomy-tags.mjs
- docs/2026-08-09-seo-webmaster-tools-survey.md §9
- npm run lint:taxonomy && npm run build:site
