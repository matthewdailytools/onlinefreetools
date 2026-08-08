Date: 2026-08-08 12:40
Summary: Created image-border and image-to-base64 tool page files following existing image tool patterns.

[question]
You are implementing image tools in /Users/xuli/vscodeai/onlinefreetools following `src/pages/imageOverlayPage.ts` / `colorFromImagePage.ts`.

Create TWO complete page files:

1. `src/pages/imageBorderPage.ts` — slug `image-border`
   - Export `renderImageBorderPage`
   - Dropzone; border width number (default 24); color picker; format JPEG/WebP/PNG; Apply/Download/Sample/Clear
   - Logic: expand canvas to w+2*border, h+2*border; fill border color; drawImage at (border,border)
   - loadSample auto-applies border
   - i18n prefix `tool_image_border_*`
   - Soft limits 25MB/8192; IG rules 4 items, 3 usecases
   - Refs: MDN strokeRect or fillRect

2. `src/pages/imageToBase64Page.ts` — slug `image-to-base64`
   - Export `renderImageToBase64Page`
   - Mode tabs/select: Encode | Decode
   - Encode: dropzone → FileReader readAsDataURL → textarea with data URL; checkbox to strip data: prefix for raw base64; Copy button; preview img
   - Decode: textarea paste → parse data URL or raw base64 (default mime image/png) → preview + Download blob
   - loadSample: canvas PNG → encode path showing data URL
   - i18n `tool_image_to_base64_*`
   - Soft warn large files; no upload messaging
   - Refs: MDN FileReader readAsDataURL + Data URLs

IMPORTANT: All JS string literals must be properly closed. Prefer ASCII hyphens in client JS if unsure. Document key functions.

Do NOT edit catalog/index/i18n. Only these two page files.
Return paths when done.

[try to solve]
已创建两个完整页面文件，结构与 `imageOverlayPage.ts` / `colorFromImagePage.ts` 一致：

1. **`src/pages/imageBorderPage.ts`**
   - 导出 `renderImageBorderPage`
   - 单图 dropzone、边框宽度（默认 24px）、颜色选择、JPEG/WebP/PNG 格式
   - Apply / Download / Sample / Clear；扩画布 `w+2*border` × `h+2*border`，`fillRect` 铺边框色，`drawImage` 居中
   - `loadSample()` 进页自动跑色块样例并应用 24px 白边框
   - i18n 前缀 `tool_image_border_*`；软限制 25MB / 8192px；IG 4 rules + 3 use cases
   - References：MDN fillRect / strokeRect / drawImage

2. **`src/pages/imageToBase64Page.ts`**
   - 导出 `renderImageToBase64Page`
   - Encode | Decode 模式 Tab
   - Encode：`FileReader.readAsDataURL` → textarea；可选去掉 `data:` 前缀；Copy + 预览
   - Decode：粘贴 data URL 或裸 Base64（默认 `image/png`）→ 预览 + Download
   - `loadSample()` 进页自动 Canvas PNG → Encode 显示 data URL
   - i18n 前缀 `tool_image_to_base64_*`；大文件软警告
   - References：MDN FileReader.readAsDataURL + Data URLs

未改动 catalog / index / i18n。

[actions]
- Added `src/pages/imageBorderPage.ts`
- Added `src/pages/imageToBase64Page.ts`
