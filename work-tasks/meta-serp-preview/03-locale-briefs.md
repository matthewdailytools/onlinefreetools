# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`meta-serp-preview`
**母版语言**：en
**状态**：`briefs-ready`

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（「字符+像素+桌面+移动」放 desc/UI，不进 H1）
- [x] 隐私句说清设备 + 不上服务器
- [x] 十语非同一句式骨架（实现时逐语重写）
- [x] 未依赖英文回退
- [x] 未脚本同构灌语；无待母语抽查
- [x] **清单前检索覆盖已做**（覆盖表在 02；`coverage:gate --phase=0b` 绿）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4 再勾）

技术专名 SERP / Google / title / description / CJK / emoji 可保留（作为检索词或技术名），但不可替代本地主 title。

---

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | slug 保留 meta-serp-preview；H1「Google SERP Preview — Check title & description snippets」；次词 meta description preview / title length / Google snippet / 截断 落入 desc·FAQ·Use cases；禁拆 title/desc 两 URL。 | 通过；可 ready |
| 1b 母版检索覆盖优化 | 2026-08-09 | en 母版落地后复核：H1「Google SERP Preview — Check title & description snippets」主词 SERP Preview 在 H1；次词 meta description / title length / snippet / pixel 落入 description、FAQ、Rules、Use cases；去参数枚举（未把字符/像素/桌面/移动堆进 H1）。 | 通过；可 phase=2 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja 四语 title 均已按各语检索词重写：es「Vista previa de resultados de Google — mira el corte de título y descripción」、ja「Google 検索結果プレビュー — タイトルと説明文の切れ目を確認」等，无参数枚举目录腔；ru/de 对齐 brief H1；其余语轮次2已重写。 | 通过；可 ship |

---

### en

- 检索词（3–5）：google serp preview；meta description preview；title length checker；google snippet preview；meta tag preview
- 语气：口语工具站偏开发者
- Title / H1 方向：Google SERP Preview — Check title & description snippets（结果/场景向；控件名留给 UI）
- 按钮短词：Preview / Load sample / Clear / Copy
- 本地示例用词：CJK title（说明宽字符）
- 可保留英文/符号：SERP, Google, title, description, CJK, emoji
- 额外禁用：无
- SERP 竞品 title（1–3）：「Free Google SERP Preview Tool」「SERP Snippet Preview — free」「Title and Meta Description Length Checker」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：标题长度检测；描述预览；搜索结果预览；Google 标题截断；meta 描述怎么写
- 语气：口语工具站
- Title / H1 方向：Google 搜索结果预览 — 查看标题与描述截断效果（结果/场景向；「字符/像素」放 UI 与 FAQ）
- 按钮短词：预览 / 加载样例 / 清空 / 复制
- 本地示例用词：中文标题（宽字符截断更快）
- 可保留英文/符号：Google, SERP, title, description
- 额外禁用：无
- SERP 竞品 title（1–3）：「Google SERP 预览工具」「标题长度在线检测」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：vista previa serp google；longitud del título seo；vista previa de la descripción；cuánto dura un título google
- 语气：口语工具站
- Title / H1 方向：Vista previa de resultados de Google — mira el corte de título y descripción
- 按钮短词：Vista previa / Ejemplo / Limpiar / Copiar
- 可保留英文/符号：SERP, Google, title, description
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：معاينة نتائج بحث جوجل؛ طول العنوان؛ معاينة الوصف؛ عدد أحرف العنوان
- 语气：偏正式工具站
- Title / H1 方向：معاينة نتائج جوجل — تحقق من اقتطاع العنوان والوصف
- 按钮短词：معاينة / مثال / مسح / نسخ
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：prévia do serp google；verificar título seo；prévia da descrição meta；tamanho do título
- 语气：口语工具站
- Title / H1 方向：Prévia de resultados Google — confira o corte do título e da descrição
- 按钮短词：Prévia / Exemplo / Limpar / Copiar
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：pratinjau serp google；panjang judul seo；pratinjau deskripsi meta；cek judul
- 语气：口语工具站
- Title / H1 方向：Pratinjau hasil Google — cek potongan judul dan deskripsi
- 按钮短词：Pratinjau / Contoh / Bersihkan / Salin
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：aperçu serp google；longueur du titre seo；aperçu de la description；coupe du titre
- 语气：口语工具站
- Title / H1 方向：Aperçu des résultats Google — vérifiez la coupure du titre et de la description
- 按钮短词：Aperçu / Exemple / Effacer / Copier
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：Google 検索結果プレビュー；タイトル文字数チェック；ディスクリプション プレビュー；タイトル切れ
- 语气：偏正式开发者
- Title / H1 方向：Google 検索結果プレビュー — タイトルと説明文の切れ目を確認
- 按钮短词：プレビュー / サンプル / クリア / コピー
- 可保留英文/符号：Google, SERP, title, description
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：предпросмотр сниппета гугл；длина title；предпросмотр description；обрезание заголовка
- 语气：偏正式工具站
- Title / H1 方向：Предпросмотр результатов Google — проверьте обрезание заголовка и описания
- 按钮短词：Предпросмотр / Пример / Очистить / Копировать
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：Google Snippet Vorschau；Titel-Länge prüfen；Meta-Description Vorschau；Title Abschneiden
- 语气：口语工具站
- Title / H1 方向：Google Ergebnisvorschau — prüfe Abschneiden von Titel und Beschreibung
- 按钮短词：Vorschau / Beispiel / Leeren / Kopieren
- 轮次2已重写：[x]  轮次3已抽查：[ ]
