# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **G5**（音调/频率发生器）。

## 队列位置

F7 M2 后。本批为 **F9 G5**。

## 技术取舍

- 输入：频率 Hz（数字框）+ 预设芯片（如 220 / 440 / 880 / 1000）；时长芯片（如 1 / 2 / 3 / 5 s）。
- 管线：Offline 或直接 Float32 合成正弦 → 写 **16-bit WAV**（默认 44100 Hz 单声道）。
- 预览 audio + Download WAV；样例一键填 440 Hz / 2 s 并生成。
- ≠ G4 粉白棕噪；≠ G6 DTMF；≠ 上传文件处理工具。

## 下一步

继续立项 `generate-a-sine-tone-at-a-frequency`（02/03 → 实现 → verify:tool）。
