# 12 — 声音单点工具全表（用户作业 + 搜法）

**日期**：2026-09-10（需求/SEO 重枚举；不再用「同一 JS 控件」当漏斗）  
**状态**：规划；**不是**立项。未点名不得建 `work-tasks/`、不得改 `src/`。  
**slug / H1 均为草稿**：上线前须跑 0b + SERP；禁止用品类头词当唯一进攻 H1。  
**权威（本页）**：先按 **用户作业 + 搜索簇** 列全。落地列（Hub / 单点候选 / 一对转换 / defer / drop）是建议，**不是**删行条件。  
**仍成立的合规**：近义换词空壳 = doorway / scaled content（`cut mp3` 与 `trim audio` 是同一作业）。Google 现行政策高于「多占几个词」。  
**上游**：作业来自 [05](./05-sound-universe-demand-map.md)；Hub 怎么做来自 [11](./11-executable-plan.md)；转写边界来自 [STT 方案](../2026-09-08-js-speech-to-text-solutions.md)。  
**搜法量级**：头 / 中 / 长尾为经验档（Ahrefs 本轮不可用；**未跑 Keyword Planner**）。0b 时用当地 CSV 校准，不把本表数字当 KPI。

---

## 0. 本轮怎么读

旧 12 先问「是不是同一套波形」，再决定列不列。结果：mp3 cutter、降噪、变速、铃声等只出现在 Hub 芯片里，**单点工具清单看起来像已经枚举完，其实只枚举了「控件不同」的 8 条**。

本轮改成：

1. **一行 = 一个用户作业**（情境 → 动作 → 结果），不是一个算法，也不是一个按钮。  
2. **搜法簇合并**：同一结果的近义（cut / trim / crop；wav to mp3 / convert wav mp3）共一行。  
3. **落地是后置列**：Hub 仍须能办成编辑类作业；用户如果是搜「只办这一次」的单点工具，本表标 **单点候选**，不因内部可能复用 AudioMass 而删掉。  
4. **建 URL 另口令**：本表写入 ≠ 立即建页。单点页须满 IG、进页默认即该作业、不得做成「缩小版编辑器换 title」。

| 落地代码 | 含义 |
|---|---|
| **hub** | Hub 必办；搜法进 title/FAQ/芯片。默认不新开 URL |
| **scene** | 单点候选：用户搜的是一次任务页；进页一种输入、一个主按钮、一种结果 |
| **pair** | 一对格式转换候选（本站 converter 模式）；禁止再铺矩阵 |
| **defer** | 作业真，模型/法务/体积/实时路由未过 |
| **drop** | ToS、未授权仿声、YMYL 诊断、近义空壳、格式矩阵 |

Hub 与 scene **可以同时为真**：编辑器里要有这条命令；搜索「online noise reducer」仍可能值得一张只降噪的页。冲突时：能力听 01/02/11；**是否建第二 URL 听 0b + 本表 scene 行 + 用户立项口令**。

---

## 0.1 旧 12 漏了什么（结论）

| 缺口类型 | 例子 | 为何旧表没有 |
|---|---|---|
| 同波形但搜法是独立工具 | 降噪、增益、EQ、8D、夜核、静音切除（仍一个文件） | 被「同控件」滤掉 |
| 两文件关系不同 | **叠加混音** ≠ 顺序拼接；**交叉淡化两首歌** ≠ Paste | 只写了 A2 拼接 |
| 切开方式不同 | 按静音切 ZIP ≠ 按固定秒数切 ≠ 按 cue 分轨 | 只写了 A3 |
| 视频×声音另三件 | 视频抽音有了；漏了 **给视频配音 / 换音轨 / 去掉视频声** | 只写 A1 |
| 压缩是两个作业 | 动态压缩器 ≠ **减小 MP3 体积** | 混在效果里 |
| 生成类几乎空 | TTS、白噪发生器、音调发生器、文生乐 | 推给 05，未进 slug 表 |
| 理解类只一条转写 | 漏字幕、翻译音频、说话人分离、会议摘要 | 只写 A4 |
| 测量/练习 | BPM、调性、校音、节拍器、识曲 | 旧 defer 一行带过 |
| 格式对 | m4a/flac/ogg/aiff 与视频转 mp3 | 直接 drop 整矩阵，没列高搜一对 |

下面 F1–F14 把能做成「一个声音工具」的作业列全。05 里的平台壳（云同步、RSS、账号）不是单点工具，不进本表。

---

## 1. Hub（时间线编辑，都满足「改一段再导出」）

| 项 | 草稿（0b 可改） |
|---|---|
| slug | `edit-audio-on-waveform` |
| 情境 + 动作 + 结果 | 播客/会议/备忘录有废段 → 在波形上剪修 → 导出 WAV 或 MP3 |
| 进页默认 | 样例已出波形，可播、可选区 |
| 头词落点 | *sound editor* / *online audio editor* / 在线音频编辑 → **title / FAQ / Why choose**，**不当 URL** |
| 头词档 | **头**（硬刚 H1 禁止；场景句承接） |
| 分期 | [11](./11-executable-plan.md) S1 → S2 |
| 旧清单名 | `audio-trim`、`audio-recorder`、`audio-wav-mp3` 作为 **能力** 必须在 Hub 办完；是否另开 scene 见 F1–F3 |

Hub **不是** 05 整座宇宙。分离、TTS、克隆、实时变声、识曲、视频换轨 **不是** Hub 的「都满足」。

---

## 2. 单点作业全表

列说明：**中文搜法**为种子，0b 按语重跑。**近义不拆**列出不得另开的 URL 形态。

### F1 剪、切、静音、循环

| ID | 用户作业 | 搜法簇（en / zh） | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **H0** | 在波形上精剪口误/结构再导出 | sound editor；online audio editor；waveform editor / 在线音频编辑器；音频编辑 | 头 | `/sound-editor`、`/online-audio-editor` | `edit-audio-on-waveform` | hub |
| **S1** | 只要起止点，剪掉头尾或留一段 | mp3 cutter；trim audio；cut mp3；crop audio；audio trimmer / 在线剪音频；mp3 剪切；裁剪音频 | 头 | `/cut-mp3`、`/audio-trimmer`、`/crop-audio` | `trim-an-audio-clip-and-export` | hub **且** scene（进页=起止+导出；不是缩小 DAW）。**2026-09-10 已立项并实现** `work-tasks/trim-an-audio-clip-and-export/`，主题 id `sound-editor` |
| **S2** | 长录音里挖掉静音，**仍一个文件** | remove silence from audio；silence remover / 去除音频静音；去掉空白 | 中 | `/delete-silence` 空壳 | `remove-silence-from-a-recording` | **scene**（结果 1 文件；与 A3 多文件不同） |
| **A3** | 按停顿切成多段，打包 ZIP | split audio by silence；split recording on silence / 按静音分割音频 | 中 | 语种/阈值不拆 URL | `split-a-recording-on-silence` | scene |
| **S3** | 按固定时长切成等长多段 | split audio by duration；split mp3 into parts / 音频按时长切割 | 中 | `/split-mp3` 品类头词不当 URL | `split-an-audio-file-by-duration` | scene |
| **S4** | 按 cue / 章节表分轨 | cue splitter；split ape cue；split flac cue / cue 分轨 | 长尾 | 各容器不拆 | `split-a-disc-image-with-a-cue-sheet` | scene |
| **S5** | 无缝循环（游戏/直播垫） | seamless loop；audio loop crossfade；loop audio / 音频无缝循环 | 中 | `/audio-looper` 空壳 | `make-a-seamless-audio-loop` | hub 芯片 **且** scene |
| **S6** | 手机铃声规格：30s + 淡化 + MP3 | ringtone maker；iphone ringtone；mp3 to ringtone / 铃声制作；手机铃声 | 头 | `/m4a-ringtone` 本站 v1 不做 M4A 就不要许 | `make-a-30-second-mp3-ringtone` | hub 芯片 **且** scene（Rules 写清无 M4A） |

### F2 录

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **S7** | 浏览器里录一句备忘/试麦，下载 | voice recorder；record audio online；online mic / 在线录音；网页录音 | 头 | `/voice-recorder`、`/online-mic` | `record-a-voice-memo-in-the-browser` | hub **且** scene |
| **S8** | 提词器看着稿录口播 | teleprompter recorder / 提词器录音 | 长尾 | — | `record-a-voiceover-with-a-teleprompter` | scene 或 defer（UI 另一套） |
| **S9** | 系统内录「电脑在播什么」 | stereo mix recorder；internal audio capture / 系统内录 | 中 | — | — | **defer**（浏览器权限弱；多要扩展/原生） |

### F3 格式、声道、采样率、体积

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **P1** | WAV → MP3 整段转换 | wav to mp3；convert wav to mp3 / wav 转 mp3 | 头 | `/convert-wav` 过宽 | `convert-a-wav-file-to-mp3` | pair（Hub Export 也必须能办） |
| **P2** | MP3 → WAV | mp3 to wav / mp3 转 wav | 头 | — | `convert-an-mp3-file-to-wav` | pair |
| **P3** | M4A/AAC → MP3 | m4a to mp3；aac to mp3 / m4a 转 mp3 | 头 | 不另开 aac 近义页 | `convert-an-m4a-file-to-mp3` | pair |
| **P4** | FLAC → MP3 或 WAV | flac to mp3；flac to wav / flac 转 mp3 | 中 | flac→ogg 等禁止再铺 | `convert-a-flac-file-to-mp3` | pair（先一对） |
| **P5** | OGG/OPUS → MP3 | ogg to mp3；opus to mp3 | 中 | ogg/opus 择一主打 | `convert-an-ogg-file-to-mp3` | pair 或 hub Export |
| **P6** | AIFF/CAF → WAV | aiff to wav；caf to wav | 长尾 | — | `convert-an-aiff-file-to-wav` | pair 或 hub |
| **A8** | 一批 WAV → ZIP 里的 MP3 | bulk convert wav to mp3；batch wav mp3 / 批量 wav 转 mp3 | 中 | 禁止 mp3↔ogg↔flac 矩阵 | `bulk-convert-wav-files-to-mp3` | scene |
| **S10** | **减小文件体积**（码率/单声道），不是压限器 | compress mp3；reduce audio file size；mp3 compressor / 压缩 mp3 体积；音频压缩（体积） | 头 | 与 F4 动态压缩 **分作业** | `reduce-an-mp3-file-size` | **scene** |
| **S11** | 改采样率/位深（44.1k/48k、16/24-bit） | convert sample rate；48khz to 44.1；bit depth converter / 采样率转换 | 中 | 每个数值不拆 URL | `convert-audio-sample-rate-and-bit-depth` | scene 或 hub 导出对话框 |
| **S12** | 立体声 ↔ 单声道 | stereo to mono；mono to stereo；mp3 to mono / 立体声转单声道 | 中 | `/join-stereo` 空壳 | `convert-stereo-audio-to-mono` | hub **且** scene |
| **S13** | 拆左右声道 / 交换 L-R | split stereo to mono files；swap left right audio / 分离左右声道 | 长尾 | — | `split-stereo-into-left-and-right-files` | scene |
| **S14** | 有声书 m4b + 章节 | m4b chapter editor；audiobook chapters / 有声书章节 | 长尾 | — | `add-chapters-to-an-m4b-audiobook` | defer |

**格式矩阵 drop**：`/ogg-to-flac`、`/wma-to-aac`、`/amr-to-mp3`… 除非 Planner 证明该对是独立高需且能满 IG。默认 Hub Export + 上表高搜 pair。

### F4 音量、响度、动态（修好听感）

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **S15** | 整段大声一点（增益/放大器） | make audio louder；amplify audio；volume booster；increase volume / 音频放大；提高音量 | 头 | `/audio-booster` 品类 | `make-a-quiet-recording-louder` | hub **且** scene |
| **S16** | 峰值拉齐，防一段大一段小 | normalize audio；peak normalize / 音频归一化 | 中 | 与 LUFS 分开写 | `normalize-an-audio-file-to-peak` | hub **且** scene |
| **S17** | 对齐播客/YouTube/Spotify 响度 | podcast loudness；lufs -16；youtube loudness；spotify -14 / 播客响度；lufs | 中 | 各平台不拆 URL，芯片默认 | `match-podcast-loudness-to-minus-16-lufs` | hub **且** scene |
| **S18** | 动态压缩（贴面、防削波） | audio compressor online；vocal compressor / 音频压缩器（动态） | 中 | 禁止与 S10 体积压缩混 H1 | `compress-dynamic-range-of-a-voice-recording` | hub **且** scene |
| **S19** | 限制器 / 防爆音 | audio limiter；prevent clipping / 限制器 | 长尾 | — | `limit-peaks-so-a-file-does-not-clip` | hub |
| **S20** | EQ 扫闷刺轰 | equalizer online；graphic eq audio / 在线均衡器 | 中 | `/online-eq` 头词不当 URL | `eq-a-muffled-voice-recording` | hub **且** scene |
| **S21** | 低音增强 | bass booster；boost bass mp3 / 低音增强 | 中 | 与 EQ 近义则 absorb S20 | `boost-bass-on-an-mp3` | scene 或 hub 芯片 |
| **S22** | 淡入淡出 | fade in fade out audio / 音频淡入淡出 | 中 | `/fade-in` | `fade-in-and-fade-out-an-audio-clip` | hub **且** scene |
| **S23** | 母带：限制 + 匹配参考曲响度 | online mastering；match loudness to reference / 在线母带 | 中 | — | `match-a-track-loudness-to-a-reference` | defer（易夸大） |

### F5 降噪与损伤修复

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **S24** | 人声备忘录去空调/风扇底噪 | noise reduction audio；remove background noise；denoise voice / 音频降噪；去除背景噪音 | 头 | `/noise-reduction`、`/audio-denoiser` 近义 | `reduce-background-noise-on-a-voice-memo` | hub **且** scene |
| **S25** | 会议/电话「听不清」增强 | enhance speech；adobe enhance speech alternative；voice enhancer / 语音增强；人声清晰 | 头 | 语种不拆 | `enhance-muffled-speech-in-a-recording` | **scene / defer**（RNNoise ≠ Enhance 级；诚实边界） |
| **S26** | 去 50/60 Hz 嗡嗡 | remove hum 50hz；dehum audio / 去电流声 | 长尾 | — | `remove-mains-hum-from-a-recording` | hub FAQ 或 scene |
| **S27** | 去咔哒/口喷/唱片裂纹 | declick audio；remove pops clicks / 去爆音 | 长尾 | — | `remove-clicks-from-a-recording` | hub |
| **S28** | 去回声 | remove echo from audio；de-echo / 去除回声 | 中 | — | `remove-echo-from-a-voice-recording` | defer（AEC 难） |
| **S29** | 去风噪/手持摩擦 | remove wind noise；mic rustle / 去风噪 | 中 | — | `reduce-wind-noise-on-a-phone-recording` | defer 或 hub |
| **S30** | 削波修复 | repair clipped audio；declip / 修复削波 | 长尾 | — | `repair-a-clipped-recording` | defer |
| **S31** | 去齿音 | de-esser online / 去齿音 | 长尾 | — | `de-ess-a-voiceover` | hub |

### F6 速度、音高、玩声特效

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **S32** | 变速、音高大致不变（练歌/卡点） | slow down audio；change speed without pitch；speed up song / 音频变速不变调；放慢歌曲 | 头 | `/slow-down-audio` 与 nightcore 近义要拆作业 | `change-audio-speed-without-changing-pitch` | hub **且** scene |
| **S33** | 变调、时长不变（降调伴奏） | pitch shifter；change pitch of song；semitone transpose / 音频变调；降调伴奏 | 头 | `/voice-changer` 不得冒充克隆 | `shift-the-pitch-of-a-song` | hub **且** scene |
| **S34** | 夜核：加速+升调一条龙 | nightcore maker / 夜核 | 中 | 不与 S32 再拆加速页 | `make-a-nightcore-version-of-a-song` | scene（芯片：Speed+Pitch） |
| **S35** | slowed + reverb | slowed reverb / 慢歌混响 | 中 | `/slowed-reverb` 空壳禁止无混响时硬吹 | `make-a-slowed-and-reverb-clip` | scene |
| **S36** | 8D / 绕耳 | 8d audio；8d converter；surround panning / 8d 音频 | 中 | `/8d-audio` 头词可作 scene 场景句 | `make-an-8d-panning-version-of-a-song` | scene |
| **S37** | 倒放 | reverse audio / 音频倒放 | 中 | `/reverse-audio` | `reverse-an-audio-file` | hub **且** scene |
| **S38** | 文件向玩具变声（松鼠/巨人/机器人/电话） | voice changer online；chipmunk voice；robot voice；helium voice / 变声器；松鼠音 | 头 | **禁止**做成明星克隆；与 03/04 V1 分作业 | `apply-a-toy-voice-effect-to-a-recording` | hub **且** scene |
| **S39** | 性别向听感（文件，非实时） | male to female voice changer；gender voice / 男声变女声 | 中 | 隐私；不承诺「真变成某性别」 | `shift-a-recording-toward-a-higher-or-lower-voice` | scene（V0 诚实） |
| **S40** | 混响/回声/延迟当特效 | add reverb to audio；echo effect / 音频混响 | 中 | 效果名不拆 URL | `add-reverb-to-an-audio-clip` | hub |
| **S41** | 自动修音（Auto-Tune 程度） | autotune online；pitch correction / 在线电音修音 | 中 | — | `correct-pitch-on-a-vocal-take` | defer |
| **S42** | 实时变声进游戏/Discord | real time voice changer；voicemod alternative / 实时变声 | 头 | — | — | **drop 网页**（11；走原生/驱动） |

### F7 多文件、叠加、视频交叉

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **A1** | 本地视频只要声音 | extract audio from video；mp4 to mp3；video to mp3 / 视频提取音频；mp4 转 mp3 | 头 | youtube 代抓见 drop；容器芯片不拆 URL | `extract-audio-from-a-video-file` | scene |
| **V1** | 视频去掉声音（静音成片） | remove audio from video；mute video / 视频去除音轨 | 中 | — | `remove-the-audio-track-from-a-video` | scene |
| **V2** | 给无声/弱声视频配上一条音 | add audio to video；merge audio with video / 视频添加音频 | 头 | — | `add-an-audio-track-to-a-video` | scene |
| **V3** | 换成另一条音轨（换 BGM） | replace audio in video；change video soundtrack / 替换视频音轨 | 中 | 与 V2 近则 0b 合并 | `replace-the-audio-in-a-video-file` | scene |
| **A2** | 多段 **首尾相接** 成一个文件 | join audio files；merge mp3；concatenate audio / 合并音频；拼接 mp3 | 头 | `/mp3-joiner` 品类 | `join-audio-files-in-order` | scene |
| **M1** | 两段 **叠在一起**（口播+垫乐）同时出声 | mix audio files；overlay audio；merge voice and music / 混合音频；人声配乐 | 头 | 与 A2 **不是**同一作业 | `mix-a-voiceover-with-background-music` | **scene**（可闪避） |
| **M2** | 两首歌交叉淡化切歌 | crossfade two songs；dj transition / 交叉淡化 | 中 | — | `crossfade-two-audio-files` | scene |
| **A5** | 音频 → 波形/唱片可视化视频 | audio to video；waveform video；audiogram / 音频转视频；波形视频 | 中 | audiogram 与 A5 0b 可合并 | `make-a-waveform-video-from-audio` | scene |
| **V4** | 音画不同步校准 | fix audio sync video / 音画同步 | 中 | — | `shift-audio-to-fix-video-sync` | defer |

**drop**：YouTube/播客 URL 代抓转 MP3（平台 ToS）。搜法 *youtube to mp3* 是 **头** 词，本站不接。

### F8 听懂：转写、字幕、翻译、纪要

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **A4** | 音频文件 → TXT/SRT | audio to text；transcribe audio；speech to text / 音频转文字；语音转文字 | 头 | `/arabic-speech-to-text` 等语种芯片 | `transcribe-an-audio-file-to-text` | scene |
| **T1** | 音频 → 烧轴字幕文件 | audio to srt；generate subtitles from audio / 音频生成字幕 | 头 | 与 A4 近：0b 定「文稿页」还是「字幕页」 | `make-srt-subtitles-from-an-audio-file` | scene 或 A4 芯片 |
| **T2** | 听 A 语出 B 语文稿/字幕 | translate audio；translate speech / 音频翻译；语音翻译 | 头 | 语对不拆 URL | `translate-an-audio-file-into-another-language` | defer（上传+模型） |
| **T3** | 说话人分离 + 姓名 | speaker diarization；who spoke when / 说话人分离 | 中 | — | `label-speakers-in-a-meeting-recording` | defer |
| **T4** | 会议摘要 / 待办 | meeting summary from audio；podcast notes / 会议录音总结 | 中 | YMYL 轻 | `summarize-a-meeting-recording` | defer |
| **T5** | 视频文件转写 | transcribe mp4；video to text / 视频转文字 | 中 | — | 先 A1 再 A4，或 A4 芯片「先抽音」 | scene 串联，不第三 URL |
| **T6** | 实时字幕 | live captions；real time transcription / 实时字幕 | 中 | — | — | defer |
| **T7** | 脏话蜂鸣 / PII 脱敏 | beep swear words；redact audio / 音频脱敏 | 长尾 | — | `beep-swear-words-in-a-podcast` | defer |
| **T8** | 在音频里搜一句话 | search inside audio；find quote in podcast / 音频内搜索 | 中 | — | 依赖 A4 | hub/A4 后续 |

### F9 生成：TTS、噪声、音调、音乐

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **G1** | 贴一段字，读成 MP3 | text to speech；tts online / 文字转语音；在线朗读 | 头 | 克隆自己见 G3 | `read-text-aloud-and-download-mp3` | **scene / defer**（Workers/第三方；诚实上传） |
| **G2** | 多角色对话 TTS | dialogue tts；character voices / 多角色朗读 | 中 | — | `read-a-script-with-multiple-voices` | defer |
| **G3** | 用我的几句话克隆我再 TTS | clone my voice tts / 克隆我的声音 | 头 | 未授权他人 **drop** | `clone-my-own-voice-to-read-text` | defer（03/04；同意流） |
| **G4** | 白/粉/棕噪发生器（单路） | white noise generator；brown noise；pink noise / 白噪音；棕噪音 | 头 | 医疗宣称 drop | `play-white-pink-or-brown-noise` | **scene**（与 A7 混合器不同） |
| **G5** | 音调/频率发生器 | tone generator；frequency generator；hz generator / 音调发生器 | 中 | — | `generate-a-sine-tone-at-a-frequency` | scene |
| **G6** | DTMF / 拨号音 | dtmf generator / 拨号音 | 长尾 | — | `generate-dtmf-touch-tones` | scene |
| **G7** | 双耳节拍 | binaural beats generator / 双耳节拍 | 中 | YMYL 克制 | `mix-binaural-beats-for-focus` | scene（不宣称疗效） |
| **A7** | 雨+风扇+噪 **多路推子** 睡眠 | rain sounds mixer；sleep sounds / 助眠音景；雨声风扇 | 中 | 疗效宣称 drop | `mix-rain-and-fan-for-sleep` | scene（素材许可关键） |
| **G8** | 文生 BGM | ai music generator；text to music / AI 生成音乐 | 头 | 训练版权 | `generate-background-music-from-a-prompt` | defer |
| **G9** | 把 BGM 拉长到视频时长 | extend music to video length / 延长背景音乐 | 中 | — | `extend-a-music-bed-to-a-video-duration` | defer |
| **G10** | 哼唱变旋律/编曲 | hum to midi；whistle to melody / 哼唱转旋律 | 长尾 | — | `turn-a-hum-into-a-midi-melody` | defer |
| **G11** | 文生音效 | text to sfx；whoosh generator / 文生音效 | 中 | — | `generate-a-sound-effect-from-a-prompt` | defer |
| **G12** | 通知/提示音制作 | notification sound maker；ui click sound / 提示音制作 | 长尾 | — | `make-a-short-ui-notification-sound` | scene 或 hub 铃声芯片 |

### F10 分离与身份（只要其中一层 / 像某人）

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **D1** | 歌里只要伴奏或只要人声 | vocal remover；remove vocals；karaoke maker；extract vocals / 去人声；卡拉 OK 伴奏；人声分离 | 头 | 不要再拆「只要鼓/只要贝斯」除非 stem | `remove-vocals-from-a-song` | defer（06 W2；版权） |
| **D2** | 分轨：人声/鼓/贝斯/其它 | stem splitter；demucs online / 音轨分离 | 中 | 乐器名不拆 URL | `split-a-song-into-stems` | defer |
| **D3** | 去 BGM 留口播 | remove music from speech / 去除背景音乐留人声 | 中 | 版权 | `remove-background-music-from-a-voiceover` | defer |
| **D4** | AI Cover 换歌手 | ai cover；sing in voice of / AI 翻唱 | 头 | 未授权明星 **drop** | — | drop 或 08 另产品 |
| **D5** | 用一批录音变成某个具体的人 | voice clone celebrity / 明星变声 | 头 | 05 敏感 | — | **drop** 未授权 |

### F11 测量、识别、练习

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **I1** | 看 BPM | bpm detector；bpm finder；tap tempo / 测 bpm | 中 | — | `detect-bpm-of-a-song` | scene |
| **I2** | 看调性 | key detector；what key is this song / 歌曲调性 | 中 | — | `detect-the-key-of-a-song` | scene |
| **I3** | 吉他/乐器校音 | guitar tuner online；chromatic tuner / 吉他调音器 | 头 | — | `tune-a-guitar-with-the-microphone` | scene |
| **I4** | 节拍器 | metronome online / 在线节拍器 | 头 | — | `tap-a-metronome-in-the-browser` | scene |
| **I5** | 识曲（一段录音是哪首歌） | identify song；shazam alternative；what song is this / 听歌识曲 | 头 | 哼唱见 I6 | `identify-a-song-from-a-short-clip` | defer（指纹库） |
| **I6** | 哼唱识曲 | hum to search / 哼唱识曲 | 中 | — | `identify-a-song-from-a-hum` | defer |
| **I7** | 音频 → MIDI | audio to midi / 音频转 midi | 中 | — | `convert-a-melody-recording-to-midi` | defer |
| **I8** | 音频 → 和弦/简谱 | chord finder from audio；transcribe guitar / 扒和弦 | 中 | — | `find-chords-in-a-song-recording` | defer |
| **I9** | 独立响度表（不一定导出） | lufs meter；true peak meter / 响度计 | 长尾 | — | `measure-lufs-of-an-audio-file` | scene 或 hub 计量 |
| **I10** | 频谱/语谱图查看 | spectrum analyzer；spectrogram / 频谱分析 | 长尾 | — | `view-a-spectrogram-of-an-audio-file` | hub View |
| **I11** | 听歌对照跑调（音高曲线） | pitch monitor；see if i am in tune / 音高显示 | 中 | — | `show-pitch-curve-of-a-vocal-take` | defer |
| **I12** | 版权像不像已有商业曲 | copyright audio check；content id check / 音频版权检测 | 中 | 误差敏感 | `check-if-a-clip-matches-known-tracks` | defer |
| **I13** | 鸟种识别 | bird sound identifier / 鸟鸣识别 | 长尾 | — | `identify-a-bird-from-a-recording` | defer |
| **I14** | 鼾症/哭声「诊断」 | sleep apnea audio；baby cry translator / 鼾症；哭声翻译 | 中 | YMYL | — | **drop 诊断**；最多记录 |

### F12 元数据与发行文件

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **A6** | 改曲名/封面，采样不变 | mp3 tag editor；id3 editor；add cover art to mp3 / mp3 标签；改封面 | 中 | — | `edit-mp3-title-and-cover-art` | scene |
| **U1** | 只看标签/码率/时长（不改） | mp3 metadata viewer；audio file info / 音频信息 | 长尾 | 可 absorb 已上线 `file-metadata-analyzer` | — | **absorb 已有工具** |
| **U2** | 抽出已有封面图 | extract album art / 提取封面 | 长尾 | — | `extract-cover-art-from-an-mp3` | scene 或 A6 芯片 |
| **U3** | 内嵌歌词 | lyrics tag mp3 / 歌词标签 | 长尾 | — | `embed-lyrics-in-an-mp3` | A6 芯片 |
| **U4** | ReplayGain 扫描 | replaygain / 回放增益 | 长尾 | — | `scan-replaygain-for-a-track` | defer |

### F13 库、音板、批量剪法

| ID | 用户作业 | 搜法簇 | 档 | 近义不拆 | 草稿 slug | 落地 |
|---|---|---|---|---|---|---|
| **L1** | 直播音板快捷放梗 | soundboard online；airhorn button / 音效板 | 中 | 版权素材 | `play-a-live-soundboard-in-the-browser` | defer（素材） |
| **L2** | 100 条口播同一套去片头 | batch trim audio；bulk cut intro / 批量裁剪音频 | 中 | — | `batch-trim-the-same-intro-from-audio-files` | scene |
| **L3** | 自然语言搜「雨打铁皮」素材 | search sound effects / 搜索音效 | 中 | 库产品 | — | defer（11 第一年不做库进 Hub） |

### F14 明确 drop / 不做单点页

| 想法 | 搜法（仍可能是头词） | 原因 |
|---|---|---|
| YouTube/Bilibili URL → MP3 | youtube to mp3 | 平台 ToS；STT 专文也不代抓 |
| 播客 RSS 扒全集 | download podcast mp3 | 平台/版权 |
| `/sound-editor` 当 URL | sound editor | 头词；Hub title 承接 |
| 每一格式对一张空壳 | wma to opus … | Aconvert 矩阵 |
| 每一语种一张转写 | arabic speech to text | A4 芯片 |
| 8D / 夜核 / 淡化 **互为近义换 title** | — | 上表已各有作业；禁止再复制空壳 |
| 未授权明星说话/唱歌 | celebrity voice changer | 05/06 L4 |
| 医疗诊断 | sleep apnea test | YMYL |
| 网页实时变声进游戏 | voicemod online | 11 停做 |

---

## 3. 与旧 A1–A8 对照

| 旧 ID | 仍保留 | 本轮补上的「同类但不同作业」 |
|---|---|---|
| A1 视频抽音 | 是 | V1 去音轨、V2 配音、V3 换轨 |
| A2 顺序拼接 | 是 | M1 叠加混音、M2 交叉淡化、L2 批量同一剪法 |
| A3 静音切多段 | 是 | S2 去静音仍一段、S3 按时长切、S4 cue 分轨 |
| A4 转写 | 是 | T1 字幕、T2 翻译、T3 说话人、T5 视频转写串联 |
| A5 波形视频 | 是 | 与 audiogram 0b 可合并，不第三张近义页 |
| A6 ID3 | 是 | U1 absorb 站内文件信息工具；U2 抽封面 |
| A7 睡眠混合 | 是 | G4 单路噪声发生器（不是推子） |
| A8 批量 WAV→MP3 | 是 | P1–P6 单文件高搜 pair；S10 体积压缩 |

---

## 4. SEO 落点规则（写 brief / 0b 时用）

1. **头词**进 Hub 或 scene 的 title/FAQ，不当进攻 URL（*sound editor*、*mp3 cutter*、*wav to mp3*、*voice recorder*、*audio to text*、*youtube to mp3*）。scene 的 slug 用 **情境句**。  
2. **一行作业只准一个主 URL**。近义列进 FAQ，不建第二页。  
3. Hub 芯片必须能办的，scene 上线后 related **互链**；禁止 scene 假装「本站没有编辑器」。  
4. scene How = 该页主按钮原文（Convert / Extract / Mix / Transcribe），不要抄 Hub 的 Trim 菜单。  
5. 体积压缩（S10）与动态压缩（S18）H1/FAQ 必须拆开，否则搜 *mp3 compressor* 的人会下错文件。  
6. 玩具变声（S38）FAQ 必须声明 **不是克隆某人**（指向 03/04）。  
7. 未跑 Planner 的「档」只用于排序讨论，**不能**当「搜索量大所以立刻立项」。  
8. 语言：每语 0b 重跑搜法（剪辑/裁切/剪切；降噪/去底噪）；禁止英模关键词表直译验收。

---

## 5. 规划（本表不自动排期）

依赖：scene **不要**复制一整份 Hub 波形当空壳；能复用解码/编码/HUD/vendor。S1 类裁剪页若立项，应是起止控件 + 导出，失败卡与 Hub 精剪不同。

```
时间 →
P0  Hub S1（11 阶段 A→D）                 ████████
    A1 抽音 POC 可并行                      ████
P1  A1 抽音 + A2 拼接                        ████████
    （口令到再议：P1 pair WAV→MP3 或 S7 录音单点）
P2  Hub S2 包装；A3 或 A4 二选一             ████
P3  A5 / A6 / A8 / A7（授权）按 0b 缺口      按口令
    F7 V2/V3、F3 S10、F5 S24、F9 G4/G1     未口令不排
```

| 顺序 | 做什么 | 完成标准 |
|---|---|---|
| **P0** | Hub S1 | 11 §4.4；十语；`verify:tool` |
| **P1** | A1 + A2 | 抽音无波形精剪；拼接是列表 |
| **P2** | Hub S2，再 A3 或 A4 | LUFS 可读；A4 隐私诚实 |
| **P3** | A5/A6/A8/A7 | 禁止格式矩阵 |
| **未排** | 本表其余 scene/pair/defer | 用户点名 ID 或 slug 才进 0b |

**并行**：只允许 POC 并行。页面 / i18n 必须串行。

---

## 6. 冲突裁决

| 说法 | 听谁 |
|---|---|
| 11「永不拆 mp3-cutter / recorder / wav-mp3」 | **Hub 能力仍必须能办。** 本表允许它们同时成为 **scene 候选**；真建 URL 须另口令 + 0b 满 IG，禁止空壳 |
| 「同一 JS 控件就不能出现在单点清单」 | **本页否决。** 清单听作业+搜法；控件只影响实现成本，不删行 |
| 「细化 = 每个搜法一张页」 | **否。** 近义仍合并；上表「近义不拆」列 |
| 媒体试点「抽音宜作视频转码页内模式」 | 尚无视频转码 Hub → A1；V2/V3 是不同作业可另 scene |
| 06「格式+抽音+铃声都进编辑器 W1」 | Hub 要能办；高搜 pair/铃声仍可 scene |
| 02「v1 不 demux 视频」 | Hub 拒绝视频，引导 A1 |
| Google doorway / scaled content | **高于本表任何 scene 冲动** |
| 05 宇宙 vs 本表 | 05 更宽（实时、库、平台壳）；本表只收「可做成一个工具页」的作业 |

---

## 7. 开始条件

- **Hub**：用户说「按方案执行 / 立项」→ 只开 `work-tasks/{hub-slug}/`（11 阶段 A）。  
- **某一单点**：用户点名本表 ID 或草稿 slug → 单独复制 `_template`，跑 0b。  
- 本页 **不** 因写全表而建多个 work-tasks，也 **不** 把 scene 候选自动排进实现队列。

0b 时若 SERP 显示该长尾已被精确页占满：改场景句或改 `defer`，**不**改回品类头词，也 **不** 用近义再拆一张。
