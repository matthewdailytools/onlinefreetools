Date: 2026-08-09 00:05
Summary: Implemented how-to-calculate-compound-interest with How to Calculate title pattern, ten locales, and SEO gates green.

[question]
好的，继续

[try to solve]
Aligned the title and shipped the compound-interest tool ready for release:

- Title (en): `Compound Interest Calculator — How to Calculate Future Value` (aligned with ROI/BMI)
- Page: `src/pages/howToCalculateCompoundInterestPage.ts` (compound/simple, frequency, loadSample: 10000×5%×10 years annual → 16288.95)
- Catalog/icon/ten-locale i18n; YMYL disclaimer + dual Investopedia references
- `coverage:gate --phase=all` OK; `lint:seo` OK; after `build:site`, tool appears on home/nav
- Inventory §9 #99 → live; README en/zh entries added; `02`=`implemented`, `03`=`i18n-done`

Paths: `/tools/how-to-calculate-compound-interest`, `/zh/tools/how-to-calculate-compound-interest`

[actions]
- Updated `work-tasks/how-to-calculate-compound-interest/02|03`
- Added catalog/page/icon/i18n×10
- Updated README, inventory §9/§12
- `npm run merge:tools` / `build:site` / `lint:seo` / `coverage:gate --phase=all`
