# Sound editor — 调研与产品设计

**日期**：2026-09-10（第十二轮：AudioMass MIT 整树 + Hub 执行合同）  
**状态**：调研齐；内核 = AudioMass 整树 copy；**执行合同**见 [11](./11-executable-plan.md)；**尚未**建 `work-tasks/`、尚未写页面  
**镜头**：01–04 本站网页编辑器（第十二轮起内核 = AudioMass MIT 整树）；**05** 需求全景；**06** 分层节奏；**07** 训练成本；**08** 端侧仿唱；**09** BYOM 竞品；**10** 模型站空间；**11** Hub 落地合同；**12** Hub + 单点 slug 规划。

本夹是 audio 方向专题夹，不是 catalog slug，也不是 `work-tasks/{slug}/`。立项须用户明确「创建 / 实现」后再复制 `_template`。

## 一句话结论

**不要做「只剪一段」的薄裁剪器，也不要嵌 Wavacity / iframe audiomass.co。**  
本站编辑器 **整树复制** [AudioMass](https://github.com/pkalogiros/audiomass)（MIT 原文 + 第三方 NOTICE），包进 `opts` 工具页：十语、金标 HUD、文件帽、同源 vendor。  
**功能细化做 SEO** = 把每条能力映射到搜法，**吸收进同一 URL**（How / FAQ / Use cases）；禁止一功能一薄页。  
**上线分期（11）**：S1 先过真编辑器质量杠（剪贴/撤销/过零/预览/导出/HUD）；S2 同 URL 再加包装层补齐（LUFS 可见性、人声降噪提示、变速 HUD）。11 里「禁止 fork AudioMass」已被 **01 第十二轮推翻**（MIT 允许整树 copy；禁止的是外站 iframe 与 Wavacity）。  
不宣称打败桌面 Audacity 的 VST/插件生态。从零写 EDL **不是** v1。

| 项 | 决定 |
|---|---|
| 产品档 | **完整波形编辑器**（v1 含上游多轨）→ 上市后可选 EDL 换内存 |
| 草稿 slug | `edit-audio-on-waveform`（头词 *sound editor* 进 title/FAQ，**不**当 URL） |
| 旧清单名 | `audio-trim` / 单独 `audio-recorder` / `audio-wav-mp3` **吸收进本页**，不拆三薄页 |
| 引擎 | `public/vendor/audiomass/` 整树 copy；保留 MIT 版权与 `THIRD_PARTY_NOTICES` |
| 禁止 | Wavacity（GPL-2）、Rubber Band GPLv2、外站 iframe、FFmpeg 首屏、按按钮拆 doorway URL |

| 文档 | 内容 |
|---|---|
| [00-request.md](./00-request.md) | 用户原话 |
| [01-js-implementation-research.md](./01-js-implementation-research.md) | 波形编辑器调研（**第十二轮：MIT 整树 copy + 包装约束**） |
| [02-product-design.md](./02-product-design.md) | 波形编辑器产品（**含功能→SEO 吸收表**） |
| [03-voice-conversion-from-speaker-samples.md](./03-voice-conversion-from-speaker-samples.md) | 根据某人一批录音做音色迁移（实现栈） |
| [04-three-kinds-of-voice-change.md](./04-three-kinds-of-voice-change.md) | **三种变声详解**（V0 DSP / V1 迁移 / V2 RVC） |
| [05-sound-universe-demand-map.md](./05-sound-universe-demand-map.md) | **需求全景**（不限本站、不限 JS；editor 为入口的声音应用） |
| [06-demand-difficulty-cost-roadmap.md](./06-demand-difficulty-cost-roadmap.md) | **分层与节奏**（需求 × 难度 × 成本；W0–W6） |
| [07-voice-clone-training-cost.md](./07-voice-clone-training-cost.md) | **训练成本**（说话仿声 vs 歌曲仿声；GPU 几乎不是大头） |
| [08-on-device-celebrity-singing.md](./08-on-device-celebrity-singing.md) | **手机端离线仿唱**（SVC 流水线；不依赖云端推理） |
| [09-byom-singing-app-competitors.md](./09-byom-singing-app-competitors.md) | **BYOM 翻唱 App 竞品**（导模型 / 桌面 RVC / 云 Cover / 非赛道） |
| [10-voice-model-site-space.md](./10-voice-model-site-space.md) | **模型网站还有没有空间**（Weights 关站后：真空 ≠ 可做货架） |
| [11-executable-plan.md](./11-executable-plan.md) | **Hub 审查 + 可执行合同**（S1/S2 会话、门禁、停做；引擎句以 01 为准） |
| [12-slug-hub-and-scene.md](./12-slug-hub-and-scene.md) | **大编辑器都满足 + 单点页只满足**（芯片 vs 独立 slug、P0–P3） |

## 阅读顺序

1. **01** — 为什么裁剪器不够；为何可整树 copy AudioMass；vendor/许可/隔离。  
2. **02** — 这一页做成什么样；**22 条能力 → 搜法 → 落点**（不拆 URL）。  
3. **03** — 「用一批某人的声音去变声」实现栈。  
4. **04** — 三种变声分别改哪一层、何时用。  
5. **05** — 只从用户需求发散：编辑器只是入口，声音应用还能长出什么。  
6. **06** — 需求 × 难度 × 成本分层，以及 W0–W6 开发节奏。  
7. **07** — 说话训练仿声、歌曲仿声各要多少数据/GPU/人时。  
8. **08** — 手机上如何离线把唱歌换成目标音色（原生推理，不是网页 V1）。  
9. **09** — 用户自备模型的翻唱 App 有哪些竞品、空隙在哪。  
10. **10** — 网站模型站：需求真空不等于名人货架可做。  
11. **11** — Hub 怎么落地（S1/S2 会话）。用户点名「按方案执行」后从 11 阶段 A 开工。引擎以 01 第十二轮为准。  
12. **12** — 哪些需求进 Hub 芯片、哪些才独立 slug；P0–P3 规划。单点页须另口令立项。  
13. 立项编辑器：`work-tasks/edit-audio-on-waveform/`（或 0b 后改名）。音色迁移是 **另一作业**，未点名不建页。05–10 **不是** 立项范围。

## 与既有文档的关系

| 文档 | 关系 |
|---|---|
| [工具方向 A.3](../2026-07-28-tool-direction.md) | 音频 ✅✅；本夹从「可裁剪」升级为「完整编辑器」 |
| [音视频客户端续研](../2026-08-09-browser-av-client-solutions.md) | L0 仍适用；本页 WASM/编码器来自 AudioMass vendor（RNNoise / lame / FLAC），点击后加载 |
| [媒体试点选项](../2026-08-09-browser-media-ebook-pilot-options.md) | 套餐 B 的三音频薄页 **合并为本编辑器一页** |
| [STT 方案](../2026-09-08-js-speech-to-text-solutions.md) | 听写仍不是本页 |

## 明确不做（仅约束 01–04 的本站编辑器页）

05 的枚举 **不受** 下表约束。下表只约束「若做 onlinefreetools 波形编辑器页」：

- 嵌 Wavacity；iframe 到 audiomass.co（copy 必须进本域 `public/vendor/`）  
- 按淡化/归一化/EQ/录音各开一条薄 URL（doorway）  
- Pro Tools / BandLab 级无限多轨 DAW、VST、MIDI 乐器  
- Aconvert 格式对矩阵 URL、账号墙、水印、云盘  
- 未点名立项就建 `work-tasks/` 或改 `src/`
