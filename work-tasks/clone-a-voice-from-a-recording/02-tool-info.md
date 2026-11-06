# 02 — 工具信息

**状态**：`implemented`  
**slug**：`clone-a-voice-from-a-recording`  
**路径**：`/tools/clone-a-voice-from-a-recording`  
**主方向**：A  
**YMYL**：否

## 开发与 SEO 卡片

| 字段 | 内容 |
| --- | --- |
| Title / H1 | Clone a Voice from a Recording |
| Description | Use a short recording you have permission to use. Add it, type new words, listen to the result and download the WAV on your device. |
| 首屏 | 新文稿、本地参考录音或麦克风、试听、授权确认、生成与 WAV 下载 |
| page.style | `opts` |
| Related | `text-to-speech-for-voiceovers`、`record-a-voice-memo-in-the-browser`、`mix-a-voiceover-with-background-music` |
| IG | 样本先试听与短时长、低电平提示；授权选项可手动取消；语音及文本留在设备；复用 TTS 下载；试听与导出一致 |
| References | [MOSS-TTS-Nano](https://github.com/OpenMOSS/MOSS-TTS-Nano)、[MDN MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) |

## 使用场景

| 情境 | 动作 | 结果 |
| --- | --- | --- |
| 给自己的旁白补一句 | 用自己清晰的短录音，确认授权并写入新句子 | 参照音色生成新 WAV，先对照试听再替换 |
| 按授权制作一句不同语言的配音 | 使用经允许的参考录音并填目标语言文稿 | 试听音色和发音，决定该片段是否适合 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
| --- | --- |
| 日期 | 2026-11-06 |
| slug 结论 | `clone-a-voice-from-a-recording` 直接说明需要参考录音 |
| 主检索词 → title/H1 | voice cloning online / clone a voice from a recording → Clone a Voice from a Recording |
| 次要关键词 → desc / FAQ / Use cases | free voice cloning → FAQ；own voice / reference audio → How；voice cloner online no sign up → desc、FAQ；local / AI → Why；different language → FAQ |
| 用户搜索习惯判断 | 搜索者通常要让已知音色念新稿并导出。选择导入或录制后，可试听参考，再明确确认授权。 |
| 优化摘要 | 主标题补足「从录音」场景，说明模型下载与短样本限制，给试听和同一份 WAV 导出明确落点。 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

依据用户调研与 2026-11-06 Google 本地语言联想。中文取用户提供的百度采样。无该意图的仓库 Ads / Keyword Planner 归属记录。

| 相关搜法 | 判定 | 页面生成落点 |
| --- | --- | --- |
| voice cloning online / voice cloner online / clone a voice / 声音克隆免费网页版 | absorb 主词 | H1、desc |
| free AI voice cloning / clonar voz IA gratis / clonage vocal gratuit / ボイスクローン 無料 | absorb 次词 | FAQ 可免注册生成 WAV |
| clone my voice / voice cloning from audio sample / 自己的声音克隆 | absorb 次词 | How、本地文件或录制、授权勾选 |
| offline voice cloning / ボイスクローン AI ローカル | absorb 本地推理部分 | Why、FAQ 明示先下载与缓存；离线重开另验收 |
| voice cloning in a different language / 多语言配音 | absorb 手写目标文稿部分 | FAQ、Use cases 明示目标文稿由用户准备，发音和相似度需试听 |
| celebrity voice impersonation / 实时变声 / 自动翻译配音 | 有意不满足 | 授权交互与 FAQ，避免把别的意图混进首屏 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## 用户意图审查

| 项 | 结论 |
| --- | --- |
| 总判 | **满足**：用户用一段授权录音作为参考，让相似音色朗读新稿，并下载音频。 |
| 满足之处 | 文件导入或麦克风录制，参考试听，生成前检查授权选项。录音和文本不上传。 |
| 超出 / 有意不满足 | 声音预设在文字转语音工具。克隆页不做实时变声、说话人鉴权、自动翻译或音色库。 |
| [x] 已按审查回写 | How 先加参考并确认授权，再生成新稿；FAQ 说明跨语种输入、样本质量与试听。 |

## 交互规格

- 独立工作区按参考录音、新文稿、生成结果组织。可以选择或拖入单个音频文件，接受浏览器可解码的 WAV、MP3、M4A、OGG 或 WebM 单声道或立体声。参考 2–12 秒，上限 10 MiB。麦克风最长自动录约 10 秒。
- 文稿实时显示字符数。结果区提供试听和 WAV 保存。页面另有一组合成参考与预生成克隆试听，播放任一音频时暂停其他播放器。点击样例可载入参考和新文稿。
- 授权选项默认勾选。在当前页面手动取消后，换录音或加载样例时保留该选择，生成前需重新勾选。
- 金标 HUD 包含模型下载、初始化、分析录音、生成及 WAV，支持取消。模型只在有效参考和授权后下载。
- 共用约 717 MB 语音模型，额外约 45 MB 参考音频编码器。48 kHz 立体声 16 位 PCM WAV。

## 页面模块清单

- [x] 新文稿、录音或导入、试听、授权、生成、取消、样例、结果、下载
- [x] How、Why、Rules、Example、Use cases、FAQ、References 与 Related
