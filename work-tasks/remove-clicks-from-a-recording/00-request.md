# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S27：`remove-clicks-from-a-recording`。Job: remove clicks/pops（simple median/interpolation spike repair — honest browser limits）；≠ denoise（S24），≠ dehum（S26），≠ de-ess（S31）。related：remove-mains-hum-from-a-recording、reduce-background-noise-on-a-voice-memo。Page：decode → detect short spikes → interpolate → 16-bit WAV；HUD Read/Decode/Declick/Write；How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`remove-mains-hum-from-a-recording`（S26）、`reduce-background-noise-on-a-voice-memo`（S24）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F5/S27
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业短尖峰检测 + 中值/插值修复 → 16-bit WAV；HUD Read/Decode/Declick/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器去咔哒上限；勿改 docs/sound-editor/12；S28–S30 defer 已跳过（本队列下一档可做 S31）

## 建议 slug（可空，由讨论阶段拟定）

- `remove-clicks-from-a-recording`
