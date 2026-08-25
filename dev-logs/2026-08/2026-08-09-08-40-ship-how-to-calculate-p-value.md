Date: 2026-08-09 08:40
Summary: Shipped how-to-calculate-p-value end-to-end; sample z=1.96 → two-tailed p≈0.05; catalog count 75.

[question]
#23 how-to-calculate-p-value (NOT YMYL). Title: P-Value Calculator — How to Calculate a P-Value. zh: p 值计算器 — 如何计算 p 值. Simple z-test two-tail from z-score using erfc. Sample: z=1.96 → two-tailed p≈0.05. Related: std-dev + percentage-change while CI not live.

[try to solve]
Shipped `how-to-calculate-p-value` (§12 #23 / §9 #115). Sample: z = **1.96** → two-tailed p ≈ **0.05** (about 0.049996). Related: `how-to-calculate-standard-deviation`, `how-to-calculate-percentage-change`. Catalog: **75**. coverage 0b→2→4→all, build:site, lint:seo, and isolation passed; independent ten-locale rewrite; inventory/TSV/README marked live.

[actions]
- work-tasks/how-to-calculate-p-value/00–03
- src/pages/howToCalculatePValuePage.ts
- src/site/tool-catalog.d/how-to-calculate-p-value.json
- src/site/i18n/tools/how-to-calculate-p-value/{10 langs}.ts
- public/icons/tools/how-to-calculate-p-value.svg
- docs inventory §9/#115 §12/#23 + Omni TSV + README
- coverage:gate 0b|2|4|all; build:site; lint:seo; CROSS_TOOL_UPDATE=1 isolation
