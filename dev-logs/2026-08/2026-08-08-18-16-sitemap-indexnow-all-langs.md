Date: 2026-08-08 18:16
Summary: Sitemap should list all quality locales; IndexNow need not push every language every time.

[question]
问题：sitemap和indexnow有必要把所有语言都提交么？

[try to solve]
不必混为一谈：

**Sitemap**：有必要把「已上线且质量达标」的全部语言 URL 放进 sitemap（并带 hreflang）。这是发现与多语言关系的主通道；GSC/Bing 一次提交 sitemap 即可持续抓取。未达标/机翻凑数语不要进 sitemap。

**IndexNow**：不必每次都推全站全语言。它只通知「有变更」；应优先推刚改/新上的 URL。新工具可推该工具各语，或用 `--lang` / `--include` 收窄；全量 sitemap 推送只适合大改/冷启动，且占 crawl quota。站内策略也写了 L3（ar/id/ru）无数据前不急于全量推 IndexNow。

实操：sitemap 保持全质量语覆盖；IndexNow 按变更集提交。

[actions]
- （说明性回答，无代码改动）
