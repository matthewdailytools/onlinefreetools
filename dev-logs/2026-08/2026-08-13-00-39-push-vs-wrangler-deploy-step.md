Date: 2026-08-13 00:39
Summary: GitHub push can replace bare wrangler deploy if same commit and live verify waits for CF.

[question]
如下 npx wrangler deploy 这一步是否可以用 github 的 push 来替代？ npm run build:site / lint / upload:r2 / verify:r2 / wrangler deploy / verify:r2:live

[try to solve]
Yes for the “deploy Worker+Assets only” step, if the pushed commit matches the just-built/uploaded code and `PAGES_CACHE_VERSION`, and you run `verify:r2:live` only after CF pull-deploy finishes (async—do not probe immediately). It does not replace upload/verify; the Git path also will not include uncommitted local changes.

Recommended order: local build+lint+upload+verify → commit/push (triggers CF) → wait for deploy success → verify:r2:live. If the CF Build command also runs upload, that duplicates local upload—pick one.

[actions]
- Read-only explanation
