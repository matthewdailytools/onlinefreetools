# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **A8**：`bulk-convert-wav-files-to-mp3`。多文件 WAV drop → lamejs 逐个编码 → ZIP 下载（懒加载 JSZip，对齐 split-an-audio-file-by-duration）。Limits：文件数量 + 体积帽；HUD 进度。related：`convert-a-wav-file-to-mp3`、`convert-a-flac-file-to-mp3`。Rich ten locales How≥4 Why≥4 Rules≥4 FAQ≥5。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` A8（一批 WAV → ZIP 里的 MP3）。
- 必须本地处理：是。
- YMYL：否。
- 禁止：mp3↔ogg↔flac 格式矩阵、单文件精剪、上传服务器、视频。

## 建议 slug

- `bulk-convert-wav-files-to-mp3`
