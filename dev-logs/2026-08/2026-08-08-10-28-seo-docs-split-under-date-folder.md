Date: 2026-08-08 10:28
Summary: Split GSC SEO docs into analysis, strategy, and todo under docs/seo/YYYY-MM-DD/.

[question]
优化分析文档放在日期文件夹下，应该分分析复盘文档，下一步策略和todo文档

[try to solve]
Reorganized SEO docs under date folders:

```
docs/seo/YYYY-MM-DD/
  01-analysis-review.md   # analysis / retrospective
  02-next-strategy.md     # next strategy
  03-todo.md              # actionable todo
  …GSC CSV subdirs…
```

- Split the former `docs/seo/2026-08-08-gsc-analysis-and-actions.md` into three files and moved them into `docs/seo/2026-08-08/`
- Updated `docs/seo/README.md` directory convention and example links
- Updated references in `docs/SEO_PUBLISH_CHECKLIST.md`
- Deleted the root-level combined `2026-08-08-gsc-analysis-and-actions.md`

[actions]
- docs/seo/2026-08-08/{01-analysis-review,02-next-strategy,03-todo}.md
- docs/seo/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
- deleted docs/seo/2026-08-08-gsc-analysis-and-actions.md
