# 工具信息

**状态**：`ready`
**slug**：`make-a-quiet-recording-louder`
**路径**：`/tools/make-a-quiet-recording-louder`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 make audio louder amplify volume booster increase volume online。常见结果为桌面 DAW、万能 Online Audio Converter、「volume booster」浏览器扩展；网页页多把增益埋进「normalize / compressor / loudness」同一控件墙，少有单独讲 **整段 dB 增益 + 峰值削波保护**、且消歧「≠ peak/LUFS 归一化、≠ 动态压缩、≠ 压体积」的单点页。

补足三项：①Rules 写清增益是乘性放大、削波保护会限制实际增益、≠ 响度目标对齐；②结果展示增益 dB、源峰值、时长与输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData 、https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S15 |
| Title (en) | Make a quiet recording louder |
| Description | Make a quiet recording louder with dB gain/presets; peak protect. Steps: amplify, preview, download. Example: load the quiet sample. On-device; never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → apply gain（dB 滑条或预设）+ peak clip protect → PCM 16-bit WAV |
| related | convert-audio-sample-rate-and-bit-depth；convert-stereo-audio-to-mono |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ peak/LUFS 归一化（S16/S17）；≠ 动态压缩器（S18）；≠ MP3 体积压缩（S10）；隐私；已很响时增益空间有限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 手机备忘录录太轻，回放听不清 | 选 +6 dB 预设或拖滑条 → Convert | 更响的 16-bit WAV；默认温和增益（如 +6 dB） |
| 采访轨整体偏弱，但不想改响度目标 | 自定义 dB → Convert | 整段同比例放大；峰值触顶则保护缩放 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `make-a-quiet-recording-louder`（场景句；禁止「audio booster / volume booster」仅 URL 堆词当唯一 H1） |
| 主检索词 → title/H1 | make audio louder / amplify quiet recording → Make a quiet recording louder |
| 次要关键词 → desc / FAQ / Use cases | volume booster / increase volume → desc/How；gain dB / amplify audio → settings/rules；peak protect → rules |
| 用户搜索习惯判断 | 用户要整段变响，不是 peak/LUFS 归一化（S16/S17）、不是动态压缩贴面（S18）、不是压小 MP3（S10） |
| 优化摘要 | H1 场景句覆盖 make quieter louder；desc 点出 dB gain/presets 与 peak protect、三步与样例；FAQ 消歧 S10/S16/S17/S18 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| make audio louder / make a quiet recording louder | absorb 主词 | H1 / How | 本页 |
| amplify audio / audio amplifier online | absorb 次词 | desc / settings | 本页 |
| volume booster / increase volume audio | absorb 次词 | desc / usecase | 本页（品类词不拆 `/audio-booster`） |
| gain dB / boost gain audio | absorb 次词 | settings / rules | 本页 |
| normalize audio / peak normalize | 有意不满足（S16） | FAQ | 不建页（S16 未上线则 FAQ 说明边界，不链 related） |
| podcast loudness / LUFS | 有意不满足（S17） | FAQ | 不建页（S17） |
| audio compressor / dynamic range | 有意不满足（S18） | FAQ | 不建页（S18）；文案禁与 S10 体积「压缩」混用 |
| compress mp3 / reduce file size | 有意不满足（S10） | FAQ 可指向体积工具 | reduce-an-mp3-file-size（本页 related 用已上线 S11/S12） |
| convert sample rate / bit depth | 相邻作业 | related | convert-audio-sample-rate-and-bit-depth |
| stereo to mono | 相邻作业 | related | convert-stereo-audio-to-mono |

- [x] 上表已列全本意图相关搜索（本次可取得的搜法簇；未取得 PAA 不冒充已取得）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析；不声称搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：安静录音整段增益放大并导出可下载 WAV（含峰值削波保护） |
| 主词搜索者任务 | 把偏小声轨整段变响，便于回放、剪辑或交稿 |
| Ads/Planner | 不适用 |
| 满足之处 | dB 滑条/预设、峰值保护、试听、实测结果行、本地、样例自动 Amplify |
| 超出 / 应划边界 | 不做 peak/LUFS 归一化主路径（S16/S17）、不做动态压缩器（S18）、不做 MP3 体积压缩（S10）、不做多轨 DAW/母带夸大 |
| 缺口与已做优化 | FAQ 区分 S10/S16/S17/S18；Rules 写增益与削波保护；How 对齐 Amplify/Download；related 仅链已上线 catalog slug |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

相对过短的「一句话 meta」：`desc` 首页卡仍一句；`description` 须 140–160 字且含 Steps + Example；`article` 须说明何时用、增益 vs 归一化 vs 动态压缩、与 S10/S16/S17/S18 差异；How ≥4 步；Why choose ≥4 条可验证差异；Rules/FAQ 用人话解释控件与边界，禁止空「免费/最好」。

## 交互规格

- 单文件 dropzone：常见可解码音频（WAV/MP3/M4A 等），最大 40 MiB、10 分钟、1/2 声道；解码失败明确错误。
- 主按钮 Convert（或 Amplify）→ 结果试听 + Download WAV；Sample/Clear 次按钮。设置默认展开：增益 dB 滑条 + 预设芯片（如 +3 / +6 / +12 dB）；默认温和增益（如 +6 dB）。
- 峰值削波保护：应用增益后若峰值将超过满幅，按峰值等比回缩并在结果行提示实际生效增益。
- 结果显示增益 dB（请求/实际）、源峰值、秒数、输出 KiB。变更设置/输入即清除旧下载。
- 管线：读 → decodeAudioData → apply gain + peak clip protect → 16-bit WAV。进页样例：约 2 s 偏安静音调 WAV → 自动 Amplify；不自动播放。
- 进度 HUD：Read / Decode / Amplify / Write；金标样式；忙碌 aria-busy。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
