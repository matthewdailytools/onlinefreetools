# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S36**（8D / 绕耳：随时间左右自动声像）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31–**S35** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F6 表下次可交付项为 **S36 8D 声像**，与 slowed+reverb（S35）、夜核（S34）、倒放（S37）分作业。

## 技术取舍

- **采用**经典「伪 8D」路径：解码后取中置（单声道取原样，立体声取 L/R 均值），按正弦 LFO 做恒功率左右声像，强制立体声导出。
- **禁止**把本页做成真杜比/耳机 HRTF 环绕解码、或只做静态左右平衡。
- 周期预设：8s / 5s / 3s（默认 5s）+ Custom 2–20s。
- 输出 16-bit PCM 立体声 WAV；1–2 声道输入。

## 诚实边界

- 这是耳机友好的自动声像玩具，不是电影院 3D 或 Ambisonics。
- ≠ S35 slowed+reverb；≠ S34 夜核；≠ S37 倒放。

## 下一步

继续立项 `make-an-8d-panning-version-of-a-song`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
