# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 F9 **G12**：`make-a-short-ui-notification-sound`。Job: Short UI notification/beep maker with simple presets → WAV。related：generate-dtmf-touch-tones、generate-a-sine-tone-at-a-frequency。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束（若有）

- 参考：`generate-dtmf-touch-tones`、`generate-a-sine-tone-at-a-frequency`、`docs/sound-editor/12-slug-hub-and-scene.md` G12
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：短 UI 提示/点击音预设 → 16-bit WAV；非 DTMF（G6）、非长正弦测试音（G5）

## 建议 slug

- `make-a-short-ui-notification-sound`
