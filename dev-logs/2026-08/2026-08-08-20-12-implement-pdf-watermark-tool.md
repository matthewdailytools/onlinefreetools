Date: 2026-08-08 20:12
Summary: Implemented full pdf-watermark tool with pdf-lib, 10 locales, and all gates green.

[question]
Implement full `pdf-watermark` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: pdf-watermark, category: pdf, #56
- work-tasks/pdf-watermark ready. Title: "PDF Watermark — Stamp Text on Every Page Locally"
- Tech: pdf-lib CDN. Text watermark on every page via drawText (Helvetica). Controls: text, opacity (0.1–1), rotation degrees (-45 default), position (center/corners). Optional image watermark: if user picks PNG/JPG, embedJpg/embedPng + drawImage (scaled). related: check if add-watermark exists in catalog; if yes use ["add-watermark","pdf-page-numbers"] else ["organize-pdf","pdf-page-numbers"] (page-numbers may not exist yet — use ["organize-pdf","rotate-pdf"] then)
- loadSample(): 2-page PDF + text "DRAFT" → watermarked.pdf downloadable
- Privacy, 25MB, encrypted errors

## Create catalog, icon, pdfWatermarkPage.ts, 10 i18n locales (full keys, independent).

## Update 02/03 (1b+2b with en,zh,es,ja), inventory #56 已上线, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=pdf-watermark --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=pdf-watermark npm run lint:tool-isolation

No plan edit, no commit. 中文 brief. Chinese comments on code.

[try to solve]
已完成 `pdf-watermark` 全栈实现并通过全部门禁。

**交付物**
- `src/site/tool-catalog.d/pdf-watermark.json` — category pdf，related 因 `pdf-page-numbers` 未上线采用 `add-watermark` + `rotate-pdf`
- `src/pages/pdfWatermarkPage.ts` — pdf-lib drawText/drawImage；文字/透明度/旋转/位置/可选 PNG·JPG；25MB 警告；加密错误；进页 `loadSample()` 两页 + DRAFT → `watermarked.pdf`
- `public/icons/tools/pdf-watermark.svg`
- `src/site/i18n/tools/pdf-watermark/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts` — 十语完整键、独立重写
- `work-tasks/pdf-watermark/02-tool-info.md`、`03-locale-briefs.md` — 1b/2b 多轮记录；03 → `i18n-done`
- `docs/2026-08-08-tool-inventory-table.md` #56 → 已上线
- `README.md` 中英工具清单各一条

**门禁（全部通过）**
- `coverage:gate --phase=all`
- `build:site`（catalog 51 工具）
- `lint:seo`
- `lint:tool-isolation`（CROSS_TOOL_UPDATE=1）

[actions]
- src/site/tool-catalog.d/pdf-watermark.json
- src/pages/pdfWatermarkPage.ts
- public/icons/tools/pdf-watermark.svg
- src/site/i18n/tools/pdf-watermark/*.ts（10 语）
- work-tasks/pdf-watermark/02-tool-info.md, 03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md, README.md
