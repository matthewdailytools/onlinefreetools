# 01 — 工具方向讨论

## 主方向

**A — 浏览器 JS 能力。** 浏览器用 Web Audio 解码本地 M4A/AAC，再在用户点击转换时懒加载同源 lamejs 编码 MP3；文件不离开标签页。

## 边界

- P3 是完整单文件格式转换，不是裁剪页、铃声页或波形编辑器。
- `aac to mp3` 与 `m4a to mp3` 共享输入、输出与结果，吸收在同一 URL。
- 浏览器无法解码、DRM、超出内存/时长帽时给出明确失败信息；不许诺所有 AAC 容器都可处理。

## 相关工具

- `convert-a-wav-file-to-mp3`：同为 MP3 输出，输入格式不同。
- `trim-an-audio-clip-and-export`：仅需保留片段时使用。

