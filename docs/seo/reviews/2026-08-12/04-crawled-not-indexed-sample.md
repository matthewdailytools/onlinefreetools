# 「已抓取 - 尚未编入索引」全量分类（2026-08-12）

**来源**：[`https___onlinefreetools.org_-Coverage-Drilldown-2026-08-12已抓取未索引/`](./https___onlinefreetools.org_-Coverage-Drilldown-2026-08-12已抓取未索引/)  
**元数据**：问题名称 = 已抓取 - 尚未编入索引；站点地图 = 所有已知网页  
**条数**：表格 **110**（与 Coverage 严重问题计数一致）  
**图表**：08-05 → 6；08-06～08-07 → 110  

> GSC Drilldown 导出即本批「示例/列表」；本文件做分类与处置建议，不重复粘贴全部 110 行（见 CSV）。

---

## 1. 结构总览

| 类型 | 条数 | 占比 | 定性 |
|---|---|---|---|
| 工具页 `/[lang]/tools/{slug}` | **84** | 76% | 多语上新后的消化期为主；非垃圾目录 |
| 信息页 about/privacy/terms/contact | **21** | 19% | 低优先级收录；含尾斜杠重复 |
| `devlogs` | **4** | 4% | **应禁止收录**；robots 已 Disallow，仍被历史抓取 |
| `/api/...` | **1** | 1% | **不应进索引**；须 Disallow / 不进 sitemap |

**上次抓取日期**：08-08（85）· 08-09（19）· 更早少数（devlogs/api/about）。

---

## 2. 工具页（84）— 按语种 / slug

### 语种

| locale | 条数 |
|---|---|
| fr | 12 |
| en | 11 |
| pt | 11 |
| id | 10 |
| de | 9 |
| ar | 9 |
| es | 8 |
| ru | 5 |
| zh | 5 |
| ja | 4 |

### slug（Top，多语合计）

| slug | 未收录语种数 | 备注 |
|---|---|---|
| image-merge | 7 | 效果报告里 **`/ru/tools/image-merge` 有展示且不在本列表** → 同工具选择性收录 |
| image-border | 7 | 图片簇 |
| add-watermark | 6 | 图片簇 |
| flip-image | 5 | 图片簇 |
| images-to-word / color-from-image / wcag / brand-color-token-pack / image-format-converter / image-grayscale | 各 4 | 图片 / 品牌色簇 |
| 其余 | ≤3 | yaml-json、indexnow、text-diff、uuid… |

**图片相关 slug 合计约 54/84**；品牌/配色相关约 16。

### 解读（工具）

1. **不是**「空壳 doorway 目录」形态，而是 **真实工具 × 多 locale** 被抓后暂缓收录。  
2. 与效果数据交叉：已收录并有展示的同簇页（如 `ru/image-merge`）应优先做 **CTR/meta**；未收录语种 **先观察 2–4 周**，用内链从已收录页 Related 引爬，**禁止**为 110 条批量改 thin 或砍语种。  
3. 若 4 周后同一 slug 多语仍整批未收，再对该 slug 做 **locale brief 第二轮 IG**（先 en/有展示语，再扩散）。

---

## 3. 信息页（21）

含：`/privacy`、`/terms`、`/contact`、`/de/about/` 及多语变体。

### 尾斜杠双版本（本列表内成对出现）

| 无尾斜杠 | 有尾斜杠 |
|---|---|
| `/fr/privacy` | `/fr/privacy/` |
| `/ja/terms` | `/ja/terms/` |
| `/pt/contact` | `/pt/contact/` |
| `/pt/privacy` | `/pt/privacy/` |
| `/zh/privacy` | `/zh/privacy/` |

**处置**：统一规范 URL（无尾斜杠或与站内 canonical 一致）+ **301**；信息页本就非流量入口，不进「强推 IndexNow」名单（sitemap 生产默认已剔除 info，见 `scripts/site/sitemap.mjs`）。

---

## 4. 必须处理（非「排队消化」）

### 4.1 devlogs ×4

| URL | 上次抓取 |
|---|---|
| `/devlogs/2026-01-11-13-56-dynamic-markdown-to-html-route.html` | 2026-07-04 |
| `/devlogs/2026-01-15-15-30-apply-omnicalc-ui-styles.html` | 2026-07-03 |
| `/devlogs/2026-01-28-how-to-calculate-gradient` | 2026-05-23 |
| `/devlogs/2026-01-28-how-to-calculate-gradient.html` | 2026-05-23 |

`public/robots.txt` 已有 `Disallow: /devlogs/`。仍出现在「已抓取未编入」说明 **历史已抓、当前未收**（相对安全），但须确认线上 HTML **`noindex`** 已部署，避免日后翻转为收录。

### 4.2 API ×1

| URL | 上次抓取 |
|---|---|
| `/api/tools/ip-address` | 2026-07-05 |

**处置**：`robots.txt` 增加 `Disallow: /api/`（若尚未）；确认 API 响应不进 sitemap、无自我推荐内链。

---

## 5. 处置优先级（落地）

| 优先级 | 动作 | 期望 |
|---|---|---|
| P0 | robots：`Disallow: /api/`（若缺）；确认 live noindex on `/devlogs/*` | 非工具噪声退出发现管道 |
| P0 | 信息页尾斜杠 → 单一规范 + 301 | 消除 5 对重复信号 |
| P1 | 工具 84：观察；已收录同簇（ru image-merge 等）做 meta | 收录跟着需求与内链走 |
| P2 | 4 周后仍大片未收的图片 slug → 按 slug 开 IG，而非按 110 URL 扫射 | 避免 scaled content 风险 |

---

## 6. 与策略文档决策门对齐

[`02-next-strategy.md`](./02-next-strategy.md) 判定分支现结论：

- 抽样主体 = **新语种 × 图片/品牌工具** + 合格工具页形态 → **视为消化期**，观察 2–4 周 + 内链。  
- **devlogs / api / 尾斜杠 info** = 需修生成与规范，**不是**「等收录」。  
- **不**因 110 而砍语种或批量删工具页。
