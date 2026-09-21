# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`transcribe-an-audio-file-to-text`  
**路径**：`/tools/transcribe-an-audio-file-to-text`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 audio to text；transcribe audio；speech to text；音频转文字。常见为云 Whisper/上传 SaaS。少有 **诚实说明纯浏览器 SpeechRecognition 边界、文件播放环回不可靠、可回退麦克风口述、非 Whisper 克隆** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / A4 |
| Title (en) | Transcribe an audio file to text |
| Description | Transcribe local speech to text in the browser with SpeechRecognition when available—play a file while listening, or dictate with the mic. Steps: Choose audio, pick language, Transcribe while playing or Dictate with mic, edit, download TXT. Example: Load sample opens a short tone then runs the playthrough path (speech needs a real voice file or mic). Not a Whisper clone; no huge wasm model. Honest browser limits. Never uploaded by this page for processing. |
| page.style | `opts` |
| 技术 | SpeechRecognition + AudioContext playthrough；mic fallback |
| related | make-a-waveform-video-from-audio；record-a-voice-memo-in-the-browser |
| Schema | WebApplication + BreadcrumbList |
| FAQ | not Whisper；file vs mic；privacy/vendor；unsupported；≠ waveform video |
| IG | 1 规则；2 边界；6 本地意图；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 有人声文件 | 播放转写（环回） | TXT（视浏览器） |
| 无可靠环回 | Dictate with mic | 实时口述 TXT |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 `transcribe-an-audio-file-to-text`（hub A4） |
| 主检索词 → title/H1 | transcribe audio / audio to text / speech to text → Transcribe an audio file to text |
| 次要关键词 → desc / FAQ | 音频转文字；Whisper 边界 → FAQ；mic fallback → Rules |
| 用户搜索习惯判断 | 搜「音频转文字」要文稿；须诚实非云 Whisper |
| 优化摘要 | H1 任务句；FAQ not Whisper；诚实文件 ASR 边界 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| transcribe audio / audio to text / speech to text | absorb 主词 | H1 / How | 本页 |
| 音频转文字 / 语音转文字 | absorb 中文 | zh H1 / FAQ | 本页 |
| whisper transcription / cloud ASR | 有意不满足 | FAQ | 本页拒绝克隆宣称 |
| waveform video | 相邻（A5） | FAQ / related | make-a-waveform-video-from-audio |
| voice memo / mic record | 相邻（S7） | FAQ / related | record-a-voice-memo-in-the-browser |
| make srt subtitles | 近邻 T1 | FAQ 一句 | 本页出 TXT，不拆字幕页 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：尽力转写；诚实边界；mic 回退；非 Whisper |
| 主词搜索者任务 | 选文件或麦克风、得文本、下载 TXT |
| 满足之处 | 双路径、语言、HUD、样例、下载 |
| 超出 / 应划边界 | 不做云 Whisper；不做可靠离线文件 ASR；不做 SRT 主产品 |
| [x] 已按审查回写 | 进入 briefs |

## 文案丰富度

`description` 含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- dropzone；语言；Transcribe while playing；Dictate with mic；Stop；Download TXT。
- 无 SpeechRecognition → 警告条并禁用主按钮。
- Sample：短 WAV + 走播放路径。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
