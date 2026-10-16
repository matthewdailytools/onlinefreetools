# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-z-score`  
**路径**：`/tools/how-to-calculate-z-score`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：见下方覆盖表
- 用户任务：交互计算 + 公式/示例
- [x] 竞品：通用计算器页
- [x] 缺口：假设/规则可见；固定样例
- [x] 增益：① 公式 ④ 假设 ⑤ 权威引用 ⑧ Example ⑨ related
- [x] 权威：见 References
- [x] Related：`how-to-calculate-p-value`、`how-to-calculate-standard-deviation`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Z-Score Calculator — Convert Raw Score ↔ Standard Score |
| Description | z = (x − mean) / SD; reverse x from z. Example: x=85, mean=70, SD=10 → z=1.5. Educational only. |
| related | how-to-calculate-p-value, how-to-calculate-standard-deviation |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** `how-to-calculate-z-score` |
| 主检索词 → title/H1 | en：**Z-Score Calculator — Convert Raw Score ↔ Standard Score**；zh：**Z 分数计算器 — 原始分与标准分互算** |
| 次要关键词 → desc/FAQ | standard score；how many SDs；reverse from z；normality vs algebra → FAQ |
| 用户搜索习惯判断 | 工具名向；H1 双向任务；禁参数枚举 |
| 优化摘要 | 双向 z↔x + 分步 + why_choose；desc 含 85/70/10→1.5；SD>0 边界 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| z-score calculator / how to calculate z score | 吸（主词） | title / H1 |
| standard score / standardized score | 吸 | title；formula |
| z = (x-mean)/sd | 吸 | formula；steps |
| convert z back to raw score | 吸 | mode_raw；FAQ |
| what does z=1.5 mean | 吸 | FAQ q1；Example |
| z-score significance / p-value | **不吸**（说明） | FAQ → related p-value |
| normality test | **不吸** | FAQ 边界 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | z 分数计算，仍成立 |
| 主检索词任务 | 改写前仅 x→z → **部分满足**；改写后 z↔x 双向 → **满足** |
| 超出 | 无 p 值计算器抢首屏 |
| 有意不满足 | 正态检验、完整假设检验 |
| 总判 | 满足（计划回写 How、结果区、FAQ、desc） |

> `npm run coverage:gate -- --slug=how-to-calculate-z-score --phase=0b`

## 交互规格

- 模式：求 z（x, μ, σ）/ 求 x（z, μ, σ）
- 输入：有限数；σ > 0
- 结果：主结果 + 分步 + |z| 含义行
- 样例轮换：85/70/10→1.5；z=1.5→x；x=mean→z=0；低于均值样例
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
