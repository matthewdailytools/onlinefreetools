Date: 2026-08-07 06:55
Summary: Added a bash wrapper for IndexNow submit under ops/seo.

[question]
有没有bash脚本

[try to solve]
There was none before—only Node. Added `ops/seo/submit-indexnow.sh` in the same style as ops/dev (forwards args to `submit-indexnow.mjs`) and updated `ops/README.md`. Example: `./ops/seo/submit-indexnow.sh --check-key` (no npm `--` needed). Verified with `--dry-run --limit 1`.

[actions]
- added: `ops/seo/submit-indexnow.sh`
- modified: `ops/README.md`
