Date: 2026-08-21 11:12
Summary: Require ordered How steps for all tools; renderer + image-crop pilot.

[question]
好的（确认：把「全工具须有操作步骤」写入 rules，改 renderToolIgSections 支持 how_item_*，image-crop 试点）

[try to solve]
Shipped:
1) `renderToolIgSections` supports `how_item_1…n` → visible `<ol>`; `how_body` as overview; body-only still falls back to a single `<p>`.
2) `tool-creation.mdc` / `tool-i18n-seo.mdc` / copilot-instructions: new tools hard-require how_item; migrate when rewriting existing copy; Rules must not pose as steps; no HowTo schema stacked for AI.
3) `image-crop` 10-locale pilot: overview + 5 steps aligned to button copy; `tool:touch` + `merge:tools` ran. `build:site` did not finish full prerender (missing bootstrap dep); source and merged i18n were ready.

[actions]
- src/pages/site/toolContent.ts
- .cursor/rules/tool-creation.mdc, tool-i18n-seo.mdc
- .github/copilot-instructions.md
- src/site/i18n/tools/image-crop/{en,zh,es,de,fr,ja,pt,id,ru,ar}.ts
- npm run tool:touch -- --slug=image-crop; npm run merge:tools
