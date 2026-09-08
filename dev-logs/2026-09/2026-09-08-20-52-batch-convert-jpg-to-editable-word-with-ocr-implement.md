Date: 2026-09-08 20:52
Summary: Shipped batch-convert-jpg-to-editable-word-with-ocr as one editable Word file with headed sections, optional photos, queue skip, and ten-locale copy — not a TXT ZIP reskin.
Visibility: people

[question]
实现

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-jpg-to-editable-word-with-ocr
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-jpg-to-editable-word-with-ocr

[try to solve]
## Context
The brief in `work-tasks/batch-convert-jpg-to-editable-word-with-ocr/` was already `ready` (coverage 0b green). The job is **not** a second “JPG to text ZIP” URL: N1-batch (`batch-convert-jpg-to-text-with-ocr`) keeps the TXT ZIP. `images-to-word` still pastes photos as unselectable pictures. This page must carry extra Information Gain as **document structure** — queue, Convert all, skip, **one** `.docx` with Heading 1 = filename, page break, OCR paragraphs, original photo above text by default, button **Download Word** — or it would be a doorway.

## Process
1. Catalog shard (`page.style: opts`), SVG icon (ASCII comments), Page.ts copied from N1-batch OCR (serial Tesseract worker, 10 files, 12 MB, click-to-load) and wired to `docx` UMD like Images to Word (`Document` / `Packer` / `Paragraph` / `ImageRun` / `PageBreak` / `HeadingLevel`).
2. Master `en.ts` then `coverage:gate --phase=2`. Nine locales rewritten from `03` briefs in batches of three (zh/es/ja, ar/pt/id, fr/ru/de), not English calques. Buttons match the brief. Descriptions all ≥120 characters (zh 169).
3. `coverage:gate --phase=4` with 2b naming `en,zh,es,ja`. `03=i18n-done`, `02=implemented`.
4. Cross-tool (`CROSS_TOOL_UPDATE=1`): N1-batch `related` now leads with this slug; all ten N1-batch locales’ FAQ a8 name this page’s H1 for editable OCR Word. Images to Word `related` leads with this slug; FAQ a3 (editable text) names this H1. README English and Chinese lists each got one line next to N1-batch.
5. Gates: `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-convert-jpg-to-editable-word-with-ocr` green (coverage all, merge, `build:site --full`, HTML smoke, SEO, vendor, isolation). Local `upload:r2:local` then curl on 8788: tool EN/ZH **200**, Convert all / Download Word present, no Download ZIP. Disk `public/index.html` and `/zh/` cards include the H1. Worker English `/` was still a stale Cache API home (no OCR cards); `/zh/` already showed the new card.

## Root cause / analysis
A MIME change (TXT → DOCX inside a ZIP) would not be Information Gain. Searchers who want **jpg to word ocr** need paragraphs they can edit in Word, plus a way to proof against the photo. Neighbors already cover single-file TXT, batch TXT ZIP, and photo-as-image Word. This page’s extra control is **one headed, paginated Word document** with optional proof photos — not a format dropdown or a scanned-PDF pipeline (`ocr pdf to word` stays unbuilt N4).

## Solution
- Primary actions: Convert all → Download Word (disabled until a blob exists). Load sample synthesizes two printed canvases and runs Convert all; the page does **not** auto-run on land (Tier 2 WASM).
- Advanced: include original photo above text (default on; toggling rebuilds the DOCX without re-OCR); max edge 2048.
- Failed/skipped rows stay out of the document. PDF files are rejected at add-time.
- FAQ and related links name neighbor **H1s**, not slugs.

## Notes / boundaries
- No browser MCP in this session: verification was curl + prerendered HTML + `lint:tool-page --require-html`. Load sample → two sections → Download Word was not clicked in a real UI.
- Do not attack `ocr pdf to word`. `ocr to word` is FAQ-only, not H1.
- Local wrangler is **8788** (8787 occupied). English `/` may need a cache purge after deploy; tool URLs were fresh after R2 upload.
- Production is not deployed until `npm run deploy`.

[actions]
- Added `src/site/tool-catalog.d/batch-convert-jpg-to-editable-word-with-ocr.json`, `src/pages/batchConvertJpgToEditableWordWithOcrPage.ts`, ten i18n shards, `public/icons/tools/batch-convert-jpg-to-editable-word-with-ocr.svg`
- Updated N1-batch and Images to Word related/FAQ; README EN/ZH lists; ocr-scan planner/tracker
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-convert-jpg-to-editable-word-with-ocr`; `npm run upload:r2:local`
