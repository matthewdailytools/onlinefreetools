# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`print-pdf`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（PDF、A4、dpi、pdf-lib、PDF.js 保留；Letter 按当地习惯：es / pt 用 Carta，ja 用レター，其余保留 Letter）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把边距 / dpi / 倒序 / 边框等控件串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：勿暗示上传到服务器；勿承诺能去除打印限制或密码；勿承诺骑马钉小册子 / 永久编辑（Related 划界）；Example 数字固定（93%、97%、65%、3 张、45%、1, 3, 5、blank, 4, 2）各语不得改动；`summary_tpl` / `order_tpl` / `err_range_tpl` / `status_preparing_tpl` 等占位符 `{pages}` `{sheets}` `{paper}` `{scale}` `{order}` `{size}` `{v}` `{total}` `{i}` `{n}` 原样保留；How / FAQ 中引用的按钮与选项名须与该语控件文案逐字一致。

---

## 每语 brief

### en
- 检索词：print a pdf online；how to print specific pages of a pdf；print double sided manually；pdf cut off when printing；print multiple pages per sheet
- 语气：口语工具站
- Title：Print a PDF Online — Choose the Pages, Fit Them to A4 or Letter and Print Double-Sided on Any Printer
- 按钮：Print / Download print-ready PDF / Load sample
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：在线打印PDF；PDF只打印部分页；手动双面打印 奇偶页；PDF打印不全 被裁；一张纸打印多页
- 语气：口语工具站
- Title：在线打印PDF — 挑选页码并缩放到A4或Letter纸，单面打印机也能手动双面打印
- 按钮：打印 / 下载打印用PDF / 加载样例
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：PDF 印刷 ページ指定；手動 両面印刷 奇数 偶数；PDF 印刷 切れる A4；PDF 2ページ 1枚 印刷；画像として印刷
- 语气：です・ます
- Title：PDFを印刷する — ページを選んでA4やレターに合わせ、片面プリンターでも両面印刷
- 按钮：印刷 / 印刷用PDFをダウンロード / サンプルを読み込む
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：طباعة ملف PDF；طباعة صفحات محددة من PDF；الطباعة على الوجهين يدويًا；طباعة صفحتين في ورقة واحدة
- 语气：فصحى مبسطة
- Title：طباعة ملف PDF — اختر الصفحات واضبطها على ورق A4 أو Letter واطبع على الوجهين بأي طابعة
- 按钮：طباعة / تنزيل ملف PDF جاهز للطباعة / تحميل مثال
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：imprimir PDF online；imprimir solo algunas páginas de un PDF；imprimir a doble cara manualmente；PDF se corta al imprimir；varias páginas por hoja
- 语气：tú
- Title：Imprimir un PDF online — Elige las páginas, ajústalas a A4 o Carta e imprime a doble cara en cualquier impresora
- 按钮：Imprimir / Descargar PDF listo para imprimir / Cargar ejemplo
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：imprimir PDF online；imprimir páginas específicas do PDF；imprimir frente e verso manualmente；PDF cortado na impressão；várias páginas por folha
- 语气：você（pt-BR）
- Title：Imprimir PDF online — Escolha as páginas, ajuste ao A4 ou Carta e imprima frente e verso em qualquer impressora
- 按钮：Imprimir / Baixar PDF pronto para imprimir / Carregar exemplo
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：imprimer un PDF en ligne；imprimer certaines pages d’un PDF；impression recto verso manuelle；PDF coupé à l’impression；plusieurs pages par feuille
- 语气：vouvoiement
- Title：Imprimer un PDF en ligne — Choisissez les pages, adaptez-les au A4 ou Letter et imprimez en recto verso sur n’importe quelle imprimante
- 按钮：Imprimer / Télécharger le PDF prêt à imprimer / Charger l’exemple
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：PDF drucken；nur bestimmte Seiten drucken；manuell beidseitig drucken；PDF wird beim Drucken abgeschnitten；mehrere Seiten pro Blatt
- 语气：Sie-Form
- Title：PDF drucken — Seiten auswählen, auf A4 oder Letter anpassen und auch ohne Duplexdrucker beidseitig drucken
- 按钮：Drucken / Druckfertiges PDF herunterladen / Beispiel laden
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：распечатать PDF онлайн；печать отдельных страниц PDF；двусторонняя печать вручную；PDF обрезается при печати；несколько страниц на листе
- 语气：нейтральный，на «вы»
- Title：Распечатать PDF онлайн — выберите страницы, подгоните под A4 или Letter и печатайте с двух сторон на любом принтере
- 按钮：Печать / Скачать PDF для печати / Загрузить пример
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：cetak PDF online；cara print halaman tertentu PDF；print bolak-balik manual；PDF terpotong saat dicetak；print beberapa halaman dalam satu kertas
- 语气：Anda
- Title：Cetak PDF Online — Pilih Halaman dan Sesuaikan ke Kertas A4 atau Letter, Bisa Bolak-balik di Printer Biasa
- 按钮：Cetak / Unduh PDF siap cetak / Muat contoh
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Print a PDF」改为任务句 + 选页 / A4·Letter / 双面；02 同意图搜索全表（指定页、手动双面、打印被裁、每张多页、按图片打印、倒序吸；加密部分吸；小册子 / 永久重排 / 拆分不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 print a pdf online + choose pages + A4 / Letter + double-sided；desc 写 steps + 93% 例子；奇偶页补白页、缩放公式、多页一版、按图片打印、加密划界分别落到 Why choose、Rules、FAQ q1–q7、Use cases | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（在线打印PDF、PDFを印刷する、imprimir un PDF online、PDF drucken 等）；es / pt 纸张用 Carta；FAQ 顺序各语可不同；Example 数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-09-03 | iframe 预览 + window.print() 立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
