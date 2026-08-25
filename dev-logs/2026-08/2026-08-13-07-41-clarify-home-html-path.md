Date: 2026-08-13 07:41
Summary: Clarify home HTML lives under public/_pages/{lang}/index.html, not public/index.html.

[question]
为什么npm run build:site 后，public没有出现首页的html

[try to solve]
Homes are not at `public/index.html`; they are at `public/_pages/{lang}/index.html` (all ten languages present, e.g. en ~193KB). Public URL `/` is mapped by the Worker to that internal path, then read from Assets. If the sidebar hides `_pages`, the explorer is often filtering gitignored paths; confirm with `ls public/_pages/*/index.html`.

[actions]
- Inspected `public/_pages/*/index.html` and `scripts/build-site.mjs` output path
