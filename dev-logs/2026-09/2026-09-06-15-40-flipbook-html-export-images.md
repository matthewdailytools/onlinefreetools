Date: 2026-09-06 15:40
Summary: The PDF flipbook HTML download now embeds rendered page images, so it opens offline at the original page size.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/make-pdf-flipbook  下载的html没有数据，而且尺寸也不对

## Tool links (English)
- https://onlinefreetools.org/tools/make-pdf-flipbook
Chinese: https://onlinefreetools.org/zh/tools/make-pdf-flipbook

[try to solve]
## Context
On Make a PDF flipbook, Download saved `pdf-flipbook.html`. Opening that file showed a blank canvas at the browser default 300×150 size, so it looked like both “no data” and “wrong size.” The in-page sample was also a stub 420×300 page, which did not look like a real document.

## Process
1. Read `src/pages/makePdfFlipbookPage.ts`. Export built a string that Base64-encoded the PDF and then, in a `type="module"` script, imported PDF.js from `https://onlinefreetools.org/vendor/pdfjs/`.
2. Opened the live Chinese tool at `http://127.0.0.1:8788/zh/tools/make-pdf-flipbook` and inspected the download path.
3. Confirmed the empty viewer: a `file://` HTML page cannot reliably start a PDF.js worker from another origin, so `getDocument` never rendered. The `<canvas>` never got `width`/`height` from the PDF viewport, so it stayed 300×150 and blank.
4. Replaced export with client-side rasterization (same idea as PDF to JPG): each page is drawn to an offscreen canvas and stored as a JPEG data URL. The saved HTML is only images plus prev/next, no PDF.js.
5. Sized the viewer from the bitmap’s aspect ratio, fitted to the window. Changed the sample to two A4 pages so Next works and the page looks like a document. Preview canvas now uses `width:auto; height:auto; max-width/max-height` so it keeps the PDF ratio.
6. Updated en/zh/ja copy that still said the HTML needed PDF.js and a one-page embed. Prerendered the slug, gzipped, seeded local R2, bumped `PAGES_CACHE_VERSION` so Cache API did not keep the old script.

## Root cause / analysis
Two separate failures stacked. First, the portable viewer was not portable: it depended on a cross-origin ES module worker, which `file://` and many local opens block. Second, canvas CSS used `max-width:100%` without `height:auto`, and the sample page was 420×300, so even a successful render looked cropped. Embedding PDF bytes cannot fix the first problem without inlining PDF.js (hundreds of KB) or requiring the network. Page images are the flipbook people expect and they work offline.

## Solution
- Download HTML contains JPEG data URLs for every page (`data:image/jpeg;base64,…`), not `atob` + PDF.js.
- Viewer `fit()` sets the frame width from `min(window, page bitmap)` and lets image height follow the real ratio.
- Sample: two A4 pages (595×842 pt) labeled “Flipbook page one/two.”
- Live Playwright on `http://127.0.0.1:8788/zh/tools/make-pdf-flipbook`: preview「第 1 / 2 页」, canvas bitmap 773×1094 (A4 ratio 0.707), download ~42 KB with two JPEGs and no `pdf.min.mjs`. Opening the file shows page images at ratio 0.706; Next goes to `2 / 2`. No pageerror.

## Notes / boundaries
- Large PDFs still make large HTML files; that is called out in FAQ.
- Production still needs the usual R2 upload plus Worker `PAGES_CACHE_VERSION` 4.48 (or later).
- Hard refresh `http://127.0.0.1:8788/zh/tools/make-pdf-flipbook` if an old cached copy of the tool page is still open.

[actions]
- `src/pages/makePdfFlipbookPage.ts`: image-based HTML export, A4 sample, canvas sizing
- `src/site/i18n/tools/make-pdf-flipbook/{en,zh,ja}.ts`: export copy no longer claims PDF.js on open
- `src/site/tool-catalog.d/make-pdf-flipbook.json`: `updatedAt` via `tool:touch`
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.46 → 4.48
- prerender + gzip + local R2 upload for this slug
