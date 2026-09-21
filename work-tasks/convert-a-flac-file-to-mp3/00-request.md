# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **P4**：`convert-a-flac-file-to-mp3`。FLAC → MP3（`decodeAudioData` 若浏览器支持 FLAC，否则明确错误；lamejs 编码对齐现有 wav→mp3）。related：`convert-a-wav-file-to-mp3`、`convert-an-m4a-file-to-mp3`。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` P4（先一对 FLAC→MP3）。
- 必须本地处理：是。
- YMYL：否。
- 禁止：通用格式矩阵、视频/URL、批处理、上传服务器、flac→ogg 等再铺。

## 建议 slug

- `convert-a-flac-file-to-mp3`
