Date: 2026-08-13 00:07
Summary: Explain PAGES_CACHE_VERSION Cache API busting and R2 verify alignment.

[question]
PAGES_CACHE_VERSION 的逻辑是什么？

[try to solve]
`PAGES_CACHE_VERSION` is a string in wrangler vars (currently `"3"`). On HTML read, the Workers Cache API key = public URL + `__ce=identity` + `__v=<version>`. Bumping the version changes the key → old entries miss → Worker gunzips from R2 and rewrites the cache. Browser side uses max-age=0; this mainly controls the edge Cache (s-maxage=1d).

`upload:r2` writes the same version into R2 `_meta/pages-build.json`; `verify:r2` / live checks alignment with Worker env to avoid “new Worker + old R2 manifest” or the reverse. It does not change R2 object keys and does not auto-bump with content—after HTML changes you must upload; bump and deploy only when you need to flush stale edge pages immediately.

[actions]
- Explanation only; no code changes
