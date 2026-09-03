# 03 — Locale briefs：organize-pdf

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
- 检索词：organize pdf, remove pdf pages, reorder pdf
- Title：Organize PDF — Reorder or Remove Pages in Your Browser
- 按钮：Apply / Download / Sample / Clear / Up / Down / Remove
- 轮次2/3：[x]/[x]

### zh
- 检索词：整理 PDF, 删除 PDF 页面, PDF 重排
- Title：整理 PDF — 在浏览器里删页或重排
- 按钮：应用 / 下载 / 样例 / 清空
- 轮次2/3：[x]/[x]

### es
- 检索词：organizar pdf, eliminar páginas pdf, reordenar pdf
- Title：Organizar PDF — reordena o quita páginas en el navegador
- 按钮：Aplicar / Descargar / Ejemplo
- 轮次2/3：[x]/[x]

### ar
- 检索词：تنظيم PDF، حذف صفحات PDF
- Title：تنظيم PDF — أعد الترتيب أو احذف الصفحات في المتصفح
- 按钮：تطبيق / تنزيل / مثال

### pt
- 检索词：organizar pdf, remover páginas pdf
- Title：Organizar PDF — reordene ou remova páginas no navegador
- 按钮：Aplicar / Baixar / Exemplo

### id
- 检索词：urut halaman pdf, urutkan dan hapus pdf, cara ubah urutan pdf, hapus halaman pdf
- Title：Urut Halaman PDF — Urutkan, Hapus & Ubah Urutan di Browser
- 按钮：Terapkan / Unduh / Contoh

### fr
- 检索词：organiser pdf, supprimer pages pdf
- Title：Organiser un PDF — réordonnez ou retirez des pages
- 按钮：Appliquer / Télécharger / Exemple

### ja
- 检索词：PDF 整理, PDF ページ削除, PDF 並べ替え
- Title：PDF整理 — ブラウザでページ削除・並べ替え
- 按钮：適用 / ダウンロード / サンプル
- 轮次2/3：[x]/[x]

### ru
- 检索词：организовать pdf, удалить страницы pdf
- Title：Организовать PDF — удалите или переставьте страницы
- 按钮：Применить / Скачать / Пример

### de
- 检索词：PDF organisieren, PDF Seiten löschen
- Title：PDF organisieren — Seiten im Browser sortieren oder entfernen
- 按钮：Anwenden / Download / Beispiel


## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 主词回写 H1「Organize PDF — Reorder or Remove Pages in Your Browser」；去掉初稿参数枚举「Organize PDF — Delete, Reorder, Extract, Checkbox Export」；次词落 desc/FAQ；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 完整键与 organizePdfPage、catalog 落地 | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | 复核 title 保留 Reorder or Remove Pages；desc 强化 organize/remove 与 device-local no-upload；主词 Organize PDF 在 H1 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 九语独立重写（zh/es/ja/pt/id/fr/de/ar/ru） | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja：复核 title/desc 主词与本地说法；未改参数枚举 | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | 禁词勾选 + lint:seo | 完成 |
| 3b 本地化复审 | 2026-08-08 | 复审十语 title/desc/How：去掉 Locally/en local/在本地 含糊副标题；用户文案去 pdf-lib/fflate/copyPages；How 补设备+不上服务器 | 已回写 i18n |
