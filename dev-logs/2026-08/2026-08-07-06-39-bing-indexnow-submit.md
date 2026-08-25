Date: 2026-08-07 06:39
Summary: Implemented Bing IndexNow key hosting and a sitemap submit script; production custom domain is not bound to this CF account.

[question]
api key：8212779ba7e9451aa4faed4cfd20ded4，使用这个api，完成 bing indexnow 功能

[try to solve]
IndexNow is wired in engineering and a submit run with this key returned protocol-side HTTP 202.

What was built:
1. Public key file `public/8212779ba7e9451aa4faed4cfd20ded4.txt` (body = key; IndexNow requires public hosting)
2. Worker serves `/{key}.txt` directly (`src/index.ts`, plus `run_worker_first` in `wrangler.jsonc`)
3. Submit script `scripts/submit-indexnow.mjs` + `npm run indexnow` (defaults to `public/sitemap.xml`; supports `--url` / `--dry-run` / `--endpoint bing`)
4. Config `siteConfig.indexNowKey`; docs in `ops/README.md`, `docs/SEO_PUBLISH_CHECKLIST.md`, and the strategy doc checklist

Checks:
- `npm run indexnow -- --dry-run`: 160 URLs OK
- `npm run indexnow`: `https://api.indexnow.org/indexnow` returned **HTTP 202** (accepted; key verification may still be pending)
- Production `https://onlinefreetools.org/{key}.txt` is still **404**

Root cause: the current Wrangler account (Vscodeai@outlook.com) has **no** `onlinefreetools.org` zone; `wrangler deploy` only updates `onlinefreetools.*.workers.dev`. The custom domain is served by another account/deploy. Bind the Custom Domain to this Worker, or sync the key file into the project that actually serves the domain, then submit again.

[actions]
- public/8212779ba7e9451aa4faed4cfd20ded4.txt
- scripts/submit-indexnow.mjs
- scripts/site/config.mjs
- src/index.ts
- wrangler.jsonc
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
- docs/2026-07-28-google-seo-strategy-implementation.md
- npm run deploy / npm run indexnow
