Date: 2026-09-06 14:45
Summary: Word HTML preview now uses the same A4 page chrome as the PDF preview (prev/next, synced page number).
Visibility: people

[question]
word预览和pdf预览一样，采用分page预览

## Tool links (English)
- https://onlinefreetools.org/tools/convert-word-document-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-word-document-to-pdf

[try to solve]
## Context
After the blank-PDF fix, Word still showed a scrolling iframe while the PDF used prev/next on an A4 canvas. The request was to make the Word preview the same paginated page viewer.

## Process
1. Wrapped the Word iframe in the same nav + canvas-wrap chrome as `pdfWorkUiPreviewHtml` (上一页 / 第 n / total / 下一页).
2. Laid out mammoth HTML at a fixed 794px A4 width, padded `body.minHeight` to whole pages, and showed one page by scrolling the iframe document (`scrollTop = (n-1) * pageH`) with CSS scale to match the PDF canvas width.
3. Measured page count from `body.scrollHeight` only. Using `html.scrollHeight` counted the iframe viewport and inflated a short document into many pages; measuring while the iframe was forced to 8000px did the same.
4. Extended `OftPdfWork.bind` with `setPage` and `onPageChange` so flipping Word or PDF moves both.
5. html2pdf `css`/`legacy` pagebreak plus an exact A4-tall canvas produced a blank extra PDF page. Capture height is now `box.height - 2` with `pagebreak: avoid-all`.

## Root cause / analysis
A scrolling iframe is a continuous document; the PDF preview is already sliced to A4. Matching them means the HTML side must use the same page height (`794 * 841.89/595.28`) and the same pager, then capture that same box for jsPDF. Viewport-sized `scrollHeight` and html2pdf’s extra slice were why the two counters disagreed (1 vs 2, then 2 vs 3).

## Solution
Word preview is an A4 page with the same buttons as PDF preview. Sample `.docx` repeats the sample sentence enough times to fill two pages so Next is usable on first load. Playwright: both start at「第 1 / 2 页」; Word Next moves both to「第 2 / 2 页」. `PAGES_CACHE_VERSION` 4.43.

## Notes / boundaries
- Page breaks follow screenshot height, not Word’s native section breaks.
- `setPage` is unused by other PDF tools unless they pass `onPageChange`.

[actions]
- `src/pages/convertWordDocumentToPdfPage.ts`: paginated Word iframe, synced pager, capture height trim
- `src/pages/site/pdfWorkUi.ts`: `setPage` + `onPageChange`
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.37 → 4.43
