# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S26：`remove-mains-hum-from-a-recording`。Job: remove 50/60 Hz mains hum (notch + harmonics presets)；≠ general denoise（S24），≠ declick（S27）。related：reduce-background-noise-on-a-voice-memo、eq-a-muffled-voice-recording。Page：decode → notch filters at 50 or 60 Hz (+ optional harmonics) via OfflineAudioContext Biquad → 16-bit WAV；HUD Read/Decode/Dehum/Write；auto sample with synthetic hum optional；How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`reduce-background-noise-on-a-voice-memo`（S24）、`eq-a-muffled-voice-recording`（S20）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F5/S26
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 OfflineAudioContext 串联 notch Biquad（基波 ± 可选谐波）→ 16-bit WAV；HUD Read/Decode/Dehum/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器陷波上限；勿改 docs/sound-editor/12；S25 defer 已跳过

## 建议 slug（可空，由讨论阶段拟定）

- `remove-mains-hum-from-a-recording`
