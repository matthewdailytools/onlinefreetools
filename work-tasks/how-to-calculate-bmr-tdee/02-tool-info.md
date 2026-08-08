# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-bmr-tdee`  
**路径**：`/tools/how-to-calculate-bmr-tdee`  
**主方向**：C  
**YMYL**：是  

## IG 预审

- 目标主词：BMR calculator；how to calculate BMR；TDEE calculator；calorie calculator；基础代谢率 / 每日消耗
- 用户任务：输入身体数据与活动量 → BMR + TDEE；理解公式差异与非医疗建议
- [x] 竞品：性别/年龄/身高体重 + 活动系数；少多公式对照与醒目免责
- [x] 缺口：Mifflin/Harris/Katch 同页；赤字解读非拆页；边界；与 BMI 分意图
- [x] 增益：① 可见公式 ④ 活动系数表 ⑤ NIH/教科书级引用 ② 边界 ⑧ Example ③ Use cases ⑨ related YMYL
- [x] 长尾合并进本页
- [x] 权威：https://www.ncbi.nlm.nih.gov/books/NBK278991/ ；https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm （教育向；Omni 仅研发对照）
- [x] Related：`how-to-calculate-bmi`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 三公式 + 活动系数 |
| 2 | 边界/失败 | 非法输入 FAQ |
| 3 | 场景语境 | Use cases |
| 5 | 权威引用 | ≥2 |
| 8 | 数值示例 | 进页样例 |
| 9 | 主题内链 | BMI |

**计划硬性增益**：① ④ ⑤ + YMYL Disclaimer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | 计算器 · C-V5 健康 · YMYL · P1 |
| Title (en) | BMR & TDEE Calculator — How to Calculate Daily Calories |
| Description 要点 | 用 Mifflin 等估算 BMR，乘活动系数得 TDEE；示例男 70kg 175cm 30 岁中等活动 → BMR≈1648.75、TDEE≈2555.56；非医疗建议 |
| related | how-to-calculate-bmi |
| Schema | WebApplication + BreadcrumbList |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-bmr-tdee`；不拆 harris/katch/calorie 页 |
| 主检索词 → title/H1 | en：**BMR & TDEE Calculator — How to Calculate Daily Calories**；zh：**BMR / TDEE 计算器 — 如何估算基础代谢与每日消耗** |
| 次要关键词 → desc / FAQ | calorie deficit → FAQ；Harris/Katch → 公式模式；维持热量 → Use cases |
| 用户搜索习惯判断 | en 搜 BMR/TDEE/calorie calculator；title 同时吃 Calculator 与 How to Calculate；勿堆参数进 H1 |
| 优化摘要 | 参数枚举 → 结果向 Daily Calories；多公式同页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=how-to-calculate-bmr-tdee --phase=0b`

## 交互规格

- 输入：性别；体重 kg；身高 cm；年龄；公式 Mifflin|Harris|Katch；Katch 时体脂%；活动系数
- 输出：BMR kcal/日；TDEE；可选展示维持/轻度赤字说明（非独立页）
- 样例：男、70kg、175cm、30、Mifflin、中等(1.55) → BMR **1648.75**；TDEE **2555.56**
- 进页 loadSample 自动计算

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏交互 + 进页样例
- [x] How it works / Formula / Example / Use cases / FAQ≥3 / Related / References / Disclaimer
- [x] `03-locale-briefs.md` 已填
