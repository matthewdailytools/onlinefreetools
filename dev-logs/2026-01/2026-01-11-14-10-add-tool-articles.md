Date: 2026-01-11 14:10
Summary: Add article field for tools and populate translations for two tools

[question]
为所有的tool增加字段（article），存放工具相关的说明:工具是什么，做什么用，使用场景；并补充目前两个工具的article各个语言的内容

[try to solve]
- Added `tool_headers_article` and `tool_markdown_article` keys to all runtime i18n files under `src/site/i18n/` (languages: en, zh, es, ar, pt, id, fr, ja, ru, de).
- Added `tool_website_headers_article` and `tool_markdown_to_html_article` to `scripts/site/i18n.mjs` for the same languages to support static build.
- Updated `src/pages/websiteHeadersPage.ts` and `src/pages/markdownToHtmlPage.ts` to render the new `article` content on the tool pages.

[actions]
- Edited `src/site/i18n/*.ts` (10 files) to include article translations for Website Headers and Markdown→HTML tools.
- Edited `scripts/site/i18n.mjs` to include article fields for all supported languages.
- Edited `src/pages/websiteHeadersPage.ts` and `src/pages/markdownToHtmlPage.ts` to display the article text.
