Date: 2026-08-08 22:21
Summary: Put RDAP above DNS on domain-lookup and added domain format check/auto-normalize.

[question]
注册信息（RDAP）
放在dns上方;增加域名格式核对和自动校准能力。

[try to solve]
Results order is now Registration (RDAP) above DNS; copy-summary button moved to the RDAP card. On blur/submit, input is format-checked and auto-normalized (strip URL/port/path/quotes, lowercase, trim trailing dot, IDN→punycode), written back with a “normalized to …” hint. Server `normalizeAndValidateHostname` matched; domain-lookup uses `requireDot: true`. Ten locales gained `domain_normalized` / `err_format` and were merged.

[actions]
- `src/pages/domainLookupPage.ts`
- `src/endpoints/dnsDoh.ts`
- `src/endpoints/domainLookup.ts`
- `src/site/i18n/tools/domain-lookup/*` + merge outputs
