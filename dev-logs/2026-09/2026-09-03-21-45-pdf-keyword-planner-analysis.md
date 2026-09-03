Date: 2026-09-03 22:21
Summary: Re-clustered 1333 PDF Planner keywords by subdivided user jobs; 9 existing slugs absorb, 22 new scene slugs defer, editor/converter shells dropped.
Visibility: people

[question]
按照用户细分场景重新整理planner中的关键词，逻辑上只要用户搜索意图可以细分，就要单独一个slug

（上一轮：对 seo文件夹下 keywords/pdf的planner关键词进行分析）

[try to solve]
## Context
First-pass analysis (21:45) bucketed jobs too coarsely (one “editor” cluster, fill+sign together, Word conversion as two generic converter slugs). User required the text-compare / bulk-format rule: if the search intent can be split by object, direction, or constraint, each job gets its own slug.

## Process
1. Re-filtered the CSV: ~413 non-brand rows after drop; listed every job phrase with volume.
2. Applied §3.3 H: context + action + result. Split when main control / failure mode differs; kept merge≈combine and jpg≈jpeg as synonyms.
3. Rewrote `docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md` as the scene-slug authority (supersedes the 21:45 coarse table in the same file).
4. Replaced the first-pass pool rows with one row per scene; updated tracker and `keywords/README.md`.

## Root cause / analysis
Users do not search “PDF editor” and then pick a mode. They search the outcome: change existing text, stamp new text, fill a form, make a form fillable, create a blank form, draw a signature, apply a certificate, turn a scan into an editable PDF, or convert Word one way or the other. Lumping those into one URL forces a second choice on the page and creates a doorway-style editor/converter shell.

## Solution
| Class | Count | Rule |
| --- | --- | --- |
| **Absorb** (keep path, scene H1) | 9 | `merge-pdf` H1→Combine PDF files into one; plus split/compress/jpg/images/unlock/protect/organize |
| **Defer new slugs** | 22 | N1–N22 in the analysis (mixed-file combine, Word↔PDF, HTML, edit text vs add text, form author vs fill vs make-fillable vs create form, drawn sign vs digital sign, viewer, write-from-scratch, make-editable, PDF/A convert vs check, compare, extract text, flipbook, print, DWG) |
| **Drop shells** | 3 doorway + brand/wiki | No `online-pdf-editor`, `pdf-converter`, or `pdf-maker` URL — FAQ fans out to the scene slugs |

Weekly build remains **0** (no SERP). work-tasks not created.

## Notes / boundaries
- Authority: `docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`
- Generate ≠ validate: `convert-pdf-to-pdf-a` ≠ `check-pdf-a-compliance`
- Existing crop/rotate/watermark/page-numbers/markdown/page-size tools had no Planner hits this batch; no extra near-synonym URLs
- Next: Bing SERP on the 15 scene queries in analysis §7 before any long_gap / 立项

[actions]
- Rewrote `docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`
- Replaced PDF rows in `docs/seo/keyword-daily-pool.tsv`
- Updated `docs/seo/keyword-to-tool-tracker.md`, `docs/seo/keywords/README.md`
