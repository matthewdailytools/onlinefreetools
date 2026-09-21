# 00 — 用户原始需求

## 原始描述

> 立项 sound 工具 **A6**：`edit-mp3-title-and-cover-art`。编辑 ID3 title/artist/album + 可选封面 JPEG/PNG；尽量不重编码音频 PCM，只改写标签。related：`bulk-convert-wav-files-to-mp3`、`convert-a-wav-file-to-mp3`。Local-only；Rich copy；诚实说明 ID3v2 支持范围。勿改 docs/sound-editor/12。CROSS_TOOL_UPDATE=1 verify:tool（slug-scoped）。

## 已知约束

- 路线图：`docs/sound-editor/12-slug-hub-and-scene.md` A6（改曲名/封面，采样不变）。
- 必须本地处理：是。
- YMYL：否。
- 禁止：重编码 PCM、抽封面独立作业矩阵、歌词/ReplayGain 扩展（U2/U3/U4）。

## 建议 slug

- `edit-mp3-title-and-cover-art`
