# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **V1**（视频去掉声音 → 静音成片）。

## 队列位置

F7 **A1/A2/M1** 后。本批为 **F7 V1**。

## 技术取舍

- 输入：本地视频（MP4/WebM/MOV 等浏览器可播容器）。
- 管线：video 元素加载 → `captureStream()` 仅保留视频轨（丢弃 audio tracks）→ MediaRecorder 重编码 → 下载静音视频（多为 WebM）。
- 诚实限制：浏览器通常无法无损 remux 去音轨；输出容器/编码可能与源不同；不支持 YouTube URL。
- ≠ A1 抽音（只要声音）；≠ V2 加音轨。

## 下一步

继续立项 `remove-the-audio-track-from-a-video`（02/03 → 实现 → verify:tool）。
