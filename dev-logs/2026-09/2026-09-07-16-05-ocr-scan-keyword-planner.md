Date: 2026-09-07 16:05
Summary: Classified three OCR/scan Keyword Planner CSVs into four implementable scene slugs plus one weak table slug; hardware and online-ocr shells dropped; no SERP so no weekly build.
Visibility: people

[question]
分析 @docs/seo/keywords/ocr-scan/ 的关键词，以及市场上做调研，陈列出可以做的slug和长尾slug

[try to solve]
## Context
The folder had three Google Keyword Planner exports (OCR seed, scan/hardware seed, scan-to-Word seed) and no authority analysis. Catalog neighbors extract text / PDF-to-Word / editable PDF all refuse OCR. The previous turn established the JS OCR ceiling: printed/photo text is product-ready; searchable PDF overlay is a pipeline; reflow Word and handwriting are walls.

## Process
Parsed 2643 rows (2438 unique). Bucketed volume, listed ad groups, and clustered by job (image OCR, PDF OCR, searchable PDF, scan-to-word, handwriting, language, table/receipt, brand, download, hardware).

Market check (public pages, 2026-09): iLovePDF `/ocr-pdf` is upload-to-searchable-PDF; OnlineOCR.net / i2OCR are brand-head dropdown shells (TXT/Word/Excel); zpdf / OneClickPDF prove in-browser Tesseract searchable-or-text; ScanToExcel / DeepSeek OCR sites are cloud document-understanding, past this site’s JS limit.

Applied playbook: capability first (do not absorb OCR into no-OCR pages); split by output object (txt vs searchable PDF vs docx); language/handwriting/Free prefixes are not new URLs; no SERP → defer, not long_gap build.

## Root cause / analysis
Most volume is printer drivers (Epson/HP), software downloads (Tesseract), and competitor brand names (i2OCR, OnlineOCR). The real jobs are conversion pairs the catalog does not implement. Treating `online ocr` as a slug would be a doorway shell against iLovePDF/OnlineOCR. Treating scan-to-word as the same page as digital PDF-to-Word would lie about OCR.

## Solution
Authority file `docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`: four defer slugs plus a later CSV slug; long-tails listed as absorb; pool and tracker updated. No work-tasks.

## Notes / boundaries
Snapshot 2026-09-07. Chosen H1s are scene sentences pending SERP title-gap. Implementation still needs the OCR WASM POC before any page.

[actions]
- Added ocr-scan planner analysis, theme README, keywords index row, pool rows, tracker snapshot and decision log.
