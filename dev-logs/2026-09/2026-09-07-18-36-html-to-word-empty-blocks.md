Date: 2026-09-07 18:36
Summary: HTML-to-Word Convert failed on full pages and header-wrapped markup because the mapper only walked a few tags as direct children.
Visibility: people

[question]
https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document Could not build a Word file from that HTML. Check the markup and retry.

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document

[try to solve]
## Context
The live Convert HTML web pages to a Word document page showed the generic convert error. Sample conversion in Chrome against the prerendered page succeeded, so the docx vendor and Packer.toBlob path were not the first failure.

## Process
Reproduced Packer.toBlob for the sample heading/list/table/link structure with the vendored UMD in Node: it produced a valid .docx. Playwright against the local prerendered page and against production showed Load sample succeeding. That narrowed the failure to HTML the mapper did not turn into any blocks: `htmlToBlocks` then threw `empty`, which the catch mapped to the same “Could not build a Word file” string as a real Packer failure.

Inspected DOMParser on a full document whose body is only `<header><h1>…</h1><p>…</p></header>`. The walker only mapped `h1`–`h6`, `p`, `ul`/`ol`, `table`, `img`, and a short list of containers (`div`/`section`/`article`/`main`/`blockquote`). `header`, `nav`, `aside`, `figure`, stray `span`, and other wrappers were skipped, so `blocks` stayed empty.

Also checked `loadDocxLib`: `import()` of the UMD resolves to an empty ES module namespace. If the classic script did not attach `window.docx`, Convert would call `new pair.docx.Document` on that empty object and hit the same generic error.

## Root cause / analysis
Two stacked issues, one user-visible on real pages:

1. The mapper required mapped tags as (almost) direct children of a wrapper div. Real HTML and Word-exported HTML wrap copy in `header` / `Section1` / unknown tags, so Convert produced zero blocks.
2. The docx loader could resolve a useless `import()` namespace and report it as a convert/markup failure instead of a library load failure.

## Solution
Walk `document.body` (fragments and full documents both land there). Recurse into unknown containers. Treat inline-only roots (`span`) as a paragraph. If still empty, fall back to `body` textContent. Pick the docx namespace from UMD / `default` / `window.docx` only when `Document` and `Packer` exist. Tables get explicit DXA widths.

Verified in Chrome: sample, header-wrapped full document, and span-only HTML all enable Download. Uploaded the ten language HTML.gz objects to R2 (`upload:r2` changed 10 files).

## Notes / boundaries
R2 already has the new ten-language HTML.gz. The public URL can still serve a Cache API HIT of the old mapper for up to 24h (`s-maxage=86400`) until `PAGES_CACHE_VERSION` is 4.56 on the Worker (commit + git push of `wrangler.jsonc`) or an admin exact-key purge. CSS layout is still not mapped. Blocked images are still skipped.

[actions]
- Updated `src/pages/convertHtmlWebPagesToWordDocumentPage.ts` mapper and docx loader.
- Bumped catalog `updatedAt`; prerendered and gzipped this slug; `npm run upload:r2`.
- Bumped `wrangler.jsonc` `PAGES_CACHE_VERSION` to 4.56 so Worker Cache API keys change after git push.
