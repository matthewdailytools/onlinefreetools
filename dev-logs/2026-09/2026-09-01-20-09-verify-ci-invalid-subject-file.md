Date: 2026-09-01 20:09
Summary: GitHub Actions Verify failed because file-metadata-analyzer used invalid taxonomy subject "file"; fixed to "data".

[question]
收到 一个GitHub Actions 的工作流运行失败通知，具体是名为 “Verify” 的任务在 27 秒内失败

[try to solve]
- Failed run: Verify on push to `main` for commit `ff0d78b6` (“tools: ship P1 scene queue…”) — https://github.com/matthewdailytools/onlinefreetools/actions/runs/33497985687
- Job timeline (~27s): Checkout / Setup Node / `npm ci` succeeded; the **Verify** step (`npm run verify`) failed.
- Local reproduction: `npm run lint:taxonomy` exits 1 with `file-metadata-analyzer: missing/invalid subject file`.
- Root cause: catalog shard set `"subject": "file"`, but allowed subjects are only `image|pdf|text|number|color|network|unit|data`. The log line’s trailing “file” is the illegal value, not a missing file on disk.
- Fix: set `subject` to `data` (same as `file-hash` / `create-zip-file`), then `merge:tools`. `lint:taxonomy` passes afterward.

[actions]
- `src/site/tool-catalog.d/file-metadata-analyzer.json`: `subject` `file` → `data`
- `src/site/tool-catalog.json`: regenerated via `merge:tools`
