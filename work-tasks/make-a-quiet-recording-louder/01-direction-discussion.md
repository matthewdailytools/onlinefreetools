# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S15**（F4 音量、响度、动态）。

## 为何是下一档

S1–S8、P1–P3、S10–S13 已上线；S9 系统内录、S14 m4b 章节 defer。F4 表上首项为 **S15 整段大声一点（增益/放大器）**，与峰值归一化（S16）、LUFS 响度（S17）、动态压缩（S18）、体积压缩（S10）分作业。

## 定稿要点

- 作业：整段 **增益放大**（dB 滑条或预设），峰值削波保护后导出 WAV；不是 peak/LUFS 归一化、不是动态压缩器、不是压 MP3 体积。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：增益 dB 滑条 + 若干预设（如 +3 / +6 / +12 dB）；应用增益后若会削波则按峰值缩放保护（诚实说明：极响素材增益空间有限）。
- 输出：16-bit WAV；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → apply gain（dB）+ peak clip protect → writeWav 16-bit；金标 HUD Read / Decode / Amplify / Write；进页样例自动跑通 Amplify。

## 结论

继续立项 `make-a-quiet-recording-louder`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
