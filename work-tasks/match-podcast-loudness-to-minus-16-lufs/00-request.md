# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S17：把播客响度对齐到约 −16 LUFS（芯片 −16/−14/−24 等）；非峰值归一化（S16）、非简单增益（S15）、非动态压缩器（S18）、非压 MP3 体积（S10）

## 已知约束（若有）

- 参考现有工具：`normalize-an-audio-file-to-peak`（S16）、`make-a-quiet-recording-louder`（S15）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业 integrated LUFS 响度匹配（芯片 −16 / −14 / −24 等，默认 −16）→ 16-bit WAV 保留声道；≠ S15 固定 dB 增益、≠ S16 峰值归一化、≠ S18 动态压缩、≠ S10 文件体积；各平台目标不拆 URL；不含部署除非另说；勿改 docs/sound-editor/12；本轮仅立项 brief，不实现 Page/i18n

## 建议 slug（可空，由讨论阶段拟定）

- `match-podcast-loudness-to-minus-16-lufs`
