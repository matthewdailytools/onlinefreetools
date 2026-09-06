# 中文工具页自动功能测试报告

- **对照清单**：`docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md`（84 个）
- **测试基址**：http://127.0.0.1:8788（清单指定的本地预览）
- **跑批时间**：2026-09-06 09:21–09:24（本地）
- **复测**：失败项单独开浏览器上下文，等待约 6s（CDN / pdf.js）
- **脚本**：`node scripts/qa/run-zh-pending-tool-qa.mjs`
- **原始 JSON**：`docs/manual-qa/2026-09-06-zh-tool-auto-qa-results.json`

## 总览

| 判定 | 数量 | 含义 |
| --- | ---: | --- |
| 自动通过 | 69 | 中文页 200、H1 可读、How 列表存在、样例无 JS 崩溃 |
| 警告 | 9 | 页面能开，但文案模板或缺 `how_item` |
| 失败（初跑） | 6 | 见下；其中 1 个是导航超时，复测已通过 |
| **确认功能坏** | **5** | 进页样例稳定报错，优先修或手测 |
| 建议手动 | 见 §4 | 文件观感 / 打印 / 密码 / 公网 / 可选 AI |

英文对照页 `/tools/{slug}` 本轮未逐一点击；失败与警告项建议用英文页再点一次样例。

---

## 1. 优先处理：确认功能失败（需手动复核）

`markdown-to-html` 初跑 `page.goto` 45s 超时；**单独重开上下文后 HTTP 200、H1 正常、下载按钮可用**，按偶发导航失败处理，不当作产品缺陷。

其余 5 个在加长等待后**仍然报错**：

### 1.1 convert-html-to-pdf — 样例转换崩溃

- 中文：http://127.0.0.1:8788/zh/tools/convert-html-to-pdf
- 英文：https://onlinefreetools.org/tools/convert-html-to-pdf
- 现象：可见「处理失败，请重试。」；控制台 `Cannot read properties of undefined (reading 'jsPDF')`
- 根因：页面加载 `html2pdf.min.js`（非 bundle）。该文件依赖全局 `jsPDF` / html2canvas，脚本 200 之后 `typeof html2pdf === 'undefined'`，初始化即抛错。
- **需手动**：换成 `html2pdf.bundle.min.js`（或补 jsPDF + html2canvas）后，再用含中文/分页的 HTML 看下载件。

### 1.2 convert-word-document-to-pdf — 同一 html2pdf 缺陷

- 中文：http://127.0.0.1:8788/zh/tools/convert-word-document-to-pdf
- 英文：https://onlinefreetools.org/tools/convert-word-document-to-pdf
- 现象：「无法读取该 .docx。」+ 同样的 `jsPDF` 异常。JSZip / mammoth 已加载，html2pdf 未挂上。
- **需手动**：修 CDN 包之后，用带目录/页眉/表格的真实 .docx 看保真。

### 1.3 unlock-pdf — 进页加密样例无法解锁

- 中文：http://127.0.0.1:8788/zh/tools/unlock-pdf
- 英文：https://onlinefreetools.org/tools/unlock-pdf
- 现象：「解锁失败。请检查文件与密码后重试。」pdf-lib 已加载。
- 根因：`loadSample` 用 `doc.encrypt({ userPassword: 'sample' })` 造加密 PDF。文案承诺密码 `sample` 可自动解锁，但样例路径稳定失败。pdf-lib 对加密支持不完整，样例可能根本没有可用的打开密码。
- **需手动（必做）**：先用「保护 PDF」做出带打开密码的文件，再拿到本页输入密码解锁；确认外部阅读器能打开下载的 `unlocked.pdf`。不要只靠进页样例。

### 1.4 add-digital-signature-to-pdf — 样例盖章失败

- 中文：http://127.0.0.1:8788/zh/tools/add-digital-signature-to-pdf
- 英文：https://onlinefreetools.org/tools/add-digital-signature-to-pdf
- 现象：「处理失败，请重试。」pdf-lib 已在；pdf.js ESM `import()` 本身成功。失败发生在 SHA-256 盖章或预览流水线（无 pageerror）。
- **需手动**：上传普通 PDF，看可见标记位置、哈希是否变化；并核对文案写的是「可见完整性标记」而非 PKI 数字签名。

### 1.5 turn-pdf-into-word-document — 样例转 docx 失败

- 中文：http://127.0.0.1:8788/zh/tools/turn-pdf-into-word-document
- 英文：https://onlinefreetools.org/tools/turn-pdf-into-word-document
- 现象：「处理失败，请重试。」pdf-lib / JSZip 已在；抽文本走 `OftPdfWork.ensurePdfJs()`。
- **需手动**：用带可选中文字的数字 PDF 跑通，再在 Word 里打开 `extracted.docx` 看段落；扫描件应明确失败（无 OCR）。

---

## 2. 警告：文案模板 / 缺 How 步骤（功能多半还能开）

这些页 HTTP 200、H1 可读，但清单第 4、5 条（文案与能力一致、邻近工具能分开）不通过。

| slug | 问题 | 手动时看什么 |
| --- | --- | --- |
| add-text-to-pdf-file | FAQ q2 仍是「需要 OCR 或可选中的 PDF 文本吗？」；叠加文字并不依赖 OCR | 扫描件上叠字是否真能工作；坐标/中文字体 |
| write-pdf-document-online | 同上 OCR FAQ | 下载件中文与分页 |
| convert-html-to-pdf | OCR FAQ + How「选择 PDF 或粘贴内容」（本页是 HTML 文本框） | 见 §1.1 |
| make-pdf-flipbook | OCR FAQ + 通用 How | 翻页动画、触控 |
| combine-files-into-one-pdf | OCR FAQ + 通用 How | PDF+图片页序 |
| open-pdf-in-browser | OCR FAQ + 通用 How | 缩放滚动 |
| print-pdf | OCR FAQ + 通用 How + `err_notext` 键 | 系统打印对话框 |
| compare-two-pdfs | How「选择 PDF 或粘贴内容」（实际是双文件，不能粘贴） | 两份真实 PDF 高亮 |
| images-to-pdf | **没有 `how_item_*`**，只有 how_body | 多图顺序、方向 |
| pdf-to-jpg | **没有 `how_item_*`** | 多页 ZIP vs 单页 JPG |

OCR FAQ 原文撞车（5 个工具同一句「需要 OCR 或可选择的 PDF 文本吗？」）：

`convert-html-to-pdf` · `make-pdf-flipbook` · `combine-files-into-one-pdf` · `open-pdf-in-browser` · `print-pdf`

Rules 第三条「无 OCR：扫描版需其他工作流。」也被印到 **不抽文本** 的 HTML→PDF / 翻页书 / 合并 / 打开 / 打印 上，属于 `a8417be9` 未清干净的模板。

---

## 3. FAQ / Rules 邻近工具不够分得开（抽查即可）

不是功能坏，但是清单第 5 条。手测时读一遍能否讲清和邻页的差别：

- 「会上传服务器吗？」：`edit-pdf-text-online` / `turn-pdf-into-editable-document` / `convert-pdf-to-dwg` / `convert-pdf-to-pdf-a`
- 「上传吗？」：三张 Excel 生成表 + `wrap-formula-with-ifna`
- Prompt 工具 `rules_item_3` 两套近义 AI 免责，多页重复（可接受，但邻页差异应写在 FAQ 里）

---

## 4. 特别注明：必须手动（自动绿也不能算验收完）

按风险分组。本地中文 URL 把主机换成 `https://onlinefreetools.org` 即生产。

### 4.1 高：样例已失败或无法用合成文件证明

见 §1 五个 slug，外加：

- **protect-pdf**：自动能出文件；必须在 Acrobat/预览里验证打开密码
- **print-pdf**：只能证明按钮；最终是系统打印框
- **chatgpt-export-to-markdown**：必须用 ChatGPT 官方导出包
- **batch-checksum-release-files**：必须用真实发版目录
- **fill-out-pdf-form** / **edit-pdf-form-fields** / **make-pdf-fillable** / **create-pdf-form**：必须用带 AcroForm 的真实 PDF，并在外部阅读器点字段
- **sign-pdf-document**：手写画布观感
- **convert-pdf-to-pdf-a** / **check-pdf-a-compliance**：用 veraPDF 或 Acrobat 预检

### 4.2 中：文件观感 / 页序 / 画质

`add-text-to-pdf-file` · `edit-pdf-text-online` · `write-pdf-document-online` · `crop-pdf` · `rotate-pdf` · `organize-pdf` · `merge-pdf` · `split-pdf` · `combine-files-into-one-pdf` · `compress-pdf` · `pdf-watermark` · `pdf-page-numbers` · `images-to-pdf` · `pdf-to-jpg` · `make-pdf-flipbook` · `open-pdf-in-browser` · `batch-watermark-product-photos` · `compare-two-pdfs` · `compare-two-word-documents-for-differences` · `excel-compare-files` · `compare-two-text-files-online`

### 4.3 中：公网依赖（样例域名可能碰巧绿）

`on-page-seo-checker` · `open-graph-preview` · `check-robots-txt-url-blocked` · `check-ssl-certificate-expiration` · `find-and-validate-xml-sitemap` · `spf-dkim-dmarc-checker` · `validate-security-txt`

各测：正常站 + 失败站（无 sitemap / 过期证书 / 无 security.txt / robots 禁止）。

### 4.4 低：可选 AI 扩写本轮故意没点

`android-prompt-builder` · `ios-prompt-builder` · `film-prompt-builder` · `midjourney-prompt-builder` · `product-design-prompt-builder` · `short-drama-prompt-generator` · `sketch-prompt-generator` · `writing-prompt-generator` · `prompt-template-builder`

本地拼装已自动跑过；**AI 扩写**需要 Workers AI / 远程绑定，请人手点一次并确认会整段覆盖输出区。

---

## 5. 自动通过且文本类风险低（可不作为手动优先）

页面 200、样例可跑、无 OCR 模板警告：

`base64` · `csv-json` · `hreflang-generator` · `html-entity` · `json-schema-validator` · `jwt-decoder` · `magnet-link-decoder` · `markdown-to-html`（复测通过）· `meta-serp-preview` · `meta-tag-generator` · `password-generator` · `pdf-to-markdown` · `robots-txt-generator` · `schema-jsonld-generator` · `sitemap-xml-generator` · `utm-builder` · `uuid-generator` · `yaml-json` · `extract-text-from-pdf` · `turn-pdf-into-editable-document` · `json-diff-checker-online` · `text-diff` · `convert-pdf-to-dwg` · `create-budget-spreadsheet` · `create-excel-timesheet` · `create-invoice-spreadsheet` · `excel-formulas-cheat-sheet` · `wrap-formula-with-ifna` · `write-countif-formula-in-excel` · `write-ifs-formula-in-excel` · `write-nested-if-formula-for-excel`

抽查建议：`pdf-to-markdown` / `extract-text-from-pdf` 用一份扫描件确认「无 OCR」错误文案；Excel 公式类复制到 Excel 贴一次。

---

## 6. 方法与边界

对照清单五项：

1. **页面 200 / H1**：Playwright 打开 `/zh/tools/{slug}`，读 `h1` 与 `document.title`
2. **How 有序步骤**：DOM `#how ol li` + i18n `how_item_*`
3. **Load sample / 主按钮**：点样例（多数进页已自动跑）；无结果再点主按钮
4. **文案 vs 能力**：静态扫 OCR FAQ / `err_notext` / 通用 How
5. **邻近 FAQ/Rules**：q2 / rules_item_3 跨 slug 去重

未覆盖：真实用户文件、系统打印、可选 AI、英文页逐点、生产 CDN 与本地差异（jsdelivr 本机 HTTP 200，html2pdf 仍执行失败，故 §1.1 不像是网络问题）。
