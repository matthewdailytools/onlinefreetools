Date: 2026-08-09 18:45
Summary: Fixed core-web-vitals-checker 500s from registry call-signature mismatch and missing ogImageUrl.

[question]
继续（延续上轮：`/zh/tools/core-web-vitals-checker` 返回 Internal Server Error）

[try to solve]
wrangler dev logs showed two real bugs; both fixed:

1. Registry call-signature mismatch (root 500 cause)
   - Catalog shard had `page.style: "pair"`, so `merge:tools` emitted `renderCoreWebVitalsCheckerPage(lang, defaultLang)` (positional), while the page function expects `(opts: { lang, defaultLang, enabledLangs })`. `opts.lang` was `undefined`, and `t()` threw `Cannot read properties of undefined (reading 'tool_cwv_title')`.
   - Fix: set `style` to `"opts"`, re-run `merge:tools` so the registry emits `renderCoreWebVitalsCheckerPage({ lang, defaultLang, enabledLangs: enabled })`.

2. Missing `ogImageUrl` in `renderLayout` (exposed after the first fix)
   - `renderCoreWebVitalsCheckerPage` called `renderLayout` without `ogImageUrl`; layout line 84 `escapeHtml(undefined)` threw `Cannot read properties of undefined (reading 'replaceAll')`.
   - Fix: pass `ogImageUrl: 'https://onlinefreetools.org/og-image.png'` (same as other tool pages).

Verification: all ten locales (`en`/`zh`/`es`/`ar`/`pt`/`id`/`fr`/`ja`/`ru`/`de`) returned 200 with correct H1/OG titles; `npm run lint:seo` passed (15 legacy WARNs non-blocking).

[actions]
- `src/site/tool-catalog.d/core-web-vitals-checker.json`: `page.style` `pair` → `opts`
- `src/pages/coreWebVitalsCheckerPage.ts`: pass `ogImageUrl` to `renderLayout`
- Re-ran `npm run merge:tools`
