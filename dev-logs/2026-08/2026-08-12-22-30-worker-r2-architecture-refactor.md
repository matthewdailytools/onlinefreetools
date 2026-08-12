Date: 2026-08-12 22:30
Summary: Implement Worker+R2 architecture: prerender HTML to `_pages/{lang}/**/*.html.gz`, Cache→R2 serve, Worker bundle ~83KB gzip.

[question]
根据”docs/worker+R2架构/初始思路.md“进行项目架构重构，要求不要影响现在的用户体验和seo（索引和原来构建的seo体系）
（确认 R2 key：`_pages/{lang}/tools/text-diff.html.gz` 模式）

[try to solve]
按计划落地 Worker + R2 三层缓存，公开 URL / sitemap / hreflang / 验证文件 / 语言协商不变。

要点：
- R2 key：`_pages/{lang}/…/*.html.gz`（含工具页）
- Worker：`Cache API → R2 gzip → ASSETS 明文回退`；gzip 用 `encodeBody: manual`；ASSETS 回退只返回 identity 防双重压缩
- 工具页构建期预渲染（esbuild），Worker 仅用 `toolSlugs.generated.ts` 校验 slug
- Worker 上传体积：约 **415 KiB / gzip 83 KiB**（原先约 9.8MB）
- 脚本：`prerender:tools`、`gzip:pages`、`upload:r2` / `upload:r2:local`；`start:dev` 默认本地灌桶（`--no-seed-r2` 可跳过）
- 文档：`docs/worker+R2架构/design.md`
- 回归：首页/工具/sitemap/robots/GSC/IndexNow/语言 302/API/lint:seo/lint:vendor 通过

生产发版需先创建 R2 桶并执行 `npm run upload:r2`。

[actions]
- docs/worker+R2架构/design.md（新建）；初始思路.md 链到设计
- wrangler.jsonc：PAGES_BUCKET、PAGES_CACHE_VERSION
- src/site/r2Pages.ts、toolRegistrar.ts、toolSlugs.generated.ts；src/index.ts 改走预渲染
- scripts：prerender-tool-pages*.mjs/ts、gzip-pages.mjs、upload-r2-pages.mjs；build-site.mjs / merge-all.mjs / package.json
- ops/dev/start-dev.mjs：本地 R2 seed；.gitignore 工具 HTML 与 .html.gz；rules 同步
