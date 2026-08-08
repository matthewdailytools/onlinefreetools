Date: 2026-08-08 17:50
Summary: Word/PDF export now captures the on-page preview so downloaded files match the preview look.

[question]
下载后的展现样式和页面的不同，需要保证一致

[try to solve]
Word / PDF 导出已改为截取页面预览 DOM（`#guidePreview` 的离屏克隆 + html2canvas），再按 A4 比例分页写入 `.docx` 图片或 PDF 页，而不再按 Markdown 纯文本重排。动效示例在导出时冻结为静态帧。Word 顶部有一句说明导出视觉与页面预览一致；FAQ a6 与十语 `export_visual_note` 已同步。

[actions]
- `src/pages/brandStyleGuidePage.ts`：`capturePreviewPages` / `loadHtml2Canvas`；Word/PDF 嵌入预览截图
- `src/site/i18n/tools/brand-style-guide/*`：`export_visual_note` + FAQ a6；`npm run merge:tools`
