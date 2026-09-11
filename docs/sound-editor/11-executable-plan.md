# 11 — 本站声音方案审查与可执行计划

**日期**：2026-09-10（合并后对齐 01 第十二轮）  
**状态**：执行合同；**尚未**建 `work-tasks/`、**尚未**改 `src/`  
**触发**：用户说「按方案执行 / 立项 / 创建」之后，从 **阶段 A** 起按会话串行做。未点名不得开工。  
**权威**：
- **引擎与能力清单**听 [01](./01-js-implementation-research.md) / [02](./02-product-design.md)（第十二轮：AudioMass MIT **整树 vendor**；v1 **不要**从零写 EDL，也 **不要**关掉上游已有的多轨/降噪/LUFS）。
- **本页**管会话怎么拆、何时开工、SEO 主路径先写哪几句。S2 是包装层补齐（读数/HUD/How 拆词），**不是**「S1 先做成裁剪器、以后再装 DSP」。
- 05–10 仍是宇宙文档，不是本站排期。单点作业与搜法全表见 [12](./12-slug-hub-and-scene.md)，须另口令。

---

## 0. 审查结论（先改排序，不改方向）

### 0.1 保留（方向对）

| 决定 | 来源 | 为何保留 |
|---|---|---|
| 一页完整波形编辑器，不是薄裁剪器 | 01 / 02 | 拆 `audio-trim`+`recorder`+`wav-mp3` 违反一带多场景；对 *sound editor* 办不成编辑 |
| 吸收三件旧清单作业进同一 URL | 02 | cutter / recorder / 导出 MP3 都是本页命令 |
| **vendor AudioMass 整树**；禁止 Wavacity、iframe audiomass.co、Rubber Band GPL、首屏 FFmpeg | 01 第十二轮 | MIT 允许 copy；GPL 与外站 iframe 仍禁；十语/HUD/帽由包装层补 |
| 不上传、立体声、无账号、无水印、无「免费 5 分钟」 | 01 Q1–Q2 | 对标缝在这里，不在功能数量 |
| 本站只吃 **C 层**：本地编 / 修好 / 看懂的网页作业 | 六域分析 | 不抢 ElevenLabs / Suno |
| 06：若只做本站一页 → 只做 W0 + 浏览器能诚实交付的 DSP | 06 §8 | 不要假装 W3 克隆已排进该 slug；DSP 来自上游菜单，不另训模型 |

### 0.2 修正（合并前旧合同会写错引擎）

| 原写法（11 初稿 / 更早 02） | 问题 | 执行修正 |
|---|---|---|
| 「自研壳 + EDL；禁止 fork AudioMass」 | 01 第十二轮已推翻：MIT 整树 copy；从零 EDL **不是** v1 | 内核 = `public/vendor/audiomass/`；禁止的是 **外站 iframe** 与 **Wavacity** |
| 「S1 不要 RNNoise / LUFS / 变速；S3 才两轨」 | copy 已带这些；关掉等于把可索引场景扔掉（01 §10） | **不要剥菜单。** S1 上游命令可点；S2 只补包装可见性与 How/FAQ |
| 旧 02「从零实现则一次带齐全部效果」 | 那是自研工期；copy 后能力已在树上 | 工期改花在宿主/隔离/HUD/十语/帽；效果不要重写一遍 |
| 06 W1 种子库 + ≥8 个 V0 变声滤镜 | 授权与编目不是工具页 | **本站第一年不做内容库、不做滤镜包产品**。上游 Pitch/Reverse 当页内命令即可 |
| 06 W2+（分离 / STT / TTS / 克隆 / 实时 / Cover） | 钱最大的一层已有主 | **本站 Hub 路线图停在包装完成**；03–10 继续当调研。单点页见 12 |
| 「子域名频道」 | 频道在平台上 | **不做** `podcast.` / `audio.` 子域。工具走 apex `/tools/{slug}` |
| 草稿 slug 当上线文案 | 02 已写「0b 未做不得当 H1」 | 阶段 A 跑 0b；slug 可改，夹名跟着改 |

### 0.3 仍开放、阶段 A/B 必须钉死

1. H1：场景句（草稿 *Edit audio on a waveform…*）vs 当地头词强度 — **0b 定，禁止用 *sound editor* 当 URL**。  
2. 隔离：闭包是否够挡住全局 `PKAE`，还是必须 **同源 iframe** 嵌 vendor（仍是本域 copy，不是外站）。  
3. 样例：合成噪底 vs 许可短语音。S1 可用合成；真实语音须许可进仓库。  
4. 40 MB / 20 分钟帽：POC 用真机再调，只可放宽不可默默取消（copy 后内存更紧，见 01 §8）。  
5. 录音：S1 **必须有**（否则 recorder 意图落空）。  
6. FLAC 是否进 v1 主文案（能力有；弱需求可只留对话框）。

---

## 1. 本站要做成什么（一句话）

在 `onlinefreetools.org/tools/{slug}` **一页**上：打开或录一段，用 **AudioMass 内核** 在波形上剪贴/淡化/撤销，导出 WAV 或 MP3（FLAC 可在对话框）。文件不出标签页。  
搜 *mp3 cutter* / *voice recorder* / *wav to mp3* 的人进同一页就能办完，**不**再开三个 slug。

对外不写「最好」。对内 S1 过 01 Q1–Q5 + Q9–Q11（含同源 vendor、HUD、十语）；S2 过 Q6–Q8 与移动保底 Q12（包装层露出读数 / 降噪边界 / 变速与变调拆开）。

---

## 2. 明确不做（执行时看到就停）

**本 slug 永不做**

- 拆 `/sound-editor`、`/mp3-cutter`、`/audio-trim`、`/wav-to-mp3`、`/voice-recorder`  
- 嵌 Wavacity；**iframe 到 audiomass.co**（copy 必须进本域 `public/vendor/`）  
- Rubber Band WASM、首屏 FFmpeg  
- 云盘、YouTube 扒流、格式矩阵子 URL  
- VST、5 轨以上、本页做音色克隆 / RVC / TTS 产品 / 人声分离  
- 用户文案写「最好 / Best / 300 formats」；库名 / AudioMass 品牌当卖点（致谢进 References）  
- v1 从零写 EDL、或把上游 WaveSurfer 2.x 换成 v7 当开工条件  

**本站第一年不做（05–10 继续躺着）**

- 声音内容库、睡眠声景 **做进 Hub**（独立声景页见 [12 A7](./12-slug-hub-and-scene.md)，授权未入库不上）  
- **Hub 时间线内** STT/TTS/会议摘要（Descript 式剪字）；独立转写页见 [12 A4](./12-slug-hub-and-scene.md)，须另口令  
- 自己的声音克隆、V1 迁移、授权 Cover  
- 实时变声 App、识曲、子域名频道  
- 与 Hub 同主控件的裁剪器/录音机/转码变体 URL（芯片 absorb；其它作业类型的单点 slug 清单在 12）  

**工程红线（全站已有）**

- `02` 未 `ready`、未过 `coverage:gate --phase=0b` → 不得改 `src/`、不得勾页面模块清单  
- 新工具 `page.style` 必须 `"opts"`  
- vendor 一律 `public/vendor/` 入库；跑 `lint:vendor`  
- 交付必须 `build:site`，禁止只 `merge:tools`  
- 十语按 brief 重写，禁止英模灌语  

---

## 3. 两次上线的验收包（同一 slug）

能力来自 **上游 copy**，分期只切 **包装与文案**，不切菜单。

### S1 — 工作台上线（vendor 进本站 chrome）

用户能完成：**打开或录一段，剪掉废的，导出干净 WAV/MP3。**  
上游 Effects / MultiTrack / 降噪 **保持可点**，不要为了「分期谦虚」藏掉。How / Example 主路径仍是打开 → 剪 → 导出。

| 块 | 必须有 |
|---|---|
| 输入 | 一种主面：本地文件 dropzone；Record 是同一工作区命令，不抢第二套上传框；无云盘 |
| 引擎 | `public/vendor/audiomass/` 整树；LICENSE + `THIRD_PARTY_NOTICES`；`lint:vendor` 绿 |
| 宿主 | `Page.ts` 初始化 PKAE / 等价 `init`；`lint:tool-isolation` 绿（闭包或同源 iframe） |
| 波形 | 上游波形：缩放、滚动、拖选；默认过零吸附（Rules 写清） |
| 编辑 | 上游 Trim / Delete / Silence / Cut/Copy/Paste / Fade / 增益 / 反向 — **不要重写一套** |
| 传输 | 播/暂停、空格、选区循环、录音写入 playhead（手势 + 权限失败卡） |
| 导出 | 上游 WAV / MP3（lame **点击后**加载）；无水印；对话框里能看见位深/码率 |
| 效果预览 | 包装层把 Preview 做在效果面板里可见（Q5）；无 Preview 的命令 **不要写进 How 当卖点** |
| HUD | 金标对照 `/tools/batch-convert-web-pages-to-jpg`：Decode / 效果 / Encode；套住上游百分比 modal；禁止静默卡死 |
| 样例 | `loadSample()` 进页出可播放波形；**不**自动 Apply 任何 WASM 效果 |
| 帽 | 桌面 40 MB / 20 分钟；窄屏 20 MB / 8 分钟；超限 **拒绝解码** |
| 快捷键 | 保留上游 Shift+ 与 Ctrl/Cmd+；How 用 **Ctrl/Cmd** |
| 页下 | How 用按钮原文；Why choose ≥4 条可点；Rules；Example=S1 主路径；FAQ≥3；related 已上线工具 |
| 平台 | 桌面 Chrome + 桌面 Safari POC 通过再标 S1 完成 |
| 移动 | 竖屏保底：打开、选区、播放、Trim/Delete、Fade、Export WAV（Q12 可在 S1 做完，否则进 S2） |
| 文案 | H1/title **不写 AudioMass**；不复制 audiomass.co about |

**S1 砍掉也不许退回裁剪器的**：剪贴、撤销、过零、无水印立体声导出、HUD、同源 vendor。  
**S1 不要做的**：从零 EDL、换 WaveSurfer v7、剥掉上游多轨/降噪/LUFS 菜单。  
**S1 How 可以暂不写满的**：LUFS 目标表、RNNoise 人声边界长文、变速 vs 变调对照 —— 留给 S2，**菜单仍在**。

### S2 — 包装补齐（同一 URL，不是另装引擎）

用户能完成：**难听的人声能修好；变速与变调在菜单和 FAQ 里是两个命令；响度数字人能看见。**

| 项 | 约束 |
|---|---|
| LUFS + 真峰值 | 用上游 `lufs.js`；选区/播放时 **读数可见**（Q6）。不要为计量拉 FFmpeg，也不另找 `lufs-web` 换引擎 |
| 人声降噪 | 上游 RNNoise；首次 Apply 加载 WASM + HUD；FAQ/Rules：对人声、约 48 kHz 帧、鼓会残响 |
| 变速 / 变调 | 上游 Speed / Pitch / Playback rate；**两个菜单项 + FAQ 拆开**；禁止 rubberband-wasm |
| Example | 可改为：样例 → 对人声尾降噪试听 → Export（仍不自动 Apply） |
| Q12 | 若 S1 竖屏三条路径未绿，本阶段补 |

无 Preview 的效果不得吹进 SEO 正文。  
**不是 S2 的工作**：npm 再装一遍 SoundTouch / Jitsi RNNoise 当第二套 DSP；发明两轨。

### S3 — 上市后优化（须另口令）

EDL（源 PCM 只读 + 片段列表 + 撤销只存 graph）与换波形库：内存/GC 打爆后再做，产品表面不变（01 §8）。  
不要把「两轨」排进 S3 —— copy 已含多轨；H1 仍不改成 DAW。

---

## 4. 会话拆分（后面按这个执行）

对齐 `tool-coverage-pass` + `tool-token-efficiency`。 **一阶段一会话**；下一会话只读交接物，不把 01–10 全文再读一遍。

| 阶段 | 用户口令 | 做什么 | 交接物（下一会话只读这些） | 停做 |
|---|---|---|---|---|
| **A · Brief** | 「按方案执行」或「立项」 | 复制 `work-tasks/_template/` → `work-tasks/{slug}/`；写 00–03；0b 覆盖表；0i 意图审查；`coverage:gate --phase=0b` | `02`=`ready`；`03`=`briefs-ready`；覆盖表 + 意图总判 | 不改 `src/`；不 POC 进 catalog |
| **B1 · POC+S1 宿主** | 「实现」且 A 已绿 | catalog 分片 `page.style: "opts"`；vendor 整树入库；`*Page.ts` 宿主打开样例、Trim、Undo、导出 WAV；Chrome/Safari 桌面 POC | 本域 vendor 能剪、能撤销、能出 WAV | 不写他语；不重写波形引擎 |
| **B2 · S1 录导出+母版** | B1 可用 | 录音、MP3 懒加载、快捷键 How、过零 Rules、HUD、隔离绿、en i18n、icon、`coverage:gate --phase=2`、`lint:tool-page`、`lint:vendor` | gate 2 绿；page wiring 绿 | 不开十语；不把 S2 长 FAQ 一次写完 |
| **C · 他语** | B2 绿 | 逐语或 ≤3 语一批按 brief 重写；`coverage:gate --phase=4` | `03` 行 `2b` 含 en,zh,es,ja | 不开始 S2 包装文案大改 |
| **D · S1 Ship** | C 绿 | `build:site`；`verify:tool -- --slug=`；README 中英清单；浏览器走通：打开/录/剪/导出 | 首页 latest 有卡片；`/tools/{slug}` 与 `/zh/tools/{slug}` 可验收 | 不顺手做 S2 |
| **E · S2** | 用户说「做降噪文案/LUFS/S2」 | 同一 slug：露出 LUFS、RNNoise HUD+FAQ、变速变调拆词；必要时 `tool:touch` 再跑 phase=2/4 | S2 验收表全绿 | 不拆 URL；不上分离/TTS；不换 EDL |

未说「实现」时，A 结束必须停。未说 S2 时，D 结束必须停。

### 4.1 阶段 A 必读（只这些）

```
docs/sound-editor/11-executable-plan.md   # 本页
docs/sound-editor/02-product-design.md    # chrome / 作业 / §12 吸收表
docs/sound-editor/01-js-implementation-research.md  §4 包装约束、§5 Q杠、§9 栈
work-tasks/_template/*
.cursor/skills/tool-coverage-pass/SKILL.md
.cursor/rules/work-tasks-tool-brief.mdc
```

不要整本读 05–10。related 候选已上线：`file-metadata-analyzer`、`file-hash`（第三槽 0b 时从 catalog 再挑一个真相邻，禁止指向不存在的 `audio-trim`）。

### 4.2 阶段 B 必读

```
work-tasks/{slug}/02-tool-info.md
work-tasks/{slug}/03-locale-briefs.md
.cursor/rules/tool-creation.mdc
.cursor/skills/converter-input-ui/SKILL.md   # 无云盘、设置不进传输行、金标 HUD；本页不是 Convert→Download，主按钮是 Export
.cursor/rules/cloudflare-workflow.mdc        # vendor 入库
docs/sound-editor/01-js-implementation-research.md  §4、§8–§10
```

### 4.3 命令（复制即用）

Slug 以 A 钉死的为准；下例用草稿 `edit-audio-on-waveform`。

```bash
# A
npm run coverage:gate -- --slug=edit-audio-on-waveform --phase=0b

# B2 后
npm run coverage:gate -- --slug=edit-audio-on-waveform --phase=2
npm run lint:tool-page -- --slug=edit-audio-on-waveform
npm run lint:vendor

# C 后
npm run coverage:gate -- --slug=edit-audio-on-waveform --phase=4

# D / E
npm run tool:touch -- --slug=edit-audio-on-waveform
npm run verify:tool -- --slug=edit-audio-on-waveform
```

`verify:tool` 须含全量 `build:site`。本地用 `start:dev` 带 `Accept: text/html` 打开 `/`、`/zh/`、`/tools/{slug}`。

### 4.4 浏览器验收（S1，D 阶段必做）

1. 进页：自动出波形，可播放，未拉 RNNoise wasm（直到点降噪）。  
2. 拖入 MP3：HUD Decode → 波形；选区 Delete → Undo 恢复。  
3. Fade in → 可听再 Apply。  
4. Record 一句插入时间线（拒绝权限时有卡片）。  
5. Export WAV 下载；再 Export MP3（首次加载 lame，HUD Encode）。  
6. 超限文件：拒绝解码，人话说明。  
7. 桌面 Safari：播放前 resume，导出成功。  
8. 窄视口：仍能选、剪、导出 WAV。  
9. `/zh/tools/{slug}`：按钮与 How 为中文，不是英文回退。  
10. 多轨入口仍在（不要被 chrome 剥掉）；H1 仍不是 DAW。

S2 另加：LUFS 读数变化可见；降噪 Preview 与 Apply + 人声边界 FAQ；变速后时长变、音高大致不变（与变调拆开）。

---

## 5. 技术栈冻结（B 不得另选，除非许可冲突）

对齐 01 §9。立项后不要再换成「自研 EDL + wavesurfer v7」。

| 层 | 用 | 不用 |
|---|---|---|
| 编辑器内核 | `public/vendor/audiomass/` MIT 整树 | 从零 EDL、嵌 Wavacity、iframe 官方站 |
| 波形 | 上游自带 WaveSurfer 2.x | v1 不强换 v7 |
| 解码播放 | 上游 `decodeAudioData` / Web Audio | 首屏 FFmpeg |
| 实时 FX / 离线 | 上游 `OfflineAudioContext` + FX 银行 | 主线程新写一套滤镜 |
| 计量 | 上游 `lufs.js`；包装层露出读数 | 为计量拉 FFmpeg；另装第二套 LUFS 库 |
| MP3 / FLAC | 上游 lamejs / libFLAC，**点导出再加载** | 老 lame 首屏巨包、CDN |
| 人声降噪 | 上游 RNNoise wasm | 上传云 AI；npm 再塞一套当「S2 引擎」 |
| 变速变调 | 上游 Speed / Pitch / Playback rate | `rubberband-wasm` GPLv2 |
| HUD | `.bcw-hud` 金标套上游进度 | 一行 aria-live 冒充进度 |
| 长文件无波形 trim | 不进 v1 | 首屏 FFmpeg |
| 音色克隆 V1/V2 | **不是本页**（见 03/04） | 把 pitch 写成「克隆」 |

LGPL（lame 等）：动态加载、vendor 保留许可文件。第三方 **不得**写成 MIT。

---

## 6. SEO / 文案纪律（A 就必须写进 02）

- slug = 场景任务句（kebab）；头词 *sound editor* / *online audio editor* → title/FAQ/Why choose，**不当 URL**。  
- H1 禁止 EQ 频段名、禁止「最好」、禁止 AudioMass 品牌。  
- How 步骤 = 按钮原文（Open、Delete、Export、Record）；与上游菜单 **用同一套词**。  
- 次词落点：*mp3 cutter*、*trim audio*、*voice recorder*、*wav to mp3*。修好类（*noise reduction*、LUFS、变速）S1 菜单可点；**S1 FAQ 不要写「随后才提供」**（那是旧合同谎言）。S1 可短答「本页效果菜单已有；详细边界见 Rules」；长对照表放 S2。  
- S1 有意不满足：多轨 DAW 级调音台、云 AI 降噪、300 格式 — FAQ 各一句，不改 H1。  
- `localProcessing: true`；隐私句：文件留在设备 **且** 不上服务器；同源 `/vendor/`。  
- Information Gain：过零、体积帽、格式随 UA、本页 vs 上传裁剪站 vs 免费 TwistedWave 单声道墙 vs **官方 AudioMass**（我们：十语、HUD、可索引场景、本站 chrome）。S2 再加 LUFS 表、RNNoise 人声边界、变速/变调拆词。

---

## 7. 模块落点（B 起）

| 路径 | 角色 |
|---|---|
| `work-tasks/{slug}/` | 立项真相源 |
| `src/site/tool-catalog.d/{slug}.json` | catalog；`page.style: "opts"` |
| `src/pages/{camel}Page.ts` | 本站 chrome + 初始化 vendor |
| `public/vendor/audiomass/` | MIT 整树 + 第三方 wasm/js + LICENSE + NOTICE（**入库 Git**） |
| `src/site/i18n/tools/{slug}/{lang}.ts` | 十语（含从上游抽出的按钮弦） |
| `public/icons/tools/{slug}.svg` | ASCII 注释 |
| 禁止手改 | `tool-catalog.json`、合并 i18n、registry 生成物 |

不要新建「第二套」`audio-editor/` EDL 引擎与 vendor 并行。上市后若换 EDL，仍走同一 Page 表面。

---

## 8. 与旧文档的冲突裁决

| 冲突 | 听谁 |
|---|---|
| 本页初稿「禁止 fork AudioMass / 自研 EDL」vs 01 第十二轮 | **01 / 02** |
| 本页初稿「S1 不上 RNNoise、S3 才两轨」vs 01 §5–§10 | **01**：不剥菜单；S2 只补包装 |
| 旧 02「从零实现则一次带齐效果」vs 会话拆分 A–D | **本页**管会话切块；能力仍听 01/02 |
| 06 W1 库 + V0 滤镜包 vs 02 本 slug 范围 | **02 + 本页**：本站不做库与滤镜包 |
| 05 需求宇宙 vs 本站排期 | 05 不排期 |
| Google 政策 vs 任何「为排名铺音频变体页」 | Google 现行文档 |
| 12 单点 slug vs 「本合同不创建第二个音频 slug」 | **12** 可以规划；**开工**须另口令。本合同阶段 A–E 只开 Hub |

---

## 9. 开始条件 / 结束条件

**开始 A**：用户本对话或新对话明确「按方案执行」或「立项 {slug}」。

**S1 完成**：阶段 D 命令全绿 + §4.4 浏览器清单勾完 + README 已写。

**整份声音「本站 Hub 方案」完成**：S1 完成。S2 是包装加厚，须另一次口令。S3 EDL 又另一次。

**本页不完成的事**：不改方向 A 总排期表以外的无关工具；不申请子域名；**不在本合同里创建第二个音频 slug**（单点页走 12 + 另口令）。
