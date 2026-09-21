# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S19**（F4 音量、响度、动态）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S18 已上线；S9 系统内录、S14 m4b 章节 defer。F4 表上次项为 **S19 限制器 / 防爆音**，与动态压缩（S18）、整段增益（S15）、峰值拉齐（S16）、LUFS 响度（S17）分作业。

## 定稿要点

- 作业：按 ceiling（−0.1 / −1 dBFS）与 brickwall / soft 模式限制超过天花板的峰值，不放大未超限样本；不是整段固定增益、不是峰值归一化（会抬升安静素材）、不是动态压缩贴面、不是 LUFS。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：ceiling 芯片 + brickwall/soft 模式；默认 −1 dBFS + soft。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → brickwall 硬顶或 soft 膝限幅 → writeWav 16-bit；金标 HUD Read / Decode / Limit / Write；进页样例自动 Limit。

## 结论

继续立项 `limit-peaks-so-a-file-does-not-clip`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
