# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S31**（去齿音 / de-esser）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、**S27** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F5 表下次可交付项为 **S31 去齿音**，与闷声 EQ（S20）、宽带降噪（S24）、去咔哒（S27）分作业。

## 定稿要点

- 作业：对配音/人声做 **齿音频段能量检测 + 动态高架/频段衰减**（诚实浏览器近似），不是静态多段 EQ，不是宽带降噪，不是短尖峰去咔哒。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：灵敏度芯片 Light / Medium / Strong；默认 Medium。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → 检测齿音频段能量 → 动态衰减 → writeWav 16-bit；金标 HUD Read / Decode / De-ess / Write；进页样例自动 De-ess。
- 诚实边界：只针对持续 S/SH 类齿音；闷声音色整形请用 S20；稳态嘶声请用 S24；咔哒/口喷请用 S27。

## 结论

继续立项 `de-ess-a-voiceover`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
