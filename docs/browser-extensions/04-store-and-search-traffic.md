# 04 — 商店搜索流量 + Google「扩展」查询

「浏览器流量 / 搜索流量」在本方案里分成 **四条互不替代的漏斗**。  
**禁止**用扩展劫持默认搜索或新标签页来「做流量」——这是 Chrome 质量指南明确的违规形态。

```
A. Chrome Web Store / Edge / AMO 站内搜索   ← 装机主战场
B. Google/Bing 搜 “save page as pdf chrome extension”  ← 站内落地页 + 视频
C. 本站工具页上的安装徽章                 ← 已有 SEO 流量的转化
D. 社交（见 05）→ 仍落入 A/B/C，用 UTM 计量
```

## 1. 商店内搜索怎么工作（可执行部分）

Google **没有**公开等同 Search Central 的 CWS 算法文档。官方能确定的是：

- 检索会匹配 **名称、简短摘要、详细描述**（[Listing best practices](https://developer.chrome.com/docs/webstore/best-listing)）。
- 排序启发式包含 **评分、用量、安装 vs 卸载**。
- 摘要 ≤132 字符，出现在搜索结果卡上，**前 80 字必须是用户任务句**。

第三方观察（非官方，当工作假说）：相关性决定你进哪一档结果；周活、评价、近期安装速度决定档内名次。对本站含义：

1. **标题必须像用户会搜的短句**，不能叫 “Online Free Tools Suite”。
2. 名称 / 摘要 / 描述 **三处都出现主任务词**（与站点 SEO 一样：主词进标题，不是堆砌 40 个同义词）。
3. 首周要有真实使用，避免装完不用 → 卸载率伤排序。
4. 评价靠产品，不靠买评（商店会下架）。

### E1 商店检索词（en，主词进标题）

| 优先级 | 用户大致会搜 | 落点 |
|---|---|---|
| 主 | save page as pdf, webpage to pdf, save as pdf chrome | **名称 + 摘要首句** |
| 次 | merge pdf, compress pdf, print page to pdf | 描述前半 / 功能列表 |
| 不要堆 | 35 个 PDF 动词、十语关键词列表 | 违反质量 + 像 spam |

### E2

主：compress image, convert to webp, resize image chrome  
次：remove exif, jpg to png, compress photos

### E3

主：seo checker, open graph preview, meta tag checker  
次：http headers, canonical checker  
避开：generic “developer tools”（红海且用途不清）

### 类目

CWS 类目选一个最贴用途的（E1 Productivity 或 Workflow & Planning；E2 Photos；E3 Developer Tools / Productivity）。类目错误会进错榜。

## 2. 商店转化（有搜索不等于会装）

Listing 页要在 **不打开网站** 的情况下回答：

1. 它做什么（当前页 → PDF）
2. 权限为什么要
3. 文件上不上服务器
4. 和 iLovePDF / Smallpdf 的差别（本机、无账号、登录页也能存）

截图顺序 = 增强功能在前（见 `03`）。  
演示视频（可选，商店支持）：15–30 秒无声也能看懂。

语言：先把 **en listing 写到能过审**；再加 zh。不要十语机翻商店文案（和站点 i18n 规则同一精神：无增量翻译有害）。

## 3. Google / Bing 上的「扩展」查询（与站点 SEO 分工）

这和「工具页 SEO」是 **不同意图**：

| 意图 | 用户要什么 | 应打开的 URL |
|---|---|---|
| 立刻在浏览器里办事 | 合并 PDF、算 BMI | `/tools/{slug}`（现有） |
| 装一个陪伴浏览的扩展 | chrome extension, add-on, 插件 | `/extensions` 与最多 **3** 个 listing 落地页 |

落地页规划（实现阶段再建页，本夹只定 IA）：

| 路径（建议） | 对应插件 | H1 方向（en） |
|---|---|---|
| `/extensions` | 枢纽 | Browser extensions for PDF, images, and on-page SEO |
| `/extensions/save-page-as-pdf` | E1 | Save this page as PDF in Chrome |
| `/extensions/image-compressor` | E2 | Compress and convert images in Chrome |
| `/extensions/page-seo-inspector` | E3 | Check this tab’s SEO and headers |

硬约束（Google spam / 本站 rules）：

- **禁止**为 206 个 slug 各做 `/extensions/how-to-calculate-*`。
- 落地页必须有 **可安装的真实扩展**（或「即将上架」且不索引空壳——空壳期间 `noindex`）。
- 文案写清「插件增强什么、网站工具仍能干什么」，不要把工具页段落复制粘贴换 H1（doorway）。
- Schema 用 `SoftwareApplication`，字段与可见的安装按钮、平台、价格（Free）一致；禁止假评分。
- 工具页可加 **一条**「也有 Chrome 扩展」+ 安装深链，吸收已有展示；不要在 66 个计算器页群发无关插件广告。

相关 Google 检索句（en）要写进落地页 H1/首段，而不是工具页 H1：

- save page as pdf chrome extension
- webpage to pdf chrome
- image compressor chrome extension
- on page seo checker chrome

中文落地可后做 `/zh/extensions/...`，按 `tool-i18n-localization` 用当地说法（「网页存成 PDF 插件」），不要英模直译。

## 4. 用现有 SEO 流量给商店「安装速度」

CWS 排序吃安装与留存。本站已经有工具页索引，最稳的冷启动是：

1. E1 上架后，只在 **PDF / 网页转 PDF** 相关工具页放安装模块（`batch-convert-web-pages-to-pdf`、`convert-html-to-pdf`、`merge-pdf`、`compress-pdf`…）。
2. 按钮链到 CWS，UTM：`utm_source=oft_site&utm_medium=tool_page&utm_campaign=e1_pdf`。
3. 模块文案讲增强：「当前已登录的页面也可保存」，不要只写 Free Chrome Extension。

这样 Google 来的用户转化成 CWS 安装，再反哺商店排名。这是 **搜索流量 → 商店流量** 的桥梁，比先砸社交更稳。

## 5. Edge / Firefox

- Edge 用户常搜「PDF 插件 / 网页保存 PDF」。Listing 用中英各一版，链回同一隐私政策。
- Firefox 关键词类似，但 API 差一分期。
- 不要指望「一次提交，三个商店自动同步排名」。

## 6. 计量

| 指标 | 来源 | 用途 |
|---|---|---|
| CWS 展示 / 安装 / 卸载 | 开发者后台 | 商店 SEO 是否进档 |
| 落地页 GSC 查询 | Search Console | 「chrome extension」类词 |
| 工具页徽章点击 | 自建轻量事件或 Cloudflare Zaraz（无 PII） | 站点→商店转化 |
| 扩展内「打开网站 FAQ」 | 扩展可选 ping（需隐私政策披露） | 回流 SEO |

**不要**在扩展里注入全站分析脚本读每个访问 URL。
