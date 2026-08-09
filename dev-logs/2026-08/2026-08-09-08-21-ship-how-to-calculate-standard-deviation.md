Date: 2026-08-09 08:21
Summary: Shipped §12 #17 how-to-calculate-standard-deviation end-to-end with coverage gates.

[question]
Ship ONE tool end-to-end. Slug: how-to-calculate-standard-deviation. §12 #17. NOT YMYL (statistics). Related: how-to-calculate-percentage-change + how-to-calculate-cagr if mean not shipped. Merge Omni variance/population-variance as modes. Pipeline 0b→ready→page/en→phase2→9 locales→phase4/all→build:site→lint:seo→isolation. Return sample SD confirmation and catalog count.

[try to solve]
已交付 `how-to-calculate-standard-deviation`：work-tasks 00–03（0b 覆盖表）；coverage:gate 0b/2/4/all 绿；Page + catalog + icon + 十语独立 i18n；样本/总体切换并始终显示方差；经典集 2,4,4,4,5,5,7,9 → 总体 SD=2、方差=4；样本 SD≈2.138、方差≈4.571（教材「SD=2」为总体值）。清单 §9/#109、§12/#17、Omni/ToolDone TSV、README 已标已上线。catalog count **69**。build:site + lint:seo + TOOL_SLUG isolation（CROSS_TOOL_UPDATE=1）通过。

[actions]
- work-tasks/how-to-calculate-standard-deviation/00–03
- src/pages/howToCalculateStandardDeviationPage.ts
- src/site/tool-catalog.d/how-to-calculate-standard-deviation.json
- src/site/i18n/tools/how-to-calculate-standard-deviation/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-standard-deviation.svg
- docs inventory + Omni/ToolDone TSV + README
- npm run coverage:gate (0b/2/4/all); npm run build:site; npm run lint:seo; lint:tool-isolation
