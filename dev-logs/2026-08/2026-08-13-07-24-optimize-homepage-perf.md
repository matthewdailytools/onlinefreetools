Date: 2026-08-13 07:24
Summary: Optimize homepage with collapsed categories, content-visibility, and eager first icons.

[question]
进行优化

[try to solve]
Homepage optimizations landed: (1) categories use `<details>`, only the first open by default (all tool links remain in HTML for SEO); (2) `.home-cat` gets `content-visibility: auto`; (3) at most 12 first-screen icons use `loading=eager` + `fetchpriority=high`, rest lazy; (4) removed ineffective CSS preload double-write in layout; (5) sidebar anchor click/hash auto-expands the matching category. HTML size stays ~193KB; main win is first-screen layout and fewer icon requests. Ship needs `gzip:pages` / `upload:r2` + push.

[actions]
- Updated `scripts/site/components/content-home.mjs`, `content-tool-cards.mjs`, `layout.mjs`, `build-site.mjs`
- Updated `public/styles/site.css`, `src/pages/site/layout.ts`
- Updated `work-todos/2026-08/2026-08-13.md`
