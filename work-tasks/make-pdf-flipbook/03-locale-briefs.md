# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`make-pdf-flipbook`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2；zh 避免「A 和 B」两段并列）
- [x] 隐私不当卖点（不上传只在 FAQ 作答，不进 title）
- [x] 禁「Rules 节 / 见规则节」等站内自指；禁 doorway / 薄页等元叙述；禁「最好 / 100% 免费」
- [x] 诚实边界：页面变成图片 → 链接、表单、可选文字、站内搜索不保留；不提供托管链接、音效、视频、统计
- [x] 当地术语：zh 翻页书 / 电子画册、跨页、封面、离线；ja フリップブック / デジタルブック、見開き、表紙、オフライン；es flipbook / revista digital, doble página, portada, sin conexión；pt flipbook / revista digital, página dupla, capa, offline；fr flipbook / livre feuilletable, double page, couverture, hors ligne；de Blätterkatalog / Flipbook, Doppelseite, Titelseite, offline；ru флипбук / электронный журнал, разворот, обложка, офлайн；id flipbook / majalah digital, halaman ganda (spread), sampul, offline；ar كتاب قلاب / مجلة رقمية, صفحتان متقابلتان, الغلاف, دون اتصال
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：体积写 4,7 MB；整数与像素尺寸不变（892 × 1263）
- [x] 事实不可改（72 / 108 / 144 dpi；A4 Standard 892 × 1263 px；上限 300 页、提示 80 页；窄屏阈值约 560 px；常规文字页约 116 / 230 / 335 KB；满版小字约 350 KB；样例 4 页 A5 约 100 KB）
- [x] FAQ q2 的 iframe 示例用单引号属性，不用直双引号
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整；Use cases 按当地常见场景：zh 电子画册 / 招商手册，ja 会社案内 / 社内報，de Blätterkatalog / Vereinszeitung 等）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」。

## 每语 brief

### en
- 检索词：pdf flipbook maker；pdf to flipbook；make a flipbook from pdf；free flipbook maker no watermark；embed flipbook on website
- 语气：口语
- Title：PDF Flipbook Maker — Turn a PDF into a Page-Turning HTML Flipbook You Can Open Offline
- 按钮：Create flipbook / Download HTML flipbook / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：PDF 转翻页书；翻页电子书制作；电子画册制作；PDF 翻页效果；PDF 转 HTML 翻页
- 语气：口语
- Title：PDF 翻页书制作 — 把 PDF 转成能像书一样翻页的 HTML 电子书，离线也能打开
- 按钮：生成翻页书 / 下载 HTML 翻页书 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：crear flipbook desde PDF；convertir PDF a flipbook；revista digital PDF；flipbook gratis sin marca de agua
- 语气：口语（tú）
- Title：Crear flipbook desde PDF — convierte tu PDF en una revista digital HTML que se hojea y se abre sin conexión
- 按钮：Crear flipbook / Descargar flipbook HTML / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：تحويل PDF إلى كتاب قلاب；صانع فليب بوك；مجلة رقمية من PDF；كتاب إلكتروني تقليب الصفحات
- 语气：فصحى مبسطة；拉丁数字
- Title：صانع الكتاب القلاب من PDF — حوّل ملف PDF إلى كتاب HTML تقلب صفحاته ويفتح دون اتصال
- 按钮：أنشئ الكتاب القلاب / تنزيل الكتاب بصيغة HTML / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：criar flipbook de PDF；converter PDF em flipbook；revista digital PDF；flipbook grátis sem marca d’água
- 语气：口语（pt-BR）
- Title：Criar flipbook de PDF — transforme seu PDF em uma revista digital HTML que vira as páginas e abre offline
- 按钮：Criar flipbook / Baixar flipbook HTML / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：buat flipbook dari PDF；cara membuat flipbook；PDF ke flipbook；majalah digital PDF
- 语气：口语（Anda）
- Title：Buat Flipbook dari PDF — Ubah PDF Jadi Flipbook HTML yang Halamannya Bisa Dibalik dan Dibuka Offline
- 按钮：Buat flipbook / Unduh flipbook HTML / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：créer un flipbook PDF；convertir PDF en flipbook；livre feuilletable；catalogue feuilletable gratuit
- 语气：vouvoiement
- Title：Créer un flipbook à partir d’un PDF — transformez votre PDF en livre feuilletable HTML lisible hors ligne
- 按钮：Créer le flipbook / Télécharger le flipbook HTML / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：PDF フリップブック 作成；PDF デジタルブック 変換；見開き 表示 PDF；電子カタログ 作成 無料
- 语气：です・ます
- Title：PDFフリップブック作成 — PDFを本のようにめくれるHTMLファイルに変換してオフラインでも閲覧
- 按钮：フリップブックを作成 / HTMLをダウンロード / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：создать флипбук из PDF；PDF в флипбук；электронный журнал из PDF；листалка PDF онлайн
- 语气：нейтральный（вы）
- Title：Создать флипбук из PDF — превратите PDF в HTML-журнал с перелистыванием страниц, который открывается офлайн
- 按钮：Создать флипбук / Скачать HTML-флипбук / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Blätterkatalog erstellen；PDF zu Flipbook；PDF blätterbar machen；Online-Katalog aus PDF
- 语气：Sie-Form
- Title：PDF-Blätterkatalog erstellen — PDF in ein blätterbares HTML-Flipbook umwandeln, das auch offline funktioniert
- 按钮：Flipbook erstellen / HTML-Flipbook herunterladen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「Make a PDF flipbook」改为工具名 + 翻页 HTML + 离线；02 新增与阅读 / 转图片 / 合并工具的分工、同意图相关搜索全表（跨页 / 离线 / 嵌入说明吸；托管链接、保留链接、音效统计不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 PDF flipbook maker + page-turning + HTML + offline；desc 写跨页 / 单页、单个 HTML、离线、无账号与示例；FAQ q1–q8 逐一对应次要词；FAQ 体积数字按实测改写 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | 十语按 brief 独立重写：title 用当地说法（翻页书、フリップブック、revista digital、livre feuilletable、Blätterkatalog、флипбук、كتاب قلاب）；小数逗号语种体积本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de | 十语键集与 en 一致；数字与页面输出一致 |

### 历史（2026-09-03 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-09-03 | 保留 slug；title 定为「Make a PDF flipbook」 | 覆盖表初版 |
| 初版 1–3 | 2026-09-03 | 首稿 + lint | 上线；2026-10-15 审计判定过薄且九语未本地化，已重写 |
