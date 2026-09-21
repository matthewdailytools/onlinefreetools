# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 hub **V3**（换成另一条音轨 / 换 BGM）。与 V2 管线相近但意图是 **替换原声**，独立 URL。

## 队列位置

F7 V2 后。本批为 **F7 V3**。

## 技术取舍

- 输入：本地视频 + 本地新音频（双 dropzone）。
- 管线：丢弃原音轨 → capture 画面 + AudioContext 新音 → MediaRecorder（多为 WebM）。
- 时长跟视频；诚实非无损 remux。
- ≠ V1 去音轨；≠ V2「给无声加轨」主叙事（FAQ 划界）；≠ YouTube。

## 下一步

02/03 → 实现 → verify:tool。
