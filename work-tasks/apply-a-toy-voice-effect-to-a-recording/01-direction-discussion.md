# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频能力。依据 `docs/2026-07-28-tool-direction.md` A.3 与 `docs/sound-editor/12-slug-hub-and-scene.md` **S38**（文件向玩具变声：松鼠/巨人/机器人/电话）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31–**S37** 已上线；S9 系统内录、S14 m4b、S23/S25/S28–S30 defer。F6 表下次可交付项为 **S38 玩具变声**，与性别听感（S39）、半音保时长（S33）、倒放（S37）分作业。

## 技术取舍

- **Chipmunk**：线性重采样 ratio≈1.65（升调并缩短时长；经典氦气/松鼠玩具感）。
- **Giant**：线性重采样 ratio≈0.62（降调并拉长）。
- **Robot**：环形调制（载波 ~55 Hz）+ 轻高通。
- **Telephone**：OfflineAudioContext 高通≈300 Hz + 低通≈3400 Hz。
- **禁止**做成明星/名人克隆、说话人转换或 V1 训练页。
- 保留 1–2 声道；导出 16-bit PCM WAV。

## 诚实边界

- 玩具预设 ≠ 克隆某人；≠ S39「性别向」听感；≠ S33 半音保时长变调。
- Chipmunk/Giant 会改时长（与 S33 故意不同）。

## 下一步

继续立项 `apply-a-toy-voice-effect-to-a-recording`。参考 SEO：`docs/2026-07-28-per-tool-dev-seo-plans.md`；IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。
