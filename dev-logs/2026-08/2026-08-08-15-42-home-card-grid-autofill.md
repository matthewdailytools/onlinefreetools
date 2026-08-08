Date: 2026-08-08 15:42
Summary: Make home tool cards use fluid auto-fill columns by viewport width.

[question]
首页每排卡片应该随屏幕变化而变化

[try to solve]
首页 Featured / 分类工具卡片改为 CSS Grid `auto-fill` + `minmax`（`.home-card-grid`），列数随可用宽度自动增减；`--home-max` 提到 1370px。替换原先固定断点的 Bootstrap `row-cols-*`。

[actions]
- public/styles/site.css
- scripts/site/components/content-home.mjs
- npm run build:site
