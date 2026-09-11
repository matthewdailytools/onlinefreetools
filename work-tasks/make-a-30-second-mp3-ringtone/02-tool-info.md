# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`make-a-30-second-mp3-ringtone`  
**路径**：`/tools/make-a-30-second-mp3-ringtone`  
**主方向**：A  
**YMYL**：否  
**primaryTopic（实现时）**：`sound-editor`

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 作业来源：`docs/sound-editor/12-slug-hub-and-scene.md` **S6**（hub 芯片且 scene：进页=30 秒窗 + 淡入淡出 + 导出 MP3，**不是缩小 DAW**；Rules 写清无 M4A/M4R）。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 把歌曲副歌/前奏做成约 30 秒手机铃声 MP3 | make a 30-second mp3 ringtone；ringtone maker；mp3 to ringtone / 做成 30 秒 MP3 铃声；铃声制作 | 本地文件 → 默认 30s 窗 + 淡入淡出 → 导出 MP3 | **默认**：单文件 dropzone；Start + **Duration 30s**；芯片 **15 / 20 / 30 / 40**；Fade in **0.5 s**、Fade out **1.5 s**；**Make ringtone** 后 **Export MP3**；进页样例自动跑 |
| 搜 *ringtone maker* / *ringtone cutter* / *cut song to ringtone* | ringtone maker；ringtone cutter；song to ringtone；mp3 ringtone maker | **同一作业**（近义不拆） | FAQ absorb；**不**开 `/ringtone-maker`、`/mp3-to-ringtone` |
| 安卓直接设 MP3 铃声 | android ringtone；samsung ringtone / 安卓铃声 | 同意图 | FAQ + usecase：下载 MP3 后在系统声音设置里选 |
| 搜 iPhone / M4R 铃声 | iphone ringtone；m4r ringtone / 苹果铃声 | **部分同意图 + 有意不满足格式** | 可做出 ≤30/40s 淡化片段；**不写 M4R**；FAQ：GarageBand/Finder 另一步，本页不假装能装进 iOS |
| 只要任意时长裁剪、不要铃声规格 | trim audio；cut mp3 / 裁剪音频 | **S1** | related；FAQ 指向裁剪页 |
| 无缝循环垫乐 | seamless loop / 音频无缝循环 | **S5** | related；FAQ：本页淡入淡出不是首尾交叉淡化循环 |
| 在波形上精剪、效果、多轨 | sound editor / 在线音频编辑器 | **Hub H0** | 有意不满足进攻 H1 |
| 通知/UI 短提示音（<5s） | notification sound maker | **邻作业 G12** | 可用 15s 芯片做短段，但不改 H1 去抢提示音 |
| YouTube / 扒带 | youtube to mp3 | **drop** | FAQ 拒绝；无 URL 抓取 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：**make a 30-second mp3 ringtone**（用户指定任务句）；ringtone maker；mp3 to ringtone；android ringtone；次要 absorb：ringtone cutter；cut song to ringtone；mp3 ringtone maker；铃声制作；手机铃声
- 用户真实任务：打开已经在设备上的歌/录音，框出大约 30 秒副歌，加上淡入淡出避免硬切，下载 MP3 当铃声；文件不上服务器。
- [x] 竞品 SERP（公开页 + 12 表；**无 Planner CSV**）：SnipSound（30s + fade + **M4R/MP3**）；Loopaloo（10–40s 芯片 + fade + M4R）；Notevibes（First/Middle/Last 30s + MP3）；Tembrica/Favtoo（M4R 主打）；中文 audioeditor/gottrix/MyRingtone（铃声制作 + 淡入淡出 + 常许诺 M4R）。本站差异应是**本标签页解码**、默认 30s 真规格、淡入 0.5s / 淡出 1.5s 可核对、**诚实不写 M4R**、体积/时长帽明确。
- [x] 它们没讲清什么？① 文件是否离开设备（部分仍是上传腔）；② iPhone 是否真能用下载的 MP3；③ 30s vs 苹果 40s 上限；④ 淡入淡出默认秒数；⑤ 和任意裁剪页是否同一工具；⑥ 超长歌会不会把标签页撑爆。
- [x] 我们补哪 ≥3 条增益：① Rules 写清输出时长 = min(选区, 40s)，默认 30s；② 淡入 0.5s / 淡出 1.5s 线性增益（芯片可改），淡化和 ≥ 时长则拒绝；③ FAQ 划界 M4R/iPhone 安装、S1 任意裁剪、S5 循环、Hub、扒带；④ 金标 HUD Decode / Fade / Encode。
- [x] 长尾：ringtone maker / mp3 to ringtone / ringtone cutter / 铃声制作 / 手机铃声 / 安卓铃声 **合并进本页**；不拆 URL。头词 *sound editor* 不进进攻 H1。*iphone ringtone* absorb 任务（30s+淡化）但 **drop 格式承诺**。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer ；https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData ；https://support.apple.com/guide/iphone/change-the-ringtone-and-sounds-iph2153a0b7d/ios （iPhone 铃声走设置/自订，本页不假装浏览器能写入系统）
- [x] Use case 草稿：安卓把副歌设为来电铃声；闹钟/短信用 15–20s MP3；把 MP3 再交给 GarageBand 做 iPhone 自定义铃声（本页不产 M4R）。
- [x] 边界：超帽拒绝；选区 >40s 拒绝；淡入+淡出 ≥ 选区拒绝；解码失败；视频主输入拒绝；不承诺 M4R、不承诺写入手机系统、不承诺版权。
- [x] 结果区：起点、时长、淡入/淡出秒、输出时长；Export MP3 在 Make ringtone 成功前 disabled。Example：32s 样例、Start 1.00、Duration 30、fade 0.5/1.5 → 约 30.00s。
- [x] Related：`trim-an-audio-clip-and-export`、`make-a-seamless-audio-loop`。禁止 related 未立项 Hub / G12。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 选区切片后线性淡入/淡出：`g_in = i/fadeIn`，`g_out = (N-1-i)/fadeOut`；输出时长 = 选区时长（淡化不缩短，只改增益）；上限 40s；MP3 lamejs CBR |
| 2 | 边界/失败 | 超帽；选区>40s；淡化和过大；解码失败；视频输入 |
| 3 | 场景语境 | 安卓铃声、闹钟、GarageBand 间接做 iPhone；对照任意裁剪 / 循环 / M4R |
| 6 | 本地隐私 | 文件留设备，不上服务器；lamejs 点后从 `/vendor/` 加载 |
| 8 | 数值示例 | 32.00s 样例 → Start 1.00、Duration 30、fade 0.5/1.5 → 约 30.00s MP3 |
| 9 | 主题内链 | related 裁剪 + 无缝循环；主题 `sound-editor` |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 主题 `sound-editor` 的 **S6 单点页** |
| 场景与行业 | 本地音频做成约 30 秒 MP3 铃声 |
| 技术 | Web Audio 解码 + 线性淡入淡出（Tier 0–1）；MP3 lamejs 懒加载（Tier 2）；`localProcessing: true`；禁止 iframe / FFmpeg 首屏 / AudioMass 整树 / AAC-M4R 承诺 |
| Catalog `page.style` | **opts** |
| Title (en) | **Make a 30-second MP3 ringtone** |
| Description 要点 | **SERP 前窗**：Make a 30-second MP3 ringtone on your device: cut a local song, fade the edges, then download MP3—the file is not uploaded. 紧跟步骤与 30s/0.5s/1.5s 示例。同一作业全收：ringtone maker；mp3 to ringtone；android ringtone；ringtone cutter。勿堆 Free/Best；勿许诺 M4R。 |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会上传吗？和 ringtone maker 是否另一工具？为什么默认 30 秒？淡入淡出怎么设？能做 iPhone M4R 吗？安卓怎么设？和裁剪页/循环页差在哪？上限？YouTube？ |
| Disclaimer / References | 非 YMYL；MDN AudioBuffer / decodeAudioData；Apple 铃声设置说明；用户须对文件有权处理 |
| related | `trim-an-audio-clip-and-export`, `make-a-seamless-audio-loop` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 复用 S1/S5 壳；新算法为时长窗 + 淡入淡出；主产物仅 MP3 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-11 |
| slug 结论 | **保留** `make-a-30-second-mp3-ringtone`（情境=手机铃声 + 动作=做成约 30 秒 MP3 + 结果=可下载文件；用户点名；§3.3 H。不是品类头词 `ringtone-maker` doorway，也不是 Hub） |
| 主检索词 → title/H1 | 英文 H1 **Make a 30-second MP3 ringtone**（含 30-second / MP3 / ringtone）。中文 H1：**做成 30 秒 MP3 铃声**。他语见 `03` 当地检索句，禁止参数枚举（码率、淡化秒数不进 H1）。 |
| 次要关键词 → desc / FAQ / Use cases | **见下方「同意图相关搜索词」全表**。摘要：ringtone maker / mp3 to ringtone / ringtone cutter / android ringtone → desc + FAQ；iphone/m4r → FAQ 有意不满足格式；裁剪/循环/编辑器 → 有意不满足进攻 |
| 用户搜索习惯判断 | 搜 ringtone maker / 铃声制作 的人要**一段够短、带淡化、能当铃声的 MP3**，不是打开 DAW，也不是任意时长裁剪。H1 禁 Ringtone Maker 光杆头词。desc 自然句收齐近义。iPhone 搜法吸收任务但不许诺 M4R。 |
| 优化摘要 | 2026-09-11：按 12 S6 与公开 SERP（SnipSound/Loopaloo/Notevibes/中文铃声制作）把 ringtone maker / mp3 to ringtone / cutter / 安卓铃声写入 desc/FAQ/Use cases；H1 用 30 秒 MP3 任务句而非品类头词；meta 前窗含 30-second MP3 ringtone + 不上服务器；划界 M4R/S1/S5/Hub/扒带。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=make-a-30-second-mp3-ringtone --phase=0b`。

## 同意图相关搜索词（页面生成必吸）

> 来源：12 表 S6 搜法簇 + 竞品 related（ringtone maker / mp3 to ringtone / ringtone cutter / android ringtone / 铃声制作）+ 十语当地等价。无 Planner CSV。

### 必吸（同一作业：本地选约 30 秒 → 淡入淡出 → 导出 MP3 铃声）

| 相关搜法（须全部融入） | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| make a 30-second mp3 ringtone | absorb 主词 | en **H1** | — |
| 30 second ringtone；30 sec ringtone；30s ringtone mp3 | absorb 次词 | en desc 前半 + FAQ q3 | `/30-second-ringtone` |
| ringtone maker；online ringtone maker；free ringtone maker | absorb 次词（品类头词不当 H1） | en FAQ q2 + desc also-called | `/ringtone-maker` |
| mp3 to ringtone；convert mp3 to ringtone；mp3 ringtone maker | absorb 次词 | en desc + FAQ q2 | `/mp3-to-ringtone` |
| ringtone cutter；cut ringtone；cut song to ringtone；song cutter ringtone | absorb 次词 | en desc + How + FAQ q2 | `/ringtone-cutter` |
| android ringtone；samsung ringtone；mp3 ringtone android | absorb 次词 | en usecase 1 + FAQ q6 | `/android-ringtone` |
| fade in fade out ringtone；ringtone fade | absorb 次词 | en desc + How + FAQ q4 | `/ringtone-fade` |
| custom ringtone；make ringtone from song；create ringtone from mp3 | absorb 次词 | en usecase 1 | `/custom-ringtone` |
| alarm ringtone mp3；notification mp3 clip | absorb 次词 | usecase 2（15–20s 芯片） | `/alarm-ringtone` |
| 做成 30 秒 MP3 铃声；制作 30 秒铃声 | absorb 主词（zh） | zh **H1** + desc | — |
| 铃声制作；制作铃声；手机铃声；在线铃声 | absorb 次词（zh） | zh desc + FAQ q2 | `/ringtone-maker` |
| mp3 转铃声；mp3铃声；铃声裁剪 | absorb 次词（zh） | zh desc + FAQ q2 | `/mp3-to-ringtone` |
| 安卓铃声；三星铃声 | absorb 次词（zh） | zh usecase + FAQ | — |
| 淡入淡出铃声；铃声淡化 | absorb 次词（zh） | zh FAQ q4 | — |
| tono de llamada；crear tono mp3；ringtone de 30 segundos | absorb 次词（es） | es H1/desc/FAQ | `/tono-de-llamada` |
| نغمة رنين؛ صنع نغمة MP3؛ نغمة 30 ثانية | absorb 次词（ar） | ar desc + FAQ | — |
| toque mp3；criar toque；toque de 30 segundos | absorb 次词（pt） | pt desc + FAQ | `/toque-mp3` |
| nada dering mp3；pembuat nada dering；ringtone 30 detik | absorb 次词（id） | id desc + FAQ | — |
| sonnerie mp3；créer une sonnerie；sonnerie 30 secondes | absorb 次词（fr） | fr H1/desc/FAQ | `/sonnerie-mp3` |
| MP3着信音；着信音作成；30秒着信音；着メロ | absorb 次词（ja） | ja H1/desc/FAQ | `/着信音` |
| рингтон mp3；сделать рингтон；30 секунд рингтон | absorb 次词（ru） | ru desc + FAQ | — |
| mp3 klingelton；klingelton erstellen；30 sekunden klingelton | absorb 次词（de） | de H1/desc/FAQ | `/klingelton` |

### 不吸

| 相关搜法 | 判定 | 页面生成落点 | 指向 |
|---|---|---|---|
| iphone ringtone；m4r ringtone；m4a ringtone；苹果铃声 m4r | 有意不满足**格式**（任务可部分做） | FAQ：可出 ≤40s MP3；**不写 M4R**；GarageBand 另一步 | — |
| sound editor；online audio editor；在线音频编辑器 | 有意不满足 | FAQ 划界；**不进**进攻 H1 | Hub |
| trim audio；cut mp3（任意时长） | 有意不满足进攻 | FAQ + related 裁剪页 | S1 |
| seamless loop；audio looper | 有意不满足进攻 | FAQ + related 循环页 | S5 |
| notification sound maker；ui click sound | 有意不满足进攻 H1 | 可用 15s 芯片；不改 H1 | G12 |
| youtube to mp3；ringtone from youtube | drop | FAQ 拒绝 | — |
| set as ringtone iOS API | 有意不满足 | FAQ：浏览器不能写入系统铃声库 | — |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 12 表写明未跑 Planner；仓库无 `*-keyword-planner.md` |

- [x] 交互规格已按上表补齐能力（无 Planner 行；常规 0b 词：30s 窗 + 淡入淡出 + Make ringtone + Export MP3）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-11 |
| 总判 | **满足**：搜 make a 30-second mp3 ringtone / 铃声制作 的人打开页即单文件+默认 30s+淡入淡出+Make ringtone+Export MP3，文件留设备。**有意不满足**：Hub 进攻 H1、任意时长裁剪进攻、无缝循环进攻、M4R/iPhone 一键安装、YouTube 扒带。**不超出**：首屏不做多轨/EQ/M4R 格式选择器；码率进高级；desc 不写 doorway/工程自述。 |
| 主词搜索者任务 | 把一段本地音频做成约 30 秒、带淡化的 MP3 铃声并下载。 |
| Ads/Planner 长尾任务 | **不适用**。12 absorb 词 ringtone maker / mp3 to ringtone：同一控件能办成「裁一段铃声下下来」。iphone ringtone：**部分满足**（时长+淡化）+ FAQ 划界无 M4R。 |
| 满足之处 | How 先答「框出约 30 秒、淡入淡出、导出 MP3」；按钮 **Make ringtone** / **Export MP3**。默认 Duration 30、fade 0.5/1.5、样例自动出约 30s 结果。Play 在有结果后循环试听（模拟来电重复）。 |
| 超出 / 应划边界 | 不要 M4R/AAC 选择器抢首屏（v1 做不到就不要放控件）；不要第二文件；不要音量归一化机架。码率放高级。First/Middle/Last 用波形拖选完成，不另做三套主输入。 |
| 缺口与已做优化 | 相对「Ringtone Maker 光杆 H1」：改 30 秒 MP3 任务句；淡化放输入区（作业核心）；iPhone 搜法进 FAQ 而不是假按钮。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file]`（非 multiple）。`accept` 与 S1 相同音频 MIME。禁止云盘、URL、视频主输入。
- 选区：`Start`（秒）+ `Duration`（秒，默认 **30**）+ 单轨波形拖选（复用 S1 交互，禁止多轨）。芯片 **15 / 20 / 30 / 40** 只改 Duration，Start 不变（超出文件则夹紧）。打开文件后默认 Start=0、Duration=min(30, 文件时长)。
- 淡化（输入区，不进主按钮行）：**Fade in** 默认 **0.5** 秒；芯片 0 / 0.3 / 0.5 / 1。**Fade out** 默认 **1.5** 秒；芯片 0 / 0.5 / 1.5 / 3。hint：开头短、结尾长，避免副歌硬切。
- 主按钮行只放动作：**Make ringtone**（primary） / **Export MP3**（无结果 disabled；点后才加载 lamejs） / **Load sample** / **Clear**。How 用词必须等于这些按钮。v1 **无 Export WAV、无 Export M4R**。
- 预览条：**Play** — 无结果时播放选区一遍（未淡化源）；有结果后 **loop=true** 试听带淡化的铃声（按钮文案可切 Pause）。
- 高级设置（`<details>` 默认收起）：过零点吸附（**默认开**，作用于选区边缘）；MP3 码率 96 / **128** / 192。
- 输出：只读「输出时长 / 淡入 / 淡出」；文件名 `{stem}-ringtone.mp3`。
- 核心规则：decode → 按 Start+Duration 切片（可选过零）→ 线性淡入淡出（增益曲线，**不缩短**时长）→ 持有 `AudioBuffer` → Export MP3。
- 失败：桌面 **40 MB / 20 min**；窄屏 **20 MB / 8 min**（同 S1）。选区时长 **> 40 s** 拒绝（明文）。fade in + fade out ≥ 选区拒绝。视频输入拒绝。
- 示例：32.00s 合成音（1s 前奏轻、1–31s 副歌响、末尾轻，便于听出淡化）；Make ringtone 后约 **30.00 s**。
- **进页样例**：`loadSample()` 填 32s、Start 1.00、Duration 30、fade 0.5/1.5、**自动 Make ringtone** 使 Export MP3 可用。不自动加载 lamejs、不自动 Export MP3。进页静默样例不打开 HUD。
- **进度 HUD**：金标 `.bcw-hud`。胶囊 **Decode / Fade / Encode**（Encode 仅 MP3）。成功后卡片留着指向 Export MP3。Make ringtone 前 `yieldUi()`。
- **实现防呆**：`opts`；模板正则 `\\w`；仅 `/vendor/`。B 后 `npm run lint:tool-page -- --slug=make-a-30-second-mp3-ringtone`。

### How 步骤草稿（en；按钮原文）

1. Open an audio file (or click **Load sample**).
2. Drag the waveform or type **Start** and **Duration** (default 30s; chips 15 / 20 / 30 / 40). Set **Fade in** / **Fade out** if 0.5s / 1.5s is not right.
3. Click **Make ringtone**.
4. Click **Play** to hear it loop, then **Export MP3**.

### Converter SEO / UI 自检

- [x] Slug/H1 = 任务句，不硬刚 `ringtone-maker`
- [x] Meta 前 160 含 30-second MP3 ringtone + 本机 + 不上服务器
- [x] How 用词 = Make ringtone / Export MP3
- [x] 淡化、40s 帽、无 M4R 在 Rules/FAQ 有一句
- [x] 一种主输入；主按钮行无设置；Export 无产物禁用

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] 进度 HUD（金标；Decode / Fade / Encode）
- [x] How it works
- [x] Why choose our {tool name} tools（How 之后；title 含工具名 + ≥3 条可验证差异）
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [x] Disclaimer（非 YMYL；仍写版权一句）
- [x] `03-locale-briefs.md` 已填（实现十语前）
