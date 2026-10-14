# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`open-pdf-in-browser`  
**路径**：`/tools/open-pdf-in-browser`  
**主方向**：A  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #18，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文过薄（How / Rules / FAQ 均为模板短句，FAQ 3 条）；页面只有上一页 / 下一页两个按钮。功能与实现缺口：

- 每翻一页都重新解析整个 PDF，大文件翻页慢；
- 无缩放、旋转、全屏、跳页、键盘翻页；
- 无全文搜索——「在浏览器里搜 PDF 文字」是同意图高频需求；
- 加密 PDF 直接报内部错误码，不给输入密码的机会；
- 不显示页数、页面尺寸、PDF 版本、元数据——用户常为「这页是 A4 还是 Letter」打开 PDF；
- 错误信息是内部代码，不可读。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：没有装阅读器（或浏览器总是下载 PDF）时，直接在网页里读 PDF：翻页、缩放、搜索；顺手看页面尺寸与文档信息；打开带密码的 PDF
- [x] 竞品（iLovePDF / Smallpdf / pdf2go 的在线查看器类）：多要求上传到服务器；搜索与密码常为付费或缺失；很少显示页面尺寸与 PDF 版本
- [x] 缺口：本机打开不上传；密码 PDF；全文搜索并跳到命中页；页面尺寸（mm / in + 纸张名）；「为何浏览器下载而不打开」的设置说明
- [x] 增益：① 工具栏：翻页 / 跳页 / 缩放（适宽 / 适页 / 50–300%）/ 旋转 / 全屏 / 用浏览器自带查看器打开 ② 全文搜索（命中页数与次数，再按跳下一命中页）③ 密码行 ④ 文档信息表（页数、版本、页面尺寸与方向、是否有可选文字、标题 / 作者 / 生成程序）⑤ FAQ：浏览器下载而不打开（Chrome / Edge / Firefox / Safari 设置路径）、密码、无法搜索（扫描件）、是否上传、页面尺寸、文件损坏 ⑥ 权威引用 ×2
- [x] 权威：Mozilla PDF.js；PDF Association — ISO 32000-2
- [x] Related：`print-pdf`、`unlock-pdf`、`extract-text-from-pdf`、`pdf-to-jpg`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | pdf.js 4.10（`/vendor/pdfjs/`，同域）+ `OftPdfWork` 进度；样例由 pdf-lib 生成；`page.style: opts` |
| Title (en) | Open PDF in Browser — View, Search and Zoom a PDF Online Without a Reader App |
| Description (en) | Open a PDF in the browser and read it page by page: zoom to fit, rotate, go full screen and search the text. Steps: choose the file, type a password if it is protected, then turn pages with the buttons or arrow keys. Example: the 3-page sample shows A4, Letter and A5 page sizes. |
| related | print-pdf, unlock-pdf, extract-text-from-pdf, pdf-to-jpg |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-09-03） |
| slug 结论 | **保留** `open-pdf-in-browser`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Open PDF in Browser — View, Search and Zoom a PDF Online Without a Reader App**；他语按 03 当地搜法（在线打开 PDF、PDFをブラウザで開く、abrir PDF en el navegador 等） |
| 次要关键词 → desc/FAQ | pdf viewer online / view pdf online → 副标题 + Why choose；search text in pdf → 搜索框 + How 3 + Rules；browser downloads pdf instead of opening → FAQ q2；open password protected pdf → 密码行 + FAQ q3；pdf page size → 信息表 + FAQ q6；pdf damaged won't open → FAQ q7 |
| 用户搜索习惯判断 | 任务向（打开 / 查看）；不把 zoom、rotate、fullscreen 等控件串成 H1 目录，只保留检索最多的 view / search / zoom |
| 优化摘要 | 保留 slug；H1 由场景短句「Open a PDF in the browser」扩为含 view / search / zoom / without a reader app；desc 写 steps + example；FAQ 由 3 条模板扩为 7 条真实问题 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| open pdf in browser | 吸（主词） | title / H1；How |
| pdf viewer online / view pdf online | 吸 | 副标题；Why choose 1 |
| open pdf without adobe reader | 吸 | 副标题「Without a Reader App」；Use case 1 |
| search text in pdf online | 吸 | 搜索框；How 3；FAQ q4 |
| browser downloads pdf instead of opening | 吸 | FAQ q2（各浏览器设置路径） |
| open password protected pdf | 吸 | 密码行；FAQ q3 |
| pdf page size / is my pdf A4 or letter | 吸 | 信息表；FAQ q6；样例三种尺寸 |
| pdf won't open / damaged | 吸 | FAQ q7；错误提示 |
| rotate pdf view / zoom pdf | 吸（查看层面） | 工具栏；Rules（不改原文件） |
| 永久旋转 / 解除密码 / 提取文字 / 打印 | **不吸**（已有工具） | Related：rotate-pdf 不在首屏，unlock-pdf、extract-text-from-pdf、print-pdf |
| edit pdf online | **不吸** | Rules 说明只读 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用分析路径：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`（open a pdf in the browser → build 主词，仍成立）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 在浏览器中打开 PDF，仍成立 |
| 主词搜索者任务 | 「不装软件直接看 PDF」——改写前只能逐页翻、每页重解析、无缩放 / 搜索 / 密码 → **部分满足**；改写后：一次打开、缩放 / 旋转 / 全屏 / 跳页 / 搜索 / 密码 / 信息表 → **满足** |
| 超出 | 文档信息表为附加，位于查看区下方，不抢首屏 |
| 有意不满足 | 编辑、永久旋转、解密另存、打印排版：Related，不改 H1 |
| 总判 | 满足（已回写 How、工具栏、FAQ、desc） |

## 交互规格

- 输入：单个 PDF（拖放或选择）；加密时出现密码框，回车或按钮提交，密码错时提示重输
- 查看：文档只解析一次；按设备像素比渲染；翻页时取消未完成的渲染；上一页 / 下一页 / 跳页输入 / 键盘（方向键、PgUp/PgDn、Home/End、+/−）
- 缩放：适宽（默认）/ 适页 / 50%–300%；旋转每次 90°；全屏作用于查看区；「用浏览器自带查看器打开」以 blob URL 新标签打开
- 搜索：逐页提取文字并缓存；显示命中页数与次数并跳到第一命中页；再次搜索同词跳下一命中页；无命中时提示（扫描件无文字层）
- 信息表：文件名 / 大小 / 页数 / PDF 版本（文件头）/ 当前页尺寸（mm + in + 纸张名 + 方向）/ 是否有可选文字 / 标题 / 作者 / 生成程序
- 报错：非 PDF、损坏、密码错误、渲染失败均为可读句子
- 样例：pdf-lib 生成 3 页（A4 纵向、Letter 横向、A5）带标题 / 作者；「browser」一词出现在第 1、3 页
- Clear：清空文档与密码，不重载样例；进度：`OftPdfWork` 进度条（加载 / 搜索）

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
