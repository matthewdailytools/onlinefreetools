# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把手机拍页 / JPG 截图 / PNG·WebP 照片在浏览器里识别成**可复制纯文本**，复制或下载 `.txt`；文件不出标签页。
- 谁在什么任务里用：手里是一张印刷体照片或屏幕截图，要抽出字去粘贴，而不是要可检索 PDF、Word 版式，也不是要从数字 PDF 读字层。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | 方向 **A.11** OCR（Tier 2）。2026-09 能力上限：印刷体/照片文字产品级；点后加载 PP-OCRv6 tiny（或等价 ONNX）；Tesseract/small 作语种 fallback。Cloudflare Workers **不能**跑推理。 |
| **B** 场景桥接 | 部分 | B2「图片 → 文本」是同一作业的场景说法，控件仍是单图 OCR，不是上下游工作流立项条件。 |
| **C** 行业专属 | 否 | 不做岗位单据理解、发票字段、医疗处方；无行业规范对照表。 |

**选定主方向**：A  
**次要互链参考**：`extract-text-from-pdf`（数字 PDF **字层**，无 OCR）、`images-to-pdf`（照片装订成 PDF，不认字）、`images-to-word`（图嵌入 docx，不认字）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体：现 catalog **没有** OCR 页；近邻抽文本/转 Word **明确无 OCR**。本页主控件是光栅图 → 识别引擎 → TXT，不是换 H1。
- [x] 不是无增量机翻铺量：一带多输入格式（JPG/PNG/WebP 芯片），不按语种/Free/手写拆 URL。
- [x] 不依赖偏离定位的重后端：识别在标签页 WASM；Workers 不托管推理。库走 `/vendor/` 入库。
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL：`ocr to text` / `ocr image reader` / `arabic ocr` / `chinese ocr online` absorb；禁 `online-ocr`、`jpg-to-ocr`、`arabic-ocr`、`handwriting-ocr`。扫描 PDF / 可检索 PDF / Word / 表格 CSV 是 N2–N5，**不**并进本页冒充。

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：`@paddleocr/paddleocr-js`（PP-OCRv6 **tiny**，点后加载）；语种不足用 **small** 或 `tesseract.js` LSTM 包。禁止 VL（PaddleOCR-VL ~991MB）。表格 SLANet **本页不用**（N5 后排）。
- Tier：**2**（首屏不拉 WASM；点 **Convert** 或 **Load sample** 才加载）
- CWV / 懒加载注意：tiny 约数 MB；阿语等可能拉 small ~30MB 须进度条。图片先缩到最长边上限再识别。手机多页不是本页作业（单文件）。须 COOP/COEP 才能 SharedArrayBuffer 时，实现会话按引擎文档配置；不要为此改全站无关页。

### 若选 B

- （未选为主方向）场景链：拍页/截图 → 可复制 TXT。上游无强制工具；下游粘贴到笔记/邮件。扫描 PDF 作业留给 N2。

### 若选 C

（未选）

## 与邻页的 Information Gain / 差异性（必须落地）

| 邻页 | 作业 | 本页差异（控件 + 产物，不只文案） |
|---|---|---|
| `extract-text-from-pdf` | 数字 PDF **已有字层** → 文本 | 本页输入是 **图片**；跑 OCR。PDF 上传不做。 |
| `pdf-to-markdown` | PDF 字层 → MD | 无 OCR；本页不产出 Markdown 结构 |
| `images-to-pdf` | 多图装订 → PDF | 本页认字出 TXT，不装订 PDF |
| `images-to-word` | 多图嵌入 → docx | 本页要的是字，不是把照片塞进 Word（N4 才是扫描件→可改 Word） |
| `turn-pdf-into-word-document` | PDF 字层 → docx | 无 OCR；扫描件不要链本页当 Word |

相对云端 OnlineOCR / i2OCR 万能下拉台：本页 **只出 TXT**，不提供 Word/Excel 下拉壳。相对 iLovePDF OCR PDF：那是可检索 PDF（N3），本页不改/不生成 PDF。

## 结论

- 继续立项：是
- 建议 slug：`convert-a-jpg-to-text-with-ocr`
- 与已上线工具关系：**新建**；Related 链字层抽取与照片装订，FAQ 划界。实现后邻页失败 FAQ 再链回来（须 `CROSS_TOOL_UPDATE=1`，本立项不改邻页）。
- 进入 `02-tool-info.md` 前仍缺的信息：人工 SERP 仍未采（上线前建议看 `jpg to ocr` / `ocr to text` title）；引擎以 POC 钉体积与中英错误类型，不阻塞 brief `ready`。
- 用户意图审查（标 ready 前）：见 `02` 专节
