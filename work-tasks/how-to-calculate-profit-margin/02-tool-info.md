# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-profit-margin`  
**路径**：`/tools/how-to-calculate-profit-margin`  
**主方向**：C  
**YMYL**：是（财务；须 disclaimer + 权威引用）  
**最近改写**：2026-10-15（薄页逐页改写队列 #39，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（FAQ 四问答各一句，如「Sample? → 30% margin」；Formula 只有「(revenue − costs) / revenue」；「净利 / 营业利润率」只是同一公式换标签）。功能缺口：

- 「profit margin calculator」SERP（calculator.net、Omni、Shopify、Investopedia）主意图：算利润率 + 区分毛利 / 营业 / 净利 + 按目标利润率定价；本页只能输入一个笼统「成本」，三级利润率**不满足**；
- 无利润率 ↔ 加价率换算、无定价模式、无亏损文案、无成本结构；
- 报错一句笼统提示，Clear 只 reset；`type="number"` 不接受千分位 / 小数逗号。

## 与站内相邻工具的分工（防 doorway / 同义页）

- `how-to-calculate-gross-margin`：只算毛利率（销售额 − 销货成本）。本页的增量是三级利润率 + 同比例结构表 + 定价模式。
- `how-to-calculate-markup`：从成本与售价算加价率。本页只在结果里附「同一笔利润的加价率」，以及目标利润率定价的常见错误演示。
- `how-to-calculate-contribution-margin`、`how-to-calculate-break-even`：单位变动成本 / 保本点，互链，不重复。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：从损益表算毛利率 / 营业利润率 / 净利率；看哪类成本吃掉利润；按目标利润率定价；理解 margin vs markup
- [x] 竞品（calculator.net Margin Calculator、Omni Profit Margin Calculator、Shopify profit margin calculator、Investopedia）：多为「成本 + 售价 → 利润率」单一比率；少有一次给出三级利润率 + 每 100 销售额去向表；定价模式少有演示「把利润率当加价率」实际只得多少
- [x] 缺口：三级利润率；同比例结构表；加价率对照；定价模式 + 常见错误；亏损文案
- [x] 增益：① 净利率主结果 + 「每 100 销售额剩多少」② 毛利 / 营业 / 净利三行算式 ③ 销货成本加价率 ④ 同比例损益表（common-size）⑤ 目标利润率定价：售价、单位利润、加价率 ⑥ 「成本 × (1 + 利润率)」常见错误实际利润率与少赚金额 ⑦ 亏损时负利率 + 亏损文案 ⑧ FAQ：好的利润率因行业而异、能否为负或超过 100%、EBIT / EBITDA 利润率
- [x] 权威：Investopedia — Profit margin；Investopedia — Operating margin
- [x] Related：`how-to-calculate-gross-margin`、`how-to-calculate-markup`、`how-to-calculate-contribution-margin`、`how-to-calculate-break-even`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Profit Margin Calculator — See How Much of Every Sale You Keep as Profit, or Price for a Target Margin |
| Description (en) | Calculate gross, operating and net profit margin from sales and costs, with the formula and working for each step and a breakdown of where every 100 of sales goes. Or enter a cost and target margin to get the selling price, with examples. |
| related | how-to-calculate-gross-margin, how-to-calculate-markup, how-to-calculate-contribution-margin, how-to-calculate-break-even |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-profit-margin`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Profit Margin Calculator — See How Much of Every Sale You Keep as Profit, or Price for a Target Margin**；zh：**利润率计算器 — 看清每笔销售里留下多少利润，并按目标利润率算出售价** |
| 次要关键词 → desc/FAQ | how to calculate profit margin → FAQ q1 + How；gross vs operating vs net margin → desc + FAQ q2 + Formula 1–3；margin vs markup → FAQ q3 + Formula 5 + 加价率行；price for target margin / margin pricing → 定价模式 + FAQ q4 + Formula 4；good profit margin → FAQ q5；negative margin → 亏损样例 + FAQ q6；EBITDA margin → FAQ q7 |
| 用户搜索习惯判断 | 结果向；H1 不罗列三种利润率（标题检查判为参数枚举），三级利润率进 desc 首句 |
| 优化摘要 | 保留 slug；H1 由「Net or Operating Margin」改为结果向 + 定价；desc 写 calculate、三级利润率、formula、working、breakdown、目标利润率定价、examples |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| profit margin calculator / how to calculate profit margin | 吸（主词） | title / H1；FAQ q1 |
| net profit margin formula | 吸 | 主结果；Formula 3 |
| gross vs operating vs net margin | 吸 | 三行算式；FAQ q2 |
| operating margin calculator | 吸 | 营业利润率行；Formula 2 |
| margin vs markup / margin to markup | 吸 | 加价率行；Formula 5；FAQ q3 |
| price from margin / how to price for 30% margin | 吸 | 定价模式；FAQ q4 |
| what is a good profit margin | 吸（说明性） | FAQ q5 |
| negative profit margin | 吸 | 亏损样例；FAQ q6 |
| EBITDA margin | 吸（次要） | FAQ q7 |
| gross margin calculator（单独） | **不吸主位**（站内另有工具） | 结果内毛利率行 + Related |
| markup calculator（成本+售价） | **不吸主位** | Related |
| industry average margins by sector | **不吸**（无可核实数据集嵌入） | FAQ q5 说明按同行比较 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 利润率计算器，仍成立 |
| 主检索词任务 | 「算我的利润率 / 定价」——改写前只能输入一个总成本，净利 / 营业利润率是同一公式换标签 → **部分满足**；改写后：三级利润率 + 结构表 + 定价模式 → **满足** |
| 超出 | 无第二工具抢首屏；定价模式作为第二选项 |
| 有意不满足 | 行业平均利润率数据、税务计算、多产品组合定价 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 模式：利润表（默认）/ 目标利润率定价
- 利润表输入：销售额（必填 > 0）；销货成本、营业费用（≥ 0，可空 = 0）；利息、税费及其他（净额，可空 = 0，可为负表示其他收入大于利息税费）
- 利润表输出：净利率（主）；「每 100 销售额剩 x」或亏损文案；毛利 / 营业 / 净利三行「利润 ÷ 销售额 = 比率」；销货成本加价率（销货成本为 0 时说明未定义）；同比例结构表 7 行（销售额、− 销货成本、= 毛利、− 营业费用、= 营业利润、− 利息税费等、= 净利）
- 定价输入：单位成本（> 0）；目标利润率 0 ≤ m < 100
- 定价输出：售价 = 成本 ÷ (1 − m)（主）；单位利润及占售价比例；算式；单位利润 = 售价 − 成本；加价率；m > 0 时演示「成本 × (1 + m)」实际利润率与少赚金额
- 输入：文本框 + inputmode=decimal；千分位、小数逗号、窄空格容错
- 报错：销售额缺失或 ≤ 0；非数字；销货成本 / 营业费用为负；单位成本 ≤ 0；目标利润率越界
- 样例轮换：250,000 / 150,000 / 60,000 / 12,000（默认，Example 一致）→ 亏损店 80,000 / 52,000 / 31,000 → 成本 40、目标 25%
- Clear 只清空、恢复利润表模式与提示，不重载样例；进度 HUD：不适用

## 固定数字

- 样例 1：毛利 100,000（40.00%）、营业利润 40,000（16.00%）、净利 28,000（11.20%）；加价率 66.67%；结构表 销货成本 60%、营业费用 24%、利息税费 4.8%
- 样例 2：毛利 28,000（35.00%）、营业利润 −3,000（−3.75%）、净利 −3,000（−3.75%）；加价率 53.85%；成本合计 83,000
- 样例 3：售价 53.33、单位利润 13.33、加价率 33.33%；误用 40 × 1.25 = 50.00 → 利润率 20.00%、少赚 3.33
- 换算：25% 利润率 = 33.33% 加价率；50% 加价率 = 33.33% 利润率；成本 80、目标 50% → 160.00，误用 120.00 → 33.33%
- EBITDA 例：营业费用含折旧 8,000 → EBITDA 48,000、EBITDA 利润率 19.2%

## 验收记录（2026-10-15，英文本地预渲染页）

- 样例 1：主结果 11.20%、「Out of every 100 in sales, 11.20 is left as net profit.」、三行算式与加价率 66.67%、结构表 7 行（100% / 60% / 40% / 24% / 16% / 4.80% / 11.20%）
- 样例 2：−3.75%、「Costs are higher than sales: every 100 in sales loses 3.75.」、营业利润 −3,000.00
- 样例 3：53.33；算式「40.00 ÷ (1 − 25.00%) = 53.33」；常见错误行「…= 50.00, which is only a 20.00% margin and 3.33 less profit per unit.」
- 边界：12,500.50 千分位 + 其他收入 −500 → 净利率 88.00%、结构表「−500.00 / −4.00%」、销货成本 0 → 加价率未定义；目标 0% → 40.00 且隐藏常见错误行；成本 80、目标 50% → 160.00 / 33.33%
- 报错：销售额空、「abc」、销货成本 −5、目标 100%、单位成本 0，均隐藏明细并给出对应提示
- 修复：留空的成本被误判为非数字（`isNaN(undefined)`），改为 `invalid()` 只拦「填了但不是数字」
- Clear：清空全部输入、恢复利润表模式与提示、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×4 / References ×2 / YMYL disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
