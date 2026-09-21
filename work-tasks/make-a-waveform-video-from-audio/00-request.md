# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **A5**：`make-a-waveform-video-from-audio`。Job: audio → waveform/audiogram-style video（canvas 画波形 + MediaRecorder webm）。related：`extract-audio-from-a-video-file`、`trim-an-audio-clip-and-export`。Local-only；Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；诚实浏览器 WebM 限制；Auto sample optional。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` A5。
- 必须本地处理：是。
- YMYL：否。
- 禁止：改 docs/sound-editor/12；假装无损 MP4 remux；YouTube 代抓。

## 建议 slug

- `make-a-waveform-video-from-audio`
