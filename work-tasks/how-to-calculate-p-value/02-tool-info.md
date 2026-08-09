# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-p-value`  
**路径**：`/tools/how-to-calculate-p-value`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：p-value calculator；how to calculate p-value；p 值计算
- 用户任务：输入 z → 双侧正态 p；理解假设
- [x] 竞品：多分布；本页聚焦 z 双侧 + 假设说明
- [x] 缺口：erfc 可见假设；样例 z=1.96→≈0.05
- [x] 增益：① 公式 ④ 假设 ⑤ Wikipedia/NIST ⑧ Example ⑨ related
- [x] 权威：https://en.wikipedia.org/wiki/P-value ；https://en.wikipedia.org/wiki/Normal_distribution
- [x] Related：`how-to-calculate-standard-deviation`、`how-to-calculate-confidence-interval`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | P-Value Calculator — How to Calculate a P-Value |
| Description | Two-tailed normal p-value from a z-score via an erfc approximation. Example: z = 1.96 → two-tailed p ≈ 0.05. States standard-normal and two-tail assumptions. Runs in your browser for learning. |
| related | how-to-calculate-standard-deviation, how-to-calculate-confidence-interval |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-p-value` |
| 主检索词 → title/H1 | en：**P-Value Calculator — How to Calculate a P-Value**；zh：**p 值计算器 — 如何计算 p 值** |
| 次要关键词 → desc/FAQ | two-tailed / z-score → desc+FAQ；normal assumption → Formula |
| 用户搜索习惯判断 | en 搜 p value calculator；勿堆分布名目录进 H1 |
| 优化摘要 | 结果向 p 值；z 双侧同页；假设写清 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-p-value --phase=0b`

## 交互规格

- 输入：z-score（有限实数）
- 输出：双侧 p ≈ erfc(|z|/√2)
- 样例：z=1.96 → **p≈0.05**（约 0.049996）
- 失败：非有限数
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
