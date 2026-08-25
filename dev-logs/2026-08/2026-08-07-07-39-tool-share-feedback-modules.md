Date: 2026-08-07 07:39
Summary: Added share-tool and email feedback modules to all tool pages via shared toolContent.

[question]
工具页增加分享工具模块，以及增加email咨询反馈模块，联系email：dailyonetools@outlook.com

[try to solve]
Every tool page that goes through `renderToolExtraSections` now gets two footer modules:

1. **Share tool**: shows the absolute page URL with “Copy link”; if the browser supports Web Share API, also shows “Share…”.
2. **Feedback**: public email `dailyonetools@outlook.com` plus a “Write email” `mailto` button with prefilled subject/body (tool name + page URL).

Implemented in shared `src/pages/site/toolContent.ts` (no per-page edits). Styles in `public/styles/site.css` (two-column grid, single column on narrow screens). Ten-locale keys `tool_share_*` / `tool_feedback_*` in each `src/site/i18n/*.ts`.

[actions]
- `src/pages/site/toolContent.ts` — `renderToolShareSection` / `renderToolFeedbackSection`, wired into `renderToolExtraSections`
- `public/styles/site.css` — `.tool-module-grid` / `.tool-module` styles
- `src/site/i18n/{en,zh,es,de,fr,pt,id,ja,ru,ar}.ts` — share and feedback copy
- `npm run lint:seo` — OK
