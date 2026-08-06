Date: 2026-08-06 21:07
Summary: Implemented YAML ↔ JSON tool (yaml-json) with ten-locale IG copy

[question]
根据规则和任务实现工具

[try to solve]
已按 `work-tasks/yaml-json/02-tool-info.md`（ready）与 `tool-creation.mdc` / 本地化稳妥常态实现 **YAML ↔ JSON**。

**上线路径**：`/tools/yaml-json`（十语 hreflang；不拆反向薄页）

**交互**
- Tab：YAML → JSON | JSON → YAML
- `js-yaml@4.1.0` CDN；多文档 `loadAll`（单篇=值，多篇=数组）
- 可选 JSON-safe types；缩进 2/4/minify；行号错误；Copy/Download/Sample/Clear
- 粘贴本地处理；FAQ 区分 CDN 载库

**IG**：Rules（类型/多文档/往返损失/隐私）+ Example + Use cases×3 + FAQ×5 + References（YAML 1.2 / js-yaml / RFC 8259）+ related → markdown-to-html、text-diff

**本地化**：en 母版 → 三批独立重写（FAQ 题序打散）；`lint:seo` 通过；`03` → `i18n-done`；`02` → `implemented`

**验收**：`npm run lint:seo` OK；`npm run build:site`（sitemap 含 yaml-json）

[actions]
- 新建 `src/pages/yamlJsonPage.ts`
- 更新 `src/site/tool-catalog.json`、`src/index.ts`、`README.md`
- 十语 `src/site/i18n/*.ts` + `scripts/site/i18n.mjs` 首页主词
- 更新 `work-tasks/yaml-json/02`/`03`
- `npm run lint:seo`；`npm run build:site`
