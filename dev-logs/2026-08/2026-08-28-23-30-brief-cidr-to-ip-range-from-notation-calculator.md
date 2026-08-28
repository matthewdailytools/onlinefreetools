Date: 2026-08-28 23:30
Summary: Opened harvest-page brief for cidr-to-ip-range from user request “cidr notation calculator,” with H1 CIDR to IP range and coverage gate 0b green.

[question]
立项：cidr notation calculator

[try to solve]
Mapped the head-adjacent query to the existing CIDR Keyword Planner harvest slug instead of creating a doorway `cidr-notation-calculator` URL.

- Slug / path: `cidr-to-ip-range` → `/tools/cidr-to-ip-range`
- H1: **CIDR to IP range** (not “CIDR Calculator” / “CIDR Notation Calculator”)
- Absorb into this page: notation calculator, generic CIDR calculators, mask ↔ prefix, capped expand, contains/overlap, light visual, Proxmox use-case hook
- Out of scope on this page: IPv6 (→ `ipv6-cidr`), reverse start–end→CIDR (→ `ip-range-to-cidr`), private-prefix classifier, cheat sheet, VLSM/VPC planners
- Deliverables: `work-tasks/cidr-to-ip-range/` (`00`–`03`), status `02=ready` / `03=briefs-ready`, Ads/Planner long-tail table + intent review filled
- Gate: `npm run coverage:gate -- --slug=cidr-to-ip-range --phase=0b` OK
- Cluster role: harvest / title_gap_fallback — does not take the weekly attack build slot
- Next session (when implementing): catalog + Page + en i18n → phase=2 → other locales → phase=4 → `verify:tool`

[actions]
- Added `work-tasks/cidr-to-ip-range/{00,01,02,03}-*.md`
- Updated `docs/seo/keyword-to-tool-tracker.md` and planner §5 note for the opened work-tasks folder
