# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`write-ifs-formula-in-excel`  
**路径**：`/tools/write-ifs-formula-in-excel`  
**主方向**：B  
**YMYL**：否  

## IG 预审

- 目标主词：IFS formula Excel
- 用户任务：有序条件 → IFS + TRUE 兜底 + 试算 + 复制
- [x] Related：`write-nested-if-formula-for-excel`、`wrap-formula-with-ifna`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | IFS Formula Builder for Excel — Ordered Tests with TRUE Catch-All |
| Description | West→A East→B else Other → =IFS(...,TRUE,\"Other\"). Excel 2019/365. |
| related | write-nested-if-formula-for-excel, wrap-formula-with-ifna |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-04；复审 2026-10-16 |
| slug 结论 | **保留** |
| 主检索词 → title/H1 | en：**IFS Formula Builder for Excel — Ordered Tests with TRUE Catch-All** |
| 次要关键词 → desc/FAQ | Excel 2016；TRUE catch-all；vs nested IF → FAQ |
| 优化摘要 | 与 nested IF 同级 UI；样例轮换；Excel 2016 边界 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| IFS formula Excel / write IFS | 吸（主词） | H1 / title |
| TRUE catch-all | 吸（次词） | else / rules / FAQ |
| Excel 2016 IFS | 吸（次词） | note / FAQ |
| nested IF vs IFS | 吸（次词） | FAQ / related |
| upload | 有意不满足 | FAQ |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用历史 Planner

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 写 IFS，仍成立 |
| 主检索词任务 | 改写后条件表+TRUE 兜底+试算 → **满足** |
| 超出 | 无本地化函数名自动转换 |
| 有意不满足 | Excel 2016 原生 IFS |
| 总判 | 满足 |

> `npm run coverage:gate -- --slug=write-ifs-formula-in-excel --phase=0b`

## 交互规格

- 同 nested IF UI；输出 =IFS(...,TRUE,else)
- 样例轮换；显示 Excel 2019/365 提示

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Rules / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
