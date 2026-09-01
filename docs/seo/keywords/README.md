# SEO 主题词表（`docs/seo/keywords/{theme}/`）

每个**主题**（如 `cidr`、`measuring-magnet-fields`）单独一夹，集中存放该主题的：

| 类型 | 示例 |
|---|---|
| Keyword Planner / 导出词表 | `Cidr_KeywordPlanner_bing.csv` |
| 意图聚类 / IA 分析 | `YYYY-MM-DD-*-keyword-planner.md` |
| Bing/Google SERP 脱敏批次 | `YYYY-MM-DD-*-serp.md`（由 `ops/seo/bing_serp` 写入） |
| 其它主题笔记 | `*.txt` / briefs |

## 约定

- 目录名：英文 **kebab-case** 主题词（与种子词根一致，如 `cidr`）。
- **不要**把主题分析再散落到 `docs/seo/serp-batches/`；跨主题/试点通用批次仍可用 `serp-batches/`。
- 入意图池：仍追加上级 [`../keyword-daily-pool.tsv`](../keyword-daily-pool.tsv)；`source_batch` 填文件名（可含主题路径备注）。
- Bing 采集默认落盘：

```bash
python ops/seo/bing_serp/run_bing_serp.py --theme cidr --write-batch-md --batch-id YYYY-MM-DD-cidr-longtail-serp ...
```

`--theme` 会把 Markdown 写到 `docs/seo/keywords/{theme}/`。默认搜法见策略 §3.3 I 与 [`ops/seo/bing_serp/README.md`](../../../ops/seo/bing_serp/README.md)（去引号、搜索框、每词新会话、污染变体）。

## 现有主题

| 主题夹 | 说明 |
|---|---|
| [`cidr/`](./cidr/) | CIDR / 子网 / Terraform cidrsubnet 等 |
| [`measuring-magnet-fields/`](./measuring-magnet-fields/) | 磁场测量词表 |
| [`social-share/`](./social-share/) | 社交/OG 图使用场景聚类（§3.3 H 的**渠道类示例**；规则本身全站适用） |
| [`p0-scene/`](./p0-scene/) | 产品待办 P0 五条场景 slug 的 Bing SERP / 长尾选词（2026-08-31） |

漏斗说明：[`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md) · 运维：[`../../ops/seo/keyword-to-tool-ops.md`](../../ops/seo/keyword-to-tool-ops.md)
