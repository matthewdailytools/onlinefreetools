# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **A1**（本地视频只要声音；youtube 代抓见 drop）。

## 队列位置

S1–S8、P1–P3、S10–S13、S15–S22、S24、S26、S27、S31–**S40** 已上线。**S41 defer**。本批在 S40 后启动 **F7 A1**。

## 技术取舍

- 输入：本地视频文件（MP4/WebM/MOV 等浏览器可解码容器）；`accept` 含 `video/*`。
- 管线：读文件 → `AudioContext.decodeAudioData`（浏览器从视频容器解出音轨）→ 写 **16-bit WAV** 与可选 **MP3**（lamejs，对齐 S1）。
- **禁止** URL/YouTube 代抓；FAQ 明确不支持链接收音。
- ≠ V1 去音轨成片、≠ V2 配音、≠ 仅音频格式转换（无视频输入）。

## 下一步

继续立项 `extract-audio-from-a-video-file`（02/03 → 实现 → verify:tool）。
