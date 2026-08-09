# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`utm-builder`
**母版语言**：en
**状态**：`i18n-done`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（utm_source/medium/campaign 名留 UI/FAQ，不进 H1）
- [x] 隐私句说清「纯本地、不上传」
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

| 5 描述 SEO 作用增强 | 2026-08-09 | 10 语 `tool_utm_description`/`tool_utm_home_desc` 前置 UTM 对流量归因的作用（规范标记才能看清各渠道引流）：en「prove which campaigns…actually drive your traffic」、zh「你的 SEO 与营销投入在数据里就无从归因」；逐语独立改写。 | 通过 |
技术专名 UTM / utm_source / GA4 / URL 可保留（作为检索词或技术名），但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 utm-builder；H1「UTM Builder — Create campaign tracking URLs」；次词 UTM parameters / campaign URL builder / GA4 归因 / URL 编码 落入 desc·FAQ·Use cases；禁拆参数长尾 URL。 | 通过；可 ready |
| 1 母版+lint | | | |
| 1b 母版检索覆盖优化 | 2026-08-09 | en title「UTM Builder — Create campaign tracking URLs」为结果/场景向：主词 UTM Builder 在 H1，避免「5 参数表单」目录腔（参数名留 UI）；desc 含编码 + 纯本地 + 已有 query 合并边界；campaign URL builder、GA4 tracking 次词落入 FAQ/Use cases。 | 通过；可 phase=2 |
| 2 按 brief 重写 | 2026-08-09 | 逐语独立重写 9 语（zh/es/ja/ar/pt/id/fr/ru/de）：每语按当地检索词重跑 title 方向（zh「UTM 链接生成器」、es「Creador de UTM」、ja「UTM ビルダー」、de「UTM-Builder」等），按钮词本地化（生成/Generar/生成/Erstellen）。 | 通过 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均结果/场景向且含主词落点，无「5 参数表单」目录腔；其余语轮次2已重写。 | 通过；可 phase=4 |
| 3 抽查+禁词+lint | 2026-08-09 | en/zh/es/ja 四抽查语 title 逐一复核无参数枚举；10 语键集合一致（75 keys）；页面编译通过；DOM mock 验证样例生成、参数合并与中文/空格编码。 | 通过；可 ship |

---

### en

- 检索词（3–5）：utm builder；campaign url builder；utm generator；utm parameters；ga4 campaign tracking
- 语气：口语工具站偏开发者
- Title / H1 方向：UTM Builder — Create campaign tracking URLs（结果/场景向）
- 按钮短词：Generate / Load sample / Clear / Copy
- 本地示例用词：sample URL（example.com/page）
- 可保留英文/符号：UTM, utm_source, utm_medium, utm_campaign, URL, GA4
- 额外禁用：无
- SERP 竞品 title（1–3）：「Google Campaign URL Builder」「Free UTM Builder Tool」「UTM Link Generator」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：UTM链接生成；活动追踪链接；UTM参数；GA4归因；campaign链接
- 语气：口语工具站
- Title / H1 方向：UTM 链接生成器 — 创建活动追踪链接（结果/场景向；参数名放 UI）
- 按钮短词：生成 / 加载样例 / 清空 / 复制
- 本地示例用词：示例 URL（example.com/page）
- 可保留英文/符号：UTM, utm_source, utm_medium, URL, GA4
- 额外禁用：无
- SERP 竞品 title（1–3）：「UTM链接生成工具」「活动追踪链接生成器」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：creador de utm；generador de enlaces de campaña；parámetros utm；utm google analytics
- 语气：口语工具站
- Title / H1 方向：Creador de UTM — genera enlaces de seguimiento de campañas
- 按钮短词：Generar / Ejemplo / Limpiar / Copiar
- 可保留英文/符号：UTM, utm_source, utm_medium, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：منشئ UTM؛ رابط تتبع الحملة؛ معلمات UTM؛ تتبع جوجل أناليتكس
- 语气：偏正式工具站
- Title / H1 方向：منشئ UTM — أنشئ روابط تتبع الحملات
- 按钮短词：إنشاء / مثال / مسح / نسخ
- 可保留英文/符号：UTM, utm_source, utm_medium, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：criador de utm；gerador de link de campanha；parâmetros utm；utm google analytics
- 语气：口语工具站
- Title / H1 方向：Criador de UTM — gere links de rastreamento de campanha
- 按钮短词：Gerar / Exemplo / Limpar / Copiar
- 可保留英文/符号：UTM, utm_source, utm_medium, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pembuat utm；generator link kampanye；parameter utm；utm google analytics
- 语气：口语工具站
- Title / H1 方向：Pembuat UTM — buat link pelacakan kampanye
- 按钮短词：Buat / Contoh / Bersihkan / Salin
- 可保留英文/符号：UTM, utm_source, utm_medium, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：générateur utm；créateur de lien de campagne；paramètres utm；utm google analytics
- 语气：口语工具站
- Title / H1 方向：Générateur UTM — créez des liens de suivi de campagne
- 按钮短词：Générer / Exemple / Effacer / Copier
- 可保留英文/符号：UTM, utm_source, utm_medium, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：UTM 生成ツール；キャンペーン URL ビルダー；UTM パラメータ；GA4 トラッキング
- 语气：偏正式开发者
- Title / H1 方向：UTM ビルダー — キャンペーン追跡リンクを作成
- 按钮短词：生成 / サンプル / クリア / コピー
- 可保留英文/符号：UTM, utm_source, utm_medium, URL, GA4
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：конструктор utm；генератор ссылок кампании；параметры utm；utm google analytics
- 语气：偏正式工具站
- Title / H1 方向：Конструктор UTM — создайте трекинговые ссылки кампании
- 按钮短词：Создать / Пример / Очистить / Копировать
- 可保留英文/符号：UTM, utm_source, utm_medium, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：UTM Builder；Campaign-URL-Generator；UTM-Parameter；GA4 Tracking
- 语气：口语工具站
- Title / H1 方向：UTM-Builder — Tracking-Links für Kampagnen erstellen
- 按钮短词：Erstellen / Beispiel / Leeren / Kopieren
- 可保留英文/符号：UTM, utm_source, utm_medium, URL, GA4
- 轮次2已重写：[x]  轮次3已抽查：[ ]
