# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 sound-editor **A1 容器芯片**（MP4 场景落地），与 hub **分工**而非重复 doorway。

## 与 hub 的边界

| 维度 | `extract-audio-from-a-video-file`（hub） | `extract-audio-from-an-mp4-file`（本页） |
|---|---|---|
| 检索意图 | extract audio from **video**；混合格式入口 | extract audio from **mp4** / mp4 to mp3 / **an mp4 file** |
| accept | `video/*` + 能力表多容器 | **`.mp4` / `video/mp4` 为主**（M4A 音频-only 在 FAQ 划界） |
| 技术叙事 | 双路径 registry（ISOBMFF vs fallback） | **ISOBMFF demux + AAC 轨 + OPFS 大文件** 为默认故事 |
| IG | 通用本地抽音 + 诚实 caps | **MP4/AAC 盒结构**、手机导出 MP4、长片 demux 上限 |

## 队列位置

hub 与 `batch-extract-audio-from-video-files` 已上线（2026-10-01）。本页为 **P0 格式落地** 首条（MP4），后续 sibling：`batch-extract-audio-from-mp4-files`、MOV/WebM/MKV 格式页（brief 预留 related，本轮不建页）。

## 技术取舍

- 复用 `OftExtractAudio.extractFile`；进页默认 **MP4 文件** dropzone（`accept` 收紧为 mp4）。
- 大 MP4：优先 **demux 音轨 → WebCodecs 解码 → OPFS 流式写 MP3/WAV**（与 hub ISOBMFF 路径一致，文案写清 **约 5 GiB / 6 h** 与无 OPFS 降级）。
- 小文件：可走 `decodeAudioData` 快路径（Rules/FAQ 诚实，不抢 IG 主叙事）。
- **禁止** URL/YouTube；FAQ 与 hub 一致 drop。
- ≠ V1 静音成片；≠ 纯音频格式转换（无视频输入）；≠ hub 的「任意视频容器」首屏。

## 下一步

完成 02/03 → `coverage:gate --phase=0b` 绿 → 标 `02=ready`、`03=briefs-ready` → 再进入 catalog/Page/i18n 实现。
