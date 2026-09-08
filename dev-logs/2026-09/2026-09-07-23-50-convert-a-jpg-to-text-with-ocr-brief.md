Date: 2026-09-07 23:50
Summary: Opened a ready brief for convert-a-jpg-to-text-with-ocr (OCR N1): scene-sentence H1, Planner longs absorbed as chips/FAQ, no page code yet.
Visibility: people

[question]
立项：convert-a-jpg-to-text-with-ocr

[try to solve]
## Context
The OCR/Scan Keyword Planner analysis (same day) listed four implementable slugs plus a weak table slug. Catalog neighbors that extract PDF text or put photos into PDF/Word all refuse OCR. The user named N1 only: photo/JPG → copyable plain text. Direction A.11 (Tier 2 WASM) is in scope for printed/photo text; handwriting, reflow Word, searchable PDF, and table CSV are other jobs or walls.

## Process
Copied `work-tasks/_template/` to `work-tasks/convert-a-jpg-to-text-with-ocr/`. Wrote `00` from the user’s 立项 line plus planner constraints. `01` picked primary direction **A** (A.11), not an industry invoice tool. `02` filled the §3.3 H scene table, IG preview, converter SEO (snippet-sized meta, How = button labels), Ads/Planner absorb table from N1 §6.1, and intent review (satisfy image→TXT; intentionally fail PDF/Word/table/batch/handwriting product pages). `03` has ten locale briefs with local search phrases (not English calques) and a `0b` round row. Ran `npm run coverage:gate -- --slug=convert-a-jpg-to-text-with-ocr --phase=0b` (green). Updated the keyword pool N1 row `defer`→`build` with `work_tasks_opened|await_serp`, tracker snapshot/decision log, and the ocr-scan planner/README status line. No `src/` / catalog / i18n / vendor changes.

## Root cause / analysis
A category H1 (`Online OCR`, `OCR to text`) would doorway against i2OCR/OnlineOCR and would not match the conversion-pair job. Absorbing OCR queries into existing no-OCR extract/Word pages would be the same class of error as treating generate as validate. Splitting Arabic/Chinese/handwriting/Free into extra URLs would be scaled near-duplicates. The real product axis is the result file: this slug is TXT only. Click-to-load is required so first paint does not pull the OCR WASM (CWV). Auto `loadSample()` on landing is the documented exception, same family as not auto-running html2canvas on screenshot tools.

## Solution
Brief status `02=ready`, `03=briefs-ready`. English H1 **Convert a JPG to text with OCR**. Chinese H1 direction: 用 OCR 把 JPG 转成文字. Primary input is one image dropzone (JPEG/PNG/WebP). Buttons: Convert, Copy text, Download TXT, Load sample, Clear. Default languages Chinese+English; Arabic as a chip, not `arabic-ocr`. Implementation session must POC printed EN/ZH before shipping; Japanese uses a fallback pack if tiny drops it. Related tools already live: `extract-text-from-pdf`, `images-to-pdf`. Neighbor FAQ backlinks wait until this page exists (`CROSS_TOOL_UPDATE=1`).

## Notes / boundaries
No weekly `long_gap` claim (SERP not collected). N2–N5 remain unbriefed. Do not start `*Page.ts` or ten-locale i18n in this session. Next user command should be 实现, which is session B: vendor WASM, Page `opts`, English i18n, `coverage:gate --phase=2`, `lint:tool-page`.

[actions]
- Added `work-tasks/convert-a-jpg-to-text-with-ocr/` (`00`–`03`, `notes.md`); `coverage:gate` phase 0b green
- Updated `docs/seo/keyword-daily-pool.tsv` N1 to `build`; tracker + ocr-scan README/planner status
