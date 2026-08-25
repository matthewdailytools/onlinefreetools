Date: 2026-08-09 14:00
Summary: Added filtered sitemap generation (lang/info/category/scenario/subject) plus a local password-gated ops UI.

[question]
sitemap的生成除了全量生成外，提供语言选择，相关页面选择(隐私，关于，联系，条款页面)，以及按类别，场景（where2use），工具类型选择，提供一个生成操作页面，进入密码为345621

[try to solve]
Filtered generation is supported beyond full sitemaps, with a local password-gated ops UI (do not expose publicly).

**Usage**
- CLI: `npm run sitemap` (full → `public/sitemap.xml`); filter examples in `ops/README.md` §4.0
- Ops UI: `npm run sitemap:ui` → http://127.0.0.1:8791/ ; entry password `345621` (override with `SITEMAP_UI_PASSWORD`)
- Filters default to `public/sitemap.filtered.xml`; overwrite option writes the main sitemap
- `npm run build:site` still uses full `buildFullSitemap()` (then ~140 entries × 10 langs = 1400 URLs)

**Filter semantics**
- Language / info pages (about, privacy, terms, contact) / scenario leaves / tool-type leaves / catalog category are selectable
- Tool filter: category ∪ scenario ∪ subject is OR; all three empty (or scenario/type fully selected) = all tools
- Scenario/type “clear” = omit those leaves and do not filter tools on that dimension

**Implementation**
- Core: `scripts/site/sitemap.mjs`
- CLI: `ops/seo/generate-sitemap.mjs`
- UI: `ops/seo/sitemap-ui.mjs` + `sitemap-ui.html` (bound to 127.0.0.1 only)

[actions]
- Added `scripts/site/sitemap.mjs`; wired `scripts/build-site.mjs` → `buildFullSitemap`
- Added `ops/seo/generate-sitemap.mjs`, `ops/seo/sitemap-ui.mjs`, `ops/seo/sitemap-ui.html`
- package.json scripts: `sitemap`, `sitemap:ui`
- Updated `ops/README.md` §4.0; gitignore `public/sitemap.filtered.xml`
