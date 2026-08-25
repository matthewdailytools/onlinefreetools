Date: 2026-08-07 08:25
Summary: Synced tool page body, panels, IG/FAQ sections, and calculator cards to the same --content-max width as share/feedback.

[question]
工具正文的宽度同步修正

[try to solve]
Unified `max-width` to `var(--content-max)` (880px) for tool title/summary, `.tool-panel`, IG/FAQ `tool-section`, shared `.tool-card`, and inline calculator cards (bmi / pct / grad / mr / sf), matching the bottom share/feedback modules.

[actions]
- `public/styles/site.css`
- `src/pages/{squareFeet,howToCalculateBmi,marginalRevenue,howToCalculateRoi,howToCalculatePercentageChange,howToCalculateGradient}Page.ts`
