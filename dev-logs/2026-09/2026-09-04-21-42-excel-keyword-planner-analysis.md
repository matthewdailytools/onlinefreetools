Date: 2026-09-04 21:42
Summary: Classified 1162 Excel Keyword Planner terms as a software-brand seed; ~70% drop; 12 scene slugs deferred; no online-excel shell; no work-tasks.
Visibility: people

[question]
分析 docs/seo/keywords/excel/ 的关键词

[try to solve]
## Context
The theme folder contained only `Keyword Planner 09-04-2026 at 13-37-29.csv` (1162 rows, 63 ad groups). The user asked for a Planner classification like the PDF batch: job types, absorb vs defer vs drop, scene slugs, pool + tracker — without creating work-tasks.

## Process
1. Parsed volume bands: 2 terms at 100k–1M (`ms excel`, `excel 2016`), 14 at 10k–100k, 61 at 1k–10k, 235 at 100–1k, 850 at ≤100.
2. Classified intent: brand navigation, download/install, courses/tutorials, version years, typos, then remaining job phrases (IF/IFS/IFNA, cheat sheet, invoice/budget/timesheet, chart/dashboard/pivot, xls online).
3. Compared catalog: `excel-compare-files` and `csv-json` exist, but this CSV has **zero** compare/diff/merge and **zero** csv-conversion queries — so absorb into those slugs would be wrong.
4. Wrote the authority analysis, theme README, pool rows, tracker snapshot, and keywords index.

## Root cause / analysis
Unlike the PDF export (Adobe/file-job seed with merge/convert/fill), this export is a **Microsoft Excel product seed**. Most queries want the Office app, a download, or a course. The leftover productizable jobs are formula writers, template generators, chart/pivot helpers, and a read-only viewer — not a spreadsheet suite clone. File jobs such as xlsx↔csv or Excel→PDF did not appear; inventing those slugs would violate “Planner evidence only.”

## Solution
| Class | Count | Rule |
| --- | --- | --- |
| **Drop** | ~700+ plus leftover nav residue | Brand (`ms excel`), download, tutorial, version, typos; doorway shells `online excel` / `spreadsheet software` / `excel template` / sheet editor |
| **Absorb** | **0** this batch | Do not dump brand terms onto `excel-compare-files` |
| **Defer new slugs** | **12** | Nested IF, IFS, IFNA, COUNTIF, formula cheat-sheet (H1 = copy common formulas), invoice/budget/timesheet xlsx, graph from data, dashboard (later, risk), pivot from spreadsheet, open file in browser |

Weekly build remains **0** (no SERP). work-tasks not created. A second Planner with file-job seeds is noted in analysis §9.

## Notes / boundaries
- Authority: `docs/seo/keywords/excel/2026-09-04-excel-keyword-planner.md`
- Generate ≠ lookup: nested-IF writer ≠ cheat sheet; viewer ≠ Excel Online editor
- `ifs excel` / `pivot table excel` / `invoice template excel` are head-ish: scene H1, not those strings as the only heading
- Next: SERP the ten scene queries in analysis §7; optionally re-run Planner on excel-to-csv / merge / excel-to-pdf seeds

[actions]
- Added `docs/seo/keywords/excel/2026-09-04-excel-keyword-planner.md` and `README.md`
- Appended 19 rows to `docs/seo/keyword-daily-pool.tsv`
- Updated `docs/seo/keyword-to-tool-tracker.md` and `docs/seo/keywords/README.md`
