# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S32：`change-audio-speed-without-changing-pitch`。Job: change speed without changing pitch（time-stretch）；Browser 勿用单纯 playbackRate 冒充不变调——须 WSOLA / overlap-add 真 time-stretch。Presets：0.75x / 0.9x / 1.25x / 1.5x（及自定义）。≠ pitch shift（S33），≠ nightcore（S34）。related：de-ess-a-voiceover、fade-in-and-fade-out-an-audio-clip。Page：decode → WSOLA stretch → 16-bit WAV；HUD Read/Decode/Stretch/Write；How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`de-ess-a-voiceover`（S31）、`fade-in-and-fade-out-an-audio-clip`（S22）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F5/S32
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 WSOLA 时间拉伸变速不变调 → 16-bit WAV；HUD Read/Decode/Stretch/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器 time-stretch 上限；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `change-audio-speed-without-changing-pitch`
