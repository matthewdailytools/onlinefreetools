Date: 2026-08-09 09:15
Summary: Shipped Omni §12 tools #46–#62 (17 calculators) with full coverage pipeline; catalog now 114.

[question]
In /Users/xuli/vscodeai/onlinefreetools finish ALL remaining Omni §12 tools #46–#62 SERIAL with full pipeline each: work-tasks 00-03 + coverage:gate 0b→2→independent 10 locales→4→all→build:site→lint:seo→CROSS_TOOL_UPDATE isolation; mark inventory §9+§12+omni TSV 已上线; README en/zh. Avoid param-enum titles. zh/ja desc≥120. YMYL only for health tools with disclaimer.

[try to solve]
Shipped all 17 remaining §12 tools (#46–#62) serially via omni-s12 ship-one (work-tasks 00–03, coverage 0b/2/4/all, build:site, lint:seo, isolation). Catalog count **114**. YMYL only for macros + heart-rate. Inventory §9/§12 + Omni TSV marked 已上线; README en/zh updated.

Sample one-liners:
- age: birth 2000-01-01 as of 2026-08-09 → 26y 7m 8d
- date-difference: 2024-01-01→2024-01-11 = 10 days
- mean: 1..5 arithmetic → 3
- median: 1,2,2,3,4 → median 2, mode 2
- permutation-combination: n=5,r=2 → P=20,C=10
- quadratic-equation: x²−5x+6=0 → 2,3
- triangle-area: base 10 height 6 → 30
- circle: r=7 → area≈153.94
- volume: box 2×3×4 → 24
- macros: 2000 kcal 30/40/30 → 150/200/66.67 g
- heart-rate: age 30 → max 190
- pace: 5 km / 25 min → 5:00 /km
- one-rep-max: Epley 100×5 → 116.67
- ohms-law: V=12 I=2 → R=6
- density: m=10 V=2 → 5
- velocity: d=100 t=20 → 5
- acceleration: v0=0 v=10 t=2 → a=5

[actions]
- scripts/dev/omni-s12/gen-rest-46-62.mjs + ship-one ×17
- inventory/README/TSV 已上线; catalog 114
