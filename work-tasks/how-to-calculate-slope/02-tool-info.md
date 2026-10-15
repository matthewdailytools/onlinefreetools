# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-slope`  
**路径**：`/tools/how-to-calculate-slope`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #34，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（How 一段、FAQ 四问一句话答；description 带「Browser learning tool」空话）。功能缺口：

- 只输出一个小数斜率，分数坐标无法输入，−2/3 只能看到 −0.666667；
- 没有直线方程（斜截式 / 点斜式 / 一般式）、截距、角度、坡度百分比——这是「slope calculator」搜索者最常要的后续结果；
- 竖直线只报错，不说明 x = c 与「斜率不存在」；没有已知一点 + 斜率的用法；Clear 只 reset 表单。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：由两点求斜率并写出直线方程；把斜率换算成角度 / 坡度；坡道、屋面 1 : n
- [x] 竞品（calculator.net slope / omnicalculator / mathway / symbolab）：多给小数斜率 + 角度 + 距离；少有精确分数、三种方程形式并列、竖直 / 水平线逐项说明、坡道 1 : n
- [x] 缺口：分数输入与精确约分；斜截式 + 点斜式 + 一般式；截距特例（过原点 / 坐标轴本身）；1 : n
- [x] 增益：① 精确分数（(−2, 3)、(4, −1) → −2/3、b = 5/3）② 三种方程（y = −(2/3)x + 5/3、y − 3 = −(2/3)(x + 2)、2x + 3y = 5）③ 角度 / 坡度 / 1 : n（1/12 → 4.76°、8.33%）④ 垂线斜率 ⑤ 距离化简根式（√20 = 2√5、√52 = 2√13）与中点 ⑥ FAQ：正负零不存在、点的顺序、100% 坡度 = 45°、1 : 12 坡道 ⑦ 权威引用
- [x] 权威：Wikipedia — Slope；Wikipedia — Linear equation
- [x] Related：`how-to-calculate-pythagorean-theorem`、`how-to-calculate-quadratic-equation`、`how-to-calculate-triangle-area`、`how-to-calculate-gradient`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Slope Calculator — Find the Slope Between Two Points and the Equation of the Line, Step by Step |
| Description (en) | Calculate the slope of a line from two points, or from one point and a slope. Fractions stay exact, the working is shown, and you also get y = mx + b, point-slope and standard form, the intercepts, the angle, percent grade, the perpendicular slope, distance and midpoint. |
| related | how-to-calculate-pythagorean-theorem, how-to-calculate-quadratic-equation, how-to-calculate-triangle-area, how-to-calculate-gradient |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-slope`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Slope Calculator — Find the Slope Between Two Points and the Equation of the Line, Step by Step**；zh：**斜率计算器 — 输入两个点求出斜率并写出直线方程，附计算过程** |
| 次要关键词 → desc/FAQ | how to find slope from two points → How + FAQ q1；slope formula → Formula 1；equation of a line from two points / slope intercept form → 方程行 + FAQ q3；point slope form → 点斜模式 + 方程行；standard form → 方程行 + FAQ q3；undefined / zero slope → 竖直 / 水平行 + FAQ q2；slope to angle / percent grade → 角度行 + 坡度行 + FAQ q4；perpendicular slope → 垂线行 + FAQ q6；1:12 ramp slope → Use case 2 + FAQ q7 + 样例 3；distance / midpoint → 距离 / 中点行 + Formula 5 |
| 用户搜索习惯判断 | 结果向（斜率是多少）+ 过程向（怎么算、方程怎么写）；「step by step」作副句；不把角度 / 坡度 / 距离 / 中点串进 H1 |
| 优化摘要 | 保留 slug；H1 由「How to Calculate Slope Between Two Points」改为含 equation of the line 与 step by step；desc 去掉空话，写清精确分数、三种方程、截距、角度、坡度、垂线、距离、中点 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| slope calculator / find the slope | 吸（主词） | title / H1 |
| how to find slope from two points / slope formula | 吸 | How；Formula 1；FAQ q1 |
| equation of a line through two points | 吸 | 方程行；FAQ q3 |
| slope intercept form calculator | 吸 | 斜截式行；Formula 2 |
| point slope form calculator | 吸 | 点斜模式；点斜式行 |
| standard form of a line | 吸 | 一般式行；FAQ q3 |
| undefined slope / zero slope | 吸 | 竖直 / 水平处理；FAQ q2 |
| slope to angle / slope percentage | 吸 | 角度行；坡度行；Formula 3；FAQ q4 |
| perpendicular slope | 吸 | 垂线行；Formula 4；FAQ q6 |
| ramp slope 1:12 / roof pitch to degrees | 吸 | 1 : n 行；Use case 2–3；FAQ q7 |
| distance formula / midpoint formula | 吸（次要） | 距离 / 中点行；Formula 5 |
| linear regression slope（多点拟合） | **不吸**（另一工具类型） | — |
| multivariable gradient | **不吸**（已有工具） | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 斜率计算器，仍成立 |
| 主检索词任务 | 「两点求斜率并能写出直线方程」——改写前只给小数斜率、竖直线只报错 → **不满足**；改写后：精确分数、代入算式、三种方程、截距、角度 / 坡度、垂线、距离 / 中点 → **满足** |
| 超出 | 无第二工具抢首屏；角度 / 坡度 / 距离 / 中点只作结果旁的附加行 |
| 有意不满足 | 多点线性回归、两直线交点 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：模式（两点 / 一点 + 斜率）；x₁、y₁、x₂、y₂ 或 m；整数、小数（按页面小数点）、分数 a/b、负号（含真减号 −）
- 计算：BigInt 分数精确约分；m = Δy ÷ Δx；b = y₁ − m·x₁
- 输出：斜率（最简分数 ≈ 4 位小数）+ 方向说明；算式行（两点模式含 m 代入；均含 b 代入，乘除运算数为负或分数时加括号）；斜截式、点斜式、一般式（整数系数、A ≥ 0）；截距（含过原点、x 轴 / y 轴本身特例）；θ = arctan(m)；坡度 %；升高 : 水平（|m| < 1 时附 ≈ 1 : n）；垂线斜率；两点模式：距离（整数平方和化简根式，分数完全平方写精确值）与中点；点斜模式：第二个点 (x₁ + q, y₁ + p)
- 竖直线：主结果「不存在」，斜截式说明无法写成 y = mx + b，一般式 x = c（分数时 qx = p），θ = 90°，垂线斜率 0，隐藏坡度 / 比例
- 报错：留空（两种模式各自提示）；非数字 / 分母为 0（点名原文）；两点重合
- 小数逗号语种坐标用分号分隔（(2; 4)）
- 样例轮换：(1, 2)(3, 6)（默认，Example 一致）→ (−2, 3)(4, −1) → 一点 (0, 0) + m = 1/12
- Clear 只清空、恢复两点模式，不重载样例；进度 HUD：不适用

## 固定数字

- 样例 1：m = 4 ÷ 2 = 2；b = 0；y = 2x；2x − y = 0；63.43°；200%；2 : 1；垂线 −1/2；√20 = 2√5 ≈ 4.4721；中点 (2, 4)
- 样例 2：m = −4 ÷ 6 = −2/3 ≈ −0.6667；b = 5/3；y = −(2/3)x + 5/3；y − 3 = −(2/3)(x + 2)；2x + 3y = 5；x 截距 5/2；−33.69°；−66.67%；−2 : 3 ≈ −1 : 1.5；垂线 3/2；√52 = 2√13 ≈ 7.2111；中点 (1, 1)
- 样例 3：m = 1/12 ≈ 0.0833；y = (1/12)x；x − 12y = 0；4.76°；8.33%；1 : 12；垂线 −12；第二点 (12, 1)
- 其他：4/12 屋面 → 18.43°；(2, 120)(5, 300) → 60

## 验收记录（2026-10-15，英文本地预渲染页）

- 三个样例输出与上表一致
- 竖直 x = 3/2 → 「Undefined」、2x = 3、x 截距 (3/2, 0)、θ = 90°、垂线 0；x = 0 → y 轴本身
- 水平 y = 3 → m = 0、y − 3 = 0、无 x 截距、垂线「Undefined」；y = 0 → x 轴本身
- 小数 (0.5, 1.25)(2, −0.75) → −2 ÷ (3/2) = −4/3、b = 23/12、16x + 12y = 23、√(25/4) = 5/2
- 点斜 (2, −1) + −3/4 → y + 1 = −(3/4)(x − 2)、3x + 4y = 2、第二点 (6, −4)；0.0833 → 833/10000 ≈ 1 : 12.0048
- 报错：两点重合；`x`；留空；`1/0`
- Clear：清空输入、恢复两点模式、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
