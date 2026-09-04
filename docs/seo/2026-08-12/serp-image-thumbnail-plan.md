# 工具页 SERP 出图方案（2026-08-12）

> 权威：Google [Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)（含 *Specify a preferred image with metadata*）、[Discover](https://developers.google.com/search/docs/appearance/google-discover)、[SoftwareApplication](https://developers.google.com/search/docs/appearance/structured-data/software-app)、站内 `.cursor/rules/seo-google-policy.mdc` · `seo-html-defaults.mdc`。  
> 背景：GSC 有展示、CTR 近零；讨论过用「搜索结果出图」抬 CTR。本文件定 **稳妥 / 合规 / 可规模化** 的落地边界与工程步骤。  
> 状态：**方案已细化**（2026-08-12）；代码未实施。实施按 §5 Phase A → B → C。  
> 相关：[`../reviews/2026-08-08/01-analysis-review.md`](../reviews/2026-08-08/01-analysis-review.md)（有展示无点击）、[`../2026-08-09/link-strategy-execution.md`](../2026-08-09/link-strategy-execution.md)。

## 1. 目标与预期

| 目标 | 说明 |
|---|---|
| **主目标** | 提高工具页在 **网页搜索结果** 旁出现缩略图的 **资格与被选中概率**，作为 CTR 辅助杠杆 |
| **非目标** | 不承诺「强制出图」；不以 Discover 流量、FAQ/HowTo/Product 富结果为 KPI |

**预期管理**（验收口径）：

- Google 选型 **完全自动化**；元数据只能 *influence*，不能保证展示。
- 出图是放大器；**title / meta description 对齐检索词** 仍是 CTR 主杠杆。
- 平均排名很靠后时，有无缩略图对点击帮助仍接近 0。

## 2. 三条「出图」表面（取舍）

| 表面 | 用户看到什么 | 本方案态度 |
|---|---|---|
| 网页结果旁缩略图（text result image） | 蓝链旁小图 | **唯一值得规模化投入** |
| Discover 大图 | 信息流大图 | 顺带满足规格即可；工具/表单类常被滤，**不作 KPI** |
| 富结果带图（Product / Recipe / App 星级等） | 结构化视觉块 | **默认不做**；见 §8 |

## 3. 现状缺口（代码对照，2026-08-12）

| 项 | 现状 | 问题 |
|---|---|---|
| `og:image` | 约 120 个 `*Page.ts` 写死 `https://onlinefreetools.org/og-image.png`；[`layout.ts`](../../../src/pages/site/layout.ts) 只透传 | 官方建议避免 **通用图 / 站标** |
| `twitter:image` | 无（仅有 `twitter:card=summary_large_image`） | 社交回退不完整；实施时与 `og:image` 同 URL |
| JSON-LD | [`buildToolJsonLd`](../../../src/pages/site/toolContent.ts)：`WebApplication` 有 name / offers，**无 `image`**；无 `WebPage` | 未声明偏好图 |
| 页内可见工具 UI 图 | Related 等用 `/icons/tools/{slug}.svg`（~18px）；**无** SERP 用大图 `<img>` | 仅改 meta、页上无对应大图 → 与「Schema 须与可见内容一致」冲突 |
| `max-image-preview:large` | 工具页 layout **未**输出 | 大预览资格弱 |
| 资产目录 | 无 `public/og/`；无 Playwright 截图脚本 | 基建未开工 |
| 工具数量 | 合并 catalog ≈ 100 slug（跨语共用图 → 约 +100 静态文件，相对 Pages 20k 限额可忽略） | — |

## 4. 唯一合规可规模化路径

**一句话**：每工具一张真实 UI 截图 + 正文可见 `<img>` + `og:image` / `twitter:image` / `WebApplication.image` / `WebPage.primaryImageOfPage` **同一绝对 URL** + `max-image-preview:large`。

### 4.0 锁定决策（不再留可选分歧）

| 决策 | 锁定 |
|---|---|
| 偏好图信号 | **三信号全开**：`og:image` + `WebApplication.image` + `WebPage.primaryImageOfPage`（`@graph` 内 `WebPage.mainEntity` ↔ `WebApplication`） |
| 资产存放 | `public/og/tools/{slug}.webp` **提交 Git**（截图源）。**不进** Worker Assets（`.assetsignore`）；`npm run upload:r2:og` 同步到 R2 桶 `assets` |
| 与 Worker+R2 | HTML 仍走 `onlinefreetools-pages`；OG 图走公开桶 `assets` + 自定义域 `assets.onlinefreetools.org`。GitHub→CF 部署不携带这些位图 |
| URL 解析 | 中心函数 `resolveToolOgImageUrl(slug)`：有文件 → `https://assets.onlinefreetools.org/og/tools/{slug}.webp`；否则回退默认 `og-image.png` |
| 可见 `<img>` | **仅当**存在 per-slug webp 时插入；回退默认站图时 **不**把站标/小 logo 当「工具 UI 可见主图」 |
| 注入点 | `og`/`twitter`/`robots` → `layout.ts`；JSON-LD + 可见图 → `toolContent.ts`；各页只改传 `resolveToolOgImageUrl(slug)` |
| 截图 | Playwright；**仅 en** URL；浅色主题；视口 **1280×720**；进页等 `loadSample()` 结果稳定后截 `main` 内工具区 |
| 跨语 | 十语共用一张；禁止默认按 locale 拆营销图 |
| Image sitemap | **v1 不做**（延后） |
| 排期 | 次于 Top 查询 title/desc；可与基建并行，效果验收与 snippet 批次拆开记 |

### 4.1 官方偏好图信号（同图、同 URL）

按 [Image SEO — Specify a preferred image](https://developers.google.com/search/docs/appearance/google-images)：

1. `og:image` meta（本站另加同 URL 的 `twitter:image`）  
2. `WebPage.primaryImageOfPage`（URL 或 `ImageObject`）  
3. 主实体上的 `image`（本站：`WebApplication.image`）

三处必须指向 **同一绝对 URL**。

### 4.2 图像规格（硬性）

| 规则 | 要求 |
|---|---|
| 代表性 | 该工具默认 UI（输入区 + 结果区），非站点 logo、非工具列表小标 |
| 尺寸 | 宽 **≥ 1200px**；默认产出 **1280×720**（≥ 约 300K 像素，兼顾 Discover 建议） |
| 比例 | 避免极端窄/宽；优先约 **16:9** 或接近 1.91:1 |
| 内容 | **少字**；避免大字标题堆砌的「营销 OG 卡」作为 Search 偏好图 |
| 格式 | WebP（首选）或 PNG；路径 `og/tools/{slug}.webp`（R2 key 与自定义域路径一致） |
| 可见性 | 同一 URL 出现在正文 `<img src>`（交互区下方、How/Example 前）；`alt` 描述界面，禁堆砌关键词；可用 `loading="lazy"`，须真实 `src`，禁纯 CSS 背景 |
| 稳定 URL | `https://assets.onlinefreetools.org/og/tools/{slug}.webp`（跨语言共用） |
| 回退 | 无 per-slug 资产 → meta 回退 `og-image.png`；**不**插可见「假 UI 图」 |

### 4.3 不可用：工具列表 / 首页 logo

路径形如 `https://onlinefreetools.org/icons/tools/{slug}.svg`（首页卡片、侧栏、Related 的小图标）**不得**用作 SERP / `og:image` / `primaryImageOfPage` 偏好图。

| 原因 | 说明 |
|---|---|
| 官方忌讳 | 属 logo / generic identity 图，非「页面代表内容」 |
| 规格 | 导航用小 SVG（页内常 ~18px），远低于 ≥1200px / 高分辨率要求 |
| 格式 | OG/抓取链路更稳的是 WebP/PNG 位图 |
| 效果 | 换成 per-slug 小标仍像站标，难提高缩略图被选中概率 |

**仍可用于**：首页、侧栏、Related 等 UI chrome。截图角落可带小品牌点缀，但 **主画面必须是工具 UI**。

### 4.4 Robots

可索引工具页统一（与 `noindex` 互斥；devlogs 等保持 `noindex`）：

```html
<meta name="robots" content="max-image-preview:large" />
```

## 5. 工程落地（分阶段）

### 5.1 目标数据流

```text
public/og/tools/{slug}.webp  (Git 源；.assetsignore 排除)
        │
        ├─ npm run upload:r2:og → R2 桶 assets
        │         └─ https://assets.onlinefreetools.org/og/tools/{slug}.webp
        ▼
resolveToolOgImageUrl(slug)
        ├─► layout.ts     → og:image + twitter:image + max-image-preview:large
        ├─► buildToolJsonLd → WebApplication.image + WebPage.primaryImageOfPage
        └─► layout / organize-pdf → 可见 <img>（仅 per-slug 存在时）
```

### 5.2 Phase A — 基建（无新图也可合入）

| 步 | 改动 | 落点 |
|---|---|---|
| A1 | `resolveToolOgImageUrl(slug)` | 新建 helper（建议 `src/pages/site/ogImage.ts` 或并入 `tools.ts` 旁）；探测 `public/og/tools/{slug}.webp` |
| A2 | 替换写死 OG URL | 各 `src/pages/*Page.ts`：`ogImageUrl: resolveToolOgImageUrl('<slug>')` |
| A3 | `twitter:image` + robots | [`layout.ts`](../../../src/pages/site/layout.ts)：同 URL；可索引工具页加 `max-image-preview:large`（显式开关，勿污染 noindex） |
| A4 | JSON-LD | [`buildToolJsonLd`](../../../src/pages/site/toolContent.ts)：传入 image URL；`WebApplication.image`；`@graph` 增加 `WebPage` + `primaryImageOfPage` + `mainEntity` |
| A5 | 可见图 | `toolContent` 单点 `renderToolPreferredImage`：仅当 URL 为 `/og/tools/` 时输出 `<img>` + i18n `alt` |

### 5.3 Phase B — 试点截图

以 GSC [`2026-08-08` 网页.csv](../2026-08-08/https___onlinefreetools.org_-Performance-on-Search-2026-08-08/网页.csv) **去重 slug**（跨语展示合并）：

1. `square-feet`
2. `ip-address`
3. `how-to-calculate-roi`
4. `how-to-calculate-marginal-revenue`
5. `how-to-calculate-bmi`
6. `how-to-calculate-gradient`
7. `website-headers`

| 步 | 改动 |
|---|---|
| B1 | Playwright 脚本：本地/预览打开 `/tools/{slug}`（en）、浅色、等样例结果、截 1280×720 → `public/og/tools/{slug}.webp` |
| B2 | 入库 Git；部署后 URL 200；抽检 HTML 三处同 URL |
| B3 | 人工 SERP 抽检是否出缩略图（辅证）；记基线日期与 CTR |

**截图约定**：多数工具进页已 `loadSample()`；脚本等待结果区可见即可，无需再点 Sample。选择器优先 `main` 内工具卡；失败则整页 `main` 裁切。少字、无大字营销条。

### 5.4 Phase C — 全量与门禁

| 步 | 改动 |
|---|---|
| C1 | catalog 全 slug 批跑截图并入库 |
| C2 | `lint:seo`（或旁路脚本）：有 webp 的 slug → 抽检渲染 HTML 中 og / JSON-LD / `<img>` URL 一致 |
| C3 | 新工具 checklist：有 `{slug}.webp` 或明确回退；上线后补图 |

### 5.5 规模化原则

- 图 **跨 10 语共用**（成本 ×1）。  
- 禁止手搓「每语不同营销图」作为默认流程。  
- 新工具无截图可先上线（回退默认 OG）。

### 5.6 资产生产偏好

| 方案 | 态度 |
|---|---|
| 程序化 UI 截图（推荐） | 真实界面、可批处理、无误导 |
| 极少字的统一 chrome + 工具区合成 | 可接受 |
| 全站共用 `og-image.png` | 过渡回退 only（且不插为可见「UI 图」） |
| `/icons/tools/{slug}.svg` 当偏好图 | **禁止**（见 §4.3） |
| 大字标题 OG 卡作唯一偏好图 | 不推荐作 Search 主图（社交分享可另议） |

## 6. 与站内 Schema 规则对齐

- 允许类型不变：`BreadcrumbList`、`WebApplication`（及支柱页 Collection/ItemList）。  
- **禁止**：虚假 `aggregateRating` / 伪造 `review`。  
- JSON-LD 的 `image` URL **必须**对应页上可见大图（有 per-slug 资产时）。  
- **不以** 富结果报告 / FAQ 展示为验收 KPI。

无真实评价系统前：**不**为出星级富结果补评分；本方案只补 **image**。

## 7. 验收与度量

| 检查 | 方法 |
|---|---|
| 技术就绪（有图 slug） | `og:image` / `twitter:image` → `/og/tools/{slug}.webp`；正文同 URL `<img>`；JSON-LD 同 URL；含 `max-image-preview:large` |
| 技术就绪（无图 slug） | meta 回退默认 OG；**无**把站标当可见偏好主图；JSON-LD：无 per-slug 图时可不声明 `image` / `primaryImageOfPage`（避免声明与可见内容不一致） |
| 抓取 | 图 URL 200、非 robots 拦截 |
| 效果（≥28 天） | GSC 高展示页 CTR；人工 SERP 出图率作 **辅证** |
| 归因 | 改图前记日期与 Top CTR；与 title/desc 批次分开跟踪 |

## 8. 明确不做

- 虚构 `aggregateRating` / 假评论换 Software App 富结果  
- 用 Product / Recipe / HowTo / FAQ 等 **实体不符** 类型蹭带图富结果  
- 仅改 `og:image`、页上无对应可见大图  
- 用 `/icons/tools/*.svg` 或站点 logo 当偏好图  
- 为 AI Overview / Discover 做 spam 式改写或无关 schema  
- Discover / 富结果数量作 KPI  
- 十语各出一套不同偏好图（除非 UI 实质不同且有维护预算）  
- v1 Image sitemap；OG 图进 R2  

## 9. Todo（实施时勾选）

### 方案（本文）

- [x] 锁定决策、注入点、阶段、试点 slug、禁用 logo（2026-08-12 细化）

### Phase A

- [ ] `resolveToolOgImageUrl` + 各页替换写死 OG  
- [ ] `layout`：`twitter:image` + 可索引 `max-image-preview:large`  
- [ ] `buildToolJsonLd`：`image` + `WebPage` / `primaryImageOfPage`  
- [ ] `toolContent`：有 webp 时插入可见 `<img>` + i18n `alt`  

### Phase B

- [ ] Playwright 截图脚本（视口、浅色、等样例）  
- [ ] 生成并入库 7 个试点 `public/og/tools/{slug}.webp`  
- [ ] 部署后抽检 + 记基线  

### Phase C

- [ ] catalog 全量截图入库  
- [ ] lint 门禁（三处 URL 一致）  
- [ ] 新工具 checklist 补「OG 截图」  

### 明确延后

- [ ] （延后）sitemap `image:image` / Image sitemap  

## 10. 决策门

| 问题 | 答案 |
|---|---|
| 是否先于 title/desc 优化做？ | **否**。snippet 优先；本方案可并行基建，排期次之 |
| 无截图能否上线新工具？ | **可以**，回退默认 OG；上线后补图 |
| 首页工具 logo 能否当偏好图？ | **不能**（§4.3） |
| 能否靠本方案「保证」CTR？ | **不能**。只提高出图概率；CTR 仍看意图匹配与排名 |
| OG 图是否进 R2？ | **否**（v1）；保持 `public/` + Git |
