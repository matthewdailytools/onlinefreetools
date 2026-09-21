# 工具信息

**状态**：`implemented`
**slug**：`remove-the-audio-track-from-a-video`
**路径**：`/tools/remove-the-audio-track-from-a-video`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 remove audio from video；mute video；视频去除音轨。常见结果为桌面 FFmpeg、在线上传静音、或捆绑「下载 YouTube」。少有 **仅本地视频 → 浏览器去掉音轨 → 下载静音成片、且 FAQ 明确不做 YouTube 代抓、诚实写重编码/WebM 限制** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream 、https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F7 V1 |
| Title (en) | Remove the audio track from a video |
| Description | Remove the audio track from a local video in the browser and download a muted clip. Steps: Choose a video, Remove audio, preview, download. Example: load a short sample with tone. Uses captureStream without audio tracks and MediaRecorder—often WebM output; not lossless remux. Never uploaded. No YouTube download. |
| page.style | opts |
| 技术 | video → captureStream (video-only) → MediaRecorder → muted download |
| related | extract-audio-from-a-video-file；mix-a-voiceover-with-background-music |
| Schema | WebApplication + BreadcrumbList |
| FAQ | no YouTube；WebM/re-encode limits；≠ extract audio；privacy |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 短片要静音再配新乐 | 打开本地视频 → Remove → Download | 静音成片 |
| 只要画面不要原声 | 同上 | 无音轨预览 |
| 样例验管线 | Load sample | 可复现 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `remove-the-audio-track-from-a-video` |
| 主检索词 → title/H1 | remove audio from video → Remove the audio track from a video |
| 次要关键词 → desc / FAQ | mute video → desc；youtube to mp3 → FAQ 拒绝 |
| 用户搜索习惯判断 | 搜 mute/remove audio 者要本地成片；禁止 YouTube 代抓承诺 |
| 优化摘要 | H1 去音轨；FAQ 强制 anti-YouTube + 诚实重编码 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| remove audio from video / mute video | absorb 主词 | H1 / How | 本页 |
| 视频去除音轨 / 视频静音 | absorb 中文 | zh H1 / FAQ | 本页 |
| strip audio from mp4 | absorb | desc / FAQ | 本页 |
| youtube to mp3 / download youtube | 有意不满足（drop） | FAQ | — |
| extract audio from video | 有意分场景 | related / FAQ | extract-audio-from-a-video-file |
| mix voiceover music | 有意分场景 | related | mix-a-voiceover-with-background-music |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：本地视频去掉声音 → 静音成片下载；诚实浏览器限制；拒绝 YouTube |
| 主词搜索者任务 | 选视频、去音、预览、下载 |
| 满足之处 | captureStream 无音轨 + MediaRecorder；样例；本地 |
| 超出 / 应划边界 | 不做 YouTube；不做无损 MP4 remux 承诺；不做抽音（A1） |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 anti-YouTube）；zh description ≥120。

## 交互规格（实现待落地）

- 单视频；体积/时长帽诚实。
- 主按钮 Remove audio；下载静音视频。
- HUD Read/Capture/Record/Write；空状态不自动样例。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
