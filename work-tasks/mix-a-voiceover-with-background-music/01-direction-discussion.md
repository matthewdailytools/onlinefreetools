# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。依据 `docs/sound-editor/12-slug-hub-and-scene.md` **M1**（两段叠在一起：口播+垫乐同时出声；可闪避）。

## 队列位置

F7 **A1/A2** 已上线。本批为 **F7 M1**。S41 defer。

## 技术取舍

- 输入：两段本地音频（voiceover + background）；WAV/MP3/M4A/AAC/OGG。
- 控件：口播增益、垫乐增益滑杆；可选简易 ducking（口播有能量时压低垫乐）。
- 管线：decodeAudioData → 对齐采样率/声道 → 按最短或最长策略混叠（取较长轨时长，短轨补静音）→ 可选 duck → 写 **16-bit WAV**。
- ≠ A2 首尾相接；≠ M2 交叉淡化；≠ 视频抽音（A1）。

## 下一步

继续立项 `mix-a-voiceover-with-background-music`（02/03 → 实现 → verify:tool）。
