Date: 2026-09-10 15:20
Summary: Among calc, text, image, docs, video, and audio, demand for sound is large and growing, but the capturable gap for a free web-tools site is the middle layer (local edit / fix / understand), not ElevenLabs-scale generation.
Visibility: people

[question]
考虑单独做一个子域名的频道，个人没有调研，只是认为：文字太激烈，视频太重，声音在中间刚好。分析是否正确

（第二轮澄清）我是指做声音相关的需求，计算，文字，图片，文档，视频，声音这几个大领域，是否声音还存在巨大的空间

[try to solve]
## Context

Round 1 was read as “start a podcast on a subdomain.” Round 2 clarified the real question: among six product continents (calculation, text, image, documents, video, audio), is audio still a huge remaining space, and is “text too fought / video too heavy / audio just right” a valid domain bet.

This site’s live catalog (2026-09-10) has 214 tools: developer 67, calculator 66, image 40, pdf 37, design 4. **Shipped audio slugs: zero.** Direction A still lists audio as “later” and video transcode as deferred. The sound-editor folder (`docs/sound-editor/`) already mapped a demand universe and a W0–W6 roadmap; it is research, not a shipped product.

## Process

- Re-read `docs/sound-editor/05` (jobs) and `06` (D/T/C layers).
- Count `src/site/tool-catalog.json` by category.
- Compare direction A maturity (A.1 text ✅✅✅, A.2 image ✅✅✅, A.3 audio ✅✅, A.4 video ⚠️, A.5 PDF ✅✅✅, A.7 calc ✅✅✅).
- Cross-check 2025–2026 market snapshots: AI audio editing reports (~$2.0B 2025 → ~$2.6B 2026, ~30% CAGR in vendor reports); ElevenLabs ~$11B valuation / $500M+ ARR; Suno ~$5.4B / ~$300M ARR. Treat vendor CAGRs as order-of-magnitude, not precision.

## Root cause / analysis

### 1. “空间”必须拆成三层，否则会同时说太大和太小

| 层 | 声音是否巨大 | 含义 |
| --- | --- | --- |
| A. 人类需求宇宙 | **是** | 采集、编辑、身份、生成、理解、实时、发布；05 已铺开，创作者只是其中一块 |
| B. 行业里正在涨的钱 | **是，但已有主** | TTS/克隆/语音代理/文生乐：ElevenLabs、Suno、Descript、Adobe Podcast |
| C. 免费网页工具站还能诚实吃下的作业 | **相对另外五域最大，绝对值不是蓝海帝国** | 网页层仍停在 cut/convert；完整「修好/看懂/本地编」没有 iLovePDF 级统治者 |

Round 1’s “middle” feeling maps onto **layer C × engineering weight**, not onto “start a media channel.”

### 2. 六域对比：剩余空白不看需求总量，看「供给密度 ÷ 网页可做性」

| 域 | 需求 | 网页/工具站供给 | 浏览器做成真工具 | 对本类产品的剩余 |
| --- | --- | --- | --- | --- |
| 计算 | 稳、可搜 | 极密（Omni 数千页） | 最容易 | 只剩长尾公式；薄、易换皮 |
| 文字 | 稳 | 密（计数/大小写/diff）；长写作被聊天模型吃掉 | 最容易 | 头词尽、增量薄 |
| 图片 | 极大 | 极密（TinyPNG、iLoveIMG、remove.bg、Photopea） | 成熟 | 头词死，只剩场景长尾 |
| 文档 | 极大 | 极密（iLovePDF、Smallpdf、Adobe） | 成熟 | 头词死 |
| 视频 | 极大且仍涨 | App 侧 CapCut 锁创作者；网页转码站多但体验差 | 重（FFmpeg.wasm、内存、时间线） | 需求大，网页完整编辑器不划算 |
| 声音 | 大且被短视频/会议/TTS 推着涨 | 网页薄（mp3cut、AudioMass、格式转换）；厚的在桌面 Audacity 与云 SaaS | 比视频轻一档、比图文重一档 | **夹层最大** |

「文字太激烈」在这套坐标里应读成：**太容易做 → 铺量站打穿 → SERP 没增量**。  
「视频太重」应读成：**需求不小，但网页做完整作业的工程税过高**。  
「声音刚好」应读成：**需求被相邻域推高，网页免费层还停在 2012 年的裁剪器，门槛刚好挡住换皮站，又没重到 FFmpeg 转码站。**

这不是「声音比视频更刚需」，短视频默认媒介仍是视频。这是「同样做免费网页工具，声音的能力/重量比最好」。

### 3. 巨大需求里，很大一块你吃不到

05 的宇宙成立，并不等于 C 层同样大：

- **生成与身份**：TTS、克隆、Cover、文生乐——钱最大，ElevenLabs / Suno 量级，法务与算力是门闸（06 把未授权仿声标 L4）。
- **实时**：游戏变声、直播路由——原生/驱动问题，不是第一年网页。
- **识曲**：指纹库成本是合作题。
- **完整 DAW**：Ableton/BandLab 方向，06 明确封顶。

把「声音还有巨大空间」理解成「再做一个 ElevenLabs」= 方向错。把「网页工具站还没有声音的 iLovePDF」理解成「本地编辑 + 修好 + 看懂」= 方向对。

### 4. 对本站：空，但是空的是夹层，不是整座大陆

- Catalog 无 audio category；清单里 `audio-recorder` / `audio-trim` / `audio-wav-mp3` 仍是未开始或待 POC，且 01/02 已否决拆成三薄页。
- 可验证差距仍是：无账号、本地、立体声、LUFS、预览再提交、十语——相对 AudioMass / mp3cut，不是相对 ElevenLabs。
- 浏览器天花板仍在：整文件 PCM、一小时播客内存墙。所以 C 层也不是无限铺 slug。

## Solution

**判断：需求宇宙大；网页工具剩余空间相对另外五域最大；「巨大到可以当第二主业去抢生成式语音」不成立。**

若用声音当下一大陆：

1. 占 C 层工作台（完整单轨编辑 → 降噪/响度/V0 变声/转写进时间线），不要占 B 层模型公司。
2. 不要用格式对矩阵去模仿图片/PDF 的铺量史（那是 Aconvert 红线）。
3. 不要因为视频需求更大就先做视频：A.4 已标暂缓；声音是更轻的媒体核，许多视频作业的音轨子集可先在声音里做。
4. 子域名仍不是这个问题的解。域的选择是产品线，不是主机名。

## Notes / boundaries

- 没有对本站用户做声音搜索量抽样；「相对空白」来自 catalog 结构、方向 A 成熟度、以及网页竞品形态（裁剪器 vs SaaS）。
- 市场报告金额不可加总、不可当 TAM 精度。
- 05/06 已有作业清单与波次；本篇只把六域相对位置说清，不立项、不改 catalog。

[actions]
- Clarified domain-space vs podcast-channel; no code changes
