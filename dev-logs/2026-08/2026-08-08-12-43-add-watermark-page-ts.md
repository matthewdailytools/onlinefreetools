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
已创建 `src/pages/addWatermarkPage.ts`，导出 `renderAddWatermarkPage`，slug 为 `add-watermark`。

页面结构对齐 `imageOverlayPage.ts`：单图 dropzone、水印文本（默认 SAMPLE）、字号/颜色/透明度/旋转、九宫格位置（tl=0.1,0.1 … br=0.9,0.9，手动 x/y 大于 1 时切换像素锚点）、JPEG/WebP/PNG + 质量 + JPEG 背景色、Apply/Download/Sample/Clear、预览 canvas。

客户端：`drawImage` 底图后 `save` → `translate` 锚点 → `rotate` → `globalAlpha` → `fillText` 居中；软限制 25MB/8192；`loadSample()` 渐变底 + SAMPLE 斜水印并自动 `applyWatermark()`，初始化时调用。

i18n 键前缀 `tool_add_watermark_*`；IG `rules` 4 条 + use cases 3；References 含 MDN fillText。未改 catalog/index/i18n。

[actions]
- src/pages/addWatermarkPage.ts (added)
