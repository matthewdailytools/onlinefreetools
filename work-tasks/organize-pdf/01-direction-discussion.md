# 01 — 方向讨论

**结论**：新建 `organize-pdf`（`/tools/organize-pdf`），catalog `pdf`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`merge-pdf`, `split-pdf`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- Tier 1：CDN pdf-lib@1.17.1；页列表上移/下移/删除/勾选导出；copyPages；无 pdf.js 缩略图。
- 进页样例：3 页迷你 PDF（页标 1/2/3）→ 删除中间页并重排 → 2 页 organized.pdf 可下载
