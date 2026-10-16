# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-ohms-law`  
**路径**：`/tools/how-to-calculate-ohms-law`  
**主方向**：C  
**YMYL**：否（教育说明；仍有 safety_banner）  

## IG 预审

- 目标主词：Ohm's law calculator
- 用户任务：三模式求 V/I/R + 功率
- [x] Related：`how-to-calculate-density`、`how-to-calculate-velocity`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Ohm's Law Calculator — Find Resistance Voltage Current and Power |
| Description | V=12 I=2 → R=6 Ω P=24 W; also solve voltage or current. Ideal DC educational only. |
| related | how-to-calculate-density, how-to-calculate-velocity |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09；复审 2026-10-16 |
| slug 结论 | **保留** |
| 主检索词 → title/H1 | en：**Ohm's Law Calculator — Find Resistance Voltage Current and Power** |
| 次要关键词 → desc/FAQ | resistance；power；V=IR → formula/FAQ |
| 优化摘要 | 三模式；步骤；功率；样例轮换；safety；禁参数枚举 title |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| Ohm's law calculator | 吸（主词） | H1 / title |
| solve for voltage / current / resistance | 吸（次词） | FAQ / usecase / mode UI |
| power P=VI | 吸（次词） | desc / result / formula |
| V=IR formula | 吸（次词） | formula / FAQ |
| wiring / electrical safety advice | 有意不满足 | safety / disclaimer |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 欧姆定律计算，仍成立 |
| 主检索词任务 | 改写后三模式+功率 → **满足** |
| 超出 | 无交流阻抗 |
| 有意不满足 | 接线/安全建议 |
| 总判 | 满足 |

> `npm run coverage:gate -- --slug=how-to-calculate-ohms-law --phase=0b`

## 交互规格

- 模式：求 R / V / I
- 输出：未知量 + 功率 + 步骤
- 样例轮换三模式
- 失败：I=0 求 R；R≤0 求 V/I

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
