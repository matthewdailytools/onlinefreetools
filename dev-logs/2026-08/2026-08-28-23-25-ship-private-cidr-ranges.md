Date: 2026-08-28 23:25
Summary: Shipped private-cidr-ranges (classify IP/CIDR against RFC1918/CGNAT/ULA) with ten-locale i18n and verify:tool green.

[question]
实现工具

[try to solve]
Implemented Session B–D for `private-cidr-ranges` under token-efficiency constraints:

- Catalog shard (`page.style: opts`), `privateCidrRangesPage.ts` (paste IP/CIDR → longest-prefix matches; clickable reference table; CGNAT Tailscale tip), ASCII icon.
- Default sample `100.64.1.10` via `loadSample()` on enter.
- Ten-locale shards with local H1 phrases; `coverage:gate` phase 2/4/all green.
- Fixed en meta description to include “Example:” for SEO keyword gate; added inbound `related` from `ip-range-to-cidr` and `terraform-cidrsubnet`.
- README ZH/EN tool list entries; `02` → `implemented`; `03` → `i18n-done`.
- `npm run verify:tool -- --slug=private-cidr-ranges` OK.

[actions]
- Added `src/site/tool-catalog.d/private-cidr-ranges.json`, `src/pages/privateCidrRangesPage.ts`, `public/icons/tools/private-cidr-ranges.svg`, `src/site/i18n/tools/private-cidr-ranges/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated related on `ip-range-to-cidr` / `terraform-cidrsubnet` shards; README tool lists; work-tasks 02/03
- Ran `npm run verify:tool -- --slug=private-cidr-ranges`
