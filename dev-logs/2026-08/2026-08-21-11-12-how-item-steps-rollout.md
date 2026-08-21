Date: 2026-08-21 11:12
Summary: Require ordered How steps for all tools; renderer + image-crop pilot.

[question]
好的（确认：把「全工具须有操作步骤」写入 rules，改 renderToolIgSections 支持 how_item_*，image-crop 试点）

[try to solve]
已落地：
1) `renderToolIgSections` 支持 `how_item_1…n` → 可见 `<ol>`；`how_body` 作总答；仅有 body 时仍兼容旧单段 p。
2) `tool-creation.mdc` / `tool-i18n-seo.mdc` / copilot-instructions：新工具硬性要求 how_item；存量改文案时迁移；Rules 勿假扮步骤；不为 AI 堆 HowTo schema。
3) `image-crop` 十语试点：总答 + 5 步，与按钮文案对齐；`tool:touch` + `merge:tools` 已跑。`build:site` 因缺 bootstrap 依赖未完成全量预渲染，源码与合并 i18n 已就绪。

[actions]
- src/pages/site/toolContent.ts
- .cursor/rules/tool-creation.mdc, tool-i18n-seo.mdc
- .github/copilot-instructions.md
- src/site/i18n/tools/image-crop/{en,zh,es,de,fr,ja,pt,id,ru,ar}.ts
- npm run tool:touch -- --slug=image-crop; npm run merge:tools
