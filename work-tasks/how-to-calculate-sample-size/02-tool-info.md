# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-sample-size`  
**路径**：`/tools/how-to-calculate-sample-size`  
**主方向**：C  
**catalog 分类**：`calculator`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #28，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：How 不足 3 步、无 Why choose、九语为旧稿。旧页只有「置信水平 90/95/99 + p（小数）+ E（小数）」三格，功能缺口：

- **无总体规模**：问卷用户最常见的问题是「我公司 1000 人要回收多少份」，主流计算器（SurveyMonkey、Qualtrics、Calculator.net、Raosoft）都有总体规模与有限总体校正；旧页对 1000 人只能给出 385（应为 278）；
- p、E 要求输入小数（0.5、0.05），而用户习惯用百分比（50%、±5%）；
- 只有三个置信水平，无 80 / 85 / 98 / 99.9%；
- 不能反求「已有 400 份问卷的误差界」（margin of error calculator 是同意图高频搜法）；
- 不能估计均值的样本量（σ、E）；
- 无回收率（要发多少份）、无设计效应；无过程、无对照表。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：做问卷 / 论文 / 课堂研究时，按置信水平和可接受误差算出需要回收多少份，若总体有限要按总体缩减，并据回收率算出要发多少份；或已有样本、要报告误差界
- [x] 竞品（SurveyMonkey、Qualtrics、Calculator.net、Raosoft、Omni）：大多有总体规模；少有回收率换算发放数；几乎不给代入过程；均值样本量与反求误差界通常分在不同页面
- [x] 缺口：同页三种用途；逐行过程（Z、n₀、FPC、取整、发放数）；误差界—样本量对照表；设计效应；任意常用置信水平的精确 Z
- [x] 增益：① 用途三选一（比例 / 均值 / 已有样本求误差界）② 置信水平 80–99.9% 七档，Z 精确计算 ③ 百分比输入 ④ 总体规模可空（FPC）⑤ 回收率 → 发放数 ⑥ 设计效应 ⑦ 过程列表 ⑧ 对照表（±1/2/3/4/5/10% 或 n = 100…5000）⑨ Example：1000 名员工、95%、±5% → 384.15 → 277.73 → 278；回收率 20% → 1390；无限总体 385；10000 人 370；400 份 → ±4.90% ⑩ FAQ ×7 ⑪ 引用（Wikipedia — Sample size determination；Wikipedia — Margin of error）
- [x] Related：`how-to-calculate-confidence-interval`（收完数据后算置信区间）、`how-to-calculate-standard-deviation`（均值模式需要 σ）、`how-to-calculate-p-value`（假设检验）、`how-to-calculate-z-score`（Z 值含义）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | 纯前端；Acklam 正态反函数；Intl.NumberFormat；`page.style: opts` |
| Title (en) | Sample Size Calculator — How Many Survey Responses You Need for Your Margin of Error |
| Description (en) | Calculate how many survey responses you need for your confidence level and margin of error, adjust for a small population or a low response rate, and see every step. Example: 95% confidence, ±5%, population 1,000 → 278 responses. |
| related | how-to-calculate-confidence-interval, how-to-calculate-standard-deviation, how-to-calculate-p-value, how-to-calculate-z-score |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-sample-size`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Sample Size Calculator — How Many Survey Responses You Need for Your Margin of Error**；他语按 03 当地搜法（样本量计算、問卷回收多少份、サンプルサイズ 計算、tamaño de muestra、Stichprobengröße berechnen、размер выборки、ukuran sampel 等） |
| 次要关键词 → desc/FAQ | how many survey responses do I need → FAQ q1 + 主结果；sample size for population of 1000 → 总体规模 + Example；margin of error calculator → 用途「已有样本」+ FAQ q5；confidence level 95% vs 99% → 置信下拉 + FAQ q4；p = 50% → p 提示 + FAQ q3；Cochran formula → How body + Formula；finite population correction → Formula item 3；response rate → 更多选项 + Why choose 2；sample size for mean → 用途「均值」+ Use case 3 |
| 用户搜索习惯判断 | 「sample size calculator」是工具型主词，用户真正的问题是「要多少份问卷」；H1 写结果（how many responses for your margin of error），不罗列置信水平 / p / E 参数 |
| 优化摘要 | 保留 slug；H1 由「How to Estimate Required n」（术语腔）改为问卷用户语言；desc 写总体 / 回收率 / 过程 + 可验证例子；FAQ 由 4 条扩为 7 条 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| sample size calculator / how to calculate sample size | 吸（主词） | title / H1；How |
| how many survey responses do I need / survey sample size | 吸 | title；FAQ q1；Use case 1 |
| sample size for a population of 1000 / small population | 吸 | 总体规模；fpc 说明；Example |
| sample size formula / Cochran formula | 吸 | How body；Formula body |
| margin of error calculator / margin of error from sample size | 吸 | 用途「已有样本」；FAQ q5；Use case 4 |
| 95% confidence level / 99% / Z value | 吸 | 置信下拉（含 Z）；FAQ q4；Formula item 1 |
| why use 50% / p = 0.5 | 吸 | p 提示；FAQ q3；Formula item 2 |
| why 385 / 384 | 吸 | FAQ q2 |
| finite population correction | 吸 | Formula item 3；过程行 |
| response rate how many to send | 吸 | 更多选项「回收率」；Why choose 2；Example |
| design effect / cluster sampling | 吸 | 更多选项「设计效应」；Formula item 4 |
| sample size for estimating a mean | 吸 | 用途「均值」；σ 提示；Use case 3 |
| textbook answer off by one | 吸 | FAQ q6 |
| power analysis / t-test sample size (effect size, power 80%) | **不吸**（检验功效分析，另一意图与公式） | — |
| A/B test sample size | **不吸**（两比例差，需基线率与最小可检测效应） | — |
| confidence interval from data | **不吸**（交给 `how-to-calculate-confidence-interval`） | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 本工具无独立 Planner 文件；主词与长尾按上表（2026-10-14 同意图检索整理）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 样本量计算器，仍成立 |
| 主词搜索者任务 | 「我要回收多少份问卷」——改写前无总体规模、需小数输入、无反求 → **部分满足**；改写后总体规模、百分比、回收率、反求误差界、均值、过程、对照表 → **满足** |
| 超出 | 设计效应与回收率收进「更多选项」，不占主界面 |
| 有意不满足 | 功效分析、A/B 测试样本量：未吸 |
| 总判 | 满足（已回写 How、控件、FAQ、desc） |

## 交互规格

- 用途：问卷 / 是否题（比例，默认）/ 估计平均值（均值）/ 已有样本求误差界；字段按用途显示
- 置信水平：80 / 85 / 90 / 95（默认）/ 98 / 99 / 99.9%，下拉文案含 Z（3 位小数），计算用精确 Z
- 比例：误差界 ±%（0 < E < 50）、预期比例 %（0 < p < 100，提示默认 50%）
- 均值：σ（提示：试点数据或极差 ÷ 4）、E（同单位）
- 反求：已有 n（整数 ≥ 2 且 ≤ N）、预期比例 %
- 总体规模：可空（无限）；整数 ≥ 2；n = n₀ ÷ (1 + (n₀ − 1) ÷ N)；反求时 E × √((N − n) ÷ (N − 1))
- 更多选项：回收率 %（1–100，默认 100；反求模式隐藏）→ 发放数 = ⌈n ÷ 回收率⌉；设计效应（≥ 1，默认 1）乘在 FPC 之前
- 结果：主值 + 过程有序列表（Z、n₀、deff、FPC、取整、发放数）+ 说明列表 + 对照表（比例模式：±1/2/3/4/5/10% 与当前值；反求：n = 100…5000 中小于 N 的与当前值；均值模式无表）
- 报错：非数字；p 越界；E 越界；σ / E ≤ 0；总体非整数或 < 2；n 越界；回收率越界；设计效应 < 1
- 样例：比例、95%、±5%、50%、总体 1000 → 278（过程 384.15 → 277.73 → 278）；进页自动运行
- Clear：清空输入与结果，用途与置信水平恢复默认，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×4 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×4 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填

## 验收记录（2026-10-14，英文本地预渲染页）

- 样例 278（过程 384.15 → 277.73 → 278；对照表 906 / 707 / 517 / 376 / 278 / 88）
- 回收率 20% → 1390；无总体 → 385（表 9604 / 2401 / 1068 / 601 / 385 / 97）；90% → 271；99% → 664；总体 100 → 80；10000 → 370
- 设计效应 1.5 → 577；均值 σ 15、E 2 → 217；反求 n 400 → ±4.90%；N 2000 → ±4.38%（区间 45.62–54.38%）
- 报错：n > N、E 60%、p 100%、总体 1.5、空输入均显示对应提示；Clear 恢复默认且不重载样例
