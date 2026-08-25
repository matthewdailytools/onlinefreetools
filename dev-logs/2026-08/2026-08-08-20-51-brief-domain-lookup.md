Date: 2026-08-08 20:51
Summary: Created work-tasks brief for domain-lookup (ready + 0b gate green); updated inventory row #9.

[question]
立项：domain-lookup

[try to solve]
Finished `domain-lookup` brief and passed `coverage:gate --phase=0b`.

**Artifacts** (`work-tasks/domain-lookup/`)

- `00-request.md`: original ask (domain lookup how-to + brief)
- `01-direction-discussion.md`: primary direction A.10; do not split thin whois/dns/rdap pages
- `02-tool-info.md`: status `ready`; MVP = DoH (extend MX/NS/TXT/SOA) + RDAP sections; on-enter sample `example.com`; related: `add-www-to-dns` / `website-headers` / `ip-address`
- `03-locale-briefs.md`: ten-locale briefs + `0b` row; status `briefs-ready`

**SEO 0b**

- H1 direction: `Domain Lookup — Check DNS Records & Registration Online`
- Dropped parameter-enumeration tone; whois/dns/expiry land in desc/FAQ
- `npm run coverage:gate -- --slug=domain-lookup --phase=0b` → OK

**Inventory**

- `docs/2026-08-08-tool-inventory-table.md` row 9: `domain-lookup`, progress “in progress”; table covers 1–116

Next: implement page + i18n only after an explicit implement request, via `tool-creation` + coverage steps 2/4.

[actions]
- Created `work-tasks/domain-lookup/{00,01,02,03}.md`
- Updated `docs/2026-08-08-tool-inventory-table.md`
- `npm run coverage:gate -- --slug=domain-lookup --phase=0b`
