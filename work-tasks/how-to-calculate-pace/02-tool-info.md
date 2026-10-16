# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-pace`  
**路径**：`/tools/how-to-calculate-pace`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #43，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文偏薄（FAQ 一句答「Convert to km first.」「Educational only.」；Use cases 各一句）。功能缺口：

- 「pace calculator」SERP（Runner's World、calculator.net、Omni、Strava 类）主意图：**三向**（求配速 / 求完赛时间 / 求距离）+ **km 与英里双单位** + 分段计时；本页只能「公里 + 分钟 → 配速」→ **部分满足**；
- 不支持英里、h:mm:ss 时间输入、比赛距离预设（半马 21.0975 km、全马 42.195 km）；无分段表、无成绩预测。

## 与站内相邻工具的分工

- `how-to-calculate-heart-rate`：心率区间（训练强度）。本页只算配速 / 时间 / 距离。
- `how-to-calculate-one-rep-max`：力量训练（原 related 保留）。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：比赛前把目标成绩换成配速和每公里 / 每英里节点时间；跑后核对手表数据的平均配速；按英里写的训练计划换成 min/km；田径场 400 m 圈速
- [x] 竞品（Runner's World Pace Calculator、calculator.net Pace Calculator、Omni Running Pace）：多数给三向计算与单位切换；少有同屏 km / mile 双配速 + km/h / mph + 400 m 圈速、可抄写的分段表、带适用条件说明的 Riegel 预测、精确比赛距离与纯数字按分钟的输入容错
- [x] 缺口：三向；英里；h:mm:ss；预设；分段；预测
- [x] 增益：① 三种模式 ② 距离单位 km / mi / m，配速单位 /km 或 /mi ③ 结果同时给 /km 与 /mi、km/h 与 mph、400 m 圈速 ④ 计算过程行（时间换成秒 ÷ 距离）⑤ 分段表（逐公里或逐英里累计用时，终点行）⑥ Riegel 预测 5K / 10K / 半马 / 全马（输入距离 1.5–42.2 km 时显示，含适用条件）⑦ 比赛距离预设（400 m、1 mile、5K、10K、半马、全马）⑧ 时间输入容错（h:mm:ss、m:ss、纯数字按分钟、小数逗号）
- [x] 权威：Wikipedia — Pace (speed)；Wikipedia — Peter Riegel（1977 / 1981 耐力公式）
- [x] Related：`how-to-calculate-one-rep-max`、`how-to-calculate-heart-rate`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Pace Calculator — Find Running Pace, Finish Time or Distance in min/km or min/mile |
| Description (en) | Calculate running pace from distance and time, finish time from pace, or distance from time. Get min/km and min/mile, km/h and mph, 400 m laps, splits and race predictions. |
| related | how-to-calculate-one-rep-max, how-to-calculate-heart-rate |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-pace`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Pace Calculator — Find Running Pace, Finish Time or Distance in min/km or min/mile**；zh：**配速计算器 — 算出跑步配速，也能按配速推算完赛时间或跑了多远** |
| 次要关键词 → desc/FAQ | how to calculate running pace → FAQ q1 + Formula 1；min/km to min/mile → FAQ q2 + Formula 4 + 结果 Pace 行；half marathon / marathon pace（sub 2 / sub 4）→ FAQ q3 + 预设；race time predictor → FAQ q4 + 预测表；GPS pace difference → FAQ q5；time format → FAQ q6 + hint；pace vs speed → FAQ q7 + Speed 行 |
| 用户搜索习惯判断 | 工具名向（pace calculator / running pace calculator）；H1 以工具名开头，副句含三种任务与两种单位 |
| 优化摘要 | 保留 slug；H1 由「Pace Calculator — min/km and Speed」改为工具名 + 三任务 + 双单位；desc 写三向、min/km 与 min/mile、km/h 与 mph、400 m、splits、predictions |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| pace calculator / running pace calculator | 吸（主词） | title / H1 |
| min per km to min per mile / pace converter | 吸 | 结果 Pace 行；FAQ q2；Formula 4 |
| finish time calculator / marathon pace calculator / half marathon pace | 吸 | 求完赛时间模式；预设；FAQ q3 |
| race time predictor / Riegel formula | 吸 | 预测表；FAQ q4；Formula 5 |
| split calculator / pace band | 吸 | 分段表；Use case 1 |
| km/h to min/km / speed to pace | 吸（说明性） | Speed 行；FAQ q7 |
| treadmill speed to pace（以速度为输入） | **不吸** | 仅 FAQ q7 给换算式；不另设输入 |
| VO2max / training zones / age grading | **不吸** | 心率区间工具在 Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 配速计算器，仍成立 |
| 主检索词任务 | 「求配速 / 完赛时间 / 距离，km 或英里」——改写前仅公里 + 分钟 → 配速 → **部分满足**；改写后三模式 + 双单位 + 分段 + 预测 → **满足** |
| 超出 | 无第二工具抢首屏 |
| 有意不满足 | 以速度（km/h、mph）为输入；坡度 / 天气修正；年龄分级 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 模式：求配速（默认）/ 求完赛时间 / 求距离
- 预设：自定义 / 400 m / 1 mile / 5K（默认）/ 10K / 半马 21.0975 km / 全马 42.195 km；手动改距离或单位时预设回到「自定义」；小数逗号语种（de / es / pt / fr / ru / id）预设填 21,0975
- 距离：数字（小数点或逗号）+ km / mi / m；时间：h:mm:ss、m:ss 或纯数字（分钟，可带小数）；冒号后各段须 < 60；配速：m:ss + /km 或 /mi
- 结果：主结果；计算过程；配速 /km · /mi；速度 km/h · mph；400 m 圈速；分段表（距离单位为 mi 时逐英里，否则逐公里；最多约 50 行；不足 1 单位时隐藏）；Riegel 预测（输入距离 1.5–42.2 km 时显示；与输入同距离的行加粗并显示实际用时）
- 求距离模式：距离单位选 m 时按 km 输出；同时给另一单位
- 报错：距离缺失 / 非正 / 非数字；时间格式错（含 25:75）；配速缺失
- 样例轮换：5K 25:00 求配速（默认，Example 一致）→ 半马 5:30/km 求完赛时间 → 1:00:00 以 8:00/mi 求距离（单位 mi）
- Clear 清空全部输入、恢复求配速 / 自定义距离 / km、隐藏结果，不重载样例；进度 HUD：不适用

## 固定数字

- 5 km 25:00 → 5:00/km = 8:03/mi；12.00 km/h = 7.46 mph；400 m 圈速 2:00；分段 5:00 / 10:00 / 15:00 / 20:00 / 25:00
- Riegel（自 5K 25:00）：10K 52:07、半马 1:55:00、全马 3:59:47
- 半马 5:30/km → 21.0975 × 330 s = 6962 s = 1:56:02；8:51/mi；10.91 km/h
- 1:00:00 @ 8:00/mi → 7.5 mi（12.07 km）；4:58/km；7.50 mph
- 6:00/km = 9:39/mi；8:00/mi = 4:58/km
- 破 2 小时半马 / 破 4 小时全马：5:41/km（约 9:09/mi）→ 1:59:54 / 3:59:48；5:42/km 已超时
- 400 m 1:30 → 3:45/km

## 验收记录（2026-10-15，英文本地预渲染页）

- 三个样例输出与上表一致（含计算过程行、分段表末行「Finish · 21.0975 km 1:56:02」、预测表）
- 400 m 预设 1:30 → 3:45/km，分段表与预测表隐藏；3,5 km 17:30 → 5:00/km；纯数字 25 → 25:00；25,5 → 25:30；全马 5:41/km → 3:59:48；求距离 45:00 @ 6:00/km（单位 m）→ 7.5 km（4.66 mi）
- 报错：距离为空；1.2.3；时间 25:75；abc；配速为空
- Clear：清空输入、恢复求配速与 km、隐藏配速输入与结果
- 窄屏（575 px）无横向滚动

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×2 / References ×2 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
