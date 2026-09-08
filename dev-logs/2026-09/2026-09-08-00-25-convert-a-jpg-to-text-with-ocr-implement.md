Date: 2026-09-08 00:25
Summary: Shipped convert-a-jpg-to-text-with-ocr with on-click Tesseract LSTM, ten-locale copy, and verify:tool green.
Visibility: people

[question]
实现

## Tool links (English)
- https://onlinefreetools.org/tools/convert-a-jpg-to-text-with-ocr
Chinese: https://onlinefreetools.org/zh/tools/convert-a-jpg-to-text-with-ocr

[try to solve]
## Context
OCR Planner N1 is a single-image job: printed JPG / PNG / WebP → copyable TXT. Neighbors (`extract-text-from-pdf`, `pdf-to-markdown`, `images-to-pdf`) refuse OCR, so this page must not pretend to be a PDF/Word/CSV/batch desk. The brief (`work-tasks/convert-a-jpg-to-text-with-ocr/`) was already `ready` / `briefs-ready`. This session implemented the page, vendored the engine, rewrote ten locales, and ran ship gates.

Hard product rules from the brief: H1 is a scene sentence (English: Convert a JPG to text with OCR), not `Online OCR` / `OCR to text` / `Free OCR`; language chips instead of an `arabic-ocr` URL; no auto-OCR on first paint (WASM would wreck LCP).

## Process
1. Inspected `@paddleocr/paddleocr-js` as the brief’s preferred engine. Unpacked size is about 24 MB, it pulls OpenCV.js + onnxruntime-web, and the default model fetch is often Hugging Face / a CDN. That cannot be git-tracked as same-origin vendor for Cloudflare Pages.
2. Fell back to Tesseract.js 7.0.0 LSTM-only (`createWorker(langs, 1)`), which the capability note already allowed. Copied `tesseract.min.js`, `worker.min.js`, and the three LSTM `*.wasm.js` cores into `public/vendor/tesseract/`. Language packs are not on npm; `eng` / `chi_sim` / `ara` / `jpn` `.traineddata.gz` were downloaded from tessdata 4.0.0_fast and committed as required vendor paths.
3. Page (`src/pages/convertAJpgToTextWithOcrPage.ts`): one dropzone, Convert / Copy text / Download TXT / Load sample / Clear, default Chinese+English chips, advanced low-confidence list and max edge 2048. `loadSample()` draws printed JPEG lines then runs Convert; it is **not** called on landing. `corePath` is the directory `/vendor/tesseract/core` so Tesseract.js can pick SIMD vs relaxed-SIMD LSTM.
4. Ten locale shards were written from `03-locale-briefs.md` (not English calques). Coverage gate phase 2 (English master) and phase 4 / `all` passed after the `2b` row named `en,zh,es,ja`.
5. README Tools List got English and Chinese one-liners. Isolation initially failed on `package-lock.json`, vendor copy/validate scripts, and an unrelated `work-todos` edit. The todos file was reverted. Isolation allowlist now includes lockfile, vendor copy scripts, and `public/vendor/` so adding a same-origin WASM library is not treated as “editing another tool.”
6. `npm run verify:tool -- --slug=convert-a-jpg-to-text-with-ocr` went green (coverage, `build:site --full`, HTML smoke, SEO, vendor tracked, isolation). Playwright against local `public/` confirmed lazy load and the sample pipeline.

## Root cause / analysis
Paddle.js is a better printed-CJK engine on paper, but it is not a vendoring unit: too large, native deps, remote models. Tesseract LSTM is slower and weaker on dense CJK, yet it is self-contained `.wasm.js` (no sibling `.wasm` fetch in this build) plus gzip language packs, which matches the site rule that Cloudflare deploy has no local `predeploy`. User-facing copy never sells the library name; References point at Tesseract and tesseract.js so the engine is honest without becoming a keyword.

Click-to-load is the LCP control: first paint requested zero `/vendor/tesseract/` URLs. Convert then loaded `tesseract.min.js`, `worker.min.js`, `tesseract-core-relaxedsimd-lstm.wasm.js`, `chi_sim.traineddata.gz`, and `eng.traineddata.gz`.

## Solution
- Catalog shard `page.style: "opts"`, `localProcessing: true`, related `extract-text-from-pdf` and `images-to-pdf`.
- Status: `03` → `i18n-done`, `02` → `implemented`.
- Keyword pool N1 stays `build` / `await_serp` (no SERP batch, so it does not count as a weekly `long_gap` KPI). Tracker snapshot lists this slug as this week’s new tool page.
- Browser check (static `public/` on port 8765): H1 matched; Copy/Download disabled until Convert; Load sample filled `ONLINEFREETOOLS` / `The quick brown fox` / `印刷体样例`; PDF upload showed the neighbor error, not a fake OCR of PDF bytes.
- SEO link validator warned that no other tool currently `related`s back to this slug. That inbound FAQ needs `CROSS_TOOL_UPDATE=1` and was left out of this ship.

## Notes / boundaries
- N2–N5 (scanned PDF → TXT / searchable PDF / Word / table CSV) were not started.
- Do not absorb OCR queries into `extract-text-from-pdf`.
- Handwriting is a FAQ fail, not a product claim.
- Sample Chinese depends on the device having a CJK font; English lines still OCR if the CJK glyph is missing.
- Not deployed; `npm run deploy` / `upload:r2` were not run.

[actions]
- Added catalog shard, Page, icon, ten i18n shards, Tesseract vendor + lang packs
- Updated `scripts/copy-tool-libs-vendor.mjs`, `scripts/validate-vendor-tracked.mjs`, isolation allowlist
- README Tools List; funnel tracker / pool / planner status
- `npm run verify:tool -- --slug=convert-a-jpg-to-text-with-ocr`
