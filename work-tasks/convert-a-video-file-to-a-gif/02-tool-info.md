# 02 — 工具信息与覆盖决策

| 字段 | 内容 |
|---|---|
| slug | `convert-a-video-file-to-a-gif` |
| 优先级 | §11.1 MP4→WebM 后的短视频→GIF 单功能 |
| Title/H1 (en) | Convert a video clip to an animated GIF |
| Description 方向 | Make a GIF from a short video clip or MP4 in your browser. Pick start and end times, frame rate and width; preview the silent loop and download the actual GIF. |
| Catalog `page.style` | `opts` |
| 技术 | 视频 Blob URL → 按时戳 seek/Canvas → 同域 gifenc → 帧数/像素预算 → GIF 预览与实际下载 |
| 验收 | coverage 0b→2→4→all、全站 build/verify、移动视频多帧、损坏/不可解码、边界、停止/重试、大输入短窗口、十语实际下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留视频→GIF 独立页：从视频时间轴选片并抽帧，与图片序列→GIF 的输入及决策不同 |
| 主检索词→title/H1 | `video to gif` → Convert a video clip to an animated GIF |
| 次词→desc/FAQ/Use cases | `MP4 to GIF`、`GIF from video clip` 进首段；`trim video to GIF`、`GIF frame rate`、`GIF file size` 进 How、规则、FAQ |
| 用户搜法判断 | 有一段视频，要截取数秒制作可分享的无声循环 GIF，可调流畅度与体积 |
| 优化摘要 | 从笼统动画制作收紧为本地视频时间窗→真实 GIF；用实测取样时间/帧数/像素/输出字节报告提供独立信息增益，明确声音与体积边界 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| video to gif converter | 主词 | H1、desc | 本页 |
| convert video to animated GIF online | 同意图 | desc、How | 本页 |
| MP4 to GIF | 同意图格式实例 | 首段、FAQ | 本页 |
| make GIF from video clip | 同意图 | 首段、Use cases | 本页 |
| trim video to GIF | 同意图子步骤 | How、控件 | 本页 |
| GIF frame rate and size | 设置决策 | 规则、结果报告 | 本页 |
| images to GIF | 图片序列输入 | related，不吸 | 现有页 |
| extract frames from video | 多张静态图产物 | related，不吸 | §11.1 后续页 |

- [x] 同意图搜法已列全；MP4 词为本页示例，不另建无差别格式 URL。
- [x] 生成页面 title/description/How/FAQ 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到视频→GIF 的 Planner/Ads 长尾材料；不伪造搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：从一个视频选短窗口，生成并下载真动画 GIF |
| 主词用户任务 | 从视频或 MP4 制作可分享的无声 GIF，知道取了哪段、多少帧及大小 |
| 满足处 | 本地输入、起止、FPS/宽度、实际解帧、可见进度、预览/下载、输出报告 |
| 超出/边界 | 不承诺保留音频、任意长片、任意大输出或所有浏览器解码所有视频编码 |
| 缺口与回写 | 默认短窗口与合理尺寸；首段明确视频/MP4→GIF；How 对应选文件→转换→下载；错误告知具体调整办法 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 英语母版、页面与真实输出完成：24 帧动态样例、坏文件、1–2 秒剪取、时间越界、>80 MiB 视频抽 1 秒窗口和预算拒绝通过。
- [x] 十语自然文案、覆盖 2/4/all、301 工具全站构建、`verify:tool`、80 帧停止重试和十语移动端实际 GIF 下载通过。反向链接调整后的最终完整重建已退出 0。
