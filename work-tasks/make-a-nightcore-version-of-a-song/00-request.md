# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S34：`make-a-nightcore-version-of-a-song`。Job: nightcore = 加速 + 升调一条龙（speed+pitch combo）。≠ 只变速不变调（S32），≠ 只变调保时长（S33）。related：shift-the-pitch-of-a-song、change-audio-speed-without-changing-pitch。实现务实夜核（重采样倍率同时改速度与音高，不做 WSOLA 回正时长）。Presets 如 1.25× / 1.35× / 1.5× + Custom。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5；zh description ≥120 chars。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`shift-the-pitch-of-a-song`（S33）、`change-audio-speed-without-changing-pitch`（S32）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F6/S34
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业夜核加速+升调 → 16-bit WAV；HUD Read/Decode/Nightcore/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器上限；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `make-a-nightcore-version-of-a-song`
