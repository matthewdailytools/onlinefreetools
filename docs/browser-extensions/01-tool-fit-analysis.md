# 01 — 本站工具适配备注（Catalog 2026-09-06）

**目的**：判断每个已上线工具是「插件核心」「同用途后续」「以后再说」还是「只留网站」。  
**数据**：`src/site/tool-catalog.json` 共 **206** 条；逐 slug 映射见 [tool-extension-map.tsv](./tool-extension-map.tsv)。

## 1. 现有库存

| Catalog `category` | 数量 | 对插件的含义 |
|---|---:|---|
| developer | 66 | 只有「检查当前页 / 改当前页产物」适合插件；CIDR、Prompt、ZIP、Excel 公式不适合 |
| calculator | 66 | **全部留网站**。商店几乎没人搜 “BMI calculator extension”；Google 长尾才是主场 |
| pdf | 35 | 最强插件品类；网页→PDF 是网站做不到的增强 |
| image | 35 | 次强；右键压缩/转 WebP 是增强 |
| design | 4 | WCAG 可并入 E3；色板生成留网站或以后 E4 |

其它 catalog 字段：

| 字段 | 快照 | 含义 |
|---|---|---|
| `localProcessing: true` | 184 | 文件不出本机，和插件隐私卖点一致 |
| `localProcessing: false` | 22 | 会打 Worker / 外网（抓 URL、AI Prompt、DNS、IndexNow 等） |
| `featured` | 89 | 只说明首页权重，**不等于**适合插件 |

`localProcessing: false` 里真正该进插件的是：

- `batch-convert-web-pages-to-pdf` / `convert-html-to-pdf`（URL 代抓）→ E1 里应改成 **当前标签页 DOM**，减少代抓
- `on-page-seo-checker` / `open-graph-preview` / `website-headers` → E3 应读 **当前页**，而不是让用户粘贴 URL

其余 remote（IndexNow、域名查询、Prompt+Turnstile）**不要**进插件。

## 2. 适配原则（先于清单）

对每个 slug 只问三句：

1. **当前标签页有没有上下文？**（已登录、已渲染、已选中的图/字、已打开的 PDF 链接）
2. **商店里会不会搜这句？**（save page as pdf / compress image / seo checker，而不是 how to calculate npv）
3. **和已规划插件是否同一用途？**（Chrome：两件明显分开的功能必须分两个扩展）

三句都「是」→ 进某个 E* 的 core。  
只有 3 是、1/2 弱 → v1.5 extra 或 stay-web。  
计算器 / Prompt / 行业公式 → stay-web。

## 3. 映射汇总

| 去向 | 角色 | 数量 | 说明 |
|---|---|---:|---|
| E1 PDF Tools | core | 12 | 网页转 PDF、合并/拆分/压缩/水印/旋转/裁切/加密/打印 |
| E1 PDF Tools | v1.5-extra | 16 | 页码、转图、抽文本、Word↔PDF、表单填写等 |
| E2 Image Tools | core | 10 | 压缩、格式转换、裁切、优化、EXIF、批量转码 |
| E2 Image Tools | v1.5-extra | 20 | 水印、社交尺寸、拼接、灰度、GIF 等 |
| E3 Page Inspector | core | 5 | 页内 SEO、OG、SERP 预览、响应头、meta 生成 |
| E3 Page Inspector | v1.5-extra | 7 | robots、JSON-LD、hreflang、UTM、CWV 粘贴、WCAG |
| later-E4 Color | later | 3 | 品牌色阶 / 手册（无页面取色时差异小） |
| later-E5 Dev snippets | later | 18 | Base64/JWT/JSON/Markdown；商店极卷，只做 popup 对等 |
| web-only | stay-web | 115 | 计算器 66 + Prompt + CIDR + Excel/表 + ZIP + 冷门 PDF 归档等 |

**206 = 28（E1）+ 30（E2）+ 12（E3）+ 3（E4）+ 18（E5）+ 115（网站）。**

## 4. 为什么计算器全部不上架

- 用户任务是「填两个数出结果」，不需要浏览上下文。
- Chrome 商店查询短、头词被大型扩展占满；本站计算器策略本就是 [长尾缺口 + how-to 页](../2026-08-08-omnicalculator-seo-traffic-strategy.md)，和 CWS 头词打法相反。
- 若把 66 个计算器塞进一个「Calculator Suite」，单用途说不清；若拆 66 个 listing，属于重复扩展 spam。

网站侧继续用现有工具页吃 Google / Bing。插件 listing **可以链到**计算器，但不要做成插件功能。

## 5. 列表示例（完整以 TSV 为准）

### E1 core（先做）

`batch-convert-web-pages-to-pdf` · `convert-html-to-pdf` · `merge-pdf` · `split-pdf` · `compress-pdf` · `organize-pdf` · `pdf-watermark` · `rotate-pdf` · `crop-pdf` · `protect-pdf` · `unlock-pdf` · `print-pdf`

### E1 刻意留网站（弱商店意图 / 易超用途）

`make-pdf-flipbook` · `check-pdf-a-compliance` · `convert-pdf-to-pdf-a` · `convert-pdf-to-dwg` · `add-digital-signature-to-pdf` · `create-pdf-form` · `edit-pdf-form-fields` · `write-pdf-document-online` · `turn-pdf-into-editable-document`

### E3 core

`on-page-seo-checker` · `open-graph-preview` · `meta-serp-preview` · `website-headers` · `meta-tag-generator`

### 典型 stay-web

全部 `how-to-calculate-*`、`square-feet`、`unit-converter`、全部 `*-prompt-*`、CIDR 簇、`indexnow`、`domain-lookup`、ZIP 簇、Excel 公式簇。

## 6. TSV 列说明

| 列 | 含义 |
|---|---|
| `slug` | 站点工具 slug |
| `category` | catalog 分类 |
| `primaryTopic` | 主题簇 |
| `processing` | `local` = 文件留设备；`remote` = 会出站 |
| `featured` | 是否首页 featured |
| `extension` | `E1-pdf-tools` / `E2-image-tools` / `E3-page-inspector` / `later-E4-color` / `later-E5-dev` / `web-only` |
| `role` | `core` / `v1.5-extra` / `later` / `stay-web` |
| `rationale` | 英文短理由（给后续脚本 / 评审用） |

Catalog 新增工具时：按第 2 节三问补一行，**不要**默认塞进已上架插件（以免再次变成万能工具栏）。
