# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`split-an-audio-file-by-duration`  
**路径**：`/tools/split-an-audio-file-by-duration`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 作业来源：`docs/sound-editor/12-slug-hub-and-scene.md` **S3**（scene：按固定时长切成等长多段 ZIP；**不是** A3 按静音切、**不是** S4 cue）。

---

## 使用场景（§3.3 H）

| 用户作业 | 搜法 | 本页 | 备注 |
|---|---|---|---|
| 按固定秒数把一轨切成多段并打包 | split audio by duration；split mp3 into parts / 音频按时长切割 | **本页进攻** | slug 任务句；末段吃余数 |
| 等分成 N 段（每段总长/N） | split into equal parts；split audio into N parts | **本页吸收** | 高级设置；同一 ZIP 结果 |
| 按静音停顿切多段 | split recording on silence | **邻作业 A3** | FAQ 划界；related |
| 挖掉静音仍一个文件 | remove silence | **邻作业 S2** | 有意不满足进攻 |
| 手标起止裁一段 | trim audio；mp3 cutter | **邻作业 S1** | related |
| 按 cue 分轨 | cue splitter | **S4** | 有意不满足 |
| 按文件体积切 | split by file size | 有意不满足 | FAQ 一句 |
| 在线音频编辑器 | sound editor | **Hub** | 不进进攻 H1 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：split an audio file by duration；split audio by duration；split mp3 into parts；split into equal parts；音频按时长切割
- 用户真实任务：打开已有音频，按每段 N 秒（或等分 N 段）切开，下载**多段 ZIP**；最后一段可以更短。
- [x] 竞品 SERP 前 5–10 都提供了什么？见 `notes.md`：chunk 秒数或等分 N；ZIP；部分站叠静音/手标/按体积；部分上传或藏 FFmpeg。
- [x] 它们没讲清什么？（≥3 条缺口）① 余数末段是否更短、Example 有没有数字；② 超 50 段是拒绝还是截断；③ 桌面/窄屏体积与时长帽；④ 文件是否离开设备；⑤ 与静音切、cue、手标切点不是同一作业。
- [x] 我们补哪 ≥3 条增益？（§3.1）① 公式：切点 `k × chunkSec`，末段 `[floor(T/chunk)×chunk, T]`；② 边界：帽 + 最多 50 段拒绝；③ 对照表：30 s / 60 s / 3 min / 5 min 芯片；④ 数值示例：5.00 s、每段 2 s → 2.00 / 2.00 / 1.00；⑤ 本地隐私；⑥ 主题内链 A3/S1。
- [x] 长尾：*split mp3 into parts* / *split into equal parts* / *chunk audio* / *split every 60 seconds* **合并进本页**。*split on silence*、*cue split*、*split by size*、*mp3 cutter* 手裁 **不进进攻 H1**。
- [x] 权威来源 URL：FFmpeg `segment`；mp3splt `-t`；MDN AudioBuffer。
- [x] 行业/场景 Use case 文案草稿：讲座切通勤段；播客切 60 s 社媒条；长录音切进即时通讯时长帽。
- [x] 边界/失败案例草稿：chunk ≥ 总长 → 一段原文件可进 ZIP；超 50 段拒绝；视频拒绝。
- [x] 结果区信息如何落到可索引 Example / FAQ：样例三段时长写进 Example；ZIP 命名 `stem-01.wav`；余数 FAQ。
- [x] Related / 主题内链计划（≥2）：`split-a-recording-on-silence`、`trim-an-audio-clip-and-export`。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 切点 `k × D`；末段吃余数；等分时 `D = T / N` |
| 2 | 边界/失败 | 帽、最多 50 段拒绝、chunk 过短/过长、视频 |
| 3 | 场景语境 | 讲座通勤段 / 60 s 社媒 / 通讯时长帽 |
| 4 | 对照表 | 30 s / 60 s / 3 min / 5 min 芯片 |
| 6 | 本地隐私 | 留在设备 + 不上服务器 |
| 8 | 数值示例 | 5.00 s → 2.00 + 2.00 + 1.00，三文件 ZIP |
| 9 | 主题内链 | A3 静音切、S1 手裁 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | `sound-editor` / 12 表 S3 中档 |
| 场景与行业 | 讲座、播客、社媒条、即时通讯时长帽 |
| 技术（包、Tier、本地处理） | Web Audio 切片；JSZip 点后加载；lamejs 仅 ZIP-MP3；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | Split an audio file by duration |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Split an audio file by duration on your device: equal-length clips, last piece holds the remainder, ZIP download—not uploaded. 紧跟 Steps/Example（默认每段 2 s 样例 → 2.00 / 2.00 / 1.00；实操芯片 30/60/180/300 s）。**同一作业全收**：split mp3 into parts；split into equal parts；chunk audio；split every 60 seconds；按时长切割。异意图 silence / cue / size / trim / mute video 只 FAQ 划界。勿堆 Free/Online Best。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 是否上传；是否就是 split mp3 into parts / equal parts；余数末段；与 A3 静音切区别；ZIP 命名与 50 段帽；不是 cue/体积切/视频/YouTube；体积帽 |
| Disclaimer / References | 非 YMYL 短版权句；FFmpeg segment；mp3splt `-t`；MDN AudioBuffer |
| related | `split-a-recording-on-silence`、`trim-an-audio-clip-and-export` |
| 验收 | `coverage:gate` 0b/2/4；`lint:tool-page`；`verify:tool`；A3 related 回链时 `CROSS_TOOL_UPDATE=1` |
| 工期粗估 | 复用 A3 解码/ZIP/HUD，切点改为固定秒数；十语独立重写 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-11 |
| slug 结论 | **保留** `split-an-audio-file-by-duration`（情境=已有音频文件 + 动作=按时长切开 + 结果=多段；用户点名；符合 §3.3 H。不是品类头词 `audio-splitter` / `split-mp3` doorway，也不是 A3 静音切） |
| 主检索词 → title/H1 | 英文 H1 **Split an audio file by duration**（任务句；含 split / audio file / duration）。中文 H1 方向：**按固定时长把音频切成多段**。他语见 `03`，禁止英模顿号枚举秒数/ZIP/WAV。 |
| 次要关键词 → desc / FAQ / Use cases | **见下方「同意图相关搜索词」全表**。摘要：split mp3 into parts / split into equal parts / chunk audio / split every 60 seconds → desc + FAQ q2 + usecase；中文 按时长切割 / 按秒分割 / 等分 → zh desc + FAQ；头词 audio splitter、silence split、cue → 划界不进 H1 |
| 用户搜索习惯判断 | 搜 split audio by duration / split mp3 into parts 的人要**按秒（或等分 N）切开并拿走多段 ZIP**，接受末段更短，不是按静音，也不是手动画切点。H1 禁 Audio Splitter Online 光杆头词。desc 用自然句收齐近义，禁止页上关键词列表。 |
| 优化摘要 | 2026-09-11：对照 ChunkAudio/Piliapp/Tools321/Elysia/MyConvert 与 12 S3 搜法簇，H1 锁定任务句而非品类头词；meta 前窗 Split an audio file by duration + remainder + ZIP + 不上服务器；明确吸收 equal parts；不吸 silence/cue/size/trim/video。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=split-an-audio-file-by-duration --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 同意图相关搜索词（页面生成必吸）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「同意图相关搜索词」。本表是 **title / description / FAQ / Use cases 的生成规格**。同一作业的相关搜索、PAA、自动完成、12 表 S3 搜法簇、竞品产品名须全部列入；近义可共用一句，禁止页上词云。`03` 每语 3–5 只定该语 H1 方向。来源：12 S3 + 2026-09-11 公开 SERP（`notes.md`）+ 十语当地说法。无本 slug Planner CSV。

| 相关搜法（同意图须全部列出） | 判定 | 页面生成落点（H1 / desc / FAQ / usecase） | 近义不拆 URL |
|---|---|---|---|
| split an audio file by duration；split audio by duration | absorb 主词 | en **H1** `Split an audio file by duration` | — |
| split mp3 into parts；split wav into parts；split audio into parts | absorb 次词 | en desc + FAQ q2 + usecase | `/split-mp3` |
| split into equal parts；split audio into equal parts；divide audio into N parts | absorb 次词 | desc + FAQ q2 + 高级等分 N | `/split-into-equal-parts` |
| chunk audio；audio chunker；split long audio file | absorb 次词 | desc + FAQ q2 | `/chunk-audio` |
| split every 60 seconds；split audio every 30 seconds；60 second clips | absorb 次词 | Use cases + 芯片 30/60 s + FAQ | 不拆秒数 URL |
| last segment shorter；remainder clip；uneven last part | absorb 次词 | Example + FAQ 余数 | — |
| download segments as ZIP；split audio zip | absorb 次词 | desc + FAQ ZIP + Why choose | — |
| 按固定时长把音频切成多段；音频按时长切割；按秒分割 mp3；把音频切成等长多段；mp3 等分 | absorb 主词/次词（zh） | zh **H1** + desc + FAQ | `/an-shichang-qiege` |
| dividir audio por duración；partir mp3 en partes iguales | absorb 次词（es） | es H1 任务句；其余 desc/FAQ | `/dividir-por-duracion` |
| 音声を秒数で分割；長さで分割；等分割 | absorb 次词（ja） | ja **H1**；其余 desc/FAQ | `/byosu-bunkatsu` |
| Audio nach Dauer teilen；MP3 in gleiche Teile splitten | absorb 次词（de） | de H1；其余 desc/FAQ | `/nach-dauer-teilen` |
| découper audio par durée；partager mp3 en parties égales | absorb 次词（fr） | fr H1；其余 desc/FAQ | `/decouper-duree` |
| dividir áudio por duração；partir mp3 em partes iguais | absorb 次词（pt） | pt H1；其余 desc/FAQ | `/dividir-duracao` |
| pecah audio berdasarkan durasi；bagi mp3 jadi bagian sama | absorb 次词（id） | id H1；其余 desc/FAQ | `/pecah-durasi` |
| تقسيم الصوت حسب المدة；تقسيم mp3 إلى أجزاء متساوية | absorb 次词（ar） | ar H1；其余 desc/FAQ | — |
| разделить аудио по длительности；нарезать mp3 на равные части | absorb 次词（ru） | ru H1；其余 desc/FAQ | — |
| audio splitter；mp3 splitter；online audio splitter（光杆头词） | absorb 次词（不当 H1） | desc also-called + FAQ q2 | `/audio-splitter` |
| split recording on silence；split audio by silence | 有意不满足进攻 | FAQ：要停顿切开用 A3 | A3 |
| remove silence from a recording；silence remover | 有意不满足进攻 | FAQ：一文件用 S2 | S2 |
| cue splitter；split ape cue | 有意不满足 | FAQ | S4 |
| trim audio；mp3 cutter；只要手标起止 | 有意不满足进攻 | FAQ + related S1 | S1 |
| split by file size；split audio by mb | 有意不满足 | FAQ：不是按体积 | — |
| remove audio from video；mute video | 有意不满足 | FAQ；不收视频主输入 | V1 |
| sound editor；online audio editor | 有意不满足进攻 | FAQ 一句划界；**不进**本页 H1 | Hub |
| denoise；YouTube rip | 有意不满足 | FAQ | — |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。无 Google/Bing Planner 分析则勾「不适用」并跳过本表。

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`（写出文件名）

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner CSV |

- [x] 交互规格已按上表补齐能力（不仅写进文案）— Planner 不适用，能力按 SERP/12 表补齐固定秒数 + 等分 N + ZIP。

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-11 |
| 总判 | **满足**：搜 split an audio file by duration / split mp3 into parts 的人打开页即单文件输入 + 可见秒数（芯片）+ Split by duration + Download ZIP；末段余数写进结果。**有意不满足**：A3 静音切、S4 cue、按体积切、视频、sound editor 进攻 H1、近义 `/split-mp3` URL。**不超出**：等分 N 放高级设置、不把静音/手标模式抢首屏；desc 不写 doorway。 |
| 主词搜索者任务 | 把一段已有音频按固定秒数切成多段并打包带走（可接受末段更短）。 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 秒数字段、30/60/180/300 芯片、等分 N、最多 50 段拒绝、ZIP、可选 WAV/MP3、样例自动跑出 2.00 / 2.00 / 1.00。 |
| 超出 / 应划边界 | 不把 ChunkAudio/Piliapp 的静音+手标+按体积做进本 URL；秒数是主设置但**不进**主按钮行；设置进 duration 区 + Advanced。 |
| 缺口与已做优化 | 相对「Audio Splitter Online」H1：改回任务句。相对「和 silence split 混页」：related 链 A3。How 动词对齐按钮 Split by duration / Download ZIP。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file]`（非 multiple）。`accept` 与 S1/A3 相同常见音频 MIME。显示文件名、解码后时长/采样率/声道。禁止云盘。禁止第二套 URL/视频输入抢首屏。
- **主设置（按钮行上方，非 Advanced）**：每段时长（秒），默认 **2**（对齐 5 s 样例）。芯片 **30 s / 60 s / 3 min / 5 min** 写入同一数字框。`label for` + 短 hint。How 不把芯片名堆进 H1。
- 主按钮行只放动作：**Split by duration**（primary） / **Download ZIP**（无切段 disabled） / **Load sample** / **Clear**。How 用词必须等于这些按钮。不要把秒数框放进主按钮行。切段列表可提供单段下载，但不替代 ZIP 主动作。
- 结果只读：Original duration；Chunk length；Clip count；每段时长列表（末段可更短）。波形可标出切线（只读）。
- 高级设置（`<details>`，默认收起；不打开也能 Split）：
  - 等分成 N 段（可选，空=忽略）：2–50；点 Split 时 `D = T / N`，覆盖秒数框完成本次切开（框可回写算出的 D 便于核对）
  - ZIP 内格式：默认 **WAV**；选 MP3 时码率 96 / **128** / 192，点 Download ZIP 才加载 lamejs
- 输出：ZIP 文件名 `{stem}-by-duration.zip`；内部 `{stem}-01.wav`（或 `.mp3`）起。最多 **50** 段。
- 核心规则 / 算法：读文件 → 体积/时长预检 → HUD **Decode** → `decodeAudioData` → 用户点 Split by duration → HUD **Split**（切点 `k × D`，末段 `[kD, T]`；`D ≥ T` 则整段 1 clip 并提示；超 50 段硬失败）→ 内存持有多段 `AudioBuffer` → Download ZIP → HUD **Pack**（懒加载 JSZip）；若格式 MP3 则先 **Encode** 再 Pack。失败：超帽、解码失败、0 段、超 50 → 明文错误，不静默截断。
- 失败与边界行为：桌面 **40 MB** 或 **20 分钟**；窄屏约 **20 MB** / **8 分钟**（与 S1/A3 一致）。不支持的编码写「this browser could not decode …」。DRM / 视频：拒绝。秒数最小 **0.5**、最大 **1200**。
- 示例 Input → Output：内置 **5.00 s** 合成 440 Hz 音。默认每段 **2.00 s** → 三段 **2.00 / 2.00 / 1.00 s**。写进 H2 Example。
- **进页样例（必填）**：进页调用 `loadSample()`：填入上述 5 s 样例、秒数=2、Decode、**自动 Split by duration** 使 Download ZIP 可用且结果区显示 3 clips（缓冲极小，允许自动跑；**不要**进页自动加载 JSZip / lamejs / 自动下载）。与 H2 Example 对齐。
- **进度 HUD（必填）**：对照 `/tools/batch-convert-web-pages-to-jpg`（`.bcw-hud`）。胶囊：**Decode** / **Split** / **Pack**（ZIP-MP3 时 Encode 出现在 Pack 前）。成功后保持卡片并指向已启用的 Download ZIP。不要只用一行 status。无 Detect 步（相对 A3）。
- **实现防呆**：Page `opts` 签名；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/`。禁止 CDN。禁止本页叠静音/手标/按体积模式抢首屏。B 后 `npm run lint:tool-page -- --slug=split-an-audio-file-by-duration`。

### Rules 对照表草稿（可索引）

| Goal | Chunk length |
|---|---|
| Sample / short demo (default) | 2 s |
| Stories / short clips | 30 s |
| Many platforms' 1-minute cap | 60 s |
| Commute / lecture slice | 3 min (180 s) |
| Longer chapters | 5 min (300 s) |
| N equal parts | Advanced: set N; `D = total / N` |
| Do not use as silence or cue splitter | FAQ |

### How 步骤草稿（en 母版方向；按钮原文）

1. Open an audio file (or click **Load sample**).
2. Keep 2 seconds, or tap a chip / type the chunk length.
3. Click **Split by duration**.
4. Click **Download ZIP**.

### Why choose 草稿（可验证差异，非快/免费）

1. Cuts every N seconds and packs **many files in a ZIP**; the last clip keeps the remainder instead of padding silence.
2. 30 s / 60 s / 3 min / 5 min chips plus optional equal-parts N; not a silence detector pretending to be equal slices.
3. The file stays in this browser tab and is not uploaded; JSZip and lamejs load only when you download.
4. Honest size/time cap and a 50-clip ceiling that refuses instead of truncating.

### Converter SEO / UI 自检（立项）

- [x] Slug/H1 = 任务句，不硬刚 `audio splitter` / `sound editor`
- [x] Meta 前 160 字符含 audio file → ZIP of clips + remainder + 本标签页
- [x] How 用词 = Split by duration / Download ZIP
- [x] 秒数、等分 N、帽、50 段、余数在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] 一种主输入；主按钮行无设置；Download ZIP 无产物禁用

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] 进度 HUD（金标；Decode / Split / Pack）
- [x] How it works
- [x] Why choose our {tool name} tools（How 之后；title 含工具名 + ≥3 条可验证差异）
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [x] Disclaimer（非 YMYL：实现时用短版权/权利句即可）
- [x] `03-locale-briefs.md` 已填（实现十语前）
