Date: 2026-08-07 06:55
Summary: Add bash wrapper for IndexNow submit under ops/seo.

[question]
有没有bash脚本

[try to solve]
原先没有，只有 Node。已按 ops/dev 模式新增 `ops/seo/submit-indexnow.sh`（参数原样转发到 `submit-indexnow.mjs`），并更新 `ops/README.md`。用法示例：`./ops/seo/submit-indexnow.sh --check-key`（无需 npm 的 `--`）。`--dry-run --limit 1` 验证通过。

[actions]
- added: `ops/seo/submit-indexnow.sh`
- modified: `ops/README.md`
