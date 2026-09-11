# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在本标签页打开本地音频，标出要循环的一段，用首尾交叉淡化做成接缝听不出的循环，再导出 WAV 或 MP3。
- 谁在什么任务里用：游戏垫乐、直播 BGM、环境音/无人机垫，需要文件自己 loop 时没有咔哒或缺口。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | Web Audio `decodeAudioData` + `AudioBuffer` 环绕交叉淡化；WAV 自封装；MP3 点后懒加载 lamejs。成熟度高、Tier 0–1 主路径、Tier 2 仅编码器。 |
| **B** 场景桥接 | 部分 | 输入音频 → 输出可循环文件，但是「处理」不是格式桥。 |
| **C** 行业专属 | 否 | 游戏/直播是场景，不是单一行业规范工具。 |

**选定主方向**：A  
**次要互链参考**：S1 `trim-an-audio-clip-and-export`（先裁再循环）；主题 `sound-editor`。禁止 related 未立项 Hub。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 S1：主按钮是 Make loop，结果是环绕交叉淡化后的循环文件，不是起止切片）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（无 FFmpeg 首屏、无上传、无 AI 自动寻环服务）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（audio looper / loop maker / seamless loop / 音频循环器 同一作业）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：浏览器 Web Audio（decode + Offline/手动混叠）；导出复用 S1 的 WAV 封装与 `/vendor/lamejs/`。
- Tier（0 / 1 / 2）：解码与交叉淡化为 0–1；lamejs 为 2（点 Export MP3 再加载）。
- CWV / 懒加载注意：首屏不拉 lamejs；进页样例是短合成音，允许自动 Make loop。

## 结论

- 继续立项：是
- 建议 slug：`make-a-seamless-audio-loop`
- 与已上线工具关系：新建 scene；related → `trim-an-audio-clip-and-export`、`split-an-audio-file-by-duration`。不把两首歌交叉淡化（12 **M2**）或 30 秒铃声（**S6**）塞进本页进攻。
- 进入 `02-tool-info.md` 前仍缺的信息：无 Planner；SERP 以 BPMsonic / Violet / SoniqTools / 中文「音频循环器」为对照。
- 用户意图审查（标 ready 前）：见 `02` 专节
