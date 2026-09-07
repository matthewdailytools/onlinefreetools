# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项和实现：batch convert web pages to excel,注意不同工具的要有足够不同的info gain

## 已知约束（若有）

- 参考现有工具：`batch-convert-web-pages-to-jpg` / `png` / `pdf`（视口栅格或 A4 分页 ZIP）、`convert-html-web-pages-to-word-document`（标题/列表/段落 → 可编辑 .docx）、`csv-json`（已有表格文本互转）、Excel 公式/发票模板页（不是网页抓取）
- 必须本地处理：URL 代抓走边缘（与 JPG 批处理相同）→ `localProcessing: false`；xlsx 编码在本标签页
- YMYL：否
- 优先语言：en 母版 + 十语
- 其他：产物必须是 **HTML `<table>` 单元格进 Excel 工作表**，不是把网页截图塞进格子，不是 Word 文稿，不是 A4 PDF，不是空白发票模板

## 建议 slug（可空，由讨论阶段拟定）

- `batch-convert-web-pages-to-excel`
