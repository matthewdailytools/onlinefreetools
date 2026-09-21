# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **P4** 格式 pair：本地 FLAC → MP3。

## 队列位置

V2/V3 之后；本批为 **P4**，随后 P5 OGG→MP3。

## 技术取舍

- 输入：一个本地 `.flac`（音频/flac）。
- 管线：容器签名检查 → `decodeAudioData`（浏览器支持则解码；不支持则 `err_decode` 明确提示）→ lamejs `Mp3Encoder`（128/192/320）→ 试听/下载。
- 上限：约 40 MiB / 10 分钟；单/双声道；输出 44.1 kHz。
- ≠ WAV→MP3（P1）、≠ M4A→MP3（P3）；FAQ 划界；不做格式矩阵。

## 下一步

02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=convert-a-flac-file-to-mp3`。
