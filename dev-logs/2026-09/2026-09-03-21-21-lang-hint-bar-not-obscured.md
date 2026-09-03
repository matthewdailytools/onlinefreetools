Date: 2026-09-03 21:21
Summary: Fix language hint bar stacking so it sits below the fixed navbar instead of being covered.
Visibility: people

[question]
显示条被挡住了

[try to solve]
## Context
The language hint bar (`#langHintBar`) under the fixed site navbar was partially or fully covered by `.navbar.site-navbar.fixed-top`. Users could not read or click Switch / Dismiss.

## Process
1. Compared Bootstrap `.fixed-top` stacking (`z-index: 1030`) with `.lang-hint-bar` (previously below that).
2. Checked `top: var(--header-h)` on home pages where multirow nav uses a larger real height than the default `--header-h: 60px`, so the bar could sit under the nav even when z-index was raised.
3. Updated CSS to `z-index: 1035` (above fixed-top, below dropdowns at 1050).
4. On show, JS measures `.navbar.site-navbar` height, sets `bar.style.top`, and syncs `--header-h` / `--lang-hint-h` on `body` / `html` so main content padding clears both chrome layers; clears those on hide.

## Root cause / analysis
Two independent stacking issues:
- z-index below Bootstrap fixed navbar painted the bar underneath.
- CSS `--header-h` could underestimate the real navbar height (especially multirow home headers), so `top` placed the bar inside the navbar’s box.

## Solution
- `public/styles/site.css`: `.lang-hint-bar { z-index: 1035; }` with comment documenting the Bootstrap range.
- `scripts/site/components/header.mjs` and `src/pages/site/header.ts`: measure nav height, set inline `top`, publish `--header-h` / `--lang-hint-h`, reset on hide.
- Rebuilt homes + prerendered tools, bumped `PAGES_CACHE_VERSION` to 4.14, restarted local dev.

## Notes / boundaries
- Hard-refresh after Cache API bumps; clear `oft_lang` / `oft_lang_hint_n` if the bar no longer appears (max 3 shows).
- Dropdown menus remain above the hint bar (Bootstrap ~1050).

[actions]
- Updated hint bar CSS z-index and show/hide layout sync in both header sources
- Bumped PAGES_CACHE_VERSION to 4.14; rebuild homes/tools; restart:dev
