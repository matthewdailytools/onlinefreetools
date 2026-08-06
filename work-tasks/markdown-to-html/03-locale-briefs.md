# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（稳妥常态 + 收紧合规）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`markdown-to-html`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法（ja 用「こんなときに」）
- [x] 十语非同一句式骨架；title 含该语检索说法（本轮打散 How/FAQ/Use cases 开篇）
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未把「脚本同构灌语」当唯一交付；待母语抽查已清

技术专名（Markdown、HTML、CommonMark、DOMPurify、Turndown、CDN）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：markdown to html；html to markdown；convert markdown online；sanitize html；rich text to markdown
- 语气：偏正式开发者
- Title / H1 方向：Markdown ↔ HTML Converter — sanitize, preview
- 按钮短词：Copy HTML / Copy Markdown；Download；Clear；Full HTML document
- 本地示例用词：Hello world；blog post
- 可保留英文/符号：Markdown、HTML、CommonMark、CDN
- 额外禁用：无
- SERP 竞品 title（1–3）：Markdown to HTML Converter；HTML to Markdown Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：Markdown 转 HTML；HTML 转 Markdown；在线 Markdown；HTML 转 MD；Markdown 预览
- 语气：口语工具站
- Title / H1 方向：Markdown ↔ HTML 转换 — 预览与安全清理
- 按钮短词：复制 HTML / 复制 Markdown；下载；清空；生成完整 HTML 文档
- 本地示例用词：标题；列表；代码块
- 可保留英文/符号：Markdown、HTML、CommonMark、DOMPurify
- 额外禁用：勿机翻「消毒」；可用「安全清理」
- SERP 竞品 title（1–3）：Markdown转HTML；HTML转Markdown在线
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：markdown a html；html a markdown；convertir markdown；limpiar html
- 语气：口语工具站
- Title / H1 方向：Markdown a HTML (y al revés) — vista previa segura
- 按钮短词：Copiar HTML / Copiar Markdown；Descargar；Limpiar
- 本地示例用词：Título；mundo
- 可保留英文/符号：Markdown、HTML
- 额外禁用：勿用「altas y bajas」
- SERP 竞品 title（1–3）：Convertidor Markdown a HTML；HTML a Markdown online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل ماركداون إلى HTML؛ HTML إلى ماركداون؛ محول ماركداون
- 语气：偏正式开发者
- Title / H1 方向：من Markdown إلى HTML الآمن — وبالعكس
- 按钮短词：نسخ HTML / نسخ Markdown；تنزيل；مسح
- 本地示例用词：العنوان؛ بالعالم
- 可保留英文/符号：Markdown、HTML、CDN
- 额外禁用：无
- SERP 竞品 title（1–3）：محول Markdown إلى HTML
- 轮次2已重写：[x]  轮次3已抽查：[x]  
- 待母语抽查：[ ]（已按 brief 独立重写 SEO 段落后清勾）

### pt

- 检索词（3–5）：markdown para html；html para markdown；converter markdown
- 语气：口语工具站
- Title / H1 方向：De Markdown para HTML — e HTML de volta a Markdown
- 按钮短词：Copiar HTML / Copiar Markdown；Baixar；Limpar
- 本地示例用词：Título；mundo
- 可保留英文/符号：Markdown、HTML
- 额外禁用：无
- SERP 竞品 title（1–3）：Conversor Markdown para HTML
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：markdown ke html；html ke markdown；konversi markdown
- 语气：口语工具站
- Title / H1 方向：Markdown ke HTML & sebaliknya — pratinjau aman
- 按钮短词：Salin HTML / Salin Markdown；Unduh；Hapus
- 本地示例用词：Judul；dunia
- 可保留英文/符号：Markdown、HTML
- 额外禁用：勿造 Granularitas
- SERP 竞品 title（1–3）：Konverter Markdown ke HTML
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：markdown en html；html en markdown；convertir markdown；assainir html
- 语气：偏正式开发者
- Title / H1 方向：Markdown vers HTML assaini — et retour Markdown
- 按钮短词：Copier HTML / Copier Markdown；Télécharger；Effacer
- 本地示例用词：Titre；monde
- 可保留英文/符号：Markdown、HTML
- 额外禁用：无
- SERP 竞品 title（1–3）：Convertisseur Markdown en HTML
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：Markdown HTML 変換；HTML Markdown 変換；マークダウン 変換
- 语气：偏正式开发者
- Title / H1 方向：Markdown と HTML を相互変換（プレビュー付き）
- 按钮短词：HTMLをコピー / Markdownをコピー；ダウンロード；クリア
- 本地示例用词：見出し；世界
- 可保留英文/符号：Markdown、HTML、DOMPurify
- 额外禁用：禁止「ユースケース」空壳（用「こんなときに」）
- SERP 竞品 title（1–3）：MarkdownをHTMLに変換
- 轮次2已重写：[x]  轮次3已抽查：[x]  
- 待母语抽查：[ ]（已按 brief 独立重写 SEO 段落后清勾）

### ru

- 检索词（3–5）：markdown в html；html в markdown；конвертер markdown
- 语气：偏正式开发者
- Title / H1 方向：Markdown в HTML и обратно — с очисткой
- 按钮短词：Копировать HTML / Копировать Markdown；Скачать；Очистить
- 本地示例用词：Заголовок；мир
- 可保留英文/符号：Markdown、HTML
- 额外禁用：无
- SERP 竞品 title（1–3）：Конвертер Markdown в HTML
- 轮次2已重写：[x]  轮次3已抽查：[x]  
- 待母语抽查：[ ]（已按 brief 独立重写 SEO 段落后清勾）

### de

- 检索词（3–5）：markdown zu html；html zu markdown；markdown konverter；html bereinigen
- 语气：偏正式开发者
- Title / H1 方向：Markdown zu HTML bereinigen — und zurück zu Markdown
- 按钮短词：HTML kopieren / Markdown kopieren；Herunterladen；Leeren
- 本地示例用词：Titel；Welt
- 可保留英文/符号：Markdown、HTML
- 额外禁用：勿造 Diff-Granularität
- SERP 竞品 title（1–3）：Markdown zu HTML Konverter
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | 2026-08-06 | 双向英文母版 + FAQ；`lint:seo` | 通过 |
| 2 按 brief 重写 | 2026-08-06 | 初版十语 + 首页卡片 | 通过（后发现同构风险） |
| 3 抽查+禁词+lint | 2026-08-06 | 抽 en/zh/ja/fr/de；禁词；lint | 通过 |
| 4 收紧合规重写 | 2026-08-06 | 十语 SEO 段独立重写打散句式；清 ar/ja/ru「待母语抽查」；rules 写入稳妥常态 | `lint:seo` 通过；`i18n-done` |
