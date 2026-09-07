Date: 2026-09-07 17:13
Summary: Shipped a batch webpage-to-Excel converter whose artifact is HTML table cells in one .xlsx workbook, not a screenshot ZIP, A4 PDF, or Word prose.
Visibility: people

[question]
立项和实现：batch convert web pages to excel,注意不同工具的要有足够不同的info gain

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-excel
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-excel

[try to solve]
## Context
The request was to brief and implement **batch convert web pages to excel** with enough information gain that it is not a doorway next to the existing batch webpage converters (JPG / PNG / PDF) or HTML→Word.

Those neighbors already occupy:

- Batch JPG/PNG: viewport rasters, ZIP of images.
- Batch PDF: A4 portrait pages.
- HTML→Word: headings, lists, and paragraphs in an editable .docx.
- CSV ↔ JSON: a file you already have, not a webpage.
- Excel formula / invoice template pages: generate formulas or blank workbooks, not scrape HTML tables.

Keyword Planner (`docs/seo/keywords/web-page/excel-Keyword Planner 09-06-2026 at 05-21-44.csv`) had two clusters: **webpage to excel** (10–100, absorb into a URL list) and larger **html to excel / html table to excel** (100–1k, absorb into a Paste HTML tab). Head terms like `excel web` / Excel Online and reverse jobs (`save excel as web page`) were dropped. **pdf table to excel** is intentionally unsatisfied (no OCR).

## Process
1. Wrote `work-tasks/batch-convert-web-pages-to-excel/` (00–03) with coverage table, Ads/Planner rows, and 0i intent review. `coverage:gate --phase=0b` green before engineering.
2. Implemented catalog `page.style: opts`, icon, Page, and English master. Default input is a URL list (H1 job). Secondary tab Paste HTML absorbs html-to-excel without a second URL. Convert all → one `web-pages.xlsx`. Download stays disabled until a workbook exists.
3. Table mapping: DOMPurify → DOMParser → `<table>` tr/th/td text as AOA → SheetJS. Default **one sheet per HTML table**; optional **one sheet per URL** (stack with a blank row). Tiny tables under 2×2 skipped by default. colspan gets empty placeholders; rowspan is flattened. Fetch reuses `GET /api/tools/convert-html-to-pdf?url=`.
4. Sample uses two local HTML tables (price list + stock grid) at example.com-shaped URLs **without hitting the live site**. `loadSample()` runs on page load (no html2canvas, so the tab does not freeze).
5. Ten-locale independent rewrites. H1 EN: “Batch convert web pages to Excel”. ZH: “批量把网页转成 Excel”. `coverage:gate --phase=2` then `--phase=4` (en,zh,es,ja listed on the 2b row).
6. Reverse `related` on HTML→Word and csv-json. README EN/ZH list entries. `CROSS_TOOL_UPDATE=1 npm run verify:tool` green (full `build:site`, HTML smoke, SEO, vendor, isolation). Home cards and prerendered title confirmed.

## Root cause / analysis
Shared URL fetch is an implementation detail. Unique copy has to be the **artifact**:

| Neighbor | Contract without the H1 |
|---|---|
| JPG/PNG batch | Pixels in a ZIP |
| PDF batch | A4 print pages |
| HTML→Word | Editable prose styles |
| CSV ↔ JSON | File you already have |
| **This page** | HTML `<table>` cells in **one workbook**, many sheets |

If the page talked about viewport, JPEG quality, or “capture the page”, stripping the title would leave another format-suffix variant. That is doorway / scaled-content risk. Information gain here is a people-first content principle (verifiable extra vs SERP neighbors), not a claimed ranking switch.

Planner absorb vs build: one-URL `webpage to excel` is the same job as the batch list. `html to excel` / `html table to excel` is the same mapping with pasted markup, so one slug with tabs — not `/html-to-excel` plus `/webpage-to-excel`.

## Solution
- Default textarea = batch URLs; Convert all / Download Excel; advanced settings collapsed (sheet layout, skip tiny tables).
- FAQ and Rules state: prose ignored; JS-only tables empty; no PDF OCR; not Excel for the web; not mhtml.
- Privacy: paste stays in the tab; each URL is fetched once and not stored.
- Ship gates: coverage 0b → 2 → 4 → all; `verify:tool` with `CROSS_TOOL_UPDATE=1`.

## Notes / boundaries
- Tool HTML on production is served from R2. `git push` alone does not refresh live tool bodies; run `npm run upload:r2` when you want production to match.
- Scripts are stripped, so login walls and JavaScript-rendered tables fail that row; the rest of the batch continues.
- Sheet names are capped at 31 characters (Excel limit).
- This session did not commit or push.
- No interactive browser session here; Convert/Download is covered by `lint:tool-page --require-html`, prerendered H1/meta, and in-page `loadSample()`.

[actions]
- Briefs: `work-tasks/batch-convert-web-pages-to-excel/`
- Catalog / Page / ten i18n shards / icon; reverse related on Word and csv-json
- README EN/ZH tool list
- `coverage:gate` 0b/2/4; `CROSS_TOOL_UPDATE=1 verify:tool`
