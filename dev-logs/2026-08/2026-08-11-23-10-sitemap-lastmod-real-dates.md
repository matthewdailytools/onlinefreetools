Date: 2026-08-11 23:10
Summary: Sitemap lastmod now tracks real content changes via source hashes; unchanged URLs keep prior dates.

[question]
sitemap的生成中日期字段，需要根据实际的来，如果没有更新，就按照之前的日期；有更新或者新建按新日期来。

[try to solve]
已为全站 sitemap 写入真实 `<lastmod>`，并按源文件内容决定是否刷新日期。

规则：
- 每个 `<url>` 带 `<lastmod>yyyy-MM-dd</lastmod>`。
- 对应源文件哈希未变 → 沿用状态/旧 sitemap 中的日期。
- 新建或源文件有更新 → 使用当前 git HEAD 提交日（无 git 时用当天 UTC）。
- 状态写入 `scripts/site/sitemap-lastmod-state.json`（入库）；仅全量写 `public/sitemap.xml` 时更新，筛选构建默认不改状态。

验证：首次生成 1470 条均为 new；立即再跑 1470 条全部 reused；单改某语 i18n 仅该 URL changed。

[actions]
- Added `scripts/site/sitemap-lastmod.mjs` + `scripts/site/sitemap-lastmod-state.json`
- Updated `scripts/site/sitemap.mjs`, `scripts/build-site.mjs`, `ops/seo/generate-sitemap.mjs`
- Regenerated `public/sitemap.xml` with lastmod
- Documented in `ops/README.md` §4.0 and `.cursor/rules/seo-html-defaults.mdc`
