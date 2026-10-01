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
| [`web-check/`](./web-check/) | 竞品 lissy93/web-check；Bing×15 **0 long_gap** |
| [`bulk-batch/`](./bulk-batch/) | 存量单文件工具的**独立批量页**清单；`bulk` vs `batch` 搜法选型；**未 SERP** |
| [`pdf/`](./pdf/) | PDF Planner **1333** 词；**分场景独立 slug**（9 absorb + 22 defer）；禁 editor/converter 壳页；**未 SERP** |
| [`industry-scan/`](./industry-scan/) | 按行业（字幕、后期、出版、物流、记账、法务、数据运营、施工、烘焙）找未覆盖工具；WebSearch 抽查 14 条 × 5 语 **0 long_gap**；13 行 `defer`（P1：PDF 打码、字幕两件、楼梯规范） |
| [`subtitles/`](./subtitles/) | 字幕工具专项：23 次抽查 **0 long_gap**（字幕工具站多语铺满）；P0 核验现有音频生成 SRT 页的文件识别能力；P1 字幕格式转换（含乱码修复）作为簇基础页；上一轮两条字幕 P1 降为 P2；16 行（15 `defer`、1 `drop`）。另含浏览器 Whisper 能力覆盖图（2 页修复 + 5 页增量 + 4 个新 URL / 选项；模型托管待决策） |
| [`construction/`](./construction/) | 施工网站与工具专项：竞品站点地图、品类矩阵（对照 Omni/ToolDone）、8 语本地需求、文件类施工作业；14 行 `defer`（P1：混凝土页补配合比/袋规格/损耗、unit-converter 补坪/畳/亩、PDF 图纸算量、工地照片印时间/GPS） |
| [`excel/`](./excel/) | Excel Planner **1162** 词（软件品牌种子）；约七成 drop；公式/发票·预算·工时 **8** 页在 catalog；N9–N12 出图/看板/透视/打开已下线；禁 online-excel 壳；**未 SERP** |
| [`ocr-scan/`](./ocr-scan/) | OCR+Scan **2643** 行 + Text Converter **932** 词（2026-09-08）；N1 已实现；ASR/壳 drop；Word/HTML→TXT defer；**未 SERP** |

枢纽：[`../README.md`](../README.md) · 漏斗：[`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md) · 运维：[`../../ops/seo/keyword-to-tool-ops.md`](../../ops/seo/keyword-to-tool-ops.md)
