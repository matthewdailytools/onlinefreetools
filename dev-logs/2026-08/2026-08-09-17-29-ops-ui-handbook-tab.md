Date: 2026-08-09 17:29
Summary: Added an ops handbook tab to the local Sitemap/Ops UI with whitelist Markdown rendering.

[question]
将在ops UI中增加运维手册的展示

[try to solve]
Added an “Ops handbook” tab to the existing `sitemap:ui`: after login it renders `ops/README.md` and the inbound checklist from a whitelist; served via `GET /api/handbook`; alias `npm run ops:ui`. API smoke checks passed. Restart the local process if port 8791 is still running an older build.

[actions]
- ops/seo/sitemap-ui.mjs, sitemap-ui.html
- package.json `ops:ui`; ops/README notes
