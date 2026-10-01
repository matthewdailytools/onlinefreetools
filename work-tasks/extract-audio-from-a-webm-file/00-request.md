# 00 — 用户原始需求

## 原始描述

> 为 sound-editor 集群新增 **WebM 容器落地页** slug `extract-audio-from-a-webm-file`（仅 work-tasks brief，暂不实现 Page/i18n/catalog）。
>
> 与已上线 hub `extract-audio-from-a-video-file` 区分：本页专注 **ISOBMFF / .webm**、**Opus 在 WebM 盒内**、大文件 **playback + WebCodecs + OPFS** 主路径；FAQ **anti-YouTube/URL**；related 接 hub、WebM 批量页与混合格式批量 sibling。
>
> `page.style: opts`；`localProcessing: true`；主题 sound-editor。

## 已知约束（若有）

- 参考实现引擎：`/vendor/extract-audio/stable-extract.js`（`OftExtractAudio`；hub 已上线）
- 必须本地处理：是；**禁止** YouTube / 播放列表 / URL 代抓（drop）
- YMYL：否
- 优先语言：十语（brief 阶段先填 `03` H1 方向）
- 不修改 plan 文件；本轮不 commit；不写 `*Page.ts`

## 建议 slug

- `extract-audio-from-a-webm-file`
