# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S37：`reverse-an-audio-file`。Job: Reverse audio samples；16-bit WAV。related：make-an-8d-panning-version-of-a-song、fade-in-and-fade-out-an-audio-clip。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120 chars。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped，勿恢复 --full）。

## 已知约束（若有）

- 参考现有工具：`make-an-8d-panning-version-of-a-song`（S36）、`fade-in-and-fade-out-an-audio-clip`（S22）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F6/S37
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 样本倒序 → 16-bit WAV；HUD Read/Decode/Reverse/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `reverse-an-audio-file`
