Date: 2026-09-06 12:28
Summary: Capture wide centered HTML by padding overflow into the html box while keeping the clone at the iframe viewport width, so the PDF no longer clips the left edge.
Visibility: people

[question]
左边被截断了

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
After the full-height capture fix, Convert HTML to PDF still dropped the left side of wide pages. A 1200px `[red|green|blue]` bar with `margin: 0 auto` in the ~500px preview iframe showed red inset on A4 and **no blue**. Negative html2canvas `x` added left whitespace and still cropped the right.

## Process
1. The iframe is much narrower than many layouts. `margin: 0 auto` on a 1200px block overflows both sides; `html, body { overflow: hidden }` hid that from `scrollWidth`.
2. html2canvas paints from `(0, 0)` of the target. Overflow with a negative `getBoundingClientRect` never enters the screenshot. Passing a negative `x` is unreliable in the bundled html2canvas.
3. First attempt: pad `html` so overflow sits inside the box, then set `windowWidth` to the padded `scrollWidth`. The clone then laid out as a **wide window**, so `margin: auto` recentered and the PDF gained a large left gap (red started around 30% of A4).
4. Final capture: unlock overflow-x/y, measure ink bounds (up to 800 nodes), pad `html` on the **live iframe layout**, keep html2canvas `windowWidth` at `iframe.innerWidth`, set `width`/`height` from padded `scrollWidth`/`scrollHeight`, and re-apply the **same** pad values in `onclone` (do not remeasure in the clone). Restore padding and overflow on success and error.

## Root cause / analysis
Two separate bugs stacked. (1) Left/right overflow is outside the html box, so a `(0,0)` screenshot clips it. (2) If the clone window is widened to the capture box, centered blocks reflow and the left side looks truncated even when the pixels exist. Padding fixes (1) only if the clone keeps the iframe width.

## Solution
Pad overflow into `html` on the real iframe, capture the padded scroll box, clone at the live viewport width. Playwright: 1200px RGB bar → red at `x≈2` (0.3% of A4), green and blue present with matching pixel counts, sample HTML still converts. `PAGES_CACHE_VERSION` 4.33.

## Notes / boundaries
- A4 may still show empty space to the right of a wide screenshot; that is fit-to-element, not a missing left edge.
- html2pdf still slices one screenshot onto A4; a line can split across pages.
- Scripts still do not run in the preview iframe.

[actions]
- `src/pages/convertHtmlToPdfPage.ts`: `computeOverflowPads`, `applyHtmlPadding`, live `windowWidth`, clone uses saved pads
- `wrangler.jsonc`: cache 4.33
- `src/site/tool-catalog.d/convert-html-to-pdf.json`: `updatedAt`
