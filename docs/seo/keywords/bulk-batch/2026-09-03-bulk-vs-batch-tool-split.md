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
| **bulk** | `in bulk`、`bulk compress/convert/resize`：强调一次很多份（电商图、资源夹） | 商品图压缩、按目标格式批量转换、SVG 图标集、Amazon 主图套规格、剥 EXIF、灰化扫描件 |
| **batch** | `batch watermark`、`batch compress pdf`、`batch checksum`：同一流程跑一个集合（办公/发版） | 图片水印、PDF 压缩/水印/加密/解锁、发版校验和、转正扫描 PDF |

规则：

1. 每个 slug **只出现其中一个词**；落选词只进 FAQ / description。  
2. 头词如 `bulk image compressor` 被 iLoveIMG 类站占位 → H1 用**场景句**（§3.3 G），不硬刚品类。  
3. 中文搜法（批量压缩图片、批量水印）在十语 brief 里按当地习惯写，不把 bulk/batch 硬塞进 zh H1。

### 0.1 批量「转换」按目标格式拆 URL（2026-09-03）

用户一般**不按编码器思考**（不会先打开万能转换器再选 WebP）。搜法是「要哪种结果文件」：`转成 jpg`、`png to jpg`、`heic to jpg`、`转 png`、少数才是 `to webp`。

因此 **禁止** 单页 `bulk-convert-images-to-webp` 用芯片改 JPEG/PNG/AVIF。按**输出格式**拆独立 slug；进页即该格式，无格式下拉。方向对（png→jpg）是同一输出作业，absorb 进目标格式页。

拆页成立是因为 **Rules/失败模式不同**（JPG 必须垫底丢透明；PNG 保透明且常变大；WebP 有损+透明且部分客户端不认），不是换 title。AVIF 用户更不熟且编码慢 → 独立 slug 但 defer。

### 0.2 批量「压缩」按对象拆 URL（不是万能 compressor）

搜法是「把哪类文件变小」，不是打开 `bulk-image-compress` 再选。和转换簇对齐：用户认 **JPG / PNG / PDF**，不认 MozJPEG/OxiPNG。

| 可做独立 slug | 用户搜法 | 作业（须与邻页不同） | 不做的近义 |
|---|---|---|---|
| `bulk-compress-product-photos` | compress images in bulk; compress jpg; reduce photo size; compress to 200kb | 照片有损变小（输出 JPEG 或 WebP、目标 KB、最长边） | `bulk-compress-jpg` 第二页；jpeg vs jpg |
| `bulk-compress-png-images` | compress png; compress png in bulk; tinypng 类意图 | **仍是 PNG**：保透明、调色/重编码，体积常不如转 JPG 小 | 并进商品图页（那一页会劝你改 JPEG，和 TinyPNG 意图相反） |
| `batch-compress-pdfs-for-email` | batch compress pdf; compress pdfs | 多 PDF 栅格/降质打 ZIP，**不合并** | `bulk-compress-pdf` 近义页；扫描/文本只做芯片 |

后排（可以做，但产能后）：`bulk-compress-gif-images`（须保动画，失败模式与静帧不同）；SVG 用已定的 `bulk-optimize-svg-icon-set`（搜 compress svg absorb 该页，不另开 compress-svg）。

明确不做：视频压缩、ZIP 当「压缩」（已有 `create-zip-file`）、`bulk-compress-webp`（与商品图/optimizer 重叠）、目标体积单独 URL（200KB 是芯片）、万能 `bulk-image-compress`。

压缩 ≠ 转换：压 JPG 仍是 JPG/WebP 变小；`bulk-convert-images-to-jpg` 是改后缀。两套 URL 都要。

---

## 1. 使用场景表（§3.3 H 必交）

作业类型相同 → **一个 URL**；近邻场景 → 芯片。独立 URL 的条件：主控件 / 失败模式与单文件近邻页不同。

| 使用场景 | 用户搜法（草稿） | 作业类型 | 独立 URL？ | 建议 slug / H1 | 默认 / absorb |
|---|---|---|---|---|---|
| 上架前压一批商品图到体积上限 | bulk compress images; compress jpg; compress to 200kb | 多照片有损变小 → ZIP | **是** | `bulk-compress-product-photos` / Bulk compress product photos | 默认照片；200KB/最长边芯片；**不**拆 jpg 第二 URL |
| 一批 PNG 仍要 PNG（logo/UI） | compress png; compress png in bulk | 多 PNG 保透明变小 → ZIP | **是** | `bulk-compress-png-images` / Bulk compress PNG images | 与商品图页划界：不默认转 JPEG |
| 表单/邮件/打印要 JPG | bulk convert images to jpg; png to jpg; heic to jpg | 多图 → **JPEG** ZIP | **是** | `bulk-convert-images-to-jpg` / Bulk convert images to JPG | 默认 JPG；png/heic→jpg 搜法 absorb 本页，**不**做格式下拉改 PNG/WebP |
| 要透明底（logo/截图） | bulk convert images to png; jpg to png | 多图 → **PNG** ZIP | **是** | `bulk-convert-images-to-png` / Bulk convert images to PNG | 默认 PNG；与 JPG 页失败模式不同（保 alpha、无垫底） |
| 站点资源要更小的有损+透明 | bulk convert images to webp; png to webp | 多图 → **WebP** ZIP | **是** | `bulk-convert-images-to-webp` / Bulk convert images to WebP | 默认 WebP；不熟格式的用户不会先搜这个，故不得当唯一转换页 |
| 转 AVIF | bulk convert to avif | 多图 → AVIF ZIP | 后排 | `bulk-convert-images-to-avif` | defer：编码慢、用户更不熟 |
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
5. `compress jpg` / `jpeg` / `200kb` 只作芯片或 FAQ，不另开 URL。

**`bulk-compress-png-images`**（近邻仍是 `image-compress`，但默认输出与失败模式不同）

1. 输出保持 PNG + alpha；禁止进页默认垫底转 JPEG。  
2. 照片型 PNG 压完仍可能很大：报告写「要更小请去商品图压缩（会变成 JPG/WebP）」。  
3. 索引色/条带伪影说明。  
4. 与 `bulk-convert-images-to-png` 划界：那页是改成 PNG，这页是 PNG 变小。

**`bulk-convert-images-to-jpg`**（近邻 `image-format-converter`；**转换簇默认先进这一页**）

1. 透明输入必须垫底（整批同一白/黑/自定义），否则拒绝并记失败——这是 JPG 独有规则，不能藏在「选格式」里。  
2. 质量档与表单/邮件「必须是 .jpg」体积对照。  
3. 扩展名统一 `.jpg`（搜 jpeg 只进 FAQ，不拆第二 URL）。  
4. HEIC/PNG→JPG 作为本页场景芯片，不另开 `heic-to-jpg` / `png-to-jpg` 批量页。

**`bulk-convert-images-to-png`**

1. 保 alpha；禁止套用 JPG 垫底控件。  
2. 无损导致体积往往变大：报告里写「比原 JPEG 更大」警告。  
3. 动画 GIF 只取第一帧并标明。  
4. related 链到 JPG/WebP 页，页内**无**输出格式切换（避免三页同一套下拉）。

**`bulk-convert-images-to-webp`**

1. 有损质量 + 可保透明（与 JPG 垫底、PNG 无损都不同）。  
2. 浏览器/平台不认 WebP 时的失败说明（邮件客户端、部分 CMS）。  
3. 相对 PNG 照片的体积差示例。  
4. 不把 JPG/PNG 当本页芯片改输出。

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
- **`bulk-convert-images-to-avif`**：编码慢、搜法少；独立 slug，产能后。

---

## 3. 与单文件页的关系

| 批量新页 | related 至少链到 |
|---|---|
| `bulk-compress-product-photos` | `image-compress`、`bulk-compress-png-images`、`bulk-convert-images-to-jpg` |
| `bulk-compress-png-images` | `image-compress`、`bulk-compress-product-photos`、`bulk-convert-images-to-png` |
| `bulk-convert-images-to-jpg` | `image-format-converter`、`bulk-convert-images-to-png`、`bulk-convert-images-to-webp` |
| `bulk-convert-images-to-png` | `image-format-converter`、`bulk-convert-images-to-jpg` |
| `bulk-convert-images-to-webp` | `image-format-converter`、`bulk-convert-images-to-jpg` |
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
- **一个** `bulk-convert-images` / `bulk-image-converter` 下拉选格式（用户不熟格式，进页应对准已搜的目标后缀）。  
- **一个** `bulk-image-compress` 下拉选 JPG/PNG/PDF。  
- `png-to-jpg` 与 `heic-to-jpg` 各拆批量 URL（同意图=输出 JPEG；absorb 进 `bulk-convert-images-to-jpg`）。  
- `jpg` 与 `jpeg` 两 URL。  
- 计算器、prompt、网络探测。

---

## 5. 漏斗字段（本批）

- `verdict`：P0/P1 独立 URL → **`build`**（作业未实现，须实现）；芯片簇与产能后排 → **`defer`**；已有批量 / 构图 pairwise → **`drop`** 不进新产品。  
- `competition_tier`：品类头词估 **head**（iLoveIMG / 在线批量站）；**未 SERP 不得 long_gap**。  
- `week_attack`：否，直到 Planner + 人工 SERP。  
- 开 `work-tasks/{slug}/`：**仅当用户点名该 slug**。

建议开工顺序：`bulk-compress-product-photos` → `bulk-compress-png-images` → **`bulk-convert-images-to-jpg`（转换簇先做，用户最熟）** → `bulk-convert-images-to-png` → `bulk-convert-images-to-webp` → `batch-compress-pdfs-for-email` → `batch-watermark-product-photos` → `batch-checksum-release-files`。
