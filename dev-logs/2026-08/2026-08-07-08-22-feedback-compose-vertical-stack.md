Date: 2026-08-07 08:22
Summary: Stacked share/feedback modules vertically and replaced the feedback CTA with a compose-email form UI.

[question]
底部的分享这个工具和咨询反馈模块，按从上到下排放，同时邮件反馈模块给出类似写邮件的界面

[try to solve]
1. Changed `.tool-module-grid` to a vertical single-column flex stack: share first, then feedback.
2. Replaced the feedback area with a compose-style form (read-only To, Subject, Message). Submit opens the system mail app via `mailto` with the current tool context prefilled.

[actions]
- `src/pages/site/toolContent.ts` — compose form + mailto script
- `public/styles/site.css` — single-column layout and `.tool-mail-*` styles
- `src/site/i18n/*.ts` — To / Subject / Message copy
