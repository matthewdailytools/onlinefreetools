# 02 — Tool info

**状态**：`ready`  
**slug**：`batch-trim-video-clips-by-time`  
**分类**：video  
**风格**：opts  
**主任务**：把多段视频按同一开始/结束时间分别剪为可下载 MP4。

## SEO 卡片

- Title/H1: Batch trim video clips by time and review each cut
- Description: Trim several local videos to the same start and end time in your browser. Check each clip’s actual cut range, duration and error, then download separate MP4 files without uploading.
- Lead: Choose multiple videos, enter one start and end time, trim each separately. A clip shorter than the requested end fails on its own row rather than being silently shortened.
- How: choose 2–20 videos → enter start/end seconds → Trim videos → inspect each actual duration and download each MP4.
- Settings: start and end seconds with visible units; H.264/AAC export is explicit. Do not imply keyframe-copy mode.
- FAQ: shorter clips; accuracy versus source keyframes; individual versus merged output; large output/OPFS; privacy; retry failures.
- Use cases: batch remove common intro/outro from recordings; cut the same 10–20 second segment from multiple takes; share separate exports for review.

## 清单前检索覆盖

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 batch-trim-video-clips-by-time；与单视频剪辑分开，因为统一时间规则和逐行异常处理是真实批量任务 |
| 主检索词→title/H1 | batch trim video clips → Batch trim video clips by time and review each cut |
| 次词→desc/FAQ/Use cases | trim multiple videos, batch cut video, same start and end time, split clips online → 首段、How、FAQ、场景自然覆盖 |
| 搜索习惯 | 用户关心同一时间区间批量裁切，也关心较短视频如何处理及输出是否是多文件 |
| 优化摘要 | 标题说明按时间逐件复核；说明把越界片段明确标错并允许其余片段继续；FAQ 解释精确重编码和大文件限制 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| batch trim video clips / batch trim videos | 主任务 | H1、desc、How | 本页 |
| trim multiple videos / cut videos in bulk | 同意图 | lead、Use cases | 本页 |
| same start and end time for videos | 同意图 | settings、How、FAQ | 本页 |
| batch remove intro from videos | 使用场景 | Use cases、FAQ | 本页 |
| trim a single video | 单件任务 | Related | 单件页 |
| merge, concatenate, split into scenes | 异意图 | FAQ 划界 | 不吸 |

- [x] 上表已列全本意图相关搜索：当前能力图、既有单件页与搜索搜法均已核对，同意图词自然落页。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入；不做关键词列表。

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未见本批量剪辑意图的 Planner 长尾表。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：共用起止时间、多输入、多独立产物、逐件越界错误、部分成功 |
| 主词任务 | 按同一时间区间批量裁剪视频，并拿到每个结果 |
| Ads/Planner | 不适用 |
| 满足之处 | 统一起止秒数、串行队列、逐行实际时长和错误、单件下载 |
| 超出/边界 | 不提供合并、场景切分或关键帧无损模式；高级音频选项折叠 |
| 缺口与已做优化 | 短视频不静默截到结尾，而是把越界错误写在该行；FAQ 明确重编码与时间精度取舍 |
| [x] 已回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 2–20 本地视频；公共开始/结束秒数，必须有限且结束大于开始；每行单独检查时长。
- 不足结束时间的输入以行错误结束，不影响其他项；无需把同一规则偷偷修改为适配各文件。
- 逐项 H.264/AAC MP4、实际时长、尺寸和体积；每件下载；OPFS 大结果、队列停止/重试。
- 默认两段足够长的短样例，自动加工并验收；进度含加载、检查、剪辑、校验与当前文件。

## 页面模块清单

- [x] 已完成覆盖及意图审查，可进入母版实现。
