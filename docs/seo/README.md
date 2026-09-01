# docs/seo — 站点 SEO 文档枢纽

本目录存放 **Search Console 复盘**、**关键词→工具漏斗**、**主题词表 / Planner 分析**、以及与 SEO 相关的一次性方案。  
合规权威仍是 `.cursor/rules/seo-google-policy.mdc` 与 `docs/2026-07-28-google-seo-strategy-implementation.md`（冲突时以上层为准）。

## 0. 目录地图

```
docs/seo/
  README.md                          ← 本枢纽
  # —— 现行策略 / 漏斗（根目录，勿随意改路径；Skill/规则已引用）——
  2026-08-20-long-tail-gap-strategy.md
  2026-08-20-tool-keyword-roots.md|.tsv
  keyword-planner-analysis-rules.md
  keyword-to-tool-funnel.md
  keyword-to-tool-tracker.md
  keyword-daily-pool.tsv
  2026-08-28-tool-topic-reassignment.md
  # —— 主题词表 ——
  keywords/{theme}/                  ← Planner CSV、聚类、主题 SERP
  # —— 跨主题试点 SERP ——
  serp-batches/
  # —— GSC 按日复盘 ——
  reviews/YYYY-MM-DD/
  # —— 一次性方案（按日夹）——
  2026-08-09/  2026-08-12/
```

| 要找什么 | 去哪 |
|---|---|
| 长尾选题 / §3.3 G·H·I | [`2026-08-20-long-tail-gap-strategy.md`](./2026-08-20-long-tail-gap-strategy.md) |
| Keyword Planner CSV 怎么归类 | [`keyword-planner-analysis-rules.md`](./keyword-planner-analysis-rules.md) |
| 漏斗说明 / 词池 / 跟进 | [`keyword-to-tool-funnel.md`](./keyword-to-tool-funnel.md) · [`keyword-daily-pool.tsv`](./keyword-daily-pool.tsv) · [`keyword-to-tool-tracker.md`](./keyword-to-tool-tracker.md) |
| 某主题词表与分析 | [`keywords/`](./keywords/README.md) |
| 跨主题试点 SERP | [`serp-batches/`](./serp-batches/README.md) |
| GSC 导出与三文档 | [`reviews/`](./reviews/README.md) |
| 运维怎么跑一批词 | [`ops/seo/keyword-to-tool-ops.md`](../../ops/seo/keyword-to-tool-ops.md) |
| Agent Skill | [`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md) |

**约定**：主题分析进 `keywords/{theme}/`（kebab-case）；不要把新主题再散落到 `serp-batches/` 或 `docs/seo/` 根目录。根目录策略文件路径被 Skill / rules 引用，**移动须同步全仓链接**。

---

## 1. 策略与漏斗（现行）

| 文件 | 角色 |
|---|---|
| [`2026-08-20-long-tail-gap-strategy.md`](./2026-08-20-long-tail-gap-strategy.md) | 选题：回避已占位大词；主攻 long_gap / locale_gap；§3.3；§4.7 词根→Planner→absorb |
| [`keyword-planner-analysis-rules.md`](./keyword-planner-analysis-rules.md) | Planner CSV **操作 playbook**：场景全覆盖；slug/title/主打词；不设词池条数上限 |
| [`keyword-to-tool-funnel.md`](./keyword-to-tool-funnel.md) | 漏斗展开：进池 ≠ 建页；周 build 名额 |
| [`keyword-to-tool-tracker.md`](./keyword-to-tool-tracker.md) | 事项快照 / 里程碑 / 决策日志（只追加） |
| [`2026-08-20-tool-keyword-roots.md`](./2026-08-20-tool-keyword-roots.md) · [tsv](./2026-08-20-tool-keyword-roots.tsv) | 全站工具词根种子 |
| [`2026-08-28-tool-topic-reassignment.md`](./2026-08-28-tool-topic-reassignment.md) | 工具→主题 hub 重分（primary/secondary） |
| [`keyword-daily-pool.tsv`](./keyword-daily-pool.tsv) | 意图池运行表 |

---

## 2. 主题词表 `keywords/`

见 [`keywords/README.md`](./keywords/README.md)。每个主题夹：Planner 导出 + `*-keyword-planner.md` 权威分析 + 可选 SERP。

---

## 3. SERP 批次 `serp-batches/`

见 [`serp-batches/README.md`](./serp-batches/README.md)。**仅**跨主题 / 早期试点；主题正式批次写在 `keywords/{theme}/`。

---

## 4. GSC 复盘 `reviews/`

见 [`reviews/README.md`](./reviews/README.md)。按导出日：`01-analysis-review` / `02-next-strategy` / `03-todo` + 原始 CSV 子目录。

### 导出步骤（GSC）

1. **效果** → 日期范围（建议 ≥28 天）→ 导出  
2. **网页索引** → 导出覆盖报告  
3. 解压放入 `reviews/YYYY-MM-DD/`（保持 GSC 默认子目录名）  
4. 新建三文档

### 分析节奏

| 频率 | 动作 |
|---|---|
| 每次导入后 | 在日期夹内完成三文档 |
| 有展示无点击 | 优先改 title / meta description → 记入 todo |
| 有展示排名 >30 | 策略定 IG / 内链 / IndexNow；todo 排期 |
| 索引异常 | 复盘对照 Coverage CSV |

示例：[`reviews/2026-08-08/`](./reviews/2026-08-08/01-analysis-review.md) · [`reviews/2026-08-12/`](./reviews/2026-08-12/01-analysis-review.md)

---

## 5. 一次性方案（按日夹）

| 路径 | 说明 |
|---|---|
| [`2026-08-09/link-strategy-execution.md`](./2026-08-09/link-strategy-execution.md) | 内链三级 / 出站 / 入站落地；运维清单见 [`ops/seo/inbound-link-outreach.md`](../../ops/seo/inbound-link-outreach.md) |
| [`2026-08-12/serp-image-thumbnail-plan.md`](./2026-08-12/serp-image-thumbnail-plan.md) | 工具页 SERP 出图方案（方案已细化；实施另决议） |

新的非主题、非 GSC 方案：优先 `docs/seo/YYYY-MM-DD/<slug>.md`，并在本 README §5 加一行。

---

## 6. 整理约定（给 Agent / 后人）

1. **kebab-case** 主题夹名；种子 CSV 可留 Planner 原文件名。  
2. 新 Planner 批：落 `keywords/{theme}/` → 按 `keyword-planner-analysis-rules.md` 写权威 md → 词池 + tracker。  
3. 勿手改生成站页；勿把密钥 / 完整 SERP HTML 入库。  
4. 移动根目录策略文件前，先全仓搜路径并同步 Skill / rules / ops。
