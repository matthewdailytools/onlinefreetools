# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F7 **A2**：`join-audio-files-in-order`。Job: concatenate multiple audio files in list order → one WAV。related：extract-audio-from-a-video-file、trim-an-audio-clip-and-export。Multi-file dropzone or add-more；reorder optional if easy else fixed order。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束（若有）

- 参考：`extract-audio-from-a-video-file`、`combineFilesIntoOnePdfPage`（多文件队列）、`docs/sound-editor/12-slug-hub-and-scene.md` A2
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：≠ M1 叠加混音；≠ M2 交叉淡化；输出固定 16-bit WAV

## 建议 slug

- `join-audio-files-in-order`
