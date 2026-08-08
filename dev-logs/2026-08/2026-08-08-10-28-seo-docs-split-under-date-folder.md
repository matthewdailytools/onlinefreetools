Date: 2026-08-08 10:28
Summary: Split GSC SEO docs into analysis, strategy, and todo under docs/seo/YYYY-MM-DD/.

[question]
优化分析文档放在日期文件夹下，应该分分析复盘文档，下一步策略和todo文档

[try to solve]
已按日期文件夹重组 SEO 文档结构：

```
docs/seo/YYYY-MM-DD/
  01-analysis-review.md   # 分析复盘
  02-next-strategy.md     # 下一步策略
  03-todo.md              # 可执行 Todo
  …GSC CSV 子目录…
```

- 将原 `docs/seo/2026-08-08-gsc-analysis-and-actions.md` 拆为三份并移入 `docs/seo/2026-08-08/`
- 更新 `docs/seo/README.md` 目录约定与示例链接
- 更新 `docs/SEO_PUBLISH_CHECKLIST.md` 引用
- 删除根目录下的合并版 `2026-08-08-gsc-analysis-and-actions.md`

[actions]
- docs/seo/2026-08-08/{01-analysis-review,02-next-strategy,03-todo}.md
- docs/seo/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
- deleted docs/seo/2026-08-08-gsc-analysis-and-actions.md
