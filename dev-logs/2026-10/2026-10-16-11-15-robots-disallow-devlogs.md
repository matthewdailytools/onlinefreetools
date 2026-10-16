Date: 2026-10-16 11:15
Summary: Added Disallow: /devlogs/ to live robots.txt after the noindex phase, and continued thin-rewrite queue at markup/VAT.
Visibility: people

[question]
更新线上 robots.txt, 禁止爬取devlog，然后继续完成之前中断的任务

[try to solve]
## Context
Devlogs already send `noindex,nofollow` and are excluded from the sitemap. The second step was to stop crawlers discovering new `/devlogs/` paths via robots.txt once that phase was intentional.

## Process
1. Updated `public/robots.txt` with `Disallow: /devlogs/` (kept `Disallow: /api/` and Sitemap).
2. Synced `.cursor/rules/dev-logs.mdc`, `seo-html-defaults.mdc`, and `docs/seo/reviews/2026-10-13/03-todo.md`.
3. Committed and `npm run git:deploy`; verified live `https://onlinefreetools.org/robots.txt` shows the new Disallow.
4. Resumed thin-rewrite: finished #51 one-rep-max, #52 markup (verify:tool OK); started #53 VAT.

## Root cause / analysis
Leaving `/devlogs/` crawlable was intentional so bots could read noindex. With noindex already deployed site-wide, Disallow reduces discovery of new log URLs without removing the meta/`X-Robots-Tag` safety net.

## Solution
Live robots.txt now blocks `/devlogs/`. Pages still emit noindex. Thin-rewrite queue continues from #53.

## Notes / boundaries
- Skills for tool work: tool-coverage-pass, tool-token-efficiency.
- Do not commit untracked `.agents/skills/*/example-webpage-to-jpg.md`.

[actions]
- public/robots.txt + rules/docs sync; git:deploy
- how-to-calculate-one-rep-max commit; markup rewrite verified
