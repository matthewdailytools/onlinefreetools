# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **M2**（两首歌交叉淡化切歌）。

## 队列位置

F7 **A1/A2/M1/V1** 后。本批为 **F7 M2**。S41 defer。

## 技术取舍

- 输入：两段本地音频（先播 / 后接）；WAV/MP3/M4A/AAC/OGG。
- 控件：交叉淡化时长芯片（1 / 2 / 3 / 5 s，默认 2 s）；曲线芯片 equal-power（默认）或 linear。
- 管线：decodeAudioData → 对齐采样率/声道 → 尾头重叠区等功率（或线性）混叠 → 写 **16-bit WAV**。
- 输出时长 = A + B − fade；fade 必须短于两段各自时长。
- ≠ A2 硬切首尾相接；≠ M1 全程叠加混音；≠ 单文件无缝循环 wrap。

## 下一步

继续立项 `crossfade-two-audio-files`（02/03 → 实现 → verify:tool）。
