# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S24：`reduce-background-noise-on-a-voice-memo`。Job: reduce background noise on voice memo (simple spectral gate / noise floor subtract / highpass+gentle gate — honest browser limits in Rules/FAQ)；≠ enhance speech Adobe-level（S25 defer-ish），≠ dehum（S26），≠ EQ（S20）。related：fade-in-and-fade-out-an-audio-clip、eq-a-muffled-voice-recording。Page：decode → denoise approx → 16-bit WAV；HUD Read/Decode/Denoise/Write。Rich ten locales；How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool。

## 已知约束（若有）

- 参考现有工具：`fade-in-and-fade-out-an-audio-clip`（S22）、`eq-a-muffled-voice-recording`（S20）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4/S24
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业高通 + 噪声底估计 + 轻柔门控/谱减近似 → 16-bit WAV；HUD Read/Decode/Denoise/Write；进页样例自动跑、不自动播放；40 MiB / 10 分钟；诚实写浏览器级降噪上限；勿改 docs/sound-editor/12；S23 defer 已跳过

## 建议 slug（可空，由讨论阶段拟定）

- `reduce-background-noise-on-a-voice-memo`
