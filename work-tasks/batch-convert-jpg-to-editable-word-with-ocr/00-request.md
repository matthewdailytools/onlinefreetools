# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项：batch convert jpg to editable word with ocr，需要额外的info Gain增益，区别于其他ocr工具

## 已知约束（若有）

- 参考现有工具：
  - `convert-a-jpg-to-text-with-ocr`（**N1** 单张 → 一份 TXT）
  - `batch-convert-jpg-to-text-with-ocr`（**N1-batch** 多张 → ZIP 的 TXT + combined.txt）
  - `images-to-word`（多图装订进 DOCX，**照片本身**当页，无 OCR、字不可选中编辑）
  - `turn-pdf-into-word-document`（数字 PDF **字层** → DOCX，无 OCR）
  - Planner **N4** `turn-a-scanned-pdf-into-word`（扫描 PDF → Word；尚未建夹；原计划把 `jpg to word ocr` 当芯片不另开 URL）
- 必须本地处理：是（图留在标签页；复用 N1 Tesseract LSTM，点后加载；DOCX 用已入库 `/vendor/docx/`）
- YMYL：否（不做发票字段抽取）
- 优先语言：母版 en；语种芯片默认中英（整批共用）
- 其他：
  - **禁止**把本页做成 N1-batch 换皮 doorway（只把 ZIP 里的 `.txt` 改成 `.docx` 不够）
  - Information Gain 必须落到 **Word 文档结构**：一份可在 Word 里改的 `.docx`（按文件名 Heading + 分页 + OCR 段落），默认在段前插入原图便于校对
  - 不收 PDF（那是未来 N4 / N2）；不出 TXT ZIP（那是 N1-batch）；不承诺栏/表版式
  - Planner：`jpg to word ocr`（10–100）本页 absorb；`ocr pdf to word` / `convert scanned pdf to word` **仍归 N4**，本页有意不满足
  - 未跑人工 SERP → 不得标 `long_gap`；不占周进攻 KPI

## 建议 slug（可空，由讨论阶段拟定）

- `batch-convert-jpg-to-editable-word-with-ocr`
