# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-velocity`  
**路径**：`/tools/how-to-calculate-velocity`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #40，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文近乎空壳（FAQ「Sample? → 100/20=5.」「Vectors? → Not here.」；Formula 三条各几个词；Use cases「Physics homework.」）。功能缺口：

- 「velocity calculator / speed distance time calculator」SERP（Omni、calculator.net、Calculator Soup）主意图：三量互求 + 单位换算；本页只能 d ÷ t、无单位 → **不满足**；
- 无平均速度 vs 速度简单平均、无速度与速率（位移 vs 路程）区别；
- 报错一句笼统提示，Clear 只 reset；`type="number"` 不接受千分位 / 小数逗号。

## 与站内相邻工具的分工

- `how-to-calculate-acceleration`：v = v₀ + at 等匀加速关系。本页只做匀速 / 平均速度，FAQ q7 指向加速度工具。
- `how-to-calculate-pace`：跑步配速（min/km）。本页给速度与完赛时间，不做配速表。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：作业求速度 / 距离 / 时间；比赛成绩换算速度；出行估时；往返或分段行程的真实平均速度
- [x] 竞品（Omni Velocity Calculator、calculator.net Speed Calculator、Calculator Soup Speed Distance Time）：多为三量互求 + 单位下拉；少有写出单位换算步骤、一次列出全部单位、分段行程真实平均速度与「速度简单平均」偏差、位移输入得平均速度矢量大小
- [x] 缺口：三量互求；单位换算步骤；h:mm:ss；分段平均速度；位移 vs 路程
- [x] 增益：① 三量互求 ② 结果单位随输入自动匹配 ③ 换算步骤（如 90 min = 1.5 h）④ 全单位换算行（m/s、km/h、mph、ft/s、kn；距离 m/km/mi/ft/nmi；时间 h/min/s）⑤ 时间结果 h:mm:ss ⑥ 分段行程平均速度 + 简单平均误区 ⑦ 可选直线距离 → 平均速度矢量大小（往返为 0）⑧ FAQ：速度 vs 速率、负速度、瞬时 vs 平均
- [x] 权威：Wikipedia — Velocity；Wikipedia — Speed；单位系数按精确定义（1 mi = 1,609.344 m、1 ft = 0.3048 m、1 nmi = 1,852 m）
- [x] Related：`how-to-calculate-acceleration`、`how-to-calculate-pace`、`how-to-calculate-density`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Velocity Calculator — Find Speed, Distance or Time With Unit Conversion and Working |
| Description (en) | Calculate velocity from distance and time with v = d ÷ t, or solve for distance or time, in m/s, km/h, mph, ft/s or knots. Shows the formula, each unit conversion step and examples, plus true average speed over a multi-part trip. |
| related | how-to-calculate-acceleration, how-to-calculate-pace, how-to-calculate-density |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-velocity`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Velocity Calculator — Find Speed, Distance or Time With Unit Conversion and Working**；zh：**速度计算器 — 知道距离和时间就能求速度，也能反求路程或用时并自动转换单位** |
| 次要关键词 → desc/FAQ | how to calculate velocity → FAQ q1 + How；speed vs velocity → FAQ q2 + Formula 5 + 平均速度行；m/s to km/h → FAQ q3 + Formula 3 + 换算行；time from distance and speed → 求时间模式 + FAQ q4；average speed of round trip → 分段模式 + FAQ q5 + Formula 4；negative velocity → FAQ q6；instantaneous vs average → FAQ q7 |
| 用户搜索习惯判断 | 结果向；「speed, distance or time」覆盖 speed distance time calculator 搜法（标题检查未判枚举） |
| 优化摘要 | 保留 slug；H1 由「Distance over Time」改为三量互求 + 单位换算 + 过程；desc 写 calculate、v = d ÷ t、单位列表、formula、conversion step、examples、分段平均速度 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| velocity calculator / how to calculate velocity | 吸（主词） | title / H1；FAQ q1 |
| speed distance time calculator | 吸 | 三模式；H1 副句 |
| average speed calculator | 吸 | 求速度模式；分段模式 |
| m/s to km/h / mph conversion | 吸 | 换算行；FAQ q3；Formula 3 |
| how long will it take (time calculator) | 吸 | 求时间模式；FAQ q4 |
| average speed round trip | 吸 | 分段模式；FAQ q5 |
| speed vs velocity / displacement | 吸 | 平均速度行；FAQ q2；Formula 5 |
| negative velocity | 吸（说明性） | FAQ q6 |
| final velocity / v = u + at | **不吸**（加速度工具） | FAQ q7 → Related |
| running pace calculator | **不吸**（配速工具） | Related |
| vector velocity components (2D) | **不吸** | FAQ q6 说明本页按大小计算 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 速度计算器，仍成立 |
| 主检索词任务 | 「求速度（或距离 / 时间），带单位」——改写前只有无单位 d ÷ t → **不满足**；改写后：三量互求 + 单位 + 换算步骤 + 分段平均速度 → **满足** |
| 超出 | 无第二工具抢首屏；分段模式作为第四选项 |
| 有意不满足 | 匀加速、二维矢量分量、配速表 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 模式：求速度（默认）/ 求距离 / 求时间 / 多段行程平均速度
- 单位：距离 m、km、mi、ft、nmi；时间 s、min、h；速度 m/s、km/h、mph、ft/s、kn（符号可本地化）
- 求速度：结果单位按距离单位（m → m/s、km → km/h、mi → mph、ft → ft/s、nmi → kn），时间先换算为 s 或 h 并写出换算步骤；换算行列出 5 种速度单位
- 求距离：结果单位按速度单位（km/h → km 等）；换算行列出 5 种距离单位
- 求时间：距离先换算成速度单位对应的距离单位；主结果 h:mm:ss（秒保留 1 位小数）；换算行 h / min / s
- 多段行程：单位制 km·km/h / mi·mph / m·m/s；最多 3 段（第 3 段可全空）；各段用时；平均速度 = 总距离 ÷ 总时间；简单平均不等时显示偏高多少；可选直线距离（0 ≤ 位移 ≤ 总路程）→ 平均速度矢量大小
- 输入：文本框 + inputmode=decimal；千分位、小数逗号、窄空格容错
- 报错：非数字；距离为负 / 空；时间 ≤ 0；速度 ≤ 0（求时间）或为负（求距离）；分段缺项；位移越界
- 样例轮换：100 m / 9.58 s（默认，Example 一致）→ 马拉松 42.195 km @ 12 km/h → 65 mph × 2.5 h → 往返 60 km @ 60 / 40 km/h、位移 0
- Clear 只清空、恢复求速度模式与默认单位（m、s、km/h、公制），不重载样例；进度 HUD：不适用

## 固定数字

- 100 m ÷ 9.58 s = 10.4384 m/s → 10.44 m/s = 37.58 km/h = 23.35 mph = 34.25 ft/s = 20.29 kn（博尔特 2009 年柏林 100 m 世界纪录 9.58 s）
- 42.195 km ÷ 12 km/h = 3.5163 h = 210.98 min = 12,658.5 s → 3:30:58.5
- 65 mph × 2.5 h = 162.5 mi = 261.52 km = 858,000 ft = 141.21 nmi
- 往返：1 h + 1.5 h = 2.5 h → 48 km/h；简单平均 50 km/h 偏高 2 km/h；位移 0 → 平均速度 0
- 换算：1 m/s = 3.6 km/h = 2.2369 mph = 3.2808 ft/s = 1.9438 kn；10 m/s = 36 km/h = 22.37 mph；90 km/h = 25 m/s；400 m 跑道一圈 80 s → 速率 5 m/s、平均速度 0

## 验收记录（2026-10-15，英文本地预渲染页）

- 四个样例输出与上表一致（含「part 1: 60 km ÷ 60 km/h = 1 h; part 2: … = 1.5 h」、常见错误行、平均速度 0 km/h）
- 换算步骤：5 km / 90 min → 「90 min = 1.5 h」、3.33 km/h；1,500 ft / 2 min → 「2 min = 120 s」、12.5 ft/s；10 mi @ 50 km/h → 「10 mi = 16.09344 km」、0:19:18.7；20 kn × 30 min → 10 nmi、18.52 km
- 分段：3 段英制（10 @ 30、20 @ 60、5 @ 15、位移 25）→ 35 mph，各段用时相等故隐藏常见错误行，平均速度 25 mph；SI 两段 → 5 m/s、0:00:40
- 报错：「abc」；时间 0；求时间速度 0；求距离缺时间；分段缺速度；第 3 段只填距离；位移 150 > 总路程 120
- Clear：清空全部输入、恢复求速度模式与 m / s / km/h、隐藏结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×3 / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
