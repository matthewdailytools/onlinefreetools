Date: 2026-08-08 18:16
Summary: Sitemap should list all quality locales; IndexNow need not push every language every time.

[question]
问题：sitemap和indexnow有必要把所有语言都提交么？

[try to solve]
Do not conflate the two:

**Sitemap**: Yes — put all shipped, quality-passing locale URLs in the sitemap (with hreflang). That is the main discovery and multilingual-relationship channel; submitting the sitemap once in GSC/Bing enables ongoing crawl. Do not add unfinished / thin machine-translated locales.

**IndexNow**: No — do not push every language on every run. It only signals “something changed”; prefer newly changed or newly shipped URLs. For a new tool, push that tool’s locales, or narrow with `--lang` / `--include`. Full-sitemap pushes fit cold starts or large sitewide changes and consume crawl quota. Site policy also says skip full IndexNow for L3 (ar/id/ru) until there is data.

Practice: keep sitemap at full quality-locale coverage; submit IndexNow by change set.

[actions]
- (Explanatory answer only; no code changes)
