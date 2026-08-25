Date: 2026-08-09 08:42
Summary: Shipped how-to-calculate-confidence-interval end-to-end; sample mean 50, SD 10, n 100, 95% → 48.04–51.96; catalog count 76.

[question]
#24 how-to-calculate-confidence-interval (NOT YMYL). Title: Confidence Interval Calculator — How to Calculate a CI. zh: 置信区间计算器 — 如何计算置信区间. Inputs: mean, SD, n, confidence 90/95/99. Sample: mean 50, sd 10, n 100, 95% → 48.04 to 51.96. Related: p-value, standard-deviation. Mark inventory §12/#24 and §9/#116 已上线.

[try to solve]
Shipped `how-to-calculate-confidence-interval` (§12 #24 / §9 #116). Sample: mean **50**, SD **10**, n **100**, **95%** → **48.04** to **51.96**. Related: `how-to-calculate-p-value`, `how-to-calculate-standard-deviation`. Also updated the p-value related links to std-dev + CI. After the three-tool serial delivery, catalog count is **76**. Passed coverage 0b→2→4→all, `build:site`, `lint:seo`, and isolation; ten independent locale rewrites; inventory/TSV/README marked live.

[actions]
- work-tasks/how-to-calculate-confidence-interval/00–03
- src/pages/howToCalculateConfidenceIntervalPage.ts
- src/site/tool-catalog.d/how-to-calculate-confidence-interval.json
- src/site/i18n/tools/how-to-calculate-confidence-interval/{10 langs}.ts
- public/icons/tools/how-to-calculate-confidence-interval.svg
- update how-to-calculate-p-value related → CI
- docs inventory §9/#116 §12/#24 + Omni TSV + README
- coverage:gate 0b|2|4|all; build:site; lint:seo; CROSS_TOOL_UPDATE=1 isolation
