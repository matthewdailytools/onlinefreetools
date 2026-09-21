# 工具信息

**状态**：`ready`
**slug**：`convert-stereo-audio-to-mono`
**路径**：`/tools/convert-stereo-audio-to-mono`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 stereo to mono converter online mp3 to mono mix left right. 常见结果为桌面 DAW、万能 Online Audio Converter、Convertio；网页页多把声道埋进「格式转换」矩阵，少有单独讲 **混声道边界** 与「≠ 拆左右文件 / ≠ 压体积」的单点页。

补足三项：①Rules 写清混合会平均 L/R、丢弃一侧不可逆；②结果展示源声道数、模式、时长与体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData 、https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S12 |
| Title (en) | Convert stereo audio to mono |
| Description | Mix a stereo recording to mono WAV—average both channels, or keep left/right only. Steps: convert, preview, download. Example: load the stereo sample. Audio stays on your device; never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → mix/select channels → PCM 16-bit WAV |
| related | convert-audio-sample-rate-and-bit-depth；reduce-an-mp3-file-size |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 采样率工具；≠ MP3 体积压缩（S10）；S13 才是拆 L/R 文件；隐私；已是 mono |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 立体声备忘录要交单声道 | Mix to mono → Convert | 整段 mono WAV；默认 Mix |
| 只要左（或右）轨人声 | Left only / Right only → Convert | 单声道 WAV；另一侧丢弃 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `convert-stereo-audio-to-mono`（场景句；禁止「stereo to mono converter」仅 URL 堆词当唯一 H1） |
| 主检索词 → title/H1 | stereo to mono / convert stereo audio → Convert stereo audio to mono |
| 次要关键词 → desc / FAQ / Use cases | mp3 to mono → FAQ；mix left right → settings/How；mono copy → rules |
| 用户搜索习惯判断 | 用户要整段改声道数，不是改采样率（S11）、不是压小 MP3（S10）、不是拆成左右两个文件（S13） |
| 优化摘要 | H1 场景句覆盖 stereo→mono；desc 点出 mix/left/right 与三步；FAQ 消歧 S10/S11/S13 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| stereo to mono / convert stereo to mono | absorb 主词 | H1 / How | 本页 |
| mp3 to mono / wav to mono | absorb 次词 | FAQ / usecase | 本页（格式不拆） |
| mix left right / downmix stereo | absorb 次词 | settings / rules | 本页 |
| mono only left / keep left channel | absorb 次词 | settings chips | 本页 |
| convert mono to stereo dual | absorb 轻量 | FAQ（本页不做 dual-mono 主路径） | 本页说明边界 |
| convert sample rate / bit depth | 有意不满足（S11） | FAQ 指向 related | convert-audio-sample-rate-and-bit-depth |
| compress mp3 / reduce file size | 有意不满足（S10） | FAQ 指向 related | reduce-an-mp3-file-size |
| split stereo left right files / swap L-R | 有意不满足（S13） | FAQ | 不建页（S13） |

- [x] 上表已列全本意图相关搜索（本次可取得的搜法簇；未取得 PAA 不冒充已取得）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析；不声称搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：立体声混/选为单声道并导出可下载 WAV |
| 主词搜索者任务 | 把双声道整段变成单声道，供上传、剪辑或兼容旧设备 |
| Ads/Planner | 不适用 |
| 满足之处 | Mix/L/R、试听、实测结果行、本地、已 mono 可副本下载 |
| 超出 / 应划边界 | 不做拆左右双文件、不做 L-R 交换独立 URL、不做采样率主作业、不做 MP3 体积压缩主路径 |
| 缺口与已做优化 | FAQ 区分 S10/S11/S13；Rules 写混合与丢一侧；How 对齐 Convert/Download |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

相对过短的「一句话 meta」：`desc` 首页卡仍一句；`description` 须 140–160 字且含 Steps + Example；`article` 须说明何时用、混声道风险（相位抵消）、与 S10/S11/S13 差异；How ≥4 步；Why choose ≥4 条可验证差异；Rules/FAQ 用人话解释控件与边界，禁止空「免费/最好」。

## 交互规格

- 单文件 dropzone：常见可解码音频（WAV/MP3/M4A 等），最大 40 MiB、10 分钟、1/2 声道；解码失败明确错误。
- 主按钮 Convert → 结果试听 + Download WAV；Sample/Clear 次按钮。设置默认展开：输出模式 Mix to mono（默认）/ Left only / Right only。
- 已是单声道：结果行明确提示；仍允许 Convert 后下载 mono WAV 副本（pass-through）。
- 结果显示源声道、模式、秒数、输出 KiB。变更设置/输入即清除旧下载。
- 管线：读 → decodeAudioData → mix/select → 16-bit WAV。进页样例：约 2 s 立体声音调 WAV → 自动 Convert 为 mono；不自动播放。
- 进度 HUD：Read / Decode / Mix / Write；金标样式；忙碌 aria-busy。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
