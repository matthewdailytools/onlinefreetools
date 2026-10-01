# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。场景：多份本地视频串行抽音轨 → WAV/MP3 → ZIP；内存安全（一次只抽一个文件）。

## 队列位置

紧挨已上线的 `extract-audio-from-a-video-file`；批量入口，不拆近义单文件 URL。

## 技术取舍

- 复用 `/vendor/extract-audio/stable-extract.js` + lamejs；JSZip 打 ZIP。
- 串行 `extractFile`；失败 skip；不累积 AudioBuffer。
- Rich ten locales；诚实边界：仅本地文件、拒 YouTube/URL。
- ≠ 单文件抽音；≠ 批量裁片头；≠ 静音成片。

## 下一步

02/03 → catalog / Page / 十语 → `merge:tools` + `coverage:gate`（0b / 2）。不上线部署。
