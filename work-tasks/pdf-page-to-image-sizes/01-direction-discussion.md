# 01 — 方向讨论

**结论**：新建 `pdf-page-to-image-sizes`（`/tools/pdf-page-to-image-sizes`），catalog `image`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`pdf-to-jpg`, `images-to-pdf`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- pdfjs + Canvas contain 缩放至预设（1080²、1200×630、1280×720 等）+ fflate ZIP。
- 进页样例：1 页样例 → 默认页 1 → ZIP 含数张命名尺寸 JPG
