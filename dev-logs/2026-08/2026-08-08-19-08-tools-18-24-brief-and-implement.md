Date: 2026-08-08 19:08
Summary: Implemented developer tools inventory rows 18–24 (briefs + pages + i18n).

[question]
分步骤立项工具 docs/2026-08-08-tool-inventory-table.md 1. 开发者 / 文本与数据中18到24；然后分步骤实现

[try to solve]
已完成清单 §1 序号 18–24 共七个开发者工具的立项与实现。

**立项**：各 slug 已有 `work-tasks/{slug}/00–03`（`02=implemented`，`03=i18n-done`）。

**已上线工具**：
| # | slug | 路径 |
|---|---|---|
| 18 | jwt-decoder | /tools/jwt-decoder |
| 19 | file-hash | /tools/file-hash |
| 20 | base64 | /tools/base64 |
| 21 | uuid-generator | /tools/uuid-generator |
| 22 | password-generator | /tools/password-generator |
| 23 | unix-timestamp | /tools/unix-timestamp |
| 24 | timezone-converter | /tools/timezone-converter |

要点：JWT 仅 Base64url 解码、不验签；哈希 SHA 用 Web Crypto、MD5 懒加载 crypto-js；base64 与 image-to-base64 分工；密码仅用 getRandomValues；时区用 Intl，非 meeting-timezone-pack。

验收：`npm run merge:tools`、`npm run lint:seo` 通过；catalog 现 44 个工具；inventory 18–24 已标「已上线」；README 中英清单已登记。

[actions]
- work-tasks/{jwt-decoder,file-hash,base64,uuid-generator,password-generator,unix-timestamp,timezone-converter}/
- src/site/tool-catalog.d/{同上}.json
- src/pages/{jwtDecoder,fileHash,base64,uuidGenerator,passwordGenerator,unixTimestamp,timezoneConverter}Page.ts
- src/site/i18n/tools/{slug}/{10 langs}.ts
- public/icons/tools/{slug}.svg
- README.md、docs/2026-08-08-tool-inventory-table.md
- npm run merge:tools && npm run lint:seo
