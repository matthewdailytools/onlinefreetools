# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

分步骤立项工具 docs/2026-08-08-tool-inventory-table.md 1. 开发者 / 文本与数据中18到24；然后分步骤实现

## 已知约束（若有）

- 来源清单：[工具清单总表 §1 序号 18](../../docs/2026-08-08-tool-inventory-table.md) — JWT 解码 · `jwt-decoder` · A.6 · P1
- 能力：Base64url 解码 JWT header/payload；**不验证签名**；须可见免责声明
- 必须本地处理：是（token 不上传；纯客户端 split + Base64url decode）
- YMYL：否（但须强调不验签、不可用于授权决策）
- 优先语言：十语（en 母版 → 按 `03-locale-briefs.md` 逐语重写）
- Related：`base64`（已上线）、`unix-timestamp`（同期立项，上线后互链解读 `exp`/`iat`）
- 其他：样例用经典三段子 demo JWT；**先 work-tasks，再分步实现**

## 建议 slug（可空，由讨论阶段拟定）

- `jwt-decoder`（路径 `/tools/jwt-decoder`；不拆 `jwt-parser` / `jwt-debugger` 近义薄页）
