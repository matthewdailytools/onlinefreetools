Date: 2026-09-07 15:59
Summary: Shipped two converter tools with independent artifact contracts: lossless PNG screenshots (transparent / 2×) versus an editable Word .docx mapped from HTML, not a screenshot and not A4 PDF.
Visibility: people

[question]
像上面一样立项和实现：batch convert web pages to png和convert html web pages to word document，注意不同工具的要有足够不同的info gain

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-png
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-png
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document

[try to solve]
## Context
The request was to brief and implement two tools the same way as the existing batch webpage-to-JPG / webpage-to-PDF pair, with enough information gain that they are not doorway pages that only swap a file extension.

Existing neighbors already occupy two jobs:

- Batch JPG: lossy viewport rasters, quality slider, chat/ticket grids.
- Batch PDF: A4 portrait pagination for print/archive.
- Convert HTML to PDF: paste HTML → printable PDF.
- Turn PDF into Word: PDF text layer → .docx.
- Images to Word: photos into a Word file, not HTML structure.

The new pages had to occupy **different contracts**, not “same fetch pipeline, different suffix”.

Keyword Planner files were already in the pool:

- PNG: `docs/seo/keywords/todo/web2png-Keyword Planner 09-06-2026 at 04-30-57.csv` — `webpage to png` (100–1,000) absorb into the batch list (one URL = one line). Do not split a single-URL doorway.
- Word: `docs/seo/keywords/todo/worddocument-Keyword Planner 09-06-2026 at 05-11-33.csv` — head term `html to word` (1k–10k) as the default paste-HTML job; `convert webpage to word` into a Page URL tab. Drop mhtml / Chrome “complete page”.

## Process
1. Wrote `work-tasks/` briefs for both slugs in parallel (00–03), including coverage tables, Ads/Planner long-tail rows, and 0i intent review. Ran `coverage:gate --phase=0b` per slug before engineering.
2. Implemented **serially** (coverage-pass rule): PNG Page/i18n to `phase=4` green before Word `*Page.ts` / i18n.
3. PNG engineering: catalog `page.style: opts`; URL list → html2canvas → `canvas.toBlob('image/png')`; advanced settings Viewport / Background white|transparent / Scale 1×|2× / full vs first screen; **no JPEG quality slider**; ZIP `web-pages.png.zip`; sample URLs are UI component-kit pages (checkerboard, 1px borders, translucent card). Page load does **not** auto-run `loadSample()` because html2canvas can freeze the tab.
4. Word engineering: default **Paste HTML** tab plus **Page URL** tab; Convert then Download; advanced “Include images”; DOMPurify → DOMParser → docx mapping of h1–h6, p, ul/ol (plain `• ` / `1. ` prefixes, not numbering config), table, `ExternalHyperlink`, optional `ImageRun`. URL fetch reuses `GET /api/tools/convert-html-to-pdf?url=`. Same-origin `/vendor/docx/index.umd.js`. Page load **does** call `loadSample()` (no html2canvas).
5. Ten-locale independent rewrites (not English calques). PNG H1: “Batch convert web pages to PNG” / “批量把网页转成 PNG”. Word H1: “Convert HTML web pages to a Word document” / “把 HTML 网页转成 Word 文档”.
6. First PNG `verify:tool` failed `lint:seo` because zh `description` was 117 characters (need ≥120). Lengthened it to include 「网页转 PNG / 网址转 PNG」 (127). `lint:seo` reads **merged** `src/site/i18n/{lang}.ts`, so a shard fix without `merge:tools` still looks short.
7. Word `coverage:gate --phase=4` then `--phase=all` green. `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=convert-html-web-pages-to-word-document` green (full `build:site`, HTML smoke, SEO, vendor, isolation). Reverse `related` on JPG→PNG and HTML-to-PDF→Word.
8. Confirmed home cards in `public/index.html` and `public/zh/index.html`, prerendered `_pages` titles, and sitemap loc entries. No interactive browser session in this environment; Convert/Download behavior is covered by `lint:tool-page --require-html` plus the in-page `loadSample()` / Convert scripts.

## Root cause / analysis
Shared fetch (`/api/tools/convert-html-to-pdf?url=`) is an implementation detail. Unique copy has to be the **artifact**:

| Tool | Contract people can verify without the H1 | Forbidden near-clone |
|---|---|---|
| Batch JPG (existing) | Lossy JPEG, viewport, quality slider | A4 PDF |
| Batch PDF (existing) | A4 portrait pages | Tall JPEG |
| **Batch PNG (this)** | Lossless PNG, optional transparent background, 1×/2× for 1px UI edges, ZIP | JPEG renamed `.png`; no quality slider |
| **HTML→Word (this)** | Editable .docx styles (headings/lists/tables/links) | Screenshot stuffed into Word; A4 PDF; PDF as input; `.mhtml` |

If PNG copy talked about “quality” or “print pages”, or Word copy talked about “capture the page”, stripping the title would leave two format-suffix variants. That is doorway / scaled-content risk under Google’s people-first and spam policies. Information gain here is a content principle (verifiable extra vs SERP neighbors), not a claimed ranking switch.

Planner absorb vs build: one-URL `webpage to png` is the same job as the batch list. `html to word` vs `convert webpage to word` is the same mapping with two inputs (paste vs fetch), so one slug with tabs, not `/html-to-word` plus `/webpage-to-word`.

## Solution
- PNG settings expose **Background** and **Scale**, not JPEG quality. Sample HTML is a translucent UI kit so transparency is visible. FAQ points JPG (chat raster) and PDF (A4) as other jobs.
- Word default path is paste HTML → Convert → Download `.docx`. The URL tab absorbs webpage-to-word. FAQ points HTML→PDF (print), PDF→Word (already a PDF), and PNG/JPG batch (raster). Copy states CSS will not be pixel-perfect and Chrome complete-page / mhtml is out of scope.
- Both use `localProcessing: false` because URL fetch is an edge hop (paste/PNG encode still stay in the tab). Privacy copy says fetch-once, not stored.
- Ship gates: coverage 0b → 2 → 4 → all; `verify:tool` (Word, after PNG SEO fix). README EN/ZH list entries. Catalog `related` ≥2.

## Notes / boundaries
- Tool HTML on production is served from R2 (`public/_pages` is gitignored). `git push` alone does not refresh live tool bodies; run `npm run upload:r2` when you want production to match.
- Isolation: editing a neighbor’s `related` requires `CROSS_TOOL_UPDATE=1`.
- `lint:seo` description floor is 120 characters **after merge**. Count CJK on the merged string.
- PNG `loadSample()` is click-only; Word auto-runs sample because docx mapping is cheap.
- Lists in Word use visible prefixes instead of docx numbering APIs (avoids a brittle 8.5 numbering config).
- Images in Word are optional and can fail cross-origin. Scripts / login walls fail on URL fetch, same as the other webpage converters.
- This session did not commit or push.

[actions]
- Briefs: `work-tasks/batch-convert-web-pages-to-png/`, `work-tasks/convert-html-web-pages-to-word-document/`
- Catalog/pages/i18n/icons for both slugs; reverse related on JPG and HTML-to-PDF
- README EN/ZH tool list entries
- `coverage:gate` 0b/2/4/all; `CROSS_TOOL_UPDATE=1 verify:tool` for Word (full site build)
- Lengthened PNG zh meta description after first SEO lint fail (117 → 127)
