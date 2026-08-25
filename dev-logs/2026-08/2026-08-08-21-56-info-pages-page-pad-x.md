Date: 2026-08-08 21:56
Summary: Align about/privacy/terms/contact horizontal padding with the home page --page-pad-x.

[question]
privacy，条款，联系，关于，和主页一样，增加左右margin，

[try to solve]
Info pages now use `body.is-info-page` with the same horizontal padding as home (`--page-pad-x`) and max-width aligned to `--home-max`; they no longer incorrectly inherit home’s `padding: 0`. Ran `build:site`.

[actions]
- scripts/site/layout.mjs (bodyClass)
- scripts/build-site.mjs (info pages bodyClass=is-info-page)
- public/styles/site.css
- npm run build:site
