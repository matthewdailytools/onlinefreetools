Date: 2026-08-28 23:00
Summary: Briefing rules now require Google/Bing Keyword Planner long-tails to be woven into copy and covered by tool capabilities before ready.

[question]
在立项规则文件中增加：如果意图slug有分析根据谷歌或者bing ads跑出所属的长尾关键词，tools要融入长尾关键词，并且功能覆盖长尾关键词。

[try to solve]
When an intent slug already has Google Keyword Planner and/or Bing Keyword Planner (Ads) long-tail analysis under `docs/seo/keywords/` (or related funnel artifacts), work-task briefing must satisfy two layers before `02` can be marked `ready` or page-module checklists ticked:

1. **Copy absorb** — assigned long-tails land in visible H1 / description / FAQ / Use cases (not only in planner docs).
2. **Feature cover** — interactive How / Example / results must complete the tasks those long-tails imply (e.g. “ip range to cidr” needs reverse range→prefix, not only CIDR→hosts).

Drop / intentional non-cover / doorway bans still apply. Updated: `work-tasks-tool-brief.mdc` (new section + workflow/禁止), `_template/02-tool-info.md` (Ads/Planner table), `tool-i18n-localization.mdc` (0b/0i), `tool-coverage-pass` Skill, and `work-tasks/README.md`.

[actions]
- `.cursor/rules/work-tasks-tool-brief.mdc`
- `.cursor/rules/tool-i18n-localization.mdc`
- `.cursor/skills/tool-coverage-pass/SKILL.md`
- `work-tasks/_template/02-tool-info.md`
- `work-tasks/README.md`
