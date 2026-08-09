# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-median`  
**路径**：`/tools/how-to-calculate-median`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：见下方覆盖表
- 用户任务：交互计算 + 公式/示例
- [x] 竞品：通用计算器页
- [x] 缺口：假设/规则可见；固定样例
- [x] 增益：① 公式 ④ 假设 ⑤ 权威引用 ⑧ Example ⑨ related
- [x] 权威：见 References
- [x] Related：`how-to-calculate-mean`、`how-to-calculate-standard-deviation`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Median and Mode Calculator |
| Description | Find the median and mode of a number list. Sample: 1,2,2,3,4 → median 2, mode 2. Browser-only. |
| related | how-to-calculate-mean, how-to-calculate-standard-deviation |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-median` |
| 主检索词 → title/H1 | en：**Median and Mode Calculator**；zh：**中位数与众数计算器** |
| 次要关键词 → desc/FAQ | 次词落入 description 前半与 FAQ；示例数字固定 |
| 用户搜索习惯判断 | 结果/场景向 title；禁参数枚举目录腔 |
| 优化摘要 | 保留 slug；H1 主词+How to；desc 含样例数字与公式信号；非参数枚举 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-median --phase=0b`

## 交互规格

- 输入/输出：见实现 Page 与样例
- 样例：1,2,2,3,4 → median 2 mode 2
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
