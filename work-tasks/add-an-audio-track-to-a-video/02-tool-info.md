# 工具信息

**状态**：`implemented`
**slug**：`add-an-audio-track-to-a-video`
**路径**：`/tools/add-an-audio-track-to-a-video`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 add audio to video；merge audio with video；视频添加音频。常见结果为桌面剪辑、云上传或 YouTube 代抓。少有 **仅本机视频+音频 → MediaRecorder 合并、诚实重编码限制、明确无 YouTube** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder 、https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F7 V2 |
| Title (en) | Add an audio track to a video |
| Description | Add an audio track to a local video in the browser by merging picture with a chosen soundtrack, then download the result. Steps: Choose a video and an audio file, Add audio, preview, download. Example: mute clip plus a short WAV bed. Uses captureStream plus MediaRecorder—often WebM; not lossless remux. Never uploaded. No YouTube download. |
| page.style | opts |
| 技术 | captureStream video + AudioContext audio → MediaRecorder |
| related | remove-the-audio-track-from-a-video；extract-audio-from-a-video-file |
| Schema | WebApplication + BreadcrumbList |
| FAQ | YouTube no；≠ mute；≠ extract；limits；privacy |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 无声成片配 BGM | 选视频+音频 → Add → Download | 带新音成片 |
| 弱声替换感 | 原音丢弃，铺新轨 | replace-ish |
| 样例验管线 | Load sample | 自动合并 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `add-an-audio-track-to-a-video`（hub F7 V2 草稿 slug） |
| 主检索词 → title/H1 | add audio to video / merge audio with video → Add an audio track to a video |
| 次要关键词 → desc / FAQ | 视频添加音频；soundtrack → desc；YouTube / mute / extract → FAQ 拒绝或划界 |
| 用户搜索习惯判断 | 搜「视频加音频」者要本地合并成片，非代抓、非只抽音 |
| 优化摘要 | H1 任务句；FAQ anti-YouTube / ≠ V1 / ≠ A1；诚实 WebM |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| add audio to video / merge audio with video | absorb 主词 | H1 / How | 本页 |
| 视频添加音频 / 给视频配音轨 | absorb 中文 | zh H1 / FAQ | 本页 |
| add soundtrack to video / put music on video | absorb 次词 | desc / Use cases | 本页 |
| youtube download / youtube to mp4 | 有意不满足 | FAQ | 本页拒绝 |
| remove audio / mute video | 相邻（V1） | FAQ / related | remove-the-audio-track-from-a-video |
| extract audio from video | 相邻（A1） | FAQ / related | extract-audio-from-a-video-file |
| replace audio in video | 近邻 V3 | FAQ 一句划界 | 本页 replace-ish，不拆 URL |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：本地视频+音频合并成片；诚实 MediaRecorder；拒 YouTube |
| 主词搜索者任务 | 选两文件、合并、预览、下载 |
| 满足之处 | 双 dropzone、丢原音铺新音、HUD、样例 |
| 超出 / 应划边界 | 不做 YouTube；不做只去音（V1）；不做只抽音（A1）；不承诺无损 MP4 remux |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 双 dropzone：视频 + 音频；主按钮 Add audio；Download 无产物禁用。
- HUD Read/Decode/Merge/Write；时长跟视频；原音轨丢弃。
- 样例：短静音画面 + 短音调，自动合并；不自动播放。
- `opts`；诚实 WebM/重编码限制。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
