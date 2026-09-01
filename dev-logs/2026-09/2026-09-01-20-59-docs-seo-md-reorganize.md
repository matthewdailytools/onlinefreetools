Date: 2026-09-01 20:59
Summary: Reorganized docs/seo with a hub README, fixed theme folder names, and repaired broken review links.
Visibility: people

[question]
整理docs/seo下的md文档

[try to solve]
## Context
`docs/seo/README.md` still read as a GSC-only archive while the tree had grown to include keyword funnel playbooks, `keywords/{theme}/`, serp-batches, reviews, and one-off plans. Theme folder names were inconsistent (`magnet` vs documented `measuring-magnet-fields`; `Compare-Text` vs kebab-case), and the SERP thumbnail plan linked to a non-existent `../2026-08-08/` path.

## Process
1. Inventoried all `.md` under `docs/seo` and mapped roles.
2. Rewrote the hub README as a directory map + role table (strategy files stay at root so Skill/rules paths do not break).
3. Renamed `keywords/magnet/` → `measuring-magnet-fields/` and the volume table to `keywords-search-volumns.txt` (matches work-tasks links).
4. Renamed `keywords/Compare-Text/` → `compare-text-seeds/`; updated text-compare / text-diff / playbook pointers.
5. Added `reviews/README.md` and theme READMEs; fixed `2026-08-12/serp-image-thumbnail-plan.md` → `reviews/2026-08-08/…`.

## Root cause / analysis
Growth without a hub left duplicate mental models (GSC vs funnel vs themes). Physical moves of root strategy files would break Skill/ops; organizing via index + kebab theme folders is the low-risk fix.

## Solution
Entry point: `docs/seo/README.md`. Themes listed in `keywords/README.md`. Strategy/playbook paths unchanged at `docs/seo/*.md`.

## Notes / boundaries
Historical decision-log / dev-log prose may still say “Compare-Text”; live paths use `compare-text-seeds`.

[actions]
- Rewrote `docs/seo/README.md`, `keywords/README.md`; added `reviews/README.md`
- Renamed theme folders; updated cross-links; fixed thumbnail plan link
