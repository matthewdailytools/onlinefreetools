# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S22：`fade-in-and-fade-out-an-audio-clip`。Job: fade in and fade out on a clip（duration chips e.g. 0.5/1/2/3s each end）；≠ seamless loop crossfade（S5），≠ limiter/EQ。related：boost-bass-on-an-mp3、trim-an-audio-clip-and-export（或 make-a-seamless-audio-loop）。Page：decode → apply linear or equal-power fade in/out → 16-bit WAV；HUD Read/Decode/Fade/Write。Rich ten locales；How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`boost-bass-on-an-mp3`（S21）、`trim-an-audio-clip-and-export`（S1）、`make-a-seamless-audio-loop`（S5）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4/S22
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 PCM 线性或等功率淡入淡出 → 16-bit WAV；HUD Read/Decode/Fade/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；related：boost-bass-on-an-mp3、trim-an-audio-clip-and-export；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `fade-in-and-fade-out-an-audio-clip`
