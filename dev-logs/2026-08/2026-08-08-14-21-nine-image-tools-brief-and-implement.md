Date: 2026-08-08 14:21
Summary: Briefed and implemented nine image tools (flip/grayscale/border/base64/watermark/PDF/GIF/Word/PPT).

[question]
九个图片工具：先立项、再分步实现

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

[try to solve]
Completed Phases 0–4.

Briefs: `work-tasks/{flip-image,image-grayscale,image-border,image-to-base64,add-watermark,images-to-pdf,images-to-gif,images-to-word,images-to-ppt}/` (00–03; 02 now `implemented`). “Convert to git” interpreted as animated GIF (`images-to-gif`).

Implementation: nine pages registered on local routes; ten-locale i18n + catalog + icons + README + home keys; `lint:seo` passed. Local checks `http://127.0.0.1:8788/zh/tools/{slug}` all 200; client scripts syntax-checked.

Tech notes: single-image tools are Canvas Tier 0; multi-image PDF/GIF/Word/PPT lazily load CDN libs in-browser (pdf-lib / gifenc / docx / pptxgenjs) with no user-file upload. `add-watermark` vs `image-overlay` roles split; overlay FAQ cross-links updated.

[actions]
- Added work-tasks briefs ×9
- Added `src/pages/{flipImage,imageGrayscale,imageBorder,imageToBase64,addWatermark,imagesToPdf,imagesToGif,imagesToWord,imagesToPpt}Page.ts`
- Updated catalog, `src/index.ts`, i18n ×10, `scripts/site/i18n.mjs`, README, icons
- `npm run lint:seo`, `npm run build:site`, restarted wrangler on :8788
