# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`write-nested-if-formula-for-excel`  
**路径**：`/tools/write-nested-if-formula-for-excel`  
**主方向**：B  
**YMYL**：否  

## IG 预审

- 目标主词：nested IF formula Excel
- 用户任务：有序条件 → 嵌套 IF + 试算 + 复制
- [x] Related：`write-ifs-formula-in-excel`、`wrap-formula-with-ifna`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Nested IF Formula Builder for Excel — Ordered Conditions to Copy |
| Description | West→A East→B else Other；浏览器试算后复制。English IF names/commas. |
| related | write-ifs-formula-in-excel, wrap-formula-with-ifna |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-04；复审 2026-10-16 |
| slug 结论 | **保留** |
| 主检索词 → title/H1 | en：**Nested IF Formula Builder for Excel — Ordered Conditions to Copy** |
| 次要关键词 → desc/FAQ | nested IF；contains SEARCH；not IFS → FAQ |
| 优化摘要 | 表头条件行；样例轮换；copy 反馈；清理无关键；禁参数枚举 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| nested IF formula Excel | 吸（主词） | H1 / title |
| write nested if / IF formula builder | 吸（次词） | desc / how |
| contains SEARCH blank | 吸（次词） | rules / FAQ |
| IFS vs nested IF | 吸（次词） | FAQ / related |
| upload spreadsheet | 有意不满足 | FAQ privacy |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用历史 Planner；本轮不新增长尾 URL

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 写嵌套 IF，仍成立 |
| 主检索词任务 | 改写后条件表+试算+复制 → **满足** |
| 超出 | 无本地化函数名/分号自动转换 |
| 有意不满足 | IFS 本体（相关页） |
| 总判 | 满足 |

> `npm run coverage:gate -- --slug=write-nested-if-formula-for-excel --phase=0b`

## 交互规格

- 输入：cell、trial、else、条件表（eq/contains/blank）
- 输出：嵌套 IF 公式 + 试算结果 + 复制
- 样例轮换：区域标签 / 成绩档 / contains

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Rules / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
