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
| Title (en) | Body Fat Calculator — How to Estimate Body Fat Percentage |
| Description | Estimate body fat % with U.S. Navy circumference formulas (Army option on the same page). Example: male 178 cm, neck 40 cm, waist 86 cm → about 15.1%. Browser-only; educational — not medical advice. |
| related | how-to-calculate-bmi, how-to-calculate-bmr-tdee |
| Schema | WebApplication + BreadcrumbList |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-body-fat`；不拆 navy/army/skinfold URL |
| 主检索词 → title/H1 | en：**Body Fat Calculator — How to Estimate Body Fat Percentage**；zh：**体脂率计算器 — 如何用围度估算体脂率** |
| 次要关键词 → desc/FAQ | navy body fat → Formula/选项；army → 同页选项；skinfold → FAQ 局限 |
| 用户搜索习惯判断 | en 搜 body fat calculator / navy body fat；勿堆「颈围、腰围、臀围」进 H1 |
| 优化摘要 | 结果向 Body Fat Percentage；多公式同页 |
| [x] 已回写 SEO 卡片 | |

> `npm run coverage:gate -- --slug=how-to-calculate-body-fat --phase=0b`

## 交互规格

- 输入：方法 Navy|Army；性别；身高 cm；颈围 cm；腰围 cm；女另需臀围 cm
- 输出：体脂%（围度先换算为英寸再套 DoD/海军公式）
- 样例：男、Navy、身高 178、颈 40、腰 86 → 约 **15.1%**
- 进页 loadSample 自动计算
- 失败：非正数；腰≤颈；女腰+臀≤颈；结果超出合理范围时提示估算局限

## 页面模块清单

> 勾选前须 0b 绿。

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
