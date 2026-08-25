Date: 2026-08-08 19:08
Summary: Implemented developer tools inventory rows 18–24 (briefs + pages + i18n).

[question]
分步骤立项工具 docs/2026-08-08-tool-inventory-table.md 1. 开发者 / 文本与数据中18到24；然后分步骤实现

[try to solve]
Finished briefs and implementation for inventory §1 rows 18–24 (seven developer tools).

**Briefs**: each slug has `work-tasks/{slug}/00–03` (`02=implemented`, `03=i18n-done`).

**Tools shipped**:
| # | slug | path |
|---|---|---|
| 18 | jwt-decoder | /tools/jwt-decoder |
| 19 | file-hash | /tools/file-hash |
| 20 | base64 | /tools/base64 |
| 21 | uuid-generator | /tools/uuid-generator |
| 22 | password-generator | /tools/password-generator |
| 23 | unix-timestamp | /tools/unix-timestamp |
| 24 | timezone-converter | /tools/timezone-converter |

Notes: JWT is Base64url decode only (no verify); hashes use Web Crypto for SHA and lazy crypto-js for MD5; base64 stays distinct from image-to-base64; passwords use getRandomValues only; timezones use Intl (not meeting-timezone-pack).

Checks: `npm run merge:tools` and `npm run lint:seo` passed; catalog now 44 tools; inventory 18–24 marked live; README zh+en lists updated.

[actions]
- work-tasks/{jwt-decoder,file-hash,base64,uuid-generator,password-generator,unix-timestamp,timezone-converter}/
- src/site/tool-catalog.d/{same}.json
- src/pages/{jwtDecoder,fileHash,base64,uuidGenerator,passwordGenerator,unixTimestamp,timezoneConverter}Page.ts
- src/site/i18n/tools/{slug}/{10 langs}.ts
- public/icons/tools/{slug}.svg
- README.md, docs/2026-08-08-tool-inventory-table.md
- npm run merge:tools && npm run lint:seo
