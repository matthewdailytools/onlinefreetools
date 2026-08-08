# 01 — 方向讨论

**结论**：新建 `pdf-to-jpg`（`/tools/pdf-to-jpg`），catalog `image`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`images-to-pdf`, `image-format-converter`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- CDN pdfjs-dist@4.10.38 + Canvas + fflate@0.8.2；scale 默认 2；不拆 png/webp 薄页。
- 进页样例：2 页迷你 PDF → 两张 JPG → ZIP 可下载
