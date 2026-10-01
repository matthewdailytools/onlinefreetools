# 以浏览器内 Whisper 为底座的工具覆盖图（2026-09-30）

> 上游：[`2026-09-30-subtitle-tools-deep-scan.md`](./2026-09-30-subtitle-tools-deep-scan.md)（P0：核验现有 SRT / 转写页）。 
> 性质：能力 → 工具映射 + 少量 WebSearch 前 5 抽查；**未跑 Planner**；**不建 work-tasks**；竞争度为草稿。

## 0. 结论

- 一个共享的 **Whisper 模块**（transformers.js + onnxruntime-web，Web Worker，WebGPU 优先、WASM 兜底）可支撑 **2 个现有页的真能力修复 + 5 个现有页的增量能力 + 4 个新 URL 候选**。
- 最大收益仍是 P0：让 `make-srt-subtitles-from-an-audio-file` / `transcribe-an-audio-file-to-text` 真正能「读文件出字」，而不是依赖播放内录或麦克风。
- 新 URL 里都不是空白：去口头禅（SnipSound、navid.me、WordCut、ScribeGrab）、改字即剪（audio-editor.app、CATT、Rescript、oncanine）、自动对齐歌词（subtitlekit LRC Editor 已用浏览器 Whisper）→ 全部 `mid_covered`。
- **前置阻塞（须人工决策）**：模型托管。Cloudflare Assets 单文件 25 MiB，whisper-tiny 量化解码器已 29.3 MB（见 §1）。

## 1. 能力底座（事实与限制）

| 能力 | 浏览器可行性 | 依据 / 限制 |
| --- | --- | --- |
| 转写 + 句段时间戳 | 可行 | transformers.js `automatic-speech-recognition`，`return_timestamps: true`；30 s 分块 + stride |
| 词级时间戳 | 可行 | `return_timestamps: 'word'`（交叉注意力 + DTW，需 `_timestamped` / `output_attentions` 模型）；**分块结束后才出**，不能流式；长停顿会拉长单词时长 |
| 语言自动识别 | 可行 | 多语模型不传 `language` 时先跑一次检测（transformers.js PR #1541）；旧版默认英语 → 须锁版本验证 |
| 翻译 | **只能译成英语** | Whisper `task: 'translate'`；译成其他语言需另配模型或 API |
| 说话人区分 | 需外挂 | `diarization-js`（pyannote community-1 ONNX 移植，约 33 MB；嵌入模型 CC-BY-4.0 须署名） |
| 口头禅 um/uh | **不可靠** | Whisper 倾向输出「干净文本」，navid.me 实测漏掉多数 filler；需 prompt 引导 + 能量分析 + 人工复核列表 |
| 实时字幕 | 不适合 | 分块推理有延迟；实时场景 Web Speech 更合适 |
| 歌声 | 精度下降 | 伴奏干扰；做歌词对齐时应以用户粘贴歌词为准、Whisper 只给锚点 |

模型体积（Hugging Face `onnx-community`，encoder + decoder_model_merged）：

| 模型 | quantized（q8） | q4 | 备注 |
| --- | --- | --- | --- |
| whisper-tiny | 9.7 + 29.3 MB | 8.6 + 82.7 MB | 默认档候选；**解码器超 25 MiB** |
| whisper-base | 22.1 + 51.2 MB | 17.9 + 117.9 MB | 质量档 |
| whisper-small | 88.0 + 149.5 MB | 63.1 + 222.3 MB | 桌面可选 |
| large-v3-turbo | 615 + 420 MB | 405 + 319 MB | 不适合做站内默认 |

托管选项（须人工确认，涉及 `project-core` 「vendor 入库 Git」规则的适用范围）：

1. 切片 < 25 MiB 放 Assets，前端拼回 ArrayBuffer（仍入库 Git，仓库膨胀约 40–75 MB/档）。
2. 放 R2，由 Worker 同域路由提供（不入 Git；需新增上传与缓存流程）。
3. 仅 JS/WASM（transformers.js + ort wasm）入 `public/vendor/`，模型走 1 或 2。禁止从 huggingface.co / CDN 直接拉取（违反同域 vendor 规则）。

## 2. 覆盖图

### A. 现有页：修复真能力（P0）

| slug | Whisper 提供 | 页面增量 |
| --- | --- | --- |
| `make-srt-subtitles-from-an-audio-file` | 句段时间戳 → SRT / VTT | 接受视频文件（decodeAudioData 抽音轨）；语言芯片 + 自动识别；可选「输出英文字幕」（translate 任务） |
| `transcribe-an-audio-file-to-text` | 纯文本 | TXT / DOCX（已 vendor docx）导出；带/不带时间戳切换；可选说话人标签（P3 外挂） |

### B. 现有页：增量能力（不新增 URL）

| slug | 增量 | 优先级 |
| --- | --- | --- |
| `record-a-voice-memo-in-the-browser` | 录完一键转文字 | P2 |
| `record-a-voiceover-with-a-teleprompter` | 读稿核对：词级转写与提词稿 diff（已 vendor diff），标出漏读 / 读错句 | P3 |
| `edit-audio-on-waveform` | 波形上显示词块，点击词定位选区 | P3 |
| `embed-lyrics-in-an-mp3` | 自动草拟歌词（歌声精度低，须可编辑） | P3 |
| `remove-silence-from-a-recording` | 仅作「去口头禅」页的相关链接，不改本页作业 | — |

### C. 新 URL 候选（Whisper 为核心）

| 暂定 slug | 作业 | 竞争 | 优先级 | 备注 |
| --- | --- | --- | --- | --- |
| `remove-filler-words-from-a-recording` | 标出 um/uh 与长停顿，逐条试听后剪掉导出 | mid_covered | P2 | 须诚实写明 Whisper 漏检；复用站内 RMS 静音检测与 lamejs 导出 |
| `edit-audio-by-editing-its-transcript` | 删字即删音，导出 WAV / MP3 | mid_covered | P2 | 与去口头禅共享引擎；两页作业不同（一键清理 vs 自由剪辑），不得互为换皮 |
| `burn-subtitles-into-a-video`（已在字幕专项 P2） | 增加「自动生成字幕再烧录」 | mid_covered | P2 | MediaRecorder 实时 + WebM 限制不变 |
| `sync-song-lyrics-to-lrc-by-tapping`（已在字幕专项 P2） | 增加「自动对齐」首轮，逐行可敲击修正 | mid_covered | P2 | subtitlekit 已实现行级；词级增强 LRC 是可做增量 |

### D. 不建议单独建页

| 想法 | 原因 |
| --- | --- |
| 检测音频语言 | 需求薄，作为转写页的显示项即可 |
| 音频翻译成英文 | 并入 SRT / 转写页选项，避免近义 URL |
| 会议纪要 / 摘要 / 播客章节标题 | 需要 LLM，不是 Whisper 能力 |
| 实时听写 / 实时字幕 | Web Speech 更合适，Whisper 分块延迟 |
| 译成非英语字幕 | Whisper 做不到；归入字幕专项 P3 的翻译页，另选引擎 |
| 语速 / WPM 分析、朗读打分 | 未抽查需求；待 Planner 再议 |

## 3. 共享模块要求

1. Web Worker 内推理，主线程不卡；WebGPU 检测失败回退 WASM。
2. 音频统一解码为 16 kHz 单声道 Float32；视频直接抽音轨。
3. 金标进度 HUD：模型下载（字节进度）/ 解码 / 分块识别（n/N）/ 导出。
4. Cache Storage 缓存模型，页面显示首次下载体积与「之后离线可用」。
5. 模型档位：tiny 默认，base 可选；手机端提示内存风险。
6. 文案：不承诺准确率百分比；列出已知弱项（口头禅、歌声、重叠说话、静音段幻觉重复）。

## 4. 下一步

1. **人工决策模型托管方式**（§1 三选一）。
2. POC：tiny q8 在桌面 Chrome（WebGPU）/ Safari（WASM）/ 中端安卓跑 5 分钟中英文音频，记录首载时间、识别耗时、内存峰值、时间戳偏差。
3. POC 通过后先做 A 组两页，再按 C 组顺序排队；新 URL 须用户明确要求后才建 `work-tasks/`。

## 5. 证据链接

- transformers.js 词级时间戳：<https://github.com/huggingface/transformers.js/releases/tag/2.4.0>、<https://github.com/huggingface/transformers.js/issues/820>、<https://github.com/huggingface/transformers.js/issues/1198>
- 语言自动识别：<https://github.com/huggingface/transformers.js/pull/1541>
- 浏览器说话人区分：<https://www.npmjs.com/package/diarization-js>、<https://huggingface.co/briox/diarization-js-community-1>
- 去口头禅：<https://snipsound.com/tools/filler-word-remover/>、<https://navid.me/free-tools/filler-word-remover>、<https://wordcut.video/>、<https://scribegrab.com/remove-filler-words-and-silence.html>
- 改字即剪：<https://audio-editor.app/>、<https://convertaudiototext.com/tools/text-based-audio-editor>、<https://edit-with-text.oncanine.run/>
- 自动对齐歌词：<https://subtitlekit.com/en/lrc-editor/>、<https://freesong.ai/lrc-generator>、<https://aisong.io/lrc-generator>
- 模型体积：`https://huggingface.co/api/models/onnx-community/{whisper-tiny,whisper-base,whisper-small,whisper-large-v3-turbo}/tree/main/onnx`
