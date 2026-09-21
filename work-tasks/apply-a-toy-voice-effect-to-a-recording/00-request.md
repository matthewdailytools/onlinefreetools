# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S38：`apply-a-toy-voice-effect-to-a-recording`。Job: toy voice effects（chipmunk/giant/robot/telephone presets）— NOT celebrity clone；FAQ must say not a voice clone。≠ S39 gender shift，≠ S33 pitch-only song tool（但可复用 pitch/filter 思路）。related：reverse-an-audio-file、shift-the-pitch-of-a-song。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5 with anti-clone disclaimer；zh description ≥120 chars。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped，勿恢复 --full）。

## 已知约束（若有）

- 参考现有工具：`reverse-an-audio-file`（S37）、`shift-the-pitch-of-a-song`（S33）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F6/S38
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 玩具变声预设 → 16-bit WAV；HUD Read/Decode/Effect/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；FAQ 强制 anti-clone；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `apply-a-toy-voice-effect-to-a-recording`
