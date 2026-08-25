Date: 2026-08-08 21:21
Summary: Remove All Tools nav item; make card titles clickable; open tool links in new tabs.

[question]
菜单的“全部工具”删除，卡片标题也需要可以点击，所有的打开都是新开一个标签页

[try to solve]
Removed the home top-nav “All tools” anchor. Tool-card titles and Open buttons are clickable; those plus category dropdowns, No-upload badges, and related-tool links on tool pages use `target="_blank" rel="noopener noreferrer"`. In-page anchors (Featured / Browse all) still navigate in-page. Ran `build:site`.

[actions]
- scripts/site/nav.mjs
- scripts/site/components/header.mjs
- scripts/site/components/content-home.mjs
- public/styles/site.css (.home-card-title-link)
- src/pages/site/nav.ts, header.ts, toolContent.ts
- npm run build:site
