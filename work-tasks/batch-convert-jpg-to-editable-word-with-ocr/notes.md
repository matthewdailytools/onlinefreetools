# Notes — 相对其他 OCR / Word 页的控件级 IG

本页 **不得** 只把 N1-batch 的 `{stem}.txt` 改成 `{stem}.docx` 再打 ZIP。那是换皮 doorway。

## 邻页作业（打开页实际得到什么）

| slug | 输入 | 结果 | 本页必须不同之处 |
|---|---|---|---|
| `convert-a-jpg-to-text-with-ocr` | 一张图 | 一份 TXT；Copy / Download TXT | 多文件队列；产物是 Word 不是 TXT |
| `batch-convert-jpg-to-text-with-ocr` | 多张图 | ZIP：每张 TXT + `combined.txt`（`--- filename ---`） | **一份** `.docx`：Heading 1=文件名、分页、OCR **段落**；默认段前插原图；按钮 **Download Word** 不是 Download ZIP |
| `images-to-word` | 多张图 | DOCX 里每页是**图片**，字不可选中 | 正文是识别出的可编辑文字；图是校对附件（可关） |
| `turn-pdf-into-word-document` | 数字 PDF | 字层进 DOCX，无 OCR | 本页不收 PDF |
| N4 `turn-a-scanned-pdf-into-word`（未建） | 扫描 PDF | OCR 进 Word | 本页对象是 JPG 叠；PDF 有意不满足 |

## 必须实现的额外 IG（控件 / 产物）

| # | 能力 | 可见落点 |
|---|---|---|
| 1 | `input[multiple]` + 队列表（queued / reading / done / skipped） | 首屏表 |
| 2 | **Convert all** 串行、同一 Worker；失败 **skip** | How = 按钮；行状态 |
| 3 | **一份** `ocr-photos.docx`（或当地日期名）：每张图一节，Heading 1 = 文件名，节后分页 | Example / Rules |
| 4 | 默认 **段前插入原图**（高级设置可关）；图是校对用，正文仍是 OCR 字 | `<details>` + Rules |
| 5 | **Download Word** 无产物 disabled；**不**默认打 TXT ZIP | 主按钮行 |
| 6 | 进度 `i/n`；进页不自动 OCR | aria-live；Load sample 例外 |

**禁止当 IG**：并行多 WASM；TXT/Word/Excel 下拉万能台；收 PDF；承诺栏/表/页眉页脚与原件一致；H1=`OCR to Word` / `jpg to word` 光杆。
