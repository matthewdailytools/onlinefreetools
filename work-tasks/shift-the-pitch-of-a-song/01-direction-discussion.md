# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S33**（变调、时长大致不变；降调伴奏）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31、**S32** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F6 表下次可交付项为 **S33 半音变调**，与变速不变调（S32）、夜核加速升调（S34）分作业。

## 技术取舍

- **禁止**把单纯 `playbackRate` 当最终结果（时长会跟着变）——本页作业是变调且时长大致保留。
- **采用**务实两步：①按半音比 `2^(n/12)` 重采样（线性插值）改变音高并改变时长；②用与 S32 同族的 **WSOLA** 把时长拉回原长（stretch speed = 1/pitch_ratio）。无外部 SoundTouch / Rubber Band 依赖。
- 输出 16-bit PCM WAV；1–2 声道；预设半音芯片 −2 / −1 / +1 / +2 / +3；另可自定义约 −12…+12。

## 诚实边界

- 浏览器重采样 + WSOLA 不是工作室级相位声码器；大跨度半音或强打击乐可能有颤音/金属感——Rules/FAQ 写明。
- ≠ S32 只变速；≠ S34 夜核（加速+升调一条龙）。

## 下一步

继续立项 `shift-the-pitch-of-a-song`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
