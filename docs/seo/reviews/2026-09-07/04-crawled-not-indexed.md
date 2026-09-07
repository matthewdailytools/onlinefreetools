# 「已抓取 - 尚未编入索引」全量分类（2026-09-07）

**来源**：[`表格.csv`](./表格.csv) · [`元数据.csv`](./元数据.csv)  
**问题名称**：已抓取 - 尚未编入索引  
**条数**：92  
**对照**：[`../2026-08-12/04-crawled-not-indexed-sample.md`](../2026-08-12/04-crawled-not-indexed-sample.md)

Google 官方含义：页面**已被抓取**，但**尚未选入索引**；可能以后收录，也可能长期不收。**不必**为这类 URL 批量「请求编入索引」或点「验证修复」。验证失败只说明再次抓取后仍未选中，不能当技术故障修。

线上抽查（2026-09-07，`Accept: text/html` + Googlebot UA）：工具页与 topic/hub 为 **200**、自指 canonical、工具页 robots 仅为 `max-image-preview:large`（可收录）。HEAD 不带 `Accept: text/html` 会 **404**——这是 Worker 对非 HTML 探测的门禁，不是 Googlebot GET 的常态。

---

## 1. 结构总览

| 类型 | 条数 | 占比 | 定性 |
|---|---|---|---|
| 工具页 `/{lang}/tools/{slug}` | 70 | 76% | 多语变体；以 PDF / prompt / 图片为主 |
| 工具页 `/tools/{slug}`（英文规范） | 7 | 8% | 规范英文 URL 也被拒收 → 不是「只差 canonical」 |
| `/en/tools/...` 与 `/en/tool-type/...` | 20 | 22%（与上行有交集） | 默认语显式前缀；现网 **301** 到无前缀 |
| `devlogs` | 10 | 11% | 工程日志；需求弱于工具页 |
| topics / tool-type / scenario | 4 | 4% | hub/leaf，优先级低于工具 |
| `/api/tools/ip-address` | 1 | 1% | JSON 200；不应进索引 |

### 「状态」× 上次抓取

| 状态 | 条数 | 上次抓取 |
|---|---|---|
| 失败 | 64 | **全部** 2026-09-04、09-05、09-06 |
| 待定 | 28 | 最晚 2026-09-03；含 05-23 / 07-03～05 的历史 URL |

08-12 导出没有「状态」列。无论它是 GSC 新列还是「验证修复」结果：**失败 = 近三日再抓仍不收**；**待定 = 更早抓取、尚未给出同样明确的否**。

按语种（工具 + `/en/` + 无前缀英文）：`en` 显式前缀 20 · `ru` 15 · 无前缀英文工具 7 · `fr`/`de` 各 7 · `ar` 5 · `zh`/`pt`/`ja`/`id` 4 · `es` 3。

---

## 2. 可能原因（按证据强度）

### 2.1 索引配额 / 发现快于吸收（主因）

当前 catalog **210** 个工具 × **10** 语 ≈ **2100** 条工具 URL，另加 topics、tool-type、where-to-use-tools、devlogs。08-07 Coverage 已编入索引仅 **267**。之后几周仍在上新 PDF 场景页、prompt builder、计算器。

「已抓取未索引」是新站 / 爆发式多语上新的典型形态：Google 肯花预算去抓，但只把一部分放进索引。本批 64 条在 09-04～06 再抓仍失败，说明其中多数已过「再等几天就会进索引」的窗口，进入 **选择性不收录**。

### 2.2 近模板簇：PDF、prompt、how-to-calculate

站内真实作业不同，但模板、模块顺序、FAQ/How 骨架高度同构。Google 会按**整站相似度**决定收录密度，不必等到 Manual Action。

| 簇 | 本批工具 URL | 站内规模 | 解读 |
|---|---|---|---|
| PDF | **34** | catalog 约 38 个 PDF 相关 slug × 10 语 | 最重。俄语 PDF 套件（split/merge/compress/rotate/protect/unlock/crop/organize/watermark…）在 08-10～09-01 被整串抓取，至今待定；09-05 又抓了 page-numbers / flipbook / fill-form / turn-into-word 等并标失败 |
| 图片 / 尺寸 / 水印 | 13 | 08-12 曾占工具页主体 | 本批为 thumbnail / watermark / flip / bulk-convert 等续集 |
| prompt builder | **11（全失败）** | 9 个 prompt slug × 10 语 | 近期上线、骨架相近的生成器；09-04～05 抓完即失败 |
| how-to-calculate | 8 | **60** 个计算器 slug × 10 语 | 多条走 `/en/tools/how-to-calculate-*`（双英文 URL）；公式页同构风险最高 |

官方对齐：Helpful Content + scaled content abuse 是**方法无关**的。不是「被惩罚了」，而是 **同构 URL 越多，单 URL 被选中的概率越低**。禁止为凑收录再拆近义 URL。

### 2.3 `/en/` 与无前缀英文并存

英文规范路径无语言前缀（`/tools/{slug}`）。语言切换器会生成 `/en/...`，Worker 于 **2026-09-03** 起对默认语显式前缀 **一律 301** 到无前缀。

本批 **20** 条 `/en/...`：

- 09-01～09-01 待定：计算器 + `/en/tool-type/number` → 301 上线前 Google 很可能抓到 **200 英文副本**。
- 09-04～06 失败：watermark / prompt / thumbnail 等 → 若当时 301 已上线，应按「网页会自动重定向」归类；仍出现在本问题，属于 **报告滞后**，或 301 目标本身也未收录，信号停在源 URL。

sitemap 不含 `/en/`（已核对）。内链仍会发现 `/en/`，依赖 301。在 GSC 把它们移出本问题之前，它们会继续占「已抓取未索引」名额。

规范英文 `/tools/{slug}` 也有 7 条失败（merge-pdf、base64、validate-security-txt、file-metadata-analyzer、bulk-compress-png-images、product-design-prompt-builder、find-and-validate-xml-sitemap）。**修 canonical 解决不了这 7 条**——Google 连规范 URL 都暂不收。

### 2.4 语种选择收录（俄语 PDF 最明显）

`ru` 15 条里 10 条待定、几乎全是 PDF。08-12 已见过同一工具「只收部分语种」（当时是 `ru/image-merge` 有展示、其它语种未收）。本批是同一机制换簇：先收需求/内链更强的语种，俄语 PDF 套件排队。

**不要砍语种。** 从已收录同簇 Related 链过去即可。

### 2.5 不应争夺索引的 URL（噪声）

#### API ×1

`/api/tools/ip-address`：上次抓取 **2026-07-05**，待定。现网 **200** `application/json`，无 `X-Robots-Tag`。`robots.txt` 已 `Disallow: /api/`，但 Disallow **不能**让已抓 URL 从「已抓取未索引」消失（还可能让 Google 再也看不到 noindex）。与 08-12 相同条目，一直没清。

#### devlogs ×10

08-26 起 `robots.txt` **允许** `/devlogs/`；People 篇默认可索引。本批日志抽查无 `noindex`（与近期大量 `Visibility: project` 篇不同）。

仍不收的原因更像：

1. 标题是工程 Summary，不是检索意图。
2. 站点主题是在线工具，日志对 Google 是边角内容。
3. 重复 URL：`/devlogs/2026-01-28-how-to-calculate-gradient` **404**，`.html` 版 **200**；两条都在列表里（上次抓取均 05-23）。
4. 中文文件名：`/devlogs/2026-01-08-配置多账户git.html` 对未编码 URL **307** 到百分号编码；09-05 标失败。
5. 旧抓取（07-03～04）发生在 Disallow 时期前后，报告会留很久。

#### Hub ×4

`/en/tool-type/number`（待定，应 301 到 `/tool-type/number`）、`/topics/pdf-docs` 与 `/ja/topics/ai-prompt-template-builder`（失败）、`/zh/where-to-use-tools/seo`（失败；无尾斜杠 **308** 到有尾斜杠，canonical 无尾斜杠）。Hub 相对工具页信息增益低，被后排正常。

---

## 3. 工具页 slug（Top）

| slug | 本批语种数 |
|---|---|
| split-pdf | 3（fr 待定 · ru 待定 · de 失败） |
| youtube-thumbnail-size | 3 |
| batch-watermark-product-photos | 3 |
| organize/merge/crop/flipbook/form-fields/fill-form 等 PDF | 各 2 |
| 多个 prompt builder | 各 2 |
| 其余 | 1 |

独立 slug **59**。不是单一坏页，是 **多簇同时消化不良**。

---

## 4. 与 08-12 重叠

仅 5 条，全是噪声：

- `/api/tools/ip-address`
- `/devlogs/2026-01-11-13-56-dynamic-markdown-to-html-route.html`
- `/devlogs/2026-01-15-15-30-apply-omnicalc-ui-styles.html`
- `/devlogs/2026-01-28-how-to-calculate-gradient`（无 `.html`，现 404）
- `/devlogs/2026-01-28-how-to-calculate-gradient.html`

图片工具 84 条几乎全部滚出本示例。**不能**据此写「图片簇已收录」；只能写「GSC 示例窗口已切到更新的 PDF/prompt/计算器」。下轮必须带 Coverage **总数**才能判断未索引是升是降。

---

## 5. 处置优先级

| 优先级 | 动作 | 期望 |
|---|---|---|
| P0 | **不要**对这 92 条点验证修复 / 全量 IndexNow / 批量改 thin | 避免把「选择不收」做成失败验证，浪费抓取 |
| P0 | 确认 `/en/` 301 已稳定上线；抽查 GSC 是否逐步改到「网页会自动重定向」 | 双英文 URL 退出本问题 |
| P0 | API：允许 Googlebot 抓 `/api/` **或** 对 API 回 `X-Robots-Tag: noindex`（Disallow 与 noindex 不能同时指望）；更干净的是 API 非 HTML 保持 Disallow + 无站内链 | 历史 JSON URL 从发现管道掉出 |
| P1 | `.../gradient` 无扩展名 → 301 到 `.html`；中文 devlog 只保留百分号编码规范 | 去掉 404/307 双版本 |
| P1 | 工具 77 条：观察；内链从已收录语种指向未收录语种；**禁止**砍语种、禁止再拆 PDF/prompt/计算器近义页 | 收录跟着需求走 |
| P2 | 新工具周产能继续收紧；同簇先加深 IG，再铺十语 IndexNow | 降低 scaled-content 形态 |

信息页尾斜杠（08-12 的 5 对）未出现在本批，可能已离开该问题或未抽进本示例。

---

## 6. 判定（对齐 08-12 策略门）

- 主体仍是 **真实工具 × 多 locale 消化期**，不是垃圾参数目录。
- 相对 08-12，消化压力从图片簇换到 **PDF + prompt + 计算器**，并多了 **`/en/` 规范切换的滞后**。
- **devlogs / api / 无扩展名 404** 仍须修规范，不等自然收录。
- **不**因 92 条砍语种或批量 noindex 工具页。
- 失败 64 条说明：对近期新簇，Google 已经看过一遍并暂时说不。下一杠杆是 **内链 + 单页 IG**，不是再提交 sitemap。
