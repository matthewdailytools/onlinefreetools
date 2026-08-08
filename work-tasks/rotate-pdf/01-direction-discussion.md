# 01 — 方向讨论

**结论**：新建 `rotate-pdf`（`/tools/rotate-pdf`），catalog `pdf`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`organize-pdf`, `split-pdf`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- pdf-lib page.setRotation 累加；模式全部或 1-based 范围（对齐 split）。
- 进页样例：2 页样例 → 全部顺时针 90° → rotated.pdf 可下载
