Date: 2026-08-07 08:23
Summary: Widened the stacked share/feedback module block to match the tool content max width.

[question]
宽度加大

[try to solve]
将 `.tool-module-grid` 的 `max-width` 从 `40rem` 调整为 `var(--content-max)`（880px）并设 `width: 100%`，与工具页内容区同宽。

[actions]
- `public/styles/site.css`
