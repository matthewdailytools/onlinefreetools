# 浏览器端音视频能力全量图（工具 · 路径 · 实现方案）

Date: 2026-10-03
Scope: 站内已注册音/视频工具 + 已 vendor 引擎 + 单功能/综合/批量候选 + 大文件与 SEO 验收
Status: **能力规划图；候选未立项、未承诺上线**
Companion:  
- `docs/seo/keywords/subtitles/2026-09-30-whisper-capability-tool-map.md`  
- `docs/seo/keywords/subtitles/2026-09-30-subtitle-tools-deep-scan.md`  
- `dev-logs/2026-10/2026-10-01-13-21-extract-audio-p0-capability-registry.md`  
- Engine: `public/vendor/extract-audio/stable-extract.js` · `public/vendor/whisper/whisper-loader.js`
- 生产基线：`PAGES_CACHE_VERSION=4.90`；[2026-10-03 线上回归](../../dev-logs/2026-10/2026-10-03-11-46-production-490-av-regression.md)

本文的“全量”指当前已识别的本站可做作业，不是“浏览器支持所有格式/编码”。`是`仅表示 catalog 有页面；候选的相关搜法是**待 0b 核实的意图假设**，不是已跑 SERP/Planner 的词表。硬编码上限、真实设备能力、已验证最大样本分别记录，不互相替代。

---

## 0. 一页结论

1. **网页端不是桌面 ffmpeg。** 站内能力分三层栈：  
   - **A 栈 · PCM 音频**：`decodeAudioData` / `OfflineAudioContext` + `lamejs`（绝大多数音效/转换页）。  
   - **B 栈 · 视频抽音**：`OftExtractAudio`（小文件 decode / ISOBMFF demux+WebCodecs+OPFS / 非 ISOBMFF MediaElement 回退）。  
   - **C 栈 · 视频重编码**：`HTMLVideoElement.captureStream` + `MediaRecorder`（加/去/换音轨、波形视频）→ **输出多为 WebM**，时长与体积上限紧。  
   - **D 栈 · 文件语音识别**：同域 Whisper tiny q8（当前用于音频/视频 SRT）；旧 `transcribe-an-audio-file-to-text` 页仍走 `SpeechRecognition` 播放/麦克风路径，不能当作已验证文件直转写。
   - **V1 栈 · 视频重封装/转码**：已 vendor Mediabunny + AC-3 解码/AAC 编码扩展，MKV→MP4 AAC 单/批工具已实现。

2. **大文件诚实边界（抽音 B 栈）**  

| 容器族 | 路径 | 体积 | 时长 | 典型音轨 |
| --- | --- | --- | --- | --- |
| MP4 / M4V / MOV / M4A（ISOBMFF） | demux + WebCodecs + OPFS（无 OPFS≈1 GiB） | **≤ ~5 GiB** | ≤ ~6 h | AAC 族；拒 E-AC-3 / AC-3 / TrueHD / DTS |
| WebM / MKV / 其它 fallback | MediaElement 流式 MP3 | **≤ ~500 MiB** | ≤ ~4 h | 浏览器能播的轨 |
| 任意容器小文件 | `decodeAudioData` | ≤ ~40 MiB | ≤ ~15 min | 浏览器解码器支持的 |

3. **Witcher 类片（~2.8 GiB MKV + E-AC-3 5.1）仍不能在现有抽音页直接抽音**：超 fallback 上限，抽音引擎无 Matroska demux。现有 MKV→MP4 转换页可对**已验证兼容的**视频/音轨执行 AAC 立体声转码，再用 MP4 抽音页；纯 remux 不能替代音轨转换。完整剧集的成功率、耗时与磁盘需求须以实测为准。

4. **站内已有 Mediabunny 视频转换底座和 AC-3/AAC 扩展；抽音引擎仍无 Matroska demux；ffmpeg.wasm 未 vendor。** 不得把库支持某容器等同于当前页面支持任意视频轨和音轨。视频候选见 §4.6，按单功能、综合和批量产品形态的进一步划分见 §11。

5. **候选不等于已批准立项。** 每个新 slug 先做独立意图、检索覆盖、信息增益、编码与大文件 POC；§8 是未完成方向，D1–D3 已落地。

---

## 1. 浏览器原生能力（底座事实）

| API / 能力 | 能做什么 | 典型上限 / 风险 |
| --- | --- | --- |
| `decodeAudioData` | 整段解码 → PCM | 内存随时长线性涨；站内小文件约 **40 MiB / 15 min** |
| `AudioContext` / `OfflineAudioContext` | 效果、混音、重采样、导出 WAV | 同上；不负责容器 demux |
| `lamejs`（已 vendor） | PCM → MP3 | 站内标准 MP3 写出 |
| `<video>` / `<audio>` + `captureStream` | 播放时再采集 | 当前大文件抽音回退须 **1× 原速**以保时长和非静音；几 GB 不稳定 |
| `MediaRecorder` | 重编码成 WebM（偶发 MP4） | 输出多为 **WebM+VP8/VP9+Opus**；Chrome 对 `video/mp4` 支持参差 |
| WebCodecs `AudioDecoder` | 按包解码 AAC 等 | 需 demuxer 喂包；站内仅 ISOBMFF+mp4box |
| mp4box（已 vendor） | ISOBMFF 索引 / sample | **不做 Matroska** |
| OPFS | 大 MP3/MP4 流式写出 | 受浏览器配额/磁盘限制；已修复过早删除导致下载 Blob 失效的问题，仍须按设备验证 |
| Mediabunny（已 vendor） | MKV demux、MP4 mux、可用编码的 copy/转码 | 当前站内用于 MKV→MP4 AAC；不等于“所有 MKV 能转” |
| Whisper（transformers.js + ORT） | ASR → 文本 / 时间戳 | tiny q8；长音频滑窗；模型体积大 |

**浏览器通常不能稳定做的（勿在文案承诺）：**

- 任意容器任意编解码的「无损 remux」到 MP4  
- 所有设备对多声道 E-AC-3 / TrueHD / DTS 的通用解码（当前 Mediabunny 转换页有 AC-3 扩展，但须逐素材验证）
- 数 GB MKV 在标签页内「几分钟转完」  
- YouTube / 任意 URL 下载（合规与工程均不做）

---

## 2. 已 vendor 引擎清单

| 模块 | 路径 | 职责 | 依赖 |
| --- | --- | --- | --- |
| **OftExtractAudio** | `public/vendor/extract-audio/stable-extract.js` | 抽音：`getCapabilities` / `classifyFile` / `extractFile` | lamejs；demux 时懒加载 mp4box |
| **mp4box** | `public/vendor/extract-audio/mp4box.all.iife.js` | ISOBMFF demux | — |
| **lamejs** | `public/vendor/lamejs/lamejs.iife.js` | MP3 编码 | — |
| **Whisper loader** | `public/vendor/whisper/whisper-loader.js` | 同域 ASR、滑窗、16 kHz | transformers.bundle + ORT wasm + 切片模型 |
| **JSZip** | `public/vendor/jszip/` | 批量 ZIP | 批量抽音 / 批量 WAV→MP3 等 |
| **Mediabunny + AC-3/AAC 扩展** | `public/vendor/mediabunny/` | 当前 MKV→MP4 AAC 单/批转换；大文件 OPFS 写出 | `mediabunny`、`@mediabunny/ac3`、`@mediabunny/aac-encoder` |

**未 vendor：** ffmpeg.wasm。Mediabunny 虽可解析 Matroska，但 `OftExtractAudio` 的抽音路径目前仍未接入它；E-AC-3 等轨道必须按具体文件和浏览器能力测试，不能宣称通用支持。

npm 相关：`mp4box`、`@breezystack/lamejs`、`@huggingface/transformers`（见 `package.json`）。

---

## 3. 实现路径总览（四条栈）

```text
用户文件
  ├─ 纯音频作业 ──► A: decodeAudioData → OfflineAudioContext* → WAV / lamejs MP3
  ├─ 抽音轨     ──► B: classifyFile
  │                    ├ decode (≤40MiB)
  │                    ├ demux  (ISOBMFF ≤5GiB+OPFS)
  │                    └ fallback (非 ISOBMFF ≤500MiB MediaElement)
  ├─ 改视频音轨 ──► C / V0: captureStream + MediaRecorder → 多为 WebM（≤~80MiB / ≤~3min）
  ├─ 视频容器转换 ──► V1 Mediabunny（MKV→MP4 AAC 已上线；其它候选）/ V2 ffmpeg.wasm（未 vendor）
  └─ 出字幕/字 ──► (可选 B 抽音) + D: Whisper tiny → TXT / SRT
```
---

## 4. 全量工具清单（按族）

下列为 **音视频作业相关 slug**（排除误匹配的 OCR / 表格 / 缩略图计算器等）。  
「路径」指实现栈；「上限」为页面或引擎硬编码（以代码为准）。  
「是否已经实现」：**是** = catalog 已有对应工具页并可交互；**否** = 仅候选/未立项。

### 4.1 抽音 · Extract audio（B 栈 · OftExtractAudio）

| slug | 输入 | 路径 | 上限要点 | 是否已经实现 |
| --- | --- | --- | --- | --- |
| `extract-audio-from-a-video-file` | 混合视频 | hub：classify 三路 | 见 §0 表 | 是 |
| `batch-extract-audio-from-video-files` | 混合多文件 → ZIP | 同上串行 | 最多 30 文件 | 是 |
| `extract-audio-from-an-mp4-file` | `.mp4`/`.m4v` | demux / decode | ISOBMFF | 是 |
| `batch-extract-audio-from-mp4-files` | 多 MP4 → ZIP | 同上 | | 是 |
| `extract-audio-from-a-mov-file` | `.mov` | demux / decode | ISOBMFF | 是 |
| `batch-extract-audio-from-mov-files` | 多 MOV → ZIP | 同上 | | 是 |
| `extract-audio-from-a-webm-file` | `.webm` | fallback / decode | ≤500 MiB | 是 |
| `batch-extract-audio-from-webm-files` | 多 WebM → ZIP | 同上 | | 是 |
| `extract-audio-from-an-mkv-file` | `.mkv` | fallback / decode | ≤500 MiB；**无 5 GiB 宣称** | 是 |
| `batch-extract-audio-from-mkv-files` | 多 MKV → ZIP | 同上 | | 是 |

**输出：** WAV（小）或 MP3（大文件 demux/流式常强制 MP3）。  
**错误码：** `err_limit` / `err_container` / `err_codec` / `err_channels` / `err_format` / `err_decode` …

### 4.2 视频音轨编辑（C 栈 · MediaRecorder）

| slug | 作业 | 输入上限（约） | 输出 | 是否已经实现 |
| --- | --- | --- | --- | --- |
| `add-an-audio-track-to-a-video` | 画面 + 新音轨合成 | 视频 80 MiB / 音 40 MiB / **≤180 s** | 多为 WebM | 是 |
| `replace-the-audio-in-a-video-file` | 换音轨 | 同上 | 多为 WebM | 是 |
| `remove-the-audio-track-from-a-video` | 静音成片 | 视频 80 MiB / **≤180 s** | 多为 WebM | 是 |
| `make-a-waveform-video-from-audio` | 音频→波形视频 | 音 40 MiB / **≤180 s** | 多为 WebM | 是 |

**诚实限制：** 实时重编码；**不是**无损 mux；长剧集不适用。

### 4.3 语音识别 / 字幕（两种实现须分开）

| slug | 输入 | 上限（约） | 当前路径与结果 | 是否已经实现 |
| --- | --- | --- | --- | --- |
| `transcribe-an-audio-file-to-text` | 音频 | **40 MiB / 180 s** | 页面已注册；播放文件同时调用无音轨参数的 `SpeechRecognition.start()`，依赖浏览器/麦克风，**文件直转写尚未验收** | 页面是；稳定文件转写否 |
| `make-srt-subtitles-from-an-audio-file` | 音/视频 | **120 MiB** / **≤2 h**（页内） | D 栈 Whisper → SRT | 是 |
| `make-srt-subtitles-from-a-video-file` | 视频 | **120 MiB** / **≤2 h** | D 栈 Whisper → SRT | 是 |

SRT 模型：whisper-tiny q8、滑窗识别；**不做**说话人区分 / 任意语言互译。若要把转写 TXT 页标为稳定文件处理，应复用已验证的 Whisper 文件路径并完成真实文件→文本下载测试。

### 4.4 格式转换 · Convert（A 栈为主）

| slug | 方向 | 引擎要点 | 是否已经实现 |
| --- | --- | --- | --- |
| `convert-a-wav-file-to-mp3` | WAV→MP3 | decode + lamejs | 是 |
| `convert-an-mp3-file-to-wav` | MP3→WAV | decode → WAV | 是 |
| `convert-an-m4a-file-to-mp3` | M4A→MP3 | 浏览器能解的 AAC/M4A | 是 |
| `convert-a-flac-file-to-mp3` | FLAC→MP3 | 依赖浏览器能否 decode FLAC | 是 |
| `convert-an-ogg-file-to-mp3` | OGG→MP3 | Vorbis/Opus 视浏览器 | 是 |
| `convert-an-aiff-file-to-wav` | AIFF→WAV | decode | 是 |
| `bulk-convert-wav-files-to-mp3` | 批量 WAV→MP3 ZIP | lamejs + JSZip | 是 |
| `convert-audio-sample-rate-and-bit-depth` | 重采样/位深 | OfflineAudioContext | 是 |
| `convert-stereo-audio-to-mono` | 立体声→单声道 | PCM | 是 |
| `reduce-an-mp3-file-size` | 再编码降码率 | decode + lamejs | 是 |

**视频容器转换另见 §4.6：** `mkv→mp4` 单/批已实现；`webm→mp4` 单/批与 `mov→mp4` 单件已完成本地验收、尚未部署；`avi→mp4` 等尚未实现。

### 4.5 剪辑 / 拼接 / 响度 / 效果（A 栈）

实现模式同族：decode → 处理 → WAV/MP3。下表均为 catalog 已上线页。

| slug | 族 | 是否已经实现 |
| --- | --- | --- |
| `trim-an-audio-clip-and-export` | 剪辑 | 是 |
| `batch-trim-the-same-intro-from-audio-files` | 剪辑 | 是 |
| `remove-silence-from-a-recording` | 剪辑 | 是 |
| `split-an-audio-file-by-duration` | 剪辑 | 是 |
| `split-a-recording-on-silence` | 剪辑 | 是 |
| `make-a-30-second-mp3-ringtone` | 剪辑 | 是 |
| `make-a-seamless-audio-loop` | 剪辑 | 是 |
| `edit-audio-on-waveform` | 剪辑 | 是 |
| `join-audio-files-in-order` | 拼接混音 | 是 |
| `crossfade-two-audio-files` | 拼接混音 | 是 |
| `mix-a-voiceover-with-background-music` | 拼接混音 | 是 |
| `normalize-an-audio-file-to-peak` | 响度 | 是 |
| `make-a-quiet-recording-louder` | 响度 | 是 |
| `limit-peaks-so-a-file-does-not-clip` | 响度 | 是 |
| `compress-dynamic-range-of-a-voice-recording` | 响度 | 是 |
| `boost-bass-on-an-mp3` | 响度 | 是 |
| `eq-a-muffled-voice-recording` | 响度 | 是 |
| `de-ess-a-voiceover` | 响度 | 是 |
| `reduce-background-noise-on-a-voice-memo` | 清理 | 是 |
| `remove-mains-hum-from-a-recording` | 清理 | 是 |
| `remove-clicks-from-a-recording` | 清理 | 是 |
| `change-audio-speed-without-changing-pitch` | 变速变调效果 | 是 |
| `shift-the-pitch-of-a-song` | 变速变调效果 | 是 |
| `shift-a-recording-toward-a-higher-or-lower-voice` | 变速变调效果 | 是 |
| `apply-a-toy-voice-effect-to-a-recording` | 变速变调效果 | 是 |
| `add-reverb-to-an-audio-clip` | 变速变调效果 | 是 |
| `make-a-slowed-and-reverb-clip` | 变速变调效果 | 是 |
| `make-an-8d-panning-version-of-a-song` | 变速变调效果 | 是 |
| `reverse-an-audio-file` | 变速变调效果 | 是 |
| `fade-in-and-fade-out-an-audio-clip` | 变速变调效果 | 是 |
| `generate-a-sine-tone-at-a-frequency` | 生成 | 是 |
| `generate-dtmf-touch-tones` | 生成 | 是 |
| `make-a-short-ui-notification-sound` | 生成 | 是 |
| `edit-mp3-title-and-cover-art` | 元数据 | 是 |
| `extract-cover-art-from-an-mp3` | 元数据 | 是 |
| `embed-lyrics-in-an-mp3` | 元数据 | 是 |
| `record-a-voice-memo-in-the-browser` | 录音 | 是 |
| `record-a-voiceover-with-a-teleprompter` | 录音 | 是 |

**共同边界：** 输入体积通常按「浏览器能整段 decode」设计（常与 ~40 MiB 同级）；**不**声称支持剧集级视频文件。

### 4.6 视频转换工具清单（浏览器可完成）

本节只列 **本地文件、不上传、能在浏览器跑完** 的视频转换 / 重封装作业。  
不含：URL/YouTube 下载、云转码、桌面 ffmpeg 包装页。

#### 4.6.1 浏览器实现分档（视频转换底座）

| 档 | 引擎 | 能做什么 | 典型上限 / 诚实点 | 站内状态 |
| --- | --- | --- | --- | --- |
| **V0 · MediaRecorder 重录** | `<video>.captureStream` + `MediaRecorder` | 任意「能播」的短片 → **多为 WebM**（偶发 mp4 MIME） | ~**80 MiB / 3 min**；实时≈片长；**有损重编码** | **已用**于加/去/换音轨、波形成片 |
| **V1 · Mediabunny + 浏览器编解码器** | 已 vendor Mediabunny、AC-3/AAC 扩展；抽音另用 mp4box | MKV→MP4 AAC；WebM/MOV→H.264 MP4 单/批；MP4→VP9/Opus WebM 单件；其它组合仍待测 | 受输入轨、目标编码器、OPFS 配额限制；每种组合须实测 | **MKV→MP4 单/批已上线**；WebM/MOV 单/批与 MP4→WebM 单件已本地验收、尚未部署；其它方向仍为候选 |
| **V2 · ffmpeg.wasm** | 同域 vendor WASM | 覆盖面最广（含部分冷门容器） | 包体大、首载慢；2–3 GiB 仍重，须 OPFS | **未 vendor** |

**选型原则：** 短片/社交成片优先 V0；「WebM↔MP4 / MOV→MP4 / 压缩 / 裁剪」优先 V1；仅当 V1 编解码不够再评估 V2。  
**禁止**用 V0 冒充「无损转 MP4」或「支持 2.8G 剧集」。

#### 4.6.2 已上线（邻接「转换」· 非格式对落地页）

这些页**改变视频文件**，但 slug 不是 `convert-*-to-*`；实现均属 **V0**：

| slug | 用户作业 | 输入 | 输出 | 浏览器路径 | 是否已经实现 |
| --- | --- | --- | --- | --- | --- |
| `add-an-audio-track-to-a-video` | 画面 + 新音轨 | 视频+音频 | 多为 **WebM** | V0 | 是 |
| `replace-the-audio-in-a-video-file` | 换音轨 | 视频+音频 | 多为 **WebM** | V0 | 是 |
| `remove-the-audio-track-from-a-video` | 静音成片 | 视频 | 多为 **WebM** | V0 | 是 |
| `make-a-waveform-video-from-audio` | 音频→波形视频 | 音频 | 多为 **WebM** | V0 | 是 |

**相关但非视频容器转换：**

| slug | 说明 | 是否已经实现 |
| --- | --- | --- |
| `images-to-gif` | **图片序列→GIF**（已有 `gifenc`）；不是「视频→GIF」 | 是 |
| `batch-convert-web-pages-to-jpg` / `png` / `pdf` | **网页截图**，不是本地视频转码 | 是 |
| 全部 `extract-audio-from-*` / `batch-extract-*` | **抽音**（B 栈），输出 WAV/MP3，不是视频容器转换 | 是（见 §4.1） |

**剩余空白：** 已有 MKV→MP4 AAC 单/批页；WebM/MOV→H.264 MP4 单/批、MP4→VP9/Opus WebM、视频→GIF、抽帧、裁剪、压缩、旋转、变速、字幕烧录与顺序拼接页均已完成本地验收、尚未部署。软字幕轨 mux 和部分视频批量作业仍待立项；本地完成不代表生产已上线。

#### 4.6.3 转换工具清单（已上线、本地已验收与候选）

下列是**作业方向和建议实现路径**，不是所有行均已验证可用；实际状态以“是否已经实现”列为准，剧集级 DDP 等见 §6.1。

**A. 容器 / 格式对（单文件，优先）**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `convert-a-webm-file-to-an-mp4-file` | WebM→H.264 MP4 | **V1**（Mediabunny + 编码探测） | **本地 Chrome 已测** | **本地已实现；未部署（2026-10-03）** | VP9/Opus→H.264/AAC；108 MiB/90 秒输入经下载与 `ffprobe` 验证；强制重编码视频，不能只 copy VP9 |
| `convert-an-mp4-file-to-a-webm-file` | MP4→VP9/Opus WebM | **V1 · WebMOutputFormat + OPFS** | **本地 Chrome 已测** | **本地已实现；未部署（2026-10-03）** | >80 MiB/90 秒输入→约 406 MB WebM 下载、VP9 轨/时长复检通过；输出不保证更小；十语、无音轨、HEVC、缺编码器与停止重试通过 |
| `convert-a-mov-file-to-an-mp4-file` | MOV→H.264 MP4 | **V1**（H.264 视频 copy；现有声音→AAC） | **本地 Chrome 已测** | **本地已实现；未部署（2026-10-03）** | 130 MiB/90 秒 MOV→>80 MiB OPFS MP4 下载通过；H.264 原视频包哈希一致；PCM→AAC；HEVC 当前 Chrome 不可解码时明确拒绝，避免只有声音的假成功 |
| `convert-an-mkv-file-to-an-mp4-file` | MKV→MP4（**须 AAC**） | **V1** mediabunny+ac3+aac-encoder | **中** | **是（2026-10-01）** | 音轨强制 AAC 立体声；OPFS 流式约 **5 GiB**（无 OPFS≈1 GiB）；≠纯 remux |
| `convert-an-avi-file-to-an-mp4-file` | AVI→MP4 | V2 为主 | **低–中** | 否 | 编解码碎片大；勿作首发 |
| `batch-convert-webm-files-to-mp4-files` | 多 WebM→逐项 MP4 下载 | **V1 + 串行受控队列** | **本地 Chrome 已测** | **本地已实现；未部署（2026-10-03）** | 两段同名、混入坏片/部分成功、20 项、>80 MiB/90 秒输入、无 OPFS 与停止重试通过；输出强制 H.264/AAC 并逐件验证；大 ZIP 不在内存汇聚 |
| `batch-convert-mov-files-to-mp4-files` | 多 MOV→逐项 MP4 下载 | **V1 + 串行受控队列** | **本地 Chrome 已测** | **本地已实现；未部署（2026-10-03）** | 20 项、同名、PCM→AAC 与 H.264 包复制、HEVC 逐行拒绝、130 MiB 输入→>80 MiB 输出 OPFS 下载通过；大 ZIP 不在内存汇聚 |
| `batch-convert-mkv-files-to-mp4-files` | 多 MKV→ZIP | V1/V2 + JSZip | **中** | **是（2026-10-01）** | 行级失败 + 部分 ZIP |

**B. 视频→其它媒体**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `convert-a-video-file-to-a-gif` | 短视频→GIF | V0 Blob URL 抽帧 + **gifenc** | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 与 `images-to-gif` 分工：输入是视频；>80 MiB 输入仅抽 1 秒窗口、80 帧停止重试、十语实际 GIF 下载通过；代码上限 1 GiB 输入、10 秒/100 帧/2000 万像素/30 MiB 输出，非实测最大值 |
| `extract-frames-from-a-video-as-images` | 按间隔/单时间点出 JPG/PNG | Blob URL seek + Canvas | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 默认 3 张 JPG、指定秒 PNG、>80 MiB 输入取 35 秒帧、30 张停止重试、十语实际 ZIP 下载通过；代码上限 1 GiB 输入、60 帧/3000 万像素/32 MiB 图片总量，非实测最大值 |
| `make-a-video-thumbnail-image` | 指定秒封面图 | 抽帧页单时间点模式 | **本地 Chrome 已测** | **吸收进抽帧页，不另开 slug** | 相同输入/静图产物；本页单张模式显示实际时间、尺寸和字节数 |

（抽音已有专族，**不再**用 `convert-mp4-to-mp3` 空壳 URL；同意图词 absorb 进 extract 页。）

**C. 编辑型「转换」（成片仍是视频）**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `trim-a-video-clip-and-export` | 按起止保留连续片段 | **V1** Mediabunny trim + H.264/AAC 重编码；大输入 OPFS | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 8 秒样例取 2–5 秒，首帧图像与源 2 秒匹配，视频轨 3.000 秒、AAC 约 3.042 秒；MOV/WebM、无声、>80 MiB 输入取 35–37 秒、停止重试、无 OPFS 拒绝大任务和十语实际 MP4 下载通过。代码上限有 OPFS 5 GiB、无 OPFS 80 MiB，非实测最大值；非零起点重编码，不承诺无损秒切 |
| `compress-a-video-file` | 降分辨率/码率并比较实际体积 | **V1** H.264/AAC 重编码 + OPFS | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 默认样例实际缩小；MOV/WebM、240p 输出尺寸、近似目标体积、原片已高效时变大均实测；>80 MiB 输入经 OPFS 下载、停止重试、无 OPFS 拒绝和十语实际下载通过；有损且不承诺必中目标体积 |
| `resize-a-video-to-a-target-resolution` | 缩放到目标高度 | 压缩页目标高度模式 | **本地 Chrome 已测** | **吸收进视频压缩页，不另开 slug** | 相同输入/重编码产物；保留比例且不放大，结果显示实际像素，满足 720p 等降分辨率意图 |
| `change-video-speed` | 0.5–2× 变速成片 | **V1** 视频重编码、音频重采样或短片 WSOLA、OPFS | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 随速变调、≤60 秒近似保调或静音；0.5/0.75/1.25/1.5/2× 实际时长、音调与 A/V 起点复检；30 秒立体声保调→60 秒下载、>80 MiB OPFS、坏文件、停止重试、无 OPFS 拒绝及十语实际下载通过；AAC 尾部填充约数十毫秒，保调可能有处理痕迹 |
| `rotate-a-video-file` | 旋转 90/180/270 并将方向写入画面像素 | **V1** H.264/AAC 重编码 + OPFS | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 640×360 样例真实 90°→360×640、180°→640×360、270°→360×640；像素颜色位置和无 rotation 标记验证非仅改 metadata；MOV/WebM、坏文件、>80 MiB OPFS、停止重试、无 OPFS 拒绝、十语实际下载通过；不称无损 |
| `merge-video-clips-in-order` | 多段按序拼接为一个文件 | Mediabunny 逐段解码/重编码 + OPFS | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | WebM+MOV 混合来源和 44.1/48 kHz 音频、异尺寸画布、交换排序后真实画面顺序、无声时段、>80 MiB 输入、65 秒时间轴、停止重试及十语手机端 MP4 下载通过；500 MiB 总输入是代码上限，非已测最大值，不称无损 |
| `convert-a-video-to-an-mp4-with-aac-audio` | 混合来源进 MP4+AAC | Mediabunny + OPFS | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 单页接 MOV/WebM/MKV/MP4，来源 H.264 可复制，其它按设备能力转码；输出二次验轨，勿拆近义 URL |

**D. 字幕相关视频写出（浏览器可做，体验档不同）**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `burn-subtitles-into-a-video` | 已有 SRT/VTT 烧进画面 | Mediabunny 逐帧 Canvas + OPFS | **本地 Chrome 已测** | **本地已验收；未部署（2026-10-03）** | 自动样例字幕仅在指定时段形成真实像素，H.264/AAC MP4 验轨；VTT、坏字幕后重试、65 秒视频、>80 MiB 输入、停止重试和十语手机端下载通过；不做自动转写，烧录必重编码 |
| `add-soft-subtitles-to-an-mp4` | 软字幕轨 mux | **V1**（ISOBMFF） | **中** | 否 | 需 mux 字幕轨；非烧录 |

#### 4.6.4 转换对 × 底座速查（浏览器）

| 输入 → 输出 | V0 MediaRecorder | V1 WebCodecs/mux | V2 ffmpeg.wasm |
| --- | --- | --- | --- |
| WebM → MP4 | 弱（输出常仍是 WebM） | **推荐** | 可用 |
| MP4 → WebM | 短片可用 | **推荐** | 可用 |
| MOV → MP4 | 短片可用 | **推荐**（常 remux） | 可用 |
| MKV → MP4（AAC） | 不适合大文件 | **首选尝试** | **兜底** |
| MKV+E-AC-3 → MP4 | 不适合长片 | V1 已有 AC-3 扩展，**按具体轨道实测** | 未 vendor；不能当现有兜底 |
| 任意 → GIF（短） | 抽帧+gifenc | 可选 | 可选 |
| 裁剪 / 压缩 / 旋转 | 短片凑合 | **推荐** | 可用 |
| 烧录字幕 | 实时 1× | 更好 | 常用竞品路径 |

#### 4.6.5 建议落地顺序（仅视频转换 · 仍待确认）

1. **已落地：** Mediabunny V1 底座与 MKV→MP4 AAC 单/批页；WebM/MOV→H.264 MP4 单/批及 MP4→VP9/Opus WebM 单件已完成本地验收，尚未部署。
2. **单件已本地验收：** `convert-a-mov-file-to-an-mp4-file` 已验证 H.264/AAC、H.264/PCM 和 HEVC/AAC 三类轨道边界，130 MiB/90 秒的实际下载、OPFS 清理及十语页面；仍待跨浏览器设备验证与部署。
3. **新验收：** `convert-a-video-file-to-a-gif`、`extract-frames-from-a-video-as-images`、`trim-a-video-clip-and-export` 已分别完成真实下载和十语移动端本地验收；均未部署。
4. **本地新增验收：** `compress-a-video-file`、`rotate-a-video-file` 与 `change-video-speed` 已完成独立页面、十语信息增益和真实文件/大文件回归；均未部署。旋转是像素重编码；变速导出是真实改变时间轴，并提供随速变调、短片近似保调或静音。
5. **最后：** 对应 batch 页在单文件验收后再拆；先解决超大输出的 ZIP/逐项下载策略。

每页仍须独立 IG（路径/上限/失败码），禁止只换 H1 的 doorway。

---

## 5. 格式 × 能力矩阵（决策用）

| 格式 / 编解码 | 抽音 decode | 抽音 demux | 抽音 fallback | 视频 C 栈输入 | 转 MP3（A） | Whisper |
| --- | --- | --- | --- | --- | --- | --- |
| MP4 + AAC | ✓ 小 | ✓ 大 | — | ✓（再录 WebM） | 经抽音/解码 | 经解码 |
| MOV + AAC | ✓ 小 | ✓ 大 | — | ✓ | 同上 | 同上 |
| M4A / AAC | ✓ | ✓（当 ISOBMFF） | — | 作音轨 | ✓ | ✓ |
| WebM + Opus/Vorbis | ✓ 小 | ✗ | ✓ ≤500MiB | ✓ | 视浏览器 | 视解码 |
| MKV + AAC/Opus（小） | 视浏览器 | ✗ | ✓ ≤500MiB | 部分页 accept | 弱 | 弱 |
| MKV + E-AC-3 / DTS | ✗ | ✗ 拒 | 大文件直接拒 | ✗ | ✗ | ✗ |
| FLAC / OGG / WAV / MP3 | ✓ | ✗ | ✗ | 作音轨 | ✓（对端格式） | ✓ |
| AVI / MPEG-PS | 不可靠 | ✗ | 名义 fallback，实测差 | 基本不支持 | ✗ | ✗ |

---

## 6. 缺口与候选实现方案（未开工）

### 6.1 剧集级 MKV / DDP（Witcher 类）

| 方案 | 内容 | 工程量 | 能否覆盖 Witcher |
| --- | --- | --- | --- |
| **P0 诚实引导** | FAQ/hint：本机 `ffmpeg` 转 AAC MP4 → 现有抽音页 | 文案 | ✓（站外一步） |
| **已落地 Convert MKV→MP4（AAC）** | Mediabunny + AC-3/AAC 扩展 + OPFS；单文件页 | 已完成底座，仍需逐编码/多 GiB 回归 | 条件性可行，2.8 GiB 剧集不以页面上限代替实测 |
| **已落地 Batch convert** | 同引擎 + 串行队列/ZIP | 已有页面，持续验收 | 部分失败保留成功项；大 ZIP 内存另测 |
| **P2 Matroska demux + 抽音** | 扩展 OftExtractAudio | 大 | 仅当音轨可解 |
| **P3 E-AC-3 WASM** | 专解 DDP | 很大 | 才真正「原片直抽」 |

**推荐产品叙事（若做转换页）：**  
「Convert MKV to MP4 (AAC stereo)」→ related「Extract audio from an MP4 file」  
**禁止：** 「批量转 MP4」暗示纯换壳即可抽 Atmos。

### 6.2 视频转换 / C 栈增强

完整候选表见 **§4.6**。摘要：

| 想法 | 评价 |
| --- | --- |
| WebM↔MP4 / MOV→MP4 | **浏览器可完成（V1）**；建议首发 |
| MKV→MP4（AAC） | 浏览器可完成但依赖编解码；大文件+E-AC-3 重 |
| 输出真 MP4（H.264+AAC）替代现 V0 WebM | V1 mux；加/去/换音轨可后续迁 |
| trim / compress / rotate / merge | V1；短片也可用 V0 |
| 视频→GIF | V0 抽帧 + 已有 gifenc；高可行 |
| 支持 >3 min / >80 MiB（仅 V0） | 不够；须上 V1/V2 |
| 烧录字幕 | 见字幕专项；V0 慢、V1/V2 更合适 |

### 6.3 Whisper 增量

见既有 Whisper 能力图：filler 剪辑、改字即剪、模型托管决策等。**与抽音大文件无关。**

### 6.4 明确不做 / 合规不做

- 任意网站视频下载器（已有 SERP 扫描归档，不建站内下载器）  
- 声称「支持所有 MKV」或「支持 Atmos」而无解码证据  
- 仅换 title 的「mkv to mp3」空壳（无独立路径/上限 IG）

---

## 7. 文案与 IG 对齐规则（相似工具）

每条路径族落地页必须写清且互相可区分：

1. **accept 真实集合**（本页拒什么、链到哪）  
2. **路径名 + 数字上限**（demux 5 GiB vs fallback 500 MiB）  
3. **编解码诚实**（AAC vs E-AC-3）  
4. **Why choose / FAQ 对照兄弟页**（「为何不如 MP4 页」）  
5. **输出容器**（WAV/MP3 vs WebM 成片）

自检：把「MP4」全局换成「MKV」，句子是否仍成立？成立 → 零增益。

---

## 8. 已有决策与尚未完成的方向

以下是历史决策状态；后续候选按每个 slug 的 POC、检索覆盖与立项门禁推进。

- [x] **D1** 维持现状：大 MKV/DDP 仅文案引导本机 ffmpeg → AAC MP4 → 现有抽音页（**已实现 2026-10-01**：MKV 单/批 + 枢纽 FAQ/hint/err_*）  
- [x] **D2** 立项 **单文件** `convert-an-mkv-file-to-an-mp4-file`（含 **AAC 转码**；底座 **mediabunny + @mediabunny/ac3 + @mediabunny/aac-encoder**；**已实现 2026-10-01**）  
- [x] **D3** 在 D2 绿后再做 **批量** convert（`batch-convert-mkv-files-to-mp4-files`；**已实现 2026-10-01**） 
- [ ] **D4** 扩展抽音引擎 Matroska demux（仍可能卡在 E-AC-3）  
- [ ] **D5** 另开 E-AC-3/多声道解码调研（独立 POC，不绑 SEO 批量建页）  
- [ ] **D6** 视频 C/V0：提高时长/体积 或 真 MP4 输出（与抽音脱钩）  
- [ ] **D7** Whisper 增量按既有地图推进（与 Witcher 问题无关）  
- [x] **D8（首对本地验收）** `convert-a-webm-file-to-an-mp4-file` 选用 **V1 mediabunny** 并强制 H.264/AAC；十语页面、真实下载及 108 MiB/90 秒 WebM 回归已通过，尚未部署。MOV 是下一独立方向。
- [ ] **D9** 视频编辑转换：`trim-a-video-clip-and-export` / `compress-a-video-file` / `convert-a-video-file-to-a-gif` 是否进入同批 roadmap  

**下一优先：** WebM/MOV→MP4 单件及对应两个批量页已完成本地验收，均未部署。批量 MOV 已完成 20 项队列与 >80 MiB 产物测试。下一项按 §11 优先级进入其余单功能与综合候选，先实测编解码和大文件路径。D9 按需求插入；D4/D5 须独立 POC。

---

## 9. 本地验收锚点（抽音）

- Dev：`http://127.0.0.1:8787/tools/extract-audio-from-a-video-file`  
- 大 MP4 demux：`/tmp/ea-fixtures/large-stream.mp4` → `mp4-webcodecs`  
- Witcher MKV：classify → `err_container`（预期）  
- 引擎能力快照：页面控制台 `OftExtractAudio.getCapabilities()`

---

## 10. 修订记录

| 日期 | 变更 |
| --- | --- |
| 2026-10-01 | 初版：全量工具族 + 四栈路径 + 格式矩阵 + Witcher/转换方案 + 确认清单 |
| 2026-10-01 | 增补 **§4.6 视频转换工具清单（浏览器可完成）**：V0/V1/V2 分档、已上线邻接页、候选 convert/trim/compress/gif、速查表；§8 增加 D8/D9 |
| 2026-10-01 | 各工具表增加列 **是否已经实现**（是/否）；§4.5 改为表格 |
| 2026-10-03 | 对齐生产 4.90 与已 vendor Mediabunny；增加 §11–13 的单功能/综合/批量候选、大任务与大文件验收合同、关键词/IG/描述门禁；§11.4 补齐现有单页能否另起 batch slug 的逐族判定。 |

---

## 11. 产品形态全量枚举：单功能 S、综合 C、批量 B

本节是**可实现作业清单与页面决策表**，不是立即创建 URL 的清单。§4 已列出已注册工具；这里把现有页和新增候选统一按用户要完成的任务组织。`短`=整段 PCM、抽帧或实时录制；`流`=可研究逐包读取 + OPFS/可写流；`待测`=须先证明目标编码、同步和真实下载。即使标 `流`，也不等于现已验证支持 5 GiB。主词和相关搜法是**待 SERP/Planner 核实的意图假设**；后续 0b 才能写为正式覆盖词。

### 11.1 一个工具完成一个明确功能（S）

| 任务与建议 slug | 路径/大文件档 | 主搜法 → 同意图相关词落点 | 独立信息增益、边界 |
| --- | --- | --- | --- |
| WebM→真 MP4 `convert-a-webm-file-to-an-mp4-file`（**本地已验收；未部署**） | V1 · OPFS，实测 108 MiB/90 秒输入 | `webm to mp4` → `convert WebM recording to MP4` 在首段/FAQ | 源轨道、尺寸、时长、输出大小和 H.264 可用性；强制 H.264 视频、可用时 AAC 音频，不能只改扩展名或 copy VP9；十语实际下载通过 |
| MOV→MP4 `convert-a-mov-file-to-an-mp4-file`（**本地已验收；未部署**） | V1 · OPFS，实测 130 MiB/90 秒输入及 >80 MiB 输出 | `mov to mp4` → `iPhone MOV to MP4` 在首段/场景 | 源轨道、H.264 包复制或重编码决策、PCM→AAC、输出二次验轨、HEVC 无解码器时拒绝；十语实际下载通过 |
| MP4→WebM `convert-an-mp4-file-to-a-webm-file`（**本地已验收；未部署**） | V1 · OPFS，实测 >80 MiB/90 秒输入→约 406 MB 输出 | `mp4 to webm` → `MP4 to WebM for web` 在首段/用途 | 真 VP9/Opus 与时长复检、前后体积；HEVC/编码器不可用明确拒绝；十语实际下载通过，不称无损或保证更小 |
| 短视频→GIF `convert-a-video-file-to-a-gif`（本地已验收；未部署） | Blob URL 抽帧 + gifenc · 10 秒窗口 | `video to gif` → `MP4 to GIF` 在首段/FAQ | 起止、帧率、尺寸、实际取样时间/帧数/体积；>80 MiB 输入短窗、80 帧停止重试与十语实际 GIF 下载通过；区别于 `images-to-gif` 图片序列输入 |
| 视频抽帧 `extract-frames-from-a-video-as-images`（本地已验收；未部署） | Blob URL seek + Canvas · 60 帧预算 | `extract frames from video` → `video to images` 放首段 | 间隔/单时间点、帧序号、实际时间戳、JPG/PNG 和 ZIP；>80 MiB 输入短窗、30 张停止重试与十语实际下载已测；单张封面图已吸收为模式 |
| 视频裁剪 `trim-a-video-clip-and-export`（本地已验收；未部署） | V1 · 大输入 OPFS 实测 | `trim video` → `cut MP4 clip` 放首段/FAQ | 真实起止与首帧内容、H.264/AAC 轨道、音画起点、时长/体积报告；>80 MiB 输入短窗、无 OPFS 拒绝、停止重试与十语实际下载通过；非零起点重编码 |
| 视频压缩 `compress-a-video-file`（本地已验收；未部署） | V1 · 大输入 OPFS 实测 | `compress video` → `reduce MP4 size` 放首段 | 目标体积估算、目标高度/码率、前后尺寸/轨道/体积；已高效源实测变大时如实报告；>80 MiB 输入、停止重试、无 OPFS 拒绝和十语实际下载通过。目标高度模式吸收独立 resize slug |
| 视频旋转 `rotate-a-video-file`（本地已验收；未部署） | V1 · 大输入 OPFS 实测 | `rotate video` → `rotate MP4 90 degrees` 放首段 | 真实像素旋转、90/180/270 方向和宽高、无 rotation 标记、音轨/体积/时长；>80 MiB 输入、停止重试、无 OPFS 拒绝和十语实际下载通过；有损重编码 |
| 视频变速 `change-video-speed`（本地已验收；未部署） | V1 · >80 MiB OPFS 实测 | `change video speed` → `speed up MP4 with audio` / `slow down video` 放首段 | 0.5–2× 实际视频/音轨时长与 AAC 起点、随速变调/≤60 秒近似 WSOLA 保调/静音；30 秒立体声保调→60 秒实际下载，>80 MiB、停止重试和十语下载通过；不与纯音频变速混页 |
| 综合字幕格式 `convert-subtitle-files-between-srt-vtt-and-ass`（本地已验收；未部署） | 纯 JS + Worker · 14 万条/大文本实测 | `srt to vtt` / `vtt to srt` 放首段，格式对归一页 | SRT↔VTT 以及 ASS/SSA/SBV/LRC，逐条时间戳与文本核验、编码/BOM 和样式损失、30 文件部分成功与小 ZIP；>10 MiB/14 万条实际下载复检和十语移动端通过。已吸收原两个方向 slug，不为近义格式对另开 URL |
| 音视频轨道检查 `inspect-video-file-tracks`（本地已验收；未部署） | Mediabunny BlobSource + Worker · >80 MiB 实测 | `video codec checker` → `check audio tracks in MP4` 放首段/FAQ | 所有视频/音频轨逐条 codec、分辨率/声道、语言、起点和元数据结束时间、当前浏览器可否解码；复用式 MP4/WebM 目标容器 codec 族预检，不承诺直接封装成功；无音轨与不可解码分开；MP4 双语言音轨、无声、MOV/WebM/MKV、25 文件部分失败、>80 MiB 按需读取、停止重试及十语 JSON 下载通过。元数据时长和当前设备解码结果不承诺全球兼容 |
| 手动歌词对时 `sync-song-lyrics-to-lrc-by-tapping`（本地已验收；未部署） | 本地音频 Blob URL + 逐行时间轴 · >80 MiB 输入按需播放实测 | `make LRC lyrics` → `sync lyrics to music` 放首段 | 逐行 tap、重拍和 ±100 ms 微调、整体偏移、倒序/漏标拦截与 UTF-8 LRC 真实下载；1000 行边界、>80 MiB 本地音频和十语移动端回归通过；不冒充 ASR 或逐词 eLRC |

已有 S 页包括 §4.1 格式专用抽音、§4.2 视频音轨、§4.3 转写/SRT、§4.4 音频格式和 §4.5 的剪辑/效果/元数据/录音。`convert-mp4-to-mp3`、`make-a-video-thumbnail-image` 等近义词先审查能否由现有 MP4 抽音或抽帧页完成；不能只为搜法另建空壳。AVI/冷门容器互转、TrueHD/DTS/Atmos 原片直抽与多 GiB 任意格式转换须独立 POC，暂不列为稳定可交付。

### 11.2 一个工具完成完整相关工作流（C，综合）

综合页的**主任务仍须单一**，首屏给出输入→处理→结果；高级设置和次模式不抢主操作。下表“可增强现有页”不授权删除已有专页或改其 canonical。

| 综合任务 | 路径/大文件档 | 搜索意图与默认流程 | IG 与不拆页条件 |
| --- | --- | --- | --- |
| 视频转兼容 MP4 `convert-a-video-to-an-mp4-with-aac-audio`（本地已验收；未部署） | V1 · Mediabunny BlobSource + OPFS；>80 MiB 输入/输出实测 | `video to MP4 with AAC`：选 MOV/WebM/MKV/MP4→探测来源→兼容输出→二次验轨→下载 | 混合来源单入口，H.264 视频 copy 或实际重编码、来源有声时 AAC、无声保留无声；来源与成品 codec/时长/体积报告，坏文件与不支持编码拒绝，不承诺任意设备兼容。WebM/MOV/MKV、无声 MP4、>80 MiB、大文件停止重试及十语移动端实际 MP4 下载已通过 |
| 视频抽音枢纽 `extract-audio-from-a-video-file`（现有） | B · 按容器上限 | `extract audio from video`：分类→格式/质量→试听→下载 | 容器差异、强制 MP3 原因、失败引导；`MP4 to MP3` 等近义搜法吸收到本页/MP4 专页 |
| 视频字幕工作台 `make-srt-subtitles-from-a-video-file`（现有，可增强） | D · 模型/PCM 内存受限 | `video to SRT`：抽音→识别→校对→下载 | 时间轴、人工修改、模型进度；VTT 仅导出可为模式，烧录成片是异作业 |
| 音频转文字 `transcribe-an-audio-file-to-text`（现有页，能力待修复） | 当前 SpeechRecognition 播放/麦克风；目标 D · 模型/PCM 内存受限 | `audio to text`：应做到选文件→识别→编辑→TXT | 现有 `recognition.start()` 未传文件音轨，不能算稳定文件转写；复用 Whisper 后再测下载、语言与准确率边界 |
| 烧录字幕 `burn-subtitles-into-a-video`（本地已验收；未部署） | V1 · Mediabunny 逐帧绘制 + OPFS；>80 MiB 输入/65 秒视频实测 | `burn SRT subtitles into video`：导入视频与 SRT/VTT→调字号/安全区→逐帧压制→验收 MP4 | 实际像素对比验证字幕只在 cue 时间出现；H.264/AAC 成品验轨、坏字幕/VTT/停止重试及十语手机端下载通过；不保留 VTT 高级样式，不宣称无损或自动生成字幕 |
| 波形编辑 `edit-audio-on-waveform`（现有） | A · 短 | `audio editor online`：选区→试听→剪/淡入淡出→导出 | 选区与撤销、前后对照；不等于多 GiB 全格式 DAW |
| 配音+BGM `mix-a-voiceover-with-background-music`（现有） | A · 短 | `mix voice and background music`：两轨→音量/duck→试听→导出 | 峰值/响度、淡入淡出、同步；单纯拼接交给 `join-audio-files-in-order` |
| 合并视频片段 `merge-video-clips-in-order`（本地已验收；未部署） | V1 · BlobSource + OPFS；>80 MiB 输入/65 秒时间轴实测 | `merge video clips in order`：多段排序→轨道预检→统一成片→单个 MP4 下载 | 混合 WebM/MOV、44.1/48 kHz 声音、异尺寸、交换后实际首尾帧、无声段、坏文件、停止重试及十语移动端下载通过；所有视频重编码，不称一致编码可无损 copy；与批量逐文件转换不同 |

### 11.3 多文件批量完成同一作业（B）

批量是**多个独立输入重复同一功能**，不是把视频片段合成一个成片。§4.1 的 5 个批量抽音页、`batch-convert-mkv-files-to-mp4-files`、`batch-convert-webm-files-to-mp4-files`、`batch-convert-mov-files-to-mp4-files`、`bulk-convert-wav-files-to-mp3`、`batch-convert-audio-files-to-mp3`、`batch-reduce-mp3-file-sizes`、`batch-convert-mp3-files-to-wav`、`batch-normalize-audio-files-to-peak`、`batch-remove-silence-from-recordings` 和 `batch-trim-the-same-intro-from-audio-files` 已在本地注册；本轮新增页尚未部署。新增 B 页先等对应单件页真实输入→下载验收通过；大结果不能默认把所有输出在内存里汇成 JSZip。

| 批量任务与建议 slug | 路径/大文件档 | 主搜法 → 产物 | 独立 IG 与压力条件 |
| --- | --- | --- | --- |
| `batch-convert-webm-files-to-mp4-files`（本地已实现，未部署） | V1 · 108 MiB 输入已测；大输出保留路径待压测 | `batch WebM to MP4` → 多个独立 H.264/AAC MP4，逐项下载 | 每行 codec/尺寸/时长/前后体积/错误，同名去重，部分成功和重试保留成功项；20 项通过；不默认内存 ZIP |
| `batch-convert-mov-files-to-mp4-files`（本地已实现，未部署） | V1 · 130 MiB 输入及 >80 MiB OPFS 输出已测 | `batch MOV to MP4` → 独立 H.264/AAC MP4 逐项下载 | H.264 视频包复制、PCM→AAC、HEVC 仅失败该行；20 项、部分成功、十语下载、无 OPFS 与停止重试通过 |
| `batch-compress-video-files` | V2 · 流待测 | `batch video compressor` → 多个压缩视频 | 统一预设与每行前后体积、受控并发、部分成功 |
| `batch-trim-video-clips-by-time` | V1 · 流待测 | `batch trim videos` → 同规则多成片 | 长短不一的越界处理、实际起止与精确/关键帧模式 |
| `batch-extract-frames-from-videos` | 解帧 · 短/待测 | `batch extract frames from videos` → 分目录图片 ZIP | 帧数/总体输出预算；单视频多帧留在 S 页 |
| `batch-make-srt-subtitles-from-audio-files` | D · 模型内存受限 | `batch audio to SRT` → 逐文件字幕 | 模型只载一次、串行推理、逐条校正/跳过失败；长文件大批量不默认承诺 |

### 11.4 现有单功能页能否另起 batch slug：逐族判定

此前 §11.3 只枚举了少数 batch 候选，**不足以回答所有已上线单页是否值得另起 batch slug**。下表补上产品可行性判断；它不是关键词池的正式 `build/absorb/defer` verdict，也不代表已获准创建页面。判为“独立候选”的必要条件：用户确实要对**多个独立文件**重复同一作业；每个输入有独立产物；队列、统一设置、逐行失败、部分成功和下载方式带来单页没有的能力；且能写出不同的示例、失败边界与 ≥3 条可验证 IG。批量页只把 `multiple` 加到 file input 不合格。

| 现有单页/族（覆盖 §4） | 判定 | 可能的 batch 作业或现有落点 | 原因与前置验收 |
| --- | --- | --- | --- |
| 混合视频抽音及 MP4/MOV/WebM/MKV 四个专页 | **已有 batch** | §4.1 五个 `batch-extract-audio-*` | 真正逐文件输出和部分成功已存在；优先补大队列/大 ZIP 回归，不再开近义 URL |
| MKV→MP4 AAC | **已有 batch** | `batch-convert-mkv-files-to-mp4-files` | 已有 20 文件队列；继续验证大输出存储与不同音轨的逐行失败 |
| WAV→MP3 | **已有 batch** | `bulk-convert-wav-files-to-mp3` | 不再另建 `batch-wav-to-mp3` 同义页 |
| 裁掉相同片头 | **已有 batch** | `batch-trim-the-same-intro-from-audio-files` | 同一时间规则作用于多文件，任务与单件裁切确有差异 |
| MP3→WAV | **本地已实现并验收；未部署** | `batch-convert-mp3-files-to-wav` | 多个独立 16-bit PCM WAV、逐项膨胀倍数与下载；4 分钟 MP3→>40 MiB OPFS WAV 经 `ffprobe` 验证，20 项同名短文件、停止/重试、无 OPFS 回退及十语移动端通过。20 MiB/5 分钟输入与 60 MiB 输出是代码上限，不是实测最大值；见 `work-tasks/batch-convert-mp3-files-to-wav/02-tool-info.md` |
| M4A/FLAC/OGG→MP3 | **本地已实现并验收；未部署** | `batch-convert-audio-files-to-mp3`；一个混合输入队列 | 十语页面、逐行结果、独立下载、20 项同名/停止/重试、M4A+FLAC 样例及 OGG/损坏混合回归通过；40 MiB 是代码硬上限，不是已测大文件尺寸。证据见 `work-tasks/batch-convert-audio-files-to-mp3/02-tool-info.md` |
| AIFF→WAV、重采样/位深、立体声→单声道 | **先合并能力 POC** | 暂定 `batch-convert-audio-format-settings`；或留在单页的多文件模式 | 目标格式与处理含义不同；只有统一可理解的输出预设、每行格式报告和真实批量需求成立，才另立综合批量 URL；不可把“无损”统称于全部流程 |
| 降低 MP3 文件大小 | **本地已实现并验收；未部署** | `batch-reduce-mp3-file-sizes` | 每行实测输入/输出与节省率；192→128 kbps 样例缩小 32.8%，64→128 kbps 样例变大并标为未缩小；20 项同名、停止/重试和十语移动端已测。40 MiB 为代码硬上限，非实测最大文件；证据见 `work-tasks/batch-reduce-mp3-file-sizes/02-tool-info.md` |
| 峰值标准化、让安静录音更响、峰值限制、动态范围压缩 | **峰值标准化本地已实现并验收；未部署** | `batch-normalize-audio-files-to-peak`；其它先按独立需求评估 | 每份显示原样本峰值、增益和实际 WAV 峰值；20 项同名、混合 OGG/ID3 MP3、静音/损坏逐项失败、十语移动端和停止/重试已测；4 分钟 MP3→>40 MiB OPFS WAV 的编码/时长/声道经 `ffprobe` 验证。20 MiB/5 分钟输入与 60 MiB 输出是代码上限，不是实测最大值。样本峰值不等于 LUFS 或 true peak，见 `work-tasks/batch-normalize-audio-files-to-peak/02-tool-info.md` |
| 去静音、按时长拆分、按静音拆分、铃声、无缝循环 | **去静音本地已实现并验收；未部署** | `batch-remove-silence-from-recordings`；其它先留单页 | 统一 RMS 阈值/最短静音/保留间隔，逐文件试听、显示原后时长和删去比例、独立 WAV；两条 3 秒样例分别成为 2.30/1.90 秒，285 秒 MP3 的 15 秒内部静音缩短后生成 >40 MiB OPFS WAV，`ffprobe` 测得 270.16 秒。20 项同名、异常隔离、十语移动端、停止/重试、无 OPFS 回退通过；20 MiB/5 分钟输入与 60 MiB 输出是代码上限而非实测最大值。两个 split 页的**一个输入→多段输出**已是其主任务，不因产物多就叫 batch |
| 波形编辑、拼接、交叉淡化、配音+BGM | **留单页/综合，不另起 batch** | 现有 `edit-audio-on-waveform`、`join-audio-files-in-order`、`crossfade-two-audio-files`、`mix-a-voiceover-with-background-music` | 手工选区或多输入→**一个**成品需要逐作业决策；“同时选多个素材”不等于逐文件批量产物 |
| 去噪、去工频嗡声、去咔嗒、去齿音、EQ、低音增强 | **暂缓** | 先增强单页的检测、前后对比和误伤说明 | 各文件噪声/频段不同，统一预设可能批量损伤语音；须有自动分析、逐行预览与参考样本才考虑独立 B 页 |
| 变速、变调、倒放、淡入淡出、混响、8D 等效果 | **先留单页；按需求选一个 batch POC** | 不建一组 `batch-{effect}` 换词页 | 可复用编码队列，但统一效果参数未必符合各文件；只有明确批处理场景、独立报告和搜索缺口才选一个作业 |
| MP3 标题/封面、提取封面、嵌入歌词 | **有条件独立候选** | 优先 `batch-edit-mp3-tags-and-cover-art`；批量提封面视实际需求 | 标签编辑需 CSV/文件名映射、逐文件预览与保持音轨不变；同一标题/封面覆盖所有文件反而易出错。歌词逐首不同，暂留单页 |
| 录音、提词器录音、音调/DTMF/UI 声生成 | **不另起 batch** | 现有单页的多次录制/预设下载 | 现场录制不是多文件重复输入；批量生成相同声音易产生重复文件，缺独立用户作业 |
| 加/换/去视频音轨、波形视频 | **先修大文件底座再评估** | 可 POC `batch-remove-audio-from-video-files`；加/换音轨暂缓 | 当前 C 栈是短片实时重录；批量扩大等待和失败率。若 V1 能稳定 copy/流式写出，批量静音才可能有清晰结果；每片配音对齐需更复杂映射 |
| 音频/视频 SRT | **有条件独立候选** | §11.3 音频批量 SRT；视频版先复用队列能力再判 URL | 模型可只加载一次，但每文件都要时间轴校对；首载、长音频和内存须通过串行压力测试。不能把转写 TXT 页当已可靠的底座 |
| 现有 `transcribe-an-audio-file-to-text` | **阻塞，不立 batch** | 先修单页文件直转写，再考虑 `batch-transcribe-audio-files-to-text` | 当前 `SpeechRecognition.start()` 未传文件音轨，不能在不可靠单件能力上放大批量承诺 |
| §11.1 视频 WebM/MOV/MP4 转换、压缩、裁剪、抽帧、GIF | **单件先行，batch 待验收** | §11.3 已列 WebM/MOV、压缩、裁剪、抽帧；GIF 若有实际多短片需求再评估 | 视频输出大，必须先解决逐文件流式输出/下载；同一设置要对每个输入产生可解释结果，不凭格式组合批量开页 |

**候选优先顺序（工程可行性，不是流量排序）：** ① 五个新增音频批量页、WebM/MOV→H.264 MP4 单/批和 MP4→VP9/Opus WebM 单件已完成本地验收，均尚未部署；② 继续其余单功能与综合作业，先做真实编解码及大文件 POC；③ SRT 与视频压缩等模型/重编码重作业最后评估。任一新 B slug 仍须先过逐 slug 的 0b/0i、真实相关搜索与 Planner 归属、独立 IG、单件验收及 §12 压力门禁。

## 12. 大量任务、大文件与长作业的稳定性合同

“大量”拆成**队列多文件**、**单个大文件**、**长时间处理**三种独立压力；一个通过不代表另外两个通过。当前配置 `5 GiB / 500 MiB / 120 MiB` 分别是不同路径的**硬上限**，不能统一称“本站支持 5 GiB 音视频”。OPFS 受配额和设备空闲磁盘影响；可用空间只能估算，写入须处理 `QuotaExceededError`。[MDN OPFS](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system)、[存储配额](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)。

| 阶段 | 工程要求 | 必须留下的执行证据 |
| --- | --- | --- |
| 输入预检 | 文件签名/容器/逐轨 codec，不只看扩展名；按设备探测 `VideoEncoder`、`AudioEncoder`、`MediaRecorder`；估算输出与存储空间 | 真实可用/拒绝矩阵与页面承诺一致；Chrome/Safari/Firefox 不可用时有明确降级或拒绝。[WebCodecs 配置探测](https://developer.mozilla.org/en-US/docs/Web/API/VideoEncoder/isConfigSupported_static)、[编码选择](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection) |
| 读取/计算 | 大文件用 `File.slice`/`BlobSource` 逐包；限制帧缓存、解码队列、内存；重活移 Worker | 小/中/大三档记录耗时、峰值内存、取消与主线程响应；不得只看 Download 按钮 |
| 写出/下载 | OPFS/可写流与背压；结果可读前不删活文件；无 OPFS 降低上限 | 外部 `ffprobe`/实际解码检验时长、轨道、声道、非静音；磁盘不足有可操作错误 |
| 批量 | 串行或受控并发、每行独立 Abort/错误、成功即落盘；超大产物用流式 ZIP 或单项下载 | 20/30 项边界、混合好坏文件、同名、停止/重试、最后一项失败仍可取成功项 |
| 长作业 | 金标 HUD 显示当前文件/步骤/耗时/进度；后台不能只依赖 rAF；模型按无进展超时 | 隐藏标签页、慢下载、断网、取消后重试；旧任务进度不覆盖新错误 |
| 生命周期 | OPFS 临时文件保留至下载完成并清理；崩溃/重载/配额满有恢复路径 | 清理前后结果可读；无遗留多 GiB 垃圾；不得覆盖用户原文件 |

**报告分级：** `代码硬上限`、`本地实测最大样本`、`线上实测最大样本`分别列。只有对应浏览器/设备/编码的真实输入→处理→下载文件→外部探测通过，才写“已验证支持”。现有线上证据为 52 MiB WebM、147 MiB MOV 与 SRT 样例；不等于 500 MiB/5 GiB/2 h 的所有组合已通过。大文件样本还须覆盖 MP4/MOV AAC、WebM Opus、MKV AAC/Opus/AC-3/E-AC-3、无音轨、损坏文件和配额不足。MediaRecorder 的 `isTypeSupported()` 也不能保证实际录制一定成功。[MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/isTypeSupported_static)。

## 13. 检索覆盖、Info gain 与描述写作合同

### 13.1 词归属与 URL 判据

| 搜法 | 默认落点 | 新 URL 的必要差异 |
| --- | --- | --- |
| `extract audio from video`、`video to audio`、`MP4 to MP3` | 综合抽音页或现有格式专页的 desc/FAQ/use case | 独立输入/输出/工作流与可验证正文；不能换 title 重复页面 |
| `WebM to MP4`、`MOV to MP4` | 对应转换对候选页 | 真目标容器、设备可编码、不同兼容/失败边界 |
| `batch convert WebM to MP4` | 真队列 B 页 | 多文件逐行结果、部分成功与多产物交付 |
| `compress video to 720p`、`lower MP4 bitrate` | 视频压缩页可见设置/FAQ | 控件确实改变产物；通常不为参数拆 URL |
| `download YouTube video`、`burn captions into video` | 不塞进普通文件转换页 | 另有合法且能完成的不同作业才独立审查 |

每个拟建 slug 在 `work-tasks/{slug}/02-tool-info.md` 必须列全**真实核实过**的同意图相关搜索/PAA/已有 Planner 归属与不吸收词，做 0b 覆盖表和 0i 用户意图审查；母版和他语分别跑 `coverage:gate` phase 2/4，十语按当地搜法重写。§11 的示例词不等于这些门禁已完成。Google 强调原创、满足访问者任务的主内容，并反对为相近查询批量制造 doorway 页。[有用内容](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)、[垃圾内容政策](https://developers.google.com/search/docs/essentials/spam-policies)。

以下是**首轮搜法假设和文案落点**，只用于指引下一轮实际 SERP/Planner 核查；不是关键词量级、竞争度或正式 `absorb/build` verdict。任何词若要求页面没有的能力，应从覆盖表移到“不吸收/另作业”，不能只把词塞进 FAQ。

| 主任务簇 | 待核实的同意图表达 | 功能与可见文案落点 | 异意图边界 |
| --- | --- | --- | --- |
| WebM→MP4 | `WebM recording to MP4`、`convert WebM to playable MP4`、`WebM to MP4 without upload` | 视频/音轨预检、真 MP4 输出进 H1/lead；本设备可用编码与转换方式进规则/FAQ；具体隐私路径进 desc | `webm to mp3` 是抽音；`video compression` 是压缩 |
| MOV→MP4 | `iPhone MOV to MP4`、`QuickTime MOV to MP4`、`MOV to MP4 without re-encoding` | 手机/QuickTime 场景进 use case；兼容轨可 copy、否则转码进设置/FAQ | `MOV to MP3` 去 MOV 抽音页；不能保证所有 MOV 无重编码 |
| 视频压缩 | `reduce video file size`、`compress MP4 for email`、`lower video bitrate`、`resize video to 720p` | 输出体积/画质结果进 lead；目标大小、质量、分辨率控件及解释进规则/FAQ | 视频裁剪、换容器、无损压缩不默认满足 |
| 视频裁剪 | `cut MP4 video`、`trim video start and end`、`extract a clip from video` | 时间轴起止与实际导出片段进首屏/示例；关键帧差异进 FAQ | 合并多段视频另作业；音频裁剪已有页 |
| 视频抽帧 | `video to images`、`save frames from MP4`、`video thumbnail at timestamp` | 时间点/间隔和逐张图片输出进控件/示例；单张封面为结果模式 | 视频转 GIF 是连续动画输出 |
| 视频转 GIF | `MP4 to GIF`、`make GIF from video clip`、`video GIF with smaller file size` | 短片起止、帧率/尺寸、预估体积进控件与规则 | `images to GIF` 已有图片序列页 |
| 批量转换 | `convert multiple WebM files to MP4`、`bulk MOV to MP4`、`batch video converter` | 多文件队列、逐行结果、部分成功和多产物下载进首屏/How | 多段合并成一个视频不是批量逐文件转换 |
| 抽音与字幕 | `extract MP3 from MP4`、`video to SRT`、`audio speech to text` | 分别落已实现的 MP4 抽音、视频 SRT、待修复的转写页；须核对真实输出后才写描述 | 文件转写页当前不能宣传为已验证 Whisper 直转写 |

### 13.2 页面内容与描述

每独立页至少有 **3 个与该作业相关且可由结果验证的 IG**：例如逐轨兼容报告、copy/重编码原因、精确时长与同步、前后体积/响度、失败文件清单、设置对输出的影响、下载后验证。“免费、快、安全、本地”不能代替 IG。页面顺序建议：明确 H1/lead → 主输入与动作 → 与按钮一致的 How → 结果/对比 → 可索引设置与限制 → 与 `loadSample` 一致的示例 → 使用场景 → FAQ → 真正相邻的已上线工具。用户可见正文不写 SEO、doorway、引擎选型或库名卖点。

**描述方向**：开头约 120–160 字符先说明动作、输入、产物与一条真差异，后续简述步骤和边界；首页卡用独立短句。Google 可能从正文自动生成 snippet，meta description 不能保证照抄，但应独特且准确。[Google snippet 指南](https://developers.google.com/search/docs/appearance/snippet)。以下是未过覆盖 gate 的英文草案，立项时须按实际按钮、输出和用户搜法重写：

| 候选 | 描述方向草案 |
| --- | --- |
| WebM→MP4（已本地验收） | 页面实际写为 `Convert WebM to real H.264/AAC MP4 in your browser`；前段说明选文件→转换→预览→下载，结果报告 VP9/Opus 原轨道、尺寸及输入/输出字节，不把 VP9 仅换封装称为兼容转换。 |
| 视频压缩 | `Reduce a local video file's size with a chosen resolution and quality. Compare input and output sizes, preview the result, and see when the browser cannot encode the selected format.` |
| 批量 MOV→MP4 | `Convert several local MOV clips to MP4 in a queue. Review each clip's track compatibility and result, keep successful files when one fails, then download the completed outputs.` |

转码文案遵循 `converter-serp-landing-seo`：H1 对准实际作业，How 动词与按钮一致，设置写出对产物的作用，近义搜法自然融入一页。发布前每 slug 分别跑完整 `build:site`、`coverage:gate --phase=all`、`verify:tool`，以及真实输入→下载、错误/样例/重试回归；单独的 `verify:tool` 只重渲染目标页，不代替全站构建。机械门禁不能证明内容确有 IG 或长文件实际可用。
