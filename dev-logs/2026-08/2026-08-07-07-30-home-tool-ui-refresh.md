Date: 2026-08-07 07:30
Summary: Unified site.css chrome; homepage hero/Why/categories; tool-panel shell on representative pages.

[question]
根据 https://www.freetools.org/ 和 https://www.freetools.org/networking-tools/accessibility-checker 优化本站的首页，工具页设计
（Implement the plan: 首页与工具页设计优化）

[try to solve]
已落地共享 `public/styles/site.css`（token + navbar/sidebar/card/tool 壳），首页与工具页 layout 均引用；首页增加品牌首屏、CTA、Why×3、分类分区卡片；header/sidebar/footer 类名同步；html-entity / indexnow 对齐 tool-title + tool-panel；其余工具页靠全局 CSS 抬高首屏 H1。`build:site` + `lint:seo` OK。未抄评分墙/夸张数据条。

[actions]
- added: `public/styles/site.css`
- modified: `omnicalc.css` (re-export), layouts, content-home, header/sidebar/footer (scripts+src), toolContent, htmlEntityPage, indexNowPage, `scripts/site/i18n.mjs`, `public/_pages/*`
