Date: 2026-08-08 21:34
Summary: Make home tool entry cards semi-transparent with light backdrop blur.

[question]
工具卡片增加透明度

[try to solve]
工具入口卡背景改为约 72% surface 半透明，并加轻 `backdrop-filter`；描边带品牌色；悬停提高到约 88% 以保可读。已 `build:site`。

[actions]
- public/styles/site.css（.card.tool-entry-card）
- npm run build:site
