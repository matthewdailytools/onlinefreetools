# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`images-to-word`  
**路径**：`/tools/images-to-word`  
**主方向**：A  
**catalog 分类**：`image`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #26，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄；H1「Build a DOCX from Photos」；FAQ 为「Uploaded?」「Need Microsoft Word?」「Vs PDF?」「Macros?」式单词问答；Use cases「Report appendices.」一句话；无 How 步骤、无 Why choose。功能上**每张图都经画布转 PNG**（照片体积暴涨）、固定 550 px 宽、一图一页且分页符单独成段（满页大图后可能多出空白页）；无版式 / 纸张 / 边距 / 图注 / 旋转 / 排序；下载名恒为 images.docx；统计模板 `{n}` 与代码 `{count}` 不一致（显示原样占位符）。无法回应本意图最常见的追问：「一次插入多张图片」「一页放 2 张 / 4 张」「图注」「Word 文件太大」「图里的字能不能编辑」。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把多张照片 / 截图 / 扫描件按顺序放进一个 Word 文档（报告附图、会议白板、操作手册截图、打印照片），常追问一页放几张、图注、文件大小、能否编辑图中文字
- [x] 竞品（各「JPG to Word」站多为 OCR；「insert multiple pictures into Word」结果多为 Microsoft 支持页与教程）：OCR 站不保留图片版式；教程只讲 Word 里手动插入 / 表格排版，无免上传一键工具；少有说明尺寸与分页规则
- [x] 缺口：每页 1 / 2 / 4 张或连续排列；A4 / Letter 与纵横；Word 默认边距 2.54 cm；按格子精确缩放（不溢出到下一页、不留空白页）；JPEG / PNG 原样放入；EXIF 方向 + ↻；自然排序；图注（文件名 / Figure N）；小文件档；页面版式预览；明确 OCR 分流
- [x] 增益：① 版式与「格子」规则（2 × 2 无框表格）② A4 21 × 29.7 cm / Letter 8.5 × 11 in、标准边距 2.54 cm → 可用宽 15.92 cm ③ 铺满 vs 实际尺寸 96 ppi（480 px → 12.7 cm）④ 原样放入与必须重编码的情形（旋转 / 方向标记 / CMYK / WebP / GIF / BMP；透明→PNG，否则 JPEG 92%）⑤ 小文件 1600 px（≈250 ppi @ 15.92 cm）JPEG 80%，更大则保留原图 ⑥ 图注为普通文字（不进 Word 图表目录）⑦ OCR 边界 ⑧ 权威引用
- [x] 权威：docx.js Images（ImageRun）；ECMA-376 Office Open XML
- [x] Related：`batch-convert-jpg-to-editable-word-with-ocr`、`images-to-pdf`、`images-to-ppt`、`image-compress`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Images to Word — Insert Multiple Pictures into One Word Document (DOCX) |
| Description (en) | Insert multiple pictures into a Word document in your browser: put JPG, PNG or screenshot images in order, choose one, two or four per page, and download a .docx you can edit in Word, Google Docs or LibreOffice. Each picture is scaled to fit its space on the page and inserted without recompression. Example: the four sample images become a 4-page A4 document, or a single page with 4 per page. |
| related | batch-convert-jpg-to-editable-word-with-ocr, images-to-pdf, images-to-ppt, image-compress |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08） |
| slug 结论 | **保留** `images-to-word`（已有曝光，不改 URL；不拆 jpg-to-word / photos-to-docx / screenshots-to-word 近义页） |
| 主检索词 → title/H1 | en：**Images to Word — Insert Multiple Pictures into One Word Document (DOCX)**；zh：**图片转 Word — 把多张图片一次性插入一个 Word 文档（DOCX）** |
| 次要关键词 → desc/FAQ | insert multiple pictures into word → title 副句 + How + FAQ q1；2 / 4 pictures per page → 版式控件 + FAQ q2 + rules 1；captions → FAQ q4 + rules 5；word file too large → 小文件档 + FAQ q5；google docs / libreoffice → desc + FAQ q6；jpg to word（OCR 意图）→ **不吸**，OCR 提示行 + FAQ q3 指路 |
| 用户搜索习惯判断 | 「images / pictures / photos to Word」为工具式搜法放 H1 前段；「insert multiple pictures into one Word document」是 how-to 式长尾，放副句；「JPG to Word」在 SERP 多为 OCR，不作主词以免意图错配 |
| 优化摘要 | 保留 slug；H1 由「Build a DOCX from Photos」改为工具名 + 插入多图到一个文档；desc 写顺序、每页张数、可编辑应用与例子 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| images to word / pictures to word / photos to word document | 吸（主词） | title / H1；desc |
| insert multiple pictures into word at once | 吸 | title 副句；How；FAQ q1 |
| 2 / 4 pictures per page word | 吸 | 版式控件；FAQ q2；rules 1；Why choose 1 |
| add captions to pictures in word | 吸 | 图注控件；FAQ q4；rules 5 |
| word document with pictures too large | 吸 | 小文件档；FAQ q5；rules 4 |
| screenshots to word | 吸 | Use case 3；desc |
| photo sideways in word | 吸 | EXIF + ↻；Why choose 4 |
| open docx in google docs / libreoffice / pages | 吸 | FAQ q6 |
| jpg to word editable / image to text word | **不吸**（OCR） | OCR 提示行；FAQ q3；Related：batch-convert-jpg-to-editable-word-with-ocr |
| images to pdf | **不吸**（另一格式） | Related：images-to-pdf |
| word to jpg | **不吸**（反方向） | — |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 多图转 Word，仍成立 |
| 主检索词任务 | 「把多张图片放进一个 Word 文档并下载」——改写前可用但照片被转 PNG 变大、固定宽度、无版式 / 图注 / 旋转 / 排序、可能出空白页 → **部分满足**；改写后：每页 1 / 2 / 4 / 连续 + 纸张 / 方向 / 边距 + 精确缩放 + 原样放入 + EXIF / ↻ + 自然排序 + 图注 + 小文件 + 版式预览 + 金标 HUD → **满足** |
| 超出 | 无第二工具抢首屏；边距 / 图注 / 尺寸 / 画质收进高级设置 |
| 有意不满足 | OCR 识别文字：不吸，首屏提示行 + FAQ + Related 指路 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：多张图片（点击或拖放，可多次追加到列表末尾；JPEG / PNG / WebP / GIF 首帧 / BMP；HEIC 视浏览器）；拖放区下方 OCR 提示行链到 batch-convert-jpg-to-editable-word-with-ocr
- 列表：序号 + 缩略图 + 像素尺寸 / 大小 / 旋转角 + ↻ / ↑ / ↓ / ×；≥ 2 张时「Sort by file name」（自然排序）/「Reverse order」
- 主选项：每页张数（1 默认 / 2 上下 / 4 = 2 × 2 无框表格 / 连续不分页）；纸张（A4 默认 / US Letter）；方向（纵向默认 / 横向）
- 主按钮：Convert to Word → Download .docx（单张用原名，多张 `images.docx`）
- 高级设置（折叠）：边距（标准 1440 twip = 2.54 cm 默认 / 窄 720 twip）；图注（无 / 文件名 / Figure N，9 pt 斜体居中、keepNext 与图同页）；图片大小（铺满可用空间，可放大 / 实际尺寸 96 ppi 仅缩小）；画质（原图 / 小文件 1600 px JPEG 80%，透明保持 PNG，更大则保留原图）
- 排版：版式计算（`plan()`）同时驱动预览与 DOCX；格子高度预留行内下沉 10 px 与图注 20 px；1 / 2 张版式用 pageBreakBefore（不单独插分页段，避免空白页）；4 张版式每页一个固定宽度表格，页间用 1 pt 行高空段落分页；连续排列段前 8 pt，按格子高度模拟分页
- 嵌入规则：看文件头而非扩展名；JPEG（方向 = 1 且非 CMYK）与 PNG 且未旋转 → 原样；其余经画布重编码（旋转烘焙；透明或 PNG 源→PNG，否则白底 JPEG 0.92）
- 进度：金标 `.bcw-hud`（Read images → Add pictures「Adding picture i of n」→ Save .docx）
- 预览：页面缩略图（最多 12 页，其余显示数量），选项改变即时刷新
- 统计：`Pages · Pictures · File size · Inserted unchanged · Re-saved`（label: value，免复数）
- 警告：单个解码失败只跳过并列出文件名；> 25 MB；> 8192 px；动图首帧；docx 库加载失败报错
- 样例：1600 × 1200 现场照片 JPEG + 1200 × 1600 白板照片 JPEG + 900 × 600 图表 PNG + 1280 × 720 截图 PNG；默认设置 → 4 页、每张 15.9 cm 宽、四张原样；4 张 / 页 + 文件名图注 → 1 页、每张约 7.7 cm 宽
- Clear 只清空并恢复默认设置，不重载样例

## 验收记录（2026-10-14）

- 浏览器：样例 4 页 / 4 原样；4 张 / 页 + 文件名图注 → 1 页；连续 + Figure 图注 → 3 页；2 张 / 页 + 横向 + 第 2 张旋转 → 2 页、1 张重存；小文件档 1.90 MB → 433 KB；Letter + 实际尺寸；WebP 透明 / 不透明重存；坏文件跳过列名；全坏报错；空转换报错；Clear 不重载样例；自然排序 IMG_2 < IMG_10；下载名 images.docx
- Microsoft Word（COM 只读打开）：四种版式页数与 `plan()` 一致；图片尺寸 450.8 pt（15.9 cm）/ 218.2 pt（7.7 cm）；JPEG 数据在 docx 8.5 的 `.png` 部件内可正常显示；altText = 文件名

## 页面模块清单

- [x] H1 + 交互 + 进页样例 + 摘要
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
