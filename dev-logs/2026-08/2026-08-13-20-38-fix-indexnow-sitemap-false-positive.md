Date: 2026-08-13 20:38
Summary: Fixed IndexNow CLI mistaking /tools/sitemap-xml-generator for a nested sitemap URL.

[question]
xuli@Matthew-2023 onlinefreetools % npm run indexnow -- --sitemap https://onlinefreetools.org/sitemap.xml

> cloudflare-workers-openapi@0.0.1 indexnow
> node ops/seo/submit-indexnow.mjs --sitemap https://onlinefreetools.org/sitemap.xml

IndexNow sitemap source(s): https://onlinefreetools.org/sitemap.xml
Failed to fetch sitemap https://onlinefreetools.org/tools/sitemap-xml-generator: HTTP 404

[try to solve]
根因：`looksLikeSitemapUrl` 旧正则 `/\/sitemap(?:[_-]|$|index)/i` 会把工具页 `/tools/sitemap-xml-generator`（sitemap 后的 `-`）误判为子 sitemap，进而去 GET 该页并因生产 404 整批失败。

已收紧判断：仅认 `.xml`/`.xml.gz` 且路径含 sitemap，或末段为 `/sitemap`、`/sitemap_index`、`/sitemap-index`，或 `/sitemaps/` 目录。本地 dry-run 已通过。

另：线上 `https://onlinefreetools.org/tools/sitemap-xml-generator` 当前 HTTP 404，但 sitemap.xml 已收录该 URL——需另行部署/同步站点产物。

修复后可重新执行：
`npm run indexnow -- --sitemap https://onlinefreetools.org/sitemap.xml`

[actions]
- ops/seo/submit-indexnow.mjs: tighten looksLikeSitemapUrl
