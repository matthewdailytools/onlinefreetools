# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **A4** scene：音频 → 文本（尽力）。

## 技术取舍

- `SpeechRecognition` / `webkitSpeechRecognition`：播放本地文件到扬声器 + 启动识别（识别器听麦克风，环回不可靠）。
- 回退：麦克风实时口述。
- 无 SpeechRecognition → 明确 unsupported。
- **不是** Whisper / 云 ASR 克隆；不加载巨大 wasm 模型。
- FAQ 必须写清：许多浏览器无法对上传文件做可靠离线 ASR。

## 下一步

02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=transcribe-an-audio-file-to-text`。
