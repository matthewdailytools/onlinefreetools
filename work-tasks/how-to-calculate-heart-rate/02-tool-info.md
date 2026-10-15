# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-heart-rate`  
**路径**：`/tools/how-to-calculate-heart-rate`  
**主方向**：C  
**YMYL**：是（健康：须 disclaimer + 权威引用）  
**最近改写**：2026-10-15（薄页逐页改写队列 #36，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文极薄（FAQ 四问是「Sample?」「Medical advice?」「Symptoms?」一词问答；Formula 条目是「Pair with macros」等非公式内容；引用为空泛「CDC / ACSM-style」）。功能缺口：

- 只有 220 − 年龄一种公式，没有 Tanaka（对年长者更准）与女性公式，也不能填实测最大心率；
- 没有静息心率 / 心率储备（Karvonen）法——这是跑者与健身用户最常用的分区方式；
- 只有三个自定区间（50–60 / 60–70 / 70–85），与手表常见五区不一致；没有 AHA 中等 / 高强度目标心率；没有手动数脉搏的换算；错误只有一句通用提示。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：按年龄求最大心率；求训练心率区间（含燃脂区）；用静息心率算 Karvonen 区间；判断静息心率是否正常；不戴表时数脉搏核对
- [x] 竞品（calculator.net heart rate / omnicalculator / Garmin、Polar 说明页 / AHA 图表）：多给 220 − 年龄 + 百分比区间；少有多公式并列、Karvonen 与 % 最大心率可切换、30 秒数脉搏列、AHA 区间与五区并列
- [x] 缺口：多公式对照；Karvonen；30 秒计数；静息心率说明；实测最大心率
- [x] 增益：① 三公式并列（30 岁：190 / 187 / 180）② Karvonen（45 岁、静息 60：70% = 142 vs 124）③ 30 秒计数列（Zone 2：57–67）④ AHA 50–70% / 70–85% 与五区并列 ⑤ 静息心率按 AHA 60–100 分档说明 ⑥ FAQ：哪个公式准（Tanaka 351 项研究 / 18,712 人）、燃脂区、药物影响 ⑦ 权威引用
- [x] 权威（已核）：AHA — Target Heart Rates Chart（220 − 年龄；中等 50–70%、高强度 70–85%；30 岁 95–162；静息 60–100、运动员可低至 40；30 秒 × 2；部分药物降低最大心率；初学从 50% 起逐步到 85%）；Tanaka, Monahan & Seals 2001 JACC（208 − 0.7 × 年龄；351 项研究 18,712 人；514 人实验室验证；220 − 年龄低估年长者）
- [x] Related：`how-to-calculate-pace`、`how-to-calculate-bmr-tdee`、`how-to-calculate-bmi`、`how-to-calculate-macros`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Heart Rate Zone Calculator — Find Your Maximum Heart Rate and Training Zones from Your Age |
| Description (en) | Calculate your maximum heart rate from your age — 220 − age, the Tanaka formula, or the Gulati formula for women — or enter a measured value, and get five training zones in bpm, the AHA moderate and vigorous ranges, and the beats to count in 30 seconds. Add your resting heart rate for Karvonen zones. |
| related | how-to-calculate-pace, how-to-calculate-bmr-tdee, how-to-calculate-bmi, how-to-calculate-macros |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-heart-rate`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Heart Rate Zone Calculator — Find Your Maximum Heart Rate and Training Zones from Your Age**；zh：**心率区间计算器 — 按年龄算出最大心率，并划分五个训练心率区间** |
| 次要关键词 → desc/FAQ | max heart rate by age → 主结果 + FAQ q1；220 minus age vs Tanaka → 公式选项 + 对照行 + FAQ q2；fat burning heart rate zone → Zone 2 + FAQ q3；Karvonen formula / heart rate reserve → 算法选项 + FAQ q4；normal resting heart rate → 静息心率说明 + FAQ q5；target heart rate (AHA) → AHA 行；how to take your pulse → 30 秒列 + FAQ q6；beta blockers heart rate → FAQ q7 |
| 用户搜索习惯判断 | 结果向（我的最大心率 / 区间是多少）；「by age」放副句；不把 Karvonen / AHA / 30 秒串进 H1 |
| 优化摘要 | 保留 slug；H1 由「Heart Rate Zone Calculator」补全为动作句 + from your age；desc 写清三公式、实测值、五区、AHA、30 秒、Karvonen |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| heart rate zone calculator / training zones | 吸（主词） | title / H1；区间表 |
| max heart rate by age / 220 minus age | 吸 | 主结果；FAQ q1 |
| Tanaka formula / most accurate max HR formula | 吸 | 公式选项；对照行；FAQ q2 |
| max heart rate for women (Gulati) | 吸 | 公式选项；Formula 3 |
| fat burning heart rate | 吸 | Zone 2；FAQ q3 |
| Karvonen formula / heart rate reserve | 吸 | 算法选项；HRR 行；FAQ q4；Formula 5 |
| target heart rate for exercise (AHA moderate / vigorous) | 吸 | AHA 行；Use case 2 |
| normal resting heart rate | 吸 | 静息心率说明；FAQ q5 |
| how to check pulse | 吸 | 30 秒列；FAQ q6 |
| heart rate on beta blockers | 吸（说明性） | FAQ q7（只说「部分药物降低」+ 问医生） |
| heart rate variability (HRV) / VO2max | **不吸**（另一任务） | — |
| arrhythmia / tachycardia diagnosis | **不吸**（医疗诊断，YMYL 风险） | disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 心率区间计算器，仍成立 |
| 主检索词任务 | 「按年龄求最大心率和训练区间」——改写前只有 220 − 年龄 + 三个自定区间 → **部分满足**；改写后：三公式 / 实测值、五区、Karvonen、AHA、30 秒计数、静息说明 → **满足** |
| 超出 | 无第二工具抢首屏；不做诊断 |
| 有意不满足 | HRV、VO2max、心律失常判断 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc、disclaimer） |

## 交互规格

- 输入：最大心率来源（220 − 年龄 / Tanaka / Gulati 女性 / 实测）；年龄（10–100 整数；实测模式可留空）；实测最大心率（100–230 整数，仅实测模式显示）；静息心率（选填，30–120 整数，须小于最大心率）；区间算法（% 最大心率 / 心率储备 Karvonen，后者须填静息心率）
- 计算：Tanaka (2080 − 7A) / 10、Gulati (20600 − 88A) / 100 整数运算；最大心率四舍五入到整数后再算区间；区间边界 = round(max × p) 或 round(rest + hrr × p)
- 输出：最大心率（主结果）+ 公式代入式（非整数时「≈」）；三公式对照（有年龄时）；心率储备（填静息时）；静息心率说明（< 40 / 40–59 / 60–100 / > 100 四档，依据 AHA）；AHA 中等 50–70% 与高强度 70–85%（按最大心率）；算式示例（70%）；五区表：区 / 强度 / 范围 / bpm / 30 秒次数（bpm ÷ 2 四舍五入）
- 报错：年龄、实测最大心率、静息心率范围、静息 ≥ 最大、Karvonen 缺静息；报错时隐藏明细
- 样例轮换：30 岁 + 220 − 年龄（默认，Example 一致）→ 45 岁 + Tanaka + 静息 60 + Karvonen → 实测 185 + 静息 52 + Karvonen（年龄 38）
- Clear 只清空、恢复默认选项，不重载样例；进度 HUD：不适用

## 固定数字

- 样例 1：220 − 30 = 190；对照 Tanaka 187、Gulati 179.6 ≈ 180；区间 95–114 / 114–133 / 133–152 / 152–171 / 171–190；30 秒 48–57 / 57–67 / 67–76 / 76–86 / 86–95；AHA 95–133、133–162
- 样例 2：208 − 0.7 × 45 = 176.5 ≈ 177；对照 175 / 177 / 166；储备 117；Karvonen 119–130 / 130–142 / 142–154 / 154–165 / 165–177；70% = 60 + 0.7 × 117 = 142（% 最大心率法为 124）；AHA 89–124、124–150；静息 60 在 60–100 内
- 样例 3：实测 185、静息 52、储备 133；119–132 / 132–145 / 145–158 / 158–172 / 172–185；对照（38 岁）182 / 181 / 173；静息 52 → 运动人群常见
- 其他：60 岁 220 − 年龄 160 vs Tanaka 166

## 验收记录（2026-10-15，英文本地预渲染页）

- 三个样例输出与上表一致；第四次点击回到样例 1
- Gulati 30 岁：206 − 0.88 × 30 = 179.6 ≈ 180，区间 90–108 … 162–180
- 实测 190 + 静息 105：无对照行，静息说明为「above 60–100」；静息 38 → 「lower than roughly 40」
- 报错：年龄留空 / 8 / 30.5、实测 90、静息 150、Karvonen 无静息、实测模式年龄 `abc`，均显示对应提示并隐藏明细
- Clear：清空输入、恢复 220 − 年龄 / % 最大心率、隐藏实测输入与结果，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2 / Disclaimer（YMYL）
- [x] `03-locale-briefs.md` 已按当地搜法重填
