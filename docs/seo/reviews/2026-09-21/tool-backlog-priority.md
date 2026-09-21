# 2026-09-21 待建工具与优先级复核

本次是规划分析，不新增工具、不改变历史词池 verdict、不部署。依据本地 HEAD `8fe33eb9` 及当前工作树；未刷新 Git 远端、未逐页线上验收、未获取最新 GSC/Planner 或全量 SERP。优先级为工程与产品判断，不是流量预测。工作树原有首页、sitemap 与 Python 缓存变更保持不动。

## 1. 现状与口径

- catalog 分片 274 项，全部声明的页面模块可定位；sound-editor 主题 60 项（含视频作业，不能只统计 subject=audio）。存在文件不代表全部能力已通过浏览器验收。
- sound 12 号文档的 F1–F13 共 109 个作业 ID：99 个有明确草稿 slug，其中 60 个已注册、39 个尚未注册；另外 10 个无独立 slug，包含串联、增强、延期和不做项，不应当作 10 张待建页面。
- `work-tasks/*/02-tool-info.md` 中没有可直接按“有 brief 无 catalog”领取的常规新工具；唯一非模板例外 photo-smart-compress 已标 wont-create。
- 声音规划仍写 Hub 未立项，但代码已存在；关键词 tracker 仍把扫描 PDF→Word 等已注册工具列作未实现。须以能力核验为准，不能按旧状态重复立项。
- 词池包含已实现但 verdict 未更新的行，以及批量新工具指向旧单文件 absorb_slug 的行。不能直接统计 build/defer 行数当真实待建工具数。

## 2. P0：已有页面的能力和状态核对

1. 音频文件转写及 SRT：`transcribeAnAudioFileToTextPage.ts:480` 调用无参数 recognition.start()，然后把解码音频播放到扬声器；不能据此认定文件被直接识别。MDN 明确无 audioTrack 时默认识别麦克风。先验证戴耳机、拒绝麦克风、不同浏览器和真实文件，再决定实现文件转写引擎或收窄产品承诺。字幕页同列核验，不能直接按已完成依赖去排翻译/会议总结。
2. Hub：当前源码以波形选区、Trim 和导出为主，旧执行合同要求 AudioMass 宿主、剪贴、撤销和录音等；抽查未见 AudioMass/PKAE/Undo 接线。需对照当前 brief 与原合同确认接受范围，不能再新建一个同义编辑器页面。
3. LUFS 等测量工具：代码已存在，brief 状态却有 ready；先确认标准与实际输出验收，再决定独立计量页能否复用。此次未判定计量实现有缺陷。

## 3. Sound 新建顺序（条件性产品建议）

| 顺序 | 工具 | 相对成本 | 排序理由和上线边界 |
|---|---|---|---|
| 1 | I1 detect-bpm-of-a-song | 中 | 衔接已存在的变速、变调与循环工具；给候选 BPM、半速/倍速解释和手动 tap 校对；先用已知节拍样本验证，不保证所有音乐准确 |
| 2 | I4 tap-a-metronome-in-the-browser | 低 | 独立练习任务、无模型和素材许可依赖；应具备拍号、重拍、tap tempo 和稳定排程；不能仅做 setInterval 响一下 |
| 3 | G4 play-white-pink-or-brown-noise | 低 | 单路噪声与已有纯音、双耳节拍不同；三种频谱、定时、渐弱；先校验输出谱和持续播放，避免循环接缝，不作治疗承诺 |
| 4 | I3 tune-a-guitar-with-the-microphone | 中 | 实时校音有明确结果；需要音分偏差、低频和噪声测试以及权限失败流程 |
| 5 | I9 measure-lufs-of-an-audio-file | 中，取决于计量复用 | 仅当可提供独立测量报告且已有计量通过参考样本时新建；否则先补现有响度匹配页 |
| 6 | I2 detect-the-key-of-a-song | 中高 | 调性歧义和复调样本较难；展示候选与置信提示，不只返回一个看似确定的调号 |

I10 频谱图优先作为已有 Hub 增强；A7 多路环境音等许可素材到位；S14 章节、V4 音画偏移、U4 ReplayGain 先做格式/标准 POC。T7 如果改成手工标时间段蜂鸣，必须重新定义 brief，不能假称自动识别脏话。

排序理由基于任务差异、现有代码复用、可验证输出、运行成本和依赖；尚未证明这些候选是 long_gap，不直接升级词池 build。Web Audio 提供音源、音频图和精确时序能力，支持这些本地方案的技术方向，但实际稳定性仍要测试。

## 4. 跨主题优先队列

| 顺序 | 候选 | 建议 |
|---|---|---|
| 1 | extract-text-from-a-scanned-pdf | P1；复用扫描 PDF→Word 的逐页渲染与 OCR，输出 TXT，区别于现有 PDF 字层抽取；页范围、进度、失败页和文本校对 |
| 2 | bulk-strip-photo-exif | P1；输出净图 ZIP 加逐文件保留/移除报告；先定义支持格式，不把重编码一律宣传为无损 |
| 3 | batch-watermark-pdf-drafts | P1；复用 PDF 水印能力，突出混合纸张尺寸、统一模板、失败跳过与 ZIP |
| 4 | bulk-optimize-svg-icon-set | P1；预览与压缩报告、ID/引用保留、输入脚本与外部资源处理 |
| 5 | make-a-scanned-pdf-searchable | P2；价值明确，但透明字层坐标、字体、多语和文本选择准确性增加成本；不能只导出原图 PDF |
| 6 | batch-rotate-scanned-pdfs / bulk-grayscale-scan-photos | P2；能力清晰但差异较小，先核验具体需求 |

批量规划中尚未注册的 13 项：bulk-convert-images-to-avif、batch-watermark-pdf-drafts、batch-password-protect-pdfs、batch-unlock-owned-pdfs、bulk-optimize-svg-icon-set、bulk-resize-amazon-main-images、bulk-strip-photo-exif、bulk-optimize-hero-images、batch-rotate-scanned-pdfs、bulk-grayscale-scan-photos、batch-crop-pdf-margins、batch-number-pdf-pages、bulk-list-folder-file-metadata。此清单是该规划范围，不是全站全部候选。

其余文档候选：safe-paste-cleaner、ai-token-counter、vlsm-subnet-calculator、convert-a-table-photo-to-csv、extract-text-from-a-word-document、convert-html-or-a-web-page-to-plain-text、extract-text-from-a-powerpoint。它们也未注册；前两项历史研究已属覆盖竞争，应补具体差异后再排。PDF 数字证书签名、完整 PDF/A 合规验证、PDF→DWG 属已有近邻页面的未覆盖能力，不应仅凭页面存在标完成。

## 5. 暂缓原则

模型相关的分轨、AI 去回声/语音增强、自动修音、文字转可下载 MP3、翻译与会议纪要：先明确模型/服务、成本、数据去向和可验证指标。识曲/版权匹配依赖数据库，不能用一般音频处理算法代替。素材混音/音板要先解决授权。系统内录先限定支持平台并 POC。文档已列 drop 的场景不重新算成待建需求。

## 6. Sound 明确 slug、尚未注册的完整清单

P1=下一批优先评估；P2=第二批或先增强已有页；P3=暂缓、先完成依赖验证。它们不是已批准立项。

| ID | 用户任务 | 草稿 slug | 建议 |
|---|---|---|---|
| S14 | 有声书 m4b + 章节 | `add-chapters-to-an-m4b-audiobook` | P2 |
| S23 | 母带：限制 + 匹配参考曲响度 | `match-a-track-loudness-to-a-reference` | P3 |
| S25 | 会议/电话「听不清」增强 | `enhance-muffled-speech-in-a-recording` | P3 |
| S28 | 去回声 | `remove-echo-from-a-voice-recording` | P3 |
| S29 | 去风噪/手持摩擦 | `reduce-wind-noise-on-a-phone-recording` | P3 |
| S30 | 削波修复 | `repair-a-clipped-recording` | P3 |
| S41 | 自动修音（Auto-Tune 程度） | `correct-pitch-on-a-vocal-take` | P3 |
| V4 | 音画不同步校准 | `shift-audio-to-fix-video-sync` | P2 |
| T2 | 听 A 语出 B 语文稿/字幕 | `translate-an-audio-file-into-another-language` | P3 |
| T3 | 说话人分离 + 姓名 | `label-speakers-in-a-meeting-recording` | P3 |
| T4 | 会议摘要 / 待办 | `summarize-a-meeting-recording` | P3 |
| T7 | 脏话蜂鸣 / PII 脱敏 | `beep-swear-words-in-a-podcast` | P2 |
| G1 | 贴一段字，读成 MP3 | `read-text-aloud-and-download-mp3` | P3 |
| G2 | 多角色对话 TTS | `read-a-script-with-multiple-voices` | P3 |
| G3 | 用我的几句话克隆我再 TTS | `clone-my-own-voice-to-read-text` | P3 |
| G4 | 白/粉/棕噪发生器（单路） | `play-white-pink-or-brown-noise` | P1 |
| A7 | 雨+风扇+噪 **多路推子** 睡眠 | `mix-rain-and-fan-for-sleep` | P2 |
| G8 | 文生 BGM | `generate-background-music-from-a-prompt` | P3 |
| G9 | 把 BGM 拉长到视频时长 | `extend-a-music-bed-to-a-video-duration` | P3 |
| G10 | 哼唱变旋律/编曲 | `turn-a-hum-into-a-midi-melody` | P3 |
| G11 | 文生音效 | `generate-a-sound-effect-from-a-prompt` | P3 |
| D1 | 歌里只要伴奏或只要人声 | `remove-vocals-from-a-song` | P3 |
| D2 | 分轨：人声/鼓/贝斯/其它 | `split-a-song-into-stems` | P3 |
| D3 | 去 BGM 留口播 | `remove-background-music-from-a-voiceover` | P3 |
| I1 | 看 BPM | `detect-bpm-of-a-song` | P1 |
| I2 | 看调性 | `detect-the-key-of-a-song` | P2 |
| I3 | 吉他/乐器校音 | `tune-a-guitar-with-the-microphone` | P2 |
| I4 | 节拍器 | `tap-a-metronome-in-the-browser` | P1 |
| I5 | 识曲（一段录音是哪首歌） | `identify-a-song-from-a-short-clip` | P3 |
| I6 | 哼唱识曲 | `identify-a-song-from-a-hum` | P3 |
| I7 | 音频 → MIDI | `convert-a-melody-recording-to-midi` | P3 |
| I8 | 音频 → 和弦/简谱 | `find-chords-in-a-song-recording` | P3 |
| I9 | 独立响度表（不一定导出） | `measure-lufs-of-an-audio-file` | P2 |
| I10 | 频谱/语谱图查看 | `view-a-spectrogram-of-an-audio-file` | P2 |
| I11 | 听歌对照跑调（音高曲线） | `show-pitch-curve-of-a-vocal-take` | P3 |
| I12 | 版权像不像已有商业曲 | `check-if-a-clip-matches-known-tracks` | P3 |
| I13 | 鸟种识别 | `identify-a-bird-from-a-recording` | P3 |
| U4 | ReplayGain 扫描 | `scan-replaygain-for-a-track` | P2 |
| L1 | 直播音板快捷放梗 | `play-a-live-soundboard-in-the-browser` | P3 |

## 7. 证据

- 本地：src/site/tool-catalog.d、src/pages、work-tasks、docs/sound-editor/12-slug-hub-and-scene.md、11-executable-plan.md、docs/seo/keyword-to-tool-tracker.md、bulk-batch 与 OCR 主题分析。
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)：音频图、音源和时序基础。
- [SpeechRecognition.start](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start)：无参数默认麦克风；传入音轨另有支持限制。
- [Tesseract.js](https://github.com/naptha/tesseract.js)：浏览器 OCR 基础；项目本身不直接支持 PDF，须结合逐页渲染。

建议下一轮：先完成转写/字幕与 Hub 的能力核验；只选一个新工具时，sound 选 I1 BPM 检测，全站复用优先选扫描 PDF→TXT。立项前补当前 SERP 与差异验收标准。
