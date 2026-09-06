Date: 2026-09-07 00:55
Summary: Batch web-page-to-PDF no longer auto-runs Load sample on first paint; the progress HUD still appears when the user converts or clicks Load sample.
Visibility: people

[question]
https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf 样例删除自动运行，保留进度显示

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
Opening the batch tool called `loadSample()` immediately. html2canvas then blocked the tab before the user had pasted any URLs. The request is to stop that auto-run and keep the progress HUD for real Convert all / Load sample clicks.

## Process
1. Removed the init `loadSample()` call. The button still fills two local example.com stand-ins and runs the same serial pipeline.
2. Left the sticky HUD (percent, steps, elapsed, current URL). It only shows after a user-started batch.
3. Rewrote How item 5 in ten locales so it no longer claims the sample already ran on open. Noted the exception in `02-tool-info.md` (html2canvas freeze on entry).

## Root cause / analysis
The general tool-creation rule wants a live sample on first paint. For this slug that sample is a full html2pdf capture, which freezes the tab. Neighbor Convert HTML to PDF already waits for a click. Matching that here is the people-first behavior.

## Solution
- Init: bind Convert all / Load sample / Clear only
- Progress HUD unchanged, gated on `runBatch`

## Notes / boundaries
- `lint:tool-page` still requires a `loadSample` function in the HTML; the function remains.
- Production URL will show this after the next deploy; local `start:dev` needs a refresh of prerendered pages / local R2.

[actions]
- `src/pages/batchConvertWebPagesToPdfPage.ts` (drop init `loadSample()`)
- `src/site/i18n/tools/batch-convert-web-pages-to-pdf/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts` (`how_item_5`)
- `work-tasks/batch-convert-web-pages-to-pdf/02-tool-info.md` (exception note)
