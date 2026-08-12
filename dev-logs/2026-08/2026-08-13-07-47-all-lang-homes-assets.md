Date: 2026-08-13 07:47
Summary: Confirm all language homes already use Assets; add build assert.

[question]
其他语言的首页也需要走asset

[try to solve]
十语首页此前已全部走 Assets：`public/index.html` + `public/{lang}/index.html`，Worker `serveHomeHtml` 对 `/` 与各 `/{lang}/` 均先读 Assets。本次补充 `assertLangHomeAssets`（缺任一语则 build 失败）并澄清注释。上线须 commit 全部 `public/*/index.html`（不仅英文），git push 后 CF 才会进 Static Assets。

[actions]
- Updated `scripts/build-site.mjs`, `src/site/r2Pages.ts` comments + assert
