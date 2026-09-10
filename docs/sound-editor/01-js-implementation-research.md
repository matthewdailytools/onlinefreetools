# 01 — JS 实现 Sound editor 调研（第十二轮：整树复制 AudioMass）

**日期**：2026-09-09  
**状态**：第十二轮改写；第三轮「完整编辑器、不要薄裁剪器」仍成立；**实现路径改为整树复制 AudioMass**  
**产品**：[02-product-design.md](./02-product-design.md)  
**上游**：[pkalogiros/AudioMass](https://github.com/pkalogiros/audiomass)（MIT 原文 + 第三方各许可证）

---

## 1. 产品档没变：不要薄裁剪器

第一轮把市场理解成 mp3cut：选起止点、下载。那是 **高频薄作业**，不是 *sound editor*。

搜索 *sound editor* / *online audio editor* 的人要的是波形上的真编辑：剪贴、修音量、淡化、降噪、变速、撤销、导出。

| 若只做裁剪器 | 后果 |
|---|---|
| 对 *sound editor* | 打开页办不成「编辑」，FAQ 还要承认「我们不是编辑器」 |
| 对本站 | 再拆 `audio-trim` + `audio-recorder` + `audio-wav-mp3` 三薄页，违反「一带多场景」 |

**仍成立**：一页做完整波形编辑器；裁剪、录音、导出都是同一套控件上的命令，**不拆 URL**。

第十二轮推翻的是另一句：**不要再从零写 EDL 引擎、也不要「只读算法不搬壳」。** 用户明确可 **完全 copy** [AudioMass](https://github.com/pkalogiros/audiomass)。

---

## 2. 市场四摊（打法更新）

| 摊 | 代表 | 用户要什么 | 本站打法（第十二轮） |
|---|---|---|---|
| **A. 云编辑器** | TwistedWave、Kapwing、VEED | 账号、上传、大文件 | 反面教材：上传、时长墙、水印 |
| **B. 上传裁剪站** | mp3cut / 123apps | 快剪、铃声、吹「300 格式」 | 作业 **absorb** 进本页 How/FAQ，不另开 URL |
| **C. 本地网页编辑器** | **AudioMass**、SliceTune | 不上传的真编辑 | **引擎 = 整树复制 AudioMass**；本站加十语、金标 HUD、隔离、可索引说明 |
| **D. 桌面移植** | Wavacity（Audacity → WASM，GPL-2） | 桌面全套 | **仍禁止嵌入** |

AudioMass 2026 能力（about / 源码）：单轨剪贴、效果预览、标记、过零点、节拍吸附、无缝循环、人声 RNNoise、LUFS 灯、MP3/FLAC 导出、录音、**多轨 clips / 交叉淡化 / .amss 工程**。作者自述弱项：主线程滤镜卡死、`decodeAudioData` 不可取消、移动端弱。这些变成 **包装层** 要补的（HUD、文件帽、竖屏保底），不是另写一套 DSP。

**不打的仗**：VST、32 轨、视频时间线、AI 分轨/人声分离当 v1、声称 300 种格式、嵌 Wavacity。

---

## 3. 许可：为什么「可以完全 copy」

官方 `LICENSE`：

> AudioMass **original code** is licensed under the MIT License.  
> Bundled third-party libraries keep their own licenses. See `THIRD_PARTY_NOTICES.md`.

MIT 允许：使用、复制、修改、合并、发布、再许可、销售。条件：

1. **保留** `Copyright (c) 2018-present Pantelis Kalogiros` 与 MIT 许可全文（vendor 目录内 `LICENSE`）。  
2. **不得**把第三方文件当成 MIT。必须原样带上 `THIRD_PARTY_NOTICES.md`。

| 捆绑库 | 路径（上游） | 许可 | 本站 |
|---|---|---|---|
| AudioMass 原文（engine/UI/多轨） | `src/*.js` 等 | **MIT** | **整树可 copy** |
| WaveSurfer 2.0.5 + regions | `src/dist/wavesurfer*.js` | BSD-3 | 可；保留版权声明 |
| lamejs / LAME | `src/lame.js` | **LGPL** | 可；**动态加载** + NOTICE；不静态链进 GPL 传染叙事 |
| libFLAC + wasm | `src/flac*.js`、`libflac.wasm` | Xiph / BSD | 可 |
| RNNoise | `src/rnn_denoise.js` + `.wasm` | BSD-3 | 可；FAQ 写清「对人声」 |
| lz4/lzma 包装 | `src/lzma.js` 等 | BSD-2 | 可（.amss / 草稿压缩） |

| 仍禁止 | 原因 |
|---|---|
| **Wavacity / Audacity WASM** | GPL-2 整包传染 |
| **rubberband-wasm** | GPLv2 |
| 首屏 FFmpeg GPL core | 体积 + 许可 |
| 把 AudioMass **iframe 到 audiomass.co** | 不是 copy；依赖外站、无十语、无隔离 |

「完全 copy」= 把上游 `src/`（及构建出的 `all.build.js` 所用文件）**纳入本仓库 vendor**，在本域运行。不是外链官方站。

---

## 4. 怎么 copy 进本站（硬约束）

目标：用户打开的是 **本站 `opts` 工具页**，编辑器内核是 AudioMass，不是从零波形引擎。

```
本站 chrome（页头、十语切换、页下 How/FAQ）
  └─ 编辑器宿主（Page.ts）
        └─ vendor/audiomass/*   ← MIT 整树 + 第三方 wasm/js
              解码/波形/剪贴/FX/多轨/导出 全在标签页内
```

| 项 | 做法 |
|---|---|
| 落盘 | `public/vendor/audiomass/`（kebab；**入库 Git**）。禁止 jsDelivr / cdnjs / unpkg |
| 声明 | 同目录放上游 `LICENSE` + `THIRD_PARTY_NOTICES.md`；构建登记进 copy-vendor 脚本（立项时） |
| 入口 | `Page.ts` 初始化 PKAE / 等价 `init`；`<script src="/vendor/audiomass/...">` |
| 隔离 | `lint:tool-isolation` 必须绿。若全局 `PKAE` 污染窗口：优先 **闭包包一层**；不行则 **同源 iframe** 嵌 vendor 页（仍是本域 copy，不是外站） |
| 进度 | AudioMass 自带百分比 modal 时，**套金标 HUD**（对照 batch-convert-web-pages-to-jpg）：解码 / 效果 / 编码；主线程长滤镜必须能看见进度，禁止静默卡死 |
| 文案 | AudioMass 菜单/按钮字符串抽到 i18n 分片（十语）；**不要**把他们的 `about.html` 营销段贴进本站 SEO 正文（重复内容 + 无增量） |
| 品牌 | H1/title **不写 AudioMass**；References 可链 GitHub 致谢 MIT |
| 快捷键 | 上游 2026 已同时有 Shift+ 与 Ctrl/Cmd+；包装层保留两者，How 用 **Ctrl/Cmd** 当主文案 |
| 懒加载 | lame / FLAC / RNNoise wasm **点击对应命令再加载**，避免首屏 CWV 被编码器拖死 |
| lint | `lint:vendor`；FAQ 禁止写「库从 CDN 加载」 |

**明确不是 v1 的工作**：把 WaveSurfer 2.x 换成 v7、把整缓冲拷贝改成 EDL。那是内存/GC 的后续优化（见 §8），不挡上市。

---

## 5. 「最好」质量杠（copy 之后仍要验收）

对外文案仍写可观察行为，不写「最好」。Copy 解决的是 **能力清单**；下面几条是 **本站包装必须补齐** 的，否则只是换皮镜像。

| # | 杠 | copy 后谁负责 |
|---|---|---|
| Q1 | 音频不出标签页；无账号 | AudioMass 已满足；FAQ 写清同源 `/vendor/` |
| Q2 | 立体声、无水印、无时长墙 | 已满足；文案 Why choose |
| Q3 | 剪贴/撤销 | 已满足 |
| Q4 | 过零点 | 已有；默认开，Rules 写清 |
| Q5 | 效果 Apply 前可听 | 上游已声称预览；包装层把 Preview 做成 **效果面板里可见**，不藏 |
| Q6 | 峰值 + LUFS | 上游有 `lufs.js`；包装层让选区/播放时 **人能看见数字** |
| Q7 | 人声降噪 RNNoise | 上游已捆绑；HUD + Rules「对人声不是对音乐」 |
| Q8 | 变速与变调分开 | 上游有 Speed / Pitch / Playback rate；**菜单与 FAQ 拆开写**（相对 mp3cut 的 IG） |
| Q9 | WAV / MP3 无水印 | 已有；WAV 位深、MP3 码率在导出对话框可见 |
| Q10 | Space / Cmd+Z / M | 已有；How 用本站按钮名 |
| Q11 | 金标 HUD | **包装层必做** |
| Q12 | 竖屏能剪、听、导出 | 上游弱；v1 保底这三步 |
| Q13 | 诚实格式表；超限拒绝 | **包装层文件帽**（见 02）；不写 300 formats |

未做齐 Q1–Q5 + Q9–Q11（含 HUD、同源 vendor、十语）不得宣称「已经是本站编辑器成品」——那只是把 GitHub demo 挂在子路径上。

---

## 6. 竞品对照（v1 = AudioMass 能力 + 本站壳）

| 能力 | AudioMass | TwistedWave 免费 | mp3cut | Wavacity | 本站 v1 |
|---|---|---|---|---|---|
| 不上传 | 是 | 否 | 否 | 是 | **是（copy）** |
| 立体声 / 无账号 | 是 | 否 / 否 | 是 / 是 | 是 | **是** |
| 剪贴 + 多级撤销 | 是 | 是 | 弱 / 无 | 是 | **是（上游引擎）** |
| EQ / 压缩 / 淡化 / 归一化 | 是 | 部分 | 淡化 | 是 | **是** |
| 人声降噪 | RNNoise | 视套餐 | 无 | 视插件 | **是（上游 wasm）** |
| 多轨 | 2026 有 | 否 | 否 | 是 | **v1 随 copy 带上**（不再拖到 v1.5 才「发明」两轨） |
| 十语 | 否 | 否 | 营销多语 | 否 | **本站十语** |
| 金标进度 | 自有 modal | 云端 | 上传条 | 桌面 | **本站 HUD** |
| 许可 | MIT+LGPL | 专有 | 专有 | **GPL-2** | MIT copy + NOTICE |

Wavacity 仍只当功能清单参考，**不能 vendor**。

---

## 7. 功能细化 → SEO（原则；细表在 02）

「细化做 SEO」在本站词漏斗里 **只允许 absorb**，不允许按按钮拆 URL。

| 允许 | 禁止 |
|---|---|
| 一条 slug；H1 用使用场景句（0b 定） | `/mp3-cutter`、`/fade-in`、`/normalize-audio`、`/online-eq`、`/voice-recorder`、`/wav-to-mp3`、`/online-daw` |
| 每个 AudioMass 命令 → 一组真实搜法 → How / FAQ / Use cases / 菜单可见名 | 仅换 title/H1 的空壳变体（doorway / scaled content） |
| 近义问法进 FAQ；头词 *sound editor* 进 title/FAQ，不当 URL | 把库名、MIT、AudioMass 当 Why choose 卖点 |
| 菜单文案与 How 按钮 **用同一套词** | 复制 audiomass.co 的 about 长文当本页正文 |

意图簇（进页默认仍是「打开波形 → 剪 → 导出」）：

1. **编辑器头词**：sound editor / online audio editor / waveform editor  
2. **裁剪**：mp3 cutter / trim audio / cut mp3  
3. **录**：voice recorder / record audio in browser  
4. **导出/转码**：wav to mp3 / export mp3  
5. **修好**：normalize / compressor / fade / noise reduction / de-click  
6. **玩声（V0）**：pitch shift / reverse / slow down audio（FAQ 声明不是克隆某人）  
7. **多轨**：voice + music / mixdown（FAQ，H1 不改成 DAW）  
8. **循环/铃声**：seamless loop / ringtone fade  

细表、Use cases 草稿、FAQ 草稿见 [02 §12](./02-product-design.md)。

---

## 8. 架构：v1 继承上游，EDL 改为后续

AudioMass：cut 常 `createBuffer` 拷整段 PCM；撤销再存一份 → 内存与 GC 爆音（作者原文）。第三轮曾要求 v1 就上 **编辑决策列表（EDL）**。

**第十二轮**：v1 **接受** 这套内存模型，用 **文件帽** 换交付速度（02：桌面约 40 MB / 20 分钟；移动减半）。  
EDL（源 PCM 只读 + 片段列表 + 撤销只存 graph）列为 **上市后优化**，不挡 copy 上线。换引擎时产品表面（按钮、SEO 落点）保持不变。

解码仍受 `decodeAudioData` 限制（无进度、不可取消）→ 超限 **拒绝解码**，不要转圈到崩溃。

滤镜若仍在主线程扫全数组：包装层必须 HUD + 可取消（terminate Worker 或让出事件循环）；禁止 AudioMass demo 那种长时间白屏。

---

## 9. 技术栈（第十二轮）

| 层 | 选择 | 不选 |
|---|---|---|
| 编辑器内核 | **vendor AudioMass 整树** | 从零 EDL、嵌 Wavacity、iframe 官方站 |
| 波形 | 上游自带 WaveSurfer 2.x | v1 不强换 v7 |
| 实时 FX / 离线 | 上游 `OfflineAudioContext` + FX 银行 | 主线程新写一套滤镜 |
| 计量 | 上游 `lufs.js`；包装层露出读数 | 为计量拉 FFmpeg |
| MP3 / FLAC | 上游 lamejs / libFLAC，**点导出再加载** | 老 lame 首屏巨包 |
| 人声降噪 | 上游 RNNoise wasm | 上传云 AI |
| 变速变调 | 上游 Speed / Pitch / Playback rate | **rubberband-wasm GPLv2** |
| 长文件无波形 trim | 不进 v1 | 首屏 FFmpeg |
| 音色克隆 V1/V2 | **不是本页**（见 03/04） | 把 pitch 写成「克隆」 |

RNNoise 边界（Rules/FAQ，IG）：为人声；48 kHz、约 10 ms 帧；音乐/鼓点会残响。  
变速边界：大幅拉伸有人工痕迹；与「变调」分成两个命令写。

---

## 10. 多轨

Copy 已含多轨 + mixdown + `.amss`。  
v1 **不要关掉** 这条能力来「分期显得谦虚」——关掉等于把可索引的 *voice over music* 场景扔掉。  
封顶仍建议 **不超过上游默认复杂度**（家用 2–4 轨心理模型）；不要在 copy 上再长 Pro Tools 调音台。本站 SEO：H1 仍是波形编辑导出，多轨进 FAQ/Use cases。

---

## 11. 调研结论

| 问题 | 第十二轮答案 |
|---|---|
| 可不可以完全 copy AudioMass？ | **可以。** MIT 原文整树；第三方按 NOTICE；保留版权。 |
| 最快路径是 iframe 官方站？ | **否。** 必须本域 vendor + 本站 chrome。 |
| 还要不要自研 EDL？ | **v1 不要。** 上市后若内存打爆再换，表面不变。 |
| 功能细化做 SEO 会不会拆很多页？ | **不会。** 一 URL absorb；拆页 = doorway。 |
| 最小裁剪器算不算？ | **不算。** |
| Wavacity？ | **禁止。** |
| 下一份？ | [02 产品设计](./02-product-design.md)（含功能→意图表） |
