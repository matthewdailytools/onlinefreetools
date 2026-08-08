Date: 2026-08-08 20:39
Summary: Implemented full crop-pdf tool (#61) with pdf-lib margin trimming, 10-locale i18n, and all gates green.

[question]
Implement full `crop-pdf` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: crop-pdf, category: pdf, #61
- Title: "Crop PDF — Trim Page Margins in Your Browser"
- Tech: pdf-lib@1.17.1 CDN. For each page, get size via getSize(), then setCropBox (and setMediaBox if available) shrunk by uniform or per-side margins in pt. UI: four number inputs top/right/bottom/left (default 36 each) OR a single "all sides" that syncs. Show stats with cropped dimensions. Declare NOT a pixel editor in FAQ.
- Reject margins that would make width/height <= 10pt.
- related: ["organize-pdf","rotate-pdf"]
- loadSample(): 1-page sample, crop 36pt all sides, downloadable cropped.pdf, stats show sizes
- Privacy, 25MB, encrypted errors

## Create catalog, icon, cropPdfPage.ts, 10 i18n full independent.

## Update 02/03 1b+2b (en,zh,es,ja), inventory #61, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=crop-pdf --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=crop-pdf npm run lint:tool-isolation

No plan/commit. 中文 brief. Chinese comments.

[try to solve]
已完成 `crop-pdf`（清单 #61）全量实现，所有门禁通过。

**页面**：`src/pages/cropPdfPage.ts` — pdf-lib@1.17.1 CDN；上/右/下/左 +「四边相同」同步；每页 `setCropBox` + `setMediaBox`；裁后宽/高 ≤10pt 拒绝；进页 `loadSample()` 单页 420×300、四边 36pt → `cropped.pdf` + 尺寸统计；25MB 警告、加密/损坏错误。

**工程**：catalog 分片、SVG 图标、10 语 i18n 独立重写；related `organize-pdf` / `rotate-pdf`；FAQ 明确非像素拖拽编辑器。

**文档**：`02`→implemented、`03`→i18n-done（1b/2b 行）；inventory #61 已上线；README 中英各一条。

**门禁**：`merge:tools`、`coverage:gate --phase=all`、`build:site`、`lint:seo`、`lint:tool-isolation` 全部 OK。

[actions]
- src/site/tool-catalog.d/crop-pdf.json
- src/pages/cropPdfPage.ts
- public/icons/tools/crop-pdf.svg
- src/site/i18n/tools/crop-pdf/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts
- work-tasks/crop-pdf/02-tool-info.md, 03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md, README.md
