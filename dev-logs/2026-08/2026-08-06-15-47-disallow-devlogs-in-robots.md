Date: 2026-08-06 15:47
Summary: Disallowed `/devlogs/` in `robots.txt` so crawlers should not fetch development logs.

[question]
开发日志在robot规则中写成不允许爬取

[try to solve]
Added `Disallow: /devlogs/` to `public/robots.txt` so crawlers should not fetch the development-log directory; in-site access remains. Also updated indexing notes in `.cursor/rules/seo-html-defaults.mdc` (consistent with earlier sitemap exclusion of devlogs).

```
User-agent: *
Allow: /
Disallow: /devlogs/
Sitemap: https://onlinefreetools.org/sitemap.xml
```

[actions]
- `public/robots.txt`
- `.cursor/rules/seo-html-defaults.mdc`
