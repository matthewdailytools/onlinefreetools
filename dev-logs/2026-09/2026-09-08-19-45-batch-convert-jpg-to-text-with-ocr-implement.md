Date: 2026-09-08 19:45
Summary: Shipped batch-convert-jpg-to-text-with-ocr with queue, skip, ZIP, combined TXT, ten-locale copy, and a back-link from the single-image OCR page.
Visibility: people

[question]
继续

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-jpg-to-text-with-ocr
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-jpg-to-text-with-ocr
- https://onlinefreetools.org/tools/convert-a-jpg-to-text-with-ocr

[try to solve]
## Context
The brief in `work-tasks/batch-convert-jpg-to-text-with-ocr/` was already `ready`. The job is **not** a second “JPG to text” URL: N1 (`convert-a-jpg-to-text-with-ocr`) keeps the single-photo query. This page must carry extra Information Gain as **controls** — a multi-file queue, Convert all, skip a failed row, Download ZIP of `{stem}.txt` plus default `combined.txt` — or it would be a doorway.

Prior session wrote catalog, icon, `batchConvertJpgToTextWithOcrPage.ts`, and five locales (en, zh, es, ja, ar). This session finished the remaining five locales, linked N1 back, ran ship gates, and recorded what still could not be clicked in a live browser.

## Process
1. Confirmed the page already serializes one Tesseract worker (`MAX_FILES = 10`), does not auto-`loadSample()` on landing, and exposes Convert all / Download ZIP / Copy combined text.
2. Wrote independent pt / id / fr / ru / de shards from `03-locale-briefs.md` (local H1: Converter vários JPG… / Ubah banyak JPG… / Convertir plusieurs JPG… / Пакетно преобразовать JPG… / Mehrere JPG mit OCR…). How steps use the same button labels as the UI in that language.
3. Re-scanned sample locales **en, zh, es, ja** for coverage pass 2b: master H1 stays “Batch convert JPG to text with OCR”; secondary “batch OCR / bulk OCR” (and local equivalents) sit after Steps so the snippet keeps Convert all / ZIP. Lengthened the Chinese `_description` after `lint:seo` warned it was 118 characters (need ≥120).
4. Cross-tool (`CROSS_TOOL_UPDATE=1`): N1 catalog `related` now leads with this slug; all ten N1 locales gained FAQ q8/a8 naming the batch H1 (not the slug). README English and Chinese tool lists each got one line next to N1.
5. Gates: `coverage:gate --phase=4` and `--phase=all` green; `merge:tools`; `build:site --full`; `lint:tool-page --require-html`; `lint:seo`; `lint:vendor`; isolation with `CROSS_TOOL_UPDATE=1`. First `verify:tool` failed only on the short zh description; after the two-character fix the SEO step was re-run green and the two OCR slugs were re-prerendered.
6. Static HTML check (not a click-through): English prerender contains Convert all, Download ZIP, Copy combined text, `function loadSample`, `multiple`, `combined.txt`. Chinese contains 全部转换 / 下载 ZIP / 复制合并文本. N1 English FAQ asks “Can I convert several JPGs at once?” and names the batch H1. Home `/` and `/zh/` already list the new card. Sitemap includes the English URL.

## Root cause / analysis
A batch OCR URL only earns a separate indexable page if the extra work is on the first screen. Copy that says “also works for several files” while the form stays one `<input>` would fail both the brief and Google doorway / scaled-content rules. Serial WASM is a product constraint, not a copy claim: parallel workers would compete for memory on phones.

N1 used to say “one image per run — not batch ocr,” which became false once this page existed. FAQ q8 points people to the queue/ZIP page by **tool name**, so crawlers and humans see a pair instead of two titles fighting `jpg to text`.

## Solution
- Catalog: `page.style: "opts"`, `localProcessing: true`, related N1 + `extract-text-from-pdf`.
- Status: `03` → `i18n-done`, `02` → `implemented`.
- Engine reuse: same `/vendor/tesseract/` as N1; ZIP via `/vendor/fflate/index.js`.
- Browser MCP was not available. Local wrangler on port 8788 still served pre-upload R2 HTML (404 for the new slug). Verification used prerendered `public/_pages/{lang}/tools/*.html` and home HTML, not an interactive Convert all / ZIP download.

## Notes / boundaries
- Still not a scanned-PDF, Word, CSV, handwriting, or shop-scan product.
- `jpg to text` stays on N1; this H1 is the batch task sentence, not “Batch OCR” alone.
- Clicking Load sample → two real OCR lines → ZIP enablement was **not** exercised in a browser this session.
- Not deployed; `npm run deploy` / production `upload:r2` were not run.

[actions]
- Added pt/id/fr/ru/de i18n shards; N1 FAQ q8 + related; README tool-list lines
- `03` i18n-done / `02` implemented; coverage 2b named en,zh,es,ja
- `npm run coverage:gate --phase=4`; `lint:seo`; `lint:tool-isolation` with `CROSS_TOOL_UPDATE=1`; prerender of both OCR slugs
