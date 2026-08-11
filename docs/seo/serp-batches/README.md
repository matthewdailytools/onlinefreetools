# SERP 批次归档

存放从 **Google 搜索**批量获取后、脱敏整理的分析摘要（供意图池使用）。  
正式候选请追加到上级 [`../keyword-daily-pool.tsv`](../keyword-daily-pool.tsv)；漏斗说明见 [`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md)。

## 约定

- **只存脱敏摘要**：种子词、相关/联想/PAA 候选、前排结果类型与缺口笔记；**不入库**完整 SERP HTML、个人信息或账号凭证
- 文件名：`YYYY-MM-DD-<short-id>.md`（例如 `2026-08-11-batch01.md`）
- 每批处理完后，从摘要中抽约 **10** 条写入 `keyword-daily-pool.tsv`，`source_batch` 填本文件名（无扩展名亦可）
- 取词方式与频率自行合规；本目录不规定爬虫实现

## 单批模板

```markdown
# SERP batch YYYY-MM-DD-<id>

- locale / gl:
- seed queries: (list)
- method note: (manual / export / other — no secrets)

## Candidates (pre-filter)

| candidate | from (related/paa/autocomplete) | SERP type notes | IG gap (1 line) | draft verdict |
|---|---|---|---|---|
| … | … | tool / wiki / forum | … | build/absorb/defer/drop |

## Picked for pool (~10)

- …
```

## 明确不做

- 用本目录驱动「一词一页」日建流水线  
- 把前排页面正文粘贴进工具 i18n  
