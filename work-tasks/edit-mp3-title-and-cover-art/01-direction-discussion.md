# 01 — 方向讨论

## 结论

主方向 **A**：浏览器 JS。hub **A6** scene：改 MP3 曲名/艺人/专辑与可选封面，**不重编码**音频帧。

## 队列位置

A8 批量 WAV→MP3 之后；本批为 **A6** 标签编辑。

## 技术取舍

- 输入：一个本地 `.mp3` + 可选 JPEG/PNG 封面。
- 管线：剥离既有 ID3v2/v1 → 写入 ID3v2.3（TIT2/TPE1/TALB + 可选 APIC）→ 拼接原 Layer III 帧 → 下载。
- 诚实：写 ID3v2.3；复杂扩展头/未同步帧可能被简化丢弃；不做 ID3v2.4 全特性、不做歌词/ReplayGain。
- ≠ 减小体积（S10 重编码）、≠ 批量转码（A8）。

## 下一步

02/03 → 实现 → `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=edit-mp3-title-and-cover-art`。
