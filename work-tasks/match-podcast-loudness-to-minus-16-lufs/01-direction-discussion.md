# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S17**（F4 音量、响度、动态）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S16 已上线；S9 系统内录、S14 m4b 章节 defer。F4 表上次项为 **S17 对齐播客/YouTube/Spotify 响度（LUFS）**，与整段增益（S15）、峰值拉齐（S16）、动态压缩（S18）、体积压缩（S10）分作业。

## 定稿要点

- 作业：按目标 integrated LUFS（约 −16）测量整段响度后等比缩放匹配；不是固定 dB 增益、不是峰值归一化、不是动态压缩器、不是压 MP3 体积。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：目标响度芯片（−16 / −14 / −24 LUFS 等）；默认 −16 LUFS（播客常见）；YouTube/Spotify 等平台目标用芯片切换，不拆 URL。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → measure integrated LUFS → scale to target → writeWav 16-bit；金标 HUD Read / Decode / Measure / Match / Write；进页样例自动跑通 Match。

## 结论

继续立项 `match-podcast-loudness-to-minus-16-lufs`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
