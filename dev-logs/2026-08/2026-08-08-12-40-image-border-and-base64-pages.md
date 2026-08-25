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
Created two complete page files, structured like `imageOverlayPage.ts` / `colorFromImagePage.ts`:

1. **`src/pages/imageBorderPage.ts`**
   - Exports `renderImageBorderPage`
   - Single-image dropzone, border width (default 24px), color picker, JPEG/WebP/PNG format
   - Apply / Download / Sample / Clear; expand canvas to `w+2*border` × `h+2*border`, `fillRect` for border color, `drawImage` inset
   - `loadSample()` auto-runs a color-block sample with a 24px white border on load
   - i18n prefix `tool_image_border_*`; soft limits 25MB / 8192px; IG 4 rules + 3 use cases
   - References: MDN fillRect / strokeRect / drawImage

2. **`src/pages/imageToBase64Page.ts`**
   - Exports `renderImageToBase64Page`
   - Encode | Decode mode tabs
   - Encode: `FileReader.readAsDataURL` → textarea; optional strip of `data:` prefix; Copy + preview
   - Decode: paste data URL or raw Base64 (default `image/png`) → preview + Download
   - `loadSample()` auto Canvas PNG → Encode showing data URL on load
   - i18n prefix `tool_image_to_base64_*`; soft warn on large files
   - References: MDN FileReader.readAsDataURL + Data URLs

Did not change catalog / index / i18n.

[actions]
- Added `src/pages/imageBorderPage.ts`
- Added `src/pages/imageToBase64Page.ts`
