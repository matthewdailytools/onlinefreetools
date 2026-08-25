Date: 2026-08-07 07:30
Summary: Unified site.css chrome; refreshed homepage hero/Why/categories and tool-panel shell on representative pages.

[question]
根据 https://www.freetools.org/ 和 https://www.freetools.org/networking-tools/accessibility-checker 优化本站的首页，工具页设计
（Implement the plan: 首页与工具页设计优化）

[try to solve]
Shipped shared `public/styles/site.css` (tokens + navbar/sidebar/card/tool shell); home and tool layouts both reference it. Home gains a branded hero, CTAs, Why×3, and category cards; header/sidebar/footer class names aligned; html-entity / indexnow use tool-title + tool-panel; other tool pages get a stronger first-viewport H1 via global CSS. `build:site` + `lint:seo` OK. Did not copy rating walls or exaggerated stat strips.

[actions]
- added: `public/styles/site.css`
- modified: `omnicalc.css` (re-export), layouts, content-home, header/sidebar/footer (scripts+src), toolContent, htmlEntityPage, indexNowPage, `scripts/site/i18n.mjs`, `public/_pages/*`
