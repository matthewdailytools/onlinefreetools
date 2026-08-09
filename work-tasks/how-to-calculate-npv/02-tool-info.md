# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-npv`  
**路径**：`/tools/how-to-calculate-npv`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：NPV calculator；how to calculate net present value；净现值
- 用户任务：折现率 + 初始投资 + 逐年现金流 → NPV；理解非投资建议
- [x] 竞品：折现率 + 现金流序列；少假设与醒目免责
- [x] 缺口：可见公式；I0/现金流解析边界；与 CAGR/ROI/PV·FV 分意图
- [x] 增益：① 公式 ④ 假设 ⑤ Investopedia ② 边界 ⑧ Example ⑨ related YMYL
- [x] 权威：https://www.investopedia.com/terms/n/npv.asp ；https://www.investopedia.com/ask/answers/032615/whats-difference-between-present-value-and-net-present-value.asp
- [x] Related：`how-to-calculate-cagr`、`how-to-calculate-roi`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | NPV Calculator — How to Calculate Net Present Value |
| Description | NPV from annual discount rate, initial investment, and year-by-year cash flows. Example: invest 10,000 at 10% with cash flows 3,000 / 4,200 / 6,800 → NPV ≈ 1,307.29. Browser-only; educational — not investment advice. |
| related | how-to-calculate-cagr, how-to-calculate-roi |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-npv`（与 Omni net-present-value / §12 #16 一致；不与 present-value 撞意图） |
| 主检索词 → title/H1 | en：**NPV Calculator — How to Calculate Net Present Value**；zh：**NPV 计算器 — 如何计算净现值**（主词 NPV / Net Present Value / 净现值 落 H1） |
| 次要关键词 → desc/FAQ | net present value → title；discount rate / cash flows → desc + Formula；项目投资粗算 → Use cases；与 PV 差异 → FAQ |
| 用户搜索习惯判断 | en 搜 NPV calculator / how to calculate NPV；勿把「折现率、初始投资、现金流」三参数堆进 H1 |
| 优化摘要 | 结果向 NPV + How to Calculate Net Present Value；禁参数枚举副标题；次词落 desc/FAQ；related 用 CAGR+ROI |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-npv --phase=0b`

## 交互规格

- 输入：年折现率 %；初始投资 I0（正数 outflow）；textarea 逗号/换行分隔 CF1..CFn（年 1..n）
- 输出：NPV = −I0 + Σ(CFt / (1+r)^t)
- 样例：I0=10000，r=10%，CF=3000,4200,6800 → **1307.29**
- 失败：I0≤0；r 非法；无有效现金流；无法解析数字
- 进页：`loadSample()` 自动填样例并算出 1307.29，与 H2 Example 对齐

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
