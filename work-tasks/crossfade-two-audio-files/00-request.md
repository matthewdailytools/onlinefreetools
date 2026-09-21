# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F7 **M2**：`crossfade-two-audio-files`。Job: Crossfade two songs/clips with duration chip；equal-power preferred。≠ A2 join hard cut，≠ M1 overlay mix。related：mix-a-voiceover-with-background-music、join-audio-files-in-order。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束（若有）

- 参考：`mix-a-voiceover-with-background-music`、`join-audio-files-in-order`、`fade-in-and-fade-out-an-audio-clip`、`docs/sound-editor/12-slug-hub-and-scene.md` M2
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：≠ A2 硬切拼接；≠ M1 全程叠加；输出固定 16-bit WAV；时长芯片；默认等功率曲线

## 建议 slug

- `crossfade-two-audio-files`
