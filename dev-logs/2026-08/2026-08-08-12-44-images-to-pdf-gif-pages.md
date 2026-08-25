Date: 2026-08-08 12:44
Summary: Created images-to-pdf and images-to-gif tool page renderers following imageMergePage multi-file list UX.

[question]
In /Users/xuli/vscodeai/onlinefreetools create two pages following `src/pages/imageMergePage.ts` multi-file list UX (dropzone multiple, sortable list with up/down/remove thumbs).

1. `src/pages/imagesToPdfPage.ts` slug `images-to-pdf`, export `renderImagesToPdfPage`
   - Load pdf-lib from CDN in extraBodyHtml
   - Controls: page orientation portrait/landscape, fit contain/cover
   - Convert button builds PDF: each image one page; embed as JPEG or PNG; download .pdf
   - loadSample: 3 color block images → auto convert → enable download
   - i18n `tool_images_to_pdf_*`
   - Soft limits; warn if PDFLib missing

2. `src/pages/imagesToGifPage.ts` slug `images-to-gif`, export `renderImagesToGifPage`
   - Dynamic import gifenc from CDN ESM
   - Controls: delay ms (default 500), loop (0 infinite), output width (default 480, height auto)
   - Preview: object URL of resulting gif in img
   - loadSample: 3 frames different colors → auto build gif
   - i18n `tool_images_to_gif_*`
   - FAQ: differs from static GIF in format-converter

Do not edit catalog/index/i18n. Return paths.

[try to solve]
Created two tool page renderers, reusing `imageMergePage.ts` multi-file list UX (drop, sort, thumbs, up/down/remove):

- **`src/pages/imagesToPdfPage.ts`** — `renderImagesToPdfPage`, slug `images-to-pdf`
  - CDN-loads pdf-lib (global `PDFLib`)
  - Controls: portrait/landscape, contain/cover
  - One image per PDF page; canvas → JPEG/PNG embed; download `.pdf`
  - `loadSample()` auto-runs 3 color-block samples and enables download
  - i18n prefix `tool_images_to_pdf_*`; 25MB/8192px soft limits; warn if PDFLib missing

- **`src/pages/imagesToGifPage.ts`** — `renderImagesToGifPage`, slug `images-to-gif`
  - Dynamic `import('https://cdn.jsdelivr.net/npm/gifenc@1.0.3/+esm')`
  - Controls: delay 500ms, loop 0=infinite, width 480 (height from first-frame aspect)
  - contain draw, quantize, preview `<img>`, download GIF
  - `loadSample()` auto-runs 3-frame sample on load
  - i18n prefix `tool_images_to_gif_*`; 25MB/8192px/~50-frame soft limits; FAQ reserved to distinguish from format-converter (via `renderToolIgSections`)

Did not modify catalog / index / i18n (as requested).

[actions]
- src/pages/imagesToPdfPage.ts (added)
- src/pages/imagesToGifPage.ts (added)
