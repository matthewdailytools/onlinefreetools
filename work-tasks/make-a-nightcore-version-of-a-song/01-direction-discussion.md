# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S34**（夜核：加速+升调一条龙）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31–**S33** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F6 表下次可交付项为 **S34 夜核**，与变速不变调（S32）、半音变调保时长（S33）分作业。

## 技术取舍

- **采用**经典夜核路径：按倍率 `r`（默认 1.25）线性插值重采样——**同时**升高音高并缩短时长。这正是「加速 + 升调」组合，不是拆成两步再假装一条龙。
- **禁止**把本页做成 S32（WSOLA 只变速保音高）或 S33（resample 后 WSOLA 回正时长只变调）。
- 结果行同时展示速度倍率与约合半音 `12·log2(r)`，让用户看清 combo。
- 输出 16-bit PCM WAV；1–2 声道；预设 1.25 / 1.35 / 1.5，自定义约 1.1–1.8。

## 诚实边界

- 高倍率或强打击乐可能发尖、发薄——Rules/FAQ 写明。
- ≠ S32 只变速；≠ S33 只变调保时长。

## 下一步

继续立项 `make-a-nightcore-version-of-a-song`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
