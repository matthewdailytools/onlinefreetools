# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S11**。

## 为何是下一档

S1–S8、P1–P3、S10 已上线；S9 系统内录 defer。F3 表上 S10 之后为 **S11 改采样率/位深**，与体积压缩（S10）、声道转换（S12）、纯格式对（P1/P2）分作业。

## 定稿要点

- 作业：整段改 **采样率 + PCM 位深** → 导出 WAV；不是裁剪、不是降码率减体积、不是动态压缩。
- 输入：单文件（浏览器可解码的常见音频：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：采样率芯片 22.05 / 44.1 / 48 / 96 kHz（默认 44.1）；位深 16 / 24-bit（默认 16）。**不按数值拆 URL**。
- 输出：WAV；试听 + Download；改设置作废旧下载。
- 重采样：`OfflineAudioContext`；位深量化写 PCM；金标 HUD；进页样例自动跑通。

## 结论

继续立项 `convert-audio-sample-rate-and-bit-depth`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
