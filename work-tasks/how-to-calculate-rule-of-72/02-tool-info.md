# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-rule-of-72`  
**路径**：`/tools/how-to-calculate-rule-of-72`  
**主方向**：C  
**YMYL**：是  
**最近改写**：2026-10-16（薄页逐页改写队列 #47，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-16）

审计 `04-tool-ig-audit.csv`：how-steps<3、why-choose<3、正文 <350 词、多语未译。功能缺口：

- 「rule of 72 calculator」SERP（Investopedia、calculator.net、Omni）主意图：由利率求翻倍年数，并常可反求利率、对照精确复利；本页只有 `72/rate` 一行 → **部分满足**。

## 与站内相邻工具的分工

- `how-to-calculate-compound-interest`：本金、期数、贡献的完整终值。
- `how-to-calculate-cagr`：由起止价值求年化增长率。
- `how-to-calculate-exponent`：任意 a^b（含 1.05^b = 2 精确期数）；本页只做翻倍口诀与对照。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：估算翻倍年数；反推目标年数所需利率；核对口诀与精确公式误差
- [x] 竞品：多数只有单向 72÷r；少有同屏精确 ln 对照、70/69.3、误差%、对照表、反求利率
- [x] 缺口：反求；精确对照；误差；多口诀；对照表
- [x] 增益：① 双模式 ② 精确年数 ln(2)/ln(1+r) 与精确利率 2^(1/n)−1 ③ 相对误差 ④ Rule of 70 / 69.3 ⑤ 2%–12% 对照表 ⑥ 低/高利率提示 ⑦ 步骤
- [x] 权威：Investopedia — Rule of 72；Wikipedia — Rule of 72
- [x] Related：cagr、compound-interest、exponent

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Rule of 72 Calculator — Years to Double Your Money, or the Rate You Need |
| Description (en) | Calculate how many years money takes to double with the Rule of 72 (years ≈ 72 ÷ rate%), or the rate needed for a target time. Compare with the exact compound formula and see the error — example: 6% → about 12 years. |
| related | how-to-calculate-cagr, how-to-calculate-compound-interest, how-to-calculate-exponent |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-16（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-rule-of-72` |
| 主检索词 → title/H1 | en：**Rule of 72 Calculator — Years to Double Your Money, or the Rate You Need**；zh：**72 法则计算器 — 算钱翻倍要多久，也能反推需要多高利率** |
| 次要关键词 → desc/FAQ | how to calculate rule of 72 → FAQ q1；accuracy → FAQ q2；why 72 / 69.3 / 70 → FAQ q3；double in 10 years → FAQ q4；monthly / inflation → FAQ q5；vs compound / CAGR → FAQ q6；investment advice → FAQ q7 + disclaimer |
| 用户搜索习惯判断 | 工具名向（rule of 72 calculator）；H1 工具名 + 双任务 |
| 优化摘要 | 保留 slug；H1 由「Years to Double」改为双任务；desc 写公式、反求、精确对照与 6%→12 年示例 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| rule of 72 calculator / how to calculate rule of 72 | 吸（主词） | title / H1；FAQ q1 |
| years to double money / doubling time | 吸 | 求年数模式；Example |
| what rate to double in 10 years | 吸 | 求利率模式；FAQ q4 |
| rule of 72 accuracy / vs exact | 吸 | 误差行；FAQ q2；对照表 |
| rule of 69.3 / rule of 70 | 吸 | 结果行；FAQ q3 |
| rule of 72 monthly compounding / inflation | 吸（说明） | FAQ q5 |
| compound interest / CAGR full schedule | **不吸** | Related |
| investment product recommendation | **不吸** | disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 72 法则翻倍估算，仍成立 |
| 主检索词任务 | 改写前仅单向 → **部分满足**；改写后双模式 + 精确对照 → **满足** |
| 超出 | 无第二工具抢首屏 |
| 有意不满足 | 完整现金流、税费、产品推荐 |
| 总判 | 满足（YMYL disclaimer 保留） |

## 交互规格

- 模式：求翻倍年数（默认）/ 求所需利率
- 输入：正数利率 % 或年数；支持逗号小数；利率 >100 或年数 >500 报错
- 结果：72 口诀主结果；计算过程；精确复利；相对误差；Rule of 70 / 69.3；步骤；2/4/6/8/10/12% 对照表（高亮最接近当前利率的行，差距 >1.5 则不高亮）
- 提示：利率 <4% 提示偏低区间；>12% 提示偏高区间
- 样例：6% → 8% → 10 年反求 → 1%
- Clear 清空、回求年数；HUD 不适用

## 固定数字

- 6% → 12 年；精确 ≈ 11.9 年；误差约 +0.88%
- 8% → 9 年；精确 ≈ 9.01 年；误差约 −0.07%
- 10 年 → 7.2%；精确 ≈ 7.18%；误差约 +0.32%
- 1% → 72 年；精确 ≈ 69.66 年；误差约 +3.36%
- 20% → 3.6 年；精确 ≈ 3.8 年；误差约 −5.31%
- 对照表：2% 36/35；4% 18/17.67；6% 12/11.9；8% 9/9.01；10% 7.2/7.27；12% 6/6.12
- 100×ln(2) ≈ 69.3147

## 验收记录（2026-10-16，英文本地预渲染页）

- 样例轮换：6%→12 / 11.9 / +0.88%；8%→9 / 9.01；10 年→7.2% / 7.18%；1%→72 / 69.66 + 偏低提示
- 20%→3.6 / 3.8 / −5.31% + 偏高提示；非法输入报错；对照表 6 行且 6% 高亮
- disclaimer 可见；无 `{placeholder}`；FAQ 7 题

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How×4 / Why×5 / Formula×5 / Example / Use cases×4 / FAQ×7 / Related×3 / References×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
