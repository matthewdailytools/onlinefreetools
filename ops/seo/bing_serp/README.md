# Bing SERP via CloakBrowser（公用）

用本机已安装的 [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) 打开 Bing 搜索页，抽取有机结果 / 相关搜索，并草稿 `competition_tier`，供 keyword-to-tool 漏斗使用。

## 前置

```bash
pip install cloakbrowser
cloakbrowser install
cloakbrowser info
```

Python ≥ 3.10。无需写入本仓库 `package.json`（运维脚本，非站点运行时依赖）。

## 快速试跑

```bash
python ops/seo/bing_serp/run_bing_serp.py ^
  --queries "terraform cidrsubnet,ip range to cidr" ^
  --batch-id 2026-08-28-cidr-bing-smoke ^
  --write-batch-md ^
  --limit-queries 2
```

（bash / macOS 把 `^` 换成 `\`。）

## 从 Keyword Planner CSV 批量

```bash
python ops/seo/bing_serp/run_bing_serp.py ^
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
| `.cache/serp/bing/{batch-id}/*.json` | 否（`.gitignore`） | 每词结构化结果（title/url/snippet/分析） |
| `.cache/serp/bing/{batch-id}/manifest.json` | 否 | 批次索引 |
| `docs/seo/serp-batches/{batch-id}.md` | 可选（`--write-batch-md`） | **脱敏**摘要表；无完整 HTML |

## 中国区 Bing → 国际版

默认（`--mkt en-US` 等非大陆市场）会：

1. 启动后写入 `ENSEARCH=BENVER=1` 与 `_EDGE_S=mkt=en-US` Cookie  
2. 每次搜完检测：落地 `cn.bing.com`、中文 UI（含「国际版」入口）、或前排国内站占比 ≥50%  
3. 若判定为 CN Bing → 带 `ensearch=1` **再搜一次国际版**  

若你就是要大陆 SERP：加 `--allow-cn`。`--mkt zh-CN` 不会强制切国际版。


## 常用参数

| 参数 | 含义 |
|---|---|
| `--queries` | 逗号分隔词 |
| `--file` / `--column` | 词表文件与列名 |
| `--mkt` | 默认 `en-US` |
| `--allow-cn` | 保留 CN Bing，不自动切国际版 |
| `--headed` | 有头调试 |
| `--humanize` | CloakBrowser 人类行为 |
| `--delay-min` / `--delay-max` | 词间随机等待（秒） |
| `--write-batch-md` | 写 serp-batches Markdown |

## 模块

| 文件 | 职责 |
|---|---|
| `browser_util.py` | 启动 CloakBrowser、等待、停顿 |
| `bing_parse.py` | Bing URL / 有机结果 / 相关搜索解析 |
| `analyze.py` | result_type + `competition_tier` 草稿 |
| `io_util.py` | 词表加载与落盘 |
| `run_bing_serp.py` | CLI |

## 合规

- 频率与 ToS 自行控制；默认词间 3–8s。
- **不要**把完整 SERP HTML 或密钥提交进仓库。
- 草稿 tier **必须**人工/Agent 复核后再进 `keyword-daily-pool.tsv`。
- 禁止抄前排正文进工具文案；本脚本不创建 `work-tasks/`。

关联：[`../keyword-to-tool-ops.md`](../keyword-to-tool-ops.md) · [`../../docs/seo/serp-batches/README.md`](../../docs/seo/serp-batches/README.md)
