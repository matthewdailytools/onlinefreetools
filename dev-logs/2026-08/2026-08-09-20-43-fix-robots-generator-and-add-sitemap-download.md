Date: 2026-08-09 20:43
Summary: 修复 robots-txt-generator 脚本语法崩溃（模板字符串转义）并给 sitemap-xml-generator 添加下载按钮，同时全量排查修复 8 个页面的同类隐患。

[question]
http://localhost:8788/zh/tools/sitemap-xml-generator 提供下载；http://localhost:8788/zh/tools/robots-txt-generator 不可用，点击按钮没有反应；http://localhost:8788/zh/tools/robots-txt-generator 有错误；

[try to solve]
根因：工具页 TS 的 `extraBodyHtml` 是模板字符串。其中单反斜杠转义（如 `\r?\n`、`'\n'`、正则 `\d`/`\s`/`\.`）在模板字符串求值时被 JS 转义为真实控制字符或丢弃反斜杠，输出到 HTML 内联脚本后造成正则字面量含行终止符、字符串跨行、正则字符类错误等 SyntaxError，整个 IIFE 崩溃，事件绑定失效 → 点击按钮无反应。

修复（robots-txt-generator）：
- `split(/\r?\n/)` → `split(/\\r?\\n/)`；`join('\n')` → `join('\\n')`；`join('\n\n')` → `join('\\n\\n')`。

全量扫描 src/pages/*.ts 模板字符串后修复同类隐患（共 8 个页面）：
- howToCalculateGpaPage.ts：`split(/\r?\n/)`、`split(/[,;\s，、]+/)`、样例 `'4.0, 3\n3.0, 3'`。
- schemaJsonldGeneratorPage.ts：JSON-LD 包装 `'<script ...>\n'` 与 `'\n<\/script>'`。
- howToCalculatePValuePage.ts：erfc 链末尾缺 1 个闭括号（输出 JS 语法错误）。
- howToCalculateScientificNotationPage.ts / howToCalculateSignificantFiguresPage.ts：科学计数正则 `\d`/`\.`/`\s`/`\*`/`\^` 等单反斜杠。
- brandStyleGuidePage.ts：`/(\d+)/` 主色占比解析。
- smartWebsiteColorSchemePage.ts：`rgba()` 解析正则 `\(`/`\s`/`\d`/`\)`。

sitemap-xml-generator 下载：新增 `tool_sitemap_download` 键（10 语，独立翻译）+ 输出区「下载」按钮（Blob → a.download=sitemap.xml）。

验证：模板转义扫描 0 隐患；119 个工具页内联脚本全部通过语法检查（new Function）；DOM mock 验证 robots Generate 输出正确分组、sitemap Download 触发 sitemap.xml；build:site 与 lint:seo 全绿。

[actions]
- 修改 src/pages/robotsTxtGeneratorPage.ts（三处转义）
- 修改 src/pages/howToCalculateGpaPage.ts（两处转义）
- 修改 src/pages/schemaJsonldGeneratorPage.ts（JSON 包装换行）
- 修改 src/pages/howToCalculatePValuePage.ts（补 1 个闭括号）
- 修改 src/pages/howToCalculateScientificNotationPage.ts（科学计数正则转义）
- 修改 src/pages/howToCalculateSignificantFiguresPage.ts（有效数字正则转义）
- 修改 src/pages/brandStyleGuidePage.ts（主色占比正则）
- 修改 src/pages/smartWebsiteColorSchemePage.ts（rgba 解析正则）
- 修改 src/pages/sitemapXmlGeneratorPage.ts（下载按钮 + JS）
- 修改 src/site/i18n/tools/sitemap-xml-generator/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts（tool_sitemap_download）
- 命令：npm run merge:tools、npm run build:site、npm run lint:seo
