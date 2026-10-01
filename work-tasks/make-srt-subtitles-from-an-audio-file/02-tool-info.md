# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`make-srt-subtitles-from-an-audio-file`  
**路径**：`/tools/make-srt-subtitles-from-an-audio-file`  
**主方向**：A  
**YMYL**：否

> 2026-09-30 升级：引擎从 SpeechRecognition 改为同域 **Whisper tiny q8**（transformers.js + onnxruntime-web，切片入库）。保留 slug；改交互与文案。

## IG 预审

用户任务：本地音频/视频人声 → 带时间轴的 `.srt`，不上传。竞品多为云 Whisper 或需账号；少有 **同域 vendor、首次下载体积诚实、切片过 Cloudflare 25 MiB、导出可编辑 SRT、语言芯片** 的单点页。

权威：
- https://github.com/huggingface/transformers.js
- https://github.com/openai/whisper
- https://docs.fileformat.com/video/srt/

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / T1 |
| Title (en) | Make SRT subtitles from an audio file |
| Description | Make timed SRT subtitles from a local audio or video file in your browser with an on-device Whisper model—files stay on your device and are not uploaded to a server. Steps: Choose a speech file, pick language (or auto), Make SRT, edit cues, download .srt. Example: Load sample runs a short spoken clip through Whisper and shows SRT. First run downloads ~45 MB of model files once (then cached). Not a cloud API; timings from Whisper segments. |
| page.style | `opts` |
| 技术 | `/vendor/whisper`：transformers.js 4.3.0 + ort wasm + whisper-tiny q8（decoder 切片）；金标 HUD；长文件页显式 `sliding_windows: true`（公共 loader 默认仍整段一次 ASR，兼容 POC/未来工具）；可选 Web Speech 麦克风口述作次路径；上限约 120 MiB / 约 2 小时 |
| related | `transcribe-an-audio-file-to-text`；`make-a-waveform-video-from-audio` |
| Schema | WebApplication + BreadcrumbList |
| FAQ | on-device Whisper；first download size；language auto；timing honesty；privacy；≠ plain TXT；≠ burn-in |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 本地人声 WAV/MP3/M4A 或带音轨视频 | Choose → language → Make SRT | 可编辑 `.srt` |
| 无文件、只想口述 | Dictate with mic（Web Speech，次路径） | 估算时间轴 `.srt` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-30 |
| slug 结论 | **保留** `make-srt-subtitles-from-an-audio-file`（升级引擎，不改 URL） |
| 主检索词 → title/H1 | audio to srt / generate subtitles from audio → **Make SRT subtitles from an audio file** |
| 次要关键词 → desc / FAQ / Use cases | whisper subtitles（on-device）→ desc/FAQ；音频生成字幕 → zh H1/FAQ；video to srt → hint/FAQ（抽音轨）；srt download → How/按钮 |
| 用户搜索习惯判断 | 搜「音频生成字幕 / audio to srt」要可下载 `.srt`；现时期望本地 Whisper 而非麦克风环回 |
| 优化摘要 | 文案从「非 Whisper / SpeechRecognition」改为「同域 on-device Whisper」；保留诚实：首次模型体积、句段时间戳非帧级、不烧录 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| audio to srt / generate subtitles from audio | absorb 主词 | H1 / How | 本页 |
| 音频生成字幕 / 语音转字幕 | absorb 中文 | zh H1 / FAQ | 本页 |
| whisper subtitles / local whisper / in browser whisper | absorb 次词 | desc / FAQ / Why | 本页（诚实 on-device） |
| video to srt / extract audio then subtitle | absorb 次词 | hint / FAQ（接受带音轨视频） | 本页 |
| srt download / download srt file | absorb 次词 | How / 按钮 | 本页 |
| audio to text / plain transcript | 相邻 | FAQ / related | `transcribe-an-audio-file-to-text` |
| waveform video / audiogram | 相邻 | FAQ / related | `make-a-waveform-video-from-audio` |
| burn-in / hardcode subtitles on video | 有意不满足 | FAQ | 本页只出 `.srt` |
| download youtube subtitles | drop | 不写 | 第三方平台抓取 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（无本 slug 的 Planner 分析；字幕专项词池为 defer 草稿）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-30 |
| 总判 | **满足**：搜「audio to srt」要的是选文件 → 得带轴字幕 → 下载 `.srt`。旧引擎听麦克风不满足文件任务；Whisper 修复该缺口。 |
| 主词搜索者任务 | 上传/拖入本地语音（或视频音轨），得到可编辑 SRT 并下载 |
| 满足之处 | 真读文件；语言芯片；金标 HUD（模型下载/解码/识别/写出）；预览编辑；下载；样例按钮；隐私同域 |
| 超出 / 应划边界 | 不做云 API；不做帧级强制对齐；不烧录进画面；不下载平台字幕；麦克风口述仅次路径 |
| 进页自动样例 | **有意不自动跑**（对照 OCR：首屏拉 ~45 MB WASM/模型会打坏 LCP）。`loadSample` 必须存在；点 Sample 才跑 |
| [x] 已按审查回写 | How 先「选文件→得 SRT」；FAQ 写首次体积与 on-device |

## 文案丰富度

`description` 含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- dropzone：`audio/*` + 常见视频（抽音轨）；显示文件名。
- 语言：`auto` + 常用语芯片（en/zh/ja/es/de/fr/pt/ru/ar/id）。
- 主按钮：**Make SRT**（读文件 → Whisper → 填预览）。
- 次按钮：Dictate with mic（Web Speech，可选；无 API 则隐藏/禁用并说明）。
- Stop / Clear / Load sample / Download SRT。
- **金标 HUD** 步骤：Model → Decode → Transcribe → Write SRT；显示模型下载进度与已用秒。
- 结果：可编辑 textarea；Download 在无文本时禁用。
- Sample：`/samples/make-srt-subtitles-from-an-audio-file.wav`（公开领域短演讲）；**不进页自动跑**。
- 进度 HUD：适用（模型/推理可感知等待）。
- 限制：建议时长帽（如 30 min）与体积帽；超限明确错误。

## 页面模块清单

- [x] H1 / 工具区 / 样例按钮 / 金标 HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
