# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S19：限制器 / 防削波（ceiling 如 −0.1 / −1 dBFS；brickwall / soft）；≠ S18 动态压缩、≠ S15 固定增益、≠ S16 峰值归一化、≠ S17 LUFS

## 已知约束（若有）

- 参考现有工具：`compress-dynamic-range-of-a-voice-recording`（S18）、`normalize-an-audio-file-to-peak`（S16）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业限制器防削波 → 16-bit WAV；HUD Read/Decode/Limit/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；related：compress-dynamic-range-of-a-voice-recording、normalize-an-audio-file-to-peak；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `limit-peaks-so-a-file-does-not-clip`
