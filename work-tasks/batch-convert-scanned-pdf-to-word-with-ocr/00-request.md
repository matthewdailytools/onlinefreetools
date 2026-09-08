# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

立项batch convert scanned pdf to word

立项batch convert scanned pdf to word with ocr

## 已知约束（若有）

- 参考现有工具：
  - `batch-convert-jpg-to-editable-word-with-ocr`（**N4-jpg-batch** 多张照片 → 一份可编辑 DOCX；**不收 PDF**）
  - `turn-pdf-into-word-document`（**A2** 数字 PDF 字层 → Word，**无 OCR**）
  - `extract-text-from-pdf`（数字 PDF 字层 → TXT，无 OCR）
  - `batch-convert-jpg-to-text-with-ocr`（多图 → TXT ZIP，不是 Word）
  - `images-to-word`（照片贴图，字选不中）
- 必须本地处理：是
- YMYL：否
- 优先语言：en 母版；十语 brief 按当地检索写
- 其他：相对其他 OCR / Word 页须有**控件级** Information Gain，禁止只换输入 MIME 或只改扩展名。Planner **N4** 原建议 slug `turn-a-scanned-pdf-into-word`；本回合用户点名 **batch + with ocr**，以任务句为唯一 N4 URL，不另拆单文件 doorway。

## 建议 slug（可空，由讨论阶段拟定）

- `batch-convert-scanned-pdf-to-word-with-ocr`
