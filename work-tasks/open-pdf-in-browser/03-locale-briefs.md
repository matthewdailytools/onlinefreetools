# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`open-pdf-in-browser`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（PDF、PDF.js、ISO 32000 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把 rotate / fullscreen / metadata 等控件串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：勿暗示上传到服务器；勿承诺能编辑、永久旋转或去除密码（只读查看）；勿承诺扫描件可搜索（无 OCR）；FAQ q2 的浏览器设置路径须与各浏览器当前界面用语一致（Chrome「PDF 文档」/ Firefox「应用程序」/ Safari 等）。

---

## 每语 brief

### en
- 检索词：open pdf in browser；pdf viewer online；view pdf without adobe；search text in pdf online；browser downloads pdf instead of opening
- 语气：口语工具站
- Title：Open PDF in Browser — View, Search and Zoom a PDF Online Without a Reader App
- 按钮：Find / Load sample / Open in browser’s own viewer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：在线打开PDF；PDF在线查看；浏览器打开PDF；PDF 在线阅读 搜索；浏览器下载PDF而不是打开
- 语气：口语工具站
- Title：在线打开 PDF — 不装阅读器也能在浏览器里查看 PDF，支持全文搜索与缩放
- 按钮：查找 / 加载样例 / 用浏览器自带阅读器打开
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：PDF ブラウザで開く；PDFビューアー オンライン；PDF 開けない ダウンロードされる；PDF 文字検索
- 语气：です・ます
- Title：PDFをブラウザで開く — アプリなしで閲覧・検索・拡大できるPDFビューアー
- 按钮：検索 / サンプルを読み込む / ブラウザのビューアーで開く
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：فتح ملف PDF في المتصفح；عارض PDF أونلاين；قراءة PDF بدون برنامج
- 语气：فصحى مبسطة
- Title：فتح ملف PDF في المتصفح — اقرأ وابحث وكبّر الصفحات بدون تثبيت برنامج
- 按钮：بحث / تحميل مثال / الفتح في عارض المتصفح نفسه
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：abrir PDF en el navegador；visor de PDF online；ver PDF sin Adobe；buscar texto en PDF
- 语气：tú
- Title：Abrir PDF en el navegador — lee, busca y amplía un PDF online sin instalar ningún programa
- 按钮：Buscar / Cargar ejemplo / Abrir en el visor del navegador
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：abrir PDF no navegador；visualizador de PDF online；ler PDF online；pesquisar texto em PDF
- 语气：você（pt-BR）
- Title：Abrir PDF no navegador — leia, pesquise e amplie um PDF online sem instalar programa
- 按钮：Pesquisar / Carregar exemplo / Abrir no leitor do navegador
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：ouvrir un PDF dans le navigateur；lecteur PDF en ligne；lire un PDF sans Adobe；rechercher dans un PDF
- 语气：vouvoiement
- Title：Ouvrir un PDF dans le navigateur — lire, rechercher et zoomer sans installer de lecteur
- 按钮：Rechercher / Charger un exemple / Ouvrir dans le lecteur du navigateur
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：PDF im Browser öffnen；PDF online ansehen；PDF Viewer online；PDF durchsuchen
- 语气：Sie-Form
- Title：PDF im Browser öffnen — PDF online lesen, durchsuchen und vergrößern ohne Reader-App
- 按钮：Suchen / Beispiel laden / Im Browser-Viewer öffnen
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：открыть PDF в браузере；просмотр PDF онлайн；PDF читалка онлайн；поиск по PDF
- 语气：нейтральный，на «вы»
- Title：Открыть PDF в браузере — читайте, ищите и увеличивайте PDF онлайн без установки программ
- 按钮：Найти / Загрузить пример / Открыть во встроенном просмотрщике
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：buka PDF di browser；lihat PDF online；pembaca PDF online；cari teks di PDF
- 语气：Anda
- Title：Buka PDF di Browser — Baca, Cari, dan Perbesar PDF Online Tanpa Aplikasi
- 按钮：Cari / Muat contoh / Buka di viewer bawaan browser
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由短句扩为 view / search / zoom / without a reader app；02 同意图搜索全表（pdf viewer online、search text、浏览器下载而不打开、密码 PDF、页面尺寸、损坏文件吸；编辑 / 永久旋转 / 解密 / 打印不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 open PDF in browser + view / search / zoom；desc 写 steps + example；搜索框 / 密码行 / 信息表 / 各浏览器设置路径分别落到 How、FAQ q2–q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（在线打开 PDF、PDFをブラウザで開く、abrir PDF en el navegador、PDF im Browser öffnen 等）；zh title 改为结果导向以避开目录腔；FAQ q2 按当地浏览器界面用语 | 十语键集与 en 一致（98 键）；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-09-03 | pdf planner 分场景立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
