# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S16**（F4 音量、响度、动态）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15 已上线；S9 系统内录、S14 m4b 章节 defer。F4 表上次项为 **S16 峰值拉齐（peak normalize）**，与整段增益（S15）、LUFS 响度（S17）、动态压缩（S18）、体积压缩（S10）分作业。

## 定稿要点

- 作业：按目标峰值归一化（如 −1 dBFS），扫描绝对峰值后等比缩放使峰值命中目标；不是固定 dB 增益、不是 LUFS、不是动态压缩器、不是压 MP3 体积。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：目标峰值芯片（−0.1 / −1 / −3 dBFS）；默认 −1 dBFS。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → find abs peak → scale to target → writeWav 16-bit；金标 HUD Read / Decode / Normalize / Write；进页样例自动跑通 Normalize。

## 结论

继续立项 `normalize-an-audio-file-to-peak`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
