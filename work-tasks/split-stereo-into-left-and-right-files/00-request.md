# 00 — 用户原始需求

## 原始描述

> 立项并实现 sound 工具 S13：拆立体声为左右单声道文件，并可交换 L-R

## 已知约束（若有）

- 参考现有工具：`convert-stereo-audio-to-mono`（S12）、`convert-audio-sample-rate-and-bit-depth`（S11）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F3
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 split L+R 双文件 ZIP 与/或 swap L-R 单立体声 WAV；≠ S12 混成一个 mono、≠ S10 体积压缩、≠ S11 采样率；不含部署除非另说；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `split-stereo-into-left-and-right-files`
