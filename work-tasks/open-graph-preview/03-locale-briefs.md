# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`open-graph-preview`
**母版语言**：en
**状态**：`i18n-done`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（平台名与字段名留 UI/FAQ，不进 H1）
- [x] 隐私句说清「粘贴本地解析；URL 模式仅当次拉取不存储」
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

| 5 描述 SEO 作用增强 | 2026-08-09 | 10 语 `tool_og_description`/`tool_og_home_desc` 前置 OG 标签对分享点击的作用：en「Make every social share of your page earn clicks」、zh「缺图或缺标题都会白白损失点击与转发」；逐语独立改写。 | 通过 |
技术专名 OG / og:title / twitter:card / Facebook / X / 1.91:1 可保留（作为技术名），但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 open-graph-preview；H1「Open Graph Preview — Check social share cards」；次词 og checker / twitter card / og image size / fallback 落入 desc·FAQ·Use cases；禁拆平台 URL。 | 通过；可 ready |
| 1 母版+lint | | | |
| 1b 母版检索覆盖优化 | 2026-08-09 | en title「Open Graph Preview — Check social share cards」为结果/场景向：主词 Open Graph Preview 在 H1，副标题避免平台名枚举（Facebook/X/WhatsApp 不进 H1）；desc 含粘贴/URL 双模式与隐私说明；og checker、twitter card preview 次词落入 desc/FAQ/Use cases；补平台图片比例与 fallback 规则 IG。 | 通过；可 phase=2 |
| 2 按 brief 重写 | 2026-08-09 | 逐语独立重写 9 语（zh/es/ja/ar/pt/id/fr/ru/de）：每语按当地检索词重跑 title 方向（zh「Open Graph 预览 — 检查社交分享卡片」、es「Vista previa de Open Graph」、ja「Open Graph プレビュー」、de「Open-Graph-Vorschau」等），按钮词本地化（预览/Vista previa/プレビュー/Vorschau）。 | 通过 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均结果/场景向且含主词落点，无平台名枚举目录腔；其余语轮次2已重写。 | 通过；可 phase=4 |
| 3 抽查+禁词+lint | 2026-08-09 | en/zh/es/ja 四抽查语 title 逐一复核无参数枚举；10 语键集合一致（76 keys）；页面/Worker 编译通过；DOM mock 验证样例自动渲染三卡片+字段表。 | 通过；可 ship |

---

### en

- 检索词（3–5）：open graph preview；og checker；social share preview；twitter card preview；open graph validator
- 语气：口语工具站偏开发者
- Title / H1 方向：Open Graph Preview — Check social share cards（结果/场景向）
- 按钮短词：Preview / Load sample / Clear / Copy / Fetch URL
- 本地示例用词：sample og tags（含 1200×630 og:image）
- 可保留英文/符号：OG, og:, twitter:card, Facebook, X, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「Open Graph Preview — Free」「Facebook Link Preview Checker」「OG Tag Validator」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：Open Graph 预览；链接分享预览；og标签检查；社交卡片预览；微信分享卡片
- 语气：口语工具站
- Title / H1 方向：Open Graph 预览 — 检查社交分享卡片（结果/场景向；平台名放 UI）
- 按钮短词：预览 / 加载样例 / 清空 / 复制 / 抓取 URL
- 本地示例用词：示例 og 标签（含 1200×630 og:image）
- 可保留英文/符号：OG, og:, twitter:card, URL
- 额外禁用：无
- SERP 竞品 title（1–3）：「Open Graph 预览工具」「链接分享预览」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：vista previa open graph；checker og；vista previa de enlace compartido；twitter card preview
- 语气：口语工具站
- Title / H1 方向：Vista previa de Open Graph — revisa las tarjetas de redes sociales
- 按钮短词：Vista previa / Ejemplo / Limpiar / Copiar / Obtener URL
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：معاينة Open Graph؛ فحص وسوم og؛ معاينة مشاركة الرابط؛ بطاقة تويتر
- 语气：偏正式工具站
- Title / H1 方向：معاينة Open Graph — تحقق من بطاقات المشاركة الاجتماعية
- 按钮短词：معاينة / مثال / مسح / نسخ / جلب الرابط
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：prévia open graph；verificador og；prévia de link compartilhado；twitter card
- 语气：口语工具站
- Title / H1 方向：Prévia de Open Graph — confira os cards de redes sociais
- 按钮短词：Prévia / Exemplo / Limpar / Copiar / Buscar URL
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pratinjau open graph；cek og tag；pratinjau tautan share；kartu twitter
- 语气：口语工具站
- Title / H1 方向：Pratinjau Open Graph — cek kartu bagikan media sosial
- 按钮短词：Pratinjau / Contoh / Bersihkan / Salin / Ambil URL
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：aperçu open graph；vérificateur og；aperçu du lien partagé；twitter card
- 语气：口语工具站
- Title / H1 方向：Aperçu Open Graph — vérifiez les cartes de partage social
- 按钮短词：Aperçu / Exemple / Effacer / Copier / Récupérer l'URL
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：Open Graph プレビュー；OG チェッカー；リンク共有プレビュー；Twitter カード
- 语气：偏正式开发者
- Title / H1 方向：Open Graph プレビュー — ソーシャル共有カードを確認
- 按钮短词：プレビュー / サンプル / クリア / コピー / URL 取得
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：предпросмотр open graph；проверка og тегов；превью ссылки；твиттер-карточка
- 语气：偏正式工具站
- Title / H1 方向：Предпросмотр Open Graph — проверьте карточки соцсетей
- 按钮短词：Предпросмотр / Пример / Очистить / Копировать / Загрузить URL
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：Open Graph Vorschau；OG Checker；Link-Vorschau teilen；Twitter Card
- 语气：口语工具站
- Title / H1 方向：Open-Graph-Vorschau — prüfe Social-Share-Karten
- 按钮短词：Vorschau / Beispiel / Leeren / Kopieren / URL laden
- 可保留英文/符号：OG, og:, twitter:card, URL
- 轮次2已重写：[x]  轮次3已抽查：[ ]
