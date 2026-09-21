# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S35**（slowed + reverb：慢速拉伸 + 混响美学一条龙）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31–**S34** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F6 表下次可交付项为 **S35 slowed+reverb**，与变速不变调（S32）、夜核加速升调（S34）、纯混响（S40）分作业。

## 技术取舍

- **采用**经典 slowed+reverb 路径：按倍率 `r`（默认 0.8，`<1`）线性插值重采样——**同时**降低音高并拉长时长；再叠加多抽头反馈延迟混响（convolution-lite / delay feedback），尾音留白后导出。
- **禁止**把本页做成 S32（WSOLA 只变速无混响）、S34（加速+升调无混响）、或 S40（只混响不减速）。
- 结果行同时展示减速倍率、约合半音与混响档，让用户看清 combo。
- 输出 16-bit PCM WAV；1–2 声道；减速预设 0.75 / 0.8 / 0.85，自定义约 0.55–0.95；混响 Soft / Medium / Heavy。

## 诚实边界

- 强混响或很低倍率可能发糊、发闷——Rules/FAQ 写明。
- ≠ S32 只变速；≠ S34 夜核；≠ S40 只混响。空壳禁止无混响时硬吹 slowed+reverb。

## 下一步

继续立项 `make-a-slowed-and-reverb-clip`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
