# 02 — 工具信息

**状态**：`implemented`  
**slug**：`text-to-speech-for-voiceovers`  
**路径**：`/tools/text-to-speech-for-voiceovers`  
**主方向**：A  
**YMYL**：否

## 开发与 SEO 卡片

| 字段 | 内容 |
| --- | --- |
| Title / H1 | Text to Speech for Voiceovers |
| Description | Turn a short script into a voiceover on your device. Paste an intro or narration, pick a voice, then listen and download a WAV without signing up. |
| 首屏 | 短文稿、预设音色、Generate speech、试听与 Download WAV |
| page.style | `opts` |
| Related | `mix-a-voiceover-with-background-music`、`join-audio-files-in-order` |
| IG | 浏览器内合成与 WAV 下载；首次准备的实际体积和缓存边界；预设音色参考语言与文稿语言的关系；真实输入输出样例 |
| References | [MOSS-TTS-Nano](https://github.com/OpenMOSS/MOSS-TTS-Nano)、[ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/) |

## 使用场景

| 情境 | 动作 | 结果 |
| --- | --- | --- |
| 视频导语或短教程旁白 | 粘贴一两句文稿并选声音 | 可试听、可导入剪辑的 WAV |
| 播客片头、章节过场 | 分别生成短段落 | 每段 WAV 可在后续工程拼接 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
| --- | --- |
| 日期 | 2026-11-06 |
| slug 结论 | 采用 `text-to-speech-for-voiceovers`，将宽泛的朗读意图收束到可保存的旁白场景 |
| 主检索词 → title/H1 | text to speech for voiceovers / text to speech online → Text to Speech for Voiceovers |
| 次要关键词 → desc / FAQ / Use cases | download WAV → description、How、按钮；free/no signup → description 或 FAQ；AI voice generator → lead；browser/local → Why、FAQ；旁白/播客片头 → Use cases |
| 用户搜索习惯判断 | 调研中的文字转语音下载与本轮 SERP 的下载意图一致。搜索者需要可用音频文件，单纯播放无法满足制作旁白的任务。 |
| 优化摘要 | 将泛称 AI 语音工具改为制作短旁白的文字转语音工具；主说明写试听后下载 WAV，首次模型下载和文字上限在按钮旁说明。 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

来源为用户调研、2026-11-06 十语搜索联想及英文工具 SERP。无该意图的仓库 Ads / Keyword Planner 归属记录。

| 相关搜法 | 判定 | 页面生成落点 |
| --- | --- | --- |
| text to speech online / free online TTS / 文字转语音在线免费 / 文字转语音在线 | absorb 主词 | H1、desc |
| AI voice generator / 文字转语音真人免费 / AI 配音 / texte en voix IA / texto a voz IA | absorb 次词 | desc 说明合成音色，FAQ 说明预设与发音边界 |
| text to speech download WAV / text to audio file / 下载语音文件 | absorb 次词 | desc、How 与 WAV 按钮 |
| text to speech no sign up / 免费文字转语音 | absorb 次词 | desc 或 FAQ 说明无需账号即可生成与导出 |
| local text to speech / in-browser voiceover / browser TTS | absorb 次词 | Why、FAQ 说明文字留在设备、模型先下载 |
| voiceover for video / narration for tutorials / podcast intro | absorb 场景 | H1 和 Use cases |
| read text aloud / テキスト読み上げ 無料 / озвучка текста онлайн | absorb 可试听部分 | How 先试听后保存 |
| text to speech unlimited / 100 000 words / MP3 | 有意不满足 | FAQ 写明单次文本边界与 WAV 格式 |
| voice cloning / dub automatically / speech to text | 相邻任务 | FAQ 区分预设音色、译稿与参考录音 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## 用户意图审查

| 项 | 结论 |
| --- | --- |
| 总判 | **满足**：短文稿经预设音色本地合成，返回可播放、可保存的 WAV 文件。 |
| 首屏行为 | 文本框为唯一主输入；先选音色并点击 Generate speech。成品出现后启用 Download WAV。 |
| 超出 / 有意不满足 | 音色克隆单独提供，避免普通旁白流程要求录音。单次短稿，WAV 输出。翻译、MP3 和长文分段不写成现有功能。 |
| 已优化的边界 | How 增加首次模型准备，FAQ 解释缓存清理、短稿上限、WAV 与音色语言。样例试听与真实生成分开标示。 |
| [x] 已按审查回写 | SEO 卡片和下方交互以生成实际文件为目标。 |

## 交互规格

- 文稿最多 240 字符、80 个模型 token。选择预设参考音色。较长文稿按句子拆开制作。
- 金标 HUD 显示文件准备、初始化、生成、输出和已用时。可取消。失败保留文稿和已经准备好的文件。
- 48 kHz、立体声、16-bit PCM WAV，浏览器播放同一个导出 Blob。
- 自动填入示例文字，并展示同一文字的实测 WAV。主动点生成才下载模型并重新推理。首屏自动推理例外是首次准备约 716 MB。
- 固定版本校验、浏览器模型缓存、客户端 Worker 推理。首次下载与缓存复用单独验收。

## 页面模块清单

- [x] 文本输入、音色、生成、取消、样例、试听、下载、金标 HUD
- [x] How、Why、Rules、真实 Example、Use cases、FAQ、References 与 Related
