# 01 — 方向讨论

**结论**：新建 `crop-pdf`（`/tools/crop-pdf`），catalog `pdf`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`organize-pdf`, `rotate-pdf`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- pdf-lib 收紧 CropBox/MediaBox；四边 pt；无拖拽像素框。
- 进页样例：1 页样例 + 四边各裁 36pt → cropped.pdf；stats 显示裁后尺寸
