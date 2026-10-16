# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`create-budget-spreadsheet`  
**路径**：`/tools/create-budget-spreadsheet`  
**主方向**：B  
**YMYL**：是  

## IG 预审

- 目标主词：create a budget spreadsheet / budget spreadsheet excel
- 用户任务：类别+金额 → 预览合计 → 下载含 SUM 的 xlsx
- [x] Related：`create-invoice-spreadsheet`、`create-excel-timesheet`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Create a Budget Spreadsheet — Category Amounts to Excel xlsx |
| Description | Category amounts → preview total → download xlsx with SUM. Example Rent 1200 + Food 400 → 1600. Planning only. |
| related | create-invoice-spreadsheet, create-excel-timesheet |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-04；复审 2026-10-16 |
| slug 结论 | **保留** |
| 主检索词 → title/H1 | en：**Create a Budget Spreadsheet — Category Amounts to Excel xlsx** |
| 次要关键词 → desc/FAQ | free budget spreadsheet；SUM formula；not ledger → FAQ |
| 优化摘要 | 预览表；样例轮换；safety；去掉无关模板键 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03） | 判定 | 落点 |
|---|---|---|
| create a budget spreadsheet | 吸（主词） | title / H1 |
| budget spreadsheet excel / xlsx | 吸（次词） | title / download |
| category amounts / SUM total | 吸（次词） | preview / FAQ |
| free budget spreadsheet | 吸（次词） | desc |
| general ledger / tax advice | 有意不满足 | safety + FAQ |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用分析路径（见历史 02）；本轮复审不新增长尾 URL

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 做预算表，仍成立 |
| 主检索词任务 | 改写后预览+SUM 下载 → **满足** |
| 超出 | 无收支差异/图表引擎 |
| 有意不满足 | 总账、税务、投资建议 |
| 总判 | 满足（已回写 How、预览、FAQ、desc、disclaimer） |

> `npm run coverage:gate -- --slug=create-budget-spreadsheet --phase=0b`

## 交互规格

- 输入：textarea，每行 `category,amount`
- 输出：预览表 + 合计；下载 budget.xlsx，Total 单元格 `SUM`
- 样例轮换：月度 / 扩展月度 / 旅行
- 失败：无有效行；库未加载

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Rules / Example / Use cases / FAQ≥3 / Related / References
- [x] `03-locale-briefs.md` 已填
