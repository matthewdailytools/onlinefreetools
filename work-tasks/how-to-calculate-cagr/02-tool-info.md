# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-cagr`  
**路径**：`/tools/how-to-calculate-cagr`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：CAGR calculator；how to calculate CAGR；复合年增长率
- 用户任务：期初/期末/年数 → CAGR%；理解非投资建议
- [x] 竞品：三输入 + %；少假设与醒目免责
- [x] 缺口：可见公式；零/负价值边界；与 ROI/复利分意图
- [x] 增益：① 公式 ④ 假设 ⑤ Investopedia ② 边界 ⑧ Example ⑨ related YMYL
- [x] 权威：https://www.investopedia.com/terms/c/cagr.asp ；https://www.investopedia.com/ask/answers/071014/what-formula-calculating-compound-annual-growth-rate-cagr.asp
- [x] Related：`how-to-calculate-roi`、`how-to-calculate-compound-interest`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | CAGR Calculator — How to Calculate Compound Annual Growth Rate |
| Description | CAGR from beginning value, ending value, and years. Example: 10,000 → 16,105.10 over 5 years → about 10.00%. Browser-only; educational — not investment advice. |
| related | how-to-calculate-roi, how-to-calculate-compound-interest |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-cagr` |
| 主检索词 → title/H1 | en：**CAGR Calculator — How to Calculate Compound Annual Growth Rate**；zh：**CAGR 计算器 — 如何计算复合年增长率** |
| 次要关键词 → desc/FAQ | compound annual growth rate → title；年化收益粗算 → Use cases |
| 用户搜索习惯判断 | en 搜 CAGR calculator；勿堆三参数进 H1 |
| 优化摘要 | 结果向 CAGR；与 ROI/复利分意图 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-cagr --phase=0b`

## 交互规格

- 输入：期初>0；期末>0；年数>0
- 输出：CAGR% = ((EV/BV)^(1/n) − 1)×100
- 样例：BV=10000，EV=16105.1，n=5 → **10.00%**
- 失败：BV≤0、EV≤0、n≤0

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
