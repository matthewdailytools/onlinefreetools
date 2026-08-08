# 01 — 方向讨论

**结论**：新建 `compress-pdf`（`/tools/compress-pdf`），catalog `pdf`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`organize-pdf`, `merge-pdf`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- pdf-lib + Canvas：提取可嵌图→最长边+JPEG 质量档→重嵌；前后 KB/%；无图则提示几乎未减小。
- 进页样例：含嵌入 JPEG 的样例 PDF → Med 档压缩 → stats 显示前后字节并可下载
