Date: 2026-09-09 00:15
Summary: Other OCR tools now use the same gold-standard progress HUD as scanned-PDF-to-Word, and first-run WASM/language-pack loads are named so the tab does not look frozen.
Visibility: people

[question]
把其他OCR也增加进度显示功能，类似https://onlinefreetools.org/zh/tools/batch-convert-scanned-pdf-to-word-with-ocr ，另外如果有大的js模块要load，要写清楚，避免用户不耐烦

## Tool links (English)
- https://onlinefreetools.org/tools/convert-a-jpg-to-text-with-ocr
- https://onlinefreetools.org/tools/batch-convert-jpg-to-text-with-ocr
- https://onlinefreetools.org/tools/batch-convert-jpg-to-editable-word-with-ocr
- https://onlinefreetools.org/tools/batch-convert-scanned-pdf-to-word-with-ocr
Chinese: https://onlinefreetools.org/zh/tools/convert-a-jpg-to-text-with-ocr

[try to solve]
## Context
Three JPG OCR pages only had a muted `aria-live` status line while Tesseract WASM (~4 MB) and language packs (a few MB) loaded on first Convert. That wait looks like a freeze. The scanned-PDF OCR page already had the gold-standard `.bcw-hud` card (percentage, capsules, elapsed time, striped bar with CSS transform sheen). The request was to give the other OCR tools the same HUD, and to spell out large module loads so users stay on the tab.

## Process
1. Confirmed the four OCR Page.ts files: only `batchConvertScannedPdfToWordWithOcrPage.ts` had `.bcw-hud`; the JPG tools used `setStatus('Loading OCR engine…')`.
2. Extracted shared HUD CSS into `src/pages/site/bcwHudCss.ts` so the three JPG pages match the PDF card without four copies of keyframes.
3. Wired HUD open → `yieldUi()` (one frame + 40 ms) → engine load → recognize, on Convert / Convert all / Load sample. Clear hides the card. Success stays at 100% with a next-step Download/Copy line; failure keeps a same-size red card.
4. Mapped `tesseract.js` logger statuses to human lines: core WASM, language data, recognizer start. PDF renderer and Word builder (~0.7 MB) get their own lines, but PDF.js load during queue peek does not steal the HUD (only when the card is already open).
5. Wrote ten-locale HUD/load strings (not title/H1 SEO). `status_loading` now says the first run is several megabytes and to stay on the tab.

## Root cause / analysis
The slow part is not OCR of a small sample — it is the first fetch of `tesseract-core-*-lstm.wasm.js` (~3.7 MB) plus `chi_sim`/`eng` traineddata. A one-line status cannot compete with a stuck main thread. The gold-standard HUD uses `transform` spin/sheen so something still moves if Bootstrap stripes freeze. Naming the load (“~4 MB WASM”, “language data”, “PDF renderer”) is the impatient-user fix; a generic “Loading…” is not.

## Solution
JPG single: Load → Read HUD; next step Copy text or Download TXT.
JPG batch text: Load → Read; next step Download ZIP; table rows still skip on failure.
JPG Word: Load → Read → Pack (docx UMD ~0.7 MB); next step Download Word.
Scanned PDF: existing HUD plus the same load copy for WASM, language packs, PDF renderer, and Word builder.
Verified: `lint:tool-page` (source + `--require-html`) on all four slugs; `npm run build:site`. No in-browser Convert click in this session (no browser MCP); prerendered HTML contains `.bcw-hud` and the first-run size copy.

## Notes / boundaries
This is chrome/progress, not a new slug or title rewrite. Isolation must use `CROSS_TOOL_UPDATE=1` because four OCR shards plus shared HUD CSS changed together. Second Convert in the same tab is faster: the worker is cached and the load capsules should pass quickly.

[actions]
- Added `src/pages/site/bcwHudCss.ts` and HUD markup/logic on the three JPG OCR pages
- Extended scanned-PDF OCR HUD with named first-run WASM / language / PDF / Word loads
- Ten-locale HUD keys; catalog `updatedAt` touch; `merge:tools` + `build:site`
