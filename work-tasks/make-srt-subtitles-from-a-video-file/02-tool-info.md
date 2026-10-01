# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`make-srt-subtitles-from-a-video-file`  
**路径**：`/tools/make-srt-subtitles-from-a-video-file`  
**主方向**：A  
**YMYL**：否

> 与 `make-srt-subtitles-from-an-audio-file` 拆意图：本页主打 **video → timed SRT**（画面预览 + 仅接受视频）。共享 `/vendor/whisper`，调用时显式 `sliding_windows: true`（不改 loader 默认）。

## IG 预审

用户任务：本地视频文件（镜头/录屏/采访片）里的人声 → 可编辑带时间轴 `.srt`，文件不出本机。竞品多为云 ASR 或「先抽音再上传」；本站音频页虽接受带音轨视频，但 H1/首屏仍是音频向——搜 **video to srt** 的人需要独立着陆页（视频播放器、拒纯音频、文案与用例全是视频场景），避免 doorway 换皮。

权威：
- https://github.com/huggingface/transformers.js
- https://github.com/openai/whisper
- https://docs.fileformat.com/video/srt/

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 2 | 边界/失败 | 纯音频拒收；无音轨/解不了 → 明确错误；不烧录 |
| 6 | 本地隐私 | 同域 Whisper；不上服务器 |
| 8 | 数值示例 | Load sample → 可见 SRT |
| 9 | 主题内链 | related → 音频 SRT 页 + 波形视频 |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / T1 |
| Title (en) | Make SRT subtitles from a video file |
| Description | Make timed SRT subtitles from a local video file in your browser with on-device Whisper—files stay on your device and are not uploaded to a server. Steps: Choose a video with speech, play the clip to check it, pick language (or auto), Make SRT, edit cues, download .srt. Example: Load sample runs a short spoken MP4 through Whisper. First run downloads about 45 MB once (then cached). Audio-only files belong on the related audio SRT tool. Not burn-in; timings from Whisper segments. |
| page.style | `opts` |
| 技术 | 复用 `/vendor/whisper`（`sliding_windows: true`）；`decodeAudioData` 抽音轨；视频 `<video controls>` 预览；无麦克风；约 120 MiB / 约 2 小时 |
| related | `make-srt-subtitles-from-an-audio-file`；`make-a-waveform-video-from-audio` |
| Schema | WebApplication + BreadcrumbList |
| FAQ | on-device；video-only；≠ audio page；≠ burn-in；first download；privacy |
| IG | 2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 本地采访/口播 MP4、录屏、带对白短片 | Choose video → 预览画面 → Make SRT | 可编辑 `.srt` |
| 只有 WAV/MP3 | 拒收 + 指向音频 SRT 页 | 不在本页硬转 |

## 交互规格

- 进页**不**自动 loadSample（模型 ~45 MB）
- 金标 HUD：Model / Decode / Transcribe（窗 n/N）/ Write SRT；Stop 可中止并尽量保留部分 SRT
- 选文件后显示视频播放器（对照字幕）
- `loadSample` → `/samples/make-srt-subtitles-from-a-video-file.mp4`，强制语言 en
- 纯音频 → `err_audio_only` + related 链

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-01 |
| slug 结论 | **`make-srt-subtitles-from-a-video-file`**（修正用户草稿 an→a） |
| 主检索词 → title/H1 | video to srt / make srt from video / generate subtitles from video → **Make SRT subtitles from a video file** |
| 次要关键词 → desc / FAQ / Use cases | 视频生成字幕 → zh H1/FAQ；mp4 to srt → hint/usecase；caption video file → FAQ；whisper browser → desc；download srt → How |
| 用户搜索习惯判断 | 搜 video to srt 要的是「选视频→看画面→出 SRT」；不是纯音频备忘录页 |
| 优化摘要 | 与音频页拆主词；本页独占 video to srt 主意图；音频页 FAQ 互指 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| video to srt / make srt from a video file | absorb 主词 | H1 / How | 本页 |
| generate subtitles from video / caption a video file | absorb | desc / FAQ / usecase | 本页 |
| 视频生成字幕 / 视频转 srt | absorb 中文 | zh H1 / FAQ | 本页 |
| mp4 to srt / mov to srt | absorb 次词 | hint / usecase（容器举例，不拆 URL） | 本页 |
| whisper subtitles browser / local whisper | absorb 次词 | desc / FAQ | 本页 |
| audio to srt / 音频生成字幕 | 相邻异主输入 | FAQ + related | `make-srt-subtitles-from-an-audio-file` |
| burn subtitles into video / hardcode captions | 有意不满足 | FAQ | 只出 `.srt` |
| youtube auto captions download | drop | 不写 | 平台抓取 |
| waveform / audiogram video | 相邻 | related | `make-a-waveform-video-from-audio` |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（无本 slug 的 Planner 分析）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-01 |
| 总判 | **满足**：搜 video to srt 要选本地视频、听/看对白、下载 `.srt`。本页视频优先 + 样例 MP4 + 无麦克风抢首屏。 |
| 主词搜索者任务 | 本地视频文件 → 带轴字幕 sidecar |
| 超出 | 不做烧录、不做平台下载、不做纯音频（划到音频页） |
| 与音频页边界 | 输入类型 + 预览 + SEO 主词不同；共享引擎但不共享默认 UX |
| How 是否先答任务 | 是：选视频 → 预览 → Make SRT → 下载 |
| [x] 已回写 How / 交互 / FAQ | 见交互规格与卡片 |

## 页面模块清单

- [x] catalog shard `opts` + related ≥2
- [x] Page.ts 金标 HUD + loadSample（不自动）
- [x] 十语 i18n（母版后 phase=2；他语 phase=4）
- [x] icon SVG
- [x] README 中英条目
- [x] build:site + verify:tool
