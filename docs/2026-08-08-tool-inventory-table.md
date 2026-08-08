# 工具清单总表（自工具方向文档提炼）

**日期**: 2026-08-08（修订：…；ToolDone；iLovePDF；**Omni Calculator 公式对照补充**）  
**来源**: [2026-07-28-tool-direction.md](./2026-07-28-tool-direction.md) + `tool-catalog.json` + [ToolDone](./competitor-refs/tooldone-2026-08-08/README.md) + [iLovePDF](./competitor-refs/ilovepdf-2026-08-08/README.md) + [Omni Calculator](./competitor-refs/omnicalculator-2026-08-08/README.md)  
**目标站点**: https://onlinefreetools.org  

> **用途**：产品排期与立项对照用的扁平清单；**不是** SEO 文案源。细则、红线、成熟度仍以工具方向文档为准。  
> **去重**：同一能力只保留一个主 slug；竞品拆页 / 预设 Tab（如 IG 拼贴）不单独成行。明确标注「默认不做」的项不收录。  
> **序号**：全表连续编号（1–126），跨分节递增；增删行后须重排后续序号。  
> **ToolDone**：计算器公式对照见 §11 / `competitor-refs/tooldone-*`；**禁止**铺量拆页。  
> **Omni Calculator**：公式对照见 §12 / `competitor-refs/omnicalculator-*`（~3867 en）；与 ToolDone **交叉核对**；禁跟风州税 / 男女 BMI / 置信区间分档拆页。  
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

## 9. 计算器 / 行业教育

> 公式对照链接见 **§11**（ToolDone en/zh）与 **§12**（Omni Calculator en）。立项时打开对照页核对变量与边界，**勿**按性别/州税/单位对/置信区间分档拆薄页。

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 93 | BMI 计算 | A.7；C-V5；ToolDone/Omni health | `how-to-calculate-bmi` | 身高体重 → BMI 与分类说明 | calculator | 健康教育读者 | 身高、体重 | BMI 值 + 分类 + 免责 | 已上线 |
| 94 | ROI 计算 | A.7；C-V4；ToolDone/Omni finance | `how-to-calculate-roi` | 投入产出 → ROI | calculator | 运营、财务助理 | 成本、收益 | ROI% + 公式说明 | 已上线 |
| 95 | 边际收益 | A.7；C-V4；ToolDone/Omni finance | `how-to-calculate-marginal-revenue` | 销量变化 → 边际收益 | calculator | 运营、分析 | 收益/销量相关量 | 边际收益 + 说明 | 已上线 |
| 96 | 平方英尺换算 | A.7；ToolDone/Omni conversion | `square-feet` | 面积单位换算（含 sq ft） | calculator | 房产、装修、留学 | 面积数值 + 单位 | 目标单位结果 | 已上线 |
| 97 | 百分比变化 | A.7；ToolDone/Omni math | `how-to-calculate-percentage-change` | 旧值新值 → 涨跌幅 | calculator | 运营、分析、学生 | 旧值、新值 | 百分比变化 | 已上线 |
| 98 | 多元函数梯度 ∇f | A.7；ToolDone/Omni math；**非** CSS 渐变 | `how-to-calculate-gradient` | 演示函数在给定点求偏导梯度向量 | calculator | 学生、ML/优化入门读者 | 坐标 x、y（演示函数固定） | ∇f 分量与公式说明 | 已上线 |
| 99 | 复利计算 | A.7；C-V4；ToolDone/Omni finance | `compound-interest` | 本金利率期数 → 复利终值 | calculator | 财务教育读者 | 本金、利率、期数 | 终值/利息表 + 免责 | 未开始 · P1 |
| 100 | 贷款 EMI / 摊还 | A.7；C-V4；ToolDone/Omni finance | `loan-emi` | 贷款参数 → EMI 与摊还表 | calculator | 借款人教育、财务助理 | 本金、利率、期数 | EMI + 摊还明细 | 未开始 · P1 |
| 101 | BMR / TDEE | A.7；C-V5；ToolDone/Omni health | `bmr-tdee` | Mifflin-St Jeor BMR + 活动量 TDEE | calculator | 健康教育读者 | 性别、体重、身高、年龄、活动量 | BMR/TDEE + 免责 | 未开始 · P1 |
| 102 | 盈亏平衡 | C-V4；ToolDone/Omni finance | `break-even` | 固定/变动成本与单价 → 盈亏平衡量 | calculator | 运营、财务教育 | 成本、价格、销量假设 | 平衡点 + 免责 | 未开始 · P1 |
| 103 | 毛利率 | C-V4；ToolDone/Omni finance | `gross-margin` | 收入与成本 → 毛利/毛利率 | calculator | 运营、财务教育 | 收入、成本 | 毛利与比率 + 免责 | 未开始 · P1 |
| 104 | 单位换算（通用） | A.7；ToolDone/Omni conversion | `unit-converter` | 长度/重量等通用换算（单页多类别） | calculator | 学生、工程辅助 | 数值 + 单位对 | 换算结果 | 未开始 · P2 |
| 105 | 体脂率（海军公式） | C-V5；ToolDone/Omni health | `body-fat-navy` | 围度法估算体脂% | calculator | 健康教育读者 | 颈/腰/臀等围度 | 体脂% + 免责 | 未开始 · P2 |
| 106 | 理想体重区间 | C-V5；ToolDone/Omni health | `ideal-weight` | 常见公式区间估算 | calculator | 健康教育读者 | 身高、性别等 | 体重区间 + 免责 | 未开始 · P2 |
| 107 | CAGR | C-V4；ToolDone/Omni finance | `cagr-calculator` | 期初/期末/年数 → 复合年增长率 | calculator | 财务教育、分析 | 起止价值、年数 | CAGR% + 免责 | 未开始 · P2 |
| 108 | NPV | C-V4；ToolDone/Omni finance | `npv-calculator` | 现金流折现 → 净现值 | calculator | 财务教育 | 折现率、现金流序列 | NPV + 免责 | 未开始 · P2 |
| 109 | 标准差 | A.7；ToolDone/Omni statistics | `standard-deviation` | 样本/总体标准差 | calculator | 学生、分析 | 数值列表 | σ/s + 公式说明 | 未开始 · P2 |
| 110 | 混凝土方量 | C 工程装修；ToolDone/Omni construction | `concrete-calculator` | 尺寸 → 混凝土体积估算 | calculator | 装修、施工辅助 | 长宽厚等 | 体积/袋数估算 | 未开始 · P2 |
| 111 | 瓷砖估算 | C 工程装修；ToolDone/Omni construction | `tile-calculator` | 面积与单片规格 → 用量 | calculator | 装修辅助 | 面积、瓷砖尺寸、损耗 | 片数估算 | 未开始 · P2 |
| 112 | 宽高比 | A.9/其他；ToolDone/Omni other | `aspect-ratio-calculator` | 分辨率/边长 → 比例与缩放 | calculator | 视频、设计、前端 | 宽、高 | 比例与目标尺寸 | 未开始 · P2 |
| 113 | 油漆估算 | C 工程装修；Omni/ToolDone construction | `paint-calculator` | 墙面面积 → 油漆用量估算 | calculator | 装修辅助 | 面积、涂层数、覆盖率 | 升/罐数估算 | 未开始 · P2 |
| 114 | 房贷计算 | C-V4；Omni finance | `mortgage-calculator` | 房价/首付/利率 → 月供（可与 `loan-emi` 合并评估） | calculator | 借款人教育 | 房价、首付、利率、期数 | 月供 + 免责 | 未开始 · P2 |
| 115 | 年薪 ↔ 时薪 | A.7；Omni finance 热门 | `salary-to-hourly` | 年/月/周薪 ↔ 时薪 | calculator | 求职者、人事助理 | 薪资与工作时长假设 | 时薪/年薪对照 + 免责 | 未开始 · P2 |
| 116 | p 值 | A.7；Omni statistics 热门 | `p-value` | 检验统计量 → p 值（须写清假设） | calculator | 学生、分析 | 分布/统计量/尾型 | p 值 + 公式说明 | 未开始 · P2 |
| 117 | 置信区间 | A.7；Omni statistics | `confidence-interval` | 样本 → 置信区间（单页多置信水平） | calculator | 学生、分析 | 均值、σ、n、置信水平 | 区间端点 + 说明 | 未开始 · P2 |
| 118 | Z 分数 | A.7；ToolDone/Omni statistics | `z-score` | 原始分 → 标准分 | calculator | 学生、分析 | x、μ、σ | z + 说明 | 未开始 · P2 |
| 119 | 样本量 | A.7；ToolDone/Omni statistics | `sample-size` | 误差/置信 → 所需样本量估算 | calculator | 调研、学生 | 误差、置信、比例假设 | n 估算 | 未开始 · P2 |
| 120 | 有效数字 | A.7；Omni math 热门 | `significant-figures` | 计数/运算有效数字 | calculator | 学生、实验报告 | 数值或表达式 | 有效数字结果 | 未开始 · P2 |
| 121 | 科学计数法 | A.7；Omni math | `scientific-notation` | 十进制 ↔ 科学计数法 | calculator | 学生 | 数值 | 科学计数法互转 | 未开始 · P2 |
| 122 | 对数计算 | A.7；Omni math | `log-calculator` | 任意底对数（含 ln） | calculator | 学生 | 真数、底数 | log 值 + 公式 | 未开始 · P2 |
| 123 | 勾股定理 | A.7；Omni math | `pythagorean-theorem` | 直角三角形缺边求解 | calculator | 学生 | 两边长 | 第三边 + 公式 | 未开始 · P2 |
| 124 | 斜率 | A.7；Omni math | `slope-calculator` | 两点 → 直线斜率 | calculator | 学生 | 两点坐标 | 斜率 + 说明 | 未开始 · P2 |
| 125 | GPA | C 教育；ToolDone/Omni other | `gpa-calculator` | 成绩点加权平均（须标地区量表） | calculator | 学生 | 课程成绩与学分 | GPA + 地区说明 | 未开始 · P2 |

---

## 10. AI / OCR / 音频（有条件）

| 序号 | 工具名称 | 工具场景/渠道 | 工具 slug | 工具功能 | 工具分类 | 工具用户角色 | 工具输入 | 工具输出 | 开发进度 |
|---|---|---|---|---|---|---|---|---|---|
| 126 | OCR 转文字 | B2；A.11 Tier 2 | `ocr-to-text` | 图片/扫描件 → 文本 | developer | 数据准备、办公 | 图片 | 识别文本（须准确率声明） | 待 POC |
| 127 | 在线录音机 | A.3 P2 | `audio-recorder` | 浏览器录音并下载 | audio | 创作者、会议记录 | 麦克风流 | 音频文件（如 WebM/WAV） | 未开始 · P2 |
| 128 | 音频裁剪 | A.3 | `audio-trim` | 截取音频片段 | audio | 播客、创作者 | 音频文件 + 起止点 | 裁剪后音频 | 未开始 · P2 |
| 129 | WAV ↔ MP3 | A.3 | `audio-wav-mp3` | 音频格式互转（WASM） | audio | 创作者 | WAV 或 MP3 | 另一格式文件 | 待 POC |

---

## 11. ToolDone 公式对照链接（精选）

> 全量枚举与配对文件：[competitor-refs/tooldone-2026-08-08](./competitor-refs/tooldone-2026-08-08/README.md)（~2826 en / ~2835 zh）。  
> 下表仅列与本站方向重叠、需核对公式的项；**链接供研发对照，不写入用户可见正文「来源」**。

| # | 本站 slug | 名称 | ToolDone URL (en) | ToolDone URL (zh) | 进度提示 |
|---|---|---|---|---|---|
| 1 | `how-to-calculate-bmi` | BMI | https://tooldone.com/health/bmi-calculator-body-mass-index/ | https://tooldone.com/zh/jiankang/shenti-zhiliang-zhishu-jisuanqi/ | 已上线对照 |
| 2 | `bmr-tdee` | BMR (Mifflin-St Jeor) | https://tooldone.com/health/bmr-calculator-basal-metabolic-rate-mifflin-st-jeor-equation/ | https://tooldone.com/zh/jiankang/jichu-daixielv-jisuanqi-mifulin-shengqiao-gongshi/ | 未开始 · P1 |
| 3 | `bmr-tdee` | 卡路里 / TDEE | https://tooldone.com/health/calorie-calculator/ | https://tooldone.com/zh/jiankang/kaluli-jisuanqi/ | 未开始 · P1 |
| 4 | `body-fat-navy` | 海军体脂 | https://tooldone.com/health/navy-body-fat-calculator/ | https://tooldone.com/zh/jiankang/haijun-tizhi-jisuanqi/ | 未开始 · P2 |
| 5 | `ideal-weight` | 理想体重 | https://tooldone.com/health/ideal-weight-calculator/ | https://tooldone.com/zh/jiankang/lixiang-tizhong-jisuanqi/ | 未开始 · P2 |
| 6 | `how-to-calculate-roi` | ROI | https://tooldone.com/finance/roi-calculator-return-on-investment/ | https://tooldone.com/zh/jinrong/roi-jisuanqi-touzi-huibao/ | 已上线对照 |
| 7 | `how-to-calculate-marginal-revenue` | 边际收益 | https://tooldone.com/finance/marginal-revenue-calculator/ | https://tooldone.com/zh/jinrong/bianjingshouru-jisuanqi/ | 已上线对照 |
| 8 | `compound-interest` | 复利 | https://tooldone.com/finance/compound-interest-calculator/ | https://tooldone.com/zh/jinrong/fuli-jisuanqi/ | 未开始 · P1 |
| 9 | `loan-emi` | EMI | https://tooldone.com/finance/emi-calculator-equated-monthly-installment/ | https://tooldone.com/zh/jinrong/deng-e-yue-fu-kuan-ji-suan-qi/ | 未开始 · P1 |
| 10 | `loan-emi` | 摊还 | https://tooldone.com/finance/amortization-calculator/ | https://tooldone.com/zh/jinrong/zhejiu-jisuanqi/ | 未开始 · P1（核对 zh 文案是否误译） |
| 11 | `break-even` | 盈亏平衡 | https://tooldone.com/finance/break-even-calculator/ | https://tooldone.com/zh/jinrong/break-even-jisuanqi/ | 未开始 · P1 |
| 12 | `gross-margin` | 毛利率 | https://tooldone.com/finance/gross-margin-calculator/ | https://tooldone.com/zh/jinrong/maoli-lv-jisuanqi/ | 未开始 · P1 |
| 13 | `cagr-calculator` | CAGR | https://tooldone.com/finance/cagr-calculator-compound-annual-growth-rate/ | https://tooldone.com/zh/jinrong/cagr-jisuanqi-fuhe-nianzengzhanglu/ | 未开始 · P2 |
| 14 | `npv-calculator` | NPV | https://tooldone.com/finance/npv-calculator-net-present-value/ | https://tooldone.com/zh/jinrong/npv-jisuanqi-jingxianzhi/ | 未开始 · P2 |
| 15 | `how-to-calculate-percentage-change` | 百分比变化 | https://tooldone.com/math/percentage-change-calculator/ | https://tooldone.com/zh/shuxue/baifenbi-bianhua-jisuanqi/ | 已上线对照 |
| 16 | `how-to-calculate-gradient` | 梯度 ∇f | https://tooldone.com/math/gradient-calculator/ | https://tooldone.com/zh/shuxue/tiliang-jisuanqi/ | 已上线对照 |
| 17 | `square-feet` | 平方英尺 | https://tooldone.com/conversion/square-feet-converter/ | https://tooldone.com/zh/zhuanhuan/pingfang-yingchi-zhuanhuanqi/ | 已上线对照 |
| 18 | `unit-converter` | 单位换算 | https://tooldone.com/conversion/conversion-calculator/ | https://tooldone.com/zh/zhuanhuan/dan-wei-zhuan-huan-ji-suan-qi/ | 未开始 · P2 |
| 19 | `standard-deviation` | 标准差 | https://tooldone.com/statistic/standard-deviation-calculator/ | https://tooldone.com/zh/tongji/biaozhun-cha-jisuanqi/ | 未开始 · P2 |
| 20 | `concrete-calculator` | 混凝土 | https://tooldone.com/construction/concrete-calculator/ | https://tooldone.com/zh/jianzhu/hunningtu-jisuanqi/ | 未开始 · P2 |
| 21 | `tile-calculator` | 瓷砖 | https://tooldone.com/construction/tile-calculator/ | https://tooldone.com/zh/jianzhu/cizhuan-jisuanqi/ | 未开始 · P2 |
| 22 | `aspect-ratio-calculator` | 宽高比 | https://tooldone.com/other/aspect-ratio-calculator/ | https://tooldone.com/zh/qita/changkuanbi-jisuanqi/ | 未开始 · P2 |

分品类全量 slug 表：`competitor-refs/tooldone-2026-08-08/lists/*.md`。

---

## 12. Omni Calculator 公式对照链接（精选）

> 全量枚举：[competitor-refs/omnicalculator-2026-08-08](./competitor-refs/omnicalculator-2026-08-08/README.md)（**~3867** en 工具页；sitemap **无 zh**）。  
> 下表仅列与本站方向重叠、或 Omni 热门且适合本站「少而精」补充的项；**链接供研发对照公式逻辑，不写入用户可见正文「来源」**。  
> 可与 §11 ToolDone **交叉核对**同一公式的两家变量命名与边界说明。

| # | 本站 slug | 名称 | Omni URL (en) | 进度提示 |
|---|---|---|---|---|
| 1 | `how-to-calculate-bmi` | BMI | https://www.omnicalculator.com/health/bmi | 已上线对照；勿跟 men/women/kids 拆页 |
| 2 | `bmr-tdee` | BMR | https://www.omnicalculator.com/health/bmr | 未开始 · P1 |
| 3 | `bmr-tdee` | TDEE | https://www.omnicalculator.com/health/tdee | 未开始 · P1 |
| 4 | `body-fat-navy` | 海军体脂 | https://www.omnicalculator.com/health/navy-body-fat | 未开始 · P2 |
| 5 | `ideal-weight` | 理想体重 | https://www.omnicalculator.com/health/ideal-weight | 未开始 · P2 |
| 6 | `how-to-calculate-roi` | ROI | https://www.omnicalculator.com/finance/roi | 已上线对照 |
| 7 | `how-to-calculate-marginal-revenue` | 边际收益 | https://www.omnicalculator.com/finance/marginal-revenue | 已上线对照 |
| 8 | `compound-interest` | 复利 | https://www.omnicalculator.com/finance/compound-interest | 未开始 · P1 |
| 9 | `loan-emi` | EMI | https://www.omnicalculator.com/finance/emi | 未开始 · P1 |
| 10 | `loan-emi` | 摊还 | https://www.omnicalculator.com/finance/amortization | 未开始 · P1 |
| 11 | `mortgage-calculator` | 房贷 | https://www.omnicalculator.com/finance/mortgage | 未开始 · P2；可与 EMI 合并 |
| 12 | `break-even` | 盈亏平衡 | https://www.omnicalculator.com/finance/break-even | 未开始 · P1 |
| 13 | `gross-margin` | 毛利率 | https://www.omnicalculator.com/finance/gross-margin | 未开始 · P1 |
| 14 | `cagr-calculator` | CAGR | https://www.omnicalculator.com/finance/cagr | 未开始 · P2 |
| 15 | `npv-calculator` | NPV | https://www.omnicalculator.com/finance/net-present-value | 未开始 · P2（Omni slug 非 `npv`） |
| 16 | `salary-to-hourly` | 年薪↔时薪 | https://www.omnicalculator.com/finance/salary-to-hourly | 未开始 · P2 |
| 17 | `how-to-calculate-percentage-change` | 百分比变化 | https://www.omnicalculator.com/math/percentage-change | 已上线对照 |
| 18 | `how-to-calculate-gradient` | 梯度 ∇f | https://www.omnicalculator.com/math/gradient | 已上线对照 |
| 19 | `log-calculator` | 对数 | https://www.omnicalculator.com/math/log | 未开始 · P2 |
| 20 | `significant-figures` | 有效数字 | https://www.omnicalculator.com/math/sig-fig | 未开始 · P2 |
| 21 | `scientific-notation` | 科学计数法 | https://www.omnicalculator.com/math/scientific-notation | 未开始 · P2 |
| 22 | `pythagorean-theorem` | 勾股定理 | https://www.omnicalculator.com/math/pythagorean-theorem | 未开始 · P2 |
| 23 | `slope-calculator` | 斜率 | https://www.omnicalculator.com/math/slope | 未开始 · P2 |
| 24 | `square-feet` | 平方英尺 | https://www.omnicalculator.com/conversion/square-feet-converter | 已上线对照 |
| 25 | `unit-converter` | 单位换算 | https://www.omnicalculator.com/conversion/conversion-calculator | 未开始 · P2 |
| 26 | `standard-deviation` | 标准差 | https://www.omnicalculator.com/statistics/standard-deviation | 未开始 · P2 |
| 27 | `p-value` | p 值 | https://www.omnicalculator.com/statistics/p-value | 未开始 · P2 |
| 28 | `confidence-interval` | 置信区间 | https://www.omnicalculator.com/statistics/confidence-interval | 未开始 · P2；禁拆 90/95/99 URL |
| 29 | `z-score` | Z 分数 | https://www.omnicalculator.com/statistics/z-score | 未开始 · P2 |
| 30 | `sample-size` | 样本量 | https://www.omnicalculator.com/statistics/sample-size | 未开始 · P2 |
| 31 | `concrete-calculator` | 混凝土（板） | https://www.omnicalculator.com/construction/concrete-slab | 未开始 · P2 |
| 32 | `tile-calculator` | 瓷砖 | https://www.omnicalculator.com/construction/tile | 未开始 · P2 |
| 33 | `paint-calculator` | 油漆 | https://www.omnicalculator.com/construction/paint | 未开始 · P2 |
| 34 | `aspect-ratio-calculator` | 宽高比 | https://www.omnicalculator.com/other/aspect-ratio | 未开始 · P2 |
| 35 | `gpa-calculator` | GPA | https://www.omnicalculator.com/other/gpa | 未开始 · P2 |

完整 shortlist TSV：`competitor-refs/omnicalculator-2026-08-08/omnicalculator-formula-ref-shortlist.tsv`。  
分品类全量 slug 表：`competitor-refs/omnicalculator-2026-08-08/lists/*.md`。

---

## 统计（本表）

| 项 | 约计 |
|---|---|
| 序号范围 | **1–129**（全表产品行） |
| ToolDone 公式对照精选 | 22 行（§11） |
| ToolDone 全量归档 | ~2826 en / ~2835 zh |
| Omni 公式对照精选 | 35 行（§12） |
| Omni 全量归档 | ~3867 en（无 zh） |
| 已上线 | 41 |
| 未开始 · P0 | 14 |
| 未开始 · P1 | ~21 |
| 未开始 · P2 | ~35 |
| 待 POC | 3（`local-bg-removal`、`ocr-to-text`、`audio-wav-mp3`） |

**P0 未开始速查**：`create-zip-file`、`unzip-file`、`safe-paste-cleaner`、`ai-token-counter`、`chat-export-converter`、`meta-serp-preview`、`ios-app-screenshot-resizer`、`app-icon-generator-pack`、`amazon-image-resizer`、`favicon-and-pwa-icon-pack`、`social-share-image-pack`。

---

## 维护

- 方向文档增删场景/slug 时，同步更新本表对应行，并**重排全表序号**保持连续。  
- 开工：`开发进度` → **进行中**（可选注明 `work-tasks/{slug}/`）。  
- 上线：`开发进度` → **已上线**，并与 `tool-catalog.json` / README 工具清单一致。  
- 计算器公式复核：打开 §11（ToolDone）或 §12（Omni）或对应 `*-formula-ref-shortlist.tsv` 的 en 链接；可两家交叉核对；季度可重拉 sitemap 更新快照。  
- 冲突裁决：以 [工具方向](./2026-07-28-tool-direction.md) 与 Google SEO 政策为准；本表只做扁平索引。
