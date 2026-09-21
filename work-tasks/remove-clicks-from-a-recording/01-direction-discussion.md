# 01 — 方向讨论

**状态**：`ready`

## 主方向

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S27**（去咔哒/口喷/唱片裂纹）。

## 为何是下一档

S1–S8、P1–P3、S10–S13、S15–S22、S24、**S26** 已上线；S9 系统内录、S14 m4b、S23/S25 defer。F5 表下次可交付项为 **S27 去咔哒**，与宽带降噪（S24）、市电去嗡（S26）、去齿音（S31）分作业。

## 定稿要点

- 作业：对录音做 **短尖峰咔哒/爆音修复**（局部中值偏离检测 + 线性插值），不是宽带降噪，不是市电陷波，不是去齿音。
- 输入：单文件（浏览器可解码：WAV/MP3/M4A 等）；40 MiB / 10 分钟 / 1–2 声道。
- 设置：灵敏度芯片 Light / Medium / Strong；默认 Medium。
- 输出：16-bit WAV，保留 1–2 声道；试听 + Download；改设置作废旧下载。
- 管线：decodeAudioData → 检测短尖峰 → 插值修复 → writeWav 16-bit；金标 HUD Read / Decode / Declick / Write；进页样例自动 Declick。
- 诚实边界：只修短瞬态尖峰；稳态嘶声请用 S24；市电嗡嗡请用 S26；齿音请用 S31（未上线则文案边界）。

## 结论

继续立项 `remove-clicks-from-a-recording`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
