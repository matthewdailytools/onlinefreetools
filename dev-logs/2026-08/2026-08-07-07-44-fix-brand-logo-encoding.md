Date: 2026-08-07 07:44
Summary: Fixed brand-logo.svg XML encoding error caused by corrupted Chinese bytes in a comment.

[question]
http://localhost:8788/brand-logo.svg This page contains the following errors: error on line 2 at column 3: Encoding error

[try to solve]
Chinese text in an SVG comment had been written as illegal bytes, so XML parsing failed. Rewrote `brand-logo.svg` as pure ASCII and synced the same fix to `favicon.svg`.

[actions]
- `public/brand-logo.svg`, `public/favicon.svg`
