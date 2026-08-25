Date: 2026-08-03 20:48
Summary: Injected the Google Search Console site-verification meta into each language homepage head.

[question]
复制下面的元标记，并将其粘贴至网站的首页中。它应该位于第一个 <body> 部分之前的 <head> 部分中。
<meta name="google-site-verification" content="DRJRq9AI8KKITkdiZbdd7zu4LxrIc38CPOd9OeK15FM" />

[try to solve]
Stored the Google site verification token in the site build config and inject it via `extraHeadHtml` into `<head>` (before the first `<body>`) when building each language homepage, without adding the tag to tool pages or other non-home routes.

[actions]
- Updated: `scripts/site/config.mjs` (added `googleSiteVerification`)
- Updated: `scripts/build-site.mjs` (homepage `extraHeadHtml` meta injection)
- Rebuilt: per-language `public/_pages/*/index.html`
