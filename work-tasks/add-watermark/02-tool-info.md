# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`add-watermark`  
**路径**：`/tools/add-watermark`  
**主方向**：A  
**catalog 分类**：`image`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #20，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄（How 只有一句、无 Why choose、FAQ 5 条均为两三个词的短问短答），九语多为未本地化的旧稿。功能缺口：

- 字号是固定像素（默认 48 px），在 6000 px 相机原图上几乎看不见，在小图上又过大；
- 无平铺（防裁切）模式——「watermark that can't be removed / tiled watermark」是同意图高频需求；
- 无阴影 / 描边，白字落在亮天空上看不清；
- 不能多行（名字 + 网址）、无 © 快捷输入；X / Y 比例输入框难懂；
- 导出文件名固定为 watermarked.xxx；不处理 EXIF 方向；无明显进度。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：在发到网上 / 发给客户 / 交给机构之前，给一张照片加上自己的名字、© 或「仅供××使用」字样，要看得清、不易被裁掉
- [x] 竞品（Watermarkly、iLoveIMG Watermark、Visual Watermark 在线版）：多需上传；免费版常加自家标记或限制张数；字号多为固定像素；平铺常为付费功能
- [x] 缺口：大小随照片宽度；平铺；自动对比色阴影 / 描边；© + 年份；点击预览定位；证件照「仅供××使用」场景；EXIF / GPS 不随导出文件带出的说明
- [x] 增益：① 大小 = 最长一行占图宽百分比（1.2 倍行高、块高 ≤ 90% 图高）② 单个（九宫格 + 边距 % 短边 + 点击预览）/ 平铺（绕中心旋转、交错行、间距 %）③ 阴影 / 描边，对比色按亮度 0.299R+0.587G+0.114B ≥ 140 自动选 ④ 多行、插入 © 年份 ⑤ 高级：字体、粗体、边距、平铺间距、格式（同原图 / JPEG / PNG / WebP）、质量、缩小到 2048 / 1600 / 1080 ⑥ 进度 HUD + 统计 ⑦ FAQ：免费加水印、放哪里不易去除、版权水印怎么写（Circular 3 + 伯尔尼公约）、为何水印在大图上很小、Logo、批量、上传与 GPS ⑧ 权威引用 ×2
- [x] 权威：U.S. Copyright Office — Circular 3: Copyright Notice；MDN — CanvasRenderingContext2D.fillText()
- [x] Related：`image-overlay`（Logo）、`batch-watermark-product-photos`（批量）、`image-exif`（查看 / 清除 EXIF）、`pdf-watermark`（PDF）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | Canvas 2D fillText / strokeText + shadow；`createImageBitmap(imageOrientation:'from-image')`；`bcwHudCss` 进度 HUD；`page.style: opts` |
| Title (en) | Add Watermark to Photo — Put Your Name or © on a Picture, in One Corner or Tiled |
| Description (en) | Add a text watermark to a photo in your browser. Steps: choose an image, type your name or © notice, pick a corner or tile it across the picture, set size and opacity, click Add watermark and download. Example: “© 2026 Alex Rivera” in the bottom-right corner of a 960 × 640 photo. |
| related | image-overlay, batch-watermark-product-photos, image-exif, pdf-watermark |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `add-watermark`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Add Watermark to Photo — Put Your Name or © on a Picture, in One Corner or Tiled**；他语按 03 当地搜法（照片加水印、写真に透かしを入れる、poner marca de agua a una foto 等） |
| 次要关键词 → desc/FAQ | watermark photo free → FAQ q1；copyright watermark / © symbol → 插入 © 按钮 + FAQ q3；tiled watermark / watermark can't be removed → 平铺版式 + FAQ q2；watermark too small → 相对大小 + FAQ q4；logo watermark → FAQ q5（链 image-overlay）；batch watermark → FAQ q6（链批量工具）；watermark ID copy → Use case 3 |
| 用户搜索习惯判断 | 任务向（给照片加水印）；副标题写「放什么（名字 / ©）+ 放哪（角落 / 平铺）」，不把透明度 / 角度 / 字体等控件串进 H1 |
| 优化摘要 | 保留 slug；H1 由「Add Text Watermark to Photo — Local Browser Tool」改为任务句 + 两种版式；desc 写 steps + example；FAQ 由 5 条短句扩为 7 条真实问题 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| add watermark to photo / watermark image online | 吸（主词） | title / H1；How |
| add text to photo as watermark / text watermark | 吸 | 文字输入；desc |
| copyright watermark / how to write © on a photo | 吸 | 插入 © 年份；FAQ q3；References A |
| tiled / repeated / diagonal watermark | 吸 | 平铺版式；Why choose 2；Example |
| watermark that can't be removed | 吸（如实说明） | FAQ q2（无法绝对防去除） |
| watermark ID card copy / "for verification only" | 吸 | Use case 3 |
| watermark too small on high resolution photo | 吸 | 相对大小；FAQ q4；Why choose 1 |
| watermark photo free no sign-up | 吸 | FAQ q1 |
| remove GPS when sharing photo | 部分（导出不带 EXIF） | FAQ q7；Related image-exif |
| logo watermark | **不吸**（image-overlay） | FAQ q5 |
| batch watermark photos | **不吸**（批量工具） | FAQ q6 |
| watermark pdf | **不吸**（pdf-watermark） | Related |
| remove watermark from photo | **不做** | — |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 本工具无独立 Planner 文件；主词与长尾按上表（2026-10-14 同意图检索整理）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 单张图片文字水印，仍成立 |
| 主词搜索者任务 | 「给照片加上看得清的名字 / ©，发出去不被盗用」——改写前固定像素字号、无平铺、无阴影 → **部分满足**；改写后相对大小、平铺、对比阴影 / 描边、© 快捷、点击定位 → **满足** |
| 超出 | 缩小尺寸与格式放在折叠的高级设置，不抢首屏 |
| 有意不满足 | Logo 图片水印、批量、PDF、去水印：FAQ / Related 划界 |
| 总判 | 满足（已回写 How、控件、FAQ、desc） |

## 交互规格

- 输入：单张图片（JPEG / PNG / WebP / GIF / BMP / AVIF）；按 EXIF 方向摆正；HEIC 等解码失败给出可读提示
- 文字：多行（最多 200 字符）；「插入 © 和年份」在开头加 `© 当前年份`（已有 © 不重复）
- 版式：单个（九宫格，默认右下；边距 0–15%，默认 3%；或点击预览以点击处为中心并限制在图内）/ 平铺（切换时若角度为 0 改为 −30°、大小 > 30% 改为 25%；间距 20–200%，默认 60%）
- 外观：大小 5–100%（默认 35%）、透明度 5–100%（默认 70%）、角度 −90°–90°（默认 0）、颜色（默认白）；高级：效果（阴影默认 / 描边 / 无）、字体（无衬线 / 衬线 / 等宽）、粗体（默认开）
- 导出：格式（同原图默认；非 JPEG / PNG / WebP 原图存 PNG）、质量 0.50–1.00（默认 0.92，PNG 禁用）、缩小长边 2048 / 1600 / 1080（不放大）；JPEG 透明处填白；文件名 = 原名 + `-watermarked`
- 预览：任何设置变化实时重绘，并作废已导出的结果（需重新点 Add watermark）
- 报错：未选图、未填文字、解码失败、导出失败；软警告：> 25 MB、边长 > 8192 px、GIF 只保留首帧
- 样例：960 × 640 湖景 JPEG + 「© 2026 Alex Rivera」（各语用当地姓名），右下、35%、70%、阴影 → 文字框宽 336 px、距右 / 下边 19 px；进页自动运行
- Clear：清空图片与文字、设置恢复默认，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×4 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
