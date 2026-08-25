Date: 2026-08-09 08:29
Summary: Shipped how-to-calculate-tile end-to-end with coverage gates 0b→2→4→all; sample yields 147 tiles; catalog count 71.

[question]
Ship ONE tool end-to-end in /Users/xuli/vscodeai/onlinefreetools with mandatory coverage gates 0b→2→4→all. No skipping ten-locale rewrite.

Slug: how-to-calculate-tile
§12 #19. NOT YMYL. Related: how-to-calculate-concrete + square-feet.

Title: "Tile Calculator — How to Estimate Tile Quantity"
zh: 瓷砖计算器 — 如何估算瓷砖用量

Inputs: room area m² OR L×W; tile L×W cm; waste % (default 10). Output: tiles needed (ceil). Sample: room 12 m², tile 30×30 cm, waste 10% → compute.

Full pipeline: briefs, gates, page+en+9 locales, inventory §9/#111 §12/#19 + TSV 已上线, README, build:site, lint:seo, isolation, dev-log.

Return tiles count for sample and catalog count.

[try to solve]
Shipped `how-to-calculate-tile` (§12 #19 / §9 #111). Sample: room 12 m², tile 30×30 cm, waste 10% → **147** tiles (ceil(12×1.10/0.09)). Catalog tool count: **71**. Gates coverage:gate 0b→2→4→all, build:site, lint:seo, and CROSS_TOOL_UPDATE=1 isolation all passed; independent ten-locale rewrite; inventory/TSV/README marked live.

[actions]
- work-tasks/how-to-calculate-tile/00–03
- src/pages/howToCalculateTilePage.ts
- src/site/tool-catalog.d/how-to-calculate-tile.json
- src/site/i18n/tools/how-to-calculate-tile/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-tile.svg
- docs inventory §9/#111 §12/#19 + Omni/ToolDone TSV
- README en+zh list
- npm run coverage:gate (0b/2/4/all); build:site; lint:seo; CROSS_TOOL_UPDATE=1 lint:tool-isolation
