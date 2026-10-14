# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-permutation-combination`  
**路径**：`/tools/how-to-calculate-permutation-combination`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #12，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文 101 词；FAQ 为「Sample?」「r>n?」「Invalid.」式单词句；Use case「Counting problems.」；无 How 步骤、无 Why choose。实测功能缺陷：

- 结果用 `toFixed(2)` 显示（`20.00`、`10.00`），排列组合数是整数；
- 浮点连乘：n 稍大（如 C(100, 50)）超过 2^53 后结果被舍入，且无提示；
- r > n 直接报错，未说明「不重复时为 0」；无可重复排列 / 组合；用户需自己知道选 nPr 还是 nCr。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：判断题目该用排列还是组合（及是否可重复），算出种数，并看到怎么算
- [x] 竞品（calculatorsoup / omnicalc / mathsisfun 类）：多为 n、r 两框 + nPr/nCr 两个数；部分有 with repetition；很少用「顺序是否重要 / 能否重复」引导选公式，很少给大数精确值与 1/X 概率
- [x] 缺口：两问选公式；四种计数并列；BigInt 精确；展开乘积过程；1/X 概率；r > n 的解释
- [x] 增益：① 两问引导 + 高亮 ② 四种计数对照（n=10, r=4 → 5,040 / 210 / 10,000 / 715）③ 精确大数（52! 68 位）④ 计算过程 ⑤ 场景例（领奖台、49 选 6、PIN、冰淇淋球、扑克、委员会、密码）⑥ 组合锁误称、0! = 1、多阶段相乘、MISSISSIPPI 多重集排列 ⑦ 权威引用（NIST DLMF §26.3）
- [x] 权威：Wikipedia — Permutation / Combination；NIST DLMF §26.3
- [x] Related：`how-to-calculate-exponent`、`how-to-calculate-scientific-notation`、`how-to-calculate-quadratic-equation`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Permutation & Combination Calculator (nPr, nCr) — Count the Ways, with Working |
| Description (en) | Calculate nPr and nCr for any n and r, plus counts with repetition. Answer two questions — does order matter, can items repeat — to pick the right formula, then see the working and the exact answer. |
| related | how-to-calculate-exponent, how-to-calculate-scientific-notation, how-to-calculate-quadratic-equation |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-permutation-combination`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Permutation & Combination Calculator (nPr, nCr) — Count the Ways, with Working**；zh：**排列组合计算器（A、C）— 算出有多少种取法，附计算过程** |
| 次要关键词 → desc/FAQ | nPr / nCr calculator → title + desc；permutation vs combination → FAQ q1；how to calculate nPr nCr → How 总答 + FAQ q2；with repetition → 第二问 + Formula 3/4；combination lock → FAQ q3；0 factorial → FAQ q4；lottery odds → 1/X 行 + Use case 2 |
| 用户搜索习惯判断 | 结果向 title（算种数 + 过程）；nPr / nCr 放括号作识别符，不把四种计数名串进 H1 |
| 优化摘要 | 保留 slug；H1 由裸「Permutation and Combination Calculator」改为带 nPr/nCr 与「Count the Ways, with Working」；desc 写两问选公式、精确结果、过程 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| permutation and combination calculator | 吸（主词） | title / H1 |
| npr calculator / ncr calculator / npr ncr | 吸 | title（括号）；表格；Formula 1/2 |
| permutation vs combination / difference | 吸 | FAQ q1；两问 |
| how to calculate permutations / combinations | 吸 | How 总答 + 4 步；FAQ q2 |
| permutation with repetition / combination with repetition calculator | 吸 | 第二问；Formula 3/4；表格 |
| combinations formula / n choose k | 吸 | Formula 2；表格公式列 |
| lottery odds calculator（单张中奖概率） | 吸（1/X 行） | Use case 2；Why choose 5；FAQ q6（多阶段） |
| 0 factorial / why is 0! = 1 | 吸 | FAQ q4 |
| combination lock combinations | 吸（划界） | FAQ q3 |
| factorial calculator（独立 n!） | **不吸**（单输入另一任务） | Formula body 定义 n!；不另开控件 |
| probability calculator（事件概率、条件概率） | **不吸** | 1/X 仅为计数倒数；disclaimer 写等可能假设 |
| permutations of letters with duplicates（多重集） | **不吸控件**（需字母计数输入） | FAQ q7 给公式与 MISSISSIPPI 例 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 排列组合计算器，仍成立 |
| 主检索词任务 | 「算排列 / 组合种数并知道用哪个公式」——改写前结果带 `.00`、大数被浮点舍入、不引导选公式 → **部分满足**；改写后：两问选公式并高亮、四种计数并列、BigInt 精确、过程可见 → **满足** |
| 超出 | 无第二工具抢首屏；1/X 概率只是结果区一行 |
| 有意不满足 | 阶乘单独计算、条件概率、字母重复排列：FAQ / Formula 说明，不改 H1 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：n（可选范围总数）、r（选取数）；非负整数，允许空格与每 3 位点/逗号分组（1,000,000）；n ≤ 1,000,000，r ≤ 5,000
- 两问：顺序是否重要（是/否，默认否）；能否重复选（是/否，默认否）→ 选出主结果
- 输出：主结果名称 + 精确值（千分位按页面语言；> 40 位时显示科学计数近似与位数）；Working（P 连乘、C = 连乘 ÷ r!、nʳ、C(n + r − 1, r)，连乘 > 6 项时省略中间）；1/X 概率（结果 > 0 时）；四种计数表格并高亮当前行
- r > n 且不可重复：P = C = 0，提示改为可重复或减小 r
- 报错：n / r 非非负整数（分别点名）；超出上限
- 样例轮换：5,2 组合（默认，Example 一致：C = 10；表格 20 / 25 / 15）→ 49,6 组合（13,983,816）→ 10,4 可重复排列（10,000）→ 8,3 排列（336）→ 5,3 可重复组合（35）
- Clear 只清空并恢复默认两问，不重载样例；改两问时若有输入立即重算；进度 HUD：不适用

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×3
- [x] `03-locale-briefs.md` 已按当地搜法重填
