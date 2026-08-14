Date: 2026-08-14 19:33
Summary: Deployed Magnet Link Decoder to production and verified the Worker, R2 pages, routes, assets, sitemap, and peer hint behavior.

[question]
运行一次完整上线到生产环境的部署和验证脚本

[try to solve]
已完成 Magnet Link Decoder 的完整生产部署和验证。修复了模板字符串中的 peer hint 正则转义，IPv4、域名和括号 IPv6 均可正确通过，非法格式与超范围端口仍会警告。生产 R2 已上传 1520 个预渲染页面，PAGES_CACHE_VERSION 已提升到 4，内容哈希为 f053e6ae4531290854a13ea4e51315485273cb16c8dd325e802c9fb0f9269cb1；Cloudflare 部署 5e80ca7b-c3cf-4f70-b908-fcb1fc2b1595 / 版本 f9134ca5-54cc-42b0-9dd4-f3dce7502858 已承载 100% 流量。英文和中文工具页、图标、sitemap、首页入口以及 Worker/R2 实时一致性检查均通过。

[actions]
- Ran `npm run deploy` with the full build, SEO/vendor gates, R2 upload, and remote verification.
- Fixed peer hint regex escaping in `src/pages/magnetLinkDecoderPage.ts`.
- Bumped `PAGES_CACHE_VERSION` from 3 to 4 in `wrangler.jsonc` to invalidate stale edge HTML.
- Ran coverage, SEO, isolation scope review, generated HTML checks, headless Chrome DOM checks, and production HTTP checks.
- Committed and pushed `7f456f31` and `b9ab5344` to `main`.
