# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-bmi`  
**路径**：`/tools/how-to-calculate-bmi`  
**主方向**：A  
**YMYL**：是（catalog `ymyl: true`；醒目 disclaimer + WHO / CDC / NHS 引用；结果区筛查语气，不作诊断）  
**最近改写**：2026-10-15（薄页逐页改写队列 #44，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文偏薄（FAQ 三问一句答；Use cases 各一句；结果只有数字 + 四档标签）。功能缺口：

- 「BMI calculator」SERP（NHS、CDC、calculator.net、Omni 类）主意图：**算出 BMI + 分类 + 我这个身高的健康体重范围**；英国用户要 **stone / pounds**；NHS 对部分族裔用**更低 cutoff**（23 / 27.5）；本页只给数值和 4 档 → **部分满足**；
- 无健康体重范围、无距离范围差多少、无肥胖 1 / 2 / 3 级、无英石、无族裔 cutoff、无刻度可视化、无计算过程。

## 与站内相邻工具的分工

- `how-to-calculate-ideal-weight`：按 Devine / Robinson / Miller 等公式给单一「理想体重」。本页只给 BMI 18.5–24.9（或 22.9）对应的体重**范围**，不给公式型理想体重。
- `how-to-calculate-body-fat`：体脂率（围度法）。本页 FAQ q4 说明 BMI 不分肌肉与脂肪，并引导腰围 / 体脂。
- `how-to-calculate-bmr-tdee`：热量需求。ctx_lead 引向它与体脂工具。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：体检或就诊前知道自己的 BMI 与分类；想知道「我这个身高多少公斤算正常」；英国用户用英石输入；亚裔 / 非裔等用户想按 NHS 更低 cutoff 判断；长期追踪
- [x] 竞品（NHS BMI calculator、CDC Adult BMI Calculator、calculator.net、Omni）：多数给数值 + 分类；NHS 给族裔 cutoff 但不给计算过程；calculator.net 给健康范围与 BMI Prime 但无族裔 cutoff；少有同屏 kg / lb / 英石三套单位 + 族裔 cutoff + 标准分类对照 + 距离范围差值 + 计算过程
- [x] 缺口：健康体重范围；差值；肥胖分级；英石；族裔 cutoff；计算过程；刻度
- [x] 增益：① 单位三选（公制 / 美制 lb + ft in / 英制 st lb + ft in），精确换算 1 lb = 0.45359237 kg、1 in = 2.54 cm ② WHO / CDC 六档（含肥胖 1 / 2 / 3 级）③ NHS 族裔更低 cutoff 勾选，类别与标准不同时给对照 ④ 本身高健康体重范围（kg 与 lb，英制按 st lb）⑤ 距离范围上限 / 下限的差值 ⑥ BMI Prime ⑦ 计算过程行（公制 kg ÷ m²；英制 703 × lb ÷ in² 并给等价公制）⑧ 刻度条（15–40）+ 分类表当前行高亮 ⑨ 输入容错（小数逗号、in ≥ 12 / lb ≥ 14 报错、范围检查）
- [x] 权威：WHO — Obesity and overweight fact sheet；CDC — Adult BMI categories；NHS — Obesity（族裔 cutoff 23–27.4 / ≥27.5；腰围小于身高一半）
- [x] Related：`how-to-calculate-bmr-tdee`、`how-to-calculate-body-fat`、`how-to-calculate-ideal-weight`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | BMI Calculator — Calculate Your Body Mass Index and See the Healthy Weight Range for Your Height |
| Description (en) | Calculate your BMI from height and weight in kg and cm, lb and ft/in, or stone. See your adult category, the healthy weight range for your height and BMI Prime. Example: 70 kg, 175 cm → 22.9. |
| related | how-to-calculate-bmr-tdee, how-to-calculate-body-fat, how-to-calculate-ideal-weight |
| Disclaimer / References | 醒目 disclaimer（筛查、非医疗建议、不诊断）；WHO / CDC / NHS 三条可点击 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-bmi`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**BMI Calculator — Calculate Your Body Mass Index and See the Healthy Weight Range for Your Height**；zh：**BMI 计算器 — 输入身高体重算出体质指数，并查看你这个身高的健康体重范围** |
| 次要关键词 → desc/FAQ | how to calculate BMI → FAQ q1 + Formula 1–2；healthy weight for my height → FAQ q2 + 结果「健康体重」行 + Formula 6；Asian BMI cutoffs / BMI by ethnicity → FAQ q3 + 勾选框 + Formula 5；BMI for athletes / muscle → FAQ q4；BMI for children / pregnancy → FAQ q5；BMI Prime → FAQ q6 + 结果行；BMI stone and pounds → 单位 UK + Why choose 4 |
| 用户搜索习惯判断 | 工具名向（BMI calculator / body mass index calculator）；H1 以工具名开头，副句含「计算 BMI」与「健康体重范围」两项任务 |
| 优化摘要 | 保留 slug；H1 由「BMI Calculator — How to Calculate Body Mass Index」改为工具名 + 计算 + 健康体重范围；desc 写三套单位、分类、健康范围、BMI Prime 与示例 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| BMI calculator / body mass index calculator | 吸（主词） | title / H1 |
| how to calculate BMI / BMI formula | 吸 | FAQ q1；Formula 1–2；计算过程行 |
| healthy weight for height / healthy weight range | 吸 | 结果健康体重行与差值行；FAQ q2 |
| BMI chart / BMI categories / obesity class | 吸 | 分类表；刻度；Formula 3–4 |
| Asian BMI calculator / BMI ethnicity NHS | 吸 | 勾选框；FAQ q3；Formula 5 |
| BMI calculator stone and pounds / lbs and feet | 吸 | 单位 UK / US |
| BMI Prime | 吸（说明性） | 结果行；FAQ q6 |
| BMI calculator for kids / teens（BMI-for-age 百分位） | **不吸** | FAQ q5 说明不适用并指向 CDC 2–19 岁图表 |
| ideal weight formula（Devine 等） | **不吸** | Related 理想体重工具 |
| body fat percentage | **不吸** | FAQ q4 提及；Related 体脂工具 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | BMI 计算，仍成立 |
| 主检索词任务 | 「算 BMI + 分类 + 我的健康体重」——改写前仅数值 + 4 档 → **部分满足**；改写后三套单位 + 六档 + 族裔 cutoff + 健康范围与差值 → **满足** |
| 超出 | 无第二工具抢首屏 |
| 有意不满足 | 儿童 / 青少年百分位；孕期；体脂率；公式型理想体重 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 单位：公制（kg、cm，默认）/ 美制（lb、ft、in）/ 英制（st、lb、ft、in）；切换单位时只显示对应输入
- 勾选：族裔更低 cutoff（NHS：健康 18.5–22.9、超重 23–27.4、肥胖 ≥27.5）；勾选变化时若已有结果立即重算
- 计算：1 lb = 0.45359237 kg；1 in = 0.0254 m；BMI 显示 1 位小数，分类按 1 位小数后的值判断（24.95 → 25.0 → 超重）
- 结果：BMI 数值 + 分类徽章 + 中性解读；刻度条 15–40 + 标记；计算过程；采用的 cutoff（与标准分类不同时给对照）；本身高健康体重范围（主单位 + 另一单位；英制按 st lb）；距离范围上限或下限差多少；BMI Prime（÷25，族裔 cutoff 时 ÷23）；分类表当前行高亮；结果注（成人、非孕、非诊断）
- 报错：体重空 / 非正 / 非数字；身高空 / 非正 / 非数字；英尺已填时英寸 ≥ 12；英石已填时磅 ≥ 14；身高 0.5–2.72 m、体重 10–650 kg 以外
- 样例轮换：公制 70 kg / 175 cm（默认，Example 一致）→ 美制 200 lb / 5 ft 10 in → 公制 64 kg / 165 cm + 族裔 cutoff → 英制 11 st 0 lb / 5 ft 7 in；小数逗号语种样例数字用逗号
- Clear 清空全部输入、恢复公制、取消勾选、隐藏结果，不重载样例；进度 HUD：不适用

## 固定数字

- 70 kg / 175 cm → 70 ÷ 3.0625 = 22.9，健康体重；范围 56.7–76.3 kg（124.9–168.1 lb）；Prime 0.91
- 200 lb / 5 ft 10 in（70 in）→ 703 × 200 ÷ 4900 = 28.7，超重；范围 128.9–173.5 lb（58.5–78.7 kg）；BMI 24.9 时 173.5 lb，少 26.5 lb；Prime 1.15
- 64 kg / 165 cm + 族裔 cutoff → 23.5，超重（标准分类为健康体重）；范围 50.4–62.3 kg；少 1.7 kg；Prime 1.02
- 11 st 0 lb / 5 ft 7 in → 24.1；范围 8 st 6 lb – 11 st 5 lb
- 76.4 kg / 175 cm → 24.9 健康；45 kg → 14.7 偏瘦（多 11.7 kg 到 18.5）；140 kg → 45.7 肥胖 3 级

## 验收记录（2026-10-15，英文本地预渲染页）

- 四个样例输出与上表一致（含计算过程、cutoff 对照、健康范围、差值、Prime）
- 边界：76.4 kg → 24.9 健康；45 kg → 14.7 偏瘦；140 kg → 45.7 肥胖 3 级
- 报错：体重为空；身高为空；5 ft 12 in；11 st 14 lb；身高 300 cm
- 勾选族裔 cutoff 时自动重算；Clear 恢复公制并隐藏结果
- 刻度标记线穿过色条可见；窄屏无横向滚动

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×6 / Example / Use cases ×4 / FAQ ×7 / Related ×3 / References ×3 / disclaimer
- [x] `03-locale-briefs.md` 已按当地搜法重填
