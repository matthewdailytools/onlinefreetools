Date: 2026-09-07 08:45
Summary: Shipped batch convert web pages to JPG with viewport, JPEG quality, and full-page vs first-screen capture so it is not a PDF-batch doorway.
Visibility: people

[question]
立项：batch convert web pages to jpg，并实现（参考batch convert web page to pdf的实现），过程中info Gain一定要分析出和实施好方案和差异性方案

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-jpg
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-jpg
Neighbor for contrast: https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
The site already had a URL-list batch that builds A4 PDFs. The request was a sibling that turns the same kind of list into JPEGs, with Information Gain that is real in the product, not a title/suffix swap (doorway). Keyword Planner also has a “webpage to jpg / url to jpg” cluster; those single-URL jobs had to be absorbed into one page rather than a second URL.

## Process
1. Wrote `work-tasks/batch-convert-web-pages-to-jpg/` (00–03), filled coverage + intent + Ads tables, ran `coverage:gate --phase=0b`.
2. Compared SERP/neighbors: batch web-to-PDF (A4 pagination), convert-html-to-pdf (paste HTML / one URL), pdf-to-jpg (upload a PDF), bulk image-to-jpg (local photos).
3. Implemented a new page cloned from the PDF batch for fetch, sanitize, progress HUD, and ZIP — then replaced html2pdf/jsPDF with html2canvas → `canvas.toBlob('image/jpeg')`.
4. Added first-screen controls that change the raster: viewport 1280 / 768 / 390, JPEG quality 0.7 / 0.85 / 0.95, full page vs first screen, plus the existing canvas-edge cap and noscript/refresh strip.
5. Ten-locale rewrite from locale briefs (not English calque). `verify:tool --slug=batch-convert-web-pages-to-jpg` went green.

## Root cause / analysis
A JPEG sibling that only changed H1 and `.pdf` → `.jpg` would be scaled thin content: same A4 print pipeline, same artifact family. Searchers who want screenshots (tickets, chat, mobile vs desktop QA) need a different layout and a different file. The IG that actually moves the pixels is:

| Neighbor | Artifact | This page |
|---|---|---|
| Batch web → PDF | A4 paginated documents | One JPEG per URL at a chosen viewport |
| PDF → JPG | Uploaded PDF pages | Webpage URLs, not a PDF file |
| Bulk images → JPG | Local photos | HTML capture, not an image upload |

Planner “webpage to jpg” (100–1,000) is the same job with one line in the list, so it is absorbed (no extra doorway URL). `free` / `online` were not stuffed into the H1.

## Solution
- Slug / H1: `batch-convert-web-pages-to-jpg` / **Batch convert web pages to JPG**.
- Fetch: existing `GET /api/tools/convert-html-to-pdf?url=` (once, not stored). `localProcessing: false`.
- Capture: inlined html2canvas JPEG pipeline (isolation: no new shared helper). Same sanitizer as PDF batch (`noscript` / `meta refresh` stripped; `phone` kept).
- Controls that change output: viewport width, JPEG quality, full page vs first screen; canvas edge capped at 8192.
- UX: serial, max 10 URLs, skip failures, ZIP via fflate. Progress HUD. `loadSample()` exists for the button and lint, but does **not** auto-run on entry (html2canvas would freeze the tab).
- Related: batch web-to-PDF, pdf-to-jpg. FAQ/Rules state the three-way split in visible copy.
- Ship: `npm run verify:tool -- --slug=batch-convert-web-pages-to-jpg` OK. Home cards and prerendered HTML include the new slug.

## Notes / boundaries
- Not a site crawler; not an HTML paste editor; not A4 print; not PDF-file rasterization.
- Inbound `related` from the PDF sibling was left unchanged to keep tool-isolation on this slug (SEO link validator warned of zero inbound related).
- Live click-through in a running browser was not available in this session; verification used `verify:tool`, prerendered HTML (H1, viewport/quality/capture selects, html2canvas, click-only `loadSample`), and home-card presence on `/` and `/zh/`.

[actions]
- Added `work-tasks/batch-convert-web-pages-to-jpg/` briefs with IG, Ads, and intent tables
- Added catalog shard, icon, `batchConvertWebPagesToJpgPage.ts`, ten i18n shards
- Updated `README.md` zh/en tool lists
- Ran `coverage:gate` 0b→2→4/all and `verify:tool`
