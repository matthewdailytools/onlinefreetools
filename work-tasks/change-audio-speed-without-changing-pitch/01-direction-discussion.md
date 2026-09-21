# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S32**（变速、音高大致不变）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、**S31** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F5 表下次可交付项为 **S32 变速不变调**，与变调（S33）、夜核加速升调（S34）分作业。

## 技术取舍

- **禁止**把 `AudioBufferSourceNode.playbackRate` / `HTMLMediaElement.playbackRate` 当作本页主路径——那会连同音高一起变，与 slug 作业冲突。
- **采用**浏览器内 **WSOLA**（waveform similarity overlap-add）：固定合成 hop、按 speed 调整分析 hop，在搜索窗内取最大互相关对齐后再 OLA。实用、无外部 SoundTouch 依赖。
- 输出 16-bit PCM WAV；1–2 声道；速度范围约 0.5×–2.0×；预设芯片 0.75 / 0.9 / 1.25 / 1.5，另可自定义。

## 诚实边界

- 极端变速或强打击乐可能出现轻微颤音/拼接点伪影——Rules/FAQ 写明。
- ≠ S33 只变调；≠ S34 夜核（加速+升调一条龙）。

## 下一步

继续立项 `change-audio-speed-without-changing-pitch`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
