# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。**H0 Hub** v1 = 轻量波形选区 + 页内裁剪导出 WAV + 场景深链芯片。**不是** Pro Tools / 多轨 DAW。

## 技术取舍

- 复用 S1：`decodeAudioData` → 切片 → 16-bit `writeWav`。
- HUD：Read / Decode / Render / Write。
- 芯片深链：trim-an-audio-clip-and-export、make-a-seamless-audio-loop、fade-in-and-fade-out-an-audio-clip、convert-stereo-audio-to-mono。
- v1 无多轨、无效果架、无录音棚。

## 下一步

02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=edit-audio-on-waveform`。
