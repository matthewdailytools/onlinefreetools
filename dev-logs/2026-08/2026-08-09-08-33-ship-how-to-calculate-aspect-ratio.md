Date: 2026-08-09 08:33
Summary: Shipped how-to-calculate-aspect-ratio end-to-end with coverage gates 0b→2→4→all; sample 1920×1080 → 16:9 and scale W 1280 → H 720; catalog count 72.

[question]
Ship tools SERIAL end-to-end (Tool A first): how-to-calculate-aspect-ratio (§12 #20). NOT YMYL. Related: unit-converter, square-feet. Title: Aspect Ratio Calculator — How to Calculate and Scale Ratios. Presets 16:9/4:3/1:1 as options not URLs. Sample: 1920×1080 → 16:9; scale W to 1280 → H 720. Full briefs+gates+10 locales+inventory §9/#112 §12/#20+TSV+README+isolation+dev-log.

[try to solve]
已上线 `how-to-calculate-aspect-ratio`（§12 #20 / §9 #112）。样例：1920×1080 → **16:9**；目标宽 1280 → 高 **720**。catalog 工具数：**72**。门禁 `coverage:gate` 0b→2→4→all、`build:site`、`lint:seo`、`CROSS_TOOL_UPDATE=1` isolation 均通过；十语独立重写；inventory/TSV/README 已标已上线。

[actions]
- work-tasks/how-to-calculate-aspect-ratio/00–03
- src/pages/howToCalculateAspectRatioPage.ts
- src/site/tool-catalog.d/how-to-calculate-aspect-ratio.json
- src/site/i18n/tools/how-to-calculate-aspect-ratio/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-aspect-ratio.svg
- docs inventory §9/#112 §12/#20 + Omni/ToolDone TSV
- README 中英工具清单
- npm run coverage:gate phase=0b|2|4|all; build:site; lint:seo; CROSS_TOOL_UPDATE=1 lint:tool-isolation
