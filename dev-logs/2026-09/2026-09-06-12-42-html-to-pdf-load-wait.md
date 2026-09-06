Date: 2026-09-06 12:42
Summary: Add a load-wait seconds control (default 3) so HTML-to-PDF can finish remote and lazy images before capture.
Visibility: people

[question]
pdf有些空白图片区域，增加一个设置等待载入时间，并设置默认

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Convert HTML to PDF sometimes left empty rectangles where images should be. Capture ran as soon as `img.complete` or a 5s per-image timeout fired. Lazy images below the preview iframe viewport never started, and slow remote files were still blank when html2canvas ran.

## Process
1. Added a number field **Load wait (sec)** next to the action buttons. Range 0–30; **default 3**.
2. Before capture: set every `img` to `loading=eager`, wait for load/error (per-image timeout is at least 5s, or the chosen wait if longer), then sleep the chosen seconds, then wait for images again so late starters can finish.
3. Status text switches to “Waiting for images to finish…” during the extra sleep.
4. Ten-locale labels/hints (not a title/FAQ rewrite). Local check: default value 3; auto sample shows waiting then Done; wait 0 ≈ 0.7s; wait 2 ≈ 2.7s and shows the waiting status.

## Root cause / analysis
html2canvas paints whatever pixels exist at screenshot time. A sandbox iframe without scripts does not run page JS, but native lazy-loading still skips off-screen images, and a 5s cap is not enough for some CDNs. A user-visible delay is the predictable fix.

## Solution
Configurable extra wait with default 3 seconds, plus eager loading and a second image wait after the pause. Raise the number when PDF image boxes stay empty; set 0 to skip the extra pause.

## Notes / boundaries
- Scripts still do not run; JS-injected images will stay missing regardless of wait.
- Wait does not fetch blocked or unsupported formats beyond the existing WebP/PNG proxy path.
- `PAGES_CACHE_VERSION` 4.34.

[actions]
- `src/pages/convertHtmlToPdfPage.ts`: wait field, `readLoadWaitMs`, `markImagesEager`, extra sleep
- `src/site/i18n/tools/convert-html-to-pdf/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`: `wait_label`, `wait_hint`, `status_waiting`
- `wrangler.jsonc`: cache 4.34
- `src/site/tool-catalog.d/convert-html-to-pdf.json`: `updatedAt`
