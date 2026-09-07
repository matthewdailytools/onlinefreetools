# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

像上面一样立项和实现：batch convert web pages to png和convert html web pages to word document，注意不同工具的要有足够不同的info gain

## 已知约束（若有）

- 参考现有工具：`batch-convert-web-pages-to-jpg`（视口 JPEG 栅格）、`batch-convert-web-pages-to-pdf`（A4 分页）、`bulk-convert-images-to-png`（本地图转 PNG，不是网页）
- 必须本地处理：URL 代抓走边缘（与 JPG 批处理相同）→ `localProcessing: false`；PNG 编码在本标签页
- YMYL：否
- 优先语言：en 母版 + 十语
- 其他：与 JPG/PDF 邻页必须有独立产物合同（无损 PNG + 透明底/倍率，不是换后缀的 JPEG）

## 建议 slug（可空，由讨论阶段拟定）

- `batch-convert-web-pages-to-png`
