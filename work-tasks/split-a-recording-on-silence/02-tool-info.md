# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`split-a-recording-on-silence`  
**路径**：`/tools/split-a-recording-on-silence`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 作业来源：`docs/sound-editor/12-slug-hub-and-scene.md` **A3**（scene：按停顿切成多段 ZIP；**不是** S2 挖静音仍一文件）。

---

## 使用场景（§3.3 H）

| 用户作业 | 搜法 | 本页 | 备注 |
|---|---|---|---|
| 按静音停顿把一轨切成多段并打包 | split recording on silence；split audio by silence / 按静音分割音频 | **本页进攻** | slug 任务句 |
| 挖掉静音仍导出**一个**更短文件 | remove silence from a recording；silence remover | **邻作业 S2** | FAQ 划界；related 链过去 |
| 手标起止裁一段 | trim audio；mp3 cutter | **邻作业 S1** | related |
| 按固定秒数等分 | split audio by duration | **邻作业 S3** | 有意不满足；FAQ 一句 |
| 按 cue 分轨 | cue splitter | **S4** | 有意不满足 |
| 在线音频编辑器 / 波形工作站 | sound editor | **Hub** | 不进进攻 H1 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：split a recording on silence；split audio by silence；split mp3 on silence；detect silence and split；按静音分割音频
- 用户真实任务：打开已有录音，在够长的安静停顿处切开，下载**多段**（通常一个 ZIP），不是拼回一文件。
- [x] 竞品 SERP 前 5–10 都提供了什么？见 `notes.md`：阈值 + 最短静音 + 多段/ZIP；部分站叠等分/手标模式。
- [x] 它们没讲清什么？（≥3 条缺口）① 切点是静音**中点**还是挖光拼回（与 S2 混淆）；② 桌面/手机体积与时长帽、最多段数是拒绝还是截断；③ 口语默认最短静音该比「挖死气」更长，避免换气切碎；④ 文件是否离开设备；⑤ 与等时长切、cue 分轨不是同一作业。
- [x] 我们补哪 ≥3 条增益？（§3.1）① 公式/规则：50 ms RMS → dB，切在静音中点；② 边界：帽 + 最多 50 段拒绝、最短片段丢弃；③ 对照表：Speech / Lecture / Album；④ 数值示例：5.00 s → 三段 1.40 / 2.00 / 1.60；⑤ 本地隐私：设备 + 不上服务器；⑥ 主题内链 S1/S2。
- [x] 长尾：*split audio by silence* / *split mp3 on silence* / *split audio at silence* **合并进本页**。*remove silence* 一文件、*split by duration*、*cue split* **不进进攻 H1**。
- [x] 权威来源 URL：Audacity Silence Finder；FFmpeg silencedetect；MDN AudioBuffer。
- [x] 行业/场景 Use case 文案草稿：讲座按停顿分章；访谈一问一切；合集歌间空白分轨（不是 cue）。
- [x] 边界/失败案例草稿：无够长静音 → 一段原文件可进 ZIP；超 50 段拒绝；整段过静 → 无可用片段；视频拒绝。
- [x] 结果区信息如何落到可索引 Example / FAQ：样例三段时长写进 Example；ZIP 命名 `stem-01.wav` 写 FAQ。
- [x] Related / 主题内链计划（≥2）：`remove-silence-from-a-recording`、`trim-an-audio-clip-and-export`。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | `levelDb = 20 × log10(rms)`；切点 = 合格静音段中点 |
| 2 | 边界/失败 | 帽、最多 50 段拒绝、最短片段、无静音、视频 |
| 3 | 场景语境 | 讲座 / 访谈 / 合集空白分轨 |
| 4 | 对照表 | Speech −40/1.0；Lecture −40/2.0；Album −45/1.5 |
| 6 | 本地隐私 | 留在设备 + 不上服务器 |
| 8 | 数值示例 | 5.00 s → 1.40 + 2.00 + 1.60，三文件 ZIP |
| 9 | 主题内链 | S2 一文件、S1 手裁 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | `sound-editor` / P 表 A3 中档 |
| 场景与行业 | 讲座、访谈、播客长轨、歌间空白分轨（无 cue） |
| 技术（包、Tier、本地处理） | Web Audio RMS；JSZip 点后加载；lamejs 仅 ZIP-MP3；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | Split a recording on silence |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Split a recording on silence on your device: cut at long pauses, download a ZIP of clips—not uploaded. 紧跟 Steps/Example（阈值 −40 dB、最短静音 1.0 s、样例 5 s → 三段）。**同一作业全收**：split audio by silence；split mp3 on silence；split audio at silence；detect silence split；按静音分割音频。异意图 remove-silence 一文件 / 等时长切 / cue / mute video 只 FAQ 划界。勿堆 Free/Online Best。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 是否上传；是否就是 split audio by silence；与 S2 一文件区别；与等时长切区别；阈值/换气；ZIP 命名与段数帽；不是 cue/视频/YouTube；体积帽与安静音乐 |
| Disclaimer / References | 非 YMYL 短版权句；Audacity Silence Finder；FFmpeg silencedetect；MDN AudioBuffer |
| related | `remove-silence-from-a-recording`、`trim-an-audio-clip-and-export` |
| 验收 | `coverage:gate` 0b/2/4；`lint:tool-page`；`verify:tool`；S2 related 回链时 `CROSS_TOOL_UPDATE=1` |
| 工期粗估 | 复用 S2 解码/RMS/HUD，切开中点 + JSZip；十语独立重写 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-11 |
| slug 结论 | **保留** `split-a-recording-on-silence`（情境=已有录音 + 动作=按静音切开 + 结果=多段；用户点名；符合 §3.3 H。不是品类头词 `silence-splitter` doorway，也不是 S2 `remove-silence-from-a-recording`，也不是 S3 等时长） |
| 主检索词 → title/H1 | 英文 H1 **Split a recording on silence**（任务句；含 split / recording / silence）。中文 H1 方向：**按静音把一段录音切成多段**。他语见 `03`，禁止英模顿号枚举阈值/最短时长/ZIP。 |
| 次要关键词 → desc / FAQ / Use cases | **见下方「同意图相关搜索词」全表**。摘要：split audio by silence / split mp3 on silence / split at silence / detect silence split → desc + FAQ q2 + usecase；中文 按静音分割音频 / 按停顿切片 → zh desc + FAQ；头词 sound editor、remove silence 一文件、等时长切 → 划界不进 H1 |
| 用户搜索习惯判断 | 搜 split audio by silence / 按静音分割 的人要**自动在停顿处切开并拿走多段（ZIP）**，不是挖死气拼一文件，也不是按秒数等分。H1 禁 Silence Splitter Online 光杆头词。desc 用自然句收齐近义，禁止页上关键词列表。 |
| 优化摘要 | 2026-09-11：对照 FyleTools/TunePocket/AudioForges/SoniqTools/GigAI 与 12 A3 搜法簇，H1 锁定任务句而非品类头词；meta 前窗 Split a recording on silence + ZIP + 不上服务器；明确不吸 S2 一文件、S3 等分、cue、mute video。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=split-a-recording-on-silence --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 同意图相关搜索词（页面生成必吸）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「同意图相关搜索词」。本表是 **title / description / FAQ / Use cases 的生成规格**。同一作业的相关搜索、PAA、自动完成、12 表 A3 搜法簇、竞品产品名须全部列入；近义可共用一句，禁止页上词云。`03` 每语 3–5 只定该语 H1 方向。来源：12 A3 + 2026-09-11 公开 SERP（`notes.md`）+ 十语当地说法。无本 slug Planner CSV。

| 相关搜法（同意图须全部列出） | 判定 | 页面生成落点（H1 / desc / FAQ / usecase） | 近义不拆 URL |
|---|---|---|---|
| split a recording on silence；split recording on silence | absorb 主词 | en **H1** `Split a recording on silence` | — |
| split audio by silence；split audio at silence；split audio on silence | absorb 次词 | en desc + FAQ q2 | `/split-audio-by-silence` |
| split mp3 by silence；split mp3 on silence；split wav by silence | absorb 次词 | desc + FAQ q2 + usecase | `/split-mp3-on-silence` |
| detect silence and split；silence detection split；auto split on silence | absorb 次词 | FAQ q2 + How | `/silence-detect-split` |
| split podcast by silence；split lecture on pauses；split interview at silence | absorb 次词 | Use cases | — |
| download segments as ZIP；split audio zip；export clips zip | absorb 次词 | desc + FAQ q6 + Why choose | — |
| silence threshold dB；minimum silence duration to split | absorb 次词 | Rules + FAQ q5 | 不拆阈值 URL |
| 按静音把一段录音切成多段；按静音分割音频；按停顿切片；按静音切 ZIP | absorb 主词/次词（zh） | zh **H1** + desc + FAQ | `/an-jingyin-fenge` |
| dividir audio por silencios；partir grabación por silencios | absorb 次词（es） | es H1 任务句；其余 desc/FAQ | `/dividir-por-silencios` |
| 無音で分割；無音で音声を分割；無音検出でカット | absorb 次词（ja） | ja **H1**；其余 desc/FAQ | `/muon-bunkatsu` |
| Aufnahme an Stille teilen；Audio an Stille splitten | absorb 次词（de） | de H1；其余 desc/FAQ | `/stille-splitten` |
| découper audio aux silences；séparer enregistrement aux silences | absorb 次词（fr） | fr H1；其余 desc/FAQ | `/decouper-silences` |
| dividir áudio por silêncios；separar gravação nos silêncios | absorb 次词（pt） | pt H1；其余 desc/FAQ | `/dividir-silencios` |
| pecah audio pada jeda sunyi；bagi rekaman pada silence | absorb 次词（id） | id H1；其余 desc/FAQ | `/pecah-silence` |
| تقسيم الصوت عند الصمت；فصل التسجيل عند الصمت | absorb 次词（ar） | ar H1；其余 desc/FAQ | — |
| разделить аудио по тишине；нарезать запись по паузам | absorb 次词（ru） | ru H1；其余 desc/FAQ | — |
| silence splitter；online audio splitter（光杆头词） | absorb 次词（不当 H1） | desc also-called + FAQ q2 | `/silence-splitter` |
| remove silence from a recording；silence remover；挖静音仍一个文件 | 有意不满足进攻 | FAQ：本页切多段 ZIP，要一个更短文件用 S2 | S2 |
| split audio by duration；split into equal parts；split mp3 into parts（等时长） | 有意不满足 | FAQ：不是按固定秒数等分 | S3 |
| cue splitter；split ape cue；split flac cue | 有意不满足 | FAQ | S4 |
| trim audio；mp3 cutter；只要手标起止 | 有意不满足进攻 | FAQ + related S1 | S1 |
| remove audio from video；mute video | 有意不满足 | FAQ；不收视频主输入 | V1 |
| sound editor；online audio editor | 有意不满足进攻 | FAQ 一句划界；**不进**本页 H1 | Hub |
| denoise；remove um/uh；YouTube rip | 有意不满足 | FAQ | — |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。无 Google/Bing Planner 分析则勾「不适用」并跳过本表。

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`（写出文件名）

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner CSV |

- [x] 交互规格已按上表补齐能力（不仅写进文案）— Planner 不适用，能力按 SERP/12 表补齐 ZIP 切开。

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-11 |
| 总判 | **满足**：搜 split a recording on silence / split audio by silence 的人打开页即单文件输入 + 按静音自动切开 + 多段列表 + Download ZIP。**有意不满足**：S2 拼一文件、S3 等时长、S4 cue、视频跳剪、sound editor 进攻 H1、近义 silence-splitter URL。**不超出**：首屏不放等分/手标模式、不放视频 input、不放 FFmpeg 加载墙；desc 不写 doorway；阈值进高级设置，默认即可跑通。 |
| 主词搜索者任务 | 把一段已有录音在安静停顿处切成多段并打包带走。 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 检测静音、中点切开、最短片段、最多 50 段、ZIP、可选 WAV/MP3、样例自动跑出三段。 |
| 超出 / 应划边界 | 不把 TunePocket 三模式做进本 URL；不把 S2 挖静音当默认输出；设置不进主按钮行。 |
| 缺口与已做优化 | 相对「Silence Splitter Online」H1：改回任务句。相对「和 remove silence 混页」：related 链 S2，FAQ 写 ZIP vs 一文件。How 动词对齐按钮 Split on silence / Download ZIP。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file]`（非 multiple）。`accept` 与 S1/S2 相同常见音频 MIME。显示文件名、解码后时长/采样率/声道。禁止云盘。禁止第二套 URL/视频输入抢首屏。
- 主按钮行只放动作：**Split on silence**（primary） / **Download ZIP**（无切段 disabled） / **Load sample** / **Clear**。How 用词必须等于这些按钮。不要把阈值滑条放进主按钮行。切段列表可提供单段下载，但不替代 ZIP 主动作。
- 结果只读：Original duration；Gaps used as splits；Clip count；每段时长列表。波形可标出静音带（只读，切点在中点）。
- 高级设置（`<details>`，默认收起；不打开也能 Split）：
  - 阈值 dB，默认 **-40**（约 -60…-20）
  - 最短静音秒，默认 **1.0**（比 S2 挖死气的 0.5 s 更长，减少换气误切）
  - 最短片段秒，默认 **0.3**（更短丢弃）
  - 可选芯片预设：**Speech**（默认 −40 / 1.0 / 0.3）/ **Lecture**（−40 / 2.0 / 0.5）/ **Album**（−45 / 1.5 / 1.0）
  - ZIP 内格式：默认 **WAV**；选 MP3 时码率 96 / **128** / 192，点 Download ZIP 才加载 lamejs
- 输出：ZIP 文件名 `{stem}-on-silence.zip`；内部 `{stem}-01.wav`（或 `.mp3`）起。最多 **50** 段。
- 核心规则 / 算法：读文件 → 体积/时长预检 → HUD **Decode** → `decodeAudioData` → HUD **Detect**（约 50 ms 窗 RMS → dBFS；连续低于阈值且 ≥ 最短静音标为静音段）→ 用户点 Split on silence → HUD **Split**（每个合格静音段取**中点**为切点；相邻切点之间为一段；丢弃 < 最短片段；超 50 段硬失败）→ 内存持有多段 `AudioBuffer` → Download ZIP → HUD **Pack**（懒加载 JSZip）；若格式 MP3 则先 **Encode** 再 Pack。失败：超帽、解码失败、0 段、超 50 → 明文错误，不静默截断。0 个合格静音 → 整段作为 1 个 clip 仍允许打包并提示。
- 失败与边界行为：桌面 **40 MB** 或 **20 分钟**；窄屏约 **20 MB** / **8 分钟**（与 S1/S2 一致）。不支持的编码写「this browser could not decode …」。DRM / 视频：拒绝。
- 示例 Input → Output：内置 **5.00 s** 合成样例：0.80 s 音 + **1.20 s** 静音 + 0.80 s 音 + **1.20 s** 静音 + 1.00 s 音。默认 −40 dB / 1.0 s → 切点 1.40 s 与 3.40 s → 三段 **1.40 / 2.00 / 1.60 s**。写进 H2 Example。
- **进页样例（必填）**：进页调用 `loadSample()`：填入上述 5 s 样例、Decode、Detect、**自动 Split on silence** 使 Download ZIP 可用且结果区显示 3 clips（缓冲极小，允许自动跑；**不要**进页自动加载 JSZip / lamejs / 自动下载）。与 H2 Example 对齐。
- **进度 HUD（必填）**：对照 `/tools/batch-convert-web-pages-to-jpg`（`.bcw-hud`）。胶囊：**Decode** / **Detect** / **Split** / **Pack**（ZIP-MP3 时 Encode 出现在 Pack 前）。成功后保持卡片并指向已启用的 Download ZIP。不要只用一行 status。
- **实现防呆**：Page `opts` 签名；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/`。禁止 CDN。禁止本页叠等分/手标模式。B 后 `npm run lint:tool-page -- --slug=split-a-recording-on-silence`。

### Rules 对照表草稿（可索引）

| Recording type | Threshold | Min silence | Min clip |
|---|---|---|---|
| Speech / interview (default) | −40 dB | 1.0 s | 0.3 s |
| Lecture / chapter pauses | −40 dB | 2.0 s | 0.5 s |
| Album gaps between tracks | −45 dB | 1.5 s | 1.0 s |
| Do not use as a DAW or cue splitter | — | — | FAQ |

### How 步骤草稿（en 母版方向；按钮原文）

1. Open a recording (or click **Load sample**).
2. Leave the defaults, or open advanced settings to change threshold and minimum silence.
3. Click **Split on silence**.
4. Click **Download ZIP**.

### Why choose 草稿（可验证差异，非快/免费）

1. Cuts at the midpoint of long quiet gaps and packs **many files in a ZIP**; it does not stitch one shorter file.
2. Speech defaults (−40 dB / 1.0 s / 0.3 s min clip) avoid chopping breaths; Lecture / Album presets are named.
3. The file stays in this browser tab and is not uploaded; JSZip and lamejs load only when you download.
4. Honest size/time cap and a 50-clip ceiling that refuses instead of truncating.

### Converter SEO / UI 自检（立项）

- [x] Slug/H1 = 任务句，不硬刚 `silence splitter` / `sound editor`
- [x] Meta 前 160 字符含 recording → ZIP of clips + 本标签页
- [x] How 用词 = Split on silence / Download ZIP
- [x] 阈值、最短静音、最短片段、帽、50 段在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] 一种主输入；主按钮行无设置；Download ZIP 无产物禁用

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] 进度 HUD（金标；Decode / Detect / Split / Pack）
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
