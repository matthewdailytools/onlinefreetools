Date: 2026-08-25 10:28
Summary: Replace scrolling navbar dropdowns with a multi-column mega menu.

[question]
菜单有个滑动条是个比较怪异的事情，有什么好的优化方案

[try to solve]
顶栏滑动条来自两处：分类下拉被做成单列并限高（计算器 62 项会出竖条），以及导航为防挤出主题/语言加了横向滚动。已改成桌面下分类菜单铺满导航宽、按宽度 2–4 列排布，一屏能放下的不再滚动；仅视口更矮时才可滚且不画滚动条。顶栏横向滑动条也隐藏。主题/语言仍是短单列。硬刷新即可。

[actions]
- public/styles/site.css
