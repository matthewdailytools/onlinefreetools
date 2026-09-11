# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器里打开本地录音，按音量阈值找出够长的静音停顿，在每段静音的中点切开，得到**多段独立文件**，再打包成 **ZIP** 下载；可选每段 WAV 或 MP3。文件不上服务器。
- 谁在什么任务里用：把讲座、访谈、播客长轨、合集里「歌与歌之间的空白」拆成可单独保存的片段的人（搜 *split audio by silence* / *split recording on silence* / *split mp3 on silence* / 按静音分割音频）。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **主方向** | A.3 音频：Web Audio `decodeAudioData` + 分窗 RMS 找静音段；切点取静音中点；切片写出多缓冲；ZIP 用已入库 JSZip；MP3 用 lamejs 点后加载。不是 S2 拼回一文件，不是 S1 手标起止。 |
| **B** 场景桥接 | 次要 | 长录音 → 多段 ZIP 是桥，但选型与红线都落在 A.3 |
| **C** 行业专属 | 否 | 无单一岗位规范表；讲座/合集只是主场景 |

**选定主方向**：A  
**次要互链参考**：已上线 `remove-silence-from-a-recording`（仍一文件）、`trim-an-audio-clip-and-export`（手裁起止）。禁止 related 未立项 Hub / S3 / S4。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — 输出多文件 ZIP；与 S2 挖静音拼一文件、与 S3 等时长切、与 S1 手裁作业不同
- [x] 不是无增量机翻铺量 — 十语走 `03` 当地搜法
- [x] 不依赖偏离定位的重后端 — 标签页内 RMS + 切片 + JSZip；禁止首屏 FFmpeg.wasm
- [x] 长尾默认「一带多场景」— *split audio by silence* / *split mp3 on silence* / *detect silence split* / 按静音分割音频 进 desc/FAQ，不拆 `/silence-split`、`/split-mp3-on-silence`

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Web Audio API 解码；静音判定用分窗 RMS（与 S2 同检测、不同切开）；WAV 自封装；**JSZip** 已入库 `/vendor/jszip/jszip.min.js`（点 Download ZIP 再加载）；MP3：**lamejs 懒加载**。禁止 iframe 第三方编辑器；禁止首屏 FFmpeg。
- Tier：解码 + RMS + 切片 **0–1**；JSZip **2**（点 Download ZIP）；lamejs **2**（ZIP 内要 MP3 时）
- CWV / 懒加载注意：进页样例用短合成音（两段 ≥1 s 静音 → 三段）；超限拒绝解码；金标 HUD Decode / Detect / Split / Pack

### 若选 B

- （未选）

### 若选 C

（未选）

## 结论

- 继续立项：是
- 建议 slug：`split-a-recording-on-silence`（保留用户指定；§3.3 H 情境+动作+结果）
- 与已上线工具关系：**新建**；related 指向 S2 + S1；主题 id `sound-editor`；实现后 S2 related 可回链本 slug（`CROSS_TOOL_UPDATE=1`）
- 进入 `02-tool-info.md` 前仍缺的信息：无 Planner CSV（勾不适用）；SERP 见 `notes.md`
- 用户意图审查（标 ready 前）：见 `02` 专节
