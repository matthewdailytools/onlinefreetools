# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-contribution-margin`  
**路径**：`/tools/how-to-calculate-contribution-margin`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：contribution margin calculator
- 用户任务：单价−变动成本 → CM/比率；可选总量与盈亏平衡件数
- [x] Related：`how-to-calculate-break-even`、`how-to-calculate-gross-margin`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Contribution Margin Calculator — Unit CM Ratio and Break-Even Units |
| Description | Price 50 VC 30 → CM 20 (40%); optional units/fixed → total CM / BE units. Educational only. |
| related | how-to-calculate-break-even, how-to-calculate-gross-margin |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** |
| 主检索词 → title/H1 | en：**Contribution Margin Calculator — Unit CM Ratio and Break-Even Units** |
| 次要关键词 → desc/FAQ | CM ratio；break-even units；vs gross margin → FAQ |
| 优化摘要 | 可选件数/固定成本；safety；desc 含 50/30→20(40%) |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| contribution margin calculator | 吸（主词） | title / H1 |
| CM ratio | 吸（次词） | 结果 / FAQ |
| break-even units from CM | 吸（次词） | fixed 字段 |
| contribution vs gross margin | 吸（次词） | FAQ |
| business advice / investment advice | 有意不满足 | safety + disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 边际贡献计算，仍成立 |
| 主检索词任务 | 改写后单位 CM + 可选总量/BE → **满足** |
| 超出 | 无多产品加权 CM 完整模型 |
| 有意不满足 | 经营/投资建议 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc、disclaimer） |

> `npm run coverage:gate -- --slug=how-to-calculate-contribution-margin --phase=0b`

## 交互规格

- 必填：price>0、VC≥0 且 ≤price
- 可选：units>0 → total CM；fixed≥0 → BE units（需 CM>0）
- 样例轮换：单位 / +units / +fixed / 组合

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
