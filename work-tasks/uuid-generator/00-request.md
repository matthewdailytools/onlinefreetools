# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

分步骤立项工具 docs/2026-08-08-tool-inventory-table.md 1. 开发者 / 文本与数据中18到24；然后分步骤实现

## 已知约束（若有）

- 来源清单：[工具清单总表 §1 序号 21](../../docs/2026-08-08-tool-inventory-table.md) — UUID / ULID 生成 · `uuid-generator` · A.6 · P2
- 能力：UUID v4 + ULID；支持批量生成
- 必须本地处理：是（`crypto.getRandomValues` / 本地 ULID）
- YMYL：否
- Related：`password-generator`、`file-hash`（同期立项）
- 其他：**先 work-tasks，再分步实现**

## 建议 slug（可空，由讨论阶段拟定）

- `uuid-generator`（不拆 `uuid-v4` / `ulid-generator` 近义薄页）
