# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S22**（淡入淡出）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S21 已上线；S9 系统内录、S14 m4b 章节 defer。F4 表下次项为 **S22 淡入淡出**，与无缝循环首尾交叉淡化（S5）、限幅/EQ、铃声裁切淡化分作业。

## 定稿要点

- 作业：对整段剪辑施加**头端淡入 + 尾端淡出**（时长芯片 0.5/1/2/3 s 各一端），曲线可选线性或等功率；不是环绕交叉淡化做成无缝循环，不是限幅器/均衡。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：淡入时长芯片、淡出时长芯片、曲线（Linear / Equal-power）；默认各 1 s、等功率。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → 按采样施加包络 → writeWav 16-bit；金标 HUD Read / Decode / Fade / Write；进页样例自动 Fade。

## 结论

继续立项 `fade-in-and-fade-out-an-audio-clip`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
