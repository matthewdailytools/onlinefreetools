# 00 — 原始请求

**日期**：2026-10-01  
**来源**：用户「实现D3」；权威 `docs/media/2026-10-01-browser-av-capability-map.md` §8 D3 + §4.6 表。

## 原话 / 意图

D2（单文件 `convert-an-mkv-file-to-an-mp4-file`）已绿后，做 **批量** MKV→MP4（AAC）：多文件队列、行级失败、部分成功仍可 Download ZIP。

## 约束（地图）

- Slug 建议：`batch-convert-mkv-files-to-mp4-files`
- 底座：复用 D2 mediabunny + ac3 + aac-encoder；ZIP 用同域 JSZip
- 非 YouTube；非抽音；与单文件页分工
