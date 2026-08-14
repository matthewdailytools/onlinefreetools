Date: 2026-08-13 23:59
Summary: Recreated the magnet-link-decoder tool brief and passed the 0b coverage gate.

[question]
重新立项：magnet-link-decoder

[try to solve]
Recreated `work-tasks/magnet-link-decoder/` as a ready new-tool brief. The tool is scoped as a browser-only Magnet Link Decoder / Magnet URI Parser that parses `xt`, `dn`, `tr`, `xl`, `ws`, `xs`, and peer hints, explains info hash and tracker fields, and explicitly does not download torrents, fetch metadata, contact trackers, or verify content legality. Filled the 0b slug/title/keyword/description coverage table, ten-locale search briefs, and implementation-facing interaction spec with an auto-running sample.

[actions]
- Updated `work-tasks/magnet-link-decoder/00-request.md`.
- Updated `work-tasks/magnet-link-decoder/01-direction-discussion.md`.
- Updated `work-tasks/magnet-link-decoder/02-tool-info.md`.
- Updated `work-tasks/magnet-link-decoder/03-locale-briefs.md`.
- Ran `npm run coverage:gate -- --slug=magnet-link-decoder --phase=0b`.
