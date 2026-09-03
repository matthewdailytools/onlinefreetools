# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按表格逐一立项和创建工具。

（同会话前置约束，须一并遵守）

- 批量不是在已有单文件页上加 `multiple`；每个批量作业独立工具、独立 IG、独立 slug。
- slug 只含 **一个** 选型词：本行用 **batch**（搜 `batch compress pdf`）。
- 本表行：`batch-compress-pdfs-for-email` / H1 **Batch compress PDFs for email**。
- **N 个 PDF → ZIP，不是合并**（划界 `merge-pdf`）。
- 默认邮件档；打印/最大压缩芯片。
- 文本型 vs 扫描型压缩差对照；单文件超内存只中止该项；共享档位下合计节省字节。
- 不另开 `bulk-compress-pdf` 近义页。
- related 只链已上线：`compress-pdf`、`merge-pdf`。

## 已知约束（若有）

- 参考现有工具：`compress-pdf`（pdf.js 栅格 + pdf-lib 重嵌 JPEG）；ZIP `fflate`
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：无 Planner。进页 `loadSample()`。`page.style: opts`。约 20、串行、失败跳过、成功 ZIP。pdf.js / pdf-lib 与单页同族、可懒加载。

## 建议 slug（可空，由讨论阶段拟定）

- `batch-compress-pdfs-for-email`
