# 00 — 用户原始需求

## 原始描述

> 为 sound-editor 集群新增 **MP4-only 批量抽音** slug `batch-extract-audio-from-mp4-files`（仅 work-tasks brief，暂不实现 Page/i18n/catalog）。
>
> 与 `batch-extract-audio-from-video-files`（混合格式批量）区分：**accept 仅 MP4**；串行 `OftExtractAudio` + JSZip；related 网格接 hub、单 MP4 页、混合格式批量与后续格式 sibling。
>
> `page.style: opts`；`localProcessing: true`；主题 sound-editor。

## 已知约束（若有）

- 复用已上线批量页模式：`batch-extract-audio-from-video-files`（UI/HUD/串行 ZIP）
- 必须本地处理：是；FAQ anti-YouTube；单文件 → `extract-audio-from-an-mp4-file`
- YMYL：否
- 不修改 plan 文件；本轮不 commit；不写 `*Page.ts`

## 建议 slug

- `batch-extract-audio-from-mp4-files`
