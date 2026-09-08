# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`convert-a-jpg-to-text-with-ocr`  
**母版语言**：en  
**状态**：`i18n-done`

> `pending-native-review`：仅当仍有语种勾选「待母语抽查」时使用。清掉所有待抽查勾选并完成轮次 3 后，才可标 `i18n-done`。

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」（见 `tool-i18n-localization.mdc`「隐私本地处理表述」）
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02`/`notes` 有覆盖表；见 localization 步 0b）——勾工程/页面/上线清单前必做
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（OCR、JPG、JPEG、PNG、WebP、TXT）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向。H1 禁止 `Online OCR` / `OCR to text` / `Free OCR` 光杆。H1 禁止参数枚举（语种、置信度、最长边不进 H1）。H1 禁止用 page/页 当产品名。可见正文禁止 doorway/薄页/slug/库名卖点。

**本工具额外禁用**：承诺手写准确、发票字段、表格 CSV、扫描 PDF、可检索 PDF、Word 版式、100 种语言 URL、引擎离线安装包。FAQ 勿写「库从 CDN 加载」。

---

## 每语 brief

### en

- 检索词（3–5）：jpg to ocr; convert a JPG to text with OCR; ocr to text; ocr image reader; ocr text recognition
- 语气：口语工具站
- Title / H1 方向：Convert a JPG to text with OCR
- 按钮短词：Convert; Copy text; Download TXT; Load sample; Clear
- 本地示例用词：printed photo, screenshot, copyable lines
- 可保留英文/符号：OCR, JPG, JPEG, PNG, WebP, TXT
- 额外禁用：H1=Online OCR / OCR to text / Free OCR；H1 列 languages/confidence
- SERP 竞品 title（1–3）：Online OCR; Free OCR; Image to Text（待人工 SERP 复核）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：用 OCR 把 JPG 转成文字; JPG 识别文字; 图片转文字; 截图提取文字; 中文 OCR 在线
- 语气：口语工具站
- Title / H1 方向：用 OCR 把 JPG 转成文字（不要把 convert/online 硬塞进中文 H1）
- 按钮短词：转换; 复制文本; 下载 TXT; 载入样例; 清空
- 本地示例用词：拍印刷页、聊天截图、说明书照片
- 可保留英文/符号：OCR、JPG、PNG、TXT
- 额外禁用：在线 OCR 光杆；「本地处理」不提不上服务器；写成能出 Word/可检索 PDF
- SERP 竞品 title（1–3）：图片转文字; 在线 OCR; JPG 识别
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：pasar JPG a texto con OCR; JPG a texto; reconocer texto en imagen; extraer texto de captura; OCR de foto
- 语气：口语工具站
- Title / H1 方向：Pasar un JPG a texto con OCR
- 按钮短词：Convertir; Copiar texto; Descargar TXT; Cargar ejemplo; Borrar
- 本地示例用词：foto impresa, captura de pantalla
- 可保留英文/符号：OCR, JPG, PNG, TXT
- 额外禁用：altas y bajas；H1=OCR en línea；página 当产品名
- SERP 竞品 title（1–3）：imagen a texto; OCR online; JPG a texto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل JPG إلى نص بـ OCR; التعرف على النص في صورة; استخراج نص من لقطة شاشة; OCR عربي للصورة; صورة إلى نص
- 语气：口语工具站
- Title / H1 方向：حوّل صورة JPG إلى نص بالتعرّف الضوئي
- 按钮短词：تحويل; نسخ النص; تنزيل TXT; تحميل مثال; مسح
- 本地示例用词：صفحة مطبوعة، لقطة شاشة
- 可保留英文/符号：OCR, JPG, PNG, TXT
- 额外禁用：H1=OCR أونلاين 光杆；承诺手写阿拉伯文书法准确；拆独立 arabic-ocr 叙事当另一产品
- SERP 竞品 title（1–3）：OCR عربي; صورة إلى نص; استخراج النص من الصورة
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter JPG em texto com OCR; JPG para texto; reconhecer texto em imagem; extrair texto de print; OCR de foto
- 语气：口语工具站
- Title / H1 方向：Converter um JPG em texto com OCR
- 按钮短词：Converter; Copiar texto; Baixar TXT; Carregar exemplo; Limpar
- 本地示例用词：foto impressa, print de tela
- 可保留英文/符号：OCR, JPG, PNG, TXT
- 额外禁用：H1=OCR online; sem enviar ao servidor 须写清
- SERP 竞品 title（1–3）：imagem para texto; OCR online; JPG para texto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah JPG jadi teks dengan OCR; JPG ke teks; kenali teks di foto; ekstrak teks dari screenshot; OCR gambar
- 语气：口语工具站
- Title / H1 方向：Ubah JPG menjadi teks dengan OCR
- 按钮短词：Konversi; Salin teks; Unduh TXT; Muat contoh; Hapus
- 本地示例用词：foto cetak, tangkapan layar
- 可保留英文/符号：OCR, JPG, PNG, TXT
- 额外禁用：H1=OCR online; tanpa unggah 须写清 perangkat + server
- SERP 竞品 title（1–3）：gambar ke teks; OCR online; JPG ke teks
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir un JPG en texte avec OCR; JPG vers texte; reconnaître le texte d’une image; extraire le texte d’une capture; OCR photo
- 语气：口语工具站
- Title / H1 方向：Convertir un JPG en texte avec OCR
- 按钮短词：Convertir; Copier le texte; Télécharger TXT; Charger un exemple; Effacer
- 本地示例用词：photo imprimée, capture d’écran
- 可保留英文/符号：OCR, JPG, PNG, TXT
- 额外禁用：H1=OCR en ligne；sans envoi 须写清 appareil + serveur
- SERP 竞品 title（1–3）：image vers texte; OCR en ligne; JPG en texte
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：JPGをOCRでテキスト化; 画像から文字起こし; スクリーンショット 文字認識; 写真 テキスト抽出; JPG OCR
- 语气：口语工具站
- Title / H1 方向：JPGをOCRでテキストにする（「オンラインOCR」光杆禁止；tiny 模型日语弱 → FAQ 写可能需加载较大模型，勿当已验证产品级）
- 按钮短词：変換; テキストをコピー; TXTをダウンロード; サンプルを読み込む; クリア
- 本地示例用词：印刷されたページ、画面キャプチャ
- 可保留英文/符号：OCR、JPG、PNG、TXT
- 额外禁用：ユースケース空壳；H1 参数目录；承诺手写/縦書き完美
- SERP 竞品 title（1–3）：画像 文字起こし; OCR オンライン; 写真 テキスト化
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：преобразовать JPG в текст с OCR; JPG в текст; распознать текст на фото; извлечь текст со скриншота; OCR изображения
- 语气：口语工具站
- Title / H1 方向：Преобразовать JPG в текст с помощью OCR
- 按钮短词：Преобразовать; Копировать текст; Скачать TXT; Загрузить пример; Очистить
- 本地示例用词：печатная страница, снимок экрана
- 可保留英文/符号：OCR, JPG, PNG, TXT
- 额外禁用：H1=Онлайн OCR 光杆；локально 含糊不提 сервер
- SERP 竞品 title（1–3）：изображение в текст; онлайн OCR; распознать текст с фото
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：JPG mit OCR in Text umwandeln; JPG zu Text; Text aus Bild erkennen; Text aus Screenshot; Foto OCR
- 语气：口语工具站
- Title / H1 方向：JPG mit OCR in Text umwandeln
- 按钮短词：Umwandeln; Text kopieren; TXT herunterladen; Beispiel laden; Leeren
- 本地示例用词：gedruckte Seite, Screenshot
- 可保留英文/符号：OCR, JPG, PNG, TXT
- 额外禁用：H1=Online-OCR；ohne Upload 须写清 Gerät + Server
- SERP 竞品 title（1–3）：Bild zu Text; Online OCR; JPG in Text
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-07 | slug 保留 convert-a-jpg-to-text-with-ocr；H1 用场景句承接 jpg to ocr，禁 Online OCR 光杆；Planner N1 长尾逐条写入 desc/FAQ/芯片；意图审查满足图→TXT、有意不满足 PDF/Word/表/手写产品页 | 覆盖表与 Ads 表在 02；03 勾选清单前覆盖与意图审查；未跑 SERP；未写 i18n |
| 1 母版+lint | 2026-09-07 | 写 en 全键：H1 Convert a JPG to text with OCR；How 四步对齐 Convert / Copy text / Download TXT；FAQ 覆盖 ocr to text、手写、阿语芯片、Online OCR 壳 | 母版落盘 `i18n/tools/convert-a-jpg-to-text-with-ocr/en.ts` |
| 1b 母版检索覆盖优化 | 2026-09-07 | 扫 title/desc：主词 JPG + OCR 在 H1；desc 前 160 字含 drop JPG、this tab not on a server；次词 OCR to text / image reader / Arabic chip 在 desc 后半与 FAQ；无参数枚举 | H1 保留场景句，不改成 Online OCR |
| 2 按 brief 重写 | 2026-09-07 | 九语按当地检索词独立写 title/How/FAQ（zh 用 OCR 把 JPG 转成文字；es Pasar un JPG；ja JPGをOCRでテキストにする）；按钮对齐各语 Convert 说法；隐私写清设备+不上服务器 | 非英模同构；阿语芯片 FAQ 各语有落点 |
| 2b 抽查语检索覆盖优化 | 2026-09-07 | 抽查 en,zh,es,ja：en H1 仍 Convert a JPG to text with OCR；zh 主词进 H1；es JPG a texto 在 desc；ja 文字起こし/活字 在 FAQ 与 How；四处 desc 前段都有「本标签页/不上服务器」 | 四语均无 Online OCR 光杆 H1，次词在 FAQ |
| 3 抽查+禁词+lint | 2026-09-07 | 抽 en/zh/es/ja 按钮与 FAQ 句式；扫禁词表；无参数枚举、无 CDN 库名卖点、无 doorway 自述 | 待母语抽查未勾；准备 lint:seo |
