Date: 2026-08-08 12:43
Summary: Added images-to-word and images-to-ppt tool page renderers following imageMerge multi-file list UX.

[question]
In /Users/xuli/vscodeai/onlinefreetools create two pages following `src/pages/imageMergePage.ts` multi-file list UX.

1. `src/pages/imagesToWordPage.ts` slug `images-to-word`, export `renderImagesToWordPage`
   - Prefer loading `docx` from CDN. If UMD unavailable, use dynamic import:
     `import('https://cdn.jsdelivr.net/npm/docx@8.5.0/+esm')` getting Document, Packer, Paragraph, ImageRun, PageBreak
   - Each image: convert to PNG bytes via canvas; insert ImageRun with reasonable width (e.g. 550px); PageBreak between images (not after last)
   - Convert + Download .docx; loadSample 2-3 color blocks auto convert
   - i18n `tool_images_to_word_*`

2. `src/pages/imagesToPptPage.ts` slug `images-to-ppt`, export `renderImagesToPptPage`
   - Load pptxgenjs from CDN UMD: `https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js`
   - Global PptxGenJS: create presentation 16:9; each image one slide, contain centered (as data URL png/jpeg)
   - Convert + Download .pptx; loadSample 3 blocks auto
   - i18n `tool_images_to_ppt_*`

Both: soft limits, list reorder, clear, no upload messaging, IG rules/usecases/faq, MDN Blob or library refs.
IMPORTANT: properly closed JS strings. Comment key functions.

Do not edit catalog/index/i18n. Return paths.

[try to solve]
Created two page files mirroring `imageMergePage.ts` multi-file list UX (dropzone, reorder, soft limits, clear, loadSample auto-convert on enter):

- `src/pages/imagesToWordPage.ts` — `renderImagesToWordPage`, slug `/tools/images-to-word`. Lazy-loads docx via CDN UMD with ESM fallback; Canvas→PNG bytes; ImageRun at 550px width; PageBreak between images; Convert/Download DOCX; 3 color-block sample.
- `src/pages/imagesToPptPage.ts` — `renderImagesToPptPage`, slug `/tools/images-to-ppt`. Loads PptxGenJS UMD bundle; LAYOUT_16x9; one slide per image with contain sizing; Convert/Download PPTX; 3 color-block sample.

Both include IG sections (`tool_images_to_word_*` / `tool_images_to_ppt_*`), references (docx.js.org or PptxGenJS + MDN Blob), and commented key client functions. Catalog, index, and i18n were not edited.

[actions]
- Added `src/pages/imagesToWordPage.ts`
- Added `src/pages/imagesToPptPage.ts`
