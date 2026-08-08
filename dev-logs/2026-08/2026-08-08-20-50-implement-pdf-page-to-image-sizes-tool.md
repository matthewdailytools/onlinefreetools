Date: 2026-08-08 20:50
Summary: Implemented pdf-page-to-image-sizes tool (#62) with full i18n, gates green, inventory updated.

[question]
Implement full `pdf-page-to-image-sizes` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: pdf-page-to-image-sizes, category: **image**, #62
- Title: "PDF Page to Image Sizes — Multi-Size Export Pack"
- Tech: pdfjs-dist@4.10.38 lazy (like pdf-to-jpg) + Canvas contain-fit into target sizes + fflate@0.8.2 ZIP of JPEGs.
- Page number input (default 1, 1-based).
- Preset sizes (document in Rules): 
  - 1080x1080 (instagram-square)
  - 1200x630 (og-facebook)
  - 1280x720 (hd-landscape)
  - 1080x1920 (story-portrait)
- Render selected PDF page once at good scale, then drawImage contain-centered onto each size canvas (white or transparent→white for JPEG), toBlob jpeg 0.9, zip as `page-{n}-{WxH}.jpg`.
- related: ["pdf-to-jpg","images-to-pdf"]
- loadSample(): 1-page sample PDF via pdf-lib → export all sizes → ZIP downloadable
- Privacy, 25MB soft warn, encrypted errors

## Create catalog, icon, pdfPageToImageSizesPage.ts, 10 i18n full independent.

## Update 02/03 1b+2b (en,zh,es,ja), inventory #62, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=pdf-page-to-image-sizes --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=pdf-page-to-image-sizes npm run lint:tool-isolation

No plan/commit. 中文 brief. Chinese comments on functions.

Also double-check inventory lines 52-62 are all 已上线; if any still 未开始, fix them.

[try to solve]
已完成 `pdf-page-to-image-sizes`（清单 #62）全量实现：

**页面与逻辑**（`src/pages/pdfPageToImageSizesPage.ts`）
- pdfjs-dist@4.10.38 懒加载；选定页 2× 渲染一次
- Canvas contain 居中 fit 至四预设（1080²、1200×630、1280×720、1080×1920），白底 JPEG 0.9
- fflate@0.8.2 打包 `page-{n}-{WxH}.jpg` → `page-{n}-sizes.zip`
- 页码输入（默认 1）；25MB 软警告；加密/损坏可读错误
- `loadSample()` 进页自动跑：pdf-lib 单页样例 → 导出 → Download 可用

**注册与文案**
- `src/site/tool-catalog.d/pdf-page-to-image-sizes.json`（category: image，related: pdf-to-jpg, images-to-pdf）
- `public/icons/tools/pdf-page-to-image-sizes.svg`
- 十语独立 i18n：`src/site/i18n/tools/pdf-page-to-image-sizes/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- `03-locale-briefs.md` 补 1b/2b 多轮记录；`README.md` 中英条目；inventory #62 → **已上线 · P2**

**清单 52–62 核对**：#52–#61 原本已为「已上线」；仅 #62 由「未开始 · P2」更新为「已上线 · P2」。

**门禁**：`merge:tools`、`coverage:gate --phase=all`、`build:site`、`lint:seo`、`lint:tool-isolation`（CROSS_TOOL_UPDATE=1）全部通过。

[actions]
- src/site/tool-catalog.d/pdf-page-to-image-sizes.json
- src/pages/pdfPageToImageSizesPage.ts
- public/icons/tools/pdf-page-to-image-sizes.svg
- src/site/i18n/tools/pdf-page-to-image-sizes/*.ts (10 locales)
- work-tasks/pdf-page-to-image-sizes/03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md
- README.md
