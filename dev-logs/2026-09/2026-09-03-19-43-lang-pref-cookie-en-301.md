Date: 2026-09-03 19:43
Summary: Cookie language preference (oft_lang) overrides Accept-Language; /en/* 301s to unprefixed canonical URLs with Set-Cookie.
Visibility: people

[question]
cookie 记住语言偏好：如果用户点击选取语言后，默认此语言。在用户选择英语，或者没有语言偏好设置时候且Accept-Language是英语默认访问链接中无/{lang}/的链接，如果这个用户访问有/en/链接，301跳到无/{lang}/的链接。

[try to solve]
## Context
After choosing English via `/en/`, Tools mega links (unprefixed `/tools/...`) were re-negotiated by `Accept-Language: zh` into `/zh/tools/...`. Product ask: remember explicit language choice in a cookie; English (cookie or AL) stays on unprefixed URLs; visiting `/en/...` must 301 to the unprefixed canonical and set the preference.

## Process
1. Extended `src/site/lang.ts` with `LANG_PREF_COOKIE` (`oft_lang`), parse/get/set helpers, and `resolvePreferredLang` (cookie > Accept-Language > default).
2. Worker (`src/index.ts`): early middleware 301-strips default-lang explicit prefixes (`/en/...` → `/...`) and `Set-Cookie: oft_lang=en`. Home `/` and unprefixed negotiation middleware use `resolvePreferredLang` with `Vary: Accept-Language, Accept, Cookie`.
3. `toolRegistrar` keeps a default-lang `/en/tools/:slug` → 301 fallback.
4. Lang switcher (`scripts/site/components/header.mjs`, `src/pages/site/header.ts`): `data-lang-pref` on alternate links + click script writes the same cookie (HTTPS adds `Secure`).
5. Rebuilt home/info Assets HTML so switcher markup/script is live on homes.

## Root cause / analysis
Unprefixed English URLs are correct for SEO, but without a durable preference the server kept trusting Accept-Language on every hop. Cookie preference separates “browser default” from “user chose English,” and `/en/` becomes a selection signal that consolidates to the canonical unprefixed URL (301) instead of a permanent parallel English tree.

## Solution
Verified with GET curl on localhost:8788:

| Request | Result |
| --- | --- |
| `/en/` + AL=zh | 301 → `/` + `Set-Cookie: oft_lang=en` |
| `/en/tools/...` + AL=zh | 301 → `/tools/...` + cookie |
| `/tools/...` + AL=zh, no cookie | 302 → `/zh/tools/...` |
| `/tools/...` + AL=zh, `Cookie: oft_lang=en` | 200 English |
| `/` + AL=zh, cookie=en | 200 English |
| `/tools/...` + AL=en, cookie=zh | 302 → `/zh/tools/...` |

Accept-Language auto-redirects do **not** write the cookie; only switcher click or `/en/` 301 does.

## Notes / boundaries
- Paths: `src/site/lang.ts`, `src/index.ts`, `src/site/toolRegistrar.ts`, both header renderers, `scripts/site/config.mjs` comment.
- Tool-page HTML still needs a full `npm run build:site` (and local R2 refresh) to embed the click script on prerendered tool chrome; Worker `/en/` → cookie already covers the English-selection path without that rebuild.
- Do not treat Accept-Language negotiation as an explicit preference.

[actions]
- Implemented cookie preference + `/en/*` 301 strip in Worker; updated lang switchers; rebuilt home/info Assets pages
