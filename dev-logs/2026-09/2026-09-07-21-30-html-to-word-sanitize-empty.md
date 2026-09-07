Date: 2026-09-07 21:30
Summary: HTML-to-Word still showed the generic convert error after the walker fix because DOMPurify’s HTML profile deleted SVG/MathML text and any Packer/image throw aborted the whole document.
Visibility: people

[question]
https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document  这段 HTML 没能生成 Word 文件，请检查标记后再试。

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document

[try to solve]
## Context
The Chinese Convert HTML web pages to a Word document page still showed `tool_convert_html_web_pages_to_word_document_err_convert` (“这段 HTML 没能生成 Word 文件，请检查标记后再试。”) after the earlier header/walker fix was already live (`processNode` + `PAGES_CACHE_VERSION` 4.56). Load sample succeeded on production, so the docx vendor and the sample heading/list/table path were not the failure.

## Process
Fetched the live zh page with `Accept: text/html` (without that header the Worker returns 404). Confirmed the recursive mapper was in the HTML (`document.body` walk, `SKIP`, `processNode`). Playwright against production: sample, header-wrapped documents, Wikipedia URLs, nested tables, and Word-exported HTML all enabled Download.

The same generic string is used for two different throws: `htmlToBlocks` → `Error('empty')` when zero blocks, and any later exception (`Document` / `Packer.toBlob`). Mapped cases that still failed on the live mapper:

- SVG with `<text>` and MathML: `DOMPurify.sanitize(..., { USE_PROFILES: { html: true } })` returned `""` (profile strips those trees including their text).
- Image-only markup with `alt` but a non-http `src`, or CORS-blocked `fetch(src, { mode: 'cors' })`: no blocks, same error.
- `:scope`-unsafe nested `querySelectorAll('tr')` was already tolerated for simple nested tables; `new Table()` was still able to abort the whole `Promise` chain if it threw.

Local prerender after the fix: SVG text, MathML, `<form>` wrappers, image `alt` fallback, and sample all produced a .docx. Truly empty `<div><span></span></div>` still errors, which is correct.

## Root cause / analysis
The 18:36 walker fix made ordinary HTML documents work. Real paste still died in two ways that look identical to the user:

1. **Sanitize too strict.** The HTML profile is meant for a safe subset. It removes `svg` and `math` entirely (`KEEP_CONTENT` does not preserve that text). A chart, formula, or SVG export then maps to zero blocks, and the catch shows “check the markup” even though the source had readable text.
2. **One node fails, whole Convert fails.** Images were fetched with browser CORS (most CDNs fail), always stamped `type: 'png'`, and a thrown `Table` / `Packer` rejected the only Promise. Text that had already been mapped never reached Download.

`Error('empty')` was not mapped to the empty-input string; it used the same convert error as Packer, so “no blocks” and “library threw” were indistinguishable.

## Solution
Loosen sanitize: forbid `script` / `iframe` / `object` / `embed` / `frame` / `frameset` only, and explicitly allow SVG/MathML/content tags. Walk `form` / `svg` / `math` / `template.content`; treat `br`/`hr` as empty paragraphs; use `alt`/`title` when an image cannot be embedded. Fetch remote images through `/api/tools/convert-html-to-pdf/asset` (same proxy as HTML-to-PDF), sniff PNG/JPEG/GIF/BMP, skip other bytes. Wrap table mapping; if `Packer.toBlob` throws with images on, retry without images; if blocks are still empty, strip tags from the raw HTML for a plain-text fallback. Strip XML 1.0 illegal characters from runs.

Verified in Chrome against the prerendered zh HTML: sample, SVG text, MathML, header, form, image alt, and text+failed image all enable Download.

Bumped `PAGES_CACHE_VERSION` to 4.57 so the Worker Cache API key changes after git push (HTML `s-maxage=86400`).

## Notes / boundaries
Truly empty markup (no text, no alt, no tags that survive) still shows the convert error. CSS layout is still not mapped. URL fetch of this site’s own hostname can 400 from the HTML fetch API (blocked/non-HTML handling); that path uses the URL error string, not the convert string. Production tool HTML updates only after `upload:r2` plus a Worker deploy that picks up 4.57.

[actions]
- Updated `src/pages/convertHtmlWebPagesToWordDocumentPage.ts` sanitize, image proxy, table/Packer fallbacks.
- Bumped catalog `updatedAt`; prerendered and gzipped this slug.
- Bumped `wrangler.jsonc` `PAGES_CACHE_VERSION` to 4.57.
