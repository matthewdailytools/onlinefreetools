Date: 2026-08-12 00:10
Summary: Explained sitemap lastmod is per-URL source hash, not full generation timestamp.

[question]
ops的sitemap生成，会根据工具的是否新建更新来更改sitemap的lastmod么，还是会全量按照sitemap生成时间来写lastmod

[try to solve]
lastmod is decided per URL from a content hash of source files: unchanged hash keeps the previous date; new or changed sources get the current HEAD commit date (or today UTC if no git). The whole sitemap is not stamped with “this generation time.” `sitemap-lastmod-state.json` is persisted only on full writes of `public/sitemap.xml`; ops filtered runs write filtered output by default and do not pollute state.

[actions]
- (read-only) scripts/site/sitemap-lastmod.mjs, sitemap.mjs, ops/README §4.0
