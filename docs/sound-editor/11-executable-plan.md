# 11 — 本站声音方案审查与可执行计划

**日期**：2026-09-10  
**状态**：执行合同；**尚未**建 `work-tasks/`、**尚未**改 `src/`  
**触发**：用户说「按方案执行 / 立项 / 创建」之后，从 **阶段 A** 起按会话串行做。未点名不得开工。  
**权威**：本页管 **本站这一页怎么落地**。与 02「v1 效果必须一次上市齐」冲突时，**以本页分期为准**（仍同一 slug，不拆 URL）。05–10 仍是宇宙文档，不是本站排期。

---

## 0. 审查结论（先改排序，不改方向）

### 0.1 保留（方向对）

| 决定 | 来源 | 为何保留 |
|---|---|---|
| 一页完整波形编辑器，不是薄裁剪器 | 01 / 02 | 拆 `audio-trim`+`recorder`+`wav-mp3` 违反一带多场景；对 *sound editor* 办不成编辑 |
| 吸收三件旧清单作业进同一 URL | 02 | cutter / recorder / 导出 MP3 都是本页命令 |
| 自研壳 + EDL；禁止 Wavacity / AudioMass 整站 / Rubber Band GPL / 首屏 FFmpeg | 01 | 许可、体积、十语与 HUD 不可控 |
| 不上传、立体声、无账号、无水印、无「免费 5 分钟」 | 01 Q1–Q2 | 对标缝在这里，不在功能数量 |
| 本站只吃 **C 层**：本地编 / 修好 / 看懂的网页作业 | 六域分析 | 不抢 ElevenLabs / Suno |
| 06：若只做本站一页 → 只做 W0 + W1 里浏览器能诚实交付的 DSP | 06 §8 | 不要假装 W3 克隆已排进该 slug |

### 0.2 修正（原方案会撑死第一次上线）

| 原写法 | 问题 | 执行修正 |
|---|---|---|
| 02 §6：v1 **必须**一次带齐 LUFS、EQ、压缩、RNNoise、SoundTouch | 单工具周产能是 1–2 个普通页；这是 5–10×。01 §13 自己也说先 POC 再堆效果 | **同一 slug 两次上线**：S1 = 真编辑器（Q1–Q5 + Q9–Q11）；S2 = 计量与重效果（Q6–Q8）。不新开 URL |
| 02 Example 默认故事含「对人声尾做降噪」 | S1 若无 RNNoise，Example 会说谎 | S1 Example = 打开样例 → 删噪尾 / 淡化 → Export。S2 再改 Example 加降噪试听 |
| 06 W1 种子库 + ≥8 个 V0 变声滤镜 | 授权与编目不是工具页；02 本 slug 最多 DSP 变调 | **本站第一年不做内容库、不做滤镜包产品**。S2 的「连带变调」已覆盖身份层的诚实子集 |
| 06 W2+（分离 / STT / TTS / 克隆 / 实时 / Cover） | 钱最大的一层已有主；法务与模型不是本站第一页 | **本站路线图停在 S2；S3=v1.5 两轨须用户再点名**。03–10 继续当调研，不立项 |
| 「子域名频道」 | 频道在平台上；子域名不解决发现，还裂品牌 | **不做** `podcast.` / `audio.` 子域。工具走 apex `/tools/{slug}` |
| 草稿 slug 当上线文案 | 02 已写「0b 未做不得当 H1」 | 阶段 A 跑 0b；slug 可改，夹名跟着改 |

### 0.3 仍开放、阶段 A/B 必须钉死

1. H1：场景句（草稿 *Edit audio on a waveform…*）vs 当地头词强度 — **0b 定，禁止用 *sound editor* 当 URL**。  
2. 波形：wavesurfer v7 能否撑 EDL 多 clip，不能则自绘可见区 Canvas。  
3. 样例：合成噪底 vs 许可短语音。S1 可用合成；真实语音须许可进仓库。  
4. 40 MB / 20 分钟帽：POC 用真机再调，只可放宽不可默默取消。  
5. 录音：S1 **必须有**（否则 recorder 意图落空）。

---

## 1. 本站要做成什么（一句话）

在 `onlinefreetools.org/tools/{slug}` **一页**上：打开或录一段，在波形上剪贴/淡化/撤销，导出 WAV 或 MP3。文件不出标签页。  
搜 *mp3 cutter* / *voice recorder* / *wav to mp3* 的人进同一页就能办完，**不**再开三个 slug。

对外不写「最好」。对内 S1 过 Q1–Q5+Q9–Q11；S2 再过 Q6–Q8 与移动保底 Q12。

---

## 2. 明确不做（执行时看到就停）

**本 slug 永不做**

- 拆 `/sound-editor`、`/mp3-cutter`、`/audio-trim`、`/wav-to-mp3`、`/voice-recorder`  
- 嵌 Wavacity、fork AudioMass、Rubber Band WASM、首屏 FFmpeg  
- 云盘、YouTube 扒流、格式矩阵子 URL  
- VST、5 轨以上、本页做音色克隆 / RVC / TTS 产品 / 人声分离  
- 用户文案写「最好 / Best / 300 formats」；库名当卖点  

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

### S1 — 工作台上线（对应 06 W0 + 01 砍功能底线）

用户能完成：**打开或录一段，剪掉废的，导出干净 WAV/MP3。**

| 块 | 必须有 |
|---|---|
| 输入 | 一种主面：本地文件 dropzone；Record 是同一工作区命令，不抢第二套上传框；无云盘 |
| 引擎 | 只读 Source PCM + EDL graph；Undo/Redo ≥20 只存 graph |
| 波形 | 缩放、滚动、拖选、时间码；默认过零吸附 |
| 编辑 | Trim to selection、Delete、Insert silence、Cut/Copy/Paste、Fade in/out、增益、反向 |
| 传输 | 播/暂停、空格、选区循环、录音写入 playhead（手势 + 权限失败卡） |
| 导出 | WAV 16-bit 默认、24-bit 可选；MP3 128/192/320（lamejs **点击后**加载）；无水印 |
| 效果预览 | 增益 / 峰值归一化 / 淡化：Apply 前可听（满足 Q5；LUFS/RNNoise 留 S2） |
| HUD | 金标对照 `/tools/batch-convert-web-pages-to-jpg`：Decode / Render / Encode；先 `yieldUi()` |
| 样例 | `loadSample()` 进页出可播放波形；**不**自动 Apply 任何 WASM 效果 |
| 帽 | 桌面 40 MB / 20 分钟；窄屏 20 MB / 8 分钟；超限拒绝解码 |
| 快捷键 | Space；Ctrl/Cmd Z X C V；M 标记 |
| 页下 | How 用按钮原文；Why choose ≥4 条可点；Rules；Example=S1 行为；FAQ≥3；related 已上线工具 |
| 平台 | 桌面 Chrome + 桌面 Safari POC 通过再标 S1 完成 |
| 移动 | 竖屏：打开、选区、播放、Trim/Delete、Fade、Export WAV（Q12 保底可在 S1 做，效果菜单能点即可） |

**S1 砍掉也不许退回裁剪器的**：预览、撤销、过零、无水印立体声导出、EDL。  
**S1 允许没有的**：LUFS、压缩、EQ、RNNoise、SoundTouch、第二轨、IndexedDB 工程。

### S2 — 修好（对应 06 W1 的 DSP 子集，同一 URL）

用户能完成：**难听的人声能修好；变速与变调是两个命令。**

| 命令 | 约束 |
|---|---|
| 集成 LUFS + 真峰值显示 | Worker；`lufs-web` 或等价 MIT；与「峰值归一化」分两个按钮 |
| 归一化到 -16 / -14 / -23 LUFS | 默认 -16 |
| 压缩 | 少参数：阈值、比率、补偿；Preview → Apply |
| 3 段 EQ | 低架 / 峰 / 架；Preview → Apply |
| 人声降噪 | RNNoise；首次 Apply 加载 WASM；FAQ 写清只对人声、48 kHz 帧 |
| 变速不变调 / 变速+变调 | SoundTouch；禁止 Rubber Band；两菜单项 |
| Example | 改为：样例 → 对人声尾降噪试听 → Export（仍不自动 Apply） |

无 Preview 的效果不得进菜单。

### S3 — 仅当用户再点名

v1.5：第二轨 Music（音量 / 静音 / 独奏 / mixdown）。仍同一 slug。  
v2：4 轨封顶、IndexedDB、Mediabunny 长文件 — 默认不排。

---

## 4. 会话拆分（后面按这个执行）

对齐 `tool-coverage-pass` + `tool-token-efficiency`。 **一阶段一会话**；下一会话只读交接物，不把 01–10 全文再读一遍。

| 阶段 | 用户口令 | 做什么 | 交接物（下一会话只读这些） | 停做 |
|---|---|---|---|---|
| **A · Brief** | 「按方案执行」或「立项」 | 复制 `work-tasks/_template/` → `work-tasks/{slug}/`；写 00–03；0b 覆盖表；0i 意图审查；`coverage:gate --phase=0b` | `02`=`ready`；`03`=`briefs-ready`；覆盖表 + 意图总判 | 不改 `src/`；不 POC 进 catalog |
| **B1 · POC+S1 引擎** | 「实现」且 A 已绿 | catalog 分片 `page.style: "opts"`；`*Page.ts`：EDL + 波形 + 剪贴撤销 + WAV；Chrome/Safari 桌面 POC | 可打开样例、Delete、Undo、导出 WAV | 不写他语；不上 RNNoise |
| **B2 · S1 录导出+母版** | B1 可用 | 录音、MP3 vendor、快捷键、过零、标记、HUD、峰值归一化预览、en i18n、icon、`coverage:gate --phase=2`、`lint:tool-page --slug` | gate 2 绿；page wiring 绿 | 不开十语；不 LUFS |
| **C · 他语** | B2 绿 | 逐语或 ≤3 语一批按 brief 重写；`coverage:gate --phase=4` | `03` 行 `2b` 含 en,zh,es,ja | 不开始 S2 效果 |
| **D · S1 Ship** | C 绿 | `build:site`；`verify:tool -- --slug=`；README 中英清单；浏览器走通：打开/录/剪/导出 | 首页 latest 有卡片；`/tools/{slug}` 与 `/zh/tools/{slug}` 可验收 | 不顺手做 S2 |
| **E · S2** | 用户说「做降噪/LUFS/S2」 | 同一 slug 加 Q6–Q8；vendor；改 Example/FAQ/Rules；`tool:touch`；再跑 phase=2/4 若改了母版句；`verify:tool` | S2 验收表全绿 | 不拆 URL；不上分离/TTS |

未说「实现」时，A 结束必须停。未说 S2 时，D 结束必须停。

### 4.1 阶段 A 必读（只这些）

```
docs/sound-editor/11-executable-plan.md   # 本页
docs/sound-editor/02-product-design.md    # chrome / 作业 / 限制（分期以 11 为准）
docs/sound-editor/01-js-implementation-research.md  §3 Q杠、§5 EDL、§6 栈
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
docs/sound-editor/01-js-implementation-research.md  §6–§7
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

1. 进页：自动出波形，可播放，未拉 RNNoise。  
2. 拖入 MP3：HUD Decode → 波形；选区 Delete → Undo 恢复。  
3. Fade in → 可听再 Apply。  
4. Record 一句插入时间线（拒绝权限时有卡片）。  
5. Export WAV 下载；再 Export MP3（首次加载 lame，HUD Encode）。  
6. 超限文件：拒绝解码，人话说明。  
7. 桌面 Safari：播放前 resume，导出成功。  
8. 窄视口：仍能选、剪、导出 WAV。  
9. `/zh/tools/{slug}`：按钮与 How 为中文，不是英文回退。

S2 另加：LUFS 读数变化；降噪 Preview 与 Apply；变速后时长变、音高大致不变。

---

## 5. 技术栈冻结（B 不得另选，除非许可冲突）

| 层 | 用 | 不用 |
|---|---|---|
| 解码播放 | Web Audio `decodeAudioData` | 首屏 FFmpeg |
| 波形 | wavesurfer v7 **或** 自绘 Canvas（POC 二选一写进 `02`） | WaveSurfer 2.x |
| 撤销 | EDL JSON 栈 | 整段 PCM 拷贝栈 |
| MP3 | `@breezystack/lamejs` 懒加载，vendor | 老 lamejs 巨包、CDN |
| LUFS（S2） | `lufs-web` Worker | 为计量拉 FFmpeg |
| 降噪（S2） | `@shiguredo/rnnoise-wasm` 或 `@jitsi/rnnoise-wasm` | 上传云 AI |
| 变速（S2） | SoundTouch LGPL | `rubberband-wasm` GPLv2 |
| HUD | `.bcw-hud` 金标 | 一行 aria-live 冒充进度 |

LGPL（lame / SoundTouch）：动态加载、vendor 保留许可文件，不把 GPL 编辑器嵌进页。

---

## 6. SEO / 文案纪律（A 就必须写进 02）

- slug = 场景任务句（kebab）；头词 *sound editor* / *online audio editor* → title/FAQ/Why choose，**不当 URL**。  
- H1 禁止 EQ 频段名、禁止「最好」。  
- How 步骤 = 按钮原文（Open、Delete、Export、Record）。  
- 次词落点：*mp3 cutter*、*trim audio*、*voice recorder*、*wav to mp3*、*noise reduction*（S2 才承诺能力；S1 FAQ 可写「降噪随后在本页效果菜单」**仅当 S2 已排期**，否则 S1 不要承诺降噪）。  
- S1 有意不满足：多轨 DAW、云 AI 降噪、300 格式 — FAQ 各一句，不改 H1。  
- `localProcessing: true`；隐私句：文件留在设备 **且** 不上服务器。  
- Information Gain：过零、体积帽、格式随 UA、本页 vs 上传裁剪站 vs 免费 TwistedWave 单声道墙。S2 再加 LUFS 表、RNNoise 人声边界、SoundTouch 倍率。

---

## 7. 模块落点（B 起）

| 路径 | 角色 |
|---|---|
| `work-tasks/{slug}/` | 立项真相源 |
| `src/site/tool-catalog.d/{slug}.json` | catalog；`page.style: "opts"` |
| `src/pages/{camel}Page.ts` | chrome + 接引擎 |
| `src/pages/{camel}AudioEngine.ts` 或 `src/lib/audio-editor/` | EDL / 播放 / bounce（**本工具专用**，勿塞进无关工具） |
| `src/site/i18n/tools/{slug}/{lang}.ts` | 十语 |
| `public/icons/tools/{slug}.svg` | ASCII 注释 |
| `public/vendor/` | lame /（S2）rnnoise、soundtouch、lufs |
| 禁止手改 | `tool-catalog.json`、合并 i18n、registry 生成物 |

引擎与 Page 拆开，避免单文件过万行无法审查。

---

## 8. 与旧文档的冲突裁决

| 冲突 | 听谁 |
|---|---|
| 02「v1 一次带齐全部效果」vs 本页 S1/S2 | **本页** |
| 01「未做齐 Q6–Q8 不得称对标最好」 | 仍成立：S1 **对外不称最好**；S2 做齐后再用 01 质量杠对内验收 |
| 06 W1 库 + V0 滤镜包 vs 02 本 slug 范围 | **02 + 本页**：本站不做库与滤镜包 |
| 05 需求宇宙 vs 本站排期 | 05 不排期 |
| Google 政策 vs 任何「为排名铺音频变体页」 | Google 现行文档 |

---

## 9. 开始条件 / 结束条件

**开始 A**：用户本对话或新对话明确「按方案执行」或「立项 {slug}」。

**S1 完成**：阶段 D 命令全绿 + §4.4 浏览器清单勾完 + README 已写。

**整份声音「本站方案」完成**：S1 完成。S2/S3 是加厚，须另一次口令。

**本页不完成的事**：不改方向 A 总排期表以外的无关工具；不申请子域名；不创建第二个音频 slug。
