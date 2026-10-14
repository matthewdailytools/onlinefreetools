# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-debt-payoff`  
**路径**：`/tools/how-to-calculate-debt-payoff`  
**主方向**：C  
**YMYL**：是  
**最近改写**：2026-10-13（薄页逐页改写队列 #5）

## 改写原因（2026-10-13）

审计：197 词；FAQ「Will it finish? / Snowball page? / Advice?」为空话；示例写「about 30 months」，实际逐月摊还为 **29 个月**（错误事实）；只能固定月供求月数，不能按目标月数求月供，无额外还款对比、无还清月份、无总支付额。

## IG 预审

- 用户任务：信用卡 / 贷款余额按固定月供多久还清、利息多少；或想在 N 个月内还清要还多少
- [x] 竞品（debt payoff calculator 常见结构）：余额 + APR + 月供 → 月数/总利息/还清日期；额外还款对比；目标月数反求月供
- [x] 缺口：旧页事实错误（30→29）；无反求；无额外还款节省；无「月供不足」具体阈值
- [x] 增益：① 双向（月供→月数 / 月数→月供）② 额外还款节省月数与利息 ③ 首月利息阈值报错 ④ 末期还款与逐年明细 ⑤ 还清月份 ⑥ 公式三式与样例互验
- [x] 权威：Investopedia Amortization；Wikipedia Amortization calculator
- [x] Related：`how-to-calculate-emi`、`how-to-calculate-compound-interest`、`create-budget-spreadsheet`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Debt Payoff Calculator — How Long to Pay Off and Total Interest |
| Description (en) | Calculate how many months it takes to pay off a credit card or loan balance at a fixed monthly payment, the total interest, and how much an extra payment saves. Example: 5,000 at 12% APR paying 200 a month takes 29 months and 782.45 in interest. |
| related | how-to-calculate-emi, how-to-calculate-compound-interest, create-budget-spreadsheet |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13 |
| slug 结论 | **保留** `how-to-calculate-debt-payoff` |
| 主检索词 → title/H1 | Debt Payoff Calculator — How Long to Pay Off and Total Interest |
| 次要关键词 | how long to pay off debt → FAQ q1 + 主结果；credit card payoff → desc/usecase 1；extra payment → 字段 + FAQ q3；payment to pay off in X months → 模式 target；avalanche vs snowball → FAQ q5（不拆页）；0% APR → FAQ q6 |
| 优化摘要 | H1 改为「多久还清 + 总利息」结果向；desc 含正确样例 29 个月 / 782.45；新增目标月数模式与额外还款 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| debt payoff calculator / how long to pay off debt | 吸 | title；FAQ q1 |
| credit card payoff calculator | 吸 | desc；usecase 1；FAQ q4（日均余额差异） |
| extra payment calculator / pay off debt faster | 吸 | 额外还款字段；FAQ q3 |
| how much to pay to be debt free in 2 years | 吸 | 模式 target；Formula item 3 |
| minimum payment never pays off | 吸 | 报错 err_pay_low；FAQ q2 |
| debt avalanche vs snowball | 吸（说明，不拆页） | FAQ q5；usecase 4 |
| multiple debts snowball planner | **不吸**（单债务页） | FAQ q5 说明逐笔计算 |
| loan EMI | **不吸** | FAQ q7 → EMI 工具 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主检索词任务 | 改写前只算月数且示例错误 → **部分满足**；双向 + 额外还款 + 明细 → **满足** |
| 有意不满足 | 多笔债务排序计划、日均余额精算、费用/罚息 |
| 总判 | 满足（已回写 H1、模式、FAQ、desc、示例纠错） |

## 交互规格

- 模式：pay（默认，月供→月数）/ target（月数→月供）；`data-mode` 显隐
- 逐月：利息 = 余额 × APR/12，四舍五入到分；末期还款 = 余额 + 当月利息
- 月供 ≤ 首月利息 → 报错并给出首月利息；>600 个月 → 报错
- target：P = B·r/(1−(1+r)^−n) 向上取整到分，再逐月模拟
- 额外还款 > 0：主结果用 P+extra，另示节省月数与利息
- 样例：5000 / 12% / 200 / extra 50 → 23 个月、利息 606.76、节省 6 个月与 175.69；无 extra → 29 个月、782.45、末期 182.45；target 24 → 235.37
- 进页 loadSample

## 页面模块清单

- [x] H1 + 交互 + How/Why/Formula/Example/Use cases×4/FAQ×7/Related/References/Disclaimer
- [x] `03-locale-briefs.md` 已填
