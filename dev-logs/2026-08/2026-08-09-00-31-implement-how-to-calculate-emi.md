Date: 2026-08-09 00:31
Summary: Shipped §12 #8 how-to-calculate-emi (brief → ten locales → build).

[question]
Omni §12 #8–62 串行立项+实现（本轮执行 #8 EMI）

[try to solve]
Completed `how-to-calculate-emi`: briefs 00–03 + coverage 0b/2/4/all; equal-installment (EMI) formula with home price/down payment and biweekly frequency on the same page, amortization table, YMYL disclaimer, Investopedia/CFPB references; ten-locale i18n; catalog count 60; `build:site` (sitemap 650); inventory §9 #100 / §12 #8 / TSV / README marked live. Next serial item is #9 `how-to-calculate-bmr-tdee` (not started in this round).

[actions]
- Added `work-tasks/how-to-calculate-emi/`, `src/pages/howToCalculateEmiPage.ts`, ten-locale i18n shards, catalog shard, icon
- `npm run merge:tools` / `coverage:gate` / `build:site` / `lint:seo` / `CROSS_TOOL_UPDATE=1 lint:tool-isolation`
- Updated inventory, Omni TSV, README; compound-interest related links now include emi
