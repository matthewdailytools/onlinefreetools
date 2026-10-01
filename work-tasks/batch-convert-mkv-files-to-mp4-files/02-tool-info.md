# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-mkv-files-to-mp4-files`  
**路径**：`/tools/batch-convert-mkv-files-to-mp4-files`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-10-01：batch convert mkv to mp4 / convert multiple mkv to mp4。SERP 多为云上传批量站。站内已有单文件 D2；缺口是 **队列 + ZIP + 行级失败**。相对单文件页的 ≥3 增益：

1. **作业**：多本地 MKV → 一个 ZIP（每文件一个 `.mp4`）。  
2. **失败模型**：单行 fail 不整批作废；partial ZIP。  
3. **进度**：金标 HUD + 逐行 status；Stop 后仍可打包已成功项。

权威：https://mediabunny.dev/ · MDN Media containers

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / topic | sound-editor |
| Catalog | `localProcessing: true`；`page.style: opts`；`scenario: media`；`subject: video` |
| Title (en) | Batch convert MKV files to MP4 files |
| Description | Convert multiple local MKV files to MP4 in the browser with AAC stereo, then download a ZIP. Steps: add MKVs → Convert all → Download ZIP. Example: Load sample queues two short clips. Per-file about 500 MiB / 2 hours; up to about 20 files. Row failures skip; partial ZIP still downloads. Local only—not YouTube. Single files: Convert an MKV file to an MP4 file. |
| 技术 | 复用 `/vendor/mediabunny/mkv-to-mp4-loader.js` + JSZip；金标 HUD；懒加载 |
| related | `convert-an-mkv-file-to-an-mp4-file`；`batch-extract-audio-from-mkv-files`；`extract-audio-from-an-mp4-file`；`extract-audio-from-an-mkv-file` |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 单文件页；行失败；ZIP；上限；非 YouTube；AAC vs remux |
| IG | 2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 |
|---|---|---|
| 一文件夹多个录屏 MKV | 多选 → Convert all → Download ZIP | ZIP 内各 AAC MP4 |
| 个别坏轨 | 行 fail，其余进 ZIP | partial 文案 |
| 验收 | Load sample（两文件） | 两行 ok + ZIP |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-01 |
| slug 结论 | 保留 `batch-convert-mkv-files-to-mp4-files`（批量任务句；非 doorway 复制单文件 slug） |
| 主检索词 → title/H1 | batch convert mkv to mp4 / convert multiple mkv → Batch convert MKV files to MP4 files |
| 次要关键词 → desc / FAQ / Use cases | mkv to mp4 zip → desc/How；aac stereo batch → Rules；部分失败 → FAQ；中文 批量 mkv 转 mp4 → zh H1 |
| 用户搜索习惯判断 | 搜 batch/multiple 者要多文件+ZIP；默认 multi dropzone + Convert all；高级声道/质量收起 |
| 优化摘要 | 任务句 H1；meta 前段含 batch+ZIP+AAC+local；How=按钮词；related 单文件页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch convert mkv to mp4 / convert multiple mkv to mp4 | absorb 主词 | H1 / How | 本页 |
| mkv to mp4 zip / bulk mkv to mp4 | absorb 次词 | desc / FAQ | 本页 |
| convert mkv to mp4 aac (batch) | absorb 次词 | Rules / FAQ | 本页 |
| remux batch mkv | absorb 澄清 | FAQ：仍 AAC 转码 | 本页 |
| 批量 mkv 转 mp4 / 多个 mkv 转 mp4 | absorb 中文 | zh H1 | 本页 |
| convert one mkv to mp4 | 有意分场景 | FAQ + related | convert-an-mkv-file-to-an-mp4-file |
| batch extract audio from mkv | 有意分场景 | FAQ + related | batch-extract-audio-from-mkv-files |
| youtube to mp4 batch | 有意不满足 | FAQ 拒绝 | 不冒充 |
| batch webm to mp4 | 有意分场景 | FAQ 一句仅 MKV | 未来 D8 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无专属 Planner 分析文件）

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-01 |
| 总判 | 满足 |
| 主词搜索者任务 | 多个本地 MKV 转成 AAC MP4 并一次下载 ZIP |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | multi dropzone → Convert all → 行状态 → Download ZIP；行失败 skip；partial ZIP |
| 超出 / 应划边界 | 不做 URL/YouTube、不做抽音、不做云盘；高级设置不进主按钮行；单文件导流到 D2 |
| 缺口与已做优化 | How 用 Convert all / Download ZIP；FAQ 写清与单文件页、批量抽音分工；每文件 500 MiB、队列约 20 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格

- 主输入：`multiple` dropzone，`accept=.mkv,video/x-matroska`
- 按钮：Convert all → Download ZIP（无 ZIP 禁用）→ Stop / Load sample / Clear
- 高级：channels（默认 stereo）、AAC quality（默认 high）折叠
- HUD：load / read / decode / encode / pack；逐行 pending/running/ok/fail/stopped
- 样例：fetch 同站 sample 两次不同文件名（或两条短 MKV）
- 上限：每文件 ~500 MiB；队列 ~20；失败 skip

## 页面模块清单

- [x] catalog opts + icon + Page + sample path
- [x] How / Why / Rules / Use cases / FAQ≥4
- [x] loadSample 产出可见结果
- [ ] i18n 十语（实现阶段）

## Checklist（交付前）

- [ ] coverage 0b/2/4 + verify:tool + build:site
- [ ] 本地 Load sample → Download ZIP
