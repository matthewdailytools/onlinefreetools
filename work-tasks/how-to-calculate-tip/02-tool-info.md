# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-tip`  
**路径**：`/tools/how-to-calculate-tip`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #35，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（How 一句、FAQ 四问是「Sample?」「Payment app?」这类一句话问答；Formula 条目是「Not a payment processor」等非公式内容）。功能缺口：

- 只有账单 / 小费% / 人数三个输入，`toFixed(2)` 直接除，三人分 102.40 显示 34.13 × 3 = 102.39，分不平；
- 不能按税前金额计小费，不能输入已给的小费金额反算比例，没有取整（向上凑整是最常见的付款方式）；
- 没有常用比例对照，错误只有一句通用提示，Clear 只 reset 表单。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：算出小费与总额；多人 AA 每人付多少；按税前计；凑整后实际给了百分之几；某个小费金额相当于百分之几
- [x] 竞品（calculator.net tip / omnicalculator tip / Google 内置 tip calculator / tipcalc 类小站）：多为账单 × 比例 + 人数平均，少有按分精确分摊、税前基数、取整后实际比例、反算比例并列
- [x] 缺口：分不平的分钱问题；税前 / 含税基数；取整三种口径；反算比例
- [x] 增益：① 按分精确分摊（102.40 ÷ 3 → 34.14 + 34.13 + 34.13）② 税前基数 + 折合含税比例（16.00 = 18.52%）③ 取整：小费 / 总额 / 每人份额向上取整并给出实际比例（41.00 × 4 → 19.27%）④ 金额反算比例（10 ÷ 64 = 15.63%）⑤ 10–25% 对照表并高亮当前 ⑥ FAQ：心算 15% / 20%、税前还是税后、各地习惯（引 Emily Post）、服务费 ⑦ 权威引用
- [x] 权威：Wikipedia — Gratuity；Emily Post Institute — General tipping guide（已核：餐桌服务 15–20% pre-tax、自助 10%、出租车 / 美发 15–20%）
- [x] Related：`how-to-calculate-vat`、`how-to-calculate-discount`、`how-to-calculate-percentage-change`、`how-to-calculate-salary-hourly`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Tip Calculator — Work Out the Tip and Split the Bill Evenly, Down to the Cent |
| Description (en) | Calculate the tip on any bill and split the total between people, with the cents shared out so every share adds up exactly. Tip on the amount before tax, round up the tip, the total or each share, find what percentage a tip was, and compare 10–25% side by side. |
| related | how-to-calculate-vat, how-to-calculate-discount, how-to-calculate-percentage-change, how-to-calculate-salary-hourly |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-tip`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Tip Calculator — Work Out the Tip and Split the Bill Evenly, Down to the Cent**；zh：**小费计算器 — 按比例算出小费，并把账单精确分摊到每个人** |
| 次要关键词 → desc/FAQ | how to calculate tip / 15% / 20% tip → How + FAQ q1 + 快捷按钮；split bill with tip → 每人行 + FAQ q3 + Use case 1；tip before or after tax → 税额输入 + 计费基数 + FAQ q2；how much to tip → FAQ q4；tip percentage calculator（已知金额求比例）→ 金额模式 + FAQ q5；round up tip → 取整选项 + FAQ q6；service charge vs tip → FAQ q7；gratuity → References |
| 用户搜索习惯判断 | 结果向（小费多少、每人多少）；「split the bill」是第二意图，写进副句；不把税 / 取整 / 对照表串进 H1 |
| 优化摘要 | 保留 slug；H1 由「Tip Amount and Split」改为动作句 + 精确到分；desc 去掉「Everyday receipt math in your browser」空话，写清分摊、税前、取整、反算、对照 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| tip calculator / how to calculate tip | 吸（主词） | title / H1；How |
| 15 / 18 / 20 percent tip | 吸 | 快捷按钮；对照表；FAQ q1 |
| split bill with tip / bill splitter | 吸 | 人数 + 每人行；FAQ q3；Use case 1 |
| tip on pre-tax or after-tax | 吸 | 税额 + 计费基数；FAQ q2 |
| how much to tip | 吸（说明性） | FAQ q4（引 Emily Post；他语写当地习惯） |
| tip percentage calculator（金额 → 比例） | 吸 | 金额模式；FAQ q5 |
| round up tip / round up bill | 吸 | 取整选项；FAQ q6；Use case 4 |
| service charge vs tip | 吸 | FAQ q7 |
| tip pooling / tip-out（员工分小费） | **不吸**（另一任务：雇主 / 员工分配） | — |
| sales tax calculator | **不吸**（已有工具） | Related（VAT） |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 小费计算器，仍成立 |
| 主检索词任务 | 「算出小费并分摊」——改写前分摊不平（34.13 × 3 = 102.39）、无税前、无取整 → **不满足**；改写后：按分分摊、税前基数、三种取整与实际比例、反算、对照表 → **满足** |
| 超出 | 无第二工具抢首屏；对照表在结果区下方 |
| 有意不满足 | 员工小费分配（tip pooling）、多币种换算、按人点单分别计价 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：账单金额；账单中已含税额（选填）；计费基数（税前 / 含税，未填税额时禁用）；小费方式（百分比 / 金额）；小费；人数（1–100 整数，留空按 1）；取整（不取整 / 小费向上取整 / 总额向上取整 / 每人份额向上取整）
- 快捷按钮 10 / 15 / 18 / 20 / 25%：切到百分比方式并立即计算；按钮文字按页面语言格式化
- 计算：全部以「分」为整数；小费 = 基数 × p（四舍五入到分）；总额 = 账单 + 小费；取整只向上；每人份额向上取整时总额 = 份额 × n
- 输出：小费（主结果）+「p of 基数」；总额；每人（除不尽时「r × (q+1) + (n−r) × q = 总额」）；每人小费；计算过程（税前基数、小费、取整、总额、人均 = / ≈、折合含税比例）；对照表 10 / 15 / 18 / 20 / 22 / 25% + 当前比例（不在列表时插入），每人列为按分分摊后的最大份额
- 报错：账单（≤ 0 / 非数字）、税额（< 0 或 ≥ 账单）、小费（< 0 或 > 1000%）、人数（非整数 / 超范围）；报错时隐藏明细
- 小数逗号语种：逗号作小数点，`1.000,50` 识别为千分位；样例小数按本地小数点填入
- 样例轮换：80 + 15%（默认，Example 一致）→ 86.40 含税 6.40、税前 20%、3 人 → 137.50、18%、4 人、每人向上取整
- Clear 只清空、恢复默认选项，不重载样例；进度 HUD：不适用

## 固定数字

- 样例 1：80.00 × 15% = 12.00；总额 92.00；对照 10% 8.00 / 18% 14.40 / 20% 16.00 / 22% 17.60 / 25% 20.00
- 样例 2：基数 86.40 − 6.40 = 80.00；小费 16.00；总额 102.40；1 × 34.14 + 2 × 34.13；每人小费 5.33；折合含税 18.52%；按含税计则 17.28、103.68、每人 34.56
- 样例 3：137.50 × 18% = 24.75；162.25 ÷ 4 = 40.5625 → 41.00 × 4 = 164.00，小费 26.50（19.27%）；总额取整 163.00、小费 25.50（18.55%）；小费取整 25.00（18.18%）、2 × 40.63 + 2 × 40.62
- 心算：64.00 的 10% = 6.40、20% = 12.80、15% = 9.60、18% = 11.52；金额 10.00 / 64.00 = 15.63%

## 验收记录（2026-10-15，英文本地预渲染页）

- 三个样例输出与上表一致；第四次点击回到样例 1
- 金额模式：64 + 10 → 15.63%，标签切为「Tip amount」，对照表插入 15.63% 行并高亮
- 快捷按钮 20%：切回百分比方式，64 → 12.80 / 76.80
- 取整总额 / 取整小费 / 含税基数输出与上表一致；137.50 × 15% = 20.625 → 20.63（四舍五入到分）
- 报错：账单留空、税额 = 账单、小费 −1、人数 1.5、人数 0、账单 `abc`，均显示对应提示并隐藏明细
- Clear：清空输入、恢复百分比 / 不取整、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
