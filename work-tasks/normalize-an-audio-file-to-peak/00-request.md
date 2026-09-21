# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S16：峰值归一化到目标电平（如 −1 dBFS / 0.99），把整段峰值拉齐；非简单增益（S15）、非 LUFS（S17）、非压缩器（S18）、非压 MP3 体积（S10）

## 已知约束（若有）

- 参考现有工具：`make-a-quiet-recording-louder`（S15）、`convert-stereo-audio-to-mono`（S12）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 peak normalize 到目标峰值（芯片 −0.1 / −1 / −3 dBFS，默认 −1）→ 16-bit WAV 保留声道；≠ S15 固定 dB 增益、≠ S17 LUFS、≠ S18 动态压缩、≠ S10 文件体积；不含部署除非另说；勿改 docs/sound-editor/12

## 建议 slug（可空，由讨论阶段拟定）

- `normalize-an-audio-file-to-peak`
