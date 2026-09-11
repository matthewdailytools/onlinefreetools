# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器里打开本地音频，设起止时间，裁出一段，导出 WAV 或 MP3；文件不上服务器。
- 谁在什么任务里用：播客/会议/备忘录只要去掉片头片尾或留一句金句再发出去的人（搜 *trim audio* / *mp3 cutter* / *cut mp3*）。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **主方向** | A.3 音频：Web Audio `decodeAudioData` 切片 + 可选 lamejs 懒加载编码；方向文档已列「音频裁剪」为可落地工具 |
| **B** 场景桥接 | 次要 | 整段录音 → 可发短文件，是桥，但技术选型与红线都落在 A.3 |
| **C** 行业专属 | 否 | 无单一岗位行话/规范表；铃声 30s 只是 FAQ/芯片默认，不是本页 H1 |

**选定主方向**：A  
**次要互链参考**：上线后 related `file-metadata-analyzer`、`file-hash`；将来 Hub `edit-audio-on-waveform` 互链（尚未立项实现）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — 起止+导出，与尚未实现的波形 Hub、与 PDF 裁切不同作业
- [x] 不是无增量机翻铺量 — 十语走 `03` brief
- [x] 不依赖偏离定位的重后端 — 标签页内解码/切片
- [x] 长尾默认「一带多场景」— *mp3 cutter* / *cut mp3* / *crop audio* 进 desc/FAQ，不拆 `/mp3-cutter`

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Web Audio API（原生）；WAV 可 `AudioBuffer` 封装；MP3 用已有 vendor 路径惯例的 lamejs **点击导出再加载**；禁止首屏 FFmpeg、禁止 iframe audiomass.co、禁止 Wavacity
- Tier：解码/切片 **0–1**；lamejs **2**（用户点 Export MP3）
- CWV / 懒加载注意：进页样例用短合成音；超限拒绝解码；金标 HUD Decode / Trim / Encode

### 若选 B

- （未选）

### 若选 C

（未选）

## 结论

- 继续立项：是
- 建议 slug：`trim-an-audio-clip-and-export`（保留用户指定）
- 与已上线工具关系：**新建**；related 指向文件检视/哈希，不假装已有音频 Hub
- 进入 `02-tool-info.md` 前仍缺的信息：无 Planner CSV（勾不适用）；主题 id `sound-editor` 须写入 catalog `primaryTopic`（实现时）
- 用户意图审查（标 ready 前）：见 `02` 专节
