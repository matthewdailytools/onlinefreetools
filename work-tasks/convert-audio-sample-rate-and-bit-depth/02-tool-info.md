# 工具信息

**状态**：`implemented`
**slug**：`convert-audio-sample-rate-and-bit-depth`
**路径**：`/tools/convert-audio-sample-rate-and-bit-depth`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 convert sample rate audio 48khz to 44.1 bit depth converter online。常见结果为桌面 DAW、Online Audio Converter、Convertio、CloudConvert；网页页多把采样率埋进「万能转换」矩阵，少有单独讲 **位深 + 重采样边界** 的单点页。

补足三项：①Rules 写清重采样会改时域采样点、位深量化不可逆；②结果展示源/目标 Hz 与 bit、时长与体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext 、https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S11 |
| Title (en) | Convert audio sample rate and bit depth |
| Description | Change a recording to 44.1 or 48 kHz and 16 or 24-bit WAV: convert, preview and download. Files stay on your device and are never uploaded to a server. |
| page.style | opts |
| 技术 | decodeAudioData → OfflineAudioContext 重采样 → PCM 16/24 WAV |
| related | convert-an-mp3-file-to-wav；reduce-an-mp3-file-size |
| Schema | WebApplication + BreadcrumbList |
| FAQ | 为何 44.1 vs 48；位深；有损源；隐私；≠ 体积压缩 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 播客要交 44.1 kHz / 16-bit | 选目标率与位深 → Convert | 整段 WAV；默认 44.1 kHz / 16-bit |
| 工程素材是 48 kHz | 改为 44.1 或保留 48、可选 24-bit | 试听后下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `convert-audio-sample-rate-and-bit-depth`（情境句；禁止 `/48k-to-441` 矩阵） |
| 主检索词 → title/H1 | convert sample rate / bit depth converter → Convert audio sample rate and bit depth |
| 次要关键词 → desc / FAQ / Use cases | 48khz to 44.1 → desc/FAQ；16-bit / 24-bit WAV → rules；resample audio → How |
| 用户搜索习惯判断 | 用户要改工程规格，不是压小 MP3（S10）也不是立体声↔单声道（S12） |
| 优化摘要 | H1 同时覆盖采样率与位深；desc 点出 44.1/48 与 16/24；FAQ 消歧体积压缩 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| convert sample rate / change sample rate audio | absorb 主词 | H1 / How | 本页 |
| 48khz to 44.1 / 44.1 to 48 | absorb 次词 | desc / FAQ / settings | 本页（芯片，不拆 URL） |
| bit depth converter / 16-bit 24-bit WAV | absorb 主/次 | H1 / rules | 本页 |
| resample audio online | absorb 次词 | How / article | 本页 |
| convert wav sample rate | absorb 次词 | usecase | 本页 |
| pcm 24 bit export | absorb 次词 | rules | 本页 |
| compress mp3 / reduce file size | 有意不满足（S10） | FAQ 指向 related | reduce-an-mp3-file-size |
| stereo to mono | 有意不满足（S12） | FAQ | 不建页 |
| mp3 to wav only | 已有独立作业 | related | convert-an-mp3-file-to-wav |

- [x] 上表已列全本意图相关搜索（本次可取得的搜法簇；未取得 PAA 不冒充已取得）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析；不声称搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：改采样率与位深并导出可下载 WAV |
| 主词搜索者任务 | 把录音调到目标 Hz / bit，供剪辑或发行规格 |
| Ads/Planner | 不适用 |
| 满足之处 | 多档 Hz、16/24-bit、试听、实测结果行、本地 |
| 超出 / 应划边界 | 不做格式矩阵页、不做体积压缩主路径、不做声道主作业、不承诺「听感无损」 |
| 缺口与已做优化 | FAQ 区分 S10；Rules 写重采样与量化；How 对齐 Convert/Download 按钮 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 交互规格

- 单文件 dropzone：常见可解码音频（WAV/MP3/M4A 等），最大 40 MiB、10 分钟、1/2 声道；解码失败明确错误。
- 主按钮 Convert → 结果试听 + Download WAV；Sample/Clear 次按钮。设置默认展开或收起均可：采样率 22050/44100/48000/96000（默认 44100），位深 16/24（默认 16）。
- 结果显示源 Hz/bit（bit 对浮点解码标为 float 源）、目标 Hz/bit、秒数、输出 KiB。变更设置/输入即清除旧下载。
- 重采样用 OfflineAudioContext；再按位深写 PCM WAV。进页样例：合成约 2 s、48 kHz 源 → 默认转 44.1 kHz / 16-bit；不自动播放。
- 进度 HUD：Read / Decode / Resample / Write；金标样式；忙碌 aria-busy。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥3 / Rules / Example / Use cases
- [x] FAQ ≥3 / related ≥2 / References
- [x] 十语 brief 与实现
