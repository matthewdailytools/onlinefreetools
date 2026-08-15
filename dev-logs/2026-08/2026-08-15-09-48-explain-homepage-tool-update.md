Date: 2026-08-15 09:48
Summary: Explained why the homepage does not update automatically after adding a tool.

[question]
1、为什么首页没有自动更新工具

[try to solve]
The homepage is a pre-rendered static HTML output, not a runtime view over the tool shard directory. Adding `src/site/tool-catalog.d/{slug}.json` only changes the source shard. The tool appears on the homepage only after `npm run build:site`, which runs `merge:tools`, rebuilds `src/site/tool-catalog.json`, regenerates the static `public/index.html` and `public/{lang}/index.html`, and refreshes sitemap/prerendered pages. In the current local output, `archive-extractor` is already present in `public/index.html` and `public/zh/index.html`; if it is not visible in a browser, the browser is likely looking at an old dev server, an old deployed R2/Pages asset, or cached HTML.

[actions]
- Checked `public/index.html`, `public/zh/index.html`, `src/site/tool-catalog.json`, and `src/site/tool-catalog.d/archive-extractor.json` for `archive-extractor`.
- Checked `package.json` and `scripts/site/components/content-home.mjs` to confirm homepage generation depends on `build:site`.
