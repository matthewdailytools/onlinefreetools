Date: 2026-01-11 15:00
Summary: Fix language-negotiation redirect when visiting language-prefixed paths

[question]
http://localhost:8787/ja/ 下，点击http://localhost:8787/ja/tools/website-headers ，结果跳转 http://localhost:8787/zh/ja/tools/website-headers ，显示404 Not Found

[try to solve]
Problem: The middleware that performs language negotiation treated a path like `/ja/...` as non-explicit when `ja` was not in the `SITE_LANGS` enabled list. That caused the middleware to prefix the picked language (e.g. `zh`) onto the existing path, producing `/zh/ja/...` and a 404.

Fix: Treat any supported language code in the path as an explicit prefix (do not require it to be present in `SITE_LANGS` for this detection). This prevents the middleware from performing language-negotiation redirects for explicitly language-prefixed URLs.

Actions:
- Modified `src/index.ts`:
  - Changed `getExplicitLangFromPath` to only check `isSupportedLang(seg)` and not `enabled.includes(seg)`.

Notes:
- The route handlers still use `SITE_LANGS` to decide which language to render or fall back to the default when necessary. The change only prevents accidental double-prefix redirects.
