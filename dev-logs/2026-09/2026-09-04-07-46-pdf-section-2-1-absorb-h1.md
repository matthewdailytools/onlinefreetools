Date: 2026-09-04 07:46
Summary: Applied PDF planner §2.1 absorb H1s for seven live tools (skipped organize-pdf and already-scene batch-compress).
Visibility: people

[question]
ok
（承接：按 §2.1 修改已上线 absorb 的 title/H1）

[try to solve]
## Context
Planner §2.1 asked to keep existing paths and change H1 to scene sentences for A1–A9. Titles were still marketing dash forms (e.g. `Merge PDF — …`). User confirmed to apply the absorb H1s, skipping `organize-pdf`.

## Process
1. Compared §2.1 suggested H1s to `tool_*_title` in all ten locales.
2. Rewrote titles for seven slugs × ten langs to scene sentences (en from planner; other langs localized equivalents, not English paste).
3. Left `batch-compress-pdfs-for-email` unchanged (already scene-like). Left `organize-pdf` unchanged (weak evidence / prior skip).
4. Synced README zh/en list labels; `tool:touch` + `merge:tools` + `build:site`.

## Root cause / analysis
Absorb work was planned in the keyword doc and tracker, but H1 absorb was never written into i18n `_title` (only some `example_title` strings matched). Path was correctly left alone.

## Solution
| slug | en H1 now |
|---|---|
| merge-pdf | Combine PDF files into one |
| split-pdf | Split my PDF |
| compress-pdf | Reduce PDF file size |
| pdf-to-jpg | Convert PDF pages to JPG |
| images-to-pdf | Turn JPG into PDF |
| unlock-pdf | Unlock my PDF |
| protect-pdf | Password-protect a PDF |

## Notes / boundaries
- Description / FAQ / How were not rewritten in this pass—only H1/title + README labels.
- Cross-tool i18n edits: use `CROSS_TOOL_UPDATE=1` for isolation checks.
- Homepage and prerendered tool pages refreshed via `build:site`.

[actions]
- Updated `src/site/i18n/tools/{merge,split,compress,pdf-to-jpg,images-to-pdf,unlock,protect-pdf}/{10 langs}.ts` titles
- Updated README Tools List labels; tool:touch those seven; merge:tools; build:site
