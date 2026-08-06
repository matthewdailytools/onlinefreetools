Date: 2026-08-06 15:47
Summary: Disallowed /devlogs/ in robots.txt so search engines should not crawl development logs.

[question]
开发日志在robot规则中写成不允许爬取

[try to solve]
已在 `public/robots.txt` 增加 `Disallow: /devlogs/`，开发日志目录对爬虫禁止抓取；站内仍可访问。同步更新了 `.cursor/rules/seo-html-defaults.mdc` 索引说明（与此前 sitemap 排除 devlogs 一致）。

```
User-agent: *
Allow: /
Disallow: /devlogs/
Sitemap: https://onlinefreetools.org/sitemap.xml
```

[actions]
- public/robots.txt
- .cursor/rules/seo-html-defaults.mdc
