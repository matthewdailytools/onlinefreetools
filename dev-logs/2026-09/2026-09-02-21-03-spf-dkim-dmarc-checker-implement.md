Date: 2026-09-02 21:03
Summary: Implemented the SPF DKIM DMARC checker page with ten-locale i18n, DoH result panels, and green coverage/lint gates (no build:site).
Visibility: people

[question]
Implement FULL tool `spf-dkim-dmarc-checker` — Page (opts), ten i18n shards, work-tasks implemented/i18n-done, README ZH+EN, gates until green; NO build:site.

[try to solve]
## Context
Catalog, icon, and Worker API `GET /api/tools/spf-dkim-dmarc-checker?domain=&selector=` were already wired. Remaining work was the interactive page, search-localized copy for ten languages, brief status updates, README list entries, and coverage/lint gates — without running `build:site`.

## Process
1. Read work-tasks `02`/`03`, catalog shard, and API response shape (SPF/DMARC/DKIM blocks with `found`, `record`, `explain`, `allQualifier` / `policy` / `hasPublicKey`).
2. Modeled the page on existing edge DNS-style tools (`checkRobotsTxtUrlBlockedPage`, `checkSslCertificateExpirationPage`): `opts` export, PREFIX `tool_spf_dkim_dmarc_checker`, Check / Load sample / Clear, privacy note, IG sections, RFC references.
3. Built three result panels that surface found badges, policy fields, and record text; `loadSample` uses `google.com` + selector `google` and auto-runs on entry.
4. Wrote en master copy first (H1 “SPF DKIM DMARC checker”, FAQ≥3, how_items, rules, usecases, RFC 7208/6376/7489 refs), then independently rewrote zh/es/ar/pt/id/fr/ja/ru/de against locale briefs.
5. Marked `02` → `implemented`, `03` → `i18n-done` with multipass rows `1b`/`2b`, updated README ZH+EN tool lists, `merge:tools`, and ran coverage phase 2/4/all plus `lint:tool-page`.

## Root cause / analysis
No missing API; the gap was the UI + i18n delivery path. Sample domain was aligned to the implement request (`google.com`) rather than the earlier brief’s `example.com`, and Example/FAQ copy was updated to match so loadSample and indexed Example stay consistent. Edge privacy must say domain/selector go to the Worker for DoH — not a false “no upload” claim (`localProcessing: false`).

## Solution
- Page: `src/pages/spfDkimDmarcCheckerPage.ts` (opts, domain + DKIM selector, three auth panels).
- i18n: `src/site/i18n/tools/spf-dkim-dmarc-checker/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`.
- Briefs/README updated; gates green as requested (no `build:site`).

## Notes / boundaries
- Does not probe mailbox existence or rewrite DNS zones.
- Ship still needs a later `build:site` / home refresh when the user asks for full deploy verification.
- Related tools remain `domain-lookup` and `website-headers`.

[actions]
- Added `src/pages/spfDkimDmarcCheckerPage.ts`
- Added ten i18n shards under `src/site/i18n/tools/spf-dkim-dmarc-checker/`
- Updated `work-tasks/spf-dkim-dmarc-checker/02-tool-info.md`, `03-locale-briefs.md`, `README.md`
- Ran `npm run merge:tools`; coverage:gate phase=2/4/all; lint:tool-page — all OK
