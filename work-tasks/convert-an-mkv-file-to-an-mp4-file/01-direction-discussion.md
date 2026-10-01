# 01 — 方向讨论

**日期**：2026-10-01  
**结论**：新建 `convert-an-mkv-file-to-an-mp4-file`（单文件）。

## 底座选型

| 候选 | 结论 |
|---|---|
| V2 `@ffmpeg/core` ~31 MiB | **否**：Cloudflare Assets 单文件 ≤25 MiB；GPL 更重 |
| V1 mediabunny + ac3 + aac-encoder | **是**：各 bundle ~1 MiB；官方 E-AC-3 解码 + AAC 编码；Conversion API 直出 MP4 |

命令语义对齐 D1 FAQ：`video copy`（能 copy 则 copy）+ `audio → AAC stereo`。

## 产品边界

- accept：`.mkv` only  
- 默认：首视频轨 + 首音轨；音轨强制 AAC、可降混立体声  
- 上限（诚实）：首发约 **500 MiB / 2 h**（BufferTarget；超大仍建议桌面 ffmpeg）  
- related：抽音 MP4 / 抽音 MKV / 视频 hub  

## SERP

主词：mkv to mp4 / convert mkv to mp4。H1 用 conversion-pair 任务句，不硬刚「best free online」。
