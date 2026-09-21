# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`make-a-waveform-video-from-audio`  
**路径**：`/tools/make-a-waveform-video-from-audio`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 audio to video；waveform video；audiogram；音频转视频；波形视频。常见结果为桌面剪辑、云上传或带歌词烧录的 SaaS。少有 **仅本机音频 → canvas 波形 + MediaRecorder、诚实 WebM、明确无 YouTube** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder 、https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream 、https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / A5 |
| Title (en) | Make a waveform video from audio |
| Description | Make a waveform video from audio in the browser: decode a local file, draw an audiogram-style waveform on canvas, record with MediaRecorder, then download. Steps: Choose audio, Make video, preview, download. Example: Load sample builds a short tone and records a moving waveform clip. Output is usually WebM—not MP4 remux, not a desktop NLE. Never uploaded. |
| page.style | `opts` |
| 技术 | decodeAudioData → canvas waveform + captureStream + MediaStreamDestination → MediaRecorder（多为 WebM） |
| related | extract-audio-from-a-video-file；trim-an-audio-clip-and-export |
| Schema | WebApplication + BreadcrumbList |
| FAQ | YouTube no；WebM honesty；≠ extract；≠ trim；privacy；encoder |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 播客切片发社交 | 选 MP3 → Make video → Download | WebM 波形成片 |
| 语音备忘预览 | 选 WAV → 录波形 | 短 audiogram |
| 样例验管线 | Load sample | 自动生成短片 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 `make-a-waveform-video-from-audio`（hub A5 草稿 slug） |
| 主检索词 → title/H1 | waveform video / audio to video / audiogram → Make a waveform video from audio |
| 次要关键词 → desc / FAQ | 音频转视频；波形视频 → desc；YouTube / extract / trim → FAQ 拒绝或划界 |
| 用户搜索习惯判断 | 搜「波形视频 / audiogram」者要本地音频变可分享成片，非代抓、非只抽音 |
| 优化摘要 | H1 任务句；FAQ anti-YouTube / ≠ A1 / ≠ S1；诚实 WebM |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| waveform video / audiogram / audio to video | absorb 主词 | H1 / How | 本页 |
| 音频转视频 / 波形视频 / 唱片可视化 | absorb 中文 | zh H1 / FAQ | 本页 |
| make audiogram from mp3 / waveform animation | absorb 次词 | desc / Use cases | 本页 |
| youtube download / youtube to mp4 | 有意不满足 | FAQ | 本页拒绝 |
| extract audio from video | 相邻（A1） | FAQ / related | extract-audio-from-a-video-file |
| trim audio clip | 相邻（S1） | FAQ / related | trim-an-audio-clip-and-export |
| burn lyrics karaoke video | 有意不满足 | FAQ / Rules | 本页不做烧词 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：本地音频 → 波形视频；诚实 MediaRecorder/WebM；拒 YouTube |
| 主词搜索者任务 | 选音频、录波形成片、预览、下载 |
| 满足之处 | dropzone、HUD、样例、十语 Rich |
| 超出 / 应划边界 | 不做 YouTube；不做抽音（A1）；不做专用裁剪（S1）；不承诺 MP4 remux / 烧词 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 单 dropzone：音频；主按钮 Make video；Download 无产物禁用。
- HUD Read/Decode/Draw/Write；时长跟音频。
- 样例：短正弦 WAV，自动制作；不自动播放。
- `opts`；诚实 WebM/重编码限制。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
