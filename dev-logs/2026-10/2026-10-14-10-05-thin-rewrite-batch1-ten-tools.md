Date: 2026-10-14 10:05
Summary: Rewrote thin-queue tools #1–#10 (IG + converter UI gates), then incremental R2 upload and deploy for batch 1.
Visibility: people

[question]
按顺序逐一处理工具直到处理完成，每处理10个工具完毕，进行增量deploy和upload r2

## Tool links (English)
- https://onlinefreetools.org/tools/compare-two-pdfs
- https://onlinefreetools.org/tools/flip-image
- https://onlinefreetools.org/tools/how-to-calculate-acceleration
- https://onlinefreetools.org/tools/how-to-calculate-debt-payoff
- https://onlinefreetools.org/tools/how-to-calculate-gradient
- https://onlinefreetools.org/tools/how-to-calculate-mean
- https://onlinefreetools.org/tools/how-to-calculate-triangle-area
- https://onlinefreetools.org/tools/image-to-base64
- https://onlinefreetools.org/tools/images-to-ppt
- https://onlinefreetools.org/tools/square-feet

[try to solve]
## Context
The 2026-10-13 SEO review queued 87 thin tool pages for people-first rewrites (more information gain, no scaled-content spam). The standing mandate is to process them in queue order and, after every 10 finished slugs, run incremental `upload:r2` plus `git:deploy`. Batch 1 covers queue rows #1–#10. Earlier in the same programme, `/devlogs/` stayed crawlable in robots.txt but every log page and the Worker `/devlogs/` routes send `noindex, nofollow` and sitemap entries for logs were cleared — so log-like thin pages do not compete with tool URLs.

## Process
1. For each slug: rewrite Page.ts interaction where needed, refresh English master copy, rewrite `02` / `03` coverage tables (0b / 1b / 2b), run three locale subagents (zh/ja/ar, es/pt/fr, de/ru/id), then `oft-keys` → `bump-tool-updated-at` → `coverage:gate` → `verify:tool` → isolation → browser smoke.
2. Calculators (#1–#5, #7): fixed factual working lines (for example acceleration `par()` so negatives do not render as `+ -9.8`; debt-payoff sample duration corrected to 29 months), richer formula / rules / FAQ / use-case IG.
3. Converters (#6, #8–#10): applied `converter-input-ui` + `converter-serp-landing-seo` — primary verb matching How steps, Advanced settings collapsed, gold-standard `.bcw-hud`, snippet-sized meta (long es/pt/fr/de/ru/id descriptions on compare-two-pdfs trimmed after verify).
4. Notable bugfixes: `images-to-ppt` serial decode + stats `{n}` fill; `compare-two-pdfs` Clear no longer reloads sample; `flip-image` Apply → Flip; `image-to-base64` Encode/Decode as explicit primary buttons instead of encode-on-select only.
5. After #10: explicit `node scripts/build-site.mjs --slug=<10 slugs>` (100 HTML files), then `npm run upload:r2` behind `R2_HTTPS_PROXY=socks5h://127.0.0.1:8888`, commit, `npm run git:deploy`.

## Root cause / analysis
Thin scores came from short titles, generic FAQ/use cases, How copy that did not match button labels, and converter pages missing progressive disclosure / visible progress. Local static-server MIME for `.mjs` as `text/plain` also blocked PDF.js during browser acceptance until a custom MIME server on a fresh port was used — production Cloudflare headers are unaffected.

## Solution
All ten slugs marked `done` in `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`. Each passed keys match, coverage gate phase=all, `verify:tool`, and isolation. Browser checks confirmed sample outputs (PDF thirty/sixty highlights; flip A↔B colours; Base64 data URL) plus Clear empties without re-sampling and empty primary actions show errors.

## Notes / boundaries
- Skills applied: `tool-coverage-pass`, `tool-token-efficiency`, and for converters also `converter-input-ui` + `converter-serp-landing-seo`.
- Do not add `Disallow: /devlogs/` until GSC confirms deindexing.
- Continue queue from #11 after this deploy; next deploy after #20 (or the final partial batch).
- Untracked `.agents/skills/*/example-webpage-to-jpg.md` files are user-owned and were left out of the commit.

[actions]
- Rewrote pages / i18n / work-tasks for queue #1–#10
- Updated `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md` statuses
- `node scripts/build-site.mjs --slug=<batch1>`
- `npm run upload:r2` (hash-incremental, SOCKS proxy)
- Commit + `npm run git:deploy`
