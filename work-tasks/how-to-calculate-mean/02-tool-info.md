# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-mean`  
**路径**：`/tools/how-to-calculate-mean`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-13（薄页逐页改写队列 #1，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-13）

审计 `04-tool-ig-audit.csv`：en 正文 116 词；Use case / FAQ 为一句话（"Homework averages."、"Rejected."）；zh description 同句重复三次、FAQ「见公式节」；无 How 步骤、无 Why choose。另发现功能缺陷：分隔正则在模板字符串里被吃成 `/[s,;]+/`，空格/换行分隔的输入（从表格粘贴一列）会被当成一个数。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：给一组数求平均（多数是算术平均），想看到怎么算出来的；少数人要几何/调和平均
- [x] 竞品（通用均值计算器）：多为单框 + 结果；部分给 sum/count；很少说明三种平均何时用、很少处理小数逗号
- [x] 缺口：计算过程可见；三种平均对照；粘贴表格列；小数逗号；报错点名具体值；何时改用中位数 / 加权
- [x] 增益：① 计算过程（sum ÷ n）② 三种平均并列 ③ 可复现例子（收益率几何平均、往返速度调和平均、异常值拉高均值）④ AM ≥ GM ≥ HM ⑤ 权威引用（NIST e-Handbook）⑥ 小数逗号输入规则
- [x] 权威：Wikipedia — Mean；NIST/SEMATECH e-Handbook — Measures of location
- [x] Related：`how-to-calculate-median`、`how-to-calculate-standard-deviation`、`how-to-calculate-gpa`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Mean Calculator — Find the Average of a List, with Working |
| Description (en) | Calculate the mean (average) of a list as sum ÷ count, with the working shown. Paste a spreadsheet column, or switch to geometric or harmonic mean for rates. |
| related | how-to-calculate-median, how-to-calculate-standard-deviation, how-to-calculate-gpa |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-mean`（与 "how to calculate mean" 搜法一致；已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Mean Calculator — Find the Average of a List, with Working**（mean calculator + average）；zh：**平均数计算器 — 求一组数的平均值，附计算过程** |
| 次要关键词 → desc/FAQ | how to calculate mean → How 总答 + FAQ q1；average → title/desc/FAQ q2；geometric / harmonic mean → desc + Formula；paste from Excel → How 步 1 + FAQ q4；mean vs median → FAQ q3 + Use case 2 |
| 用户搜索习惯判断 | 结果向 title（求平均值 + 过程），不罗列三种模式名进 H1 |
| 优化摘要 | 保留 slug；H1 由「Average of a Number List」改为「Find the Average of a List, with Working」，突出可见计算过程；desc 去掉 "Browser-only" 空话，写 sum ÷ count 与粘贴表格 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| mean calculator | 吸（主词） | title / H1 |
| how to calculate mean / how to find the mean | 吸 | How 总答；FAQ q1（手算 4, 8, 9 → 7） |
| average calculator / calculate average of numbers | 吸 | title（Average）；desc；FAQ q2 |
| arithmetic mean | 吸 | Formula 正文；类型选项 |
| geometric mean calculator | 吸 | desc；Formula item 2（收益率例）；FAQ q5 |
| harmonic mean calculator | 吸 | desc；Formula item 3（往返速度例） |
| mean of numbers from excel / paste list | 吸 | How 步 1；Why choose 3；FAQ q4 |
| mean vs median | 吸（一句划界 + 指向） | FAQ q3；Use case 2 |
| mean of decimals / decimal comma | 吸 | FAQ q4（分号 + 小数逗号） |
| weighted mean / weighted average calculator | **不吸**（需权重输入，主控件不同） | FAQ q6 一句划界 → GPA 计算器 / 重复值 |
| mode calculator / median calculator | **不吸**（异意图，另有工具） | related → how-to-calculate-median |
| mean absolute deviation / standard deviation | **不吸** | related → how-to-calculate-standard-deviation |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 平均数计算器，仍成立 |
| 主检索词任务 | 「给一组数求平均并知道怎么算」——改写前只给结果、空格分隔输入失效 → **部分满足**；改写后：How 先答 sum ÷ count，结果区显示个数与计算过程，粘贴列可用 → **满足** |
| 超出 | 无第二工具抢首屏；三种平均对照只是结果区一行，不另开表单 |
| 有意不满足 | 加权平均、中位数/众数：FAQ 一句 + related，不改 H1 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：数字列表；空格 / 逗号 / 换行 / Tab 分隔；**出现分号时**按分号分隔并把逗号视为小数点（2,5; 3,5）
- 类型：算术（默认）/ 几何 / 调和；几何与调和要求所有值 > 0
- 输出：平均数；个数 n；计算过程（算术 `sum ÷ n = mean`；几何 `(product)^(1/n) = G`，乘积过大时 `exp(Σln ÷ n)`；调和 `n ÷ Σ(1/x) = H`）；三种平均对照行
- 数字格式：最多 4 位小数，按页面语言的小数点（Intl `{lang}-u-nu-latn`）
- 报错：空输入；非数字（点名该值）；几何/调和遇到 ≤0
- 样例：`1, 2, 3, 4, 5` 算术 → 平均 3；个数 5；过程 15 ÷ 5 = 3；对照 几何 2.6052、调和 2.1898
- 进页自动 loadSample；进度 HUD：不适用（一帧出结果）

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose / Formula / Example / Use cases ×4 / FAQ ×7 / Related / References
- [x] `03-locale-briefs.md` 已按当地搜法重填
