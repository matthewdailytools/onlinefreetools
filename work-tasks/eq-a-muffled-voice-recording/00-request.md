# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S20：闷声 EQ（clarity / warmth / presence 三档三频段）；≠ S21 仅低音、≠ S24 降噪、≠ S31 去齿音

## 已知约束（若有）

- 参考现有工具：`limit-peaks-so-a-file-does-not-clip`（S19）、`compress-dynamic-range-of-a-voice-recording`（S18）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 OfflineAudioContext BiquadFilter 链 EQ → 16-bit WAV；HUD Read/Decode/EQ/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；related：limit-peaks-so-a-file-does-not-clip、compress-dynamic-range-of-a-voice-recording；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `eq-a-muffled-voice-recording`
