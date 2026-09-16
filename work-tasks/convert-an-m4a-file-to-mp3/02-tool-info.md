# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`convert-an-m4a-file-to-mp3`  
**路径**：`/tools/convert-an-m4a-file-to-mp3`  
**主方向**：A  
**YMYL**：否

## 用户任务与边界

| 用户任务 | 页面结果 | 边界 |
|---|---|---|
| 把一段本地 M4A 录音或 AAC 音频变成易分享的 MP3 | 整段音频、可试听和下载的 MP3 | 不裁剪、不批量、不接视频或 URL |
| 搜索 `aac to mp3` | 同一控件完成转换 | 不为 AAC 另开近义 URL |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Convert an M4A file to MP3 |
| Description | Open one local M4A or AAC file, convert the complete recording to MP3, preview and download it; processing stays on the device, without server upload. |
| 技术 | Web Audio `decodeAudioData`；lamejs 仅在 Convert 时从 `/vendor/lamejs/` 加载；本地处理。 |
| Catalog style | `opts` |
| related | `convert-a-wav-file-to-mp3`、`trim-an-audio-clip-and-export` |
| References | MDN `decodeAudioData`、`AudioBuffer` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| slug | 保留 `convert-an-m4a-file-to-mp3`：完整文件转换任务，与裁剪及 WAV 输入页不同。 |
| 主词 → H1 | `Convert an M4A file to MP3`；中文方向为“把 M4A 文件转成 MP3”。 |
| 次词 | `m4a to mp3 converter` 进描述；`aac to mp3`、无需上传、浏览器兼容性进 FAQ；录音分享进 use case。 |
| 意图判断 | 搜索者要将一整个本地音频文件转换，首屏只展示一种文件输入与一个 Convert 动作。 |
| 优化摘要 | 保留用户指定的任务句 slug；主词放入 H1，AAC 近义词自然放入描述、FAQ 和用例，避免另开近义 URL。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已完成。 |

## IG 预审

- 本页计划提供的可核验增益是：转换前的容器与音轨检查、真实 MP3 试听和输入/输出实测大小、明确的浏览器解码/DRM/时长边界；不笼统声称竞品缺少这些功能。
- 信息增益维度：#1 码率与大小估算规则、#2 失败边界、#3 录音分享场景、#5 MDN Web Audio 参考、#6 文件留在设备、#8 五秒合成音输出例子、#9 两个相邻音频工具链接。
- 不做批量、视频抽音、云端上传、裁剪或格式矩阵；这些不会帮助“完整 M4A/AAC 转 MP3”的单文件任务。

## Ads / Keyword Planner 长尾

- 不适用：未发现本 slug 已归属的 Google/Bing Planner 长尾分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-16 |
| 总判 | 满足：一个完整本地 M4A/AAC 录音转为可试听、可下载的 MP3。 |
| 主词搜索者任务 | 将已有录音完整转换成易分享的 MP3，而非编辑、下载视频或批量处理。 |
| 满足之处 | 首屏单文件输入、Convert to MP3、真实输出试听和下载均服务该任务。 |
| 超出 / 有意不满足 | AAC 是相同解码任务；批量、视频、DRM 与反向 WAV 转换不纳入首屏，FAQ 明确边界。 |
| 已回写优化 | How 使用实际按钮词；FAQ 说明 AAC、隐私、浏览器解码与限制；高级设置只保留码率。 |

## 页面模块清单

- [x] H1 + 本地处理摘要
- [x] 单一 M4A/AAC 文件 dropzone、Convert / Download / Sample / Clear
- [x] 折叠码率设置与 Read / Decode / Encode HUD
- [x] How、Why choose、Rules、Example、Use cases、FAQ、Related、MDN reference

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| m4a to mp3；convert m4a to mp3 | 主词 | H1、描述 |
| m4a to mp3 converter；m4a converter | absorb | 描述、FAQ |
| aac to mp3；convert aac to mp3 | absorb | FAQ、use case |
| m4a to mp3 without uploading；browser m4a converter | absorb | 描述、FAQ |
| batch m4a to mp3；video to mp3；M4A ringtone | 有意不满足 | FAQ 一句划界 |

- [x] 上表已列全本意图相关搜索（不是只写 03 的 3–5 个主方向词）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## 交互规格

- 输入：一个本地 M4A/AAC 文件，40 MiB / 10 分钟上限；先检查 MP4/AAC 签名，再由浏览器解码。
- 动作：**Convert to MP3**；`Load sample` 加载真正的 M4A，经过同一输入检查、解码、编码路径；`Download MP3` 在成功前禁用。
- 设置：高级设置内选择 128 / 192 / 320 kbps。
- 结果：真实输出时长、输入/输出大小、声道和码率，可试听下载。
- HUD：Read / Decode / Encode；重活前 `yieldUi()`；完成保留 100% 卡片。
- Sample：`public/samples/convert-an-m4a-file-to-mp3.m4a` 已生成，为五秒双声道 AAC 音调（约 81.4 KiB）。作为静态资源入库，正常构建和页面运行不依赖 FFmpeg；FFmpeg 仅用于可选重新生成及开发测试。

## 当前验收边界（2026-09-16）

- 独立 P3 renderer，不再修改已上线 P1；修复未赋值 `info.channels`、文件选择过滤器，并以真实解码结果报告声道和时长。
- 容器检查拒绝视频轨道、加密 sample entry、多音轨、碎片 MP4、非法 box、超长/多声道输入；结构回归测试通过，不等于 AAC 解码通过。
- 原沙盒 Chromium/socket 与 DNS 限制已通过用户批准的沙盒外执行解决。缓存 Chromium 不带 AAC 解码器，因此真实输入验收改用官方 Chrome for Testing。
- 样例实测输出 120999 bytes、双声道、播放时长 5.0416 秒（含 MP3 padding），左右声道能量均非零；MP3 下载字节数一致。
- 用户于 2026-09-16 明确要求跳过本次触发 OOM 的超过 40 MiB 浏览器用例。使用 `--skip-oversized` 显式标记，生产大小限制不变，不能把该项记录为通过。
- 发布使用独立目录，排除未完成的 P2；远端上传、Git push 和线上验收需分别记录结果。
- 官方 Chrome 浏览器验收 exit 0（`--skip-oversized`）：真实样例下载、码率切换、mono M4A、AAC ADTS、ALAC 平台处理、视频/加密/截断/碎片容器拒绝、资源加载失败重试、十语 390px 布局与 Arabic RTL。唯一豁免项为上面列出的超大文件浏览器测试；站点统计脚本在该测试中被显式屏蔽。
