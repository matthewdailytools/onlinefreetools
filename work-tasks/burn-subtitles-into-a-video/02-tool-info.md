# 02 — Tool information and coverage decision

**状态**：`implemented`（本地验收，未部署）  
**slug**：`burn-subtitles-into-a-video`  
**路径**：`/tools/burn-subtitles-into-a-video`  
**方向**：A · 已有字幕烧录到一个本地视频，非自动识别/软字幕  
**YMYL**：否

| 字段 | 内容 |
|---|---|
| 主任务 | 选择本地视频与 SRT/VTT，将现成字幕永久画进视频帧并下载 MP4 |
| Title/H1 (en) | Burn SRT subtitles into a local video |
| Description | Add hardcoded subtitles to a local video from SRT or VTT; adjust readable text and safe area, preview the MP4, then download. No upload. |
| 使用场景 | 已有 SRT/VTT，发送到不支持字幕文件的平台时需要画面内字幕；首屏默认就是视频+字幕→烧录 MP4 |
| page.style | opts |
| 技术 | Mediabunny BlobSource+逐帧 Canvas videoProcess；H.264/AAC MP4，较大文件 OPFS 流式写出，成品验轨 |
| IG | 烧录/软字幕区别；逐帧时间匹配；字号颜色安全区和长行换行；源/成品编码与字幕条数；失败/配额透明 |
| 边界 | 只接受已有 SRT/VTT，不做自动转写；烧录必重编码；设备编码器/存储配额有上限；复杂 VTT 样式不保留 |
| Related | `subtitle-format-converter`、`add-subtitles-to-video`（若站内存在则核对）、`convert-a-video-to-an-mp4-with-aac-audio` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 用 burn subtitles into a video 承接硬字幕作业；不为 hardcode / bake / permanent 近义词另开 URL |
| 主检索词→title/H1 | burn SRT subtitles into video / hardcode subtitles video → Burn SRT subtitles into a local video |
| 次词→desc/FAQ/Use cases | add permanent subtitles to MP4、burn VTT captions、video with subtitles already visible、no upload → 首段、FAQ、用途 |
| 用户搜法判断 | 搜索者已有字幕时间文件，想要画面总能显示文字的成品，不只附加可开关字幕轨 |
| 优化摘要 | 将 hardcode/permanent 同意图词纳入首段和 FAQ；首屏双输入与样式控制直接服务烧录，结果解释重编码和可见像素 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| burn subtitles into video / hardcode SRT subtitles | 主任务 | H1、首段、How | 本页 |
| add permanent captions to video / bake subtitles into MP4 | 同义 | description、FAQ | 本页 |
| burn VTT subtitles into MP4 | 同功能输入 | 首段、How、FAQ | 本页 |
| subtitles always visible / video with embedded visible captions | 结果意图 | Rules、Use cases | 本页 |
| add subtitles without uploading video | 隐私条件 | 首段、FAQ | 本页 |
| generate subtitles automatically / translate captions / soft subtitle track | 异意图 | FAQ 划界、Related | 不新建近义页 |

- [x] 已列全当前同意图相关搜法，并指定自然文案落点。
- [x] 生成文案时按上表写入 H1、首段、FAQ 与用途。

## Ads / Keyword Planner 长尾

- [x] 未找到归属本烧录意图的 Ads Planner 长尾分析；现有字幕 deep scan 只将烧录列为 P2 候选。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：输入已有字幕文件并把文字实际烧进本地视频的帧，不把可开关字幕轨冒充烧录 |
| 主词搜索者任务 | 让目标视频不依赖播放器字幕开关也显示定时字幕 |
| 已满足 | 双文件输入、解析时间码、逐帧绘制、H.264/AAC MP4、可预览可下载 |
| 超出/边界 | 不自动语音识别、不翻译、不合并第二编辑器；VTT 高级标记不承诺保留 |
| 缺口与已做优化 | How 先要求准备匹配时间轴的 SRT/VTT，再选择视频、调整样式、烧录和检查；FAQ 明确重编码与字幕可见性 |
| [x] 已回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 视频一件 + SRT/VTT 一件，支持粘贴字幕文本；主按钮 Burn subtitles、产物后启用 Download MP4；样式折叠设置。
- 进页自动加载本地短 WebM 和 SRT 样例并烧录；进度 HUD 大百分比、阶段、耗时、文件；停止/重试。
- 大文件经 BlobSource bounded cache 和 OPFS；代码上限并非实测能力；真实输出检查 H.264/AAC 与帧可见文字。
- 失败：坏字幕、非视频、缺编解码器、配额、取消；不开放空/残缺下载。

## 页面模块清单

- [x] 首屏交互、How、Why、Rules、Example、Use cases、FAQ、Related、References
- [x] 十语覆盖、build、real-output browser tests

## 本地验收证据

- `npm run coverage:gate -- --slug=burn-subtitles-into-a-video --phase=0b|2|4` 各阶段通过；`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=burn-subtitles-into-a-video` 全部机械门禁通过。
- `node scripts/tool-modules/test-burn-subtitles-browser.mjs`：自动样例下载 H.264/AAC MP4，0.1 秒底部亮字像素 0、1 秒 668；坏 SRT 拒绝后 VTT 重试，停止后 65 秒片重试，>80 MiB 输入 OPFS 路径，十语手机端实际下载均通过。
- 代码上限/本地样本/生产部署分开记录；目前未生产部署，不承诺大于实测文件或所有浏览器均可编码。
