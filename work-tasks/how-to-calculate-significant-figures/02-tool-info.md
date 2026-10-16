# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-significant-figures`  
**路径**：`/tools/how-to-calculate-significant-figures`  
**主方向**：A  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #42，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文偏薄（FAQ 一句答「Away from zero」「So forms like 0.00304 keep…」；Use cases 各一句；无加减乘除规则）。功能缺口：

- 「significant figures calculator / sig fig calculator」SERP（Calculator Soup、Omni、calculator.net、chemistry 类）主意图：数有效数字 + 修约 + **按有效数字规则做运算**；本页无运算 → **部分满足**；
- 修约用浮点（`Math.floor(scaled + 0.5)`），0.125、1.005 类边界会出错；只有一种舍入；
- 不标注哪些位有效、不提示 1200 的歧义；不认 `6.02 × 10^23`、小数逗号。

## 与站内相邻工具的分工

- `how-to-calculate-scientific-notation`：普通记数 ↔ 科学记数转换。本页只在结果里给出保留有效数字的科学记数写法。
- `how-to-calculate-z-score`：统计标准分（原 related 保留，同属 math-stats）。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：化学 / 物理作业数测量值有几位有效数字；实验报告把结果修约到合理精度；多步运算时判断用乘除规则还是加减规则
- [x] 竞品（Calculator Soup Sig Fig Calculator、Omni Sig Fig Calculator、calculator.net）：多数给计数 + 修约 + 运算；少有逐位标注原因、1200 类歧义的范围（2–4 位）与改写建议、四舍六入五成双对照、精确十进制（无浮点误差）说明
- [x] 缺口：运算规则；逐位标注；歧义提示；五成双；科学记数多写法输入
- [x] 增益：① 逐位着色（有效 / 占位零 / 歧义尾零）+ 各类计数 ② 1200 类歧义：给出可能范围与 1.200 × 10³ / 1200. 写法 ③ 修约：字符串十进制运算，0.125 → 0.13（四舍五入）/ 0.12（五成双），并显示另一规则结果 ④ 修约步骤：保留末位、位值、下一位 ⑤ 修约后若普通写法显示位数不足（1299.7 → 1300）提示改写为 1.30 × 10³ ⑥ 加减乘除：BigInt 精确结果 + 规则说明（乘除取最少位数；加减取最粗小数位）⑦ 输入容错：千分位、小数逗号（按页面语言）、1.20e3、6.02 × 10^23、上标 10²³、Unicode 负号 ⑧ 精度（到哪一位 / 几位小数）
- [x] 权威：Wikipedia — Significant figures；Wikipedia — Rounding（五成双为 IEEE 754 默认舍入、ISO 80000-1 推荐）
- [x] Related：`how-to-calculate-scientific-notation`、`how-to-calculate-z-score`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Significant Figures Calculator — Count Sig Figs, Round a Number and Calculate With Sig Fig Rules |
| Description (en) | Count significant figures in any number and see which digits count, round to any number of sig figs with round half up or half to even, and add, subtract, multiply or divide with the sig fig rules. Shows scientific notation and the steps. |
| related | how-to-calculate-scientific-notation, how-to-calculate-z-score |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-significant-figures`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Significant Figures Calculator — Count Sig Figs, Round a Number and Calculate With Sig Fig Rules**；zh：**有效数字计算器 — 数出有几位有效数字，还能修约到指定位数并按规则做加减乘除** |
| 次要关键词 → desc/FAQ | how to count sig figs → FAQ q1 + How 1；1200 sig figs / trailing zeros → FAQ q2 + Formula 4 + 歧义行；leading zeros → FAQ q3 + Formula 3；sig fig rules addition multiplication → FAQ q4 + Formula 5–6 + 运算模式；round to sig figs → FAQ q5 + 修约模式；exact numbers → FAQ q6；intermediate rounding → FAQ q7 + 运算结果注释 |
| 用户搜索习惯判断 | 工具名向（significant figures calculator / sig fig calculator）；H1 以全称开头，副句含 sig figs 简称与三种任务 |
| 优化摘要 | 保留 slug；H1 由「How to Count and Round Sig Figs」改为工具名 + 三任务；desc 写 count、which digits count、round half up / half to even、四则运算、scientific notation、step |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| significant figures calculator / sig fig calculator | 吸（主词） | title / H1 |
| sig fig counter / how many significant figures | 吸 | 计数模式；FAQ q1–q2 |
| rounding significant figures / round to 3 sig figs | 吸 | 修约模式；FAQ q5 |
| sig fig rules for addition / multiplication | 吸 | 运算模式；Formula 5–6；FAQ q4 |
| trailing zeros significant / leading zeros | 吸 | Formula 3–4；FAQ q2–q3；逐位标注 |
| round half to even / banker's rounding | 吸（说明性） | 舍入方式选项；alt 行；FAQ q5 |
| significant figures in scientific notation | 吸 | 结果科学记数行；输入 6.02 × 10^23 |
| scientific notation converter | **不吸**（相邻工具） | Related |
| decimal places rounding（按小数位修约） | **不吸** | 精度行仅说明；不另设模式 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 有效数字计算器，仍成立 |
| 主检索词任务 | 「数 / 修约 / 按规则运算」——改写前仅计数 + 浮点修约、无运算 → **部分满足**；改写后三模式 + 逐位标注 + 精确十进制 → **满足** |
| 超出 | 无第二工具抢首屏 |
| 有意不满足 | 多步表达式求值（只做两数一次运算，FAQ q7 说明多步做法）；按小数位修约 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 模式：数有效数字（默认）/ 修约到 N 位 / 两数加减乘除
- 输入：文本框；忽略空格、窄空格、撇号；单逗号在小数逗号语种（de/es/pt/fr/ru/id）为小数点，在其他语种若符合 1,234 分组则为千分位；逗号与点并存时后出现者为小数点；多点视为分组；科学记数 `e` / `× 10^` / `*10^` / 上标；Unicode 负号
- 计数：首个非零位起；夹在中间的零有效；有小数点时尾零有效；无小数点的整数尾零为歧义（不计，提示范围与写法）；全零 → 说明零无有效数字、精度看小数位
- 修约：N 为 1–30 整数；四舍五入（5 远离零）或四舍六入五成双；字符串运算；位数不足补零（2 → 2.00）；进位（99999 → 1.0 × 10⁵）；普通写法显示位数不足时提示改写；显示另一规则结果（不同时）
- 运算：BigInt 精确；乘除结果位数 = 两数有效位数较小者（任一为零 → 报错；除以零单独报错）；除法不尽时显示 12 位近似并用粘滞位保证修约正确；加减修约到两数末位有效数字中较粗的一位
- 限制：最多 40 位数字、10 的幂次 −100…100
- 报错：非数字；第二个数缺失；N 越界；除以零；乘除含零；超限
- 样例轮换：数 0.004050（默认，Example 一致）→ 1299.7 修约 3 位 → 4.56 × 1.4 → 12.11 + 18.0；小数逗号语种样例自动换成逗号
- Clear 清空全部输入、恢复计数模式 / 四舍五入 / 乘法、隐藏结果，不重载样例；进度 HUD：不适用

## 固定数字

- 0.004050 → 4 位（非零 2、中间零 1、尾零 1、前导零 3）；4.050 × 10⁻³；精度 0.000001（6 位小数）
- 1200 → 2 位（可能 2–4）；1200. → 4；1.20 × 10³ → 3；150 → 2（可能 2–3）
- 6.02 × 10²³ → 3；-1.20E-3 → 3
- 1299.7 修约 3 位 → 1300 = 1.30 × 10³（保留末位 9 在十位，下一位 9 进位）
- 2.45 修约 2 位：四舍五入 2.5 / 五成双 2.4；0.125 修约 2 位：0.13 / 0.12
- 2 修约 3 位 → 2.00；99999 修约 2 位 → 100000 = 1.0 × 10⁵
- 4.56 × 1.4 = 6.384 → 6.4；12.11 + 18.0 = 30.11 → 30.1；10 ÷ 3.0 ≈ 3.33333333333 → 3；1200 + 3.5 = 1203.5 → 1200；5.00 − 5.004 = −0.004 → 0.00

## 验收记录（2026-10-15，英文本地预渲染页）

- 四个样例输出与上表一致（含逐位着色、修约步骤「last digit kept is 9 in the 10 place… rounds up」与 1300 歧义提示、乘法规则行、加法规则行）
- 计数：1200（歧义提示 2–4）、1200.（4）、6.02 × 10²³（3，精度 10²¹）、1,200（en 千分位 → 2）、1.234,5（→ 1234.5，5 位）、0.00（零说明）、-1.20E-3（3）、150、0.5
- 修约：2.45 / 2、0.125 / 2 五成双、2 / 3 补零、99999 / 2 进位
- 运算：10 ÷ 3.0、1200 + 3.5、5.00 − 5.004、2.0 ÷ 0 报错
- 报错：abc；N = 0
- Clear：清空输入、恢复计数模式、隐藏 N 与舍入方式、隐藏结果

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×6 / Example / Use cases ×4 / FAQ ×7 / Related ×2 / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
