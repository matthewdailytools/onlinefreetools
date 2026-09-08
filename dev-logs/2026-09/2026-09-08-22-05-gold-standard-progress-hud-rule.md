Date: 2026-09-08 22:05
Summary: Tool pages that wait on convert/OCR/batch work must show the batch-jpg gold-standard progress HUD; the hard gate lives in tool-creation, with visual detail in the converter-input-ui skill.
Visibility: people

[question]
如果要求每个页面都必须具备明显的进度显示。参考：http://127.0.0.1:8788/tools/batch-convert-web-pages-to-jpg ，应该在项目哪里写明，应该怎么写

[try to solve]
## Context
The site already had a weak “long jobs need progress” line in the converter-input-ui skill (`aria-live` plus an optional `OftPdfWork` bar). Agents could ship a one-line status or the 0.65rem PDF workbench bar and still tick the checklist. The desired look is the large `.bcw-hud` on `/tools/batch-convert-web-pages-to-jpg`: percent, step chips, elapsed time, current URL, striped bar, and a CSS `transform` spinner that can keep moving while html2canvas freezes the main thread.

The question was where to write this so later sessions actually follow it, not how to restyle one page.

## Process
1. Mapped authority: `tool-creation.mdc` always loads for `*Page.ts`; the converter skill only loads when someone is building a convert/compress UI; `docs/` is below rules; a new standalone `.mdc` would miss agents that never glob it.
2. Compared the gold HUD in `batchConvertWebPagesToJpgPage.ts` with `pdfWorkUiProgressHtml` (thin bar) and the html-to-word keep-HUD-on-success path.
3. Landed a hard section in `tool-creation.mdc` next to “进页样例”, upgraded the skill’s state-machine / checklist, and added a required **进度 HUD** row to `work-tasks/_template/02-tool-info.md` plus the brief workflow rule.

## Root cause / analysis
A skill-only sentence is opt-in. Calculators, OCR, and “I am not copying FreeConvert” pages skip `converter-input-ui`. Putting the gate only in `docs/` or `AGENTS.md` also fails the repo authority order. Instant calculators (BMI, percentage) must not be forced into a two-second card; they opt out in `02`.

`OftPdfWork` is the wrong gold standard: it is a shared thin bar. The JPG batch page wraps extra HUD chrome around it. Treating the helper as “progress done” is how pages look idle during a freeze.

## Solution
Layered copy, same facts:

| Layer | File | Role |
|---|---|---|
| Hard gate | `.cursor/rules/tool-creation.mdc` | Scope, eight must-haves, ship checklist |
| Visual spec | `.cursor/skills/converter-input-ui/SKILL.md` | Card contents, `yieldUi()`, success/fail keep-card |
| Brief | `work-tasks/_template/02-tool-info.md` + `work-tasks-tool-brief.mdc` | Write chip labels before coding |
| Pointers | `AGENTS.md`, `.github/copilot-instructions.md` | One-line so other entry points do not contradict |

Instant tools write `进度 HUD：不适用（一帧出结果）`. Convert/OCR/batch must match `.bcw-hud`. No new lint yet: a mechanical scan for `.bcw-hud` would false-fail BMI.

## Notes / boundaries
- Does not retrofit existing PDF tools that still use the thin `OftPdfWork` bar; the rule applies to new work and to pages being edited.
- Does not add cloud-drive uploads or change Convert/Download button order.
- Gold URL (English, no `/en`): https://onlinefreetools.org/tools/batch-convert-web-pages-to-jpg

[actions]
- `.cursor/rules/tool-creation.mdc`: section「处理中进度必须明显」+ checklist item + converter-input-ui pointer
- `.cursor/skills/converter-input-ui/SKILL.md`: gold HUD spec and tighter acceptance list
- `work-tasks/_template/02-tool-info.md`: required 进度 HUD row and module checkbox
- `.cursor/rules/work-tasks-tool-brief.mdc`: 交互规格 must include progress HUD
- `AGENTS.md`, `.github/copilot-instructions.md`: short pointers
