# 00 — 用户原始需求

## 原始描述

立项和实现： `record-a-voice-memo-in-the-browser`

## 已知约束

- 参考：`docs/sound-editor/12-slug-hub-and-scene.md` S7。
- 必须本地处理：是；麦克风流和录音 Blob 留在当前标签页，不上传服务器。
- YMYL：否。
- 语言：en、zh、es、ar、pt、id、fr、ja、ru、de。
- 边界：不自动请求麦克风；不做 STT、上传文件、完整波形编辑器或云端保存。

## 建议 slug

- `record-a-voice-memo-in-the-browser`
