Date: 2026-08-14 19:33
Summary: Deployed Magnet Link Decoder to production and verified Worker, R2 pages, routes, assets, sitemap, and peer hint behavior.

[question]
运行一次完整上线到生产环境的部署和验证脚本

[try to solve]
Completed full production deploy and verification for Magnet Link Decoder. Fixed peer-hint regex escaping in a template string so IPv4, hostnames, and bracketed IPv6 pass correctly; illegal formats and out-of-range ports still warn. Production R2 uploaded 1520 prerendered pages; `PAGES_CACHE_VERSION` bumped to 4; content hash `f053e6ae4531290854a13ea4e51315485273cb16c8dd325e802c9fb0f9269cb1`. Cloudflare deployment `5e80ca7b-c3cf-4f70-b908-fcb1fc2b1595` / version `f9134ca5-54cc-42b0-9dd4-f3dce7502858` carries 100% traffic. EN/ZH tool pages, icon, sitemap, home entry, and Worker/R2 live consistency checks all passed.

[actions]
- Ran `npm run deploy` with the full build, SEO/vendor gates, R2 upload, and remote verification.
- Fixed peer hint regex escaping in `src/pages/magnetLinkDecoderPage.ts`.
- Bumped `PAGES_CACHE_VERSION` from 3 to 4 in `wrangler.jsonc` to invalidate stale edge HTML.
- Ran coverage, SEO, isolation scope review, generated HTML checks, headless Chrome DOM checks, and production HTTP checks.
- Committed and pushed `7f456f31` and `b9ab5344` to `main`.
