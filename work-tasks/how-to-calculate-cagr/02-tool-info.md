# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-cagr`  
**路径**：`/tools/how-to-calculate-cagr`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：CAGR calculator；compound annual growth rate
- 用户任务：期初/期末/年数 → CAGR% 或反求；非投资建议
- [x] 竞品：三输入 + %
- [x] 缺口：三模式；分步；醒目免责
- [x] 增益：① 公式 ④ 假设 ⑤ Investopedia ⑧ Example ⑨ related
- [x] Related：`how-to-calculate-roi`、`how-to-calculate-compound-interest`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | CAGR Calculator — Annualized Growth Between Two Values |
| Description | 10000→16105.1 over 5y ≈10% CAGR; reverse end/years. Educational — not investment advice. |
| related | how-to-calculate-roi, how-to-calculate-compound-interest |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** `how-to-calculate-cagr` |
| 主检索词 → title/H1 | en：**CAGR Calculator — Annualized Growth Between Two Values**；zh：**CAGR 计算器 — 两个数值之间的年化增长** |
| 次要关键词 → desc/FAQ | compound annual growth rate；vs ROI；ending value / years → FAQ/模式 |
| 用户搜索习惯判断 | 工具名向；勿堆三参数进 H1 |
| 优化摘要 | 三模式+分步+倍数+safety；desc 含 10k→16105.1@5y≈10% |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| CAGR calculator / how to calculate CAGR | 吸（主词） | title / H1 |
| compound annual growth rate | 吸 | title；formula |
| CAGR vs ROI | 吸 | FAQ |
| ending value from CAGR | 吸 | mode_end |
| years to reach target | 吸 | mode_years |
| investment advice / guaranteed return | **不吸** | safety + disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | CAGR 计算，仍成立 |
| 主检索词任务 | 改写前仅单向 CAGR → **部分满足**；改写后三模式 → **满足** |
| 超出 | 无完整投资组合分析 |
| 有意不满足 | IRR/现金流、荐股 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc、disclaimer） |

> `npm run coverage:gate -- --slug=how-to-calculate-cagr --phase=0b`

## 交互规格

- 模式：求 CAGR% / 求期末 / 求年数
- 输入：正数；样例轮换含 10k→16105.1@5 →10%
- YMYL safety banner；分步+倍数校验

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
