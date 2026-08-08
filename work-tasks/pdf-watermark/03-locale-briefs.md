# 03 — Locale briefs：pdf-watermark

**母版语言**：en  
**状态**：`i18n-done`

## 共用禁词

- [x] 无造词 / 错义借译 / 残缺缩写
- [x] title 非参数目录腔
- [x] 十语非同构骨架
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**（步 2+4；抽查 en,zh,es,ja）
- [x] 隐私句须设备 + 不上服务器（见 localization 规则）

### en
- 检索词：pdf watermark, add watermark to pdf, stamp pdf
- Title：PDF Watermark — Stamp Text on Every Page Locally
- 按钮：Apply / Download / Sample / Clear
- 轮次2/3：[ ]/[ ]

### zh
- 检索词：PDF 水印, PDF 加文字水印
- Title：PDF 水印 — 在本地给每一页盖上文字
- 按钮：应用 / 下载 / 样例 / 清空
- 轮次2/3：[ ]/[ ]

### es
- 检索词：marca de agua pdf, añadir marca de agua pdf
- Title：Marca de agua PDF — sella texto en cada página en local
- 按钮：Aplicar / Descargar / Ejemplo
- 轮次2/3：[ ]/[ ]

### ar
- 检索词：علامة مائية PDF، إضافة علامة مائية
- Title：علامة مائية لـ PDF — اطبع نصًا على كل صفحة محليًا
- 按钮：تطبيق / تنزيل / مثال

### pt
- 检索词：marca d água pdf, adicionar marca d água
- Title：Marca d’água em PDF — carimbe texto em cada página no dispositivo
- 按钮：Aplicar / Baixar / Exemplo

### id
- 检索词：watermark pdf, stempel pdf
- Title：Watermark PDF — stempel teks di setiap halaman secara lokal
- 按钮：Terapkan / Unduh / Contoh

### fr
- 检索词：filigrane pdf, ajouter filigrane pdf
- Title：Filigrane PDF — apposez du texte sur chaque page en local
- 按钮：Appliquer / Télécharger / Exemple

### ja
- 检索词：PDF 透かし, PDF ウォーターマーク
- Title：PDF透かし — 端末内で全ページに文字を入れる
- 按钮：適用 / ダウンロード / サンプル
- 轮次2/3：[ ]/[ ]

### ru
- 检索词：водяной знак pdf, штамп на pdf
- Title：Водяной знак PDF — поставьте текст на каждую страницу локально
- 按钮：Применить / Скачать / Пример

### de
- 检索词：PDF Wasserzeichen, Wasserzeichen PDF hinzufügen
- Title：PDF-Wasserzeichen — Text lokal auf jede Seite stempeln
- 按钮：Anwenden / Download / Beispiel


## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 主词回写 H1「PDF Watermark — Stamp Text on Every Page Locally」；去掉初稿参数枚举「PDF Watermark — Text, Image, Opacity, Position, Rotate」；次词落 desc/FAQ；覆盖表写入 02 | 通过；可 ready |
| 1b 母版生成后覆盖 | 2026-08-08 | en 母版 title/desc 对齐 brief；次词 confidential/draft/local 落 FAQ·Use cases；无参数枚举 H1 | 通过 |
| 2b 抽查语生成后覆盖 | 2026-08-08 | en,zh,es,ja title 独立检索向；隐私句设备+不上服务器；与 add-watermark/rotate-pdf 边界清楚 | 通过 |
| 3b 本地化复审 | 2026-08-08 | 复审十语 title/desc/How：去掉 Locally/en local/在本地 含糊副标题；用户文案去 pdf-lib/fflate/copyPages；How 补设备+不上服务器 | 已回写 i18n |
