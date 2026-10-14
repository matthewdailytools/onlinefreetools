# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-scientific-notation`  
**路径**：`/tools/how-to-calculate-scientific-notation`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #11，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文 200 词；Use case / FAQ 各一句；无 How 步骤、无 Why choose。实测功能缺陷：

- 科学 → 小数用 `a * Math.pow(10, b)` 再 `String()`：`6.022e23` 展开仍输出 `6.022e+23`（没写成小数）；`4.35×10^2` 得 `434.99999999999994`（浮点误差）。
- 需要手动选方向；输入 `4.5 × 10⁻⁴`（教材上标）、`1.23E+04`（Excel）无法解析上标。
- 整数末尾 0 的有效数字歧义（12300）未提示，无法指定有效数字。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把一个数写成 a×10ⁿ（或反过来写成普通小数），并知道小数点移了几位、指数正负怎么定
- [x] 竞品（calculatorsoup / omnicalc / mathsisfun 类）：多为方向选择 + 结果；部分给 E 记数与工程记数；很少解释末尾 0 的有效数字歧义与 UK/US「standard form」差异
- [x] 缺口：自动识别方向；移位过程文字；精确展开长常数；上标/E/Excel 输入；有效数字选项；工程记数 SI 前缀
- [x] 增益：① 移位过程（n 位、左/右、指数正负）② 四种写法一次给出 ③ 字符串精确移位（4.35×10² → 435）④ 未规范系数提示（45.6×10³ → 4.56×10⁴）⑤ 有效数字歧义 + 选项 ⑥ 乘除规则 FAQ ⑦ UK standard form 划界 ⑧ 权威引用（NIST SI 前缀）
- [x] 权威：Wikipedia — Scientific notation；NIST — Metric (SI) prefixes
- [x] Related：`how-to-calculate-significant-figures`、`how-to-calculate-exponent`、`how-to-calculate-logarithm`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Scientific Notation Calculator — Convert to and from Decimal Form, with Steps |
| Description (en) | Convert any number to scientific notation (a × 10ⁿ) or back to a decimal, with the decimal-point moves shown. Also gives E notation, engineering notation and significant figures. |
| related | how-to-calculate-significant-figures, how-to-calculate-exponent, how-to-calculate-logarithm |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-scientific-notation`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Scientific Notation Calculator — Convert to and from Decimal Form, with Steps**；zh：**科学计数法计算器 — 小数和科学记数法互相转换，附移位步骤** |
| 次要关键词 → desc/FAQ | convert to scientific notation → How 总答 + FAQ q1；scientific notation to decimal/standard → FAQ q2；E notation → 结果行 + FAQ q4；engineering notation → 结果行 + FAQ q7；significant figures → 选项 + FAQ q6；multiply scientific notation → FAQ q3；standard form (UK) → FAQ q5 |
| 用户搜索习惯判断 | 结果向 title（互转 + 步骤），不把四种写法名全串进 H1 |
| 优化摘要 | 保留 slug；H1 由「How to Convert Scientific Notation」改为「Convert to and from Decimal Form, with Steps」；desc 写 a × 10ⁿ、移位过程、E/工程/有效数字 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| scientific notation calculator | 吸（主词） | title / H1 |
| scientific notation converter / convert to scientific notation | 吸 | title（Convert）；How 总答；FAQ q1 |
| how to write in scientific notation / how to do scientific notation | 吸 | How 总答 + 4 步；Formula 规则 |
| scientific notation to standard form / to decimal | 吸 | title（Decimal Form）；FAQ q2；结果「Decimal form」 |
| standard form calculator (UK) | 吸（划界） | FAQ q5（UK = a×10ⁿ；US = 普通数） |
| e notation / what does e mean on a calculator | 吸 | 结果行；FAQ q4；输入接受 e/E |
| engineering notation calculator | 吸 | 结果行 + SI 前缀；FAQ q7；Use case 4 |
| scientific notation significant figures | 吸 | 有效数字选项；FAQ q6；Why choose 5 |
| multiplying / dividing scientific notation | 吸（规则 + 规范化） | FAQ q3；Use case 3（45.6×10³ → 4.56×10⁴） |
| adding scientific notation calculator（两数运算表单） | **不吸**（需第二操作数，主控件不同） | FAQ q3 一句：先化同指数 |
| significant figures calculator（独立计数/修约） | **不吸**（另有工具） | related → how-to-calculate-significant-figures |
| exponent calculator / logarithm | **不吸** | related → how-to-calculate-exponent / logarithm |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 科学计数法计算器，仍成立 |
| 主检索词任务 | 「把数写成 a×10ⁿ 或写回普通数，并知道怎么移位」——改写前大数展开仍是 e 记数、有浮点误差、无过程 → **部分满足**；改写后：自动识别、精确展开、Working 行写明移几位与指数正负 → **满足** |
| 超出 | 无第二工具抢首屏；E/工程/有效数字只是结果区附行 |
| 有意不满足 | 两数加减乘除表单、独立有效数字计数：FAQ + related，不改 H1 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：单框；接受 `0.00004508`、`12,300`、`6.022e23`、`1.23E+04`、`4.5 × 10^-4`、`4.5*10^-4`、`4.5 × 10⁻⁴`（上标）、`10^6`；空格/NBSP/撇号/下划线视为分组去掉
- 分隔符：点与逗号同时出现时最后出现者为小数点；仅一个逗号时按页面语言（小数逗号语种视为小数点，否则千分位）；多个同号视为千分位
- 有效数字：保留输入位数（默认；整数末尾 0 不计且提示歧义）/ 1–10 位（逢 5 进位，9…9 进位指数 +1，不足补 0）
- 输出：科学 a × 10ⁿ（上标）；E 记数（点小数）；工程记数（指数 3 的倍数 + SI 前缀 q…Q）；小数形式（|n| > 300 时提示过长）；有效数字；Working（小数输入：左/右移 n 位 → 指数；科学输入：展开方向；未规范系数先提示）
- 数字格式：系数/工程/小数用页面语言小数点（Intl `{lang}-u-nu-latn`）；E 记数始终用点
- 报错：空输入；无法解析（点名原文）；指数超过 ±100000
- 样例：进页自动 `0.00004508` → 4.508 × 10⁻⁵；E 4.508e-5；工程 45.08 × 10⁻⁶ (µ)；4 位有效数字；右移 5 位。再点「加载样例」轮换 `6.02214076e23`、`45.6 × 10^3`、`12300`
- Clear 只清空并隐藏结果，不重载样例；进度 HUD：不适用（一帧出结果）

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References
- [x] `03-locale-briefs.md` 已按当地搜法重填
