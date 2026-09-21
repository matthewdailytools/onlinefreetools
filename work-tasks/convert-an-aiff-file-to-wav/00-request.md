# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **P6**：`convert-an-aiff-file-to-wav`。AIFF/CAF → WAV（`decodeAudioData` → 16-bit PCM `writeWav`）。related：`convert-an-mp3-file-to-wav`、`convert-a-flac-file-to-mp3`。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` P6（AIFF/CAF → WAV pair）。
- 必须本地处理：是。
- YMYL：否。
- 禁止：通用格式矩阵、MP3 输出、视频/URL、批处理、上传服务器。

## 建议 slug

- `convert-an-aiff-file-to-wav`
