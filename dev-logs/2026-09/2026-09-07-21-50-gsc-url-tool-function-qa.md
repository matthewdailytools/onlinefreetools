Date: 2026-09-07 21:50
Summary: Production Playwright smoke of 58 unique tools from the 2026-09-07 crawled-not-indexed GSC list found no functional failures.
Visibility: people

[question]
1、测试这些链接的工具功能是否正常。

[try to solve]
## Context

The 2026-09-07 GSC drilldown has 92 crawled-not-indexed URLs. The follow-up question was whether those **tools actually work**, as opposed to why Google skipped indexing them.

## Process

1. Deduplicated tool slugs from `docs/seo/reviews/2026-09-07/表格.csv` (58 unique tools; skipped hubs, API, and logs for Playwright).
2. HTTP GET with `Accept: text/html` on all 92 URLs, following redirects.
3. Playwright (system Chrome, production host) opened one representative GSC URL per slug, clicked Load sample or the primary button, and probed for results, downloads, canvas, or visible errors.
4. Re-checked the two WARN rows: Word→PDF already had preview/download from auto-`loadSample`; marginal revenue has no sample control, so the form was filled Q1=10/TR1=100/Q2=11/TR2=109.

## Root cause / analysis

Indexing skip is not explained by broken tools. 56/58 auto-pass; 0 fails. The only HTTP 404 is `/devlogs/2026-01-28-how-to-calculate-gradient` (no `.html`). `/en/tools/...` 301s and the destination tools run.

`convert-word-document-to-pdf` was a false WARN: `loadSample` lives in an IIFE and the button id is `wordPdfBtnSample`; the page still auto-runs the sample (preview 1/2 pages, download enabled). That is a change from the 2026-09-06 local zh QA, where html2pdf/jsPDF crashed.

`how-to-calculate-marginal-revenue` has no Load sample (older form-only page). Calculation is correct: MR = 9.0000.

## Solution

Repeatable runner: `scripts/qa/run-gsc-crawled-url-qa.mjs`. Report: `docs/seo/reviews/2026-09-07/05-tool-function-qa.md`. No tool-page code change in this pass.

## Notes / boundaries

Same slug in multiple locales shares one script; only one URL per slug was clicked. Optional AI expand, real user PDFs, and print dialogs were not exercised. File-quality tools remain “needs a human eye” even when the sample path is green.

[actions]
- Added `scripts/qa/run-gsc-crawled-url-qa.mjs`
- Wrote `docs/seo/reviews/2026-09-07/05-tool-function-qa.md` and JSON results
