Date: 2026-08-29 11:48
Summary: Collapsed top nav into Home / Tools mega-menu / Tool topics / Tool types / Dev logs / Page settings / Language; sidebar is a topic accordion with the current topic open.

[question]
工具页菜单修改：顶部菜单栏收起为首页,工具（鼠标移动到上面展开为分主题），工具主题，工具类型，开发日志，页面设置（原来页面主题），语言选择。左边菜单栏按照主题分类分层，当前主题工具列表默认展开，其他主题分类默认收起，点击可展开。

[try to solve]
Top bar now: Home → Tools (hover mega menu, 16 topic columns with primary tools) → Tool topics → Tool types → Dev logs; right side Page settings (renamed from Theme) + language. Removed where2use from the chrome nav and dropped the previous 16 separate topic dropdowns / multi-row header height.

Left sidebar on tool pages: `<details>` accordion per primary topic; current tool’s primary topic has `open`; others collapsed; click summary to expand. Hub link per topic included. Flat sidebars for topics/info pages unchanged.

Ship: `merge:tools` + `build:site` (1320 tool pages). Verified `cidr-to-ip-range` zh HTML has mega menu and `network-ip` open.

[actions]
- Updated src/pages/site/nav.ts, header.ts, sidebar.ts, layout.ts
- Updated scripts/site/nav.mjs, components/header.mjs, components/sidebar.mjs, layout.mjs, i18n.mjs, i18n-topics.mjs
- Updated public/styles/site.css (mega + accordion; single-row header)
- Updated src/site/i18n/core/* theme_label + nav_topics; all tool pages `groups:` sidebar prop
- Ran npm run merge:tools && npm run build:site
