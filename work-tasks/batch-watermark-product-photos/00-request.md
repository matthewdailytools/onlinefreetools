# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按表格逐一立项和创建工具。

（同会话前置约束，须一并遵守）

- 批量不是在已有单文件页上加 `multiple`；每个批量作业独立工具、独立 IG、独立 slug。
- slug 只含 **一个** 选型词：本行用 **batch**（搜 `batch watermark`）。
- 本表行：`batch-watermark-product-photos` / H1 **Batch watermark product photos**。
- 同一版权字盖一整拍商品图；默认；DRAFT 斜铺为芯片。
- 按短边百分比缩放，横竖图同一相对锚点；画布过小拒绝并记失败行；先预览一张再 Apply all。
- 与 PDF 水印页对象划界（本页是照片）。
- related 只链已上线：`add-watermark`、`image-compress`。

## 已知约束（若有）

- 参考现有工具：`add-watermark`（单张 Canvas fillText）；ZIP `fflate`
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：无 Planner。进页 `loadSample()`。`page.style: opts`。约 20、串行、失败跳过、成功 ZIP。catalog 已有 `add-watermark`。

## 建议 slug（可空，由讨论阶段拟定）

- `batch-watermark-product-photos`
