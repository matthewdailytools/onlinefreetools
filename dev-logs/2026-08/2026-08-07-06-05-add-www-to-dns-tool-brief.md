Date: 2026-08-07 06:05
Summary: Created the work-tasks brief for the Add WWW to DNS tool (slug add-www-to-dns).

[question]
工具页面立项:add www to dns

[try to solve]
Briefs for `work-tasks/add-www-to-dns/` are complete: `02` is `ready`, `03` is `briefs-ready`.

**Brief summary**
- **slug**: `add-www-to-dns` (`/tools/add-www-to-dns`)
- **Primary direction**: A (A.10 DoH + A.12 webmaster scenarios)
- **Shape**: generate A/CNAME record tables + optional live DoH lookup; clarify apex must not be a bare CNAME, and DNS ≠ 301
- **Related**: `website-headers`, `ip-address`
- **Do not** split near-duplicate thin pages such as `www-cname` / `non-www-to-www`

Next: after user confirmation, implement per `tool-creation.mdc`.

[actions]
- Added `work-tasks/add-www-to-dns/00-request.md`
- Added `work-tasks/add-www-to-dns/01-direction-discussion.md`
- Added `work-tasks/add-www-to-dns/02-tool-info.md`
- Added `work-tasks/add-www-to-dns/03-locale-briefs.md`
