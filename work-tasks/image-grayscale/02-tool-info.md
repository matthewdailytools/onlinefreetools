# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-grayscale`  
**路径**：`/tools/image-grayscale`  
**主方向**：A  
**catalog 分类**：`image`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #15，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文约 136 词；FAQ 为「Uploaded?」「Which formula?」「Can I undo?」式单词句；Use case「Accessibility contrast drafts.」；无 How 步骤、无 Why choose；参数（格式 / 质量 / JPEG 底色）平铺在主操作区之上，无进度 HUD（不合 `converter-input-ui` 金标）。功能上只有固定 Rec.601 一种算法，无法回应「黑白照片发灰 / 发平」「红色滤镜黑白」「部分去色」等常见追问。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把彩色照片转成黑白（灰度）并下载；常追问「为什么转完发平」「哪种算法」「能否保留一点颜色」「文件是不是真灰度」
- [x] 竞品（pinetools / imgonline / lunapic / 各语种「图片转黑白」站）：多为一键 desaturate；少数有 average / luminosity 选项或强度；几乎不解释为何同一张图不同算法明暗不同，不给可验证的色值例子
- [x] 缺口：多算法对照；单通道（滤镜效果）；强度（部分去色）；原图对照；金标进度；格式收进高级设置
- [x] 增益：① 七种算法（Rec.601 / Rec.709 / 平均 / 明度 / R / G / B）② 样例色值可验证（红 76 vs 85；明度法四色同为 128）③ 单通道 = 黑白滤镜（红滤镜压暗蓝天）④ 强度滑块 ⑤ 与 CSS grayscale()（Rec.709 权重）及手机滤镜的区别 ⑥ 「真灰度 / 文件大小」诚实说明（浏览器只能存 RGB 文件）⑦ 权威引用
- [x] 权威：Wikipedia — Grayscale；W3C Filter Effects — grayscale() 矩阵
- [x] Related：`color-from-image`、`image-compress`、`flip-image`、`image-crop`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Convert Image to Grayscale — Make a Photo Black and White, with a Choice of Method |
| Description (en) | Convert a colour photo to grayscale (black and white) in your browser. Steps: choose an image, pick a method — luminance, average, lightness or a single colour channel — set the strength, click Convert and download JPEG, WebP or PNG. |
| related | color-from-image, image-compress, flip-image, image-crop |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `image-grayscale`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Convert Image to Grayscale — Make a Photo Black and White, with a Choice of Method**；zh：**图片转黑白 — 把彩色照片转换成灰度图，可选灰度算法** |
| 次要关键词 → desc/FAQ | black and white photo converter / make picture black and white → title 副句；desaturate image → 强度滑块 + FAQ q4；grayscale formula / luminance → rules 1–3 + FAQ q1；red filter black and white → 单通道 + Why choose 2；css grayscale → FAQ q6 |
| 用户搜索习惯判断 | 动作向（convert / make black and white）；算法名不进 H1，只以「a choice of method」概括 |
| 优化摘要 | 保留 slug；H1 由「Black & White Online」改为动作 + 结果 + 可选算法；desc 写清步骤与算法类型 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| convert image to grayscale | 吸（主词） | title / H1 |
| black and white photo converter / make photo black and white | 吸 | title 副句；How |
| desaturate image / reduce saturation | 吸 | 强度滑块；rules 4；FAQ q4 |
| grayscale formula / luminance vs average | 吸 | 算法下拉；rules 1–3；FAQ q1–q2；Example 色值 |
| red filter black and white / channel mixer | 吸（单通道） | 算法下拉；Why choose 2；Use case 1 |
| css grayscale filter | 吸（划界） | FAQ q6；References |
| colour blindness check (grayscale test) | 吸（场景） | Use case 3 |
| selective color (keep one colour) | **不吸**（需蒙版） | FAQ q4 说明 |
| sepia / vintage filter | **不吸**（另一效果） | — |
| image compress | **不吸** | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 图片转灰度，仍成立 |
| 主检索词任务 | 「把照片变黑白并下载」——改写前可用但只有一种算法、无进度、说明薄 → **部分满足**；改写后：多算法 + 强度 + 原图对照 + 金标 HUD + 下载 → **满足** |
| 超出 | 无第二工具抢首屏；格式 / 质量收进高级设置 |
| 有意不满足 | 保留单一颜色、棕褐色、对比度曲线：FAQ 说明，不改 H1 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：单张图片（点击或拖放；JPEG / PNG / WebP / GIF 首帧）
- 主选项（主按钮上方一行）：灰度算法下拉（默认 Rec.601）；强度 0–100%（步长 5，默认 100）；「显示原图」勾选（只影响预览）
- 主按钮：Convert to grayscale → Download（文件名 `原名-grayscale.ext`）
- 高级设置（折叠）：输出格式（默认 WebP）/ 质量（JPEG、WebP）/ JPEG 底色
- 进度：金标 `.bcw-hud`（Decode → Convert pixels → Encode，百分比 + 已用时）
- 预览：随算法 / 强度实时重绘（≤ 480 px）；改设置后须重新 Convert 才能下载新结果
- 警告：> 25 MB、边长 > 8192 px、动图首帧
- 样例：红 / 绿 / 蓝 / 黄四色条 + 彩虹渐变；进页自动用 Rec.601 转换（76 / 150 / 29 / 226）
- Clear 只清空并恢复默认设置，不重载样例

## 页面模块清单

- [x] H1 + 交互 + 进页样例 + 摘要
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
