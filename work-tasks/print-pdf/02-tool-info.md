# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`print-pdf`  
**路径**：`/tools/print-pdf`  
**主方向**：A  
**catalog 分类**：`pdf`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #21，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄（H1 仅「Print a PDF」、How 为通用模板句「Choose input, click the main button」、Rules 第 1 条是实现备注「Task: embed pdf.js viewer…」、FAQ 5 条两三词短答），九语为未本地化旧稿。功能上只是「iframe 显示原文件 + window.print()」，与浏览器自带阅读器的 Ctrl+P 没有区别，搜索者的真实问题一个也没解决：

- 只打印部分页 / 重印卡纸的几页；
- 单面打印机想打双面（奇偶页 + 倒序 + 奇数页数补空白页）；
- Letter PDF 印在 A4 上底部被裁（或反过来），打印机边缘不可打印区；
- 一张纸印 2 / 4 页（讲义、省纸）；
- PDF 打印缺字、乱码、打印机内存不足（经典解法「按图片打印」）。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：在不装 Acrobat 的电脑上，把 PDF 按自己需要的页、纸张和版式印出来，并且一次就印对
- [x] 竞品（浏览器内置 PDF 阅读器、PrintFriendly / 各「print pdf online」页）：多数只是「上传 → 打开 → Ctrl+P」；选页 / 缩放 / 多页一版依赖各打印对话框，名称和位置各不相同；手动双面几乎无人讲清奇数页数的补白页问题
- [x] 缺口：打印前在页面上就看到结果（页数、张数、缩放比例、打印顺序）；手动双面两步引导；A4 ↔ Letter 等比缩放公式；按图片打印
- [x] 增益：① 页码范围（按输入顺序、可重复、8- / -3 写法）② 单双面：只奇数页（正面）/ 只偶数页（背面），偶数页少于奇数页时自动补 1 张空白页，配合倒序与正面纸叠对齐 ③ 纸张：保持原尺寸 / A4 / US Letter，缩放 = min((纸宽 − 2×边距) ÷ 页宽, (纸高 − 2×边距) ÷ 页高)，默认不放大，可勾选放大 ④ 每张 1 / 2 / 4 页（2 页：竖页并排于横向纸；4 页：2×2 阅读顺序）+ 可选细边框 ⑤ 摘要行：页数 · 张数 · 纸张 · 缩放 · 打印顺序 ⑥ 按图片打印 150 / 300 dpi（pdf.js 渲染为 JPEG 再组 PDF）⑦ /Rotate 页正确摆放；表单字段先 flatten ⑧ 加密 PDF 原样打印、不去限制 ⑨ 下载「打印用 PDF」（原名-print.pdf）⑩ FAQ ×7 + 权威引用 ×2
- [x] 权威：MDN — Window.print()；ISO 216（A 系列纸张尺寸）
- [x] Related：`open-pdf-in-browser`（只看不印）、`organize-pdf`（永久重排 / 删页）、`split-pdf`（拆成文件）、`unlock-pdf`（已知密码时解除限制）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | pdf-lib：`copyPages`（保持原尺寸且每张 1 页时原样复制）/ `embedPdf` + `drawPage`（缩放、多页一版、按 /Rotate 旋转定位）；pdf.js（按图片打印）；iframe + `contentWindow.print()`，失败时新标签页打开；`pdfWorkUi` 进度；`page.style: opts` |
| Title (en) | Print a PDF Online — Choose the Pages, Fit Them to A4 or Letter and Print Double-Sided on Any Printer |
| Description (en) | Print a PDF from the browser after setting it up for your printer: choose a page range, print only odd or even pages to make double-sided copies on a single-sided printer, resize pages to A4 or US Letter, or fit 2 or 4 pages on one sheet. Example: a 5-page Letter PDF set to A4 prints at 93%. |
| related | open-pdf-in-browser, organize-pdf, split-pdf, unlock-pdf |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-09-03） |
| slug 结论 | **保留** `print-pdf`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Print a PDF Online — Choose the Pages, Fit Them to A4 or Letter and Print Double-Sided on Any Printer**；他语按 03 当地搜法（在线打印PDF、PDFを印刷する、imprimir un PDF、PDF drucken 等） |
| 次要关键词 → desc/FAQ | print specific pages of pdf → 自定义范围 + FAQ q1；print double sided manually → 奇偶页 + FAQ q2 + Why choose 1；pdf cut off when printing / fit to page → 纸张 + 边距 + FAQ q3；print multiple pages per sheet → 每张 2 / 4 页 + FAQ q4；pdf prints garbled / missing text → 按图片打印 + FAQ q5；print secured pdf → FAQ q6（如实划界）；print pdf without uploading → FAQ q7 |
| 用户搜索习惯判断 | 任务向（把 PDF 印出来）；副标题写三个最常见的打印难题（选页、A4/Letter、双面），不把边距 / dpi / 倒序等控件串进 H1 |
| 优化摘要 | 保留 slug；H1 由「Print a PDF」改为任务句 + 三个打印难题；desc 写 steps + 可验证数字（93%）；FAQ 由 5 条短句扩为 7 条真实问题 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| print pdf / print a pdf online / how to print a pdf | 吸（主词） | title / H1；How |
| print specific pages / print only some pages of a pdf | 吸 | 自定义范围；FAQ q1；Use case 4 |
| print double sided on single sided printer / manual duplex | 吸 | 奇偶页 + 倒序 + 补白页；FAQ q2；Example |
| pdf cut off when printing / fit pdf to a4 / letter to a4 | 吸 | 纸张 + 边距；FAQ q3；Use case 2 |
| print multiple pages per sheet / 2 pages per sheet pdf | 吸 | 每张 2 / 4 页；FAQ q4；Use case 3 |
| pdf prints garbled / missing text / print as image | 吸 | 按图片打印；FAQ q5；Why choose 4 |
| print pdf in reverse order | 吸 | 倒序选项；Rules |
| print password protected / secured pdf | 部分（原样打印，不去限制） | FAQ q6；Related unlock-pdf |
| booklet printing（骑马钉小册子） | **不吸**（需拼版与对折顺序，另立工具） | — |
| permanently delete / reorder pages | **不吸**（organize-pdf） | Related |
| split pdf into files | **不吸**（split-pdf） | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`（print a pdf 为 build 主词）；长尾按上表（2026-10-14 同意图检索整理）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 浏览器内预览并打印 PDF，仍成立 |
| 主词搜索者任务 | 「把 PDF 按需要印出来」——改写前只是 iframe + 打印，与浏览器自带 Ctrl+P 相同 → **部分满足**；改写后选页、奇偶页手动双面、A4 / Letter 缩放、每张多页、按图片打印、摘要数字 → **满足** |
| 超出 | 边距、按图片打印、倒序、放大、边框放在折叠的「More print settings」，不抢首屏 |
| 有意不满足 | 骑马钉小册子拼版、永久编辑 PDF、去除打印限制：FAQ / Related 划界 |
| 总判 | 满足（已回写 How、控件、FAQ、desc） |

## 交互规格

- 输入：单个 PDF（拖放或选择）；非 PDF → 可读报错；> 100 MB 软警告；损坏 → 可读报错
- 页码：全部 / 自定义；逗号（含 ，、；）分隔；`a-b`、`8-`（到末页）、`-3`（从第 1 页）、`5-2`（倒序区间）；按输入顺序、允许重复；越界或格式错 → 报错并写明总页数
- 单双面：全部 / 奇数位（第 1、3、5… 个）/ 偶数位；偶数位且所选总数为奇数 → 末尾补空白页（倒序后在最前）
- 纸张：保持 / A4 595.28 × 841.89 pt / Letter 612 × 792 pt；每张 1 页时纸张方向跟随该页；边距 0 / 5（默认）/ 10 mm；默认不放大（放大选项）
- 每张多页：2 → 首页竖向则横向纸 2 列，首页横向则竖向纸 2 行；4 → 2 × 2；保持原尺寸时纸张取第 1 页尺寸；可画 0.5 pt 灰色边框
- 原样复制：保持原尺寸 + 每张 1 页 → `copyPages`（保留链接 / 注释）；否则 `embedPdf`（表单先 flatten；注释、链接不保留）
- 按图片打印：150 / 300 dpi，JPEG 0.92，页面尺寸不变
- 加密：pdf-lib 报 encrypted → 设置全部禁用，原文件进预览并原样打印
- 每次改设置 300 ms 后重建；进度条按张 / 按页推进；摘要：「Pages to print · Sheets of paper · Paper · Scale」+「Print order」（最多列 40 项）
- 打印：等 iframe 加载（≤ 3 s）后 `contentWindow.print()`；异常 → 新标签页打开（被拦截则报错并建议下载）；下载名 `原名-print.pdf`
- 样例：5 页 US Letter（大号页码、奇 / 偶标注），默认设置 → 5 页 / 5 张 / 原尺寸 / 100%；A4 + 5 mm → 93%，边距 0 → 97%；每张 2 页 → 3 张 65%；每张 4 页 → 2 张 45%；奇数页 → 1, 3, 5；偶数页 + 倒序 → blank, 4, 2
- Clear：清空文件、预览、摘要，设置恢复默认，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×4 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
