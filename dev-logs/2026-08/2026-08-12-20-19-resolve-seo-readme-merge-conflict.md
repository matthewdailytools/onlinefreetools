Date: 2026-08-12 20:19
Summary: Resolved merge conflict in docs/seo/README.md by keeping both keyword funnel and SERP thumbnail sections.

[question]
解决 seo @docs/competitor-refs/aconvert-2026-08-09/README.md 冲突问题

[try to solve]
The actual unresolved conflict was in `docs/seo/README.md` (the Aconvert snapshot itself had no conflict markers). During merge, local HEAD added the “keyword → tool funnel” index and the remote added the “image / thumbnail” index; both are independent and needed, so both were kept and the merge commit completed. main was 5 commits ahead of origin/main; `public/sitemap.xml` and lastmod state still had unstaged changes and were not part of this merge.

[actions]
- edited `docs/seo/README.md`: removed conflict markers, kept both sections
- `git add docs/seo/README.md` + merge commit `74c3e7a`
