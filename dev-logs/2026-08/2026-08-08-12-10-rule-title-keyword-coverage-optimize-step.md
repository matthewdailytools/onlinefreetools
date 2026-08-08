Date: 2026-08-08 12:10
Summary: Added a mandatory post-draft step to optimize title, description, and search-keyword coverage in localization/tool-creation rules.

[question]
在规则中增加步骤：工具的title，描述和搜索关键词覆盖优化，放在目前这些元素生成之后，进行优化步骤

[try to solve]
Inserted into `tool-i18n-localization.mdc` 稳妥常态 workflow as step 2 (after母版 draft) and step 4 (after per-locale rewrite), with a dedicated checklist section (H1 main intent, no parameter-enum subtitles, secondary intents in desc/FAQ, intent boundaries, home short title). Synced `tool-creation.mdc` checklist, `work-tasks-tool-brief.mdc`, `_template/03-locale-briefs.md` (勾选 + 多轮行 1b/2b), `tool-i18n-seo.mdc`, and `.github/copilot-instructions.md`. Skipping this step is now a red-line / 不合规 item before `i18n-done`.

[actions]
- Updated `.cursor/rules/tool-i18n-localization.mdc`
- Updated `.cursor/rules/tool-creation.mdc`
- Updated `.cursor/rules/work-tasks-tool-brief.mdc`
- Updated `.cursor/rules/tool-i18n-seo.mdc`
- Updated `work-tasks/_template/03-locale-briefs.md`
- Updated `.github/copilot-instructions.md`
