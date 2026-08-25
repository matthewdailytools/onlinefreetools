Date: 2026-08-08 15:59
Summary: Production /zh/ looks broken because self-hosted Bootstrap/font vendor assets 404 after upload.

[question]
为什么上传后，https://onlinefreetools.org/zh/  样式错位了

[try to solve]
Root cause: after switching layout from CDN to same-origin `/vendor/bootstrap/` and `/vendor/fonts/`, production HTML referenced those paths but both returned **404**; `/styles/site.css` still 200. Missing Bootstrap grid/component CSS shows up as a broken home layout. Local `public/vendor/bootstrap/` and `public/vendor/fonts/` are produced by `build:site` / `vendor:site-chrome` and were gitignored — uploading only HTML/pages, or deploying without the vendor copy, omits those files.

Fix: before deploy run `npm run build:site` (or at least `npm run vendor:site-chrome`), then `npm run deploy` / upload assets that include `public/vendor/bootstrap/` and `public/vendor/fonts/`.

[actions]
- Verified live: bootstrap.min.css / plus-jakarta-sans.css → 404; site.css → 200
