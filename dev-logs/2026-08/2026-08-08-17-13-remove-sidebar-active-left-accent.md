Date: 2026-08-08 17:13
Summary: Removed brand-colored left bar from sidebar active state.

[question]
选中的左边的不同颜色剔除

[try to solve]
侧栏选中项去掉 `box-shadow: inset 3px 0 0 var(--accent)`，仅保留 action-soft 浅底 + 加粗字。智能配色工具预览同步去掉左侧色条；颜色方案文档验收项已改。

[actions]
- public/styles/site.css
- src/pages/smartWebsiteColorSchemePage.ts
- docs/2026-08-08-site-color-system.md
