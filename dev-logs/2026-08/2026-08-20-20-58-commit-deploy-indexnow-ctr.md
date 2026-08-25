Date: 2026-08-20 20:58
Summary: Committed CTR meta, deployed R2, pushed main, IndexNow 40 URLs OK; live ru image-merge title verified.

[question]
需要

[try to solve]
Finished commit + deploy + IndexNow:

- Commit `325abf29`: seo front-load CTR meta (four tools + generated artifacts + home/sitemap + dev logs)
- `npm run deploy`: R2 incremental upload of 490 objects; verify:r2 OK (`PAGES_CACHE_VERSION=4.1`)
- `git push` main → origin
- IndexNow: `--tool image-merge,schema-jsonld-generator,how-to-calculate-volume,how-to-calculate-npv --require-live-key` → 40 URLs, HTTP 200
- Live spot-check: `/ru/tools/image-merge` title is “Склеить фото онлайн — …”
- Follow-up commit `9f2fbd3b`: checked deploy/IndexNow on 03-todo

[actions]
- git commit 325abf29 / 9f2fbd3b; git push origin main
- npm run deploy (R2 upload 490)
- npm run indexnow -- --tool … --require-live-key (40 URLs HTTP 200)
- docs/seo/reviews/2026-08-12/03-todo.md
