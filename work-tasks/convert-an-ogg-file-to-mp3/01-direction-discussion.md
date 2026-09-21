# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **P5** 格式 pair：本地 OGG（Vorbis/Opus）→ MP3。

## 队列位置

P4 之后；本批为 **P5**。

## 技术取舍

- 输入：一个本地 `.ogg` / `.oga` / `.opus`。
- 管线：`OggS` 签名与 codec 探测 → `decodeAudioData`（浏览器支持则解码；否则明确错误）→ lamejs MP3。
- 上限：约 40 MiB / 10 分钟；单/双声道；输出 44.1 kHz。
- related：P4 FLAC→MP3、P3 M4A→MP3。

## 下一步

02/03 → 实现 → verify:tool。
