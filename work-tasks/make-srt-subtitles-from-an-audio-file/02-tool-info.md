# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`make-srt-subtitles-from-an-audio-file`  
**路径**：`/tools/make-srt-subtitles-from-an-audio-file`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 audio to srt；generate subtitles from audio；音频生成字幕。常见为云 Whisper/上传 SaaS。少有 **诚实说明纯浏览器 SpeechRecognition、时间轴为识别时刻估算、可回退麦克风、非 Whisper、下载 .srt** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / T1 |
| Title (en) | Make SRT subtitles from an audio file |
| Description | Make timed SRT subtitles from local speech in the browser with SpeechRecognition when available—play a file while listening, or dictate with the mic. Steps: Choose audio, pick language, Make SRT while playing or Dictate with mic, edit cues, download .srt. Example: Load sample opens a short tone then runs the playthrough path (speech needs a real voice file or mic). Timestamps are best-effort from recognition timing—not frame-perfect Whisper. Not a Whisper clone; no huge wasm model. Honest browser limits. Never uploaded by this page for processing. |
| page.style | `opts` |
| 技术 | SpeechRecognition + 时钟拼 cue → SRT；mic fallback |
| related | transcribe-an-audio-file-to-text；make-a-waveform-video-from-audio |
| Schema | WebApplication + BreadcrumbList |
| FAQ | not Whisper；timing honesty；file vs mic；privacy；≠ plain TXT A4；≠ waveform video |
| IG | 1 规则；2 边界；6 本地意图；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 有人声文件 | 播放并生成 SRT（环回） | .srt（视浏览器） |
| 无可靠环回 | Dictate with mic | 口述相对时间 .srt |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 `make-srt-subtitles-from-an-audio-file`（hub T1） |
| 主检索词 → title/H1 | audio to srt / generate subtitles from audio → Make SRT subtitles from an audio file |
| 次要关键词 → desc / FAQ | 音频生成字幕；时间轴估算 → FAQ；mic → Rules |
| 用户搜索习惯判断 | 搜「音频生成字幕」要 .srt；须诚实非云 Whisper |
| 优化摘要 | H1 任务句；FAQ not Whisper；诚实时间轴与文件 ASR 边界 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| audio to srt / generate subtitles from audio | absorb 主词 | H1 / How | 本页 |
| 音频生成字幕 / 语音转字幕 | absorb 中文 | zh H1 / FAQ | 本页 |
| whisper subtitles / cloud ASR | 有意不满足 | FAQ | 本页拒绝克隆宣称 |
| audio to text / plain transcript | 相邻（A4） | FAQ / related | transcribe-an-audio-file-to-text |
| waveform video / audiogram | 相邻（A5） | FAQ / related | make-a-waveform-video-from-audio |
| burn-in / hardcode subtitles on video | 有意不满足 | FAQ | 本页只出 .srt 文件 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：尽力 SRT；诚实时间轴；mic 回退；非 Whisper |
| 主词搜索者任务 | 选文件或麦克风、得带轴字幕、下载 .srt |
| 满足之处 | 双路径、语言、HUD、样例、SRT 预览与下载 |
| 超出 / 应划边界 | 不做云 Whisper；不做帧级强制对齐；不烧录进视频 |
| [x] 已按审查回写 | 进入 briefs |

## 文案丰富度

`description` 含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- dropzone；语言；Make SRT while playing；Dictate with mic；Stop；Download SRT。
- 无 SpeechRecognition → 警告条并禁用主按钮。
- Sample：短 WAV + 走播放路径。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
