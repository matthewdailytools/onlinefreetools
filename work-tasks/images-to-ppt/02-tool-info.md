# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`images-to-ppt`  
**路径**：`/tools/images-to-ppt`  
**主方向**：A  
**catalog 分类**：`image`  
**YMYL**：否  
**最近改写**：2026-10-13（薄页逐页改写队列 #6）

## 改写原因（2026-10-13）

审计：139 词；FAQ「Uploaded? / Need PowerPoint?」为一二字答；无 How 步骤、无 Why choose；高级设置不可见；`stats_tpl` 用 `{n}` 而脚本替换 `{count}/{bytes}`（统计行恒错）。

## IG 预审

- 用户任务：多张本地照片 → 一图一页的 `.pptx`，下载后在 PowerPoint / Impress 打开
- [x] 竞品常见：上传转 PPT、一图一页、少讲本地边界与 fit/比例
- [x] 缺口：FAQ 空壳；无 16:9/4:3；无 contain/cover；无进度 HUD；统计模板 bug
- [x] 增益：① 布局 16:9/4:3 ② contain/cover + 背景色 ③ 金标进度 HUD ④ How 与按钮同词 ⑤ FAQ 实质答 ⑥ 修正 stats
- [x] Related：`images-to-pdf`、`images-to-word`、`image-merge`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Images to PowerPoint — Photos to PPTX Slides |
| Description (en) | Convert multiple photos into a PowerPoint (.pptx) deck in your browser—one slide per image, 16:9 or 4:3, contain or cover. Steps: Choose images, Convert to PowerPoint, Download. Example: three photos → three slides. Files never leave this tab. |
| related | images-to-pdf, images-to-word, image-merge |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13 |
| slug 结论 | **保留** `images-to-ppt` |
| 主检索词 → title/H1 | Images to PowerPoint — Photos to PPTX Slides |
| 次要关键词 | convert photos to pptx → How/desc；jpg to powerpoint → FAQ/accept；16:9 slides → Advanced；images to pdf → FAQ q4 划界 |
| 优化摘要 | H1 保持转换对；desc 压到摘要窗并写清步骤按钮词；新增布局/适配 IG |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| images to powerpoint / convert images to pptx | 吸 | title；How |
| photos to powerpoint / jpg png to ppt | 吸 | desc；drop accept |
| one image per slide | 吸 | Rules；How |
| 16:9 / 4:3 powerpoint from photos | 吸 | Advanced layout |
| fit contain vs cover slides | 吸 | Advanced fit；FAQ q5 |
| images to pdf | **不吸**（邻工具） | FAQ q4 → images-to-pdf |
| add titles / animations online | **不吸** | FAQ q3（导出后编辑） |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主检索词任务 | 改写前能转但文案薄、设置不可见 → **部分满足**；布局/适配/HUD/FAQ → **满足** |
| 有意不满足 | 在线加标题/动画、云盘上传、多文件合并为单图幻灯片 |
| 总判 | 满足（已回写 H1、Advanced、FAQ、desc、stats bug） |

## 交互规格

- 主输入：dropzone + multiple file（jpeg/png/webp/gif）
- 主按钮：Convert to PowerPoint → Download（无产物 disabled）
- Advanced（默认收起）：layout 16:9/4:3；fit contain/cover；bg color
- 进度：bcw-hud（encode → build → pack）
- 样例：三色块 960×540 → 三页 PPTX；进页 loadSample
- stats：`{n} slides → PPTX ready ({bytes})`

## 页面模块清单

- [x] H1 + 交互 + How×4/Why×5/Rules×5/Example/Use cases×4/FAQ×7/Related/References
- [x] `03-locale-briefs.md` 已填
