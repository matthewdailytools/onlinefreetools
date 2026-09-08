# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：convert-a-jpg-to-text-with-ocr

（上一轮：查看 OCR MD 分析文档。权威分析见 `docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md` **N1**；能力上限见 `dev-logs/2026-09/2026-09-07-15-52-js-ocr-capability-ceiling.md`。）

## 已知约束（若有）

- 参考现有工具：近邻均**无 OCR** — `extract-text-from-pdf`、`pdf-to-markdown`、`turn-pdf-into-word-document`、`images-to-pdf`、`images-to-word`
- 必须本地处理：是（文件留在标签页；OCR WASM 从本站 `/vendor/` 点后加载）
- YMYL：否（不做发票/收据字段抽取）
- 优先语言：母版 en；语种芯片默认中英，阿语/中文为 Planner absorb，勿拆 `arabic-ocr` URL
- 其他：
  - 禁止 H1=`Online OCR` / `OCR to text` / `Free OCR` 光杆壳
  - 不得把 OCR 词 absorb 进现有无 OCR 页
  - 本批不立项 N2–N5、不立项 `batch ocr`
  - 未跑人工 SERP → 不得标 `long_gap`；H1 用场景任务句
  - 实现前须 POC：印刷体中英（PP-OCRv6 tiny）；日语走 fallback，勿用 tiny 冒充

## 建议 slug（可空，由讨论阶段拟定）

- `convert-a-jpg-to-text-with-ocr`（Planner N1 已定；本轮用户点名立项）
