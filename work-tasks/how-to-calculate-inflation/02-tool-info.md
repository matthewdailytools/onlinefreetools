# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-inflation`  
**路径**：`/tools/how-to-calculate-inflation`  
**主方向**：C  
**YMYL**：是（财务；须 disclaimer + 权威引用）  
**最近改写**：2026-10-15（薄页逐页改写队列 #38，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（FAQ 四问答各几个词，如「Sample? ≈1159.27.」；description 重复拼接两句；Formula 条目只说「不载入官方 CPI」）。功能缺口：

- 「inflation calculator」SERP 主意图是「某年的钱相当于今天多少」（BLS / Minneapolis Fed / in2013dollars），本页只有固定通胀率推算未来值，**不满足主意图**；
- 没有购买力、累计 / 年均通胀率、翻倍年数、逐年表；无法回答「工资有没有跑赢通胀」；
- 报错一句笼统提示，Clear 只 reset。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：历年美元换算；工资 / 房租 / 养老金是否跑赢通胀；按假设通胀率预估未来物价与购买力
- [x] 竞品（BLS CPI Inflation Calculator、Minneapolis Fed calculator、in2013dollars、calculator.net inflation）：多给单一换算结果；少有「实际金额 → 名义 vs 实际变化」、区间内最高 / 最低年通胀、算式中直接给出所用 CPI 值、固定通胀率模式的翻倍年数 + 逐年表并存
- [x] 缺口：内置 CPI 年表；跑赢通胀判断；名义 / 实际；翻倍年数；逐年表
- [x] 增益：① 1913–2025 年均 CPI-U 内置（明尼阿波利斯联储表，一位小数）② 算式带 CPI 值 ③ 累计 + 年均通胀率 ④ 1 美元购买力 ⑤ 区间最高 / 最低年通胀（表中官方年度百分比）⑥ 实际金额 → 名义 / 实际变化 ⑦ 固定通胀率：未来价格、购买力、翻倍年数 + 70 法则、逐年表 ⑧ FAQ：与 BLS 月度计算器差异、名义 vs 实际（Fisher）、美国历史高通胀年份
- [x] 权威：Federal Reserve Bank of Minneapolis — Consumer Price Index, 1913–（2026-10-15 已抓取核对表值）；U.S. Bureau of Labor Statistics — CPI
- [x] Related：`how-to-calculate-cagr`、`how-to-calculate-compound-interest`、`how-to-calculate-present-value`、`how-to-calculate-percentage-change`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Inflation Calculator — See What Money From a Past Year Is Worth Today, with Official US CPI Data |
| Description (en) | Calculate what a US dollar amount from any year since 1913 is worth in another year using official CPI data, or project future prices at a constant inflation rate in any currency. Shows the formula, cumulative and average inflation, purchasing power and whether a pay rise kept up, with examples. |
| related | how-to-calculate-cagr, how-to-calculate-compound-interest, how-to-calculate-present-value, how-to-calculate-percentage-change |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-inflation`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Inflation Calculator — See What Money From a Past Year Is Worth Today, with Official US CPI Data**；zh：**通胀计算器 — 用美国官方 CPI 算出过去的钱相当于今天多少钱，附计算过程** |
| 次要关键词 → desc/FAQ | what is $100 in 2000 worth today → 默认样例 + FAQ q1；how to calculate inflation between two years → Formula 1–2 + FAQ q2；did my salary keep up with inflation → 实际金额 + 样例 2 + FAQ q3；BLS CPI calculator 差异 → FAQ q4；future value of money / inflation rate → 固定通胀率模式 + Formula 3；purchasing power → 购买力行 + Formula 4；how long for prices to double / rule of 70 → 翻倍行 + FAQ q5；real vs nominal → FAQ q6；highest inflation years → 最高 / 最低行 + FAQ q7 |
| 用户搜索习惯判断 | 结果向（过去的钱值多少）；「official US CPI data」作副句说明数据来源；固定通胀率模式只进 desc 不进 H1 |
| 优化摘要 | 保留 slug；H1 由「Future Purchasing Power」改为历年换算主意图 + 官方 CPI；desc 去重复，写清两种模式、公式、累计 / 年均、购买力、跑赢通胀 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| inflation calculator / value of a dollar over time | 吸（主词） | title / H1；CPI 模式 |
| what is $X from YEAR worth today | 吸 | 默认样例；FAQ q1 |
| how to calculate inflation rate between two years | 吸 | Formula 1–2；FAQ q2 |
| salary inflation calculator / did my pay keep up | 吸 | 实际金额；FAQ q3；Use case 2 |
| future value with inflation / inflation rate calculator | 吸 | 固定通胀率模式；Formula 3 |
| purchasing power calculator | 吸 | 购买力行；Formula 4 |
| rule of 70 inflation doubling | 吸 | 翻倍行；FAQ q5 |
| real vs nominal / real wage | 吸 | 对比行；Formula 5；FAQ q6 |
| highest inflation year US | 吸（次要） | 最高 / 最低行；FAQ q7 |
| monthly CPI / specific month | **不吸**（数据粒度不同） | FAQ q4 指向 BLS |
| other countries' CPI tables | **不吸**（只说明方法） | FAQ q2；固定通胀率模式 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 通胀计算器，仍成立 |
| 主检索词任务 | 「过去某年的钱相当于今天多少」——改写前只有固定通胀率推算 → **不满足**；改写后：CPI 历年换算 + 算式 + 购买力 + 跑赢通胀判断 → **满足** |
| 超出 | 无第二工具抢首屏；固定通胀率模式作为第二选项 |
| 有意不满足 | 月度 CPI、非美国 CPI 表、投资收益预测 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：模式（CPI 历年 / 固定通胀率）；金额（千分位、小数逗号容错）；起止年份下拉 1913–2025（默认 2000 → 2025）；通胀率 −50%~100%；年数 1–100 整数；实际金额（选填）
- CPI 模式：等值 = 金额 × CPI₂ ÷ CPI₁；累计变化；年均 =(比值)^(1/年数) − 1；倒推（目标年早于起始年）改用「低了 x%，此后年均涨 y%」文案；相隔 1 年不写年均；1 美元购买力 = CPI₁ ÷ CPI₂；区间（较早年 + 1 至较晚年）官方年度百分比最高 / 最低（相隔 1 年时隐藏）
- 固定通胀率模式：F = P(1+i)ⁿ；购买力 P ÷ (1+i)ⁿ；翻倍 ln 2 ÷ ln(1+i) + 70 法则（i ≤ 0 时说明不会翻倍）；负通胀算式写成「1 − 2.00%」；逐年表（≤ 30 年逐年，否则每 5 年并补末年）
- 实际金额：实际变化 = 实际 ÷ 调整后 − 1；名义变化 = 实际 ÷ 金额 − 1；正 / 负 / 持平三种文案
- 报错：金额 ≤ 0 / 非数字；同一年份；通胀率越界；年数非整数或越界；实际金额 ≤ 0
- 样例轮换：100（2000 → 2025）（默认，Example 一致）→ 50,000（2015 → 2025）+ 实际 62,000 → 1,000、3%、5 年
- Clear 只清空、恢复 CPI 模式与默认年份，不重载样例；进度 HUD：不适用

## 固定数字

- CPI：1913 9.9；1970 38.8；1980 82.4；2000 172.2；2015 237.0；2020 258.8；2024 313.7；2025 321.9
- 100（2000）≈ 186.93（2025）；+86.93%；年均 2.53%；1 美元（2025）= 0.53（2000）；区间最高 8.0%（2022）、最低 −0.4%（2009）
- 50,000（2015）≈ 67,911.39（2025）；+35.82%；年均 3.11%；实际 62,000 → 名义 +24.00%、实际 −8.70%
- 1（1970）≈ 8.30（2025）；100（2025）≈ 25.60（1980）；2024 → 2025 +2.61%
- 固定通胀率：1,000 × 1.03⁵ = 1,159.27；购买力 862.61；翻倍 23.45 年（70 ÷ 3 ≈ 23.33）；2% → 35 年、10 年后购买力 820.35；4% 加薪 vs 3% 通胀 → 实际 0.97%
- 美国历史：1917 17.8%、1918 17.3%、1947 14.4%、1980 13.5%；1921 −10.9%、1932 −10.3%；2022 8.0%

## 验收记录（2026-10-15，英文本地预渲染页）

- 三个样例输出与上表一致（含算式 321.9 ÷ 172.2、237.0 一位小数、最高 / 最低行、实际金额「No — 62,000.00 is 8.70% less…」）
- 1970 → 2025：8.30、+729.64%、年均 3.92%、最高 13.5%（1980）；2025 → 1980：25.60、「Prices in 1980 were 74.40% lower…3.07% a year」；2024 → 2025：只写累计 +2.61%、隐藏最高 / 最低
- 固定通胀率：−2% × 3 年 → 941.19、算式「(1 − 2.00%)^3」、不翻倍说明；0% → 1,000.00；2% × 40 年 → 2,208.04、35 年翻倍、9 行抽样表、实际 1,500 → 实际 −32.07%；3.5% × 10 年 → 1,410.60、20.15 年
- 报错：同一年份；金额 −5；实际金额 0；通胀率 200；年数 2.5
- Clear：清空输入、恢复 CPI 模式与 2000 → 2025、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2 / YMYL disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
