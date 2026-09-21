# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F9 **G6**：`generate-dtmf-touch-tones`。Job: DTMF keypad → sequence → WAV；standard frequencies。related：generate-a-sine-tone-at-a-frequency + one other shipped。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束（若有）

- 参考：`generate-a-sine-tone-at-a-frequency`、`make-a-short-ui-notification-sound`、`docs/sound-editor/12-slug-hub-and-scene.md` G6
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：ITU-T 标准 DTMF 双音；键盘输入序列；输出固定 16-bit WAV；非单音正弦（G5）、非 UI 提示音（G12）

## 建议 slug

- `generate-dtmf-touch-tones`
