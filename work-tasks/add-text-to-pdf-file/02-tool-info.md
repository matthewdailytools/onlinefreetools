# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`add-text-to-pdf-file`  
**路径**：`/tools/add-text-to-pdf-file`  
**主方向**：C  
**catalog 分类**：`pdf`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #30，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：Why choose 不足 3 条、正文薄、九语未检索向重写。旧页只有文字 + X/Y + 字号三格，功能缺口：

- **坐标难猜**：PDF 原点在左下，用户习惯从上往下点；无角点预设、不能点预览落点；
- 只能盖「每一页」，不能「仅当前页」或 `1-3, 5, 8-`；
- 无颜色、透明度、旋转——CONFIDENTIAL / DRAFT 常用半透明斜向；
- 无对齐（左/中/右相对锚点）；
- 中日韩 / 阿拉伯文依赖 WinAnsi 时会失败（现已走 pdfWorkUi 栅格化，但旧文案未说明）；
- Clear 会重载样例；无过程摘要。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：给 PDF 每一页（或选定页）盖一句固定文字（机密标、草稿标、页脚备注），选位置后预览并下载；文件不出浏览器
- [x] 竞品（iLovePDF、Smallpdf、Sejda、Adobe）：多要上传；免费档常限页数；角点预设常见，点预览落点较少；Unicode 支持不一
- [x] 缺口：纯前端；角点预设 + 点预览写 X/Y；页范围；颜色/透明度/旋转；CJK/阿语栅格化说明
- [x] 增益：① 页范围（全部 / 当前预览页 / 自定义）② 七角点预设 + 自定义 X/Y ③ 点预览落点 ④ 左/中/右对齐 ⑤ 颜色·透明度·旋转·边距 ⑥ 最大行宽折行 ⑦ Latin 粗体 ⑧ Unicode 栅格化 ⑨ 摘要（页数、末次坐标）⑩ Example：2 页样例 → 右下 CONFIDENTIAL ⑪ FAQ ×7 ⑫ 引用（pdf-lib；PDF.js）
- [x] Related：`pdf-watermark`（铺满/水印意图）、`sign-pdf-document`（签名章）、`pdf-page-numbers`（页码）、`edit-pdf-text-online`（改已有文字层）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | 纯前端；pdf-lib + pdfWorkUi.drawPageText（WinAnsi / Canvas 栅格）；pdf.js 预览；`page.style: opts` |
| Title (en) | Add Text to PDF — Stamp a Label on Every Page at X/Y in Your Browser |
| Description (en) | Add the same text to every page of a PDF (or only the pages you pick), place it with a corner preset or by clicking the preview, set color, size and opacity, then download. Files stay in this tab. Example: two-page sample → “CONFIDENTIAL” in the bottom-right on both pages. |
| related | pdf-watermark, sign-pdf-document, pdf-page-numbers, edit-pdf-text-online |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-09-03） |
| slug 结论 | **保留** `add-text-to-pdf-file`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Add Text to PDF — Stamp a Label on Every Page at X/Y in Your Browser**；他语按 03 当地搜法 |
| 次要关键词 → desc/FAQ | stamp text on PDF → Why + Use case 1；X/Y coordinates → click hint + FAQ q3；every page / selected pages → Pages 控件 + How；CONFIDENTIAL / DRAFT → Example + Use case；scanned PDF → Rules + FAQ q2；CJK text on PDF → FAQ q5；not uploaded → FAQ q1；vs watermark / edit text → FAQ q4 |
| 用户搜索习惯判断 | 搜者要「盖一句字 + 选位置 + 下载」；H1 写结果（stamp a label on every page），不罗列字号/颜色参数 |
| 优化摘要 | 保留 slug；H1 由「Add text to a PDF file」改为 stamp + every page + X/Y；desc 写页范围 / 点选 / 颜色透明度 + 可验证例子；FAQ 由 5 条扩为 7 条 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| add text to PDF / stamp text on PDF | 吸（主词） | title / H1；How |
| add text to every page of PDF | 吸 | title；Pages「全部」；Use case 1 |
| add text at coordinates / X Y PDF | 吸 | 自定义 X/Y；click hint；FAQ q3 |
| CONFIDENTIAL stamp PDF / DRAFT watermark text | 吸（单点印章，非铺满） | Example；Use case 1；颜色透明度 |
| add footer text to PDF | 吸 | 下角预设；Use case 2 |
| add text to scanned PDF | 吸 | Rules item 3；FAQ q2 |
| add Chinese / Japanese text to PDF | 吸 | text_hint；FAQ q5；Why 4 |
| PDF text stamp online free no upload | 吸 | drop_hint；FAQ q1；Why 5 |
| edit existing PDF text / replace wording | **不吸**（交给 `edit-pdf-text-online`） | FAQ q4；Related |
| tiled / diagonal wallpaper watermark | **不吸**（交给 `pdf-watermark`） | FAQ q4；Related |
| digital certificate signature | **不吸**（可见签名章见 `sign-pdf-document`） | Related |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 本工具无独立 Planner 文件；主词与长尾按上表（2026-10-14 同意图检索整理）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 给 PDF 加文字，仍成立 |
| 主词搜索者任务 | 「盖一句字并选位置」——改写前只有裸 X/Y、无预设、无颜色 → **部分满足**；改写后预设、点选、页范围、颜色透明度 → **满足** |
| 超出 | 旋转与最大行宽收进「更多选项」 |
| 有意不满足 | 改已有文字层、铺满水印、证书签名：未吸 |
| 总判 | 满足（已回写 How、控件、FAQ、desc） |

## 交互规格

- 输入：PDF 文件；文字（≤200，可换行）；页范围（全部 / 当前预览页 / 自定义）；位置预设或自定义 X/Y；对齐；字号 6–96；颜色；高级：边距%、透明度、旋转、最大行宽、粗体
- 点预览：把画布点击换算为 PDF 点（原点左下），写入自定义 X/Y
- 输出：盖字后 PDF 预览 + 摘要（页数、末次 X/Y、字号）+ 下载 `<原名>-text.pdf`
- 样例：2 页 US Letter → 右下 CONFIDENTIAL（#c62828、18pt、粗体、透明度 85%）；进页自动运行
- Clear：清空且不重载样例
- 报错：非 PDF、读失败、加密、页码非法、空文字、库未加载

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×4 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填

## 验收记录（2026-10-14，英文本地预渲染页）

- 自动样例：加载 2 页 US Letter 样例 → 自动执行，两页右下角均盖粗体 CONFIDENTIAL，状态与统计行（页数 / X / Y / 字号）正常显示，下载按钮可用。
- Clear：清空文件、预览与结果，不会重新加载样例。
- 页码：「仅当前页」只处理预览当前页；自定义范围填非法值（如 `9`）显示 `err_range_tpl` 错误且不产出文件。
- 空文本：未填文字时点 Apply 显示 `empty_text` 错误。
- 非拉丁字符：输入中文时 `OftPdfWork.drawPageText` 对无法 WinAnsi 编码的行走位图回退，盖章成功，输出 PDF 可正常打开。
- 本地化页（zh + 抽查一语种）交付前在预渲染页复测样例流程。
