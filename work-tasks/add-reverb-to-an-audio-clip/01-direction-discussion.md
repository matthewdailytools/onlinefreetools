# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS 音频。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **S40**（混响/回声/延迟当特效；效果名不拆 URL）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31–**S39** 已上线。下次可交付 **S40**（只混响）。**S41 自动调音 defer**。其后可开 F7 A1 视频提音频。

## 技术取舍

- 预设：Room（默认）/ Hall / Echo（延迟网络参数不同：抽头间距、湿声、反馈、尾音）。
- 管线：decode → 多抽头反馈延迟（convolution-lite）→ 软峰值 → 16-bit WAV。
- **禁止**把本页做成 S35（减速+降调+混响一条龙）；H1/按钮不得卖 slowed+reverb。

## 下一步

继续立项 `add-reverb-to-an-audio-clip`。
