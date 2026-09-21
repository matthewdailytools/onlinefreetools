# Bulk remove photo EXIF

Status: implemented; direction A; YMYL: no; slug: `bulk-strip-photo-exif`; page.style: opts.

## Scope and acceptance
JPEG, PNG and static WebP → browser-decoded pixels → fresh PNG files plus CSV in ZIP; 20 files, 25 MiB each, 100 MiB total, 24 megapixels each. Pixels are re-encoded; original format, animation and color profiles are not preserved. EXIF orientation is applied by browser decoding.

Generated image sample automatically runs; files never uploaded. PNG-only output makes metadata removal auditable without fragile metadata parsers.

One file dropzone; primary Process → disabled-until-ready Download; Sample and Clear secondary. Three or more settings are collapsed. Gold HUD: percent, filename/page, phases, elapsed time and prominent progress. Disable controls while busy, clear stale output on input/settings changes. Successful batch files survive other failures; all-failed state is red. No cloud drives or remote uploads.

How: choose input, review settings, process, inspect output/report, download. Why: a specific output, explicit limits/failure handling, and local verification of results. Example uses real generated input through the production pipeline. FAQ covers privacy, output limitations and unsupported files. Related: `image-exif` plus existing same-topic tools; references: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob.

## 清单前检索覆盖
| 项目 | 结论 |
| --- | --- |
| 主检索词 → title/H1 | Bulk remove photo EXIF |
| 优化摘要 | 将泛格式转换主词缩为真实输入和输出任务；批处理、检查结果及失败行为写入说明，不把设置堆进标题。 |
| slug 结论 | 保留 `bulk-strip-photo-exif`，与邻页 `image-exif` 的主要产物或批量验收边界区分。 |
- [x] 已回写开发 / SEO 卡片：采用上面的标题、输出边界及按钮顺序。

## 用户意图审查
| 项目 | 判断 |
| --- | --- |
| 总判 | 满足用户明确提出的第 2 项任务；范围及失败规则已进入交互规格，未承诺无损还原或完美识别。 |

## 同意图相关搜索词
| 相关搜法 | 判定 | 页面生成落点 |
| --- | --- | --- |
| Bulk remove photo EXIF | 主词 | H1 |
| remove photo EXIF in bulk | absorb | desc |
| 批量清除照片 EXIF | absorb | title / How |
| 批量删除照片定位 | absorb | FAQ / usecase |
- [x] 上表已列全本次审查范围的同意图词；没有将此表冒充完整 SERP 数据。
- [x] 生成文案时按上表写入对应落点。

## Evidence and distinction
Current site neighbor: `image-exif`. Technical primary reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob. The planning session inspected public batch-watermark and batch-SVG product pages, not a complete ranked SERP. No unverified traffic or competitive superiority claims.
