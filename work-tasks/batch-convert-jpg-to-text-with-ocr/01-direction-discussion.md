# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把**多张**印刷体 JPG/PNG/WebP 在浏览器里串行识别成文本：每张一份 `.txt` 打进 ZIP；可选再拼一份带文件名分隔的合并 TXT。失败行 skip，不整批作废。
- 谁在什么任务里用：手里是一套讲义/菜单/说明书照片或一串截图，要一次带走可复制文字，而不是只转一张图，也不是要扫描 PDF / Word 版式。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 是 | 方向 **A.11** OCR（Tier 2）+ 已验证的批量 ZIP（fflate）。复用 N1 Tesseract LSTM；Cloudflare Workers **不能**跑推理。主控件差是队列/串行/ZIP，不是新引擎。 |
| **B** 场景桥接 | 部分 | 「多张照片 → 一叠 TXT」是场景说法；立项条件仍是浏览器识别能力 + 批量产物，不是岗位工作流。 |
| **C** 行业专属 | 否 | 不做档案室/扫描厂 SLA、发票字段、医疗处方。 |

**选定主方向**：A  
**次要互链参考**：`convert-a-jpg-to-text-with-ocr`（单张同引擎）、`extract-text-from-pdf`（数字 PDF **字层**，无 OCR）、`images-to-pdf`（多图装订成 PDF，不认字）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体：相对 N1，主输入是 `multiple` 队列、主按钮是 **Convert all**、产物是 **ZIP（+ 可选合并 TXT）**、失败是 **逐行 skip**。这些会改变用户能不能办成「一次转完一叠照片」。
- [x] 不是无增量机翻铺量：一带多输入格式（JPG/PNG/WebP 芯片），不按 bulk/batch/free/语种拆第二 URL。
- [x] 不依赖偏离定位的重后端：识别在标签页 WASM；Workers 不托管推理。库走 `/vendor/`。
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL：`batch ocr` / `bulk ocr` / convert multiple jpg to text absorb 进本页；**禁** `batch-ocr` 光杆壳、`bulk-image-to-text` doorway。单张 `jpg to text` **不抢 N1 H1**。扫描 PDF 批量是 N2，不并进。

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：与 N1 相同 **tesseract.js LSTM**（`/vendor/tesseract/` 已入库）；ZIP 用 **fflate**（批量网页/压缩工具已用）。禁止为本页再引进 Paddle VL。表格 SLANet 不用（N5）。
- Tier：**2**（首屏不拉 WASM；点 **Convert all** 或 **Load sample** 才加载；队列串行，同一 Worker 复用，避免并行 OOM）
- CWV / 懒加载注意：上限建议 **10** 张；每张缩最长边再识别；进度「i / n」+ 逐行状态；进页**不**自动跑 OCR。手机内存紧时串行是产品规则，不是隐藏限制。

### 若选 B

- （未选为主方向）场景链：多张拍页/截图 → ZIP 的 TXT。上游无强制工具；下游粘贴笔记或归档。单张走 N1。

### 若选 C

（未选）

## 与邻页的 Information Gain / 差异性（必须落地）

> 用户本轮硬约束：相对 `convert-a-jpg-to-text-with-ocr` 必须有**额外 IG**，不能只换 H1。展开表见 `02` / `notes.md`。

| 邻页 | 作业 | 本页差异（控件 + 产物，不只文案） |
|---|---|---|
| **`convert-a-jpg-to-text-with-ocr`（N1）** | **一张**图 → 一份 TXT；Copy / Download 单文件；无队列 | **多文件** dropzone；队列表（文件名/状态/错误）；**Convert all**；**失败 skip**；**Download ZIP**；可选 **combined.txt**（`--- filename ---` 分页）。单张用户 FAQ 链回 N1，本页不假装「一次一张也行但没有队列」去抢 N1 |
| `extract-text-from-pdf` | 数字 PDF **已有字层** → 文本 | 本页输入是 **图片**；跑 OCR。不收 PDF |
| `images-to-pdf` | 多图装订 → PDF | 本页认字出 TXT ZIP，不装订 PDF |
| `images-to-word` | 多图嵌入 → docx | 本页要的是字，不是把照片塞进 Word |
| `batch-convert-web-pages-to-jpg` | 多 URL → JPEG ZIP | 本页输入是本地图，不是网页截图 |

相对云端 OnlineOCR 万能台：本页仍 **只出 TXT**（多份），无 Word/Excel 下拉壳。相对 N1：增益是**批量作业器**（队列、skip、ZIP、合并），不是第二套识别引擎。

## 结论

- 继续立项：是
- 建议 slug：`batch-convert-jpg-to-text-with-ocr`
- 与已上线工具关系：**新建**；Related 必含 N1。实现后 N1 FAQ「批量」改链本页（须 `CROSS_TOOL_UPDATE=1`，本立项不改 N1）。
- 进入 `02-tool-info.md` 前仍缺的信息：人工 SERP 仍未采（上线前建议看 `batch ocr` / `bulk ocr` organic title）；引擎 POC 已在 N1 验证，本页只加队列/ZIP。
- 用户意图审查（标 ready 前）：见 `02` 专节
