# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`image-exif`（不新建 `exif-viewer` / `remove-exif` / `strip-gps` 等近义薄页）  
**路径**：`/tools/image-exif`  
**主方向**：A（A.2 图片处理 · Tier 1 `exifr` + Tier 0 Canvas 清除）  
**catalog 分类**：`image`（图片处理工具）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`。  
> 对齐：方向 A.2；`docs/2026-07-09-js-tool-packages-survey.md`（exifr）；集群 C06。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. view exif data / exif viewer / 查看 EXIF  
  2. remove exif / strip metadata / 清除 EXIF  
  3. remove gps from photo / 去掉照片定位  
  4. exif online without upload / 本地 EXIF（隐私意图 → FAQ）  
  5. what metadata is in my photo（相机/时间/GPS 场景 → Use cases/Rules）
- 用户真实任务：打开照片看是否含 GPS/机型/拍摄时间；分享或上架前导出已去元数据的副本，并确认清除是否生效。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  上传/拖放、字段列表、部分标 GPS 地图链接、「本地处理」口号、一键 Remove/Download；少数分 Tab「查看/清除」；多数不解释清除=重编码，也不做清除后复读校验。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **清除机制**：`exifr` 只读；真正剥离靠 Canvas 重编码——JPEG 即使 quality 设为 1.0 也未必字节级无损  
  2. **GPS 与隐私字段**：哪些键属高风险（GPS、序列号）；无数据 vs 有数据的诚实空态  
  3. **格式边界**：JPEG/HEIC/部分 PNG 可读；WebP/AVIF/动图支持因浏览器与库而异；清除后 MIME/质量变化  
  4. **Orientation**：清除重绘时是否按 Orientation 摆正（应说明默认行为）  
  5. **多语言检索向**：多数英文；本站十语 brief 为可验证增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：读（exifr.parse / gps）与清（Canvas toBlob）两段流水线  
  - **②** 边界：无 EXIF、解码失败、清除后复读、JPEG 有损、不支持格式  
  - **③** Use cases：分享前去 GPS；查拍摄参数；上架前脱敏  
  - **④** 对照表：常见字段组（GPS / Camera / DateTime / 其他）风险与是否默认展示  
  - **⑤** References：Exif 规范 / MDN Canvas / exifr  
  - **⑥** 本地隐私：文件不上传；FAQ  
  - **⑦** 十语 brief + 检索向重写  
  - **⑧** Example：含 GPS 的样例叙述 +「清除后再读为空」  
  - **⑨** Related ≥2
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。查看与清除是同一文件任务的两步；单独 `remove-exif` / `gps-remover` 易成 doorway。用主区「解析结果 + 清除下载」+ Use cases/FAQ 覆盖。
- [x] 权威来源 URL：  
  - https://www.cipa.jp/std/documents/e/DC-008-Translation-2019-E.pdf （或 CIPA Exif 现行入口）  
  - https://github.com/MikeKovarik/exifr  
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob  
  - https://exiftool.org/TagNames/EXIF.html （字段名参考，可选）
- [x] 行业/场景 Use case 文案草稿：  
  1. 社交分享：发帖前去掉 GPS，避免暴露住址/足迹  
  2. 电商/二手：商品图脱敏机型与定位后再上架  
  3. 排查：确认相机型号、曝光与拍摄时间是否写入文件
- [x] 边界/失败案例草稿：无元数据；仅 Orientation；HEIC 浏览器不可解码故无法 Canvas 清除；清除后复读仍见某字段（应报异常）；超大图；动画只处理可见帧
- [x] 结果区信息如何落到可索引 Example / FAQ：固定 Example（GPS 样例叙述）；FAQ（是否上传、清除是否无损、GPS 字段、清除后如何验证）
- [x] Related / 主题内链计划（≥2）：`image-format-converter`；第二链暂 `markdown-to-html` 或上线后换 `image-compress`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：parse 步骤 + Canvas 清除步骤 |
| 2 | 边界/失败 | FAQ + 空态/有损/格式限制 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 字段组 × 隐私风险 |
| 5 | 权威引用 | References |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` brief + ≥3 轮 |
| 8 | 数值示例 | Example：清除前后对照叙述 |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 · 方向 A.2 · catalog **`image`** · P0（图片类第二工具） |
| 场景与行业 | 隐私分享 / 上架脱敏 / 拍摄信息排查 |
| 技术（包、Tier、本地处理） | Tier 1：`exifr` 动态 import；清除：Canvas + `toBlob`（默认 JPEG quality 0.92 或保持源 MIME）；**不上传**；清除后可选再 parse 验证 |
| Title (en) | `EXIF Viewer & Remover — GPS, Camera & Local Strip \| {Brand}` |
| Description 要点 | ≥120；步骤（选图→查看字段→清除下载）+ GPS/隐私 + 本地；示例场景 |
| Schema | WebApplication + BreadcrumbList；分类锚点 `#cat-image`；`MultimediaApplication` |
| FAQ 要点（≥3） | 是否上传；清除是否无损；如何验证已清除；GPS 在哪；哪些格式支持 |
| Disclaimer / References | 非 YMYL；Exif/CIPA、exifr、MDN toBlob |
| related | `image-format-converter`, `markdown-to-html`（后者占位，可换 `image-compress`） |
| 验收 | `lint:seo`；`03` ≥3 轮；可读 GPS/相机字段；清除后下载且复读无关键 EXIF；无独立近义薄页；README；catalog `image` |
| 工期粗估 | ~1d（exifr + 字段表 UI + Canvas 清除 + 十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 交互规格（给实现用）

- 输入：
  - 文件选择 / 拖放（JPEG 优先；PNG/WebP/HEIC 等能 parse 的尽量读；清除依赖浏览器能解码为位图）
  - 操作：Analyze（可自动）/ Strip & Download / Clear / Load sample（可用无真实 GPS 的合成说明，或固定文案 Example 不依赖真 GPS 样图）
- 输出：
  - 元数据表：分组展示（GPS / Camera / DateTime / Other）；GPS 给十进制度数；无数据时明确「未发现」
  - 高亮隐私风险行（GPS、SerialNumber 等）
  - 清除成功：下载 Blob；结果区提示「已重编码剥离元数据」；可选自动再 parse 显示「清除后：无 EXIF」
- 核心规则 / 算法：
  1. 读：`exifr.parse(file, { gps: true, exif: true, iptc: true, xmp: false 或按需 })`；`exifr.gps(file)` 辅助  
  2. 清：解码 →（若有 Orientation，按 `exifr.rotation` **摆正后再画**，避免侧躺）→ `toBlob`；**不**声称字节级无损  
  3. 验证：对输出 Blob 再 `exifr.parse`；若仍有 GPS 则报错  
- 失败与边界行为：
  - 无法 parse → 提示格式/损坏  
  - 能 parse 但不能解码像素 → 只读不可清，说明原因（如部分 HEIC）  
  - 软上限：文件 >25MB / 边长 >8192 警告  
- 示例 Input → Output（Example 稳定文案）：
  - 含 `GPSLatitude` / `Make` 的 JPEG → 表中可见坐标与机型  
  - Strip 后 → 下载文件再读：无 GPS / 无 Make（或仅剩极少容器信息，以实现复读为准写死 FAQ）

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [x] Disclaimer — 非 YMYL；隐私在 How/FAQ
- [x] `03-locale-briefs.md` 已填
- [x] README（实现时）
- [x] catalog `category: image`
- [x] **不**注册独立 viewer/remover 近义 slug
