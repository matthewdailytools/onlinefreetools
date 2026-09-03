Date: 2026-09-03 21:45
Summary: Classified 1333 PDF Keyword Planner rows (Adobe-skewed seed) into absorb/defer/drop against 16 existing PDF slugs; no SERP, no weekly build.
Visibility: people

[question]
对 seo文件夹下 keywords/pdf的planner关键词进行分析

[try to solve]
## Context
User exported Google Keyword Planner CSV into `docs/seo/keywords/pdf/` (1333 keywords, 62 ad groups). Site already ships 16 browser PDF tools (merge, split, compress, convert, protect, etc.) but lacks editor, form fill/sign, and Word↔PDF conversion.

## Process
1. Loaded keyword-to-tool-funnel Skill and `keyword-planner-analysis-rules.md`.
2. Parsed CSV with UTF-8 BOM; bucketed volumes; counted brand/download noise vs generic job intents.
3. Mapped each job type to catalog slugs (capability-first: generate ≠ validate; absorb only when control exists).
4. Wrote authoritative analysis `docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`.
5. Appended 18 representative rows to `keyword-daily-pool.tsv`; updated tracker and `keywords/README.md`.

## Root cause / analysis
Planner seed is **Adobe/Acrobat-centric** (~62% rows are brand nav, download/install, misspellings, or competitor domains). Actionable generic clusters:
- **Head crowded, already covered**: merge/combine, reduce/compress, pdf→jpg, split.
- **Head crowded, not implemented**: online pdf editor, fill/sign, word↔pdf.
- **Drop**: best/review, what-is, ebook/sample downloads, ilovepdf/smallpdf/pdf24 brands.

Without manual SERP, `long_gap` cannot be assigned per playbook §7.

## Solution
| Verdict | Action |
| --- | --- |
| **absorb** | 16 existing slugs; P0 copy pass on `merge-pdf`, `compress-pdf`, `pdf-to-jpg` for head synonyms (FAQ/use case, not H1). |
| **defer** | S15–S21 unimplemented jobs with suggested slugs (`edit-pdf-text-online`, `fill-pdf-form-online`, `word-to-pdf-online`, `pdf-to-word-online`, etc.); await Bing SERP + scene H1. |
| **drop** | Brand/download/best/what-is clusters. |

Weekly build quota: **0** until SERP confirms gaps.

## Notes / boundaries
- Full write-up: `docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`
- Next SERP seeds listed in analysis §7 (six scene queries, not head terms).
- work-tasks not created (analysis ≠立项).

[actions]
- Added `docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`
- Updated `docs/seo/keyword-daily-pool.tsv`, `docs/seo/keyword-to-tool-tracker.md`, `docs/seo/keywords/README.md`
