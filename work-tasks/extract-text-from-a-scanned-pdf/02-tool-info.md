# Extract text from a scanned PDF

Status: implemented; direction A; YMYL: no; slug: `extract-text-from-a-scanned-pdf`; page.style: opts.

## Scope and acceptance
PDF → raster → OCR → editable UTF-8 TXT; one PDF, 12 MiB, selected range up to 20 pages; English, simplified Chinese, Japanese, Arabic OCR. Page errors skip with visible report.

OCR is click-only, including the raster sample, to avoid automatic model downloads.

One file dropzone; primary Process → disabled-until-ready Download; Sample and Clear secondary. Three or more settings are collapsed. Gold HUD: percent, filename/page, phases, elapsed time and prominent progress. Disable controls while busy, clear stale output on input/settings changes. Successful batch files survive other failures; all-failed state is red. No cloud drives or remote uploads.

How: choose input, review settings, process, inspect output/report, download. Why: a specific output, explicit limits/failure handling, and local verification of results. Example uses real generated input through the production pipeline. FAQ covers privacy, output limitations and unsupported files. Related: `batch-convert-scanned-pdf-to-word-with-ocr` plus existing same-topic tools; references: https://github.com/naptha/tesseract.js.

## 清单前检索覆盖
| 项目 | 结论 |
| --- | --- |
| 主检索词 → title/H1 | Extract text from a scanned PDF |
| 优化摘要 | 将泛格式转换主词缩为真实输入和输出任务；批处理、检查结果及失败行为写入说明，不把设置堆进标题。 |
| slug 结论 | 保留 `extract-text-from-a-scanned-pdf`，与邻页 `batch-convert-scanned-pdf-to-word-with-ocr` 的主要产物或批量验收边界区分。 |
- [x] 已回写开发 / SEO 卡片：采用上面的标题、输出边界及按钮顺序。

## 用户意图审查
| 项目 | 判断 |
| --- | --- |
| 总判 | 满足用户明确提出的第 1 项任务；范围及失败规则已进入交互规格，未承诺无损还原或完美识别。 |

## 同意图相关搜索词
| 相关搜法 | 判定 | 页面生成落点 |
| --- | --- | --- |
| Extract text from a scanned PDF | 主词 | H1 |
| scan PDF to text | absorb | desc |
| 扫描 PDF 转 TXT | absorb | title / How |
| 扫描件文字提取 | absorb | FAQ / usecase |
- [x] 上表已列全本次审查范围的同意图词；没有将此表冒充完整 SERP 数据。
- [x] 生成文案时按上表写入对应落点。

## Evidence and distinction
Current site neighbor: `batch-convert-scanned-pdf-to-word-with-ocr`. Technical primary reference: https://github.com/naptha/tesseract.js. The planning session inspected public batch-watermark and batch-SVG product pages, not a complete ranked SERP. No unverified traffic or competitive superiority claims.
