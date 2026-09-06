Date: 2026-09-06 23:45
Summary: Batch web-page-to-PDF progress is now a sticky HUD with a large percent, step chips, elapsed time, and a transform-based spinner that can keep moving while html2canvas blocks the main thread.
Visibility: people

[question]
进度不够明显，不够动态化

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
After adding a thin shared PDF progress bar, Convert all still felt idle. html2canvas freezes the main thread, so Bootstrap’s striped bar and button spinner freeze too. People could not tell which URL was running or how far the batch had gone.

## Process
1. Replaced the 0.65rem bar with a sticky HUD: large percent, current step, elapsed seconds, current URL, and Fetch / Images / PDF chips.
2. The ring spinner and bar sheen use `transform` + `will-change`, which can stay on the compositor while the main thread is inside html2canvas. The clock number will pause during that freeze; the ring should still turn.
3. The active table row uses an opacity pulse overlay. The HUD stays at 100% for ~0.9s after the last file so it does not vanish in a flash.
4. Ten-locale HUD strings (title, percent template, elapsed, step chips).

## Root cause / analysis
A small indeterminate bar under the buttons is easy to miss, and background-position animation dies when the main thread is busy. Percent + step chips + a transform spinner are readable before the freeze and still look “alive” during it.

## Solution
- Sticky `#bcwPdfProgressWrap.bcw-hud` with `#bcwHudPct`, step chips, elapsed time, current URL
- Shared `OftPdfWork.setProgress` still drives bar width; the page writes the percent label on top
- Convert-all still serial; the HUD just makes each phase visible

## Notes / boundaries
- During html2canvas the elapsed-seconds counter still pauses; that is the same main-thread freeze, not a hung fetch.
- Load sample on first paint will show the HUD immediately.

[actions]
- `src/pages/batchConvertWebPagesToPdfPage.ts` (HUD markup, CSS, clock, delayed hide)
- `src/site/i18n/tools/batch-convert-web-pages-to-pdf/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts` (`hud_*` keys)
