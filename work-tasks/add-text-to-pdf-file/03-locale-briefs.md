# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`add-text-to-pdf-file`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（PDF、X、Y、pt 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把字号、颜色、透明度、旋转串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：不得写成「编辑 PDF 已有文字」或「铺满水印」；与 `edit-pdf-text-online` / `pdf-watermark` 的差异须在 FAQ 说清。Example / FAQ 数字与样例固定（CONFIDENTIAL、2 页、US Letter、18 pt、#c62828、85%、Bottom right、`-text.pdf`、`1-3, 5, 8-`、200 字符）各语不得改动（小数点可按当地习惯）。`err_range_tpl` 的 `{bad}`、`stats_tpl` 的 `{n}` `{x}` `{y}` `{size}`、`xy_set_tpl` 的 `{x}` `{y}` 原样保留；How / FAQ 中引用的按钮名须与该语控件文案一致。

---

## 每语 brief

### en
- 检索词：add text to PDF；stamp text on PDF；add text to every page of PDF；add text at X Y coordinates PDF；CONFIDENTIAL stamp PDF
- 语气：口语 + 办公文件友好
- Title：Add Text to PDF — Stamp a Label on Every Page at X/Y in Your Browser
- 按钮：Add text / Download / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：PDF 添加文字；PDF 盖章文字；PDF 每一页加字；PDF 坐标 加文字；PDF 标注机密
- 语气：口语 + 办公
- Title：PDF 添加文字 — 在浏览器里给每一页指定位置盖上标签
- 按钮：添加文字 / 下载 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：PDF 文字 追加；PDF テキスト 挿入；PDF 全ページ スタンプ；PDF 座標 文字；CONFIDENTIAL PDF
- 语气：です・ます
- Title：PDFに文字を追加 — ブラウザで各ページの指定位置にラベルを押す
- 按钮：文字を追加 / ダウンロード / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：إضافة نص إلى PDF؛ ختم نص على PDF؛ إضافة نص لكل صفحة؛ إحداثيات X Y؛ CONFIDENTIAL
- 语气：فصحى مبسطة
- Title：إضافة نص إلى PDF — ختم تسمية على كل صفحة عند الإحداثيات في المتصفح
- 按钮：إضافة النص / تنزيل / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：añadir texto a PDF；poner texto en PDF；sello de texto en cada página；coordenadas X Y PDF；CONFIDENTIAL PDF
- 语气：tú
- Title：Añadir texto a un PDF — Sella una etiqueta en cada página en X/Y desde el navegador
- 按钮：Añadir texto / Descargar / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：adicionar texto ao PDF；carimbar texto no PDF；texto em todas as páginas；coordenadas X Y；CONFIDENTIAL
- 语气：você（pt-BR）
- Title：Adicionar texto ao PDF — Carimbe um rótulo em cada página em X/Y no navegador
- 按钮：Adicionar texto / Baixar / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：ajouter du texte à un PDF；tampon texte PDF；texte sur chaque page；coordonnées X Y；CONFIDENTIAL PDF
- 语气：vouvoiement
- Title：Ajouter du texte à un PDF — Apposez une étiquette sur chaque page en X/Y dans le navigateur
- 按钮：Ajouter le texte / Télécharger / Charger l’exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Text in PDF einfügen；PDF Text stempel；Text auf jeder Seite；Koordinaten X Y；CONFIDENTIAL PDF
- 语气：Sie-Form
- Title：Text in PDF einfügen — Etikett auf jeder Seite an X/Y im Browser stempeln
- 按钮：Text hinzufügen / Herunterladen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：добавить текст в PDF；штамп текст PDF；текст на каждой странице；координаты X Y；CONFIDENTIAL
- 语气：нейтральный，на «вы»
- Title：Добавить текст в PDF — поставьте метку на каждой странице по X/Y в браузере
- 按钮：Добавить текст / Скачать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：tambah teks ke PDF；cap teks PDF；teks di setiap halaman；koordinat X Y；CONFIDENTIAL
- 语气：Anda
- Title：Tambah Teks ke PDF — Cap Label di Setiap Halaman pada X/Y di Browser
- 按钮：Tambah teks / Unduh / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Add text to a PDF file」改为 stamp + every page + X/Y；02 同意图搜索全表（盖字、每页、坐标、扫描件、CJK 吸；改已有文字、铺满水印、证书签名不吸）与意图审查 | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 Add Text to PDF + Stamp + Every Page + X/Y；desc 写页范围 / 点选 / 颜色透明度 + CONFIDENTIAL 例子；与 watermark / edit text 差异落 FAQ q4 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（PDF 添加文字、PDFに文字を追加、Añadir texto、Text in PDF einfügen 等）；Example 数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-09-03 | 文字 + X/Y + 字号立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
