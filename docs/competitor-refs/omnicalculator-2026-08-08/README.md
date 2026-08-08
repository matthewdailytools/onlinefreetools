# Omni Calculator 工具清单快照（公式对照用）

**抓取日期**: 2026-08-08  
**入口**: [https://www.omnicalculator.com/](https://www.omnicalculator.com/)  
**Sitemap**: [https://www.omnicalculator.com/sitemap.xml](https://www.omnicalculator.com/sitemap.xml) → `sitemap-main.xml` + `sitemap-content-pages.xml`

> **用途**：枚举竞品计算器 URL，供本站实现/复核**公式、变量与边界**时打开对照。  
> **不是**要照抄其 ~**3867** 个 en 工具页规模——对本站属 scaled content / doorway 风险面。  
> **语言**：sitemap 含多语 hreflang（pt/de/es/it/fr/pl 等），**无 zh**；公式对照以 **en URL** 为准。

## 品类规模（en 工具页，`sitemap-main` 解析）

| 品类 path | 工具数 | Hub |
|---|---:|---|
| biology | 109 | https://www.omnicalculator.com/biology |
| chemistry | 107 | https://www.omnicalculator.com/chemistry |
| construction | 156 | https://www.omnicalculator.com/construction |
| conversion | 326 | https://www.omnicalculator.com/conversion |
| ecology | 34 | https://www.omnicalculator.com/ecology |
| everyday-life | 285 | https://www.omnicalculator.com/everyday-life |
| finance | 604 | https://www.omnicalculator.com/finance |
| food | 68 | https://www.omnicalculator.com/food |
| health | 435 | https://www.omnicalculator.com/health |
| math | 679 | https://www.omnicalculator.com/math |
| physics | 537 | https://www.omnicalculator.com/physics |
| sports | 110 | https://www.omnicalculator.com/sports |
| statistics | 192 | https://www.omnicalculator.com/statistics |
| other | 225 | https://www.omnicalculator.com/other |
| **合计** | **3867** | |

首页宣称约 3900+ 计算器；本快照按 sitemap 的 `/{category}/{slug}` en 路径计 **3867**（另含 hub 页与大量语言 alternate，不计入上表）。

## 本目录文件

| 文件 | 说明 |
|---|---|
| `omnicalculator-en-tools.tsv` | 全量 en：`category \t slug \t url_en` |
| `omnicalculator-intent-merge-howto.tsv` | **意图合并 → 本站 `how-to-calculate-*`**（清单 §9 源表） |
| `omnicalculator-formula-ref-shortlist.tsv` | 与合并后意图对齐的公式对照（每意图一行主 Omni URL） |
| `lists/{category}.md` | 分品类完整 slug + en URL 表 |
| `sitemaps/sitemap-en-tools.xml` | **精简** en 工具 URL 列表（自 sitemap-main 解析，无 hreflang） |
| `sitemaps/sitemap-content-pages.xml` | 内容/说明页备份（非计算器工具） |
| （未入库）`sitemap-main.xml` | 原始主 sitemap 含多语 alternate，体积大；需要时从官网重拉 |
| `sitemap.xml` | 索引备份 |

## 精选对照（摘要）

完整列见 `omnicalculator-formula-ref-shortlist.tsv`。产品侧索引：

- 清单总表 §12：`docs/2026-08-08-tool-inventory-table.md`
- 方向文档 A.7 / C-V4·V5 / 附录：`docs/2026-07-28-tool-direction.md`
- 可与 [ToolDone 快照](../tooldone-2026-08-08/README.md) **交叉核对**同一公式的两家呈现

## 对本站策略（硬约束）

1. **禁止**按 Omni 规模拆男女 BMI、各州销售税、90/95/99 置信区间、16:9/4:3 宽高比等近义 URL。  
2. 公式对照以 **en 页**为主（变量命名与公式区块更完整）。  
3. Omni 强项是**公式讲解深度与可引用叙事**（接近 calculator.net）；本站照搬的是「公式可见 + 边界 + References」，不是页数。  
4. 立项仍须本站 IG；链接仅作竞品对照，**不**写入用户可见「抄自 Omni Calculator」。  

**流量策略全文**（四层打法、一页吃长尾、how-to 命名、同意图抢份额、Google/Bing 红线）：[docs/2026-08-08-omnicalculator-seo-traffic-strategy.md](../../2026-08-08-omnicalculator-seo-traffic-strategy.md)  

**清单落地**：意图合并后的产品行见 [docs/2026-08-08-tool-inventory-table.md](../../2026-08-08-tool-inventory-table.md) §9（62 行）+ 本目录 `omnicalculator-intent-merge-howto.tsv`。
