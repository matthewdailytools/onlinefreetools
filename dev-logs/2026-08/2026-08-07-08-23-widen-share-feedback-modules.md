Date: 2026-08-07 08:23
Summary: Widened the stacked share/feedback module block to match the tool content max width.

[question]
宽度加大

[try to solve]
Raised `.tool-module-grid` `max-width` from `40rem` to `var(--content-max)` (880px) and set `width: 100%` so the block matches the tool page content width.

[actions]
- `public/styles/site.css`
