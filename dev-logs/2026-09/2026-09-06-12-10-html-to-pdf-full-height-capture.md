Date: 2026-09-06 12:10
Summary: Full-document html2canvas capture so long pages are no longer clipped to the 28rem preview iframe.
Visibility: people

[question]
pdf上的页面被截断了

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Convert HTML to PDF showed a complete-looking preview (the iframe scrolls) but the downloaded A4 PDF stopped after one screen. That showed up after capture was pointed at the preview iframe and given `windowWidth`/`width` equal to the iframe’s client width, with no matching full `windowHeight`.

## Process
1. The preview iframe is CSS-fixed at `28rem` (~446px). html2canvas defaults `windowHeight` to that iframe’s `innerHeight`, so the clone is only one viewport tall even when `body.scrollHeight` is thousands of pixels.
2. Many sites also set `html, body { height: 100%; overflow: hidden }`, which makes `scrollHeight` equal the iframe, so measuring without unlocking still clips.
3. Capture now: unlock overflow/height on `html`/`body` (and viewport-sized clipping wrappers), measure `scrollWidth`/`scrollHeight`, pass those as html2canvas `windowWidth`/`windowHeight`/`width`/`height` (plus 32px padding), run the same unlock on the clone, then restore inline styles.
4. Local check: 80 paragraphs → iframe 446px vs document 3311px; PDF is **5 pages**, status「完成」, no pageerror. Short sample still converts.

## Root cause / analysis
html2pdf slices one screenshot onto A4. If that screenshot is only the iframe viewport, later content never exists in the PDF. Preview scrolling hid the bug.

## Solution
Measure and capture the unlocked full document box. A4 still paginates a long screenshot (a line can split across pages); that is slicing, not missing the rest of the page.

## Notes / boundaries
- Scripts still do not run; JS-only modules stay empty in both views.
- `PAGES_CACHE_VERSION` 4.28 → 4.29.

[actions]
- `src/pages/convertHtmlToPdfPage.ts`: `unlockOverflowForCapture`, `measureCaptureBox`, full-height html2canvas options
- `wrangler.jsonc`: cache 4.29
- `src/site/tool-catalog.d/convert-html-to-pdf.json`: `updatedAt`
