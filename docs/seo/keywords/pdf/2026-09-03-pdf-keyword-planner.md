# PDF Keyword Planner — 归类与选词

- date: **2026-09-03 21:45**
- locale / gl: en / us（Google Keyword Planner 导出）
- source: [`Keyword Planner 09-03-2026 at 13-39-01.csv`](./Keyword%20Planner%2009-03-2026%20at%2013-39-01.csv)（**1333** 词；**62** 广告组）
- catalog：**已有 16 个 PDF slug**（见 §3.2）；**无** PDF 编辑器、Word↔PDF、在线阅读器
- 规则：[`../../keyword-planner-analysis-rules.md`](../../keyword-planner-analysis-rules.md) + 长尾策略 §3.3 / G / H
- SERP：**无**（本批未跑 Bing/Google SERP；不得标 `long_gap` 周进攻）

> **结论先行**  
> 1）本批 Planner 种子**高度 Adobe/Acrobat 品牌偏置**（约 **62%** 词含品牌/下载/安装/官网导航）；可产品化的通用 PDF **作业词**集中在 `Pdf` / `Convert Pdf` / `Edit Pdf` / `Create Pdf` 等组。  
> 2）**已实现且可 absorb**：合并/拆分/压缩/旋转/裁剪/排序/水印/加解密/页码/图↔PDF/JPG/MD/页尺寸/邮件批量压缩 —— 对应 catalog 16 slug；头词（merge/combine/reduce/pdf jpg 等）**禁作进攻唯一 H1**，只做次词/FAQ/Use case 收割。  
> 3）**未实现、必须留覆盖计划**（`defer`/`build`，待 SERP + 场景 H1）：**PDF 文本/表单编辑**、**填写/签名**、**Word↔PDF**、**HTML→PDF**、**可填写表单创建**；头词簇（online pdf editor / word to pdf / pdf filler）**不得硬刚 H1**。  
> 4）**drop**：品牌导航、下载安装、best 评测、百科 what-is、电子书/sample 下载、竞品域名（ilovepdf/smallpdf/pdf24…）。  
> 5）**未 SERP → 周 build 名额 0**；未建 work-tasks。

---

## 0. 量级分桶（只筛选）

| 带 | n | 角色 |
| --- | --- | --- |
| **100k+** | 8 | 头词种子：`i love pdf`（品牌）、`word to pdf`、`merge pdf`、`combine pdf`、`pdf jpg`、`pdf merger`、`pdf24`、`adobe` — **禁进攻 H1** |
| **10k–100k** | 24 | 编辑器/转换/阅读器头词：`online pdf editor`、`free pdf editor`、`convert pdf jpg`、`pdf tools`… |
| **1k–10k** | 71 | 中词：各作业长尾 + 部分品牌 |
| **100–1k** | 288 | 长尾主观察带 |
| **10–100** | 811 | 微中尾（本批主体） |
| **0–10** | 131 | 微尾 / 噪声 |

广告组 Top5：`Keyword Like: adobepdf`（145）、`Pdf`（139）、`Adobe Acrobat`（90）、`Adobe Reader`（67）、`Adobe Acrobat Reader`（45）—— **品牌/拼写变体占多数**，不是拆 URL 轴。

---

## 1. 先剔除（drop）

| 类型 | 规模（约） | 例 | 处理 |
| --- | --- | --- | --- |
| **品牌/竞品导航** | ~500+ | `adobe acrobat`、`foxit`、`smallpdf`、`ilovepdf`、`pdf24`、`pdffiller`、`soda pdf`、`nuance pdf` | **drop**（无产品覆盖） |
| **下载/安装/桌面软件** | ~300 | `download adobe acrobat`、`pdf software download`、`installer`、`windows 10`、`portable`、`getintopc` | **drop**（非浏览器工具意图） |
| **best / 评测壳** | ~10 | `best pdf editor`、`best pdf software` | **drop** 作主打 |
| **百科 / what-is** | ~15 | `what does pdf stand for`、`what is pdf meaning`、`portable document format` | FAQ 一句；**禁独立 URL** |
| **电子书/样例下载** | ~10 | `books pdf free`、`sample pdf files`、`free books download pdf` | **drop** |
| **官网/URL 导航** | ~30 | `www adobe com`、`https www adobe com acrobat` | **drop** |
| **拼写噪声** | ~100 | `adobde acrobat`、`onlline pdf`、`pdf ediotr` | **drop** 或并入近义 absorb |

---

## 2. 用户实际任务 → 作业类型（全覆盖）

拆页看**主控件 / 对象 / 工作流**；Free/Online/Adobe 前缀不是拆页理由。

| 场景 ID | 使用场景（情境→动作→结果） | Planner 证据（量级） | 主控件已有？ | 主打？ | 覆盖落点 | verdict |
| --- | --- | --- | --- | --- | --- | --- |
| **S1 合并** | 多 PDF → 一个文件 | `merge pdf`（10万+）、`combine pdf`、`combine files into one pdf`（100–1k） | **是** `merge-pdf` | 否（头词） | absorb → title/desc/FAQ/usecase；H1 保持场景句非 merge 头词 | **absorb** |
| **S2 拆分** | 大 PDF → 按页/范围拆出 | `split my pdf`（100–1k） | **是** `split-pdf` | 场景可作次主打 | absorb | **absorb** |
| **S3 压缩** | 缩小体积 / 邮件附件 | `reduce pdf`（1k–10k）、`compress my pdf` | **是** `compress-pdf`；邮件场景 `batch-compress-pdfs-for-email` | 否 | absorb 两 slug 互链芯片 | **absorb** |
| **S4 PDF→图片** | PDF 页 → JPG/PNG | `convert pdf jpg`（1万+）、`pdf jpg`（10万+）、`convert pdf jpeg` | **是** `pdf-to-jpg` | 否 | absorb；页尺寸 FAQ → `pdf-page-to-image-sizes` | **absorb** |
| **S5 图片→PDF** | 照片/JPG → 一个 PDF | `turn jpg into pdf`、`create pdf files` | **是** `images-to-pdf` | 否 | absorb | **absorb** |
| **S6 旋转** | 纠正页面方向 | （Planner 少；词根表有 rotate） | **是** `rotate-pdf` | — | absorb 次词 | **absorb** |
| **S7 裁剪** | 去白边/裁页 | — | **是** `crop-pdf` | — | absorb | **absorb** |
| **S8 排序/删页** | 重排、删页、插入 | `organize pdf` 类（词根） | **是** `organize-pdf` | — | absorb | **absorb** |
| **S9 水印** | 加文字/图水印 | — | **是** `pdf-watermark` | — | absorb | **absorb** |
| **S10 加密** | 设密码保护 | `pdf protection` | **是** `protect-pdf` | — | absorb | **absorb** |
| **S11 解密** | 去密码（自有文件） | `unlock my pdf` | **是** `unlock-pdf` | 场景可作主打候选 | absorb；YMYL 免责声明 | **absorb** |
| **S12 页码** | 加页眉页码 | — | **是** `pdf-page-numbers` | — | absorb | **absorb** |
| **S13 PDF→Markdown** | 抽文本/结构 → MD | — | **是** `pdf-to-markdown` | 可作主打 | absorb | **absorb** |
| **S14 页尺寸/导出像素** | 已知 DPI 导出宽高 | — | **是** `pdf-page-to-image-sizes` | — | absorb | **absorb** |
| **S15 编辑文本/对象** | 改 PDF 内文字、插图 | `edit pdf text`（1k–10k）、`online pdf editor`（1万+）、`edit pdf document online` | **否** | 待 SERP 钉场景 H1 | **须实现**；候选 slug `edit-pdf-text-online` 或合并进「PDF 表单编辑」页 — 控件=画布/文本层编辑 | **defer** |
| **S16 填表/签名** | 填 AcroForm、签名字段 | `fill pdf`、`pdf filler`（1万+）、`sign documents pdf`、`fill pdf form`、`make pdf fillable` | **否**（≠ S15 但可同页多模式） | 待 SERP | **须实现**；候选 `fill-pdf-form-online` / `sign-pdf-online`；**生成≠校验** | **defer** |
| **S17 Word→PDF** | Word 稿 → PDF | `word to pdf`（10万+）、`convert word pdf`（1万+）、`make pdf document` | **否** | 否（头词） | **须实现**；候选 `word-to-pdf-online`；H1 用场景句如「Convert Word document to PDF before email」 | **defer** |
| **S18 PDF→Word** | PDF → 可编辑 Word | `turn pdf into word document`、`pdf into word`、`change pdf into word` | **否** | 待 SERP | **须实现**；候选 `pdf-to-word-online`；OCR/版式边界写 IG | **defer** |
| **S19 HTML→PDF** | 网页/HTML → PDF | `convert html pdf`（100–1k） | **否** | — | defer；与 Word 链不同控件 | **defer** |
| **S20 创建可填写表单** | 空白 PDF + 表单域 | `create fillable pdf`、`create pdf form` | **否** | — | defer；可能与 S16 同页 | **defer** |
| **S21 在线阅读/打开** | 浏览器里看 PDF | `online pdf viewer`、`pdf reader`、`read pdf` | **否**（轻量 viewer） | 否 | 桌面 Reader 安装意图多 → **FAQ 划界**；若做则独立 viewer 控件，不与 editor 混 | **defer** |
| **S22 泛转换头词** | 「pdf converter」壳 | `free pdf converter`、`converter pdf` | 部分（jpg/md/图片） | 否 | FAQ 链到各转换 slug；**禁**万能 converter 单页 | **absorb**（分发） |
| **S23 PDF/A 等格式** | PDF → PDF/A | `pdf to pdf a online` | **否** | — | 低优先 defer | **defer** |

### 2.1 生成 ≠ 校验

本批无「PDF 校验/合规检查器」搜法；`pdf check`（10–100）量级过低，**暂不立项**；若未来出现 veraPDF 类搜法再单独立页。

---

## 3. 每 URL 主打定位（已实现 slug）

| slug | 现 H1 方向 | 本批主打吸收词（禁改 H1 为头词） | 次词落点 |
| --- | --- | --- | --- |
| `merge-pdf` | 合并场景句 | combine pdf / merge pdf / combine files into one pdf | desc、FAQ、Use case |
| `split-pdf` | 拆分场景句 | split my pdf | 同上 |
| `compress-pdf` | 压缩场景句 | reduce pdf / compress my pdf | 链向 batch 邮件场景 |
| `batch-compress-pdfs-for-email` | 邮件附件批量压缩 | （Planner 无直词；从 compress 簇芯片） | — |
| `pdf-to-jpg` | PDF 页转 JPG | convert pdf jpg / pdf jpg | FAQ 画质/DPI |
| `images-to-pdf` | 图片合成 PDF | turn jpg into pdf / create pdf files | — |
| `rotate-pdf` / `crop-pdf` / `organize-pdf` | 各场景句 | 词根表长尾 | — |
| `pdf-watermark` / `protect-pdf` / `unlock-pdf` | 各场景句 | pdf protection / unlock my pdf | unlock YMYL |
| `pdf-page-numbers` / `pdf-to-markdown` / `pdf-page-to-image-sizes` | 各场景句 | 词根表 | — |

**未实现簇**（§2 S15–S21）：待 SERP 后选**一条场景长尾**作 slug≈H1；头词仅 FAQ「也叫 …」。

---

## 4. 头词 → 收割 + §3.3 G

| 查询 | 暂估 tier | 动作 |
| --- | --- | --- |
| `merge pdf` / `combine pdf` | **head** | absorb → `merge-pdf`；禁 H1=Merge PDF |
| `word to pdf` | **head** | defer build；H1 用场景句；**未 SERP** |
| `online pdf editor` / `free pdf editor` | **head** | defer；禁止 editor 头词 H1 |
| `convert pdf jpg` / `pdf jpg` | **head** | absorb → `pdf-to-jpg` |
| `pdf filler` / `fill pdf` | **head** | defer build |
| `i love pdf` / `smallpdf` / `pdf24` | 品牌 | **drop** |
| `reduce pdf` | **head** | absorb → `compress-pdf` |

**title_gap_fallback**：待 SERP 后对 S15–S18 各跑 G；本批**不预设** chosen 长尾。

---

## 5. 意图聚类 → slug / H1（权威表）

| 场景 | 主选长尾（代表） | slug | H1（进攻时） | verdict | tier（暂估） |
| --- | --- | --- | --- | --- | --- |
| S1 合并 | combine files into one pdf | `merge-pdf` | （保持现页场景 H1） | absorb | head |
| S2 拆分 | split my pdf | `split-pdf` | （保持） | absorb | mid_covered |
| S3 压缩 | reduce pdf | `compress-pdf` | （保持） | absorb | head |
| S4 PDF→JPG | convert pdf to jpg | `pdf-to-jpg` | （保持） | absorb | head |
| S5 图→PDF | turn jpg into pdf | `images-to-pdf` | （保持） | absorb | mid_covered |
| S10–S14 | unlock / watermark / md… | 各已有 slug | （保持） | absorb | mid |
| S15 编辑 | edit pdf text online | （未建） | 待 SERP | **defer** | head |
| S16 填签 | fill pdf form online | （未建） | 待 SERP | **defer** | head |
| S17 Word→PDF | convert word document to pdf | （未建） | 待 SERP | **defer** | head |
| S18 PDF→Word | turn pdf into word document | （未建） | 待 SERP | **defer** | head |
| S19 HTML→PDF | convert html to pdf | （未建） | 待 SERP | **defer** | mid_covered |
| S21 阅读器 | online pdf viewer | （未建） | 待 SERP | **defer** | head |
| 品牌/下载/百科 | adobe acrobat free… | — | — | **drop** | — |

---

## 6. 关键词归属（广告组 → 落点）

| 广告组 | 处理 | 落点 |
| --- | --- | --- |
| Adobe / Acrobat / Reader / DC / Download / Official / Free Download / Window 10 | **drop**（整组） | — |
| Foxit / Smallpdf / Keyword Like: adobepdf（品牌域） | **drop** | — |
| **Pdf** | 作业聚类 | 见 §5 各 slug absorb/defer |
| **Pdf Editor** / **Free Pdf Editor** / **Edit Pdf** | S15/S16 | defer（未实现） |
| **Convert Pdf** / **Convert Pdf Word** / **Pdf Into Word** | S4/S17/S18 | 部分 absorb + defer |
| **Create Pdf** | S5/S16/S20 | 部分 absorb + defer |
| **Pdf File** / **Pdf Document** | 混合 | 已实现的 absorb；编辑/转换 defer |
| **Pdf Converter** | S22 分发 | FAQ 链各转换页；禁万能页 |
| **Pdf Viewer** / **Pdf Free**（reader 意图） | S21 | defer / FAQ 划界 |
| **Pdf Online** | 泛在线 | desc/FAQ 链工具枢纽；禁「pdf online」壳页 |

---

## 7. SERP 复核

**待采**。建议下一批 Bing SERP 优先（§3.3 I）：

1. `edit pdf text online`（S15 场景）
2. `fill pdf form without acrobat`（S16）
3. `convert word document to pdf for email`（S17 场景句，非 word to pdf 头词）
4. `turn pdf into word editable`（S18）
5. `merge pdf files in browser`（验证 merge 页 title_gap）
6. `compress pdf for email attachment`（验证 batch 页）

复核前：**不得**将上述标为 `long_gap` 或占周 build。

---

## 8. 对已有 slug 的 SEO/功能动作

| 优先级 | slug | 动作 |
| --- | --- | --- |
| P0 absorb | `merge-pdf` | 补 combine/merge 头词 FAQ；Use case「combine files into one pdf」 |
| P0 absorb | `compress-pdf` | 补 reduce/compress my pdf；内链 `batch-compress-pdfs-for-email` |
| P0 absorb | `pdf-to-jpg` | 补 convert pdf jpg / pdf jpg 次词 |
| P1 absorb | `split-pdf`、`images-to-pdf`、`unlock-pdf` | Planner 代表词进 FAQ/usecase |
| P1 absorb | 其余 PDF slug | 对照 [`tool-keyword-roots`](../../2026-08-20-tool-keyword-roots.md) §pdf 词根做 absorb |
| — | 全 PDF 页 | 统一 FAQ：**非 Adobe/Foxit 替代品**；文件本地处理划界 |

**未实现能力**（S15–S21）：不在已有页用 FAQ「假装覆盖」；须独立实现规格后再 absorb 文案。

---

## 9. 周产能 / 下一步

| 项 | 结论 |
| --- | --- |
| 本批周 build | **0**（无 SERP、无 long_gap） |
| 词池 | 已追加代表行 → [`keyword-daily-pool.tsv`](../../keyword-daily-pool.tsv) |
| absorb 排期 | P0 三 slug（merge/compress/pdf-to-jpg）文案吸收，不占新建名额 |
| 下一动作 | ① 跑 §7 SERP 六词；② 用户确认后可为 S15–S18 开 work-tasks；③ 品牌词不入产品 backlog |
| work-tasks | **禁止**本分析自动创建 |

---

## 10. 验收自检

```text
[x] 广告组未当拆页轴；作业类型表已写
[x] 每个非 drop 场景有覆盖落点
[x] 每个 URL 仅一条主打（已实现 slug 已标明）
[x] 1k+ 头词未当进攻主打 H1
[x] drop 表仅服务/品牌/同形等
[x] absorb 仅指向已实现 slug；编辑/填表/Word 转换未标 absorb
[x] 无 SERP → 无 long_gap
[x] 词池 + tracker 已更新；未建 work-tasks
```
