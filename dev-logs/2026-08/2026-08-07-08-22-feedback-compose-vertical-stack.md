Date: 2026-08-07 08:22
Summary: Stacked share/feedback modules vertically and replaced feedback CTA with a compose-email form UI.

[question]
底部的分享这个工具和咨询反馈模块，按从上到下排放，同时邮件反馈模块给出类似写邮件的界面

[try to solve]
1. `.tool-module-grid` 改为纵向 `flex` 单列：先分享、后反馈。
2. 反馈区改为仿写信表单：收件人（只读）、主题、正文；提交后打开系统邮件应用（mailto），预填当前工具信息。

[actions]
- `src/pages/site/toolContent.ts` — 写信表单 + mailto 脚本
- `public/styles/site.css` — 单列布局与 `.tool-mail-*` 样式
- `src/site/i18n/*.ts` — To/Subject/Message 等文案
