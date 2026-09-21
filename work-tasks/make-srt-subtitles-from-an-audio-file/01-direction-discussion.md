# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **T1** scene：音频 → 带轴 SRT（尽力）。与 A4 同引擎，产品差异是 **字幕文件** 而非纯文稿。

## 技术取舍

- `SpeechRecognition` / `webkitSpeechRecognition`：播放本地文件 + 识别；用识别时刻（AudioContext 时钟或会话计时）拼 cue 起止。
- 格式化为标准 SRT（序号、`HH:MM:SS,mmm --> HH:MM:SS,mmm`、文本）。
- 回退：麦克风口述 + 会话相对时间。
- 无 SpeechRecognition → 明确 unsupported。
- **不是** Whisper；时间轴为尽力估算，非帧级强制对齐。

## 下一步

02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=make-srt-subtitles-from-an-audio-file`。
