Date: 2026-09-06 16:03
Summary: PDF to JPG and Images to PDF now show a paged canvas preview of the conversion result before download.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/pdf-to-jpg http://127.0.0.1:8788/zh/tools/images-to-pdf  增加预览

## Tool links (English)
- https://onlinefreetools.org/tools/images-to-pdf
- https://onlinefreetools.org/tools/pdf-to-jpg
Chinese: https://onlinefreetools.org/zh/tools/images-to-pdf · https://onlinefreetools.org/zh/tools/pdf-to-jpg

[try to solve]
## Context
Both tools already converted in the browser and enabled Download after the auto sample, but the interactive area only showed a status line. Users could not check page order or JPEG quality without downloading. Sibling PDF tools (combine / merge style) already use the shared `OftPdfWork` canvas with Previous / Next.

## Process
1. Compared `pdfToJpgPage.ts` and `imagesToPdfPage.ts` with `combineFilesIntoOnePdfPage.ts`, which injects `pdfWorkUiBlockHtml` + `pdfWorkUiClientScript` and calls `work.showPreview(bytes)` after the result exists.
2. Images to PDF already kept `resultBytes` as a PDF. Wired the same progress + canvas block (`idPrefix: imgPdf`) and show the generated PDF after convert. Clear / reorder / orientation / fit still drop the result and hide the preview.
3. PDF to JPG outputs JPEG blobs (or a ZIP), not a PDF, so `OftPdfWork.showPreview` cannot render the deliverable. Reused the shared preview markup (`idPrefix: pdfToJpgJpg`) and painted the same JPEG blobs onto the canvas with Previous / Next. Progress still uses `OftPdfWork.bind('pdfToJpg')` during rasterize.
4. Preview labels come from core `pdf_work_*` keys (already localized in all ten languages). No new tool i18n keys.
5. Prerendered both slugs, gzipped, seeded the local R2 bucket, and cleared `.wrangler/state/v3/cache` so port 8788 served the new HTML. Playwright on the Chinese pages: sample preview visible, canvas non-zero, page text `第 1 / 2 页` (JPG) and `第 1 / 3 页` (images PDF), Next advances, Clear hides the wrap and disables Download. No pageerror.

## Root cause / analysis
The conversion pipelines already produced the bytes/blobs users need to inspect. The gap was UI: status text is not a substitute for seeing pages. PDF output can share `OftPdfWork`; JPEG output needs a small gallery on the same chrome so users see the actual JPG, not a second pdf.js render of the source file.

## Solution
After convert (including the auto sample), both pages show a paged preview. Images to PDF previews the result PDF. PDF to JPG previews each exported JPEG. Download stays the same. Clear / new files hide the preview until the next successful convert.

## Notes / boundaries
- Shared preview copy is `pdf_work_preview` / `pdf_work_prev` / `pdf_work_next` / `pdf_work_page`, not per-tool strings.
- Did not bump `PAGES_CACHE_VERSION`; local Cache API was cleared by deleting `.wrangler/state/v3/cache`. Production still needs the usual R2 upload plus Worker version bump on deploy.
- How-step (`how_item_*`) gaps noted in the 2026-09-06 QA report were out of scope.

[actions]
- Added result preview to `src/pages/imagesToPdfPage.ts` via `OftPdfWork.showPreview`
- Added JPEG page gallery preview to `src/pages/pdfToJpgPage.ts`
- Bumped `updatedAt` on both catalog shards via `tool:touch`
