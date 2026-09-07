Date: 2026-09-07 15:52
Summary: Browser JS OCR is product-ready for printed and photo text; the ceiling is layout reconstruction, handwriting, multi-page memory, and editable PDF rebuild—not “JS cannot OCR.”
Visibility: people

[question]
js ocr能力能做到的极限

[try to solve]
## Context
The site already lists `ocr-to-text` as a Tier 2 POC (`tesseract.js`) under direction A.11, and related PDF tools (`extract-text-from-pdf`, `turn-pdf-into-word-document`, `turn-pdf-into-editable-document`) currently refuse or defer scanned input. The question is a capability ceiling, not a request to ship the tool.

## Process
Compared the 2026 browser stack against the 2026-07 package survey (which only listed Tesseract.js):

- Tesseract.js 5+: WASM LSTM; LSTM-only packs shrink English to ~3 MB and Simplified Chinese to ~1.7 MB plus a ~4 MB WASM core. Strength is 100+ languages on clean documents. Weakness is scene text, CJK vs Paddle, and handwriting (literature often <40% on cursive).
- Official `@paddleocr/paddleocr-js` (npm from 2026-04): PP-OCR pipeline on ONNX Runtime Web + OpenCV.js, Worker mode, WASM or WebGPU.
- PP-OCRv5 mobile ONNX used in community ports: det ~4.6 MB + rec ~16 MB.
- PP-OCRv6 (2026-06): tiny 1.5M / small 7.7M / medium 34.5M parameters; community browser packs ~6 MB (tiny) and ~30 MB (small, 50 languages). Tiny drops Japanese.
- Transformers / VL: TrOCR is line-only and heavy; PaddleOCR-VL-1.5 INT4 ONNX is still ~991 MB—unsuitable for a free tools homepage.
- Native `TextDetector` (Shape Detection) is still experimental and not a production engine.
- Table structure (SLANet ~7 MB) can run via ONNX in the browser but merged/borderless tables remain unreliable.
- Same-day PDF editor survey: open-source JS still cannot rewrite PDF content streams, so OCR boxes cannot become Acrobat-style editable text.

## Root cause / analysis
The interesting limit is no longer “can a tab run OCR.” Specialized compact detectors+recognizers now run locally and, on printed/photo text, are in the same band as small server OCR models. Four walls remain:

1. **Document understanding** — reading order, multi-column, table structure, formulas, key-value extraction. Extra models, extra failure modes.
2. **Handwriting** — improved in PP-OCRv5/v6 vendor sets, still far below printed text; Tesseract is not a handwriting product.
3. **Runtime** — ~32 MB uncompressed RGBA per 300 DPI A4 page; must rasterize page-by-page. Phones die on multi-page. Threads need COOP/COEP. Cloudflare Workers cannot host this inference.
4. **Rebuild** — searchable PDF overlay (invisible text at box coordinates) is a pipeline. Reflowable Word / true in-place PDF edit is a different unsolved problem.

## Solution
For this site: treat printed/photo → plain text as in-scope after a POC. Prefer PP-OCRv6 tiny (click-to-load) with small or Tesseract as language fallback. Optional same-page searchable overlay. Do not promise handwriting-to-Word, formula LaTeX, invoice understanding, 100 language URLs, or VL models. Keep existing extract-text tools honest: no OCR unless this page exists.

POC should measure first-load MB, time-to-first-text, peak memory, and CJK error types on desktop Chrome and one Android phone—before opening `work-tasks/ocr-to-text` implementation.

## Notes / boundaries
Snapshot 2026-09-07. Vendor accuracy numbers (PP-OCRv5 80.1% weighted internal set; PP-OCRv6 medium 83.2% recognition) are directional only. No catalog or page code changed.

[actions]
- Recorded the 2026 JS OCR ceiling for later `ocr-to-text` POC; no src/public tool changes.
