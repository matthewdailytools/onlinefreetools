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
已创建两个工具页渲染器，沿用 `imageMergePage.ts` 的多文件列表 UX（拖放、排序、缩略图、上移/下移/移除）：

- **`src/pages/imagesToPdfPage.ts`** — `renderImagesToPdfPage`，slug `images-to-pdf`
  - CDN 加载 pdf-lib（全局 `PDFLib`）
  - 控件：纵向/横向、contain/cover
  - 每图一页 PDF，canvas 转 JPEG/PNG 嵌入，下载 `.pdf`
  - `loadSample()` 进页自动跑 3 色块样例并启用下载
  - i18n 前缀 `tool_images_to_pdf_*`；25MB/8192px 软限制；PDFLib 缺失警告

- **`src/pages/imagesToGifPage.ts`** — `renderImagesToGifPage`，slug `images-to-gif`
  - 动态 `import('https://cdn.jsdelivr.net/npm/gifenc@1.0.3/+esm')`
  - 控件：delay 500ms、loop 0=无限、宽度 480（高度按首帧比例）
  - contain 绘制、quantize、预览 `<img>`、下载 GIF
  - `loadSample()` 进页自动跑 3 帧样例
  - i18n 前缀 `tool_images_to_gif_*`；25MB/8192px/约 50 帧软限制；FAQ 区预留与 format-converter 区分（via `renderToolIgSections`）

未修改 catalog / index / i18n（按请求）。

[actions]
- src/pages/imagesToPdfPage.ts (added)
- src/pages/imagesToGifPage.ts (added)
