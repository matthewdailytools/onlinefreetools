Date: 2026-08-09 08:35
Summary: Shipped how-to-calculate-paint end-to-end after aspect-ratio; sample 40 m² / 2 coats / 10 m²/L → 8 L; catalog count 73.

[question]
Tool B after A: how-to-calculate-paint (§12 #21). NOT YMYL. Related: how-to-calculate-tile, how-to-calculate-concrete. Title: Paint Calculator — How to Estimate Paint Needed. Inputs: wall area m² (or L×H×walls), coats, coverage m²/L (default 10). Output liters (+ optional cans if 3.78L). Sample: 40 m², 2 coats, 10 m²/L → 8 L. Full pipeline; inventory §9/#113 §12/#21. Return both sample results and final catalog count.

[try to solve]
已上线 `how-to-calculate-paint`（§12 #21 / §9 #113）。样例：40 m²、2 coats、10 m²/L → **8 L**（可选 3.78 L 罐 → 3）。与 A 一并：aspect-ratio 样例 **16:9** / 高 **720**；最终 catalog：**73**。门禁 0b→2→4→all、`build:site`、`lint:seo`、`CROSS_TOOL_UPDATE=1` isolation 均通过；十语独立重写；inventory/TSV/README 已标已上线。

[actions]
- work-tasks/how-to-calculate-paint/00–03
- src/pages/howToCalculatePaintPage.ts
- src/site/tool-catalog.d/how-to-calculate-paint.json
- src/site/i18n/tools/how-to-calculate-paint/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-paint.svg
- docs inventory §9/#113 §12/#21 + Omni/ToolDone TSV
- README 中英工具清单
- npm run coverage:gate phase=0b|2|4|all; build:site; lint:seo; CROSS_TOOL_UPDATE=1 lint:tool-isolation
