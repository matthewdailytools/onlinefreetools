# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **T1**：`make-srt-subtitles-from-an-audio-file`。SpeechRecognition + 时间轴 → SRT；与 A4 相同诚实浏览器边界；无巨大 wasm Whisper。related：`transcribe-an-audio-file-to-text`、`make-a-waveform-video-from-audio`。Rich ten locales。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` T1。
- 必须本地处理意图：是（识别器可能走浏览器厂商服务，FAQ 诚实）。
- YMYL：否。
- 禁止：打包巨大 ASR 模型；声称云 Whisper 克隆；改 docs/sound-editor/12。

## 建议 slug

- `make-srt-subtitles-from-an-audio-file`
