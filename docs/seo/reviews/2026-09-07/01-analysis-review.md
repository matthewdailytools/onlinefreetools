# GSC 分析复盘（2026-09-07）

**原始数据**：同目录 [`表格.csv`](./表格.csv) / [`元数据.csv`](./元数据.csv)  
**问题名称（GSC）**：已抓取 - 尚未编入索引  
**站点地图筛选**：所有已知网页  
**条数**：表格 **92**  
**对照基线**：[`../2026-08-12/04-crawled-not-indexed-sample.md`](../2026-08-12/04-crawled-not-indexed-sample.md)（110 URL）

本夹**只有** Coverage drilldown，没有 Performance 效果报告、也没有 Coverage 总数。不能把 92 与 8 月的 110 当成「未索引减少」。GSC 该问题页的导出通常是**示例列表**，会随抓取窗口轮换。

全量分类与原因：[`04-crawled-not-indexed.md`](./04-crawled-not-indexed.md)。

---

## 0. 一句话结论

这 92 条几乎都不是「爬虫进不去」。线上抽查：工具页 **200**、自指 canonical、无 `noindex`、hreflang 齐全。Google **已经抓过、选择暂不收录**。主因是 **URL 供给（约 210 工具 × 10 语 ≈ 2100 工具 URL）超过站点当前索引吸收能力**，再叠加 **PDF / prompt / how-to-calculate 近模板簇** 和 **`/en/` 英文双 URL**。

「状态」列：失败 **64**（上次抓取全部在 2026-09-04～06）· 待定 **28**（上次抓取 ≤ 09-03）。失败 = 最近几天又抓了一次、仍未选进索引；不是 5xx/robots 故障。

---

## 1. 总览

| 项 | 数值 |
|---|---|
| Drilldown URL | 92 |
| 失败 / 待定 | 64 / 28 |
| 工具页（含 `/en/` 与无前缀英文） | 77（84%） |
| devlogs | 10 |
| topics / tool-type / scenario hub | 4 |
| `/api/tools/ip-address` | 1 |
| 与 08-12 列表重叠 | **5**（全是 api + 旧 devlogs） |

---

## 2. 与 08-12 的结构变化

08-12 主体是 **图片/水印/边框/合并** 多语。本批主体换成 **PDF（34）+ prompt builder（11）+ how-to-calculate（8）+ `/en/` 计算器/图片**。图片簇几乎整批滚出本示例（不证明它们已收录）。噪声 URL（api、无扩展名 gradient log）仍在，说明历史发现管道未清完。
