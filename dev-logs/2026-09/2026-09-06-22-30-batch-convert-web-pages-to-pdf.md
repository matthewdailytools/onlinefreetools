Date: 2026-09-06 22:30
Summary: Ship a batch web-page-to-PDF tool that converts a URL list to a ZIP of A4 PDFs, reusing the HTML-to-PDF fetch and capture pipeline.
Visibility: people

[question]
立项：batch convert web page to pdf，并实现（参考convert-html-to-pdf 的实现）

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
The site already had **Convert HTML to PDF** (`convert-html-to-pdf`): paste HTML or load **one** URL, preview, download one PDF. The new request is a **batch** job: many public page URLs at once, one PDF per URL, take them away as a ZIP. That is a different primary control and output, so it is not a doorway retitle of the neighbor page.

## Process
1. Wrote `work-tasks/batch-convert-web-pages-to-pdf/` (`00`–`03`): direction A (browser JS), slug `batch-convert-web-pages-to-pdf`, H1 **Batch convert web pages to PDF**. Coverage table mapped secondary phrases (multiple webpages, URL list, ZIP) into description / FAQ / use cases. Intent review: satisfy the list+ZIP task; leave single HTML paste on the neighbor page; do not crawl a whole sitemap.
2. PDF Keyword Planner N4 (`convert html pdf`) already belongs to `convert-html-to-pdf`. Ads/Planner for this slug: not applicable; FAQ points single-page HTML/URL searchers to the neighbor tool.
3. `coverage:gate --phase=0b` then catalog shard, icon, page, English i18n, `phase=2`. Ten locales rewritten from local search phrases (zh H1「批量把网页转成 PDF」, es「Convertir varias páginas web a PDF」, ja「複数のウェブページをPDFにまとめて変換」, and so on), then `phase=4` on en,zh,es,ja.
4. Implementation reuses `GET /api/tools/convert-html-to-pdf` and `/asset` (no new Worker route). Client capture follows the neighbor page: DOMPurify, hidden iframe, image proxy, overflow unlock, html2pdf A4. Successful rows go into a ZIP via fflate. Cap is 10 URLs, serial, failed rows skip.
5. **Load sample** fills two example.com URLs and converts **local HTML stand-ins** so the table and ZIP appear on first paint without fetching the live site (the single-page tool already showed that auto-fetching example.com can error on open). **Convert all** fetches the pasted addresses.
6. Isolation does not allow `src/pages/site/*.ts` for a single slug, so the capture helper is inlined in `batchConvertWebPagesToPdfPage.ts`. `verify:tool` ran coverage, full `build:site`, HTML smoke, SEO, vendor. Isolation still reports the **pre-existing** dirty `convert-html-to-pdf` files in the working tree (load-wait work from the same day); those were not edited for this slug.

## Root cause / analysis
Single-URL HTML conversion and multi-URL archival are the same capture engine but different user tasks. Splitting them keeps H1 honest: people searching “convert HTML to PDF” stay on the editor page; people with a **list** of help-center or policy URLs get a queue, per-row status, and a ZIP. Auto-running a live fetch on entry would couple first paint to whether example.com (or any sample host) allows the Worker fetch.

## Solution
- New tool: `/tools/batch-convert-web-pages-to-pdf`
- Related: `convert-html-to-pdf`, `combine-files-into-one-pdf`
- `localProcessing: false` because URL fetch goes through the edge once and is not stored; PDF bytes are built in the tab
- Home + README list entries added; English homepage card is present after `build:site`

## Notes / boundaries
- Not a site crawler: you paste URLs you already have (max 10).
- Login walls, JS-rendered apps, and print CSS often will not match the live page (same limits as the neighbor tool).
- Combining PDFs into one file is a different tool (`combine-files-into-one-pdf`).
- Isolation green for this slug alone requires a clean working tree or `CROSS_TOOL_UPDATE=1` if other tool shards are already dirty.
- Live click-through of Convert all against arbitrary public sites was not run in a headed browser in this session; prerendered HTML contains `loadSample()` on first paint and lint:tool-page `--require-html` passed.

[actions]
- Added `work-tasks/batch-convert-web-pages-to-pdf/`
- Added catalog shard, icon, `src/pages/batchConvertWebPagesToPdfPage.ts`, ten i18n shards
- Updated `README.md` tools list (zh + en)
- `npm run coverage:gate -- --slug=batch-convert-web-pages-to-pdf --phase=0b|2|4|all`
- `npm run build:site`; `npm run lint:tool-page -- --slug=batch-convert-web-pages-to-pdf --require-html`
