# 02 — 插件组合：分几个、做什么、权限与竞品

**目的**：定上架单元（listing），不是定网站 IA。  
**约束**：Chrome Web Store [Quality guidelines](https://developer.chrome.com/docs/webstore/program-policies/quality-guidelines) — 每个扩展必须有 **单一、好懂的用途**；无关功能必须拆开，让用户能分别安装/卸载。政策点名反例：**「提供一大串服务入口的工具栏」**。

## 1. 为什么是 3 个，不是 1 个或 206 个

| 方案 | 结论 |
|---|---|
| 1 个全家桶 | **否**。PDF + 图片 + SEO + 计算器 = 多个用途；审核话术就是 toolbar of services。权限面过大（读所有页 + 下文件 + 改 DOM）。 |
| 206 个各一 listing | **否**。重复/近似扩展、维护爆炸、商店 spam。 |
| 按 catalog 5 分类各一 | **弱**。`developer` 内部已混 CIDR、Prompt、SEO、ZIP，仍不是单用途。 |
| **3 个用途簇（推荐）** | 每句都能不用 “and” 连接两个用户任务：做 PDF；改图片；检查当前页。 |
| 以后 E4/E5 | 仅当 E1–E3 有留存与评价，且能写出新的单用途句。 |

**审核回退**：若 E1 因「保存网页」+「合并已有 PDF」被判两个用途，则拆成：

- E1a **Save this page as PDF**（只做当前/所选标签）
- E1b **PDF file tools**（合并/压缩/水印，popup 选文件）

先按合并版提交（与 iLovePDF / Smallpdf 同类 listing 一致）；被拒再拆，**不要预先拆成 8 个 PDF 动词插件**。

## 2. E1 — PDF Tools（P0）

**单用途句**：Help you turn web pages and PDF files into PDFs you can take away, in the browser.

**建议商店名（en）**：Save page as PDF & PDF tools  
**短摘要方向（≤132 字）**：Save the tab you are viewing as PDF. Merge, split, compress, or watermark PDFs on your device — files are not uploaded to our server.

### 功能（v1 core）

| 能力 | 对应站点 slug | 插件里怎么用 |
|---|---|---|
| 保存当前页为 PDF | `convert-html-to-pdf` 的增强形态 | 工具栏 / 右键 / 快捷键；用**已渲染 DOM**（含登录态） |
| 保存所选标签 / 最多 N 个标签 | `batch-convert-web-pages-to-pdf` | 勾选标签 → 多 PDF → ZIP；**不必**再走 Worker 代抓公开 URL |
| 合并 / 拆分 / 压缩 / 整理 | `merge-pdf` `split-pdf` `compress-pdf` `organize-pdf` | Side panel 或 popup 选本地文件 |
| 水印 / 旋转 / 裁切 | `pdf-watermark` `rotate-pdf` `crop-pdf` | 同用途编辑 |
| 打开密码 / 解密（已知密码） | `protect-pdf` `unlock-pdf` | 明确写「不是破解」 |
| 打印 | `print-pdf` | 调系统打印 |

### v1.5（同一用途，勿另开 listing）

页码、PDF→JPG、抽文本、图转 PDF、批量压缩发邮件、Word↔PDF、填表、签名、对比两份 PDF。

### 不要塞进 E1

PDF/A 认证、DXF、翻页书 HTML、从零画表单、证书数字签。商店描述也**不要**罗列 35 个动词（描述要短、准确）。

### 权限（Manifest V3，最小集）

| 权限 | 为何需要 | 审核说明要点 |
|---|---|---|
| `activeTab` + `scripting` | 读当前页 DOM 做 PDF | 用户点击才注入 |
| `tabs` | 多标签批量保存 | 只列举窗口内标签，不读全部历史 |
| `downloads` | 保存 PDF/ZIP | — |
| `contextMenus` | 右键「Save page as PDF」 | — |
| `storage` | 记住页边距/纸张 | 无账号 |
| **不要** `<all_urls>` 常驻 | 避免「读完整个上网」 | 粘贴外部 URL 时再用可选 host，或深链回网站工具页 |

隐私文案必须与站点一致：文件留在设备；当前页转换在本机；**不要**承诺 100% offline（扩展更新仍走 Chrome）。

## 3. E2 — Image Tools（P1）

**单用途句**：Compress, convert, and resize images on your device.

**建议商店名**：Image compressor & converter  
**摘要方向**：Right-click any image to compress or convert to JPG, PNG, or WebP. Batch ZIP. Files stay on your device.

### 功能（v1 core）

| 能力 | slug | 插件形态 |
|---|---|---|
| 右键图片 → 压缩 / 转格式 | `image-compress` `image-format-converter` | contextMenu on `image` |
| 裁切 / 优化 / 去 EXIF | `image-crop` `image-optimizer` `image-exif` | popup 或 side panel |
| 批量商品图 | `bulk-compress-*` `bulk-convert-images-to-*` | 拖入多文件 → ZIP |

### v1.5

水印、社交尺寸（IG/YT/LinkedIn/OG）、拼接、翻转、灰度、边框、GIF、SVG 优化、App 图标尺寸。

### 不要塞进 E2

`images-to-word` / `images-to-ppt`（变成文档生成，用途漂了）。这两项继续只做网站。

### 权限

`contextMenus`、`downloads`、`storage`；处理 `<img>` 时对当前页用 `activeTab`（下载跨域图可能失败，UI 要说明，引导「另存后拖入」）。**不要**为了偷所有网页图片而申请 `<all_urls>`。

## 4. E3 — Page Inspector（P2）

**单用途句**：Inspect the SEO and response headers of the page you are looking at.

**建议商店名**：On-page SEO & header checker  
**摘要方向**：See title, H1, canonical, robots, Open Graph, and response headers for this tab. Nothing is uploaded unless you choose to fetch robots.txt.

### 功能（v1 core）

从 **当前文档** 解析，而不是让用户复制 HTML：

- title / meta description / canonical / robots / H1 计数（`on-page-seo-checker`）
- OG / Twitter 卡预览（`open-graph-preview`）
- SERP 截断预览（`meta-serp-preview`）
- 响应头解读（`website-headers`：优先 `performance.getEntries` + 可选本站边缘 API 看完整链）
- 一键生成缺失的 meta 草稿（`meta-tag-generator`）

### v1.5

当前 origin 的 robots 是否屏蔽此路径、JSON-LD 草稿、hreflang 草稿、UTM 给当前 URL、WCAG 对比（点选页上两个颜色）、CWV 仍可粘贴 Lighthouse 数字（诚实：扩展不能替代 CrUX）。

### 不要塞进 E3

IndexNow 提交、WHOIS、SSL CT、SPF 全家桶、改用户搜索引擎。写操作与「检查当前页」不是同一用途。

### 权限

`activeTab` + `scripting` 即可做 DOM 检查。拉 `/robots.txt` 或完整头可用现有 Worker，host 权限写成 **可选**，安装时不要默认「读取所有网站」。

## 5. 以后才考虑（不是现在的 listing）

| 代号 | 单用途候选句 | 为何推迟 |
|---|---|---|
| E4 Color | Pick colors and check contrast on this page | v1.5 已把 WCAG 放进 E3；独立 listing 要等 E3 稳定以免用途打架 |
| E5 Dev snippets | Encode, decode, and diff text in the popup | 商店红海；与网站对等，增强弱 |

**永远不要做的 listing**：计算器包、Prompt 包、「打开本站任意工具」启动器。

## 6. 品牌与商店资产

- 发布者：同一 Chrome 开发者账号，显示 onlinefreetools.org。
- 图标：每 listing 独立，避免三套皮肤几乎一样（重复扩展观感）。
- 截图：必须是 **插件 UI**（右键菜单、side panel），不是网站首页截图。
- 支持页 / 隐私政策：用现有 `/privacy#local`，并加一节「扩展申请了哪些权限」。
- 语言：listing 先 **en**；zh 作为第二种 locale。不要十语机翻商店描述。

## 7. 平台

| 商店 | 包 | 说明 |
|---|---|---|
| Chrome Web Store | MV3 | 主战场 |
| Edge Add-ons | 几乎同一包 | 可互认或再提交；Listing 关键词单独写 |
| Firefox AMO | MV3 有差异 | E1 稳定后再移植；不要三个平台同一天首发 |

Safari 需 Apple Developer，排期最后。
