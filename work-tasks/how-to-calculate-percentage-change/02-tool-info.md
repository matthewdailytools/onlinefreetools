# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-percentage-change`  
**路径**：`/tools/how-to-calculate-percentage-change`  
**主方向**：A  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #16，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄（How 一段、Formula 3 条、FAQ 4 条短答）；无 Why choose；结果只有一个百分数。功能缺口：

- 只输出「25% (increase)」，不给代入过程；
- 不给「回到旧值需要的反向百分比」——「涨 25% 再跌 25% 为何回不去」是高频困惑；
- 不区分百分比变化 / 百分比差异（percent difference）/ 百分点，三者都是同意图高频搜法；
- 旧值为负时用带符号分母，结果符号与方向相反；旧值为 0 只报错、不给绝对变化；
- `type=number` 输入不接受「10%」「1.234,5」「80 000」等当地写法。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：给定旧值与新值，得到带符号涨跌幅并看到过程；需要时知道回本 / 回到原值要涨跌多少、两数的对称差异、百分点变化
- [x] 竞品（calculator.net / omnicalculator / calculatorsoup 类）：多为两框 + 一个百分数；百分比差异常拆成另一个页面；很少给反向百分比与百分点对照；负数基数多不处理
- [x] 缺口：代入过程；反向百分比；变化 vs 差异 vs 百分点同屏；倍数；0 与负基数的诚实说明
- [x] 增益：① 结果区 5 格（绝对变化 / 倍数 / 反向百分比 / 百分比差异 / 百分点）② Working 行 ③ 输入带 % 自动视为百分比 ④ 场景例（环比 −9.09%、降价 −15% 需 +17.65%、利率 +2 个百分点 = +20%、股票 −30% 需 +42.86%）⑤ FAQ：公式、下降、涨跌不对称、百分点、变化 vs 差异、旧值 0、负数 ⑥ 权威引用 ×2
- [x] 权威：Wikipedia — Relative change；Wikipedia — Percentage point
- [x] Related：`how-to-calculate-cagr`、`how-to-calculate-discount`、`how-to-calculate-roi`、`how-to-calculate-profit-margin`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Percentage Change Calculator — Percent Increase or Decrease from an Old to a New Value |
| Description (en) | Calculate the percent increase or decrease from an old value to a new one, with the formula worked out. Example: 80 → 100 is +25%, yet getting back to 80 takes −20%. Also shows the multiplier, percent difference and percentage points. |
| related | how-to-calculate-cagr, how-to-calculate-discount, how-to-calculate-roi, how-to-calculate-profit-margin |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-percentage-change`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Percentage Change Calculator — Percent Increase or Decrease from an Old to a New Value**；zh：按 03 当地搜法（涨跌幅 / 增长率） |
| 次要关键词 → desc/FAQ | percent increase calculator / percent decrease calculator → title + FAQ q2；percentage change formula → How 总答 + Formula 1 + FAQ q1；percent difference → 结果格 + Formula 4 + FAQ q5；percentage points vs percent → 勾选框 + Formula 5 + FAQ q4；reverse percentage / undo → 结果格 + Formula 3 + FAQ q3 |
| 用户搜索习惯判断 | 结果向（涨了 / 跌了多少 %）；increase / decrease 是检索主修饰，放副标题；不把「old value, new value, percentage points」串成参数目录 |
| 优化摘要 | 保留 slug；H1 由「From Old Value to New」改为含 percent increase or decrease；desc 写 calculate + formula + 例子与反向百分比 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| percentage change calculator | 吸（主词） | title / H1 |
| percent increase calculator / how to calculate percentage increase | 吸 | title；How；FAQ q1 |
| percent decrease calculator / percentage decrease formula | 吸 | title；FAQ q2；样例 3 |
| percentage change formula | 吸 | How 总答；Formula 1；Working 行 |
| percent difference calculator | 吸（同屏格） | 结果格；Formula 4；FAQ q5 |
| percentage points vs percent | 吸 | 勾选框；结果格；Formula 5；FAQ q4；样例 2 |
| reverse percentage / what % to get back | 吸 | 结果格；Formula 3；FAQ q3；Why choose 2 |
| percentage change with negative numbers / from zero | 吸 | 负基数 / 0 提示；FAQ q6–q7；样例 4 |
| month over month / year over year change | 吸（场景） | Use case 1 |
| CAGR（多期年化） | **不吸**（已有工具） | Related |
| discount / sale price | **不吸**（已有工具） | Related；Use case 2 |
| ROI / profit margin | **不吸** | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 百分比变化计算器，仍成立 |
| 主检索词任务 | 「从旧值到新值涨跌了多少 %」——改写前只有一个百分数、无过程、负基数符号错 → **部分满足**；改写后：带符号结果 + 过程 + 反向百分比 + 差异 + 百分点 → **满足** |
| 超出 | 无第二工具抢首屏；附加指标在结果区内 |
| 有意不满足 | 多期 CAGR、折扣价、ROI：Related，不改 H1 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：旧值、新值（文本框；允许货币符号、%、千分位；小数点按页面语言，de/es/pt/id/fr/ru 逗号；不换行空格视为千分位）；勾选「两个值都是百分比」（任一框带 % 时自动勾上）
- 输出：带符号百分比变化（2 位小数；绝对值 < 0.005 时 2 位有效数字）+ 增加 / 减少 / 不变；绝对变化；倍数 ×；回到旧值所需百分比；对称百分比差异；百分点（仅勾选时）；Working 行
- 公式：(新 − 旧) ÷ |旧| × 100（负基数用绝对值并提示）；反向：(旧 − 新) ÷ |新| × 100；差异：|旧 − 新| ÷ ((|旧| + |新|) ÷ 2) × 100
- 边界：旧值 0 → 百分比变化「—」+ 说明，仍给绝对变化；新值 0 → 反向「不可能」；变化 ≥ +100% → 倍数提示
- 报错：旧值 / 新值非数字（分别点名）
- 样例轮换：80 → 100（默认，Example 一致：+25%、×1.25、−20%、22.22%）→ 10% → 12%（+20%、+2 个百分点）→ 40 → 34（−15%、+17.65%）→ −200 → 50（+125%、负基数提示）
- Clear 只清空并取消勾选，不重载样例；进度 HUD：不适用

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
