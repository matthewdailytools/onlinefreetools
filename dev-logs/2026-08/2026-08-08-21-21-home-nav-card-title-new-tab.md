Date: 2026-08-08 21:21
Summary: Remove All Tools nav item; make card titles clickable; open tool links in new tabs.

[question]
菜单的“全部工具”删除，卡片标题也需要可以点击，所有的打开都是新开一个标签页

[try to solve]
首页顶栏去掉「全部工具」锚点项。工具卡片标题与「打开」按钮均可点，且与菜单分类下拉、不上传标签、工具页相关工具链接一律 `target="_blank" rel="noopener noreferrer"`；页内锚点（推荐/浏览全部）仍本页跳转。已 `build:site`。

[actions]
- scripts/site/nav.mjs
- scripts/site/components/header.mjs
- scripts/site/components/content-home.mjs
- public/styles/site.css（.home-card-title-link）
- src/pages/site/nav.ts、header.ts、toolContent.ts
- npm run build:site
