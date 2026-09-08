Date: 2026-09-08 21:25
Summary: Briefed N4 as batch-convert-scanned-pdf-to-word-with-ocr — raster OCR to one sectioned Word file, not a JPG-batch accept swap or a text-layer PDF doorway.
Visibility: people

[question]
立项batch convert scanned pdf to word
立项batch convert scanned pdf to word with ocr

[try to solve]
## Context
Planner N4 was a deferred scanned-PDF→Word job (`ocr pdf to word` is a 1k–10k head). The site already has A2 `turn-pdf-into-word-document` (digital text layer, no OCR) and N4-jpg-batch (photos→one DOCX, no PDF). The user named a **batch + OCR** task sentence. A second URL `turn-a-scanned-pdf-into-word` would be a doorway of the same job.

## Process
1. Copied the work-tasks template to `work-tasks/batch-convert-scanned-pdf-to-word-with-ocr/` (`00`–`03` + `notes.md`).
2. Locked slug/H1 to the user sentence. Head terms `ocr pdf to word` / `pdf to word ocr` absorb as “also called”, not H1. `convert scanned pdf to word` absorbs on the same page (one PDF still uses the queue).
3. Wrote a control-level IG table vs A2, N4-jpg-batch, N1-batch, images-to-word, and unbuilt N2/N3. Interaction: PDF-only dropzone, Convert all / Download Word, serial pdf.js + Tesseract, skip failed pages, one DOCX (Heading 1 = filename, page breaks, optional page image default on). Caps: 5 files, 20 pages, 12 MB. No auto-`loadSample` (Tier 2 WASM).
4. Filled 0b coverage + Ads/Planner table + intent review. `coverage:gate --phase=0b` green. `02=ready`, `03=briefs-ready`.
5. Updated ocr-scan planner/README, keyword pool (old N4 candidate → absorb; new build row), and tracker.

## Root cause / analysis
Searchers who want scanned PDF→Word are not served by extracting a text layer (A2) or by OCR on JPG files. Extra Information Gain must be **PDF rasterization, page skip, and one headed Word document**. Changing N4-jpg-batch `accept` to PDF would be scaled-content doorway. Building both `turn-a-scanned-pdf-into-word` and this batch slug would split one intent.

## Solution
Implement later from this brief only: `page.style: opts`, vendor pdf.js + tesseract + docx, reject images at add-time, FAQ names neighbor **H1s**. Do not create the old planner slug. Do not attack `pdf to word` as H1 (A2). Do not occupy week `long_gap` KPI without SERP.

## Notes / boundaries
- No Page.ts / i18n this round.
- CROSS_TOOL FAQ on A2 and N4-jpg-batch waits for implementation.
- Organic SERP titles for `ocr pdf to word` still need a human look before ship.

[actions]
- Added `work-tasks/batch-convert-scanned-pdf-to-word-with-ocr/`
- Updated `docs/seo/keywords/ocr-scan/*`, `docs/seo/keyword-daily-pool.tsv`, `docs/seo/keyword-to-tool-tracker.md`
- `npm run coverage:gate -- --slug=batch-convert-scanned-pdf-to-word-with-ocr --phase=0b`
