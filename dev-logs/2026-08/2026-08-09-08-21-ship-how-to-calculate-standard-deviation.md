Date: 2026-08-09 08:21
Summary: Shipped §12 #17 how-to-calculate-standard-deviation end-to-end with coverage gates.

[question]
Ship ONE tool end-to-end. Slug: how-to-calculate-standard-deviation. §12 #17. NOT YMYL (statistics). Related: how-to-calculate-percentage-change + how-to-calculate-cagr if mean not shipped. Merge Omni variance/population-variance as modes. Pipeline 0b→ready→page/en→phase2→9 locales→phase4/all→build:site→lint:seo→isolation. Return sample SD confirmation and catalog count.

[try to solve]
Shipped `how-to-calculate-standard-deviation`: work-tasks 00–03 (0b coverage table); coverage:gate 0b/2/4/all green; Page + catalog + icon + independent ten-locale i18n; sample/population toggle with variance always shown. Classic set 2,4,4,4,5,5,7,9 → population SD=2, variance=4; sample SD≈2.138, variance≈4.571 (textbook “SD=2” is the population value). Inventory §9/#109, §12/#17, Omni/ToolDone TSV, and README marked live. Catalog count **69**. build:site + lint:seo + TOOL_SLUG isolation (CROSS_TOOL_UPDATE=1) passed.

[actions]
- work-tasks/how-to-calculate-standard-deviation/00–03
- src/pages/howToCalculateStandardDeviationPage.ts
- src/site/tool-catalog.d/how-to-calculate-standard-deviation.json
- src/site/i18n/tools/how-to-calculate-standard-deviation/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- public/icons/tools/how-to-calculate-standard-deviation.svg
- docs inventory + Omni/ToolDone TSV + README
- npm run coverage:gate (0b/2/4/all); npm run build:site; npm run lint:seo; lint:tool-isolation
