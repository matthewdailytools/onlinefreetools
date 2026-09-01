Date: 2026-09-01 17:10
Summary: Shipped Instagram post size as 1080×1080 feed square with 4:5 and landscape chips, separate from Story 9:16.

[question]
继续

[try to solve]
Next P1 slug after YouTube thumbnail was `instagram-post-size`. Shipped A→D: brief 0b/0i, catalog + page + ten locales, coverage 2/4, build, HTML smoke, lint:seo.

H1 is the search phrase Instagram post size. Default canvas is cover-fill 1080×1080 (1:1). Chips are 4:5 (1080×1350) and Instagram landscape (1080×566). Facebook feed photos are FAQ absorb on the same 1:1; 9:16 Stories and 1200×630 Open Graph cards stay on related pages. Pinterest pins stay P2 and are not a third URL.

Ten locales rewritten from local search phrases (zh Instagram 发帖尺寸, es tamaño post Instagram, ja Instagram投稿サイズ, etc.). Privacy says stay on the device and not uploaded.

Gates: coverage 0b/2/4 green; lint:tool-page --require-html; lint:seo; lint:vendor. Home card present. Incremental `build:site` prerender skipped the new slug (updatedAt vs generation state), so prerender/gzip were run with `--slug=instagram-post-size`. Isolation will still fail while sibling P1 shards sit uncommitted in the same tree.

Remaining P1: chatgpt-export-to-markdown, svg-optimizer, curl-to-fetch, prompt-template-builder, file-metadata-analyzer.

[actions]
- Added work-tasks/instagram-post-size, catalog shard, instagramPostSizePage.ts, ten i18n shards, icon
- README 中英; inventory §0 moved slug to 已上线
- prerender + gzip --slug=instagram-post-size after incremental build missed the new HTML
