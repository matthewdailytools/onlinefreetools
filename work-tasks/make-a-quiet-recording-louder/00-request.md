# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 S15：整段增益/放大，让安静录音更响（非 LUFS 归一化、非动态压缩、非压体积）

## 已知约束（若有）

- 参考现有工具：`convert-stereo-audio-to-mono`（S12）、`convert-audio-sample-rate-and-bit-depth`（S11）、`split-stereo-into-left-and-right-files`（S13）、声音作业表 `docs/sound-editor/12-slug-hub-and-scene.md` F4
- 必须本地处理：是
- YMYL：否
- 优先语言：十语全量
- 其他：主作业整段 gain/amplify（dB 滑条或预设）+ 峰值削波保护 → 16-bit WAV；≠ S16/S17 峰值/LUFS 归一化、≠ S18 动态压缩器、≠ S10 文件体积压缩；不含部署除非另说；勿改 docs/sound-editor/12；本轮仅立项 brief，不实现 Page/i18n

## 建议 slug（可空，由讨论阶段拟定）

- `make-a-quiet-recording-louder`
