# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

Tool B: how-to-calculate-paint (§12 #21) — only after A ships
- NOT YMYL. Related: how-to-calculate-tile, how-to-calculate-concrete
- Title: "Paint Calculator — How to Estimate Paint Needed"
- zh: 油漆计算器 — 如何估算用漆量
- Inputs: wall area m² (or L×H×walls), coats, coverage m²/L (default 10). Output liters (+ optional cans if 3.78L).
- Sample: 40 m², 2 coats, 10 m²/L → 8 L
- Full same pipeline; inventory §9/#113 §12/#21

## 已知约束（若有）

- 参考现有工具：`how-to-calculate-tile`、`how-to-calculate-concrete`
- 必须本地处理：是
- YMYL：否
- 优先语言：en 母版 + 十语
- 其他：覆盖率默认 10 m²/L；可选 3.78 L 罐数

## 建议 slug（可空，由讨论阶段拟定）

- `how-to-calculate-paint`
