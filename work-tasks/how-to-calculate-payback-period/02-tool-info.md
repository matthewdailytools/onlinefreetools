# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-payback-period`  
**路径**：`/tools/how-to-calculate-payback-period`  
**主方向**：C  
**YMYL**：是（财务；disclaimer + 权威引用）  
**最近改写**：2026-10-14（薄页逐页改写队列 #13，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄；description 两段重复拼接；FAQ 为「Sample?」「Discounted?」「Uneven CF?」「Advice?」式单词句并直接回答「本页不支持」；无 How 步骤、无 Why choose。功能缺陷：

- 只支持「每年相同」现金流（投资 ÷ 年现金流），而「不等额现金流回收期」是教材与搜索的主力问法；
- 无折现回收期（动态回收期），FAQ 却推给别的工具；
- 无逐年累计表、无插值过程、无「年 + 月」换算；收不回时无提示。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：知道投资几年回本；不等额年份也能算；需要时看折现后的回收期，并看到计算过程
- [x] 竞品（calculator.net / omnicalculator / investopedia 类）：多为投资 + 每年相同现金流，或需逐年填 N 个框；少数有折现回收期；很少写出插值步骤与「回本后又转负」提示
- [x] 缺口：一个框兼容等额 / 不等额；简单 + 折现同屏；插值过程；年 + 月；逐年累计表高亮回本年；收不回 / 后期转负提示
- [x] 增益：① 一框输入（一个数或一串数）② 简单与折现回收期对照（10,000 / 2,500 / 8% → 4.00 vs 5.01 年）③ A + B ÷ C 过程 ④ 累计表 ⑤ 场景例（不等额作业题 3.20 年、太阳能 10.91 / 16.16 年、设备采购）⑥ FAQ：好的回收期、折现率选法、小数年换月、负现金流、比较项目的陷阱 ⑦ 权威引用
- [x] 权威：Investopedia — Payback period；Investopedia — Discounted payback period
- [x] Related：`how-to-calculate-npv`、`how-to-calculate-irr`、`how-to-calculate-roi`、`how-to-calculate-break-even`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Payback Period Calculator — Simple & Discounted, for Even or Uneven Cash Flows |
| Description (en) | Calculate how many years it takes to earn back an investment. Enter one yearly cash flow or a list for uneven years, add a discount rate for discounted payback, and see the steps and the year-by-year cumulative table. |
| related | how-to-calculate-npv, how-to-calculate-irr, how-to-calculate-roi, how-to-calculate-break-even |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-payback-period`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Payback Period Calculator — Simple & Discounted, for Even or Uneven Cash Flows**；zh：**投资回收期计算器 — 算出几年回本（含动态回收期），现金流不等额也能算** |
| 次要关键词 → desc/FAQ | discounted payback period calculator → title + desc + 折现率框；payback period uneven cash flows → title + FAQ q2；how to calculate payback period → How 总答 + 4 步；payback period formula → Formula 1–3；good payback period → FAQ q1；payback in years and months → 结果「年 + 月」+ FAQ q5 |
| 用户搜索习惯判断 | 结果向（几年回本）；「simple & discounted」「even or uneven」是检索主修饰，放副标题而不串列参数名 |
| 优化摘要 | 保留 slug；H1 由「Years to Recover Investment」改为含 simple & discounted 与 uneven cash flows；desc 去重并写清一框输入、折现率、过程与累计表 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| payback period calculator | 吸（主词） | title / H1 |
| discounted payback period calculator | 吸 | title；折现率框；Formula 3；FAQ q3 |
| payback period with uneven cash flows | 吸 | title；cf 框说明；Formula 2；FAQ q2；样例 2 |
| how to calculate payback period / formula | 吸 | How 总答 + 4 步；Formula 1–3；Working 行 |
| payback period in years and months | 吸 | 结果「≈ y yr m mo」；Formula 4；FAQ q5 |
| what is a good payback period | 吸 | FAQ q1 |
| solar payback calculator | 吸（场景） | Use case 2；样例 3 |
| discount rate for payback / WACC | 吸 | 折现率提示；FAQ q4 |
| npv / irr calculator | **不吸**（已有工具） | Related；Formula 5；FAQ q7 |
| break-even point（销量保本点） | **不吸**（另一任务） | Related |
| ROI calculator | **不吸** | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 回收期计算器，仍成立 |
| 主检索词任务 | 「投资几年回本，不等额 / 折现也能算」——改写前只支持等额、无折现、FAQ 推给别处 → **部分满足**；改写后：一框等额 / 不等额、可选折现率、过程 + 年月 + 累计表 → **满足** |
| 超出 | 无第二工具抢首屏；累计表在结果区内 |
| 有意不满足 | NPV / IRR / 保本点：Related 与 FAQ 说明，不改 H1 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：初始投资（> 0，单值；允许千分位与货币符号）；每年净现金流（一个数 = 每年相同，推算至 100 年；一串数 = 第 1、2、3… 年，空格 / 换行 / 分号分隔，可含负数）；折现率 %（可选，0–100）
- 小数点按页面语言（de/es/pt/id/fr/ru 逗号）；不换行空格（fr/ru 千分位）视为千分位
- 输出：回收期（年，2 位小数）+ 「≈ y 年 m 月」；Working（等额：投资 ÷ 年现金流；不等额：整年 + 剩余 ÷ 下一年现金流）；折现回收期与其过程（未填折现率时提示）；回本后累计再转负的提醒；逐年累计表（含折现列）并高亮回本年
- 收不回：显示截至最后一年仍差多少
- 报错：投资非正数 / 多值；现金流为空；非数字记号（点名）；折现率越界
- 样例轮换：10000 / 2500 / 8%（默认，Example 一致：4.00 年、折现 5.01 年）→ 50000 / 10000 15000 20000 25000（3.20 年）→ 12000 / 1100 / 5%（10.91 年、折现 16.16 年）
- Clear 只清空不重载样例；进度 HUD：不适用

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
