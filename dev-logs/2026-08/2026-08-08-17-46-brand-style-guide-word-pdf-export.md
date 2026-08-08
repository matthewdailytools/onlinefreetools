Date: 2026-08-08 17:46
Summary: Added local Word (.docx) and PDF download export to brand-style-guide.

[question]
增加 导出为word和pdf的能力

[try to solve]
在品牌手册工具栏增加「下载 Word」「下载 PDF」：生成指南后可导出。Word 懒加载 jsDelivr `docx@8.5.0` 写 .docx；PDF 用系统字体 Canvas 排版（支持中文）再 `pdf-lib@1.17.1` 打多页。库按需加载、正文不上传。十语按钮/状态/FAQ 已补；`lint:seo` OK。硬刷新后先 Generate/Sample，再点下载。

[actions]
- Updated `src/pages/brandStyleGuidePage.ts`
- Updated `src/site/i18n/tools/brand-style-guide/*` + merge:tools
- References: docx + pdf-lib
