# notes — SERP / 覆盖备忘（不进用户可见文案）

Date: 2026-08-28（词表第二轮）

词表来源：[`docs/seo/keywords/measuring-magnet-fields/keywords-search-volumns.txt`](../../docs/seo/keywords/measuring-magnet-fields/keywords-search-volumns.txt)

## 主词 SERP 印象（en / us，无完整 HTML 入库）

- 「measuring magnetic fields」：霍尔探头操作指南、仪器商、课堂实验 PDF、百科。任务偏「怎么测」，本页用**读数换算**接住，不写空壳科普。
- tesla ↔ gauss：有独立转换器；对 gauss strength / magnet strength chart / bar magnet 估算通常很薄。
- 「magnetic force」头词：定义 + F=qvB 作业页。与「测磁场」不同意图 → **禁止改 H1**。

## Planner 量级 → 落点（一带多场景，禁止拆 URL）

| 关键词 | 量级 | 处置 | 可见落点 |
|---|---|---|---|
| measuring magnetic fields | 1,000–1万 | **H1 核心** | title 破折号前 |
| magnetic field of magnet | 1,000–1万 | absorb | desc 前半 + Use case |
| magnetic force | 1,000–1万 | absorb（次意图） | **仅 FAQ**（场 vs 力） |
| magnetic field strength | 100–1,000 | absorb | 副标题 Field strength + desc |
| magnetic field calculator | 100–1,000 | absorb | 副标题 calculator |
| measure magnetic field | 100–1,000 | absorb | FAQ（近义主词） |
| measuring magnetic field strength | 100–1,000 | absorb | FAQ |
| gauss strength of magnet | 100–1,000 | absorb | desc + Example 200 G |
| magnet strength chart | 100–1,000 | absorb | 典型值对照表 |
| bar magnet magnetic field | 100–1,000 | absorb | Use case + 次模式 |
| magnetic field formula | 100–1,000 | absorb | Formula T↔G |
| magnetic field strength formula | 100–1,000 | absorb | Formula B=μ₀H |
| magnetic flux equation | 100–1,000 | absorb | Formula 一句 Φ=BA 边界 |
| magnetic moment formula | 100–1,000 | absorb | Formula 一句「用 Br，非 m 求解器」 |
| magnetic force formula / definition / between two magnets | 100–1,000 | absorb | FAQ 场 vs 力 |
| field lines / magnetic field diagram / uniform magnetic field | 100–1,000 | absorb | FAQ 定性 |
| force measurement | 100–1,000 | 仅磁场语境 | FAQ 测场强，不当力学测力计 |
| coulomb force / electric force formula / calculating tension force / how to calculate force / physics force diagrams / electromagnet diagram / electromagnetic force | 100–1,000 | **drop** | 不进 title/desc；不拆页 |
| right hand rule magnetic force / magnetic lorentz force | 100–1,000 | drop 作业器 | FAQ 一句「本页不计算洛伦兹力」 |

## 用户意图审查（2026-08-28）

对照三层意图：站长原话、Planner 头词、搜「measuring magnetic fields」的人要完成的事。

**总判**：经 How 优化后，主词「怎么测」**满足**；站长约束满足；N 级估算 / 公式边界句 / force FAQ 为**可控超出**（次 UI 不抢首屏）；magnetic force **有意不满足**。

| 层 | 意图 | 满足？ | 说明 |
|---|---|---|---|
| 站长 | slug + H1 = measuring magnetic fields；用词表；不拆页 | **满足** | Title 核心正确；drop 库仑/张力/洛伦兹作业器正确 |
| 主词搜索者 | 怎么测磁场（仪器、摆放、量程、读数） | **部分满足** | 换算器接住「已有读数」；若 How 只写填表，会对不上 SERP |
| calculator / field strength | 把读数换成 T/G 并对照数量级 | **满足** | 主模式 + 200 G 样例 + chart |
| magnetic field of magnet（头词） | 磁铁旁边场有多强 | **部分满足** | 次模式估算对口；首屏不是这条 |
| magnetic force（头词） | F=qvB / 两磁铁吸力定义 | **有意不满足** | 只 FAQ；正确，避免换皮 |
| 课堂图 / 力作业 | 磁力线图、洛伦兹、库仑、张力 | **正确超出范围外** | drop |

**超出预期（应保持边界）**

- N 级圆片/方块轴向公式：来自旧吸力候选，对「怎么测」是加分，对「磁铁的场」有用；**不得升为主 UI**。
- Φ=BA、磁矩各一句：可以；禁止展开成通量/磁矩求解器。
- desc 里写「不算 Lorentz/coulomb homework」是 **元叙述**，实现时不要进用户可见 description。

**缺口（实现前建议补进 How / FAQ，仍不拆 URL）**

- How 须先回答「用什么测、探头怎么放、量程/饱和」，再进入换算。
- magnet strength chart 应对用户要的「磁铁大概多少高斯」，不要只做地磁/MRI 科普表。
- 不承诺可交互磁力线图（词表有 diagram/field lines，FAQ 定性即可）。

## Title 定稿理由

- 核心必须是 **Measuring Magnetic Fields**（用户指定 + 词表头词）。
- 副标题 **Field strength calculator** 吸收 strength + calculator，避免 Tesla, Gauss, Oersted 参数目录腔。
- 不用 Magnetic Force 做 H1（头词量级虽同档，意图是力不是测量）。

## 与 `unit-converter` 边界

日常长度/质量/温度留在 `unit-converter`。磁通密度单位只出现在本 slug。
