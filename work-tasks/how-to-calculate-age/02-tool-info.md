# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-age`  
**路径**：`/tools/how-to-calculate-age`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：见下方覆盖表
- 用户任务：交互计算 + 公式/示例
- [x] 竞品：通用计算器页
- [x] 缺口：假设/规则可见；固定样例
- [x] 增益：① 公式 ④ 假设 ⑤ 权威引用 ⑧ Example ⑨ related
- [x] 权威：见 References
- [x] Related：`how-to-calculate-date-difference`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Age Calculator — Years Months and Days from Two Dates |
| Description | Calendar age from birth to as-of date. Sample: 2000-01-01 → 2026-08-09 = 26y 7m 8d. UTC calendar days. |
| related | how-to-calculate-date-difference |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** `how-to-calculate-age` |
| 主检索词 → title/H1 | en：**Age Calculator — Years Months and Days from Two Dates**；zh：**年龄计算器 — 由两个日期算年/月/日** |
| 次要关键词 → desc/FAQ | chronological age；total days；leap day；as-of date → FAQ |
| 用户搜索习惯判断 | 工具名向；禁参数枚举 |
| 优化摘要 | 今日快捷 + 总天数 + 分步；desc 含 2000-01-01→2026-08-09；UTC 日历日 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| age calculator / how to calculate age | 吸（主词） | title / H1 |
| chronological age from birthdate | 吸 | How；Example |
| years months days age | 吸 | 结果区；FAQ |
| age as of date | 吸 | as-of 字段 |
| total days alive | 吸 | totalDays 行 |
| next birthday countdown | **不吸** | FAQ 边界 |
| legal age / eligibility | **不吸** | disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 出生日期算年龄，仍成立 |
| 主检索词任务 | 改写前仅 Y/M/D → **部分满足**；改写后今日快捷+总天数+分步 → **满足** |
| 超出 | 无法律年龄判定抢首屏 |
| 有意不满足 | 倒计时生日、法定资格 |
| 总判 | 满足（计划回写 How、结果区、FAQ、desc） |

> `npm run coverage:gate -- --slug=how-to-calculate-age --phase=0b`

## 交互规格

- 输入：birth / as-of（date）；今日按钮填 as-of
- 输出：年/月/日 + 总整天数 + 分步
- 样例轮换：2000-01-01→2026-08-09；闰日；同日；跨月借位
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
