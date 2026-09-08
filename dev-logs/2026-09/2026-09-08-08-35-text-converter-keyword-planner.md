Date: 2026-09-08 08:35
Summary: Classified the 23:55 Text Converter Keyword Planner (932 terms): ASR dropped, image-to-text absorbed into N1, Word/HTML-to-text deferred.
Visibility: people

[question]
增加 关键 planner，Keyword Planner 09-07-2026 at 23-55-12，进行分析

[try to solve]
## Context
A new Google Keyword Planner CSV landed in `docs/seo/keywords/ocr-scan/` named `Keyword Planner 09-07-2026 at 23-55-12.csv`. The existing 2026-09-07 OCR+Scan analysis already covered 2643 hardware/OCR rows. This dump is a different seed: “Text Converter / convert to text,” 932 unique keywords, 52 ad groups.

## Process
1. Parsed volumes and ad groups (1 term at 10k–100k: `speech to text`; 22 at 1k–10k).
2. Clustered by actual job, not Free/Online/Tool labels: speech/audio/video ASR vs photo OCR vs PDF text layer vs Word file vs HTML/URL vs shells.
3. Compared catalog: N1 `convert-a-jpg-to-text-with-ocr` already does photo→TXT; `extract-text-from-pdf` does digital PDF text layer; HTML-to-Word and images-to-Word emit DOCX, not TXT; markdown-to-html emits HTML.
4. Wrote `2026-09-08-text-converter-keyword-planner.md` as a sibling authority (does not replace N1–N5). Appended pool rows and tracker snapshot. No `work-tasks/` created.

## Root cause / analysis
Planner expanded a magnet phrase. About 40% of rows are cloud speech-to-text (Google/YouTube/MP3). That is not OCR and cannot be a local WASM product on this site. The useful 1k-band file jobs are `jpg/jpeg/png/image to text` (same control as N1; H1 already says JPG to text) and `pdf to text` (A1, not scanned OCR). Word→TXT and HTML/URL→TXT are real missing jobs with different controls, so they stay defer with suggested slugs rather than being stuffed into N1 or screenshot tools. Converter-category heads (`ocr converter`, `online converter`) stay doorway drop.

## Solution
- Absorb: image-family → N1 (FAQ still owes `image to text` / `png to text`); `pdf to text` → `extract-text-from-pdf`; `csv to text` partial → `csv-json`; `md to text` boundary FAQ on `markdown-to-html`.
- Defer: `extract-text-from-a-word-document`, `convert-html-or-a-web-page-to-plain-text`, weak PPT; N2 gains `scanned pdf to text` evidence only.
- Drop: entire ASR cluster, converter shells, text-recovery homonym, handwriting as a product URL.
- No `long_gap`, no weekly build, no new work-tasks.

## Notes / boundaries
N1 page copy was not edited in this analysis pass. Neighbor HTML-to-Word must not absorb “webpage to text.” Do not start T4/T5 unless the user names them.

[actions]
- Added `docs/seo/keywords/ocr-scan/2026-09-08-text-converter-keyword-planner.md`
- Updated ocr-scan and keywords README, 09-07 cross-link, keyword-daily-pool.tsv, keyword-to-tool-tracker.md
