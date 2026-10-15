# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-median`  
**路径**：`/tools/how-to-calculate-median`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #32，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（How 一句；FAQ「Sample? / Multimodal? / Empty? / Advice?」；Formula 列表含「Pair with mean / SD tools」）。功能缺陷：

- 模板字符串里 `\s` 丢失成 `s`，空格 / 换行分隔的数字被错误解析（`1\n2\n3` 读成 1）；
- 众数逻辑错误：所有值只出现一次时仍报「最小值」为众数；多众数只返回一个；
- 无排序展示、无奇偶位置推导；无分组数据（频数表）中位数 / 众数——这是教材与搜索的主力问法。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：求一组数据的中位数（和众数），看懂奇偶怎么取；作业里常是分组数据（频数表）的中位数 / 众数公式
- [x] 竞品（calculator.net / calculatorsoup / omnicalculator / Cuemath 类）：列表型多为只给数值；分组数据另开页且常不处理不连续组限；「无众数」常被处理成最小值或全列
- [x] 缺口：同页列表 + 分组；排序高亮中间值；奇偶位置推导；全部众数 / 无众数；分组公式代入过程；组限 → 组界自动换算；平均数对照与偏态提示
- [x] 增益：① 排序 + 高亮（3 5 7 7 8 9 12 41 → 7.5）② 众数如实（双众数 4 和 7；1 2 3 无众数）③ 分组中位数代入（20 + (20 − 13) ÷ 12 × 10 = 25.83）④ 分组众数（25.71）与组中值平均数（25.75）⑤ 不连续组限（10–19 … → 33.79 / 33.14）⑥ 平均数 11.5 vs 中位数 7.5 偏态提示 ⑦ FAQ：偶数个、无 / 多众数、何时用中位数、分组、组限、是否先排序、与 Excel MEDIAN / MODE 对照 ⑧ 权威引用
- [x] 权威：NIST/SEMATECH e-Handbook — Measures of Location；Wikipedia — Median for grouped data
- [x] Related：`how-to-calculate-mean`、`how-to-calculate-standard-deviation`、`how-to-calculate-z-score`、`how-to-calculate-sample-size`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Median and Mode Calculator — For a List of Numbers or Grouped Data, with Steps |
| Description (en) | Calculate the median and mode of a list of numbers or a grouped frequency table. See the sorted list with the middle values highlighted, how odd and even counts are handled, every mode (or no mode), the mean, and the grouped formula L + (N/2 − cf) ÷ f × h worked out. |
| related | how-to-calculate-mean, how-to-calculate-standard-deviation, how-to-calculate-z-score, how-to-calculate-sample-size |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-median`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Median and Mode Calculator — For a List of Numbers or Grouped Data, with Steps**；zh：**中位数和众数计算器 — 一组数据或分组数据（频数表）都能算，附计算过程** |
| 次要关键词 → desc/FAQ | how to find the median → How 总答 + 4 步 + Working 行；median of even numbers → Formula 2 + FAQ q1；median of grouped data → 分组模式 + Formula 4 + FAQ q4；mode of grouped data → Formula 5 + 众数行；no mode / bimodal → 众数行 + FAQ q2；median vs mean → 偏态提示 + FAQ q3；class boundaries → 自动换算 + FAQ q5；Excel MEDIAN / MODE → FAQ q7 |
| 用户搜索习惯判断 | 结果向 + 过程向（with steps）；「list or grouped data」是主修饰，放副标题 |
| 优化摘要 | 保留 slug；H1 由「Median and Mode Calculator」扩为含 list / grouped data / steps；desc 写清排序高亮、奇偶、众数、平均数与分组公式 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| median calculator / median and mode calculator | 吸（主词） | title / H1 |
| how to find the median | 吸 | How 总答 + 4 步；Working 行 |
| median of even set of numbers | 吸 | Formula 2；FAQ q1；样例 1 |
| median of grouped data / grouped data calculator | 吸 | 分组模式；Formula 4；FAQ q4；样例 3 |
| mode of grouped data | 吸 | 众数行；Formula 5 |
| no mode / bimodal | 吸 | 众数行；Formula 3；FAQ q2；样例 2 |
| median vs mean | 吸 | 偏态提示；FAQ q3 |
| class boundaries 10–19 | 吸 | 组界换算提示；FAQ q5 |
| excel median / mode function | 吸 | FAQ q7；Use case 4 |
| mean calculator / standard deviation | **不吸**（已有工具） | Related |
| quartiles / percentile / box plot | **不吸**（另一任务） | — |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 中位数与众数计算器，仍成立 |
| 主检索词任务 | 「求中位数（含分组数据）并看懂过程」——改写前空格 / 换行解析错、众数错、无分组 → **不满足**；改写后：列表 + 分组、排序高亮、位置推导、公式代入、众数如实 → **满足** |
| 超出 | 平均数 / 极差只作对照行，不抢首屏 |
| 有意不满足 | 四分位数 / 百分位数：不做 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 模式：数字列表 / 分组数据（单选，切换时隐藏结果）
- 列表：逗号（小数点为「.」的语种）/ 空格 / 换行 / 分号 / 竖线分隔；小数逗号语种逗号为小数点；Unicode 减号；最多 10000 个
- 分组：每行取三个非负数「下限 上限 频数」（`10-20 8`、`10–19: 8` 均可）；最多 100 组；组须升序不重叠；组间有统一间隔时上下各扩半个间隔为组界
- 输出（列表）：中位数、个数、排序列表（中间值高亮，> 300 个时只显示首尾与中间附近）、奇偶位置推导、众数（单个 / 多个 / 无众数两种说法）、平均数、极差、偏态提示（|平均数 − 中位数| > 极差 10%）
- 输出（分组）：中位数（2 位小数）、N、代入过程、众数（公式 / 并列众数组 / 公式失效用组中值）、Σf·x ÷ N、组界换算提示、累计频数表（中位数组与众数组高亮）
- 报错：空输入；非数字记号（点名）；无法读取的行（点名）；重叠组（点名）；总频数 0；超量
- 样例轮换：12 5 8 3 9 7 41 7（默认，Example 一致：7.5、众数 7、平均 11.5）→ 2 4 4 5 7 7 9（5、众数 4 和 7）→ 分组 0-10 5 / 10-20 8 / 20-30 12 / 30-40 9 / 40-50 6（25.83、25.71、25.75）
- Clear 清空两个输入框并回到列表模式，不重载样例；进度 HUD：不适用

## 验收记录（2026-10-15，英文本地预渲染页）

- 样例 1：7.5（位置 4 和 5：(7 + 8) ÷ 2）；众数 7（2 次）；平均 11.5；极差 41 − 3 = 38；偏态提示出现
- 样例 2：5（位置 4）；众数 4, 7；平均 5.4286；无偏态提示
- 样例 3：25.83（20 + (20 − 13) ÷ 12 × 10）；众数 25.71；平均 1,030 ÷ 40 = 25.75；累计频数 5 / 13 / 25 / 34 / 40
- 不连续组限 10-19 4 … 50-59 5：提示间隔 1、首组 9.5–19.5；中位数 33.79、众数 33.14、平均 34.25
- 并列众数组提示；重叠组 5–20 点名；坏行 `abc` 点名；1 2 3 → 无众数（各一次）；1 1 2 2 → 无众数（各 2 次）；`x` 点名；−2.5 4 −1 → −1（Unicode 减号可用）
- Clear：回到列表模式、两个框清空、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
