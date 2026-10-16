# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-exponent`  
**路径**：`/tools/how-to-calculate-exponent`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #46，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：how-steps<3、why-choose<3、正文 <350 词、多语未译。功能缺口：

- 「exponent calculator」SERP（calculator.net、Omni、Mathway、RapidTables 类）主意图：**求 a^b**，且常见竞品可在 a^b = c 中**反求底数或指数**、支持负数与分数指数、给出步骤；本页只有 `Math.pow` + `toFixed(8)` 一行 → **部分满足**；
- 负底数配分数指数直接报错（(−8)^(1/3) 得 NaN）；大整数被舍入（2^100 只剩 16 位有效）；无步骤、无反求。

## 与站内相邻工具的分工

- `how-to-calculate-logarithm`：任意底的对数（本页「求指数」模式即 log_a c，只做 a^b = c 场景，详细对数换底交给该页）。
- `how-to-calculate-scientific-notation`：科学计数法换算；本页仅在结果过大 / 过小时用科学计数法显示。
- `how-to-calculate-rule-of-72`：翻倍时间估算；本页 FAQ 用 1.05^b = 2、1.07^b = 2 给出精确对照。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：作业 / 考试核对指数运算（负指数、分数指数、指数法则）；反求未知底数或指数（增长翻倍期数、每期增长率）；计算机中 2 的幂的精确值；科学工程中的数量级与开方
- [x] 竞品：多数只给浮点结果（大整数被舍入为科学计数法）、负底数 + 分数指数报错、0.333 与 1/3 不分；少有精确大整数、负指数精确分数、奇分母实根 + 偶分母复数主值、小数指数先化分数再「开方后乘方」的步骤
- [x] 缺口：反求；精确值；负底数；分数输入；步骤
- [x] 增益：① 三种模式（求幂 / 求底数 / 求指数）② 整数次幂 BigInt 精确（≤3000 位全显示，并给位数）③ 负整数指数给精确分数 + 小数（有限小数用「=」，循环小数用「≈」）④ 分数指数按约分后分母开方、分子乘方，能开尽时给精确值（16^0.75 = 8、27^(−2/3) = 1/9）⑤ 负底数：奇分母实根（(−8)^(1/3) = −2、(−8)^(2/3) = 4），偶分母显示「无实数」+ 复数主值（(−4)^(1/2) = 2i），小数指数提示改用分数 ⑥ 反求底数：偶次给 ±，负结果仅奇分子奇分母有解 ⑦ 反求指数：b = ln c ÷ ln a，能整除或为小分母分数时给精确值（8^b = 2 → 1/3）⑧ 超出双精度用 log10 写科学计数法（2^10000 ≈ 1.99506311688 × 10^3010）⑨ 输入容错：分数 p/q、小数逗号、千分位、e 记数、Unicode 负号
- [x] 权威：Wikipedia — Exponentiation；Wikipedia — Zero to the power of zero
- [x] Related：`how-to-calculate-logarithm`、`how-to-calculate-scientific-notation`、`how-to-calculate-rule-of-72`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Exponent Calculator — Find a Power, Base or Unknown Exponent with Exact Results and Steps |
| Description (en) | Calculate a^b with steps, or solve a^b = c for the base or the exponent. Get exact big integers and fractions, real roots of negative bases like (−8)^(1/3) = −2, and scientific notation for huge results. |
| related | how-to-calculate-logarithm, how-to-calculate-scientific-notation, how-to-calculate-rule-of-72 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-exponent`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Exponent Calculator — Find a Power, Base or Unknown Exponent with Exact Results and Steps**；zh：**指数计算器 — 计算 a 的 b 次方，也能反求底数或指数并给出步骤** |
| 次要关键词 → desc/FAQ | how to calculate exponents → FAQ q1 + How；negative exponent → FAQ q2 + Formula 2；fractional exponent / rational exponent → FAQ q3 + Formula 3；negative base fractional exponent / cube root of negative → FAQ q4 + Formula 4；−2^4 vs (−2)^4 → FAQ q5；0^0 → FAQ q6；solve for exponent / unknown exponent → FAQ q7 + 求指数模式；big number exponent / 2^100 → FAQ q8 + Why choose 2 |
| 用户搜索习惯判断 | 工具名向（exponent calculator / power calculator）+ 问法向（how to calculate exponents）；H1 以工具名开头，副句含三种求解与「精确 + 步骤」 |
| 优化摘要 | 保留 slug；H1 由「Exponent Calculator — How to Calculate Powers」改为工具名 + 三向求解 + 精确与步骤；desc 写反求、精确大整数与分数、负底数实根、科学计数法 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| exponent calculator / power calculator / a to the power of b | 吸（主词） | title / H1；求幂模式 |
| negative exponent calculator | 吸 | 负指数精确分数；FAQ q2；Formula 2 |
| fractional exponent / rational exponent calculator | 吸 | 分数输入、开方后乘方步骤；FAQ q3；Formula 3 |
| solve for base / nth root from power | 吸 | 求底数模式（± 解）；Formula 5 |
| solve for exponent / unknown exponent / doubling time exact | 吸 | 求指数模式；FAQ q7；Use case 2 |
| exponent rules / laws of exponents | 吸（说明性） | Formula 1–4 |
| big number calculator / 2^64 exact | 吸 | 精确大整数；Use case 3；FAQ q8 |
| complex exponent / Euler form calculator（复数底数或复数指数输入） | **不吸** | 仅在负底数偶分母时显示主值，不提供复数输入 |
| logarithm with arbitrary base / change of base | **不吸** | 对数工具在 Related |
| matrix exponent / modular exponentiation | **不吸** | 非本意图 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 指数幂计算器，仍成立 |
| 主检索词任务 | 「求 a^b（含负数 / 分数指数），或在 a^b = c 中反求」——改写前仅浮点 a^b、负底数分数指数报错 → **部分满足**；改写后三模式 + 精确值 + 负底数 + 步骤 → **满足** |
| 超出 | 无第二工具抢首屏 |
| 有意不满足 | 复数输入；模幂；矩阵幂；符号代数化简 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 模式：求幂 a^b（默认）/ 求底数（a^b = c 中的 a）/ 求指数（a^b = c 中的 b）；切换模式只显示需要的两个输入框并隐藏结果
- 输入：整数、小数（点或逗号；英文式千分位 1,024 识别为一千零二十四）、负数（含 Unicode 负号）、分数 p/q（p、q 可为小数）、e 记数（1.5e8）
- 求幂：0^正 = 0；0^0 = 1 + 约定说明；0^负 报错；整数指数且估算 ≤3000 位 → 精确（整数 >24 位时主结果写科学计数法，精确值放可滚动框并给位数）；负整数指数 → 精确分数 + 小数；小数指数先化最简分数（分母 ≤1000 时显示「0.75 = 3/4」步骤）；分母 ≤64 且底数可开尽 → 精确值；负底数奇分母 → 实根；偶分母 → 「无实数」+ 复数主值 + 小数指数提示；结果超出双精度 → 由 log10 写科学计数法；|log10 结果| > 10^15 报错
- 求底数：b = 0 时按 c 是否为 1 给两种报错；c = 0：b > 0 → a = 0，否则报错；c < 0 仅在指数约分后分子分母均为奇数时有解；偶分子奇分母 → 主结果 ±，附说明；整数 b 且 c 可开尽 → 精确；Check 行回代
- 求指数：a ≤ 0 或 a = 1、c ≤ 0 报错；b = ln c ÷ ln a；整数或分母 ≤12 的分数且可精确验证 → 精确；「As a logarithm」行 b = log_a(c)；Check 行
- 显示：小数 12 位有效数字；有限小数且位数少时写「=」，否则「≈」；数字按页面语言 Intl 格式（拉丁数字）
- 样例轮换：2^10（默认，与 Example 一致）→ 2^100 → 5^−3 → (−8)^(1/3) → 16^0.75 → a^3 = 343 → 1.05^b = 2；小数逗号语种样例写 0,75、1,05
- Clear 清空全部输入、回到求幂、隐藏结果，不重载样例；进度 HUD：不适用（即时计算）

## 固定数字

- 2^10 = 1024；2^100 = 1 267 650 600 228 229 401 496 703 205 376（31 位）；2^32 = 4 294 967 296；2^64 = 18 446 744 073 709 551 616；2^1000 共 302 位；2^10000 ≈ 1.99506311688 × 10^3010
- 5^−3 = 1/125 = 0.008；2^−1 = 0.5；2^−10 = 1/1024 = 0.0009765625；10^−20 = 1 × 10^−20
- 16^0.75 = 16^(3/4) = (⁴√16)^3 = 2^3 = 8；27^(1/3) = 3；8^(2/3) = 4；27^(−2/3) = 1/9；2^0.5 ≈ 1.41421356237
- (−8)^(1/3) = −2；(−8)^(2/3) = 4；(−2)^3 = −8；(−2)^4 = 16；−2^4 = −16；(−4)^(1/2) 无实数，主值 2i
- 3^4 = 81；2^3 × 2^4 = 2^7 = 128；1.5^3 = 27/8 = 3.375
- a^3 = 343 → a = 7；a^2 = 9 → ±3；a^3 = −27 → −3；a^(2/3) = 4 → ±8；a^3 = 1000 → 10；a^10 = 2 → a ≈ 1.0718
- 1.05^b = 2 → b = ln 2 ÷ ln 1.05 = 0.693147 ÷ 0.048790 ≈ 14.2067；1.07^b = 2 → ≈ 10.2448（72 ÷ 7 ≈ 10.3）；8^b = 2 → 1/3；2^b = 1024 → 10

## 验收记录（2026-10-15，英文本地预渲染页）

- 7 个样例输出与上表一致（2^10 连乘步骤；2^100 精确 31 位 + 位数；5^−3 = 1/125、小数 = 0.008；(−8)^(1/3) 奇根步骤；16^0.75 先化 3/4；a = 7 + Check；b ≈ 14.2066990829 + 对数行）
- 边界：(−4)^(1/2) → 无实数 + 主值 2i；(−8)^0.333 → 化为 333/1000（偶分母）→ 无实数 + 提示改用 1/3；(−8)^(2/3) = 4；0^0 = 1 + 约定说明；0^−1 报错；2^10000 → 科学计数法 + log10 步骤；1.5^3 = 3.375（分数 27/8）；0.1^3 = 0.001；10^−20 = 1 × 10^−20；0.5^2000 ≈ 8.70980981622 × 10^−603（精确分数在滚动框）；2^1e20 → 超范围报错；27^(−2/3) = 1/9；1,024^0.5 = 32
- 求底数：a^2 = 9 → ±3；a^3 = −27 → −3；a^2 = −4 报错；a^(−2) = 0.25 → ±2；a^(2/3) = 4 → ±8；a^(−1) = 4 → 1/4；b = 0 两种报错；a^(−1) = 0 报错；a^2 = 2 → ±1.41421356237
- 求指数：8^b = 2 → 1/3；2^b = 1024 → 10；a = 1 报错；c = −1 报错；1.07^b = 2 → 10.2447683511
- 非法输入 abc → 字段名报错；报错时旧步骤清空

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×8 / Related ×3 / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
