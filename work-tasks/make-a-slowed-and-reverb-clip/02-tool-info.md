# 工具信息

**状态**：`implemented`
**slug**：`make-a-slowed-and-reverb-clip`
**路径**：`/tools/make-a-slowed-and-reverb-clip`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 slowed and reverb；slowed reverb maker；慢歌混响；slowed + reverb。常见结果为桌面 DAW、万能 converter 只做 playbackRate，或把减速与混响拆成两页；也有空壳页只减速却硬吹 slowed+reverb。少有单独讲 **减速重采样（降调拉长）+ 反馈混响一条龙、预设减速与 Soft/Medium/Heavy、且 FAQ 诚实消歧 ≠ nightcore（S34）≠ speed-only（S32）≠ reverb-only（S40）** 的单点页。

补足三项：①Rules 写清 resample 减速 + delay-feedback 混响与质量上限；②结果展示减速倍率、约合半音、混响档、输出时长/体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Reverberation 、https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S35 |
| Title (en) | Make a slowed and reverb clip |
| Description | Slow a clip and add reverb for the classic slowed+reverb aesthetic, then download a 16-bit WAV. Steps: Slowed reverb, preview, download. Example: load the sample. Combo—not speed-only, not reverb-only, not nightcore. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → resample ratio&lt;1 (slow+pitch down) → feedback-delay reverb → PCM 16-bit WAV |
| related | make-a-nightcore-version-of-a-song；change-audio-speed-without-changing-pitch |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ nightcore（S34）；≠ speed-only（S32）；≠ reverb-only（S40）；隐私；浏览器诚实上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 经典 slowed+reverb | 0.8× + Medium（默认）→ Slowed reverb | 更慢更低、带尾音的 WAV |
| 更慢更深 | 0.75× + Heavy → Slowed reverb | 更闷更长、混响更重 |
| 自定义 | Custom 0.55–0.95 + Soft/Medium/Heavy | 按输入减速并混响 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `make-a-slowed-and-reverb-clip`（场景句；禁止与只变速/只混响/夜核混 H1） |
| 主检索词 → title/H1 | slowed and reverb / slowed reverb maker → Make a slowed and reverb clip |
| 次要关键词 → desc / FAQ / Use cases | slow down with reverb / 慢歌混响 → settings/usecase；nightcore / tempo-only / reverb-only → FAQ |
| 用户搜索习惯判断 | 用户要减速又带混响的一条龙，不是练歌保音高变速、不是夜核加速、不是只加混响 |
| 优化摘要 | H1 场景句；desc 点出 slow+reverb；FAQ 强制消歧 S32/S34/S40 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| slowed and reverb / slowed reverb maker | absorb 主词 | H1 / How | 本页 |
| slow down with reverb | absorb 次词 | desc / Rules | 本页 |
| 慢歌混响 / slowed + reverb | absorb 场景 | Use cases / presets | 本页 |
| change speed without pitch | 有意不满足（S32） | FAQ | change-audio-speed-without-changing-pitch |
| nightcore maker | 有意不满足（S34） | FAQ | make-a-nightcore-version-of-a-song |
| add reverb only | 有意不满足（S40） | FAQ | （未上线则文案边界） |
| voice clone / autotune | 有意不满足 | FAQ / Rules | 不冒充克隆 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：减速+混响后导出 WAV；诚实写浏览器质量上限；禁止无混响空壳 |
| 主词搜索者任务 | 减速又混响、听 slowed+reverb 感、下载 |
| 满足之处 | 减速预设+混响档、试听、结果行、本地、样例自动跑、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S32 只变速；不做 S34 夜核；不做 S40 只混响；不做曲库扒带 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S32/S34/S40 消歧与浏览器诚实上限）；zh description ≥120 字符。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Slowed reverb → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：减速 0.75× / 0.8× / 0.85× + Custom（默认 0.8×）；混响 Soft / Medium / Heavy（默认 Medium）。
- 管线：decode → resample ratio&lt;1（减速+降调）→ feedback-delay reverb（含尾音）→ 16-bit WAV。
- 结果显示减速、约合半音、混响档、输入/输出秒数、输出 KiB。
- HUD：Read / Decode / Slow / Reverb / Write；进页样例自动 Slowed reverb（默认 0.8× + Medium）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
