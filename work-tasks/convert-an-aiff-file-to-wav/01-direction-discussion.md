# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **P6** 格式 pair：本地 AIFF/CAF → 16-bit PCM WAV。

## 队列位置

P4 FLAC→MP3、P5 OGG→MP3 之后；本批为 **P6**。

## 技术取舍

- 输入：一个本地 `.aiff` / `.aif` / `.caf`。
- 管线：容器探测 → `decodeAudioData`（浏览器支持则解码；否则明确错误）→ `writeWav` 16-bit PCM。
- 高级：输出采样率 44.1 / 48 kHz（UI 标签复用 `bitrate` 键）。
- 上限：约 40 MiB / 10 分钟；单/双声道。
- related：P1 MP3→WAV、P4 FLAC→MP3。

## 下一步

02/03 → 实现 → verify:tool。
