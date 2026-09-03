# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按表格逐一立项和创建工具。

（同会话前置约束，须一并遵守）

- 批量不是在已有单文件页上加 `multiple`；每个批量作业独立工具、独立 IG、独立 slug。
- slug 只含 **一个** 选型词：本行用 **batch**（搜 `batch checksum`）。
- 本表行：`batch-checksum-release-files` / H1 **Batch checksum release files**。
- 发版目录出校验和表；默认 SHA-256；MD5 对照芯片。
- 与粘贴的 SHA256SUMS/清单逐行对照；大文件分块进度；导出 CSV 与 SUMS 文本两种。
- 相对路径区分重名。
- **输出是表/CSV/SUMS，不是把原文件打 ZIP。**
- related 只链已上线：`file-hash`、`file-metadata-analyzer`。

## 已知约束（若有）

- 参考现有工具：`file-hash`（Web Crypto SHA + 可选 MD5）；`file-metadata-analyzer`
- 必须本地处理：是
- YMYL：否
- 优先语言：十语（母版 en）
- 其他：无 Planner。进页 `loadSample()`。`page.style: opts`。约 20 个文件、串行哈希、失败跳过。队列 UX 与图片批处理相同条数上限，产物不同。

## 建议 slug（可空，由讨论阶段拟定）

- `batch-checksum-release-files`
