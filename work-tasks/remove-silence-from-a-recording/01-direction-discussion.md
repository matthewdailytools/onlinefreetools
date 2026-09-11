# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器里打开本地录音，按音量阈值自动挖掉够长的静音/死气，把剩下的人声拼回**一个**更短的文件，导出 WAV 或 MP3；文件不上服务器。
- 谁在什么任务里用：播客、访谈、会议、口播备忘录里停顿太长、想一次收紧再发出去的人（搜 *remove silence from audio* / *silence remover* / *remove dead air* / 去除音频静音）。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **主方向** | A.3 音频：Web Audio `decodeAudioData` + `AudioBuffer` 上做分窗 RMS，再切片拼接；MP3 用现有 lamejs 点后加载。方向文档已列「音频裁剪」为可落地；本页是**自动按静音挖洞**，不是 S1 手标起止。 |
| **B** 场景桥接 | 次要 | 长录音 → 可听完的短文件，是桥，但选型与红线都落在 A.3 |
| **C** 行业专属 | 否 | 无单一岗位规范表；播客只是主场景，不是行话工具 |

**选定主方向**：A  
**次要互链参考**：已上线 `trim-an-audio-clip-and-export`（手裁起止）、`file-metadata-analyzer`。禁止 related 未立项 Hub `edit-audio-on-waveform` 或未立项 A3 `split-a-recording-on-silence`。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — 自动检测中间静音并拼回一文件；与 S1 手裁、与 A3 切多段 ZIP 作业不同
- [x] 不是无增量机翻铺量 — 十语走 `03` 当地搜法
- [x] 不依赖偏离定位的重后端 — 标签页内 RMS + 切片；禁止首屏 FFmpeg.wasm（11 / A.3）
- [x] 长尾默认「一带多场景」— *silence remover* / *delete silence* / *cut silence* / *truncate silence* / *remove dead air* 进 desc/FAQ，不拆 `/delete-silence`、`/silence-remover`

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Web Audio API（原生）做解码与缓冲；静音判定用分窗 RMS（竞品 Tembrica / Hearably / gottrix 同思路，不必 WASM）；WAV 自封装；MP3：**lamejs 懒加载**（S1 已入库 `/vendor/lamejs/`）。禁止 iframe 第三方编辑器；禁止首屏 FFmpeg。
- Tier：解码 + RMS + 拼接 **0–1**；lamejs **2**（用户点 Export MP3）
- CWV / 懒加载注意：进页样例用短合成音（中间必须有一段可检出的静音）；超限拒绝解码；金标 HUD Decode / Detect / Cut / Encode

### 若选 B

- （未选）

### 若选 C

（未选）

## 结论

- 继续立项：是
- 建议 slug：`remove-silence-from-a-recording`（保留用户指定；§3.3 H 情境+动作+结果）
- 与已上线工具关系：**新建**；related 指向 S1 裁剪页 + 文件元数据；主题 id `sound-editor`
- 进入 `02-tool-info.md` 前仍缺的信息：无 Planner CSV（勾不适用）；SERP 见 `notes.md`
- 用户意图审查（标 ready 前）：见 `02` 专节
