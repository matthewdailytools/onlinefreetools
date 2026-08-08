# ToolDone 工具清单快照（公式对照用）

**抓取日期**: 2026-08-08  
**入口**: [https://tooldone.com/zh/](https://tooldone.com/zh/)（中文门户）  
**Sitemap 索引**: [https://tooldone.com/sitemapindex.xml](https://tooldone.com/sitemapindex.xml)

> **用途**：枚举竞品计算器 URL，供本站实现/复核公式与边界时打开对照。  
> **不是**要照抄其海量拆页策略（约 **2826** 个 en 工具页）——对本站属 scaled content / doorway 风险面。

## 品类规模（en sitemap）

| 品类 path | 工具数 | Hub | 中文 hub（zh） |
|---|---:|---|---|
| finance | 560 | https://tooldone.com/finance/ | https://tooldone.com/zh/jinrong/ |
| physic | 470 | https://tooldone.com/physic/ | https://tooldone.com/zh/wulixue/ |
| math | 397 | https://tooldone.com/math/ | https://tooldone.com/zh/shuxue/ |
| health | 394 | https://tooldone.com/health/ | https://tooldone.com/zh/jiankang/ |
| conversion | 311 | https://tooldone.com/conversion/ | https://tooldone.com/zh/zhuanhuan/ |
| other | 185 | https://tooldone.com/other/ | https://tooldone.com/zh/qita/ |
| statistic | 169 | https://tooldone.com/statistic/ | https://tooldone.com/zh/tongji/ |
| construction | 138 | https://tooldone.com/construction/ | https://tooldone.com/zh/jianzhu/ |
| biology | 102 | https://tooldone.com/biology/ | https://tooldone.com/zh/shengwuxue/ |
| chemistry | 100 | https://tooldone.com/chemistry/ | https://tooldone.com/zh/huaxue/ |
| **合计** | **~2826** | | |

## 本目录文件

| 文件 | 说明 |
|---|---|
| `tooldone-en-tools.tsv` | 全量 en：`category \t slug \t url_en` |
| `tooldone-en-zh-pairs.tsv` | en↔zh 成对链接（按同类 sitemap 顺序配对；抽查 BMI/复利/EMI/梯度通过） |
| `tooldone-zh-urls.txt` | 全量 zh URL 列表 |
| `tooldone-formula-ref-shortlist.tsv` | **与本站方向对齐的精选公式对照表**（优先用这个） |
| `lists/{category}.md` | 分品类完整 slug + en URL 表 |
| `sitemaps/` | 原始 sitemap XML 备份 |
| `sitemapindex.xml` | 索引备份 |

## 精选对照（摘要）

完整列见 `tooldone-formula-ref-shortlist.tsv`。产品侧索引：

- 清单总表 §11：`docs/2026-08-08-tool-inventory-table.md`
- 方向文档附录 / C-V4·V5：`docs/2026-07-28-tool-direction.md`

## 对本站策略（硬约束）

1. **禁止**按 ToolDone 规模拆男女 BMI、各州税、近义单位转换薄页。  
2. 公式对照时以 **en 页**为主（公式/变量命名更稳定）；zh 页作文案意图参考。  
3. 立项仍须本站 IG：公式可见、边界、References、YMYL 免责；链接仅作竞品对照，不写入用户可见「抄自 ToolDone」。
