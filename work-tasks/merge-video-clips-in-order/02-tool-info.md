# 02 — Tool information and coverage decision

**状态**：`implemented`（本地验收，未部署）  
**slug**：`merge-video-clips-in-order`  
**路径**：`/tools/merge-video-clips-in-order`  
**方向**：A · 多段本地视频顺接为一个成片  
**YMYL**：否

| 字段 | 内容 |
|---|---|
| 主任务 | 将至少两段本地视频按可调整顺序拼接成一个连续 MP4 |
| Title/H1 (en) | Merge local video clips in the order you choose |
| Description | Arrange local clips, merge them into one H.264/AAC MP4 and check the combined duration before downloading; mixed sizes and audio rates are normalized in your browser. |
| 使用场景 | 手机片段/录屏按前后顺序拼成一个可发送视频；首屏即多文件选择、排序、合并 |
| page.style | opts |
| 技术 | Mediabunny 流式逐段解码/重编码，帧画布 fit、音频 48 kHz 立体声重采样、时间戳顺接，OPFS 写出与验轨 |
| IG | 明确排序和实际片段时长；异尺寸加黑边避免拉伸；统一采样率保同步；混合编码仍只出一条轨；原片/产物体积与时长；容量边界 |
| 边界 | 不逐片输出，不声称无损；不支持不可解码的源编码；最多 30 段/总代码上限 500 MiB，实际由设备资源决定 |
| Related | `trim-video-clip-to-mp4`、`convert-a-video-to-an-mp4-with-aac-audio`、`batch-convert-mkv-files-to-mp4` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 用 in-order 任务区分批量独立输出和只改容器；combine/join/merge 同意图合并本页 |
| 主检索词→title/H1 | merge video clips in order / combine videos into one → Merge local video clips in the order you choose |
| 次词→desc/FAQ/Use cases | arrange videos before merging、join MP4 and WebM、one combined MP4、combine video with sound、no upload → 首段/FAQ/用途 |
| 用户搜法判断 | 搜索者要一条连续片，可改变前后顺序并下载，不能交回多个文件或多条可选视频轨 |
| 优化摘要 | H1 写排序后的单片任务，首段承接 combine/join 近义意图；结果显示时长与轨道，FAQ 解释尺寸/声音重编码 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| merge video clips in order / combine videos into one | 主任务 | H1、首段、How | 本页 |
| join MP4 and WebM clips / merge different video formats | 来源差异 | description、FAQ | 本页 |
| arrange / reorder clips before merging | 操作意图 | 首屏/How/FAQ | 本页 |
| combine clips with audio / keep sound | 声音结果 | Rules、FAQ | 本页 |
| merge videos locally without uploading | 隐私条件 | 首段、FAQ | 本页 |
| batch convert videos separately / trim / add music | 异作业 | Related/FAQ 划界 | 不建近义页 |

- [x] 已列全当前同意图相关搜法，并指定页面落点。
- [x] 生成文案时按上表写入 H1、首段、FAQ 与用途。

## Ads / Keyword Planner 长尾

- [x] 未找到本顺序合并意图的独立 Ads Planner 长尾分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：多段排序后输出一条实际连续 MP4 视频轨和一条合并音轨（当来源有声音） |
| 主词搜索者任务 | 把片段按选定前后顺序接成一个可下载成片 |
| 已满足 | 多文件选择、上下排序、逐段声画处理、单个 MP4、时长与 codec 检查 |
| 超出/边界 | 不附带剪辑时间线、转场、配乐或逐片批量输出；不可解码来源提示失败 |
| 缺口与已做优化 | How 先确定播放顺序，再合并并检查接点和总时长；FAQ 解释混合大小/音频采样率重编码、不保证无损 |
| [x] 已回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 至少两个最多 30 个本地视频，列表上下排序/删除；主按钮 Merge clips，产物后 Download MP4。
- 进页自动载入两段本地样例并合并；进度 HUD 显示当前片段、百分比、耗时、停止/重试。
- BlobSource 有限缓存，>80 MiB 用 OPFS StreamTarget；总代码上限 500 MiB 不代表所有设备经实测。
- 坏来源、缺音视频解码器、无法编码 AVC/AAC、配额和取消都不开放下载；成品重新验轨及总时长。

## 页面模块清单

- [x] 首屏交互、How、Why、Rules、Example、Use cases、FAQ、Related、References
- [x] 十语覆盖、build、real-output browser tests

## 本地验收证据

- `npm run coverage:gate -- --slug=merge-video-clips-in-order --phase=0b|2|4` 各阶段通过；`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=merge-video-clips-in-order` 全部机械门禁通过。
- `node scripts/tool-modules/test-merge-video-clips-browser.mjs`：自动 WebM+MOV 合成单个 H.264/AAC MP4；红/蓝视频反序后实际首尾像素反转，44.1/48 kHz 来源音频统一输出 48 kHz 双声道；首段无声、坏文件、停止后 65 秒重试、>80 MiB 输入 OPFS 路径和十语手机端实际下载均通过。
- 500 MiB 为总代码上限，不是所有设备的实测上限；本地验收与生产发布保持分开。
