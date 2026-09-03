Date: 2026-09-03 20:12
Summary: Removed Accept-Language auto-redirects; added a top language hint bar (switch/dismiss, 5s auto-hide, max 3 shows via cookie).
Visibility: people

[question]
剔除自动跳accept language的逻辑，在顶部菜单下方展示一个提示条：检测到你的语言是xxx，是否跳转。可以选择关掉，跳转，5秒后自动消失。每个cookie只展现3次。

[try to solve]
## Context
Automatic Accept-Language 302s fought explicit English browsing (e.g. Tools links jumping to `/zh/...`). Product ask: stop server-side AL redirects; instead show an optional banner under the navbar when the browser language differs from the page language.

## Process
1. Worker (`src/index.ts`): home `/`, unprefixed middleware, and catch-all now use **cookie-only** preference (`resolvePreferredLang` no longer reads Accept-Language). AL alone never redirects.
2. Kept `/en/*` → 301 unprefixed + `oft_lang=en`, and cookie=`zh` still 302s unprefixed URLs to `/zh/...`.
3. Headers (`scripts/site/components/header.mjs`, `src/pages/site/header.ts`): `#langHintBar` under the navbar + client script:
   - Skip if `oft_lang` is set or `oft_lang_hint_n` ≥ 3
   - Detect `navigator.languages` vs `data-page-lang`
   - On show: increment `oft_lang_hint_n`, fill `{lang}` label, reveal bar
   - Switch → set `oft_lang` + navigate (hreflang path on current host)
   - Dismiss / 5s timeout → hide; count already incremented
4. CSS (`public/styles/site.css`): fixed bar under `--header-h`, `--lang-hint-h` pushes body/sidebar.
5. i18n: `lang_hint_*` in all 10 `core/{lang}.ts` + `scripts/site/i18n.mjs`; `merge:tools`; rebuilt homes; bumped `PAGES_CACHE_VERSION` 4.9 → 4.10 to bust Cache API; prerendered tools.

## Root cause / analysis
AL negotiation is useful for first visit but overrides intentional locale choice when English uses unprefixed URLs. Moving detection to a dismissible client banner keeps SEO canonicals stable and gives the user an explicit Switch control without permanent auto-jump.

## Solution
Verified locally (127.0.0.1:8788):

| Case | Result |
| --- | --- |
| `/` or `/tools/...` + AL=zh, no cookie | **200** (no 302) |
| `/tools/...` + `Cookie: oft_lang=zh` | **302** → `/zh/tools/...` |
| Home/tool HTML | contains `#langHintBar` + `oft_lang_hint_n` script |

## Notes / boundaries
- Show count cookie: `oft_lang_hint_n` (max 3). Preference cookie: `oft_lang`.
- Banner copy is in the **current page language**; detected name uses native labels (中文, English, …).
- Clearing cookies resets the 3-show limit.
- Related: prior cookie/`/en/` 301 work in `2026-09-03-19-43-lang-pref-cookie-en-301.md`.

[actions]
- Removed AL auto-redirect; added lang hint bar + i18n; bumped PAGES_CACHE_VERSION to 4.10; rebuilt homes and tool prerender
