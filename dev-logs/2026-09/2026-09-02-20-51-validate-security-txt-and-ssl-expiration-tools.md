Date: 2026-09-02 20:51
Summary: Implemented validate-security-txt and check-ssl-certificate-expiration pages with ten-locale i18n and coverage gates (no build:site).
Visibility: people

[question]
Implement TWO tools fully… ONE AFTER THE OTHER… Tool A: validate-security-txt … Tool B: check-ssl-certificate-expiration … NO build:site. Return gate summaries for both.

[try to solve]
## Context
Both tools already had Worker APIs, catalog shards, and icons. Briefs were `ready` / `briefs-ready` with phase 0b coverage tables. The request was to ship Page + ten-locale i18n serially (finish Tool A gates before Tool B Page/i18n), update README ZH+EN, mark `02=implemented` and `03` 1b/2b `i18n-done`, without running `build:site`.

## Process
1. Confirmed Tool A `coverage:gate --phase=0b` green.
2. Added `src/pages/validateSecurityTxtPage.ts` (`opts`, PREFIX `tool_validate_security_txt`): URL/domain input, Validate/Sample/Clear, result badges for found / Contact / Expires / missingRequired / expired / preview; `loadSample` → `https://www.google.com/`; References RFC 9116 + securitytxt.org.
3. Wrote en master i18n → `phase=2` + `lint:tool-page` → nine locales by brief → `phase=4` / `all`; README entries; `02=implemented`, `03=i18n-done`.
4. Only then started Tool B: `checkSslCertificateExpirationPage.ts` (hostname → `/api/tools/check-ssl-certificate-expiration?host=`), UI shows newest notBefore/notAfter/issuer/daysLeft/expired + CT-lag disclaimer; `loadSample` → `example.com`.
5. Same i18n/coverage/README pattern for Tool B; Rules/FAQ state CT via crt.sh is **not** a live TLS handshake.

## Root cause / analysis
Workers cannot read peer certificates from `fetch`, so SSL expiry must use CT (crt.sh) with an honest disclaimer. Security.txt validation is a plain fetch+parse of `/.well-known/security.txt` with RFC 9116 field checks. Serial Page/i18n avoids cross-slug coverage gaps.

## Solution
Both tools are wired with pages, ten i18n shards, merge:tools, and green coverage/lint gates. Catalog `updatedAt` touched. Homepage prerender intentionally skipped per request (`NO build:site`).

## Notes / boundaries
- Run `npm run build:site` before deploy so home cards and prerendered HTML appear.
- Tool A sample uses google.com (user override vs brief onlinefreetools.org).
- crt.sh may rate-limit; UI surfaces fetch errors.

[actions]
- Added `src/pages/validateSecurityTxtPage.ts`, `src/pages/checkSslCertificateExpirationPage.ts`
- Added `src/site/i18n/tools/validate-security-txt/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Added `src/site/i18n/tools/check-ssl-certificate-expiration/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated work-tasks briefs to implemented / i18n-done; README ZH+EN list entries
- Ran `merge:tools`, `coverage:gate` 2/4/all, `lint:tool-page` for both slugs
