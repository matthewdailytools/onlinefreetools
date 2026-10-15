# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-logarithm`  
**路径**：`/tools/how-to-calculate-logarithm`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #37，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（How 一段、Formula 四条、FAQ 四问一句话答；description 带「Browser learning tool」空话）。功能缺口：

- 只给一个小数结果，不识别精确值（log₄ 8 只显示 1.5，不说是 3/2、为什么）；
- 没有换底算式、反向验算、反对数（antilog）模式；输入只能是普通小数（不能写 1/8、2^10、3.2e-5）；
- 没有首数 / 尾数（常用对数表、印度 / 中国课本仍在考）、位数判断；报错只有一句笼统提示。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：求任意底数的对数；把对数还原成数（antilog）；用换底公式在只有 log / ln 键的计算器上复算；首数尾数 / 位数题
- [x] 竞品（calculator.net log calculator / omnicalculator / rapidtables / symbolab）：多给小数结果 + 换底公式说明；少有精确分数识别、反向验算、首数尾数与对数表横线写法、位数判断、分数 / 幂输入
- [x] 缺口：精确值；antilog；log / ln / log₂ 并列；首数尾数；位数；具体报错
- [x] 增益：① 精确值识别（log₄ 8 = 3/2，因为 4^(3/2) = 8）② 换底算式 ln(x) ÷ ln(b) 带中间值 ③ 回代验算 ④ 同一真数三种底数并列 ⑤ 首数 / 尾数 / 横线写法（log₁₀ 0.0345 = 2̄.5378）⑥ 科学计数法与位数 / 前导零 ⑦ antilog 模式 ⑧ FAQ：log 与 ln（Excel / Python 差异）、换底、0 与负数、底数限制（0 < b < 1 可用）、首数尾数、antilog、位数公式 ⑨ 用途：pH、翻倍年数、分贝 / 比特
- [x] 权威：Wikipedia — Logarithm；Wikipedia — Natural logarithm
- [x] Related：`how-to-calculate-exponent`、`how-to-calculate-scientific-notation`、`how-to-calculate-compound-interest`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Logarithm Calculator — Find the Log of Any Number in Any Base, with Exact Values and Working |
| Description (en) | Calculate log₁₀, ln, log₂ or a custom-base log, or the antilog, of decimals, fractions and powers. Shows exact values like log₄ 8 = 3/2, the change-of-base formula step by step, characteristic and mantissa, with examples. |
| related | how-to-calculate-exponent, how-to-calculate-scientific-notation, how-to-calculate-compound-interest |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-logarithm`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Logarithm Calculator — Find the Log of Any Number in Any Base, with Exact Values and Working**；zh：**对数计算器 — 输入任意底数求对数，能化成分数的给出精确值并附计算过程** |
| 次要关键词 → desc/FAQ | log base 2 / log base 10 / natural log calculator → 底数预设 + 三底并列行；change of base formula → Formula 1 + FAQ q2 + 算式行；log vs ln → FAQ q1；log of 0 / negative → 报错 + FAQ q3；log base 1 → 报错 + FAQ q4；antilog calculator → antilog 模式 + FAQ q6；characteristic and mantissa → 首数尾数行 + FAQ q5；number of digits using log → 位数行 + FAQ q7 + Use case 4；log rules → Formula 2–4 |
| 用户搜索习惯判断 | 结果向（某数的对数是多少）+ 过程向（怎么换底、怎么算）；「any base」「exact values」「working」作副句；不把 antilog / 首数 / 位数串进 H1 |
| 优化摘要 | 保留 slug；H1 由「How to Calculate Logs」改为含 any base + exact values + working；desc 去掉空话，写清三种预设底、自定义底、antilog、分数 / 幂输入、精确值、换底步骤、首数尾数 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| logarithm calculator / log calculator | 吸（主词） | title / H1 |
| log base 2 / log base 10 / ln calculator | 吸 | 底数预设；三底并列行 |
| log with any base / custom base | 吸 | 自定义底数；FAQ q2 |
| change of base formula | 吸 | 算式行；Formula 1；FAQ q2 |
| log vs ln | 吸 | FAQ q1 |
| log of 0 / log of negative number | 吸 | 报错；FAQ q3 |
| antilog calculator / inverse log | 吸 | antilog 模式；FAQ q6；Formula 5 |
| characteristic and mantissa | 吸 | 首数尾数行；FAQ q5 |
| how many digits (log₁₀) | 吸 | 位数行；FAQ q7 |
| log rules / properties | 吸（次要） | Formula 2–4 |
| complex logarithm / log of matrix | **不吸**（超出实数范围） | 免责 |
| solve exponential equation symbolic（CAS） | **不吸**（另一工具类型） | Related exponent |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 对数计算器，仍成立 |
| 主检索词任务 | 「任意底数求对数并能看懂/复算」——改写前只有一个小数、不识别精确值、无 antilog → **不满足**；改写后：精确值 + 理由、换底算式、验算、三底并列、antilog、首数尾数、位数 → **满足** |
| 超出 | 无第二工具抢首屏；首数尾数 / 科学计数法 / 位数只作结果旁附加行 |
| 有意不满足 | 复数对数、符号化简 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：求解模式（对数 / 反对数）；底数（10 / e / 2 / 自定义）；自定义底数（同一解析器，可写 1/2、0.5、e）；真数或指数：小数（按页面小数点；点小数语种可带千分位逗号）、a/b、a^b（指数可写 (3/2)）、科学计数法、常数 e、真减号
- 计算：log₁₀ / log₂ / ln 直接用 Math.log10 / log2 / log；自定义底 ln(x) ÷ ln(b)；antilog x = b^y
- 精确值：q ≤ 12 时 y·q 接近整数 p 且 b^(p/q) 回代与 x 相对误差 ≤ 1e-9 → 输出最简 p/q 与「因为 b^(p/q) = x」
- 输出：主结果（10 位有效数字，极大 / 极小写成 a × 10ⁿ）；精确值或「非整数 / 简单分数」说明；换底算式（底 e 时用 log₁₀ 换底）；验算 b^y = / ≈ x；log₁₀ / ln / log₂ 并列；首数 / 尾数（真数 < 1 时附横线写法）；科学计数法；位数（≥ 1）或小数点后前导零个数（< 1）；antilog 模式：主结果 b^y = x、反向验算、x = e^(y·ln b) 算式，隐藏验算 / 三底并列行
- 报错：留空；非数字（点名原文）；x = 0（趋于 −∞）；x < 0（无实数对数）；底数 ≤ 0 或 = 1；结果溢出 / 下溢
- 样例轮换：log₁₀ 1000（默认，Example 一致）→ log₄ 8 → log₁₀ 0.0345 → antilog 10^2.5
- Clear 只清空、恢复对数模式与底数 10，不重载样例；进度 HUD：不适用

## 固定数字

- log₁₀ 1000 = 3（10³ = 1000）；ln 1000 = 6.907755279；log₂ 1000 = 9.965784285
- log₄ 8 = ln 8 ÷ ln 4 = 2.079441542 ÷ 1.386294361 = 3/2（4^(3/2) = 8）
- log₁₀ 3450 = 3.537819095：首数 3，尾数 0.5378190951，4 位整数
- log₁₀ 0.0345 = −1.462180905 = −2 + 0.5378190951 → 2̄.5378；小数点后 1 个前导零
- 10^2.5 = 316.227766；e¹ = 2.718281828；ln 10 = 2.302585093；log₁₀ e = 0.4342944819
- log₁₀(2¹⁰⁰) = 30.10299957 → 31 位；log₂(1/8) = −3；log₀.₅ 8 = −3；log₂ 1024 = 10
- pH：[H⁺] = 3.2e-5 → 4.494850022 ≈ 4.49；翻倍年数 7%：ln 2 ÷ ln 1.07 = 10.24；功率比 1000 → 30 dB

## 验收记录（2026-10-15，英文本地预渲染页）

- 四个样例输出与上表一致：log₁₀(1000) = 3（精确值 3，10³ = 1000）；log₄(8) = 1.5（精确值 3/2，4^(3/2) = 8）；log₁₀(0.0345) = −1.462180905（首数 −2、尾数 0.5378190951、2̄.5378190951，1 个前导零，3.45 × 10⁻²）；10^2.5 = 316.227766（反向 log₁₀(316.227766) = 2.5）
- 2^100 → 30.10299957、log₂ = 100、31 位；1/8 底 2 → −3（2⁻³ = 0.125）；底 0.5 与 1/2 → log_(0.5)(8) = −3；ln(e) = 1；log₉ 27 = 3/2；3.2e-5 → −4.494850022、4 个前导零；1,000,000 → 6；antilog e¹ = 2.718281828；10⁻³ = 0.001（3̄.0）
- 报错：x = 0、x = −5、底数 1、底数留空、`abc`、留空、10^400 溢出，均显示对应提示并隐藏明细
- Clear：清空输入、恢复对数模式与底数 10、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
