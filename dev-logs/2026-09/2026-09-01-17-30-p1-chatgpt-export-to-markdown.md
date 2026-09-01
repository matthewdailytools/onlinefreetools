Date: 2026-09-01 17:30
Summary: Shipped ChatGPT export to Markdown with local mapping/Claude parsers and Markdown/JSON/CSV output chips.

[question]
继续

[try to solve]
Next P1 slug was `chatgpt-export-to-markdown` (replaces old engineering name `chat-export-converter`, which is not registered). Shipped A→D: brief 0b/0i, catalog + page + ten locales, coverage 2/4, build, HTML smoke, vendor lint.

H1 is the search phrase ChatGPT export to Markdown. Default output is Markdown with ## User / ## Assistant. Output chips are normalized JSON and CSV (role,content). Parsers accept ChatGPT mapping trees, flat role/content arrays, and Claude chat_messages. Privacy says stay on the device and not uploaded. Related: yaml-json, markdown-to-html. Token counting stays out of scope (P2 defer).

Ten locales rewritten from local search phrases (zh ChatGPT 导出转 Markdown, es exportar ChatGPT a Markdown, ja ChatGPTエクスポートをMarkdownに, etc.).

Gates: coverage 0b/2/4 green; lint:tool-page --require-html; lint:vendor. Home card present. Incremental build:site prerender again targeted an older slug, so prerender/gzip were run with `--slug=chatgpt-export-to-markdown`. lint:seo exited with a pre-existing WARN on excel-compare-files zh description length — not introduced by this tool. Isolation will still fail while sibling P1 shards sit uncommitted.

Remaining P1: svg-optimizer, curl-to-fetch, prompt-template-builder, file-metadata-analyzer.

[actions]
- Added work-tasks/chatgpt-export-to-markdown, catalog shard, chatgptExportToMarkdownPage.ts, ten i18n shards, icon
- README 中英; inventory §0 + row 15 → 已上线
- prerender + gzip --slug=chatgpt-export-to-markdown after incremental build missed the new HTML
