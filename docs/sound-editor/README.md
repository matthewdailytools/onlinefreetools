# Sound editor（浏览器 JS）— 调研与产品设计

**日期**：2026-09-09（第三轮重写）  
**状态**：文档定稿；**尚未**建 `work-tasks/`、尚未写页面  
**目标**：做 **最好的** 浏览器 Sound editor（可验证质量杠，不是口号）

本夹是 audio 方向专题夹，不是 catalog slug，也不是 `work-tasks/{slug}/`。立项须用户明确「创建 / 实现」后再复制 `_template`。

## 一句话结论

**不要做「只剪一段」的薄裁剪器，也不要嵌 Wavacity / fork AudioMass。**  
本站应做 **一页完整单轨波形编辑器**：非破坏编辑列表、选区级剪贴、效果先预览再提交、LUFS/真峰值、语音降噪、变速不变调、立体声无时长墙、WAV/MP3 无水印导出。  
用 **可验证差距** 超过 AudioMass（体验/无障碍/十语/快捷键/计量/HUD）和 mp3cut/TwistedWave（隐私/立体声/无账号）。  
不宣称打败桌面 Audacity 的 VST/插件生态。

| 项 | 决定 |
|---|---|
| 产品档 | **完整单轨编辑器**（v1）→ 2 轨人声+垫乐（v1.5）→ 最多 4 轨 mixdown（v2） |
| 草稿 slug | `edit-audio-on-waveform`（头词 *sound editor* 进 title/FAQ，**不**当 URL） |
| 旧清单名 | `audio-trim` / 单独 `audio-recorder` / `audio-wav-mp3` **吸收进本页**，不拆三薄页 |
| 禁止 | Wavacity（GPL 整站）、Rubber Band WASM（GPLv2）、AudioMass 整壳、FFmpeg 首屏 |

| 文档 | 内容 |
|---|---|
| [00-request.md](./00-request.md) | 用户原话 |
| [01-js-implementation-research.md](./01-js-implementation-research.md) | 波形编辑器调研 |
| [02-product-design.md](./02-product-design.md) | 波形编辑器产品 |
| [03-voice-conversion-from-speaker-samples.md](./03-voice-conversion-from-speaker-samples.md) | 根据某人一批录音做音色迁移（实现栈） |
| [04-three-kinds-of-voice-change.md](./04-three-kinds-of-voice-change.md) | **三种变声详解**（V0 DSP / V1 迁移 / V2 RVC） |

## 阅读顺序

1. **01** — 为什么裁剪器不够、怎样才算「最好」、JS 怎么撑住。  
2. **02** — 波形编辑器这一页做成什么样。  
3. **03** — 「用一批某人的声音去变声」实现栈。  
4. **04** — 三种变声分别改哪一层、何时用。  
5. 立项编辑器：`work-tasks/edit-audio-on-waveform/`（或 0b 后改名）。音色迁移是 **另一作业**，未点名不建页。

## 与既有文档的关系

| 文档 | 关系 |
|---|---|
| [工具方向 A.3](../2026-07-28-tool-direction.md) | 音频 ✅✅；本夹从「可裁剪」升级为「完整编辑器」 |
| [音视频客户端续研](../2026-08-09-browser-av-client-solutions.md) | L0/L1/L2 仍适用；本页额外用 AudioWorklet + 按需 WASM（RNNoise / SoundTouch） |
| [媒体试点选项](../2026-08-09-browser-media-ebook-pilot-options.md) | 套餐 B 的三音频薄页 **合并为本编辑器一页** |
| [STT 方案](../2026-09-08-js-speech-to-text-solutions.md) | 听写仍不是本页 |

## 明确不做（夹级）

- 嵌 Wavacity、fork AudioMass 进工具 chrome  
- Pro Tools / BandLab 级多轨 DAW、VST、MIDI 乐器  
- Aconvert 格式对矩阵 URL、账号墙、水印、云盘  
- 未点名立项就建 `work-tasks/` 或改 `src/`
