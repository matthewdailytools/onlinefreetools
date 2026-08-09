# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`hreflang-generator`
**母版语言**：en
**状态**：`i18n-done`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（link/HTTP/sitemap 三形态名留 UI/FAQ，不进 H1）
- [x] 隐私句说清「纯本地、不上传」
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

| 5 描述 SEO 作用增强 | 2026-08-09 | 10 语 `tool_hreflang_description`/`tool_hreflang_home_desc` 前置 hreflang 对多语站 SEO 的作用（避免重复内容、正确语言版本被索引）：en「Google may treat your translated pages as duplicates」、zh「Google 可能把译文页面当成重复内容」；逐语独立改写。 | 通过 |
技术专名 hreflang / x-default / `<link>` / sitemap / HTTP Link 头 可保留（作为检索词或技术名），但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 hreflang-generator；H1「Hreflang Generator — Create hreflang tags for multilingual sites」；次词 hreflang sitemap / x-default / 自引用 / 语言码 落入 desc·FAQ·Use cases；禁拆三形态 URL。 | 通过；可 ready |
| 1 母版+lint | | | |
| 1b 母版检索覆盖优化 | 2026-08-09 | 母版 title/H1 定为「Hreflang Generator — Create hreflang tags for multilingual sites」（结果向，主词 Hreflang Generator 落 H1）；desc 写明三形态 + 自引用 + x-default + 纯本地；次词 hreflang sitemap / x-default / 语言码 / 自引用 分落 desc·FAQ·Use cases；三形态名只进 UI tab 不进 H1，避免参数枚举目录腔。 | 通过；可 phase=2 |
| 2 按 brief 重写 | 2026-08-09 | 逐语独立重写 9 语（zh/es/ja/ar/pt/id/fr/ru/de）：每语按当地检索词重跑 title 方向（zh「hreflang 标签生成器」、es「Generador de hreflang」、ja「hreflang 生成ツール」、de「Hreflang-Generator」等），按钮词本地化（生成/Generar/生成/Erstellen）。 | 通过 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均结果/场景向且含主词落点，无「三形态」目录腔；三形态名只进 UI tab 不进 H1；其余语轮次2已重写。 | 通过；可 phase=4 |
| 3 抽查+禁词+lint | 2026-08-09 | en/zh/es/ja 四抽查语 title 逐一复核无参数枚举；10 语键集合一致（53 keys）；页面编译通过；DOM mock 验证样例生成、三形态切换、非法语言码报错、无协议自动补 https。 | 通过；可 ship |

---

### en

- 检索词（3–5）：hreflang generator；hreflang tag generator；hreflang sitemap；multilingual seo；x-default hreflang
- 语气：口语工具站偏开发者
- Title / H1 方向：Hreflang Generator — Create hreflang tags for multilingual sites（结果/场景向）
- 按钮短词：Generate / Load sample / Clear / Copy
- 本地示例用词：sample URLs（example.com + /es/ + /ja/）
- 可保留英文/符号：hreflang, x-default, link, sitemap, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「Free Hreflang Tag Generator」「Hreflang Generator Tool」「Hreflang Tags Generator」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：hreflang标签生成；hreflang是什么；多语SEO；hreflang sitemap；语言版本标注
- 语气：口语工具站
- Title / H1 方向：hreflang 标签生成器 — 为多语网站生成语言标注（结果/场景向；三形态放 UI）
- 按钮短词：生成 / 加载样例 / 清空 / 复制
- 本地示例用词：示例 URL（example.com + /zh/ + /ja/）
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「hreflang标签生成工具」「多语言SEO标签生成器」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：generador de hreflang；etiquetas hreflang；hreflang sitemap；seo multilingüe
- 语气：口语工具站
- Title / H1 方向：Generador de hreflang — crea etiquetas para sitios multilingües
- 按钮短词：Generar / Ejemplo / Limpiar / Copiar
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مولّد hreflang؛ وسوم hreflang؛ hreflang sitemap؛ سيو متعدد اللغات
- 语气：偏正式工具站
- Title / H1 方向：مولّد hreflang — أنشئ وسوم اللغة للمواقع متعددة اللغات
- 按钮短词：إنشاء / مثال / مسح / نسخ
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：gerador de hreflang；tags hreflang；hreflang sitemap；seo multilíngue
- 语气：口语工具站
- Title / H1 方向：Gerador de hreflang — crie tags para sites multilíngues
- 按钮短词：Gerar / Exemplo / Limpar / Copiar
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pembuat hreflang；tag hreflang；hreflang sitemap；seo multibahasa
- 语气：口语工具站
- Title / H1 方向：Pembuat hreflang — buat tag bahasa untuk situs multibahasa
- 按钮短词：Buat / Contoh / Bersihkan / Salin
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：générateur hreflang；balises hreflang；hreflang sitemap；seo multilingue
- 语气：口语工具站
- Title / H1 方向：Générateur hreflang — créez des balises pour sites multilingues
- 按钮短词：Générer / Exemple / Effacer / Copier
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：hreflang 生成ツール；hreflang タグ；多言語 SEO；hreflang sitemap
- 语气：偏正式开发者
- Title / H1 方向：hreflang 生成ツール — 多言語サイト用の言語タグを作成
- 按钮短词：生成 / サンプル / クリア / コピー
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：генератор hreflang；теги hreflang；hreflang sitemap；многоязычное seo
- 语气：偏正式工具站
- Title / H1 方向：Генератор hreflang — создайте языковые теги для многоязычных сайтов
- 按钮短词：Создать / Пример / Очистить / Копировать
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：Hreflang Generator；Hreflang-Tags；Hreflang Sitemap；mehrsprachige SEO
- 语气：口语工具站
- Title / H1 方向：Hreflang-Generator — Sprach-Tags für mehrsprachige Websites erstellen
- 按钮短词：Erstellen / Beispiel / Leeren / Kopieren
- 可保留英文/符号：hreflang, x-default, sitemap, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]
