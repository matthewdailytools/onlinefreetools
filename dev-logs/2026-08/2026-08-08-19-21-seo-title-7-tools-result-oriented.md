Date: 2026-08-08 19:21
Summary: Optimized SEO titles for 7 tools (jwt-decoder, file-hash, base64, uuid-generator, password-generator, unix-timestamp, timezone-converter) from param-enumeration to result/scenario-oriented across 10 languages; refreshed work-tasks coverage tables and README.

[question]
Optimize SEO titles (and home-facing title keys) for 7 tools in /Users/xuli/vscodeai/onlinefreetools to be result/scenario-oriented (NOT parameter-enumeration catalogs). Also refresh work-tasks coverage tables.

[try to solve]
Updated `tool_*_title` for 7 tools × 10 locales to “primary search term — result/scenario benefit,” dropping param-catalog subtitles (MD5/SHA, UTF-8/Base64url, Seconds/ms/UTC, Charset Options, etc.). en/zh locked to given anchors; other 8 locales independently rewritten to the same intent.

**Typical changes**
| slug | old H1 tone | new H1 |
|---|---|---|
| file-hash | MD5, SHA-256 & More | Verify Digests in Your Browser |
| base64 | Text, UTF-8 & Base64url | Convert Text in Your Browser |
| password-generator | Charset Options, Local | Create Passwords Locally |
| unix-timestamp | Seconds, ms, UTC & Local | Epoch ↔ Readable Time |
| timezone-converter | Compare Times Across Zones, Local | Compare One Moment Worldwide |

**Also synced**
- Light en/zh description opener edits (drop param stacks; keep ≥120-char steps+examples)
- 7× `work-tasks/{slug}/02-tool-info.md`: coverage tables + SEO Title (en) card + 2026-08-08 optimization note
- 7× `03-locale-briefs.md`: en/zh Title direction + step 2/4 coverage pass rows
- `README.md` zh+en tool-list entries
- `npm run merge:tools` refreshed home `_title` artifacts

[actions]
- src/site/i18n/tools/{7 slugs}/{10 langs}.ts — title (+ partial en/zh desc/description)
- work-tasks/{7 slugs}/02-tool-info.md, 03-locale-briefs.md
- README.md
- scripts/site/i18n-tools.generated.mjs (merge output)
