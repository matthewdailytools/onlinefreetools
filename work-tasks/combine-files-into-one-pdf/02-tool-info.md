# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`combine-files-into-one-pdf`  
**路径**：`/tools/combine-files-into-one-pdf`  
**主方向**：A  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #19，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄（How / Rules / FAQ 为模板短句，FAQ 3 条），和 `merge-pdf` / `images-to-pdf` 难以区分。功能与实现缺口：

- 只收 PDF 和图片，「混合文件」里常见的 .txt / .md 笔记无法加入；
- 无法只取某个 PDF 的部分页；
- 手机竖拍照片忽略 EXIF 方向，合并后横躺；
- 图片一律按原像素尺寸成页，无纸张 / 边距选择，A4 打印时大小不一；
- 无双面打印（每个文件从正面开始）与大照片缩小选项；
- Word / Excel / HEIC 等不支持的文件静默失败，没有说明；
- 无明显进度，错误信息为内部代码。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把一个 PDF 表格、几张手机照片和一段文字笔记按指定顺序合成**一个** PDF，再上传到门户 / 发给 HR / 打印
- [x] 竞品（iLovePDF Merge、Smallpdf Merge、PDF24 Tools）：Merge 只收 PDF，图片要先走 JPG to PDF；多数上传到服务器；页范围与 EXIF 方向常缺
- [x] 缺口：一次混合 PDF + 图片 + 文本；每个 PDF 页范围；竖拍照片自动摆正；纸张 / 边距统一；双面打印空白页；不支持格式（Word / HEIC）给出原因与办法
- [x] 增益：① 混合队列（类型徽标、页数 / 像素 / 行数）② 页范围 `1-3, 5`、`8-`、倒序 `10-1` ③ EXIF 方向修正 ④ 纸张 A4 / Letter / 按图片尺寸 + 边距 0 / 10 / 20 mm，横图自动横向页 ⑤ 高级：双面打印空白页、缩小大照片 2400 / 1600 px ⑥ 进度 HUD（读取 / 添加 / 保存）+ 预览 ⑦ FAQ：混合合并步骤、Word / Excel、部分页、照片横躺原因、文件过大、密码 PDF、是否上传 ⑧ 权威引用 ×2
- [x] 权威：pdf-lib 文档；MDN — CSS `image-orientation`（EXIF 方向）
- [x] Related：`merge-pdf`、`images-to-pdf`、`convert-word-document-to-pdf`、`compress-pdf`、`unlock-pdf`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | pdf-lib（`/vendor/`，同域）+ `OftPdfWork`（文本换行、非拉丁行栅格化、预览）；`bcwHudCss` 进度 HUD；`page.style: opts` |
| Title (en) | Combine Files into One PDF — Merge PDFs, Photos and Text Files in the Order You Choose |
| Description (en) | Combine files into one PDF in your browser: PDFs, JPG, PNG, WebP and other images, and plain-text files, in the order you set. Steps: add the files, reorder them or type page ranges such as 1-3, click Combine to PDF, then download. Example: a 2-page report, a chart image and a text note become one 4-page PDF. |
| related | merge-pdf, images-to-pdf, convert-word-document-to-pdf, compress-pdf, unlock-pdf |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-09-03） |
| slug 结论 | **保留** `combine-files-into-one-pdf`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Combine Files into One PDF — Merge PDFs, Photos and Text Files in the Order You Choose**；他语按 03 当地搜法 |
| 次要关键词 → desc/FAQ | create pdf from multiple files → desc + How 1；combine pdf and jpg / photos into one pdf → 副标题 + Why choose 1；combine word and pdf → FAQ q2（先存为 PDF，链 convert-word-document-to-pdf）；add only some pages → 页范围 + FAQ q3；photos sideways → EXIF + FAQ q4；combined pdf too large → 缩小选项 + FAQ q5；password pdf → FAQ q6（链 unlock-pdf） |
| 用户搜索习惯判断 | 任务向（把多个文件合成一个）；副标题写「合并的对象 + 按你定的顺序」，不把纸张 / 边距 / 双面等控件串成 H1 |
| 优化摘要 | 保留 slug；H1 由短句扩为含 PDFs / photos / text files + order；desc 写 steps + example；FAQ 由 3 条模板扩为 7 条真实问题 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| combine files into one pdf | 吸（主词） | title / H1；How |
| create pdf from multiple files / create pdf multiple files | 吸 | desc；How 1 |
| combine pdf and jpg / photos and pdf into one | 吸 | 副标题；Why choose 1；样例含图表 PNG |
| combine scanned documents and photos into one pdf | 吸 | Use case 1–2 |
| merge only some pages of a pdf | 吸 | 页范围输入；How 2；FAQ q3 |
| photos sideways in pdf | 吸 | EXIF 修正；Why choose 3；FAQ q4 |
| combined pdf too big | 吸（合并时） | 高级「缩小大照片」；FAQ q5；深度压缩链 compress-pdf |
| print bundle double sided | 吸 | 高级「每个文件从正面开始」；Use case 4；Example |
| combine word / excel with pdf | **部分**（不在浏览器内渲染 Office） | FAQ q2：先存为 PDF；Related convert-word-document-to-pdf |
| merge pdf（只合 PDF） | **不吸**（A1 头词） | Related merge-pdf |
| jpg to pdf（只合图） | **不吸**（A6） | Related images-to-pdf |
| unlock pdf | **不吸** | FAQ q6；Related unlock-pdf |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用分析路径：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`（N1：combine files into one pdf / create pdf multiple files → 本页主打，仍成立；merge pdf 归 A1）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 图 / Word / PDF 混合合成一份 PDF，仍成立（Word 按 FAQ q2 先转 PDF） |
| 主词搜索者任务 | 「把不同文件按顺序合成一个 PDF」——改写前只收 PDF + 图、照片可能横躺、无页范围 → **部分满足**；改写后：PDF + 图片 + 文本混合、页范围、EXIF 摆正、纸张边距、双面、缩小、进度与预览 → **满足** |
| 超出 | 双面打印空白页、缩小照片放在折叠的高级设置，不抢首屏 |
| 有意不满足 | 浏览器内渲染 Word / Excel / PowerPoint、HEIC / TIFF 解码、解密：FAQ 说明 + Related |
| 总判 | 满足（已回写 How、选项、FAQ、desc） |

## 交互规格

- 输入：多文件（拖放或选择）：PDF；JPG / PNG / WebP / GIF / BMP / SVG / AVIF；TXT / MD / CSV / LOG。不支持的类型（docx、HEIC 等）跳过并黄字列出
- 队列：每行类型徽标、文件名、页数 / 像素（已按 EXIF 方向）/ 行数 + 大小；PDF 行可填页范围（`1-3, 5`、`8-`、`5-1`；越界或语法错误时点名报错）；上移 / 下移 / 移除；按文件名排序
- 选项：纸张 A4（默认）/ Letter / 按图片尺寸；边距 0 / 10（默认）/ 20 mm；文件名（默认 combined）
- 高级（折叠）：每个文件从正面开始（奇数页后补空白页）；缩小大照片到 2400 / 1600 px
- 合成：PDF 页原样复制（文字可选可搜）；图片按纸张等比居中，横图用横向页；JPG / PNG 无需处理时原样嵌入，其余经 canvas；文本 Helvetica 11 pt 自动分页，非拉丁行栅格化
- 输出：PDF 标题 = 文件名（去 .pdf）；统计「页数 · 文件数 · 大小」；预览 + Download PDF（文件名去非法字符）
- 报错：加密 PDF、损坏 PDF、图片解码失败、页范围错误、保存失败均为可读句子
- 样例：report.pdf（2 页 A4）+ sales-chart.png（900 × 560）+ meeting-notes.txt（5 行）→ 4 页；进页自动运行
- Clear：清空队列与结果，不重载样例；进度：HUD 百分比 + 步骤 + 用时

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×5 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
