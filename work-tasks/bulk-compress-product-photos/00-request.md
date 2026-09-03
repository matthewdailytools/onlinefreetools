# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按表格逐一立项和创建工具。

（同会话前置约束，须一并遵守）

- 批量不是在已有单文件页上加 `multiple`；每个批量作业独立工具、独立 IG、独立 slug。
- slug 只含 **一个** 选型词：`bulk` 或 `batch`（按搜法，不是近义堆砌）；落选词只进 FAQ。
- 禁止万能 `bulk-image-compress` 下拉选 JPG/PNG/PDF。
- 压缩按对象拆：商品照片有损变小 ≠ PNG 保透明变小 ≠ PDF 邮件档。
- 本表第一行：`bulk-compress-product-photos` / H1 **Bulk compress product photos**。
- 默认照片；芯片 200KB / jpg / jpeg；不拆 `bulk-compress-jpg` 第二 URL。
- related 在兄弟页未上线前只链已上线 catalog slug。

## 已知约束（若有）

- 参考现有工具：`image-compress`（单张 Canvas toBlob）；ZIP 打包对齐现有 `fflate.zipSync` 客户端页
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：无 Keyword Planner / SERP 本主题，不得标 `long_gap`；仍须 `verdict=build` 实现。进页 `loadSample()`。catalog `page.style: opts`。队列上限约 20、串行解码、失败跳过、成功打 ZIP、命中/未命中汇总。

## 建议 slug（可空，由讨论阶段拟定）

- `bulk-compress-product-photos`
