# 工具信息

**状态**：`implemented`
**slug**：`replace-the-audio-in-a-video-file`
**路径**：`/tools/replace-the-audio-in-a-video-file`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 replace audio in video；change video soundtrack；替换视频音轨。常见桌面剪辑或云上传。少有 **仅本机视频+新音频 → 丢原音铺新轨、诚实 MediaRecorder 限制、明确无 YouTube** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder 、https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F7 V3 |
| Title (en) | Replace the audio in a video file |
| Description | Replace the soundtrack of a local video with another audio file in the browser, then download. Steps: Choose a video and a new audio file, Replace audio, preview, download. Example: clip with old tone swapped for a new WAV. Uses captureStream plus MediaRecorder—often WebM; not lossless remux. Never uploaded. No YouTube download. |
| page.style | opts |
| 技术 | captureStream video + AudioContext audio → MediaRecorder |
| related | add-an-audio-track-to-a-video；remove-the-audio-track-from-a-video |
| Schema | WebApplication + BreadcrumbList |
| FAQ | YouTube no；≠ mute-only；≠ add-only framing；limits；privacy |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 换 BGM | 选视频+新音频 → Replace → Download | 新音成片 |
| 错配音轨纠正 | 丢原音铺新轨 | 跟视频时长 |
| 样例验管线 | Load sample | 旧音→新音 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `replace-the-audio-in-a-video-file`（hub F7 V3） |
| 主检索词 → title/H1 | replace audio in video；change video soundtrack → Replace the audio in a video file |
| 次要关键词 → desc / FAQ | 替换视频音轨；swap soundtrack → desc；YouTube / mute / add → FAQ |
| 用户搜索习惯判断 | 搜「换音轨」者要替换原声成片，非代抓、非只静音 |
| 优化摘要 | H1 任务句；FAQ anti-YouTube / ≠ V1 / ≠ V2；诚实 WebM |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| replace audio in video / change video soundtrack | absorb 主词 | H1 / How | 本页 |
| 替换视频音轨 / 换 BGM | absorb 中文 | zh H1 / FAQ | 本页 |
| swap audio track / put new music on video | absorb 次词 | desc / Use cases | 本页 |
| youtube download | 有意不满足 | FAQ | 本页拒绝 |
| remove audio / mute video | 相邻（V1） | FAQ / related | remove-the-audio-track-from-a-video |
| add audio to video | 相邻（V2） | FAQ / related | add-an-audio-track-to-a-video |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：本地视频换新音轨成片；诚实 MediaRecorder；拒 YouTube |
| 主词搜索者任务 | 选两文件、替换、预览、下载 |
| 满足之处 | 双 dropzone、丢原音铺新音、HUD、样例 |
| 超出 / 应划边界 | 不做 YouTube；不做只去音（V1）；不做「无声加轨」主叙事（V2）；不承诺无损 MP4 remux |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 双 dropzone：视频 + 新音频；主按钮 Replace audio；Download 无产物禁用。
- HUD Read/Decode/Merge/Write；时长跟视频；原音轨丢弃。
- 样例：带旧音调的短视频 + 新音调，自动替换；不自动播放。
- `opts`；诚实 WebM/重编码限制。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
