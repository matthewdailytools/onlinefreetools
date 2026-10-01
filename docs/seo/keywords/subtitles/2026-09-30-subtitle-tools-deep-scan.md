# 2026-09-30 字幕工具专项深度调研

本次是规划调研：**不新建工具、不建 `work-tasks/`、不改已有工具文案、不部署**。
接续 [`../industry-scan/2026-09-30-industry-tool-gap-scan.md`](../industry-scan/2026-09-30-industry-tool-gap-scan.md) §3.1「字幕与本地化」，对字幕方向做纵深调研。
结论写入 [`../../keyword-daily-pool.tsv`](../../keyword-daily-pool.tsv)（`seed_query=subtitles`，`source_batch=2026-09-30-subtitle-tools-deep-scan`）与 [`../../keyword-to-tool-tracker.md`](../../keyword-to-tool-tracker.md) 决策日志。

> **证据强度**：WebSearch 前 5 抽查 23 次（en 15 次；zh 3、es / de / ja / ru / ar 各 1），另读本站两页源码与 2026-09-21 待办评审。WebSearch ≠ 人工 Google/Bing SERP，`competition_tier` 均为**草稿**；未跑 Keyword Planner；本站字幕页 09-21 才上线，最近 GSC 导出（09-10）尚无字幕信号。

---

## 0. 结论速览

1. **字幕赛道已被「字幕工具站」整片占满**。subtitlekit、AllSubConverter、gottrix、subvideo.ai、CutConvert、SubExtractor、maestra、formatter 等站点，每家都铺了几十个字幕页面，且多数有 5–10 种语言版本、全部浏览器本地处理。本批 23 次抽查 **0 个 `long_gap`**，也没有 `locale_gap`：ja / ru / ar / de / es 的「字幕时间平移」前 5 都已有本地语言页面。
2. **本站最紧迫的不是新页，而是现有字幕页的能力真实性**：
   - `make-srt-subtitles-from-an-audio-file` 源码注释写明「无内置 Whisper/wasm；时间轴为识别时刻估算；文件路径依赖播放/环回；否则回退麦克风口述」；
   - 2026-09-21 待办评审指出，转写页调用无参数的 `recognition.start()`，按 MDN 默认识别**麦克风**，不能认定文件被直接识别；
   - 竞品（GhostVideo、Whisper Web、mytoolster、toolcascade）已在浏览器内跑 Whisper（transformers.js + WebGPU/WASM），首次下载 50–250 MB 模型后离线可用。

   页面标题承诺「从音频文件生成 SRT」，而实际能力不稳。这属于 people-first 层面的质量风险，应先核验再决定：接入本地 Whisper，或收窄文案承诺。
3. **上一轮 P1 的两条需要下调**：
   - `fix-out-of-sync-subtitles` 原设想的 IG 是「两点校准 + 帧率换算」，但 metool、voice2sub、syncflow 已在同一页提供整体偏移、首尾锚点线性拉伸和 23.976 / 25 fps 预设，这个 IG 已不成立，改为 P2；
   - `check-subtitle-reading-speed` 的 CPS / CPL 检查也已被 termiva、socaptions、AllSubConverter（含 CJK 计数）覆盖，维持 defer，但优先级降为 P2。
4. **若要做字幕簇，建议的形态**：
   - 先做一个共享的字幕解析 / 序列化模块（SRT / VTT / ASS / SBV / LRC + 编码检测），各页复用；
   - 每页只做一个作业（§3.3 H），**不按格式对拆页**（如 `srt-to-vtt`、`vtt-to-srt`、`ass-to-srt` 各一页），格式对放进同一转换页的芯片里，避免 doorway 与 scaled content；
   - 优先挑与本站已有簇相邻的作业：音频簇（LRC 歌词打点、烧录复用现有视频管线）和文本对比簇（字幕对比）。
5. 新入池 **16 行**：15 行 `defer`，1 行 `drop`（下载 YouTube 字幕）。其中 1 行落点是现有 slug（音频生成 SRT 补本地 Whisper）；另有 1 行（乱码修复）建议并入格式转换页，不单独建页。

---

## 1. 本站现状

| slug | 能力（按源码） | 问题 |
| --- | --- | --- |
| `make-srt-subtitles-from-an-audio-file` | 浏览器 `SpeechRecognition` 尽力生成 SRT；时间轴按识别时刻估算 | 文件识别依赖播放 + 系统内录，失败回退麦克风；无本地模型；只输出 SRT |
| `transcribe-an-audio-file-to-text` | 同上引擎，输出文本 | 09-21 评审：无参 `recognition.start()` 默认听麦克风 |
| `make-a-waveform-video-from-audio` | 画面采集 + MediaRecorder 生成视频 | 与字幕无直接关系，但证明本站视频管线可复用 |

- **没有任何处理已有 SRT / VTT 文件的工具**（转换、平移、清理、检查、合并均无）。
- 已 vendor、可复用的引擎：tesseract（PGS 图形字幕 OCR）、diff（字幕对比）、docx / xlsx（导出对照表）、jszip（批量下载）。
- **未 vendor**：transformers.js / Whisper 权重、ffmpeg.wasm、mediabunny、Matroska 解析器、OpenCC 词典。
- 现有视频工具（加音轨、换音轨、去音轨）用「画面采集 + MediaRecorder」实时录制，输出 WebM；烧录字幕可复用，但只能 1 倍速，长视频体验弱于竞品的 WebCodecs / ffmpeg.wasm。
- 09-08 已有语音转文字方案文档：`docs/2026-09-08-js-speech-to-text-solutions.md`（Web Speech / 本地 Whisper / Workers AI 三条路线，结论是文件转写走 Workers AI 或本地 Whisper）。

---

## 2. 竞品站点地图

### 2.1 字幕工具站（全品类，多语，本地处理）

| 站点 | 特点 |
| --- | --- |
| subtitlekit | 转换、平移、UTF-8 修复、MKV 提取、SUP→SRT（tesseract.js）、ASS→SRT，页面有 ru / ar / zh 等版本 |
| AllSubConverter | 批量转换（200 个文件、12 种输入格式含 SCC / STL / TTML）、字幕 diff、统计 + CPS |
| gottrix | 烧录（mediabunny + WebCodecs）、平移、编码修复，ja / ar / zh 页面 |
| subvideo.ai | 双语合并（容差 0 / 250 / 500 / 1000 ms）、平移、FPS 换算、TXT→SRT，多语 |
| CutConvert | SRT→SCC（CEA-608，参考解码器验证）、SRT→DOCX、TXT→SRT（按总时长拟合），部分功能收费 |
| SubExtractor | 硬字幕 OCR、SUP→SRT、字幕 diff |
| maestra / formatter / captioner | 平移页多语（es / de / ar / ru / ja） |
| findutils / picute | 清理听障标签、ASS 转 SRT，细节说明到位 |

### 2.2 单点工具（示例）

- 格式转换：SubtoVTT、subtitlebatchtool、Subformer、Novus Convert
- 时间轴：metool（偏移 + 首尾锚点 + fps）、voice2sub、syncflow（含波形 + Whisper）、digtools（ja）、subshift（ru）
- 双语合并：subtitletoolbox、mp3to.cc、voiceflow
- 乱码修复：subtitlesedit、365工具箱（按 CJK 占比打分猜编码，zh）
- 清理：subtitletools、translatesubtitles、Subtitle Edit（桌面）
- TXT→SRT：Voqusa、SayScribe、caption-x
- 烧录：SubHero、DuckConvert（ffmpeg.wasm，1.5 GB）、AntiUpload（libass）、skycally（Canvas + MediaRecorder，和本站管线同类）
- 提取：subtitletoolkit、arayofsunshine、sysfenix（ffmpeg.wasm）
- Whisper 生成：GhostVideo、Whisper Web、mytoolster、toolcascade、gate32（开源）
- LRC：TinyToolz、subtitletools、LrcSong、freebeat
- 翻译：SubLingo、AnyTool（Chrome 138+ 内置 AI 本地翻译）、mindstamp、wutools（MyMemory / LibreTranslate）
- 广播格式：Rev、CutConvert、pixazo
- 统计：toolwasp、subtitlist、AnyCount（桌面）
- 导出文档：conversiontools（SRT→XLSX）、ScribeToAny、ReelTranscript
- 繁简：zm.i8k.tv（字幕工具箱）、how7o、lab.sorz.org

### 2.3 头部平台（SaaS）

VEED、Kapwing、HappyScribe、Maestra、Rev：生成 / 翻译 / 烧录一体，免费档有水印或额度。它们占据「auto subtitle generator」「add subtitles to video」等头词。

---

## 3. 品类矩阵

| 作业 | 本站 | tier（草稿） | 可复用引擎 | 判断 |
| --- | --- | --- | --- | --- |
| 音频 / 视频生成 SRT（本地 Whisper） | 有页，能力存疑 | mid_covered | 无（需 vendor transformers.js + 权重） | **P0 核验**，落点现有 slug |
| 格式互转（SRT / VTT / ASS / SBV / LRC）+ 编码修复 | 无 | head | 纯 JS | P1：作为字幕簇基础页 |
| 时间轴平移 / 两点校准 / fps | 无 | mid_covered | 纯 JS | P2（上一轮 P1 下调） |
| 阅读速度 QC（CPS / CPL / 重叠 / 最短时长） | 无 | mid_covered | 纯 JS | P2（上一轮 P1 下调）；字数统计并入此页 |
| 清理听障标签 / 样式标签 | 无 | mid_covered | 纯 JS | P2 |
| 双语合并 | 无 | mid_covered（zh） | 纯 JS | P2 |
| 烧录字幕进视频 | 无 | mid_covered | MediaRecorder 管线（实时） | P2 |
| LRC 歌词打点 | 无 | mid_covered | `<audio>` + 纯 JS | P2：与音频簇相邻 |
| TXT → SRT（按阅读速度估时长） | 无 | mid_covered | 纯 JS | P3 |
| 蓝光 PGS（.sup）→ SRT | 无 | mid_covered | tesseract + 需写 PGS 解码 | P3 |
| MKV / MP4 内嵌字幕提取 | 无 | mid_covered | 需 Matroska / MP4 解析器 | P3 |
| 字幕翻译（保留时间轴） | 无 | mid_covered | 引擎未定 | P3 |
| SRT → SCC（CEA-608 广播） | 无 | mid_covered | 纯 JS，但编码规则复杂 | P3 |
| 两份字幕对比 | 无 | mid_covered | diff（已 vendor） | P3：与文本对比簇相邻 |
| SRT → Word / Excel 对照表 | 无 | mid_covered | docx / xlsx（已 vendor） | P3 |
| 字幕繁简转换 | 无 | mid_covered（zh） | 需 OpenCC 词典 | P3 |
| 硬字幕 OCR（从画面识别） | 无 | mid_covered | tesseract，但逐帧识别在浏览器里很慢 | 不入池，成本过高 |
| 下载 YouTube 等平台字幕 | 无 | — | 需服务端代取 | **drop** |

---

## 4. 多语种观察

| 语种 | 本地搜法 | 前 5 情况 | 备注 |
| --- | --- | --- | --- |
| zh | 双语字幕合并、字幕乱码 GBK 转 UTF-8、字幕繁简转换 | subvideo.ai(zh)、subtitletoolbox(zh)、365工具箱、gottrix(zh)、zm.i8k.tv | 国内字幕多为 GBK / Big5；B 站、YouTube 要求 UTF-8 无 BOM |
| ja | 字幕 タイミング ずらす、文字化け | digtools、formatter(ja)、gottrix(ja)、convertr(ja) | 旧字幕常见 Shift_JIS |
| ru | синхронизировать субтитры、сдвиг времени | formatter(ru)、subtitlekit(ru)、subshift | 旧字幕常见 Windows-1251 |
| es | sincronizar subtítulos、adelantar / retrasar | captioner(es)、subvideo(es)、maestra(es)、jjlmoya | 用户常分不清正负号方向，页面要写清「字幕早于声音 → 正值」 |
| de | Untertitel synchronisieren、Framerate | subvideo(de)、maestra(de)、metool、voice2sub(de) | FPS 漂移（25 ↔ 23.976）被显式讨论 |
| ar | مزامنة ملف الترجمة srt | subvideo(ar)、subtitlekit(ar)、maestra(ar)、gottrix(ar)、Kapwing(ar) | 右到左文字，烧录时需验证排版 |

**CJK 阅读速度**：英文成人常用 17 CPS / 42 CPL（Netflix Timed Text Style Guide）；中文、日文每秒字数阈值明显更低，常见 9–12。十语页面应按语种给默认阈值，这是少数仍可写出差异的点。

---

## 5. 各候选说明

### 5.1 P0：现有 `make-srt-subtitles-from-an-audio-file` 能力核验

- **先做**：按 09-21 评审建议，实测戴耳机、拒绝麦克风权限、不同浏览器、真实音频文件四种情况，确认文件到底有没有被识别。
- **若要补能力**：按 09-08 方案接入 transformers.js + `whisper-tiny`（多语，量化后数十 MB），进页零请求、点击后加载，权重入库 `public/vendor/`（本站禁止 CDN）。须先做 POC，评估仓库体积与手机内存。
- **若不补**：收窄标题和描述，写清「需要播放音频并允许麦克风 / 内录」，避免承诺做不到的文件转写。
- **输出**：同时提供 SRT 与 VTT。
- 同一结论适用于 `transcribe-an-audio-file-to-text`。

### 5.2 P1：`convert-subtitle-files-between-srt-vtt-and-ass`

- **场景**：拿到的字幕格式不对（播放器、网页 `<track>`、剪辑软件、YouTube 各要不同格式），或打开是乱码。
- **能力**：SRT / VTT / ASS / SSA / SBV / LRC 互转；编码自动检测（BOM → UTF-8 严格校验 → GB18030 / Big5 / Shift_JIS / Windows-1251 / Windows-1252 候选打分），允许手动覆盖，可选输出带或不带 BOM；批量 + ZIP。
- **IG**：转换前后逐条预览；把 ASS 丢失的内容（定位、卡拉 OK 逐字时间、矢量绘图）明确列出，而不是静默丢弃；给出各平台要求对照（YouTube / B 站要 UTF-8 无 BOM）。
- **边界**：tier 为 head，H1 用场景句，不硬刚「srt to vtt」。

### 5.3 P2 组

- `fix-out-of-sync-subtitles`：整体偏移 + 首尾两点线性校准 + fps 预设放在一页；IG 只剩「用三个锚点自动判断是固定偏移还是线性漂移，并推荐方法」，需在立项时再验证是否成立。
- `check-subtitle-reading-speed`：逐条 CPS / CPL / 行数 / 时长 / 间隔 / 重叠，按语种给默认阈值（含 CJK），导出问题清单；字数与字符统计（译者报价用）并入本页，不另建统计页。
- `clean-hearing-impaired-tags-from-subtitles`：方括号、圆括号、音符、说话人标签、样式标签分别开关；清空的条目删除并重新编号；时间轴不动。
- `merge-two-subtitle-files-into-bilingual`：主文件定时间轴，副文件按容差匹配；未匹配条目单独列出；上下顺序可选。
- `burn-subtitles-into-a-video`：复用现有 MediaRecorder 管线，在 canvas 上逐帧叠字；须如实写明「实时录制，耗时等于视频时长，输出 WebM」，并实测右到左文字与 CJK 字体。
- `sync-song-lyrics-to-lrc-by-tapping`：播放音频、逐行按键打点、整体偏移、导出 `.lrc`；与本站 20 余个音频工具相邻，可从音频簇互链。

### 5.4 P3 组

`convert-text-to-srt-with-timing`、`convert-blu-ray-sup-subtitles-to-srt`、`extract-subtitles-from-an-mkv-file`、`translate-subtitles-and-keep-timestamps`、`convert-srt-to-scc-for-broadcast`、`compare-two-subtitle-files`、`export-subtitles-to-a-word-table`、`convert-chinese-subtitles-between-simplified-and-traditional`。

- 翻译：引擎是关键。Chrome 内置翻译 API 可本地运行，但浏览器覆盖面窄；Workers AI 需要上传文本。两条路都需在页面如实写明。
- SCC：CEA-608 字符映射、奇偶校验、每帧 2 字节带宽调度、29.97 丢帧时间码都要实现，错误成本高。
- 繁简：OpenCC 词典体积需评估；需保护 ASS 标签不被转换。

### 5.5 drop

- **下载 YouTube 等平台字幕**：浏览器无法跨域读取平台字幕，必须由服务端代取第三方平台内容，既不符合本站「文件在本地处理」的定位，也有平台条款风险。
- **硬字幕 OCR**：逐帧解码 + tesseract 在浏览器内很慢，竞品已用 PaddleOCR / 视觉模型；不入池。

---

## 6. 建议下一步

1. **先做 P0 核验**（不涉及新 URL）：实测两页的文件识别能力，得出「补本地 Whisper」或「收窄文案」的决定。改动走 `tool-coverage-pass` 与十语重写，并跑 `npm run verify:tool -- --slug=make-srt-subtitles-from-an-audio-file`。
2. 若确定建字幕簇：先立项 `convert-subtitle-files-between-srt-vtt-and-ass`，同时产出共享解析模块；之后的 P2 页都复用它，每页一个作业。
3. 任何新 URL 转 `build` 前：人工 Google + Bing 前 5–10、Keyword Planner 量级、使用场景表；由用户明确「立项 / 实现 {slug}」后再开 `work-tasks/`。

---

## 7. 证据链接（抽样）

- 格式转换：[AllSubConverter](https://www.allsubconverter.com/batch-converter/)、[SubtoVTT](https://subtovtt.com/)、[Subformer](https://subformer.com/en-US/srt-to-vtt)
- 双语合并：[subvideo.ai zh](https://subvideo.ai/zh/subtitle-merger)、[subtitletoolbox zh](https://subtitletoolbox.com/zh/dual-subtitles/)
- 清理：[picute](https://picute.net/en/tools/subtitle-cleaner)、[findutils](https://findutils.com/media/subtitle-cleaner/)、[Subtitle Edit 文档](https://subtitleedit.github.io/subtitleedit/features/remove-text-hi.html)
- 乱码：[subtitlesedit](https://subtitlesedit.com/subtitle-encoding-fixer)、[365工具箱](https://www.toolbox365.cn/tools/subtitle-convert/)、[gottrix zh](https://gottrix.app/zh/xiufu-zimu-bianma)
- ASS→SRT：[findutils](https://findutils.com/convert/ass-to-srt/)、[how7o](https://www.how7o.com/tools/ass-to-srt/)
- TXT→SRT：[caption-x](https://caption-x.com/txt-to-srt)、[Voqusa](https://www.voqusa.com/en/tools/txt-to-srt)
- 烧录：[gottrix](https://gottrix.app/en/burn-subtitles-into-video)、[DuckConvert](https://duckconvert.com/add-subtitles/)、[skycally](https://skycally.com/tools/add-subtitles)
- 提取：[subtitlekit](https://subtitlekit.com/en/extract-subtitles-from-video/)、[sysfenix](https://sysfenix.com/extract-subtitles/)
- Whisper：[GhostVideo](https://ghostx.tools/video/subtitles)、[Whisper Web](https://whisperweb.dev/generate-subtitles)、[gate32](https://github.com/ilcapo32-blip/gate32)
- LRC：[TinyToolz](https://tinytoolz.app/lrc-maker/)、[LrcSong](https://lrcsong.com/tools/lrc/manual)
- 广播：[CutConvert SCC](https://cutconvert.com/srt/scc)、[Rev](https://www.rev.com/apps-and-tools/caption-converter)
- 翻译：[AnyTool](https://www.anytool.tech/subtitle-translator)、[wutools](https://wutools.com/video/subtitle-translator)
- 时间轴：[metool](https://metool.online/videos/subtitleSync/)、[voice2sub de](https://tools.voice2sub.pro.vn/de/subtitle-time-shifter/)、[syncsubtitle](https://syncsubtitle.com/)、[digtools ja](https://tools.digrart.jp/subtitle-shifter/)、[subshift ru](https://subshift.losthost.org/?l=ru)
- PGS：[subtitlekit SUP](https://subtitlekit.com/en/sup-to-srt/)、[sup-to-srt.com](https://sup-to-srt.com/)
- diff / 统计 / 导出：[AllSubConverter diff](https://www.allsubconverter.com/subtitle-diff/)、[AllSubConverter statistics](https://www.allsubconverter.com/subtitle-statistics/)、[conversiontools](https://conversiontools.io/convert/srt-to-excel)
- 繁简：[字幕工具箱](https://zm.i8k.tv/)、[ass-hanvert](https://github.com/oborozuk1/ass-hanvert)
- 本站依据：`src/pages/makeSrtSubtitlesFromAnAudioFilePage.ts`（第 33–34 行注释）、`docs/seo/reviews/2026-09-21/tool-backlog-priority.md` 第 15 行、`docs/2026-09-08-js-speech-to-text-solutions.md`
