# GSC 已抓取未索引 URL — 工具功能冒烟（2026-09-07）

- **生成时间**：2026-09-07T13:48:21.361Z
- **开始**：2026-09-07T13:43:59.255Z
- **CSV**：`docs/seo/reviews/2026-09-07/表格.csv`
- **基址**：生产 `https://onlinefreetools.org`（Google 抓的就是这些链接）
- **HTTP 抽检**：92 条
- **独立工具 Playwright**：58 个 slug
- **自动判定**：通过 56 · 警告 2 · 失败 0
- **复测后**：2 条警告均非功能损坏；Word→PDF 样例可预览可下载；边际收益填数后算出 9.0000

## 结论怎么读

- **通过**：页能开、H1 可读、Load sample（或主按钮）跑出结果/下载/画布，且无页面 JS 崩溃。
- **警告**：页面能开，但样例控件弱或未见明确结果；**不代表功能一定坏**。
- **失败**：打不开、JS 未捕获异常、或样例后明确报错。
- **需手动**：真实 PDF/图片观感、加密密码、公网抓取、可选 AI 扩写，自动测无法证伪。
- 同一 slug 多语种只测一条代表 URL（脚本相同）；`/en/tools/...` 会跟随 301 到无前缀规范页。

## HTTP：非 200 终态

- HTTP 404 `https://onlinefreetools.org/devlogs/2026-01-28-how-to-calculate-gradient` → `https://onlinefreetools.org/devlogs/2026-01-28-how-to-calculate-gradient` 

## 必须先看：功能失败

_无自动失败。工具交互本身都能开；未索引不是因为页坏了。_

## 警告复测（两条都不是功能坏）

自动脚本报「未找到 Load sample」两条，已人工/二次脚本核对：

### convert-word-document-to-pdf — 功能正常（误报）

- GSC URL：https://onlinefreetools.org/ja/tools/convert-word-document-to-pdf
- 进页已自动跑样例：`downloadOk=true`、HTML 预览「1 / 2 ページ」、canvas + img 都有、无 JS 崩溃。
- 按钮 id 是 `wordPdfBtnSample`，且 `loadSample` 封在 IIFE 里不挂 `window`；自动点样例没点到，但页面自己已经 `loadSample()`。
- 9 月 6 日本地中文页曾因 html2pdf/jsPDF 崩溃失败；**生产日文页本次已通过**。复杂 .docx 保真仍建议手动。

### how-to-calculate-marginal-revenue — 计算正常，缺进页样例

- GSC URL：https://onlinefreetools.org/id/tools/how-to-calculate-marginal-revenue
- 页面**没有** Load sample（`marginalRevenuePage.ts` 只有提交表单）。自动探测把面包屑/标题当成了 output，属误报。
- 复测填 Q1=10 TR1=100、Q2=11 TR2=109 后点计算：结果 **MR = 9.0000**（ΔTR=9，ΔQ=1），与公式一致。
- 相对其他 `how-to-calculate-*` 计算器，这是覆盖缺口（无自动样例），不是算错。

## 警告（建议抽查）

- **convert-word-document-to-pdf** — 初跑 WARN，复测功能通过 — https://onlinefreetools.org/ja/tools/convert-word-document-to-pdf
- **how-to-calculate-marginal-revenue** — 初跑 WARN，复测计算通过、无 Load sample — https://onlinefreetools.org/id/tools/how-to-calculate-marginal-revenue

## 特别注明：需要手动（即使自动通过）

- **add-text-to-pdf-file**（自动 pass）：叠加文字坐标与中文字体需肉眼
- **amazon-main-image-size**（自动 pass）：主图留白规范需肉眼
- **android-prompt-builder**（自动 pass）：可选 AI 扩写未点
- **batch-watermark-product-photos**（自动 pass）：多图水印位置与透明度需肉眼看
- **bulk-compress-png-images**（自动 pass）：压缩画质需对照原图
- **bulk-compress-product-photos**（自动 pass）：商品图观感需肉眼
- **bulk-convert-images-to-jpg**（自动 pass）：多图色彩/体积需肉眼
- **bulk-convert-images-to-png**（自动 pass）：多图色彩/体积需肉眼
- **check-pdf-a-compliance**（自动 pass）：指标解读需对照预检软件
- **check-ssl-certificate-expiration**（自动 pass）：依赖 TLS 证书链
- **compress-pdf**（自动 pass）：画质损失与体积需对照原文件
- **convert-pdf-to-dwg**（自动 pass）：DXF 在 CAD 里能否打开需手动
- **convert-word-document-to-pdf**（自动 warn）：复杂 .docx 保真需手动
- **crop-pdf**（自动 pass）：裁切框对准页边距需肉眼
- **edit-pdf-form-fields**（自动 pass）：字段增删改位置需对照真实表单
- **edit-pdf-text-online**（自动 pass）：可选中文字覆盖是否错位需对照原 PDF
- **excel-compare-files**（自动 pass）：真实工作簿多表/公式差异需手动
- **file-metadata-analyzer**（自动 pass）：真实文件元数据字段需对照原文件
- **fill-out-pdf-form**（自动 pass）：需用带 AcroForm 的真实表单核对字段
- **film-prompt-builder**（自动 pass）：可选 AI 扩写未点
- **find-and-validate-xml-sitemap**（自动 pass）：依赖目标站 sitemap 形态
- **flip-image**（自动 pass）：翻转方向需对照原图
- **instagram-post-size**（自动 pass）：画布比例需肉眼
- **make-pdf-flipbook**（自动 pass）：翻页动画、触控/键盘翻页需手动
- **merge-pdf**（自动 pass）：多文件页序需翻页核对
- **midjourney-prompt-builder**（自动 pass）：可选 AI 扩写未点
- **open-graph-preview**（自动 pass）：社交卡片依赖目标站 meta
- **open-pdf-in-browser**（自动 pass）：内嵌阅读器缩放滚动需手动
- **organize-pdf**（自动 pass）：删页/重排后页序需翻页核对
- **pdf-page-numbers**（自动 pass）：页码位置与起始页需肉眼
- **pdf-page-to-image-sizes**（自动 pass）：页栅格清晰度需肉眼
- **pdf-watermark**（自动 pass）：每页水印位置、透明度需肉眼
- **product-design-prompt-builder**（自动 pass）：可选 AI 扩写未点
- **protect-pdf**（自动 pass）：需用下载后的加密 PDF 在外部阅读器验证打开密码
- **rotate-pdf**（自动 pass）：旋转方向是否转正需肉眼
- **short-drama-prompt-generator**（自动 pass）：可选 AI 扩写未点
- **sign-pdf-document**（自动 pass）：手写签名画布与导出观感需肉眼看
- **sketch-prompt-generator**（自动 pass）：可选 AI 扩写未点
- **split-pdf**（自动 pass）：拆出的文件页范围需手动
- **turn-pdf-into-editable-document**（自动 pass）：扫描件/可选中文字路径需手动
- **turn-pdf-into-word-document**（自动 pass）：版式还原需在 Word 里打开核对
- **unlock-pdf**（自动 pass）：必须用真实加密 PDF + 用户密码；内置样例无法证明解锁路径
- **validate-security-txt**（自动 pass）：依赖 /.well-known/security.txt
- **write-pdf-document-online**（自动 pass）：多页排版需打开下载件
- **writing-prompt-generator**（自动 pass）：可选 AI 扩写未点
- **youtube-thumbnail-size**（自动 pass）：尺寸框与平台规范对照即可；导出图需肉眼

## 自动通过且无额外手动标记

- apple-touch-icon — https://onlinefreetools.org/ja/tools/apple-touch-icon
- base64 — https://onlinefreetools.org/tools/base64
- how-to-calculate-compound-interest — https://onlinefreetools.org/en/tools/how-to-calculate-compound-interest
- how-to-calculate-exponent — https://onlinefreetools.org/en/tools/how-to-calculate-exponent
- how-to-calculate-markup — https://onlinefreetools.org/en/tools/how-to-calculate-markup
- how-to-calculate-mean — https://onlinefreetools.org/en/tools/how-to-calculate-mean
- how-to-calculate-one-rep-max — https://onlinefreetools.org/en/tools/how-to-calculate-one-rep-max
- how-to-calculate-rule-of-72 — https://onlinefreetools.org/en/tools/how-to-calculate-rule-of-72
- how-to-calculate-scientific-notation — https://onlinefreetools.org/en/tools/how-to-calculate-scientific-notation
- indexnow — https://onlinefreetools.org/ar/tools/indexnow
- unix-timestamp — https://onlinefreetools.org/id/tools/unix-timestamp

## 方法与边界

- 浏览器：本机 Chrome + playwright-core；生产域名。
- 未点可选 AI 扩写。
- 未上传用户真实 PDF/图片。
- JSON：`docs/seo/reviews/2026-09-07/05-tool-function-qa-results.json`
