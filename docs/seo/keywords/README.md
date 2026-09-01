# SEO 主题词表（`docs/seo/keywords/{theme}/`）

每个**主题**单独一夹，集中存放该主题的：

| 类型 | 示例 |
|---|---|
| Keyword Planner / 导出词表 | `*.csv`、`keywords-search-volumns.txt` |
| 意图聚类 / IA 分析 | `YYYY-MM-DD-*-keyword-planner.md` |
| Bing/Google SERP 脱敏批次 | `YYYY-MM-DD-*-serp.md`（`ops/seo/bing_serp`） |
| 其它主题笔记 | `*.txt` / briefs |

## 约定

- 目录名：英文 **kebab-case**（与种子词根或产品主题一致，如 `cidr`、`prompt-builder`）。
- **不要**把主题分析再散落到 `docs/seo/serp-batches/`；跨主题/试点通用批次仍可用 `serp-batches/`。
- 入意图池：追加上级 [`../keyword-daily-pool.tsv`](../keyword-daily-pool.tsv)；`source_batch` 填文件名。
- **Keyword Planner 归类**：一律按 [`../keyword-planner-analysis-rules.md`](../keyword-planner-analysis-rules.md)（场景全覆盖；主打 slug/title；词池不设条数上限）。
- Bing 采集：

```bash
python ops/seo/bing_serp/run_bing_serp.py --theme cidr --write-batch-md --batch-id YYYY-MM-DD-cidr-longtail-serp ...
```

`--theme` 写入 `docs/seo/keywords/{theme}/`。搜法见策略 §3.3 I 与 [`ops/seo/bing_serp/README.md`](../../../ops/seo/bing_serp/README.md)。

## 现有主题

| 主题夹 | 说明 |
|---|---|
| [`cidr/`](./cidr/) | CIDR / 子网 / Terraform cidrsubnet 等 |
| [`compare-text-seeds/`](./compare-text-seeds/) | Compare-Text Planner CSV 种子（733 词） |
| [`measuring-magnet-fields/`](./measuring-magnet-fields/) | 磁场测量 Planner 量级表 |
| [`p0-scene/`](./p0-scene/) | 产品 P0 五条场景的 Bing SERP / 长尾选词（2026-08-31） |
| [`prompt-builder/`](./prompt-builder/) | Prompt Planner 98 词；absorb → `prompt-template-builder` |
| [`social-share/`](./social-share/) | 社交/OG 图使用场景聚类（§3.3 H 渠道类示例） |
| [`text-compare/`](./text-compare/) | **权威**：分场景 slug + 长尾 H1（2026-09-01 用户点名） |
| [`text-diff/`](./text-diff/) | Planner CSV + Bing SERP；场景结论以 `text-compare/` 为准 |

枢纽：[`../README.md`](../README.md) · 漏斗：[`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md) · 运维：[`../../ops/seo/keyword-to-tool-ops.md`](../../ops/seo/keyword-to-tool-ops.md)
