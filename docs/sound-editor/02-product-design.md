# 02 — 产品设计：最好的浏览器波形 Sound editor

**日期**：2026-09-09  
**状态**：第三轮产品定稿；**不是** work-tasks `ready`（未跑 0b / 0i）  
**主方向**：A（浏览器 JS）  
**YMYL**：否  
**草稿 slug**：`edit-audio-on-waveform`  
**路径草稿**：`/tools/edit-audio-on-waveform`  
**吸收的清单旧名**：`audio-trim`、`audio-recorder`、`audio-wav-mp3`（**不**再各开一页）  
**调研**：[01-js-implementation-research.md](./01-js-implementation-research.md)

> slug / H1 以立项 0b 为准。对外禁止写「最好」；对内用 01 §3 质量杠验收。

---

## 1. 一句话产品

在浏览器里打开一段录音或当场录进去，在波形上剪、修、听，再导出干净的 WAV 或 MP3。文件留在本机标签页。  
这一页就是 Sound editor：不是「只能拉一条选区的裁剪器」，也不是要登录的云 DAW。

---

## 2. 「最好」对产品意味着什么

对内目标：**不上传赛道里，日常编辑体验第一**（质量杠 Q1–Q13，见 01 §3）。

对用户可观察的承诺（可进 Why choose，须能在页上点出来）：

1. 不注册、不上传、立体声、导出无水印、无「免费 5 分钟」  
2. 选区剪贴 + 撤销，默认过零点，避免接口咔哒  
3. 效果先试听再 Apply  
4. 能看到峰值和响度（LUFS），播客可对齐 -16 LUFS  
5. 人声降噪、变速不变调是菜单里的真命令，不是外链到别的站  
6. 处理中有大卡片进度（解码 / 效果 / 导出）  
7. 十语界面；快捷键跟系统（Ctrl/Cmd+Z）走  

**不承诺**：VST、专业母带链、自动分轨、300 种格式、离线 Audacity 插件库。

---

## 3. 用户作业（进页默认 = 第一条）

| 优先级 | 情境 | 动作 | 结果 |
|---|---|---|---|
| **P0 默认** | 播客/会议/备忘录有口误、废片头 | 选区删除/修剪、淡化、导出 | 可发布的一段 |
| P0 | 音量忽大忽小 / 平台要响度 | 压缩或归一化到目标 LUFS | 符合交付的响度 |
| P0 | 底噪人声 | 选区降噪、试听、Apply | 更干净的人声 |
| P1 | 配乐垫在人声下 | v1.5 两轨：垫乐降音量 | 简易混音 |
| P1 | 铃声/预览 | 修剪 + 淡化 + 导出 M4A 不做；导出 WAV/MP3 | 短片段 |
| P2 | 当场补录一句 | 录音插入时间线 | 同一工程导出 |

裁剪、录音、转 MP3 **都在本页完成**。搜 *mp3 cutter* 的人：默认工具就是选区 + Trim/Export，不必再进「转换器」心理模型。搜 *wav to mp3*：Export 选 MP3 即可（整段不剪等于转换）。搜 *voice recorder*：Record 进空工程。

---

## 4. 头词与 URL

| 词 | 角色 | 落点 |
|---|---|---|
| *sound editor* / *online audio editor* / *audio editor* | 头词 | **title / FAQ / Why choose**；H1 用场景句（0b 定） |
| *mp3 cutter* / *trim audio* / *cut mp3* | 同意图 | How + Use cases + 默认选区修剪 |
| *noise reduction* / *normalize audio* / *fade in fade out* | 页内命令 | 菜单名与 FAQ 各一条 |
| *online DAW* / *multitrack* | 部分 | v1 FAQ「单时间线；两轨在后续」；v1.5 起满足 2 轨 |

禁止拆页：`/sound-editor`、`/mp3-cutter`、`/audio-trim`、`/wav-to-mp3`、`/voice-recorder`。

H1 草稿（en，待 0b）：**Edit audio on a waveform and export WAV or MP3**  
H1 草稿（zh）：**在波形上编辑音频并导出**  
Lead：剪贴、淡化、响度、人声降噪；文件留在设备、不上传服务器。禁止把 EQ 频段名堆进 H1。

---

## 5. 信息架构

上半是 **编辑器 chrome**（必须首屏可用），下半是可索引说明（How / Why / Rules / Example / Use cases / FAQ / Related / References）。

### 5.1 编辑器 chrome（桌面）

```
[ 打开文件 | 录音 ]     工程名     [ 撤销 重做 ]     [ 导出 ]
------------------------------------------------------------------------
传输：  录  停  播/暂停    时间码    循环
计量：  峰值 dBFS | 集成 LUFS（选区或全曲）
------------------------------------------------------------------------
标尺 + 标记
波形（可缩放、拖选；默认过零吸附）
------------------------------------------------------------------------
选区起止（mm:ss.mmm，与波形双向）
主命令： Trim to selection | Delete | Silence | Fade in | Fade out
更多：  增益 / 峰值归一化 / 归一化到 LUFS / 压缩 / EQ
        反向 / 静音插入 / 过零开关
        人声降噪 / 变速（不变调） / 变速（变调）
```

主输入仍是 **一种**：本地文件（dropzone）。录音是同一工作区的命令，不是第二套抢首屏的上传框。无云盘、无「粘贴网盘 URL」。

### 5.2 按钮层级（相对转换器 Skill 的修正）

本页 **不是** Convert → Download 单次作业。转换器 Skill 仍约束：无云盘、设置不进传输行、重活用金标 HUD。

| 区域 | 控件 |
|---|---|
| 顶栏主操作 | **Export**（有可导出缓冲才 enabled） |
| 顶栏次操作 | Open、Record、Undo、Redo、Load sample、Clear |
| 波形下主命令 | Trim / Delete / Fade — 立即改 graph，不是「Cut clip 之后才能下」 |
| 导出对话框 | 格式、WAV 位深、MP3 比特率、文件名；确认后 HUD：Render → Encode → 浏览器下载 |

状态：随时可编辑；Export 打开对话框；编码中禁用编辑。  
改 graph 不作废「源」，只作废「上次 bounce 的 blob」（再 Export 会重渲）。

### 5.3 高级 / 效果面板

默认：**常用命令外露**（Trim、Delete、Fade），EQ/压缩/降噪/变速在「效果」`<details>` 或弹出面板。  
每个效果：Preview（试听选区）→ Apply → Close。无 Preview 的效果不得进 v1。  
参数写人话（压缩：阈值、比率；EQ：低/中/高增益）。Rules 再解释一遍（IG）。

### 5.4 移动

竖屏保底：Open、波形选区、播放、Trim/Delete、Fade、Export WAV。  
效果菜单可点，但不保证小屏 EQ 旋钮体验。HUD 仍全屏卡片。

### 5.5 页下模块（tool-creation）

How 步骤必须用按钮原文（Open、Delete、Export）。  
Why choose ≥4 条，全部可在 chrome 验证。  
Rules：体积帽、过零点、LUFS 目标、RNNoise 人声限制、SoundTouch 拉伸范围、格式表。  
Example = Load sample 行为。  
FAQ：是否上传、和 Audacity 差在哪、和 mp3cut 差在哪、能否只转 MP3、降噪为何搞坏鼓。

---

## 6. 功能分期（产品 backlog）

### v1 — 「最好」的合格线（必须上市齐）

**编辑**

- 打开浏览器能解的音频（MP3/WAV/OGG/M4A 以 UA 为准，失败人话）  
- 波形缩放/滚动、选区、时间码、标记（M）  
- 过零吸附（默开）  
- Trim to selection、Delete、Insert silence、Cut/Copy/Paste  
- Undo/Redo ≥ 20 步（只存 EDL）  
- Fade in/out、增益、反向  
- 播放选区、循环选区、空格播放  

**效果（均要 Preview）**

- 峰值归一化  
- 归一化到目标 LUFS（默认 -16，可选 -14 / -23）  
- 压缩（少参数：阈值、比率、补偿增益）  
- 3 段 EQ（低架 / 峰 / 高架）  
- 人声降噪（RNNoise，首次 Apply 加载 WASM）  
- 变速不变调；变速+变调（两个命令）  

**录音**

- 麦克风写入 playhead（getUserMedia → 片段插入 graph）  
- 须手势；权限失败卡片  

**导出**

- WAV 16-bit 默认；24-bit 可选  
- MP3 128 / 192 / 320（lamejs 懒加载）  
- 无水印、无账号  

**工程**

- 金标 HUD：Decode / Effect / Render+Encode  
- Load sample：合成或短语音，进页自动出波形并可播放  
- 桌面 Chrome + 桌面 Safari POC 门禁  

### v1.5 — 配乐

- 第二轨 Music：导入、音量、静音、独奏  
- 重叠处可选交叉淡化  
- 仍 Export 一次 mixdown  

### v2 — 收束

- 最多 4 轨  
- 工程保存到 IndexedDB（可选下载 JSON+音频包，自有格式须文档化）  
- Mediabunny 长文件路径（无精细波形时的按时码修剪）  
- 频谱视图、无缝循环（AudioMass 有，可学交互不抄文案）  

### 明确永不做（本 slug）

- VST / 插件市场  
- 5 轨以上、调音台自动化曲线（除非将来另立项 DAW，需单独 SEO 论证）  
- 云盘、YouTube 扒流  
- 嵌 Wavacity、Rubber Band GPL  
- AI 人声分离 / 生成配乐（上传或巨大模型）  
- 格式矩阵子 URL  

---

## 7. 限制与失败

| 条件 | 行为 |
|---|---|
| 文件 > **40 MB**（桌面）/ **20 MB**（<(768px)） | 不 decode；说明内存原因 |
| 解码后 > **20 分钟** 桌面 / **8 分钟** 移动 | 拒绝；建议先在本机压时长 |
| 选区 < 50 ms 还 Delete | 允许（删除咔哒）；Fade < 50 ms 拒绝 |
| RNNoise 用于音乐 | FAQ + 试听；不静默损坏 |
| SoundTouch 超出 0.5–2.0× | 警告人工痕迹；仍可 Apply |
| Safari 未 resume | 第一次播放/录音时 resume |
| 解码失败 | 「换 WAV/MP3 或换浏览器」 |

---

## 8. 样例

- 进页 `loadSample()`：3–4 秒双声道语音型合成（或许可清晰的短语音）+ 可听见的底噪，便于演示降噪  
- 默认选区覆盖含噪尾 0.5 s  
- Example 文案与此一致：打开样例 → 听 → 对人声尾做降噪试听 → Export WAV  
- 自动跑：**解码 + 出波形 + 不自动 Apply 降噪**（避免一进页就拉 RNNoise）。用户点 Load sample 可停留在可播放状态；若自动导出 WAV 很快，可生成 Download 就绪的未处理样例  

例外写进立项 02：不自动跑 RNNoise/SoundTouch。

---

## 9. 进度 HUD

对照 `/tools/batch-convert-web-pages-to-jpg`。

| 触发 | 胶囊 |
|---|---|
| Open / 进页样例解码 | Decode |
| Apply 压缩/EQ/归一化 | Render |
| Apply 降噪 / 变速 | Effect（WASM）→ Render |
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
| 以后：从视频抽音 | 若另做 extract 页再链；v1 可用「打开视频」失败提示引导先抽轨（v1 **不**做视频 demux，避免范围爆炸） |

不要 related 到不存在的 `audio-trim`。

---

## 11. Information Gain（计划）

| 维度 | 体现 |
|---|---|
| 规则 | 过零点算法、LUFS 目标表（播客 -16 / 音乐 -14 / EBU -23）、SoundTouch 范围 |
| 边界 | 体积/时长帽、RNNoise 仅人声、格式随 UA |
| 对照 | 本页 vs 上传裁剪站 vs 桌面 Audacity vs 免费 TwistedWave 单声道墙 |
| 隐私 | 不上服务器；脚本同源 `/vendor/` |
| 数值例 | Example：样例时长、选区、导出大约体积 |

Why choose 草稿（须可点）：

1. 剪贴和撤销改的是时间线，不是把文件先交服务器  
2. 导出前可对效果试听  
3. 响度按 LUFS 目标，不只是拉满峰值  
4. 立体声与 MP3 比特率不设免费墙  
5. 解码/效果/导出有大卡片进度，失败是整块说明  

---

## 12. SEO 纪律

- 用户正文禁止「最好 / Best / 100% / 免安装堆砌」；Why choose 只写上面那种可验证句  
- 禁止库名当卖点（wavesurfer、lamejs、RNNoise 进 References）  
- 一头词一 URL：editor + cutter + recorder + wav/mp3 导出  
- 0b 未做：本 H1 不得当上线文案  

---

## 13. 工期粗估（供立项，非承诺）

| 块 | 粗量 |
|---|---|
| EDL 引擎 + 波形 + 剪贴 + 撤销 + WAV 导出 | 大 |
| 传输/录音/快捷键/过零/标记 | 中 |
| 压缩/EQ/淡化/峰值归一化 + Preview | 中 |
| LUFS Worker | 小 |
| lamejs 导出 | 小（有现成调研） |
| RNNoise + SoundTouch + HUD | 中，各一次 POC |
| 十语 + 金标 + 样例 | 按 coverage 常态 |
| v1.5 第二轨 | 另一次迭代 |

建议：先 POC「EDL + 波形 + Delete/Undo + Export WAV」在 Chrome/Safari 桌面跑通，再堆效果。效果没有 Preview 就不要进菜单。

---

## 14. 开放问题（0b / POC）

1. H1 用 *edit audio on a waveform* 还是当地 *online audio editor* 检索更强？（头词策略：H1 仍优先场景句）  
2. 样例用合成噪底还是真实短语音（许可）  
3. 40 MB / 20 分钟帽是否过严，用真机测  
4. wavesurfer v7 能否撑 EDL 多 clip，或必须自绘 Canvas  
5. v1 是否包含录音（建议 **包含**，否则 recorder 意图落空）  

---

## 15. 设计结论

| 项 | 第三轮决定 |
|---|---|
| 产品 | 完整波形 Sound editor，不是裁剪器 |
| 最好 | 不上传赛道质量杠，不打桌面 Audacity 全家桶 |
| URL | 一页吸收剪 / 录 / 转码导出 |
| v1 | 单时间线 EDL + 全套日常效果 + 录音 + 导出 |
| v1.5 | 两轨人声+垫乐 |
| 不做 | 嵌现成 GPL/MIT 整站、云 AI、格式矩阵 |

实现以 [01](./01-js-implementation-research.md) 的 EDL + Worker 为准。若工期逼人砍功能：**先砍多轨和循环，不砍预览、撤销、过零、无水印导出**——砍后半项就不再是「最好」，会退回第一轮裁剪器。
