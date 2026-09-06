Date: 2026-09-06 10:50
Summary: convert-html-to-pdf URL field now defaults to https://example.com (also after sample and clear).
Visibility: project

[question]
网页地址：默认填写 https://example.com

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
Page-entry sample used to clear the URL input. The field now has value `https://example.com`; sample and clear restore the same default. Placeholder aligned. PAGES_CACHE_VERSION 4.20.

[actions]
- src/pages/convertHtmlToPdfPage.ts default URL; i18n placeholder; wrangler cache 4.20
