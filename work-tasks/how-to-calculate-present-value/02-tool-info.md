# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-present-value`  
**路径**：`/tools/how-to-calculate-present-value`  
**主方向**：C  
**YMYL**：是（财务；disclaimer + 权威引用）  
**最近改写**：2026-10-15（薄页逐页改写队列 #33，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（How 一句；FAQ 为「Sample PV? / PV vs NPV? / Monthly compounding? / Advice?」式；description 两段重复拼接）。功能缺口：

- 只有一次性金额、只有按年复利；搜「present value calculator」的用户常要算每期收付款（年金）、按月复利、期初付款；
- 只输出一个数字，没有代入算式、折现系数、实际年利率，无法对照课本或 Excel；
- 没有利率敏感度、没有逐年余额验算；Clear 只 reset 表单。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：将来一笔钱（或一串每期收款）今天值多少；反向算终值；按月 / 连续复利；期初 / 期末付款；对照 Excel PV
- [x] 竞品（calculator.net PV / omnicalculator / investopedia / Excel PV 教程类）：多为单框单值或需自行理解正负号；少有同时给出代入算式、实际年利率、±1 点敏感度与逐年余额验算
- [x] 缺口：一次性金额 + 年金同算；六种复利频率含连续；期初付款；可验算的逐年表
- [x] 增益：① 代入算式（i、N、(1 + i)^N、两部分）② 实际年利率（月复利 5% → 5.12%）③ ±1 点敏感度（4% 8,219.27 / 6% 7,472.58）④ 逐年余额回到目标金额 ⑤ FAQ：复利频率对比（7,835.26 / 7,792.05 / 7,788.14 / 7,788.01）、期初付款（45,261.91）、PV vs NPV、贴现率怎么选（通胀 3% → 74,409.39）、彩票年金（654,266.04）、Excel PV 正负号 ⑥ 权威引用
- [x] 权威：Investopedia — Present value；Microsoft Support — PV function
- [x] Related：`how-to-calculate-npv`、`how-to-calculate-compound-interest`、`how-to-calculate-inflation`、`how-to-calculate-irr`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Present Value Calculator — What a Future Sum or Regular Payments Are Worth Today, Plus Future Value |
| Description (en) | Calculate the present value or future value of a lump sum, regular payments, or both. Pick annual, monthly, daily or continuous compounding and end- or start-of-period payments, then see the formula worked out, the effective annual rate, a ±1% rate check and a year-by-year balance. |
| related | how-to-calculate-npv, how-to-calculate-compound-interest, how-to-calculate-inflation, how-to-calculate-irr |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-present-value`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Present Value Calculator — What a Future Sum or Regular Payments Are Worth Today, Plus Future Value**；zh：**现值计算器 — 将来一笔钱或每期收付款今天值多少，也能算终值** |
| 次要关键词 → desc/FAQ | how to calculate present value → How 总答 + 4 步；present value formula → Formula 1–5；present value of annuity → 付款输入 + Formula 3 + 样例 2；annuity due → 付款时点 + Formula 4 + FAQ q3；future value calculator → 方向选择 + 样例 3 + title 副句；compounding monthly / continuous → 复利选择 + FAQ q2；discount rate → FAQ q5；PV vs NPV → FAQ q4；lottery lump sum vs annuity → Use case 2 + FAQ q6；Excel PV → FAQ q7 |
| 用户搜索习惯判断 | 结果向（今天值多少）为主；「future value」是同页反向需求，放副句不并列成参数清单；不把复利频率 / 付款时点串进 H1 |
| 优化摘要 | 保留 slug；H1 由「PV and FV Modes」改为结果向说明 + Plus Future Value；desc 去重并写清年金、复利频率、期初期末、算式、实际年利率、敏感度、逐年表 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| present value calculator / pv calculator | 吸（主词） | title / H1 |
| how to calculate present value / present value formula | 吸 | How；Formula 1 |
| present value of annuity / pv of payments | 吸 | 付款输入；Formula 3；样例 2 |
| annuity due present value | 吸 | 付款时点；Formula 4；FAQ q3 |
| future value calculator | 吸（同页反向） | 方向选择；样例 3；title 副句 |
| continuous compounding present value | 吸 | 复利选择；Formula 5；FAQ q2 |
| discount factor | 吸 | 算式行；Formula 1；FAQ q1 |
| discount rate for present value | 吸 | FAQ q5 |
| present value vs npv | 吸 | FAQ q4 |
| lottery lump sum vs annuity | 吸 | Use case 2；FAQ q6 |
| excel pv function | 吸 | FAQ q7 |
| npv calculator / irr calculator | **不吸**（已有工具） | Related |
| compound interest calculator | **不吸**（已有工具） | Related |
| loan payment / amortization（求 PMT） | **不吸**（另一求解目标） | — |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 现值 / 终值计算器，仍成立 |
| 主检索词任务 | 「将来的钱今天值多少（含每期收款）」——改写前只能算一次性金额、只按年复利、无过程 → **不满足**；改写后：一次性 + 年金、六种复利、期初 / 期末、代入算式、实际年利率、敏感度、逐年验算 → **满足** |
| 超出 | 无第二工具抢首屏；敏感度与逐年表只作结果旁的对照 |
| 有意不满足 | 反求利率 / 期数 / 每期付款（另一求解目标）；不规则现金流（交给 NPV） |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：方向（现值 / 终值）；一次性金额（≥ 0，可空）；每期付款（≥ 0，可空；至少一项 > 0）；年利率 %（> −100 且 ≤ 1000，0 可）；年数（> 0 且 ≤ 200，可带小数）；复利频率（1 / 2 / 4 / 12 / 365 / 连续）；付款时点（期末 / 期初）
- 每期付款按复利周期支付；有付款时 m × t 须为整数；连续复利时禁用付款与付款时点
- 小数点按页面语言（de/es/pt/id/fr/ru 逗号）；去掉货币符号、空格、撇号与不换行空格（千分位）
- 输出：主结果 + 「年利率 · 复利 · 年数」；算式行（i = r ÷ m、N = m × t、(1 + i)^N 或 e^(r × t)；一次性部分；付款部分；期初 × (1 + i)；两部分合计）；实际年利率（非按年复利时）；收付总额与差额；±1 点敏感度；逐年表（年、利息、付款、年末余额；PV 方向从现值起步并取出付款，末行回到终值；最多 100 行，超出省略中间）
- 报错：金额全空 / 负数；利率越界；年数越界；有付款但 m × t 非整数
- 样例轮换：现值 / 10000 / 5% / 5 年 / 按年（默认，Example 一致：7,835.26）→ 现值 / 每月 500 / 6% / 10 年 / 按月（45,036.73）→ 终值 / 5000 + 每月 200 / 7% / 20 年 / 按月（124,379.03）
- Clear 只清空、恢复默认选项，不重载样例；进度 HUD：不适用

## 固定数字

- 样例 1：(1.05)^5 = 1.276282；PV 7,835.26；折现系数 0.783526；4% 8,219.27；6% 7,472.58；收到 10,000、差额 2,164.74
- 复利频率：按月 7,792.05（实际年利率 5.12%）；按日 7,788.14；连续 7,788.01
- 样例 2：i = 0.5%、N = 120、(1.005)^120 = 1.819397、年金系数 90.073453；PV 45,036.73；期初 45,261.91；收到 60,000、差额 14,963.27；5% 47,140.68；7% 43,063.18
- 样例 3：i = 0.5833%、N = 240、(1 + i)^N = 4.038739；一次性 20,193.69 + 付款 104,185.33 = 124,379.03；投入 53,000、利息 71,379.03；实际年利率 7.23%；6% 108,959.20；8% 142,438.10
- 彩票：每年 50,000 × 20 期、期初、5% → 654,266.04；通胀：100,000、10 年、3% → 74,409.39
- Excel：=PV(5%, 5, 0, 10000) → −7,835.26；=PV(6%/12, 120, 500) → −45,036.73

## 验收记录（2026-10-15，英文本地预渲染页）

- 样例 1：7,835.26；算式 1.276282、10,000.00 ÷ 1.276282；差额 2,164.74；敏感度 4% 8,219.27 / 6% 7,472.58；逐年表 5 行，末行 10,000.00
- 样例 2：45,036.73；年金系数 90.073453；实际年利率 6.17%；收到 60,000.00、差额 14,963.27；5% 47,140.68 / 7% 43,063.18；逐年表末行余额 0.00
- 样例 3：124,379.03 = 20,193.69 + 104,185.33；投入 53,000.00、利息 71,379.03；实际年利率 7.23%；6% 108,959.20 / 8% 142,438.10；末行 124,379.03
- 复利频率：按月 7,792.05（5.12%）、按日 7,788.14（N = 1,825）、连续 7,788.01（付款框禁用并忽略）
- 期初：500 / 月 → 45,036.73 × (1 + 0.5%) = 45,261.91；彩票 50,000 × 20 期初 5% → 623,110.52 × 1.05 = 654,266.04
- 2.5 年按月一次性 → N = 30、8,827.26、逐年表末行标 2.5；2.4 年按季 + 付款 → 整数期数报错；0% → 1,000 + 100 × 3 = 1,300.00；−2% → 1,106.29；「10,000」千分位可读；150 年表格截断为 99 行 + 「… 150」
- 报错：金额为负 / 全空 / abc；利率 −100；年数 0
- Clear：清空输入、恢复现值 / 按年 / 期末、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
