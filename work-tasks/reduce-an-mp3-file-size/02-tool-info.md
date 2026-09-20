# 工具信息

**状态**：`implemented`
**slug**：`reduce-an-mp3-file-size`
**路径**：`/tools/reduce-an-mp3-file-size`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 compress MP3 reduce file size bitrate mono online。结果包括 Omnibus、Nada Sai、DAW Converter、TaoClip、nanofile、Squish；常见结构为码率/质量选择、上传、压缩、下载。
参考：https://omnibus.tools/audio-compressor 、https://www.dawconverter.com/tools/mp3/compress 、https://squish.tools/en/compress-mp3 。未取得独立搜索量或完整 PAA 数据，不虚构量级。

补足三项：①规则区区分总码率与声道数，同一码率单声道不会自动减半；②结果实测节省，若变大明确提示，避免假成功；③输入帧预检限制时长，拒绝伪 MP3，保留重试。另含本地隐私、可重复样例和相邻工具。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S10 |
| Title (en) | Reduce an MP3 file size |
| Description | Compress a large MP3 attachment: choose a lower bitrate, preview the result and download. Files stay on your device and are never uploaded to a server. |
| page.style | opts |
| 技术 | Web Audio 解码到 44.1 kHz；lamejs 重新编码 |
| related | convert-a-wav-file-to-mp3；trim-an-audio-clip-and-export |
| Schema | WebApplication + BreadcrumbList |
| FAQ | 有损、不能保证缩小、单声道、隐私、格式边界 |
| IG | 1 码率公式；2 无缩小/损坏边界；6 不上传；8 实际样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| MP3 附件太大 | 降低码率重新编码 | 全长 MP3；128 kbps，保留声道 |
| 口播需要更小 | 64/96 kbps，可选单声道 | 实测体积 + 试听 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `reduce-an-mp3-file-size`，对应既有 MP3 文件减重任务 |
| 主检索词 → title/H1 | reduce MP3 file size → Reduce an MP3 file size |
| 次要关键词 → desc / FAQ / Use cases | compress MP3 → desc；MP3 compressor / smaller attachment → article/usecase；lower bitrate → rules；mono MP3 → FAQ |
| 用户搜索习惯判断 | 用户要的是更小的附件，不是音量动态压缩；中文写“压缩 MP3 文件大小”消歧 |
| 优化摘要 | 从泛称 Audio compressor 改为明确 MP3 文件大小；加入变大警告和同总码率单声道不减半的解释 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| reduce MP3 file size / make MP3 smaller | absorb 主词 | H1 / desc | 本页 |
| compress MP3 online / MP3 compressor | absorb 次词 | desc / article | 本页 |
| smaller audio attachment / compress MP3 for email | absorb 次词 | usecase | 本页 |
| lower MP3 bitrate / 64 kbps / 96 kbps / 128 kbps | absorb 次词 | rules / How | 本页 |
| convert stereo MP3 to mono | absorb 次词 | FAQ / rules | 本页 |
| compress MP3 without losing quality | absorb，否定承诺 | FAQ 有损说明 | 本页 |
| why compressed MP3 is larger | absorb | FAQ 与结果警告 | 本页 |
| compress MP3 to exact MB | 有意不满足精确目标 | FAQ 体积为实测，不保证上限 | 本页 |
| audio dynamic compressor / volume leveling | 有意不满足 | FAQ 不调整动态 | 不建页 |
| WAV to MP3 / trim audio | 已有独立作业 | related | 已有工具 |

- [x] 上表已列全本意图相关搜索（本次可取得的搜法簇；未取得 PAA 不冒充已取得）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析；不声称搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：围绕 MP3 文件减重、试听、实际节省及下载完成任务 |
| 主词搜索者任务 | 把大 MP3 附件做小而不裁掉录音内容 |
| Ads/Planner | 不适用 |
| 满足之处 | 低码率、可选单声道、体积差、重试、明确有损 |
| 超出 / 应划边界 | 不加入动态压缩/剪辑/格式矩阵；不承诺无损或精确 MB |
| 缺口与已做优化 | How 先提醒保留原稿；FAQ 说明单声道相同总码率不减半；更大时直接显示警告 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 交互规格

- 单文件 dropzone：MP3，最大 40 MiB、10 分钟、1/2 声道。先解析 MPEG Layer III 帧限制时长再解码，拒绝损坏/不支持输入。
- 主按钮 Compress MP3 → 结果试听 + Download MP3；Sample/Clear 次按钮。设置默认收起：64/96/128/192 kbps（128 默认），保留声道/单声道。
- 结果显示源/目标 KiB、秒数、目标码率/声道、节省百分比。若 output >= input 显示“未缩小，试更低码率”。变更设置/输入即清除旧下载。
- 全长处理；双声道平均为 mono，固定总码率不因 mono 自动减半。输出 44.1 kHz；有损、丢弃标签封面、编码填充略增时长。
- 进页样例：内置生成的 3 秒双声道 192 kbps MP3；loadSample 自动走相同读取→解码→128 kbps编码→实测流水线；不自动播放。预计约 71 KiB→48 KiB，实际值为准。
- 进度 HUD：Read / Decode / Encode 步骤胶囊、大百分比、文件名、耗时、条纹、CSS transform 动画；重活前 yieldUi、编码分块；忙碌禁用所有输入并 aria-busy；成功 100% 保留，失败同尺寸错误卡。
- `opts`；模板正则双反斜杠；页面校验与真实下载解码测试。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥3 / Rules / Example / Use cases
- [x] FAQ ≥3 / related ≥2 / References
- [x] 十语 brief 与实现
