# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S13**。

## 为何是下一档

S1–S8、P1–P3、S10–S12 已上线；S9 系统内录 defer。F3 表上 S12 之后为 **S13 拆左右声道 / 交换 L-R**，与混成单声道（S12）、采样率/位深（S11）、体积压缩（S10）分作业。

## 定稿要点

- 作业：立体声 **拆成左右两个 mono 文件**（ZIP）和/或 **交换 L↔R** 导出单个立体声 WAV；不是混成一个 mono、不是改采样率、不是压 MP3 体积。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟；须为立体声（2 声道）才能拆/换；单声道提示并拒绝主作业。
- 设置：输出模式芯片 Split to files（默认）/ Swap L-R。
- 输出：Split → ZIP（两枚 16-bit mono WAV）；Swap → 单个 16-bit stereo WAV；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → 拆声道或交换 → writeWav 16-bit（+ ZIP）；金标 HUD Read / Decode / Split（或 Swap）/ Write；进页样例自动跑通 Split。

## 结论

继续立项 `split-stereo-into-left-and-right-files`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
