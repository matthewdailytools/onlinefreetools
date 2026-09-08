# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把一叠印刷体 JPG/截图在本标签页串行 OCR，合成**一份可在 Word 里改字的 DOCX**（每张图一节：标题=文件名、可选原图、识别段落、分页）。
- 谁在什么任务里用：连拍讲义/菜单/截图后要进 Word 改，而不是只拿 TXT。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 已入库 Tesseract LSTM + `docx` 库；点后加载 WASM；Tier 2 |
| **B** 场景桥接 | 次要 | 上游拍页 → 下游 Word 编辑；Related 链 TXT 批量页 / 无 OCR 装订页 |
| **C** 行业专属 | 否 | 不是单一岗位规范工具 |

**选定主方向**：A  
**次要互链参考**（可选，非立项条件）：`batch-convert-jpg-to-text-with-ocr`、`convert-a-jpg-to-text-with-ocr`、`images-to-word`

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 N1-batch：产物是带节结构的 DOCX，不是 TXT ZIP；相对 `images-to-word`：正文是 OCR 字不是只贴图）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（PNG/WebP 芯片；不拆 jpg-to-word 单张 URL；不拆 ocr-pdf-to-word）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：Tesseract.js LSTM（与 N1 同 vendor）；`docx` 已在 `public/vendor/docx/`
- Tier（0 / 1 / 2）：**2**（WASM + 多图串行）
- CWV / 懒加载注意：进页 **不**自动 `loadSample()`；Convert all 首次才加载引擎

### 若选 B

- 场景链（从哪到哪）：（非主方向）照片叠 → 可编辑 Word
- 上游 / 下游工具：N1 / N1-batch 出 TXT；`images-to-word` 出不可选中的图页

### 若选 C

立项三问：不适用。

## 结论

- 继续立项：是
- 建议 slug：`batch-convert-jpg-to-editable-word-with-ocr`
- 与已上线工具关系（增强 / 新建 / Related）：**新建**。Planner 曾把 `jpg to word ocr` 并进未建的 N4（扫描 PDF→Word）。用户点名 **JPG 批量 → 可编辑 Word**，对象是照片不是 PDF，与 N4 作业不同；N4 仍留给扫描 PDF。相对已有 OCR 页的 IG 见 `02` 对照表与 `notes.md`。
- 进入 `02-tool-info.md` 前仍缺的信息：无（未 SERP，上线前须看 organic title）
- 用户意图审查（标 ready 前）：见 `02` 专节 / `notes.md`
