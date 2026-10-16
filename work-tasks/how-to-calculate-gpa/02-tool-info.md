# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-gpa`  
**路径**：`/tools/how-to-calculate-gpa`  
**主方向**：C  
**YMYL**：否（教育说明；非录取建议；仍有 safety_banner）  

## IG 预审

- 目标主词：GPA calculator；how to calculate GPA；加权 GPA
- 用户任务：各课成绩点 + 学分 → 加权平均 GPA（4.0）；字母芯片；步骤行
- [x] Related：`how-to-calculate-mean`、`how-to-calculate-percentage-change`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | GPA Calculator — Weighted GPA on a 4.0 Scale |
| Description | Credit-weighted GPA on 4.0 scale. Example: A=4.0 (3 cr) and B=3.0 (3 cr) → 3.50. Letter chips + steps. Educational only. |
| related | how-to-calculate-mean, how-to-calculate-percentage-change |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** |
| 主检索词 → title/H1 | en：**GPA Calculator — Weighted GPA on a 4.0 Scale** |
| 次要关键词 → desc/FAQ | credit hours；4.0 scale；quality points；letter grades → FAQ/芯片 |
| 优化摘要 | 字母芯片；质量分/总学分；步骤；样例轮换；safety |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| GPA calculator / how to calculate GPA | 吸（主词） | title / H1 |
| weighted GPA / credit hours | 吸（次词） | formula / result |
| 4.0 scale / letter grades | 吸（次词） | chips / FAQ |
| quality points | 吸（次词） | 结果区 |
| college admissions guarantee | 有意不满足 | safety + FAQ |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | GPA 计算，仍成立 |
| 主检索词任务 | 改写后加权+芯片+步骤 → **满足** |
| 超出 | 无学校专用加权政策引擎 |
| 有意不满足 | 录取/奖学金决定 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc、disclaimer） |

> `npm run coverage:gate -- --slug=how-to-calculate-gpa --phase=0b`

## 交互规格

- 输入：textarea，每行 `gradePoints, credits`
- 字母芯片：插入常见 4.0 绩点，用户补学分
- 输出：GPA、质量分、总学分、课程数、步骤
- 样例轮换：等学分 / plus-minus / 不等学分
- 失败：无有效行；学分≤0；成绩点非有限数

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
