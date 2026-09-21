# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F7 **M1**：`mix-a-voiceover-with-background-music`。Job: Overlay/mix two audio files (voice + bed) with relative gain sliders；optional simple ducking if easy。≠ A2 concatenate。related：join-audio-files-in-order、extract-audio-from-a-video-file。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束（若有）

- 参考：`join-audio-files-in-order`、`extract-audio-from-a-video-file`、`docs/sound-editor/12-slug-hub-and-scene.md` M1
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：≠ A2 首尾相接；≠ M2 交叉淡化；输出固定 16-bit WAV；可选简易闪避

## 建议 slug

- `mix-a-voiceover-with-background-music`
