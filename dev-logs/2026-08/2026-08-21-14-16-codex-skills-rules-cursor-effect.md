Date: 2026-08-21 14:16
Summary: Analyzed Codex-era AGENTS.md/skills/rules and confirmed they apply in Cursor.

[question]
本项目中间由codex接手，制定针对codex的skill和规则，分析查看是否在cursor生效

[try to solve]
结论：Codex 并未另建独立 skill 体系，而是用根目录 AGENTS.md 作跨 Agent 入口，指向已有 `.cursor/rules` 与 `.cursor/skills`；在 Cursor 里这些都会生效。本会话已实际注入 alwaysApply 规则（project-core / seo-google-policy / dev-logs）与 AGENTS.md，且两个仓库 Skill 已出现在 agent_skills 列表。差异在于：Cursor 对 globs 规则按打开文件自动附着，Skill 按描述触发或 @ 引用；AGENTS.md 对 Codex 更关键（强制先读索引），对 Cursor 则与 alwaysApply 有部分重叠。可执行门禁（npm run verify / verify:tool、CI）与 Agent 无关，两边同样有效。

[actions]
- 审阅 AGENTS.md、2026-08-13 Codex 落地日志、.cursor/rules frontmatter、两个 SKILL.md、verify 脚本与 workflow
- 对照本会话 always_applied_workspace_rules / agent_skills 实际注入情况
