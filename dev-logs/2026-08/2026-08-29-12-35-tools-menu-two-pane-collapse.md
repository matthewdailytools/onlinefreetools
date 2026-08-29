Date: 2026-08-29 12:35
Summary: Rebuilt tool-page Tools menu as a two-level panel (topic rail → tools) so topics are truly collapsed under Tools; bumped PAGES_CACHE_VERSION to 4.4.

[question]
目前菜单没有收起到工具中，请重新分析修改

[try to solve]
Analysis: production still served the pre-change 16 topic dropdowns; local already had a mega grid that expanded every topic+tool at once, which did not feel “collapsed into Tools”. Homepage correctly kept the old multi-topic nav.

Change: tool-page Tools menu is now a two-pane flyout — left rail lists only topic names; hovering/clicking a topic reveals that topic’s tools on the right. Top bar remains Home / Tools / Tool topics / Tool types / Dev logs (+ page settings / language). Cache version → 4.4; `build:site` + `restart:dev` (uploads local R2 meta). Deploy/push still required for onlinefreetools.org.

[actions]
- header/nav/layout/CSS two-pane mega; wrangler PAGES_CACHE_VERSION 4.4
- npm run build:site && npm run restart:dev
