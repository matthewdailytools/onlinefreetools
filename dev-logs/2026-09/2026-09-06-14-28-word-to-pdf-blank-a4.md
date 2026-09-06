Date: 2026-09-06 14:28
Summary: Word→PDF looked blank because html2pdf snapped the small gray HTML preview box onto A4; capture now uses an isolated A4-ratio iframe document.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/convert-word-document-to-pdf  转换后的pdf是空白的

## Tool links (English)
- https://onlinefreetools.org/tools/convert-word-document-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-word-document-to-pdf

[try to solve]
## Context
On the local preview (`http://127.0.0.1:8788/zh/tools/convert-word-document-to-pdf`) the sample `.docx` converted without an error (status「完成」, download enabled), but the PDF preview looked empty: a full A4 page with at most a thin gray strip at the top. The HTML preview still showed the sample sentence「用于转换的 Word 示例段落。」, so mammoth was not the failure.

## Process
1. Confirmed html2pdf.bundle was already loaded (the earlier `jsPDF undefined` crash from 2026-09-06 09:39 was already fixed). Conversion reached `OftPdfWork.showPreview`.
2. Playwright against Chrome measured the pdf.js canvas: 744×1052 (A4 at scale 1.25) with only ~126 dark pixels in an 180×12 box at the top-left, plus ~84k light-gray pixels. That matches a screenshot of `#wordPdfHtmlPreview` (gray 8rem min-height box) scaled to page width, not a missing PDF.
3. Compared with Convert HTML to PDF: that tool snapshots a sandboxed iframe document. Word→PDF called `html2pdf().from(previewEl)` on the in-page preview div.
4. Replaced the preview `<div>` with an iframe, wrote mammoth HTML as a full document (white background, `#111` text, CJK-capable fonts, Word-like padding), and captured `documentElement` with html2canvas `windowWidth`/`height` padded to whole A4-ratio pages so a short sample stays one page.

## Root cause / analysis
html2pdf.js rasterizes the source node, then fits that bitmap to A4 width. The Word preview node was a short gray Bootstrap box (~960×128). Fitting it to 595pt made the paragraph ~9pt of ink on an otherwise white page—easy to read as “blank,” especially below the fold. A second blank page appeared when capture height was a few pixels taller than one A4 after width-fit (html2pdf sliced a sliver page).

This is not a CJK font embedding issue: the pipeline already stores a JPEG of the canvas, so glyphs are pixels. Isolation from the tool page also avoids html2canvas failing on Bootstrap color functions.

## Solution
- Preview and PDF share one iframe document (`sandbox="allow-same-origin"`), max-width 794px.
- Capture options: `backgroundColor: #ffffff`, `scrollX/Y: 0`, `pagebreak: css+legacy`, height rounded to `N × width × (841.89/595.28)`.
- Local verification (Playwright, cache `PAGES_CACHE_VERSION` 4.37): HTML iframe text matches the sample; PDF preview「第 1 / 1 页」; canvas shows the same sentence at the top-left with white margins; no pageerror.

## Notes / boundaries
- mammoth still flattens headers, text boxes, and complex Word layout; a file whose HTML preview is empty will still produce an empty PDF.
- Long documents paginate by screenshot height, not native Word page breaks.
- Production needs the usual `upload:r2` plus Worker `PAGES_CACHE_VERSION` 4.37 (or later) so cached HTML is not the old div-capture page.

[actions]
- `src/pages/convertWordDocumentToPdfPage.ts`: iframe preview + A4-ratio html2pdf capture
- `src/site/tool-catalog.d/convert-word-document-to-pdf.json`: `updatedAt` via `tool:touch`
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.35 → 4.37
- prerender + gzip + local R2 upload for this slug
