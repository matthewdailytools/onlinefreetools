# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F7 **V1**：`remove-the-audio-track-from-a-video`。Job: Mute/remove audio from local video → download muted video（MediaRecorder/canvas or remux if feasible；honest browser limits）。related：extract-audio-from-a-video-file、mix-a-voiceover-with-background-music。Rich ten locales；no YouTube download。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束（若有）

- 参考：`extract-audio-from-a-video-file`、`docs/sound-editor/12-slug-hub-and-scene.md` V1
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：不做 YouTube/URL 代抓；诚实写浏览器重编码限制（常为 WebM）

## 建议 slug

- `remove-the-audio-track-from-a-video`
