Date: 2026-09-08 22:15
Summary: Shipped batch-convert-scanned-pdf-to-word-with-ocr — pdf.js raster plus serial OCR into one sectioned Word file, not a JPG-batch accept swap.
Visibility: people

[question]
实现

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-scanned-pdf-to-word-with-ocr
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-scanned-pdf-to-word-with-ocr

[try to solve]
## Context
N4 was briefed as a scanned-PDF queue that must rasterize pages, OCR them, and download one Word file. Neighbors already cover digital text-layer PDF→Word (A2) and photo OCR→Word (N4-jpg-batch). Extra Information Gain had to be PDF-only intake, page skip, and a headed DOCX — not changing the photo tool’s `accept`.

## Process
1. Catalog shard (`page.style: opts`, `pdf` / `pdf-docs`), ASCII icon, and `batchConvertScannedPdfToWordWithOcrPage.ts`.
2. Client pipeline: PDF dropzone (reject images), peek page counts with pdf.js, caps 5 files / 20 pages / 12 MB, Convert all loads Tesseract once, serial page render → OCR → one `docx` Blob. Gold HUD (Load / Render / Read / Pack) with CSS spin so a frozen main thread still shows motion. No auto-`loadSample` (Tier 2 WASM). Load sample builds a two-page Helvetica PDF via pdf-lib and runs the same Convert all path.
3. English master copy, then independent ten-locale shards from `03-locale-briefs.md`. How labels match Convert all / Download Word (and locale button strings).
4. Neighbor FAQ on A2, N4-jpg-batch, and extract-text-from-pdf now name this H1 (`CROSS_TOOL_UPDATE=1`). README and ocr-scan planner marked implemented.
5. `coverage:gate --phase=all`, `lint:tool-page --require-html`, `lint:seo`, `lint:vendor`, isolation, and `verify:tool` all green.

## Root cause / analysis
A scanned PDF has no reliable selectable text layer. Copying A2 would fail; copying N4-jpg-batch would be a doorway. The product difference is **page rasterization plus a file/page Word outline**.

## Solution
Ship this slug only. One PDF still uses Convert all / Download Word. Failed pages skip. Default includes the page picture above OCR text. Digital text-layer files and JPG stacks stay on neighbor URLs.

## Notes / boundaries
- Inbound related-graph warn: this slug is not yet listed in other tools’ `related` arrays (FAQ names it). Optional follow-up.
- Live click-through of Convert all was not run in a browser this session; prerendered HTML was checked for buttons, `accept=application/pdf`, HUD, `loadSample`, and `/{(\w+)}/` templates.
- Caps: 5 PDFs, 20 pages, 12 MB. Handwriting and table layout are not promised.

[actions]
- Added `src/site/tool-catalog.d/batch-convert-scanned-pdf-to-word-with-ocr.json`, `src/pages/batchConvertScannedPdfToWordWithOcrPage.ts`, `src/site/i18n/tools/batch-convert-scanned-pdf-to-word-with-ocr/*`, `public/icons/tools/batch-convert-scanned-pdf-to-word-with-ocr.svg`
- Neighbor FAQ: `batch-convert-jpg-to-editable-word-with-ocr`, `turn-pdf-into-word-document`, `extract-text-from-pdf`
- README + ocr-scan planner/README
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-convert-scanned-pdf-to-word-with-ocr`
