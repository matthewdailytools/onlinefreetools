# JavaScript 工具包调研 — 可实现实用/有趣在线工具的包枚举

**日期**: 2026-07-09  
**标签**: `技术调研`, `npm`, `浏览器端`, `Cloudflare Workers`, `工具规划`  
**关联文档**:
- [工具方向](./2026-07-28-tool-direction.md) — **产品优先级 / P0–P1 唯一权威**（本文仅包表，不定义排期）
- [音视频图片转换可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md)
- [Google SEO 策略与落地](./2026-07-28-google-seo-strategy-implementation.md)
- [每工具开发与 SEO 方案](./2026-07-28-per-tool-dev-seo-plans.md)

> **职责边界**：本文 = 技术可行工具池（包枚举）。立项与排期只改工具方向文档；勿再按下文历史「泛化梯队」直接开工。

---

## 概述

本文档系统枚举可用于构建 **onlinefreetools.org** 类在线工具站的 JavaScript / npm 包。对应工具方向文档的 **方向 A（浏览器 JS 能力）** 技术附录；方向 B（场景桥接）、方向 C（行业专属）为并列方向，见 [工具方向](./2026-07-28-tool-direction.md)。

### 调研范围

| 维度 | 说明 |
|---|---|
| **运行环境** | 浏览器（纯客户端）、Cloudflare Workers（边缘计算）、或两者结合 |
| **隐私策略** | 优先「文件不上传服务器」的客户端方案 |
| **项目现状** | 站点已有计算类、文本类、网络类工具；依赖较轻（`hono` + `zod` + `marked`） |
| **排除项** | 需专用后端数据库、Puppeteer 无头浏览器、长期存储的方案仅作备注，不作为首选 |

### 运行环境对照表

| 环境 | 适合场景 | 主要限制 |
|---|---|---|
| **浏览器** | 文件处理、多媒体、隐私敏感计算 | 内存上限、WASM 首次加载体积 |
| **Cloudflare Workers** | 网络代理、轻量转换、Header 抓取 | 无真实 `fs`；WASM 压缩后免费版约 1MB |
| **Web Worker** | 大文件哈希、图片批处理、FFmpeg | 与主线程通信用 `postMessage` |
| **两者结合** | 复杂计算在浏览器，跨域/代理在 Worker | 现有 `website-headers` 即此模式 |

> **Workers 兼容提示**：在 `wrangler.jsonc` 中启用 `nodejs_compat` 可显著扩展可用 npm 包（`node:crypto`、`node:buffer` 等）。详见 [Cloudflare Node.js 兼容文档](https://developers.cloudflare.com/workers/runtime-apis/nodejs/)。

---

## 包选型原则

在为本项目引入新包时，建议按以下优先级评估：

1. **零依赖 / 极小体积** — 格式化、编解码、简单计算优先原生 API
2. **Tree-shakeable** — 支持子路径导入（如 `date-fns/format`）
3. **同构可用** — 同时支持浏览器与 Workers 的包维护成本更低
4. **WASM 懒加载** — `@ffmpeg/ffmpeg`、`tesseract.js` 等仅在用户触发后动态 `import()`
5. **SEO 可描述性** — 工具须有明确输入/输出/公式/示例（参见 `docs/SEO_TOOL_RULES.md`）
6. **安全默认值** — 用户上传内容用 `DOMPurify` 消毒；加密工具注明「仅供演示」

### 推荐加载策略

```
页面打开
  ├─ Tier 0：零依赖内联脚本（JSON 格式化、Base64、哈希）
  ├─ Tier 1：动态 import，< 200KB（qrcode、dayjs、pdf-lib）
  └─ Tier 2：用户点击后加载 WASM，> 1MB（FFmpeg、Tesseract、Squoosh）
```

---

## 1. 文本 & 文档处理

### 1.1 核心包

| 包名 | npm 安装 | 可实现工具 | 运行环境 | 体积级 |
|---|---|---|---|---|
| `marked` | `npm i marked` | Markdown → HTML（**站点已有**） | 浏览器 / Worker | 小 |
| `turndown` | `npm i turndown` | HTML → Markdown | 浏览器 | 小 |
| `dompurify` | `npm i dompurify` | HTML 消毒、安全预览 | 浏览器 | 小 |
| `diff` | `npm i diff` | 文本/代码 Diff 对比 | 浏览器 / Worker | 小 |
| `highlight.js` | `npm i highlight.js` | 代码语法高亮 | 浏览器 | 中 |
| `he` | `npm i he` | HTML 实体编解码 | 浏览器 / Worker | 小 |
| `js-yaml` | `npm i js-yaml` | YAML ↔ JSON | 浏览器 / Worker | 小 |
| `fast-xml-parser` | `npm i fast-xml-parser` | XML ↔ JSON（比 xml2js 更快） | 浏览器 / Worker | 小 |
| `@iarna/toml` | `npm i @iarna/toml` | TOML ↔ JSON | 浏览器 / Worker | 小 |
| `papaparse` | `npm i papaparse` | CSV 解析、预览、转 JSON | 浏览器 / Worker | 小 |
| `csv-stringify` | `npm i csv-stringify` | JSON → CSV 导出 | Worker | 小 |
| `sql-formatter` | `npm i sql-formatter` | SQL 美化格式化 | 浏览器 / Worker | 小 |
| `prettier` | `npm i prettier` | 多语言代码格式化 | 浏览器（WASM 版）/ Worker | 大 |
| `lorem-ipsum` | `npm i lorem-ipsum` | 占位文本生成 | 浏览器 / Worker | 极小 |
| `@mozilla/readability` | `npm i @mozilla/readability` | 网页正文提取（配合 Worker 抓取） | Worker + 浏览器 | 小 |

### 1.2 工具方向

**实用（高 SEO）**
- 文本 Diff 对比器
- YAML / JSON / TOML / XML 互转
- CSV 预览与 JSON 互转
- HTML 实体编解码
- 字数统计、阅读时间、关键词密度
- SQL / JSON 格式化

**有趣**
- 摩斯电码编解码（可配合 Web Audio 发声）
- ROT13 / 凯撒密码
- Leet Speak 转换器
- 倒置文字生成器
- 盲文（Braille）点字转换

---

## 2. 图片处理

> 多媒体深度分析见 [专用文档](./2026-06-23-10-15-js-media-conversion-feasibility.md)。

### 2.1 核心包

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| **Canvas API**（原生） | 格式转换、压缩、裁剪、水印、马赛克 | 浏览器 | 零依赖，首选 |
| `browser-image-compression` | JPEG/WebP 智能压缩 | 浏览器 | ~10KB，易集成 |
| `@squoosh/lib` | AVIF/HEIC/WebP 高级编解码 | 浏览器 WASM | Google 出品，体积较大 |
| `cropperjs` | 交互式裁剪 UI | 浏览器 | 需配合 CSS |
| `fabric.js` | 画布标注、拼图、涂鸦 | 浏览器 | 功能全，包 ~300KB |
| `gif.js` | 图片序列 / 视频片段 → GIF | 浏览器 WASM | 适合 < 30s 短视频 |
| `gifuct-js` | GIF 拆帧、解析 | 浏览器 | 轻量 |
| `upng-js` | PNG 编解码 | 浏览器 | 无依赖 |
| `exifr` | EXIF 元数据读取/剥离 | 浏览器 | 隐私工具场景 |
| `colorthief` | 主色 / 调色板提取 | 浏览器 | 设计类引流 |
| `pixelmatch` | 图片像素级对比 | 浏览器 | 视觉回归/demo |
| `svgo` | SVG 优化压缩 | Worker / 构建时 | 浏览器端可用 browser 构建 |
| `@imgly/background-removal` | AI 背景移除 | 浏览器 ONNX | ~40MB 模型，需懒加载 |
| `ascii-art` | 图片 → ASCII 字符画 | 浏览器 / Worker | 有趣 |

### 2.2 工具方向

**实用**
- 图片压缩（按质量/尺寸/目标体积）
- 格式互转：PNG / JPEG / WebP / AVIF
- 调整尺寸 / 裁剪 / 旋转
- EXIF 查看与一键清除
- 图片 ↔ Base64
- 多图拼接 / 水印添加
- Favicon / App Icon 多尺寸生成

**有趣**
- 图片主色提取 → CSS 配色方案
- 像素风 / 马赛克滤镜
- 图片转 ASCII 艺术
- 色盲模拟预览（配合 `color-blind`）

---

## 3. 音视频处理

### 3.1 核心包

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `@ffmpeg/ffmpeg` | 视频转码、裁剪、拼接、抽音轨、加字幕 | 浏览器 WASM | 最强方案，~25MB |
| `lamejs` | WAV → MP3 | 浏览器 WASM | MP3 编码必备 |
| `wavesurfer.js` | 波形可视化 + 区域剪辑 UI | 浏览器 | 交互体验好 |
| `tone.js` | 合成器、节拍器、效果器 | 浏览器 | 音乐趣味工具 |
| `pitchy` | 实时音高检测 | 浏览器 | 吉他/尤克里里调音器 |
| `@tonejs/midi` | MIDI 文件解析 | 浏览器 | 小众但完整 |
| **Web Audio API** | 变速、混音、增益、滤波 | 浏览器 | 零依赖 |
| **MediaRecorder API** | 麦克风/标签页录制 | 浏览器 | 输出 WebM/Opus |
| **Web Speech API** | STT 语音识别 / TTS 朗读 | 浏览器 | Chrome 支持最佳 |
| **WebCodecs API** | 高效 H.264/VP9 编解码 | 浏览器 | Chrome/Edge 为主 |

### 3.2 工具方向

**实用**
- 视频格式转换（MP4 / WebM / MOV / GIF）
- 音频格式转换（MP3 / WAV / OGG / AAC）
- 视频截图 / 提取音频轨道
- 在线录音机
- 音频裁剪 / 音量标准化
- 视频静音 / 去音频轨

**有趣**
- 实时音频频谱可视化
- 吉他调音器
- 文字转语音朗读者
- 视频 → GIF 表情包
- 在线钢琴 / 节拍器
- 白噪声 / 专注背景音生成

---

## 4. PDF 文档

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `pdf-lib` | 合并、拆分、旋转、加密、加水印 | 浏览器 / Worker | 纯 JS，无 DOM 依赖 |
| `pdfjs-dist` | 渲染预览、文本提取 | 浏览器 | Mozilla 官方 |
| `jspdf` | 从 HTML/Canvas 生成 PDF | 浏览器 | 适合报表/证书 |
| `pdf-lib` + `pdfjs-dist` | PDF → 图片（逐页 Canvas 渲染） | 浏览器 | 组合方案 |

**实用工具**：PDF 合并/拆分、PDF 转图片、图片转 PDF、PDF 页码重排、PDF 文本提取、PDF 旋转。

---

## 5. 压缩包 & 二进制格式

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `fflate` | gzip / zlib / zip 压缩解压 | 浏览器 / Worker | 极快，零依赖 |
| `jszip` | ZIP 打包/解包 | 浏览器 / Worker | API 友好 |
| `pako` | deflate/inflate | 浏览器 / Worker | 经典 zlib 实现 |
| `msgpackr` | MessagePack 编解码 | 浏览器 / Worker | 比 JSON 更紧凑 |
| `cbor-x` | CBOR 编解码 | Worker | 物联网/证书场景 |
| `protobufjs` | Protobuf 解码 | 浏览器 / Worker | 需 .proto 或反射 |

**实用工具**：ZIP 压缩/解压、Gzip 文本压缩、文件哈希校验打包、MessagePack ↔ JSON。

---

## 6. 加密、编码 & 身份

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| **Web Crypto API** | AES-GCM、RSA-OAEP、SHA-2 | 浏览器 / Worker | 首选，原生性能 |
| `crypto-js` | MD5/SHA/AES（兼容旧环境） | 浏览器 / Worker | API 简单 |
| `bcryptjs` | 密码哈希 | Worker / 浏览器 | 纯 JS bcrypt |
| `uuid` | UUID v4 生成 | 浏览器 / Worker | 标准库 |
| `ulid` | 时间排序 ID | 浏览器 / Worker | 分布式友好 |
| `@paralleldrive/cuid2` | CUID2 生成 | 浏览器 / Worker | 碰撞安全 |
| `otpauth` | TOTP / HOTP 2FA | 浏览器 | 验证器替代 |
| `jsencrypt` | RSA 加解密 | 浏览器 | PEM 密钥 |
| `node-forge` | X.509 证书解析、CSR | Worker（nodejs_compat） | HTTPS 工具 |
| `hash-wasm` | 高性能 SHA/MD5/BLAKE3 | 浏览器 WASM | 大文件哈希 |

**实用工具**
- MD5 / SHA-1 / SHA-256 / SHA-512 计算
- 文件哈希校验（MD5/SHA）
- AES 加解密
- UUID / ULID / CUID 生成器
- JWT 解码（Header.Payload 展示，**不验证签名**需注明）
- Base64 / Base32 / Hex 编解码
- URL 编解码
- 密码强度检测 + 随机密码生成
- Diceware 口令生成（diceware wordlist）
- TOTP 验证码生成器

**有趣**
- 凯撒密码 / 维吉尼亚密码
- 摩斯电码
- 哈希碰撞科普演示（小输入）

---

## 7. 数学、统计 & 单位换算

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `mathjs` | 科学计算、矩阵、单位换算 | 浏览器 / Worker | 功能全面 |
| `convert-units` | 长度/重量/温度/体积 | 浏览器 / Worker | 轻量专注 |
| `decimal.js` | 高精度小数 | 浏览器 / Worker | 金融计算 |
| `fraction.js` | 分数运算 | 浏览器 / Worker | 教育场景 |
| `nerdamer` | 符号微积分、方程求解 | 浏览器 | 进阶数学 |
| `simple-statistics` | 均值、方差、回归 | 浏览器 / Worker | 统计课堂 |
| `haversine`（或自写） | 两点地理距离 | 浏览器 / Worker | 公式简单 |

### 7.1 可扩展计算工具（与现有 BMI/ROI 互补）

**金融类**
- 复利计算器
- 贷款月供 / 等额本息
- 抵押贷等额本金
- 投资回报 / CAGR（扩展现有 ROI）
- 盈亏平衡点
- NPV / IRR
- 小费 / 分账计算器
- 折扣 / 含税价 / 毛利率 / 加价率

**健康类**
- BMR / TDEE 基础代谢
- 体脂率（美国海军公式）
- 理想体重区间
- 饮水量建议

**工程 / 生活类**
- 混凝土方量（立方码）
- 瓷砖 / 墙纸用量
- 油漆覆盖面积
- 楼梯踏步计算
- 电阻色环解码
- 欧姆定律
- 烹饪计量（杯 ↔ 克、烤箱温度 F/C）

**教育类**
- GPA 加权平均
- 百分比 ↔ 分数
- 标准差 / 方差
- 线性回归（配合 `simple-statistics`）

---

## 8. 日期 & 时间

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `dayjs` | 日期格式化、差值 | 浏览器 / Worker | ~2KB |
| `date-fns` | 函数式日期工具集 | 浏览器 / Worker | Tree-shakeable |
| `luxon` | 时区、IANA 时区转换 | 浏览器 / Worker | 比 moment 现代 |
| `cronstrue` | Cron 人类可读描述 | 浏览器 / Worker | 配合 Cron 工具 |
| `cron-parser` | Cron 下次执行时间 | Worker | 调度验证 |

**实用工具**：日期差（天/周/月）、Unix 时间戳转换、时区转换、年龄计算、工作日计算、Cron 生成/解析、倒计时器、世界时钟。

---

## 9. 设计、颜色 & CSS

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `chroma-js` | 颜色空间转换、渐变 | 浏览器 / Worker | 经典 |
| `culori` | OKLCH 等现代色彩空间 | 浏览器 / Worker | CSS Color 4/5 |
| `tinycolor2` | HEX/RGB/HSL 互转 | 浏览器 / Worker | 极简 |
| `color-blind` | 色盲模拟 | 浏览器 | 无障碍演示 |
| `clean-css` | CSS 压缩 | Worker | 开发者工具 |
| `postcss` | CSS 解析转换 | Worker | 可配合 autoprefixer |

**实用工具**
- 颜色格式转换（HEX / RGB / HSL / OKLCH）
- WCAG 对比度检测
- 配色方案 / 互补色 / 类似色
- CSS 渐变生成器（扩展现有 gradient 计算页）
- Box-shadow / border-radius 生成器
- CSS clamp() 计算器

**有趣**
- 随机调色板
- 渐变色盲可访问性检查
- 从图片提取主题色

---

## 10. 二维码 & 条形码

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `qrcode` | QR 码生成（PNG/SVG） | 浏览器 / Worker | 最常用 |
| `jsqr` | 从图片/Camera 识 QR | 浏览器 | 纯 JS 解码 |
| `jsbarcode` | EAN/Code128 等条码 | 浏览器 | SVG/Canvas 输出 |
| `@zxing/library` | 全能码扫描 | 浏览器 | QR + 一维码 |

**实用工具**：文本/URL/WiFi/vCard QR 生成、条码生成、扫码识别（摄像头）、带 Logo 的 QR。

---

## 11. 开发者 & DevOps 工具

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `prettier` | 代码格式化 | Worker / 浏览器 | JSON/CSS/HTML/MD |
| `esbuild-wasm` | JS/TS 压缩 | 浏览器 WASM | 在线 minify |
| `@babel/standalone` | JSX/TS 浏览器转译 | 浏览器 | 在线 playground |
| `jsonpath-plus` | JSONPath 查询 | 浏览器 / Worker | 数据探索 |
| `ajv` | JSON Schema 校验 | 浏览器 / Worker | 严格校验 |
| `zod` | Schema 定义校验（**站点已有**） | Worker | 类型安全 |
| `semver` | 版本号比较 / bump | Worker | 发版工具 |
| `minimatch` | glob 模式匹配 | Worker | .gitignore 测试 |
| `ini` | INI / .env 解析 | Worker | 配置转换 |
| `dockerfile-ast` | Dockerfile 解析 | Worker | 结构分析 |
| `yaml` | YAML 解析（多文档） | Worker | K8s 清单 |

**实用工具**
- JSON 格式化 + Schema 校验
- 正则表达式测试器（原生 `RegExp` + 高亮）
- JWT 解码
- cURL → fetch 代码转换
- JSONPath 提取
- .env 解析 / 注释剥离
- SemVer 比较
- User-Agent 解析（`ua-parser-js`）
- MIME 类型查询（`mime-db`）
- 文件魔数识别（`file-type` 浏览器版）

---

## 12. 网络 & 检测（Worker 侧）

| 包名 / API | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `fetch`（原生） | HTTP 探测 | Worker | 现有 Header 工具基础 |
| `tldts` | 域名 / TLD 解析 | Worker | 轻量准确 |
| `psl` | 公共后缀列表 | Worker | 子域名判断 |
| `ipaddr.js` | IP 解析、CIDR | Worker | 子网计算 |
| `ua-parser-js` | UA 拆解 | Worker | 浏览器/OS 识别 |
| `punycode`（原生） | IDN 域名编解码 | Worker | 国际化域名 |
| `dns-packet` | DNS 报文构造 | Worker | 需配合 DNS over HTTPS |

**实用工具**
- DNS 记录查询（A/AAAA/MX/TXT/CNAME）
- IP 子网计算器（CIDR）
- URL 解析器（protocol/host/path/query）
- HTTP 状态码手册
- 重定向链跟踪（扩展现有 headers 工具）
- SSL 证书信息（TLS 握手或第三方 API）
- 响应时间 / TTFB 粗测

---

## 13. 多语言 & 中文文本

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `opencc-js` | 简繁转换 | 浏览器 WASM | 开源 OpenCC |
| `pinyin-pro` | 汉字 → 拼音 | 浏览器 | 带声调 |
| `segmentit` | 中文分词 | 浏览器 | 词频统计 |
| `franc` | 语言检测 | 浏览器 / Worker | 纯统计 |
| `any-ascii` | 音译拉丁化 | Worker |  slug 友好 |
| `nspell` + 词典 | 拼写检查 | 浏览器 | 需加载 .aff/.dic |
| `compromise` | 英文 NLP（词性、实体） | 浏览器 | 无 WASM |

**实用工具**
- 简繁体转换
- 拼音标注 / 带声调复制
- 中文分词 + 词频
- 文本语言检测
- 全角半角转换
- 零宽字符检测 / 清理

---

## 14. AI / OCR / 计算机视觉（浏览器 WASM）

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `tesseract.js` | OCR 图片/PDF 文字识别 | 浏览器 WASM | 搜索量极高 |
| `@xenova/transformers` | 翻译、摘要、情感分析 | 浏览器 ONNX | 模型按需下载 |
| `@imgly/background-removal` | 抠图去背景 | 浏览器 | 见图片章节 |
| `@tensorflow/tfjs` | 图像分类、风格迁移 | 浏览器 | 包与模型均大 |
| `face-api.js` | 人脸检测（趣味） | 浏览器 | 隐私敏感需声明 |
| `nsfwjs` | 内容安全检测（演示） | 浏览器 | 需伦理说明 |

**实用工具**
- 图片 OCR 文字提取
- PDF 扫描件 OCR
- 图片压缩前的文字区域检测
- 文本摘要 / 关键词提取（轻量可用 `compromise`）

---

## 15. 数据校验 & 格式化

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `libphonenumber-js` | 国际电话号码解析/格式化 | Worker / 浏览器 | Google lib |
| `validator` | 邮箱、URL、ISBN 等 | Worker / 浏览器 | 规则集合 |
| `luhn`（或自写） | 信用卡号校验 | 浏览器 | 仅格式，不触网 |
| `iban` | IBAN 校验 | Worker | 欧洲银行账号 |
| `isbn-validator` | ISBN-10/13 | 浏览器 | 书籍行业 |
| `fuse.js` | 模糊搜索 | 浏览器 | 相似度排序 |
| `fast-levenshtein` | 编辑距离 | 浏览器 / Worker | Diff 指标 |

**实用工具**
- 手机号国际化格式化
- 邮箱 / URL 合法性检测
- 信用卡 Luhn 校验（教育用途）
- ISBN 校验与转换
- VAT 号码格式检查（各国规则差异大）
- 字符串相似度比较

---

## 16. SEO & 站长工具

与本站 `SEO_TOOL_RULES.md` 及工具页增长策略高度相关。

| 包名 / 手段 | 可实现工具 | 运行环境 |
|---|---|---|
| 自研 + `zod` | Meta 描述长度检测 | 浏览器 |
| `fast-xml-parser` | sitemap.xml 解析/生成 | Worker |
| `schema-dts` + 手写 | JSON-LD 结构化数据生成 | 浏览器 |
| `node-html-parser` | HTML 标题/描述提取 | Worker |
| `robots-parser` | robots.txt 解析 | Worker |

**实用工具**
- SEO 标题 / Meta 描述字数检测
- Open Graph / Twitter Card 预览
- UTM 活动链接构建器
- FAQ / HowTo Schema JSON-LD 生成器
- robots.txt 生成与语法检测
- sitemap.xml 生成（URL 列表粘贴）
- hreflang 标签生成
- 关键词密度分析
- 可读性评分（Flesch，可用 `flesch` 包）

---

## 17. 邮件 & 富文本

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `juice` | HTML 内联 CSS（邮件兼容） | Worker | 邮件必备 |
| `mjml-browser` | MJML → 响应式 HTML | 浏览器 | 邮件模板 |
| `ical-generator` | iCal / ICS 事件生成 | Worker | 日历订阅 |
| `vcard-creator` | vCard 联系人 | 浏览器 | 配合 QR |

**实用工具**：邮件 HTML 内联化、MJML 编辑器预览、会议 ICS 生成、电子名片 vCard。

---

## 18. 图表 & 可视化

| 包名 | 可实现工具 | 运行环境 | 备注 |
|---|---|---|---|
| `chart.js` | 折线/柱状/饼图 | 浏览器 | 轻量好用 |
| `mermaid` | 流程图、时序图、甘特图 | 浏览器 | 需安全渲染 |
| `vega` / `vega-lite` | 声明式统计图 | 浏览器 | 数据新闻 |
| `d3` | 自定义可视化 | 浏览器 | 学习曲线陡 |
| `leaflet` | 交互地图 | 浏览器 | 需瓦片服务 |

**实用工具**
- 在线图表生成（粘贴 CSV）
- Mermaid 流程图编辑器
- 贷款摊销表图表
- 两点地图测距（Leaflet + haversine）

**有趣**
- 实时音频波形（配合 Web Audio）
- 粒子背景生成（`@zakkster/lite-tools` 等）

---

## 19. 趣味 & 创意类

| 包名 | 可实现工具 | 类型 |
|---|---|---|
| `figlet` | ASCII 艺术字 | 有趣 |
| `faker` / `@faker-js/faker` | 假数据生成 | 开发/测试 |
| `matter-js` | 2D 物理演示 | 有趣 |
| `three` | 3D 展示 | 有趣/重 |
| `password-generator` | 随机密码 | 实用 |
| `random-seed` | 可复现随机数 | 游戏/抽奖 |
| Web Audio 振荡器 | 在线钢琴、蜂鸣器 | 有趣 |

**有趣工具清单**
- 随机密码 / 口令生成
- 骰子 / 硬币 / 抽奖轮盘
- 姓名 / 公司名生成器
- 倒计时 / 番茄钟 / Tabata
- Magic 8 Ball / 今日运势
- 表情符号组合搜索
- Unicode 字符大全查询
- NATO 音标字母表
- 宠物年龄换算

---

## 20. 与现有站点的关系

### 20.1 已有工具（避免重复建设）

| 工具 | 技术栈 | 扩展建议 |
|---|---|---|
| Markdown → HTML | `marked` | 增加 HTML→MD、消毒预览 |
| Website Headers | Worker `fetch` | 增加重定向链、TTFB |
| BMI / ROI / 边际收益等 | 纯计算 | 同模板批量扩展金融/健康类 |
| IP Address | Worker | 增加 CIDR / 子网计算 |
| Gradient 计算 | 纯数学 | 增加可视化 CSS 输出 |

### 20.2 产品排期（已迁出）

历史「第一/二/三梯队泛化工具清单」与四象限优先级图 **已废弃**。  
当前 P0/P1、场景链与行业垂直见 [工具方向 §7](./2026-07-28-tool-direction.md)；逐工具卡片见 [每工具方案](./2026-07-28-per-tool-dev-seo-plans.md)。

本文件其余章节的包表仍可作为 **技术选型参考**（在通过工具方向立项漏斗之后）。

---

## 21. （已移除）产品优先级矩阵

见 [工具方向](./2026-07-28-tool-direction.md) 立项漏斗与 §7。

---

## 22. 单工具技术模板（落地参考）

每个新工具建议按以下结构接入（与 `toolRegistrar.ts` 一致）：

```
src/
├── pages/
│   └── {toolName}Page.ts      # 页面 HTML 渲染，注入 i18n
├── tools/
│   └── {toolName}.ts          # （可选）Worker 侧逻辑
└── site/
    ├── tools.ts               # TOOL_PAGES 注册 slug
    └── i18n/
        ├── en.ts              # tool_*_title / description / article
        └── zh.ts              # 须满足 SEO_TOOL_RULES（含公式与示例）
public/
└── scripts/tools/
    └── {toolName}.js          # 浏览器端交互逻辑（可动态 import npm 包）
```

### 前端脚本注释规范

```javascript
/**
 * @file {toolName}.js
 * @description 工具主逻辑：负责读取用户输入、调用处理函数、触发下载。
 */

/**
 * 将原始 JSON 字符串格式化为带缩进的文本。
 * @param {string} raw - 用户输入的原始字符串
 * @param {number} indent - 缩进空格数，默认 2
 * @returns {string} 格式化后的 JSON 或错误提示
 */
function formatJson(raw, indent = 2) { /* ... */ }
```

---

## 23. 风险与合规备忘

| 风险 | 缓解措施 |
|---|---|
| 用户上传恶意 HTML/ SVG | `DOMPurify` 消毒后再 `innerHTML` |
| 加密工具误用 | 注明「浏览器端仅供演示，敏感数据请用专业软件」 |
| OCR / 人脸检测隐私 | 声明「文件仅在本地处理，不上传」 |
| FFmpeg 大文件内存溢出 | 限制文件大小、分片、Worker 处理 |
| 信用卡/电话校验 | 仅格式校验，不存储、不联网 |
| WASM 首屏性能 | 懒加载 + 加载进度条 + 二次访问 CDN 缓存 |

---

## 24. 待继续调研方向

以下领域尚未充分验证，建议在选型前做 POC：

- [ ] `@ffmpeg/ffmpeg` 在移动端 Safari 的内存表现
- [ ] `tesseract.js` 中文识别准确率与模型体积
- [ ] `pdf-lib` 处理 >100MB PDF 的可行性
- [ ] `nodejs_compat` 下 `sharp` 是否可用（预计不可用，需 Canvas 替代）
- [ ] Cloudflare Workers 对 `tesseract` / `ffmpeg` WASM 的体积限制实测
- [ ] `opencc-js` 与 `@xenova/transformers` 多语言模型的 SEO 关键词覆盖
- [ ] 邮件类工具（`mjml-browser`）在 CSP 严格页面的兼容性

---

## 25. 参考链接

- [browser-image-compression](https://github.com/Donaldcwl/browser-image-compression)
- [Squoosh](https://github.com/GoogleChromeLabs/squoosh)
- [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
- [pdf-lib](https://github.com/Hopding/pdf-lib)
- [tesseract.js](https://github.com/naptha/tesseract.js)
- [Cloudflare Workers Node.js 兼容](https://developers.cloudflare.com/workers/runtime-apis/nodejs/)
- [Web Audio API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [WebCodecs API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API)

---

## 26. 结论

| 类别 | 成熟度 | 代表包 | 建议 |
|---|---|---|---|
| 文本 / JSON / YAML | ✅✅✅ | `marked`, `js-yaml`, `papaparse` | 立即扩展 |
| 图片 | ✅✅✅ | Canvas, `browser-image-compression` | 立即扩展 |
| PDF | ✅✅✅ | `pdf-lib`, `pdfjs-dist` | 第一批 |
| 二维码 | ✅✅✅ | `qrcode` | 第一批 |
| 加密 / 哈希 | ✅✅✅ | Web Crypto, `crypto-js` | 第一批 |
| 数学 / 单位 | ✅✅✅ | `mathjs`, `convert-units` | 延续现有计算模板 |
| 音视频 | ✅✅ | `@ffmpeg/ffmpeg`, `lamejs` | 第二批，见专用文档 |
| OCR / AI | ⚠️✅ | `tesseract.js`, `@xenova/transformers` | 第二批 POC |
| SEO / 站长 | ✅✅ | 自研 + `fast-xml-parser` | 与增长策略对齐 |
| 趣味创意 | ✅ | `tone.js`, `chroma-js`, `mermaid` | 按需引流 |

**总体建议**：按 [工具方向](./2026-07-28-tool-direction.md) 立项（场景桥接 × 行业专属）；从本文选包时遵守 Tier 0/1/2 懒加载；多媒体与 OCR 仅在绑定场景且 CWV 可控时排期；所有新工具补齐 `i18n` 与 `SEO_TOOL_RULES`，页面策略见 [Google SEO 落地](./2026-07-28-google-seo-strategy-implementation.md)。

---

*文档维护：包选型变更只改本文；产品优先级只改工具方向文档。*
