Date: 2026-08-09 08:35
Summary: Shipped how-to-calculate-salary-hourly end-to-end; sample annual 52000 @ 40h/week → $25.00/hour; catalog count 74.

[question]
Ship THREE tools SERIAL. #22 how-to-calculate-salary-hourly (YMYL finance). Title: Salary to Hourly Calculator — How to Convert Pay Rates. zh: 年薪时薪计算器 — 如何换算薪资与时薪. Inputs: annual/monthly/hourly; hours/week default 40; weeks/year default 52. Sample: annual 52000, 40h/week → $25/hour. Related: cagr, roi. Disclaimer not employment/tax advice.

[try to solve]
已上线 `how-to-calculate-salary-hourly`（§12 #22 / §9 #114）。样例：年薪 **52000**、每周 **40** 小时、每年 **52** 周 → 时薪 **$25.00**。catalog 工具数：**74**。门禁 coverage 0b→2→4→all、`build:site`、`lint:seo`、`CROSS_TOOL_UPDATE=1` isolation 通过；十语独立重写；inventory/TSV/README 已标已上线。

[actions]
- work-tasks/how-to-calculate-salary-hourly/00–03
- src/pages/howToCalculateSalaryHourlyPage.ts
- src/site/tool-catalog.d/how-to-calculate-salary-hourly.json
- src/site/i18n/tools/how-to-calculate-salary-hourly/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-salary-hourly.svg
- docs inventory §9/#114 §12/#22 + Omni TSV
- README 中英工具清单
- npm run coverage:gate phase=0b|2|4|all; build:site; lint:seo; CROSS_TOOL_UPDATE=1 lint:tool-isolation
