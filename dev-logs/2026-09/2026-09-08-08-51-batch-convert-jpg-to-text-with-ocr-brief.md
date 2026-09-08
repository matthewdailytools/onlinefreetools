Date: 2026-09-08 08:51
Summary: Briefed a batch JPG OCR tool as a real queue/ZIP sibling of the single-file page, not a multiple-attribute doorway.
Visibility: people

[question]
立项：batch convert jpg to text with ocr，需要额外的info Gain增益，区别于convert-a-jpg-to-text-with-ocr

[try to solve]
## Context

The site already ships `convert-a-jpg-to-text-with-ocr` (OCR N1): one printed JPG/PNG/WebP, Convert, copy or download a single TXT, language chips, local Tesseract LSTM loaded after click. Its brief and FAQ treated `batch ocr` / `bulk ocr` (Keyword Planner 10–100) as a later page and kept `multiple` off so the single-file URL would not fake a bulk job.

The request was to open that deferred page, with a hard constraint: extra Information Gain versus N1. Google scaled-content / doorway rules forbid a second URL that only changes the H1. Planner analysis (`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`) already said batch OCR is a different job, not an absorb into N1.

## Process

1. Read N1 `02-tool-info.md`, the OCR/Scan Planner, the 09-08 Text Converter Planner, and an existing batch converter brief (`batch-convert-web-pages-to-jpg`) for queue/ZIP/skip patterns.
2. Confirmed Planner evidence: `batch ocr`, `bulk ocr` (10–100); `bulk ocr scanning solutions` is a service query (FAQ only); `pdf to ocr multiple document` is scanned-PDF (N2), not this page. Head terms `jpg to text` / `image to text` stay on N1.
3. Wrote `work-tasks/batch-convert-jpg-to-text-with-ocr/` (`00`–`03`, `notes.md`): slug/H1 = task sentence **Batch convert JPG to text with OCR**; coverage table + Ads/Planner table + intent review; ten locale briefs with local batch phrasing (not N1 keyword copies).
4. Ran `npm run coverage:gate -- --slug=batch-convert-jpg-to-text-with-ocr --phase=0b` (OK). Marked `02` `ready`, `03` `briefs-ready`. No catalog/Page/i18n in this session.
5. Updated the Planner line, theme README, keyword pool, and keyword-to-tool tracker so the old “defer batch” note does not contradict the named brief.

## Root cause / analysis

N1 and a batch page share the same OCR engine. That is not enough to split URLs. The split is valid only if the **primary control and artifact** change:

| Single N1 | Batch page (required) |
| --- | --- |
| One file, Convert, one TXT | `multiple` queue; Convert all |
| Whole-page error | Per-row skip; rest continue |
| Download one `{stem}.txt` | ZIP of per-file TXT; default `combined.txt` with `--- filename ---` separators |
| Progress: engine / reading | Progress i/n; one reused worker (serial, no parallel WASM) |

If implementation only sets `multiple` on N1’s dropzone, the page is a doorway and should not ship. Single-file `jpg to text` must not become this page’s H1; FAQ should send one-photo users back to N1.

## Solution

- **Slug / H1:** `batch-convert-jpg-to-text-with-ocr` / Batch convert JPG to text with OCR (Chinese direction: 用 OCR 批量把 JPG 转成文字).
- **Default product:** up to 10 images; Convert all; ZIP contains `{stem}.txt` plus `combined.txt`; Copy combined text; language chips apply to the whole batch; load-sample exception (do not auto-run WASM on landing).
- **Related (when built):** `convert-a-jpg-to-text-with-ocr`, `extract-text-from-pdf`. N1 FAQ “batch?” must later link here (`CROSS_TOOL_UPDATE=1`).
- **Not in scope:** PDF input, Word/Excel dropdowns, invoice fields, handwriting product, scanning-bureau services, parallel OCR workers.

Implementers should start from `02-tool-info.md` and `notes.md`, then follow tool-creation (opts page, vendor Tesseract + fflate, `verify:tool`). This session stops at brief + 0b.

## Notes / boundaries

- No live SERP snapshot; do not claim `long_gap` or weekly attack KPI.
- Engine reuse is N1 Tesseract LSTM already in `/vendor/tesseract/`; do not add Paddle VL for “more IG”.
- Paddle.js was not shipped on N1 (size); this brief does not reopen that choice.
- Work-todos item “batch scan” is a different object (often scanned PDF). This slug is photos → TXT ZIP only.

[actions]
- Added `work-tasks/batch-convert-jpg-to-text-with-ocr/` (`00`–`03`, `notes.md`); `02=ready`, `03=briefs-ready`
- `npm run coverage:gate -- --slug=batch-convert-jpg-to-text-with-ocr --phase=0b`
- Updated `docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`, `docs/seo/keywords/ocr-scan/README.md`, `docs/seo/keyword-daily-pool.tsv`, `docs/seo/keyword-to-tool-tracker.md`
