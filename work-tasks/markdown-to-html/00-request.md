# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项“HTML 转Markdown”，可以与目前的Markdown → HTML 合并

## 已知约束（若有）

- 参考现有工具：已上线 `/tools/markdown-to-html`（`marked` + `DOMPurify`）；方向文档 A.1「HTML → Markdown」（`turndown`）；卡片 B7「优先同页 Tab」
- 必须本地处理：是（粘贴内容不上传）
- YMYL：否
- 优先语言：10 语全量（实现阶段）
- 其他：先立项文档；**合并进现有页**，不新建近义薄页 URL

## 建议 slug（可空，由讨论阶段拟定）

- `markdown-to-html`（保持现有路径；双向增强，不拆 `html-to-markdown`）
