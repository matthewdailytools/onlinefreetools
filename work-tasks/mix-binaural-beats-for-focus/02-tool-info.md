# 工具信息

**状态**：`implemented`
**slug**：`mix-binaural-beats-for-focus`
**路径**：`/tools/mix-binaural-beats-for-focus`
**主方向**：A
**YMYL**：克制（不宣称疗效）

## IG 预审

2026-09-20 搜索 binaural beats generator；双耳节拍；binaural beats for focus。常见结果为宣称「脑波/治疗/助眠疗效」的播放器或 App。少有 **仅本机载波+节拍差 → 立体声 WAV、耳机说明、且 FAQ/Rules 明确娱乐/氛围非治疗** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Binaural_beats（机制描述，非疗效背书）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F9 G7 |
| Title (en) | Mix binaural beats for focus |
| Description | Mix binaural beats for focus from a carrier and beat difference in the browser, then download a stereo 16-bit WAV. Steps: Set carrier and beat Hz or tap a preset, pick duration, Mix, preview on headphones, download. Example: 200 Hz carrier with a 10 Hz difference for 10 seconds. Entertainment and ambient focus sound only—not medical treatment. Never uploaded. |
| page.style | opts |
| 技术 | Dual-sine L/R → stereo 16-bit WAV |
| related | generate-a-sine-tone-at-a-frequency；make-a-short-ui-notification-sound |
| Schema | WebApplication + BreadcrumbList |
| FAQ | headphones；≠ sine mono；≠ therapy；privacy；format |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 桌面专注氛围 | 选 10 Hz 差 → Mix → Download | 立体声 WAV |
| 耳机试听 | 样例 200/10/10s | 可复现双耳差 |
| 样例验管线 | Load sample | 自动生成 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `mix-binaural-beats-for-focus`（hub F9 G7 草稿 slug） |
| 主检索词 → title/H1 | binaural beats generator / for focus → Mix binaural beats for focus |
| 次要关键词 → desc / FAQ | 双耳节拍；stereo WAV；headphones → desc/FAQ；therapy/cure → FAQ 拒绝 |
| 用户搜索习惯判断 | 搜双耳节拍者常遇疗效宣称；本页须给诚实「氛围音 WAV」+ 非治疗边界 |
| 优化摘要 | H1 任务句；FAQ 强制 anti-therapy / headphones / ≠ mono sine |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| binaural beats generator / binaural beats for focus | absorb 主词 | H1 / How | 本页 |
| 双耳节拍 / 双耳节拍发生器 | absorb 中文 | zh H1 / FAQ | 本页 |
| stereo beat tones / left right frequency difference | absorb 次词 | desc / Rules | 本页 |
| binaural beats sleep / therapy / heal / cure | 有意不满足（YMYL） | FAQ/Rules | 本页划界，不扩疗效 |
| sine tone / frequency generator | 有意不满足（G5） | FAQ | generate-a-sine-tone-at-a-frequency |
| ui notification / click sound | 相邻作业 | related | make-a-short-ui-notification-sound |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：载波+节拍差 → 立体声 WAV；明确非治疗；耳机说明 |
| 主词搜索者任务 | 设 Hz、选时长、合成、耳机试听、下载 |
| 满足之处 | 载波/差、预设、时长、本地合成、立体声 WAV、YMYL FAQ |
| 超出 / 应划边界 | 不做疗效宣称；不做单声道正弦（G5）；不做 UI 提示音（G12）；不做 8D 平移 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 载波 Hz（默认 200）、节拍差 Hz（默认 10）；氛围预设芯片只改数字（如 4/10/16 Hz 差），**无**疗效文案。
- 时长芯片 5/10/30/60 s；主按钮 Mix；导出 **立体声 WAV only**。
- HUD Synth/Write；样例不自动播放；Rules/FAQ 写耳机与非治疗。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
