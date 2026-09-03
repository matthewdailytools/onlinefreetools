# 批量工具独立立项：bulk vs batch 选词与作业聚类

**日期**: 2026-09-03  
**主题夹**: `bulk-batch`  
**输入**: 用户要求「增加批量能力须单独立项、独立 IG、单独 slug，slug 含 bulk 或 batch，按用户搜法选型」；对照 catalog 162 与单文件页 `files[0]` 扫描。  
**未做**: Keyword Planner CSV、Bing/Google SERP。故 **不得** 标 `long_gap` 作周进攻 KPI。  
**未建**: `work-tasks/`（须用户点名某一 slug 再立项）。

> **产品结论**：批量是**另一套主控件**（队列、共享参数、失败跳过、ZIP/CSV），不是单文件页换 title。每个独立 URL 须能写出 ≥3 条相对单文件近邻页**且**相对云端批量站的可验证 IG。  
> **SEO 结论**：slug/H1 = 使用场景任务句，并嵌入 **一个** 选型词（`bulk` 或 `batch`）。禁止 `bulk-image-compress` 品类名，禁止同意图再拆 `batch-*` 近义页。

---

## 0. bulk 还是 batch（搜法，不是同义词堆砌）

公开工具标题与教程用语（非 Planner 量级）：

| 选型 | 用户怎么搜 | 本批用在 |
|---|---|---|
| **bulk** | `in bulk`、`bulk compress/convert/resize`：强调一次很多份（电商图、资源夹） | 商品图压缩、转 WebP、SVG 图标集、Amazon 主图套规格、剥 EXIF、灰化扫描件 |
| **batch** | `batch watermark`、`batch compress pdf`、`batch checksum`：同一流程跑一个集合（办公/发版） | 图片水印、PDF 压缩/水印/加密/解锁、发版校验和、转正扫描 PDF |

规则：

1. 每个 slug **只出现其中一个词**；落选词只进 FAQ / description。  
2. 头词如 `bulk image compressor` 被 iLoveIMG 类站占位 → H1 用**场景句**（§3.3 G），不硬刚品类。  
3. 中文搜法（批量压缩图片、批量水印）在十语 brief 里按当地习惯写，不把 bulk/batch 硬塞进 zh H1。

---

## 1. 使用场景表（§3.3 H 必交）

作业类型相同 → **一个 URL**；近邻场景 → 芯片。独立 URL 的条件：主控件 / 失败模式与单文件近邻页不同。

| 使用场景 | 用户搜法（草稿） | 作业类型 | 独立 URL？ | 建议 slug / H1 | 默认 / absorb |
|---|---|---|---|---|---|
| 上架前压一批商品图到体积上限 | bulk compress images; compress images in bulk; compress product photos | 多图同参有损压缩 → ZIP | **是** | `bulk-compress-product-photos` / Bulk compress product photos | 默认；email 200KB、最长边 1920 为芯片 |
| 资源夹整批转 WebP | bulk convert images to webp; bulk image converter | 多图同输出编码 → ZIP | **是** | `bulk-convert-images-to-webp` / Bulk convert images to WebP | 默认 WebP；JPEG/PNG/AVIF 芯片 |
| 同一版权字盖一整拍商品图 | batch watermark photos; batch watermark images | 多图同水印模板 → ZIP | **是** | `batch-watermark-product-photos` / Batch watermark product photos | 默认；DRAFT 斜铺为芯片 |
| 一叠 PDF 过邮箱体积闸 | batch compress pdf; batch pdf compressor | 多 PDF 同档压缩 → ZIP | **是** | `batch-compress-pdfs-for-email` / Batch compress PDFs for email | 默认邮件档；打印/最大压缩芯片 |
| 发版目录出校验和表 | batch checksum; hash multiple files | 多文件哈希 → 表/CSV | **是** | `batch-checksum-release-files` / Batch checksum release files | 默认 SHA-256；MD5 对照芯片 |
| 同一 DRAFT 戳盖一批 PDF | batch watermark pdf | 多 PDF 同戳 → ZIP | **是** | `batch-watermark-pdf-drafts` | P1 |
| 同一密码锁一批合同 PDF | password protect multiple pdfs; batch protect pdf | 多 PDF 加密 → ZIP | **是** | `batch-password-protect-pdfs` | P1 |
| 已知密码解开自有一批 PDF | batch unlock pdf | 多 PDF 解密 → ZIP | **是** | `batch-unlock-owned-pdfs` | P1；YMYL 声明 |
| 图标夹瘦身 | bulk svg optimizer; optimize svgs in bulk | 多 SVG 优化 → ZIP | **是** | `bulk-optimize-svg-icon-set` | P1 |
| 一批 SKU 主图套 Amazon 规格 | bulk resize images; amazon main image size（场景） | 多图 cover-fill 到规格 → ZIP | **是（一页）** | `bulk-resize-amazon-main-images` | 默认 Amazon 2000²；IG/YT/LinkedIn/OG **芯片，不拆 6 URL** |
| 外发前剥一批照片 EXIF | remove exif in bulk | 多图报表或净图 ZIP | **是** | `bulk-strip-photo-exif` | P1 |
| Hero 一批 WASM 优化 | bulk image optimizer | 多图 WASM 编码 → ZIP | **是** | `bulk-optimize-hero-images` | P1 靠后（AVIF 慢） |
| 扫描件统一转正 | batch rotate pdf | 多 PDF 同角度 | **是** | `batch-rotate-scanned-pdfs` | P1 |
| 扫描件统一转灰 | bulk grayscale images | 多图同像素滤镜 | **否（簇默认）** | `bulk-grayscale-scan-photos` | 翻转/边框 **芯片**；不拆 3 URL |
| 同边距裁一批 flyer PDF | batch crop pdf | 多 PDF 同 crop box | 暂芯片/后排 | `batch-crop-pdf-margins` | 不与 rotate 合并（控件不同）但产能后 |
| 同页码样式打一批讲义 | batch page numbers pdf | 多 PDF 同页码样式 | 暂芯片/后排 | `batch-number-pdf-pages` | 与 watermark 划界 |
| 夹内文件元数据表 | file metadata multiple files | 多文件 → CSV | 暂芯片/后排 | `bulk-list-folder-file-metadata` | — |
| 多图合成 PDF/GIF/PPT | images to pdf 等 | N→1 合成 | **否** | 已有 slug | 已实现 |
| 逐张构图裁切 | crop image | 交互框 | **否** | — | 保持 `image-crop` |
| 两文件对照 | compare two files | pairwise | **否** | — | 已有 compare 页 |

---

## 2. 独立 IG 草稿（相对单文件近邻页）

每条上线须 ≥3；下列为立项 brief 素材，禁止写进用户可见「我们为了 SEO 拆页」。

### P0

**`bulk-compress-product-photos`**（近邻 `image-compress`）

1. 共享目标 KB 的整批命中/未命中汇总（单页只有一张图的二分查找）。  
2. 串行解码、条数/内存上限、超限拒绝续加。  
3. ZIP 内重名（`name (2).webp`）规则。  
4. 单张解码失败跳过，不中止整批。

**`bulk-convert-images-to-webp`**（近邻 `image-format-converter`）

1. 每文件「可转/不可转」格式矩阵。  
2. 扩展名替换与大小写规则。  
3. 透明 → 有损时的垫底色（整批同一垫底）。  
4. 失败文件留在报告，不进 ZIP。

**`batch-watermark-product-photos`**（近邻 `add-watermark`）

1. 按短边百分比缩放，横竖图同一相对锚点。  
2. 画布过小拒绝并记失败行。  
3. 先预览一张再 Apply all。  
4. 与 PDF 水印页对象划界。

**`batch-compress-pdfs-for-email`**（近邻 `compress-pdf`）

1. 文本型 vs 扫描型压缩差对照表。  
2. 单文件超内存只中止该项。  
3. 明确输出仍是 **N 个 PDF 的 ZIP**，不是合并（`merge-pdf`）。  
4. 共享档位下的合计节省字节。

**`batch-checksum-release-files`**（近邻 `file-hash`）

1. 与粘贴的 SHA256SUMS/清单逐行对照。  
2. 大文件分块进度。  
3. 导出 CSV 与 SUMS 文本两种。  
4. 相对路径区分重名。

### P1（摘要）

- PDF 水印/加密/解锁：页尺寸不一的相对锚点；已加密跳过；错密分行；所有权声明（解锁）。  
- SVG 图标集：损坏跳过；不跨文件改 ID。  
- Amazon 主图批量：cover 规则 + 分辨率不足警告；其它平台只做芯片。  
- 剥 EXIF：字段清单 + GPS 有无汇总。  
- WASM hero：取消后已完成项仍可打包。

---

## 3. 与单文件页的关系

| 批量新页 | related 至少链到 |
|---|---|
| `bulk-compress-product-photos` | `image-compress`、`bulk-convert-images-to-webp` |
| `bulk-convert-images-to-webp` | `image-format-converter`、`bulk-compress-product-photos` |
| `batch-watermark-product-photos` | `add-watermark`、`bulk-compress-product-photos` |
| `batch-compress-pdfs-for-email` | `compress-pdf`、`merge-pdf`（划界：不合并） |
| `batch-checksum-release-files` | `file-hash`、`file-metadata-analyzer` |

单文件页 **不** 加 `multiple` 冒充已覆盖批量作业（能力先判：队列作业未实现）。

---

## 4. 明确不做

- 已是 N→1 / 1→N 的页再套一层 `bulk-*` URL。  
- `image-crop`、`image-overlay`、compare、解压、ChatGPT export。  
- `bulk-grayscale` + `bulk-flip` + `bulk-border` 三 URL（同像素变换作业）。  
- 六个 `bulk-instagram-*` 近义（规格差用芯片）。  
- 计算器、prompt、网络探测。

---

## 5. 漏斗字段（本批）

- `verdict`：P0/P1 独立 URL → **`build`**（作业未实现，须实现）；芯片簇与产能后排 → **`defer`**；已有批量 / 构图 pairwise → **`drop`** 不进新产品。  
- `competition_tier`：品类头词估 **head**（iLoveIMG / 在线批量站）；**未 SERP 不得 long_gap**。  
- `week_attack`：否，直到 Planner + 人工 SERP。  
- 开 `work-tasks/{slug}/`：**仅当用户点名该 slug**。

建议开工顺序：`bulk-compress-product-photos` → `bulk-convert-images-to-webp` → `batch-watermark-product-photos` → `batch-compress-pdfs-for-email` 与 `batch-checksum-release-files`。
