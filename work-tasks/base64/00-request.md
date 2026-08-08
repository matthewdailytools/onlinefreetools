# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

分步骤立项工具 docs/2026-08-08-tool-inventory-table.md 1. 开发者 / 文本与数据中18到24；然后分步骤实现

## 已知约束（若有）

- 来源清单：[工具清单总表 §1 序号 20](../../docs/2026-08-08-tool-inventory-table.md) — Base64 编解码 · `base64` · A.6 · P1
- 能力：文本/字节 encode/decode；UTF-8；**Base64url 选项**；与 `image-to-base64` **intent 分离**
- 必须本地处理：是
- YMYL：否
- Related：`image-to-base64`（已上线）、`jwt-decoder`、`html-entity`（已上线）
- 其他：**先 work-tasks，再分步实现**

## 建议 slug（可空，由讨论阶段拟定）

- `base64`（不拆 `base64-encoder` / `base64-decoder` 近义薄页；**非** image-to-base64）
