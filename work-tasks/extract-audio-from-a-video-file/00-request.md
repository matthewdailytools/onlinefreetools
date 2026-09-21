# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F7 **A1**：`extract-audio-from-a-video-file`。Job: 本地视频只要声音（video→audio extract；browser decode from video file）。搜法：extract audio from video；mp4 to mp3；video to mp3。related 待定（建议：trim-an-audio-clip-and-export、convert-a-wav-file-to-mp3 或已上线格式页）。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。S41 defer。

## 已知约束（若有）

- 参考：`trim-an-audio-clip-and-export`（WAV/MP3 导出）、`docs/sound-editor/12-slug-hub-and-scene.md` A1
- 必须本地处理：是；**禁止** YouTube/URL 代抓（drop）
- YMYL：否
- 优先语言：十语全量
- 其他：诚实写浏览器可解码容器上限；容器芯片不拆 URL

## 建议 slug

- `extract-audio-from-a-video-file`
