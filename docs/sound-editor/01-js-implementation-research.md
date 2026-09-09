# 01 — JS 实现「最好的」Sound editor 调研（重写）

**日期**：2026-09-09  
**状态**：第三轮调研定稿  
**产品**：[02-product-design.md](./02-product-design.md)

---

## 1. 为什么推翻「只做裁剪器」

第一轮把市场理解成 mp3cut：选起止点、下载。那是 **高频薄作业**，不是 *sound editor*。

第三轮目标是 **最好的 sound editor**。搜索该词的人要的是 Audacity 级作业：剪贴、修音量、淡化、降噪、变速、撤销、导出，而不是只能拉一条选区。

| 若只做裁剪器 | 后果 |
|---|---|
| 对 *sound editor* / *online audio editor* | 打开页办不成「编辑」，FAQ 还要承认「我们不是编辑器」 |
| 对 AudioMass / Wavacity | 功能差一个数量级，无法称最好 |
| 对本站 | 再拆 `audio-trim` + `audio-recorder` + `audio-wav-mp3` 三薄页，违反「一带多场景」 |

**新结论**：一页做完整波形编辑器；裁剪、录音、导出格式都是同一套控件上的命令，不拆 URL。

「最好」必须写成 **可验证质量杠**（§3），禁止用「功能最多 / 免费最好」当目标。

---

## 2. 市场里「最好」实际指什么

浏览器音编分成四摊，不要混打：

| 摊 | 代表 | 用户要什么 | 本站打法 |
|---|---|---|---|
| **A. 云编辑器** | TwistedWave Online、Kapwing、VEED、Adobe Express | 账号、上传、大文件、协作 | **反面教材**：上传、时长墙、单声道免费、水印 |
| **B. 上传裁剪站** | mp3cut.net / 123apps | 快剪、铃声、吹「300 格式」 | 作业可吸收；体验要超过它们（波形缩放、无广告、不上传） |
| **C. 本地网页编辑器** | **AudioMass**、SliceTune | 不上传的真编辑 | **主对标**：同一赛道，我们要比体验与专业小功能 |
| **D. 桌面移植** | **Wavacity**（Audacity → WASM，GPL-2） | 桌面 Audacity 全套 | **禁止嵌入**（体积、wx  UI、GPL 传染、无障碍/十语不可控） |

2026 年 AudioMass 已不只是玩具：单轨剪贴 + 效果预览 + 标记 + 过零点 + 节拍吸附 + 无缝循环 + **多轨 clips / 自动交叉淡化 / .amss 工程**。作者自述弱项：主线程滤镜卡死、大文件 `decodeAudioData` 不可取消、移动端弱、快捷键曾长期只有 Shift+键。

TwistedWave：界面更干净，但 **上传服务器**、免费 **单声道 + 5 分钟**。

mp3cut：流量大，不是编辑器（无缩放波形、无剪贴栈、文件上传）。

Kapwing/VEED：AI 降噪和去静音要 Pro；免费常带水印；上传。

**空位（本站可以成为「最好」的缝）**：

1. **不上传 + 立体声 + 无账号 + 无时长墙 + 无水印**（同时满足；TwistedWave/Kapwing/SliceTune 免费档都缺几条）  
2. **效果先 A/B 预览再写入**（评测仍常批 AudioMass 预览弱；现在 about 声称有预览，我们要把 A/B 做成首屏可见，而不是藏菜单）  
3. **LUFS / 真峰值**（网页编辑器几乎都不做，播客交付要 -16 / -14 LUFS）  
4. **语音降噪用 RNNoise，并写清「对人声不是对音乐」**（竞品要么没有，要么云端 AI 收费）  
5. **变速不变调**（SoundTouch，LGPL；不用 GPLv2 的 Rubber Band WASM）  
6. **Ctrl/Cmd+Z/X/C/V** 对齐操作系统与 Audacity（AudioMass 旧肌肉记忆是 Shift+）  
7. **十语 + 金标进度 + 移动端至少能剪、听、导出**  
8. **非破坏编辑列表**（源 PCM 只读，撤销不复制整段，这是架构上超过 AudioMass 整缓冲拷贝）

**不打的仗**：VST、32 轨、视频时间线、AI 分轨/人声分离（模型大或要上传）、声称支持 300 种格式。

---

## 3. 「最好」质量杠（验收用）

同时满足才允许对内说「我们对标最好的网页 sound editor」。对外文案仍写可观察行为，不写「最好」。

| # | 杠 | 可验收 |
|---|---|---|
| Q1 | 隐私 | 音频不出标签页；无账号；FAQ 写清 `/vendor/` 同源脚本 |
| Q2 | 无墙 | 立体声；免费导出无水印；无「5 分钟 / 1 次/天」 |
| Q3 | 真编辑 | 选区 cut/copy/paste/delete/trim/silence；多级撤销 |
| Q4 | 过零点 | 默认吸附过零，避免咔哒 |
| Q5 | 预览 | 每个破坏性效果：Dry/Wet 或 Apply/Cancel；Apply 前可听 |
| Q6 | 计量 | 播放与选区显示峰值 dBFS + 集成 LUFS（EBU R128 近似，Worker） |
| Q7 | 语音降噪 | RNNoise 可选；HUD；声明 48 kHz 帧、对人声 |
| Q8 | 变速 | 时长变、音高不变（SoundTouch）；另提供「连带变调」 |
| Q9 | 导出 | WAV 16/24-bit；MP3 128/192/320；无水印 |
| Q10 | 快捷键 | Space 播放；Cmd/Ctrl Z X C V；M 标记 |
| Q11 | 进度 | 解码 / 重效果 / 编码：金标 HUD，先 `yieldUi()` |
| Q12 | 移动 | 竖屏：选区 + 播放 + 导出可用；复杂效果进菜单 |
| Q13 | 诚实 | 可见格式表；超限拒绝解码；不写 300 formats |

未做齐 Q1–Q5 + Q9–Q11 不得宣称编辑器已「对标最好」。Q6–Q8、Q12 可在 v1 后半，但必须排进 02 分期，不能当永远 P3。

---

## 4. 竞品能力对照（调研摘要）

| 能力 | AudioMass | TwistedWave 免费 | mp3cut | Wavacity | 本站目标 v1 |
|---|---|---|---|---|---|
| 不上传 | 是 | 否 | 否 | 是（本地 WASM） | **是** |
| 立体声 | 是 | **否**（免费 mono） | 是 | 是 | **是** |
| 无账号 | 是 | 否 | 是 | 是 | **是** |
| Cut/copy/paste | 是 | 是 | 弱 | 是 | **是** |
| 多级撤销 | 是 | 云端历史 | 无 | 是 | **是（EDL）** |
| 淡化/增益/归一化 | 是 | 是 | 淡化有 | 是 | **是** |
| EQ / 压缩 | 是 | 部分 | 无 | 是 | **压缩 + 3 段 EQ** |
| 降噪 | 弱 | 视套餐 | 无 | 视插件 | **RNNoise 人声** |
| 变速不变调 | 弱/变调混 | ? | 变调/变速常绑在一起 | SoundTouch | **SoundTouch 分开** |
| LUFS | 峰值/失真灯 | ? | 无 | 有（桌面血统） | **要** |
| 多轨 | 2026 有 | 否 | 否 | 是 | **v1.5 起 2 轨** |
| 移动 | 弱 | 部分 | 强 | 弱 | **v1 保底剪听下** |
| 许可风险 | MIT 壳 + LGPL lame | 专有 | 专有 | **GPL-2 整包** | 自研壳 + 白名单库 |
| 十语 | 否 | 否 | 多语营销站 | 否 | **本站十语** |

Wavacity 能力最接近「最好」，但 **不能用**：GPL-2、wxWidgets 桌面 UI、体积大、无法融入本站 `opts` 页、无障碍与 i18n 无法达标。只把它当 **功能清单参考**。

---

## 5. 架构：为什么「最好」必须用编辑决策列表（EDL）

AudioMass 类实现：每次 cut 都 `createBuffer` 拷一整段 PCM。撤销 = 再存一份全缓冲 → 内存爆炸、GC 爆音（作者原文）。

**本站引擎（v1 就必须）**：

```
SourceAudio          只读 AudioBuffer（decode 一次）
  └─ Edit graph      片段列表：{ sourceStart, sourceEnd, gain, fadeIn, fadeOut, fxChain? }
  └─ Playhead        实时：按 graph 调度 BufferSource / AudioWorklet
  └─ Bounce          OfflineAudioContext 或 Worker：导出 / 应用「渲染效果」
Undo stack           只存 graph 快照（JSON），不存 PCM
```

| 操作 | 对 graph 做什么 | 是否拷贝整段 PCM |
|---|---|---|
| 修剪头尾 | 改第一个/最后片段的 in/out | 否 |
| 删除选区 | 拆片段、丢掉中间 | 否 |
| 剪贴 | 插入新片段指向同一 Source | 否 |
| 淡化 | 片段 fade 字段 | 否 |
| 归一化/压缩/EQ/降噪 | 对该区间 **bounce 出新 Source 块** 或挂离线 FX 节点 | 只拷选区 |
| 撤销 | 弹出 graph | 否 |

实时预览：选区 → 短 `OfflineAudioContext` 或 `AudioWorklet` dry/wet。  
大效果（RNNoise、SoundTouch）：Worker + 金标 HUD，禁止卡死主线程。

解码仍受 `decodeAudioData` 限制（无进度、不可取消）→ 产品必须先按体积/时长拒绝（见 02）。长文件将来可评估 Mediabunny 分块解码；v1 不承诺。

---

## 6. 技术栈（按层）

与 [AV 续研](../2026-08-09-browser-av-client-solutions.md) 一致，并补编辑器专用层。

| 层 | 用途 | 选择 | 不选 |
|---|---|---|---|
| L0 | 解码、播放、切片、WAV | Web Audio + 自写 RIFF | — |
| UI 波形 | 缩放、选区、峰值 | wavesurfer v7 **或** 自绘可见区 Canvas（AudioMass 也在考虑扔掉整库） | 不要 WaveSurfer 2.x |
| 实时 FX | EQ/压缩预览 | `BiquadFilter` / `DynamicsCompressor` / AudioWorklet | 主线程逐采样 JS 循环 |
| 计量 | LUFS / 真峰值 | `lufs-web`（MIT，Worker） | 不要为计量拉 FFmpeg |
| MP3 | 导出 | `@breezystack/lamejs` LGPL，点击后加载 | 老 lamejs 巨包 |
| 人声降噪 | 选区处理 | `@shiguredo/rnnoise-wasm` 或 `@jitsi/rnnoise-wasm`（Apache-2；Xiph RNNoise 另见 COPYING），48 kHz 分帧 | 上传云 AI |
| 变速不变调 | 选区处理 | **SoundTouch**（LGPL，与 lame 同类） | **`rubberband-wasm` GPLv2** |
| 容器 trim | 无波形的长文件 | Mediabunny MPL（v2） | 首屏 FFmpeg |
| 整站移植 | — | — | **Wavacity GPL**、AudioMass 整壳 |

Vendor：全部进 `public/vendor/`，`lint:vendor`。禁止 CDN。

RNNoise 边界（必须写进 Rules/FAQ）：模型为人声；要 resample 到 48 kHz、10 ms 帧；音乐/鼓点会残响或失真。这是 **IG**，不是缺点藏起来。

SoundTouch 边界：大幅拉伸有人工痕迹；Rules 写建议范围（例如 0.75–1.5×）。

---

## 7. 效果实现要点

### 7.1 剪贴（graph）

选区映射到源采样：`startSample = floor(t * sampleRate)`。删除 = 两段 clip。粘贴 = 新 clip 插入 playhead。过零点：在选区两端向内搜过零再提交。

### 7.2 淡化 / 增益

片段字段；播放时在 AudioParam 或离线乘法。导出时烘焙进 bounce。

### 7.3 峰值归一化 vs LUFS

- 峰值：扫 `max(abs)`，乘 `0.99/peak`（避免 0 dBFS 真峰值过冲；24-bit 导出仍建议 true-peak 限幅）  
- 响度：Worker 里 `lufs-web` 测集成 LUFS；「Normalize to -16 LUFS」（播客常见）与「峰值归一化」分成两个命令，禁止混成一个按钮

### 7.4 EQ / 压缩预览

```javascript
/**
 * 把选区接到实时图上做试听（不改 Source）。
 * @param {AudioBuffer} sourceBuffer - 只读源
 * @param {number} startSec - 选区起点（秒）
 * @param {number} durationSec - 选区时长（秒）
 * @param {AudioContext} audioContext - 已 resume 的上下文
 * @returns {{ source: AudioBufferSourceNode, input: GainNode }} 调用方负责 connect 效果链与 stop
 */
function previewSelection(sourceBuffer, startSec, durationSec, audioContext) {
  const source = audioContext.createBufferSource();
  source.buffer = sourceBuffer;
  const input = audioContext.createGain();
  source.connect(input);
  source.start(0, startSec, durationSec);
  return { source, input };
}
```

压缩/EQ 挂在 `input` 与 `destination` 之间。Apply = bounce 选区替换 graph 中对应 clip 的源块。

### 7.5 RNNoise（人声）

1. 选区 → 48 kHz 单声道（或分声道）  
2. 480 采样一帧（10 ms @ 48 kHz）循环 `processFrame`  
3. 再 resample 回工程采样率  
4. HUD 按帧百分比  

全程 Worker，主线程只画 HUD。

### 7.6 SoundTouch（变速不变调）

选区 PCM → WASM/JS SoundTouch（tempo，pitch=1）→ 新时长 clip。  
「连带变调」用 `playbackRate` 或 SoundTouch pitch，**分开两个菜单项**（mp3cut 把 pitch/speed 搅在一起，我们要拆开，这是 IG）。

### 7.7 导出

- WAV：16-bit 默认；24-bit 高级  
- MP3：lamejs，比特率三档  
- 文件名：`{stem}-edit.wav`  
- Bounce 全 graph；HUD：Render → Encode

---

## 8. 多轨：最好是否必须？

AudioMass 2026 已有多轨。没有「人声 + 垫乐」会被说「还是玩具」。

| 期 | 轨数 | 理由 |
|---|---|---|
| v1 | **1 轨**（graph 上多 clip 仍是一条时间线） | 先把 Q 杠做满；单时间线已能剪播客口误 |
| v1.5 | **2 轨**（Voice / Music） | 覆盖「配乐压低」；每轨音量/静音/独奏 |
| v2 | **最多 4 轨** + mixdown | 到此停止；再多就是 DAW，和 BandLab 抢且 CWV/工期崩 |

v1 的「一条时间线上多个 clip」已经比「一整段 buffer」强（可拆可排），不要和「多轨调音台」混谈。

---

## 9. 许可红线（重申）

| 依赖 | 许可 | 本站 |
|---|---|---|
| wavesurfer | BSD-3 | 可用 |
| lamejs / SoundTouch | LGPL | 动态加载 + NOTICE |
| RNNoise wasm 包装 | Apache-2 | 可用；遵守 Xiph 原文件 COPYING |
| lufs-web | MIT | 可用 |
| Mediabunny | MPL-2.0 | v2 可选 |
| **rubberband-wasm** | **GPLv2** | **默认不用** |
| **Wavacity / Audacity WASM** | **GPL-2** | **禁止嵌入** |
| FFmpeg core | GPL | 本页不用 |
| AudioMass | MIT | **只读算法，不搬 UI/快捷键版权之外的整棵树进 Page**（自写 chrome 才能十语/HUD/隔离） |

---

## 10. 性能与内存

- 立体声 48 kHz float ≈ **每分钟 ~23 MiB**  
- EDL 让撤销变便宜，但 **源仍整段在内存** → 仍要文件帽（02：建议 40 MB / 20 分钟桌面；移动减半）  
- 频谱/分析器：`AnalyserNode` 小 fft；重 FFT 进 Worker  
- 滤镜禁止 AudioMass 式主线程扫全数组不让出；必须 chunk + HUD  
- Safari：手势 `resume`；AAC 解码表写进 FAQ  

---

## 11. 调研结论

| 问题 | 答案 |
|---|---|
| JS 能不能做最好的网页 sound editor？ | **能打「不上传赛道的最好」**，不能也不该宣称全面超过桌面 Audacity。 |
| 最小裁剪器算不算？ | **不算。** 第三轮目标下裁剪器是失败产品。 |
| 最快路径是嵌现成站？ | **否。** Wavacity GPL；AudioMass 壳无法变成本站工具页。 |
| 架构关键？ | **源 PCM 只读 + EDL + Worker 重活 + 效果预览。** |
| 下一份？ | [02 产品设计](./02-product-design.md) |
