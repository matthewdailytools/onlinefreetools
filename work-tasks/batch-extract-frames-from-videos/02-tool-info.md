# 02 — Tool info

**状态**：`ready`  
**slug**：`batch-extract-frames-from-videos`  
**分类**：video  
**风格**：opts  
**主任务**：从多个视频按相同时间点分别提取静态帧，并按来源目录下载。

## SEO 卡片

- Title/H1: Batch extract frames from videos into named folders
- Description: Extract matching frames from several local videos in your browser. Enter timestamps once, preview per-video results, and download one ZIP with separate folders, frame times and row errors.
- Lead: Choose 2–20 videos and common timestamps in seconds. Each video contributes a folder; a short or unreadable source is reported on its own row.
- How: choose videos → enter comma-separated timestamps → Extract frames → inspect manifest and per-video counts → Download ZIP.
- Settings: JPEG quality and output width optional; default two frames, 640px. No scene detection or arbitrary huge frame count.
- FAQ: timestamp accuracy, short videos, image formats, ZIP structure, browser storage, privacy.
- Use cases: compare the same moment across camera takes; generate contact evidence from recordings; assemble review screenshots by source.

## 清单前检索覆盖

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 batch-extract-frames-from-videos；多源同一时间点与按源目录分组区别于单件多帧页 |
| 主检索词→title/H1 | batch extract frames from videos → Batch extract frames from videos into named folders |
| 次词→desc/FAQ/Use cases | extract images from multiple videos, batch video screenshots, frames at timestamps, video to JPG batch → 首段、How、FAQ、场景 |
| 搜索习惯 | 搜索者要的是多源截图的可辨归属和完整下载，尤其关心时间点越界和文件量预算 |
| 优化摘要 | 标题引出逐来源目录；首段明确共同时间点和 ZIP 结构；FAQ 明确不做场景检测及时间精度 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| batch extract frames from videos | 主任务 | H1、desc、How | 本页 |
| extract images from multiple videos | 同意图 | lead、How | 本页 |
| batch video screenshots / thumbnails | 同意图 | Use cases、FAQ | 本页 |
| frames at timestamps / same frame time | 同意图 | settings、FAQ、example | 本页 |
| single video multiple frames | 单件任务 | Related | 单件页 |
| scene detection / video editing | 异意图 | FAQ 划界 | 不吸 |

- [x] 上表已列全本意图相关搜索，并明确单视频和场景检测分流。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未见本批量解帧意图的 Planner 长尾表。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：统一时间点、逐来源目录、可预览结果/错误、完整 ZIP |
| 主词任务 | 从多视频提取对应时间点图像，下载时保留来源归属 |
| Ads/Planner | 不适用 |
| 满足之处 | 同一时间表、每源独立文件夹、实际时间标注、部分成功 |
| 超出/边界 | 不做场景自动检测、无限截图或无损视频拷贝 |
| 缺口与已做优化 | 短片时间越界逐行报错；输入与输出预算前置显示，避免任务到最后才因 ZIP 内存耗尽失败 |
| [x] 已回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 输入 2–20 本地视频，公共逗号分隔时间点，默认 1、3 秒；每视频最多 8 帧，全批最多 80 帧。
- 可选 JPEG 宽度和质量，串行 seek/canvas；每个文件夹用安全化且去重的来源名，图像文件含实际时间。
- 解码/越界按行隔离，ZIP 包含成功帧与 manifest；总输出预算硬限制，禁止内存无限增长。
- 自动两文件样例应展示两个来源文件夹和可下载 ZIP。

## 页面模块清单

- [x] 已完成覆盖及意图审查，可进入母版实现。
