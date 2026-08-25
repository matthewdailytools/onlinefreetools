Date: 2026-08-08 12:43
Summary: Created addWatermarkPage.ts following imageOverlayPage patterns.

[question]
In /Users/xuli/vscodeai/onlinefreetools create `src/pages/addWatermarkPage.ts` following `src/pages/imageOverlayPage.ts` patterns.

Slug: `add-watermark`. Export `renderAddWatermarkPage`.

UI:
- Single image dropzone
- Text input for watermark (default SAMPLE)
- Font size number, color picker, opacity range, rotation degrees, position 9-grid (like overlay)
- Format JPEG/WebP/PNG + quality + jpeg bg color
- Apply, Download, Sample, Clear
- Preview canvas

Client logic:
- Draw base image full size; save/restore for text with translate to anchor, rotate, globalAlpha, fillText centered on anchor
- Position grid sets x/y as fraction of canvas (tl=0.1,0.1 ... br=0.9,0.9 etc) or pixel anchors
- Soft limits 25MB/8192
- loadSample(): gradient base + text SAMPLE diagonal; auto apply; call on init
- i18n prefix `tool_add_watermark_*`
- IG rules 4, usecases 3
- References: MDN fillText
- FAQ should distinguish from image-overlay (logo image vs typed text)

IMPORTANT: properly closed JS strings only. Document key functions with comments.

Do not edit catalog/index/i18n. Return path when done.

[try to solve]
Created `src/pages/addWatermarkPage.ts`, exporting `renderAddWatermarkPage`, slug `add-watermark`.

Page structure matches `imageOverlayPage.ts`: single-image dropzone, watermark text (default SAMPLE), font size/color/opacity/rotation, nine-grid position (tl=0.1,0.1 … br=0.9,0.9; manual x/y > 1 switches to pixel anchors), JPEG/WebP/PNG + quality + JPEG background color, Apply/Download/Sample/Clear, preview canvas.

Client: `drawImage` base, then `save` → `translate` anchor → `rotate` → `globalAlpha` → centered `fillText`; soft limits 25MB/8192; `loadSample()` builds a gradient base + SAMPLE diagonal watermark and auto `applyWatermark()` on init.

i18n key prefix `tool_add_watermark_*`; IG `rules` 4 + use cases 3; References include MDN fillText. Did not change catalog/index/i18n.

[actions]
- src/pages/addWatermarkPage.ts (added)
