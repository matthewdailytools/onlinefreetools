# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

分步骤立项工具 docs/2026-08-08-tool-inventory-table.md 1. 开发者 / 文本与数据中18到24；然后分步骤实现

## 已知约束（若有）

- 来源清单：[工具清单总表 §1 序号 19](../../docs/2026-08-08-tool-inventory-table.md) — 文件/文本哈希 · `file-hash` · A.6 · P1
- 能力：MD5/SHA 等摘要；Web Crypto 算 SHA；MD5 用 lazy `crypto-js`；支持**文本或文件**
- 必须本地处理：是（文件/文本不上传）
- YMYL：否
- 优先语言：十语
- Related：`base64`（已上线）、`text-diff`（已上线）
- 其他：**先 work-tasks，再分步实现**

## 建议 slug（可空，由讨论阶段拟定）

- `file-hash`（不拆 `md5-calculator` / `sha256-generator` 近义薄页）
