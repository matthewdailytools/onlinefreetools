# 00 — 用户原始需求

## 原始描述

> Create NEW tool slug `batch-extract-audio-from-video-files` end-to-end (brief + catalog + Page + icon already at public/icons/tools/batch-extract-audio-from-video-files.svg + 10 locale shards).
>
> Pipeline: load `/vendor/lamejs` then `/vendor/extract-audio/stable-extract.js`; for each file call `OftExtractAudio.extractFile` ONE AT A TIME; on success `zip.file(name.ext, blob)`; release refs; skip failures with per-row status; never keep all AudioBuffers. Also load JSZip. Limits: `BATCH_MAX_FILES` 30, per-file `STREAM_MAX` from library. Sample: synthesize 2 short webm like extract page. Mirror `batchTrimTheSameIntroFromAudioFilesPage.ts` UI. Related: extract-audio + trim. Update single extract related to point at batch first. Do not deploy.

## 已知约束

- 本地处理：是（`localProcessing: true`）。
- YMYL：否。
- 图标已存在：`public/icons/tools/batch-extract-audio-from-video-files.svg`。
- 与单文件页共用 `OftExtractAudio`；批量须串行抽轨、失败 skip、ZIP 打包。
- FAQ：anti-YouTube；单文件指向 `extract-audio-from-a-video-file`。

## 建议 slug

- `batch-extract-audio-from-video-files`
