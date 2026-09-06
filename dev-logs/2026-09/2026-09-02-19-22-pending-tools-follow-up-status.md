Date: 2026-09-02 19:22
Summary: Snapshot of tools still pending follow-up after reconciling tracker, inventory §0, and live catalog.
Visibility: project

[question]
目前待跟进的工具有哪些

[try to solve]
## Context
User asked for the current pending-tool follow-up list. Sources: `docs/seo/keyword-to-tool-tracker.md`, product inventory §0, keyword pool `build` rows, and `src/site/tool-catalog.json`.

## Process
1. Read tracker snapshot (2026-09-02) and decision log.
2. Diff pool `verdict=build` against catalog membership.
3. Cross-check product inventory P0/P1/P2 and text-compare / web-check theme docs.

## Root cause / analysis
Tracker snapshot still lists text-compare four slugs and product P0 as if open, but those are already in catalog (`implemented`). True open queue is web-check capability-owed checkers (no work-tasks yet), text-compare P2 YAML/XML, and long product P2 defer list.

## Solution
Publish the reconciled pending list to the user (chat). No code changes.

## Notes / boundaries
- Opening `work-tasks/` still requires explicit user naming for build candidates.
- Inventory §0 P0 block is stale relative to catalog; prefer catalog + theme docs for “done”.
- Web-check items are `build` owed but `head` → scene/G H1; not week-attack KPI until named.

[actions]
- Reconciled pending tools from tracker, inventory, keyword pool, and catalog (read-only)

## Follow-up marks (2026-09-06)

Reconstruct the 2026-09-02 19:22 open queue (chat list, not stored in the original body). Mark only items **modified and committed after this file existed**. Snapshot time: `2026-09-02 19:22` local. First later ship: `36cdecbd` 2026-09-02 22:11.

### 1. web-check implement queue (was: no work-tasks)

| Status | 2026-09-02 direction | Shipped slug | First commit after this log |
| --- | --- | --- | --- |
| [x] shipped | `robots-txt-checker` | `check-robots-txt-url-blocked` | `36cdecbd` 2026-09-02 22:11 — tools: ship five web-check checkers… |
| [x] shipped | `sitemap-checker` | `find-and-validate-xml-sitemap` | same commit |
| [x] shipped | security.txt checker | `validate-security-txt` | same commit |
| [x] shipped | SSL certificate checker | `check-ssl-certificate-expiration` | same commit |
| [x] shipped | email auth (DMARC/SPF/DKIM) | `spf-dkim-dmarc-checker` | same commit |

Later touch: OG upload `24b64ae5` 2026-09-04 20:09 (`add og r2`).

Live (English default, no `/en`):

- https://onlinefreetools.org/tools/check-robots-txt-url-blocked
- https://onlinefreetools.org/tools/find-and-validate-xml-sitemap
- https://onlinefreetools.org/tools/validate-security-txt
- https://onlinefreetools.org/tools/check-ssl-certificate-expiration
- https://onlinefreetools.org/tools/spf-dkim-dmarc-checker

### 2. text-compare P2 (explicitly not this batch)

| Status | Suggested slug | Note |
| --- | --- | --- |
| [ ] still pending | `yaml-diff-online` | No catalog shard; no commits after this log |
| [ ] still pending | `xml-diff-checker` | Same |

### 3. Product P2 / funnel defer (not named for build)

No `work-tasks/` and no catalog slug after this log for: `safe-paste-cleaner`, `ai-token-counter`, `sql-formatter`, `cron-explainer`, `qr-code-generator`. `vlsm-subnet-calculator` stays **do not create**.

### Out of scope for these marks

PDF N1–N22 defer rows were written **2026-09-03**, after this snapshot. Do not treat them as this file’s original pending list.
