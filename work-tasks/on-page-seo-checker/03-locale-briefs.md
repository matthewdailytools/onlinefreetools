# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`on-page-seo-checker`
**母版语言**：en
**状态**：`i18n-done`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（检查项名单放 UI/FAQ，不进 H1）
- [x] 隐私句说清「粘贴本地解析；URL 模式仅当次拉取不存储」
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

技术专名 H1 / canonical / JSON-LD / OG / mixed content / render-blocking / SSR 可保留（作为检索词或技术名），但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 on-page-seo-checker；H1「On-Page SEO Checker — Audit title, H1, meta & canonical」；次词 meta tag checker / H1 checker / canonical / JSON-LD / mixed content 落入 desc·FAQ·Use cases；禁拆 canonical/OG 薄页。 | 通过；可 ready |
| 1 母版+lint | 2026-08-09 | en 母版落地；页面组件完成（HTML 粘贴/URL 双模式、10 项检查、进页自动样例）；Worker API /api/tools/on-page-seo 已注册。 | 通过 |
| 1b 母版检索覆盖优化 | 2026-08-09 | en title 因副标题「Audit title, H1, meta & canonical」含逗号枚举被判目录腔，改为「Find and fix page tag issues」；主词 On-Page SEO Checker 仍在 H1；desc 保留 meta/H1/canonical 落点与本地处理说明。 | 通过；可 phase=2 |
| 2 按 brief 重写 | 2026-08-09 | 逐语独立重写 9 语（zh/es/ja/ar/pt/id/fr/ru/de）：每语按当地检索词重跑 title 方向（zh「页面 SEO 检查器」、es「Auditor SEO On-Page」、ja「オンページ SEO チェッカー」、de「On-Page-SEO-Prüfung」等），按钮词本地化（检查/Comprobar/チェック/Prüfen）。 | 通过 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均结果/场景向且含主词落点：en「On-Page SEO Checker — Find and fix page tag issues」、zh「页面 SEO 检查器 — 找出并修复页面标签问题」、es「Auditor SEO On-Page — detecta y corrige etiquetas」、ja「オンページ SEO チェッカー — ページのタグ問題を見つけて直す」；无参数枚举目录腔；其余语轮次2已重写。 | 通过；可 phase=4 |
| 3 抽查+禁词+lint | 2026-08-09 | en/zh/es/ja 四抽查语 title 逐一复核无参数枚举；禁词表全勾；10 语键集合一致（95 keys）；页面/Worker 编译通过。 | 通过；可 ship |
| 3b 交互修复 | 2026-08-09 | 渲染后页面脚本语法检查发现 JSON-LD 样例字符串含未转义 `</script>`，被 HTML 解析器提前截断内联脚本（block 4 语法错误）。改为 `<\\/script>` 后全部 6 个 script 块语法通过；DOM mock 执行样例自动运行输出 2 issues / 4 warnings / 3 passed。 | 通过 |
| 4 描述 SEO 作用增强 | 2026-08-09 | 10 语 `tool_onpage_description` 与 `tool_onpage_home_desc` 前置 SEO 价值句（en「Weak titles… quietly cost rankings and clicks」；zh「标题偏弱…都会悄悄拖累搜索排名与点击」），使工具对搜索排名/点击的作用在描述直接可见；逐语按当地表达习惯独立改写，非直译。 | 通过 |

---

### en

- 检索词（3–5）：on page seo checker；meta tag checker；h1 tag checker；canonical tag checker；on page seo audit
- 语气：口语工具站偏开发者
- Title / H1 方向：On-Page SEO Checker — Audit title, H1, meta & canonical（结果/场景向；检查项名单留 UI）
- 按钮短词：Check / Load sample / Clear / Copy / Fetch URL
- 本地示例用词：sample HTML（含一处 http:// 图片触发 mixed content 提示）
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「Free On-Page SEO Checker」「Meta Tag Checker — SEO Audit」「Website SEO Analyzer」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：页面SEO检测；meta标签检测；H1标签检查；canonical标签检查；单页SEO体检
- 语气：口语工具站
- Title / H1 方向：页面 SEO 检查 — 检测标题、H1、meta 与 canonical（结果/场景向；「十个检查项」放 UI）
- 按钮短词：检查 / 加载样例 / 清空 / 复制 / 抓取 URL
- 本地示例用词：示例 HTML（含一处 http:// 图片触发混合内容提示）
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「免费页面SEO检查工具」「Meta标签检测器」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：auditor seo on page；comprobar meta tags；checker h1；etiqueta canonical
- 语气：口语工具站
- Title / H1 方向：Auditor SEO on-page — revisa título, H1, meta y canonical
- 按钮短词：Comprobar / Ejemplo / Limpiar / Copiar / Obtener URL
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：无
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فحص السيو داخل الصفحة؛ فحص وسوم الميتا؛ فحص H1؛ الوسم canonical
- 语气：偏正式工具站
- Title / H1 方向：مدقق SEO للصفحة — راجع العنوان وH1 والميتا والـ canonical
- 按钮短词：فحص / مثال / مسح / نسخ / جلب الرابط
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：verificador seo on page；checar meta tags；verificador de h1；tag canonical
- 语气：口语工具站
- Title / H1 方向：Verificador SEO on-page — confira título, H1, meta e canonical
- 按钮短词：Verificar / Exemplo / Limpar / Copiar / Buscar URL
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pengecek seo on page；cek meta tag；cek h1；kanonikal
- 语气：口语工具站
- Title / H1 方向：Pemeriksa SEO on-page — cek judul, H1, meta, dan canonical
- 按钮短词：Periksa / Contoh / Bersihkan / Salin / Ambil URL
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：audit seo on page；vérifier les meta tags；checker h1；balise canonical
- 语气：口语工具站
- Title / H1 方向：Audit SEO de page — vérifiez titre, H1, meta et canonical
- 按钮短词：Vérifier / Exemple / Effacer / Copier / Récupérer l'URL
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：オンページSEOチェック；メタタグチェック；H1 チェック；canonical チェック
- 语气：偏正式开发者
- Title / H1 方向：オンページ SEO チェッカー — タイトル・H1・meta・canonical を確認
- 按钮短词：チェック / サンプル / クリア / コピー / URL 取得
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：проверка seo на странице；проверка мета-тегов；проверка h1；канонический тег
- 语气：偏正式工具站
- Title / H1 方向：Проверка SEO страницы — оцените title, H1, meta и canonical
- 按钮短词：Проверить / Пример / Очистить / Копировать / Загрузить URL
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：On-Page SEO Checker；Meta-Tags prüfen；H1 prüfen；canonical prüfen
- 语气：口语工具站
- Title / H1 方向：On-Page-SEO-Prüfung — Titel, H1, Meta und canonical prüfen
- 按钮短词：Prüfen / Beispiel / Leeren / Kopieren / URL laden
- 可保留英文/符号：H1, canonical, JSON-LD, OG, meta, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]
