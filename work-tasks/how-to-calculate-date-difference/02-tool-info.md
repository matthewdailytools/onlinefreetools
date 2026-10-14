# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-date-difference`  
**路径**：`/tools/how-to-calculate-date-difference`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #14，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄；FAQ 为「Sample?」「Signed?」「Timezones?」「Advice?」式单词句；Use case「Project duration sketches.」；无 How 步骤、无 Why choose。实测**功能完全失效**：

- 页面脚本中的日期正则写在 TS 模板字符串里，`\d` 的反斜杠被吃掉变成 `d{4}`，任何日期都匹配失败 → 进页样例与用户输入都只显示「Enter two valid YYYY-MM-DD dates.」；
- 只有天数与小数周；无年/月/日、无工作日、无「是否包含结束日」——这是该搜索意图最常见的追问。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：两个日期相差多少天；常追问「算不算最后一天」「合多少个月 / 周」「有几个工作日」
- [x] 竞品（timeanddate / calculator.net / 各语种「日数计算」站）：多为两个日期 + 天数，部分有年月日与工作日；很少说明月末规则（1 月 31 日 + 1 个月），很少可选周末方案
- [x] 缺口：修复失效；包含结束日开关；年/月/日 + 周和天 + 工作日 / 周末 + 小时；周末方案（六日 / 五六 / 仅日 / 仅五）；整月 + 余天过程；闰日与对调提示；「今天」按钮
- [x] 增益：① 一次算出全部常见追问（2024-01-01 → 2024-03-15：74 天 / 2 个月 14 天 / 10 周 4 天 / 54 工作日）② 包含结束日（周一到周五差 4 天、共 5 天）③ 月末规则（2023-01-31 → 03-01 = 1 个月 1 天）④ 周末可选（阿拉伯语页默认周五 + 周六）⑤ 与 Excel DATEDIF / NETWORKDAYS(.INTL) 对照 ⑥ FAQ：手算方法、节假日、闰年、时区与夏令时
- [x] 权威：Wikipedia — ISO 8601；Wikipedia — Gregorian calendar
- [x] Related：`how-to-calculate-age`、`unix-timestamp`、`timezone-converter`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Date Difference Calculator — How Many Days Between Two Dates, Plus Workdays |
| Description (en) | Calculate the number of days between two dates, then see the same gap in years, months and days, in weeks, and as working days vs weekend days. Tick one box to include the end date; the steps show how the months and days are counted. |
| related | how-to-calculate-age, unix-timestamp, timezone-converter |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-date-difference`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Date Difference Calculator — How Many Days Between Two Dates, Plus Workdays**；zh：**日期间隔计算器 — 算出两个日期相差多少天（含工作日天数）** |
| 次要关键词 → desc/FAQ | days between dates → title + desc；how many days between two dates → title；business days / working days between dates → title「Workdays」+ 工作日格 + FAQ q4；include end date → 勾选框 + FAQ q1；years months days between dates → 年月日格 + Formula 2；how to calculate days between dates → How + FAQ q2；leap year → FAQ q5 |
| 用户搜索习惯判断 | 问句向（how many days between two dates）是最大检索形态；「Plus Workdays」作为第二常见追问放副标题，不罗列年/月/周/小时 |
| 优化摘要 | 保留 slug；H1 由「Days and Weeks」改为问句主词 + Workdays；desc 写清全部输出与包含结束日 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| date difference calculator / days between dates | 吸（主词） | title / H1 |
| how many days between two dates | 吸 | title；总天数 |
| business days / working days between dates | 吸 | title；工作日格；周末方案；FAQ q4 |
| days between dates including end date / inclusive | 吸 | 勾选框；FAQ q1 |
| years months days between two dates | 吸 | 年/月/日格；Formula 2；FAQ q3 |
| weeks between dates | 吸 | 周和天 / 小数周格 |
| hours between dates（整日） | 吸（整日 × 24） | 小时格；FAQ q7 说明界限 |
| days until / countdown | 吸 | 「今天」按钮；Use case 1 |
| excel datedif / networkdays | 吸（对照） | Formula 1；Why choose 5 |
| add days to date（日期加减） | **不吸**（另一任务） | — |
| age calculator | **不吸** | Related |
| time between two times / hours and minutes | **不吸**（需时刻输入） | FAQ q7 说明 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 日期间隔计算器，仍成立 |
| 主检索词任务 | 「两个日期相差多少天（及工作日 / 月）」——改写前正则失效，任何输入都报错 → **不满足**；改写后：天数 + 年月日 + 周 + 工作日 + 包含结束日 + 过程 → **满足** |
| 超出 | 无第二工具抢首屏；周末下拉默认收在一行 |
| 有意不满足 | 日期加减、具体时刻差、按国家扣节假日：FAQ 说明，不改 H1 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：开始日期、结束日期（`type=date`，0001–9999；不支持 date 控件时可手输 YYYY-MM-DD）；各带「今天」按钮（用户本地日期）；「包含结束日」勾选；周末方案下拉（六日 / 五六 / 仅日 / 仅五；ar 页默认五六，其余默认六日）
- 计算：UTC 整日；包含结束日 = 终点后移一天；年月日 = 从开始日逐月前进（29/30/31 日落到短月月末）+ 余天；工作日 = 整周 × (7 − 周末天数) + 余下非周末天
- 输出：两个日期（含星期，本地长格式）；总天数；年 / 月 / 日；周 + 天；工作日；周末天；小数周；小时；Working（整月 + 余天；天数 ÷ 7）；对调、包含结束日、闰日提示
- 报错：任一日期无效
- 样例轮换：2024-01-01 → 2024-03-15（默认，Example 一致：74 天、2 个月 14 天、10 周 4 天、54 工作日）→ 2023-01-31 → 2023-03-01（月末：29 天 = 1 个月 1 天）→ 2026-01-05 → 2026-01-30 含结束日（26 天、20 工作日）→ 1990-05-17 → 2026-10-14（13,299 天、36 年 4 个月 27 天）
- 勾选 / 周末 / 今天按钮在两日期都有值时立即重算；Clear 只清空并恢复默认，不重载样例；进度 HUD：不适用

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
