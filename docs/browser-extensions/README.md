# 浏览器插件方案（本站工具 → Chrome / Edge / Firefox）

**日期**：2026-09-06  
**状态**：策略定稿（尚未写扩展源码）  
**Catalog 快照**：206 个已上线工具（`src/site/tool-catalog.json`）  
**目标站点**：https://onlinefreetools.org

本夹回答：本站工具适不适合做成插件、分成几个插件、哪些能力是「网页做不到的增强」、以及商店搜索 / 社交 / SEO 三条流量怎么做。

## 一句话结论

**不要**做一个装下 206 个工具的万能插件，也**不要**为每个 slug 各发一个插件。  
Chrome Web Store [单用途政策](https://developer.chrome.com/docs/webstore/program-policies/quality-guidelines) 要求每个扩展「目的单一、好懂」；万能工具栏会被拒审。  
本站应发 **3 个上架 listing**（同一用途簇），计算器 / Prompt / CIDR / Excel 等 **留在网站吃 Google SEO**。

| 插件 | 单用途一句话 | 上架优先级 |
|---|---|---|
| **E1 PDF Tools** | 在浏览器里把网页和 PDF 做成可带走的 PDF | **P0 先做** |
| **E2 Image Tools** | 在本机压缩、转换、裁切图片 | P1 |
| **E3 Page Inspector** | 检查当前标签页的 SEO / 响应头 / 分享卡 | P2 |

网站继续是「打开就能用、可被 Google 索引」的主产品；插件是 **当前标签页上下文** 的增强层，用来回流安装与品牌，而不是把整站搬进 popup。

## 阅读顺序

| 文件 | 内容 |
|---|---|
| [00-request.md](./00-request.md) | 用户原话 |
| [01-tool-fit-analysis.md](./01-tool-fit-analysis.md) | 206 工具适配备注与分类统计 |
| [tool-extension-map.tsv](./tool-extension-map.tsv) | 每个 slug → 插件 / 角色 / 理由（机器可读） |
| [02-extension-portfolio.md](./02-extension-portfolio.md) | 分几个插件、各自功能、权限、竞品 |
| [03-enhancement-features.md](./03-enhancement-features.md) | 网页对等 vs 插件增强（核心产品差异） |
| [04-store-and-search-traffic.md](./04-store-and-search-traffic.md) | Chrome / Edge / Firefox **商店内搜索** + Google「xxx chrome extension」 |
| [05-social-traffic.md](./05-social-traffic.md) | TikTok / YouTube / Reddit / X 内容与合规 |
| [06-seo-traffic.md](./06-seo-traffic.md) | 站内落地页、内链、Schema；禁止 doorway 铺量 |
| [07-architecture-and-roadmap.md](./07-architecture-and-roadmap.md) | MV3 架构、与站点共享核心、分期排期 |

## 明确不做

- 一个「Online Free Tools 全家桶」扩展（违反单用途；审核举例就是「提供一堆服务入口的工具栏」）。
- 每个计算器 / 每个 PDF 动词各发一个 listing（商店 spam / 重复内容）。
- 劫持新标签页或默认搜索（政策禁止）。
- 为插件再造 206 个近义落地 URL（Google **scaled content**）。
- 买量刷安装、刷评价（商店与 Google 都会罚）。

## 权威

- Chrome： [Quality guidelines（single purpose）](https://developer.chrome.com/docs/webstore/program-policies/quality-guidelines)、[Listing best practices](https://developer.chrome.com/docs/webstore/best-listing)
- 本站 SEO：`.cursor/rules/seo-google-policy.mdc`（高于本夹）
- 工具方向：`docs/2026-07-28-tool-direction.md`（插件属于方向 A 的「浏览器能力」，不是新的 doorway 品类）
