# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

继续处理，必须按照原来的处理逻辑逐步处理，不要修改规则跳过规则步骤

（本轮锁定 §12 #12：`unit-converter`；#11 gross-margin 已上线）

## 已知约束（若有）

- 参考：`square-feet`（面积换算已上线）；清单 §9 #104 / §12 #12
- 必须本地处理：是
- YMYL：否（通用换算；非医疗/财务建议）
- 优先语言：十语（en 母版 + **每语独立重写**，禁止英模 UI 回落）
- 其他：
  - slug：`unit-converter`（换算枢纽，**非** `how-to-calculate-*`）
  - Omni：https://www.omnicalculator.com/conversion/conversion-calculator
  - **禁**按单位对拆海量 URL（Omni conversion≈326）
  - 单页多类别 Tab：长度/质量/温度/面积/体积/速度
  - 流程硬门禁：0b → ready → 母版 → phase2 → 十语重写 → phase4 → all → build:site

## 建议 slug

- `unit-converter`
