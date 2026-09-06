# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：batch convert web page to pdf，并实现（参考convert-html-to-pdf 的实现）

工作待办 `work-todos/2026-09/05.md` 第 3 条：`batch webpage to xxx`

## 已知约束（若有）

- 参考现有工具：`convert-html-to-pdf`（单条 HTML / 单 URL → 一份 PDF；Worker 代抓 URL + 浏览器 html2pdf）
- 必须本地处理：转换在浏览器；**载入公开 URL 须经边缘代抓一次**（与邻页相同，不落盘）
- YMYL：否
- 优先语言：en 母版，十语
- 其他：不得做成 `convert-html-to-pdf` 的换皮 doorway；主任务是**多条网页地址一次转成多份 PDF 并打包 ZIP**

## 建议 slug（可空，由讨论阶段拟定）

- `batch-convert-web-pages-to-pdf`
