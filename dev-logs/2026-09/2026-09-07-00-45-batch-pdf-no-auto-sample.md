Date: 2026-09-07 00:45
Summary: Batch convert web pages to PDF no longer runs Load sample on first paint; the button still fills two local pages when clicked.
Visibility: people

[question]
https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf  样例删除自动运行

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
Opening the batch tool immediately called `loadSample()`, which converted two local HTML stand-ins, showed the progress HUD, and froze the tab for a few seconds. The request is to stop that auto-run while keeping the Load sample button.

## Process
1. Removed the trailing `loadSample()` call after the click listeners. The function and the button remain.
2. Rewrote How step 5 in all ten locales so it no longer says the sample already ran on first paint.
3. Recorded the exception in `work-tasks/batch-convert-web-pages-to-pdf/02-tool-info.md`: tool-creation still wants a `loadSample` path; this slug does not invoke it on entry (same click-only pattern as Convert HTML to PDF’s URL load). `lint:tool-page --require-html` still passes because `function loadSample()` exists.

## Root cause / analysis
Auto-running a full html2pdf capture on every visit made first paint feel hung and hid the empty start state. A URL-list tool should wait for Convert all or an explicit Load sample.

## Solution
- Entry: empty URL box, no table rows, ZIP disabled.
- Load sample: still two example.com lines + local HTML PDFs, no live fetch.
- Convert all: still fetches the pasted URLs.

## Notes / boundaries
- Production URL updates after the next deploy / R2 upload. A running `start:dev` may still serve the previous prerender until local R2 is refreshed.

[actions]
- `src/pages/batchConvertWebPagesToPdfPage.ts` (drop auto `loadSample()`)
- `src/site/i18n/tools/batch-convert-web-pages-to-pdf/*.ts` (`how_item_5`)
- `work-tasks/batch-convert-web-pages-to-pdf/02-tool-info.md`
