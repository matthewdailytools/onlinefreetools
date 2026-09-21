# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S21：`boost-bass-on-an-mp3`。Job: bass boost on audio (low-shelf)；≠ full EQ（S20）。related：eq-a-muffled-voice-recording、make-a-quiet-recording-louder。Page：decode → low-shelf biquad boost presets → 16-bit WAV；HUD Read/Decode/Boost/Write。Rich ten locales；How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`eq-a-muffled-voice-recording`（S20）、`make-a-quiet-recording-louder`（S15）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 OfflineAudioContext 单节 lowshelf Biquad 预设 → 16-bit WAV；HUD Read/Decode/Boost/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；related：eq-a-muffled-voice-recording、make-a-quiet-recording-louder；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `boost-bass-on-an-mp3`
