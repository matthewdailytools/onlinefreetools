# 02 — 产品设计：本站波形 Sound editor（AudioMass 整树 + SEO 吸收）

**日期**：2026-09-09  
**状态**：第十二轮改写；**不是** work-tasks `ready`（未跑 0b / 0i）  
**主方向**：A（浏览器 JS）  
**YMYL**：否  
**草稿 slug**：`edit-audio-on-waveform`  
**路径草稿**：`/tools/edit-audio-on-waveform`  
**吸收的清单旧名**：`audio-trim`、`audio-recorder`、`audio-wav-mp3`（**不**再各开一页）  
**调研**：[01-js-implementation-research.md](./01-js-implementation-research.md)

> slug / H1 以立项 0b 为准。对外禁止写「最好」。对内用 01 §5 质量杠验收包装层。

---

## 1. 一句话产品

在本站工具页里打开一段音频或当场录进去，用 **AudioMass 内核** 在波形上剪、修、听、混，再导出 WAV / MP3 / FLAC。文件留在本机标签页。  
这一页就是 Sound editor：不是薄裁剪器，也不是要登录的云 DAW，也不是 audiomass.co 的 iframe。

---

## 2. 对用户可观察的承诺（Why choose 只能写这些）

1. 不注册、不上传、立体声、导出无水印、无「免费 5 分钟」  
2. 选区剪贴 + 撤销；默认过零点，避免接口咔哒  
3. 效果先试听再 Apply  
4. 能看见峰值和响度（LUFS），播客可对齐常见目标  
5. 人声降噪、淡化、压缩、EQ、变速/变调都是 **本页菜单里的命令**  
6. 处理中有大卡片进度（解码 / 效果 / 导出）  
7. 十语界面；主文案快捷键跟系统（Ctrl/Cmd+Z）  

**不承诺**：VST、专业母带链、自动分轨、300 种格式、Audacity 插件库、用一批录音克隆某人（见 03/04）。

---

## 3. 用户作业（进页默认 = 第一条）

| 优先级 | 情境 | 动作 | 结果 |
|---|---|---|---|
| **P0 默认** | 播客/会议/备忘录有口误、废片头 | 选区删除/修剪、淡化、导出 | 可发布的一段 |
| P0 | 音量忽大忽小 / 平台要响度 | 压缩或归一化 | 符合交付的响度 |
| P0 | 底噪人声 | 选区降噪、试听、Apply | 更干净的人声 |
| P0 | 只要转 MP3 / 只要录一句 | Export 选 MP3；或 Record 进空工程 | 同一页办完 |
| P1 | 配乐垫在人声下 | 多轨：垫乐降音量 / 独奏 | 简易混音后 mixdown |
| P1 | 铃声 / 游戏循环 | 修剪 + 淡化 + Seamless loop | 短片段 |
| P2 | 倒放、变调玩声 | Reverse / Pitch（V0） | 玩具效果；FAQ 写清不是克隆 |

裁剪、录音、转码 **都在本页完成**。搜 *mp3 cutter*：默认就是选区 + Trim/Export。搜 *wav to mp3*：整段不剪、Export MP3。搜 *voice recorder*：Record。

---

## 4. 头词与 URL

| 词 | 角色 | 落点 |
|---|---|---|
| *sound editor* / *online audio editor* / *audio editor* | 头词 | **title / FAQ / Why choose**；H1 用场景句（0b 定） |
| *mp3 cutter* / *trim audio* / *cut mp3* | 同意图 | How + Use cases + 默认选区修剪 |
| *noise reduction* / *normalize audio* / *fade in fade out* | 页内命令 | 菜单名与 FAQ 各一条 |
| *pitch shifter* / *reverse audio* / *slow down audio* | 页内命令 | FAQ；声明 V0，不是克隆 |
| *online DAW* / *multitrack* | 部分 | FAQ + 多轨按钮；**H1 不改成 DAW** |

**禁止拆页**（doorway）：`/sound-editor`、`/mp3-cutter`、`/audio-trim`、`/wav-to-mp3`、`/voice-recorder`、`/fade-in`、`/normalize-audio`、`/online-eq`、`/audio-looper`、`/online-daw`。

H1 草稿（en，待 0b）：**Edit audio on a waveform and export WAV or MP3**  
H1 草稿（zh）：**在波形上编辑音频并导出**  
Lead：剪贴、淡化、响度、人声降噪；需要时两轨混音；文件留在设备。禁止把 EQ 频段名、库名、AudioMass 堆进 H1。

---

## 5. 信息架构

上半是 **编辑器 chrome**（AudioMass 表面 + 本站顶栏），下半是可索引说明。

### 5.1 编辑器 chrome（桌面）

本站顶栏（Open / Record / Undo / Export）与 AudioMass 菜单 **命令对齐、用词一致**，避免 How 写「Export」页面上却叫「Download file」。

```
[ 打开文件 | 录音 ]     工程名     [ 撤销 重做 ]     [ 导出 ]
------------------------------------------------------------------------
传输：  录  停  播/暂停    时间码    循环
计量：  峰值 dBFS | 集成 LUFS（选区或全曲）——包装层必须露出
------------------------------------------------------------------------
标尺 + 标记
波形（可缩放、拖选；默认过零吸附）
------------------------------------------------------------------------
选区起止（与波形双向）
主命令： Trim to selection | Delete | Silence | Fade in | Fade out
更多：  上游 Effects 全套（见 §6）+ MultiTrack
```

主输入仍是 **一种**：本地文件（dropzone）。录音是同一工作区的命令。无云盘、无「粘贴网盘 URL」。

### 5.2 按钮层级

本页 **不是** Convert → Download 单次作业。仍遵守：无云盘、设置不进传输行、重活用金标 HUD。

| 区域 | 控件 |
|---|---|
| 顶栏主操作 | **Export**（有可导出缓冲才 enabled） |
| 顶栏次操作 | Open、Record、Undo、Redo、Load sample、Clear |
| 波形下主命令 | Trim / Delete / Fade — 立即改缓冲（上游语义） |
| 导出对话框 | 格式（WAV/MP3/FLAC）、WAV 位深、MP3 比特率、文件名；确认后 HUD：Render → Encode → 浏览器下载 |

### 5.3 效果面板

常用命令外露（Trim、Delete、Fade）。EQ/压缩/降噪/变速/变调/混响等走「效果」面板。  
每个破坏性效果：Preview → Apply → Close。包装层发现某命令没有 Preview，v1 **不要在 SEO 正文吹它**，或补预览再写进 How。

### 5.4 移动

竖屏保底：Open、波形选区、播放、Trim/Delete、Fade、Export WAV。  
多轨与 EQ 进菜单，不保证小屏旋钮体验。HUD 仍全屏卡片。

### 5.5 页下模块（tool-creation）

How 步骤必须用按钮原文。  
Why choose ≥4 条，全部可在 chrome 验证。  
Rules：体积帽、过零点、LUFS、RNNoise 人声限制、变速范围、格式表、MIT 致谢放 References 不放正文卖点。  
Example = Load sample 行为。  
FAQ：是否上传、和 Audacity / mp3cut / 官方 AudioMass 差在哪、能否只转 MP3、降噪为何搞坏鼓、变调是不是克隆。

---

## 6. 功能清单（v1 = copy 带来的能力，不要再砍成裁剪器）

下列均来自上游 about / 源码；包装层负责 i18n、HUD、文件帽、露出计量。

**编辑**

- 打开浏览器能解的音频（失败人话；格式表写 UA 差异）  
- 波形缩放/滚动、选区、时间码、标记（M）  
- 过零吸附（默开）  
- Trim、Delete、Insert silence、Cut/Copy/Paste、Undo/Redo  
- Fade in/out、增益、反向、反相  
- 播放选区、循环、空格播放  
- 节拍检测 / 吸附（有则保留；FAQ 一条）  

**效果（Apply 前可听）**

- 峰值归一化；压缩；段落 EQ / 图形 EQ  
- 混响、延迟、失真、硬限制  
- 人声降噪（RNNoise wasm，首次 Apply 再加载）  
- Pitch / Speed / Playback rate（**三个入口，文案拆开**）  
- 音高/速度曲线（graph profile）  
- 去咔哒 / 去哼声 / 修硬切点  
- Seamless loop（交叉淡化预览）  

**录音**

- 麦克风写入 playhead；多轨时可录到 armed 轨  
- 须手势；权限失败卡片  

**导出与工程**

- WAV（16-bit 默认；24-bit 若上游已有则露出）  
- MP3 128 / 192 / 320（lamejs 懒加载）  
- FLAC（懒加载 wasm）  
- 无水印、无账号  
- 本地草稿 / `.amss`（IndexedDB）；FAQ 写清「只在这台浏览器」  

**多轨**

- 多轨 clips、边沿修剪、自动交叉淡化、音量/声像/静音/独奏、mixdown  
- v1 **打开**，不要藏起来分期  

**工程包装（本站加）**

- 金标 HUD：Decode / Effect / Render+Encode  
- Load sample：短语音型合成或许可短语音，进页出波形可播放  
- 桌面 Chrome + 桌面 Safari POC 门禁  
- 十语  

### 明确永不做（本 slug）

- VST / 插件市场；5 轨以上无限 DAW  
- 云盘、YouTube 扒流  
- 嵌 Wavacity、Rubber Band GPL、iframe audiomass.co  
- AI 人声分离 / 生成配乐（上传或巨大模型）当本页 v1  
- 格式矩阵子 URL、一功能一 URL  
- **用一批某人录音做音色克隆 / RVC**（03/04；本页最多 V0 变调）  
- 把上游 `about.html` 整段当本站 SEO 正文  

### 上市后可选（不挡 v1）

- 用 EDL 换掉整缓冲拷贝（内存）  
- WaveSurfer v7 / 自绘可见区  
- Mediabunny 超长文件无波形 trim  
- SoundTouch 若上游变速质量不够再换（LGPL，NOTICE）  

---

## 7. 限制与失败

| 条件 | 行为 |
|---|---|
| 文件 > **40 MB**（桌面）/ **20 MB**（<(768px)） | 不 decode；说明内存原因（上游会整段拷贝） |
| 解码后 > **20 分钟** 桌面 / **8 分钟** 移动 | 拒绝；建议先在本机压时长 |
| 选区 < 50 ms 还 Delete | 允许；Fade < 50 ms 拒绝 |
| RNNoise 用于音乐 | FAQ + 试听；不静默损坏 |
| 变速超出约 0.5–2.0× | 警告人工痕迹；仍可 Apply |
| Safari 未 resume | 第一次播放/录音时 resume |
| 解码失败 | 「换 WAV/MP3 或换浏览器」 |
| 隔离检测失败 | 闭包或同源 iframe；禁止为绿检测而关掉编辑器 |

---

## 8. 样例

- 进页 `loadSample()`：3–4 秒双声道语音型 + 可听见的底噪，便于演示降噪  
- 默认选区覆盖含噪尾约 0.5 s  
- Example：打开样例 → 听 → 对人声尾做降噪试听 → Export WAV  
- 自动跑：**解码 + 出波形 + 不自动 Apply 降噪**（避免一进页就拉 RNNoise wasm）  

例外写进立项 02：不自动跑 RNNoise / 重变速。

---

## 9. 进度 HUD

对照 `/tools/batch-convert-web-pages-to-jpg`。套在上游进度回调上，不要两套转圈。

| 触发 | 胶囊 |
|---|---|
| Open / 进页样例解码 | Decode |
| Apply 压缩/EQ/归一化 | Render |
| Apply 降噪 / 重变速 | Effect（WASM）→ Render |
| Export | Render → Encode |

成功导出：HUD 100% 指向「已开始下载」或浏览器下载栏；不要瞬间 hidden。  
失败：同等尺寸错误卡。

---

## 10. Related

本编辑器吃掉三件音频作业后，related 指向 **真相邻、已上线** 的工具：

| slug | 差在哪 |
|---|---|
| `file-metadata-analyzer` | 只看容器/码率，不改音频 |
| `file-hash` | 校验导出文件 |
| 以后：从视频抽音 | 若另做 extract 页再链；v1 **不**做视频 demux |

不要 related 到不存在的 `audio-trim`，不要 related 到 audiomass.co 当「本站工具」。

---

## 11. Information Gain（计划）

| 维度 | 体现 |
|---|---|
| 规则 | 过零点、LUFS 目标表（播客 -16 / 音乐 -14 / EBU -23）、变速范围 |
| 边界 | 体积/时长帽、RNNoise 仅人声、格式随 UA |
| 对照 | 本页 vs 上传裁剪站 vs 桌面 Audacity vs 免费 TwistedWave 单声道墙 vs **官方 AudioMass**（我们：十语、本站 chrome、HUD、可索引场景文案） |
| 隐私 | 不上服务器；脚本同源 `/vendor/` |
| 数值例 | Example：样例时长、选区、导出大约体积 |

Why choose 草稿（须可点）：

1. 剪贴和撤销都在本标签页，文件不先交服务器  
2. 导出前可对效果试听  
3. 响度能看见，不只是拉满峰值  
4. 立体声与 MP3 比特率不设免费墙  
5. 解码/效果/导出有大卡片进度  

---

## 12. 功能细化做 SEO（吸收表）

立项写 i18n 时：**每一行都要有落点**；没有落点的能力不要在 meta 里吹。  
H1/title 仍只打默认作业；其余进 FAQ / Use cases / How 另步 / 菜单可见名。

### 12.1 能力 → 搜法 → 落点

| # | AudioMass 能力 | 典型搜法（en；当地语 0b 再扩） | 页内落点 | 不拆的 URL |
|---|---|---|---|---|
| 1 | 波形编辑工作台 | sound editor, online audio editor, waveform editor | title、FAQ「这是编辑器不是裁剪站」、Why | `/sound-editor` |
| 2 | 选区修剪/剪切/粘贴 | mp3 cutter, trim audio, cut mp3, crop audio | **默认 How**；主按钮 Trim/Delete | `/mp3-cutter` |
| 3 | 淡入淡出 | fade in fade out, audio fade | Use case 铃声；菜单 Fade | `/fade-in` |
| 4 | 增益 | change volume audio, amplify audio | 菜单 Gain；FAQ | — |
| 5 | 峰值归一化 | normalize audio, peak normalize | 效果 + FAQ；与 LUFS **分开两条** | `/normalize-audio` |
| 6 | 压缩 | audio compressor online | 效果 FAQ；参数人话 | — |
| 7 | EQ | equalizer, graphic eq, paragraphic eq | 效果；**不进 H1** | `/online-eq` |
| 8 | 人声降噪 | noise reduction audio, denoise voice, remove background noise | FAQ + Rules 人声边界 | `/noise-reduction` |
| 9 | 变调 | pitch shifter, change pitch of audio | FAQ；**V0，不是克隆** | `/voice-changer` 当克隆页 |
| 10 | 变速 / 播放速率 | slow down audio, speed up song, change playback speed | FAQ；与 9 **拆开写**（相对 mp3cut 的 IG） | `/slowed-reverb` 空壳 |
| 11 | 倒放 / 反相 | reverse audio | Use case | `/reverse-audio` |
| 12 | 录音 | voice recorder, record audio online, record in browser | How 备路径；按钮 Record | `/voice-recorder` |
| 13 | 导出 MP3/WAV/FLAC | wav to mp3, convert wav to mp3, export mp3, flac export | Export 对话框 + FAQ「整段不剪=转换」 | `/wav-to-mp3` |
| 14 | 标记 | audio markers, cue points | FAQ | — |
| 15 | 过零点 | （低搜，做 IG） | Rules | — |
| 16 | 节拍吸附 | snap to beat, bpm grid audio | FAQ | — |
| 17 | 无缝循环 | seamless loop, audio loop crossfade, game loop | Use case 铃声/游戏 | `/audio-looper` |
| 18 | 修咔哒/哼声 | declick audio, remove hum | FAQ | — |
| 19 | 多轨 + mixdown | multitrack editor, voice over music, mixdown | FAQ + Use case 垫乐；H1 不改 DAW | `/online-daw` |
| 20 | 本地草稿 / .amss | （低搜） | FAQ「只在这台浏览器」 | — |
| 21 | ID3 | mp3 tags editor | 高级 FAQ；弱则不要进 meta | `/id3-editor` 除非真做成主作业 |
| 22 | 频谱/分析器 | spectrum analyzer | View；不进 H1 | — |

### 12.2 Use cases 草稿（英文页；十语另写）

每条必须能在 chrome 点出来，禁止空场景。

1. Cut a mistake out of a podcast waveform and export MP3.  
2. Trim a song clip, fade the edges, and save a ringtone-length file.  
3. Normalize or compress a voice memo so levels are even.  
4. Reduce hiss on speech with noise reduction, preview, then apply.  
5. Record a second take into the same timeline and export one file.  
6. Export a WAV as MP3 without uploading.  
7. Drop voice and bed music on two tracks, lower the bed, mixdown.  
8. Make a seamless loop with crossfade for a game or stream bed.  

变调/倒放可作第 9 条；必须加一句「does not clone another person’s voice」。

### 12.3 FAQ 必须覆盖的问法

- Do you upload my audio?  
- Is this an editor or only a cutter?  
- Can I just convert WAV to MP3?  
- Can I record from my microphone?  
- Why did noise reduction hurt the drums?  
- Pitch shift vs speeding up: what’s the difference?  
- Do you support two tracks?  
- How is this different from Audacity / mp3cut / AudioMass.org?  
  （最后一条：不上传同赛道；本站十语与页下说明；内核致谢 MIT，不把品牌当 H1）  

### 12.4 文案纪律

- 用户正文禁止「最好 / Best / 100% / 免安装堆砌」  
- 禁止库名当卖点（wavesurfer、lamejs、RNNoise、AudioMass 进 **References**）  
- 一头词一 URL；0b 未做则本节 H1 不得当上线文案  
- 不要为进 AI Overview 加 FAQ 富结果 KPI 或 `llms.txt`  

---

## 13. 工期粗估（供立项，非承诺）

| 块 | 粗量 |
|---|---|
| vendor 整树入库 + LICENSE/NOTICE + `lint:vendor` | 小 |
| Page.ts 宿主、同源隔离或闭包、opts chrome | 中 |
| 十语抽弦 + How/FAQ/Use cases 按 §12 写满 | 中（coverage 常态） |
| 金标 HUD 接到上游进度 | 小–中 |
| 文件帽、失败卡、Load sample | 小 |
| 竖屏保底三条路径 | 中 |
| EDL 换引擎 | **不做 v1** |

建议 POC：**vendor 能在 Chrome/Safari 桌面打开样例、Trim、Undo、Export WAV**，再抽 i18n 与 HUD。不要先重写波形库。

---

## 14. 开放问题（0b / POC）

1. H1 用 *edit audio on a waveform* 还是当地检索更强的场景句？（头词仍不进 URL）  
2. 样例用合成噪底还是真实短语音（许可）  
3. 40 MB / 20 分钟帽是否过严，用真机测（copy 后内存更紧）  
4. 隔离：闭包是否够，还是必须同源 iframe  
5. FLAC 导出是否进 v1 主文案（能力有；弱需求可只留对话框、不进 H1/meta）  

---

## 15. 设计结论

| 项 | 第十二轮决定 |
|---|---|
| 产品 | 完整波形 Sound editor，内核 = AudioMass 整树 |
| URL | 一页吸收剪 / 录 / 转码 / 效果 / 两轨；**按功能拆页禁止** |
| v1 | copy 的全部日常能力 + 本站十语/HUD/帽/隔离；**含多轨** |
| 后续 | EDL、换波形库、超长文件 trim |
| 不做 | Wavacity、外站 iframe、云 AI 克隆、格式矩阵 URL |

若工期逼人：**先砍竖屏炫技和频谱进 SEO，不砍 Trim/撤销/导出/HUD/不上传。** 砍掉剪贴只留裁剪，就退回第一轮失败产品。
