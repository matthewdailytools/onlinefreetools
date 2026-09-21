# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **A8** scene：多文件本地 WAV → 各自 MP3 → ZIP。

## 队列位置

P4/P5/P6 单文件 pair 已完成；本批为 **A8** 批量，随后 A6 标签。

## 技术取舍

- 输入：多个本地 `.wav`（multiple dropzone + 队列列表）。
- 管线：RIFF 校验 → `decodeAudioData` → lamejs `Mp3Encoder`（128/192/320）逐文件 → 懒加载 JSZip 打包下载。
- 上限：最多 20 个文件；单文件约 40 MiB / 10 分钟；总队列体积帽。
- ≠ 单文件 WAV→MP3（P1）、≠ FLAC→MP3（P4）；FAQ 划界；不做格式矩阵。

## 下一步

02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=bulk-convert-wav-files-to-mp3`。
