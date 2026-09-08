# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把一份或多份**扫描件 PDF**在本标签页逐页光栅化并串行 OCR，合成**一份可在 Word 里改字的 DOCX**（按文件分节、按页分页；默认可把页图放在文字上方校对）。
- 谁在什么任务里用：扫描仪/手机扫描出的 PDF 要进 Word 改，而不是只要 TXT、可检索 PDF、或数字 PDF 的现成字层。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 已入库 pdf.js 光栅化 + Tesseract LSTM + `docx`；点后加载 WASM；Tier 2 |
| **B** 场景桥接 | 次要 | 上游扫描 PDF → 下游 Word 编辑；Related 链字层转 Word / 照片 OCR Word |
| **C** 行业专属 | 否 | 不是单一岗位规范工具 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：`batch-convert-jpg-to-editable-word-with-ocr`、`turn-pdf-into-word-document`、`extract-text-from-pdf`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 N4-jpg-batch：输入是 PDF 页光栅，不是 JPG 队列；相对 A2：正文来自 OCR，不是抽字层；相对「单 PDF 薄页」：队列 + skip + 多文件进一份 Word）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（一份多页 PDF 与多份 PDF 同一管线；不拆 `ocr-pdf-to-word` / `turn-a-scanned-pdf-into-word` doorway）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：pdf.js（`public/vendor/pdfjs/`）；Tesseract.js LSTM（与 N1 同 vendor）；`docx` 已在 `public/vendor/docx/`
- Tier（0 / 1 / 2）：**2**（PDF 光栅 + 多页 OCR + 组 DOCX）
- CWV / 懒加载注意：进页 **不**自动 `loadSample()`；Convert all 首次才加载 pdf.js worker / OCR 引擎

### 若选 B

- 场景链（从哪到哪）：（非主方向）扫描 PDF → 可编辑 Word
- 上游 / 下游工具：A2 出字层 Word；N4-jpg-batch 出照片 Word；N2/N3 未建（TXT / 可检索 PDF）

### 若选 C

立项三问：不适用。

## 结论

- 继续立项：是
- 建议 slug：`batch-convert-scanned-pdf-to-word-with-ocr`
- 与已上线工具关系（增强 / 新建 / Related）：**新建**。这是 Planner **N4**（扫描 PDF→可编辑 Word）。用户点名 **batch convert … with ocr**，H1 用批量任务句；头词 `ocr pdf to word` 只进 FAQ「也叫」，禁止当进攻 H1。不建 `turn-a-scanned-pdf-into-word` 第二 URL（一份 PDF 也走本页队列）。相对已有页的 IG 见 `02` 对照表与 `notes.md`。
- 进入 `02-tool-info.md` 前仍缺的信息：无（未 SERP，上线前须看 organic title）
- 用户意图审查（标 ready 前）：见 `02` 专节 / `notes.md`
