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

默认（`--mkt en-US`）**第一次就走** `ensearch=1` 国际索引；若仍被踢回国内版，再换 `cn.bing.com?ensearch=1`。要大陆 SERP：`--allow-cn`。

## 用户搜法 + 技术锁（防污染，v0.3 默认）

按真人搜工具的方式发查询，并用采集技术切断 CN Bing 会话串味（P0：`create`→Minecraft、品牌首页、农商/135/GTA 整页无关结果；`pq` 上一词连带）：

| 默认行为 | 关闭 / 回退 |
|---|---|
| 每词独立 BrowserContext + `Accept-Language: en-US` | `--reuse-page` |
| `setmkt` / `ensearch=1` / `qs=n`；提交后剥 `pq`/`cvid` 重载 | （无；URL 回退仍带锁） |
| 首页搜索框（失败回退 `/search?q=`）；可点「国际版」 | `--search-mode url` |
| 去引号；`og`→`open graph`；污染则最多 3 条变体 | `--keep-quotes` / `--no-habit-retry` |
| 变体仍脏再试 `language:en`（不作 H1） | `--no-lang-lock` |
| 污染草稿 `competition_tier=unusable` | 人工仍须复核；**禁止**当 `long_gap` 入池 |

变体规则见策略 [§3.3 I](../../docs/seo/2026-08-20-long-tail-gap-strategy.md) 与 `query_strategy.py`。

## 常用参数

| 参数 | 含义 |
|---|---|
| `--theme` | 主题短名；Markdown 写到 `keywords/{theme}/` |
| `--queries` / `--file` / `--column` | 词表 |
| `--mkt` | 默认 `en-US` |
| `--allow-cn` | 保留 CN Bing |
| `--no-habit-retry` | 关闭用户搜法变体 |
| `--search-mode` | `auto`（默认搜索框）/ `box` / `url` |
| `--reuse-page` | 整批共用 page+context（易串味） |
| `--no-lang-lock` | 关闭 `language:en` 技术兜底 |
| `--write-batch-md` | 写 Markdown 批次 |
| `--batch-dir` | 覆盖输出目录 |

关联：[`../keyword-to-tool-ops.md`](../keyword-to-tool-ops.md) · [`../../docs/seo/keywords/README.md`](../../docs/seo/keywords/README.md)
