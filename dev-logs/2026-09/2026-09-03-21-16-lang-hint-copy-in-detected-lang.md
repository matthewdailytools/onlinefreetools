Date: 2026-09-03 21:16
Summary: Lang hint bar copy (message + buttons) now renders in the detected browser language, not the current page language.
Visibility: people

[question]
显示条描述所用的语言应该使用检测到的语言

[try to solve]
## Context
The hint bar previously filled text from the **current page** locale (`t(pageLang, ...)`). On English `/` with Chinese preferred, users still saw English “We detected…”.

## Process
Embedded `data-i18n` JSON for all enabled langs (`message` / `switch` / `dismiss`) on `#langHintBar`. On show, the script selects `i18n[detected]` and writes text + button labels; sets `dir=rtl` when detected is `ar`.

## Solution
Updated both headers; rebuilt homes/tools; `PAGES_CACHE_VERSION` 4.13. On English home with zh-first `navigator.languages`, the bar should read「检测到你的语言是 中文，是否跳转？」with「跳转」/「关闭」.

## Notes / boundaries
Clear `oft_lang` / `oft_lang_hint_n` when retesting. Hard-refresh after cache bump.

[actions]
- Hint UI copy follows detected language; cache 4.13
