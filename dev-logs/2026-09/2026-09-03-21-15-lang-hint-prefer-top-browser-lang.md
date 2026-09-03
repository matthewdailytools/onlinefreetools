Date: 2026-09-03 21:15
Summary: Lang hint bar now uses the browser’s top supported preferred language, not the first language that differs from the page.
Visibility: people

[question]
chrome dev tool显示：accept language：zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7；为什么提示条显示检测到英语

[try to solve]
## Context
Browser preference list is Chinese-first (`zh-CN, zh, en-US, en`), but the hint bar said it detected English.

## Process
Inspected the client detector in both headers: it looped `navigator.languages` and picked the first **enabled** tag that was **≠ page language**.

## Root cause / analysis
On a Chinese page (`data-page-lang=zh`), `zh-CN`/`zh` matched the page and were skipped; the next supported tag was `en` → banner showed English. That is “first mismatch,” not “browser preferred language.”

## Solution
Pick the first supported language from `navigator.languages` as `preferred`. Show the bar only when `preferred !== pageLang`; the message uses that preferred code. On `/zh/` with zh-first Accept-Language, the bar no longer appears; on English `/` it offers Chinese.

Updated: `scripts/site/components/header.mjs`, `src/pages/site/header.ts`; rebuilt homes/tools; `PAGES_CACHE_VERSION` 4.12.

## Notes / boundaries
Chrome DevTools “Accept-Language” request header and `navigator.languages` are usually aligned; detection uses `navigator.languages` (client). Clear `oft_lang` / `oft_lang_hint_n` if retesting the banner.

[actions]
- Fixed preferred-language detection; rebuilt site chrome and bumped cache to 4.12
