# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S20**（F4 音量、响度、动态旁的 EQ 扫闷）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S19 已上线；S9 系统内录、S14 m4b 章节 defer。F4 表上次项为 **S20 闷声 EQ**，与仅低音增强（S21）、降噪（S24）、去齿音（S31）分作业。

## 定稿要点

- 作业：对闷、暗、欠清晰的人声录音施加三频段 Biquad 预设（Clarity / Warmth / Presence），不是单频低音增强、不是底噪抑制、不是齿音压缩。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：三预设芯片；默认 Clarity。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → OfflineAudioContext + 三节 BiquadFilter → 软峰值保护 → writeWav 16-bit；金标 HUD Read / Decode / EQ / Write；进页样例自动 EQ。

## 结论

继续立项 `eq-a-muffled-voice-recording`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
