# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`schema-jsonld-generator`
**母版语言**：en
**状态**：`briefs-ready`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（类型列举放 desc/UI，不进 H1 副标题堆砌）
- [x] 隐私句说清设备 + 不上服务器
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

技术专名 JSON-LD / Schema.org / FAQ / Article / Breadcrumb / Organization / `@context` / `@type` / `mainEntity` 可保留，但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 从 faq-schema-generator 演进为 schema-jsonld-generator（多类型单页，禁拆 URL）；H1「JSON-LD Generator — Schema Markup for FAQ, Article & Breadcrumb」；次词 schema markup / structured data / FAQ schema 落入 desc·FAQ·Use cases。 | 通过；可 ready |
| 1b 母版检索覆盖优化 | 2026-08-09 | en 母版落地后复核：H1「JSON-LD Generator — Schema Markup for FAQ, Article & Breadcrumb」主词 JSON-LD Generator 在 H1；次词 schema markup / structured data / FAQ schema / schema generator for SEO 落入 description、FAQ、Rules、Use cases；FAQ 富结果已退役现状写入 FAQ A2。 | 通过；可 phase=2 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均已按各语检索词重写：zh「JSON-LD 生成器 — 生成 FAQ、文章与面包屑的结构化数据」、ja「JSON-LD 生成ツール — FAQ・記事・パンくずの構造化データを作成」等，无参数枚举目录腔；类型列举只进 desc/UI；其余语轮次2已重写。 | 通过；可 ship |
| 交互增强 | 2026-08-09 | 输出区新增「下载」按钮：Blob 生成 schema.jsonld（application/ld+json），支持任意类型输出（含 script 包裹）。新增 10 语键 tool_schema_download。DOM mock 验证下载触发；lint:seo / build:site 全绿。 | 通过 |

---

### en

- 检索词（3–5）：json-ld generator；schema markup generator；faq schema generator；structured data generator；json ld generator
- 语气：偏正式开发者
- Title / H1 方向：JSON-LD Generator — Schema Markup for FAQ, Article & Breadcrumb
- 按钮短词：Generate / Load sample / Clear / Copy
- 本地示例用词：FAQ mainEntity（示例类型）
- 可保留英文/符号：JSON-LD, Schema.org, FAQ, Article, Breadcrumb, Organization, mainEntity, @context
- 额外禁用：无
- SERP 竞品 title（1–3）：「JSON-LD Generator」「FAQ Schema Generator — Free」「Schema Markup Generator (JSON-LD)」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：JSON-LD 生成器；结构化数据生成；FAQ Schema 生成；Schema 标记生成；面包屑 JSON-LD
- 语气：偏正式开发者
- Title / H1 方向：JSON-LD 生成器 — 生成 FAQ、文章与面包屑的结构化数据
- 按钮短词：生成 / 加载样例 / 清空 / 复制
- 可保留英文/符号：JSON-LD, Schema.org, FAQ, Article, Breadcrumb, Organization
- 额外禁用：无
- SERP 竞品 title（1–3）：「JSON-LD 生成器」「结构化数据生成工具」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：generador json-ld；generador de schema markup；generador faq schema；datos estructurados
- 语气：偏正式开发者
- Title / H1 方向：Generador de JSON-LD — crea datos estructurados para FAQ, artículo y migas de pan
- 按钮短词：Generar / Ejemplo / Limpiar / Copiar
- 可保留英文/符号：JSON-LD, Schema.org, FAQ, Article, Breadcrumb
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مولّد JSON-LD؛ بيانات منظمة؛ توليد سكيما؛ FAQ سكيما
- 语气：偏正式工具站
- Title / H1 方向：مولّد JSON-LD — أنشئ بيانات منظمة لـFAQ والمقال والمسار
- 按钮短词：توليد / مثال / مسح / نسخ
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：gerador de json-ld；gerador de schema markup；dados estruturados；gerador faq schema
- 语气：偏正式开发者
- Title / H1 方向：Gerador de JSON-LD — crie dados estruturados para FAQ, artigo e trilha
- 按钮短词：Gerar / Exemplo / Limpar / Copiar
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pembuat json-ld；generator schema markup；data terstruktur；pembuat faq schema
- 语气：偏正式开发者
- Title / H1 方向：Pembuat JSON-LD — buat data terstruktur untuk FAQ, artikel & breadcrumb
- 按钮短词：Buat / Contoh / Bersihkan / Salin
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：générateur json-ld；générateur de schema markup；données structurées；générateur faq schema
- 语气：偏正式开发者
- Title / H1 方向：Générateur JSON-LD — créez des données structurées pour FAQ, article et fil d’Ariane
- 按钮短词：Générer / Exemple / Effacer / Copier
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：JSON-LD 生成ツール；構造化データ 生成；FAQ スキーマ 生成；スキーママークアップ
- 语气：偏正式开发者
- Title / H1 方向：JSON-LD 生成ツール — FAQ・記事・パンくずの構造化データを作成
- 按钮短词：生成 / サンプル / クリア / コピー
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：генератор JSON-LD；генератор разметки schema；структурированные данные；faq schema генератор
- 语气：偏正式工具站
- Title / H1 方向：Генератор JSON-LD — создайте разметку для FAQ, статьи и хлебных крошек
- 按钮短词：Сгенерировать / Пример / Очистить / Копировать
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：JSON-LD Generator；Schema-Markup Generator；strukturierte Daten；FAQ Schema Generator
- 语气：偏正式开发者
- Title / H1 方向：JSON-LD Generator — erstelle strukturierte Daten für FAQ, Artikel und Breadcrumbs
- 按钮短词：Generieren / Beispiel / Leeren / Kopieren
- 可保留英文/符号：JSON-LD, Schema.org, FAQ, Article, Breadcrumb
- 轮次2已重写：[x]  轮次3已抽查：[ ]
