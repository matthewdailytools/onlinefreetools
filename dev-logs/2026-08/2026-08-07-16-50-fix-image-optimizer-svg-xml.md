Date: 2026-08-07 16:50
Summary: Fixed illegal XML comment chars in image-optimizer.svg and added an icon lint.

[question]
http://localhost:8787/icons/tools/image-optimizer.svg 有错，分析原因，避免后续相同错误

[try to solve]
Same root cause as earlier image-exif / image-compress icons: SVG comments contained illegal XML C0 controls (here 0x18 / 0x16 / 0x1f); the browser reported `xmlParseComment: invalid xmlChar`. Often caused by Chinese comments corrupted through a write pipeline.

Rewrote `image-optimizer.svg` with ASCII comments; added `scripts/validate-tool-icons.mjs` into `lint:seo`; documented in `tool-creation.mdc` that icon comments should prefer ASCII.

[actions]
- Fixed `public/icons/tools/image-optimizer.svg`
- Added `scripts/validate-tool-icons.mjs`; updated `scripts/validate-tool-seo.mjs`, `.cursor/rules/tool-creation.mdc`
