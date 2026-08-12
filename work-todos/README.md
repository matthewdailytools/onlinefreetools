# 每日工作 Todo（work-todos）

按**月**归档、按**日**一篇，记录当天可勾选的工作项（与 `dev-logs/` 对话日志、`work-tasks/{slug}/` 工具立项 brief、`docs/seo/*/03-todo.md` SEO 专题 todo **分开**）。

## 路径

| 项 | 约定 |
|----|------|
| 根目录 | `work-todos/` |
| 月份目录 | `work-todos/YYYY-MM/`（例：`work-todos/2026-08/`） |
| 日文件 | `YYYY-MM-DD.md`（例：`2026-08-12.md`） |

本地日期；一天一篇，可跨日把未完成项抄到下一天并勾掉来源。

## 日文件模板

```markdown
# YYYY-MM-DD

## Focus
- （当天主目标，1–3 条）

## Todo
- [ ] …

## Done
- [x] …

## Notes
- （可选：阻塞、明日接续）
```

## 与其它目录的边界

- **不写**完整 Q&A → 用 `dev-logs/`
- **不写**单工具立项 00–03 → 用 `work-tasks/{slug}/`
- **不写** SEO 专题复盘/策略 → 用 `docs/seo/YYYY-MM-DD/`
