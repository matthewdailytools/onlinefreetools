# 02 — Tool info

**状态**：`ready`  
**slug**：`batch-make-srt-subtitles-from-audio-files`  
**分类**：audio  
**风格**：opts  
**主任务**：多个本地音频逐件转写为可编辑、可独立下载的 SRT 字幕。

## SEO 卡片

- Title/H1: Batch make SRT subtitles from audio files and review each transcript
- Description: Turn several local audio files into separate editable SRT captions in your browser. Load Whisper once, review language, timestamps and row errors, then download each file without uploading audio.
- Lead: Choose 2–10 audio files and one spoken-language setting (Auto detect by default); each source gets its own editable caption result.
- How: choose files → choose spoken language if known → Make SRTs → review/correct every row → download individual SRTs.
- Settings: auto versus explicit speech language; no claim that page locale chooses transcription language.
- FAQ: model reuse; supported spoken languages; accuracy and silence; long input/memory; row failures; uploads.
- Use cases: caption podcast episodes separately; subtitle multiple interviews; transcribe recorded lessons for accessibility.

## 清单前检索覆盖

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 batch-make-srt-subtitles-from-audio-files；多文件串行推理和逐项可编辑下载区别于单件页 |
| 主检索词→title/H1 | batch audio to SRT / batch make SRT subtitles → Batch make SRT subtitles from audio files and review each transcript |
| 次词→desc/FAQ/Use cases | multiple audio files to SRT, bulk subtitles, batch audio transcription, multilingual captions → 首段、How、FAQ、场景 |
| 搜索习惯 | 用户要多来源独立字幕，关心转写语言是音频内容而非页面语言，以及文本/时间戳的可校正性 |
| 优化摘要 | H1 带多文件逐件结果；首段说明模型复用和可编辑；FAQ 澄清语言选择、精度与内存限额 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| batch audio to SRT / batch make SRT subtitles | 主任务 | H1、desc、How | 本页 |
| multiple audio files to subtitles | 同意图 | lead、How | 本页 |
| bulk audio transcription to captions | 同意图 | desc、Use cases | 本页 |
| multilingual audio to SRT | 功能条件 | language control、FAQ | 本页 |
| one audio file to SRT | 单件任务 | Related | 单件页 |
| merge audio / translate subtitles | 异意图 | FAQ 划界 | 不吸 |

- [x] 上表已列全本意图相关搜索，并注明单件、合并与翻译边界。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未见本批量音频转 SRT 意图的 Planner 长尾表。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：多文件独立 SRT，模型只加载一次，逐行编辑/下载/错误 |
| 主词任务 | 批量把多个音频转成各自字幕文件，并校正结果 |
| Ads/Planner | 不适用 |
| 满足之处 | 串行任务、自动或显式语音语言、每行可编辑 SRT 与下载 |
| 超出/边界 | 不做音频合并、翻译或保证逐字准确；不以页面语言代替音频语言 |
| 缺口与已做优化 | 模型点击后再加载，输出前显著说明自动语言识别及人工校对；空/静音结果逐行报错 |
| [x] 已回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 2–10 本地音频；每个 <=120 MiB、<=2 小时为代码保护值，设备可能更低；串行转写，模型只加载一次。
- 自动识别语音语言为默认；显式语言从 Whisper 支持的名称中选择，不受页面 UI 语言约束。
- 各行 cue 数、SRT 文本区可编辑、独立下载；损坏/静音/模型错误隔离。
- Load two samples 是主动操作，不在首屏自动加载约 45 MB 模型；进度 HUD 与停止/重试。

## 页面模块清单

- [x] 已完成覆盖及意图审查，可进入母版实现。
