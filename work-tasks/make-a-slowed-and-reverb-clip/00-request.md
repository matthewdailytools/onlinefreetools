# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S35：`make-a-slowed-and-reverb-clip`。Job: slowed + reverb aesthetic（slow time-stretch + simple reverb/convolution-lite or delay feedback）。≠ nightcore（S34），≠ speed-only（S32），≠ reverb-only（S40）。related：make-a-nightcore-version-of-a-song、change-audio-speed-without-changing-pitch。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120 chars。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped，勿恢复 --full）。

## 已知约束（若有）

- 参考现有工具：`make-a-nightcore-version-of-a-song`（S34）、`change-audio-speed-without-changing-pitch`（S32）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F6/S35
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 slowed+reverb 组合 → 16-bit WAV；HUD Read/Decode/Slow/Reverb/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器上限；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `make-a-slowed-and-reverb-clip`
