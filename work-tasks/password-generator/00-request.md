# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

分步骤立项工具 docs/2026-08-08-tool-inventory-table.md 1. 开发者 / 文本与数据中18到24；然后分步骤实现

## 已知约束（若有）

- 来源清单：[工具清单总表 §1 序号 22](../../docs/2026-08-08-tool-inventory-table.md) — 随机密码生成 · `password-generator` · A.6 · P2
- 能力：`crypto.getRandomValues`；字符集选项；**诚实强度 disclaimer**（非密码管理器）
- 必须本地处理：是
- YMYL：**否**（但须轻量安全免责）
- Related：`uuid-generator`、`file-hash`（同期立项）
- 其他：**先 work-tasks，再分步实现**

## 建议 slug（可空，由讨论阶段拟定）

- `password-generator`（不拆 `strong-password-generator` 近义薄页）
