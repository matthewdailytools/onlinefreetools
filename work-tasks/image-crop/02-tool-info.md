# 02 — 工具信息定稿

**状态**：`shipped`  
**slug**：`image-crop`（不新建 `crop-image` / `resize-image` / `crop-to-square` / `instagram-crop` 等近义薄页）  
**路径**：`/tools/image-crop`  
**主方向**：A（A.2 图片处理 · Tier 0 Canvas；可选 Tier 1 cropperjs）  
**catalog 分类**：`image`（图片处理工具）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。  
> 本地化：`tool-i18n-localization.mdc`（Title 禁参数枚举目录腔）。  
> 对齐：方向 A.2；包调研可参考 cropperjs；集群 C06。  
> Sitemap：默认仅 en/zh 收录（`sitemapLangs`）；十语内容仍生成。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. crop image / image cropper / 图片裁剪  
  2. resize image / change image size / 修改图片尺寸  
  3. crop to square / 1:1 crop / 裁成正方形  
  4. crop image without uploading / local crop（隐私 → FAQ）  
  5. crop to aspect ratio 16:9 / 4:3（同页比例预设，不拆 URL）
- 用户真实任务：从照片中框出需要的区域，和/或改成指定宽高或比例后下载，用于头像、封面、上站素材。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  拖放、矩形选区、比例锁、宽高输入、旋转偶尔有、「本地/隐私」口号、Download；部分强制上传；少数预设社交比例；极少讲清「裁剪坐标相对原图像素」与「放大超过原图」策略。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **坐标系**：选区是相对原图像素还是预览缩放后的显示坐标——须映射回源像素  
  2. **放大策略**：输出宽高大于选区时是插值放大还是禁止放大（v1 建议默认不放大像素，仅缩小/裁切）  
  3. **与压缩分工**：改尺寸 ≠ 压到目标 KB；链到 `image-compress`  
  4. **EXIF**：Canvas 导出通常剥 EXIF——明示并链 `image-exif`  
  5. **多语言检索向**：多数英文；本站十语 brief 为增量（§3.1 ⑦）
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** Rules：源矩形 `(sx,sy,sw,sh)` → 目标画布 `(dw,dh)` → `toBlob`  
  - **②** 边界：空选区、超出原图、禁止无意义放大、动画首帧、大图内存  
  - **③** Use cases：头像 1:1；封面 16:9；固定像素上站  
  - **④** 对照表：自由裁 / 比例锁 / 指定宽高 各自行为  
  - **⑤** References：MDN drawImage / toBlob  
  - **⑥** 本地隐私：不上传  
  - **⑦** 十语 brief  
  - **⑧** Example：固定「原图 → 选区 → 输出尺寸」叙述  
  - **⑨** Related ≥2
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：  
  **合并**。裁剪与改尺寸同一流水线；「正方形 / 16:9 / 指定 800×600」仅预设不同。独立 `crop-to-square` / `instagram-crop` 易成 doorway。
- [x] 权威来源 URL：  
  - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage  
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob  
  - https://fengyuanchen.github.io/cropperjs/ （若实现采用；否则可不列或仅 References）
- [x] 行业/场景 Use case 文案草稿：  
  1. 头像：1:1 → 常用输出 512 / 400 / 256  
  2. 封面/横幅：16:9 → 1920×1080、1200×675、1200×630  
  3. 上站：最长边 1200 或精确 WxH（见下方默认预设表）
- [x] 边界/失败案例草稿：未选图；选区宽/高为 0；输出尺寸非法；源无法解码；GIF 仅首帧；超大图警告；JPEG 透明铺底
- [x] 结果区信息如何落到可索引 Example / FAQ：结果区显示选区像素与输出 WxH/MIME；Example/FAQ 复述；FAQ 写隐私与是否放大
- [x] Related / 主题内链计划（≥2）：`image-compress`、`image-format-converter`（实现时可再链 `image-exif`）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：选区映射 + drawImage + toBlob |
| 2 | 边界/失败 | FAQ + UI：空选区、不放大、大图 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 自由 / 比例 / 指定尺寸 |
| 5 | 权威引用 | References |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` brief + ≥3 轮 |
| 8 | 数值示例 | Example |
| 9 | 主题内链 | related ≥ 2 |

**硬性勾选（计划落地）**：① ② ③ ④ ⑥ ⑦ ⑧ ⑨（+⑤）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 · 方向 A.2 · catalog **`image`** · P0 |
| 场景与行业 | 头像/封面/上站通用裁剪改尺寸（非平台规格包） |
| 技术（包、Tier、本地处理） | **Tier 0**：解码 + 预览上矩形选区（或数值 sx/sy/sw/sh）+ 比例预设 + 输出宽高；Canvas `drawImage` + `toBlob`（JPEG/WebP/PNG）。可选后续 Tier 1：`cropperjs` 动态 import。**不上传**；v1 **默认不放大**超过选区像素（输出更大时等比限制在选区分辨率内并提示） |
| Title (en) | `Crop & Resize Image — Local Aspect Presets \| {Brand}`（结果向，勿「SX, SY, SW…」参数枚举） |
| Description 要点 | ≥120；步骤（选图→框选/选比例→设输出尺寸→下载）+ 本地；示例场景 |
| Schema | WebApplication + BreadcrumbList；`#cat-image`；`MultimediaApplication` |
| FAQ 要点（≥3） | 是否上传；会否放大发糊；与压缩工具区别；比例如何锁定；动画/EXIF |
| Disclaimer / References | 非 YMYL；MDN drawImage / toBlob |
| related | `image-compress`, `image-format-converter` |
| 验收 | `lint:seo`；`03` ≥3 轮；可裁可改尺寸并预览；无近义薄页；README；catalog `image`；sitemap 仅 en/zh 默认收录 |
| 工期粗估 | ~1–1.5d（选区 UI + IG 文案 + 十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 交互规格（给实现用）

- 输入：
  - 文件选择 / 拖放（JPEG/PNG/WebP 等可解码位图）
  - **模式**：自由裁剪 | 比例锁定（见下表）| 仅改尺寸（整图缩放到目标宽高；v1：**适应** contain / **铺满** cover 二选一写清）
  - **选区**：在预览上拖拽/调整矩形；显示源图像素坐标与宽高
  - **输出尺寸**：宽 × 高（px）；快捷「与选区同尺寸」；**常用像素预设**一键填入（见下表）；锁定比例时改一边联动
  - **输出格式**：JPEG | WebP | PNG；JPEG 底色（白/黑/自定义）
  - **质量**（JPEG/WebP）：默认 0.9
  - 操作：Apply / Download / Clear / Load sample（进页可自动加载示例并出结果，左右预览，对齐 compress 体验）
- 输出：
  - 预览裁切结果 + **选区 WxH → 输出 WxH / MIME / 字节**
  - Download 扩展名与 MIME 一致；校验 `blob.type`

### v1 默认预设（常规常用；同页快捷项，不拆 URL）

> **边界**：下列为通用场景像素/比例，**不是** Amazon / App Store / 某社交平台官方合规表（方向 B 另页）。UI 标签用场景名（头像、封面…），可提「常见用法」；勿写「官方标准 / 保证通过审核」。

#### A. 比例锁定（选区 aspect）

| 预设 ID | 比例 | UI 标签建议（en / zh） | 典型用途 |
|---|---|---|---|
| `free` | — | Free / 自由 | 任意框选 |
| `1-1` | 1:1 | Square / 正方形 | 头像、商品方图 |
| `4-3` | 4:3 | 4:3 | 传统横向照片 |
| `3-4` | 3:4 | 3:4 | 竖向照片、海报 |
| `3-2` | 3:2 | 3:2 | 相机常见横向 |
| `2-3` | 2:3 | 2:3 | 竖向印刷/海报 |
| `16-9` | 16:9 | 16:9 | 封面、横幅、视频截帧 |
| `9-16` | 9:16 | 9:16 | 竖屏全幅 |
| `21-9` | 21:9 | 21:9 | 超宽横幅 |
| `custom` | 自定义 | Custom / 自定义 | 用户输入 W:H |

**默认选中**：`1-1`（进页有示例时）或 `free`（用户自选图后保持上次）；实现时二选一并写清。

#### B. 常用输出像素（一键填入 W×H；可再手改）

按场景分组；点击 = 填输出宽高，并尽量把选区比例锁到同宽高比（若当前为自由裁则提示可锁定）。

| 分组 | 预设 ID | W×H (px) | UI 标签建议 | 说明 |
|---|---|---|---|---|
| 头像 / 方图 | `out-512` | 512×512 | Avatar 512 | 通用头像常用 |
| | `out-400` | 400×400 | Avatar 400 | 中等头像 |
| | `out-256` | 256×256 | Avatar 256 | 小头像 / 列表 |
| | `out-128` | 128×128 | Avatar 128 | 极小图标位 |
| | `out-800sq` | 800×800 | Square 800 | 商品方图常用 |
| | `out-1000sq` | 1000×1000 | Square 1000 | 高清方图 |
| 缩略图 | `out-150` | 150×150 | Thumb 150 | 列表缩略 |
| | `out-300` | 300×300 | Thumb 300 | 卡片缩略 |
| 横幅 / 封面 | `out-1920-1080` | 1920×1080 | HD 1080p | 全高清横图 |
| | `out-1280-720` | 1280×720 | HD 720p | 轻量横图 |
| | `out-1600-900` | 1600×900 | Cover 16:9 | 宽封面 |
| | `out-1200-675` | 1200×675 | Cover 1200 | 博客/页头 16:9 |
| | `out-1200-630` | 1200×630 | Share 1200×630 | 链接预览常见比例（非某平台官方承诺） |
| | `out-1920-600` | 1920×600 | Wide banner | 站头横幅 |
| 竖屏 | `out-1080-1920` | 1080×1920 | Portrait 9:16 | 竖屏全幅 |
| | `out-1080-1350` | 1080×1350 | Portrait 4:5 | 竖向帖常见 |
| Web 常用 | `out-1200` | 最长边 1200（等比） | Max edge 1200 | 「仅改尺寸」快捷；非整图强制裁切 |
| | `out-800w` | 宽 800、高按比例 | Width 800 | 正文插图常宽 |
| 自定义 | `out-custom` | 用户输入 | Custom px | 任意 W×H |

**默认输出**（有示例图时）：选区 1:1 → 输出 **512×512** JPEG（质量 0.9）；「与选区同尺寸」始终可用。

**UI 呈现**：比例用 segmented / 下拉；像素预设用分组下拉或芯片组（避免首屏堆满）。勿做成多 URL。

- 核心规则 / 算法：
  1. 预览缩放比 `displayScale`；用户矩形映射回源像素并 clamp 到图像边界  
  2. `canvas.width/height = outputW/H`；`drawImage(img, sx,sy,sw,sh, 0,0,dw,dh)`  
  3. 若 `outputW > sw` 或 `outputH > sh`：v1 缩放到不超过选区像素（保持比例）并 status 提示「未放大」  
  4. JPEG 先铺底色再绘制  
  5. Rules/FAQ：导出通常无 EXIF
- 失败与边界：
  - 无法解码；选区无效；软上限 25MB / 8192 边；动画仅首帧  
  - PNG 输出体积可能不降——提示可去 compress
- 示例 Input → Output：
  - 3000×2000 照片 → 1:1 选区 → 输出 **512×512**（或 800×800）JPEG  
  - 整图「仅改尺寸」→ 最长边 **1200** 等比缩小  
  - 16:9 封面 → 输出 **1920×1080** 或 **1200×675**

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
- [x] Disclaimer — 非 YMYL
- [x] `03-locale-briefs.md` 已填
- [x] README（实现时）
- [x] **不**注册近义薄页 slug

## 与相邻工具边界

| 工具 | 本页不做 | 本页可做 |
|---|---|---|
| `image-compress` | 目标 KB / 质量迭代主任务 | 改完尺寸后可链过去再压体积 |
| `image-format-converter` | 格式互转深度对照 | 导出时可选 JPEG/WebP/PNG |
| 方向 B 平台图包 | 具名平台多尺寸 ZIP | 通用比例/像素；Related 未来可链 |
| `image-exif` | 字段读/清 | 说明导出剥 EXIF |
