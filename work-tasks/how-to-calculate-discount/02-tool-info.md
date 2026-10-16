# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-discount`  
**路径**：`/tools/how-to-calculate-discount`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：见下方覆盖表
- 用户任务：交互计算 + 公式/示例
- [x] 竞品：通用计算器页
- [x] 缺口：假设/规则可见；固定样例
- [x] 增益：① 公式 ④ 假设 ⑤ 权威引用 ⑧ Example ⑨ related
- [x] 权威：见 References
- [x] Related：`how-to-calculate-markup`、`how-to-calculate-gross-margin`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Discount Calculator — Find Sale Price or Percent Off |
| Description | Find sale price from % off, reverse to original, or measure percent off. Example: 100 off 20% → 80; stack 20%+10% → 72. Educational only. |
| related | how-to-calculate-markup, how-to-calculate-gross-margin |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** `how-to-calculate-discount` |
| 主检索词 → title/H1 | en：**Discount Calculator — Find Sale Price or Percent Off**；zh：**折扣计算器 — 算优惠价或折扣百分比** |
| 次要关键词 → desc/FAQ | sale price；percent off；double/stack discount；original from sale → desc/FAQ/模式 |
| 用户搜索习惯判断 | 结果/场景向 title；禁参数枚举目录腔 |
| 优化摘要 | 三模式+叠折+芯片+分步；H1 主词；desc≥120 含 100@20%→80；非参数枚举 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| discount calculator / how to calculate discount | 吸（主词） | title / H1 |
| sale price / percent off | 吸 | mode_sale；formula；FAQ q1 |
| discount between two prices / percent off calculator | 吸 | mode_pct；FAQ q3 |
| original price after discount / reverse discount | 吸 | mode_original；FAQ q4 |
| double discount / successive / stacked discount | 吸 | pct2 字段；FAQ q2；formula_item_5 |
| sales tax / VAT on discounted price | **不吸** | FAQ q6 → related tax tools |
| fixed dollar coupon | **不吸** | FAQ q7（说明边界） |
| markup / margin | **不吸** | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 折扣/优惠价计算，仍成立 |
| 主检索词任务 | 改写前仅单向到手价 → **部分满足**；改写后三模式 + 叠折 → **满足** |
| 超出 | 无第二计算器抢首屏 |
| 有意不满足 | 税、固定券、结账舍入 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

> `npm run coverage:gate -- --slug=how-to-calculate-discount --phase=0b`

## 交互规格

- 输入/输出：三模式（sale / pct / original）+ 可选第二折扣；芯片 10/15/20/25/50；分步公式
- 样例轮换：100@20%→80；100→80 求%；80@20% 求原价；100@20%+10%→72
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
