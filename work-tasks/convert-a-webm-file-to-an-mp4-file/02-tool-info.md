# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`convert-a-webm-file-to-an-mp4-file`  
**路径**：`/tools/convert-a-webm-file-to-an-mp4-file`  
**主方向**：A  
**YMYL**：否

## IG 预审

- 主词：WebM to MP4 converter；convert WebM recording to MP4；WebM video to H.264 MP4。
- 真实任务：把 VP8/VP9 浏览器录屏 WebM 重编码成 H.264 视频和可用时 AAC 音频的真 MP4，保留画面和时长并下载。
- 可验证 IG：输出 `ffprobe` 为 H.264/AAC、源/目标 codec 报告、视频尺寸与时长、体积比；无音轨标明不凭空生成音频；无法编码显示原因。
- 对照：Mediabunny 默认路径可能把 VP9 原样装入 MP4；显式 `video.codec='avc'` POC 在 Chrome 成功。
- 权威依据：见 `01` 的 Mediabunny 与 MDN。
- Related：`convert-an-mkv-file-to-an-mp4-file`、`extract-audio-from-a-webm-file`，MOV→MP4 完成后再加。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.1 第一项；视频 batch 的前置单件验收 |
| Title (en) | Convert a WebM File to an MP4 File |
| H1 | Convert WebM to a playable H.264 MP4 |
| Description 方向 | Convert a WebM recording to an MP4 with H.264 video and AAC audio when present; inspect source tracks, actual output and size locally. |
| Catalog `page.style` | `opts` |
| 技术 | WebM 签名/轨道探测 → H.264 encoder 能力 → Mediabunny 显式 AVC/AAC 转码 → OPFS StreamTarget/BufferTarget → 结果试听与下载 |
| Schema | WebApplication + BreadcrumbList，与页面可见信息一致 |
| FAQ | 为什么不能改扩展名、VP9 装 MP4 是否兼容、没有音轨、画质/体积、编码器不可用、隐私 |
| 验收 | 0b→2→4→all、`verify:tool`、VP8/VP9+Opus、无音轨/坏输入、真实 H.264/AAC 下载、显式大文件路径 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留格式对；不是 MKV 页换词或只改后缀，默认结果强制可播放目标编码 |
| 主检索词 → title/H1 | `WebM to MP4` → Convert a WebM File to an MP4 File / Convert WebM to a playable H.264 MP4 |
| 次词 → desc / FAQ / Use cases | `convert WebM recording to MP4` 进首段；`WebM to H.264 MP4` 进 How/FAQ；`browser recording to MP4` 进 Use cases |
| 用户搜法判断 | 搜索者常为浏览器录屏导入不支持 WebM 的编辑器/播放器；首屏须给出真 H.264/AAC、输出检查和下载，而不是泛格式介绍 |
| 优化摘要 | 将格式对主词对齐 H1 和首段；把原轨道/目标编码与真实输出验证放在前部，明确 VP9 拷入 MP4 不等于兼容转换 |
| [x] 已回写 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 | 近义不拆 URL |
|---|---|---|---|
| WebM to MP4 converter | absorb 主词 | H1、desc | 本页 |
| convert WebM recording to MP4 | absorb 次词 | desc、How | 本页 |
| WebM to H.264 MP4 | absorb 目标编码 | 首屏、FAQ | 本页 |
| browser screen recording to MP4 | absorb 使用场景 | Use cases | 本页 |
| VP9 WebM to MP4 | absorb 常见轨道 | 规则、FAQ | 本页 |
| WebM to MP3 | 不吸，音频产物 | related | 已有抽音页 |
| batch WebM to MP4 | 不吸，多文件队列 | related，单件验收后立 batch | §11.3 候选 |

- [x] 上表已列全本轮同意图相关搜索词
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，不用近义词拆页面

## Ads / Keyword Planner 长尾

- [x] 不适用（仓库未检出本 slug 的 Planner/Ads 分析）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：输入 WebM → 真 H.264/AAC MP4 → 播放/下载/轨道报告 |
| 主词用户任务 | 让浏览器录屏等 WebM 视频在 MP4 播放器/编辑器中兼容打开 |
| Planner 长尾 | 不适用 |
| 满足处 | 强制视频 AVC；有音频时 AAC；显示源轨道、分辨率、时长、前后大小；结果可播下载 |
| 超出/边界 | 无音轨不虚造；不承诺原质无损、必缩小或所有设备有 H.264 编码器 |
| 缺口与回写 | 默认加载有画面/声音样例；坏输入和编码缺失给可操作错误；POC 证实不能用默认轨道 copy |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已回写规格 |

## 交互规格

- 单一 WebM 本地文件输入；MIME/签名和实际轨道探测。一个主 Convert 按钮，完成后才可 Download。
- 默认强制 H.264 视频，源有可用音轨时转 AAC；高级设置可选画质，不改变主目标。浏览器缺编码器则明确失败。
- 金标进度 HUD，显示读取、轨道探测、编码、完成步骤/百分比/已用时间；结果预览、源/输出 codec 与尺寸/时长/大小。
- OPFS 优先承载大结果，无 OPFS 时限制内存风险；上限以真实压力回归后公开，不能凭代码上限称已验证几 GiB。
