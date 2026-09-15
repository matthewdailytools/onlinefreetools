# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`record-a-voice-memo-in-the-browser`  
**路径**：`/tools/record-a-voice-memo-in-the-browser`  
**主方向**：A  
**YMYL**：否  
**primaryTopic**：`sound-editor`

> 依据：`docs/2026-07-28-tool-direction.md` A.3、`docs/sound-editor/12-slug-hub-and-scene.md` S7、Google people-first 规则。实时 SERP 接口本轮无结果；无 Planner 数据，不虚构排名或量级。

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 本页默认 / 边界 |
|---|---|---|
| 临时录一句语音备忘并下载 | record a voice memo in the browser；voice recorder；record audio online | 点 Start recording 才请求麦克风；Stop 后试听和 Download recording |
| 线上试麦并看输入电平 | online mic；mic recorder；microphone test recording | 实时电平条、计时、暂停/继续；不是纯设备诊断页 |
| 录旁白/发音练习草稿 | voice memo recorder；audio recorder online | 单次最长 10 分钟；下载浏览器原生容器 |
| 编辑、降噪、转写或 MP3 固定格式 | sound editor；noise reduction；speech to text；mp3 recorder | 有意不满足；FAQ/related 划界 |

## IG 预审

- 主词：**record a voice memo in the browser**；次词 voice recorder、record audio online、online mic、microphone recorder、voice memo recorder。
- 用户任务：允许麦克风、看到确实有声音进入、录制/暂停/停止、试听并保存文件，录音不上服务器。
- 基线：同类页通常提供 Record/Stop、计时、试听、下载；浏览器对 MIME/扩展名支持不同。
- 缺口：权限拒绝后怎么办；是否上传；实际下载格式；静音输入提示；上限与标签页关闭后丢失；是否能边录边看电平。
- 增益：① Rules 显示浏览器选中的真实 MIME/扩展名；② 实时电平+静音提示；③ 10 分钟帽和标签页生命周期；④ 权限/无输入/不支持的明确错误；⑤ 自动样例不索取权限。
- 长尾：同意图近义自然融入 desc/FAQ/Use cases，不拆 voice-recorder / online-mic URL。
- References：https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia 、https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
- Use cases：快速口述待办；录短旁白草稿；在通话前录放一次检查麦克风。
- 边界：须安全上下文；用户明确授权；拒绝权限/无麦克风/浏览器不支持；10 分钟自动停止；不保证 MP3；刷新或关闭页会丢失未下载录音。
- Example：Load sample 在内存生成约 3 秒 WAV，进入 Ready，可试听与下载；不会打开麦克风。
- Related：`trim-an-audio-clip-and-export`、`make-a-30-second-mp3-ringtone`。

### 计划勾选的 §3.1 维度

| # | 维度 | 本页体现 |
|---|---|---|
| 1 | 规则 | Permission → Recording → Ready 状态；10 分钟帽；浏览器 MIME 选择顺序 |
| 2 | 边界/失败 | 权限、设备、静音、格式、安全上下文和生命周期 |
| 3 | 场景语境 | 备忘、旁白草稿、试麦 |
| 5 | 权威引用 | MDN getUserMedia / MediaRecorder |
| 6 | 本地隐私 | 麦克风流与 Blob 留设备，不上传服务器 |
| 8 | 数值示例 | 约 3 秒内存 WAV 样例 |
| 9 | 主题内链 | 裁剪与铃声 related |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | `sound-editor` S7 scene |
| 技术 | 原生 getUserMedia + MediaRecorder + AnalyserNode；Tier 0–1；无包；localProcessing true |
| Catalog `page.style` | **opts** |
| Title (en) | **Record a voice memo in the browser** |
| Description 要点 | Record a voice memo in your browser, watch the microphone level, pause or resume, then play and download it. Audio stays on the device and is not uploaded. Example: Load sample makes a 3-second WAV without requesting mic access. |
| FAQ | 上传吗；voice recorder/online mic 是否同一任务；为什么不是 MP3；权限拒绝；时长帽；刷新后是否保留；编辑/转写边界 |
| related | `trim-an-audio-clip-and-export`, `make-a-30-second-mp3-ringtone` |
| 验收 | coverage 0b→2→4→all；lint page；verify tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-15 |
| slug 结论 | 保留场景任务句 `record-a-voice-memo-in-the-browser`；不使用品类头词 `/voice-recorder` 或 `/online-mic` |
| 主检索词 → title/H1 | `Record a voice memo in the browser` 完整落入英文 H1；各语采用当地“浏览器录语音备忘”任务句 |
| 次要关键词 → desc / FAQ / Use cases | voice recorder、record audio online → desc/FAQ；online mic、microphone recorder → FAQ/试麦 use case；audio recorder → desc |
| 用户搜索习惯判断 | 头词常用 voice recorder，但场景句仍自然可点且避免与未来 Hub 抢头词；按钮使用 Start recording / Stop / Download recording |
| 优化摘要 | 从泛 Voice Recorder 收紧为“浏览器录一段备忘并下载”；增加电平、真实格式、权限和不上传边界 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| record a voice memo in the browser | absorb 主词 | en H1 | — |
| voice recorder；online voice recorder；free voice recorder | absorb 次词 | desc + FAQ q2 | `/voice-recorder` |
| record audio online；record voice online；browser audio recorder | absorb 次词 | desc + How | `/record-audio-online` |
| online mic；mic recorder；microphone recorder | absorb 次词 | FAQ q2 + usecase 3 | `/online-mic` |
| voice memo recorder；record a memo | absorb 次词 | usecase 1 + FAQ | `/voice-memo-recorder` |
| 在线录音；网页录音；录音机；麦克风录音 | absorb（zh） | zh H1/desc/FAQ | `/在线录音` |
| grabadora de voz online；grabar audio online | absorb（es） | es H1/desc/FAQ | — |
| مسجل صوت اون لاين；تسجيل صوت من المتصفح | absorb（ar） | ar H1/desc | — |
| gravador de voz online；gravar áudio online | absorb（pt） | pt H1/desc | — |
| perekam suara online；rekam suara di browser | absorb（id） | id H1/desc | — |
| enregistreur vocal en ligne；enregistrer sa voix | absorb（fr） | fr H1/desc | — |
| ブラウザ録音；ボイスレコーダー；マイク録音 | absorb（ja） | ja H1/desc/FAQ | — |
| диктофон онлайн；записать голос онлайн | absorb（ru） | ru H1/desc | — |
| sprachmemo im browser aufnehmen；online sprachrekorder | absorb（de） | de H1/desc | — |
| mp3 recorder；record mp3 online | 有意不满足格式 | FAQ：下载浏览器实际支持格式，不承诺 MP3 | — |
| sound editor；trim audio；noise reduction | 有意不满足 | FAQ + related | Hub/S1 |
| speech to text；transcribe audio | 有意不满足 | FAQ | A4 |
| call recorder；system audio recorder | drop/有意不满足 | FAQ：只录已授权麦克风，不录系统/通话 | — |

- [x] 上表已列全本意图相关搜索。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表。

## Ads / Keyword Planner 长尾

- [x] 不适用（仓库无本 slug Planner / Ads 分析）。
- [x] 交互规格无需补 Planner 能力。

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-15 |
| 总判 | **满足**：首屏完成授权、录音、暂停/继续、停止、试听和下载；不超出为编辑器或转写器 |
| 主词搜索者任务 | 用当前麦克风录一段语音，确认有输入，保存可播放文件 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 明确 Start/Stop/Download；计时和电平；Ready 后试听；格式如实显示 |
| 超出 / 应划边界 | 不加上传文件、STT、云保存、系统音频、通话录制、编辑器或 MP3 假承诺 |
| 缺口与已做优化 | How 增加权限步骤；FAQ 增加格式、刷新丢失和权限；样例不触发权限 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格

- 输入：唯一主输入是用户授权的麦克风；设备下拉只在授权后显示可用音频输入。
- 动作：Start recording；Pause/Resume；Stop；Play/Pause；Download recording；Load sample；Clear。
- 输出：录音时长、真实 MIME/扩展名、音频播放器和下载文件 `voice-memo-YYYYMMDD-HHMMSS.ext`。
- 规则：最长 10 分钟自动 Stop；选择浏览器支持的 WebM/Opus、Ogg/Opus 或 MP4，按实际类型命名；不转码。
- 失败：非安全上下文、不支持、权限拒绝、无设备、空 chunks、流中断均显示可操作错误。
- **进页样例**：`loadSample()` 生成约 3 秒 WAV 并进入 Ready；不请求麦克风，不自动播放或下载。
- **进度 HUD**：Permission / Recording / Ready 胶囊；录音按 10 分钟帽显示百分比、秒数和电平；Stop 后保持 100% 并指向 Download。
- **实现防呆**：opts；内联模板转义；`lint:tool-page`。

## 页面模块清单

- [x] H1 + 摘要；首屏真实交互；自动样例；明显 HUD
- [x] How；Why choose；Rules；Example；Use cases；FAQ；Related；References
- [x] `03-locale-briefs.md` 已填
