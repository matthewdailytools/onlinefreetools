# 00 — 用户原始需求

## 原始描述

> 立项并实现 sound 工具 S12：立体声 ↔ 单声道整段转换

## 已知约束（若有）

- 参考现有工具：`convert-audio-sample-rate-and-bit-depth`（S11）、`reduce-an-mp3-file-size`（S10）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F3
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 stereo→mono；可选 Left/Right only；不做 L-R 交换独立 URL（S13）；不含部署除非另说；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `convert-stereo-audio-to-mono`
