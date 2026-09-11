# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`split-a-disc-image-with-a-cue-sheet`  
**路径**：`/tools/split-a-disc-image-with-a-cue-sheet`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 作业来源：`docs/sound-editor/12-slug-hub-and-scene.md` **S4**（scene：按 cue / 章节表分轨；**不是** A3 按静音切、**不是** S3 按时长切）。

---

## 使用场景（§3.3 H）

| 用户作业 | 搜法 | 本页 | 备注 |
|---|---|---|---|
| 按 cue 表把整轨镜像拆成曲目 ZIP | cue splitter；split ape cue；split flac cue / cue 分轨 | **本页进攻** | slug 任务句；INDEX 01 |
| 粘贴同一份 cue 文本（无独立 .cue 文件） | paste cue sheet | **本页吸收** | 同一套 INDEX；次输入 |
| 按静音停顿切多段 | split recording on silence | **邻作业 A3** | FAQ 划界；related |
| 按固定秒数等分 | split audio by duration | **邻作业 S3** | FAQ 划界；related |
| 挖掉静音仍一个文件 | remove silence | **邻作业 S2** | 有意不满足进攻 |
| 手标起止裁一段 | trim audio；mp3 cutter | **邻作业 S1** | 有意不满足进攻 |
| 波形上点标记当分轨（无 cue） | cue points editor | **Hub / Vibes 第三模式** | 有意不满足；不是 cue sheet |
| YouTube 章节时间轴（无 FILE/INDEX） | youtube chapters split | 有意不满足 | FAQ 一句 |
| 按文件体积切 | split by file size | 有意不满足 | FAQ 一句 |
| 在线音频编辑器 | sound editor | **Hub** | 不进进攻 H1 |
| APE→FLAC 整轨转码、不分轨 | ape to flac | 有意不满足进攻 | Digidust 是转换作业 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：split a disc image with a cue sheet；cue splitter；split flac cue；split wav cue；cue 分轨
- 用户真实任务：打开已有整轨音频/镜像 + cue sheet，按 INDEX 01 切开，下载**带曲名的多轨 ZIP**。
- [x] 竞品 SERP 前 5–10 都提供了什么？见 `notes.md`：cue 或时间轴；ZIP/逐轨下载；部分叠手标/YouTube 章节；桌面 shnsplit/CUETools；部分宣称 APE 本地解码。
- [x] 它们没讲清什么？（≥3 条缺口）① INDEX 是 MM:SS:FF、75 帧/秒，INDEX 00 预隙 vs INDEX 01 曲目起点；② 超帽是拒绝还是悄悄截断；③ APE 浏览器往往解不了，却写进 H1；④ 多 FILE 的「已经一轨一文件」cue 不是本作业；⑤ 文件是否离开设备。
- [x] 我们补哪 ≥3 条增益？（§3.1）① 公式：`t = mm×60 + ss + ff/75`，切在 INDEX 01，末轨接到 EOF；② 边界：帽 + 最多 50 轨拒绝 + APE 明文失败 + 多 FILE 拒绝；③ 对照表：INDEX 00 vs 01、WAVE vs BINARY；④ 数值示例：6.00 s 样例 → 2.00 / 2.00 / 2.00，曲名 Intro/Middle/Outro；⑤ 本地隐私；⑥ 主题内链 S3/A3。
- [x] 长尾：*cue splitter* / *split ape cue* / *split flac cue* / *split wav cue* / *bin cue* **合并进本页**。*split on silence*、*split by duration*、*mp3 cutter*、YouTube 章节手标 **不进进攻 H1**。
- [x] 权威来源 URL：Wikipedia Cue sheet；Hydrogenaudio CUE sheet；ArchWiki CUE Splitting（shnsplit / bchunk）；CDRWIN INDEX 惯例。
- [x] 行业/场景 Use case 文案草稿：EAC/XLD 整轨 FLAC+CUE；DJ 现场一长轨+cue；BIN+CUE 音频镜像（体积允许时）。
- [x] 边界/失败案例草稿：APE 不能解；多 FILE；无 INDEX 01；视频；超 50 轨；超帽。
- [x] 结果区信息如何落到可索引 Example / FAQ：样例三轨时长与 TITLE 写进 Example；ZIP 命名 `01 Intro Tone.wav`。
- [x] Related / 主题内链计划（≥2）：`split-an-audio-file-by-duration`、`split-a-recording-on-silence`。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | `t = mm×60 + ss + ff/75`；切点 INDEX 01；末轨到 EOF |
| 2 | 边界/失败 | 帽、50 轨、APE、多 FILE、无 AUDIO 轨、视频 |
| 3 | 场景语境 | 整轨 rip / DJ 长轨 / BIN 镜像 |
| 4 | 对照表 | INDEX 00 vs 01；WAVE vs BINARY 扇区 |
| 6 | 本地隐私 | 留在设备 + 不上服务器 |
| 8 | 数值示例 | 6.00 s → 2.00 + 2.00 + 2.00，三文件 ZIP |
| 9 | 主题内链 | S3 时长切、A3 静音切 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | `sound-editor` / 12 表 S4 长尾 |
| 场景与行业 | CD/黑胶整轨 rip、DJ 长轨、听碟分轨 |
| 技术（包、Tier、本地处理） | 自写 cue 解析；WAV/BIN 字节切片；其它 `decodeAudioData`；JSZip 点后加载；lamejs 仅 ZIP-MP3；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | Split a disc image with a cue sheet |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Split a disc image with a cue sheet on your device: INDEX 01 cuts, named tracks in a ZIP—not uploaded. 紧跟 Steps/Example（样例 6.00 s → 2.00 / 2.00 / 2.00；TITLE Intro/Middle/Outro）。**同一作业全收**：cue splitter；split flac cue；split wav cue；split ape cue（能力：表能读，APE 解码诚实失败）；bin cue。异意图 silence / duration / trim / youtube chapters / mute video 只 FAQ 划界。勿堆 Free/Online Best。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 是否上传；是否就是 cue splitter / split flac cue；INDEX 00 vs 01；APE 解不了怎么办；与 S3/A3 区别；ZIP 命名与 50 轨帽；不是 YouTube 章节/视频/体积切；体积帽 |
| Disclaimer / References | 非 YMYL 短版权句；Wikipedia Cue sheet；Hydrogenaudio；ArchWiki CUE Splitting |
| related | `split-an-audio-file-by-duration`、`split-a-recording-on-silence` |
| 验收 | `coverage:gate` 0b/2/4；`lint:tool-page`；`verify:tool`；S3/A3 related 回链时 `CROSS_TOOL_UPDATE=1` |
| 工期粗估 | 复用 S3 解码/ZIP/HUD，切点改为 cue INDEX；十语独立重写 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-11 |
| slug 结论 | **保留** `split-a-disc-image-with-a-cue-sheet`（情境=整轨镜像 + 动作=按 cue 切开 + 结果=分轨；用户点名；符合 §3.3 H。不是品类头词 `cue-splitter` doorway，也不是 S3 时长切） |
| 主检索词 → title/H1 | 英文 H1 **Split a disc image with a cue sheet**（任务句；含 split / disc image / cue sheet）。中文 H1 方向：**用 cue 表把整轨镜像分轨**。他语见 `03`，禁止英模顿号枚举 INDEX/ZIP/WAV。 |
| 次要关键词 → desc / FAQ / Use cases | **见下方「同意图相关搜索词」全表**。摘要：cue splitter / split flac cue / split wav cue / split ape cue / bin cue → desc + FAQ q2 + usecase；中文 cue 分轨 / ape cue 分轨 → zh desc + FAQ；头词 sound editor、silence split、duration split、YouTube 章节 → 划界不进 H1 |
| 用户搜索习惯判断 | 搜 cue splitter / split flac cue 的人要**按 cue 曲目表切开并拿走多轨 ZIP**，不是按秒等分，也不是按静音。H1 禁 Cue Splitter Online 光杆头词。desc 用自然句收齐近义，禁止页上关键词列表。 |
| 优化摘要 | 2026-09-11：对照 Vibes/AlienFusion/Digidust/FFcuesplitter/ArchWiki 与 12 S4 搜法簇，H1 锁定任务句而非品类头词；meta 前窗 Split a disc image with a cue sheet + INDEX 01 + ZIP + 不上服务器；明确吸收各容器 cue；不吸 silence/duration/trim/youtube chapters；APE 作同意图搜法但功能上诚实不能解码。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=split-a-disc-image-with-a-cue-sheet --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 同意图相关搜索词（页面生成必吸）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「同意图相关搜索词」。本表是 **title / description / FAQ / Use cases 的生成规格**。同一作业的相关搜索、PAA、自动完成、方向文档搜法簇、竞品产品名须全部列入；近义可共用一句，禁止页上词云。`03` 每语 3–5 只定该语 H1 方向。来源：12 S4 + 2026-09-11 公开 SERP（`notes.md`）+ 十语当地说法。无本 slug Planner CSV。

| 相关搜法（同意图须全部列出） | 判定 | 页面生成落点（H1 / desc / FAQ / usecase） | 近义不拆 URL |
|---|---|---|---|
| split a disc image with a cue sheet；split disc image cue | absorb 主词 | en **H1** `Split a disc image with a cue sheet` | — |
| cue splitter；cue sheet splitter；online cue splitter | absorb 次词（不当进攻 H1） | en desc + FAQ q2 | `/cue-splitter` |
| split flac cue；flac cue splitter；split album flac cue | absorb 次词 | desc + FAQ q2 + usecase | `/split-flac-cue` |
| split wav cue；wav cue splitter；split wav with cue | absorb 次词 | desc + FAQ + usecase | `/split-wav-cue` |
| split ape cue；ape cue splitter；split ape with cue file | absorb 次词（搜法吸收；解码有意做不到） | desc + FAQ APE：表可读，浏览器解不了 APE，请先转 WAV/FLAC 保留同一 cue | `/split-ape-cue` |
| bin cue splitter；split bin cue；cue bin tracks | absorb 次词 | desc + FAQ BIN + Rules BINARY | `/split-bin-cue` |
| split mp3 cue；mp3 + cue album | absorb 次词 | desc + FAQ | `/split-mp3-cue` |
| extract tracks from cue；split album with cue file | absorb 次词 | Use cases + How | `/extract-tracks-cue` |
| INDEX 01；cue sheet timestamps；MM:SS:FF | absorb 次词 | Rules + FAQ INDEX | — |
| INDEX 00 pregap；hidden track one audio | absorb 次词 | FAQ INDEX 00；默认切在 01 | — |
| download tracks as ZIP；cue split zip | absorb 次词 | desc + FAQ ZIP + Why choose | — |
| paste cue sheet；cue text | absorb 次词 | How + 可粘贴 cue | — |
| 用 cue 表把整轨镜像分轨；cue 分轨；ape cue 分轨；flac cue 切割；bin cue 分轨 | absorb 主词/次词（zh） | zh **H1** + desc + FAQ | `/cue-fengui` |
| dividir una imagen de disco con una hoja cue；separar pistas cue | absorb 次词（es） | es H1 任务句；其余 desc/FAQ | `/dividir-cue` |
| キューシートでディスクイメージを分割；cue分割；flac cue 分割 | absorb 次词（ja） | ja **H1**；其余 desc/FAQ | `/cue-bunkatsu` |
| Disc-Image mit CUE-Sheet splitten；CUE Splitter | absorb 次词（de） | de H1；其余 desc/FAQ | `/cue-splitten` |
| découper une image disque avec une feuille cue | absorb 次词（fr） | fr H1；其余 desc/FAQ | `/decouper-cue` |
| dividir uma imagem de disco com uma folha cue | absorb 次词（pt） | pt H1；其余 desc/FAQ | `/dividir-cue-pt` |
| pecah image disc dengan cue sheet；bagi trek cue | absorb 次词（id） | id H1；其余 desc/FAQ | `/pecah-cue` |
| قسّم صورة قرص بملف cue | absorb 次词（ar） | ar H1；其余 desc/FAQ | — |
| разделить образ диска по cue | absorb 次词（ru） | ru H1；其余 desc/FAQ | — |
| shnsplit online；bchunk online | absorb 次词（不当 H1） | FAQ：同一作业在浏览器做 | — |
| split recording on silence；split audio by silence | 有意不满足进攻 | FAQ：要停顿切开用 A3 | A3 |
| split audio by duration；split mp3 into parts | 有意不满足进攻 | FAQ：按秒等分用 S3 | S3 |
| remove silence from a recording | 有意不满足进攻 | FAQ：一文件用 S2 | S2 |
| trim audio；mp3 cutter | 有意不满足进攻 | FAQ | S1 |
| youtube chapters split；waveform cue points without sheet | 有意不满足 | FAQ：本页要 cue sheet，不是章节列表 | — |
| ape to flac converter（不分轨） | 有意不满足进攻 | FAQ | — |
| split by file size | 有意不满足 | FAQ：不是按体积 | — |
| remove audio from video；mute video | 有意不满足 | FAQ；不收视频主输入 | V1 |
| sound editor；online audio editor | 有意不满足进攻 | FAQ 一句划界；**不进**本页 H1 | Hub |
| YouTube rip；ISO data disc | drop | FAQ | — |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。无 Google/Bing Planner 分析则勾「不适用」并跳过本表。

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`（写出文件名）

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner CSV |

- [x] 交互规格已按上表补齐能力（不仅写进文案）— Planner 不适用，能力按 SERP/12 表补齐 cue 解析 + INDEX 01 切开 + 曲名 ZIP。

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-11 |
| 总判 | **满足**：搜 split a disc image with a cue sheet / cue splitter 的人打开页即丢镜像+cue（或粘贴 cue）+ Split tracks + Download ZIP，曲名来自 TITLE。**有意不满足**：APE 解码、S3 等时长、A3 静音、YouTube 章节手标、sound editor 进攻 H1、近义 `/cue-splitter` URL、700 MB 整张 CD BIN。**不超出**：不把 Vibes 的波形点标/章节粘贴抢首屏；desc 不写 doorway。 |
| 主词搜索者任务 | 用 cue sheet 把一张整轨镜像按曲目切开并打包带走。 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 双文件同一 dropzone、可粘贴 cue、INDEX 01 切开、轨列表带 TITLE、ZIP、可选 WAV/MP3、样例自动跑出 2.00 / 2.00 / 2.00。 |
| 超出 / 应划边界 | 不把 YouTube 章节解析器、手动画切点、APE WASM、ISO 数据盘做进本 URL；高级设置只放 ZIP 格式/码率/预隙说明。 |
| 缺口与已做优化 | 相对「Cue Splitter Online」H1：改回任务句。相对「宣称支持 APE」：FAQ 诚实。How 动词对齐按钮 Split tracks / Download ZIP。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入面** — `label.tool-dropzone` + `input[type=file]` **`multiple`**。一次可丢：音频/镜像（`.wav` `.flac` `.mp3` `.m4a` `.ogg` `.bin`）+ `.cue`。按扩展名分流；显示两个文件名。禁止云盘。禁止第二套视频/URL 抢首屏。
- **次输入（不抢主 dropzone）**：`<details>`「Or paste the cue sheet」文本框；与丢入的 `.cue` 互斥（后写入覆盖）。无独立时间轴粘贴模式。
- 主按钮行只放动作：**Split tracks**（primary） / **Download ZIP**（无切段 disabled） / **Load sample** / **Clear**。How 用词必须等于这些按钮。
- 结果只读：Album / Performer（若有）；轨表（号、TITLE、INDEX 01 时间、时长）；波形可标 INDEX 01 切线（只读）。
- 高级设置（`<details>`，默认收起；不打开也能 Split）：
  - ZIP 内格式：默认 **WAV**；选 MP3 时码率 96 / **128** / 192，点 Download ZIP 才加载 lamejs
  - 预隙：默认 **切在 INDEX 01**（INDEX 00 只展示不切）；不提供「按 YouTube 章节切」
- 输出：ZIP 文件名 `{album-or-stem}-cue-tracks.zip`；内部 `{nn} {title}.wav`（非法文件名字符替换为 `_`）。最多 **50** 轨。
- 核心规则 / 算法：读文件 → 体积预检 → HUD **Parse**（cue 文本：`FILE` 单文件、`TRACK nn AUDIO`、`INDEX 01 MM:SS:FF`）→ HUD **Decode**（WAV/BIN 字节切片优先；否则 `decodeAudioData`）→ 用户点 Split tracks → HUD **Split**（切点 `INDEX 01`，末轨 `[last, T]`；无 01 或 0 轨失败；超 50 硬失败）→ Download ZIP → HUD **Pack**；MP3 则先 **Encode**。失败明文，不静默截断。
- INDEX 公式：`seconds = mm * 60 + ss + ff / 75`（ff 为 0–74 的 CD 扇区）。BINARY `.bin`：每帧 2352 字节、44.1 kHz 16-bit 立体声，偏移 `(mm*60+ss)*75+ff` × 2352。
- 失败与边界行为：桌面 **80 MB** 或 **30 分钟**；窄屏约 **30 MB** / **10 分钟**。APE/TTA/WV：专用错误「this browser cannot decode APE; convert the image to WAV or FLAC and keep the same cue」。多 `FILE`：拒绝。无 AUDIO 轨 / 数据 MODE：拒绝。DRM / 视频：拒绝。
- 示例 Input → Output：内置 **6.00 s** 三段音（约 440 / 550 / 660 Hz 各 2 s）+ cue：`TRACK 01` Intro Tone `00:00:00`、`02` Middle Tone `00:02:00`、`03` Outro Tone `00:04:00` → **2.00 / 2.00 / 2.00 s**，ZIP 内 `01 Intro Tone.wav` 等。写进 H2 Example。
- **进页样例（必填）**：进页调用 `loadSample()`：填入上述 6 s 镜像 + cue 文本、Parse、Decode、**自动 Split tracks** 使 Download ZIP 可用且结果区显示 3 tracks（缓冲极小，允许自动跑；**不要**进页自动加载 JSZip / lamejs / 自动下载）。与 H2 Example 对齐。
- **进度 HUD（必填）**：对照 `/tools/batch-convert-web-pages-to-jpg`（`.bcw-hud`）。胶囊：**Parse** / **Decode** / **Split** / **Pack**（ZIP-MP3 时 Encode 出现在 Pack 前）。成功后保持卡片并指向已启用的 Download ZIP。不要只用一行 status。
- **实现防呆**：Page `opts` 签名；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/`。禁止 CDN。禁止本页叠静音/等时长/手标模式抢首屏。B 后 `npm run lint:tool-page -- --slug=split-a-disc-image-with-a-cue-sheet`。

### Rules 对照表草稿（可索引）

| Cue field | Meaning on this page |
|---|---|
| INDEX 01 MM:SS:FF | Track start (cut). 75 frames per second. |
| INDEX 00 | Pregap / HTOA marker; shown, not used as the default cut. |
| FILE … WAVE | PCM WAV (byte-slice when 16-bit PCM). |
| FILE … BINARY | CDDA `.bin` sectors of 2352 bytes. |
| FILE … MP3 | Decode via the browser, then cut. |
| Multiple FILE lines | Refused: already one file per track. |

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] 进度 HUD（金标；或交互规格已写不适用）
- [x] How it works
- [x] Why choose our {tool name} tools（How 之后；title 含工具名 + ≥3 条可验证差异）
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）— 非 YMYL，仅短版权句（文件须有权处理）
- [x] `03-locale-briefs.md` 已填（实现十语前）
