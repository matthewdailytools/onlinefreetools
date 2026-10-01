# 浏览器端音视频能力全量图（工具 · 路径 · 实现方案）

Date: 2026-10-01  
Scope: 站内已上线音/视频相关工具 + 已 vendor 引擎 + 浏览器原生边界 + 未落地候选  
Status: **调研稿 · 待确认后再立项/实现**  
Companion:  
- `docs/seo/keywords/subtitles/2026-09-30-whisper-capability-tool-map.md`  
- `docs/seo/keywords/subtitles/2026-09-30-subtitle-tools-deep-scan.md`  
- `dev-logs/2026-10/2026-10-01-13-21-extract-audio-p0-capability-registry.md`  
- Engine: `public/vendor/extract-audio/stable-extract.js` · `public/vendor/whisper/whisper-loader.js`

---

## 0. 一页结论（请确认）

1. **网页端不是桌面 ffmpeg。** 站内能力分三层栈：  
   - **A 栈 · PCM 音频**：`decodeAudioData` / `OfflineAudioContext` + `lamejs`（绝大多数音效/转换页）。  
   - **B 栈 · 视频抽音**：`OftExtractAudio`（小文件 decode / ISOBMFF demux+WebCodecs+OPFS / 非 ISOBMFF MediaElement 回退）。  
   - **C 栈 · 视频重编码**：`HTMLVideoElement.captureStream` + `MediaRecorder`（加/去/换音轨、波形视频）→ **输出多为 WebM**，时长与体积上限紧。  
   - **D 栈 · 语音识别**：同域 Whisper tiny q8（转写 / SRT）。

2. **大文件诚实边界（抽音 B 栈）**  

| 容器族 | 路径 | 体积 | 时长 | 典型音轨 |
| --- | --- | --- | --- | --- |
| MP4 / M4V / MOV / M4A（ISOBMFF） | demux + WebCodecs + OPFS（无 OPFS≈1 GiB） | **≤ ~5 GiB** | ≤ ~6 h | AAC 族；拒 E-AC-3 / AC-3 / TrueHD / DTS |
| WebM / MKV / 其它 fallback | MediaElement 流式 MP3 | **≤ ~500 MiB** | ≤ ~4 h | 浏览器能播的轨 |
| 任意容器小文件 | `decodeAudioData` | ≤ ~40 MiB | ≤ ~15 min | 浏览器解码器支持的 |

3. **Witcher 类片（~2.8 GiB MKV + eac3 5.1）当前无法网页端抽音**：超 fallback 上限 + 无 Matroska demux + E-AC-3 不在 demux 白名单。  
   **「批量转 MP4」 alone 不够**：须 **音轨转 AAC（建议立体声）**；纯 remux 仍 `err_codec`。

4. **站内尚无 ffmpeg.wasm / Matroska demux / E-AC-3 解码 / 通用视频容器转换引擎。** 新建「MKV→MP4」是新底座，不是抽音页改数字。  
   **视频转换**另见 **§4.6**（浏览器可完成清单：已上线邻接作业 + 可立项转换对 + 底座分档）。

5. **确认前不要开工**：下方 §8 决策项需勾选优先级与底座策略。

---

## 1. 浏览器原生能力（底座事实）

| API / 能力 | 能做什么 | 典型上限 / 风险 |
| --- | --- | --- |
| `decodeAudioData` | 整段解码 → PCM | 内存随时长线性涨；站内小文件约 **40 MiB / 15 min** |
| `AudioContext` / `OfflineAudioContext` | 效果、混音、重采样、导出 WAV | 同上；不负责容器 demux |
| `lamejs`（已 vendor） | PCM → MP3 | 站内标准 MP3 写出 |
| `<video>` / `<audio>` + `captureStream` | 播放时再采集 | **实时或倍速**；几 GB 不稳定 |
| `MediaRecorder` | 重编码成 WebM（偶发 MP4） | 输出多为 **WebM+VP8/VP9+Opus**；Chrome 对 `video/mp4` 支持参差 |
| WebCodecs `AudioDecoder` | 按包解码 AAC 等 | 需 demuxer 喂包；站内仅 ISOBMFF+mp4box |
| mp4box（已 vendor） | ISOBMFF 索引 / sample | **不做 Matroska** |
| OPFS | 大 MP3 流式写出 | Safari/自动化偶发 NotFound；引擎有 memory-sink 回退 |
| Whisper（transformers.js + ORT） | ASR → 文本 / 时间戳 | tiny q8；长音频滑窗；模型体积大 |

**浏览器通常不能稳定做的（勿在文案承诺）：**

- 任意容器任意编解码的「无损 remux」到 MP4  
- 多声道 E-AC-3 / TrueHD / DTS 解码  
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

**未 vendor（若要做转换底座须先决策）：** ffmpeg.wasm / mediabunny / Matroska 解析器 / E-AC-3 解码 WASM。

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
  ├─ 视频容器转换 ──► V1 WebCodecs+mux（候选）/ V2 ffmpeg.wasm（候选）→ 见 §4.6
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

### 4.3 语音识别 / 字幕（D 栈 · Whisper；视频可先解码音轨）

| slug | 输入 | 上限（约） | 输出 | 是否已经实现 |
| --- | --- | --- | --- | --- |
| `transcribe-an-audio-file-to-text` | 音频 | **40 MiB** | 文本 | 是 |
| `make-srt-subtitles-from-an-audio-file` | 音/视频 | **120 MiB** / **≤2 h**（页内） | SRT | 是 |
| `make-srt-subtitles-from-a-video-file` | 视频 | **120 MiB** / **≤2 h** | SRT | 是 |

模型：whisper-tiny q8；滑窗识别；**不做**说话人区分 / 非英语翻译（Whisper translate 仅→英）。

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

**无（视频容器转换，见 §4.6，均为否）：** `mkv→mp4`、`webm→mp4`、`avi→mp4`、任意视频容器互转。

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
| **V1 · WebCodecs + mux/demux** | WebCodecs + **mp4box**（已有）和/或 **mediabunny**（未 vendor） | 容器对转换、可选重编码、裁剪/缩放/旋转；可流式/大文件 | 受浏览器编解码白名单约束；**E-AC-3/DTS 仍可能失败** | **部分能力**（抽音 demux）；**无**成片转换页 |
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

**站内空白：** 无任何 `convert-*-video*` / `*-to-mp4` / `*-to-webm` / `video-to-gif` / `compress-a-video` / `trim-a-video` 正式工具页。

#### 4.6.3 可在浏览器完成的转换工具清单（候选 · 未立项）

下列为 **建议 slug + 作业 + 推荐底座**。仅列入「网页端可诚实交付」的项；剧集级 DDP 等见 §6.1。本小节默认 **是否已经实现 = 否**。

**A. 容器 / 格式对（单文件，优先）**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `convert-a-webm-file-to-an-mp4-file` | WebM→MP4 | **V1**（mediabunny / WebCodecs+mux） | **高**（Chrome；Safari 视编码） | 否 | 社交录屏常见；可 copy 时快 |
| `convert-an-mp4-file-to-a-webm-file` | MP4→WebM | V1 或 V0（短） | **高** | 否 | 兼容旧设备/嵌入 |
| `convert-a-mov-file-to-an-mp4-file` | MOV→MP4 | **V1**（常可 remux） | **高** | 否 | 手机摄像导出 |
| `convert-an-mkv-file-to-an-mp4-file` | MKV→MP4（**须 AAC**） | **V1** mediabunny+ac3+aac-encoder | **中** | **是（2026-10-01）** | 音轨强制 AAC 立体声；OPFS 流式约 **5 GiB**（无 OPFS≈1 GiB）；≠纯 remux |
| `convert-an-avi-file-to-an-mp4-file` | AVI→MP4 | V2 为主 | **低–中** | 否 | 编解码碎片大；勿作首发 |
| `batch-convert-webm-files-to-mp4-files` | 多 WebM→ZIP | V1 + JSZip | **高**（单文件绿后） | 否 | |
| `batch-convert-mov-files-to-mp4-files` | 多 MOV→ZIP | V1 + JSZip | **高** | 否 | |
| `batch-convert-mkv-files-to-mp4-files` | 多 MKV→ZIP | V1/V2 + JSZip | **中** | **是（2026-10-01）** | 行级失败 + 部分 ZIP |

**B. 视频→其它媒体**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `convert-a-video-file-to-a-gif` | 短视频→GIF | V0 抽帧 + 已有 **gifenc** | **高**（短、小分辨率） | 否 | 与 `images-to-gif` 分工：输入是视频 |
| `extract-frames-from-a-video-as-images` | 按间隔/关键点出 JPG/PNG | `<video>` + canvas / VideoFrame | **高** | 否 | 可批量 ZIP |
| `make-a-video-thumbnail-image` | 指定秒封面图 | 同上 | **高** | 否 | 单张；可 absorb 进抽帧页 |

（抽音已有专族，**不再**用 `convert-mp4-to-mp3` 空壳 URL；同意图词 absorb 进 extract 页。）

**C. 编辑型「转换」（成片仍是视频）**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `trim-a-video-clip-and-export` | 按起止裁剪 | **V1**（优先 copy）；短片可用 V0 | **高** | 否 | 与音频 trim 对仗 |
| `compress-a-video-file` | 降分辨率/码率 | **V1** 重编码 | **中–高** | 否 | 须写清有损；上限诚实 |
| `resize-a-video-to-a-target-resolution` | 缩放到 720p/1080p 等 | V1 | **中–高** | 否 | 可与 compress 合并或 related |
| `change-video-speed` | 变速成片 | V1 或 V0 | **中** | 否 | 音轨同步难；短片更稳 |
| `rotate-a-video-file` | 旋转 90/180/270 | V1 | **高** | 否 | |
| `merge-video-clips-in-order` | 多段拼接 | V1 | **中** | 否 | 编码不一致须统一转码 |
| `convert-a-video-to-an-mp4-with-aac-audio` | 「万能」进 MP4+AAC | V1/V2 | **中** | 否 | Witcher 路径的**产品化**表述；单页即可，勿拆近义 URL |

**D. 字幕相关视频写出（浏览器可做，体验档不同）**

| 建议 slug | 作业 | 推荐底座 | 浏览器可行性 | 是否已经实现 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `burn-subtitles-into-a-video` | 烧录 SRT→成片 | V0 实时（慢）或 V1/V2 | **中** | 否 | 字幕专项已 defer；竞品多用 mediabunny/ffmpeg |
| `add-soft-subtitles-to-an-mp4` | 软字幕轨 mux | **V1**（ISOBMFF） | **中** | 否 | 需 mux 字幕轨；非烧录 |

#### 4.6.4 转换对 × 底座速查（浏览器）

| 输入 → 输出 | V0 MediaRecorder | V1 WebCodecs/mux | V2 ffmpeg.wasm |
| --- | --- | --- | --- |
| WebM → MP4 | 弱（输出常仍是 WebM） | **推荐** | 可用 |
| MP4 → WebM | 短片可用 | **推荐** | 可用 |
| MOV → MP4 | 短片可用 | **推荐**（常 remux） | 可用 |
| MKV → MP4（AAC） | 不适合大文件 | **首选尝试** | **兜底** |
| MKV+E-AC-3 → MP4 | ✗ | ✗/极难 | **需 AAC 转码**；体积大时仍重 |
| 任意 → GIF（短） | 抽帧+gifenc | 可选 | 可选 |
| 裁剪 / 压缩 / 旋转 | 短片凑合 | **推荐** | 可用 |
| 烧录字幕 | 实时 1× | 更好 | 常用竞品路径 |

#### 4.6.5 建议落地顺序（仅视频转换 · 仍待确认）

1. **Vendor 决策：** mediabunny（V1）vs 自研 mp4box+WebCodecs mux vs ffmpeg.wasm（V2）  
2. **首发单文件：** `convert-a-webm-file-to-an-mp4-file` 或 `convert-a-mov-file-to-an-mp4-file`（需求面大、编解码友好）  
3. **`convert-an-mkv-file-to-an-mp4-file`**（诚实 AAC；接抽音 related）  
4. **`trim-a-video-clip-and-export`** / **`compress-a-video-file`**  
5. **`convert-a-video-file-to-a-gif`**（复用 gifenc）  
6. 对应 **batch-***（单文件门禁绿后再拆）

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
| **P1 Convert MKV→MP4（AAC）** | 新底座（建议 ffmpeg.wasm 或等价）+ OPFS；单文件先 | 大 | ✓（浏览器内，2.8G 体验重） |
| **P1b Batch convert** | P1 + 队列 ZIP | 更大 | ✓ |
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

## 8. 待你确认的决策项

请回复勾选或改写后再继续实现：

- [x] **D1** 维持现状：大 MKV/DDP 仅文案引导本机 ffmpeg → AAC MP4 → 现有抽音页（**已实现 2026-10-01**：MKV 单/批 + 枢纽 FAQ/hint/err_*）  
- [x] **D2** 立项 **单文件** `convert-an-mkv-file-to-an-mp4-file`（含 **AAC 转码**；底座 **mediabunny + @mediabunny/ac3 + @mediabunny/aac-encoder**；**已实现 2026-10-01**）  
- [x] **D3** 在 D2 绿后再做 **批量** convert（`batch-convert-mkv-files-to-mp4-files`；**已实现 2026-10-01**） 
- [ ] **D4** 扩展抽音引擎 Matroska demux（仍可能卡在 E-AC-3）  
- [ ] **D5** 另开 E-AC-3/多声道解码调研（独立 POC，不绑 SEO 批量建页）  
- [ ] **D6** 视频 C/V0：提高时长/体积 或 真 MP4 输出（与抽音脱钩）  
- [ ] **D7** Whisper 增量按既有地图推进（与 Witcher 问题无关）  
- [ ] **D8** 视频转换首发选一对（§4.6）：例如 `convert-a-webm-file-to-an-mp4-file` 或 `convert-a-mov-file-to-an-mp4-file`，并选定底座 **V1 mediabunny** / 自研 mux / **V2 ffmpeg.wasm**  
- [ ] **D9** 视频编辑转换：`trim-a-video-clip-and-export` / `compress-a-video-file` / `convert-a-video-file-to-a-gif` 是否进入同批 roadmap  

**建议默认组合：** **D1 已落地**；下一优先 **D8（WebM→MP4 或 MOV→MP4 + V1）** → D2（MKV→MP4 AAC）→ D3；D9 按需求插入；D4/D5 仅有 POC 预算时。

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
