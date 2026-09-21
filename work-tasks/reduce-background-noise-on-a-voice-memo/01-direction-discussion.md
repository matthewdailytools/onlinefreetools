# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S24**（人声备忘录去空调/风扇底噪）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S22 已上线；S9 系统内录、S14 m4b、**S23 defer**。F4 表下次项为 **S24 降噪**，与 Adobe 级 Enhance（S25）、去嗡嗡（S26）、闷声 EQ（S20）分作业。

## 定稿要点

- 作业：对人声备忘录做**近似降噪**（高通去隆隆 + 噪声底估计 + 轻柔门控/谱减），不是云端 AI Enhance，不是去市电嗡嗡，不是 EQ。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：强度芯片 Light / Medium / Strong；默认 Medium。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → Offline 高通 → 帧级噪声底 + soft gate → writeWav 16-bit；金标 HUD Read / Decode / Denoise / Write；进页样例自动 Denoise。
- 诚实边界：浏览器近似；稳态风扇/空调底噪更有效；音乐/鼓点会受损；≠ Adobe Enhance Speech。

## 结论

继续立项 `reduce-background-noise-on-a-voice-memo`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
