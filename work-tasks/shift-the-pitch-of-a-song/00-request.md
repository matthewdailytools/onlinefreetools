# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S33：`shift-the-pitch-of-a-song`。Job: pitch shift，时长大致保留（半音转调：-2/-1/+1/+2/+3 或类似）。≠ speed-without-pitch（S32），≠ nightcore（S34）。related：change-audio-speed-without-changing-pitch、boost-bass-on-an-mp3。实现务实变调（如 resample+WSOLA 时长回正，或 OfflineAudioContext playbackRate + stretch back）；Rules 诚实写质量上限。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120 chars。勿改 docs/sound-editor/12。若 full verify OOM：coverage:gate --phase=all → merge-all → NODE_OPTIONS=--max-old-space-size=768 build-site --slug=… → validate wiring/seo/vendor → CROSS_TOOL_UPDATE=1 check-tool-isolation。

## 已知约束（若有）

- 参考现有工具：`change-audio-speed-without-changing-pitch`（S32）、`boost-bass-on-an-mp3`（S21）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F6/S33
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业半音变调且时长大致保留 → 16-bit WAV；HUD Read/Decode/Shift/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器变调质量上限；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `shift-the-pitch-of-a-song`
