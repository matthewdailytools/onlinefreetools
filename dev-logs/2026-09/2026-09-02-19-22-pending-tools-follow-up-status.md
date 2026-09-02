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
