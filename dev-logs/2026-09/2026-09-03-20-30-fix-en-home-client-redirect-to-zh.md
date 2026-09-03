Date: 2026-09-03 20:30
Summary: Stopped client-side navigator.languages auto-redirect so /en/ → / (with oft_lang=en) no longer bounces Chinese browsers to /zh/.
Visibility: people

[question]
修正 https://onlinefreetools.org/en/ 会自动跳转 https://onlinefreetools.org/zh/ 的问题
（附 build:site / lint:seo 终端输出确认）

[try to solve]
## Context
Visiting `/en/` 301s to the canonical English home `/` and sets `oft_lang=en`. Chinese-locale browsers still ended on `/zh/` because the static layout injected a head script that re-read `navigator.languages` and called `location.replace('/zh/')`, ignoring the preference cookie and the Worker’s “no Accept-Language auto-302” policy.

## Process
1. Confirmed production: `GET /en/` → 301 `/` + `Set-Cookie: oft_lang=en`; `GET /` with `oft_lang=zh` → 302 `/zh/`; English HTML still contained the client redirect.
2. Removed the `clientLangRedirectScript` body from `scripts/site/layout.mjs` (comment documents why). Language mismatch is left to the header hint bar; server redirects only on `oft_lang`.
3. Rebuilt lang homes / info shells so `public/index.html` and `public/{lang}/index.html` no longer embed `location.replace(targetPath…)`.
4. User’s `build:site` + `lint:seo` finished: gzip wrote 2210 pages; SEO validator reported **WARN only** (legacy short descriptions, old param-enum titles, inbound-related orphans) — not CI failure.

## Root cause / analysis
Server and client disagreed. Cookie/`oft_lang` correctly recorded English after `/en/`, but the home HTML’s early script still treated browser language as authoritative and overwrote the explicit choice.

## Solution
No navigator-based auto-jump in layout. After deploy (git push of Assets homes), `/en/` → `/` stays English for Chinese browsers; optional hint bar can still offer 中文. Unrelated `lint:seo` WARNs need not block this fix.

## Notes / boundaries
- Production needs **commit + push** of `scripts/site/layout.mjs` and rebuilt `public/**/index.html`; CDN/Cache may briefly serve the old head script until Assets refresh / cache age out.
- Tool HTML 404s (batch P0 pages missing from R2) are a separate `upload:r2` issue.

[actions]
- Cleared client lang auto-redirect in `scripts/site/layout.mjs`; rebuilt home/info HTML
- Confirmed local homes no longer contain `location.replace(targetPath`
