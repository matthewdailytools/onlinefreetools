# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **V2**（给无声/弱声视频配上一条音）。

## 队列位置

F7 V1 后。本批为 **F7 V2**。

## 技术取舍

- 输入：本地视频 + 本地音频（双 dropzone）。
- 管线：captureStream 取画面轨（丢弃原音）+ AudioContext 解码音频 → MediaStreamDestination → 合并轨 → MediaRecorder 重编码（多为 WebM）。
- 时长跟视频；音频截断或静音垫齐视实现；诚实写非无损 remux。
- ≠ V1 去音轨；≠ A1 抽音；≠ YouTube/URL 代抓；V3 换轨若近则 FAQ 一句划界。

## 下一步

继续立项 `add-an-audio-track-to-a-video`（02/03 → 实现 → verify:tool）。
