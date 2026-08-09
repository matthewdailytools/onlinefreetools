Date: 2026-08-09 18:45
Summary: 修复 core-web-vitals-checker 工具页 500（注册表调用签名与 ogImageUrl 缺失）

[question]
继续（延续上轮：`/zh/tools/core-web-vitals-checker` 返回 Internal Server Error）

[try to solve]
排查 wrangler dev 日志定位两个真实 bug，均已修复：

1. 注册表调用签名不匹配（500 根因）
   - `src/site/tool-catalog.d/core-web-vitals-checker.json` 里 `page.style: "pair"`，`merge:tools`
     生成 `renderCoreWebVitalsCheckerPage(lang, defaultLang)`（位置传参），但页面函数签名是
     `(opts: { lang, defaultLang, enabledLangs })`，导致 `opts.lang` 为 `undefined`，
     `t()` 抛 `Cannot read properties of undefined (reading 'tool_cwv_title')`。
   - 修复：`style` 改为 `"opts"`，重新 `merge:tools` 后注册表生成
     `renderCoreWebVitalsCheckerPage({ lang, defaultLang, enabledLangs: enabled })`。

2. `renderLayout` 缺 `ogImageUrl`（第一个 bug 修完后暴露）
   - `renderCoreWebVitalsCheckerPage.ts` 调 `renderLayout` 未传 `ogImageUrl`，layout 第 84 行
     `escapeHtml(undefined)` 抛 `Cannot read properties of undefined (reading 'replaceAll')`。
   - 修复：补 `ogImageUrl: 'https://onlinefreetools.org/og-image.png'`（与其余工具页一致）。

验证：

- 十种语言（en/zh/es/ar/pt/id/fr/ja/ru/de）`/tools/core-web-vitals-checker` 均 200，
  H1/OG 标题为各语言正确文案。
- `npm run lint:seo` 通过（15 条 legacy WARN 不阻断）。

[actions]
- `src/site/tool-catalog.d/core-web-vitals-checker.json`：`page.style` `pair` → `opts`
- `src/pages/coreWebVitalsCheckerPage.ts`：`renderLayout` 补 `ogImageUrl`
- 重跑 `npm run merge:tools`
