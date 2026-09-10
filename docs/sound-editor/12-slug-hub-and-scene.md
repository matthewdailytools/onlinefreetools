# 12 — 声音域 slug：大编辑器（都满足）+ 单点页（只满足）

**日期**：2026-09-10  
**状态**：规划；**不是**立项。未点名不得建 `work-tasks/`、不得改 `src/`。  
**slug / H1 均为草稿**：上线前须跑 0b + SERP；禁止用品类头词当 URL。  
**权威**：拆页只看 **主控件 / 对象 / 失败模式**（[长尾策略 §3.3 H](../seo/2026-08-20-long-tail-gap-strategy.md)）。Google doorway / scaled content 高于本页任何「多占几个词」的冲动。  
**上游**：需求来自 [05](./05-sound-universe-demand-map.md)；本站能做的边界来自 [11](./11-executable-plan.md) 与 [STT 方案](../2026-09-08-js-speech-to-text-solutions.md)。

---

## 0. 模式（先钉死，再列 slug）

对照本站已有结构：`image-compress` **都满足**「压一张图」；`bulk-compress-product-photos` **只满足**「一批商品图打 ZIP」——因为主控件换成了队列，不是换 H1。

声音同样两层，**禁止第三层**（每个近义词一张裁剪器）：

| 层 | 用户打开页要办的事 | 主控件 | 满足范围 |
|---|---|---|---|
| **Hub** | 在时间线上改一段声音再导出 | 波形 + EDL + 命令 | **都满足**同一作业类型：剪、录、淡化、导出、（S2）修好 |
| **Scene slug** | 进页默认就是这一次任务，没有「请先选模式」 | **另一套**输入/结果/失败模式 | **只满足**该作业；要继续精剪 → related 链回 Hub |
| **Chip / Use case** | 与 Hub 同主控件，只是预设不同 | 同一套波形 | **只满足**写在芯片上，**不新开 URL** |

自检（拆页前必过）：

1. 去掉 title 后，正文、Example、Rules、失败卡是否仍明显不同？  
2. 用户是否期望 **另一套主控件**（文件列表、视频 demux、转写文本区、声景推子），而不是同一波形换默认选区？  
3. 会否形成「mp3 cutter / cut mp3 / trim audio / audio trimmer」四张空壳？

答案是「只换词」→ absorb 进 Hub。答案是「控件不同」→ 可 `build` 单点页。

**单点页禁止做成缩小版编辑器。** 做成「只有 Trim 的波形页」= doorway。单点页应是一种输入、一个主按钮、一种结果；复杂编辑请去 Hub。

---

## 1. Hub：大编辑器（都满足）

| 项 | 草稿（0b 可改） |
|---|---|
| slug | `edit-audio-on-waveform` |
| 情境 + 动作 + 结果 | 播客/会议/备忘录有废段 → 在波形上剪修 → 导出 WAV 或 MP3 |
| 进页默认 | 样例已出波形，可播、可选区；不是空白万能台 |
| 头词落点 | *sound editor* / *online audio editor* → title / FAQ / Why choose，**不当 URL** |
| 分期 | [11](./11-executable-plan.md) S1 → S2；同一 URL |
| 吸收的旧清单名 | `audio-trim`、`audio-recorder`、`audio-wav-mp3` **永不注册为独立 slug** |

Hub **都满足**的是「时间线编辑」这一作业类型，不是 05 里整座声音宇宙。分离、TTS、克隆、实时变声、识曲 **不是** Hub 的「都满足」。

### 1.1 进 Hub 的芯片 / Use cases（只满足，不拆 URL）

同主控件：打开音频（或录音）→ 改 graph → 导出。平台规格用预设，不新开页。

| 只满足的点 | 用户搜法（种子，待 Planner） | 进页怎么只满足 | 独立 URL？ |
|---|---|---|---|
| 剪掉片头片尾 / 口误 | mp3 cutter；trim audio；cut mp3 | 默认选区 + Trim / Delete | **否** |
| 当场录一句 | voice recorder；online mic | Record 写入 playhead | **否** |
| 整段转 MP3 / WAV | wav to mp3；convert wav to mp3 | 不剪，Export 选格式 | **否** |
| 淡入淡出 | fade in fade out audio | Fade 主命令 | **否** |
| 倒放 | reverse audio | Reverse | **否** |
| 音量拉齐（峰值） | normalize audio；volume booster | 峰值归一化（S1） | **否** |
| 播客响度 -16 LUFS | podcast loudness；lufs -16 | S2 命令 + 芯片默认 -16 | **否** |
| 人声降噪 | noise reduction audio；remove background noise | S2 RNNoise；Example 对准人声尾 | **否** |
| 变速不变调 | change speed without pitch；nightcore 的「变速」一半 | S2 SoundTouch 芯片 | **否** |
| 变调（松鼠/巨人） | pitch shifter；chipmunk voice **文件向** | S2「连带变调」；不是实时麦 | **否** |
| 手机铃声 30s | iphone ringtone maker | 芯片：选区帽 30s + 淡化 + Export MP3（本站 v1 不做 M4A，Rules 写清） | **否** |
| slowed + reverb | slowed reverb | 芯片：SoundTouch + 短混响；无该效果则 Use case 链到 S2 之后 | **否** |
| 立体声变单声道 | stereo to mono | Export / 声道芯片 | **否** |
| 两段粘成一段（已在时间线） | 无独立搜法时 | Paste 到 playhead | **否**（多文件列表见 §2 拼接页） |

S1 未做的命令（LUFS、降噪、变速）：芯片可以先灰，或 FAQ 写「本页效果菜单后续提供」——**不要**为这些词提前拆 URL。

---

## 2. 单点 slug：只满足、且主控件真的不同

下表满足 §3.3 H.4。`build` = 本站可做、须独立实现；`defer` = 作业成立但排后或未 POC；`drop` = 不做或违法/矩阵。

### 2.1 建议 `build`（浏览器可诚实交付）

| ID | 使用场景（情境→动作→结果） | 草稿 slug | 主控件（与 Hub 差在哪） | 技术要点 | 波次 |
|---|---|---|---|---|---|
| **A1** | 本地视频里只要声音 → 抽出音轨 → 得到 WAV/MP3 | `extract-audio-from-a-video-file` | 输入是 **视频文件**；无波形精剪；主按钮 Extract | Mediabunny / mp4box demux；失败：无音轨、DRM、超体积。Hub 打开视频应失败并 related 到本页 | **P1**（可与 Hub S1 并行 POC，不依赖 EDL） |
| **A2** | 多首曲/多段口播要按顺序合成一张碟 → 排列表 → 一个音频文件 | `join-audio-files-in-order` | **文件队列 + 上下移**；无波形（可选交叉淡化秒数） | 解码拼接；体积=各段之和，须时长帽。对齐 `merge-pdf` 不是 `edit-pdf` | **P1** |
| **A3** | 长会议要按停顿切开 → 设静音阈值 → ZIP 多段 | `split-a-recording-on-silence` | 阈值/最短段时长；结果是 **多文件** | 能量检测；与 Hub「手动 Delete 静音」失败模式不同 | **P2**（Hub S1 引擎可复用解码，UI 不是编辑器） |
| **A4** | 手里有录音要出稿 → 选语言 → TXT/SRT | `transcribe-an-audio-file-to-text` | 结果是 **文稿**；主区是文本不是波形 | 见 STT 专文：文件默认 Workers AI Whisper（须诚实上传）或本地 Whisper；**禁止** YouTube 代抓；语种芯片不拆 URL | **P2** |
| **A5** | 播客金句要发社交 → 选一段音频 → 波形视频 | `make-a-waveform-video-from-audio` | 输出是 **视频**（画布+编码） | Canvas 动画 + WebCodecs/Mediabunny；不是时间线精剪 | **P3** |
| **A6** | 上架前改曲名/封面 → 填标签 → 仍是同一 MP3 | `edit-mp3-title-and-cover-art` | 对象是 **ID3/封面**，不改采样 | 标签读写；与「剪波形」失败模式不同（损坏标签 vs 爆音） | **P3** |
| **A7** | 睡前要雨+风扇+粉噪 → 推子混合 → 循环播放/定时 | `mix-rain-and-fan-for-sleep` | **多路循环发生器**，不是打开用户文件 | 自有短循环素材（许可清晰）或合成噪；YMYL 克制，不做疗效宣称 | **P3**（素材授权是关键路径） |
| **A8** | 一批 WAV 要发给只能播 MP3 的设备 → 队列 → ZIP | `bulk-convert-wav-files-to-mp3` | **批量队列 + ZIP**（同 `bulk-convert-images-to-jpg`） | **只这一对格式**；禁止再拆 mp3↔ogg↔flac 矩阵 | **P3** |

Related 约定：每个单点页 ≥1 条链回 Hub；Hub related 在 S1 先链已上线的 `file-metadata-analyzer` / `file-hash`，单点页上线后再改 related。

### 2.2 `defer`（需求真，本站第一年不排或未过 POC）

| 场景 | 草稿 slug（仅占位） | 为何不进 P1–P3 | 以后若做 |
|---|---|---|---|
| 卡拉 OK：歌里只要伴奏 | `remove-vocals-from-a-song` | 分轨模型体积/授权；06 W2 | 一页一按钮；禁止再拆「只要鼓/只要贝斯」 |
| 麦克风实时变声进游戏 | （原生/驱动） | 网页延迟与路由；11 明确不做 | 不立项网页页 |
| 用自己的声音读稿 | TTS/克隆 | 11 L2；法务同意流 | 另一作业，不并进 Hub |
| 本地视频转写 | STT 专文 S4 | FFmpeg 体积叠加 | 作为 A4 芯片「先抽音」，或等 A1+A4 串联 How |
| 吉他校音 / 节拍器 | `tune-a-guitar-with-the-microphone` | 真需求，但不是编辑器宇宙的下一跳 | 可另开小工具，不挡声音主链 |
| 人声分离后再进 Hub 精剪 | — | 依赖 defer 模型 | 单点出干声 → 下载 → Hub 打开 |

### 2.3 `drop` / 禁止成页

| 想法 | 原因 |
|---|---|
| `/sound-editor`、`/mp3-cutter`、`/audio-trim`、`/wav-to-mp3`、`/voice-recorder` | 与 Hub 同主控件；11 已禁 |
| `/mp3-to-wav`、`/ogg-to-mp3`、`/flac-to-mp3`… 格式对 | Aconvert 红线；Hub Export + A8 一对批量已经够 |
| `/arabic-speech-to-text` 等语种 URL | STT 专文：语种芯片 |
| YouTube/播客 URL 代抓转 MP3 或转写 | 平台 ToS；STT S3 不做 |
| 未授权明星仿声、Cover、克隆他人 | 05 敏感；06 L4 |
| 医疗：鼾症诊断、哭声疾病 | YMYL；最多「记录」，不做诊断 |
| 8D / 夜核 / 铃声 **各一张独立波形页** | 芯片级预设，拆页即 doorway |

---

## 3. 规划（产能：周 1–2 个满 IG 工具）

依赖：单点页 **不** 复制 Hub 波形；能复用的只有解码/编码/HUD/vendor。

```
时间 →
P0  Hub S1（11 阶段 A→D）          ████████
    A1 抽音 POC（demux）可并行      ████
P1  A1 抽音页 + A2 拼接页           ████████
P2  Hub S2（降噪/LUFS/变速）        ████████
    然后 A3 按静音切片 或 A4 转写   ████
P3  A5 波形视频 / A6 标签 / A8 批量  按 0b 选 1
    A7 睡眠声景（授权就绪才排）
```

| 顺序 | 做什么 | 完成标准 | 下一跳 |
|---|---|---|---|
| **P0** | Hub S1 | 11 §4.4 浏览器清单；十语；`verify:tool` | 用户说「实现」才开工 |
| **P1** | A1 + A2（可两个会话各一 slug，**串行**过 coverage） | 各页只有一种主输入；抽音不出现波形精剪；拼接是列表不是 DAW | related 互链 Hub |
| **P2** | Hub S2，再 **二选一**：A3 或 A4 | S2 无 Preview 的效果不上菜单；A4 隐私标签诚实 | 未选中的那个下一轮 |
| **P3** | A5 / A6 / A8 按 0b 缺口排序；A7 仅当循环素材许可已入库 | 仍禁止格式矩阵 | 停。W2+ 模型页另口令 |

**并行规则**：只允许 **POC** 并行（A1 demux 不挡 Hub EDL）。页面 / i18n **必须串行**（coverage Skill：slug A 的 phase=4 绿之前不得开始 slug B 的 `*Page.ts`）。

**P1 两个 slug 的 Plan todos 形态**（以后真立项时）：每个 slug 各自 `brief-0b → i18n-master → cover-step2 → i18n-locales → cover-step4 → ship`，禁止一条 todo「实现全部音频工具」。

---

## 4. 与 11 / 旧清单的冲突裁决

| 说法 | 听谁 |
|---|---|
| 11「永不拆 mp3-cutter / recorder / wav-mp3」 | **仍成立**（Hub 芯片） |
| 媒体试点「抽音宜作视频转码页内模式」 | 本站 **尚无** 视频转码页；声音域把抽音做成 **A1 单点页**。若以后有视频转码 Hub，0b 须防 intent 撞车，只留一个主打 URL |
| 06「格式转换 + 抽音 + 铃声都进编辑器 W1」 | 铃声=Hub 芯片；整段转格式=Hub Export；**抽音对象是视频** → A1；**多文件拼接** → A2 |
| 02「v1 不 demux 视频」 | 成立：Hub 拒绝视频；引导 A1 |
| 「细化需求 = 每个搜法一张页」 | **否**；细化优先芯片，控件不同才 slug |

---

## 5. 开始条件

- **Hub**：用户说「按方案执行 / 立项」→ 只开 `work-tasks/{hub-slug}/`（11 阶段 A）。  
- **某一单点页**：用户点名 slug 或「立项 A1/A2/…」→ 单独复制 `_template`。  
- 本页 **不** 因写规划而建多个 work-tasks。

0b 时若 SERP 显示某草稿长尾已被精确页占满，改场景句，**不**因此改回品类头词，也 **不** 用近义再拆一张。
