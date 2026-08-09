# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-gpa`  
**路径**：`/tools/how-to-calculate-gpa`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：GPA calculator；how to calculate GPA；加权 GPA；学分绩点
- 用户任务：各课成绩点 + 学分 → 加权平均 GPA（4.0 量表）；理解地区量表差异
- [x] 竞品：课程行 + 学分加权；少量表免责
- [x] 缺口：可见加权公式；4.0 量表声明；与百分比变化/样本量分意图
- [x] 增益：① 公式 ② 边界 ⑧ Example ⑤ 权威引用 ⑨ related
- [x] 权威：https://www.collegeboard.org/ ；https://en.wikipedia.org/wiki/Academic_grading_in_the_United_States
- [x] Related：`how-to-calculate-percentage-change`、`how-to-calculate-sample-size`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | GPA Calculator — How to Calculate Weighted GPA |
| Description | Weighted GPA on a 4.0 scale from course grade points and credit hours. Example: A=4.0 (3 cr) and B=3.0 (3 cr) → GPA 3.5. Scale systems vary by school/region — educational only. |
| related | how-to-calculate-percentage-change, how-to-calculate-sample-size |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-gpa`（与 Omni gpa / §12 #33 一致；不拆 college/high-school） |
| 主检索词 → title/H1 | en：**GPA Calculator — How to Calculate Weighted GPA**；zh：**GPA 计算器 — 如何计算加权平均绩点**（主词 GPA / Weighted GPA / 绩点 落 H1） |
| 次要关键词 → desc/FAQ | credit hours / 学分 → desc + Formula；4.0 scale / 量表 → FAQ + 结果注；college GPA → Use cases（同页） |
| 用户搜索习惯判断 | en 搜 GPA calculator / how to calculate GPA；勿把「成绩点、学分、课程数」堆进 H1 |
| 优化摘要 | 结果向 Weighted GPA；禁参数枚举；次词落 desc/FAQ；related 用百分比变化+样本量 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-gpa --phase=0b`

## 交互规格

- 输入：textarea，每行 `gradePoints, credits`（逗号/空白分隔）
- 输出：GPA = Σ(g·c) / Σ(c)，默认展示两位小数
- 样例：4.0,3 与 3.0,3 → **3.50**
- 失败：无有效行；学分≤0；成绩点非有限数
- 进页：`loadSample()` 自动填样例并算出 3.50，与 H2 Example 对齐
- 量表免责：结果区注明 4.0 量表与地区差异

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
