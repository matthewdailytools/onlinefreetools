Date: 2026-08-08 14:21
Summary: Briefed and implemented nine image tools (flip/grayscale/border/base64/watermark/PDF/GIF/Word/PPT).

[question]
九个图片工具：先立项、再分步实现

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

[try to solve]
已完成 Phase 0–4。

立项：`work-tasks/{flip-image,image-grayscale,image-border,image-to-base64,add-watermark,images-to-pdf,images-to-gif,images-to-word,images-to-ppt}/`（00–03；02 现为 `implemented`）。「转 git」按动画 GIF（`images-to-gif`）。

实现：九个页面已注册并上线本地路由；十语 i18n + catalog + icons + README + 首页键；`lint:seo` 通过。本地验证 `http://127.0.0.1:8788/zh/tools/{slug}` 均为 200，客户端脚本语法通过。

技术要点：单图工具为 Canvas Tier 0；多图 PDF/GIF/Word/PPT 在浏览器懒加载 CDN 库（pdf-lib / gifenc / docx / pptxgenjs），不上传用户文件。`add-watermark` 与 `image-overlay` 分工并已改 overlay FAQ 互指。

[actions]
- Added work-tasks briefs ×9
- Added `src/pages/{flipImage,imageGrayscale,imageBorder,imageToBase64,addWatermark,imagesToPdf,imagesToGif,imagesToWord,imagesToPpt}Page.ts`
- Updated catalog, `src/index.ts`, i18n ×10, `scripts/site/i18n.mjs`, README, icons
- `npm run lint:seo`, `npm run build:site`, restarted wrangler on :8788
