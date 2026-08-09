# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

Ship ONE tool end-to-end in /Users/xuli/vscodeai/onlinefreetools with mandatory coverage gates 0b→2→4→all. No skipping ten-locale rewrite.

Slug: how-to-calculate-tile
§12 #19. NOT YMYL. Related: how-to-calculate-concrete + square-feet.

Title: "Tile Calculator — How to Estimate Tile Quantity"
zh: 瓷砖计算器 — 如何估算瓷砖用量

Inputs: room area m² OR L×W; tile L×W cm; waste % (default 10). Output: tiles needed (ceil). Sample: room 12 m², tile 30×30 cm, waste 10% → compute.

Full pipeline: briefs, gates, page+en+9 locales, inventory §9/#111 §12/#19 + TSV 已上线, README, build:site, lint:seo, isolation, dev-log.

Return tiles count for sample and catalog count.

## 已知约束（若有）

- 参考现有工具：`how-to-calculate-concrete`、`square-feet`
- 必须本地处理：是
- YMYL：否
- 优先语言：en 母版 + 十语
- 其他：损耗默认 10%；片数向上取整

## 建议 slug（可空，由讨论阶段拟定）

- `how-to-calculate-tile`
