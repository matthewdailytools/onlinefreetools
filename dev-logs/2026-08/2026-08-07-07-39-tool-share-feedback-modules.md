Date: 2026-08-07 07:39
Summary: Added share-tool and email feedback modules to all tool pages via shared toolContent.

[question]
工具页增加分享工具模块，以及增加email咨询反馈模块，联系email：dailyonetools@outlook.com

[try to solve]
已在所有走 `renderToolExtraSections` 的工具页底部增加两块模块：

1. **分享工具**：展示绝对页链，支持「复制链接」；若浏览器支持 Web Share API 则显示「分享…」。
2. **咨询与反馈**：公开邮箱 `dailyonetools@outlook.com`，并提供预填主题/正文（含工具名与页 URL）的「写邮件」`mailto` 按钮。

实现落在共享 `src/pages/site/toolContent.ts`，无需逐页改；样式在 `public/styles/site.css`（双栏网格，窄屏单列）；十语文案键 `tool_share_*` / `tool_feedback_*` 已写入各 `src/site/i18n/*.ts`。

[actions]
- `src/pages/site/toolContent.ts` — `renderToolShareSection` / `renderToolFeedbackSection`，并入 `renderToolExtraSections`
- `public/styles/site.css` — `.tool-module-grid` / `.tool-module` 样式
- `src/site/i18n/{en,zh,es,de,fr,pt,id,ja,ru,ar}.ts` — 分享与反馈文案
- `npm run lint:seo` — OK
