Date: 2026-08-08 19:12
Summary: Rebuilt static homepage so /zh/ lists tools 18–24.

[question]
http://localhost:8788/zh/没有显示

[try to solve]
Cause: after adding seven tools only `merge:tools` ran, not `build:site`, so static home `public/_pages/zh/index.html` stayed stale and `/zh/` featured/all-tools sections omitted the new tools. Tool routes themselves (e.g. `/tools/jwt-decoder`) were already reachable.

Fix: ran `npm run build:site` to rebuild locale homes and sitemap. Confirmed `/zh/` links include jwt-decoder, file-hash, base64, uuid-generator, password-generator, unix-timestamp, timezone-converter. Hard-refresh the browser cache to see them.

[actions]
- npm run build:site
- Verified http://127.0.0.1:8788/zh/ lists the seven new tool links
