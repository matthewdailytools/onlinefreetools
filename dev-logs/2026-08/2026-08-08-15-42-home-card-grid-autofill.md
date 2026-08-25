Date: 2026-08-08 15:42
Summary: Make home tool cards use fluid auto-fill columns by viewport width.

[question]
首页每排卡片应该随屏幕变化而变化

[try to solve]
Home Featured / category tool cards now use CSS Grid `auto-fill` + `minmax` (`.home-card-grid`) so column count grows/shrinks with available width; `--home-max` raised to 1370px. Replaced fixed-breakpoint Bootstrap `row-cols-*`.

[actions]
- public/styles/site.css
- scripts/site/components/content-home.mjs
- npm run build:site
