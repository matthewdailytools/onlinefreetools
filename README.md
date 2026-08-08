# Online Free Tools / 在线工具学习项目

## Overview / 项目简介
- Learning project for building and iterating on online utilities; updates are irregular by design.
- Live domain: https://onlinefreetools.org
- Runs on Cloudflare (Pages + Workers) with Wrangler for local dev and deploy.

## 工具清单 / Tools List
以下是我们提供的在线工具及其链接（中文版）：

- [在线查看 HTTP 响应头](https://onlinefreetools.org/zh/tools/website-headers) - 从边缘检查公开网址的 HTTP 响应头（缓存/CORS/安全头）
- [我的 IP 地址是什么？](https://onlinefreetools.org/zh/tools/ip-address) - 查看边缘节点看到的公网 IP，并说明代理/VPN 局限
- [Markdown ↔ HTML](https://onlinefreetools.org/zh/tools/markdown-to-html) - 浏览器内 Markdown 与 HTML 双向转换：预览、安全清理与导出
- [在线文本对比](https://onlinefreetools.org/zh/tools/text-diff) - 并排对比两段文本，高亮增删改差异
- [YAML ↔ JSON](https://onlinefreetools.org/zh/tools/yaml-json) - 浏览器内 YAML 与 JSON 双向转换：类型规则、多文档与本地处理
- [CSV ↔ JSON](https://onlinefreetools.org/zh/tools/csv-json) - 浏览器内 CSV 与 JSON 双向转换：分隔符、表头、类型推断与嵌套扁平化
- [JSON Schema 校验器](https://onlinefreetools.org/zh/tools/json-schema-validator) - 浏览器内用 draft-07 Schema 校验 JSON，并以 JSON Pointer 定位错误
- [HTML 实体编解码](https://onlinefreetools.org/zh/tools/html-entity) - 浏览器内 HTML 实体编码与解码：范围、命名/数字形式、严格解码
- [文件哈希校验](https://onlinefreetools.org/zh/tools/file-hash) - 在浏览器内校验文本或文件的 MD5、SHA 等十六进制摘要
- [UUID / ULID 生成](https://onlinefreetools.org/zh/tools/uuid-generator) - 在浏览器内创建 UUID v4 与 ULID 标识符，一键复制
- [随机密码生成](https://onlinefreetools.org/zh/tools/password-generator) - 在浏览器内本地生成随机密码（crypto.getRandomValues）
- [Base64 编解码](https://onlinefreetools.org/zh/tools/base64) - 在浏览器内转换文本或文件字节的 Base64 / Base64url
- [Unix 时间戳转换](https://onlinefreetools.org/zh/tools/unix-timestamp) - 纪元时间与可读日期时间互转，浏览器本地完成
- [时区转换](https://onlinefreetools.org/zh/tools/timezone-converter) - 同一时刻在 IANA 多时区对照（含夏令时说明），浏览器本地运行
- [JWT 解码](https://onlinefreetools.org/zh/tools/jwt-decoder) - 本地查看 JWT Header 与 Payload，不验证签名
- [图片格式转换](https://onlinefreetools.org/zh/tools/image-format-converter) - 浏览器内 PNG / JPEG / WebP / AVIF 互转：质量、透明底色与本地处理
- [图片 EXIF 查看与清除](https://onlinefreetools.org/zh/tools/image-exif) - 本地查看 GPS/相机等元数据，并重编码清除后下载
- [图片压缩](https://onlinefreetools.org/zh/tools/image-compress) - 本地按最长边、质量与目标体积压缩图片（JPEG/WebP/PNG）
- [图片优化](https://onlinefreetools.org/zh/tools/image-optimizer) - 本地 MozJPEG / WebP / AVIF / OxiPNG 编码器优化，滑动对照后下载
- [图片裁剪与改尺寸](https://onlinefreetools.org/zh/tools/image-crop) - 本地框选裁剪、比例与常用像素预设，导出 JPEG/WebP/PNG
- [图片主色提取](https://onlinefreetools.org/zh/tools/color-from-image) - 本地提取主色板，也可点击预览取区域色，复制 HEX/RGB/HSL
- [WCAG 对比度检测](https://onlinefreetools.org/zh/tools/wcag-contrast-checker) - 前景/背景对比度比率与 AA/AAA 判定，浏览器本地计算
- [品牌色色阶生成](https://onlinefreetools.org/zh/tools/brand-color-token-pack) - 一主色生成 HEX/HSL/OKLCH、50–950 色阶与对比配对，可复制 CSS 变量
- [智能配色](https://onlinefreetools.org/zh/tools/smart-website-color-scheme) - 品牌主色生成网站语义配色（中性链接、独立状态色）与可复制 CSS 变量
- [品牌手册](https://onlinefreetools.org/zh/tools/brand-style-guide) - 智能预填可编辑的品牌设计规范（Logo/色/字/Do-Don’t），导出 Markdown
- [多图拼接](https://onlinefreetools.org/zh/tools/image-merge) - 本地把多张照片合成一张拼图，再下载
- [图片叠加 Logo](https://onlinefreetools.org/zh/tools/image-overlay) - 本地把 Logo 或 PNG 叠到底图上，再下载
- [图片翻转](https://onlinefreetools.org/zh/tools/flip-image) - 本地水平/垂直镜像照片
- [图片转灰度](https://onlinefreetools.org/zh/tools/image-grayscale) - 本地 Rec.601 灰度转换
- [图片加边框](https://onlinefreetools.org/zh/tools/image-border) - 本地外扩彩色边框
- [图片 ↔ Base64](https://onlinefreetools.org/zh/tools/image-to-base64) - 本地图片与 Base64 互转
- [文字水印](https://onlinefreetools.org/zh/tools/add-watermark) - 本地文字水印（透明度/旋转/位置）
- [合并 PDF](https://onlinefreetools.org/zh/tools/merge-pdf) - 浏览器内按顺序合并多个 PDF，不上传
- [拆分 PDF](https://onlinefreetools.org/zh/tools/split-pdf) - 浏览器内按页或范围拆分 PDF，多文件时打包 ZIP
- [整理 PDF](https://onlinefreetools.org/zh/tools/organize-pdf) - 浏览器内删页或重排，不上传
- [PDF 水印](https://onlinefreetools.org/zh/tools/pdf-watermark) - 浏览器内给每一页盖文字/可选图章水印，不上传
- [PDF 页码](https://onlinefreetools.org/zh/tools/pdf-page-numbers) - 浏览器内给每一页加页码，可选位置与起始数字，不上传
- [旋转 PDF](https://onlinefreetools.org/zh/tools/rotate-pdf) - 浏览器内把页面转正，全部页或指定范围，不上传
- [裁切 PDF](https://onlinefreetools.org/zh/tools/crop-pdf) - 浏览器内按 pt 裁切页边距，非拖拽像素编辑，不上传
- [压缩 PDF](https://onlinefreetools.org/zh/tools/compress-pdf) - 浏览器内缩小 PDF 体积，不上传
- [保护 PDF](https://onlinefreetools.org/zh/tools/protect-pdf) - 浏览器内给 PDF 加打开密码，不上传
- [解锁 PDF](https://onlinefreetools.org/zh/tools/unlock-pdf) - 用已知密码去掉 PDF 保护，非破解，不上传
- [PDF 页多尺寸导出](https://onlinefreetools.org/zh/tools/pdf-page-to-image-sizes) - 浏览器内把 PDF 一页导出为多平台 JPEG 尺寸包（ZIP），不上传
- [PDF 转 JPG](https://onlinefreetools.org/zh/tools/pdf-to-jpg) - 浏览器内把 PDF 每页导出为 JPG，多页 ZIP
- [PDF 转 Markdown](https://onlinefreetools.org/zh/tools/pdf-to-markdown) - 浏览器内从 PDF 文本层导出 Markdown，无 OCR，不上传
- [多图转 PDF](https://onlinefreetools.org/zh/tools/images-to-pdf) - 本地多图合成多页 PDF
- [多图转 Word](https://onlinefreetools.org/zh/tools/images-to-word) - 本地多图导出 DOCX
- [多图转 GIF](https://onlinefreetools.org/zh/tools/images-to-gif) - 本地多帧合成动画 GIF
- [多图转 PPT](https://onlinefreetools.org/zh/tools/images-to-ppt) - 本地多图导出 PPTX
- [给域名添加 www DNS](https://onlinefreetools.org/zh/tools/add-www-to-dns) - 生成 www 的 A/CNAME 记录，查询现网，并提供 Cloudflare/Vercel/阿里云等操作教程
- [域名查询](https://onlinefreetools.org/zh/tools/domain-lookup) - 查看 DNS 解析与注册信息（RDAP/WHOIS 风格），经边缘并行查询
- [IndexNow / Bing URL 提交](https://onlinefreetools.org/zh/tools/indexnow) - 生成密钥、检查验证文件、提交变更 URL，并说明 200/202 状态码
- [BMI 计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-bmi) - 按成人筛查公式计算身体质量指数（教育用途，非诊断）
- [ROI 计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-roi) - 计算投资回报率，含假设说明与非投资建议免责
- [复利计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-compound-interest) - 按本金、年利率、年数与复利频率计算终值；可对照单利；非投资建议
- [边际收益计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-marginal-revenue) - 用 ΔTR/ΔQ 计算边际收益（教学用途）
- [平方英尺计算器](https://onlinefreetools.org/zh/tools/square-feet) - 按长宽与单位估算面积（房产/装修场景）
- [百分比变化计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-percentage-change) - 计算两个数值之间的涨跌幅（含百分点对照）
- [梯度计算器](https://onlinefreetools.org/zh/tools/how-to-calculate-gradient) - 计算多元标量函数的梯度 ∇f（偏导向量）

Below are our available online tools with their links (English version):

- [Check HTTP Response Headers](https://onlinefreetools.org/tools/website-headers) - Inspect response headers from the edge (caching, CORS, security)
- [What Is My IP Address?](https://onlinefreetools.org/tools/ip-address) - See the public IP our edge observes, with proxy/VPN limits explained
- [Markdown ↔ HTML](https://onlinefreetools.org/tools/markdown-to-html) - Convert Markdown ↔ HTML with sanitize, preview, and export
- [Text Diff Checker](https://onlinefreetools.org/tools/text-diff) - Compare two texts side by side and highlight differences
- [YAML ↔ JSON](https://onlinefreetools.org/tools/yaml-json) - Convert YAML ↔ JSON with typing rules, multi-doc arrays, and local paste
- [CSV ↔ JSON](https://onlinefreetools.org/tools/csv-json) - Convert CSV ↔ JSON with delimiter, header, type inference, and nested flattening
- [JSON Schema Validator](https://onlinefreetools.org/tools/json-schema-validator) - Validate JSON against draft-07 Schema with JSON Pointer error paths — local in the browser
- [HTML Entity Encoder & Decoder](https://onlinefreetools.org/tools/html-entity) - Encode and decode HTML entities with scope, named/decimal/hex output, and strict decode — all in-browser
- [File Hash Checker](https://onlinefreetools.org/tools/file-hash) - Verify MD5 and SHA hex digests for pasted text or local files in your browser
- [UUID & ULID Generator](https://onlinefreetools.org/tools/uuid-generator) - Create UUID v4 and ULID IDs in your browser with one-click copy
- [Random Password Generator](https://onlinefreetools.org/tools/password-generator) - Create random passwords locally with crypto.getRandomValues — demo-grade
- [Base64 Encode & Decode](https://onlinefreetools.org/tools/base64) - Convert text or file bytes to Base64 and back — local in the browser
- [Unix Timestamp Converter](https://onlinefreetools.org/tools/unix-timestamp) - Convert epoch timestamps ↔ readable datetimes — local in the browser
- [Time Zone Converter](https://onlinefreetools.org/tools/timezone-converter) - Compare one moment across IANA time zones with DST notes — local in the browser
- [JWT Decoder](https://onlinefreetools.org/tools/jwt-decoder) - Read JWT header and payload locally — no signature verification
- [Image Format Converter](https://onlinefreetools.org/tools/image-format-converter) - Convert PNG, JPEG, WebP, and AVIF locally with quality, JPEG matte, and MIME checks
- [EXIF Viewer & Remover](https://onlinefreetools.org/tools/image-exif) - View GPS/camera metadata locally and download a stripped re-encoded copy
- [Image Compressor](https://onlinefreetools.org/tools/image-compress) - Resize, set quality or a target file size, and download — runs locally in your browser
- [Image Optimizer](https://onlinefreetools.org/tools/image-optimizer) - Optimize with MozJPEG, WebP, AVIF, or OxiPNG locally — compare with a slider, then download
- [Crop & Resize Image](https://onlinefreetools.org/tools/image-crop) - Crop with aspect presets and common output sizes — runs locally in your browser
- [Extract Colors from Image](https://onlinefreetools.org/tools/color-from-image) - Local palette and click-to-pick colors — copy HEX, RGB, or HSL
- [WCAG Contrast Checker](https://onlinefreetools.org/tools/wcag-contrast-checker) - Foreground/background contrast ratio with AA/AAA badges — local in the browser
- [Generate Brand Color Scale](https://onlinefreetools.org/tools/brand-color-token-pack) - One base color → HEX/HSL/OKLCH, 50–950 scale, contrast pairs, CSS variables
- [Smart Website Color Scheme](https://onlinefreetools.org/tools/smart-website-color-scheme) - Brand color → semantic site tokens (neutral links, fixed status) + copyable CSS
- [Brand Style Guide](https://onlinefreetools.org/tools/brand-style-guide) - Modular brand guidelines draft (logo/color/type/Do-Don’t) you can edit and export as Markdown
- [Merge Images](https://onlinefreetools.org/tools/image-merge) - Combine photos into one collage locally, then download
- [Overlay Images](https://onlinefreetools.org/tools/image-overlay) - Put a logo or PNG on a photo locally, then download
- [Flip Image](https://onlinefreetools.org/tools/flip-image) - Mirror a photo horizontally or vertically locally
- [Image Grayscale](https://onlinefreetools.org/tools/image-grayscale) - Convert photos to black and white locally
- [Image Border](https://onlinefreetools.org/tools/image-border) - Add a colored outer border locally
- [Image ↔ Base64](https://onlinefreetools.org/tools/image-to-base64) - Encode/decode images and Base64 locally
- [Text Watermark](https://onlinefreetools.org/tools/add-watermark) - Stamp typed text watermarks locally
- [Merge PDF](https://onlinefreetools.org/tools/merge-pdf) - Combine multiple PDFs in order in your browser — no upload
- [Split PDF](https://onlinefreetools.org/tools/split-pdf) - Extract pages locally; ZIP when there are multiple outputs
- [Organize PDF](https://onlinefreetools.org/tools/organize-pdf) - Reorder or remove pages in your browser — no upload
- [PDF Watermark](https://onlinefreetools.org/tools/pdf-watermark) - Stamp text on every PDF page locally — optional logo, no upload
- [Add Page Numbers to PDF](https://onlinefreetools.org/tools/pdf-page-numbers) - Stamp page numbers on every page locally — position and start number, no upload
- [Rotate PDF](https://onlinefreetools.org/tools/rotate-pdf) - Fix page orientation locally — all pages or ranges, no upload
- [Crop PDF](https://onlinefreetools.org/tools/crop-pdf) - Trim page margins in points locally — not a drag pixel editor, no upload
- [Compress PDF](https://onlinefreetools.org/tools/compress-pdf) - Shrink PDF file size in your browser — no upload
- [Protect PDF](https://onlinefreetools.org/tools/protect-pdf) - Password-protect a PDF locally in your browser — no upload
- [Unlock PDF](https://onlinefreetools.org/tools/unlock-pdf) - Remove PDF open password you already know — not cracking, no upload
- [PDF Page to Image Sizes](https://onlinefreetools.org/tools/pdf-page-to-image-sizes) - Export one PDF page as a multi-size JPEG pack locally — ZIP, no upload
- [PDF to JPG](https://onlinefreetools.org/tools/pdf-to-jpg) - Export PDF pages as JPG images locally; ZIP for multi-page
- [PDF to Markdown](https://onlinefreetools.org/tools/pdf-to-markdown) - Extract PDF text layer to Markdown locally — no OCR, no upload
- [Images to PDF](https://onlinefreetools.org/tools/images-to-pdf) - Combine photos into a multi-page PDF locally
- [Images to Word](https://onlinefreetools.org/tools/images-to-word) - Export photos to a DOCX locally
- [Images to GIF](https://onlinefreetools.org/tools/images-to-gif) - Build an animated GIF from frames locally
- [Images to PowerPoint](https://onlinefreetools.org/tools/images-to-ppt) - Export photos to a PPTX locally
- [Add WWW to DNS](https://onlinefreetools.org/tools/add-www-to-dns) - Generate www A/CNAME records, check live DNS, and follow Cloudflare/Vercel/Route 53 guides
- [Domain Lookup](https://onlinefreetools.org/tools/domain-lookup) - Check DNS records and registration data (RDAP/WHOIS-style) via the edge
- [IndexNow — Bing URL Submit](https://onlinefreetools.org/tools/indexnow) - Generate a key, check the verification file, submit changed URLs, and read 200/202 status codes
- [BMI Calculator](https://onlinefreetools.org/tools/how-to-calculate-bmi) - Adult BMI screening from weight and height (educational, not a diagnosis)
- [ROI Calculator](https://onlinefreetools.org/tools/how-to-calculate-roi) - Calculate return on investment with assumptions and a non-advice disclaimer
- [Compound Interest Calculator](https://onlinefreetools.org/tools/how-to-calculate-compound-interest) - Future value from principal, rate, years, and compounding; optional simple interest; educational only
- [Marginal Revenue Calculator](https://onlinefreetools.org/tools/how-to-calculate-marginal-revenue) - Compute MR = ΔTR / ΔQ for learning microeconomics
- [Square Feet Calculator](https://onlinefreetools.org/tools/square-feet) - Estimate area from length × width for flooring and real estate
- [Percentage Change Calculator](https://onlinefreetools.org/tools/how-to-calculate-percentage-change) - Calculate percent increase/decrease between two values
- [Gradient Calculator](https://onlinefreetools.org/tools/how-to-calculate-gradient) - Compute the multivariable gradient ∇f (vector of partial derivatives)

## Getting Started / 快速开始
- Install Node.js LTS and Wrangler: `npm install -g wrangler`
- Install dependencies: `npm install`
- **Ops guide**: [`ops/README.md`](ops/README.md) — local start/stop, build, deploy
- Local dev (background): `npm run start:dev` — see `ops/dev/`
- Local dev (foreground): `npm run dev` or `wrangler dev`
- Deploy: `npm run deploy`

## Static Site Build / 静态站点构建

### Default language

- Default language (the language served at `/`):
	- `SITE_DEFAULT_LANG=zh` (default)
	- Example: `SITE_DEFAULT_LANG=en SITE_LANGS=zh,en npm run build:site`

### Browser language

- Static pages (home/devlogs) will auto-select language based on browser settings.
	- If the URL has no language prefix, the page uses `navigator.languages` to pick the best supported language.
	- If none matches, it falls back to English (`en`).

### Tracking Injection / 跟踪代码注入

### i18n / 多语言
- Enabled languages: `SITE_LANGS=zh,en npm run build:site`
- Add a language: update `scripts/site/config.mjs` (languages + pathPrefix) and `scripts/site/i18n.mjs` (translations)

## Notes / 备注
- 功能与在线工具会不定期更新，最新状态以线上域名为准。
- 开发问答日志存放于 `dev-logs/`，按日期+摘要命名。