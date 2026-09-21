# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S12**。

## 为何是下一档

S1–S8、P1–P3、S10、S11 已上线；S9 系统内录 defer。F3 表上 S11 之后为 **S12 立体声 ↔ 单声道**，与采样率/位深（S11）、体积压缩（S10）、拆左右文件（S13）分作业。

## 定稿要点

- 作业：整段 **立体声混成单声道**（或只保留 L/R）→ 导出 WAV；不是改采样率、不是压 MP3 体积、不是拆成左右两个文件。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：输出模式芯片 Mix to mono（默认）/ Left only / Right only。已是单声道时提示并允许 Convert 后下载 mono WAV 副本。
- 输出：16-bit WAV；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → 混/选声道 → writeWav 16-bit；金标 HUD Read/Decode/Mix/Write；进页样例自动跑通。

## 结论

继续立项 `convert-stereo-audio-to-mono`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
