# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-standard-deviation`  
**路径**：`/tools/how-to-calculate-standard-deviation`  
**主方向**：A  
**YMYL**：否  

## IG 预审

- 目标主词：standard deviation calculator；how to calculate standard deviation；标准差计算器；variance
- 用户任务：粘贴一列数字 → 得 SD 与方差；分清样本（n−1）与总体（n）
- [x] 竞品：数字列表 + SD；少同时讲清样本/总体与方差同页
- [x] 缺口：可见公式；经典 Wikipedia 例；样本 vs 总体边界；方差同页
- [x] 增益：① 公式 ② 样本/总体分母 ⑧ Example（2,4,4,4,5,5,7,9）⑨ related 统计/增长工具
- [x] 权威：https://en.wikipedia.org/wiki/Standard_deviation ；https://en.wikipedia.org/wiki/Variance
- [x] Related：`how-to-calculate-percentage-change`、`how-to-calculate-cagr`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Standard Deviation Calculator — How to Calculate SD and Variance |
| Description | Paste numbers to get sample or population standard deviation and variance. Classic set 2,4,4,4,5,5,7,9 → population SD = 2 (sample SD ≈ 2.14). Runs in your browser. |
| related | how-to-calculate-percentage-change, how-to-calculate-cagr |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-standard-deviation`（与 Omni/清单 §12 #17 一致；variance 不拆页） |
| 主检索词 → title/H1 | en：**Standard Deviation Calculator — How to Calculate SD and Variance**；zh：**标准差计算器 — 如何计算标准差与方差** |
| 次要关键词 → desc/FAQ | variance / population SD / 样本标准差 → desc 与 FAQ；相对标准差概念进 FAQ 一句，不拆 URL |
| 用户搜索习惯判断 | en 搜 standard deviation calculator / how to calculate SD；勿把 textarea、n−1 控件名堆进 H1 |
| 优化摘要 | 结果向 SD+Variance；样本/总体作同页模式；经典例写清 population σ=2 vs sample s≈2.14 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-standard-deviation --phase=0b`

## 交互规格

- 输入：textarea 数值列表（逗号/空白/换行分隔）；模式：sample（n−1）| population（n）
- 输出：count、mean、variance、standard deviation（始终显示方差）
- 样例：`2, 4, 4, 4, 5, 5, 7, 9`；population → SD **2**、variance **4**；sample → SD ≈ **2.138**、variance ≈ **4.571**
- 失败：少于 1 个有效数；样本模式 n&lt;2；无法解析的输入提示错误
- 进页：自动 loadSample（默认 population 以展示经典 σ=2）

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
