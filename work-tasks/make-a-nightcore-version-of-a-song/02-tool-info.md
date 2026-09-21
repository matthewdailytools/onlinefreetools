# 工具信息

**状态**：`implemented`
**slug**：`make-a-nightcore-version-of-a-song`
**路径**：`/tools/make-a-nightcore-version-of-a-song`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 nightcore maker；make nightcore；夜核；加速升调。常见结果为桌面 DAW、万能 converter 用 playbackRate，或把变速/变调拆成两页。少有单独讲 **夜核一条龙（加速+升调）、预设 1.25/1.35/1.5、结果同时显示倍率与约合半音、且 FAQ 诚实消歧 ≠ speed-without-pitch（S32）≠ pitch-shift（S33）** 的单点页。

补足三项：①Rules 写清 resample 夜核与质量上限；②结果展示速度、约合半音、输出时长/体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Nightcore 、https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S34 |
| Title (en) | Make a nightcore version of a song |
| Description | Speed up and raise pitch together for a nightcore take, then download a 16-bit WAV. Steps: Nightcore, preview, download. Example: load the sample. Browser resample combo—not speed-only, not pitch-only. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → resample by nightcore ratio (speed+pitch) → PCM 16-bit WAV |
| related | shift-the-pitch-of-a-song；change-audio-speed-without-changing-pitch |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ speed-without-pitch（S32）；≠ pitch-shift（S33）；隐私；浏览器诚实上限；预设含义 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 经典夜核 | 1.25×（默认）→ Nightcore | 更快更高、更短的 WAV |
| 更强夜核 | 1.35× 或 1.5× → Nightcore | 更尖更高更快 |
| 自定义倍率 | Custom 1.1–1.8 → Nightcore | 按输入倍率加速+升调 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `make-a-nightcore-version-of-a-song`（场景句；禁止与只变速/只变调混 H1） |
| 主检索词 → title/H1 | nightcore maker / make nightcore → Make a nightcore version of a song |
| 次要关键词 → desc / FAQ / Use cases | speed up raise pitch / 夜核 → settings/usecase；WSOLA / transpose keep length → FAQ |
| 用户搜索习惯判断 | 用户要加速又升调的一条龙，不是练歌保音高变速、不是只改调保时长 |
| 优化摘要 | H1 场景句；desc 点出 speed+pitch；FAQ 强制消歧 S32/S33 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| nightcore maker / make nightcore | absorb 主词 | H1 / How | 本页 |
| speed up and raise pitch | absorb 次词 | desc / Rules | 本页 |
| 夜核 / 加速升调 | absorb 场景 | Use cases / presets | 本页 |
| change speed without pitch | 有意不满足（S32） | FAQ | change-audio-speed-without-changing-pitch |
| pitch shift keep duration | 有意不满足（S33） | FAQ | shift-the-pitch-of-a-song |
| voice clone / autotune | 有意不满足 | FAQ / Rules | 不冒充克隆 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：夜核加速+升调后导出 WAV；诚实写浏览器质量上限 |
| 主词搜索者任务 | 加速又升调、听夜核感、下载 |
| 满足之处 | 预设+自定义、试听、结果行（倍率+约合半音）、本地、样例自动 Nightcore、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S32 只变速；不做 S33 只变调保时长；不做曲库扒带 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S32/S33 消歧与浏览器诚实上限）；zh description ≥120 字符。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Nightcore → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：1.25× / 1.35× / 1.5× + Custom（默认 1.25×）。
- 管线：decode → resample by ratio（同时改速度与音高）→ 16-bit WAV（不做 WSOLA 回正）。
- 结果显示速度、约合半音、输入/输出秒数、输出 KiB。
- HUD：Read / Decode / Nightcore / Write；进页样例自动 Nightcore（默认 1.25×）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
