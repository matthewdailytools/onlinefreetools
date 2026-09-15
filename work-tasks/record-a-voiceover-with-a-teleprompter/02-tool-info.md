# 02 — 工具信息定稿

**状态**：`implemented`
**slug**：`record-a-voiceover-with-a-teleprompter`
**路径**：`/tools/record-a-voiceover-with-a-teleprompter`
**主方向**：A
**primaryTopic**：`sound-editor` · S8
**YMYL**：否

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 本页默认 / 边界 |
|---|---|---|
| 读稿录旁白并下载 | record a voiceover with a teleprompter | 编辑提词稿，排练速度，录制时同步滚动，停止后试听下载 |
| 播客开场、教程解说、口播练习 | teleprompter audio recorder; record narration while reading | 单次音频文件，脚本与音频留设备，不上传服务器 |
| 只排练稿件 | online autocue; scrolling script | 无权限滚动预览，与录音主流程共用提词区 |
| 摄像头视频或语音自动跟随 | video teleprompter; voice tracking | 有意不满足；固定滚速可随时调节，暂停会同步暂停录音 |

## IG 预审

- 用户任务：读着大字稿录制可下载旁白；不会在暂停后丢失读稿位置。
- 搜索观察日期：2026-09-15。搜索 online teleprompter audio voice recorder script scrolling、提词器 在线 录音 口播。结果同时混有独立滚稿、语音跟随及视频录制，不能将它们全部承诺为本页能力。
- 基线：可编辑脚本、滚速和字号；部分产品配录音，另一些需要独立录音工具。
- 已打开来源：[A2Z Tools](https://a2z.tools/teleprompter)、[Screenrecording.app](https://screenrecording.app/tools/teleprompter)。无 Planner 数据，不虚构量级、排名顺序或独占功能。
- 可验证增益：① 同步暂停音频和滚稿，保留位置；② 未授权亦可排练；③ 到稿末保留末段，继续录至 Stop；④ 显示真实下载类型；⑤ 空稿、权限、输入丢失和关闭页面边界。
- §3.1 维度：规则、边界、场景、权威引用、本地隐私、完整样例、相关工具。
- §3.8 预审依据：`docs/2026-07-28-google-seo-strategy-implementation.md`；卡片依据 `docs/2026-07-28-per-tool-dev-seo-plans.md`。
- 权威来源：https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder ；https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
- 样例：本语三段练习稿 + 在内存生成的 3 秒三音 WAV；不把提示音说成朗读，不请求麦克风，不自动播放或滚动。
- related：`record-a-voice-memo-in-the-browser`、`trim-an-audio-clip-and-export`。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | Tier 0，原生浏览器录音和 requestAnimationFrame，零新增依赖；localProcessing=true |
| page.style | opts |
| Title (en) | Record a voiceover with a teleprompter |
| Description | Read a scrolling script and record your voiceover in the browser. Rehearse the pace, pause both together, then listen and download. Script and audio stay on your device without upload. |
| FAQ | 是否录视频或语音跟随；同步暂停；如何选速度；格式；隐私和刷新；空稿/权限 |
| 验收 | coverage 0b→2→4→all，page wiring，full build，SEO/vendor/taxonomy/isolation，浏览器录音和排练验收，R2/线上验收 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-15 |
| slug 结论 | 场景任务句 record-a-voiceover-with-a-teleprompter，区别只录备忘的 S7 |
| 主检索词 → title/H1 | Record a voiceover with a teleprompter 完整落在 en H1；各语为读稿录旁白的当地等价句 |
| 次要关键词 → desc / FAQ / Use cases | teleprompter audio recorder → desc/FAQ；scrolling script → How；record narration → usecase；online autocue → FAQ |
| 用户搜索习惯判断 | teleprompter 可指视频，故摘要明确 audio/voiceover；中文以提词器、口播、旁白表达，不硬译 voiceover |
| 优化摘要 | 从泛在线提词器收紧为边看稿边录旁白；排练与同步暂停是关键操作，移除视频和语音跟随暗示 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| record a voiceover with a teleprompter | absorb 主词 | H1 | — |
| teleprompter audio recorder; record audio with a script | absorb | desc、How、FAQ | 不另开 audio-teleprompter |
| scrolling script; online autocue; teleprompter speed | absorb | How、Rules、FAQ | 不另开 autocue |
| podcast intro narration; tutorial voiceover | absorb | Use cases | 不按场景铺页 |
| 提词器录音；看稿录口播；旁白录制 | absorb zh | H1/desc/Use cases | — |
| grabar voz con teleprompter; locución con guion | absorb es | H1/desc/FAQ | — |
| تسجيل تعليق صوتي; ملقن نصوص; قراءة نص أثناء التسجيل | absorb ar | H1/desc/How | — |
| gravar narração com teleprompter; gravar lendo roteiro | absorb pt | H1/desc/How | — |
| rekam narasi dengan teleprompter; baca naskah sambil merekam | absorb id | H1/desc/How | — |
| enregistrer une voix off avec un prompteur; lire un texte en enregistrant | absorb fr | H1/desc/How | — |
| プロンプターでナレーション録音; 原稿を見ながら録音 | absorb ja | H1/desc/FAQ | — |
| записать озвучку с суфлёром; запись голоса по тексту | absorb ru | H1/desc/How | — |
| Voiceover mit Teleprompter aufnehmen; Text beim Aufnehmen ablesen | absorb de | H1/desc/How | — |
| voice activated scrolling; video teleprompter; AI voiceover; MP3 recorder | 有意不满足 | FAQ 如实说明固定速度、仅真人麦克风音频和实际格式 | 不扩展第二工具 |

- [x] 上表已列全本意图相关搜索。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入。

## Ads / Keyword Planner 长尾

不适用：仓库关键词目录未检出本意图 Planner 分析。常规 SERP 观察不当作 Ads 数据。

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-15 |
| 总判 | 满足：稿件是首屏主输入，点击录制后边看滚稿边录音，结束可试听下载 |
| 主词搜索者任务 | 无需背稿，一边读一边录制旁白；录错可暂停，再从当前位置继续 |
| 满足之处 | 可先排练，调滚速和字号；暂停同步两者；到稿末不会截断尾音 |
| 超出 / 应划边界 | 不加视频、语音识别跟随、TTS、账户或转码；不承诺 MP3 |
| 缺口与已做优化 | How 先排练再录；暂停保留位置；Rules 说明到稿末仍须 Stop；FAQ 解释文字不会被合成语音 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格

- 主输入：最多 20,000 字符纯文本，多行 textarea；首屏提词区用 textContent，保留换行且支持 RTL。
- 默认：本语三段练习稿，字号 32px，滚速 28px/s；20px–60px 字号，0–100px/s 滚速；0 停止滚动但仍录音。
- 排练：Rehearse / Pause rehearsal；从当前位置滚动，Back to top 重置；无麦克风授权。
- 录制：Record voiceover → 请求麦克风 → 成功后从顶部滚动；Pause/Resume 同步滚稿与音频；Stop 后显示播放器、时长、真实格式与 Download。
- 滚稿结束：保持最后一段可见，继续录音，用户 Stop 或 10 分钟录音上限。暂停时间不计入时长。
- 进页样例：本语稿件、生成 3 秒 WAV，可试听下载；不触发权限、自动声音或运动。
- HUD：引用本站 bcwHudCss 金标；录制状态、经过时间、10 分钟上限百分比、输入电平；完成保留 100% 和下一步下载；错误保持大卡片。
- 失败：空稿、过长、拒绝权限、不支持、设备中断、空音频、播放失败。等待权限时 Stop 可取消，迟到的授权流立即释放；已有下载保留到新录制真正开始。
- 页面隐藏自动暂停；返回后手动继续；pagehide 停止录制并释放流、定时器和对象 URL。文字与音频不持久化，关闭/刷新会丢失。

## 页面模块清单

- [x] 首屏稿件、提词区、录音和下载、样例、HUD
- [x] How、Why choose、Rules、Example、Use cases、FAQ、References、Related
- [x] 03 十语 brief 已填写
