# 02 — 工具信息与覆盖决策

| 字段 | 内容 |
|---|---|
| slug | `extract-frames-from-a-video-as-images` |
| 优先级 | §11.1 视频转 GIF 后的单视频抽帧功能 |
| Title/H1 (en) | Extract frames from a video as JPG or PNG images |
| Description 方向 | Extract still frames from one local video or MP4 at a chosen interval or timestamp. Preview actual capture times, image dimensions and bytes, then download the JPG/PNG results. |
| Catalog `page.style` | `opts` |
| 技术 | 本地 Blob URL 视频 seek → Canvas → JPEG/PNG Blob → 逐张预览/下载；小结果可选 ZIP |
| 验收 | coverage 0b→2→4→all、真实样例首末帧/时间戳/下载、>80 MiB 视频短窗、预算拒绝、坏视频、停止重试、十语移动端 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留独立视频抽帧页；单张视频缩略图吸收入单时间点模式，GIF 动画及多视频批量保持异作业 |
| 主检索词→title/H1 | `extract frames from video` → Extract frames from a video as JPG or PNG images |
| 次词→desc/FAQ/Use cases | `video to images`、`save frames from MP4` 进首段；`video thumbnail at timestamp` 进单张模式/FAQ；`extract frames every second` 进间隔控件/How |
| 用户搜法判断 | 有视频，希望在指定时间点或固定间隔取得真正静态 JPG/PNG 图片，以挑封面或检查画面 |
| 优化摘要 | 从泛称视频截图收紧为可下载静帧；以实际时间戳、像素/格式/质量与字节报告作独立信息增益，并限制帧数与内存预算 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| extract frames from video | 主词 | H1、desc | 本页 |
| video to images / video to JPG | 同意图 | desc、How | 本页 |
| save frames from MP4 | 同意图格式实例 | 首段、FAQ | 本页 |
| extract frames every second | 间隔子任务 | 控件、How、规则 | 本页 |
| capture video frame at timestamp | 单帧模式 | 控件、Use cases | 本页 |
| video thumbnail at timestamp | 单帧封面模式 | FAQ、Use cases | 本页 |
| extract all original frames | 超出浏览器寻址承诺 | FAQ 说明不支持原始逐帧无损转存 | 不建近义页 |
| video to GIF | 动画产物 | related，不吸 | 现有 GIF 页 |
| batch extract frames from videos | 多视频作业 | §11.3 候选 | 独立批量待测 |

- [x] 同意图搜法已列全，单张封面吸收到本页模式。
- [x] 生成页面 title/description/How/FAQ 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到本意图的 Planner/Ads 长尾材料；不虚构搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：单视频按指定时间点或间隔导出真正 JPG/PNG 静帧 |
| 主词用户任务 | 从 MP4/其它可解码视频中保存静态图，知道每张取自何时、尺寸与文件大小 |
| 满足处 | 单视频输入、单时刻/间隔模式、帧预览、时间戳、格式/质量选择、实际下载 |
| 超出/边界 | 不承诺全部原始帧、逐帧零误差、所有容器编解码、无限帧数或任意大小 ZIP |
| 缺口与回写 | 首屏以间隔抽帧为主；单时刻作为折叠模式，How 指向选择→抽取→下载；FAQ 解释时间点误差和预算 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 英语母版、单时刻/间隔模式、真实 JPG/PNG 输出完成；自动样例三张不同 JPG、指定秒 PNG、逐张与 ZIP 下载通过。
- [x] 十语本地文案、覆盖 2/4/all、最终全站 302 工具构建、>80 MiB 输入短窗、30 张停止重试与十语移动端实际图片 ZIP 下载通过；本页与反向 GIF 页 `verify:tool` 均退出 0。
