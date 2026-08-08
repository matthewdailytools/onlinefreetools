# 工具清单总表（自工具方向文档提炼）

**日期**: 2026-08-08（修订：…；ToolDone；iLovePDF；Omni 公式对照；**Omni 意图合并 → how-to-calculate-* 补充 §9**）  
**来源**: [2026-07-28-tool-direction.md](./2026-07-28-tool-direction.md) + `tool-catalog.json` + [ToolDone](./competitor-refs/tooldone-2026-08-08/README.md) + [iLovePDF](./competitor-refs/ilovepdf-2026-08-08/README.md) + [Omni Calculator](./competitor-refs/omnicalculator-2026-08-08/README.md)  
**目标站点**: https://onlinefreetools.org  

> **用途**：产品排期与立项对照用的扁平清单；**不是** SEO 文案源。细则、红线、成熟度仍以工具方向文档为准。  
> **去重**：同一能力只保留一个主 slug；竞品拆页 / 预设 Tab（如 IG 拼贴）不单独成行。明确标注「默认不做」的项不收录。  
> **序号**：全表连续编号（1–158），跨分节递增；增删行后须重排后续序号。  
> **ToolDone**：计算器公式对照见 §11 / `competitor-refs/tooldone-*`；**禁止**铺量拆页。  
> **Omni Calculator**：§9 为意图合并后的 `how-to-calculate-*` 清单；合并明细见 [`omnicalculator-intent-merge-howto.tsv`](./competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv)；公式对照 §12；SEO 策略：[2026-08-08-omnicalculator-seo-traffic-strategy.md](./2026-08-08-omnicalculator-seo-traffic-strategy.md)。禁州税/男女 BMI/CI 分档/宽高比预设拆页。  
> **iLovePDF**：PDF 全家桶对照见 §4 与 `competitor-refs/ilovepdf-*`；默认**本地** `pdf-lib`，不做 Office 高保真 / AI / 电子签。

---

## 列说明

| 列名 | 含义 |
|---|---|
| **序号** | 全表连续编号，便于引用与排期对账 |
| **工具名称** | 产品可读短名（中文） |
| **工具场景/渠道** | 方向 B 场景号、渠道名，或方向 A/C 品类锚点 |
| **工具 slug** | URL / catalog 用 kebab-case；未立项为建议值 |
| **工具功能** | 一句话能力 |
| **工具分类** | 站内品类（对齐/扩展 catalog：`developer` / `image` / `calculator` / `pdf` / `archive` / `design` / `seo` / `audio` 等） |
| **工具用户角色** | 主要岗位 |
| **工具输入** | 用户提供什么 |
| **工具输出** | 用户得到什么 |
| **开发进度** | 实现状态（见下表） |

### 开发进度取值

| 值 | 含义 |
|---|---|
| **已上线** | 已在 `tool-catalog.json` 注册并可访问 |
| **未开始 · P0** | 方向文档优先排期，尚未开工 |
| **未开始 · P1** | 紧随 P0，尚未开工 |
| **未开始 · P2** | 产能允许再上，尚未开工 |
| **待 POC** | 技术/准确率需先验证（Tier 2 / WASM 等），通过后再立项 |

> 进入编码或 `work-tasks/{slug}/` 后，可将对应行改为 **进行中**；合并上线后改为 **已上线**。优先级以工具方向文档为准，本表随排期调整。

---

## 1. 开发者 / 文本与数据

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 网站 Headers 查看器 | B3 站长上线；B5 开发者交换；C-V1 | `website-headers` | 请求 URL 并展示响应头 | developer | 站长、前端、后端 | 网址 URL | Headers 列表与关键字段解读 | 已上线 |
| 2 | IP 地址查询 | A.10 网络；C-V1 | `ip-address` | 展示客户端 IP 及相关信息 | developer | 开发者、运维、站长 | （浏览器环境） | IP / 基础网络信息 | 已上线 |
| 3 | Markdown ↔ HTML | A.1；B5；C-V1 | `markdown-to-html` | Markdown 与 HTML 双向转换与预览 | developer | 开发者、技术写作者 | MD 或 HTML 文本 | 转换结果 + 安全预览 | 已上线 |
| 4 | 文本 Diff | A.1 | `text-diff` | 两段文本行/词级对比 | developer | 开发者、编辑、审稿 | 文本 A + 文本 B | 高亮差异视图 | 已上线 |
| 5 | YAML ↔ JSON | A.1；B2/B5；C-V1 | `yaml-json` | YAML 与 JSON 互转 | developer | 后端、DevOps、数据工程 | YAML 或 JSON | 另一格式文本 | 已上线 |
| 6 | CSV ↔ JSON | A.1；B2/B4 | `csv-json` | CSV 与 JSON 互转（含类型说明） | developer | 数据工程、电商目录、分析 | CSV 或 JSON | 另一格式文本 | 已上线 |
| 7 | HTML 实体编解码 | A.1 | `html-entity` | HTML 实体编码/解码 | developer | 前端、内容编辑 | 含实体或原始文本 | 编/解码结果 | 已上线 |
| 8 | 添加 WWW DNS 说明 | A.12 / 站长运维 | `add-www-to-dns` | 说明如何为域名配置 www 记录 | developer | 站长、运维 | 域名/场景选择 | 配置步骤与记录示例 | 已上线 |
| 9 | 域名查询 | A.10 网络；站长核对 | `domain-lookup` | 按域名查 DNS 记录与 RDAP 注册信息 | developer | 站长、运维、开发者 | 域名 | DNS 分区 + 注册信息分区 | 已上线 |
| 10 | IndexNow 提交辅助 | A.12；B3 | `indexnow` | 协助构造/理解 IndexNow 提交 | seo | 站长、SEO | URL / 密钥相关输入 | 提交说明或请求构造结果 | 已上线 |
| 11 | JSON Schema 校验器 | B1/B4/B5；C-V1 | `json-schema-validator` | 用 Schema 校验 JSON，定位路径错误 | developer | AI 工程、后端、电商 feed | Schema + JSON | 通过/失败 + JSON Pointer | 未开始 · P0 |
| 12 | Safe Paste 清理 | B1 AI Prompt 流水线 | `safe-paste-cleaner` | 清除零宽/隐藏字符等脏粘贴 | developer | Prompt 工程师、AI 用户 | 脏文本 | 干净文本 + 清除项说明 | 未开始 · P0 |
| 13 | AI Token 计数 | B1 | `ai-token-counter` | 估算 Prompt token 与费用 | developer | AI 开发者、产品 | Prompt 文本 + 模型/价表假设 | token 数与费用估算 | 未开始 · P0 |
| 14 | Prompt 模板构建 | B1 | `prompt-template-builder` | 把自由文本固化为角色/任务/约束模板 | developer | AI 应用开发者 | 自由文本或字段 | 结构化 Prompt 模板 | 未开始 · P1 |
| 15 | Chat 导出转换 | B2 RAG/语料准备 | `chat-export-converter` | 聊天导出转为 MD/JSON/CSV | developer | 数据工程、AI 训练准备 | Chat 导出文件/文本 | MD / JSON / CSV | 未开始 · P0 |
| 16 | SQL 格式化 | A.1 | `sql-formatter` | SQL 美化/缩进 | developer | 后端、数据分析 | SQL 文本 | 格式化 SQL | 未开始 · P2 |
| 17 | cURL → fetch | A.10；B5 | `curl-to-fetch` | 把 cURL 命令转为 fetch 代码 | developer | 前端、全栈 | cURL 字符串 | JavaScript fetch 片段 | 未开始 · P1 |
| 18 | CIDR 计算器 | A.10；C-V1 | `cidr-calculator` | 网段、掩码、主机范围计算 | developer | 运维、网络工程 | CIDR / IP+掩码 | 网络范围与主机数 | 未开始 · P1 |
| 19 | JWT 解码 | A.6；C-V1 | `jwt-decoder` | Base64url 解码 JWT（不验签） | developer | 后端、安全调试 | JWT 字符串 | Header/Payload JSON + 免责声明 | 已上线 |
| 20 | 文件/文本哈希 | A.6 | `file-hash` | 计算 MD5/SHA 等摘要 | developer | 开发者、发布校验 | 文件或文本 | 哈希十六进制 | 已上线 |
| 21 | Base64 编解码 | A.6 | `base64` | Base64 编码/解码 | developer | 开发者 | 文本或文件字节 | Base64 或还原内容 | 已上线 |
| 22 | UUID / ULID 生成 | A.6 | `uuid-generator` | 生成 UUID/ULID | developer | 后端、全栈 | 类型选项 | ID 字符串 | 已上线 |
| 23 | 随机密码生成 | A.6 | `password-generator` | 按规则生成随机密码 | developer | 全体用户 | 长度/字符集 | 密码字符串 | 已上线 |
| 24 | Unix 时间戳转换 | A.8 | `unix-timestamp` | 时间戳 ↔ 可读时间 | developer | 开发者、运维 | 时间戳或日期时间 | 互转结果 | 已上线 |
| 25 | 时区转换 | A.8 | `timezone-converter` | 跨时区时间对照 | developer | 远程协作、运维 | 时间点 + 源/目标时区 | 各时区时间 | 已上线 |
| 26 | Cron 解释器 | A.8 | `cron-explainer` | 把 Cron 表达式译成人话 | developer | 运维、后端 | Cron 表达式 | 自然语言说明 + 下次触发示例 | 未开始 · P2 |
| 27 | 会议多时区包 | B.3 非图片 1→N | `meeting-timezone-pack` | 单时间点 → 团队多时区对照表 | developer | 远程团队、PM | 一个时间点 + 时区列表 | 多时区对照导出 | 未开始 · P2 |
| 28 | 证书指纹包 | B.3 非图片 1→N | `cert-fingerprint-pack` | PEM → 多算法指纹与字段 | developer | 运维、安全 | PEM 证书 | 指纹表 + 有效期等字段 | 未开始 · P2 |

---

## 2. 图片处理

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 29 | 图片压缩 | A.2；设计师簇 | `image-compress` | 降低图片体积并尽量保质 | image | 设计师、站长、运营 | 1 张图 + 质量参数 | 压缩后图片 | 已上线 |
| 30 | 图片优化 | A.2 | `image-optimizer` | 综合优化体积/质量参数 | image | 设计师、站长 | 1 张图 | 优化后图片 | 已上线 |
| 31 | 图片裁剪 | A.2 | `image-crop` | 按区域/比例裁剪 | image | 设计师、运营 | 1 张图 + 裁剪框 | 裁剪后图片 | 已上线 |
| 32 | 图片格式转换 | A.2 | `image-format-converter` | PNG/JPEG/WebP 等互转 | image | 设计师、开发者 | 1 张图 + 目标格式 | 目标格式图片 | 已上线 |
| 33 | EXIF 清除/查看 | A.2 | `image-exif` | 读取或清除 EXIF 元数据 | image | 隐私敏感用户、摄影师 | 1 张图 | 元数据表或去 EXIF 图 | 已上线 |
| 34 | 图片主色提取 | A.2；D 设计师 | `color-from-image` | 从图片提取主色板 | image | 设计师、品牌 | 1 张图 | 色板（HEX 等） | 已上线 |
| 35 | 多图合并 | B13 N→1；A.2.1 | `image-merge` | 多图横/竖/网格拼成一张（可选 IG/FB 预设） | image | 社媒运营、电商美工、博主 | 2+ 张图 + 布局参数 | 1 张合成图 | 已上线 |
| 36 | 图层叠加 | B13；A.2.1 | `image-overlay` | 底图 + 叠图（透明度/混合/位置） | image | 设计师、运营 | 底图 + 叠图 | 合成图 | 已上线 |
| 37 | 图片翻转 | A.2.1 | `flip-image` | 水平/垂直镜像 | image | 设计师、运营 | 1 张图 | 翻转后图片 | 已上线 |
| 38 | 图片灰度 | A.2 | `image-grayscale` | 转为灰度图 | image | 设计师 | 1 张图 | 灰度图 | 已上线 |
| 39 | 图片边框 | A.2 | `image-border` | 添加描边/边框 | image | 设计师、电商 | 1 张图 + 边框参数 | 带边框图 | 已上线 |
| 40 | 图片 ↔ Base64 | A.2 | `image-to-base64` | 图片与 Base64 互转 | image | 开发者、前端 | 图片或 Base64 | Base64 或图片文件 | 已上线 |
| 41 | 文字水印 | A.2；B13 | `add-watermark` | 单图添加文字水印 | image | 摄影师、电商、创作者 | 1 张图 + 水印文案/样式 | 带水印图 | 已上线 |
| 42 | 多图转 PDF | A.5；B13 | `images-to-pdf` | 多图各成 PDF 一页 | image | 运营、归档、设计师 | 多张图 + 页面方向/fit | 多页 PDF | 已上线 |
| 43 | 多图转 Word | A.2 扩展交付 | `images-to-word` | 多图嵌入 Word 文档 | image | 办公、运营 | 多张图 | `.docx` | 已上线 |
| 44 | 多图转 GIF | A.2 / A.4 轻量 | `images-to-gif` | 多图合成 GIF 动图 | image | 社媒、运营 | 多张图 + 帧间隔 | GIF | 已上线 |
| 45 | 多图转 PPT | A.2 扩展交付 | `images-to-ppt` | 多图生成演示文稿 | image | 办公、讲师 | 多张图 | `.pptx` | 已上线 |
| 46 | 本地抠图 | A.11；D | `local-bg-removal` | 浏览器端去背 → 透明 PNG | image | 电商美工、设计师 | 1 张图 | 透明背景 PNG（须误差声明） | 待 POC |

---

## 3. 归档 / 压缩包

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 47 | 创建 ZIP | B14；A.5；对照 ezyZip；slug 对齐 *create zip file*（非 `zip-create`） | `create-zip-file` | 多文件/文件夹打包为 ZIP | archive | 全体知识工作者、学生、运营 | 多文件或文件夹 + 压缩级 | `.zip` | 未开始 · P0 |
| 48 | 解压 ZIP | B14；A.5；slug 对齐 *unzip file* / *unzip online* | `unzip-file` | 列出/预览/提取 ZIP 内容 | archive | Chromebook/平板用户、运营、学生 | `.zip`（可选密码） | 文件树 + 单文件/全部下载 | 未开始 · P0 |
| 49 | 多格式归档解压 | B14；A.5 | `extract-archive` | ZIP/TAR(.GZ) 及懒加载 7Z/RAR 等只读解压，可导出 ZIP | archive | 开发者、运维、收非 ZIP 包的用户 | 归档文件 | 文件列表/提取物；可选标准 ZIP | 未开始 · P1 |
| 50 | Gzip 压缩 | A.5 | `gzip-file` | 文本或单文件 Gzip | archive | 开发者、运维 | 文本/单文件 | `.gz` | 未开始 · P1 |

---

## 4. PDF（对照 [iLovePDF](https://www.ilovepdf.com/)；本地优先）

> 竞品全量 URL：[competitor-refs/ilovepdf-2026-08-08](./competitor-refs/ilovepdf-2026-08-08/README.md)。**不做**：PDF↔Word/PPT/Excel 高保真、电子签、AI 摘要/翻译、修复损坏 PDF。多图→PDF 见已上线 `images-to-pdf`（§2）。

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 51 | 合并 PDF | A.5.2；[ilovepdf merge](https://www.ilovepdf.com/merge_pdf) | `merge-pdf` | 多 PDF 按序合并 | pdf | 办公、运营、学生 | 2+ PDF | 单个 PDF | 已上线 |
| 52 | 拆分 PDF | A.5.2；[split](https://www.ilovepdf.com/split_pdf) | `split-pdf` | 按页/范围拆成多文件或 ZIP | pdf | 办公、运营 | 1 PDF + 范围 | 多 PDF / ZIP | 已上线 |
| 53 | 整理 PDF | A.5.2；[organize](https://www.ilovepdf.com/organize-pdf) | `organize-pdf` | 删页 / 重排 / 抽页 | pdf | 办公 | 1 PDF | 整理后 PDF | 已上线 |
| 54 | 压缩 PDF | A.5.2；[compress](https://www.ilovepdf.com/compress_pdf) | `compress-pdf` | 有限减小体积（声明非云端级） | pdf | 办公、站长 | 1 PDF | 压缩 PDF + 体积对比 | 已上线 |
| 55 | PDF → JPG | A.5.2；[pdf_to_jpg](https://www.ilovepdf.com/pdf_to_jpg) | `pdf-to-jpg` | 每页渲染为图片 | image | 运营、设计师 | 1 PDF | 多张 JPG/PNG（可 ZIP） | 已上线 · P1 |
| 56 | 旋转 PDF | A.5.2；[rotate](https://www.ilovepdf.com/rotate_pdf) | `rotate-pdf` | 按页旋转 90° | pdf | 办公、扫描用户 | 1 PDF | 旋转后 PDF | 已上线 · P1 |
| 57 | PDF 水印 | A.5.2；[watermark](https://www.ilovepdf.com/pdf_add_watermark) | `pdf-watermark` | 文字/图片水印 | pdf | 法务辅助、运营 | 1 PDF + 水印参数 | 带水印 PDF | 已上线 · P1 |
| 58 | PDF 页码 | A.5.2；[page numbers](https://www.ilovepdf.com/add_pdf_page_number) | `pdf-page-numbers` | 添加页码 | pdf | 办公 | 1 PDF + 样式位置 | 带页码 PDF | 已上线 · P1 |
| 59 | PDF → Markdown | A.5.2；[pdf-to-markdown](https://www.ilovepdf.com/pdf-to-markdown) | `pdf-to-markdown` | 文本层导出 MD | pdf | 写作者、AI 用户 | 1 PDF（需文本层） | Markdown | 已上线 · P1 |
| 60 | 保护 PDF | A.5.2；[protect](https://www.ilovepdf.com/protect-pdf) | `protect-pdf` | 用户密码加密 | pdf | 隐私敏感用户 | 1 PDF + 密码 | 加密 PDF | 已上线 · P2 |
| 61 | 解锁 PDF | A.5.2；[unlock](https://www.ilovepdf.com/unlock_pdf) | `unlock-pdf` | 用**已知密码**解密（非破解） | pdf | 文件所有者 | 加密 PDF + 密码 | 解密 PDF | 已上线 · P2 |
| 62 | 裁切 PDF | A.5.2；[crop](https://www.ilovepdf.com/crop-pdf) | `crop-pdf` | 裁切页边距 | pdf | 办公、扫描用户 | 1 PDF + 边距 | 裁切后 PDF | 已上线 · P2 |
| 63 | PDF 页多尺寸导出 | B.3 P2 | `pdf-page-to-image-sizes` | 单页 → 多平台尺寸包 | image | 运营、站长 | 1 页 PDF | 多尺寸图片（可 ZIP） | 已上线 · P2 |

---

## 5. 设计 / 配色 / 矢量

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 64 | WCAG 对比度检测 | A.9；D P0 | `wcag-contrast-checker` | 前景/背景对比度 → AA/AAA | design | UI 设计师、前端、无障碍 | 前景色 + 背景色 | 比率、等级、建议配对色 | 已上线 · P0 |
| 65 | 品牌色色阶生成 | A.9；B.3 1→N；D P0 | `brand-color-token-pack` | 1 主色 → 多色空间 + 色阶 + 对比配对 | design | 品牌设计、前端 | 1 个主色 | HEX/RGB/HSL/OKLCH、色阶、配对 | 已上线 · P0 |
| 66 | 字阶 Token 包 | B.3；D P2 | `type-scale-token-pack` | 基准字号 → 模块化字阶表 | design | UI 设计师、前端 | 基准字号/比例 | 字阶表 + 可选 CSS 变量 | 未开始 · P2 |
| 67 | SVG 优化 | D；对标 SVGOMG | `svg-optimizer` | SVGO 选项可视化压缩 | design | 前端、设计师 | SVG 文本/文件 | 优化 SVG + 体积对比 | 未开始 · P1 |
| 68 | CSS 阴影生成 | A.9；D P2 | `css-shadow-generator` | 可视化生成 box/text-shadow | design | 前端、设计师 | 阴影参数 | 可复制 CSS | 未开始 · P2 |
| 69 | CSS 渐变生成器 | A.9；D（**非** `how-to-calculate-gradient`） | `css-gradient-generator` | 颜色/角度 → CSS `linear-gradient` / `radial-gradient` | design | 前端、设计师 | 颜色停靠点、角度/类型 | 可复制 CSS | 未开始 · P2 |
| 70 | QR 码生成 | A.9 | `qr-code-generator` | 文本/URL → QR 图 | design | 运营、线下活动 | 文本或 URL | QR 图片 | 未开始 · P1 |
| 71 | 条码生成 | A.9 | `barcode-generator` | 生成常见一维条码 | design | 零售、仓储、运营 | 编码内容 + 码制 | 条码图 | 未开始 · P2 |
| 72 | 颜色格式转换 | A.9 | `color-converter` | HEX/RGB/HSL 等互转 | design | 设计师、前端 | 一种色值 | 多格式色值 | 未开始 · P1 |

---

## 6. SEO / 站长

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 73 | Meta SERP 预览 | B3；C-V2 | `meta-serp-preview` | 预估 title/description 截断与 SERP 外观 | seo | 站长、内容运营、SEO | title + description | 字符/像素估算 + 预览 | 未开始 · P0 |
| 74 | FAQ Schema 生成 | B3；C-V2 | `faq-schema-generator` | 问答 → FAQ JSON-LD（须与正文一致） | seo | 站长、内容 | 问答列表 | JSON-LD 字符串 | 未开始 · P1 |
| 75 | 多引擎 Meta 文案长度包 | B.3 | `meta-copy-length-pack` | 一段文案 → 多引擎标题/描述长度套装 | seo | SEO、内容 | 1 段文案 | 多引擎长度检测结果 | 未开始 · P1 |
| 76 | hreflang 标签生成 | A.12；C-V2 | `hreflang-generator` | 多语言 URL → hreflang 片段 | seo | 站长、国际化前端 | 语言-URL 列表 | link/hreflang 标签 | 未开始 · P2 |
| 77 | UTM 构建器 | A.12 | `utm-builder` | 拼装带 UTM 的活动链接 | seo | 增长、运营 | 基础 URL + UTM 字段 | 完整追踪 URL | 未开始 · P2 |

---

## 7. 应用商店 / 社媒 / 站点图标（1→N 交付）

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 78 | iOS 截图尺寸套装 | B6；C-V6；App Store | `ios-app-screenshot-resizer` | 1 张截图 → iPhone/iPad 当期尺寸全套 | image | iOS 开发者、外包 PM | 1 张截图源 | 多尺寸截图 ZIP | 未开始 · P0 |
| 79 | App Icon 全套 | B6；C-V6 | `app-icon-generator-pack` | 1 张 1024 Logo → 商店与设备倍率图标 | image | 移动开发者、设计师 | 1 张方 Logo | 多尺寸 Icon ZIP | 未开始 · P0 |
| 80 | Google Play 素材包 | B6；C-V6；Google Play | `google-play-asset-pack` | Icon + Feature Graphic + 截图规格包 | image | Android 开发者、PM | 1–2 张图 | Play 素材 ZIP | 未开始 · P1 |
| 81 | Favicon / PWA 图标包 | B8；D P0 | `favicon-and-pwa-icon-pack` | 1 Logo → favicon/apple-touch/PWA + manifest 示例 | image | 站长、前端、设计师 | 1 张方 Logo | 图标套装 + manifest 示例 | 未开始 · P0 |
| 82 | 社交分享图包 | B9；D P0；OG/X/LinkedIn… | `social-share-image-pack` | 1 主视觉 → 多平台封面尺寸 | image | 运营、站长、设计师 | 1 张主视觉 | 多平台封面 ZIP | 未开始 · P0 |
| 83 | Chrome 扩展图标包 | B10 | `chrome-extension-icon-pack` | 1 Logo → 扩展商店图标尺寸 | image | 扩展开发者 | 1 张 Logo | 多尺寸图标 | 未开始 · P2 |
| 84 | YouTube 频道套装 | B.3；创作者 | `youtube-channel-art-pack` | 横图 → Banner 安全区 + 头像尺寸 | image | 视频创作者 | 1 张横图 | Banner/头像规格图 | 未开始 · P2 |
| 85 | 播客封面包 | B.3；Apple/Spotify | `podcast-cover-art-pack` | 方图 → 播客平台封面规格 | image | 播客制作人 | 1 张方图 | 封面规格图 | 未开始 · P2 |
| 86 | 设备外框截图包 | B.3 P2 | `device-frame-screenshot-pack` | 截图套轻量外框并导出多尺寸 | image | 产品营销、开发者 | 1 张截图 | 带外框图包 | 未开始 · P2 |

---

## 8. 电商 / 市场素材（1→N）

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 87 | Amazon 主图合规尺寸 | B7；C-V3；Amazon | `amazon-image-resizer` | 1 商品图 → Amazon 推荐尺寸/体积 | image | 跨境卖家、电商运营、美工 | 1 张商品图 | 合规尺寸图 + 命名建议 | 未开始 · P0 |
| 88 | 多电商平台图包 | B7；C-V3 | `marketplace-image-pack` | 1 图 → Amazon/eBay/Shopify 等预设 | image | 多平台卖家、运营 | 1 张图 | 多平台尺寸 ZIP | 未开始 · P1 |
| 89 | Shopify/Woo 主题尺寸 | B11 | `shopify-woocommerce-image-sizes` | 1 图 → 主题常用尺寸 | image | 独立站运营 | 1 张图 | 主题尺寸图包 | 未开始 · P2 |
| 90 | Etsy Listing 图包 | B.3；Etsy | `etsy-listing-image-pack` | 1 图 → Etsy 推荐像素与比例 | image | Etsy 卖家 | 1 张图 | Listing 图包 | 未开始 · P2 |
| 91 | 电子书封面多店 | B.3；C 图书 | `ebook-cover-size-pack` | 1 封面 → Kindle/Apple Books/Kobo | image | 作者、出版运营 | 1 张封面 | 多店封面尺寸 | 未开始 · P2 |
| 92 | 产品 Feed 模板包 | B4；C-V3 | `product-feed-template-pack` | 1 份 CSV → 多平台 feed 列映射文件 | developer | 电商目录专员 | 1 份产品 CSV | 多平台 feed 文件（1→N） | 未开始 · P1 |

---

## 9. 计算器 / 行业教育（Omni 意图合并 · `how-to-calculate-{topic}`）

> **梳理逻辑**（详见 [Omni SEO 流量策略](./2026-08-08-omnicalculator-seo-traffic-strategy.md)）：从 Omni ~3867 en 工具中按**相同搜索意图合并**，一律一带多场景；slug 默认 `how-to-calculate-{topic}`（已上线 URL 锁定不改；通用换算枢纽保留 `unit-converter`）。  
> **不做**：州销售税矩阵、男女/儿童 BMI 拆页、90/95/99 CI 拆页、16:9/4:3 宽高比拆页、宠物年龄/BMI、各国 VAT 税率页。  
> **对照文件**：意图合并全表 [`omnicalculator-intent-merge-howto.tsv`](./competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv)；公式精选仍见 §11 / §12。  
> 立项时打开 Omni en 对照页核对变量与边界；**可见正文不写「合并自 Omni」**。

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 93 | BMI | Omni health；合并 Omni: bmi/bmi-men/bmi-women/bmi-kids/bmi-teens/bmi-in-pregnancy…；A.7；C-V5；禁拆男女/儿童页 | `how-to-calculate-bmi` | 身高体重 → BMI 与分类说明 | calculator | 健康教育读者 | 身高、体重 | BMI 值 + 分类 + 免责 | 已上线 |
| 94 | ROI | Omni finance；合并 Omni: roi/roas/online-marketing-roi；A.7；C-V4；勿与 ROIC/GMROI 混意图 | `how-to-calculate-roi` | 投入产出 → ROI | calculator | 运营、财务助理 | 成本、收益 | ROI% + 公式说明 | 已上线 |
| 95 | 边际收益 | Omni finance；Omni `marginal-revenue`；A.7；C-V4 | `how-to-calculate-marginal-revenue` | 销量变化 → 边际收益 | calculator | 运营、分析 | 收益/销量相关量 | 边际收益 + 说明 | 已上线 |
| 96 | 平方英尺换算 | Omni conversion；合并 Omni: square-feet-converter/square-footage/wall-square-footage/square-feet-of-rectangle/square-feet-triangle；已上线 slug 锁定；检索可覆盖 how to calculate square feet | `square-feet` | 面积单位换算（含 sq ft） | calculator | 房产、装修、留学 | 面积数值 + 单位 | 目标单位结果 | 已上线 |
| 97 | 百分比变化 | Omni math；合并 Omni: percentage-change/percentage-increase/percentage-decrease/percentage-difference/percent-error；A.7；一带涨跌与误差百分比 | `how-to-calculate-percentage-change` | 旧值新值 → 涨跌幅（含 increase/decrease） | calculator | 运营、分析、学生 | 旧值、新值 | 百分比变化 | 已上线 |
| 98 | 多元函数梯度 ∇f | Omni math；Omni `gradient`；A.7；非 CSS 渐变 | `how-to-calculate-gradient` | 演示函数在给定点求偏导梯度向量 | calculator | 学生、ML/优化入门读者 | 坐标 x、y（演示函数固定） | ∇f 分量与公式说明 | 已上线 |
| 99 | 复利 / 单利 | Omni finance；合并 Omni: compound-interest/simple-interest/compound-interest-rate；A.7；C-V4；单利作模式非拆页 | `how-to-calculate-compound-interest` | 本金利率期数 → 复利（可选单利对照） | calculator | 财务教育读者 | 本金、利率、期数、复利频率 | 终值/利息表 + 免责 | 已上线 |
| 100 | 贷款 EMI / 摊还 / 房贷月供 | Omni finance；合并 Omni: emi/amortization/bike-emi/home-loan-emi/personal-loan-emi/mortgage…；合并原 loan-emi + mortgage；禁车/房/车贷拆页 | `how-to-calculate-emi` | 贷款参数 → 等额月供与摊还（含房贷场景） | calculator | 借款人教育、财务助理 | 本金/房价、利率、期数、可选首付 | EMI/月供 + 摊还明细 + 免责 | 已上线 |
| 101 | BMR / TDEE / 卡路里 | Omni health；合并 Omni: bmr/tdee/calorie/calorie-deficit/maintenance-calorie/bmr-harris-benedict-equation…；C-V5；禁拆 harris/katch 独立 URL | `how-to-calculate-bmr-tdee` | Mifflin 等 BMR + 活动量 TDEE（公式作选项） | calculator | 健康教育读者 | 性别、体重、身高、年龄、活动量 | BMR/TDEE + 免责 | 已上线 |
| 102 | 盈亏平衡 | Omni finance；Omni `break-even`；C-V4 | `how-to-calculate-break-even` | 固定/变动成本与单价 → 盈亏平衡量 | calculator | 运营、财务教育 | 成本、价格、销量假设 | 平衡点 + 免责 | 已上线 |
| 103 | 毛利率 | Omni finance；Omni `gross-margin`；C-V4 | `how-to-calculate-gross-margin` | 收入与成本 → 毛利/毛利率 | calculator | 运营、财务教育 | 收入、成本 | 毛利与比率 + 免责 | 已上线 |
| 104 | 单位换算（通用） | Omni conversion；Omni `conversion-calculator`；换算枢纽非 how-to-calculate；禁按单位对拆页（Omni conversion≈326） | `unit-converter` | 长度/重量等通用换算（单页多类别 Tab） | calculator | 学生、工程辅助 | 数值 + 单位对 | 换算结果 | 已上线 |
| 105 | 体脂率 | Omni health；合并 Omni: navy-body-fat/body-fat/army-body-fat/skinfold-body-fat；C-V5；合并原 body-fat-navy | `how-to-calculate-body-fat` | 海军等围度法估算体脂%（公式作选项） | calculator | 健康教育读者 | 颈/腰/臀等围度或皮褶 | 体脂% + 免责 | 已上线 |
| 106 | 理想体重区间 | Omni health；Omni `ideal-weight`；C-V5 | `how-to-calculate-ideal-weight` | 常见公式区间估算 | calculator | 健康教育读者 | 身高、性别等 | 体重区间 + 免责 | 未开始 · P2 |
| 107 | CAGR | Omni finance；Omni `cagr`；C-V4 | `how-to-calculate-cagr` | 期初/期末/年数 → 复合年增长率 | calculator | 财务教育、分析 | 起止价值、年数 | CAGR% + 免责 | 未开始 · P2 |
| 108 | NPV | Omni finance；Omni `net-present-value`；C-V4；与 PV/FV 分意图 | `how-to-calculate-npv` | 现金流折现 → 净现值 | calculator | 财务教育 | 折现率、现金流序列 | NPV + 免责 | 未开始 · P2 |
| 109 | 标准差 / 方差 | Omni statistics；合并 Omni: standard-deviation/variance/population-variance/relative-standard-deviation/grouped-data-standard-deviation；A.7；方差作同页模式 | `how-to-calculate-standard-deviation` | 样本/总体标准差与方差 | calculator | 学生、分析 | 数值列表 | σ/s/方差 + 公式说明 | 未开始 · P2 |
| 110 | 混凝土方量 | Omni construction；合并 Omni: concrete-slab/concrete-column/concrete-cylinder/concrete-stairs/post-hole-concrete；C 工程；形状作选项禁拆页 | `how-to-calculate-concrete` | 尺寸 → 混凝土体积估算（板/柱等场景） | calculator | 装修、施工辅助 | 长宽厚等几何 | 体积/袋数估算 | 未开始 · P2 |
| 111 | 瓷砖估算 | Omni construction；Omni `tile`；C 工程 | `how-to-calculate-tile` | 面积与单片规格 → 用量 | calculator | 装修辅助 | 面积、瓷砖尺寸、损耗 | 片数估算 | 未开始 · P2 |
| 112 | 宽高比 | Omni other；合并 Omni: aspect-ratio/16-9-aspect-ratio/16-10-aspect-ratio/4-3-aspect-ratio/pixel-aspect-ratio/portrait-aspect-ratio；禁 16:9/4:3 独立 URL；css-aspect-ratio 另评估 | `how-to-calculate-aspect-ratio` | 分辨率/边长 → 比例与缩放 | calculator | 视频、设计、前端 | 宽、高或预设比例 | 比例与目标尺寸 | 未开始 · P2 |
| 113 | 油漆估算 | Omni construction；Omni `paint`；C 工程 | `how-to-calculate-paint` | 墙面面积 → 油漆用量估算 | calculator | 装修辅助 | 面积、涂层数、覆盖率 | 升/罐数估算 | 未开始 · P2 |
| 114 | 年薪 ↔ 时薪 | Omni finance；合并 Omni: salary-to-hourly/hourly-to-salary/annual-salary/annual-to-monthly-salary/annual-salary-per-hour/hourly-to-annual-salary；Omni finance 热门 | `how-to-calculate-salary-hourly` | 年/月/周薪 ↔ 时薪 | calculator | 求职者、人事助理 | 薪资与工作时长假设 | 时薪/年薪对照 + 免责 | 未开始 · P2 |
| 115 | p 值 | Omni statistics；Omni `p-value`；A.7 | `how-to-calculate-p-value` | 检验统计量 → p 值（须写清假设） | calculator | 学生、分析 | 分布/统计量/尾型 | p 值 + 公式说明 | 未开始 · P2 |
| 116 | 置信区间 | Omni statistics；合并 Omni: confidence-interval/90-confidence-interval/95-confidence-interval/99-confidence-interval；禁拆 90/95/99 URL | `how-to-calculate-confidence-interval` | 样本 → 置信区间（单页多置信水平） | calculator | 学生、分析 | 均值、σ、n、置信水平 | 区间端点 + 说明 | 未开始 · P2 |
| 117 | Z 分数 | Omni statistics；Omni `z-score`；A.7 | `how-to-calculate-z-score` | 原始分 → 标准分 | calculator | 学生、分析 | x、μ、σ | z + 说明 | 未开始 · P2 |
| 118 | 样本量 | Omni statistics；Omni `sample-size`；A.7 | `how-to-calculate-sample-size` | 误差/置信 → 所需样本量估算 | calculator | 调研、学生 | 误差、置信、比例假设 | n 估算 | 未开始 · P2 |
| 119 | 有效数字 | Omni math；Omni `sig-fig`；Omni math 热门 | `how-to-calculate-significant-figures` | 计数/运算有效数字 | calculator | 学生、实验报告 | 数值或表达式 | 有效数字结果 | 未开始 · P2 |
| 120 | 科学计数法 | Omni math；合并 Omni: scientific-notation/scientific-notation-converter；A.7 | `how-to-calculate-scientific-notation` | 十进制 ↔ 科学计数法 | calculator | 学生 | 数值 | 科学计数法互转 | 未开始 · P2 |
| 121 | 对数 | Omni math；合并 Omni: log/natural-log/antilog/log-2/negative-log；合并原 log-calculator | `how-to-calculate-logarithm` | 任意底对数（含 ln） | calculator | 学生 | 真数、底数 | log 值 + 公式 | 未开始 · P2 |
| 122 | 勾股定理 | Omni math；Omni `pythagorean-theorem`；A.7 | `how-to-calculate-pythagorean-theorem` | 直角三角形缺边求解 | calculator | 学生 | 两边长 | 第三边 + 公式 | 未开始 · P2 |
| 123 | 斜率 | Omni math；Omni `slope`；A.7 | `how-to-calculate-slope` | 两点 → 直线斜率 | calculator | 学生 | 两点坐标 | 斜率 + 说明 | 未开始 · P2 |
| 124 | 指数幂 | Omni math；Omni `exponent`；shortlist 原有 | `how-to-calculate-exponent` | a^b 指数运算 | calculator | 学生 | 底数、指数 | 幂值 + 说明 | 未开始 · P2 |
| 125 | GPA | Omni other；合并 Omni: gpa/college-gpa/high-school-gpa/gpa-pakistan；禁拆 college/high-school 薄页 | `how-to-calculate-gpa` | 成绩点加权平均（须标地区量表） | calculator | 学生 | 课程成绩与学分 | GPA + 地区量表说明 | 未开始 · P2 |
| 126 | 折扣 / 优惠价 | Omni finance；合并 Omni: discount/markdown/percent-off/percentage-discount/double-discount；Omni 补充；多层折扣作同页选项 | `how-to-calculate-discount` | 原价与折扣 → 成交价或折扣额 | calculator | 运营、零售教育 | 原价、折扣率或优惠额 | 成交价/折扣额 | 未开始 · P2 |
| 127 | 加价率 Markup | Omni finance；Omni `markup`；与 discount 分意图 | `how-to-calculate-markup` | 成本与售价 → 加价率（区别 markdown） | calculator | 零售、财务教育 | 成本、售价或加价率 | markup% / 售价 | 未开始 · P2 |
| 128 | 利润率 | Omni finance；合并 Omni: net-profit-margin/operating-margin；与 gross-margin 分意图；同页多类型 | `how-to-calculate-profit-margin` | 营业/净利润率（类型作选项） | calculator | 运营、财务教育 | 收入、成本/费用 | 利润率 + 免责 | 未开始 · P2 |
| 129 | 边际贡献 | Omni finance；Omni `contribution-margin`；C-V4 补充 | `how-to-calculate-contribution-margin` | 贡献边际计算 | calculator | 运营、财务教育 | 单价、变动成本、销量 | 边际贡献与比率 | 未开始 · P2 |
| 130 | 现值 / 终值 PV·FV | Omni finance；合并 Omni: present-value/future-value/annuity-present-value/annuity-future-value；与 NPV 分意图 | `how-to-calculate-present-value` | 单笔/年金现值与终值 | calculator | 财务教育 | 金额、利率、期数 | PV 或 FV + 免责 | 未开始 · P2 |
| 131 | IRR | Omni finance；合并 Omni: internal-rate-of-return/modified-irr；C-V4 补充 | `how-to-calculate-irr` | 内部收益率（可选 MIRR） | calculator | 财务教育 | 现金流序列 | IRR% + 免责 | 未开始 · P2 |
| 132 | 回收期 | Omni finance；Omni `payback-period`；可选折现回收作同页模式 | `how-to-calculate-payback-period` | 投资回收期估算 | calculator | 财务教育 | 初始投资、现金流 | 回收期 + 免责 | 未开始 · P2 |
| 133 | 通胀 | Omni finance；合并 Omni: inflation/cpi-inflation/salary-inflation；禁 CPI 国家矩阵铺量 | `how-to-calculate-inflation` | 名义金额 ↔ 通胀调整 | calculator | 财务教育读者 | 金额、通胀率、年数 | 实际购买力对照 + 免责 | 未开始 · P2 |
| 134 | 增值税 VAT / GST | Omni finance；合并 Omni: vat/gst/gst-qst/margin-and-vat；禁各国税率拆页；用户自填税率 | `how-to-calculate-vat` | 含税/未税互算（税率用户输入） | calculator | 小微经营、财务助理 | 净价/含税价、税率 | 税额与含税价 | 未开始 · P2 |
| 135 | 债务还清 | Omni finance；合并 Omni: debt-payoff/debt-snowball/credit-card-payoff；雪球/雪崩作策略说明非拆页 | `how-to-calculate-debt-payoff` | 债务还清时间与利息估算 | calculator | 借款人教育 | 余额、利率、月付 | 还清月数/利息 + 免责 | 未开始 · P2 |
| 136 | 72 法则 | Omni finance；Omni `rule-of-72`；教育向；免责 | `how-to-calculate-rule-of-72` | Rule of 72 估算翻倍时间 | calculator | 财务教育读者 | 年化收益率 | 翻倍约需年数 | 未开始 · P2 |
| 137 | 小费 | Omni everyday-life；合并 Omni: tip/gratuity；everyday-life 补充 | `how-to-calculate-tip` | 账单小费与分摊 | calculator | 出行、餐饮用户 | 账单、小费比例、分摊人数 | 小费与人均 | 未开始 · P2 |
| 138 | 年龄 | Omni everyday-life；合并 Omni: age/chronological-age；禁宠物年龄拆页 | `how-to-calculate-age` | 出生日期 → 年龄 | calculator | 通用 | 出生日期/两日期间 | 周岁/天数 | 未开始 · P2 |
| 139 | 日期间隔 | Omni everyday-life；Omni `days-between-dates`；everyday-life | `how-to-calculate-date-difference` | 两日期之间天数 | calculator | 通用、项目助理 | 起止日期 | 天数/周数 | 未开始 · P2 |
| 140 | 平均数 | Omni statistics；合并 Omni: mean/average/geometric-mean/harmonic-mean；A.7 补充 | `how-to-calculate-mean` | 算术/几何/调和平均（类型作选项） | calculator | 学生、分析 | 数值列表、平均类型 | 均值 + 公式 | 未开始 · P2 |
| 141 | 中位数 / 众数 | Omni statistics；合并 Omni: median/mean-median-mode；可与 mean 互链 | `how-to-calculate-median` | 中位数与众数 | calculator | 学生、分析 | 数值列表 | 中位数/众数 | 未开始 · P2 |
| 142 | 排列组合 | Omni math；合并 Omni: permutation/combination；A.7 补充 | `how-to-calculate-permutation-combination` | 排列与组合计算 | calculator | 学生 | n、r | P/C 值 + 公式 | 未开始 · P2 |
| 143 | 二次方程 | Omni math；Omni `quadratic-formula`；A.7 补充 | `how-to-calculate-quadratic-equation` | 一元二次方程求根 | calculator | 学生 | a、b、c | 根 + 判别式说明 | 未开始 · P2 |
| 144 | 三角形面积 | Omni math；合并 Omni: triangle-area/herons-formula/3-sides-triangle-area/right-triangle-area/equilateral-triangle-area/isosceles-triangle-area；形状条件作选项禁拆页 | `how-to-calculate-triangle-area` | 多种已知条件求三角形面积 | calculator | 学生 | 边/底高/角 | 面积 + 公式 | 未开始 · P2 |
| 145 | 圆（周长/面积/弧） | Omni math；合并 Omni: circle/circumference/arc-length/area-of-a-circle/circle-diameter；A.7 补充 | `how-to-calculate-circle` | 圆的基本量计算 | calculator | 学生 | 半径/直径/弧度 | 周长/面积/弧长 | 未开始 · P2 |
| 146 | 几何体积 | Omni math；合并 Omni: volume/cylinder-volume/sphere-volume/cone-volume/cube-volume；禁每形状一 URL | `how-to-calculate-volume` | 常见立体体积（形状作选项） | calculator | 学生、工程辅助 | 形状 + 尺寸 | 体积 | 未开始 · P2 |
| 147 | 宏量营养素 | Omni health；合并 Omni: macro/iifym；C-V5 补充；YMYL | `how-to-calculate-macros` | 热量目标 → 碳水/蛋白/脂肪克数 | calculator | 健康教育读者 | 热量目标、蛋白/碳/脂比例 | 宏量克数 + 免责 | 未开始 · P2 |
| 148 | 心率区间 | Omni health；合并 Omni: heart-rate/max-heart-rate/target-heart-rate/heart-rate-zone；YMYL；非医疗建议 | `how-to-calculate-heart-rate` | 最大心率与训练区间估算 | calculator | 健身教育读者 | 年龄、静息心率等 | 最大/目标心率区间 + 免责 | 未开始 · P2 |
| 149 | 配速 | Omni sports；合并 Omni: pace/running-pace/5k-pace/marathon-pace/half-marathon-pace/bike-pace；禁 5k/马拉松拆页 | `how-to-calculate-pace` | 距离时间 → 配速（距离档作选项） | calculator | 跑步爱好者 | 距离、时间 | 配速/完赛时间 | 未开始 · P2 |
| 150 | 1RM 最大重量 | Omni sports；Omni `one-rep-max`；YMYL 运动安全免责 | `how-to-calculate-one-rep-max` | 多次试举 → 估算一次最大重量 | calculator | 力量训练爱好者 | 重量、次数 | 估算 1RM + 免责 | 未开始 · P2 |
| 151 | 欧姆定律 | Omni physics；合并 Omni: ohms-law/ohms-law-current/ohms-law-power/ohms-law-resistance；A.7 物理补充 | `how-to-calculate-ohms-law` | 欧姆定律与电功率关系 | calculator | 学生、电子爱好者 | V/I/R/P 已知量 | 未知量 + 公式 | 未开始 · P2 |
| 152 | 密度 | Omni physics；合并 Omni: density/density-converter/density-mass-volume；A.7 | `how-to-calculate-density` | ρ = m/V | calculator | 学生 | 质量、体积 | 密度 | 未开始 · P2 |
| 153 | 速度 | Omni physics；合并 Omni: velocity/speed/speed-converter；与配速分意图（物理 vs 跑步） | `how-to-calculate-velocity` | 平均速度 v = d/t | calculator | 学生 | 距离、时间 | 速度 | 未开始 · P2 |
| 154 | 加速度 | Omni physics；合并 Omni: acceleration/acceleration-using-force-and-mass/angular-acceleration；A.7 | `how-to-calculate-acceleration` | 直线运动加速度（可选 F=ma） | calculator | 学生 | 速度变化/力与质量等 | 加速度 + 公式 | 未开始 · P2 |

---

## 10. AI / OCR / 音频（有条件）

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 155 | OCR 转文字 | B2；A.11 Tier 2 | `ocr-to-text` | 图片/扫描件 → 文本 | developer | 数据准备、办公 | 图片 | 识别文本（须准确率声明） | 待 POC |
| 156 | 在线录音机 | A.3 P2 | `audio-recorder` | 浏览器录音并下载 | audio | 创作者、会议记录 | 麦克风流 | 音频文件（如 WebM/WAV） | 未开始 · P2 |
| 157 | 音频裁剪 | A.3 | `audio-trim` | 截取音频片段 | audio | 播客、创作者 | 音频文件 + 起止点 | 裁剪后音频 | 未开始 · P2 |
| 158 | WAV ↔ MP3 | A.3 | `audio-wav-mp3` | 音频格式互转（WASM） | audio | 创作者 | WAV 或 MP3 | 另一格式文件 | 待 POC |

---

## 11. ToolDone 公式对照链接（精选）

> 全量枚举与配对文件：[competitor-refs/tooldone-2026-08-08](./competitor-refs/tooldone-2026-08-08/README.md)（~2826 en / ~2835 zh）。  
> 下表仅列与本站方向重叠、需核对公式的项；**链接供研发对照，不写入用户可见正文「来源」**。

| # | 本站 slug | 名称 | ToolDone URL (en) | ToolDone URL (zh) | 进度提示 |
|---|---|---|---|---|---|
| 1 | `how-to-calculate-bmi` | BMI | https://tooldone.com/health/bmi-calculator-body-mass-index/ | https://tooldone.com/zh/jiankang/shenti-zhiliang-zhishu-jisuanqi/ | 已上线对照 |
| 2 | `how-to-calculate-bmr-tdee` | BMR (Mifflin-St Jeor) | https://tooldone.com/health/bmr-calculator-basal-metabolic-rate-mifflin-st-jeor-equation/ | https://tooldone.com/zh/jiankang/jichu-daixielv-jisuanqi-mifulin-shengqiao-gongshi/ | 已上线 |
| 3 | `how-to-calculate-bmr-tdee` | 卡路里 / TDEE | https://tooldone.com/health/calorie-calculator/ | https://tooldone.com/zh/jiankang/kaluli-jisuanqi/ | 已上线 |
| 4 | `how-to-calculate-body-fat` | 海军体脂 | https://tooldone.com/health/navy-body-fat-calculator/ | https://tooldone.com/zh/jiankang/haijun-tizhi-jisuanqi/ | 已上线 |
| 5 | `how-to-calculate-ideal-weight` | 理想体重 | https://tooldone.com/health/ideal-weight-calculator/ | https://tooldone.com/zh/jiankang/lixiang-tizhong-jisuanqi/ | 未开始 · P2 |
| 6 | `how-to-calculate-roi` | ROI | https://tooldone.com/finance/roi-calculator-return-on-investment/ | https://tooldone.com/zh/jinrong/roi-jisuanqi-touzi-huibao/ | 已上线对照 |
| 7 | `how-to-calculate-marginal-revenue` | 边际收益 | https://tooldone.com/finance/marginal-revenue-calculator/ | https://tooldone.com/zh/jinrong/bianjingshouru-jisuanqi/ | 已上线对照 |
| 8 | `how-to-calculate-compound-interest` | 复利 | https://tooldone.com/finance/compound-interest-calculator/ | https://tooldone.com/zh/jinrong/fuli-jisuanqi/ | 未开始 · P1 |
| 9 | `how-to-calculate-emi` | EMI | https://tooldone.com/finance/emi-calculator-equated-monthly-installment/ | https://tooldone.com/zh/jinrong/deng-e-yue-fu-kuan-ji-suan-qi/ | 已上线 |
| 10 | `how-to-calculate-emi` | 摊还 | https://tooldone.com/finance/amortization-calculator/ | https://tooldone.com/zh/jinrong/zhejiu-jisuanqi/ | 已上线（核对 zh 文案是否误译） |
| 11 | `how-to-calculate-break-even` | 盈亏平衡 | https://tooldone.com/finance/break-even-calculator/ | https://tooldone.com/zh/jinrong/break-even-jisuanqi/ | 已上线 |
| 12 | `how-to-calculate-gross-margin` | 毛利率 | https://tooldone.com/finance/gross-margin-calculator/ | https://tooldone.com/zh/jinrong/maoli-lv-jisuanqi/ | 已上线 |
| 13 | `how-to-calculate-cagr` | CAGR | https://tooldone.com/finance/cagr-calculator-compound-annual-growth-rate/ | https://tooldone.com/zh/jinrong/cagr-jisuanqi-fuhe-nianzengzhanglu/ | 未开始 · P2 |
| 14 | `how-to-calculate-npv` | NPV | https://tooldone.com/finance/npv-calculator-net-present-value/ | https://tooldone.com/zh/jinrong/npv-jisuanqi-jingxianzhi/ | 未开始 · P2 |
| 15 | `how-to-calculate-percentage-change` | 百分比变化 | https://tooldone.com/math/percentage-change-calculator/ | https://tooldone.com/zh/shuxue/baifenbi-bianhua-jisuanqi/ | 已上线对照 |
| 16 | `how-to-calculate-gradient` | 梯度 ∇f | https://tooldone.com/math/gradient-calculator/ | https://tooldone.com/zh/shuxue/tiliang-jisuanqi/ | 已上线对照 |
| 17 | `square-feet` | 平方英尺 | https://tooldone.com/conversion/square-feet-converter/ | https://tooldone.com/zh/zhuanhuan/pingfang-yingchi-zhuanhuanqi/ | 已上线对照 |
| 18 | `unit-converter` | 单位换算 | https://tooldone.com/conversion/conversion-calculator/ | https://tooldone.com/zh/zhuanhuan/dan-wei-zhuan-huan-ji-suan-qi/ | 已上线 |
| 19 | `how-to-calculate-standard-deviation` | 标准差 | https://tooldone.com/statistic/standard-deviation-calculator/ | https://tooldone.com/zh/tongji/biaozhun-cha-jisuanqi/ | 未开始 · P2 |
| 20 | `how-to-calculate-concrete` | 混凝土 | https://tooldone.com/construction/concrete-calculator/ | https://tooldone.com/zh/jianzhu/hunningtu-jisuanqi/ | 未开始 · P2 |
| 21 | `how-to-calculate-tile` | 瓷砖 | https://tooldone.com/construction/tile-calculator/ | https://tooldone.com/zh/jianzhu/cizhuan-jisuanqi/ | 未开始 · P2 |
| 22 | `how-to-calculate-aspect-ratio` | 宽高比 | https://tooldone.com/other/aspect-ratio-calculator/ | https://tooldone.com/zh/qita/changkuanbi-jisuanqi/ | 未开始 · P2 |

分品类全量 slug 表：`competitor-refs/tooldone-2026-08-08/lists/*.md`。

---

## 12. Omni Calculator 公式对照链接（意图合并后）

> 全量枚举：[competitor-refs/omnicalculator-2026-08-08](./competitor-refs/omnicalculator-2026-08-08/README.md)（**~3867** en；**无 zh**）。  
> 本表与 §9 对齐：每行一个**合并后意图**；`merged` 明细见 [`omnicalculator-intent-merge-howto.tsv`](./competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv)。  
> **链接供研发对照公式，不写入用户可见「来源」**。可与 §11 ToolDone 交叉核对。

| # | 本站 slug | 名称 | Omni URL (en) | 进度提示 |
|---|---|---|---|---|
| 1 | `how-to-calculate-bmi` | BMI | https://www.omnicalculator.com/health/bmi | 已上线；合并 8 个 Omni slug |
| 2 | `how-to-calculate-roi` | ROI | https://www.omnicalculator.com/finance/roi | 已上线；合并 3 个 Omni slug |
| 3 | `how-to-calculate-marginal-revenue` | 边际收益 | https://www.omnicalculator.com/finance/marginal-revenue | 已上线 |
| 4 | `square-feet` | 平方英尺换算 | https://www.omnicalculator.com/conversion/square-feet-converter | 已上线；合并 5 个 Omni slug |
| 5 | `how-to-calculate-percentage-change` | 百分比变化 | https://www.omnicalculator.com/math/percentage-change | 已上线；合并 5 个 Omni slug |
| 6 | `how-to-calculate-gradient` | 多元函数梯度 ∇f | https://www.omnicalculator.com/math/gradient | 已上线 |
| 7 | `how-to-calculate-compound-interest` | 复利 / 单利 | https://www.omnicalculator.com/finance/compound-interest | 已上线；合并 3 个 Omni slug |
| 8 | `how-to-calculate-emi` | 贷款 EMI / 摊还 / 房贷月供 | https://www.omnicalculator.com/finance/emi | 已上线；合并 10 个 Omni slug |
| 9 | `how-to-calculate-bmr-tdee` | BMR / TDEE / 卡路里 | https://www.omnicalculator.com/health/bmr | 已上线；合并 7 个 Omni slug |
| 10 | `how-to-calculate-break-even` | 盈亏平衡 | https://www.omnicalculator.com/finance/break-even | 已上线 |
| 11 | `how-to-calculate-gross-margin` | 毛利率 | https://www.omnicalculator.com/finance/gross-margin | 已上线 |
| 12 | `unit-converter` | 单位换算（通用） | https://www.omnicalculator.com/conversion/conversion-calculator | 已上线 |
| 13 | `how-to-calculate-body-fat` | 体脂率 | https://www.omnicalculator.com/health/navy-body-fat | 已上线；合并 4 个 Omni slug |
| 14 | `how-to-calculate-ideal-weight` | 理想体重区间 | https://www.omnicalculator.com/health/ideal-weight | 未开始 · P2 |
| 15 | `how-to-calculate-cagr` | CAGR | https://www.omnicalculator.com/finance/cagr | 未开始 · P2 |
| 16 | `how-to-calculate-npv` | NPV | https://www.omnicalculator.com/finance/net-present-value | 未开始 · P2 |
| 17 | `how-to-calculate-standard-deviation` | 标准差 / 方差 | https://www.omnicalculator.com/statistics/standard-deviation | 未开始 · P2；合并 5 个 Omni slug |
| 18 | `how-to-calculate-concrete` | 混凝土方量 | https://www.omnicalculator.com/construction/concrete-slab | 未开始 · P2；合并 5 个 Omni slug |
| 19 | `how-to-calculate-tile` | 瓷砖估算 | https://www.omnicalculator.com/construction/tile | 未开始 · P2 |
| 20 | `how-to-calculate-aspect-ratio` | 宽高比 | https://www.omnicalculator.com/other/aspect-ratio | 未开始 · P2；合并 6 个 Omni slug |
| 21 | `how-to-calculate-paint` | 油漆估算 | https://www.omnicalculator.com/construction/paint | 未开始 · P2 |
| 22 | `how-to-calculate-salary-hourly` | 年薪 ↔ 时薪 | https://www.omnicalculator.com/finance/salary-to-hourly | 未开始 · P2；合并 6 个 Omni slug |
| 23 | `how-to-calculate-p-value` | p 值 | https://www.omnicalculator.com/statistics/p-value | 未开始 · P2 |
| 24 | `how-to-calculate-confidence-interval` | 置信区间 | https://www.omnicalculator.com/statistics/confidence-interval | 未开始 · P2；合并 4 个 Omni slug |
| 25 | `how-to-calculate-z-score` | Z 分数 | https://www.omnicalculator.com/statistics/z-score | 未开始 · P2 |
| 26 | `how-to-calculate-sample-size` | 样本量 | https://www.omnicalculator.com/statistics/sample-size | 未开始 · P2 |
| 27 | `how-to-calculate-significant-figures` | 有效数字 | https://www.omnicalculator.com/math/sig-fig | 未开始 · P2 |
| 28 | `how-to-calculate-scientific-notation` | 科学计数法 | https://www.omnicalculator.com/math/scientific-notation | 未开始 · P2；合并 2 个 Omni slug |
| 29 | `how-to-calculate-logarithm` | 对数 | https://www.omnicalculator.com/math/log | 未开始 · P2；合并 5 个 Omni slug |
| 30 | `how-to-calculate-pythagorean-theorem` | 勾股定理 | https://www.omnicalculator.com/math/pythagorean-theorem | 未开始 · P2 |
| 31 | `how-to-calculate-slope` | 斜率 | https://www.omnicalculator.com/math/slope | 未开始 · P2 |
| 32 | `how-to-calculate-exponent` | 指数幂 | https://www.omnicalculator.com/math/exponent | 未开始 · P2 |
| 33 | `how-to-calculate-gpa` | GPA | https://www.omnicalculator.com/other/gpa | 未开始 · P2；合并 4 个 Omni slug |
| 34 | `how-to-calculate-discount` | 折扣 / 优惠价 | https://www.omnicalculator.com/finance/discount | 未开始 · P2；合并 5 个 Omni slug |
| 35 | `how-to-calculate-markup` | 加价率 Markup | https://www.omnicalculator.com/finance/markup | 未开始 · P2 |
| 36 | `how-to-calculate-profit-margin` | 利润率 | https://www.omnicalculator.com/finance/net-profit-margin | 未开始 · P2；合并 2 个 Omni slug |
| 37 | `how-to-calculate-contribution-margin` | 边际贡献 | https://www.omnicalculator.com/finance/contribution-margin | 未开始 · P2 |
| 38 | `how-to-calculate-present-value` | 现值 / 终值 PV·FV | https://www.omnicalculator.com/finance/present-value | 未开始 · P2；合并 4 个 Omni slug |
| 39 | `how-to-calculate-irr` | IRR | https://www.omnicalculator.com/finance/internal-rate-of-return | 未开始 · P2；合并 2 个 Omni slug |
| 40 | `how-to-calculate-payback-period` | 回收期 | https://www.omnicalculator.com/finance/payback-period | 未开始 · P2 |
| 41 | `how-to-calculate-inflation` | 通胀 | https://www.omnicalculator.com/finance/inflation | 未开始 · P2；合并 3 个 Omni slug |
| 42 | `how-to-calculate-vat` | 增值税 VAT / GST | https://www.omnicalculator.com/finance/vat | 未开始 · P2；合并 4 个 Omni slug |
| 43 | `how-to-calculate-debt-payoff` | 债务还清 | https://www.omnicalculator.com/finance/debt-payoff | 未开始 · P2；合并 3 个 Omni slug |
| 44 | `how-to-calculate-rule-of-72` | 72 法则 | https://www.omnicalculator.com/finance/rule-of-72 | 未开始 · P2 |
| 45 | `how-to-calculate-tip` | 小费 | https://www.omnicalculator.com/everyday-life/tip | 未开始 · P2；合并 2 个 Omni slug |
| 46 | `how-to-calculate-age` | 年龄 | https://www.omnicalculator.com/everyday-life/age | 未开始 · P2；合并 2 个 Omni slug |
| 47 | `how-to-calculate-date-difference` | 日期间隔 | https://www.omnicalculator.com/everyday-life/days-between-dates | 未开始 · P2 |
| 48 | `how-to-calculate-mean` | 平均数 | https://www.omnicalculator.com/statistics/mean | 未开始 · P2；合并 4 个 Omni slug |
| 49 | `how-to-calculate-median` | 中位数 / 众数 | https://www.omnicalculator.com/statistics/median | 未开始 · P2；合并 2 个 Omni slug |
| 50 | `how-to-calculate-permutation-combination` | 排列组合 | https://www.omnicalculator.com/math/permutation | 未开始 · P2；合并 2 个 Omni slug |
| 51 | `how-to-calculate-quadratic-equation` | 二次方程 | https://www.omnicalculator.com/math/quadratic-formula | 未开始 · P2 |
| 52 | `how-to-calculate-triangle-area` | 三角形面积 | https://www.omnicalculator.com/math/triangle-area | 未开始 · P2；合并 6 个 Omni slug |
| 53 | `how-to-calculate-circle` | 圆（周长/面积/弧） | https://www.omnicalculator.com/math/circle | 未开始 · P2；合并 5 个 Omni slug |
| 54 | `how-to-calculate-volume` | 几何体积 | https://www.omnicalculator.com/math/volume | 未开始 · P2；合并 5 个 Omni slug |
| 55 | `how-to-calculate-macros` | 宏量营养素 | https://www.omnicalculator.com/health/macro | 未开始 · P2；合并 2 个 Omni slug |
| 56 | `how-to-calculate-heart-rate` | 心率区间 | https://www.omnicalculator.com/health/heart-rate | 未开始 · P2；合并 4 个 Omni slug |
| 57 | `how-to-calculate-pace` | 配速 | https://www.omnicalculator.com/sports/pace | 未开始 · P2；合并 6 个 Omni slug |
| 58 | `how-to-calculate-one-rep-max` | 1RM 最大重量 | https://www.omnicalculator.com/sports/one-rep-max | 未开始 · P2 |
| 59 | `how-to-calculate-ohms-law` | 欧姆定律 | https://www.omnicalculator.com/physics/ohms-law | 未开始 · P2；合并 4 个 Omni slug |
| 60 | `how-to-calculate-density` | 密度 | https://www.omnicalculator.com/physics/density | 未开始 · P2；合并 3 个 Omni slug |
| 61 | `how-to-calculate-velocity` | 速度 | https://www.omnicalculator.com/physics/velocity | 未开始 · P2；合并 3 个 Omni slug |
| 62 | `how-to-calculate-acceleration` | 加速度 | https://www.omnicalculator.com/physics/acceleration | 未开始 · P2；合并 3 个 Omni slug |

完整 shortlist TSV：`competitor-refs/omnicalculator-2026-08-08/omnicalculator-formula-ref-shortlist.tsv`。  
分品类全量 slug 表：`competitor-refs/omnicalculator-2026-08-08/lists/*.md`。

---

## 统计（本表）

| 项 | 约计 |
|---|---|
| 序号范围 | **1–158**（全表产品行） |
| ToolDone 公式对照精选 | 22 行（§11） |
| ToolDone 全量归档 | ~2826 en / ~2835 zh |
| Omni 意图合并（§9 / §12） | **62** 行；明细 TSV `omnicalculator-intent-merge-howto.tsv` |
| Omni 全量归档 | ~3867 en（无 zh） |
| 已上线 | 41 |
| 未开始 · P0 | 14 |
| 未开始 · P1 | ~26（含计算器 P1） |
| 未开始 · P2 | ~80（含 Omni 合并补充计算器候选） |
| 待 POC | 3（`local-bg-removal`、`ocr-to-text`、`audio-wav-mp3`） |

**P0 未开始速查**：`create-zip-file`、`unzip-file`、`safe-paste-cleaner`、`ai-token-counter`、`chat-export-converter`、`meta-serp-preview`、`ios-app-screenshot-resizer`、`app-icon-generator-pack`、`amazon-image-resizer`、`favicon-and-pwa-icon-pack`、`social-share-image-pack`。

---

## 维护

- 方向文档增删场景/slug 时，同步更新本表对应行，并**重排全表序号**保持连续。  
- 开工：`开发进度` → **进行中**（可选注明 `work-tasks/{slug}/`）。  
- 上线：`开发进度` → **已上线**，并与 `tool-catalog.json` / README 工具清单一致。  
- 计算器：§9 意图合并后立项；复核打开 §11 / §12 / `omnicalculator-intent-merge-howto.tsv` / `*-formula-ref-shortlist.tsv`；已上线 slug 勿改 path。季度可重拉 Omni sitemap。  
- 冲突裁决：以 [工具方向](./2026-07-28-tool-direction.md) 与 Google SEO 政策为准；本表只做扁平索引。
