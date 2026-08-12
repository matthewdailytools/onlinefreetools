# Google Search Console 数据归档

按 **导出日期** 存放 GSC 原始 CSV 与同批 **分析 / 策略 / Todo** 文档，便于对比趋势与驱动 SEO 优化。

## 目录约定

```
docs/seo/
  README.md
  reviews/
    YYYY-MM-DD/
      01-analysis-review.md      # 分析复盘（数据、结论、基准线）
      02-next-strategy.md        # 下一步策略（优先级、不做清单、决策门）
      03-todo.md                 # 可执行 Todo（勾选状态）
      https___onlinefreetools.org_-Performance-on-Search-YYYY-MM-DD/
        查询数.csv
        网页.csv
        国家_地区.csv
        设备.csv
        图表.csv
        ...
      https___onlinefreetools.org_-Coverage-YYYY-MM-DD/
        图表.csv
        严重问题.csv
        非严重问题.csv
        ...
```

**原则**：

- 原始 CSV 与当次文档放在 **`docs/seo/reviews/YYYY-MM-DD/`**，不拆到 `docs/seo/` 根目录
- 三文档职责分离：**复盘只写事实与结论**；**策略写方向与决策门**；**todo 写可勾选任务**
- 已执行改动写在 `03-todo.md` 的「已完成」；`01` 仅摘要并链到 todo

## 导出步骤（GSC）

1. **效果** → 日期范围（建议 ≥28 天；勿用「过去 24 小时」做复盘结论）→ 导出
2. **网页索引** → 导出覆盖报告
3. 解压后放入 `docs/seo/reviews/YYYY-MM-DD/`（保持 GSC 默认子目录名）
4. 新建 `01-analysis-review.md`、`02-next-strategy.md`、`03-todo.md`

## 分析节奏

| 频率 | 动作 |
|---|---|
| 每次导入后 | 在 **日期文件夹** 内完成三文档 |
| 有展示无点击 | 优先改 **title / meta description**（对齐检索词，≥120 字）→ 记入 todo |
| 有展示排名 >30 | 策略文档定 IG / 内链 / IndexNow；todo 排期 |
| 索引异常 | 复盘文档对照 Coverage CSV；devlogs 仅站内链、noindex + robots Disallow |

## 示例

- [`reviews/2026-08-08/01-analysis-review.md`](./reviews/2026-08-08/01-analysis-review.md)
- [`reviews/2026-08-12/01-analysis-review.md`](./reviews/2026-08-12/01-analysis-review.md)

## 链接策略（非 GSC 导出批次）

- [`2026-08-09/link-strategy-execution.md`](./2026-08-09/link-strategy-execution.md) — 内链三级 / 出站 / 入站落地
- 入站月度清单：[`ops/seo/inbound-link-outreach.md`](../../ops/seo/inbound-link-outreach.md)

## 关键词 → 工具漏斗（SERP 分析）

- **跟进**：[keyword-to-tool-tracker.md](./keyword-to-tool-tracker.md)（独立项状态 / 里程碑 / 周待办）
- **运维操作**：[ops/seo/keyword-to-tool-ops.md](../../ops/seo/keyword-to-tool-ops.md)（有一批词怎么开始）
- **Skill**：[`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md) — 从关键词找新工具或丰富已有工具
- [`keyword-to-tool-funnel.md`](./keyword-to-tool-funnel.md) — 日抽词进池、周审、IG 门禁
- [`keyword-daily-pool.tsv`](./keyword-daily-pool.tsv) — 候选运行表
- [`serp-batches/`](./serp-batches/) — 脱敏 SERP 批次摘要归档
- 试点批次：[`serp-batches/2026-08-11-pilot01.md`](./serp-batches/2026-08-11-pilot01.md)（词池分析；未自动建 work-tasks）

## 出图 / 缩略图（非 GSC 导出批次）

- [`2026-08-12/serp-image-thumbnail-plan.md`](./2026-08-12/serp-image-thumbnail-plan.md) — 工具页 SERP 出图（已细化）：锁定决策、禁用列表 logo、Phase A/B/C、试点 slug、验收

权威策略：`.cursor/rules/seo-google-policy.mdc` · `docs/2026-07-28-google-seo-strategy-implementation.md`
