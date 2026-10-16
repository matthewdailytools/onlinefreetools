# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-body-fat`  
**路径**：`/tools/how-to-calculate-body-fat`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：body fat calculator；navy body fat；how to calculate body fat percentage；体脂率计算器
- 用户任务：输入性别、身高与围度 → 估算体脂%；理解假设与非医疗建议
- [x] 竞品：海军围度输入 + %；少多公式对照与醒目免责
- [x] 缺口：Navy/Army 同页；皮褶局限 FAQ；测量点假设；与 BMI/BMR 分意图
- [x] 增益：① 公式 ④ 测量假设 ⑤ 权威引用 ② 边界 ⑧ Example ③ Use cases ⑨ related YMYL
- [x] 长尾合并：navy/army/body-fat/skinfold 同页
- [x] 权威：https://www.acefitness.org/resources/everyone/body-fat-calculator/ （教育向说明）或 DoD/ACE 公开方法说明；https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5504436/（围度法文献向）
- [x] Related：`how-to-calculate-bmi`、`how-to-calculate-bmr-tdee`

### §3.1 维度

**硬性增益**：① ④ ⑤ + YMYL Disclaimer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Body Fat Calculator — Navy Circumference Estimate with Army Label |
| Description | Estimate body fat % with U.S. Navy circumference formulas (Army/DoD-style label on the same page). Example: male 178 cm height, neck 40 cm, waist 86 cm → about 15.3%. cm in, inches in the log10 formulas. Educational only — not medical advice or a diagnosis. |
| related | how-to-calculate-bmi, how-to-calculate-bmr-tdee |
| Schema | WebApplication + BreadcrumbList |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** `how-to-calculate-body-fat`；不拆 navy/army/skinfold URL |
| 主检索词 → title/H1 | en：**Body Fat Calculator — Navy Circumference Estimate with Army Label**（主词 Body Fat Calculator） |
| 次要关键词 → desc/FAQ | navy / circumference → H1+desc+FAQ；army/DoD → H1 Army Label + FAQ + usecase；percentage / 15.3% → desc+example；skinfold → FAQ；cm→inches → desc+usecase |
| 用户搜索习惯判断 | en 搜 body fat calculator / navy body fat；勿堆颈围、腰围、臀围进 H1 |
| 优化摘要 | 2026-10-16 母版 H1 改为 Navy circumference + Army label；男样例 15.3% 进 desc；医疗建议有意不满足 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| body fat calculator | absorb 主词 | H1 / title |
| how to calculate body fat / body fat percentage | absorb 次词 | desc（about 15.3%）/ example / usecase |
| navy body fat / U.S. Navy circumference | absorb 次词 | H1 Navy Circumference / desc / formula / FAQ |
| army body fat / DoD circumference | absorb 次词 | H1 Army Label / method UI / FAQ / usecase |
| centimetre to inches tape measure | absorb 次词 | desc / steps / usecase |
| skinfold calipers | absorb 次词 | FAQ / formula item（不另开 URL） |
| medical advice / diagnosis / DXA | 有意不满足 | safety_banner / disclaimer / FAQ |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无独立 Planner 长尾表）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 围度估算体脂、海军/陆军同页、不拆 URL，仍成立 |
| 主检索词任务 | 输入性别与围度得到教育向体脂% → **满足** |
| 超出 | 无第二计算器；皮褶只在 FAQ 说明 |
| 有意不满足 | 医疗建议、诊断、DXA/Bod Pod 临床结论 |
| 总判 | 满足（估算）；医疗建议有意不满足 |

- [x] 已按审查回写 How / 交互主次 / FAQ / desc

> `npm run coverage:gate -- --slug=how-to-calculate-body-fat --phase=0b`

## 交互规格

- 输入：方法 Navy|Army；性别；身高 cm；颈围 cm；腰围 cm；女另需臀围 cm
- 输出：体脂% + 厘米转英寸步骤（海军与陆军标签共用同一教育向公式）
- 样例轮换：男 Navy 178/40/86 → 约 **15.3%**；女 Army 标签 165/34/74/96（腰+臀>颈，几何合法）→ 约 **26.7%**。女式常数为 −78.387（不是加）。
- 进页 loadSample 自动计算
- 失败：非正数；女缺臀围；腰≤颈（女式为腰+臀≤颈）
- 进度 HUD：不适用（一帧出结果）

## 页面模块清单

> 勾选前须 0b 绿。

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
