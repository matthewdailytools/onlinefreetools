Date: 2026-08-09 20:57
Summary: 为 schema-jsonld-generator 输出区新增「下载」按钮（schema.jsonld 下载），10 语新增 tool_schema_download 键。

[question]
http://localhost:8788/zh/tools/schema-jsonld-generator 缺少下载按钮

[try to solve]
与其他生成器（sitemap/robots）对齐，输出区新增「下载」按钮：Blob 生成 schema.jsonld（application/ld+json），支持任意 schema 类型输出（含 script 包裹形式）。复制按钮保留。新增 10 语键 tool_schema_download（zh「下载」/ en Download / es Descargar / ja ダウンロード / ar تنزيل / pt Baixar / id Unduh / fr Télécharger / ru Скачать / de Herunterladen）。

验证：10 语键集合一致；工具脚本语法 OK；DOM mock 验证进页 FAQ 样例渲染 + 下载触发 schema.jsonld；模板转义扫描 0 隐患；119 工具页脚本全过；build:site / lint:seo 全绿。

[actions]
- 修改 src/pages/schemaJsonldGeneratorPage.ts（输出区下载按钮 + JS）
- 修改 src/site/i18n/tools/schema-jsonld-generator/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts（新增 tool_schema_download）
- 修改 work-tasks/schema-jsonld-generator/03-locale-briefs.md（追加交互增强轮次）
- 命令：npm run merge:tools、npm run build:site、npm run lint:seo
