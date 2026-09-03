# PDF Keyword Planner — 分场景 slug（修订）

- date: **2026-09-03 22:21**（修订：按用户细分场景拆 URL；取代同日 21:45 粗桶）
- locale / gl: en / us（Google Keyword Planner 导出）
- source: [`Keyword Planner 09-03-2026 at 13-39-01.csv`](./Keyword%20Planner%2009-03-2026%20at%2013-39-01.csv)（**1333** 词；**62** 广告组）
- catalog：已有 16 个 PDF slug（§4）；**新场景一律独立 slug**，不并进「编辑器 / 转换器」壳页
- 规则：[`../../keyword-planner-analysis-rules.md`](../../keyword-planner-analysis-rules.md) + 策略 **§3.3 H**（情境+动作+结果）
- SERP：**无** → 不得标 `long_gap`；未建 work-tasks

> **结论先行**  
> 1）拆页轴 = **用户这一次要办成的事**（对象 / 转换方向 / 约束）。意图能分开，就**各一个 slug**；进页默认即该场景。  
> 2）**不拆**：Free / Online / Easy / Best 前缀、merge≈combine 近义、jpg≈jpeg、品牌/下载/百科。  
> 3）**禁** `pdf-tools` / `online-pdf-editor` / `pdf-converter` 万能页——这类头词只做 FAQ 分发到下表各场景。  
> 4）已上线工具：**不改 path**；H1 改成场景句。未实现场景：**defer**（须实现规格 + 场景 slug），待 SERP 后再钉进攻词。  
> 5）本批从 Planner 抽出 **24 条可独立作业**（9 条已有 URL absorb，**15 条须新 slug**）。

---

## 0. 本批拆页规则（用户约束 + §3.3 H）

| 可拆（独立 slug） | 不可拆（doorway） |
| --- | --- |
| 对象不同：PDF↔PDF vs 图↔PDF vs Word↔PDF vs HTML↔PDF vs 混合文件 | 只换 Free / Online / Easy / Tool |
| 方向不同：Word→PDF ≠ PDF→Word；JPG→PDF ≠ PDF→JPG | merge pdf ≈ combine pdf ≈ pdf merger |
| 约束不同：填已有表 ≠ 做成可填 ≠ 从零建表；改已有字 ≠ 盖新字；手写签 ≠ 证书签 | jpg ≈ jpeg（同一输出） |
| 生成 ≠ 校验：转 PDF/A ≠ 用 veraPDF **检查** PDF/A | 品牌名 / 竞品域名当第二 URL |
| 已有页办不成这件事（控件不同） | 品类头词再铺一页（editor / converter / tools） |

对照 text-compare（`.txt` / Word / JSON / Excel 各一 URL）与 bulk 转换（按**输出格式**拆）：用户搜的是**结果文件或这一次动作**，不是先打开万能台再选。

---

## 1. 量级分桶（只筛选）

| 带 | n | 角色 |
| --- | --- | --- |
| 100k+ | 8 | `word to pdf`、`merge pdf`、`combine pdf`、`pdf jpg`、`pdf merger`、`i love pdf`、`pdf24`、`adobe` — 头词禁进攻 H1 |
| 10k–100k | 24 | editor / converter / filler / maker 头词 |
| 1k–10k | 71 | 中词 + 品牌 |
| 100–1k | 288 | 场景长尾主观察 |
| 10–100 / 0–10 | 811+131 | 微尾；场景证据仍收录 |

约 **62%** 品牌/下载/官网 → §6 drop。可产品化词约 **413**；再去掉拼写品牌残渣后，下表只收**有作业句**的搜法。

---

## 2. 使用场景表（一意图一 slug）

每行：情境 + 动作 + 结果。**独立 URL = 是** 表示须单独 slug（已上线则 absorb 该 path；未上线则 defer 新 slug）。

### 2.1 已上线 — absorb（改 H1/文案，不新建近义 URL）

| ID | 使用场景（情境→动作→结果） | Planner 证据（量级） | 作业类型 | 独立 URL | slug / 建议 H1 | verdict |
| --- | --- | --- | --- | --- | --- | --- |
| **A1** | 多份 **PDF** → 合成一份 | `merge pdf`（10万+）、`combine pdf`、`pdf merger`、`merge pdf documents into one`、`combine all pdf into one`、`can you combine pdf files` | PDF+PDF 合并 | 已有 | `merge-pdf` / **Combine PDF files into one**（禁 H1=Merge PDF） | absorb |
| **A2** | 一份 PDF → 按页/范围拆出 | `split my pdf`（10–100） | 拆分/抽页 | 已有 | `split-pdf` / Split my PDF | absorb |
| **A3** | 单文件缩小体积 | `reduce pdf`（1k–10k）、`compress my pdf` | 压缩 | 已有 | `compress-pdf` / Reduce PDF file size | absorb |
| **A4** | 多份 PDF 过邮件附件闸 | （本批无直词；词根/产品已立） | 批量压缩→ZIP | 已有 | `batch-compress-pdfs-for-email` | absorb |
| **A5** | PDF **页** → **JPG** | `convert pdf jpg`（1万+）、`pdf jpg`（10万+）、`convert pdf jpeg` | PDF→光栅 | 已有 | `pdf-to-jpg` / Convert PDF pages to JPG | absorb |
| **A6** | **照片/JPG** → 一份 PDF | `turn jpg into pdf`（100–1k） | 图→PDF | 已有 | `images-to-pdf` / Turn JPG into PDF | absorb |
| **A7** | 已知密码打开自有 PDF | `unlock my pdf`（10–100） | 解密（非破解） | 已有 | `unlock-pdf` / Unlock my PDF | absorb |
| **A8** | 给 PDF 加密码 | `pdf protection`、`create secure pdf` | 加密 | 已有 | `protect-pdf` / Password-protect a PDF | absorb |
| **A9** | 重排/删页 | `pdf pages`（弱） | 页操作 | 已有 | `organize-pdf`（本批证据弱） | absorb |

本批 **无搜法**、保持现 slug（不新造近义页）：`crop-pdf`、`rotate-pdf`、`pdf-watermark`、`pdf-page-numbers`、`pdf-to-markdown`、`pdf-page-to-image-sizes`。

### 2.2 未实现 — 须独立 slug（defer；待 SERP 钉进攻词）

| ID | 使用场景（情境→动作→结果） | Planner 证据（量级） | 作业类型 | 为何不并进邻页 | 建议 slug | 建议 H1（场景句，待 SERP） | 主控件规格（摘要） |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **N1** | 图 / Word / PDF **混在一起** → 一份 PDF | `combine files into one pdf`（100–1k）、`create pdf multiple files`、`create pdf files` | 混合文件合成 | ≠ A1（只收 PDF）；≠ A6（只收图） | `combine-files-into-one-pdf` | Combine files into one PDF | 多文件队列；类型校验；页序 |
| **N2** | 已有 **.docx** → 交出 PDF | `word to pdf`（10万+）、`convert word pdf`、`convert docs into pdf`、`turn document into pdf`、`doc into pdf`、`convert document pdf`、`save document as pdf`、`make pdf document` | Office→PDF | ≠ 在浏览器里从零写（N14）；≠ 图转 PDF | `convert-word-document-to-pdf` | Convert Word document to PDF | 上传 docx→PDF；版式/字体边界 |
| **N3** | 已有 PDF → 可编辑 **Word** | `turn pdf into word document`（100–1k）、`convert pdf into word document`、`change pdf into word`、`pdf into word document`、`save pdf file as word doc`、`online pdf converter word`、`free convert pdf word`、`make pdf into word document` | PDF→DOCX | ≠ N2 逆向；≠ 只改 PDF 内文字（N5） | `turn-pdf-into-word-document` | Turn PDF into Word document | 抽文本/版式→docx；扫描件 OCR 边界 |
| **N4** | HTML / 网页 → PDF | `convert html pdf`（100–1k） | HTML→PDF | ≠ Word 管道 | `convert-html-to-pdf` | Convert HTML to PDF | 贴 HTML 或 URL→PDF |
| **N5** | 改 PDF **里已经有的字** | `edit pdf text`（1k–10k）、`edit pdf text online`、`edit pdf text free`、`change text pdf`、`edit text pdf document` | 改文本层 | ≠ 盖新字（N6）；≠ 填空（N8）；≠ 转 Word（N3） | `edit-pdf-text-online` | Edit PDF text online | 点选文本框改字；扫描件无字层失败 |
| **N6** | 在页面上 **新加一段字** | `add text pdf file`（0–10） | 叠加文本 | ≠ 改已有字；≠ 水印（重复戳） | `add-text-to-pdf-file` | Add text to a PDF file | 点页落字、字号/位置；一次内容块 |
| **N7** | 改 **表单域本身**（增删题、改类型） | `edit pdf form`（100–1k） | 编表单结构 | ≠ 往空里填值（N8）；≠ 做成可填（N9） | `edit-pdf-form-fields` | Edit PDF form fields | AcroForm 域列表编辑 |
| **N8** | 打开已有表单 → **填完交出** | `fill pdf form`、`fill out pdf`、`fill pdf`、`fill pdf documents`、`pdf filler`（1万+）、`free pdf filler`、`pdf filler online`、`fillable pdf document` | 填值 | ≠ 做可填域；≠ 签字（N11/N12） | `fill-out-pdf-form` | Fill out a PDF form | 识别域、填、下载；无域则失败并链 N9 |
| **N9** | 静态 PDF → **加上可填域** | `make pdf fillable`（100–1k）、`create fillable pdf`、`create fillable pdf forms free` | 加域 | ≠ 从零画表（N10）；≠ 填现成表 | `make-pdf-fillable` | Make a PDF fillable | 框选加 text/checkbox 域 |
| **N10** | 空白页 → **做出一份 PDF 表单** | `create pdf form`、`create pdf form online`、`pdf form creator`（100–1k） | 新建表单 | ≠ 给已有 PDF 加域 | `create-pdf-form` | Create a PDF form | 空白画布+域控件→PDF |
| **N11** | 合同上 **画/打字签名** | `sign documents pdf`（100–1k）、`do pdf signature` | 外观签名 | ≠ 证书数字签（N12）；≠ 填表 | `sign-pdf-document` | Sign a PDF document | 手写/打字签、拖到签名线 |
| **N12** | 用证书做 **数字签名** | `digital signature pdf`（100–1k） | PKI 签名 | 控件/法律含义与 N11 不同 | `add-digital-signature-to-pdf` | Add a digital signature to a PDF | 证书选择、签名外观、验证信息 |
| **N13** | 浏览器里 **打开看完就走**（不装 Reader） | `online pdf viewer`（1k–10k）、`free pdf viewer`、`pdf file viewer`、`view pdfs`、`online open pdf`、`pdf opener`、`open files in pdf` | 预览 | ≠ 编辑；桌面 Reader 安装 = drop | `open-pdf-in-browser` | Open a PDF in the browser | 本地渲染翻页；无编辑控件 |
| **N14** | 没有 Word 文件 → **在页上写完再下载 PDF** | `write pdf document`、`create pdf document online`、`create free pdf online`、`creating pdf documents`、`pdf document maker` | 在线撰写 | ≠ 上传 docx（N2）；≠ 拼图（A6） | `write-pdf-document-online` | Write a PDF document online | 富文本/纯文本→导出 PDF |
| **N15** | 扁平/扫描 PDF → **变成可改的文档** | `turn pdf into editable document`（100–1k）、`create editable pdf`、`do i make pdf editable` | 解锁编辑（常 OCR） | ≠ 已有字层的 N5；≠ 转 Word 文件的 N3（本页留在 PDF 内编辑） | `turn-pdf-into-editable-document` | Turn PDF into an editable document | OCR/字层重建；失败则链 N3 |
| **N16** | 转成 **PDF/A** 归档 | `pdf to pdf a online`（10–100） | 格式约束转换 | ≠ 普通压缩；≠ 校验（N17） | `convert-pdf-to-pdf-a` | Convert PDF to PDF/A | 输出 PDF/A；声明级次 |
| **N17** | **检查** 是否符合 PDF/A（veraPDF 意图） | `pdf check`、`verapdf`（100–1k） | 校验 | **生成 ≠ 校验**；禁并进 N16 | `check-pdf-a-compliance` | Check PDF/A compliance | 上传→通过/失败规则表 |
| **N18** | 两份 PDF **看出改了什么** | `compare pdf pdf`（0–10） | 对照 | ≠ 文本 diff 页；对象是 PDF | `compare-two-pdfs` | Compare two PDFs | 两文件；页/文本差 |
| **N19** | 只要 **抽出纯文本**（不当 Word） | `pdf text`（1k–10k，歧义） | 抽文本 | ≠ 改字；≠ 转 Word；≠ Markdown 页 | `extract-text-from-pdf` | Extract text from a PDF | 复制/下载 .txt；双栏预览 |
| **N20** | 做成 **翻页书** | `pdf flipbook`（100–1k） | 展示转换 | ≠ 普通 viewer | `make-pdf-flipbook` | Make a PDF flipbook | 页→翻页预览/导出 |
| **N21** | 从浏览器 **打印** 该 PDF | `pdf printing`（100–1k） | 打印 | IG 薄；仍单列 | `print-pdf` | Print a PDF | 打开即打印对话框/预览 |
| **N22** | PDF ↔ **DWG** | `any pdf dwg converter`（10–100） | CAD | 与办公转换控件完全不同 | `convert-pdf-to-dwg` | Convert PDF to DWG | 可行性待评估（WASM/服务）；Y 低 |

**N22** 浏览器落地不确定 → 词池 `feasibility` 标风险，仍保留独立 slug，避免并进万能 converter。

---

## 3. 每 URL 仅一条主打

| slug | 主打关键词 | 次词（同页 FAQ/芯片） | 禁止当本页 H1 |
| --- | --- | --- | --- |
| `merge-pdf` | combine pdf files into one | merge pdf、pdf merger、combine all pdf | Merge PDF（头词进攻） |
| `split-pdf` | split my pdf | extract pages（词根） | Split PDF 光杆硬刚（可选） |
| `compress-pdf` | reduce pdf | compress my pdf | 链 A4，不冒充批量邮件 |
| `pdf-to-jpg` | convert pdf to jpg | pdf jpg、convert pdf jpeg | Convert PDF to JPG 光杆 |
| `images-to-pdf` | turn jpg into pdf | make pdf files（仅照片意图） | Images to PDF 工程名可留副 |
| `unlock-pdf` | unlock my pdf | — | 破解/未知密码 |
| `protect-pdf` | password-protect a PDF | pdf protection、create secure pdf | — |
| `combine-files-into-one-pdf` | combine files into one pdf | create pdf multiple files | merge pdf（那是 A1） |
| `convert-word-document-to-pdf` | convert Word document to PDF | save document as pdf、doc into pdf、word to pdf（FAQ 也叫） | Word to PDF 头词进攻 |
| `turn-pdf-into-word-document` | turn PDF into Word document | change pdf into word、pdf word free（方向歧义时 FAQ 双链） | PDF to Word 头词进攻 |
| `convert-html-to-pdf` | convert HTML to PDF | — | — |
| `edit-pdf-text-online` | edit PDF text online | change text pdf、edit pdf text | online pdf editor |
| `add-text-to-pdf-file` | add text to a PDF file | — | watermark 页 |
| `edit-pdf-form-fields` | edit PDF form fields | edit pdf form | fill out |
| `fill-out-pdf-form` | fill out a PDF form | fill pdf、pdf filler（FAQ 也叫） | pdf filler 品牌/头词 H1 |
| `make-pdf-fillable` | make a PDF fillable | create fillable pdf | create pdf form（N10） |
| `create-pdf-form` | create a PDF form | pdf form creator | make fillable（N9） |
| `sign-pdf-document` | sign a PDF document | sign documents pdf | digital signature（N12） |
| `add-digital-signature-to-pdf` | add a digital signature to a PDF | digital signature pdf | 手写签（N11） |
| `open-pdf-in-browser` | open a PDF in the browser | online pdf viewer、pdf opener | Adobe Reader 下载 |
| `write-pdf-document-online` | write a PDF document online | create pdf document online | pdf maker / creator 头词 |
| `turn-pdf-into-editable-document` | turn PDF into an editable document | create editable pdf | edit pdf text（已有字层走 N5） |
| `convert-pdf-to-pdf-a` | convert PDF to PDF/A | — | convert pdf to pdf（歧义，FAQ） |
| `check-pdf-a-compliance` | check PDF/A compliance | verapdf、pdf check | 转换页 |
| `compare-two-pdfs` | compare two PDFs | compare pdf pdf | text-diff |
| `extract-text-from-pdf` | extract text from a PDF | pdf text（抽字意图） | edit / Word |
| `make-pdf-flipbook` | make a PDF flipbook | pdf flipbook | viewer |
| `print-pdf` | print a PDF | pdf printing | — |
| `convert-pdf-to-dwg` | convert PDF to DWG | any pdf dwg converter | 办公转换页 |

---

## 4. 头词 → 只分发，不立项壳页

| 查询 | 量级 | 处理 |
| --- | --- | --- |
| `online pdf editor` / `free pdf editor` / `editor pdf` / `editor de pdf` / `pdf editor tool` / `edit pdf file online` / `edit pdf document online` | 1万+ / 100–1k | **FAQ 分发**：改字→N5；盖字→N6；填表→N8；可填→N9；签字→N11。**不**建 `online-pdf-editor` |
| `free pdf converter` / `converter pdf` / `pdf conversion` / `any file pdf converter online` | 1万+ / 0–10 | **FAQ 分发**：按方向到 A5/A6/N2/N3/N4。**不**建万能 converter |
| `pdf maker` / `pdf creator` / `pdf generator` / `pdf writer` / `make pdf` | 1万+ / 1k | **FAQ 分发**：写文档→N14；Word→N2；拼图→A6。**不**建 maker 壳 |
| `pdf tools` / `pdf software` / `pdf online` / `pdf files` | 头词 | 主题/首页工具链；禁 `/tools/pdf-tools` |
| `pdf word free`（1万+） | 方向不明 | FAQ **双链** N2 + N3 |
| `convert pdf to pdf` | 1k–10k | FAQ：压缩 A3 / PDF/A N16 |
| `i love pdf` / `pdf24` / `adobe` | 品牌 | drop |

`title_gap_fallback`：各新 slug 待 SERP 后再选是否用上表 H1 或更长场景句。本批不预设 G 命中。

---

## 5. 关键词归属（作业词 → 唯一落点）

广告组不是拆页轴。下表只列**有作业**的代表词；品牌/下载见 §6。

| 代表词 | 落点 slug | 位置 |
| --- | --- | --- |
| merge pdf / combine pdf / pdf merger / combine all pdf into one / can you combine pdf files | `merge-pdf` | H1 场景句 + FAQ 近义 |
| combine files into one pdf / create pdf multiple files | `combine-files-into-one-pdf` | 主打 |
| split my pdf | `split-pdf` | 主打 |
| reduce pdf / compress my pdf | `compress-pdf` | 主打 / FAQ |
| convert pdf jpg / pdf jpg / convert pdf jpeg | `pdf-to-jpg` | 主打 / 次词 |
| turn jpg into pdf | `images-to-pdf` | 主打 |
| word to pdf / convert word pdf / save document as pdf / doc into pdf / turn document into pdf / convert docs into pdf | `convert-word-document-to-pdf` | 主打；word to pdf 仅 FAQ「也叫」 |
| turn pdf into word document / convert pdf into word… / change pdf into word / save pdf file as word doc / online pdf converter word | `turn-pdf-into-word-document` | 主打 |
| convert html pdf | `convert-html-to-pdf` | 主打 |
| edit pdf text / edit pdf text online / change text pdf | `edit-pdf-text-online` | 主打 |
| add text pdf file | `add-text-to-pdf-file` | 主打 |
| edit pdf form | `edit-pdf-form-fields` | 主打 |
| fill pdf form / fill out pdf / fill pdf / pdf filler / free pdf filler | `fill-out-pdf-form` | 主打；filler 头词 FAQ |
| make pdf fillable / create fillable pdf | `make-pdf-fillable` | 主打 |
| create pdf form / pdf form creator | `create-pdf-form` | 主打 |
| sign documents pdf / do pdf signature | `sign-pdf-document` | 主打 |
| digital signature pdf | `add-digital-signature-to-pdf` | 主打 |
| online pdf viewer / pdf opener / view pdfs / online open pdf | `open-pdf-in-browser` | 主打 |
| write pdf document / create pdf document online | `write-pdf-document-online` | 主打 |
| turn pdf into editable document / create editable pdf | `turn-pdf-into-editable-document` | 主打 |
| pdf to pdf a online | `convert-pdf-to-pdf-a` | 主打 |
| pdf check / verapdf | `check-pdf-a-compliance` | 主打 |
| compare pdf pdf | `compare-two-pdfs` | 主打 |
| pdf text（抽字） | `extract-text-from-pdf` | 主打；改字意图走 N5 FAQ |
| pdf flipbook | `make-pdf-flipbook` | 主打 |
| pdf printing | `print-pdf` | 主打 |
| any pdf dwg converter | `convert-pdf-to-dwg` | 主打 |
| unlock my pdf | `unlock-pdf` | 主打 |
| pdf protection / create secure pdf | `protect-pdf` | FAQ / 主打 |
| convert and edit pdf / open edit pdf | 分发 | 先转再编：链 N3 或 N5，不单独立页 |
| pdf viewer and editor | 分发 | N13 + N5 |

---

## 6. 先剔除（drop）

| 类型 | 例 | 处理 |
| --- | --- | --- |
| 品牌/竞品 | adobe acrobat、foxit、smallpdf、ilove pdf、pdf24、soda、nuance | 无产品覆盖 |
| 下载/安装 | download / installer / windows 10 / portable / getintopc | 非浏览器作业 |
| best 评测 | best pdf editor | 不立项 |
| 百科 | what does pdf stand for、portable document format | 主题 FAQ 一句 |
| 电子书/样例 | books pdf free、sample pdf files | drop |
| 桌面 Reader | reader、free pdf reader、acrobat reader（安装意图） | drop；在线打开走 N13 |
| 拼写噪声 | adobde、onlline、pdf ediotr | drop |

---

## 7. SERP 复核（待采）

未采不得 `long_gap`。建议按**新 slug 场景句**抓（§3.3 I），不要抓头词：

1. `combine files into one pdf`
2. `convert word document to pdf`
3. `turn pdf into word document`
4. `edit pdf text online`
5. `fill out a pdf form`
6. `make a pdf fillable`
7. `create a pdf form`
8. `sign a pdf document`
9. `add a digital signature to a pdf`
10. `open a pdf in the browser`
11. `write a pdf document online`
12. `turn pdf into an editable document`
13. `convert html to pdf`
14. `convert pdf to pdf/a`
15. `check pdf/a compliance`

---

## 8. 对已有 slug 的动作

| slug | 动作 |
| --- | --- |
| `merge-pdf` | H1 → **Combine PDF files into one**；FAQ 点明「只合并 PDF」；混文件链 N1 |
| `compress-pdf` | 主打 reduce pdf；内链邮件批量页 |
| `pdf-to-jpg` | 主打 convert PDF pages to JPG；jpeg 作次词 |
| `images-to-pdf` | 主打 Turn JPG into PDF；混文件链 N1 |
| `split-pdf` / `unlock-pdf` / `protect-pdf` / `organize-pdf` | Planner 代表词进 FAQ |
| 其余已有 PDF | 本批无新搜法；保持 |

---

## 9. 周产能 / 词池

| 项 | 结论 |
| --- | --- |
| 周 build | **0**（无 SERP） |
| 已有 absorb | 9 条（A1–A9） |
| 新 slug defer | **15 条优先** N1–N15（办公/编辑/填签）；N16–N22 产能后排 |
| work-tasks | **禁止**本分析自动创建 |

---

## 10. 验收自检

```text
[x] 广告组未当拆页轴
[x] 对象/方向/约束能分开的意图各有独立 slug
[x] 近义（merge/combine、jpg/jpeg、free/online）未拆第二 URL
[x] 无 online-pdf-editor / pdf-converter / pdf-tools 壳 slug
[x] absorb 仅已实现同意图；填表/签字/改字/Word 双向未标 absorb
[x] 生成（转 PDF/A）≠ 校验（check PDF/A）
[x] 无 SERP → 无 long_gap
[x] 词池已按场景行更新；未建 work-tasks
```
