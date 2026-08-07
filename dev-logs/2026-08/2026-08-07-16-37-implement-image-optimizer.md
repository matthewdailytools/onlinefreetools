Date: 2026-08-07 16:37
Summary: Implement image-optimizer page with Tier 2 jSquash codecs

[question]
实现

[try to solve]
已实现 `/tools/image-optimizer`：点击加载引擎后懒加载 MozJPEG/WebP/AVIF/OxiPNG（`@jsquash/*` vendor + `engine.mjs`），滑动对照、AVIF 可取消。十语 i18n、catalog、首页短词、README、related 互链已接。`npm run lint:seo` 通过；wrangler dry-run 通过。WASM vendor 由 `npm run vendor:image-optimizer` / `build:site` 复制且 gitignore。

[actions]
- 新增 `src/pages/imageOptimizerPage.ts`、`public/tools/image-optimizer/engine.mjs`、`scripts/copy-image-optimizer-vendor.mjs`
- 新增十语 `tool_image_optimizer_*`（`src/site/i18n/*.ts`）与 `scripts/site/i18n.mjs` 首页短词
- 更新 `tool-catalog.json`、`src/index.ts`、`README.md`、`package.json`、`.gitignore`、`scripts/build-site.mjs`
- 安装 `@jsquash/jpeg|webp|avif|oxipng`；FAQ 收集扩至 q6
- `work-tasks/image-optimizer/02` → implemented；`03` briefs-ready
