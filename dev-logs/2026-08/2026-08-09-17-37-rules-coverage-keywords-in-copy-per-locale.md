Date: 2026-08-09 17:37
Summary: Encode two hard rules: coverage keywords land in H1/desc/FAQ/Use cases; re-run keywords per locale search habits.

[question]
在规则确保两点：1、相关关键词落入到H1，description，FAQ，USE case等文案中。2、相关关键词必须根据各个语言习惯和用户搜索习惯重新跑

[try to solve]
已在规则与配套文件中固化两条硬性要求：

1. **落入可见文案**：主词 → H1（`tool_*_title`）；次词 → description / FAQ / Use cases 自然句。禁止页上「相关关键词」列表/标签云；禁止只写在 brief 不回写页面。覆盖表须标明逐词落点。

2. **按语重跑**：每语在 `03-locale-briefs` 写当地检索词 3–5（非 en 直译）；步 0b→3→4 对照当地搜法更新主词/次词与落点；禁止十语共用英文关键词骨架。

落地文件：`tool-i18n-localization.mdc`（专节「相关关键词落地」+ 自检/红线）、`tool-i18n-seo.mdc`、`work-tasks-tool-brief.mdc`、`tool-creation.mdc`（上线 Checklist）、`.cursor/skills/tool-coverage-pass/SKILL.md`、`.github/copilot-instructions.md`。

[actions]
- `.cursor/rules/tool-i18n-localization.mdc`
- `.cursor/rules/tool-i18n-seo.mdc`
- `.cursor/rules/work-tasks-tool-brief.mdc`
- `.cursor/rules/tool-creation.mdc`
- `.cursor/skills/tool-coverage-pass/SKILL.md`
- `.github/copilot-instructions.md`
