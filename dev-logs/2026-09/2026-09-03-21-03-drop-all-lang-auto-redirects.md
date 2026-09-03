Date: 2026-09-03 21:03
Summary: Removed all server language auto-redirects (including cookie-based); /en/ no longer chains to /zh/; hint bar auto-hide is 10s.
Visibility: people

[question]
http://localhost:8788/en/ 还是自动被跳转到了 http://localhost:8788/zh/ ；删除所有的语言自动跳转，只依赖用户选择语言偏好，另外顶栏下方提示条消失时间改为10秒

[try to solve]
## Context
Visiting `/en/` still ended on `/zh/` when an old `oft_lang=zh` cookie was present. Product ask: remove **all** automatic language redirects; language changes only via user choice (switcher / hint Switch). Hint bar timeout → 10 seconds.

## Process
1. Reproduced the chain: `/en/` → 301 `/` + `Set-Cookie: oft_lang=en`, then `/` still saw request Cookie `oft_lang=zh` and 302’d to `/zh/` (cookie preference middleware).
2. Removed cookie-based redirects from `GET /`, the unprefixed `app.use("/*")` negotiation middleware (deleted), and the catch-all.
3. Kept only `/en/*` → 301 unprefixed canonical + `Set-Cookie oft_lang=en` (SEO URL consolidation, not a cross-language jump).
4. Hint bar `setTimeout(hide, 10000)` in both headers; rebuilt homes; `PAGES_CACHE_VERSION` 4.10 → 4.11.

## Root cause / analysis
“Remember preference” via cookie redirect fought “select English via `/en/`”: the follow-up request to `/` could still carry the previous `oft_lang=zh` and override the intended English landing. URL-only navigation (user clicks) is the reliable preference signal.

## Solution
Verified:

| Request | Result |
| --- | --- |
| `/en/` + `Cookie: oft_lang=zh` | 301 → `/` (Set-Cookie en); follow → **200** `/` (not `/zh/`) |
| `/tools/...` + `Cookie: oft_lang=zh` | **200** English (no 302) |
| Home script | `setTimeout(hide,10000)` |

Language now changes only when the user clicks the switcher or the hint “Switch” button (those set `oft_lang` and navigate). Cookie no longer drives server redirects.

## Notes / boundaries
- Paths: `src/index.ts`, both headers, `wrangler.jsonc` cache version.
- Clear old cookies in the browser if testing leftover state; server no longer auto-jumps on them.

[actions]
- Removed cookie/AL language redirects; `/en/`→`/` only; hint auto-hide 10s; cache version 4.11
