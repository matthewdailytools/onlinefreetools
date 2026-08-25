Date: 2026-08-08 19:05
Summary: Implemented file-hash, uuid-generator, and password-generator developer tools with catalog, pages, i18n, and icons.

[question]
Implement THREE developer tools for /Users/xuli/vscodeai/onlinefreetools. Pattern: src/pages/htmlEntityPage.ts. Chinese comments on functions/key vars. Read work-tasks/{slug}/02 and 03.

## 1. file-hash
- catalog: src/site/tool-catalog.d/file-hash.json — related ["base64","text-diff"], faqPrefix tool_file_hash, page fileHashPage renderFileHashPage
- icon public/icons/tools/file-hash.svg
- page: text OR file input; checkboxes/select for MD5, SHA-1, SHA-256, SHA-384, SHA-512; compute hex digests; SHA via crypto.subtle.digest; MD5 via lazy-load crypto-js from CDN (like yaml-json loads js-yaml — document in FAQ that CDN is for MD5 lib only, paste not uploaded). Progress for large files; soft size limit warn. loadSample with text "hello" showing known hashes. References: NIST FIPS 180-4, RFC 1321 for MD5.
- i18n 10 langs prefix tool_file_hash_

## 2. uuid-generator
- catalog related ["password-generator","file-hash"], page uuidGeneratorPage renderUuidGeneratorPage, faqPrefix tool_uuid_generator
- icon uuid-generator.svg
- UI: type select UUID v4 (crypto.randomUUID with getRandomValues fallback) and ULID (implement Crockford base32 ULID locally with getRandomValues — no npm required); count 1-100; Generate/Copy/Sample; auto generate on init. Optional UUID v7 if easy (timestamp-based) — v4+ULID enough. References: RFC 4122, ULID spec.
- i18n 10 langs tool_uuid_generator_

## 3. password-generator
- catalog related ["uuid-generator","file-hash"], page passwordGeneratorPage renderPasswordGeneratorPage, faqPrefix tool_password_generator
- icon password-generator.svg
- UI: length slider, charset toggles (upper/lower/digits/symbols), exclude ambiguous (0OIl1), count; MUST use crypto.getRandomValues (never Math.random); Generate/Copy/Sample; auto on init; visible honest disclaimer (demo-grade, not a vault). References: NIST SP 800-63B or OWASP.
- i18n 10 langs tool_password_generator_

Mark each 02 implemented; update 03; add README entries zh+en. Do NOT merge:tools. Do NOT edit plan file.

Return file list when done.

[try to solve]
Implemented three developer tools following the `htmlEntityPage.ts` pattern:

**file-hash**: text/file tabs; multi-select MD5/SHA-1/256/384/512; Web Crypto SHA + lazy crypto-js MD5; chunked progress for large files with 100MB soft warn; on-load `loadSample("hello")` auto-computes SHA-256.

**uuid-generator**: UUID v4 (randomUUID/getRandomValues) and local ULID (Crockford Base32); count 1–100; Generate/Copy all/Sample; auto sample on init.

**password-generator**: length slider, charset toggles, exclude ambiguous chars, count, CSPRNG, visible disclaimer, auto-generate on init.

Each tool has catalog shard, `*Page.ts`, 10-locale i18n, `public/icons/tools/*.svg`; `02` marked `implemented`, `03` marked `i18n-done`; README zh+en each gained three entries. Did not run `merge:tools`.

[actions]
- src/site/tool-catalog.d/file-hash.json, uuid-generator.json, password-generator.json
- src/pages/fileHashPage.ts, uuidGeneratorPage.ts, passwordGeneratorPage.ts
- src/site/i18n/tools/{file-hash,uuid-generator,password-generator}/*.ts (×10 each)
- public/icons/tools/file-hash.svg, uuid-generator.svg, password-generator.svg
- work-tasks/{slug}/02-tool-info.md, 03-locale-briefs.md
- README.md
