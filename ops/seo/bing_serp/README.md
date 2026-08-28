# Bing SERP via CloakBrowser（公用）

用本机已安装的 [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) 打开 Bing 搜索页，抽取有机结果 / 相关搜索，并草稿 `competition_tier`，供 keyword-to-tool 漏斗使用。

## 前置

```bash
pip install cloakbrowser
cloakbrowser install
cloakbrowser info
```

Python ≥ 3.10。无需写入本仓库 `package.json`（运维脚本，非站点运行时依赖）。

## 快速试跑（写入主题夹）

```bash
python ops/seo/bing_serp/run_bing_serp.py ^
  --theme cidr ^
  --queries "terraform cidrsubnet,ip range to cidr" ^
  --batch-id 2026-08-28-cidr-bing-smoke ^
  --write-batch-md ^
  --limit-queries 2
```

Markdown → `docs/seo/keywords/cidr/{batch-id}.md`。

## 从 Keyword Planner CSV 批量

```bash
python ops/seo/bing_serp/run_bing_serp.py ^
  --theme cidr ^
  --file docs/seo/keywords/cidr/Cidr_KeywordPlanner_bing.csv ^
  --column 关键词 ^
  --limit-queries 20 ^
  --batch-id 2026-08-28-cidr-bing-serp ^
  --write-batch-md ^
  --delay-min 4 --delay-max 9
```

## 输出

| 路径 | 是否入库 | 内容 |
|---|---|---|
| `.cache/serp/bing/{batch-id}/*.json` | 否（`.gitignore`） | 每词结构化结果 |
| `.cache/serp/bing/{batch-id}/manifest.json` | 否 | 批次索引 |
| `docs/seo/keywords/{theme}/{batch-id}.md` | 是（`--theme` + `--write-batch-md`） | 主题脱敏摘要 |
| `docs/seo/serp-batches/{batch-id}.md` | 仅无 `--theme` 时 | 跨主题/试点回退 |

## 中国区 Bing → 国际版

默认（`--mkt en-US`）检测 CN 后自动 `ensearch=1` 重搜。要大陆 SERP：`--allow-cn`。

## 常用参数

| 参数 | 含义 |
|---|---|
| `--theme` | 主题短名；Markdown 写到 `keywords/{theme}/` |
| `--queries` / `--file` / `--column` | 词表 |
| `--mkt` | 默认 `en-US` |
| `--allow-cn` | 保留 CN Bing |
| `--write-batch-md` | 写 Markdown 批次 |
| `--batch-dir` | 覆盖输出目录 |

关联：[`../keyword-to-tool-ops.md`](../keyword-to-tool-ops.md) · [`../../docs/seo/keywords/README.md`](../../docs/seo/keywords/README.md)
