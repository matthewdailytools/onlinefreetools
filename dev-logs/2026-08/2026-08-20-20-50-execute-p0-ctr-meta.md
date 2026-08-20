Date: 2026-08-20 20:50
Summary: Executed P0 CTR meta absorb on four high-impression zero-click tools; lint:seo and build:site passed.

[question]
立刻执行优化

[try to solve]
已按 2026-08-12 P0 完成四页 title/description absorb（不拆 URL）：

1. ru image-merge →「Склеить фото онлайн — …」；desc 前置 склеить/объединить + 不上服务器
2. en schema-jsonld-generator →「JSON-LD Schema Generator — Schema.org Markup Online」；home_title/desc 同步；去掉 richer-results 过时承诺
3. es how-to-calculate-volume →「Calcular el volumen — Calculadora de caja y esfera」
4. en how-to-calculate-npv →「How to Calculate NPV — Net Present Value Calculator」；desc 首句对齐查询词并写入公式

同步：tool:touch 四 slug；ru 首页 legacy 短 title；merge:tools + build:site；lint:seo OK。
文档：03-todo CTR 项勾完并加部署待办；keyword-to-tool-tracker 决策日志追加 2026-08-20。

下一步：部署 + IndexNow incremental；≥28 天 GSC 验 CTR。

[actions]
- src/site/i18n/tools/image-merge/ru.ts
- src/site/i18n/tools/schema-jsonld-generator/en.ts
- src/site/i18n/tools/how-to-calculate-volume/es.ts
- src/site/i18n/tools/how-to-calculate-npv/en.ts
- scripts/site/i18n.mjs（ru home legacy）
- catalog updatedAt via tool:touch ×4
- docs/seo/reviews/2026-08-12/03-todo.md
- docs/seo/keyword-to-tool-tracker.md
- npm run build:site && npm run lint:seo
