# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器里打开本地音频，按固定秒数切成多段（最后一段吃余数），打包 **ZIP** 下载；可选每段 WAV 或 MP3。高级设置可改成「等分成 N 段」（时长 = 总长/N）。文件不上服务器。
- 谁在什么任务里用：要把长录音切成等长块带走的人（搜 *split audio by duration* / *split mp3 into parts* / *split into equal parts* / 音频按时长切割），例如 60 秒社媒条、讲座通勤段、微信时长帽。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **主方向** | A.3 音频：Web Audio `decodeAudioData` + 按秒切片写出多缓冲；ZIP 用已入库 JSZip；MP3 用 lamejs 点后加载。不是 A3 静音中点，不是 S1 手标起止。 |
| **B** 场景桥接 | 次要 | 长文件 → 等长多段 ZIP 是桥，但选型与红线都落在 A.3 |
| **C** 行业专属 | 否 | 无单一岗位规范表；讲座/社媒只是主场景 |

**选定主方向**：A  
**次要互链参考**：已上线 `split-a-recording-on-silence`（按静音切 ZIP）、`trim-an-audio-clip-and-export`（手裁起止）。禁止 related 未立项 Hub / S4 cue。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — 切点算法是固定秒数（及可选等分 N）；与 A3 静音中点、S2 挖静音一文件、S1 手裁作业不同
- [x] 不是无增量机翻铺量 — 十语走 `03` 当地搜法
- [x] 不依赖偏离定位的重后端 — 标签页内切片 + JSZip；禁止首屏 FFmpeg.wasm
- [x] 长尾默认「一带多场景」— *split audio by duration* / *split mp3 into parts* / *split into equal parts* / *chunk audio* / 按时长切割 进 desc/FAQ，不拆 `/split-mp3`、`/audio-splitter` 品类头词 URL

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Web Audio API 解码；按 `chunkSec` 切 `AudioBuffer`；WAV 自封装；**JSZip** 已入库 `/vendor/jszip/jszip.min.js`（点 Download ZIP 再加载）；MP3：**lamejs 懒加载**。禁止 iframe 第三方编辑器；禁止首屏 FFmpeg。
- Tier：解码 + 切片 **0–1**；JSZip **2**（点 Download ZIP）；lamejs **2**（ZIP 内要 MP3 时）
- CWV / 懒加载注意：进页样例用 5 s 合成音、每段 2 s → 三段 2.00 / 2.00 / 1.00；超限拒绝解码；金标 HUD Decode / Split / Pack

### 若选 B

- （未选）

### 若选 C

（未选）

## 结论

- 继续立项：是
- 建议 slug：`split-an-audio-file-by-duration`（保留用户指定；§3.3 H）
- 与已上线工具关系：**新建**；related 指向 A3 + S1；主题 id `sound-editor`；实现后 A3 related 可回链本 slug（`CROSS_TOOL_UPDATE=1`）
- 进入 `02-tool-info.md` 前仍缺的信息：无 Planner CSV（勾不适用）；SERP 见 `notes.md`
- 用户意图审查（标 ready 前）：见 `02` 专节
