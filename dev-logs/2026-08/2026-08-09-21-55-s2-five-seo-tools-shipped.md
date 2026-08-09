Date: 2026-08-09 21:55
Summary: S2 批次 5 个 SEO 工具（on-page-seo-checker / open-graph-preview / utm-builder / hreflang-generator / meta-tag-generator）完成立项与实现，全部 phase=all 绿并入库上线。

[question]
分步骤立项工具：on-page-seo-checker，open-graph-preview，utm-builder，hreflang-generator，meta-tag-generator；然后分步骤实现；

[try to solve]
按 tool-creation / work-tasks 流程完成 5 个 S2 工具立项与实现，每套走完 0b→1b→2→2b→3 轮次与 phase=all 门禁：

**on-page-seo-checker**
- 新增 Worker API `/api/tools/on-page-seo`（拉取 URL HTML，含私有网段拦截/超时/2MB 上限），`parseUrlOrThrow` / `isBlockedHostname` 导出复用。
- 页面双模式：粘贴 HTML（DOMParser 本地审计）与抓取 URL；检查 title/description/H1/canonical/robots/OG/JSON-LD/mixed content/render-blocking，canonical 用 finalUrl 判自引用。
- 修复样例 JSON-LD 中未转义 `</script>` 导致内联脚本截断的语法错误。
- 中文标题「On-Page SEO 检测」；en「On-Page SEO Checker — Find and fix page tag issues」（结果向，避免参数枚举）。

**open-graph-preview**
- 新增 Worker API `/api/tools/open-graph-preview`（复用 onPageSeo 辅助函数）。
- 页面双模式：粘贴 og/twitter 标签或抓取 URL；解析标签渲染 Facebook / X / WhatsApp 三卡片 + 字段缺失表 + og:image 尺寸/比例读取。
- 归 social 模块；移除 social upcoming 中「Open Graph preview」。

**utm-builder**
- 纯本地 `localProcessing: true`；页面表单生成 UTM 链接：自动补协议、参数合并（同名替换）、encodeURIComponent 编码、hash 保留在末尾、参数明细表 + 复制。
- 归 growth 模块；移除 growth upcoming 中「UTM builder」。

**hreflang-generator**
- 纯本地；输入「语言码 + URL」行列表，校验 BCP 47 语言码，URL 无协议自动补 https；输出三种形态 tab（`<link>` / HTTP Link 头 / sitemap xhtml:link），每 URL 自引用 + 可选 x-default。
- 修复两处逻辑：语言码非法报错被 renderOutput 覆盖丢失 → 改 pendingErrors 收集；`{lang} {url}` 中 URL 无协议时整行被跳过 → 改用语言码判定解析。
- 归 growth 模块；清空 growth upcoming（hreflang + UTM 均已实现）。

**meta-tag-generator**
- 纯本地；title/desc/canonical/robots(select)/OG 字段 → 完整 head 片段；长度提示（title 60 / desc 160，不硬切）、escapeHtml 全字段转义、canonical 无协议标黄、空字段跳过、复制按钮。
- 母版 title 曾被判参数枚举目录腔（「Create title, description & OG tags」）→ 改为结果向「Generate complete page head tags」，同步 02/03 与 zh/es/ja 方向。
- 归 onpage 模块（含此前缺失的 on-page-seo-checker）；移除 onpage upcoming 中「Meta tag generator」。

**全局收尾**
- merge:tools 124 tools / 10 locales；10 语键集合逐一比对一致（on-page 95 / og 76 / utm 75 / hreflang 53 / meta 67 keys）。
- 修复 lint:seo 2 个入链孤儿：sitemap-xml-generator related 加 hreflang-generator、hreflang-generator related 加 utm-builder → 0 inbound warn。
- build:site 通过（sitemap 1470 URLs）；esbuild 编译 5 页面 + 2 Worker + index.ts 全过；每个工具都用 Node DOM mock 验证样例自动生成与关键交互。
- README 中/英清单各插入 5 条目；清单总表 §6 行 78–80 标已上线、新增 81/82 行、统计区已上线 118→123、序号范围 1–163、未开始·P2 →~78。

[actions]
- 新增 `src/tools/onPageSeo.ts`、`src/tools/openGraphPreview.ts`（Worker API + 路由）
- 新增 `src/pages/onPageSeoCheckerPage.ts`、`openGraphPreviewPage.ts`、`utmBuilderPage.ts`、`hreflangGeneratorPage.ts`、`metaTagGeneratorPage.ts`
- 新增 5 套 `work-tasks/{slug}/00-03` 文档（状态 `i18n-done`）与 `src/site/i18n/tools/{slug}/{10 语}.ts`
- 新增 5 个 `src/site/tool-catalog.d/{slug}.json` 与 `public/icons/tools/{slug}.svg`
- 更新 `scripts/site/scenario-modules.mjs`（onpage 补 on-page-seo-checker/meta-tag-generator；growth 补 utm/hreflang；social 已有 open-graph-preview）
- 更新 `scripts/site/i18n-taxonomy.mjs`（onpage/growth upcoming 移除已实现项）
- 更新 `README.md` 与 `docs/2026-08-08-tool-inventory-table.md`
