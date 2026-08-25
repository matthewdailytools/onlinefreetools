Date: 2026-08-09 08:35
Summary: Shipped how-to-calculate-salary-hourly end-to-end; sample annual 52000 @ 40h/week → $25.00/hour; catalog count 74.

[question]
Ship THREE tools SERIAL. #22 how-to-calculate-salary-hourly (YMYL finance). Title: Salary to Hourly Calculator — How to Convert Pay Rates. zh: 年薪时薪计算器 — 如何换算薪资与时薪. Inputs: annual/monthly/hourly; hours/week default 40; weeks/year default 52. Sample: annual 52000, 40h/week → $25/hour. Related: cagr, roi. Disclaimer not employment/tax advice.

[try to solve]
Shipped `how-to-calculate-salary-hourly` (§12 #22 / §9 #114). Sample: annual **52000**, **40** hours/week, **52** weeks/year → hourly **$25.00**. Catalog tool count: **74**. Gates coverage 0b→2→4→all, build:site, lint:seo, and CROSS_TOOL_UPDATE=1 isolation passed; independent ten-locale rewrite; inventory/TSV/README marked live.

[actions]
- work-tasks/how-to-calculate-salary-hourly/00–03
- src/pages/howToCalculateSalaryHourlyPage.ts
- src/site/tool-catalog.d/how-to-calculate-salary-hourly.json
- src/site/i18n/tools/how-to-calculate-salary-hourly/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-salary-hourly.svg
- docs inventory §9/#114 §12/#22 + Omni TSV
- README en+zh tool list
- npm run coverage:gate phase=0b|2|4|all; build:site; lint:seo; CROSS_TOOL_UPDATE=1 lint:tool-isolation
