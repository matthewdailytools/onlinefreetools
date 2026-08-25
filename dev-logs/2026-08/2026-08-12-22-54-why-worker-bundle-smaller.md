Date: 2026-08-12 22:54
Summary: Worker bundle shrank because Page/i18n code moved from runtime import to build-time prerender, not because tool sources were deleted.

[question]
那为什么打包会变小，既然原来生成工具后的文件都没有改变

[try to solve]
Source files (catalog / i18n / `*Page.ts`) are still present and maintained much as before. What got smaller is the **Cloudflare Worker bundle**, not the tool codebase itself.

Previously: `toolPageRegistry` pulled every `*Page.ts` plus ten-locale i18n into the Worker, which SSR’d at the edge → Worker package ~9.8MB.
Now: the same render functions run at build time to write HTML (prerender package still ~9.4MB, Node-only). The Worker keeps only the slug list and R2/Assets reads → ~416KB / gzip 83KB.

[actions]
- Explanation only; no code changes
