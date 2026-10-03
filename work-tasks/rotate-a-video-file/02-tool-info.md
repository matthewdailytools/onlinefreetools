# 02 — 工具信息与覆盖决策

| 字段 | 内容 |
|---|---|
| slug | `rotate-a-video-file` |
| 优先级 | §11.1 单件视频旋转，压缩页之后 |
| Title/H1 (en) | Rotate a video file and fix its orientation |
| Description 方向 | Rotate one local MP4, MOV or WebM 90° right, 180° or 90° left. Preview the corrected picture, verify actual output pixels and audio, then download H.264 MP4. |
| Catalog `page.style` | `opts` |
| 技术 | Mediabunny `rotate` + `allowTransformationMetadata:false` 强制像素转向和 H.264/AAC 重编码；OPFS 大结果；输出二次验轨和宽高 |
| 验收 | coverage 0b→2→4→all，90/180/270 实际像素方向、元数据不存在、AAC/静音、MOV/WebM、坏文件、>80 MiB OPFS、无 OPFS、停止重试、十语移动端实际 MP4 下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留独立旋转 URL：角度与像素方向是独立产物，不由压缩页的尺寸选项实现；不另建 `rotate-mp4-90-degrees` 近义 URL |
| 主检索词→title/H1 | `rotate video` → Rotate a video file and fix its orientation |
| 次词→desc/FAQ/Use cases | `rotate MP4 90 degrees`、`fix sideways video` 进首段/How；`rotate video without losing quality` 在 FAQ 澄清重编码 |
| 用户搜法判断 | 修正横倒/竖倒的单个本地视频，下载后在播放器中方向仍正确 |
| 优化摘要 | 强调像素真正旋转、非仅元数据；结果核对角度、宽高、轨道、时长和体积，避免无损或任意格式承诺 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| rotate video online | 主任务 | H1/首段 | 本页 |
| rotate MP4 90 degrees | 格式与角度实例 | 首段/How | 本页 |
| fix sideways video | 手机横倒场景 | 首段/场景 | 本页 |
| turn video upside down | 180°模式 | 设置/FAQ | 本页 |
| rotate MOV / WebM | 可解码源格式实例 | 首段/FAQ | 本页；按本机解码能力 |
| rotate video without losing quality | 不可保证 | FAQ 解释像素重编码 | 本页边界 |
| batch rotate videos | 多个独立输出 | 暂缓，需队列/需求 POC | 不为近义词直接开页 |

- [x] 同意图搜法已列全，主任务不同于压缩/缩放。
- [x] 生成页面 title/description/How/FAQ 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到旋转视频的 Planner/Ads 长尾材料；不捏造搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：选择旋转方向并得到像素已转向、可下载的视频，不依赖播放器解析 rotation tag |
| 主词用户任务 | 选文件→预览→选顺时针/倒置/逆时针→旋转→预览并下载正确方向的 MP4 |
| 满足处 | 实际画面、宽高交换或保持、视频/音频轨道、时长、体积和存储路径报告 |
| 超出/边界 | 不称无损，不支持任意角度或镜像；源格式/编码取决于浏览器，OPFS 与 H.264 编码器限制需在页面说明 |
| 缺口与回写 | 需要真实方向比较而非仅 metadata/ffprobe 宽高；误选方向时可换角度重试 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 英语母版、三角度真实方向 POC 及输出下载完成；`node scripts/tool-modules/test-video-rotate-browser.mjs` 用四色角落像素和 `ffprobe` 宽高/rotation side data 验收。
- [x] 十语文案、覆盖 0b/2/4/all、305 工具 × 10 语种整站构建和浏览器验收完成：MOV/WebM、坏文件、>80 MiB OPFS、停止重试、无 OPFS 拒绝和十语移动端实际下载通过；记录在 `/tmp/rotate-full-browser2.log`。
