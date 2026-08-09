# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-salary-hourly`  
**路径**：`/tools/how-to-calculate-salary-hourly`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：salary to hourly calculator；how to convert salary to hourly；年薪换时薪
- 用户任务：年/月/时薪 + 每周工时/每年周数 → 时薪与年化对照；理解非雇佣/税务建议
- [x] 竞品：多模式换算；少醒目工时假设与免责
- [x] 缺口：可见公式；默认 40×52；年/月/时同页
- [x] 增益：① 公式 ④ 工时假设 ⑤ BLS/权威工时语境 ② 边界 ⑧ Example ⑨ related YMYL
- [x] 权威：https://www.bls.gov/oes/ ；https://www.investopedia.com/terms/h/hourlyrate.asp
- [x] Related：`how-to-calculate-cagr`、`how-to-calculate-roi`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Salary to Hourly Calculator — How to Convert Pay Rates |
| Description | Convert annual, monthly, or hourly pay using hours/week and weeks/year (defaults 40 and 52). Example: annual 52,000 at 40 h/week → $25.00/hour. Browser-only; educational — not employment or tax advice. |
| related | how-to-calculate-cagr, how-to-calculate-roi |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-salary-hourly` |
| 主检索词 → title/H1 | en：**Salary to Hourly Calculator — How to Convert Pay Rates**；zh：**年薪时薪计算器 — 如何换算薪资与时薪** |
| 次要关键词 → desc/FAQ | annual to hourly / hourly to salary → desc+FAQ；weeks per year → How/Rules |
| 用户搜索习惯判断 | en 搜 salary to hourly calculator；勿堆模式名进 H1 |
| 优化摘要 | 结果向换算；年/月/时同页；YMYL 免责 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-salary-hourly --phase=0b`

## 交互规格

- 输入：模式 annual|monthly|hourly；薪资金额>0；hours/week 默认 40；weeks/year 默认 52
- 输出：时薪、年薪、月薪、周薪（同页对照）
- 样例：annual 52000，40 h/week，52 weeks → **$25.00/hour**
- 失败：金额≤0、工时≤0、周数≤0
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
