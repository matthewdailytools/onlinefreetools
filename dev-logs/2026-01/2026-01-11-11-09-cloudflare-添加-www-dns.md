日期：2026年1月11日11时09分
摘要：在 Cloudflare 的 DNS 设置中添加 www 子域名记录（常见为 CNAME 到裸域或 Pages 目标）。

【question】
how cloudfare setting: add www domain  dns setting

【try to solve】
最常见目标：让 `www.example.com` 生效。

方案 A（通用/推荐）：`www` 做 CNAME 指向裸域
1）Cloudflare Dashboard -> 选择站点 -> DNS -> Records -> Add record。
2）填写：
- Type：CNAME
- Name：`www`
- Target：`example.com`（或填 `@`，取决于界面是否支持）
- Proxy status：Proxied（橙云，通常建议开启）
- TTL：Auto
3）保存后等待生效（通常几分钟内）。

方案 B（Cloudflare Pages 场景）：`www` CNAME 指向 `xxx.pages.dev`
- Type：CNAME
- Name：`www`
- Target：`<你的项目>.pages.dev`
- Proxy status：Proxied/Auto（按 Pages 提示）
并在 Pages 项目里把 `www.example.com` 添加为 Custom Domain（Cloudflare 会自动配置/校验）。

常见问题
- 只加了 DNS 但访问仍不通：检查站点 SSL/TLS 配置、以及源站是否接受该 Host。
- 已经做了 www->apex 301：仍建议保留 `www` DNS 记录，否则用户解析不到就无法跳转。
