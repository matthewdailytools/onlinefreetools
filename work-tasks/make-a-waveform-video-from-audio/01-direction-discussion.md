# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **A5** scene：本地音频 → 画布波形动画 + MediaRecorder → 多为 WebM 下载。

## 队列位置

U2 / U3 / L2 之后；本批为 **A5**。A4 转写仅在 A5 OK 且可行时启动。

## 技术取舍

- `decodeAudioData` → 峰值下采样 → `canvas.captureStream` + `MediaStreamDestination` → `MediaRecorder`。
- 诚实 WebM / 重编码限制写入 FAQ / Rules。
- ≠ 抽音（A1）；≠ 单点裁剪（S1）；≠ YouTube。
- related：`extract-audio-from-a-video-file`、`trim-an-audio-clip-and-export`。

## 下一步

02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=make-a-waveform-video-from-audio`。
