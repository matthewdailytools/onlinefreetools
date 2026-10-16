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
| Title (en) | P-Value Calculator — From a Z-Score (Normal Tail) |
| Description | One- or two-tailed normal p from z via erfc. Example: z=1.96 → two-tailed p≈0.05. Educational only. |
| related | how-to-calculate-z-score, how-to-calculate-standard-deviation, how-to-calculate-confidence-interval |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** `how-to-calculate-p-value` |
| 主检索词 → title/H1 | en：**P-Value Calculator — From a Z-Score (Normal Tail)**；zh：**p 值计算器 — 由 z 分数求正态尾概率** |
| 次要关键词 → desc/FAQ | two-tailed / one-tailed；z=1.96≈0.05；erfc → FAQ/Formula |
| 用户搜索习惯判断 | 工具名向；勿堆 t/χ² 目录进 H1 |
| 优化摘要 | 单/双侧 + 临界 z 芯片 + 分步；desc 含 1.96→0.05；假设写清 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| p-value calculator / how to calculate p value | 吸（主词） | title / H1 |
| p value from z score | 吸 | How；Example |
| two-tailed p value / one-tailed | 吸 | mode；FAQ |
| z=1.96 p=0.05 | 吸 | Example；chip；FAQ |
| erfc normal tail | 吸 | Formula |
| t-test / chi-square p | **不吸** | FAQ 边界 |
| prove hypothesis | **不吸** | FAQ + disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | z→正态 p，仍成立 |
| 主检索词任务 | 改写前仅双侧 → **部分满足**；改写后单/双侧 + 芯片 → **满足** |
| 超出 | 无完整假设检验套件 |
| 有意不满足 | t/χ²/精确二项 |
| 总判 | 满足（计划回写 How、结果区、FAQ、desc） |

> `npm run coverage:gate -- --slug=how-to-calculate-p-value --phase=0b`

## 交互规格

- 模式：双侧 / 单侧（对称正态下一侧 = 双侧/2）
- 输入：有限 z；芯片 1.645 / 1.96 / 2.576
- 输出：主 p + 另一侧对照行 + 分步
- 样例：1.96 双侧；1.96 单侧；0；2.576
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
