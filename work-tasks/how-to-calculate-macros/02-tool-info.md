# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-macros`  
**路径**：`/tools/how-to-calculate-macros`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：见下方覆盖表
- 用户任务：交互计算 + 公式/示例
- [x] 竞品：通用计算器页
- [x] 缺口：假设/规则可见；固定样例
- [x] 增益：① 公式 ④ 假设 ⑤ 权威引用 ⑧ Example ⑨ related
- [x] 权威：见 References
- [x] Related：`how-to-calculate-heart-rate`、`how-to-calculate-bmr-tdee`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Macro Calculator — Daily Grams from Calorie Percents |
| Description | 2000 kcal @ 30/40/30 → 150/200/≈66.7 g; 4/4/9; educational only — not medical advice. |
| related | how-to-calculate-heart-rate, how-to-calculate-bmr-tdee |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** `how-to-calculate-macros` |
| 主检索词 → title/H1 | en：**Macro Calculator — Daily Grams from Calorie Percents**；zh：**宏量营养素计算器 — 按热量百分比算克数** |
| 次要关键词 → desc/FAQ | protein carb fat grams；4/4/9；percent sum 100 → FAQ/Formula |
| 用户搜索习惯判断 | 工具名向；禁参数枚举；YMYL disclaimer |
| 优化摘要 | 预设拆分芯片+分步+kcal 行；desc 含 2000@30/40/30；非医疗建议 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| macro calculator / how to calculate macros | 吸（主词） | title / H1 |
| calories to protein carb fat grams | 吸 | formula；Example |
| 4 4 9 kcal per gram | 吸 | formula；FAQ |
| macro percent split | 吸 | chips；How |
| meal plan / diet prescription | **不吸** | safety + FAQ |
| medical advice | **不吸** | disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 热量→宏量克数，仍成立 |
| 主检索词任务 | 改写前仅单向克数 → **部分满足**；改写后芯片+kcal 行+分步 → **满足** |
| 超出 | 无第二医疗工具抢首屏 |
| 有意不满足 | 个性化饮食处方、医疗建议 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc、disclaimer） |

> `npm run coverage:gate -- --slug=how-to-calculate-macros --phase=0b`

## 交互规格

- 输入：kcal>0；三百分比≥0 且和=100；芯片 30/40/30、40/40/20、25/50/25
- 输出：三宏克数 + 各宏 kcal + 分步
- 样例轮换：2000@30/40/30；1800@40/40/20；2500@25/50/25；2200@30/35/35
- YMYL safety banner；进页 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
