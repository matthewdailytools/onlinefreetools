Date: 2026-08-07 08:25
Summary: Synced tool page body, panels, IG/FAQ sections, and calculator cards to the same --content-max width as share/feedback.

[question]
工具正文的宽度同步修正

[try to solve]
将工具页标题/摘要、`.tool-panel`、IG/FAQ `tool-section`、通用 `.tool-card` 以及各计算器页内联卡片（bmi/pct/grad/mr/sf）的 `max-width` 统一为 `var(--content-max)`（880px），与底部分享/反馈模块同宽。

[actions]
- `public/styles/site.css`
- `src/pages/{squareFeet,howToCalculateBmi,marginalRevenue,howToCalculateRoi,howToCalculatePercentageChange,howToCalculateGradient}Page.ts`
