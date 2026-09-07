Date: 2026-09-07 22:25
Summary: HTML-to-Word Convert now shows the same kind of progress HUD as batch webpage-to-PDF: large percent, step pills, striped bar, and a spinner on Convert.
Visibility: people

[question]
进度不够明显，仿照http://127.0.0.1:8788/zh/tools/batch-convert-web-pages-to-pdf

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document
Related: https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
Convert on HTML-to-Word only updated a small muted `#chwStatus` line (`aria-live`). Fast jobs finished before anyone noticed. The user pointed at **批量把网页转成 PDF**, which uses a sticky HUD: spinning ring, large percent, elapsed seconds, striped bar, and Fetch / Images / PDF capsules.

## Process
Copied that HUD chrome into `convertHtmlWebPagesToWordDocumentPage.ts` (not the per-URL result table — this slug is one `.docx`, not a ZIP of many PDFs). Phases match this job: Fetch (URL tab only; paste HTML marks Fetch done), Map (sanitize + `htmlToBlocks`), Pack (`Packer.toBlob`). `yieldUi()` runs between phases so the bar paints before heavy work. Convert gets a Bootstrap spinner like `OftPdfWork.setBusy`. Status text uses `.is-busy` (bold, primary blue). Done stays at 100% for 900 ms then hides, same as the PDF batch page.

Ten-locale HUD keys (`hud_title`, step pills, elapsed template, mapping/packing status) were written independently.

## Root cause / analysis
The converter skill already asks for a visible progress bar on long convert jobs. A single status paragraph is easy to miss next to the toolbar, especially when loadSample auto-converts on entry. Reusing the PDF batch HUD pattern keeps the two neighboring converters visually consistent without pulling pdf.js into this page.

## Solution
Open Advanced is unchanged. Click Convert (or Load sample): a blue card appears under the status line with percent, steps, and elapsed time. After success the card flashes 100% then folds; Download stays enabled.

## Notes / boundaries
Not a batch table. Paste HTML skips the network fetch but still shows Map then Pack. `PAGES_CACHE_VERSION` is 4.60 so the local Worker cache drops the old HTML.

[actions]
- `src/pages/convertHtmlWebPagesToWordDocumentPage.ts`: HUD CSS/HTML, `openHud` / `setPhase` / `finishHud`, Convert spinner
- Ten-locale shards: `hud_*`, `status_mapping`, `status_packing`
- `wrangler.jsonc`: cache version 4.60
