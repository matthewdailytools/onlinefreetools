# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S37**（倒放：样本时间轴反转）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31–**S36** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F6 表下次可交付项为 **S37 倒放**，与 8D 声像（S36）、淡入淡出（S22）分作业。

## 技术取舍

- **采用**逐声道样本倒序：`out[i] = in[n-1-i]`，时长与采样率不变，导出 16-bit PCM WAV。
- **禁止**把本页做成变速、变调、8D 或淡入淡出。
- 无复杂预设；保留 1–2 声道。

## 诚实边界

- 倒放会把句首变句尾；不含「智能」对齐或歌词同步。
- ≠ S36 8D；≠ S22 淡入淡出；≠ 夜核/混响。

## 下一步

继续立项 `reverse-an-audio-file`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
