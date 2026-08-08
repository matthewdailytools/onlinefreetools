# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-gross-margin`  
**路径**：`/tools/how-to-calculate-gross-margin`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：gross margin calculator；how to calculate gross margin；毛利率计算器；毛利怎么算
- 用户任务：输入收入与 COGS → 毛利金额与毛利率%；理解口径假设与非经营建议
- [x] 竞品：双输入 + 百分比结果；少假设表与醒目免责
- [x] 缺口：毛利金额与比率同屏；收入≤0 / COGS>收入边界；与净利润率分意图；非经营建议
- [x] 增益：① 公式 ④ 假设表 ⑤ Investopedia ≥2 ② 边界 ⑧ Example ③ Use cases ⑨ related YMYL
- [x] 长尾合并：gross profit / gross margin % 同页；markup 对照放 FAQ（不拆页）
- [x] 权威：https://www.investopedia.com/terms/g/grossmargin.asp ；https://www.investopedia.com/terms/g/grossprofit.asp
- [x] Related：`how-to-calculate-break-even`、`how-to-calculate-roi`

### §3.1 维度：公式、边界、场景、权威、示例、内链、YMYL

**硬性增益**：① ④ ⑤ + Disclaimer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Gross Margin Calculator — How to Calculate Gross Margin |
| Description | Revenue and COGS → gross profit and gross margin %. Example: revenue 10,000, COGS 6,000 → profit 4,000 / 40%. Browser-only; educational — not business advice. |
| related | how-to-calculate-break-even, how-to-calculate-roi |
| Schema | WebApplication + BreadcrumbList |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-gross-margin`；不与 net/operating 利润率合并；不拆 markup 专用薄页 |
| 主检索词 → title/H1 | en：**Gross Margin Calculator — How to Calculate Gross Margin**；zh：**毛利率计算器 — 如何计算毛利与毛利率** |
| 次要关键词 → desc/FAQ | gross profit → 结果区/Formula；COGS → Formula/假设；markup vs margin → FAQ |
| 用户搜索习惯判断 | en 搜 gross margin calculator / how to calculate gross margin；勿堆「收入、成本」进 H1 |
| 优化摘要 | 结果向 Gross Margin；与 break-even / profit-margin 分意图 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-gross-margin --phase=0b`

## 交互规格

- 输入：收入 Revenue>0；销货成本 COGS≥0（允许 COGS>Revenue → 负毛利）
- 输出：毛利 = Revenue − COGS；毛利率% = 毛利 / Revenue × 100
- 样例：Revenue=10000，COGS=6000 → 毛利=**4000**；毛利率=**40%**
- 进页 loadSample 自动计算
- 失败：Revenue≤0、非数字

## 页面模块清单

> 勾选前须 0b 绿。

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
