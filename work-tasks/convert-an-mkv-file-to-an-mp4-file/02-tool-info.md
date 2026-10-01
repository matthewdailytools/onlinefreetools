# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`convert-an-mkv-file-to-an-mp4-file`  
**路径**：`/tools/convert-an-mkv-file-to-an-mp4-file`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-10-01：mkv to mp4 / convert mkv to mp4 / mkv to mp4 aac。SERP 多为云上传站与桌面 ffmpeg。站内缺口：无成片容器转换页；抽音 MKV 页只做 MediaElement 回退且拒 E-AC-3。本页补 **浏览器内 MKV→MP4 且 AAC 立体声**，并诚实写上限与失败码。

相对抽音页的 **≥3 条增益**：

1. **作业不同**：输出是 **MP4 成片**（可再抽音），不是 WAV/MP3。  
2. **编解码**：`@mediabunny/ac3` 解 E-AC-3/DDP；`aac-encoder` 写 AAC；视频优先 copy。  
3. **任务链**：related → Extract audio from an MP4 file；FAQ 对照「为何不直接抽 MKV」。

权威：https://mediabunny.dev/ · https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / topic | sound-editor（视频成片转换；与抽音同簇内链） |
| Catalog | `localProcessing: true`；`page.style: opts`；`scenario: media`；`subject: video` |
| Title (en) | Convert an MKV file to an MP4 file |
| Description | Convert one local MKV to MP4 in the browser with AAC stereo audio (video copy when possible). Steps: choose MKV → Convert → Download. Example: Load sample. Files stay on your device—not uploaded. About 500 MiB / 2 hours. Not YouTube. After convert, use Extract audio from an MP4 file. |
| 技术 | mediabunny Conversion + registerAc3Decoder + registerAacEncoder；金标 HUD；点击后懒加载 vendor |
| related | `extract-audio-from-an-mp4-file`；`extract-audio-from-an-mkv-file`；`extract-audio-from-a-video-file`；`batch-extract-audio-from-mkv-files` |
| Schema | WebApplication + BreadcrumbList |
| FAQ | anti-URL；≠ 纯 remux；E-AC-3/Atmos；上限；与抽音页分工；上传否 |
| IG 维度 | 2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 |
|---|---|---|
| 录屏/下载的 MKV 要给只认 MP4 的编辑器 | Convert → Download | H.264+AAC MP4（视输入） |
| DDP/Atmos MKV 要先抽音 | Convert（AAC 立体声）→ 再去 MP4 抽音页 | 可 demux 的 MP4 |
| 验证路径 | Load sample | 短合成 MKV→MP4 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-01 |
| slug 结论 | 保留 `convert-an-mkv-file-to-an-mp4-file`（源→目标转换对；非 youtube-to-mp4） |
| 主检索词 → title/H1 | convert mkv to mp4 / mkv to mp4 → Convert an MKV file to an MP4 file |
| 次要关键词 → desc / FAQ / Use cases | mkv to mp4 aac → desc/Rules；convert matroska to mp4 → FAQ；ddp/atmos mkv → FAQ；中文 mkv 转 mp4 → zh H1 |
| 用户搜索习惯判断 | 搜 mkv to mp4 者持本地文件，要成片；默认 dropzone+Convert，高级设置收起（声道/质量） |
| 优化摘要 | conversion-pair H1；meta 前段含 MKV→MP4+AAC+本地；How=按钮词；related 抽音链 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| convert mkv to mp4 / mkv to mp4 | absorb 主词 | H1 / How | 本页 |
| convert matroska to mp4 | absorb 次词 | FAQ | 本页 |
| mkv to mp4 aac / mkv to mp4 stereo | absorb 次词 | desc / Rules / FAQ | 本页 |
| remux mkv to mp4 | absorb 澄清 | FAQ：本页会 AAC 转码，非仅 remux | 本页 |
| mkv dolby atmos to mp4 / e-ac-3 mkv convert | absorb 次词 | FAQ / err_codec | 本页 |
| mkv 转 mp4 / 把 mkv 转换成 mp4 | absorb 中文 | zh H1 / desc | 本页 |
| batch convert mkv to mp4 | 有意分场景 | FAQ → D3 未上线；可多次单文件 | 本页说明 |
| extract audio from mkv / mkv to mp3 | 有意分场景 | FAQ + related | extract-audio-from-an-mkv-file |
| youtube to mp4 / mkv url download | 有意不满足 | FAQ 拒绝 | 不冒充 |
| convert webm to mp4 / mov to mp4 | 有意分场景 | FAQ 一句（本页仅 MKV） | 未来 D8 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无专属 Planner 分析文件）

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-01 |
| 总判 | 满足 |
| 主词搜索者任务 | 把本地 MKV 转成可播放/可编辑的 MP4（常需 AAC） |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 单文件 dropzone → Convert → Download MP4；AAC 立体声；E-AC-3 走 ac3 扩展 |
| 超出 / 应划边界 | 不做批量 ZIP、不做 URL、不做 2.8 GiB 主打；高级设置不进主按钮行 |
| 缺口与已做优化 | How 用 Convert/Download；FAQ 写清与抽音分工；上限 500 MiB/2 h |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格

- 输入：单 `.mkv` dropzone  
- 主按钮：Convert；无产物 Download disabled  
- 次按钮：Load sample、Clear  
- 高级设置（折叠）：声道（默认立体声）、AAC 质量（默认 high）  
- HUD：金标 bcw-hud（Load / Decode / Encode / Write）  
- loadSample：fetch `/samples/convert-an-mkv-file-to-an-mp4-file.mkv`  
- 忙碌：禁输入；可 Stop/Cancel（Conversion.cancel）

## 页面模块清单

- [x] H1 + lead  
- [x] 工具面板（opts）  
- [x] How ≥4  
- [x] Why ≥4  
- [x] Rules ≥4  
- [x] Example  
- [x] Use cases ≥3  
- [x] FAQ ≥5  
- [x] related ≥2  
- [x] loadSample  

## 工程清单

- [x] catalog 分片  
- [x] Page.ts  
- [x] icon  
- [x] vendor mediabunny  
- [x] en i18n  
- [x] 十语  
- [ ] build:site + verify:tool  
