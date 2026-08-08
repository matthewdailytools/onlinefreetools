# 工具方向 — 三个并列开发方向

**日期**: 2026-07-28（修订：三方向并列；…；**2026-08-08** ezyZip / ToolDone / iLovePDF；**同日** 补充 [Omni Calculator](https://www.omnicalculator.com/) 公式对照）  
**标签**: `产品规划`, `工具方向`, `浏览器JS`, `场景桥接`, `行业工具`, `多规格交付`, `设计师工具`, `压缩包`  
**目标站点**: https://onlinefreetools.org

**关联文档**:
- [JS 工具包调研](./2026-07-09-js-tool-packages-survey.md) — 完整 npm 包枚举（技术附录）
- [音视频可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md) — 多媒体深度分析（本文方向 A 引用其结论并扩展到全品类）
- [Google SEO 策略与落地](./2026-07-28-google-seo-strategy-implementation.md)
- [每工具开发与 SEO 方案](./2026-07-28-per-tool-dev-seo-plans.md)
- [工具页面 SEO 规则](./SEO_TOOL_RULES.md)
- 工具目录源：`src/site/tool-catalog.json`
- [工具清单总表](./2026-08-08-tool-inventory-table.md) — 名称 / 场景·渠道 / slug / 功能 / 分类 / 角色 / 输入 / 输出（自本文提炼）
- [ToolDone 计算器快照](./competitor-refs/tooldone-2026-08-08/README.md) — 全量 en/zh 链接归档 + 公式对照精选（2026-08-08）
- [Omni Calculator 快照](./competitor-refs/omnicalculator-2026-08-08/README.md) — 全量 en 链接归档 + 公式对照精选（~3867；2026-08-08）
- [Omni Calculator SEO 流量策略](./2026-08-08-omnicalculator-seo-traffic-strategy.md) — 对标打法、一页吃长尾、how-to 命名、Google/Bing 红线（2026-08-08）
- [iLovePDF 工具快照](./competitor-refs/ilovepdf-2026-08-08/README.md) — PDF 全家桶 URL + 本站可做/不做决策（2026-08-08）

> **本文职责**：分别定义三条**独立**的工具开发方向（做什么、技术怎么落地、成熟度、候选清单）。  
> **不是**要求每个工具同时满足「JS × 场景 × 行业」三维交叉；一个工具归入**其中一个**主方向即可立项。

---

## 0. 三方向总览（并列，非交叉）

| 方向 | 一句话 | 回答的问题 | 主要产出形态 |
|---|---|---|---|
| **A. 浏览器 JS 能力工具** | 浏览器/Workers 里「技术上能做什么、做到什么程度」 | 包/API 成熟度、体积、隐私、CWV | 按技术品类的工具池 + 成熟度评级 |
| **B. 场景桥接转换工具** | 用户工作流里「格式/状态从 A 到 B」需要什么桥 | 岗位、输入、输出、上下游 | 按场景链的转换/清洗/计量工具 |
| **C. 行业专属工具** | 某个行业「只认行话与标准」的任务工具 | 痛点任务、术语、规范引用 | 按垂直行业的针对性计算器/校验器 |

```
三个方向各自排期、各自验收
  ├─ 方向 A：技术可行 → 选成熟度高、体积可控的品类先做
  ├─ 方向 B：场景调研 → 按用户旅程补「桥」工具
  └─ 方向 C：行业调研 → 按垂直深耕，拒绝泛化换皮
```

**共用红线**（三条方向都遵守）：

1. 空壳变体页（仅改 slug/title）— 禁止  
2. 无增量机翻堆页 — 禁止  
3. 偏离定位的重后端（完整视频转码站、抄袭检测 SaaS、国家报税）— 默认不做  
4. 每周 1–2 个高质量工具（含 10 语审核）优于每周 10 个薄页  

**相对竞品**：竞品靠数量铺量；本站靠多语言 + 教育式说明 + 本地隐私；方向 B/C 再叠加场景或行业语境，方向 A 则强调「能讲清规则的真能力」。

---

## 方向 A — 浏览器 JS 支持的工具开发方向

> 风格对齐 [音视频可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md)：按品类给出 **成熟度、实现方式、限制、推荐包、可做工具、架构建议**。  
> 完整包表见 [JS 工具包调研](./2026-07-09-js-tool-packages-survey.md)；本节是**产品可读的能力地图**，不是包百科再抄一遍。

### A.0 运行环境与加载策略

| 环境 | 适合场景 | 主要限制 |
|---|---|---|
| **浏览器** | 文件处理、多媒体、隐私敏感计算 | 内存上限、WASM 首次加载体积 |
| **Cloudflare Workers** | 网络代理、轻量转换、Header 抓取 | 无真实 `fs`；WASM 体积受限 |
| **Web Worker** | 大文件哈希、图片批处理、FFmpeg | `postMessage` 通信 |
| **两者结合** | 计算在浏览器，跨域/代理在 Worker | 现有 `website-headers` 即此模式 |

**隐私默认**：优先「文件/粘贴内容不上传服务器」。

**选型优先级**：

1. 零依赖 / 极小体积（原生 API 优先）  
2. Tree-shakeable、同构可用（浏览器 + Workers）  
3. WASM / 大模型 **用户触发后再** `import()`  
4. 可写出 SEO 可描述的输入 → 规则 → 输出  
5. 安全默认值（DOMPurify、演示级加密声明、本地处理声明）

**加载分层（CWV）**：

| 层级 | 体积 | 时机 | 示例 |
|---|---|---|---|
| Tier 0 | 零依赖内联 | 页面打开 | JSON、Base64、哈希、Unicode 清理 |
| Tier 1 | < 200KB 动态 import | 打开或首次交互 | `js-yaml`、`papaparse`、`zod`、`pdf-lib`、`qrcode` |
| Tier 2 | > 1MB WASM/模型 | **点击后再加载** | FFmpeg、Tesseract、Transformers.js、Squoosh |

```
用户打开工具页
  ├─ Tier 0：立即可用
  ├─ Tier 1：首次交互动态 import
  └─ Tier 2：明确按钮「加载引擎」后再拉 WASM
         ↓
  Web Worker 处理（大文件）→ Blob 下载
```

---

### A.1 文本与文档格式 — ✅✅✅ 非常成熟

| 功能 | 实现方式 | 备注 |
|---|---|---|
| Markdown → HTML | `marked`（**已有**） | 配合 `DOMPurify` 预览 |
| HTML → Markdown | `turndown` | 可与现有页双向合并 |
| YAML ↔ JSON | `js-yaml` | Tier 1，配置/数据常用 |
| CSV ↔ JSON | `papaparse` + `csv-stringify` | 类型推断需说明 |
| XML / TOML ↔ JSON | `fast-xml-parser` / `@iarna/toml` | |
| HTML 实体编解码 | `he` 或原生 | Tier 0 |
| 文本 Diff | `diff` | 行/词级 |
| SQL / JSON 美化 | `sql-formatter` / 原生 `JSON.stringify` | |

**可落地工具（方向 A 候选）**：YAML↔JSON、CSV↔JSON、HTML↔Markdown、文本 Diff、HTML 实体、SQL 格式化。

**瓶颈**：超大文件（>10MB）宜 Worker；用户粘贴 HTML 必须消毒。

---

### A.2 图片处理 — ✅✅✅ 非常成熟

| 功能 | 实现方式 | 备注 |
|---|---|---|
| 格式转换 PNG/JPEG/WebP/AVIF | Canvas `toBlob` | 零依赖首选 |
| 压缩/缩放/裁剪 | Canvas / OffscreenCanvas | Worker 友好 |
| 智能压缩 | `browser-image-compression` (~10KB) | Tier 1 |
| 高级编解码 | `@squoosh/lib` WASM | Tier 2，体积大 |
| EXIF 读/清 | `exifr` | 隐私场景强 |
| 主色提取 | `colorthief` | 设计引流 |
| **多图拼接（N→1）** | Canvas 计算总画布 + 逐张 `drawImage` | 横排 / 竖排 / 网格；间距、背景色、对齐 |
| **图层叠加** | Canvas + `globalAlpha` / `globalCompositeOperation` | 底图 + 叠图；透明度、混合模式、拖拽定位（UI 可选 Tier 1） |
| **翻转 / 镜像** | Canvas `scale(-1,1)` 或 `scale(1,-1)` | Tier 0，无损变换 |
| **灰度** | Canvas `getImageData` 加权灰度，或导出前 `filter: grayscale(100%)` | Tier 0 |
| **描边 / 边框** | Canvas 扩边后 `strokeRect` / 外描边 | Tier 0 |
| **文字 / 图片水印** | Canvas `fillText` / 叠 PNG Logo | 字号、颜色、透明度、旋转、九宫格位置 |
| **多图 → PDF** | `pdf-lib` 嵌入 JPEG/PNG 页 | 见 A.5；与「拼接成一张图」不同 |

**推荐架构**：图片 → Canvas 直接处理 ✅（零依赖）；大图用 OffscreenCanvas + Worker；**N→1 合成**优先单页多模式（横/竖/网格），勿拆 `merge-horizontal` / `merge-vertical` 等近义薄页。

**可落地工具（单图）**：图片压缩、格式互转、尺寸裁剪、EXIF 清除、图片↔Base64、翻转、灰度、边框、文字水印。

**可落地工具（多图 / 跨品类）**：多图合并（`image-merge`）、图层叠加（`image-overlay`）、多图转 PDF（`images-to-pdf`，主挂 A.5 / B13）。

**结论**：技术无阻塞；方向 A 可排期。是否与方向 B/C 结合由产品另选，**不强制**。

#### A.2.1 竞品对照 — [Merge Images](https://mergeimages.co/)（2026-08 快照）

> 该站以 **浏览器本地处理**、**免费无水印** 为主卖点；工具链偏 **N→1 合成 / 图层 / 导出**，与本文 B.9 等 **1→N 平台尺寸包** 形成互补（方向相反，勿混为一页）。

| Merge Images 功能 | 用户任务摘要 | 本站文档原覆盖 | 建议归属 | 建议 slug / 备注 |
|---|---|---|---|---|
| [Merge Images](https://mergeimages.co/) | 2+ 图横/竖/网格拼成 **一张**；可调间距与背景 | ❌ 未列 | A + **B13** | `image-merge`；单页三布局 + Rules 表 |
| [Overlay Images](https://mergeimages.co/overlay-images) | 底图 + 叠图；透明度、混合、拖拽/缩放/旋转 | ⚠️ 仅泛提「水印」 | A | `image-overlay`；与水印页互链 |
| [Image to PDF](https://mergeimages.co/image-to-pdf) | 多图各成 PDF 一页；页面方向与 fit | ⚠️ A.5 有 PDF↔图，未写多图工作流 | A.5 + B13 | `images-to-pdf` |
| [Instagram Post Maker](https://mergeimages.co/instagram-post-maker) | 多图拼贴 → **1080×1080** 方图 | ❌ B9 为 1→N 封面，非 N→1 拼贴 | **B13** | `instagram-post-collage` 或 `image-merge` 内预设 |
| [Facebook Post Maker](https://mergeimages.co/facebook-post-maker) | 多图拼贴 → **1200×630** 横图 | ❌ 同上 | **B13** | `facebook-post-collage` 或预设 |
| [Add Watermark](https://mergeimages.co/add-watermark) | 文字水印：字号/颜色/透明度/旋转/位置 | ✅ A.2 已列「水印」 | A | `add-watermark`（与 overlay 分工：单图文字 vs 双图层） |
| [Flip Image](https://mergeimages.co/flip-image) | 水平 / 垂直镜像 | ❌ 未列 | A | `flip-image`；P2，可并入裁剪页「变换」区或独立 |
| Add Border / Grayscale / PNG→SVG / Color Picker | 站脚有入口，部分 URL 404 或弱实现 | 灰度/边框可 Canvas；PNG→SVG 需矢量化策略 | A | 灰度/边框 P2；**PNG→SVG 默认不做**（易薄页 + 真矢量化需专用库） |
| AI Image Combiner（互推） | 「智能」多图合成 | — | **不做** | 无本地可验证规则则违反 people-first / 须声明误差 |

**可借鉴（对齐本站红线）**：

- 本地处理声明、拖拽上传、Before/After 与教程竖拼等 **Use cases 叙事**  
- 平台发帖器绑定 **具名尺寸 + 官方引用**（Instagram 1080×1080、Facebook 1200×630）——写法同 B.9，但模式是 **N→1**  
- Focus Mode / 预览区等信息架构

**应避免**：

- 为每个布局方向单独开 slug（doorway）  
- 「AI Combiner」类无法写清规则的黑盒页  
- 与 `social-share-image-pack`（1→N）混标题或互抢 intent

---

### A.3 音频 / 语音 — ✅✅ 可用

| 功能 | 实现方式 |
|---|---|
| 麦克风录制 | `MediaRecorder` / `getUserMedia` |
| MP3 编码 | `lamejs` WASM（原生不支持 MP3 编码） |
| 剪辑/混音 | Web Audio API |
| STT / TTS | Web Speech API（Chrome 最佳） |

**瓶颈**：MP3 依赖 WASM；AAC 依赖 WebCodecs 或 fdk-aac；Safari 行为差异需测。

**可落地工具**：在线录音机、WAV↔MP3、音频裁剪、音量标准化、简易 TTS。

**结论**：成熟可用；非默认第一批，但方向 A 内可独立立项。

---

### A.4 视频处理 — ⚠️ 可行但有局限

| 功能 | 实现方式 | 限制 |
|---|---|---|
| 截图 / 简单截取 | Canvas + `drawImage(video)` | 大文件慢 |
| 完整转码/拼接 | `FFmpeg.wasm` (~20–30MB) | 首载大、比原生慢 30–50% |
| 高效编解码 | WebCodecs | 以 Chrome/Edge 为主 |

详见 [音视频可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md)。

**关键决策**：

- 简单截图/静音轨 → Canvas，不必 FFmpeg  
- 真转码 → FFmpeg.wasm + **点击后加载** + 进度条  
- 移动 Safari 须 POC 内存后再上线  

**结论**：方向 A 标记为「有条件可做」；默认 P2，不阻塞 A.1/A.2。

---

### A.5 PDF 与压缩包 — ✅✅✅ / ✅✅（分层）

> PDF 与 **ZIP 核心路径** 非常成熟；**多格式归档（RAR/7Z/ISO…）** 浏览器端可读但引擎重，须 Tier 2 懒加载。  
> 归档竞品：**A.5.1** [ezyZip](https://www.ezyzip.com/zh-hans.html)。PDF 竞品：**A.5.2** [iLovePDF](https://www.ilovepdf.com/)（快照 [competitor-refs/ilovepdf-2026-08-08](./competitor-refs/ilovepdf-2026-08-08/README.md)）。

#### A.5.0 能力与成熟度

| 功能 | 成熟度 | 实现方式 | 备注 |
|---|---|---|---|
| PDF 合并 / 拆分 / 删页 / 重排 | ✅✅✅ | `pdf-lib` | 纯 JS；可单页「整理」多模式 |
| PDF 旋转 / 页码 / 文字·图片水印 | ✅✅✅ | `pdf-lib` | Tier 1 |
| PDF 裁切页边距 | ✅✅ | `pdf-lib` 裁 box / 内容重绘 | 声明非像素级编辑器 |
| PDF ↔ 图片（页渲染 / 图嵌 PDF） | ✅✅✅ | `pdfjs-dist` + Canvas / `pdf-lib` | 多图→PDF **已有** `images-to-pdf` |
| PDF 抽文本 / → Markdown | ✅✅ | `pdfjs-dist` 文本层 | 扫描件无文本层则失败须说明 |
| PDF 压缩（有限） | ✅✅ | 降采样嵌入图 + 重写 | **须声明**非云端重编码级；Tier 1/2 |
| PDF 密码保护 / 用户密码解锁 | ✅✅ | `pdf-lib` 加密 API | 解锁=用户提供密码；**非破解** |
| PDF 预览 | ✅✅✅ | `pdfjs-dist` | 首屏勿全量预加载 worker |
| PDF 比对（可视化） | ⚠️✅ | 双页 Canvas 叠加/翻页 | P2；非法律级 diff |
| PDF 涂黑（红action） | ⚠️✅ | 不透明矩形覆盖 + 扁平化 | 须警告「真删除需专业流程」 |
| OCR 扫描 PDF | ⚠️✅ | `tesseract.js` Tier 2 | 与 A.11 同；默认 P2 POC |
| PDF ↔ Word/PPT/Excel 高保真 | ⚠️ | 无稳定纯浏览器方案 | **默认不做**（易虚假承诺） |
| 电子签 / AI 摘要·翻译 | — | 重后端或黑盒 AI | **不做** |
| 修复损坏 PDF | ⚠️ | 启发式 | **默认不做** |
| **创建 ZIP**（多文件/文件夹结构） | ✅✅✅ | `fflate`（首选）/ `jszip` | Tier 1；压缩级别可暴露；目录树用 `webkitRelativePath` / File System Access |
| **解压 ZIP**（列表 / 单文件 / 全部） | ✅✅✅ | `fflate` / `jszip` | Tier 1；支持预览常见 MIME（图/文本） |
| Gzip / Deflate 文本或单文件 | ✅✅✅ | `fflate` / `CompressionStream` | Tier 0/1 |
| **TAR / TAR.GZ** 打包与解包 | ✅✅ | `fflate` + 轻量 tar 编解码，或 `libarchive-wasm` 只读 | Unix/源码包场景；可与 ZIP 同页「输出格式」Tab |
| **解压 7Z / RAR / ISO 等** | ✅✅ | `libarchive-wasm` / `libarchive.js` / 同类 WASM | **Tier 2**；只读为主；RAR 创建一般不可用（专有） |
| **创建 7Z** | ⚠️✅ | 专用 WASM 编码器（生态弱于解压） | 默认 **不做独立卖点**；压缩比优势不足以抵体积与维护成本 |
| ZIP 密码（AES / ZipCrypto） | ✅✅ | 视库支持（如 `fflate` 扩展或专用 AES ZIP 包） | 须写清算法与兼容性；非「破解」工具 |
| 分卷 ZIP / 多卷合并 | ⚠️ | 自研分片协议 + 标准分卷语义 | 边缘场景；易与竞品薄页撞车，**默认 P2 / 不做** |
| 「修复」损坏 ZIP | ⚠️ | 启发式重写中央目录 | 成功率不可保证；**默认不做**（易虚假承诺） |
| 归档格式互转（RAR→ZIP 等） | ✅✅ | **解压 → 再打 ZIP**（同一引擎） | 产品上应是**一种能力的模式**，不是每对格式一页 |

**瓶颈**：

- >100MB PDF / 超大 ZIP：须 Web Worker +（可选）File System Access 流式写出；移动 Safari 内存 POC。  
- 多格式 WASM（libarchive 类）体积常 **数百 KB～数 MB**，必须「加载引擎」后再拉。  
- 路径穿越（`../`）、符号链接、超大单文件：解压须安全校验与上限提示。

**可落地工具（方向 A，优先）**：

| 建议 slug | 能力摘要 | Tier | 优先级 | 检索语序依据（en 主意图） |
|---|---|---|---|---|
| `create-zip-file` | 多文件/文件夹 → ZIP；可选压缩级 | 1 | **P0** | *create zip file* / *zip file online*（动词在前；**不用**工程向 `zip-create`） |
| `unzip-file` | ZIP → 列表 / 预览 / 单文件或全部下载 | 1 | **P0** | *unzip file* / *unzip online* / *extract zip*（口语 *unzip* 优先于 `zip-extract`） |
| `gzip-file`（或并入文本工具） | 文本/单文件 Gzip | 0/1 | P1 | *gzip file* / *compress gzip* |
| `extract-archive` | ZIP + TAR(.GZ) +（懒加载）7Z/RAR 等只读解压 | 1→2 | P1（在 ZIP 页稳定后） | *extract archive*；格式差异写进页内表，不拆 `unzip-rar` 等 |
| `convert-archive-to-zip` | 任意已支持归档 → 标准 ZIP（内部＝解压+打包） | 1→2 | P2（可作 `extract-archive` 导出模式） | *convert rar to zip* 等长尾用 Use cases 覆盖，不按源格式拆页 |
| `merge-pdf` | 多 PDF → 一个（可调序） | 1 | **P0** | *merge pdf* / *combine pdf* |
| `split-pdf` | 按页/范围拆成多文件或 ZIP | 1 | **P0** | *split pdf* |
| `organize-pdf` | 删页 / 重排 / 抽页（可与 merge/split 互链或首发合并） | 1 | P1 | *organize pdf* / *remove pdf pages* |
| `compress-pdf` | 有限压缩 + 体积前后对比 | 1→2 | P1 | *compress pdf*；声明局限 |
| `rotate-pdf` | 90° 旋转页 | 1 | P1 | *rotate pdf* |
| `pdf-watermark` | 文字/图片水印 | 1 | P1 | *pdf watermark*；与图片水印 `add-watermark` 互链 |
| `pdf-page-numbers` | 添加页码 | 1 | P1 | *add page numbers to pdf* |
| `pdf-to-jpg` / `jpg-to-pdf` | 页→图；图→PDF（后者对齐已有 `images-to-pdf`） | 1 | P1 | *pdf to jpg* / *jpg to pdf*；**忌**再拆 png/webp 薄页 |
| `pdf-to-markdown` | 文本层 → MD | 1 | P1 | *pdf to markdown* |
| `protect-pdf` / `unlock-pdf` | 设密 / 用户密码解密 | 1 | P2 | *protect pdf* / *unlock pdf*；解锁须有密码，非破解 |
| `crop-pdf` | 裁切页边距 | 1 | P2 | *crop pdf* |
| `pdf-page-to-image-sizes` | 单页 → 多平台尺寸（B.3） | 1 | P2 | 见 B.3 |

**Slug 命名原则（归档簇 / PDF 簇）**：优先 **用户检索语序**（动词/任务词在前，如 create / unzip / merge pdf），避免 `名词-动词` 的 API 风格（`zip-create`、`pdf-merge` 可接受因检索亦常见 *merge pdf* → 统一用 **`merge-pdf`**）。多语言检索词落在 title/H1/FAQ，**不**为每种 Office 后缀再开 slug。

**架构建议**：

```
打开工具页（Tier 0 UI）
  ├─ ZIP 路径：首次交互动态 import fflate（Tier 1）
  ├─ 非 ZIP 归档：按钮「加载多格式引擎」→ libarchive-wasm（Tier 2）
  └─ Web Worker 解压/打包 → Blob 下载或 File System Access 直写
```

**结论**：ZIP 创建/解压应尽快立项（与本站 1→N「下载 ZIP」叙事一致）；**禁止**用「每格式一 URL」追赶 ezyZip 的页面数量。

#### A.5.1 竞品对照 — [ezyZip](https://www.ezyzip.com/zh-hans.html)（2026-08 快照）

> 中文入口：[zh-hans.html](https://www.ezyzip.com/zh-hans.html)。核心卖点：**浏览器本地 WASM**、无需上传、无注册、强调大文件与隐私；变现靠广告 + [ezyZip Pro](https://ezyzip.pro/) 桌面端。  
> 与本站红线的关键冲突点：**按格式/转换方向拆出大量近义 URL**（解压 ZIP / RAR / 7Z / JAR / APK…；RAR→ZIP、7Z→ZIP…；ZIP→PDF / MP3 / PNG…），属于规模化内容风险面——本站**只借鉴能力与 UX，不复制铺量结构**。

##### 功能地图（压缩 / 解压相关）

| ezyZip 品类 | 代表 URL / 能力 | 用户真实任务 | 本站建议 |
|---|---|---|---|
| **创建 ZIP** | [/cn.html](https://www.ezyzip.com/cn.html)：多文件、压缩级、文件夹、拖放 | 打包发送 / 备份 | ✅ `create-zip-file`（P0） |
| **创建 7Z / TAR / TAR.GZ** | 独立页：create-7z、create-tar、create-tar-gz | Unix 归档或更高压缩比 | ⚠️ TAR(.GZ) 可作 ZIP 页输出格式；**独立 7Z 创建默认不做** |
| **压缩文件夹** | [/cn-f.html](https://www.ezyzip.com/cn-f.html) | 整夹打包 | ✅ 并入 `create-zip-file`（文件夹选择器），**不拆第二 slug** |
| **分卷 ZIP** | split-zip | 邮件/网盘分片上传 | ❌ 默认不做（边缘 + 易薄页） |
| **解压 ZIP** | [/cn-unzip.html](https://www.ezyzip.com/cn-unzip.html)：列表、搜索、预览、密码、全部保存到文件夹、Dropbox | Chromebook / 无本机解压软件 | ✅ `unzip-file`（P0）；File System Access「全部保存」作增强 |
| **解压 RAR / 7Z / ZIPX / ISO / TAR…** | 每格式一页（rar、7z、iso、tar、jar、apk…） | 收到非 ZIP 包 | ✅ **单页** `extract-archive` + 格式说明表；❌ 不按扩展名拆页 |
| **归档 → ZIP** | RAR/7Z/TAR/JAR/APK→ZIP 各一页 | 「别人发了 RAR，我只要 ZIP」 | ✅ 导出模式；❌ 不按「源格式→ZIP」拆 URL |
| **ZIP → PDF/MP4/MP3/PNG/TTF…** | zip-pdf、zip-mp4、zip-mp3… | 多数是「从包里取出该类型文件」或误导性「转换」 | ❌ **不做**独立工具（doorway / 意图不清）；预览+按类型筛选即可 |
| **修复 ZIP** | repair-zip | 损坏包抢救 | ❌ 默认不做（成功率声明难） |
| **密码 ZIP / 恢复密码** | 创建加密 ZIP；「密码恢复」 | 加密分享 vs 破解 | ✅ 可选「创建加密 ZIP」；❌ **不做密码破解/恢复** |
| **图像/音视频压缩与转换** | compress-images、媒体转换器 | 媒体体积 | 归 A.2 / A.3 / A.4，**不挂在归档工具簇** |
| **P2P 传文件** | share-files | 点对点传输 | ❌ 偏离工具站定位 |

##### UX / 技术可借鉴（对齐本站隐私默认）

| 点 | ezyZip 做法 | 本站落地建议 |
|---|---|---|
| 本地处理叙事 | 反复强调「不上传、可断网仍能完成」 | 页首 + FAQ 写清；与 TinyWow 上传型竞品差异化 |
| 流式 / 大文件 | File System Access、`FileSystemWritableFileStream`、Worker、宣称 Memory64 WASM | ZIP 路径先做好 Worker；大文件直写作 Chrome/Edge 增强，Safari 降级 Blob |
| 包内浏览 | 文件夹树 / 平铺列表、搜索文件名、单文件预览 | `unzip-file` MVP 必含：目录列表 + 可选预览 |
| 教育内容 | How-to、密码包、子文件夹提取、OS/浏览器支持 | 本站用 Information Gain：ZIP vs 7Z vs RAR 差异表、路径安全、压缩级 vs 速度 |
| 扩展生态 | 浏览器扩展「从链接解压」、Dropbox | **首期不做**；降低权限与合规面 |

##### 必须避免（对照本站红线 / Google spam）

1. **按扩展名 / 转换对拆薄页**（`unzip-rar`、`unzip-7z`、`rar-to-zip`、`zip-to-mp3`…）— 违反「空壳变体 / doorway」共用红线。  
2. **宣称「250+ 格式」却无规则可讲** — 对本站 SEO 是负担不是资产；格式支持用**一页内表格**说明即可。  
3. **ZIP→「任意文件类型」转换矩阵** — 多为取出/误标转换；无增量。  
4. **密码恢复 / 修复** 类易触 YMYL 或虚假功效的承诺。  
5. 用广告墙 + Pro 桌面端作为主商业模式时，仍可保持免费核心路径诚实——本站继续免费本地、无强制注册。

##### ezyZip vs 本站归档规划（速查）

| 维度 | ezyZip | 本站（本文） |
|---|---|---|
| 处理位置 | 浏览器 WASM 本地（强叙事） | **对齐**（隐私默认） |
| ZIP 创建 / 解压 | 深（含文件夹、密码、大文件） | **P0 核心**（`create-zip-file` / `unzip-file`） |
| 多格式解压 | 250+、每格式多 URL | **单页多格式** + Tier 2 引擎；格式表教育 |
| 归档互转 | 大量 X→ZIP / ZIP→Y 页 | **模式而非页面矩阵** |
| 媒体压缩 | 挂在同一品牌下 | **归图片/音视频品类**，不混归档 IA |
| SEO 结构 | 长尾 URL 海量 | **一带多场景**；禁 doorway |
| 变现 | 广告 + Pro 桌面 | 免费工具 + 多语言教育式 IG |

**相对竞品策略一句话**：ezyZip 赢在「格式覆盖 × URL 矩阵 × 本地大文件工程」；本站赢在「ZIP 核心闭环讲清楚 + 10 语检索向内容 + 与 1→N 素材 ZIP 交付互链」，**不拼格式数量**。

#### A.5.2 竞品对照 — [iLovePDF](https://www.ilovepdf.com/)（2026-08 快照）

> 入口：[ilovepdf.com](https://www.ilovepdf.com/) · [zh-cn](https://www.ilovepdf.com/zh-cn)。产品形态：上传型在线 PDF 全家桶 + Desktop/Mobile/Premium/Workflows；姊妹站 [iLoveIMG](https://www.iloveimg.com/)。  
> 全量 URL 表：[competitor-refs/ilovepdf-2026-08-08](./competitor-refs/ilovepdf-2026-08-08/README.md)。

##### 功能地图 → 本站决策

| iLovePDF 工具 | 用户任务 | 本站建议 | 建议 slug / 备注 |
|---|---|---|---|
| [Merge](https://www.ilovepdf.com/merge_pdf) / [Split](https://www.ilovepdf.com/split_pdf) | 合并、按页拆分 | ✅ P0 | `merge-pdf` / `split-pdf` |
| [Organize](https://www.ilovepdf.com/organize-pdf) / [Remove pages](https://www.ilovepdf.com/remove-pages) | 重排、删页 | ✅ P1 | `organize-pdf`（可含删/抽页） |
| [Compress](https://www.ilovepdf.com/compress_pdf) | 减小体积 | ✅ P1（声明有限） | `compress-pdf` |
| [PDF↔JPG](https://www.ilovepdf.com/pdf_to_jpg) / [JPG→PDF](https://www.ilovepdf.com/jpg_to_pdf) | 页出图、图入 PDF | ✅；图→PDF **已有** | `pdf-to-jpg`；`images-to-pdf` / `jpg-to-pdf` 勿双薄页 |
| [Rotate](https://www.ilovepdf.com/rotate_pdf) / [Watermark](https://www.ilovepdf.com/pdf_add_watermark) / [Page numbers](https://www.ilovepdf.com/add_pdf_page_number) / [Crop](https://www.ilovepdf.com/crop-pdf) | 轻编辑 | ✅ | `rotate-pdf` / `pdf-watermark` / `pdf-page-numbers` / `crop-pdf` |
| [Protect](https://www.ilovepdf.com/protect-pdf) / [Unlock](https://www.ilovepdf.com/unlock_pdf) | 加密 / 解密 | ✅ P2；解锁须用户密码 | `protect-pdf` / `unlock-pdf` |
| [PDF to Markdown](https://www.ilovepdf.com/pdf-to-markdown) | 给笔记/LLM | ✅ P1 | `pdf-to-markdown` |
| [Compare](https://www.ilovepdf.com/compare-pdf) / [Redact](https://www.ilovepdf.com/redact-pdf) | 对照、涂黑 | ⚠️ P2 | 须声明局限 |
| [OCR](https://www.ilovepdf.com/ocr-pdf) | 扫描件可检索 | ⚠️ Tier 2 POC | 挂 A.11；勿承诺云端级 |
| Word/PPT/Excel ↔ PDF | 办公互转 | ❌ 默认不做 | 高保真依赖服务端；已有 `images-to-word`/`ppt` 是**图片嵌入**，勿标「PDF 转换」 |
| [Edit](https://www.ilovepdf.com/edit-pdf) / Forms / Sign | 富编辑、表单、电子签 | ❌ / 远期 | 超出单任务工具定位 |
| [AI Summarizer](https://www.ilovepdf.com/pdf-summarize) / [Translate](https://www.ilovepdf.com/translate-pdf) | AI | ❌ | 无本地可验证规则 / 易 spam |
| [Repair](https://www.ilovepdf.com/repair-pdf) / [PDF/A](https://www.ilovepdf.com/convert-pdf-to-pdfa) / [HTML→PDF](https://www.ilovepdf.com/html-to-pdf) / Scan | 修复、归档标准、网页转 PDF、手机扫描 | ❌ 或边缘 | 修复不可保证；PDF/A/HTML/Scan 默认不做 |
| Workflows / Premium | 自动化订阅 | ❌ | 偏离 |

##### 可借鉴 vs 必须避免

| 可借鉴 | 必须避免 |
|---|---|
| 任务闭环文案（Merge/Split/Compress 三件套心智）；页内前后体积对比（压缩） | 上传墙作为唯一路径；Office 全矩阵薄页；AI 工具灌流量 |
| 工具互链（Organize ↔ Merge） | 「修复 / 电子签 / 云 OCR」虚假或不可验证承诺 |
| 多语言覆盖 | 为每种扩展名再拆 slug |

**相对竞品策略一句话**：iLovePDF 赢在「上传型全家桶 + 品牌心智」；本站赢在「**本地隐私** + 可讲清的 pdf-lib 规则 + 与已有图片→PDF/Word 工具互链」，只做 P0–P1 真能力，不拼工具个数。

---

### A.6 加密、编码与身份 — ✅✅✅

| 功能 | 实现方式 | 备注 |
|---|---|---|
| SHA / AES | Web Crypto API | 首选原生 |
| MD5 等 | `crypto-js` / `hash-wasm` | 大文件用 WASM |
| UUID / ULID | `uuid` / `ulid` | Tier 0/1 |
| JWT 解码 | 纯 JS（Base64url） | **不验签**，须声明 |
| Base64 / URL | 原生 | Tier 0 |
| TOTP | `otpauth` | |

**合规**：加密工具注明「演示级」；JWT 明确不验证签名。

**可落地工具**：哈希、Base64、UUID、JWT 解码、密码强度/随机密码、文件哈希。

---

### A.7 数学、统计与单位 — ✅✅✅

| 功能 | 实现方式 |
|---|---|
| 科学计算 / 单位 | `mathjs` / `convert-units` |
| 金融高精度 | `decimal.js` |
| 统计 | `simple-statistics` |

**可落地工具**：复利、贷款 EMI、BMR/TDEE、标准差、单位换算；统计补充（p 值 / 置信区间 / Z 分数，单页多参数）；数学热门（有效数字、对数、勾股、斜率）（方向 A 可做通用换算；方向 C 再做行业专页）。清单与 Omni/ToolDone 对照见工具清单 §9–§12。

**说明**：方向 A 允许「技术上成熟的通用计算器」；若要做**行业话术与标准引用**，改归方向 C，不要求同一工具两边都挂名。

**公式对照**：实现/复核时可打开 [ToolDone](https://tooldone.com/zh/) 与 [Omni Calculator](https://www.omnicalculator.com/) 对应 **en** 页，交叉核对变量/边界。

- 归档：[ToolDone 快照](./competitor-refs/tooldone-2026-08-08/README.md)、[Omni 快照](./competitor-refs/omnicalculator-2026-08-08/README.md)
- Omni 强项是公式讲解深度（近 calculator.net）；规模约 **3867** en 页——**禁止**复制铺量结构
- 单位换算坚持单页多类别，不按单位对拆 URL

---

### A.8 日期时间 — ✅✅✅

| 功能 | 实现方式 |
|---|---|
| 格式化/差值 | `dayjs` / `date-fns` |
| 时区 | `luxon` |
| Cron | `cronstrue` + `cron-parser` |

**可落地工具**：Unix 时间戳、时区转换、日期差、年龄、Cron 解释器。

---

### A.9 设计 / 颜色 / 二维码 — ✅✅✅

| 功能 | 实现方式 |
|---|---|
| 色空间 / 对比度 | `chroma-js` / `culori` + 自研 WCAG |
| QR / 条码 | `qrcode` / `jsbarcode` / `jsqr` |

**可落地工具**：颜色转换、对比度检测、QR 生成、条码生成（已有 Gradient 可扩展 CSS 输出）。

---

### A.10 开发者与网络 — ✅✅ / ✅✅✅

| 功能 | 实现方式 | 环境 |
|---|---|---|
| JSON Schema 校验 | `zod` / `ajv` | 浏览器 |
| 正则测试 | 原生 RegExp + 高亮 | 浏览器 |
| cURL → fetch | 纯 JS 解析 | 浏览器 |
| HTTP Headers | Worker `fetch`（**已有**） | Worker |
| IP / CIDR | `ipaddr.js` | Worker |
| DNS over HTTPS | Worker + DoH | Worker |

**可落地工具**：JSON Schema、正则测试器、cURL→fetch、CIDR 计算器、重定向链（扩展 headers）。

---

### A.11 OCR / 浏览器端 AI — ⚠️✅ 有条件

| 功能 | 实现方式 | 限制 |
|---|---|---|
| OCR | `tesseract.js` | 模型体积、中文包、准确率须声明 |
| 本地小模型 | `@xenova/transformers` | 数十 MB，Tier 2 |
| 抠图 | `@imgly/background-removal` | ~40MB |

**结论**：技术可行；必须懒加载 + 本地处理声明 + 移动端 POC。方向 A 内为 P2 候选。

---

### A.12 站长 / SEO 辅助（技术侧）— ✅✅

| 功能 | 实现方式 |
|---|---|
| Meta 长度 / SERP 预览 | 自研字符 + 像素估算 |
| FAQ Schema 生成 | 表单 → JSON-LD 字符串 |
| robots / sitemap 解析 | `robots-parser` / `fast-xml-parser` |

**可落地工具**：Meta SERP Preview、FAQ Schema Generator、UTM 构建器、hreflang 标签生成。

---

### A.13 方向 A 成熟度总览与排期建议

| 品类 | 成熟度 | 建议排期（仅方向 A） |
|---|---|---|
| 文本/YAML/CSV/JSON | ✅✅✅ | **优先** |
| 图片 | ✅✅✅ | 优先 |
| PDF（合并/拆分/旋转/水印等） | ✅✅✅ | **优先**（见 A.5 / A.5.2 iLovePDF） |
| **ZIP 创建·解压** | ✅✅✅ | **优先**（见 A.5 / A.5.1） |
| 多格式归档（RAR/7Z 只读等） | ✅✅ | 次优先；Tier 2；单页勿铺量 |
| 编码/哈希/JWT | ✅✅✅ | 优先 |
| 日期 / 颜色 / QR | ✅✅✅ | 次优先 |
| 开发者 Schema/正则 | ✅✅✅ | 优先 |
| 网络探测 | ✅✅ | 扩展已有 |
| 音频 | ✅✅ | 稍后 |
| OCR / 本地 AI | ⚠️✅ | POC 后 |
| 视频转码 | ⚠️ | 默认暂缓 |

**方向 A 独立验收**：技术可行 + Tier 分层不破坏 CWV + 能写清输入/规则/输出（SEO 见 Doc2）。**不要求**绑定行业或场景链。

---

## 方向 B — 用户场景桥接转换工具

> 独立调研「用户在真实工作流里，需要把什么格式/状态桥到另一种」。  
> 与方向 A 的关系：方向 A 提供**技术零件**；方向 B 按**用户旅程**选零件组装。同一工具可以只挂在方向 B，不必再挂行业。

### B.0 定义与边界

**场景桥接工具** = 服务某岗位在一条工作流中的 **格式转换 / 校验 / 计量 / 清洗 / 多规格批量交付**：

```
岗位 + 触发情境 + 输入形态 + 输出形态 +（可选）上下游工具
```

两类常见形态：

| 形态 | 模式 | 例子 |
|---|---|---|
| **1→1 桥** | 一种输入 → 一种输出 | YAML↔JSON、Safe Paste |
| **1→N 交付** | **单输入 → 多规格批量产出**（平台规范表驱动） | 一张主图 → App Store 全套截图尺寸 + Icon；一张图 → Amazon 主图合规尺寸/体积 |

| 可做 | 不做 |
|---|---|
| 字段映射、校验失败解释、本地清洗、导出互转、成本估算 | 托管大模型付费推理、批量 AI 写文章、空壳「AI SEO」页 |
| **按官方尺寸表批量裁切/缩放/压缩 + ZIP 打包**；讲清规范版本与更新日期 | 假装 100% 兼容所有厂商导出格式；代替设计师做复杂排版创意 |
| 讲清「丢了哪些字段 / 估算误差 / 裁切策略（居中/安全区）」 | 爬取用户私有 App Store 后台；存储用户素材 |

### B.1 场景调研方法（本方向专用）

对每个场景写一张卡：

1. **谁**（岗位）在**什么触发点**需要桥？  
2. 手上有什么（文件/剪贴板/URL）？要交给下一步什么系统？  
3. 今天用什么替代方案（手工、脚本、竞品）？痛点是什么？  
4. 本站用哪 1–3 个工具覆盖？规则/映射能否写成可见表格？  
5. 隐私是否要求本地处理？  
6. （若 1→N）**规范来源 URL**、规格条数、是否需 ZIP、裁切策略默认值？

### B.2 已识别场景（详细）

#### 场景 B1：AI Agent / Prompt 调试流水线

| 步骤 | 岗位动作 | 输入 → 输出 | 推荐工具 | 可写清的规则 |
|---|---|---|---|---|
| 1 | 粘贴前清隐藏字符 | 脏文本 → 干净 Prompt | `safe-paste-cleaner` | 零宽字符表、误杀说明 |
| 2 | 估费用 | Prompt → token/费用 | `ai-token-counter` | 估算公式、价表日期、误差声明 |
| 3 | 约束输出结构 | Schema + JSON → 通过/路径错误 | `json-schema-validator` | JSON Pointer、draft 版本 |
| 4 | 固化模板 | 自由文本 → 角色/任务/约束 | `prompt-template-builder` | 字段定义表 |

**痛点**：隐藏 Unicode 导致异常；账单不可预期；模型输出不稳定。  
**竞品缺口**：多数只有「JSON 格式化」，缺少「错误路径 + Prompt 安全」一体说明。

#### 场景 B2：RAG / 训练 / 配置数据准备

| 步骤 | 动作 | 输入 → 输出 | 工具 |
|---|---|---|---|
| 1 | 配置互通 | YAML ↔ JSON | `yaml-json` |
| 2 | 表数据互通 | CSV ↔ JSON | `csv-json` |
| 3 | 对话语料归档 | Chat 导出 → MD/JSON/CSV | `chat-export-converter` |
| 4 | 扫描件入库 | 图片 → 文本 | `ocr-to-text`（Tier 2） |

**痛点**：配置格式混用；导出字段因厂商而异；OCR 上传隐私顾虑。  
**规则要点**：类型推断表、导出字段映射、丢失字段 FAQ、本地 OCR 声明。

#### 场景 B3：站长上线检查

| 步骤 | 动作 | 输入 → 输出 | 工具 |
|---|---|---|---|
| 1 | 预览 SERP | title/description → 字符/像素/预览 | `meta-serp-preview` |
| 2 | 草稿结构化数据 | 问答 → FAQ JSON-LD | `faq-schema-generator` |
| 3 | 核对响应头 | URL → Headers | `website-headers`（已有） |
| 4 | 文档预览 | Markdown → HTML | `markdown-to-html`（已有） |

**痛点**：截断规则因引擎而异；Schema 与可见内容不一致。  
**规则要点**：字符 vs 像素对照、引擎差异表、Schema 与可见一致性说明。

#### 场景 B4：电商目录 / Feed 上架

| 步骤 | 动作 | 输入 → 输出 | 工具 |
|---|---|---|---|
| 1 | 表转 API JSON | CSV → JSON | `csv-json`（示例列：SKU/title/price） |
| 2 | 字段约束 | Schema + 商品 JSON | `json-schema-validator` |
| 3 | 主图合规（1→N） | 1 图 → Amazon 等尺寸/体积包 | `amazon-image-resizer` |
| 4 | （可选）价税说明 | 价格假设 → 结果 | 方向 C 电商工具 |

**痛点**：Excel/CSV 与店铺 API 字段不一致；主图被拒；校验错误难读。

#### 场景 B5：开发者日常数据交换

| 步骤 | 动作 | 输入 → 输出 | 工具 |
|---|---|---|---|
| 1 | 配置互通 | YAML ↔ JSON | `yaml-json` |
| 2 | 契约校验 | Schema + payload | `json-schema-validator` |
| 3 | 文档互转 | MD ↔ HTML | `markdown-to-html` + `turndown` |
| 4 | HTTP 调试 | URL → Headers | `website-headers` |

**痛点**：多格式来回粘贴；缺可读错误路径。

#### 场景 B6：应用商店素材 — 单图 → 全套截图与 Icon（1→N）

| 项 | 内容 |
|---|---|
| **岗位** | iOS/Android 独立开发者、外包交付、增长运营 |
| **触发点** | 上架 / 改版 / 换机型截图；设计师只给一张主视觉或一套稿 |
| **痛点** | App Store / Play 尺寸表长、机型多；手工导出易漏尺寸；Logo 要十余个倍率 |
| **替代方案** | Figma 插件、Photoshop Action、在线 icon 工具（常缺截图套装或不本地） |

**工具设想**（可合并首发页，后拆 slug）：

| 输入 | 输出（多规格） | 规范要点（页内可见表 + 官方引用） |
|---|---|---|
| 1 张竖图/横图截图源 | iPhone 多代截图尺寸（以当期 Apple 文档为准，如 6.7" / 6.5" / 5.5" 等） | 像素精确、JPG/PNG；圆角是否需要由规范说明 |
| 同上或第二张源 | iPad 截图尺寸套装 | 与 iPhone 分 ZIP 子目录 |
| 1 张方图 Logo | App Icon 全套（1024 营销图、@2x/@3x、Notification、Settings 等） | 无透明等规则提示、安全边距 |
| 1 张方图 + 可选横图 | Google Play：高分辨率图标、Feature Graphic、手机/平板截图尺寸 | Play Console 规格表 |
| （可选高级） | Mac / Watch / visionOS 子集 | 默认折叠，避免首屏过重 |

**技术**：Canvas ✅✅✅ + `fflate`/`jszip`；规格表 JSON 可配置。  
**建议 slug**：`ios-app-screenshot-resizer`、`app-icon-generator-pack`、`google-play-asset-pack`（或首发合并 `app-store-asset-pack`）。

#### 场景 B7：电商主图合规 — 单图 → 平台尺寸与体积（1→N）

| 项 | 内容 |
|---|---|
| **岗位** | Amazon / 跨境卖家、美工助理 |
| **触发点** | 上新主图、跟卖图、多站点 listing |
| **痛点** | 最短边、白底、文件体积、纯图占比；一张图要改多种规格 |

| 输入 | 输出 | 规范要点 |
|---|---|---|
| 1 张商品图 | Amazon 主图推荐尺寸 + 体积上限压缩（以 Seller Central 现行要求为准） | 白底检测提示（非强制 AI 抠图）、JPG 质量、最长边 |
| 同上 | 辅图常用尺寸 + 命名建议（`main` / `pt01`…） | |
| 同上 | 多平台预设：eBay、Shopify、Walmart、Shopee 等 | 每平台独立规格表 |

**建议 slug**：`amazon-image-resizer`、`marketplace-image-pack`。  
**边界**：主打尺寸/体积合规 + ZIP；完美抠白底不作必选能力。

#### 场景 B8：站点与 PWA 图标 — 单 Logo → Favicon 套装（1→N）

| 输入 | 输出 |
|---|---|
| 1 张方 Logo（建议 ≥512） | favicon 多尺寸、apple-touch-icon、PWA 192/512、可选 Windows tile |

**建议 slug**：`favicon-and-pwa-icon-pack`。  
**IG**：文件名对照表 + 示例 `site.webmanifest` 片段。

#### 场景 B9：社交与 OG 分享图 — 单图 → 多平台封面（1→N）

| 输入 | 输出预设 |
|---|---|
| 1 张主视觉 | OG 1200×630、X/Twitter、LinkedIn、Facebook、Pinterest、YouTube 缩略图等（按市场勾选） |

**建议 slug**：`social-share-image-pack`。规格常变 → 表版本化 + References。

#### 场景 B10：扩展与 IM 应用图标（1→N）

| 输入 | 输出 |
|---|---|
| 1 张 Logo | Chrome Web Store 图标尺寸；Slack / Discord App 常用尺寸 |

**建议 slug**：`chrome-extension-icon-pack`。

#### 场景 B11：电商/CMS 主题媒体尺寸（1→N）

| 输入 | 输出 |
|---|---|
| 1 张商品或 Banner | Shopify / WooCommerce / WordPress 主题常用主图、缩略图、画廊、集合封面 |

**建议 slug**：`shopify-woocommerce-image-sizes`。

#### 场景 B12：印刷与证件照辅助（1→N，低优先级）

| 输入 | 输出 |
|---|---|
| 1 张人像 | 分国家证件照像素预设 → **必须免责「非正式受理」** |
| 1 张设计稿 | 名片/传单常见 bleed（教育向） |

#### 场景 B13：多图合成与平台拼贴 — **N→1**（对照 [Merge Images](https://mergeimages.co/)）

| 项 | 内容 |
|---|---|
| **岗位** | 社媒运营、电商美工、教程作者、健身/装修 Before-After 博主 |
| **触发点** | 要把 2+ 张图合成一张再发帖/上架；或导出多页 PDF 归档 |
| **痛点** | 竞品常强制上传；布局（间距/背景/网格列数）讲不清；与「单图改尺寸」工具混淆 |
| **替代方案** | Canva、Photoshop、Merge Images 类在线站、手机拼图 App |
| **与 B9 区别** | **B9**：1 张主视觉 → 多平台封面尺寸（1→N）；**B13**：多张源图 → **1 张**成品（N→1）或 **1 份 PDF** |

**工具设想**（首发宜合并，平台预设作可选 Tab，不拆薄页）：

| 输入 | 输出（N→1） | 规范 / 规则要点（页内可见） |
|---|---|---|
| 2+ 张 JPG/PNG/WebP/GIF | 横排 / 竖排 / 网格单图 | 间距 px、背景色、对齐、输出格式与质量；GIF 动图默认静帧或拒收须 FAQ |
| 同上 + 选「Instagram 发帖」 | 1080×1080 PNG/JPEG | Meta/Instagram 现行推荐尺寸引用 + 更新日期 |
| 同上 + 选「Facebook 发帖」 | 1200×630 | Facebook 分享图推荐比例引用 |
| 2 张（底 + 叠） | 带透明通道的合成图 | 透明度、混合模式、叠图 bbox；链 `add-watermark` |
| 多图序列 | 多页 PDF | 页面尺寸（竖/横/方）、每页 fit（contain/cover）；链 A.5 |

**Use cases（页内必写）**：Before/After 对比、教程步骤竖拼、电商多角度拼图、社媒九宫格故事板。

**技术**：Canvas ✅✅✅；PDF 用 `pdf-lib`；大图批处理可 Worker。

**建议 slug**：`image-merge`（主入口）；平台预设内置；`image-overlay`、`images-to-pdf` 可 Related 互链。  
**边界**：不做 AI「智能合成」；PNG→SVG 非本场景默认范围。

#### 场景 B14：压缩包打包 / 解压与格式桥 — **归档工作流**（对照 [ezyZip](https://www.ezyzip.com/zh-hans.html)）

| 项 | 内容 |
|---|---|
| **岗位** | 任意需要发附件的知识工作者、学生、Chromebook/平板用户、前端/运维收源码包、运营收素材 ZIP |
| **触发点** | 「把几份文件打成一个包发出去」；「别人发了 ZIP/RAR，本机没软件或不想安装」；「只要包里某一张图/某一个 PDF」 |
| **痛点** | 上传型在线站有隐私与体积限制；桌面 WinRAR/7-Zip 需安装；竞品用海量格式页稀释信任 |
| **替代方案** | 系统自带解压、7-Zip、ezyZip/同类浏览器工具、网盘在线预览 |
| **与 A.5 / 1→N 关系** | **技术零件在 A.5**；B14 描述**用户旅程**。方向 B 的 1→N 工具「下载 ZIP」是**产出侧**；B14 是**通用打包/打开侧**，Related 互链即可，勿做成「Amazon 图包解压器」换皮 |

**工具设想**（首发合并，禁格式薄页）：

| 输入 | 输出 | 规则 / 页内必写 |
|---|---|---|
| 多文件或文件夹 | `.zip`（可选压缩级） | 目录是否保留、空文件夹策略、建议体积上限提示 |
| `.zip` | 文件树 + 单文件下载 / 全部下载（可选再打 ZIP） | 路径穿越防护说明；密码包算法与失败提示 |
| `.zip` / `.tar.gz` /（引擎加载后）`.7z` / `.rar` | 同上列表与导出 | **一张支持格式表** + 更新说明；非「每格式一页」 |
| 非 ZIP 归档 | 「导出为 ZIP」 | 说明＝解压后重打包；固体压缩/加密限制写清 |

**Use cases（页内必写）**：邮件附件打包、从素材包抽单图、打开同学发来的作业 ZIP、查看 `node_modules` 外的源码 tar.gz 结构（教育向）、Chromebook 临时解压。

**技术**：`fflate` ✅✅✅；多格式 `libarchive-wasm` Tier 2；大文件 Worker +（可选）File System Access。详表见 A.5 / A.5.1。

**建议 slug**：`create-zip-file`、`unzip-file`（可同目录互链）；进阶合并为 `extract-archive`（含导出 ZIP）。  
**边界**：不做 ZIP→MP3/PDF 等「伪转换」矩阵；不做密码破解/修复；不做 P2P；不做 250+ 格式覆盖竞赛。

### B.3 「单输入 → 多规格交付」挖掘清单

> **原则**：不做「通用图片压缩器换皮」。每一页绑定**具名平台 + 可见规格表 + 官方引用 + ZIP 目录说明**。

#### 挖掘公式

```
针对性 1→N 工具 =
  具名交付渠道（App Store / Amazon / …）
  + 官方或社区公认规格表（可版本化）
  + 单文件/单粘贴输入
  + 多文件输出（建议 ZIP，子目录按设备/用途）
  + 可写清的默认策略（缩放、裁切、垫边、体积上限）
  + 本地 Canvas 处理（方向 A）
```

#### 按渠道枚举（候选工具池）

| 渠道 / 场景 | 建议 slug | 输入 | 多规格输出摘要 | 技术 | 优先级 |
|---|---|---|---|---|---|
| Apple App Store 截图 | `ios-app-screenshot-resizer` | 1 张截图源 | iPhone/iPad 当期尺寸全套 | Canvas + ZIP | **P0** |
| App Icon 全套 | `app-icon-generator-pack` | 1 张 1024 Logo | 商店图 + 设备倍率包 | Canvas + ZIP | **P0** |
| Google Play 素材 | `google-play-asset-pack` | 1–2 张图 | Icon + Feature Graphic + 截图 | Canvas + ZIP | P1 |
| Amazon 主图合规 | `amazon-image-resizer` | 1 张商品图 | 尺寸 + 体积 + 命名建议 | Canvas | **P0** |
| 多电商平台图包 | `marketplace-image-pack` | 1 张图 | Amazon/eBay/Shopify/… 预设 | Canvas + ZIP | P1 |
| Favicon + PWA | `favicon-and-pwa-icon-pack` | 1 张 Logo | ico/png 套装 + manifest 示例 | Canvas | P1 |
| 社交分享图 | `social-share-image-pack` | 1 张图 | OG/X/LinkedIn/YouTube… | Canvas + ZIP | P1 |
| Chrome 扩展图标 | `chrome-extension-icon-pack` | 1 张 Logo | 扩展商店图标尺寸 | Canvas | P2 |
| Shopify/Woo 尺寸 | `shopify-woocommerce-image-sizes` | 1 张图 | 主题常用尺寸 | Canvas | P2 |
| YouTube 频道套装 | `youtube-channel-art-pack` | 1 张横图 | Banner 安全区 + 头像 | Canvas | P2 |
| 电子书封面多店 | `ebook-cover-size-pack` | 1 张封面 | Kindle/Apple Books/Kobo | Canvas | P2 |
| 播客封面 | `podcast-cover-art-pack` | 1 张方图 | Apple/Spotify 封面规格 | Canvas | P2 |
| Etsy listing 图 | `etsy-listing-image-pack` | 1 张图 | Etsy 推荐像素与比例 | Canvas | P2 |
| 设备外框截图包 | `device-frame-screenshot-pack` | 1 张截图 | 轻量 SVG 外框 + 多尺寸 | Canvas | P2 |
| PDF 页 → 多尺寸图 | `pdf-page-to-image-sizes` | 1 页 PDF | 再套平台尺寸 | pdf.js + Canvas | P2 |
| 产品表 → 多平台 feed | `product-feed-template-pack` | 1 份 CSV | Amazon/Google Merchant 列映射（1→N 文件） | papaparse | P1 |
| 一文案 → 多 Meta 检测 | `meta-copy-length-pack` | 1 段文案 | 多引擎标题/描述长度套装 | Tier 0 | P1 |

#### N→1 合成与导出（对照 Merge Images；与上表 1→N **方向相反**）

| 渠道 / 场景 | 建议 slug | 输入 | 输出摘要 | 技术 | 优先级 |
|---|---|---|---|---|---|
| 通用多图合并 | `image-merge` | 2+ 张图 | 横/竖/网格 + 间距/背景 | Canvas | **P1** |
| Instagram 发帖拼贴 | （`image-merge` 预设） | 2+ 张图 | 1080×1080 方图 | Canvas | P1 |
| Facebook 发帖拼贴 | （`image-merge` 预设） | 2+ 张图 | 1200×630 横图 | Canvas | P1 |
| 图层叠加 | `image-overlay` | 底图 + 叠图 | 透明度/位置/混合 | Canvas | P2 |
| 多图转 PDF | `images-to-pdf` | 多图 | 多页 PDF + 页面 fit | pdf-lib | P1 |
| 文字水印 | `add-watermark` | 1 图 + 文本 | 水印图 | Canvas | P1 |
| 翻转镜像 | `flip-image` | 1 张图 | 水平/垂直 | Canvas | P2 |

> **立项注意**：N→1 页须写清布局公式（画布宽高、间距、单元格尺寸）；平台预设须 References；**禁止**与 B.9 `social-share-image-pack` 共用同一 H1 intent。

#### 非图片类同构（同样 1→N）

| 场景 | 输入 | 多规格输出 | slug 建议 |
|---|---|---|---|
| 颜色品牌板 | 1 个主色 | HEX/RGB/HSL/OKLCH + 对比度配对 | `brand-color-token-pack` |
| 字号/间距令牌 | 1 个基准字号 | 模块化阶梯表 | `type-scale-token-pack` |
| 证书指纹 | 1 个 PEM | 多算法指纹 + 有效期字段 | `cert-fingerprint-pack` |
| 会议时区 | 1 个时间点 | 团队多时区对照导出 | `meeting-timezone-pack` |

### B.4 1→N 工具页面信息架构

```
H1 具名渠道 + 动作（如 Amazon Product Image Resizer）
├─ 上传【单输入】
├─ 预设：平台版本 + 规格多选（默认「上架最小集」）
├─ 策略：Fit / Crop / Pad（安全区说明）
├─ 【生成】→ 预览网格（每格标注 WxH 与预计 KB）
├─ 【下载 ZIP】+ 目录说明
├─ H2 官方规格对照表（含更新日期）
├─ H2 Example（输入尺寸 → 输出清单）
├─ H2 FAQ（透明通道、白底、超体积失败）
├─ H2 References（Apple / Amazon / Google 官方）
└─ 本地处理声明
```

**规格表维护**：建议 `public/data/asset-specs/{channel}.json`；官方变更时改 JSON + `dateModified`。

### B.5 方向 B 工具总表（1→1 + 1→N）

| slug | 主场景 | 模式 | 技术层级 | 建议优先级 |
|---|---|---|---|---|
| `safe-paste-cleaner` | B1 | 1→1 | Tier 0 | P0 |
| `ai-token-counter` | B1 | 1→1 | Tier 0 | P0 |
| `json-schema-validator` | B1/B4/B5 | 1→1 | Tier 0/1 | P0 |
| `yaml-json` | B2/B5 | 1→1 | Tier 1 | P0 |
| `chat-export-converter` | B2 | 1→1 | Tier 0/1 | P0 |
| `meta-serp-preview` | B3 | 1→1 | Tier 0 | P0 |
| `ios-app-screenshot-resizer` | B6 | **1→N** | Tier 0/1 | **P0** |
| `app-icon-generator-pack` | B6 | **1→N** | Tier 0/1 | **P0** |
| `amazon-image-resizer` | B7 | **1→N** | Tier 0/1 | **P0** |
| `prompt-template-builder` | B1 | 1→1 | Tier 0 | P1 |
| `csv-json` | B2/B4 | 1→1 | Tier 1 | P1 |
| `faq-schema-generator` | B3 | 1→1 | Tier 0 | P1 |
| `google-play-asset-pack` | B6 | 1→N | Tier 0/1 | P1 |
| `favicon-and-pwa-icon-pack` | B8 | 1→N | Tier 0/1 | P1 |
| `social-share-image-pack` | B9 | 1→N | Tier 0/1 | P1 |
| `marketplace-image-pack` | B7 | 1→N | Tier 0/1 | P1 |
| `product-feed-template-pack` | B4 | 1→N | Tier 1 | P1 |
| `ocr-to-text` | B2 | 1→1 | Tier 2 | P1（POC 后） |
| HTML↔Markdown 增强 | B5 | 1→1 | Tier 1 | P1 |
| `image-merge` | B13 | **N→1** | Tier 0/1 | P1 |
| `images-to-pdf` | B13 | **N→1** | Tier 1 | P1 |
| `add-watermark` | B13 / A.2 | 1→1 | Tier 0 | P1 |
| `image-overlay` | B13 | N→1 | Tier 0/1 | P2 |
| `flip-image` | A.2 | 1→1 | Tier 0 | P2 |
| `create-zip-file` | B14 / A.5 | N→1（多文件→一包） | Tier 1 | **P0** |
| `unzip-file` | B14 / A.5 | 1→N（一包→多文件） | Tier 1 | **P0** |
| `extract-archive` | B14 / A.5 | 1→N + 可选再打包 ZIP | Tier 1→2 | P1 |
| 其余 B.3 表 P2 项 | B8–B12 等 | 1→N | 见上 | P2 |

### B.6 方向 B 独立验收

1. 能指出归属的 **主场景编号**（B1–B14）或 B.3 渠道行。  
2. 页面有 **字段映射或规格对照表**（不只输入框）。  
3. 文件/粘贴类有 **本地处理** 说明。  
4. **1→N** 必须有：权威 References、规格更新日期、ZIP 或清晰多文件下载、Example 清单。  
5. Related tools 优先同场景上下游（可选）。  
6. **B14 归档类**：须有支持格式表 + 路径安全说明；**禁止**按扩展名/「ZIP→某后缀」拆近义 URL（见 A.5.1）。

**不要求**同时满足方向 C 的行业三要素。

---

## 方向 C — 分行业针对性工具（非泛化）

> 独立调研「各行业真正要用的工具」，用行话、任务与标准说话。  
> **不是**把方向 A 的通用工具换个标题；也**不是**必须挂在某条场景链上。  
> 与方向 B 的 1→N：**同一能力只选一个主方向**（例如 Amazon 主图主挂 B7 或 C-V3）。

### C.0 定义、三要素与验收

每个方向 C 工具须同时具备：

1. **行业痛点任务**（哪个岗位、什么业务动作）  
2. **领域术语**（页面用词与行业一致）  
3. **标准 / 规范引用**（能进 References）

立项三问（任一「否」则暂缓）：

1. 能否一句话说清「哪个岗位在什么业务里用」？  
2. 能否写出 **该行业才有的** 对照表/边界/标准（相对泛化竞品的 Information Gain）？  
3. 实现是否落在方向 A 的可行技术内且 CWV 可控？（技术可行性可外包给方向 A 结论，但产品归属仍是 C）

**禁止**：通用计算器换皮（「又一个百分比」「又一个单位换算超市」）。

### C.1 行业调研模板（每垂直一节）

对每个行业写：

| 栏目 | 内容 |
|---|---|
| 岗位与任务 | 谁、日常卡点 |
| 现有替代 | Excel / 竞品 / 手工 |
| 候选工具 | slug、公式/规则来源 |
| 术语表 | 5–15 个必现词 |
| References | 权威 URL |
| YMYL | 是/否/弱 |
| SEO 意图词例 | en / zh 等 |
| 与已上线关系 | 增强或新建 |

---

### C.2 垂直 V1 — 开发者 / 数据交换

| 项 | 内容 |
|---|---|
| **岗位** | 后端、全栈、数据工程师 |
| **痛点** | API 契约不一致、配置格式混用、Headers 难读 |
| **候选工具** | JSON Schema 校验；YAML↔JSON；Markdown↔HTML（已有）；Website Headers（已有）；CIDR；JWT 解码（声明不验签） |
| **术语** | schema、payload、content-type、contract、idempotency、CIDR |
| **References** | [JSON Schema](https://json-schema.org/)、[RFC 8259](https://www.rfc-editor.org/rfc/rfc8259)、IETF HTTP |
| **YMYL** | 否 |
| **意图词例** | `json schema validator`, `yaml to json`, `cidr calculator` |
| **集群** | C05 |

**行业专属写法示例**：Schema 页强调「API contract / model output validation」，而非泛化「JSON tool」。

---

### C.3 垂直 V2 — 内容与 SEO 站长

| 项 | 内容 |
|---|---|
| **岗位** | 站长、内容运营、前端 SEO |
| **痛点** | title/description 截断不明；结构化数据易与正文不一致 |
| **候选工具** | Meta SERP Preview；FAQ/HowTo Schema 生成；hreflang 生成；可读性评分；已有 Gradient（设计侧） |
| **术语** | SERP、hreflang、canonical、rich result、pixel width、CTR |
| **References** | [Google Search Central](https://developers.google.com/search/docs)、[Schema.org](https://schema.org/) |
| **YMYL** | 否 |
| **意图词例** | `meta description length`, `faq schema generator`, `serp preview` |
| **集群** | C08 |

---

### C.4 垂直 V3 — 电商目录、主图与价格

| 项 | 内容 |
|---|---|
| **岗位** | 电商运营、跨境卖家、目录专员、美工助理 |
| **痛点** | Feed 字段乱；**主图因尺寸/体积/白底被拒**；折扣/含税口径不一 |
| **候选工具** | `amazon-image-resizer` / `marketplace-image-pack`；产品 feed CSV↔JSON；`product-feed-template-pack`；折扣/含税价；体积重专页 |
| **术语** | feed、SKU、GTIN、main image、white background、tax included、dimensional weight |
| **References** | Amazon Seller Central 图片要求、平台 feed 文档、公开税率说明 |
| **YMYL** | 弱（价格说明免责） |
| **意图词例** | `amazon product image size`, `amazon main image requirements`, `csv product feed` |
| **集群** | C02 弱相关 / C06 |

**1→N 写法示例**：页标题用「Amazon Product Image Resizer」，规格表列「最短边 / 最大体积 / 格式」，而非「online image compressor」。

---

### C.5 垂直 V4 — 财务运营（YMYL）

| 项 | 内容 |
|---|---|
| **岗位** | 运营、财务助理（教育向，非持牌顾问） |
| **痛点** | 指标口算易错；缺假设透明度 |
| **候选工具** | ROI（已有）、边际收益（已有）、复利、贷款 EMI/摊还、毛利率/加价率、盈亏平衡；进阶 CAGR/NPV（单页讲清假设） |
| **术语** | ROI、EMI、amortization、CAGR、NPV、margin |
| **References** | Investopedia 公式页、公开会计准则说明 |
| **YMYL** | **是** — disclaimer + references 必备 |
| **意图词例** | `compound interest formula`, `loan amortization schedule` |
| **集群** | C02 |
| **公式对照** | ToolDone + Omni shortlist（链接见下，勿塞进表内） |

**公式对照链接（研发用，不写入用户可见「来源」）**：

- ToolDone 精选：[tooldone-formula-ref-shortlist.tsv](./competitor-refs/tooldone-2026-08-08/tooldone-formula-ref-shortlist.tsv)
- Omni 精选：[omnicalculator-formula-ref-shortlist.tsv](./competitor-refs/omnicalculator-2026-08-08/omnicalculator-formula-ref-shortlist.tsv)
- Omni 直链：
  - [compound-interest](https://www.omnicalculator.com/finance/compound-interest)
  - [emi](https://www.omnicalculator.com/finance/emi)
  - [amortization](https://www.omnicalculator.com/finance/amortization)
  - [mortgage](https://www.omnicalculator.com/finance/mortgage)
  - [break-even](https://www.omnicalculator.com/finance/break-even)
  - [gross-margin](https://www.omnicalculator.com/finance/gross-margin)
  - [roi](https://www.omnicalculator.com/finance/roi)
  - [marginal-revenue](https://www.omnicalculator.com/finance/marginal-revenue)
  - [cagr](https://www.omnicalculator.com/finance/cagr)
  - [net-present-value](https://www.omnicalculator.com/finance/net-present-value)
  - [salary-to-hourly](https://www.omnicalculator.com/finance/salary-to-hourly)

**合规**：禁止投资建议口吻；假设（利率、期数）必须可见。  
**竞品边界**：ToolDone finance ≈ **560** 页、Omni finance ≈ **604** 页（含各州税、近义拆页）——本站**只做公式清晰的少而精**，禁止州税/贷款品牌矩阵铺量。

---

### C.6 垂直 V5 — 健康教育计算（YMYL）

| 项 | 内容 |
|---|---|
| **岗位** | 健康教育读者（筛查向，非诊疗） |
| **痛点** | 只给数字不给局限；公式来源不清 |
| **候选工具** | BMI（已有）、BMR/TDEE、体脂率（海军公式）、理想体重区间 |
| **术语** | BMI、BMR、TDEE、Mifflin-St Jeor、WHO classification |
| **References** | WHO BMI、CDC 计算器说明 |
| **YMYL** | **是** — 非医疗建议免责必备 |
| **意图词例** | `bmr calculator mifflin`, `bmi limitations` |
| **集群** | C01 |
| **公式对照** | ToolDone + Omni shortlist（链接见下） |

**公式对照链接（研发用）**：

- ToolDone（zh 配对见 [shortlist TSV](./competitor-refs/tooldone-2026-08-08/tooldone-formula-ref-shortlist.tsv)）：
  - [bmi](https://tooldone.com/health/bmi-calculator-body-mass-index/)
  - [bmr-mifflin](https://tooldone.com/health/bmr-calculator-basal-metabolic-rate-mifflin-st-jeor-equation/)
  - [calorie](https://tooldone.com/health/calorie-calculator/)
  - [navy-body-fat](https://tooldone.com/health/navy-body-fat-calculator/)
  - [ideal-weight](https://tooldone.com/health/ideal-weight-calculator/)
- Omni（[shortlist](./competitor-refs/omnicalculator-2026-08-08/omnicalculator-formula-ref-shortlist.tsv)）：
  - [bmi](https://www.omnicalculator.com/health/bmi)
  - [bmr](https://www.omnicalculator.com/health/bmr)
  - [tdee](https://www.omnicalculator.com/health/tdee)
  - [navy-body-fat](https://www.omnicalculator.com/health/navy-body-fat)
  - [ideal-weight](https://www.omnicalculator.com/health/ideal-weight)

**竞品边界**：ToolDone / Omni 均将 BMI 拆男女/青少年等多 URL——本站**单页 + Use cases**，禁止 doorway。

---

### C.7 垂直 V6 — 移动应用上架与商店素材

| 项 | 内容 |
|---|---|
| **岗位** | iOS/Android 开发者、独立开发者、外包 PM |
| **痛点** | 截图与 Icon 尺寸多、易漏交；规范随系统版本变 |
| **候选工具** | `ios-app-screenshot-resizer`、`app-icon-generator-pack`、`google-play-asset-pack`（主挂 B6 或本垂直二选一） |
| **术语** | App Store Connect、screenshot specifications、App Icon、Feature Graphic、asset catalog |
| **References** | [Apple screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications)、Google Play 图标与功能图文档 |
| **YMYL** | 否 |
| **意图词例** | `ios screenshot size`, `app icon generator all sizes`, `google play feature graphic size` |
| **集群** | C05 / C06 |

**行业专属写法**：用「App Store Connect 交付」叙事；页内规格表必须标注 **文档版本/检索日期**。

---

### C.8 第二梯队行业（待深挖，非承诺）

| 行业 | 可能工具 | 进入条件 |
|---|---|---|
| 图书 / 电子书 | ISBN 校验；`ebook-cover-size-pack` | 标准引用 + 岗位 |
| 烹饪 | 杯↔克专页 | 非通用换算超市 |
| 工程装修 | 瓷砖/油漆/混凝土方量（对照 ToolDone construction；Omni `tile` / `paint` / `concrete-slab`，见 shortlist） | 公式 + 权威教材；**禁止**材料品牌矩阵铺量 |
| 教育 | GPA 地区差异表（对照 ToolDone `gpa-calculator`；Omni `gpa`） | 明确地区 |
| 法律文书 | 字数估算 | 司法区免责 |
| 内容创作者 | `youtube-channel-art-pack`、`podcast-cover-art-pack` | 平台规范表 |
| 站长品牌 | `favicon-and-pwa-icon-pack`、`social-share-image-pack` | 与 V2 协同；**排期与竞品见「专题：设计师工具」** |
| UI / 品牌设计（桥工具） | 对比度、色 token、SVG 优化、拼图 | 非完整设计套件；见专题 D 节 |

### C.9 方向 C 明确拒绝 / 降级

| 候选 | 处理 |
|---|---|
| 独立 Unit Converter 超市 | 拒绝作为方向 C；若做体积重/烹饪则开**专页** |
| Password / QR / Word Counter 铺量 | 不属于行业专属；若做归方向 A，控制数量 |
| **无平台名的「万能图片尺寸工具」** | 拒绝；必须具名渠道（Amazon / iOS / …） |
| 多个面积/百分比空壳变体 | 拒绝 |
| AI 写作付费墙超市 | 拒绝 |

### C.10 集群映射（方向 C 用）

| 集群 | 支柱页（若做） | 方向 C 垂直 |
|---|---|---|
| C01 健康 | `/topics/health-calculators` | V5 |
| C02 财务 | `/topics/finance-calculators` | V4、V3 价格 |
| C03 数学 | `/topics/math-calculators` | 仅教育向专页时 |
| C04 单位 | `/topics/unit-converters` | **默认不铺**；仅行业专页 |
| C05 开发者 | `/topics/developer-tools` | V1、V6 |
| C06 文件 | `/topics/file-tools` | V3 主图、V6 素材 |
| C07 日期 | `/topics/date-time-tools` | 行业排班/时效再议 |
| C08 设计 SEO | `/topics/design-seo-tools` | V2、Favicon/社交图；**详表见「专题：设计师工具」** |

### C.11 方向 C 独立验收

- 三要素齐全；YMYL 则 disclaimer + references  
- Use cases 用**行业岗位**叙述，不用「anyone can use」  
- 若含 1→N：规格表 + 官方引用 + 更新日期（同 B.6）  
- **不要求**挂载方向 B 场景编号  

---

## 跨方向协作说明（可选，非立项条件）

三条方向**独立立项**。若一个工具碰巧既服务场景又属行业（例如 Schema 校验），在目录里标一个**主方向**即可，次要方向仅作 Related 互链参考。

| 情况 | 做法 |
|---|---|
| 只想验证技术（如图片压缩） | 走方向 A |
| 只想补工作流桥（如 Safe Paste） | 走方向 B |
| 只想做行业计算器（如 BMR） | 走方向 C |
| 技术来自 A、产品叙事是 B 或 C | 主方向 = B 或 C；实现约束仍看 A 成熟度表 |
| 设计师日常桥工具（配色 / 交付包 / 拼图） | **主方向仍标 A 或 B**；产品叙事与排期见下方专题 |

---

## 专题：设计师工具（跨 A / B，服务设计交付）

> **调研日期**：2026-08-07  
> **定位**：设计师进 Figma / Canva / PS **之前与之后**需要的桥工具——配色与无障碍、资产优化、1→N 规格交付、N→1 合成——**不是**协作设计套件或模板编辑器。  
> **归属规则**：每个 slug 仍只标一个主方向（A 或 B）；本专题只做**岗位视角的排期与竞品对照**，避免与 B.3 / A.2 / A.9 重复立项。  
> **集群**：支柱页若做 → `/topics/design-seo-tools`（C08）；Related 优先互链同簇工具。

### D.0 岗位、痛点与边界

| 项 | 内容 |
|---|---|
| **岗位** | UI/UX、品牌/平面、电商美工、独立站站长兼设计、社媒视觉 |
| **触发点** | 定品牌色、过无障碍审查、导出多平台尺寸、压缩上线、拼 Before/After、生成 Favicon/OG |
| **痛点** | 规格表散落官方文档；竞品强制上传；配色「好看」却过不了 WCAG；1→N 与 N→1 工具 intent 混用 |
| **本站差异化** | 浏览器本地处理 + 多语言教育式 Rules + 具名平台 References + 禁止近义薄页 |
| **明确不做** | 完整 Figma/Canva 替代；AI 文生图/智能合成黑盒；PNG→SVG 真矢量化（默认）；无平台名的「万能尺寸工具」 |

```
设计师工作流（本站只做「桥」）
  灵感/主稿（Figma·Canva·PS）
       ↓
  【本站】配色 token / 对比度 / 压缩·格式 / Favicon·OG 包 / 拼图
       ↓
  上架 / 发帖 / 部署 / 交付 ZIP
```

### D.1 候选 slug 总表（优先级 + 主方向）

> **状态**：`已上线` 以 `tool-catalog.json` 为准；其余为候选。  
> **优先级**：P0 本专题建议优先排期；P1 紧随；P2 产能允许再上。与 B.5 / A.2 冲突时以**本表「主方向」列为准挂靠**，不重复开两页。

| 建议 slug | 一句话任务 | 主方向 | 关联章节 | 优先级 | 状态 / 备注 |
|---|---|---|---|---|---|
| `how-to-calculate-gradient` | 多元函数梯度 ∇f（偏导向量；**不是** CSS/图片渐变） | A | A.7 | — | **已上线**（`calculator`）；CSS 渐变另立项 `css-gradient-generator` |
| `css-gradient-generator` | 颜色停靠点 → CSS linear/radial-gradient | A | A.9 / D | **P2** | 候选；勿与数学梯度页混 slug / intent |
| `image-compress` / `image-crop` / `image-format-converter` / `image-exif` / `image-optimizer` | 单图管线：压缩·裁切·格式·EXIF·优化 | A | A.2 | — | **已上线 / 在研** |
| `wcag-contrast-checker` | 前景/背景对比度 → AA/AAA 判定 + 建议配对色 | A | A.9 | **P0** | 新建；Rules 表须写清 WCAG 2.x 比率 |
| `brand-color-token-pack` | 1 主色 → HEX/RGB/HSL/OKLCH + 色阶（如 50–950）+ 对比度配对 | A + 1→N | A.9 / B.3 非图片同构 | **P0** | 可与对比度页 Related；勿拆「仅 HEX 转换」薄页 |
| `favicon-and-pwa-icon-pack` | 1 方 Logo → favicon / apple-touch / PWA 尺寸 + manifest 示例 | B | B8 | **P0** | 设计师交付站标高频 |
| `social-share-image-pack` | 1 主视觉 → OG / X / LinkedIn / YouTube 等封面 ZIP | B | B9 | **P0** | 与 `image-merge` 平台拼贴 **intent 分离** |
| `image-merge` | 2+ 图 → 横/竖/网格一张；可选 IG 1080² / FB 1200×630 预设 | B | B13 / A.2.1 | **P1** | N→1；布局公式页内可见 |
| `add-watermark` | 单图文字水印（位置/透明度/旋转） | A | A.2 / B13 | **P1** | 与 overlay 分工：文字 vs 双图层 |
| `images-to-pdf` | 多图 → 多页 PDF | A/B | A.5 / B13 | **P1** | 归档/交付 |
| `svg-optimizer` | SVG 粘贴/上传 → SVGO 选项可视化 + 体积对比 | A | A（矢量） | **P1** | 对标 SVGOMG 交互；本地处理 |
| `color-from-image` | 图 → 主色板（可导入 token 页） | A | A.2 colorthief | **P1** | 可并入 `brand-color-token-pack` Tab，避免双薄页 |
| `type-scale-token-pack` | 1 基准字号 → 模块化字阶表（可导出 CSS 变量） | A + 1→N | B.3 非图片同构 | **P2** | 不做完整字体库/Google Fonts 托管 |
| `css-shadow-generator` | 可视化 box/text-shadow → 可复制 CSS | A | A.9 扩展 | **P2** | 生成器类；须有参数→CSS 规则说明 |
| `image-overlay` | 底图 + 叠图（透明度/混合/位置） | A/B | B13 | **P2** | |
| `flip-image` | 水平/垂直镜像 | A | A.2.1 | **P2** | 可并入 crop「变换」区 |
| `app-icon-generator-pack` | 1 Logo → App 图标全套倍率 | B | B6 | **P1**（渠道向） | 偏开发者交付，设计师常供源图 |
| `local-bg-removal` | 浏览器端抠图 → 透明 PNG | A | A.11 | **P2** | Tier 2 WASM；须误差声明；不做付费墙级 SaaS |

**建议排期（设计师簇产能线）**：

```
P0：wcag-contrast-checker → brand-color-token-pack（含取色 Tab 可选）
    → favicon-and-pwa-icon-pack → social-share-image-pack
P1：image-merge → add-watermark → svg-optimizer → images-to-pdf
P2：type-scale / css-shadow / overlay / flip / local-bg-removal
```

### D.2 竞品对照表（可学习对象）

> **分层**：完整设计套件（Figma / Canva / Adobe Express）影响用户心智，但**不是**本站竞品；下表聚焦**轻量工具站**与可抄的交互/信息架构。快照日期 2026-08。

#### D.2.1 直接对标（学功能与闭环）

| 竞品 | URL | 强项（可学） | 本站对应 / 差距 | 应避免 |
|---|---|---|---|---|
| **Coolors** | https://coolors.co/ | Space 刷色板、导出多格式、对比度/取色工具链互推 | `brand-color-token-pack` + `wcag-contrast-checker`；缺「百万灵感库」用教育式色相规则补 IG | 空壳「又一个 palette」无规则表 |
| **Realtime Colors** | https://www.realtimecolors.com/ | 配色实时打在落地页 mock；亮暗切换 | 色板页可加**轻量** UI 预览块（非整站模板编辑） | 做成迷你网站构建器 |
| **uicolors.app** | https://uicolors.app/ | 单色 → Tailwind 50–950 + 可访问提示 | 并入 token pack 的「色阶」输出 | 仅 Tailwind 一词堆 SEO |
| **Squoosh** | https://squoosh.app/ | 本地压缩、前后对比、编解码参数透明 | 已有 compress/optimizer；对齐隐私叙事与对比 UI | 复制 WASM 体积拖垮 CWV（须 Tier 2 懒加载） |
| **SVGOMG** | https://jakearchibald.github.io/svgomg/ | SVGO 选项可视化、体积即时反馈 | `svg-optimizer` | 无说明的选项堆砌 |
| **ILoveIMG** | https://www.iloveimg.com/ | 工具簇导航、批量、任务完成闭环 | 图片四件套 + 后续 merge/watermark | 强制上传、付费墙、近义薄页 |
| **Merge Images** | https://mergeimages.co/ | N→1 布局、平台发帖尺寸、工具互链 | `image-merge` 等（见 A.2.1） | 与 1→N OG 包混 H1；AI Combiner；404 薄链 |
| **Super Designer** | https://superdesigner.co/ | 30+ 生成器、无账号、PNG/SVG/CSS 导出 | Gradient 已有；shadow / 后续生成器 | 为数量而拆无增量页 |
| **jarvisbox Design** | https://tools.jarvisbox.app/design/ | 对比度+色盲+字体+SVG+Favicon 一站式本地工具 | 本专题全簇组织方式可参考 | 功能清单页无深度内容 |
| **webtoolkit Design** | https://www.webtoolkit.tech/tools/design | 「浏览器本地」文案与工具清单组织 | 隐私默认对齐 | 机翻堆工具描述 |
| **Remove.bg** | https://www.remove.bg/ | 单任务极致转化 | `local-bg-removal`（P2） | 服务端依赖与付费限额叙事；黑盒无误差声明 |
| **配色宝** | https://peisebao.com/ | 中文市场：配色+对比度+色盲组合 | 10 语本地化时对照中文意图词 | 趋势堆砌无公式 |

#### D.2.2 垂直灵感（学单点，不整站对标）

| 竞品 | 学什么 | 本站落点 |
|---|---|---|
| [Haikei](https://haikei.app/) | SVG 背景参数化（blob/wave/grid） | 可选 P2 生成器；勿与 `svg-optimizer` 混 intent |
| [Adobe Color](https://color.adobe.com/) | 色相环 / 和谐规则教育 | token pack FAQ + Rules |
| [Color Hunt](https://colorhunt.co/) | 调色板浏览体验 | 不做社区库；Related 链自有工具即可 |
| [Photopea](https://www.photopea.com/) | 浏览器重编辑**上限**（划边界用） | **不抄**；本站停在单任务工具 |

#### D.2.3 非竞品（心智锚点，正面不抢）

| 产品 | 用户用它做什么 | 本站关系 |
|---|---|---|
| Figma / Penpot | 协作 UI、组件、原型 | 上游；本站做导出后规格与 token |
| Canva / VistaCreate / Adobe Express | 模板营销图、社媒排版 | 上游；本站做压缩、多规格、拼图、Favicon |
| TinyWow 等万能工具超市 | 杂项文件任务 | 学闭环，避铺量与上传墙（见附录） |

### D.3 本专题验收与红线

1. 每个上线页能指出 **主方向 A 或 B** + 本表 slug 行。  
2. 配色/对比度页：可见 **WCAG 比率表** + 色空间说明（非仅色块好看）。  
3. 1→N 交付页：规格表 + References + 更新日期 + ZIP/多文件说明（同 B.6）。  
4. N→1 合成页：布局公式可见；**不得**与 `social-share-image-pack` 共用同一 H1 intent。  
5. 文件类默认 **本地处理** 声明；Tier 2（抠图等）须用户触发加载 + 误差声明。  
6. **禁止**：仅改 title 的「设计师版」图片压缩换皮；无增量 AI 配色灌页。

### D.4 与现有章节索引

| 需要细节时读 | 内容 |
|---|---|
| A.2 / A.2.1 | 图片单图与 Merge Images 对照 |
| A.9 / A.11 | 颜色/QR；OCR/抠图成熟度 |
| B8–B13 / B.3 / B.5 | Favicon、社交图、N→1、总优先级表 |
| C08 / C.8 站长品牌 | 集群与第二梯队入口 |
| 附录竞品启示 | TinyWow / Merge Images 压缩表 |

---

## 本站现状与分方向优先级

### 已上线与图片集群（catalog 为准，随发布更新）

| 分类 | 工具 | 更贴近 |
|---|---|---|
| Headers / IP / Markdown→HTML / Diff / YAML / CSV / HTML 实体 / DNS / IndexNow | 开发者与数据交换 | A + B5 |
| **图片** | `image-format-converter`、`image-exif`、`image-compress`、`image-crop` | **A.2**（单图管线；见 A.2.1 待补 N→1） |
| BMI / ROI / 边际收益 / Square Feet / Percentage / Gradient | 计算 | C-V5 / C-V4 / A |

### 方向 A 建议优先（技术成熟、独立可上）

文本互转增强、**图片单图管线（已部分上线）**、哈希/Base64、PDF 合并、时间戳、颜色/对比度 — 按 A.13 成熟度表排，**不必**先写场景链。  
**图片下一批（A.2 / A.2.1）**：`add-watermark` → `image-merge`（含 IG/FB 预设）→ `images-to-pdf`；`flip-image` / `image-overlay` 为 P2。  
**设计师簇（A 侧）**：`wcag-contrast-checker` → `brand-color-token-pack` → `svg-optimizer`（详见专题 D.1）。

### 方向 B 建议优先（场景桥 + 1→N）

**1→1（既有）**：`json-schema-validator` → `ai-token-counter` → `safe-paste-cleaner` → `yaml-json` → `meta-serp-preview` → `chat-export-converter`

**1→N（本轮挖掘重点，可与上并行择一产能线）**：

1. `amazon-image-resizer`（电商拒图痛点清晰、规格相对集中）  
2. `app-icon-generator-pack`（Logo → 全套倍率，实现面干净）  
3. `ios-app-screenshot-resizer`（规格表较长，需维护 `asset-specs` JSON）  
4. 随后：`favicon-and-pwa-icon-pack`、`social-share-image-pack`、`google-play-asset-pack`

**设计师交付产能线（可与电商/App 1→N 并行择一）**：`favicon-and-pwa-icon-pack` → `social-share-image-pack` → `image-merge`（见专题 D.1）。

逐工具卡片见 [每工具方案](./2026-07-28-per-tool-dev-seo-plans.md)。

### 方向 C 建议优先（行业）

- 补齐已有 YMYL 页的局限 FAQ + References（BMI/ROI/边际收益）  
- P1：BMR/TDEE、复利/EMI  
- V3/V6：与 1→N 素材工具共用实现，主方向选 B 或 C 之一即可  

### 发布节奏

- 每周 1–2 个高质量工具（10 语审核）  
- `dateModified` 仅实质更新时变更；**1→N 规格表变更也算实质更新**  
- 成功指标：各方向在 GSC 出现对应查询（技术词 / 场景词 / 行业词 / 平台名+size）

---

## 工程接入（三方向共用）

```
src/site/tool-catalog.json          # 建议增加字段 direction: "A"|"B"|"C"
src/index.ts                        # registerToolPage(...)
src/pages/{tool}Page.ts
src/site/i18n/{lang}.ts × 10
public/scripts/tools/{tool}.js      # Tier 分层
npm run lint:seo && npm run build:site
```

---

## 文档分工

| 文档 | 职责 |
|---|---|
| **本文** | 三方向**分别**定义：能力地图、场景调研、行业调研与各自优先级 |
| `js-tool-packages-survey` | 包枚举细节 |
| `js-media-conversion-feasibility` | 多媒体专项深度 |
| Google SEO 主文档 | 合规与 Information Gain |
| 每工具方案 | 开发 + SEO 卡片（卡片上标注主方向 A/B/C） |

---

## 下一步

1. **方向 B · 1→N**：落地 `amazon-image-resizer` 或 `app-icon-generator-pack`（验证规格 JSON + ZIP 模板产能）。  
2. **方向 B · 1→1**：按每工具方案继续 Schema Validator 等桥工具。  
3. **方向 A / B14**：立项 `create-zip-file` + `unzip-file`（`fflate`、本地处理、目录列表）；再评估 `extract-archive` Tier 2。  
4. **方向 A / PDF（A.5.2）**：立项 `merge-pdf` + `split-pdf`（`pdf-lib`、本地）；再排 `compress-pdf` / `pdf-to-jpg` / `rotate-pdf`。  
5. **方向 A**：文本/图片/编码成熟度 ✅✅✅ 的独立工具。  
6. **专题 · 设计师工具**：P0 立项 `wcag-contrast-checker` 或 `brand-color-token-pack`；并行评估 `favicon-and-pwa-icon-pack`（见 D.1）。  
7. **方向 C**：存量 YMYL References；V6/V3 与 1→N 工具选主方向挂靠。  
8. 每季度分方向复盘；核对 Apple/Amazon/Google 规格；对照 Coolors / Squoosh / Merge Images / ezyZip / ToolDone / **Omni Calculator** / **iLovePDF（A.5.2）**。

---

## 附录：竞品启示（压缩）

| 竞品 | 可参考 | 应避免 |
|---|---|---|
| calculator.net | 公式深度 | 盲目铺量 |
| TinyWow | 任务闭环 | 强制上传与付费墙 |
| SmallSEOTools | 分类导航 | 薄内容与广告堆叠 |
| **[Merge Images](https://mergeimages.co/)** | 浏览器本地 N→1 合成；横/竖/网格 + 间距背景；平台发帖预设（IG 1080²、FB 1200×630）；Overlay/水印/Flip/PDF 工具链互推；Before-After 等 use cases | 按布局拆多 slug；AI Combiner 黑盒；站脚链到 404 的薄工具（PNG→SVG 等）；与 1→N 封面工具混 intent |
| **[ezyZip](https://www.ezyzip.com/zh-hans.html)** | 本地 WASM 解压/打包叙事；Worker + 大文件直写思路；包内搜索/预览/文件夹树；压缩级与密码包说明（**详表见 A.5.1 / B14**） | 按格式与「ZIP→某后缀」拆海量近义 URL；伪转换矩阵；密码破解/修复承诺；用格式数量竞赛代替 Information Gain |
| **[ToolDone](https://tooldone.com/zh/)** | 计算器公式与变量呈现可作**实现对照**；品类覆盖金融/健康/换算/数理统计/建筑（快照见 [competitor-refs/tooldone-2026-08-08](./competitor-refs/tooldone-2026-08-08/README.md)） | **~2800+ 页铺量**与近义拆页（男女 BMI、州税等）；无增量机翻风险面；本站禁止跟风数量竞赛 |
| **[Omni Calculator](https://www.omnicalculator.com/)** | 公式讲解深度与可引用叙事强；热门统计/数学（p-value、sig-fig、百分比、斜率等）可作对照（快照见 [competitor-refs/omnicalculator-2026-08-08](./competitor-refs/omnicalculator-2026-08-08/README.md)，~3867 en） | 同样的长尾拆页矩阵（州税、BMI 分群、90/95/99 CI、宽高比预设 URL）；**无 zh**；禁止用页数竞赛代替 Information Gain；**流量策略**见 [2026-08-08-omnicalculator-seo-traffic-strategy.md](./2026-08-08-omnicalculator-seo-traffic-strategy.md) |
| **[iLovePDF](https://www.ilovepdf.com/)** | Merge/Split/Compress 任务闭环；压缩前后对比；工具互链（**详表见 A.5.2** / [快照](./competitor-refs/ilovepdf-2026-08-08/README.md)） | 上传墙唯一路径；Office 全矩阵与 AI 摘要/翻译灌页；电子签/修复虚假承诺；与本站「本地处理」定位对立时勿跟风 |
| **Coolors / Realtime Colors / SVGOMG 等** | 配色闭环、实境预览、SVG 选项可视化（**详表见专题 D.2**） | 灵感库堆量、迷你建站器、无规则薄页 |

**iLovePDF vs 本站 PDF 规划（速查）**：

| 维度 | iLovePDF | 本站（本文） |
|---|---|---|
| 处理位置 | 上传服务器为主 | **浏览器本地**（`pdf-lib` / `pdfjs`） |
| 合并 / 拆分 / 压缩 / 旋转 / 水印 | 深 | **P0–P1**（见 A.5.2） |
| 图 ↔ PDF | 有 | `images-to-pdf` **已上线** + `pdf-to-jpg` |
| Office ↔ PDF | 全家桶 | **默认不做**高保真互转 |
| AI / 电子签 | 有 | **不做** |
| SEO | 多工具独立 URL | 检索向 slug；禁无增量拆页 |

**ToolDone / Omni vs 本站计算器规划（速查）**：

| 维度 | ToolDone | Omni Calculator | 本站（本文） |
|---|---|---|---|
| 规模 | ~2826 en（+zh） | ~3867 en（**无 zh**） | 少而精；每周 1–2 高质量 |
| 财务 / 健康 | 海量拆页 | 海量拆页 + 州税矩阵 | C-V4 / C-V5：公式+免责+References；对照存 competitor-refs |
| 单位换算 | 300+ 转换页 | conversion ≈326 | **单页** `unit-converter` 多类别 Tab |
| 公式复核 | en/zh 配对 shortlist | en shortlist（清单 §12） | 打开 en URL；**两家交叉核对**（清单 §11 + §12） |
| SEO 结构 | 长尾 URL 矩阵 | 长尾 URL 矩阵 | 一带多场景；禁 doorway（展开：[Omni SEO 流量策略](./2026-08-08-omnicalculator-seo-traffic-strategy.md)） |

**Merge Images vs 本站图片规划（速查）**：

| 维度 | Merge Images | 本站（本文） |
|---|---|---|
| 单图：压缩/格式/裁剪/EXIF | 弱或分散 | **A.2 已上线/在研**（四件套） |
| 多图 → 一张 | **核心** | **A.2.1 / B13 新增**（`image-merge`） |
| 单图 → 多平台尺寸 | 弱 | **B.3 1→N**（Amazon / App Store / OG…） |
| 多图 → PDF | 有 | `images-to-pdf`（P1） |
| 图层 / 水印 | 有 | `image-overlay` / `add-watermark` |
| 本地处理叙事 | 强 | 对齐本站隐私默认 |

**ezyZip vs 本站归档规划（速查）**：

| 维度 | ezyZip | 本站（本文） |
|---|---|---|
| ZIP 创建 / 解压 | 深、多附属页 | **A.5 / B14 P0**：`create-zip-file` / `unzip-file` |
| RAR/7Z/ISO… | 每格式多 URL + 宣称 250+ | **单页** `extract-archive` + 格式表；Tier 2 |
| 归档「转换」 | RAR→ZIP、ZIP→PDF/MP3… 矩阵 | **导出模式 / 预览筛选**；禁 doorway |
| 本地隐私叙事 | 强（与上传型站对立） | **对齐** |
| 与素材交付 | 弱关联 | 与 1→N「下载 ZIP」**Related 互链** |

---

*维护：方向 A 改成熟度/包结论时同步包调研或音视频文档；方向 B 增场景卡（含 B13 N→1、**B14 归档**）；方向 C 增垂直调研；**设计师工具**改候选/优先级/竞品时同步专题 D 节；竞品快照见 A.2.1 / **A.5.1** / **A.5.2 iLovePDF** / **ToolDone** / **Omni Calculator competitor-refs** / 专题 D.2 / 附录。产品主方向字段只改本文与 tool-catalog。*
