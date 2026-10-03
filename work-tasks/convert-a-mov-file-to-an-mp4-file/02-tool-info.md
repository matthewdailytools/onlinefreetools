# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`convert-a-mov-file-to-an-mp4-file`  
**路径**：`/tools/convert-a-mov-file-to-an-mp4-file`  
**主方向**：A  
**YMYL**：否

## IG 预审

- 主词：MOV to MP4 converter；convert iPhone MOV to MP4；QuickTime MOV to playable MP4。
- 用户任务：把本地 MOV 转成真实保留画面与声音的 H.264/AAC MP4，兼容上传、编辑和播放。
- 可验证 IG：源 codec/尺寸/时长；视频复制或重编码决策；音轨 AAC 转换；输出轨道与真实大小；HEVC 当前设备无法解码时拒绝，杜绝仅音频假成功。
- POC：Chrome 3 秒 H.264/AAC MOV 成功；H.264/PCM MOV 成功；HEVC/AAC `canDecodeVideo=false` 且默认 Conversion 仅输出音频。因此必须源轨预检和输出二次检查。
- Related：WebM→MP4、MKV→MP4、MOV 抽音；批量 MOV 待单件压力验收。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.1 第二项，WebM 单件已完成后的下一单件；批量 MOV 前置 |
| Title (en) | Convert a MOV File to an MP4 File |
| H1 | Convert a MOV video to a compatible H.264 MP4 |
| Description 方向 | Convert local MOV to playable H.264/AAC MP4; check iPhone/QuickTime source tracks, video copy or re-encode decision, real output size and download. |
| Catalog `page.style` | `opts` |
| 技术 | MOV 轨道/解码探测 → H.264 视频复制或可行时 HEVC→H.264 → AAC 音轨 → OPFS StreamTarget → 输出二次轨道检查 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | 改后缀、iPhone HEVC 不支持、H.264 是否无损复制、PCM→AAC、大小变化、无音轨、本地隐私 |
| 验收 | 0b→2→4→all、`build:site`、`verify:tool`、三组 POC、实际下载/无音轨/坏输入/大输入及大输出 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 MOV 格式对；不同于 WebM 强制视频转码，也不是改后缀页 |
| 主检索词 → title/H1 | `MOV to MP4` → Convert a MOV File to an MP4 File / Convert a MOV video to a compatible H.264 MP4 |
| 次词 → desc / FAQ / Use cases | `iPhone MOV to MP4` 进首段/场景；`QuickTime MOV converter` 进 How；`HEVC MOV to MP4` 进规则/FAQ |
| 用户搜法判断 | 搜索者想把手机或相机 MOV 交给只收 MP4 的应用；首屏必须给兼容目标、轨道检查和可下载结果，不承诺每个 HEVC 可用 |
| 优化摘要 | 把 MOV→MP4 主任务、iPhone/QuickTime 场景和 H.264/AAC 产物放在前段；提供逐轨决策和 HEVC 条件拒绝，避免格式名词堆砌 |
| [x] 已回写 Title / Description 与 slug | 已回写规格 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 | 近义不拆 URL |
|---|---|---|---|
| MOV to MP4 converter | absorb 主词 | H1、desc | 本页 |
| convert iPhone MOV to MP4 | absorb 场景 | desc、Use cases | 本页 |
| QuickTime MOV to MP4 | absorb 容器搜法 | How、FAQ | 本页 |
| HEVC MOV to MP4 | absorb 条件分支 | Rules、FAQ | 不另建空壳 HEVC 页 |
| MOV to H.264 MP4 | absorb 目标编码 | 首屏、结果 | 本页 |
| MOV to MP3 | 不吸，音频产物 | related | 已有 MOV 抽音 |
| batch MOV to MP4 | 不吸，多输入队列 | related，单件验收后单独测试 | §11.3 候选 |

- [x] 上表已列全本轮同意图相关搜索词
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，不用近义词拆页面

## Ads / Keyword Planner 长尾

- [x] 不适用（仓库未检出本 slug 的 Planner/Ads 分析）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：输入 MOV → 真 H.264/AAC MP4 → 视频预览/下载/轨道报告；HEVC 设备缺解码时明确失败 |
| 主词用户任务 | 把 iPhone/QuickTime MOV 送到需要 MP4 的播放器、编辑器或上传流程 |
| Planner 长尾 | 不适用 |
| 满足处 | H.264 视频复制，其他视频可解码时再编码；有音频时 AAC；结果轨道和大小实际复检 |
| 超出/边界 | 不承诺每种 HEVC、HDR/杜比视界、ProRes、透明度、所有方向元数据或原质无损 |
| 缺口与回写 | 用含视频和声音的 H.264/AAC MOV 样例；PCM 与 HEVC POC 决定错误及转码分支；防止 audio-only MP4 假成功 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已回写规格 |

## 交互规格

- 选择单个本地 MOV，检测 MIME/内部 QuickTime 容器、视频与音频轨道及解码能力。
- 源 H.264 视频优先复制；其他编码只有源可解且目标 AVC 可编码才转码；现有音轨强制 AAC。无声源保持仅视频。
- 视频预览、源/目标轨道、复制或重编码、时长与前后大小报告；逐步 HUD；取消/重试。
- 优先 OPFS 写出，设备代码上限与真实实测最大值分列；不承诺所有大手机视频都能处理。
