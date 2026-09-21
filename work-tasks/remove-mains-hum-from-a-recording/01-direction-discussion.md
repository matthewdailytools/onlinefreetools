# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S26**（去 50/60 Hz 市电嗡嗡）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S22、**S24** 已上线；S9 系统内录、S14 m4b、**S23 defer**、**S25 defer**。F5 表下次可交付项为 **S26 去市电嗡嗡**，与通用降噪（S24）、去咔哒（S27）、闷声 EQ（S20）分作业。

## 定稿要点

- 作业：对录音做 **50/60 Hz 市电嗡嗡陷波**（基波 notch ± 可选 2–5 次谐波），不是宽带降噪，不是去咔哒，不是 EQ。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：市电频率芯片 50 Hz / 60 Hz；谐波芯片 仅基波 / 含谐波；默认 50 Hz + 含谐波。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → Offline 串联 notch Biquad → writeWav 16-bit；金标 HUD Read / Decode / Dehum / Write；进页样例自动 Dehum。
- 诚实边界：窄带陷波；对真正的市电嗡嗡有效；宽带嘶声请用 S24；咔哒/口喷请用 S27（未上线则文案边界）。

## 结论

继续立项 `remove-mains-hum-from-a-recording`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
