# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **A2**（多段首尾相接成一个文件；`/mp3-joiner` 品类搜法吸收到本页）。

## 队列位置

S1–S40、F7 **A1** 已上线。本批为 **F7 A2**。S41 defer。

## 技术取舍

- 输入：多个本地音频（WAV/MP3/M4A/AAC/OGG）；`multiple` dropzone + 追加；列表 **上移/下移/移除** 调整顺序。
- 管线：逐文件 decodeAudioData → 统一采样率与 1–2 声道 → 按列表顺序拼接样本 → 写 **16-bit WAV**。
- ≠ M1 叠加混音（同时出声）；≠ M2 交叉淡化；≠ 视频抽音（A1）。

## 下一步

继续立项 `join-audio-files-in-order`（02/03 → 实现 → verify:tool）。
