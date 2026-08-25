Date: 2026-08-08 19:05
Summary: Implemented JWT decoder tool page, ten-language i18n, and README entries.

[question]
Implement the jwt-decoder tool for /Users/xuli/vscodeai/onlinefreetools (page, i18n, work-tasks updates, README). Do NOT run merge:tools.

[try to solve]
Finished the JWT decoder tool:

1. **`src/pages/jwtDecoderPage.ts`** — follows `htmlEntityPage.ts`: Tier 0 native `split` + Base64url + `JSON.parse`; UI has JWT input, Decode / Copy header / Copy payload / Load sample / Clear; Header/Payload JSON out, Signature raw text, in-panel “no signature verify” alert; exp/iat/nbf as UTC+local; soft warn above 8KB; segment/Base64url/JSON errors; `loadSample()` auto-decodes on enter; References RFC 7519/7515.

2. **`src/site/i18n/tools/jwt-decoder/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`** — ten independent locale rewrites per `03-locale-briefs.md`; key prefix `tool_jwt_decoder_`; title/desc/description/How/Rules/Example/Use cases/FAQ/UI labels.

3. **`work-tasks/jwt-decoder/02-tool-info.md`** — status → `implemented`

4. **`work-tasks/jwt-decoder/03-locale-briefs.md`** — multi-round notes, banned-word checks, status → `i18n-done`

5. **`README.md`** — zh+en tool lists each gained a JWT decoder entry

Did not run `merge:tools` (parent task owns that).

[actions]
- src/pages/jwtDecoderPage.ts (new)
- src/site/i18n/tools/jwt-decoder/*.ts (new ×10)
- work-tasks/jwt-decoder/02-tool-info.md, 03-locale-briefs.md
- README.md
