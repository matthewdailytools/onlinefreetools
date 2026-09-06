Date: 2026-09-06 23:05
Summary: Batch web-page-to-PDF now shows a progress bar, spinner, and per-row status before html2canvas freezes the tab, so a click no longer looks like a hang.
Visibility: people

[question]
缺少过程进度显示，点击后以为卡死了

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
The batch converter fetches each public URL (or a local sample page) and turns it into an A4 PDF with html2pdf.js in this tab, then zips the successful files. After Convert all or Load sample, the page went quiet for several seconds. People assumed the tab had crashed and clicked again.

## Process
1. Reproduced the stall from the capture path: `html2canvas` (inside html2pdf) walks the iframe DOM on the **main thread**. A status string written in the same turn often never paints, so the UI still looks idle while the CPU is busy.
2. Wired the shared PDF workbench (`OftPdfWork.bind('bcwPdf')`) already used by other PDF tools: striped progress bar, primary-button spinner, `aria-busy`, and `yieldUi()` (one animation frame plus ~40 ms) before each heavy step.
3. Pre-seed the result table as **Queued**, highlight the active row, and set the live status to `{i} / {total} · {step}` (`fetching` / `waiting for images` / `rendering PDF`). Before `html2pdf()`, call `onBeforeCapture` and `sleep(50)` so that paint can happen.
4. Added the missing UI strings in all ten locales (`status_queued`, `status_converting`). The converting line tells people the tab may pause for a few seconds, because CSS animations also freeze while the main thread is inside html2canvas — a spinner alone would look stuck.
5. `tool:touch`, `merge:tools`, prerender this slug, `lint:tool-page --require-html`. Headless Chrome on the Chinese prerendered page (Load sample on first paint) saw: progress bar on, both rows Queued, converting copy, then both rows PDF ready in about 3.3 s.

## Root cause / analysis
Silence was not a dead lock. The work was running; the main thread could not paint. Showing progress **before** the capture, plus honest copy that a short pause is expected, is the fix that fits a browser-side screenshot. Moving html2canvas off-thread is not possible: it needs the live DOM.

## Solution
- Progress bar `#bcwPdfProgressWrap` under the status line; Convert all gets a spinner while the batch runs.
- Table rows appear immediately as queued, then fetching / rendering / ready / skipped.
- Capture yields the UI, then warns that rendering may pause the tab.
- Ten-locale queued / converting strings (English: “Queued” / “Rendering PDF… this tab may pause for a few seconds”; Chinese: “排队中” / “正在生成 PDF…这一步较重，页面可能会停几秒”).

## Notes / boundaries
- html2canvas will still freeze the tab for a few seconds per page; the bar and status are meant to be visible **before** that freeze.
- Convert all against live sites still uses `GET /api/tools/convert-html-to-pdf`; this session verified Load sample (local HTML stand-ins) in headless Chrome, not arbitrary remote URLs.
- Neighbor `convert-html-to-pdf` was not changed. `verify:tool` isolation can still fail if that slug’s files are dirty in the same working tree.

[actions]
- `src/pages/batchConvertWebPagesToPdfPage.ts` (progress bind, yield before capture, per-row phases)
- `src/site/i18n/tools/batch-convert-web-pages-to-pdf/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts` (`status_queued`, `status_converting`)
- `npm run tool:touch -- --slug=batch-convert-web-pages-to-pdf`
- `npm run merge:tools`
- `node scripts/prerender-tool-pages.mjs --slug=batch-convert-web-pages-to-pdf`
- `npm run lint:tool-page -- --slug=batch-convert-web-pages-to-pdf --require-html`
