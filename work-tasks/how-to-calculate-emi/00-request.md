# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

一个接一个处理：立项"12. Omni Calculator 公式对照链接" 的序号8到62工具，然后实现（实现完毕后再立项下一个）

（本轮锁定 §12 #8：`how-to-calculate-emi`）

## 已知约束（若有）

- 参考现有工具：`how-to-calculate-compound-interest`、`how-to-calculate-roi`（YMYL 财务教育页结构）；清单 §9 / §12 / Omni 意图合并
- 必须本地处理：是（纯客户端公式）
- YMYL：是（财务教育；非贷款/投资建议）
- 优先语言：十语（en 母版 + 实质本地化）
- 其他：
  - slug 已定：`how-to-calculate-emi`
  - 合并 Omni：`emi|amortization|bike-emi|home-loan-emi|personal-loan-emi|mortgage|mortgage-payoff|mortgage-amortization|biweekly-mortgage|home-mortgage`（车/房/个人贷作场景，**不拆 URL**；双周供作付款频率选项）
  - 对照：https://www.omnicalculator.com/finance/emi ；ToolDone EMI/摊还
  - 策略：`docs/2026-08-08-omnicalculator-seo-traffic-strategy.md` 层 B P1

## 建议 slug（可空，由讨论阶段拟定）

- `how-to-calculate-emi`
