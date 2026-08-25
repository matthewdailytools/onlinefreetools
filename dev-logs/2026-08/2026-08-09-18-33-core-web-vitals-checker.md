Date: 2026-08-09 18:33
Summary: Shipped core-web-vitals-checker from Clarity Performance metrics docs.

[question]
根据 https://learn.microsoft.com/zh-cn/clarity/insights/performance-widget 增加工具

[try to solve]
Shipped `core-web-vitals-checker`: paste LCP/INP/CLS → Good / Needs improvement / Poor (web.dev/Google thresholds; Clarity “good” targets match). When below target, shows causes and fixes from Clarity docs; explains p75, FID→INP, and that it is not live site crawling. Ten locales + coverage:gate all + lint:seo; scenario=seo; primary tool on the where2use SEO “performance” module; Related to image compress/optimize and Headers.

[actions]
- work-tasks/core-web-vitals-checker/*
- src/pages/coreWebVitalsCheckerPage.ts
- src/site/tool-catalog.d/core-web-vitals-checker.json (+ reverse related)
- src/site/i18n/tools/core-web-vitals-checker/{10 langs}
- scripts/site/scenario-modules.mjs
- README.md
- npm run coverage:gate --phase=all; lint:seo; build:site
