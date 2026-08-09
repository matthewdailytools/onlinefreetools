# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

Ship tools SERIAL end-to-end (each must complete phase=4/all + build:site + lint:seo before next Page.ts).

Tool A: how-to-calculate-aspect-ratio (§12 #20)
- NOT YMYL. Related: unit-converter, square-feet
- Title: "Aspect Ratio Calculator — How to Calculate and Scale Ratios"
- zh: 宽高比计算器 — 如何计算与缩放比例
- Presets 16:9 / 4:3 / 1:1 as options not URLs
- Sample: 1920×1080 → 16:9; scale W to 1280 → H 720
- Full briefs+gates+10 locales+inventory §9/#112 §12/#20+TSV+README+isolation+dev-log

## 已知约束（若有）

- 参考现有工具：`unit-converter`、`square-feet`
- 必须本地处理：是
- YMYL：否
- 优先语言：en 母版 + 十语
- 其他：预设比例仅作控件选项，禁止拆 16:9/4:3 独立 URL

## 建议 slug（可空，由讨论阶段拟定）

- `how-to-calculate-aspect-ratio`
