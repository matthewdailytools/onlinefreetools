# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。场景：**多份本地 .mkv** 串行抽 AAC 轨 → WAV/MP3 → ZIP；内存与 hub/混批 sibling 同规（一次只处理一个文件）。

## 与 sibling 的边界

| 维度 | `batch-extract-audio-from-video-files` | `batch-extract-audio-from-mkv-files`（本页） |
|---|---|---|
| 检索意图 | batch extract from **video files**（混容器） | batch extract from **mkv** / bulk mkv to mp3 |
| accept | `OftExtractAudio.supportedAccept()` | **仅 `.mkv` / video/mkv** |
| 预检 | `classifyFile` 多格式 caps | 非 MKV **队列拒绝**（hint 指混批页） |
| related | 单文件 hub | hub + **单 MKV** + **本页** + 未来 `batch-extract-audio-from-mov-files` 等 |

## 技术取舍

- 管线：lazy lamejs → `stable-extract.js` → JSZip；**串行** `extractFile`；失败 skip；不保留全部 AudioBuffer。
- 单文件上限：走 MKV/ISOBMFF 能力（demux+OPFS 大文件故事与单 MKV 页一致）。
- 队列上限：`BATCH_MAX_FILES` 30（与混批页一致）。
- UI：金标 HUD（对照 `batch-convert-web-pages-to-jpg`）；主行 Extract / Stop / Download ZIP；设置折叠。
- Sample：合成 **2 段短 MKV**（或 MediaRecorder 产出），非 WebM 样例。
- **禁止** YouTube/URL；单 MKV → related 单页；混容器 → related 混批页。

## 下一步

02/03 → `coverage:gate --phase=0b` → `ready` / `briefs-ready` → 实现。
