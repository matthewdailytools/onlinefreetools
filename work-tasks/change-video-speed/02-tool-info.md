# 02 — 工具信息与覆盖决策

| 字段 | 内容 |
|---|---|
| slug | `change-video-speed` |
| 优先级 | §11.1 单件视频变速，旋转页之后 |
| Title/H1 (en) | Change video speed and export a timed MP4 |
| Description 方向 | Speed up or slow down one local MP4, MOV or WebM. Export actual H.264/AAC MP4 at 0.5–2× with measured duration; choose pitch-following audio, approximate WSOLA pitch preservation up to 60 seconds, or mute. |
| Catalog `page.style` | `opts` |
| 技术 | Mediabunny 视频逐帧时间戳/时长缩放 + 有声 PCM 每块重采样或 60 秒以内 WSOLA 后 AAC，静音模式丢音轨，OPFS 输出，输出二次探轨 |
| 验收 | coverage 0b→2→4→all，0.5/1.5/2×时长与随速/保调音频频率、AAC 起点、60 秒上限、静音、MOV/WebM、坏文件、>80 MiB OPFS、无 OPFS、停止重试、十语移动端下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留独立视频变速 URL，处理时间轴和音轨；纯音频保调页、裁剪页无法完成成片变速 |
| 主检索词→title/H1 | `change video speed` → Change video speed and export a timed MP4 |
| 次词→desc/FAQ/Use cases | `speed up MP4 with audio`、`slow down video` 放首段；`keep audio pitch` 在 FAQ 明示 60 秒以内近似 WSOLA 模式与处理痕迹 |
| 用户搜法判断 | 把本地视频变快或变慢，下载后时长真的改变，画面和声音起点一致 |
| 优化摘要 | 与只改播放器速度的网页区分：报告实测视频/音频轨时长和音调变化，选择随速变调、短片近似保调或静音；不承诺绝对保调和样本级同步 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| change video speed online | 主任务 | H1/首段 | 本页 |
| speed up MP4 with audio | 加速且音轨同步 | 首段/How | 本页 |
| slow down video | 减速 | 首段/场景 | 本页 |
| 0.5x slow motion / 2x fast video | 具体倍率 | 控件/示例 | 本页 |
| keep audio pitch | 60 秒以内近似 WSOLA 模式 | 控件/FAQ 明示上限和可能处理痕迹 | 本页短片模式；长片用变调或静音 |
| batch change video speed | 多独立成片 | 待需求和队列 POC | 不为近义词开空页 |

- [x] 同意图搜法已列全，独立任务不是视频裁剪或纯音频变速。
- [x] 生成页面 title/description/How/FAQ 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到本意图的 Planner/Ads 长尾材料；不捏造搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：选择速度并导出实测时长改变的 MP4，有声模式保持音画时间轴接近；可选随速变调或短片近似保调 |
| 主词用户任务 | 选视频→选倍率和声音模式→预览原片→变速导出→核对时长/音轨→下载 |
| 满足处 | 实测速度、预估/实际时长、视频/音频时长差、编码/音轨/体积、随速/保调/静音选择和存储路径 |
| 超出/边界 | WSOLA 保调限 60 秒、可能有痕迹且非绝对精准；长/大视频用随速变调或静音。AAC 尾部填充带来约 0.1 秒差；浏览器编解码和 OPFS 限制明确展示 |
| 缺口与回写 | 需要真实下载后的 `ffprobe` 与音频频率测试，而非只看播放器速度；坏输入、停止、重试和十语输出不可省 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 英语母版、真实音画变速/移调与保调 POC、输出下载完成。
- [x] 十语文案、覆盖 2/4/all、全站构建和浏览器验收完成。
