# 01 — 方向讨论

**结论**：新建 `pdf-to-markdown`（`/tools/pdf-to-markdown`），catalog `pdf`，主方向 A（A.5.2 PDF · 本地优先）。

## 与邻近工具

- Related 计划：`markdown-to-html`, `pdf-to-jpg`
- 不做：Office↔PDF、OCR（除非另立项）、密码破解、云端级压缩虚假承诺、近义薄页拆分。

## 技术

- pdfjs-dist 文本层 getTextContent 按 y 分行；下载 .md；无 OCR。
- 进页样例：含 Helvetica 文本的 1 页样例 → .md 可下载且含可见句子
