# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-quadratic-equation`  
**路径**：`/tools/how-to-calculate-quadratic-equation`  
**主方向**：C  
**catalog 分类**：`calculator`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #29，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：How 不足 3 步、无 Why choose、九语为旧稿。旧页只有 a、b、c 三格 + 实根与判别式，功能缺口：

- **判别式 < 0 只说「无实根」**：初高中课本与作业要求写出复数根（−1 ± 2i），主流解题器（Mathway、Symbolab、Calculator.net、Omni）都给出；
- **只给小数**：作业要求「最简根式」（−1 ± √2）或分数（1/2），旧页只给 0.4142 / 0.5；
- 不接受分数系数（1/2、−3/4）；
- 无因式分解、顶点式、顶点、对称轴、y 截距、韦达定理——这些是同一道题的常见追问；
- 无过程（代入判别式、代入公式），无法核对手算；
- a = 0 时无提示；
- 无抛物线图。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：写作业 / 备考时，把方程整理成 ax² + bx + c = 0，算出判别式与根（精确形式和小数），并顺带得到因式分解、顶点式等后续小题的答案，用过程核对自己的手算
- [x] 竞品（Mathway、Symbolab、Calculator.net、Omni、Wolfram|Alpha）：分步过程多需付费或登录；免费页常只给小数；分数系数与 a = 0 处理不一
- [x] 缺口：免费逐行过程；精确根（分数 / 最简根式 / 复数）与小数并列；分数系数自动通分；因式分解 + 顶点式 + 韦达同页；a = 0 退化为一次方程
- [x] 增益：① 分数 / 小数 / 负号（含 − 与逗号）输入 ② 方程预览 ③ 判别式 + 根的情况 ④ 精确根（分数、最简根式 2√2、复数 2i / i√3）⑤ 小数根（2 / 4 / 6 位，数值稳定公式）⑥ 因式分解（含公因数、重根平方）⑦ 顶点式与顶点（精确分数）⑧ 对称轴、y 截距、开口与最值 ⑨ 韦达定理核对 ⑩ 过程有序列表 ⑪ 抛物线 SVG 图（根与顶点标点）⑫ Example：2x² + 3x − 2 = 0 → Δ 25 → 1/2、−2 → (2x − 1)(x + 2) → 顶点 (−3/4, −25/8) ⑬ Use cases：竖直上抛落地 ≈ 4.16 s；长方形面积 40 m² → 宽 5 m ⑭ FAQ ×7 ⑮ 引用（Wolfram MathWorld — Quadratic Equation；Wikipedia — Discriminant）
- [x] Related：`how-to-calculate-slope`（一次函数 / 直线）、`how-to-calculate-pythagorean-theorem`（同年级代数几何）、`how-to-calculate-exponent`（乘方 / 根式）、`how-to-calculate-acceleration`（竖直上抛运动方程）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | 纯前端；分数有理运算（gcd）+ 浮点；数值稳定求根 q = −(b + sign(b)√Δ) ÷ 2；SVG 图；`page.style: opts` |
| Title (en) | Quadratic Equation Solver — Solve ax² + bx + c = 0 Step by Step with the Quadratic Formula |
| Description (en) | Solve any quadratic equation with the quadratic formula and see each step: the discriminant, exact roots as fractions, square roots or complex numbers, the factored and vertex form, and a graph of the parabola. Example: 2x² + 3x − 2 = 0 → x = 1/2 and x = −2. |
| related | how-to-calculate-slope, how-to-calculate-pythagorean-theorem, how-to-calculate-exponent, how-to-calculate-acceleration |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-quadratic-equation`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Quadratic Equation Solver — Solve ax² + bx + c = 0 Step by Step with the Quadratic Formula**；他语按 03 当地搜法（一元二次方程计算器 / 求根公式、二次方程式 解の公式、ecuación de segundo grado、fórmula de Bhaskara、équation du second degré、Mitternachtsformel、квадратное уравнение через дискриминант、rumus ABC 等） |
| 次要关键词 → desc/FAQ | quadratic formula → How + Formula + FAQ q1；discriminant → 判别式行 + FAQ q2；complex / imaginary roots → 精确根 + FAQ q3；simplest radical form → 精确根 + FAQ q4；fractions → 输入提示 + FAQ q5；a = 0 → FAQ q6；factoring / completing the square → 因式分解、顶点式 + FAQ q7；vertex form / axis of symmetry → 结果行 + Formula item 4；Vieta → Formula item 5；projectile → Use case 3 |
| 用户搜索习惯判断 | 搜者要「解出来 + 看步骤」；H1 写结果（solve ax² + bx + c = 0 step by step），不罗列 Δ / 顶点 / 韦达等参数 |
| 优化摘要 | 保留 slug；H1 由「Roots and Discriminant」改为分步求解；desc 写判别式 / 精确根 / 因式分解 / 顶点式 / 图 + 可验证例子；FAQ 由 3 条扩为 7 条 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| quadratic equation solver / calculator | 吸（主词） | title / H1 |
| quadratic formula / how to solve quadratic equations | 吸 | How；Formula body；FAQ q1 |
| discriminant / nature of roots | 吸 | 判别式行 + 根的情况；FAQ q2；Formula item 1–3 |
| complex roots / imaginary roots / no real solution | 吸 | 精确根（a ± bi）；FAQ q3 |
| simplest radical form / exact answer | 吸 | 精确根行；FAQ q4；Why choose 1 |
| quadratic with fractions / decimals | 吸 | 输入提示；FAQ q5；Why choose 2 |
| factoring quadratics / factor calculator | 吸 | 因式分解行；FAQ q7 |
| vertex form / vertex / axis of symmetry / completing the square | 吸 | 结果行；Formula item 4；FAQ q7 |
| sum and product of roots / Vieta | 吸 | 韦达行；Formula item 5 |
| quadratic word problems (projectile, area) | 吸 | Use case 3–4 |
| graphing parabola | 吸（作辅助） | SVG 图；Use case 2 |
| cubic / quartic equation solver | **不吸**（另一类方程与公式） | — |
| system of equations / inequalities | **不吸**（不同任务） | — |
| linear equation solver | **不单列**（a = 0 时退化处理，不作主意图） | FAQ q6 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 本工具无独立 Planner 文件；主词与长尾按上表（2026-10-14 同意图检索整理）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 一元二次方程求解，仍成立 |
| 主词搜索者任务 | 「解出这道题并看步骤」——改写前只有小数实根、无过程、无复数根 → **部分满足**；改写后精确根、复数根、过程、因式分解、顶点式、图 → **满足** |
| 超出 | 韦达与图属于核对 / 辅助，放在结果下方，不占主界面 |
| 有意不满足 | 三次 / 四次方程、方程组、不等式：未吸 |
| 总判 | 满足（已回写 How、控件、FAQ、desc） |

## 交互规格

- 输入：a、b、c 文本框，接受整数、小数、分数 p/q、Unicode 负号 − 与小数逗号；空格视为 0；下方实时方程预览（全空时显示 ax² + bx + c = 0）
- 小数位：2 / 4（默认）/ 6
- a ≠ 0：判别式（含精确值）、根的情况、小数根（数值稳定）、精确根（系数化为最简整数 A > 0，|系数| ≤ 1e6 时给出；分数 / 最简根式 / 复数 i 在根号前）、因式分解（Δ 为完全平方时；含公因数；重根写平方）、顶点式与顶点（精确分数）、对称轴、y 截距、开口与最值、韦达、过程列表、SVG 图
- a = 0：按一次方程 bx + c = 0；b = 0 时提示无解 / 恒成立
- 报错：无法解析的系数
- 样例：2、3、−2 → Δ = 25 → x = 1/2、−2；进页自动运行
- Clear：清空输入与结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×4 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×4 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填

## 验收记录（2026-10-14，英文本地预渲染页）

- 样例 2x² + 3x − 2 → Δ 25，x = 1/2、−2，(2x − 1)(x + 2)，顶点 (−3/4, −25/8)，y = 2(x + 3/4)² − 25/8
- x² − 5x + 6 → 2、3；x² + 2x − 1 → −1 ± √2；x² + 2x + 5 → −1 ± 2i；x² − 6x + 9 → 重根 3，(x − 3)²；x² + 3 → x = ± 1.7321i
- 分数 1/2、−1、−4 → (1/2)(x − 4)(x + 2)；负 a → −(x − 3)(x + 1)；0.5、0.2、0.02 → y = (1/2)(x + 1/5)²，顶点 (−1/5, 0)
- 竖直上抛 −4.9、20、1.5 → (100 ± √10735)/49 ≈ 4.1553；a = 0 → 一次方程；a = b = 0 → 无解 / 恒成立
- 报错：非数字系数显示提示；Clear 预览恢复 ax² + bx + c = 0 且不重载样例
