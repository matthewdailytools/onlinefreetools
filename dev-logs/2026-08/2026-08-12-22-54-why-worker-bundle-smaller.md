Date: 2026-08-12 22:54
Summary: Explain Worker bundle shrink: Page/i18n still exist but moved from Worker runtime import to build-time prerender.

[question]
那为什么打包会变小，既然原来生成工具后的文件都没有改变

[try to solve]
源文件（catalog / i18n / *Page.ts）确实还在、也几乎照旧维护。变小的是 **打进 Cloudflare Worker 的包**，不是删掉了工具代码。

以前：`toolPageRegistry` 把全部 `*Page.ts` + 十语 i18n 拉进 Worker，请求时边缘 SSR → Worker 包约 9.8MB。
现在：构建期用同一套渲染函数写出 HTML（预渲染包仍约 9.4MB，只在 Node 跑）；Worker 只留 slug 列表 + 读 R2/Assets → 约 416KB / gzip 83KB。

[actions]
- （说明，无代码改动）
