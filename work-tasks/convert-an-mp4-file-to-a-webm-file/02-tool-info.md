# 02 — 工具信息与覆盖决策

| 字段 | 内容 |
|---|---|
| slug | `convert-an-mp4-file-to-a-webm-file` |
| 优先级 | §11.1 下一单功能；前置 WebM/MOV→MP4 单/批已本地验收 |
| Title/H1 (en) | Convert an MP4 file to VP9 WebM |
| Description 方向 | Convert one H.264/AAC MP4 to a real VP9/Opus WebM in the browser; inspect source and output tracks, size and duration, then download the validated video. |
| Catalog `page.style` | `opts` |
| 技术 | MP4 预检 → VP9/Opus 目标能力 → Mediabunny WebMOutputFormat + OPFS/Buffer → 输出视频/音频/时长二次检查 |
| 验收 | coverage 0b→2→4→all、全量 build/verify、H.264/AAC、无音轨、损坏输入、目标编码器拒绝、长文件、OPFS 保留/清理、十语实际下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留独立 `convert-an-mp4-file-to-a-webm-file`：与 WebM→MP4 反向，目标 VP9/Opus、适用场景与编码限制不同 |
| 主检索词→title/H1 | `MP4 to WebM` → Convert an MP4 file to VP9 WebM |
| 次词→desc/FAQ/Use cases | `convert MP4 to WebM`、`MP4 to WebM for web` 进前段；`H.264 to VP9`、`AAC to Opus` 进规则和示例 |
| 用户搜法判断 | 有一个本地 MP4，要在网页或支持 WebM 的工具中使用真实 WebM，且想了解编码变化与体积 |
| 优化摘要 | 从泛称视频转换收紧为 MP4 输入、VP9/Opus 目标和可下载的真实 WebM；编码器条件与前后体积作为可验证 IG，避免保证变小 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| mp4 to webm converter | 主词 | H1、desc | 本页 |
| convert MP4 to WebM online | 同意图 | desc、How | 本页 |
| H.264 MP4 to VP9 WebM | 编码条件 | 规则、示例 | 本页 |
| MP4 AAC to WebM Opus | 音频条件 | How、FAQ | 本页 |
| MP4 to WebM for website | 使用场景 | 首段、Use cases | 本页 |
| WebM to MP4 | 反向，不吸 | related | 现有反向页 |
| compress MP4 | 体积诉求不同 | FAQ 边界 | 视频压缩候选 |

- [x] 同意图搜法已列全，方向词不拆近义 URL。
- [x] 页面 title/description/How/FAQ 按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到本意图的 Planner/Ads 长尾材料；按常规 0b 和相关 SERP 推进，不伪造量级。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：真实 MP4 视频轨重编码为 VP9，现有声音转 Opus，生成可检查、可下载的 WebM |
| 主词用户任务 | 选一个 MP4，为网页/工具生成真的 WebM，并明确编码、时长与体积变化 |
| 满足处 | 单件输入、目标编码探测、OPFS 大产物、前后轨道/尺寸/时长/体积报告、真实下载 |
| 超出/边界 | 不承诺所有 HEVC/HDR、无损、必然变小、任意多 GiB 或保留全部元数据；无音轨不虚构 Opus |
| 缺口与回写 | 默认流程为选文件→转换→下载，首段含主词和网页场景；FAQ 说明 VP9/Opus 与体积、设备编码能力 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 清单前检索覆盖与用户意图审查已完成。
- [x] 英语母版与页面完成；十语各 87 个键，coverage 0b/2/4/all 与 SEO lint 通过。
- [x] 本地浏览器真实下载通过：H.264/AAC→VP9/Opus、无音轨、坏 MP4、HEVC、无 VP9/Opus 编码器、>80 MiB/90 秒输入→约 406 MB OPFS WebM、停止重试、无 OPFS 上限与故障注入、十语移动端。OPFS guard 后全站 `build:site`、本页 `verify:tool`、WebM/MOV 单件及批量浏览器回归均退出 0。
