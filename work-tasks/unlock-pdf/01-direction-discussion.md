# 01 — 方向讨论

**结论**：新建 `unlock-pdf`（`/tools/unlock-pdf`），catalog `pdf`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`protect-pdf`, `merge-pdf`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- pdf-lib load({ password }) → 无加密再 save；错密明确错误。
- 进页样例：进页生成加密样例（密码固定展示）→ 自动填密解锁 → unlocked.pdf 可下载
