# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S18：人声动态范围压缩器（threshold/ratio 预设如 gentle/podcast/aggressive，可选 makeup）；≠ S10 MP3 体积压缩（FAQ 须消歧中英「压缩」）、≠ S15 固定增益、≠ S16 峰值、≠ S17 LUFS

## 已知约束（若有）

- 参考现有工具：`match-podcast-loudness-to-minus-16-lufs`（S17）、`make-a-quiet-recording-louder`（S15）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业动态压缩（贴面）→ 16-bit WAV；HUD Read/Decode/Compress/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；related：match-podcast-loudness-to-minus-16-lufs、make-a-quiet-recording-louder；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `compress-dynamic-range-of-a-voice-recording`
