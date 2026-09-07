# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：batch convert web pages to jpg，并实现（参考batch convert web page to pdf的实现），过程中info Gain一定要分析出和实施好方案和差异性方案

工作待办 `work-todos/2026-09/05.md` 第 3 条：`batch webpage to xxx`

## 已知约束（若有）

- 参考现有工具：`batch-convert-web-pages-to-pdf`（URL 列表 → 多份 A4 PDF → ZIP；Worker 代抓 + 本标签页截图）
- 必须本地处理：JPEG 栅格化在浏览器；**载入公开 URL 须经边缘代抓一次**（与 PDF 批处理相同 API，不落盘）
- YMYL：否
- 优先语言：en 母版，十语
- 其他：不得做成 PDF 批处理的换皮 doorway（只改 title / 后缀不够）。Information Gain 必须落到**真实差异控件与产物**：全页 JPEG 截图（非 A4 分页）、视口宽度（桌面/平板/手机）、JPEG 质量、整页 vs 首屏。

## 建议 slug（可空，由讨论阶段拟定）

- `batch-convert-web-pages-to-jpg`
