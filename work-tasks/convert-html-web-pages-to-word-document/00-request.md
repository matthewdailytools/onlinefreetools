# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

像上面一样立项和实现：batch convert web pages to png和convert html web pages to word document，注意不同工具的要有足够不同的info gain

## 已知约束（若有）

- 参考现有工具：`convert-html-to-pdf`（粘贴 HTML → A4 PDF）、`turn-pdf-into-word-document`（PDF 文本层 → docx）、`images-to-word`（图片嵌入 docx，不是 HTML）
- 必须本地处理：粘贴 HTML 在标签页转 docx；URL 代抓走边缘 → `localProcessing: false`
- YMYL：否
- 优先语言：en 母版 + 十语
- 其他：产物必须是可编辑段落/标题/列表/表格的 Word，不是网页截图、不是 A4 PDF、不是把 PDF 当输入

## 建议 slug（可空，由讨论阶段拟定）

- `convert-html-web-pages-to-word-document`
