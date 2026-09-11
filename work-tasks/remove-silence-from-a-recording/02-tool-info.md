# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`remove-silence-from-a-recording`  
**路径**：`/tools/remove-silence-from-a-recording`  
**主方向**：A  
**YMYL**：否  
**primaryTopic（实现时）**：`sound-editor`

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 作业来源：`docs/sound-editor/12-slug-hub-and-scene.md` **S2**（scene：挖静音仍一文件；**不是** A3 切 ZIP）。  
> SERP 摘录与竞品缺口：`notes.md`。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 长录音里挖掉中间死气/长停顿，**仍一个更短文件** | remove silence from a recording；remove silence from audio；silence remover / 去除音频静音；去掉空白 | 本地文件 → 阈值检测 → 拼回一段 → 导出 WAV/MP3 | **默认**：单文件 dropzone；**Remove silence** 后 **Export WAV** / **Export MP3**；阈值 -40 dB、最短静音 0.5 s、切口保留 0.15 s |
| 搜 *delete silence* / *cut silence* / *truncate silence* / *remove dead air* | delete silence；cut silence；auto cut silence；truncate silence；remove dead air；strip silence | **同一作业**（近义不拆） | desc / FAQ / Use cases absorb；**不**开 `/delete-silence`、`/silence-remover`、`/truncate-silence` |
| 只要手标起止，不要自动挖中间 | trim audio；crop audio / 裁剪音频 | **邻作业 S1** | FAQ 一句：手裁去 `trim-an-audio-clip-and-export`；本页默认挖**中间**也挖两端 |
| 按停顿切成多段 ZIP | split audio by silence / 按静音分割音频 | **邻作业 A3** | 有意不满足进攻；FAQ 一句：本页拼回**一个**文件，不打包多段 |
| 只要掐掉头尾空白、中间不动 | auto-trim edges；trim silence from start and end | **本作业子集** | 默认算法已含两端；**不要**首屏第二模式抢主按钮；FAQ 说明「中间也会挖」 |
| 视频跳剪 / 去「嗯啊」填充词 | auto jump cut video；remove filler words；descript silence | **异意图** | 有意不满足；不收视频主输入；不做转写去 um/uh |
| 去底噪但仍保留时长 | noise reduction；denoise / 音频降噪 | **邻作业 S24** | 有意不满足；FAQ：静音切除缩短时长，降噪不缩短 |
| 从视频去掉整条音轨 | remove audio from video；mute video | **V1** | 有意不满足；H1 禁止 mute video |
| YouTube / 付费流媒体扒带 | youtube to mp3 | **drop** | FAQ 一句拒绝；无 URL 抓取 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：**remove silence from a recording**（用户指定任务句）；remove silence from audio；silence remover；次要 absorb：remove dead air；delete silence；cut silence；truncate silence；auto silence cutter；去除音频静音
- 用户真实任务：打开**已经在设备上的**一段录音（播客/会议/备忘录），自动找出够长的低音量空隙，挖掉后拼成**一个**更短、仍可播的文件，尽量不上服务器。
- [x] 竞品 SERP 前 5–10（公开页 2026-09-11，**无 Planner CSV**；详见 `notes.md`）：Vesta / Tembrica / Notevibes / AudioWave / FFmpeg Cookbook / 土薯 / netfisher / DuneTools / Hearably / Kapwing。形态分三类：① 上传云端再删（Vesta「处理完删除」）；② 浏览器 FFmpeg.wasm（netfisher 要先「加载 FFmpeg」）；③ 浏览器 Web Audio / RMS（Tembrica、Notevibes、Hearably）。多数把 **Remove all / Auto-trim edges / Split at silence** 三模式堆在同一页。Cleanvoice / Descript / Clipchamp 是账号+视频/转写。Audacity 手册占 *truncate silence* 信息意图。
- [x] 它们没讲清什么？（缺口）① 文件是否离开设备（上传站含糊「处理完删除」）；② 桌面/手机体积与时长帽（有的吹 1 GB，标签页会崩）；③ 阈值单位是相对满刻度 dBFS，以及嘈杂麦 vs 棚内该怎么调（有的页给滑条无表）；④ 切口保留（keep/padding）与「完全挖光听着像跳剪」的差别；⑤ 这是**一个文件**还是按静音切 ZIP；⑥ 与手裁 trim、与 Noise Gate（压安静段但不缩短）、与去填充词 不是同一作业；⑦ 古典/有意弱奏会被误切。
- [x] 我们补哪 ≥3 条增益：① Rules **对照表**：录音类型 → 建议阈值 / 最短静音 / 切口保留（播客 -40 dB / 0.5 s / 0.15 s；嘈杂 -30 dB / 0.8 s；棚内人声 -50 dB / 0.4 s）；② 结果区写清 **原时长 → 新时长、挖掉秒数、缩短百分比**（可索引 Example 用固定样例）；③ 本标签页 RMS、诚实帽（对齐 11 / S1：桌面约 40 MB / 20 分钟，窄屏约 20 MB / 8 分钟）、切口过零或极短淡化防咔哒；④ FAQ 划界 S1 手裁 / A3 切多段 / 降噪 / 视频跳剪 / Audacity Truncate Silence 是同一任务不同软件 / 扒带。
- [x] 长尾：*silence remover* / *delete silence* / *cut silence* / *remove dead air* / *truncate silence* / *strip silence* **合并进本页**，一带多场景；不满足 §3.3 拆页。*split by silence*、*remove audio from video*、*noise reduction* **不进进攻 H1**。
- [x] 权威来源 URL：https://manual.audacityteam.org/man/truncate_silence.html （Truncate Silence 定义：低于阈值且够长 → 缩短空隙；**不是** Noise Gate）；https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer ；https://ffmpeg.org/ffmpeg-filters.html#silenceremove （规则对照，实现仍用标签页 RMS，不把 FFmpeg 当卖点）
- [x] Use case 文案草稿：播客两人对谈中间的长停顿；会议录音里无人发言的空白；口播备忘录思考停顿，收成可转发的短 MP3。
- [x] 边界/失败：超帽拒绝；解码失败明文；整段都低于阈值 → 拒绝空文件并提示放宽最短静音/压低阈值；整段都没有够长静音 → 结果≈原时长，结果区写「0 s removed」；有意弱奏/古典乐 FAQ 警告；DRM / 视频主输入不收。
- [x] 结果区：解码后时长/采样率/声道；检出静音段数；挖掉秒数；裁后时长；Download 在 Remove silence 成功前 disabled。Example 固定 5.00 s 样例（两段短音夹 1.20 s 静音 ×2）→ 默认设置后约 **2.90 s**。
- [x] Related / 主题内链：`trim-an-audio-clip-and-export`、`file-metadata-analyzer`（均已上线）。禁止 related 未立项 Hub / A3。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 分窗 RMS：窗约 50 ms；`levelDb = 20 * log10(rms / peakFullScale)`；连续低于阈值且时长 ≥ 最短静音 → 挖掉，切口各留 keep 秒；默认 -40 dB / 0.5 s / 0.15 s |
| 2 | 边界/失败 | 超帽不 decode；不支持编码；空结果；0 s removed；视频/DRM 拒绝 |
| 3 | 场景语境 | 播客死气、会议空白、备忘录停顿；对照手裁 / 切多段 / 降噪 / 视频跳剪 |
| 4 | 对照表 | Rules：录音类型 × 阈值 × 最短静音（见交互规格） |
| 6 | 本地隐私 | 文件留在设备，不上服务器；lamejs 从本站 `/vendor/` 点后加载 |
| 8 | 数值示例 | 5.00 s 样例 → 挖两段 1.20 s 静音、各留 0.15 s → 约 2.90 s |
| 9 | 主题内链 | related S1 裁剪 + 文件元数据；主题 `sound-editor` 叶（实现并 build 后） |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 主题 `sound-editor` 的 **S2 单点页**（用户点名立项；Hub 另口令） |
| 场景与行业 | 本地录音自动去静音并导出**一个**文件 |
| 技术（包、Tier、本地处理） | Web Audio `decodeAudioData` + `AudioBuffer` 分窗 RMS（Tier 0–1）；WAV 封装；MP3：**lamejs 懒加载**（Tier 2）；`localProcessing: true`；禁止首屏 FFmpeg.wasm；禁止 iframe 第三方。本页**不是** AudioMass 宿主，也**不是** A3 多文件分割器。 |
| Catalog `page.style` | **opts** |
| Title (en) | **Remove silence from a recording** |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Remove silence from a recording on your device: cut dead air and long pauses, keep one shorter file, then download WAV or MP3—not uploaded. 紧跟 Steps/Example（阈值、最短静音、样例 5 s→约 2.90 s）。**同一作业全收**：remove silence from audio；silence remover；delete silence；cut silence；remove dead air；truncate silence；auto cut silence；strip silence；gap remover → desc + FAQ q2 + Use cases。异意图 split by silence / mute video / denoise 只 FAQ 划界。勿堆 Free/Online Best；勿写「不拆 URL」。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；无虚假评分） |
| FAQ 要点（≥3） | 会上传吗？和 silence remover / delete silence 是不是同一件事？和 Audacity Truncate Silence 比？阈值怎么选？会不会切掉气口/小声？和手裁 trim 有何不同？会不会切成很多文件？这是降噪吗？能处理视频/去 um 吗？上限多大？古典乐会误切吗？ |
| Disclaimer / References | 非 YMYL；Audacity Truncate Silence 手册 + MDN AudioBuffer + FFmpeg silenceremove 文档（对照规则，不承诺命令行等价）；用户须对文件有权处理 |
| related | `trim-an-audio-clip-and-export`, `file-metadata-analyzer` |
| 验收 | `coverage:gate` 0b（本步）→ 实现后 2→4；`verify:tool`；vendor 已有 lamejs 则不必新库 |
| 工期粗估 | 会话 B：复用 S1 解码/导出/HUD，加 RMS 检测与拼接；C：十语；D：ship。不要在本页加 Split ZIP 模式。 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-11 |
| slug 结论 | **保留** `remove-silence-from-a-recording`（情境=已有录音 + 动作=去掉静音 + 结果=仍一段可导出文件；用户点名；符合 §3.3 H。不是品类头词 `silence-remover` doorway，也不是 A3 `split-a-recording-on-silence`，也不是 S1 手裁） |
| 主检索词 → title/H1 | 英文 H1 **Remove silence from a recording**（任务句；含 remove silence / recording）。中文 H1 方向：**从一段录音里去掉静音**（勿硬塞「在线静音切除器」光杆）。他语见 `03` 当地检索句，禁止英模顿号枚举阈值/最短时长。 |
| 次要关键词 → desc / FAQ / Use cases | **见下方「同意图相关搜索词」全表**。摘要：silence remover / delete·cut silence / dead air / truncate·strip silence → desc + FAQ q2 + usecase；中文 去除音频静音 / 去掉空白 / 删除静音段 → zh desc + FAQ；头词 sound editor、split by silence、mute video、denoise → 划界不进 H1 |
| 用户搜索习惯判断 | 搜 silence remover / remove dead air / 去除静音 的人要**自动收紧一段录音再下载一个文件**，不是打开 DAW，也不是按停顿导出 ZIP。H1 禁 Silence Remover Online 光杆头词。desc 用自然句收齐近义，禁止页上关键词列表。PAA「how to remove silence in Audacity」用 FAQ 答同一任务，不改 H1 成 Audacity 教程站。 |
| 优化摘要 | 2026-09-11：对照 Vesta/Tembrica/Notevibes/Audacity Truncate Silence/土薯/日西德当地搜法，把同意图近义写入 desc/FAQ/Use cases；H1 锁定任务句而非品类头词；meta 前窗 Remove silence + dead air + 一个文件 + 不上服务器；明确不吸 split-by-silence / mute video / filler words。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=remove-silence-from-a-recording --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 同意图相关搜索词（页面生成必吸）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「同意图相关搜索词」。本表是 **title / description / FAQ / Use cases 的生成规格**。同一作业的相关搜索、PAA、自动完成、12 表 S2 搜法簇、竞品产品名须全部列入；近义可共用一句，禁止页上词云。`03` 每语 3–5 只定该语 H1 方向。来源：12 S2 + 2026-09-11 公开 SERP（`notes.md`）+ 十语当地说法。无本 slug Planner CSV。

### 必吸（同一作业：本地录音自动挖够长静音 → 导出一个更短文件）

| 相关搜法（须全部融入） | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| remove silence from a recording；remove silence from recording | absorb 主词 | en **H1** `Remove silence from a recording` | — |
| remove silence from audio；remove silence from an audio file；remove silence from audio file | absorb 次词 | en desc 前半 + usecase 1；How 动词 Remove silence | `/remove-silence-from-audio` |
| silence remover；online silence remover；audio silence remover；silence remover online | absorb 次词（品类头词不当 H1） | en desc also-called + FAQ q2 | `/silence-remover` |
| delete silence；delete silence from audio；delete silent parts；remove silent parts | absorb 次词 | en desc + FAQ q2 | `/delete-silence` |
| cut silence；cut silence from audio；cut out silence；cut silent parts；silence cutter | absorb 次词 | en desc + FAQ q2 | `/cut-silence`、`/silence-cutter` |
| remove dead air；cut dead air；dead air remover；remove dead space from audio | absorb 次词 | en desc + usecase 1（播客死气） | `/dead-air-remover` |
| truncate silence；audacity truncate silence；how to truncate silence | absorb 次词（PAA） | FAQ q3：同一任务（缩短空隙）；不是 Audacity 安装教程 | `/truncate-silence` |
| strip silence；pro tools strip silence | absorb 次词 | FAQ q2 一句（同一挖静音任务） | `/strip-silence` |
| auto cut silence；automatically remove silence；auto silence cutter；remove silence automatically | absorb 次词 | en How + FAQ q2（主按钮即自动） | `/auto-silence-cutter` |
| remove pauses from audio；cut long pauses；remove long pauses from podcast | absorb 次词 | usecase 1 + FAQ 气口：最短静音保住短停顿 | `/remove-pauses` |
| gap remover；remove gaps from audio；audio gap remover | absorb 次词 | en desc 或 FAQ q2 共用 silence/gap 句 | `/gap-remover` |
| remove blank audio；remove quiet parts from audio；cut quiet parts | absorb 次词 | FAQ 阈值句：安静≠数字零 | `/remove-quiet-parts` |
| silence trimmer；trim silence from audio（**含中间**，不是只掐头尾） | absorb 次词 | desc + FAQ vs S1：本页中间也挖 | `/silence-trimmer` |
| remove silence from mp3；remove silence from wav；mp3 silence remover；wav silence remover | absorb 次词 | dropzone 提示含 MP3/WAV + FAQ q2 | `/mp3-silence-remover` |
| remove silence from podcast；podcast silence remover；remove silence from interview | absorb 次词 | usecase 1 | `/podcast-silence-remover` |
| remove silence from voice memo；remove silence from voice recording | absorb 次词 | usecase 3 | `/voice-memo-silence` |
| how to remove silence from audio；how to cut out silences automatically | absorb 次词（PAA） | How 步骤 = 按钮原文；勿另开教程 URL | — |
| 从一段录音里去掉静音；去掉录音里的静音 | absorb 主词（zh） | zh **H1** + desc 前半 | — |
| 去除音频静音；去除静音；去掉静音；删除静音；删除静音段 | absorb 次词（zh） | zh desc + FAQ q2 | `/quchu-jingyin` |
| 去掉空白；去掉空白段；切除静音；静音切除；自动剪静音 | absorb 次词（zh） | zh desc + usecase | `/jingyin-qiechu` |
| 去掉停顿；去掉长停顿；播客去停顿；会议录音去空白 | absorb 次词（zh） | zh usecase 1–2 | — |
| eliminar silencios de una grabación；eliminar silencio del audio；quitar silencios；eliminador de silencios；aire muerto | absorb 次词（es） | es H1 用 grabación 任务句；其余 desc/FAQ | `/quitar-silencios` |
| إزالة الصمت من تسجيل؛ إزالة الصمت من الصوت؛ حذف الفجوات الصامتة؛ قص الصمت | absorb 次词（ar） | ar desc + FAQ | — |
| remover silêncios de uma gravação；remover silêncio do áudio；eliminar silêncios；cortar pausas | absorb 次词（pt） | pt desc + FAQ | `/remover-silencios` |
| hapus keheningan dari rekaman；buang jeda sunyi；potong bagian senyap；hapus silence audio | absorb 次词（id） | id desc + FAQ | — |
| supprimer les silences d’un enregistrement；enlever les silences；retirer les pauses；supprimer les blancs audio | absorb 次词（fr） | fr desc + FAQ | `/supprimer-silences` |
| 録音から無音を削除；無音部分削除；無音カット；無音を消す；沈黙を削除 | absorb 次词（ja） | ja **H1** 用録音から無音を削除；其余 desc/FAQ | `/muon-sakujo` |
| удалить тишину из записи；убрать паузы из аудио；вырезать тишину；удалить молчание | absorb 次词（ru） | ru desc + FAQ | — |
| Stille aus einer Aufnahme entfernen；Stille entfernen；Pausen löschen；Totluft entfernen；Stille rausschneiden | absorb 次词（de） | de **H1** 用 Aufnahme 任务句；其余 desc/FAQ | `/stille-entfernen` |

### 不吸（相关搜索里会出现、但不是本页进攻作业）

| 相关搜法 | 判定 | 页面生成落点 | 指向 |
|---|---|---|---|
| split audio by silence；split recording on silence；split mp3 on silence；按静音分割音频 | 有意不满足 | FAQ：本页拼回**一个**文件，不导出 ZIP 多段 | A3 `split-a-recording-on-silence`（未立项不 related） |
| auto-trim edges only；trim leading and trailing silence only（**只要两端、中间绝对不动** 当独立产品） | 有意不满足独立 H1 | FAQ：默认两端+中间都挖；若只要手掐头尾 → S1 | S1 |
| trim audio；crop audio；mp3 cutter；cut mp3 | 有意不满足进攻 | FAQ 划界到手裁页；related 链 S1 | S1 |
| remove audio from video；mute video；视频去除音轨 | 有意不满足 | FAQ；H1 禁止 mute video；不收视频主输入 | V1 |
| noise reduction；remove background noise；denoise；音频降噪 | 有意不满足 | FAQ：降噪不缩短时长；本页缩短 | S24 |
| remove filler words；remove um uh；descript filler | 有意不满足 | FAQ 一句：不识别「嗯」「uh」 | T7 / defer |
| jump cut video；auto editor video；clipchamp auto cut | 有意不满足 | FAQ：不做视频时间线跳剪 | 视频工具 / drop 网页实时 |
| sound editor；online audio editor；在线音频编辑器 | 有意不满足进攻 | FAQ 一句划界；**不进**本页 H1 | Hub |
| youtube to mp3；spotify rip | drop | FAQ 拒绝；无 URL 抓取 | — |
| noise gate；audacity noise gate | 有意不满足 | FAQ：Noise Gate 压低安静段，**不**缩短文件 | — |
| insert silence；add silence to audio | 有意不满足 | 不进 desc | Hub 以后 |
| ffmpeg silenceremove command | 有意不满足进攻 | References 可链文档；How 不写命令行当主路径 | — |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。`docs/sound-editor/12` 写明本簇 **未跑 Keyword Planner**；仓库内无本 slug 的 `*-keyword-planner.md`。Ahrefs 本回合不可用。

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`（写出文件名）

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner 表 |

- [x] 交互规格已按上表补齐能力（无 Planner 行可补；常规 0b 词已写入交互：检测 + Remove silence + 双导出 + 时长统计）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-11 |
| 总判 | **满足**：搜 remove silence from a recording / silence remover 的人打开页即单文件 + 自动挖静音 + 一个更短文件 + 导出 WAV/MP3，文件留设备。**有意不满足**：按静音切 ZIP（A3）、视频跳剪、去 um/uh、降噪、mute video、sound editor 进攻 H1、近义 silence-remover URL。**不超出**：首屏不放 Split 模式、不放视频 input、不放 FFmpeg 加载墙；desc 不写 doorway/工程自述；阈值滑条进高级设置，默认即可跑通。 |
| 主词搜索者任务 | 把本地录音里过长的安静空隙挖掉，下载还能播放的**一个**更短文件（播客死气、会议空白、备忘录停顿）。 |
| Ads/Planner 长尾任务 | **不适用**（无 Planner）。12 表 absorb 词 silence remover / 去除音频静音：同一控件能办成「去掉空白仍一段」。 |
| 满足之处 | How 先答「自动找出够长的静音并拼回一段」，再写 Open file →（可选调阈值）→ **Remove silence** → **Export WAV** / **Export MP3**。默认样例中间有静音，进页自动跑出更短结果与秒数统计。 |
| 超出 / 应划边界 | 竞品常把 Split at silence 做成第一模式 — **本页禁止**。Auto-trim edges 不作为第二主按钮。MP3 码率、阈值、最短静音、keep 放 `<details>`。古典/弱奏 FAQ 警告，不承诺「永不误切」。 |
| 缺口与已做优化 | 相对「用 Silence Remover 当 H1」：改回任务句。相对「和 trim 混页」：related 链 S1，FAQ 写中间也会挖。相对「三模式一页」：只做一文件拼接。How 动词对齐按钮。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file]`（非 multiple）。`accept` 与 S1 相同常见音频 MIME。显示文件名、解码后时长/采样率/声道。禁止云盘。禁止第二套 URL/视频输入抢首屏。
- 主按钮行只放动作：**Remove silence**（primary） / **Export WAV**（无处理后缓冲 disabled） / **Export MP3**（同上；首次点击才加载 lamejs） / **Load sample** / **Clear**。How 用词必须等于这些按钮。不要把阈值滑条放进主按钮行。
- 结果只读：Original duration；Silence found（段数）；Removed；New duration；可选缩短百分比。波形可标出将被挖掉的区间（只读预览，不是 DAW 多轨）。
- 高级设置（`<details>`，默认收起；不打开也能 Remove silence）：
  - 阈值 dB 滑条，默认 **-40**（范围约 -60…-20）
  - 最短静音秒，默认 **0.5**
  - 切口保留 keep 秒，默认 **0.15**
  - 可选芯片预设：**Speech**（默认）/ **Gentle**（-50 dB, 0.8 s, 0.25 s）/ **Tight**（-35 dB, 0.3 s, 0.08 s）
  - MP3 码率芯片 96 / **128** / 192 kbps
- 输出：处理后时长；**Download** 在 Remove silence 成功前 disabled。文件名建议 `{stem}-no-silence.wav` / `{stem}-no-silence.mp3`。
- 核心规则 / 算法：读文件 → 体积/时长预检 → HUD **Decode** → `decodeAudioData` → HUD **Detect**（约 50 ms 窗 RMS → dBFS；连续低于阈值且 ≥ 最短静音标为静音段）→ 用户点 Remove silence → HUD **Cut**（丢掉静音段内部，两端各留 keep；拼接；可选极短淡化或过零防咔哒）→ 内存中持有新 `AudioBuffer` → Export WAV 写 PCM；Export MP3 → HUD **Encode**（懒加载 lamejs）。失败：超帽、解码失败、结果缓冲为空 → 明文错误，不静默截断。
- 失败与边界行为：桌面 **40 MB** 或 **20 分钟**；窄屏（宽度小于 768px）约 **20 MB** / **8 分钟**（与 11 / S1 一致）。不支持的编码写「this browser could not decode …」。整段过静 → 「nothing left to keep, lower the threshold or raise the minimum gap」。0 s removed → 仍允许导出原缓冲并提示。DRM / 视频：拒绝。
- 示例 Input → Output：内置 **5.00 s** 合成样例：0.80 s 音 + **1.20 s** 静音 + 0.80 s 音 + **1.20 s** 静音 + 1.00 s 音。默认 -40 dB / 0.5 s / 0.15 s keep → 两段静音各留 0.15 s，Output 约 **2.90 s**（0.80+0.15+0.80+0.15+1.00）。写进 H2 Example。
- **进页样例（必填）**：进页调用 `loadSample()`：填入上述 5 s 样例、Decode、Detect、**自动 Remove silence** 使 Export 可用且结果区显示 5.00 s → 约 2.90 s（缓冲极小，允许自动跑；**不要**进页自动加载 lamejs / 自动 Export MP3）。与 H2 Example 对齐。
- **进度 HUD（必填）**：对照 `/tools/batch-convert-web-pages-to-jpg`（`.bcw-hud`）。胶囊：**Decode** / **Detect** / **Cut** / **Encode**（仅 MP3 导出出现 Encode）。成功后保持卡片并指向已启用的 Export 按钮。不要只用一行 status。
- **实现防呆**：Page `opts` 签名；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/`。禁止 CDN。禁止本页 Split ZIP。B 后 `npm run lint:tool-page -- --slug=remove-silence-from-a-recording`。

### Rules 对照表草稿（可索引）

| Recording type | Threshold | Min silence | Keep at cuts |
|---|---|---|---|
| Speech / podcast (default) | −40 dB | 0.5 s | 0.15 s |
| Noisy room / laptop fan | −30 dB | 0.8 s | 0.20 s |
| Quiet studio voice | −50 dB | 0.4 s | 0.15 s |
| Do not use on wide-dynamic music | — | — | FAQ: quiet passages are not “dead air” |

### How 步骤草稿（en 母版方向；按钮原文）

1. Open a recording (or click **Load sample**).
2. Leave the defaults, or open advanced settings to change threshold and minimum silence.
3. Click **Remove silence**.
4. Click **Export WAV** or **Export MP3**.

### Why choose 草稿（可验证差异，非快/免费）

1. One shorter file: gaps are cut and speech is stitched; this page does not download a ZIP of clips.
2. Defaults match spoken recordings (−40 dB / 0.5 s / 0.15 s keep); the result line shows seconds removed.
3. The file stays in this browser tab and is not uploaded; Export MP3 loads the encoder only when you click it.
4. Honest size/time cap instead of a 1 GB promise that crashes the tab.

### Converter SEO / UI 自检（立项）

- [x] Slug/H1 = 任务句，不硬刚 `silence remover` / `sound editor`
- [x] Meta 前 160 字符含 recording → 一个更短文件 + WAV/MP3 + 本标签页
- [x] How 用词 = Remove silence / Export WAV / Export MP3
- [x] 阈值、最短静音、keep、帽在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] 一种主输入；主按钮行无设置；Download 无产物禁用

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。下列为**实现时必须交付**的模块（本回合不写 `src/`）。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] 进度 HUD（金标；Decode / Detect / Cut / Encode）
- [x] How it works
- [x] Why choose our {tool name} tools（How 之后；title 含工具名 + ≥3 条可验证差异）
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [x] Disclaimer（非 YMYL：实现时用短版权/权利句即可，不必长医疗免责）
- [x] `03-locale-briefs.md` 已填（实现十语前）
