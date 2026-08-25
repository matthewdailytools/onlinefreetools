Date: 2026-08-09 08:26
Summary: Shipped how-to-calculate-concrete end-to-end with coverage gates 0b→2→4→all, ten-locale i18n, and catalog count 70.

[question]
Ship ONE tool end-to-end in /Users/xuli/vscodeai/onlinefreetools with mandatory coverage gates (0b→2→4→all). Do not skip localization. Do not start another tool's Page until this ships.

Slug: how-to-calculate-concrete
§12 #18. NOT YMYL. Construction. Related: unit-converter + square-feet.

Merge shapes as options on one page: slab (L×W×T), column (optional), cylinder — at least slab + cylinder. Bags estimate optional (use bag volume e.g. 0.015 m³ or 0.45 ft³ — document assumption).

Title: "Concrete Calculator — How to Estimate Concrete Volume"
zh: 混凝土计算器 — 如何估算混凝土方量

Sample: slab 5m × 4m × 0.1m → 2.0 m³. Show m³ and optional bags.

Pipeline: work-tasks 00-03 with 0b; gate 0b; page+en+catalog+icon; phase2; 9 independent locales (zh/ja desc≥120); phase4/all; inventory §9/#110 §12/#18 + omni TSVs 已上线; README; build:site; lint:seo; isolation CROSS_TOOL_UPDATE=1; dev-log.

Return volume sample and catalog count.

[try to solve]
Shipped `how-to-calculate-concrete` (§12 #18 / §9 #110). Slab/column/cylinder as on-page options; sample slab 5×4×0.1 m → **2.0 m³** (optional bags; metric 0.015 m³/bag ≈ 134 bags). Independent ten-locale rewrite; coverage:gate 0b→2→4→all, build:site, lint:seo, and isolation all passed. **catalog count = 70**.

[actions]
- work-tasks/how-to-calculate-concrete/00–03
- src/pages/howToCalculateConcretePage.ts
- src/site/tool-catalog.d/how-to-calculate-concrete.json
- src/site/i18n/tools/how-to-calculate-concrete/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-concrete.svg
- docs inventory §9/#110 §12/#18 + Omni/ToolDone TSVs → live
- README en+zh tool list
- npm run coverage:gate (0b/2/4/all); npm run build:site; npm run lint:seo; CROSS_TOOL_UPDATE=1 TOOL_SLUG=how-to-calculate-concrete npm run lint:tool-isolation
