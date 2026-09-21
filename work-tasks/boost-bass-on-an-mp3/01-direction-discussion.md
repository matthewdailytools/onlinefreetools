# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S21**（F4 音量旁的低音增强）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S20 已上线；S9 系统内录、S14 m4b 章节 defer。F4 表上次项为 **S21 低音增强**，与闷声三频段 EQ（S20）、整段增益放大（S15）分作业。

## 定稿要点

- 作业：对偏薄、低音不足的音频施加**单节 lowshelf** Biquad 增益预设（Mild / Medium / Strong），不是三频段全 EQ、不是整段响度增益。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：三档低音预设芯片；默认 Medium。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → OfflineAudioContext + 单节 lowshelf → 软峰值保护 → writeWav 16-bit；金标 HUD Read / Decode / Boost / Write；进页样例自动 Boost。

## 结论

继续立项 `boost-bass-on-an-mp3`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
