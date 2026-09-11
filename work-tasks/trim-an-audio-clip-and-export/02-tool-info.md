# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`trim-an-audio-clip-and-export`  
**路径**：`/tools/trim-an-audio-clip-and-export`  
**主方向**：A  
**YMYL**：否  
**primaryTopic（实现时）**：`sound-editor`（本回合新建主题 id；**未点名不建** Hub slug `edit-audio-on-waveform`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 作业来源：`docs/sound-editor/12-slug-hub-and-scene.md` **S1**（hub 且 scene：进页=起止+导出，**不是缩小 DAW**）。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 去掉片头片尾或只留一句，导出可发文件 | trim audio；trim an audio clip；crop audio / 裁剪音频；在线剪音频 | 本地文件 → 设起止 → 导出 WAV 或 MP3 | **默认**：单文件 dropzone；Start / End；**Trim** 后 **Export WAV** / **Export MP3** |
| 搜 *mp3 cutter* / *cut mp3* 的快剪站意图 | mp3 cutter；cut mp3；audio trimmer；mp3 剪切；剪 mp3 | **同一作业**（近义不拆） | 芯片/FAQ absorb；**不**开 `/mp3-cutter`、`/cut-mp3`、`/audio-trimmer` |
| 要 30 秒铃声 + 淡化规格 | ringtone maker；mp3 to ringtone / 铃声制作 | **邻作业 S6** | FAQ 一句：本页可裁到约 30s；无 M4A、无自动淡化；不改 H1 |
| 要在波形上精剪、效果、多轨 | sound editor；online audio editor / 在线音频编辑器 | **Hub 作业 H0** | 有意不满足进攻；主题 FAQ 说明 Hub 是另一 slug；本页禁止做成缩小 DAW |
| 整段 WAV→MP3、不裁 | wav to mp3 | **pair P1** | FAQ：不裁可 Start=0 End=全长后 Export MP3；不另开转换 URL |
| 从视频抽音 | extract audio from video | **A1** | 有意不满足；不收视频容器当主输入 |
| 按静音切成 ZIP 多段 | split audio by silence | **A3** | 有意不满足 |
| YouTube / 付费流媒体扒带 | youtube to mp3；spotify rip | **drop** | FAQ 一句拒绝；不提供 URL 抓取 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：**trim an audio clip and export**（用户指定任务句）；trim audio；crop audio；次要 absorb：mp3 cutter；cut mp3；audio trimmer；在线剪音频
- 用户真实任务：打开**已经在设备上的**一段录音/歌曲，标出要保留的起止时间，下载 WAV（无损切片）或 MP3（有损、体积小），文件尽量不上服务器。
- [x] 竞品 SERP 形态（公开页常识 + 12 表，**本 slug 无 Keyword Planner CSV**）：mp3cut / 123apps / Clideo 类为**上传裁剪站**，吹格式数量、铃声、常有账号/水印；云 DAW（Kapwing 等）要登录。本站差异应是**本标签页解码**、明确帽、过零点说明、WAV 与 MP3 分按钮，而不是再做一个上传站。
- [x] 它们没讲清什么？（缺口）① 文件是否离开设备；② 切点是否贴过零点（可闻咔哒）；③ 桌面/手机体积与时长帽；④ WAV 导出 vs MP3 码率何时加载编码器；⑤ 这是裁一段还是完整波形编辑器；⑥ 失败是拒绝解码还是 silently 截断。
- [x] 我们补哪 ≥3 条增益：① 过零点吸附（Rules + 可选高级设置，默认开）；② 文件帽拒绝解码（桌面约 40 MB / 20 分钟；窄屏约 20 MB / 8 分钟，对齐 `docs/sound-editor/11-executable-plan.md`）；③ 本标签页处理 + Export MP3 点后再懒加载 lamejs；④ FAQ 划界 Hub / 铃声 / 视频抽音 / 扒带。
- [x] 长尾：*mp3 cutter* / *cut mp3* / *audio trimmer* / *crop audio* **合并进本页** desc/FAQ/Use cases，满足一带多场景；不满足 §3.3 拆页。头词 *sound editor* **不进本页进攻 H1**（留给主题叶与将来 Hub）。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer ；https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData
- [x] Use case 文案草稿：播客去掉 8 秒片头；会议录音只留 12 秒金句发聊天；备忘录裁掉两端空白再存 MP3。
- [x] 边界/失败：超帽拒绝；浏览器 `decodeAudioData` 不支持的编码失败明文；Start≥End 拒绝 Trim；DRM / 视频主输入不收；不承诺「300 种格式」。
- [x] 结果区：时长、采样率、声道；裁后时长；Download 在 Trim 成功前 disabled。Example 固定 5s 样例音、默认保留 1.00–3.00s。
- [x] Related / 主题内链：`file-metadata-analyzer`、`file-hash`（均已上线）。**禁止** related 指向未立项的 `edit-audio-on-waveform`。主题叶 `/topics/sound-editor` 在工具上线并 `build:site` 后才有实质网格。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 采样点切片：`startSample = round(startSec * sampleRate)`；默认向最近过零点吸附；WAV 写 PCM 头；MP3 用 lamejs CBR（默认 128 kbps，高级设置可改） |
| 2 | 边界/失败 | 超帽不 decode；不支持编码；Start≥End；空文件；用户取消 HUD |
| 3 | 场景语境 | 播客片头、会议金句、备忘录去空白；对照「完整编辑器 / 铃声规格 / 视频抽音」 |
| 6 | 本地隐私 | 文件留在设备，不上服务器；lamejs 从本站 `/vendor/` 点后加载 |
| 8 | 数值示例 | 5.00s 样例 → Trim 1.00–3.00s → 约 2.00s WAV；可选 128 kbps MP3 |
| 9 | 主题内链 | related 文件检视/哈希；主题 `sound-editor` 叶（实现并 build 后） |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 新主题 `sound-editor` 的 **S1 单点页**（P0 场景工具；Hub 另口令） |
| 场景与行业 | 本地音频起止裁剪并导出 |
| 技术（包、Tier、本地处理） | Web Audio `decodeAudioData` + `AudioBuffer` 切片（Tier 0–1）；WAV 封装自写或现有小工具函数；MP3：**lamejs 懒加载**（Tier 2，点 Export MP3）；`localProcessing: true`；禁止 iframe audiomass.co；禁止 Wavacity；禁止首屏 FFmpeg。本页**不是** AudioMass 整树宿主（那是 Hub）。 |
| Catalog `page.style` | **opts** |
| Title (en) | **Trim an audio clip and export** |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Trim audio on your device: crop a local clip to start and end times, then download WAV or MP3—the file is not uploaded. 紧跟 Steps/Example（含波形点选）。**同一作业全收**：trim audio；trim an audio clip；crop audio；cut audio；audio trimmer；audio cutter；mp3 cutter；mp3 trimmer；cut mp3；trim mp3；crop mp3 → desc + FAQ q2 + Use cases。头词 sound editor 仍只 FAQ 划界。勿堆 Free/Online；勿写「不拆 URL」。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；无虚假评分） |
| FAQ 要点（≥3） | 会上传吗？和 mp3 cutter 有何不同（同一作业）？切点咔哒怎么处理？WAV 还是 MP3？这是 sound editor 吗？能做铃声 M4A 吗？能从视频抽音吗？上限多大？浏览器不支持的格式？ |
| Disclaimer / References | 非 YMYL；MDN AudioBuffer / decodeAudioData；用户须对文件有权处理 |
| related | `file-metadata-analyzer`, `file-hash` |
| 验收 | `coverage:gate` 0b（本步）→ 实现后 2→4；`verify:tool`；`lint:vendor`（若新增 lamejs 路径） |
| 工期粗估 | 会话 B：Page + 母版解码/切片/WAV + MP3 懒加载；C：十语；D：ship。**不要**在本页嵌 AudioMass。 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-11 |
| slug 结论 | **保留** `trim-an-audio-clip-and-export`（情境=已有音频片段 + 动作=裁起止 + 结果=导出文件；用户点名；符合 §3.3 H。不是品类头词 `mp3-cutter` / `audio-trim` doorway，也不是 Hub `edit-audio-on-waveform`） |
| 主检索词 → title/H1 | 英文 H1 **Trim an audio clip and export**（任务句；含 trim / audio clip / export）。中文 H1 方向：**裁剪一段音频并导出**（勿硬塞 mp3 cutter / online）。他语见 `03` 当地检索句，禁止英模顿号枚举。 |
| 次要关键词 → desc / FAQ / Use cases | **见下方「同意图相关搜索词」全表**（禁止只写本行几个词）。摘要：trim/crop/cut audio 与 cutter/trimmer 簇 → desc + FAQ q2 + usecase；切歌 / wav 剪切 / 去片头 → FAQ q2 + usecase；头词 sound editor → FAQ 划界不进 H1；铃声 / 视频抽音 / 整段转码 / 静音切多段 → 有意不满足 |
| 用户搜索习惯判断 | 搜 cutter/cut/trim/crop/剪切/切割 的人要**快剪一段再下载**，不是打开 DAW。H1 禁 Mp3 Cutter 光杆头词。desc 用自然句收齐近义，禁止页上「相关关键词」列表，禁止可见文案写「不拆 URL」。 |
| 优化摘要 | 2026-09-11：把 12 S1 与同意图近义全部写入 desc/FAQ/Use cases；meta 前窗改为 Trim audio + crop + 不上服务器；去掉 FAQ「不另开网址」工程自述。H1 仍是任务句。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=trim-an-audio-clip-and-export --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 同意图相关搜索词（页面生成必吸）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「同意图相关搜索词」。本表是 **title / description / FAQ / Use cases 的生成规格**。同一作业的相关搜索、PAA、自动完成、12 表 S1 搜法簇、竞品 cutter 同义名须全部列入；近义可共用一句，禁止页上词云。`03` 每语 3–5 只定该语 H1 方向。来源：`docs/sound-editor/12` S1 + 竞品快剪站常见 related（mp3cut 类 cut songs / trim audio）+ 十语 brief 当地等价说法。无本 slug Planner CSV。

### 必吸（同一作业：本地音频标起止 → 导出一段）

| 相关搜法（须全部融入） | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| trim an audio clip；trim audio clip | absorb 主词 | en **H1** `Trim an audio clip and export` | — |
| trim audio；audio trim | absorb 次词 | en desc 前半 + usecase 1；How 动词 Trim | `/audio-trim` |
| crop audio；crop an audio clip | absorb 次词 | en desc + usecase 3 + FAQ q2 | `/crop-audio` |
| cut audio；cut an audio clip | absorb 次词 | en desc + FAQ q2 | `/cut-audio` |
| clip audio；audio clipper；mp3 clipper | absorb 次词 | en FAQ q2（与 cutter 共用一句） | `/audio-clipper` |
| mp3 cutter；online mp3 cutter；mp3 cutter online；mp3 cut | absorb 次词（品类头词不当 H1） | en desc also-called + FAQ q2 | `/mp3-cutter`、`/cut-mp3` |
| cut mp3；cut mp3 online；trim mp3；crop mp3；mp3 trimmer | absorb 次词 | en desc + FAQ q2 | `/trim-mp3`、`/crop-mp3` |
| audio trimmer；audio cutter；online audio cutter；online audio trimmer；trim audio online；cut audio online | absorb 次词 | en desc + FAQ q2（online 只是修饰，同一作业） | `/audio-trimmer`、`/online-audio-cutter` |
| cut song；cut songs；song cutter；crop song；cut a clip from a song | absorb 次词 | en FAQ q2 + usecase 1（去片头） | `/song-cutter`、`/cut-song` |
| trim music；cut music；music cutter | absorb 次词 | en FAQ q2 | `/music-cutter` |
| wav cutter；trim wav；cut wav；crop wav；cut wav file | absorb 次词 | dropzone 提示含 WAV + FAQ q2（能解码则同一起止导出） | `/wav-cutter`、`/trim-wav` |
| m4a cutter；cut m4a；trim m4a；ogg cutter；cut ogg | absorb 次词 | dropzone 提示含 M4A/OGG + FAQ q2 | `/m4a-cutter`、`/ogg-cutter` |
| cut intro；trim intro；cut the beginning of a song；remove intro from audio；trim the start of a song | absorb 次词 | usecase 1（播客片头）+ How 标 Start | `/cut-intro` |
| crop silence from both ends；trim silence from start and end（**两端**空白，不是整段去静音） | absorb 次词 | usecase 3；与 S2 整段去静音划界 | `/trim-silence` 空壳 |
| 裁剪一段音频并导出；裁剪音频；音频裁剪 | absorb 主词（zh） | zh **H1** + desc 前半 | — |
| 在线剪音频；剪音频；音频剪切；剪切音频 | absorb 次词（zh） | zh desc + FAQ q2 | `/zaixian-jian-yinpin` |
| mp3剪切；mp3 剪切；剪mp3；剪 mp3；剪切mp3；裁剪mp3；切割mp3；mp3切割；在线mp3剪切；在线MP3剪切器 | absorb 次词（zh） | zh desc + FAQ q2 | `/mp3-jianqie`、`/jian-mp3` |
| 切歌；剪歌；歌曲剪切；截取音频；截取mp3 | absorb 次词（zh） | zh FAQ q2 + usecase | `/qiege` |
| wav剪切；裁剪wav；剪wav；m4a剪切 | absorb 次词（zh） | zh dropzone + FAQ q2 | `/wav-jianqie` |
| recortar audio；cortar mp3；recortar mp3；recortar canción；cortar audio；trimmer de audio | absorb 次词（es） | es desc + FAQ | `/cortar-mp3` |
| قص صوت؛ قص mp3؛ تقطيع مقطع صوتي؛ قص أغنية | absorb 次词（ar） | ar desc + FAQ | — |
| cortar áudio；cortar mp3；recortar áudio；aparar áudio；cortar trecho de música | absorb 次词（pt） | pt desc + FAQ | `/cortar-mp3` |
| potong audio；potong mp3；gunting lagu；potong klip audio；trim audio | absorb 次词（id） | id desc + FAQ | `/potong-mp3` |
| couper un mp3；rogner un audio；découper un extrait audio；couper un morceau；trimmer audio | absorb 次词（fr） | fr desc + FAQ | `/couper-mp3` |
| 音声カット；mp3カット；音声トリミング；音源切り取り；音声切り出し | absorb 次词（ja） | ja desc + FAQ；H1 用切り出して書き出す | `/mp3-cut` |
| обрезать mp3；обрезать аудио；вырезать фрагмент；обрезать песню；триммер аудио | absorb 次词（ru） | ru desc + FAQ | `/obrezat-mp3` |
| mp3 schneiden；audio zuschneiden；audio trimmen；mp3 cutter；audioclip zuschneiden | absorb 次词（de） | de desc + FAQ；H1 用 Audioclip zuschneiden und exportieren | `/mp3-schneiden` |

### 不吸（相关搜索里会出现、但不是本页进攻作业）

| 相关搜法 | 判定 | 页面生成落点 | 指向 |
|---|---|---|---|
| sound editor；online audio editor；waveform editor；在线音频编辑器；音频编辑 | 有意不满足 | FAQ q5 一句划界；**不进**本页 H1 | Hub `edit-audio-on-waveform`（未立项不 related） |
| ringtone maker；iphone ringtone；mp3 to ringtone；铃声制作；手机铃声 | 有意不满足 | FAQ q6：可裁到约 30s；无 M4A、无自动淡化 | S6 |
| wav to mp3；convert wav to mp3；wav 转 mp3（整段不裁） | 有意不满足进攻 | FAQ：Start=0 End=全长后 Export MP3；不改 H1 | P1 |
| extract audio from video；mp4 to mp3；video to mp3；视频提取音频 | 有意不满足 | FAQ q7；不收视频主输入 | A1 |
| split audio；split mp3 into parts；split audio by duration；音频按时长切割 | 有意不满足 | 不写进 desc 当同一作业 | S3 |
| split audio by silence；按静音分割音频 | 有意不满足 | 不写进 desc | A3 |
| remove silence from audio（整段挖静音仍一文件） | 有意不满足 | usecase 3 只写**两端**空白，避免冒充 S2 | S2 |
| youtube to mp3；spotify rip | drop | FAQ q7 拒绝；无 URL 抓取 | — |
| mp3 joiner；merge mp3；join audio files | 有意不满足 | 不进本页 | A2 |
| audio compressor；noise reduction；voice recorder | 有意不满足 | 不进本页 H1/desc 进攻句 | Hub / 其它 scene |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。`docs/sound-editor/12` 写明本簇 **未跑 Keyword Planner**；仓库内无本 slug 的 `*-keyword-planner.md`。

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`（写出文件名）

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner 表 |

- [x] 交互规格已按上表补齐能力（无 Planner 行可补；常规 0b 词已写入交互：起止 + Trim + 双导出）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-10 |
| 总判 | **满足**：搜 trim audio / 裁一段并导出 的人打开页即单文件+起止+Trim+导出 WAV/MP3，文件留设备。**有意不满足**：完整 sound editor 进攻 H1、铃声 M4A 规格页、视频抽音、YouTube 扒带、静音切 ZIP、近义 cutter URL。**不超出**：首屏不做多轨/EQ/降噪机架；desc 不写 AudioMass/doorway/工程自述。 |
| 主词搜索者任务 | 把本地音频里不要的头尾去掉（或只留中间一段），下载还能播放的文件。 |
| Ads/Planner 长尾任务 | **不适用**（无 Planner）。12 表 absorb 词 mp3 cutter / cut mp3：同一控件能办成「切一段 MP3 下下来」。 |
| 满足之处 | How 先答「设起止再导出」，再写 Open file → Start/End → **Trim** → **Export WAV** / **Export MP3**。默认样例 5s 音、保留 1–3s。过零点在 Rules/高级设置，不抢 H1。 |
| 超出 / 应划边界 | 首屏不要波形 DAW 工具条、不要视频 input、不要 URL 抓取。desc 不写「我们不是编辑器但其实是」的元叙述堆砌；FAQ 一句诚实划界即可。MP3 码率放高级设置，默认 128 kbps。 |
| 缺口与已做优化 | 相对「只做裁剪却用 sound editor 当 H1」：H1 改回任务句；主题 id 仍叫 `sound-editor` 承接头词与后续 Hub。How 动词对齐按钮。related 只用已上线文件工具。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file]`（非 multiple）。`accept` 写死浏览器常见音频 MIME：`audio/wav,audio/mpeg,audio/mp4,audio/aac,audio/ogg,audio/webm,audio/flac,audio/x-wav,audio/x-m4a`。显示文件名、解码后时长/采样率/声道。禁止云盘。禁止第二套 URL/视频输入抢首屏。
- 主按钮行只放动作：**Trim**（primary） / **Export WAV**（无裁后缓冲 disabled） / **Export MP3**（同上；首次点击才加载 lamejs） / **Load sample** / **Clear**。How 用词必须等于这些按钮。不要把 Start/End 滑条放进主按钮行（放输入区）。
- 起止控件：`Start` / `End` 数字秒（步进 0.01）+ **单轨波形预览**（播放/暂停试听选区；在波形上拖选或拖动两端）。禁止多轨、效果架、剪贴板历史冒充 Hub。默认：样例 Start **1.00**、End **3.00**（对齐 Example）。
- 高级设置（`<details>`，默认收起；不打开也能 Trim）：过零点吸附（**默认开**）；MP3 码率芯片 96 / **128** / 192 kbps。
- 输出：裁后时长只读；**Download** 在 Trim 成功前 disabled。文件名建议 `{stem}-trim.wav` / `{stem}-trim.mp3`。
- 核心规则 / 算法：读文件 → 体积/时长预检（可读 `file.size`；时长在 decode 后复核）→ HUD **Decode** → `decodeAudioData` → 用户点 Trim → HUD **Trim**（按采样切片，过零点可选）→ 内存中持有裁后 `AudioBuffer` → Export WAV 同步写 PCM；Export MP3 → HUD **Encode**（懒加载 lamejs）。失败：超帽、解码失败、Start≥End、空缓冲 → 明文错误，不静默截断。
- 失败与边界行为：桌面 **40 MB** 或 **20 分钟**；窄屏（宽度小于 768px）约 **20 MB** / **8 分钟**（与 11 包装帽一致，实现时真机可放宽但不可默默取消）。不支持的编码写「this browser could not decode …」。DRM / 视频：拒绝并 FAQ 指向将来 A1。
- 示例 Input → Output：内置 **5.00s** 合成样例（短蜂鸣/扫频 WAV，非版权音乐）。Output：Trim 后约 **2.00s**。写进 H2 Example。
- **进页样例（必填）**：进页调用 `loadSample()`：填入 5s 样例、Decode、预填 1.00–3.00，**自动 Trim** 使 Export 可用（缓冲极小，允许自动跑；**不要**进页自动加载 lamejs / 自动 Export MP3）。用户也可换自己的文件后点 Trim。与 H2 Example 对齐。
- **进度 HUD（必填）**：对照 `/tools/batch-convert-web-pages-to-jpg`（`.bcw-hud`）。胶囊：**Decode** / **Trim** / **Encode**（仅 MP3 导出出现 Encode）。成功后保持卡片并指向已启用的 Export 按钮。不要只用一行 status。
- **实现防呆**：Page `opts` 签名；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/`。禁止 CDN。禁止本页 copy AudioMass 整树。B 后 `npm run lint:tool-page -- --slug=trim-an-audio-clip-and-export`。

### How 步骤草稿（en 母版方向；按钮原文）

1. Open an audio file (or click **Load sample**).
2. Click or drag the waveform (or type **Start** and **End**) to mark the part to keep.
3. Click **Trim**.
4. Click **Export WAV** or **Export MP3**.

### Converter SEO / UI 自检（立项）

- [x] Slug/H1 = 任务句，不硬刚 `mp3 cutter` / `sound editor`
- [x] Meta 前 160 字符含 local file → WAV/MP3 + 本标签页
- [x] How 用词 = Trim / Export WAV / Export MP3
- [x] 过零点、帽、码率在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] 一种主输入；主按钮行无设置；Download 无产物禁用

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。下列为**实现时必须交付**的模块（本回合不写 `src/`）。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] 进度 HUD（金标；Decode / Trim / Encode）
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
