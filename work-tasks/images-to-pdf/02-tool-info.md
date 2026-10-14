# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`images-to-pdf`  
**路径**：`/tools/images-to-pdf`  
**主方向**：A  
**catalog 分类**：`image`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #24，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文约 158 词；H1 只有「Turn JPG into PDF」；FAQ 为「Uploaded?」「Page size?」「Need Acrobat?」式单词问答；Use case「Archive scans.」一句话；无 How 步骤、无 Why choose。功能上只有 A4 + 纵 / 横 + contain / cover，且**每张图都在 2× A4 画布上重新栅格化**（JPEG 被二次压缩、大图被缩小），无法回应本意图最常见的追问：「JPG 转 PDF 会不会降画质」「横竖混排」「手机照片横过来了」「怎么排序」「PDF 太大」「HEIC」。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把多张照片 / 扫描页 / 截图合成一个 PDF（每张一页）并下载；常追问画质、顺序、方向、文件大小
- [x] 竞品（iLovePDF / Smallpdf / Adobe「JPG to PDF」、各语种「图片转 PDF」站）：上传后转换；有 A4 / Letter / 适合图片、边距、方向；多数会重压缩且不说明；很少处理 EXIF 方向说明、自然排序、单张旋转同时出现在免上传工具里
- [x] 缺口：JPEG / PNG 原样嵌入（不降质）；EXIF 方向自动摆正；自动方向（横竖混排）；与图片同尺寸页面；边距；单张旋转；自然排序 / 倒序；三档质量且「不会变大」；统计行
- [x] 增益：① 原样嵌入 + 何时必须重编码（WebP / GIF / BMP / CMYK / 带方向标记）② EXIF 方向 + ↻ 旋转 ③ 自动方向 ④ A4 / Letter / 与图片同尺寸（96 ppi，1200 × 800 → 317 × 212 mm）⑤ 边距 0 / 6 / 12 / 20 mm ⑥ 自然排序（IMG_2 < IMG_10）⑦ 质量档 2480 px / 1600 px 与 dpi 换算（≈200 / ≈140 dpi on A4）⑧ HEIC 说明 ⑨ 权威引用
- [x] 权威：ISO 216（A 系纸张）；pdf-lib PDFDocument.embedJpg()
- [x] Related：`combine-files-into-one-pdf`、`images-to-word`、`image-compress`、`pdf-page-to-image-sizes`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | JPG to PDF Converter — Combine Multiple Images into One PDF Without Losing Quality |
| Description (en) | Convert JPG, PNG, WebP or screenshot images to a single PDF in your browser, one image per page. Put them in order, rotate any that are sideways, and choose A4, US Letter or pages the same size as each image. Example: three photos become a three-page PDF, with JPEGs embedded unchanged so nothing is recompressed. |
| related | combine-files-into-one-pdf, images-to-word, image-compress, pdf-page-to-image-sizes |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `images-to-pdf`（已有曝光，不改 URL；不拆 jpg-to-pdf / png-to-pdf / screenshot-to-pdf 近义页） |
| 主检索词 → title/H1 | en：**JPG to PDF Converter — Combine Multiple Images into One PDF Without Losing Quality**；zh：**图片转 PDF — 把多张 JPG 照片合并成一个 PDF，原图不压缩** |
| 次要关键词 → desc/FAQ | images to pdf / png to pdf / screenshot to pdf → desc 首句 + drop hint；combine images into one pdf → title 副句 + FAQ q3；jpg to pdf without losing quality → title + Why choose 1 + FAQ q2 + rules 3；photo sideways → EXIF + FAQ q5；reorder pages → FAQ q4；reduce pdf size → 质量档 + FAQ q6；heic to pdf → FAQ q7 |
| 用户搜索习惯判断 | 格式对（JPG to PDF）是全球最大搜法，放 H1 主词；images / photos 放副句 |
| 优化摘要 | 保留 slug；H1 由「Turn JPG into PDF」改为格式对 + 多图合一 + 不降质；desc 写清顺序、旋转、页面尺寸与例子 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| jpg to pdf | 吸（主词） | title / H1 |
| images to pdf / photos to pdf / png to pdf | 吸 | desc；drop hint；How |
| combine multiple images into one pdf | 吸 | title 副句；FAQ q3 |
| jpg to pdf without losing quality | 吸 | Why choose 1；FAQ q2；rules 3；quality 默认「Original」 |
| jpg to pdf a4 / letter / fit to page | 吸 | 页面尺寸；rules body / 1–2 |
| rotate image before pdf / photo sideways | 吸 | ↻ 按钮；EXIF；FAQ q5 |
| reorder / sort images in pdf | 吸 | 箭头 + Sort by file name + Reverse；FAQ q4 |
| compress pdf from images / reduce size | 吸 | 质量档；FAQ q6 |
| heic to pdf | 吸（说明边界） | FAQ q7 |
| screenshot to pdf | 吸 | Use case 2 |
| pdf to jpg | **不吸**（反方向） | Related：pdf-page-to-image-sizes |
| merge pdf files | **不吸** | Related：combine-files-into-one-pdf |
| ocr / searchable pdf | **不吸**（需 OCR） | — |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 多图转 PDF，仍成立 |
| 主检索词任务 | 「把 JPG 合成 PDF 并下载」——改写前可用但会二次压缩、无旋转 / 排序工具、说明薄 → **部分满足**；改写后：原样嵌入 + EXIF + 旋转 + 排序 + 页面尺寸 / 方向 / 边距 + 金标 HUD + 预览 → **满足** |
| 超出 | 无第二工具抢首屏；适配 / 质量收进高级设置 |
| 有意不满足 | OCR、加密、PDF 转图片：不吸，Related 指路 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：多张图片（点击或拖放，可多次追加到列表末尾；JPEG / PNG / WebP / GIF 首帧 / BMP；HEIC 视浏览器）
- 列表：序号 + 缩略图 + 像素尺寸 / 大小 / 旋转角 + ↻（顺时针 90°）/ ↑ / ↓ / ×；≥ 2 张时显示「Sort by file name」（自然排序）/「Reverse order」
- 主选项：页面尺寸（默认 A4；US Letter；与每张图片相同 = 96 ppi）；方向（默认自动；纵向；横向；同图尺寸时禁用）；边距（无 / 6 默认 / 12 / 20 mm）
- 主按钮：Convert to PDF → Download PDF（单张用原名，多张 `images.pdf`）
- 高级设置（折叠）：适配（完整显示默认 / 铺满裁边，用 PDF clip 实现不重编码）；质量（原样默认 / 均衡 2480 px JPEG 85% / 小文件 1600 px JPEG 70%；若重编码反而更大且未超边长则保留原数据）
- 嵌入规则：看文件头而非扩展名；JPEG（方向 = 1 且非 CMYK）与 PNG 原样；其余经画布重编码（原样档：PNG→PNG，其它→JPEG 0.92 全尺寸）；用户旋转用 drawImage rotate，不重编码
- 进度：金标 `.bcw-hud`（Read images → Add pages「Adding image i of n」→ Save PDF）
- 预览：pdf.js 画布逐页
- 统计：`{n} images → {n}-page PDF ({页面尺寸 mm}) · {bytes} · {raw} embedded unchanged, {re} re-saved`
- 警告：单个解码失败只跳过并列出文件名；> 25 MB；> 8192 px；动图首帧；pdf-lib 未加载
- 样例：1200 × 800 横向 JPEG + 800 × 1131 纵向扫描页 JPEG + 800 × 800 PNG 图表；默认设置 → 横 A4 + 纵 A4 + 纵 A4，三张原样嵌入
- Clear 只清空并恢复默认设置，不重载样例

## 页面模块清单

- [x] H1 + 交互 + 进页样例 + 摘要
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
