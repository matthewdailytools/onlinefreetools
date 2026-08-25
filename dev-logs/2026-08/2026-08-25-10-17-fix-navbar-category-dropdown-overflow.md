Date: 2026-08-25 10:17
Summary: Restore top navbar category dropdowns clipped by overflow-x scroll.

[question]
顶部菜单无法点击下拉

[try to solve]
顶栏分类下拉点不开，是因为 8 月 21 日为了让右侧主题/语言不被挤出视口，给 `.navbar-nav` 加了 `overflow-x: auto` 和 `overflow-y: hidden`。CSS 规定只要一轴不是 `visible`，另一轴也会变成裁剪，Bootstrap 又在 navbar 里用绝对定位菜单（不用 Popper），结果菜单被裁在导航条高度里，看起来像点了没反应。

已改为：打开下拉时把 `.navbar-nav` 的 overflow 设成 `visible`（`show.bs.dropdown` 加 class，`:has(.show)` 兜底），关闭后恢复横向滚动；长列表（如计算器）菜单限制高度并可滚动。分类、主题、语言下拉在 1400px 首页上已点开并可点到菜单项。硬刷新即可。

[actions]
- public/styles/site.css
- public/js/theme.js
