# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S31：`de-ess-a-voiceover`。Job: de-esser for voiceover（dynamic high-shelf / band reduction on sibilance — honest browser approx）；≠ EQ（S20），≠ denoise（S24），≠ declick（S27）。related：remove-clicks-from-a-recording、eq-a-muffled-voice-recording。Page：decode → detect sibilant band energy → attenuate → 16-bit WAV；HUD Read/Decode/De-ess/Write；How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`remove-clicks-from-a-recording`（S27）、`eq-a-muffled-voice-recording`（S20）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F5/S31
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业齿音频段能量检测 + 动态高架/频段衰减 → 16-bit WAV；HUD Read/Decode/De-ess/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器去齿音上限；勿改 docs/sound-editor/12；S28–S30 defer 已跳过

## 建议 slug（可空，由讨论阶段拟定）

- `de-ess-a-voiceover`
