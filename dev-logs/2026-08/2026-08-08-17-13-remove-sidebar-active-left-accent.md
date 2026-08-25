Date: 2026-08-08 17:13
Summary: Removed brand-colored left bar from sidebar active state.

[question]
选中的左边的不同颜色剔除

[try to solve]
Removed `box-shadow: inset 3px 0 0 var(--accent)` from the sidebar active item; keep only action-soft light background + bold text. Smart color-scheme tool preview dropped the left accent bar the same way; color-system doc acceptance criteria updated.

[actions]
- public/styles/site.css
- src/pages/smartWebsiteColorSchemePage.ts
- docs/2026-08-08-site-color-system.md
