Date: 2026-08-21 00:26
Summary: Explained practical sources and a site-aligned pipeline for discovering new phrases and fresh events.

[question]
如何获取这世界上出现的新词组和新鲜事情

[try to solve]
要抓「新词组」和「新鲜事」，核心不是某一家神器，而是：多源信号 → 去重/聚类 → 看是否真有人在搜/在用。

## 1. 新词组（语言层）

| 来源 | 看什么 |
|------|--------|
| **搜索补全** | Google / Bing / YouTube / TikTok 输入框联想、「人们还会搜」 |
| **Google Trends / Keyword Planner** | 上升词、爆发词、相关查询（有搜索量才值得跟） |
| **社交热榜** | X/Twitter、Reddit、小红书、微博热搜；看标签与梗怎么被复述 |
| **词典/语料** | Urban Dictionary、Wiktionary 新词条、各语种新闻语料 |
| **专业圈** | GitHub Trending、Product Hunt、Hacker News；行业 newsletter |

判断标准：同一说法在 ≥2 个独立渠道反复出现，且能对应到一个可执行任务（算/转/生成/校验），才值得进词池。

## 2. 新鲜事情（事件层）

| 来源 | 用途 |
|------|------|
| **新闻聚合** | Google News、BBC/Reuters RSS、中文门户热榜 |
| **官方与监管** | 政府/标准组织公告（政策、标准名常变新词） |
| **产品发布** | Apple/Google/OpenAI 等 changelog、WWDC/Google I/O |
| **数据异常** | GSC 里突然冒出的查询、Analytics 新落地页 |

事件本身不等于选题；要拆成：这件事让用户要完成什么动作？再进 funnel。

## 3. 和本站最贴的做法

已有 keyword-to-tool：日抽约 10 词进 keyword-daily-pool，再 absorb / build / defer。

建议固定三条「新鲜度」管道，每周扫一次即可：

1. GSC 新查询（本站已开始被搜到的新说法）→ 优先 absorb
2. Trends + Planner 上升长尾（避开大词硬刚，盯 long_gap / locale_gap）
3. 社交/HN/产品发布里的新动词组 → 只保留「浏览器可做工具」的意图

流程仍是：SERP 摘要 → 入池 → 对照 catalog 决定 absorb/build，不要一看到新词就建页。

## 4. 实用习惯（低成本）

- 每日 15 分钟：热搜/HN + 本站 GSC 新 query
- 每周 1 次：Trends「过去 7 天」上升 + Keyword Planner 相关词
- 记录模板：新说法 / 首次见到渠道 / 用户任务 / 是否已有 slug / 是否有搜索信号

「新鲜」很多是噪音；可验证搜索意图 + 可交互任务 + SERP 缺口 才是该抓的新词组。

[actions]
- 对照 `.cursor/skills/keyword-to-tool-funnel/SKILL.md` 与站内 SEO 选题约束作答（未改业务代码）
