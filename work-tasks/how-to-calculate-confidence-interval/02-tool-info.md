# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-confidence-interval`  
**路径**：`/tools/how-to-calculate-confidence-interval`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：confidence interval calculator；how to calculate confidence interval；置信区间
- 用户任务：mean/SD/n + 90/95/99 → 区间端点
- [x] 竞品：常拆 90/95/99 URL；本站单页多水平
- [x] 缺口：z 临界表可见；样例 50±1.96
- [x] 增益：① 公式 ④ 假设 ⑤ Wikipedia ⑧ Example ⑨ related
- [x] 权威：https://en.wikipedia.org/wiki/Confidence_interval ；https://en.wikipedia.org/wiki/Standard_error
- [x] Related：`how-to-calculate-p-value`、`how-to-calculate-standard-deviation`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Confidence Interval Calculator — How to Calculate a CI |
| Description | Mean confidence interval from mean, SD, n, and 90/95/99% levels using z critical values. Example: mean 50, SD 10, n 100, 95% → about 48.04 to 51.96. One page for levels — not separate URLs. Browser learning tool. |
| related | how-to-calculate-p-value, how-to-calculate-standard-deviation |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-confidence-interval` |
| 主检索词 → title/H1 | en：**Confidence Interval Calculator — How to Calculate a CI**；zh：**置信区间计算器 — 如何计算置信区间** |
| 次要关键词 → desc/FAQ | 90/95/99 → UI+FAQ；standard error → Formula |
| 用户搜索习惯判断 | en 搜 confidence interval calculator；勿把 90/95/99 堆进 H1 目录腔 |
| 优化摘要 | 结果向 CI；多置信水平同页；z 方法 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-confidence-interval --phase=0b`

## 交互规格

- 输入：mean（有限）；SD>0；n≥2；confidence 90|95|99
- z 临界：90→1.645；95→1.96；99→2.576
- 输出：lower、upper、SE、margin
- 样例：mean 50, SD 10, n 100, 95% → **48.04 to 51.96**
- 失败：SD≤0、n<2、mean 非有限
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
