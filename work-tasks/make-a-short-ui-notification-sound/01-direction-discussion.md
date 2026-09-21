# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **G12**（通知/提示音制作）。

## 队列位置

F9 G6 后。本批为 **F9 G12**。

## 技术取舍

- 输入：简单预设芯片（soft click / success / alert / error / ping）+ 可选时长芯片。
- 管线：预设波形（短正弦/方波包络/双音 chirp 等）→ 写 **16-bit WAV**（默认 44100 Hz 单声道）。
- 预览 audio + Download WAV；样例一键选 success 并生成。
- ≠ G5 长正弦频率发生；≠ G6 DTMF 拨号音；≠ 铃声裁剪产品。

## 下一步

继续立项 `make-a-short-ui-notification-sound`（02/03 → 实现 → verify:tool）。
