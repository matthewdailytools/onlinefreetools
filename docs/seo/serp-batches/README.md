# SERP 批次归档

**主题相关**分析（词表、意图聚类、该主题 Bing SERP）请放在  
[`../keywords/{theme}/`](../keywords/)（见该目录 README）。  

本目录仅存**跨主题 / 试点**脱敏批次（如早期 pilot）。  
正式候选仍追加 [`../keyword-daily-pool.tsv`](../keyword-daily-pool.tsv)；漏斗说明见 [`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md)。

## Bing 自动采集

```bash
# 写入主题夹 docs/seo/keywords/cidr/
python ops/seo/bing_serp/run_bing_serp.py --theme cidr --write-batch-md --batch-id YYYY-MM-DD-cidr-...
```

- 脚本：[`ops/seo/bing_serp/README.md`](../../ops/seo/bing_serp/README.md)
- JSON 仍在 `.cache/serp/bing/`（不入库）
- 无 `--theme` 时 Markdown 才回退写到本目录

## 约定

- **只存脱敏摘要**；**不入库**完整 SERP HTML / 密钥
- 主题批次文件名：`YYYY-MM-DD-<theme>-<id>.md`，物理路径在 `keywords/{theme}/`
- 入池后 `source_batch` 填文件名；事项跟进更新 tracker
