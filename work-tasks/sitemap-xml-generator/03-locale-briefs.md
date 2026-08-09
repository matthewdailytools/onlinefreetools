# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`sitemap-xml-generator`
**母版语言**：en
**状态**：`briefs-ready`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（lastmod/changefreq/priority 放 Rules/UI，不进 H1 堆砌）
- [x] 隐私句说清设备 + 不上服务器
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

技术专名 sitemap.xml / URL / lastmod / changefreq / priority / urlset / loc / sitemaps.org 可保留，但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 sitemap-xml-generator；H1「XML Sitemap Generator — Create sitemap.xml From URLs」；次词 sitemap.xml 生成器 / create sitemap from urls / lastmod changefreq / xml sitemap 落入 desc·FAQ·Rules·Use cases；禁拆薄页。 | 通过；可 ready |
| 1b 母版检索覆盖优化 | 2026-08-09 | 英文母版 i18n en.ts 落地；H1「XML Sitemap Generator — Create sitemap.xml From URLs」；检索词 xml sitemap generator / create sitemap from urls / sitemap generator online / lastmod changefreq 落入 title·desc·FAQ·Rules；`coverage:gate --phase=2` 绿。 | 通过；可 ready |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均已按各语检索词重写：zh「XML Sitemap 生成器 — 从 URL 列表生成 sitemap.xml」、es「…crea sitemap.xml a partir de URLs」、ja「…URL リストから sitemap.xml を作成」等；主词 sitemap 生成器入 H1，次词 lastmod/changefreq/URL 列表落入 desc·FAQ·Rules；其余语轮次2已重写。 | 通过；可 ship |

---

### en

- 检索词（3–5）：xml sitemap generator；create sitemap from urls；sitemap generator online；sitemap.xml generator；sitemap lastmod changefreq
- 语气：偏正式开发者
- Title / H1 方向：XML Sitemap Generator — Create sitemap.xml From URLs
- 按钮短词：Generate / Load sample / Clear / Copy
- 本地示例用词：a page that changed this week（lastmod 场景）
- 可保留英文/符号：sitemap.xml, urlset, loc, lastmod, changefreq, priority
- 额外禁用：无
- SERP 竞品 title（1–3）：「XML Sitemap Generator」「Free Sitemap Generator from URL List」「Sitemap Generator Online」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：sitemap 生成器；sitemap.xml 生成；从 URL 列表生成 sitemap；网站地图生成器；lastmod 格式
- 语气：偏正式开发者
- Title / H1 方向：XML Sitemap 生成器 — 从 URL 列表生成 sitemap.xml
- 按钮短词：生成 / 加载样例 / 清空 / 复制
- 本地示例用词：本周更新的页面（lastmod 场景）
- 可保留英文/符号：sitemap.xml, urlset, loc, lastmod, changefreq, priority
- 额外禁用：无
- SERP 竞品 title（1–3）：「XML Sitemap 生成器」「sitemap.xml 在线生成」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：generador de sitemap xml；crear sitemap desde urls；generador sitemap online；sitemap.xml
- 语气：偏正式开发者
- Title / H1 方向：Generador de sitemap XML — crea sitemap.xml a partir de URLs
- 按钮短词：Generar / Ejemplo / Limpiar / Copiar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مولّد sitemap؛ إنشاء خريطة الموقع من الروابط؛ خريطة الموقع XML؛ sitemap.xml
- 语气：偏正式工具站
- Title / H1 方向：مولّد خريطة الموقع XML — أنشئ sitemap.xml من الروابط
- 按钮短词：توليد / مثال / مسح / نسخ
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：gerador de sitemap xml；criar sitemap a partir de urls；gerador sitemap online；sitemap.xml
- 语气：偏正式开发者
- Title / H1 方向：Gerador de sitemap XML — crie sitemap.xml a partir de URLs
- 按钮短词：Gerar / Exemplo / Limpar / Copiar
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pembuat sitemap xml；buat sitemap dari url；pembuat sitemap online；sitemap.xml
- 语气：偏正式开发者
- Title / H1 方向：Pembuat sitemap XML — buat sitemap.xml dari daftar URL
- 按钮短词：Buat / Contoh / Bersihkan / Salin
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：générateur de sitemap xml；créer sitemap depuis des urls；générateur sitemap en ligne；sitemap.xml
- 语气：偏正式开发者
- Title / H1 方向：Générateur de sitemap XML — créez sitemap.xml à partir d’URLs
- 按钮短词：Générer / Exemple / Effacer / Copier
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：XML sitemap 生成；sitemap.xml ジェネレーター；URL から sitemap 作成；サイトマップ 作成
- 语气：偏正式开发者
- Title / H1 方向：XML sitemap 生成ツール — URL リストから sitemap.xml を作成
- 按钮短词：生成 / サンプル / クリア / コピー
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：генератор sitemap xml؛ создать sitemap из urls؛ генератор sitemap онлайн؛ sitemap.xml
- 语气：偏正式工具站
- Title / H1 方向：Генератор sitemap XML — создайте sitemap.xml из списка URL
- 按钮短词：Сгенерировать / Пример / Очистить / Копировать
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：XML Sitemap Generator；sitemap aus urls erstellen；sitemap generator online；sitemap.xml
- 语气：偏正式开发者
- Title / H1 方向：XML-Sitemap-Generator — sitemap.xml aus URLs erstellen
- 按钮短词：Generieren / Beispiel / Leeren / Kopieren
- 轮次2已重写：[x]  轮次3已抽查：[ ]
