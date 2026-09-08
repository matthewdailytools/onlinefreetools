# Notes — N4 batch scanned PDF → Word OCR

## 相对邻页：必须是控件差，不是 MIME 换皮

| 邻页 | 它们的结果 | 本页必须多出来 |
|---|---|---|
| N4-jpg-batch `batch-convert-jpg-to-editable-word-with-ocr` | 照片文件队列 → 一份 DOCX | **PDF 输入**：pdf.js 逐页光栅；拒绝 JPG/PNG 入队（那是邻页） |
| A2 `turn-pdf-into-word-document` | 数字 PDF **字层** → Word，无 OCR | **扫描件**：页图 OCR 成段落；不把抽字层当主路径 |
| `extract-text-from-pdf` | 字层 TXT | Word 文档结构，不是 TXT |
| N1-batch | 图 → TXT ZIP | PDF + Word |
| `images-to-word` | 贴图不可选中 | OCR 正文可选中可改 |
| 未来 N2 | 扫描 PDF → TXT | 本页出 Word |
| 未来 N3 | 扫描 PDF → 可检索 PDF | 本页出 DOCX，不写回 PDF |

## 批量指什么

- **多份 PDF** 进队列（Convert all、失败 skip）。
- **一份多页 PDF** 也是同一作业：页就是批次，不另拆 URL。
- 产物仍是 **一份** `.docx`，不是每文件一个 ZIP 里的 `.docx`（那会像 N1-batch 换皮）。

## Word 结构（实现必须）

1. 每个成功 **PDF 文件**：Heading 1 = 文件名。
2. 该文件内每个成功 **页**：可选页光栅图（默认开）+ OCR 段落；页与页之间 PageBreak。
3. 文件与文件之间 PageBreak（最后一个文件后无分页）。
4. 失败页 / 失败文件不进文档。

## 上限（WASM）

- 最多 **5** 个 PDF；每个 ≤ **12 MB**；整批最多 **20** 页。
- 一个 Tesseract worker **串行**；pdf.js 也串行渲染。

## 有意不满足

- 不收 JPG/PNG 当主输入。
- 不做可检索 PDF、不做 TXT 主产物、不承诺栏/表版式、不做手写产品。
- 不硬刚 H1=`ocr pdf to word` / `OCR to Word` / `pdf to word`（后者是 A2）。
