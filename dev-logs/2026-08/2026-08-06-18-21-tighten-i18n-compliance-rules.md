Date: 2026-08-06 18:21
Summary: Tightened i18n compliance rules (stable workflow, anti-batch isomorphic) and rewrote all ten markdown locales; cleared pending-native-review.

[question]
要收紧合规，下一步可对 所有语言（及任意一句式雷同的语）做一轮母语向重写，并在 03 标「待母语抽查」清掉。把收紧合规策略和稳妥常态写成rules

[try to solve]
已写入规则并落实本工具十语重写：

**Rules（稳妥常态 + 收紧合规）** — 主文件 `.cursor/rules/tool-i18n-localization.mdc`：
- 常态：brief → 母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；脚本仅可落盘已审文案
- 禁止：en/zh 后脚本同构灌其余语；带着「待母语抽查」标 `i18n-done`
- 同步：`work-tasks-tool-brief.mdc`、`tool-i18n-seo.mdc`、`tool-creation.mdc`、`work-tasks/_template/03`、`work-tasks/README.md`、`.github/copilot-instructions.md`

**本工具**：十语 SEO 段（title/description/How/Rules/FAQ/Use cases）按 brief 独立重写打散句式；`03` 中 ar/ja/ru「待母语抽查」已清勾；`lint:seo` OK；状态保持 `i18n-done`。

[actions]
- Updated: `.cursor/rules/tool-i18n-localization.mdc`
- Updated: `.cursor/rules/work-tasks-tool-brief.mdc`, `tool-i18n-seo.mdc`, `tool-creation.mdc`
- Updated: `.github/copilot-instructions.md`
- Updated: `work-tasks/_template/03-locale-briefs.md`, `work-tasks/README.md`
- Updated: `work-tasks/markdown-to-html/03-locale-briefs.md`
- Updated: `src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`（markdown SEO 键）
- Ran: `npm run lint:seo`
