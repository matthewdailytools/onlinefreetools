Date: 2026-08-09 18:33
Summary: Ship core-web-vitals-checker from Clarity Performance metrics docs

[question]
根据 https://learn.microsoft.com/zh-cn/clarity/insights/performance-widget 增加工具

[try to solve]
已上线 `core-web-vitals-checker`：粘贴 LCP/INP/CLS → Good / Needs improvement / Poor（web.dev/Google 分档；Clarity 良好目标一致），未达标时展示 Clarity 文档中的成因与改进；说明 p75、FID→INP、非实时抓站。十语 + coverage:gate all + lint:seo；scenario=seo，已挂入 where2use SEO「性能」模块主工具；Related 图片压缩/优化与 Headers。

[actions]
- work-tasks/core-web-vitals-checker/*
- src/pages/coreWebVitalsCheckerPage.ts
- src/site/tool-catalog.d/core-web-vitals-checker.json (+ reverse related)
- src/site/i18n/tools/core-web-vitals-checker/{10 langs}
- scripts/site/scenario-modules.mjs
- README.md
- npm run coverage:gate --phase=all; lint:seo; build:site
