Date: 2026-08-08 12:07
Summary: Analyzed title/keyword coverage for color-from-image, image-merge, and image-overlay; listed gaps and prioritized optimizations without code changes.

[question]
分析新建的三个工具的title和搜索关键词覆盖是否还有优化空间

[try to solve]
Verdict: yes, moderate optimization headroom — primary intents are covered; secondary high-volume variants (collage / dominant / logo watermark / 拼图 / 取色) sit more in description/FAQ than H1. Merge/overlay subtitles lean parameter-list; color title does not yet surface click-pick. Recommended: soft title rewrites (result-first), push collage/dominant/logo into description+FAQ+home desc, keep platform sizes and watermark text out of H1 to avoid intent collision.

[actions]
- Read current titles in `src/site/i18n/*.ts` and home keys in `scripts/site/i18n.mjs`
- Compared with `work-tasks/*/03-locale-briefs.md` search terms
