# 01 — 方向讨论

**结论**：新建 `protect-pdf`（`/tools/protect-pdf`），catalog `pdf`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`unlock-pdf`, `merge-pdf`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- pdf-lib encrypt({ userPassword, ownerPassword }) + save；空密码拒绝。
- 进页样例：1 页样例 + 密码 sample → protected.pdf；再用 unlock 样例可开（文案说明）
