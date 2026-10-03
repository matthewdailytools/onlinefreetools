# 02 — Tool information and coverage decision

**状态**：`implemented`（本地验收，未部署）  
**slug**：`convert-a-video-to-an-mp4-with-aac-audio`  
**路径**：`/tools/convert-a-video-to-an-mp4-with-aac-audio`  
**方向**：综合单文件；将可解码的本地视频做兼容 MP4  
**YMYL**：否

| 字段 | 内容 |
|---|---|
| 主任务 | 从不同容器的一个视频输出真正 H.264/AAC MP4，检查来源和产物轨道 |
| Title/H1 (en) | Convert a local video to compatible H.264/AAC MP4 |
| Description | Choose a local MOV, WebM, MKV or MP4; inspect its tracks, create a compatible MP4 with H.264 video and AAC audio, verify output and download. Actual codecs and browser support decide feasibility. |
| `page.style` | `opts` |
| 技术 | Mediabunny BlobSource + existing conversion loader, OPFS preferred, bounded input reads and inspected output; H.264 source copy when valid, other decodable video re-encoded |
| IG | 源容器/真实编码预检，H.264 copy vs 重编码明确说明，AAC 音轨/无音轨区分，成品二次验轨和时长容差，前后体积报告，失败原因/设备能力透明 |
| 边界 | HEVC 等无解码器时拒绝；无法编码 AVC/AAC 时拒绝；不承诺所有设备兼容，音频轨选择遵循现有引擎主轨 |
| Related | format-specific WebM/MOV/MKV pages and track inspector |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留兼容目标任务句而非泛 video-converter 品类词；已有格式对页继续服务明确 WebM/MOV/MKV 查询，本页服务来源不确定的混合容器输入 |
| 主检索词→title/H1 | video to MP4 with AAC / H.264 AAC MP4 → Convert a local video to compatible H.264/AAC MP4 |
| 次词→desc/FAQ/Use cases | convert video to MP4 for playback、make MP4 compatible、H264 AAC converter、video has unsupported audio、MOV/WebM/MKV to MP4 进入首段与 FAQ |
| 用户搜法判断 | 用户要一个常见播放器可用的 MP4，不关心原文件格式名；实际目标是明确 H.264 视频和 AAC 音频 |
| 优化摘要 | 不复制格式对近义页标题；首屏让混合容器输入，真实轨道预检+成品验轨，解释 packet copy、转码和当前浏览器能力 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已回写 |

## 同意图相关搜索词

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| video to MP4 with AAC / H.264 AAC MP4 converter | absorb 主词 | H1/lead/FAQ | 本页 |
| make video MP4 compatible / convert video for playback | absorb 次词 | lead/usecase/FAQ | 本页 |
| convert MOV WebM MKV to H264 AAC MP4 | absorb 次词 | lead/How/FAQ | 本页；明确格式对搜索优先专页 |
| video codec unsupported / audio not playing in MP4 | absorb 诊断搜法 | Rules/FAQ: 容器和编码分开 | 本页 |
| video to MP4 without uploading | absorb 次词 | lead/FAQ | 本页 |
| MP4 to WebM / arbitrary lossless video conversion | 异任务/无法承诺 | related/边界 | 不新建近义页 |

- [x] 上表已列全本意图相关搜索，未把格式对扩成重复 URL。
- [x] 生成文案时按上表写入首段、FAQ 和用途。

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未找到该混合输入意图的独立 Planner 分析；格式对资料仍按专页归属。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：一个混合容器本地文件到经验轨的 H.264/AAC MP4，而不是换扩展名 |
| 主词搜索者任务 | 把不确定容器/编码的视频制成更广泛可播放的 MP4 |
| Ads/Planner | 不适用 |
| 满足之处 | 预检、可用路径转换、输出验轨、时长/体积/轨道信息和真实下载 |
| 超出/边界 | 不支持的源编码明确失败；无音轨保留无音轨，不凭空造 AAC；不承诺每台设备播放；不承诺无损 |
| 缺口与已做优化 | 默认输出 H.264/AAC；How 按选择、Convert、验轨、下载；Rules 和 FAQ 说明 copy/转码及无音轨；首屏不加第二模式 |
| [x] 已按审查回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 输入：一个 MOV/WebM/MKV/MP4 本地视频，浏览器 MIME/实际容器预检；最多按 OPFS 能力动态限制，不把硬上限写成已实测。
- 输出：MP4 容器 H.264 视频、源有音轨时 AAC 音频；有进度 HUD，真实预览，下载按钮产物后才启用。
- 核心：可复制已兼容 H.264 视频包；其他可解码源转 AVC；AAC 编码；成品重新检查 codec、容器、音轨和时长。
- 失败：坏文件/不支持容器/源无法解码/目标无法编码/配额或取消均显示卡片；旧输出清理。
- 进页样例：本地 WebM 样例自动转换成 H.264/AAC MP4；Example 对应这个轨道变化。
- 进度 HUD：沿用金标卡片，读取/解码/编码/验轨阶段、大百分比、耗时、文件名、停止按钮；成功保留 100% 卡片。
- `opts` Page；母版后 lint wiring；十语独立完成后 build:site/verify/browser 实测。

## 页面模块清单

- [x] 首屏交互、How、Why、Rules、Example、Use cases、FAQ、Related、References
- [x] 覆盖和十语门禁、本地真实产物验轨、压力和失败回归
