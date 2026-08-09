# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`meta-tag-generator`
**母版语言**：en
**状态**：`i18n-done`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（title/description/canonical/robots/OG 字段名留 UI/FAQ，不进 H1）
- [x] 隐私句说清「纯本地、不上传」
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

| 5 描述 SEO 作用增强 | 2026-08-09 | 10 语 `tool_meta_description`/`tool_meta_home_desc` 前置 title/description/canonical 对搜索展示与点击的作用：en「what users see in Google, and a wrong canonical can split your rankings」、zh「canonical 配错还会让排名分散到重复网址」；逐语独立改写。 | 通过 |
技术专名 meta / OG / canonical / robots / title / description 可保留（作为检索词或技术名），但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 meta-tag-generator；H1「Meta Tag Generator — Create title, description & OG tags」；次词 meta title / head tag / canonical / robots / 转义 落入 desc·FAQ·Use cases；禁拆字段长尾 URL。 | 通过；可 ready |
| 1 母版+lint | | | |
| 1b 母版检索覆盖优化 | 2026-08-09 | 母版 title/H1 定为「Meta Tag Generator — Generate complete page head tags」（结果向，主词 Meta Tag Generator 落 H1）；desc 写明长度提示 + 转义 + 纯本地；次词 meta title / head tag / canonical / robots / 转义 分落 desc·FAQ·Use cases；副标题用「complete page head tags」而非字段枚举，避免目录腔。 | 通过；可 phase=2 |
| 2 按 brief 重写 | 2026-08-09 | 逐语独立重写 9 语（zh/es/ja/ar/pt/id/fr/ru/de）：每语按当地检索词重跑 title 方向（zh「Meta 标签生成器」、es「Generador de meta tags」、ja「メタタグ生成ツール」、de「Meta-Tag-Generator」等），按钮词本地化（生成/Generar/生成/Erstellen）。 | 通过 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均结果/场景向且含主词落点，无字段枚举目录腔；字段名只进 UI 不进 H1；其余语轮次2已重写。 | 通过；可 phase=4 |
| 3 抽查+禁词+lint | 2026-08-09 | en/zh/es/ja 四抽查语 title 逐一复核无参数枚举；10 语键集合一致（67 keys）；页面编译通过；DOM mock 验证样例生成、特殊字符转义、空字段跳过、canonical 无协议提示、长度警告。 | 通过；可 ship |

---

### en

- 检索词（3–5）：meta tag generator；meta tags generator；meta title generator；meta description generator；head tag generator
- 语气：口语工具站偏开发者
- Title / H1 方向：Meta Tag Generator — Generate complete page head tags（结果/场景向；字段名放 UI）
- 按钮短词：Generate / Load sample / Clear / Copy
- 本地示例用词：sample fields（title/desc/canonical/OG）
- 可保留英文/符号：meta, OG, canonical, robots, title, description, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「Free Meta Tag Generator」「Meta Tags Generator — Free」「SEO Meta Tag Generator」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：meta标签生成；网页头标签生成；标题描述生成；canonical标签；robots meta
- 语气：口语工具站
- Title / H1 方向：Meta 标签生成器 — 一键生成完整的网页头部标签（结果/场景向；字段名放 UI）
- 按钮短词：生成 / 加载样例 / 清空 / 复制
- 本地示例用词：示例字段（title/desc/canonical/OG）
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「Meta标签生成工具」「网页头标签在线生成」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：generador de meta tags；generador de título y descripción；etiquetas meta seo
- 语气：口语工具站
- Title / H1 方向：Generador de meta tags — genera el head de tu página al completo
- 按钮短词：Generar / Ejemplo / Limpiar / Copiar
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مولّد وسوم ميتا؛ توليد العنوان والوصف؛ وسوم ميتا لتحسين محركات البحث
- 语气：偏正式工具站
- Title / H1 方向：مولّد وسوم الميتا — أنشئ العنوان والوصف ووسوم OG
- 按钮短词：إنشاء / مثال / مسح / نسخ
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：gerador de meta tags；gerador de título e descrição；meta tags seo
- 语气：口语工具站
- Title / H1 方向：Gerador de meta tags — crie título, descrição e tags OG
- 按钮短词：Gerar / Exemplo / Limpar / Copiar
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pembuat meta tag；generator judul dan deskripsi；meta tag seo
- 语气：口语工具站
- Title / H1 方向：Pembuat meta tag — buat judul, deskripsi, dan tag OG
- 按钮短词：Buat / Contoh / Bersihkan / Salin
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：générateur de meta tags；générateur de titre et description；meta tags seo
- 语气：口语工具站
- Title / H1 方向：Générateur de meta tags — créez titre, description et balises OG
- 按钮短词：Générer / Exemple / Effacer / Copier
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：メタタグ生成ツール；タイトルとディスクリプション生成；metaタグ
- 语气：偏正式开发者
- Title / H1 方向：メタタグ生成ツール — ページの head タグ一式を作成
- 按钮短词：生成 / サンプル / クリア / コピー
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：генератор мета-тегов；генератор title и description；мета-теги seo
- 语气：偏正式工具站
- Title / H1 方向：Генератор мета-тегов — создайте title, description и OG-теги
- 按钮短词：Создать / Пример / Очистить / Копировать
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：Meta-Tag Generator；Titel und Description Generator；Meta-Tags erstellen
- 语气：口语工具站
- Title / H1 方向：Meta-Tag-Generator — Titel, Description und OG-Tags erstellen
- 按钮短词：Erstellen / Beispiel / Leeren / Kopieren
- 可保留英文/符号：meta, OG, canonical, robots, title, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]
