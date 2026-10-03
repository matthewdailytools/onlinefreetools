# 02 — 工具信息与覆盖决策

| 字段 | 内容 |
|---|---|
| slug | `trim-a-video-clip-and-export` |
| 优先级 | §11.1 视频抽帧后的单功能裁剪 |
| Title/H1 (en) | Trim a video clip and export an MP4 |
| Description 方向 | Trim one local video to a chosen start and end time. Preview the selected interval, export a playable H.264/AAC MP4 and check actual duration, tracks and bytes before downloading. |
| Catalog `page.style` | `opts` |
| 技术 | Mediabunny `Conversion.init({trim})` + H.264/AAC 目标检查 + OPFS 输出与再验轨；非零起点按官方约束重编码；无 OPFS 时超过 80 MiB 输入拒绝内存汇聚 |
| 验收 | coverage 0b→2→4→all、MP4/MOV/WebM 路径 POC、真实截取/下载、音画同步、无音轨、HEVC/坏文件、>80 MiB 输入短窗、OPFS/无 OPFS、停止重试、十语移动端 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留单件视频裁剪 slug；连续保留区间独立于视频压缩、换格式、GIF 和多片合并 |
| 主检索词→title/H1 | `trim video` → Trim a video clip and export an MP4 |
| 次词→desc/FAQ/Use cases | `cut MP4 clip`、`video trimmer start and end` 进首段/How；`remove video intro`、`trim video without losing audio` 进场景/FAQ |
| 用户搜法判断 | 有一段本地视频，希望留一个起止片段，获得能播放且声音同步的独立 MP4 |
| 优化摘要 | 从泛称编辑视频收紧为连续片段起止裁剪；用实际时长、音视频轨、输入/输出字节与重编码说明提供独立信息增益，不承诺任意位置无损秒切 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| trim video online | 主词 | H1、desc | 本页 |
| cut MP4 clip | 同意图格式实例 | 首段、FAQ | 本页 |
| video trimmer start end time | 参数意图 | 控件、How、规则 | 本页 |
| remove beginning/end of video | 同意图场景 | Use cases、FAQ | 本页 |
| trim video with audio | 结果完整性 | 首段、结果报告、FAQ | 本页 |
| lossless trim / cut without reencoding | 有条件；不能空口承诺 | FAQ 说明非零起点目前重编码，未来独立 POC | 本页边界 |
| compress video | 目标体积不同 | related，不吸 | §11.1 后续页 |
| merge videos | 多输入→一个成片 | related，不吸 | §11.2 候选 |
| batch trim videos | 多独立输出 | §11.3 候选 | 后续 batch |

- [x] 同意图搜法已列全；MP4 是常见输入/目标实例，不拆近义 URL。
- [x] 生成页面 title/description/How/FAQ 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到该意图的 Planner/Ads 长尾材料；不捏造搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：从一个本地视频保留指定连续区间，导出可播放、有声时音画同步的 MP4 |
| 主词用户任务 | 设开始/结束、删片头片尾或取中段，预览并下载长度正确的成片 |
| 满足处 | 轨道预检、时间范围、裁剪进度、输出轨道/时长/体积二次检查与真实下载 |
| 超出/边界 | 不承诺所有容器/编码、零损失、逐帧精确到所有时间戳、任何大文件、原 HDR/相机元数据 |
| 缺口与回写 | 首屏主操作指向裁剪 MP4；How/FAQ 明确非零起点重编码与设备 H.264/AAC 条件；无音轨不编造 AAC |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 裁剪路径 POC、英语母版和 MP4/MOV/WebM 真实输出完成。8 秒 H.264/AAC 样例取 2–5 秒，`ffprobe` 视频 3.000 秒、AAC 3.042 秒，均从 0 开始；MOV/WebM 也已在本地浏览器导出并复检 H.264 MP4。
- [x] 十语自然文案、覆盖 2/4、全站构建和实际下载完成；最终 all/单工具门禁见验收日志。真实浏览器测试覆盖首帧匹配源视频 2 秒而非 0 秒、H.264/AAC 音画起点、MOV/WebM、无音轨、坏文件、时间越界、>80 MiB 输入短窗 OPFS 下载、停止重试、无 OPFS 大输入拒绝及十语移动端逐语 MP4 下载。
