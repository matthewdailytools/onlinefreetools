Date: 2026-08-08 12:40
Summary: Created flip-image and image-grayscale page files following existing image tool patterns.

[question]
Create TWO complete page files: `src/pages/flipImagePage.ts` (slug flip-image) and `src/pages/imageGrayscalePage.ts` (slug image-grayscale). Do NOT edit catalog/index/i18n yet.

[try to solve]
Created both page files with full shell (dropzone, format/quality, Apply/Download/Sample/Clear, canvas preview, loadSample auto-run on init, IG sections, references, getToolBySlug). Flip uses Canvas scale(-1,1)/(1,-1); grayscale uses Rec.601 getImageData with alpha preserved. Soft limits 25MB/8192px. Bilingual JSDoc on exported functions and key helpers.

[actions]
- Added `src/pages/flipImagePage.ts`
- Added `src/pages/imageGrayscalePage.ts`
