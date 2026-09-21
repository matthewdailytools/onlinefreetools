# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **G6**（DTMF / 拨号音）。

## 队列位置

F9 G5 后。本批为 **F9 G6**。

## 技术取舍

- 输入：4×4 / 经典电话键盘（0–9 * # A–D）→ 序列字符串；单音时长与间隔芯片。
- 管线：按 ITU-T Q.23 行/列频率合成双音正弦 → 拼接静音间隔 → 写 **16-bit WAV**（默认 44100 Hz 单声道）。
- 预览 audio + Download WAV；样例一键填如 `123#` 并生成。
- ≠ G5 单正弦频率；≠ G12 短 UI 提示音；≠ 真实电话拨号/外呼。

## 下一步

继续立项 `generate-dtmf-touch-tones`（02/03 → 实现 → verify:tool）。
