# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F9 **G5**：`generate-a-sine-tone-at-a-frequency`。Job: Tone/frequency generator → WAV download；Hz input + presets。related：crossfade-two-audio-files 或 make-a-quiet-recording-louder。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束（若有）

- 参考：`crossfade-two-audio-files`、`make-a-quiet-recording-louder`、`docs/sound-editor/12-slug-hub-and-scene.md` G5
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：正弦波；Hz 输入 + 预设；输出固定 16-bit WAV；非噪声发生器（G4）、非 DTMF（G6）

## 建议 slug

- `generate-a-sine-tone-at-a-frequency`
