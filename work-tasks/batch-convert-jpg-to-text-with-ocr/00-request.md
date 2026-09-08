# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：batch convert jpg to text with ocr，需要额外的info Gain增益，区别于convert-a-jpg-to-text-with-ocr

## 已知约束（若有）

- 参考现有工具：`convert-a-jpg-to-text-with-ocr`（**N1 单张** JPG/PNG/WebP → 一份 TXT；无 `multiple`；FAQ 曾把 `batch ocr` 划为后排）
- 必须本地处理：是（文件留在标签页；复用 N1 的 Tesseract LSTM，点后加载 `/vendor/tesseract/`；ZIP 用已入库 fflate）
- YMYL：否（不做发票/收据字段抽取）
- 优先语言：母版 en；语种芯片默认中英（整批共用，不按文件拆语种 URL）
- 其他：
  - **禁止**把本页做成 N1 的换皮 doorway（只改 title / 加 `multiple` 不够）
  - Information Gain 必须落到**真实差异控件与产物**：多文件队列、逐行状态、失败 skip、Download ZIP、可选合并 TXT（文件名分隔）
  - 不收 PDF（那是 N2）；不出 Word/可检索 PDF/CSV
  - Planner：`batch ocr` / `bulk ocr`（10–100）原 defer 后排页；单文件头词 `jpg to text` **仍归 N1**，本页 H1 用批量任务句
  - 未跑人工 SERP → 不得标 `long_gap`；不占周进攻 KPI
  - 实现时邻页 N1 FAQ「批量呢？」须改链本 slug（`CROSS_TOOL_UPDATE=1`）；本立项不改 N1 源码

## 建议 slug（可空，由讨论阶段拟定）

- `batch-convert-jpg-to-text-with-ocr`
