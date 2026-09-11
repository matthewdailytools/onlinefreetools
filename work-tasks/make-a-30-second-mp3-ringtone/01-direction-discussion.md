# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在本标签页打开本地音频，默认框出约 30 秒，加上淡入淡出，导出 MP3 铃声。
- 谁在什么任务里用：要把一首歌的副歌/前奏做成手机铃声（安卓直接用 MP3；iPhone 搜法吸收进 FAQ，v1 不写 M4R）。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | Web Audio `decodeAudioData` + 选区切片 + 线性淡入淡出；MP3 点后懒加载 lamejs。成熟度高、Tier 0–1 主路径、Tier 2 仅编码器。 |
| **B** 场景桥接 | 部分 | 歌曲 → 铃声文件，但是核心是「处理规格」不是格式桥矩阵。 |
| **C** 行业专属 | 否 | 手机铃声是大众场景，不是单一行业规范工具。 |

**选定主方向**：A  
**次要互链参考**：S1 `trim-an-audio-clip-and-export`（任意时长裁剪、无自动淡化）；S5 `make-a-seamless-audio-loop`（无缝循环，不是铃声规格）。主题 `sound-editor`。禁止 related 未立项 Hub。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 S1：默认 30 秒窗、淡入淡出、主按钮 Make ringtone、主产物 MP3；相对 S5：不是首尾交叉淡化循环）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（无 FFmpeg 首屏、无上传、无 M4R/AAC 编码器承诺）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（ringtone maker / mp3 to ringtone / 铃声制作 / 手机铃声 同一作业）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：浏览器 Web Audio（decode + 切片 + 增益淡化）；导出复用 `/vendor/lamejs/`。
- Tier（0 / 1 / 2）：解码与淡化为 0–1；lamejs 为 2（点 Export MP3 再加载）。
- CWV / 懒加载注意：首屏不拉 lamejs；进页样例是短于真实歌的合成音，允许自动 Make ringtone，不自动编码 MP3。

## 结论

- 继续立项：是
- 建议 slug：`make-a-30-second-mp3-ringtone`
- 与已上线工具关系：新建 scene；related → `trim-an-audio-clip-and-export`、`make-a-seamless-audio-loop`。不把任意时长裁剪、无缝循环、或 iPhone M4R 安装包塞进本页进攻。
- 进入 `02-tool-info.md` 前仍缺的信息：无 Planner；SERP 以 SnipSound / Loopaloo / Notevibes / 中文「铃声制作」为对照。它们多数许诺 M4R；本页诚实只做 MP3。
- 用户意图审查（标 ready 前）：见 `02` 专节
