# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`make-a-seamless-audio-loop`  
**路径**：`/tools/make-a-seamless-audio-loop`  
**主方向**：A  
**YMYL**：否  
**primaryTopic（实现时）**：`sound-editor`

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 作业来源：`docs/sound-editor/12-slug-hub-and-scene.md` **S5**（hub 芯片且 scene：进页=选段 + 交叉淡化做成无缝循环 + 导出，**不是缩小 DAW**）。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 游戏/直播垫乐要自己 loop 时接缝听不出 | seamless loop；make a seamless audio loop；audio loop crossfade / 音频无缝循环 | 本地文件 → 选段 → 首尾交叉淡化 → 导出一圈可循环 WAV/MP3 | **默认**：单文件 dropzone；Start / End；Crossfade **50 ms** 等功率；**Make loop** 后 **Export WAV** / **Export MP3**；进页样例自动跑 |
| 搜 *audio looper* / *loop maker* / *loop audio online* | audio looper；loop maker；loop audio；seamless audio loop | **同一作业**（近义不拆） | FAQ absorb；**不**开 `/audio-looper`、`/loop-maker` |
| 只要把文件重复贴成更长一条（直播软件不循环） | repeat audio；loop audio 10 times；extend audio by looping | 同意图次任务 | 高级设置 **Repeats**（默认 1 圈给引擎 loop；芯片 4 / 8）；输出时长帽拒绝「十小时」 |
| 两首歌交叉淡化切歌 | crossfade two songs；dj transition / 交叉淡化两首歌 | **邻作业 M2** | FAQ 一句：本页是**同一段**首尾相接，不是两文件混音；不改 H1 |
| 30 秒铃声 + 淡化 + M4A | ringtone maker / 铃声制作 | **邻作业 S6** | 有意不满足进攻；可把循环段裁到约 30s 但无 M4A |
| 只要起止裁一段、不要循环 | trim audio / 裁剪音频 | **S1** | related；FAQ 指向裁剪页 |
| 在波形上精剪、效果、多轨 | sound editor / 在线音频编辑器 | **Hub H0** | 有意不满足进攻 H1；禁止本页做成缩小 DAW |
| 自动找最佳接缝 / AI 寻环 | loop seam finder；AI seamless loop | 另一作业 | 有意不满足；本页人手选段 + 固定交叉淡化 |
| YouTube / 扒带 | youtube to mp3 | **drop** | FAQ 拒绝；无 URL 抓取 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：**make a seamless audio loop**（用户指定任务句）；seamless loop；audio loop crossfade；loop audio；次要 absorb：audio looper；loop maker；seamless audio loop；音频无缝循环
- 用户真实任务：打开已经在设备上的垫乐/环境音/乐句，标出要循环的一段，让文件**自己接回开头时没有咔哒或缺口**，下载 WAV（给引擎 loop）或 MP3（体积小），文件不上服务器。
- [x] 竞品 SERP（公开页 + 12 表；**无 Planner CSV**）：BPMsonic Loop Maker（波形选区 + 过零 + 等功率交叉淡化 + 仅 WAV）；Violet loop-maker（选段 + 交叉淡化 + 重复次数baked + 本机）；SoniqTools looper（crossfade/fade/gap/reverse + 多种导出）；中文 Elysia「音频循环器」（上传腔 + 速度同步）。本站差异应是**本标签页解码**、等功率环绕淡化可核对、WAV/MP3 分按钮、明确帽、诚实不承诺 AI 寻环。
- [x] 它们没讲清什么？① 文件是否离开设备；② 交叉淡化是缩短一圈还是只改开头；③ 等功率 vs 线性；④ 一圈给引擎 loop vs 烘焙重复给不会循环的播放器；⑤ 和「两首歌 crossfade」是否同一工具；⑥ 超长烘焙会不会把标签页撑爆。
- [x] 我们补哪 ≥3 条增益：① Rules 写清等功率环绕：输出时长 ≈ 选区 − 交叉淡化，尾叠到头；② 交叉淡化芯片 20 / **50** / 200 / 500 ms（鼓点短、垫乐长）；③ 默认导出**一圈**；高级 Repeats 烘焙 4/8 且有输出时长帽；④ FAQ 划界 M2 两文件、S6 铃声、Hub、AI 寻环、扒带。
- [x] 长尾：audio looper / loop maker / loop audio / seamless audio loop / 音频循环 **合并进本页**；不拆 URL。头词 *sound editor* 不进进攻 H1。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer ；https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData ；https://en.wikipedia.org/wiki/Crossfade （等功率交叉淡化概念）
- [x] Use case 草稿：游戏 2 秒垫乐 loop；直播 OBS 不循环时烘焙 8 圈；雨声/无人机垫用 200–500 ms 淡化。
- [x] 边界：超帽拒绝；交叉淡化 ≥ 选区时长拒绝；Repeats 使输出超过约 3 分钟拒绝；浏览器不能解码明文失败；视频主输入拒绝；不承诺 BPM 卡拍、不承诺零相位完美。
- [x] 结果区：选区时长、交叉淡化、输出一圈时长、烘焙圈数；Export 在 Make loop 成功前 disabled。Example：5.00s 样例、默认 1.00–3.00s、50 ms → 约 1.95s 一圈。
- [x] Related：`trim-an-audio-clip-and-export`、`split-an-audio-file-by-duration`。禁止 related 未立项 Hub / S6 / M2。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 选区切片后，等功率环绕：`outLen = regionLen − fadeLen`；`out[i] = head[i]·sin(g·π/2) + tail[i]·cos(g·π/2)`（`g = i/fadeLen`，仅 i&lt;fadeLen）；其余为选区中间。WAV PCM；MP3 lamejs CBR |
| 2 | 边界/失败 | 超帽；fade≥选区；输出过长；解码失败；视频输入 |
| 3 | 场景语境 | 游戏垫、直播 BGM、环境音；对照两文件切歌 / 铃声 / 裁剪 |
| 6 | 本地隐私 | 文件留设备，不上服务器；lamejs 点后从 `/vendor/` 加载 |
| 8 | 数值示例 | 5.00s 样例 → 1.00–3.00s + 50 ms → 约 1.95s 一圈 |
| 9 | 主题内链 | related 裁剪 + 按时长切；主题 `sound-editor` |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 主题 `sound-editor` 的 **S5 单点页** |
| 场景与行业 | 本地音频做成无缝循环并导出 |
| 技术 | Web Audio 解码 + 等功率环绕交叉淡化（Tier 0–1）；WAV 自写；MP3 lamejs 懒加载（Tier 2）；`localProcessing: true`；禁止 iframe / Wavacity / 首屏 FFmpeg / AudioMass 整树 |
| Catalog `page.style` | **opts** |
| Title (en) | **Make a seamless audio loop** |
| Description 要点 | **SERP 前窗**：Make a seamless audio loop on your device: crossfade the end of a local clip into its start, then download WAV or MP3—the file is not uploaded. 紧跟步骤与 50 ms 示例。同一作业全收：seamless loop；audio loop crossfade；loop audio；audio looper；loop maker。勿堆 Free/Best；勿写「不拆 URL」。 |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会上传吗？和 audio looper / loop maker 是否另一工具？交叉淡化怎么消除咔哒？为何输出比选区短？WAV 还是 MP3？能否烘焙多圈？这是两首歌 crossfade 吗？是 sound editor 吗？能做铃声 M4A 吗？能自动找接缝吗？上限？ |
| Disclaimer / References | 非 YMYL；MDN AudioBuffer / decodeAudioData；用户须对文件有权处理 |
| related | `trim-an-audio-clip-and-export`, `split-an-audio-file-by-duration` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 复用 S1 壳；新算法为环绕交叉淡化 + Play loop |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-11 |
| slug 结论 | **保留** `make-a-seamless-audio-loop`（情境=已有音频 + 动作=做成无缝循环 + 结果=可导出文件；用户点名；§3.3 H。不是品类头词 `audio-looper` / `loop-maker` doorway，也不是 Hub） |
| 主检索词 → title/H1 | 英文 H1 **Make a seamless audio loop**（含 make / seamless / audio loop）。中文 H1：**把音频做成无缝循环**。他语见 `03` 当地检索句，禁止参数枚举（交叉淡化毫秒、码率不进 H1）。 |
| 次要关键词 → desc / FAQ / Use cases | **见下方「同意图相关搜索词」全表**。摘要：seamless loop / audio loop crossfade / loop audio / looper / loop maker → desc + FAQ q2 + usecase；游戏垫/直播/环境音 → usecase；两文件 crossfade / 铃声 / 寻环 / 编辑器 → 有意不满足 |
| 用户搜索习惯判断 | 搜 seamless loop / 无缝循环 / looper 的人要**接缝听不出的循环文件**，不是打开 DAW，也不是两首歌 DJ 切歌。H1 禁 Audio Looper 光杆头词。desc 自然句收齐近义。 |
| 优化摘要 | 2026-09-11：按 12 S5 与公开 SERP（BPMsonic/Violet/SoniqTools/Elysia）把 looper/loop maker/crossfade 全部写入 desc/FAQ/Use cases；H1 用任务句而非品类头词；meta 前窗含 seamless audio loop + 不上服务器；划界 M2/S6/Hub/AI 寻环。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=make-a-seamless-audio-loop --phase=0b`。

## 同意图相关搜索词（页面生成必吸）

> 来源：12 表 S5 搜法簇 + 竞品 related（loop maker / audio looper / seamless loop / crossfade loop / repeat audio）+ 十语当地等价。无 Planner CSV。

### 必吸（同一作业：本地选段 → 首尾交叉淡化 → 导出可循环文件）

| 相关搜法（须全部融入） | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| make a seamless audio loop | absorb 主词 | en **H1** | — |
| seamless loop；seamless audio loop；make audio loop seamless | absorb 次词 | en desc 前半 + FAQ q2 | `/seamless-loop` |
| audio loop crossfade；loop crossfade；crossfade loop | absorb 次词 | en desc + How + Rules + FAQ q3 | `/audio-loop-crossfade` |
| loop audio；loop an audio file；loop audio online | absorb 次词 | en desc + usecase 1 | `/loop-audio` |
| audio looper；online audio looper；audio looping tool | absorb 次词（品类头词不当 H1） | en FAQ q2 + desc also-called | `/audio-looper` |
| loop maker；online loop maker；free loop maker | absorb 次词 | en FAQ q2 | `/loop-maker` |
| seamless looper；loop creator；create a loop from audio | absorb 次词 | en FAQ q2 | `/loop-creator` |
| repeat audio；repeat mp3；loop mp3；loop wav | absorb 次词 | en FAQ q6（烘焙圈数）+ 高级 Repeats | `/repeat-audio` |
| looping background music；game audio loop；livestream bed loop | absorb 次词 | usecase 1 / 2 | `/game-loop` |
| ambient loop；drone loop；pad loop | absorb 次词 | usecase 3 + 200/500 ms 芯片 | `/ambient-loop` |
| 把音频做成无缝循环；音频无缝循环 | absorb 主词（zh） | zh **H1** + desc | — |
| 音频循环；循环音频；在线音频循环；音频循环器 | absorb 次词（zh） | zh desc + FAQ q2 | `/audio-looper` |
| 交叉淡化循环；音频交叉淡化；首尾交叉淡化 | absorb 次词（zh） | zh desc + FAQ q3 | `/crossfade-loop` |
| 游戏循环音效；直播垫乐循环；环境音循环 | absorb 次词（zh） | zh usecase | — |
| bucle de audio；loop de audio；audio en bucle；hacer un loop | absorb 次词（es） | es desc + FAQ | `/loop-de-audio` |
| bucle sin costura；loop seamless；fundido cruzado loop | absorb 次词（es） | es H1/desc | — |
| حلقة صوتية；تكرار الصوت؛ لوب صوتي | absorb 次词（ar） | ar desc + FAQ | — |
| loop de áudio；áudio em loop；repetir áudio；loop perfeito | absorb 次词（pt） | pt desc + FAQ | `/loop-de-audio` |
| loop audio；pengulangan audio；audio looping | absorb 次词（id） | id desc + FAQ | — |
| boucle audio；loop audio；boucle sans couture；fondu enchaîné | absorb 次词（fr） | fr desc + FAQ | `/boucle-audio` |
| シームレスループ；音声ループ；ループ音源；クロスフェード | absorb 次词（ja） | ja H1/desc/FAQ | `/seamless-loop` |
| бесшовный цикл；зациклить аудио；аудио луп；кроссфейд | absorb 次词（ru） | ru desc + FAQ | — |
| nahtlose schleife；audio loop；audioschleife；crossfade | absorb 次词（de） | de H1/desc/FAQ | `/audioschleife` |

### 不吸

| 相关搜法 | 判定 | 页面生成落点 | 指向 |
|---|---|---|---|
| sound editor；online audio editor；在线音频编辑器 | 有意不满足 | FAQ 划界；**不进**进攻 H1 | Hub |
| crossfade two songs；dj transition；两首歌交叉淡化 | 有意不满足 | FAQ：同一段首尾，不是两文件 | M2 |
| ringtone maker；iphone ringtone；铃声制作 | 有意不满足 | FAQ：无 M4A、无 30s 规格页 | S6 |
| trim audio；cut mp3 | 有意不满足进攻 | FAQ + related 裁剪页 | S1 |
| loop seam finder；AI loop；自动寻找循环点 | 有意不满足 | FAQ：人手选段，不做互相关寻环 | — |
| 10 hour loop；10 hour version | 有意不满足 | FAQ：输出约 3 分钟帽，拒绝十小时 | — |
| youtube to mp3 | drop | FAQ 拒绝 | — |
| bpm detect；tempo sync loop | 有意不满足 | 不做 BPM 卡拍 | I1 |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 12 表写明未跑 Planner；仓库无 `*-keyword-planner.md` |

- [x] 交互规格已按上表补齐能力（无 Planner 行；常规 0b 词：选段 + 交叉淡化 + Make loop + 双导出 + 可选烘焙圈数）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-11 |
| 总判 | **满足**：搜 make a seamless audio loop / 音频无缝循环 的人打开页即单文件+选段+交叉淡化+Make loop+导出，文件留设备。**有意不满足**：Hub 进攻 H1、两文件 DJ 切歌、铃声 M4A、AI 寻环、十小时循环、YouTube 扒带。**不超出**：首屏不做多轨/EQ；交叉淡化在输入区不进按钮行；Repeats 进高级；desc 不写 doorway/工程自述。 |
| 主词搜索者任务 | 把一段本地音频做成接缝听不出的循环文件并下载。 |
| Ads/Planner 长尾任务 | **不适用**。12 absorb 词 audio looper / loop audio：同一控件能办成「做成循环下下来」。 |
| 满足之处 | How 先答「选段、把结尾淡进开头、导出」；按钮 **Make loop** / **Export WAV** / **Export MP3**。默认 50 ms 等功率、样例 1.00–3.00s 自动出约 1.95s 结果。Play 在有结果后循环试听接缝。 |
| 超出 / 应划边界 | 不要 BPM 同步控件抢首屏；不要第二文件输入；不要 reverse/gap 过渡机架（SoniqTools 多模式）。码率与圈数放高级。 |
| 缺口与已做优化 | 相对「loop maker 光杆 H1」：改任务句；交叉淡化时长放输入区（作业核心，不是藏起来的秘密参数）；烘焙多圈是次任务不改 H1。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file]`（非 multiple）。`accept` 与 S1 相同音频 MIME。禁止云盘、URL、视频主输入。
- 选区：`Start` / `End` 秒（步进 0.01）+ 单轨波形拖选（复用 S1 交互，禁止多轨）。默认样例 1.00–3.00。
- 交叉淡化（输入区，不进主按钮行）：数字 **Crossfade (ms)** 默认 **50**；芯片 **20 / 50 / 200 / 500**。hint：鼓点用短、垫乐用长。
- 主按钮行只放动作：**Make loop**（primary） / **Export WAV**（无结果 disabled） / **Export MP3**（同上；点后才加载 lamejs） / **Load sample** / **Clear**。How 用词必须等于这些按钮。
- 预览条：**Play** — 无结果时播放选区一遍；有结果后 **loop=true** 试听接缝（按钮文案可切 Pause）。
- 高级设置（`<details>` 默认收起）：等功率（**默认开**；关则线性）；过零点吸附（**默认开**，作用于选区边缘）；Repeats 默认 **1**，芯片 4 / 8；MP3 码率 96 / **128** / 192。
- 输出：只读「一圈时长 / 烘焙后总时长」；文件名 `{stem}-loop.wav` / `{stem}-loop.mp3`。
- 核心规则：decode → 选区切片（可选过零）→ 等功率环绕交叉淡化（输出缩短 fade）→ 若 Repeats>1 则首尾相接烘焙（圈与圈之间**不再**二次淡化，淡化已做进每一圈）→ 持有 `AudioBuffer` → Export。
- 失败：桌面 **40 MB / 20 min**；窄屏 **20 MB / 8 min**（同 S1）。fade≥选区拒绝。烘焙后时长 **> 180 s** 拒绝（明文，不静默截断）。视频输入拒绝。
- 示例：5.00s 合成音（选区边缘故意不落零、头尾电平不同，便于听出无淡化时的接缝）；Make loop 后约 **1.95 s**。
- **进页样例**：`loadSample()` 填 5s、1.00–3.00、50 ms、**自动 Make loop** 使 Export 可用。不自动加载 lamejs、不自动 Export MP3。
- **进度 HUD**：金标 `.bcw-hud`。胶囊 **Decode / Loop / Encode**（Encode 仅 MP3）。成功后卡片留着指向 Export。Make loop 前 `yieldUi()`。
- **实现防呆**：`opts`；模板正则 `\\w`；仅 `/vendor/`。B 后 `lint:tool-page -- --slug=make-a-seamless-audio-loop`。

### How 步骤草稿（en；按钮原文）

1. Open an audio file (or click **Load sample**).
2. Click or drag the waveform (or type **Start** and **End**) to mark the loop region. Set **Crossfade** if 50 ms is not right (chips: 20 / 50 / 200 / 500 ms).
3. Click **Make loop**.
4. Click **Play** to hear the join loop, then **Export WAV** or **Export MP3**.

### Converter SEO / UI 自检

- [x] Slug/H1 = 任务句，不硬刚 `audio-looper`
- [x] Meta 前 160 含 seamless loop + 本机 + WAV/MP3
- [x] How 用词 = Make loop / Export WAV / Export MP3
- [x] 交叉淡化、帽、圈数在 Rules/FAQ 有一句
- [x] 一种主输入；主按钮行无设置；Export 无产物禁用

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] 进度 HUD（金标；Decode / Loop / Encode）
- [x] How it works
- [x] Why choose our {tool name} tools
- [x] Formula / Rules
- [x] Example（与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [x] Disclaimer（短版权/权利句）
- [x] `03-locale-briefs.md` 已填
