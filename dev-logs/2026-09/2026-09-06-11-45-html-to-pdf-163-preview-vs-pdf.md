Date: 2026-09-06 11:45
Summary: The HTML iframe preview and the A4 PDF for 163.com differ because they use different renderers; html2canvas also drops webp/svg images and paginates a tall homepage.
Visibility: people

[question]
为什么https://www.163.com/ preview 和 pdf不一样

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
After loading `https://www.163.com/` in Convert HTML to PDF, the right-hand HTML preview and the generated A4 PDF (the canvas under the convert buttons) do not match. The question is why, not a request to make print identical to a live browser tab.

## Process
1. The tool page has two “preview” surfaces. The labeled **预览** box is an iframe (`srcdoc`) of sanitized HTML. After Convert, **OftPdfWork** draws the PDF with pdf.js. Those are not the same document.
2. The iframe is a real nested document: the browser’s CSS engine paints `<link>` / `<style>`, `<img>`, and webp/svg backgrounds. Height is fixed at 28rem, width is half the tool column, and the user can scroll inside the frame.
3. The PDF path is `html2pdf.js` → **html2canvas** screenshot of `iframe.document.body` → JPEG slices on A4 (`jsPDF` portrait). html2canvas is not a print engine and not Chromium’s layout.
4. `onclone` runs `stripUnsupportedImages`: any `background-image` that is not png/jpeg/gif is set to `none`; `<img>` whose `src`/`srcset` is webp/avif/svg/ico is cleared. NetEase assets on `static.ws.126.net` use those types heavily, so the iframe still shows logos and banners while the PDF does not.
5. Cross-origin images can display in the iframe without CORS. html2canvas with `useCORS: true` often gets empty bitmaps when the CDN omits `Access-Control-Allow-Origin`.
6. Capture target is `doc.body`, while 163’s root is `html#ne_wrap` (often `phone=1`). Rules on `html` (background, phone layout) are easy to lose or mis-apply in a body screenshot.
7. Scripts stay blocked (`sandbox` without `allow-scripts`, DOMPurify `FORBID_TAGS: script`). The news modules stay empty in **both** views. That shared gap is not the preview-vs-PDF difference; the difference is rasterization, image policy, viewport, and pagination.

## Root cause / analysis
Preview = live CSS paint of a nested document. PDF = a canvas snapshot fitted to A4. For a JS-built, webp-heavy homepage like [163.com](https://www.163.com/), those pipelines diverge on images, width, and CSS features html2canvas does not implement. Matching a live desktop tab would require executing 163’s JavaScript (unsafe in this tool) or a headless print service (not in-browser html2pdf).

## Solution
No code change in this turn: the split is expected with the current stack. Practical reading: trust the iframe for “did CSS load?”; trust the PDF canvas for “what you will download.” Sample HTML (no remote webp) stays close between the two.

## Notes / boundaries
- Do not enable `allow-scripts` on the preview iframe.
- A4 + html2canvas cannot reproduce infinite-scroll news homes.
- Related earlier CSS-in-head fix: `dev-logs/2026-09/2026-09-06-11-35-html-to-pdf-163-css.md`.

[actions]
- None (explanation only)
