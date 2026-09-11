# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：读取一张 cue sheet（INDEX 01，75 帧/秒）和配套的整轨音频/镜像，按曲目切开，打包成带曲名的多文件 ZIP。
- 谁在什么任务里用：手里有一张 CD/黑胶整轨 rip（WAV/FLAC/MP3，偶见 BIN）加 `.cue`，想把合集拆成可单独播放的曲目（搜 *cue splitter* / *split ape cue* / *split flac cue* / cue 分轨）。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 主 | 文本解析 cue + 本地切片/编码；Tier 0 解析 + Web Audio / WAV 字节切片；JSZip、lamejs 点后加载。成熟、可讲清 INDEX 公式。 |
| **B** 场景桥接 | 次 | 输入整轨+表 → 输出分轨 ZIP，是场景桥，但能力落在浏览器解析而非岗位规范。 |
| **C** 行业专属 | 否 | 不是只认某一行业行话的计算器；听碟/DJ 只是场景。 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：S3 等时长切、A3 静音切（切开方式不同）；禁止 related 到未立项 Hub。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — 切点来自 cue INDEX，不是秒数也不是静音
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端 — 不拉 FFmpeg.wasm 墙；APE 解码诚实失败
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL — ape/flac/wav/bin + cue 共一页

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：cue 文本自解析（无新 npm）；WAV/BIN 按字节切片；其它容器 `decodeAudioData`；ZIP=`jszip`；MP3=`@breezystack/lamejs`（均已 vendor）
- Tier（0 / 1 / 2）：解析与切片 Tier 0；JSZip/lamejs 点 Download 后 Tier 1。禁止进页拉 FFmpeg/APE WASM（Tier 2）冒充「支持 ape」
- CWV / 懒加载注意：金标 HUD Parse → Decode → Split → Pack；进页 6 s 样例允许自动切（缓冲小）

### 若选 B

- 场景链（从哪到哪）：整轨镜像 + cue → 分轨 ZIP
- 上游 / 下游工具：上游是已有 rip；下游可听单曲或再交给 S1 精剪

### 若选 C

立项三问（任一「否」则暂缓）：不适用

## 结论

- 继续立项：是
- 建议 slug：`split-a-disc-image-with-a-cue-sheet`
- 与已上线工具关系（增强 / 新建 / Related）：**新建** scene；related S3 + A3；FAQ 划界 S1 手裁、S2 一文件、按体积切、视频、YouTube
- 进入 `02-tool-info.md` 前仍缺的信息：无（12 表搜法簇 + 公开 SERP：Vibes / AlienFusion / FFcuesplitter / ArchWiki shnsplit）
- 用户意图审查（标 ready 前）：见 `02` 专节 / `notes.md`
