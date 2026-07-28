# 工具方向 — 三个并列开发方向

**日期**: 2026-07-28（修订：三方向并列；补充「单输入→多规格交付」针对性工具挖掘）  
**标签**: `产品规划`, `工具方向`, `浏览器JS`, `场景桥接`, `行业工具`, `多规格交付`  
**目标站点**: https://onlinefreetools.org

**关联文档**:
- [JS 工具包调研](./2026-07-09-js-tool-packages-survey.md) — 完整 npm 包枚举（技术附录）
- [音视频可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md) — 多媒体深度分析（本文方向 A 引用其结论并扩展到全品类）
- [Google SEO 策略与落地](./2026-07-28-google-seo-strategy-implementation.md)
- [每工具开发与 SEO 方案](./2026-07-28-per-tool-dev-seo-plans.md)
- [工具页面 SEO 规则](./SEO_TOOL_RULES.md)
- 工具目录源：`src/site/tool-catalog.json`

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

**推荐架构**：图片 → Canvas 直接处理 ✅（零依赖）；大图用 OffscreenCanvas + Worker。

**可落地工具**：图片压缩、格式互转、尺寸裁剪、EXIF 清除、图片↔Base64、水印。

**结论**：技术无阻塞；方向 A 可排期。是否与方向 B/C 结合由产品另选，**不强制**。

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

### A.5 PDF 与压缩包 — ✅✅✅ / ✅✅

| 功能 | 实现方式 | 备注 |
|---|---|---|
| PDF 合并/拆分/旋转/水印 | `pdf-lib` | 纯 JS，浏览器/Worker |
| PDF 预览/抽文本 | `pdfjs-dist` | Mozilla |
| ZIP / gzip | `fflate` / `jszip` | `fflate` 极快零依赖 |

**瓶颈**：>100MB PDF 需 POC；首屏勿预加载 pdf.js worker 全量。

**可落地工具**：PDF 合并拆分、PDF↔图片、ZIP 解压、Gzip 文本压缩。

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

**可落地工具**：复利、贷款 EMI、BMR/TDEE、标准差、单位换算（方向 A 可做通用换算；方向 C 再做行业专页）。

**说明**：方向 A 允许「技术上成熟的通用计算器」；若要做**行业话术与标准引用**，改归方向 C，不要求同一工具两边都挂名。

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
| PDF / ZIP | ✅✅✅ | 优先～次优先 |
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
| 其余 B.3 表 P2 项 | B8–B12 等 | 1→N | 见上 | P2 |

### B.6 方向 B 独立验收

1. 能指出归属的 **主场景编号**（B1–B12）或 B.3 渠道行。  
2. 页面有 **字段映射或规格对照表**（不只输入框）。  
3. 文件/粘贴类有 **本地处理** 说明。  
4. **1→N** 必须有：权威 References、规格更新日期、ZIP 或清晰多文件下载、Example 清单。  
5. Related tools 优先同场景上下游（可选）。

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
| **候选工具** | ROI（已有）、边际收益（已有）、复利、贷款 EMI/摊还、毛利率/加价率、盈亏平衡 |
| **术语** | ROI、EMI、amortization、CAGR、NPV、margin |
| **References** | Investopedia 公式页、公开会计准则说明 |
| **YMYL** | **是** — disclaimer + references 必备 |
| **意图词例** | `compound interest formula`, `loan amortization schedule` |
| **集群** | C02 |

**合规**：禁止投资建议口吻；假设（利率、期数）必须可见。

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
| 工程装修 | 瓷砖/油漆/混凝土方量 | 公式 + 权威教材 |
| 教育 | GPA 地区差异表 | 明确地区 |
| 法律文书 | 字数估算 | 司法区免责 |
| 内容创作者 | `youtube-channel-art-pack`、`podcast-cover-art-pack` | 平台规范表 |
| 站长品牌 | `favicon-and-pwa-icon-pack`、`social-share-image-pack` | 与 V2 协同 |

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
| C08 设计 SEO | `/topics/design-seo-tools` | V2、Favicon/社交图 |

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

---

## 本站现状与分方向优先级

### 已上线（9）

| 分类 | 工具 | 更贴近 |
|---|---|---|
| Headers / IP / Markdown→HTML | 开发者三件 | A + 可增强为 C-V1 / B5 |
| BMI / ROI / 边际收益 | 计算 | C-V5 / C-V4 |
| Square Feet / Percentage / Gradient | 计算 | 可增强为 C 场景叙事，或保持 A |

### 方向 A 建议优先（技术成熟、独立可上）

文本互转增强、图片压缩、哈希/Base64、PDF 合并、时间戳、颜色/对比度 — 按 A.13 成熟度表排，**不必**先写场景链。

### 方向 B 建议优先（场景桥 + 1→N）

**1→1（既有）**：`json-schema-validator` → `ai-token-counter` → `safe-paste-cleaner` → `yaml-json` → `meta-serp-preview` → `chat-export-converter`

**1→N（本轮挖掘重点，可与上并行择一产能线）**：

1. `amazon-image-resizer`（电商拒图痛点清晰、规格相对集中）  
2. `app-icon-generator-pack`（Logo → 全套倍率，实现面干净）  
3. `ios-app-screenshot-resizer`（规格表较长，需维护 `asset-specs` JSON）  
4. 随后：`favicon-and-pwa-icon-pack`、`social-share-image-pack`、`google-play-asset-pack`

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
3. **方向 A**：文本/图片/编码成熟度 ✅✅✅ 的独立工具。  
4. **方向 C**：存量 YMYL References；V6/V3 与 1→N 工具选主方向挂靠。  
5. 每季度分方向复盘；核对 Apple/Amazon/Google 规格是否过期。

---

## 附录：竞品启示（压缩）

| 竞品 | 可参考 | 应避免 |
|---|---|---|
| calculator.net | 公式深度 | 盲目铺量 |
| TinyWow | 任务闭环 | 强制上传与付费墙 |
| SmallSEOTools | 分类导航 | 薄内容与广告堆叠 |

---

*维护：方向 A 改成熟度/包结论时同步包调研或音视频文档；方向 B 增场景卡；方向 C 增垂直调研。产品主方向字段只改本文与 tool-catalog。*
