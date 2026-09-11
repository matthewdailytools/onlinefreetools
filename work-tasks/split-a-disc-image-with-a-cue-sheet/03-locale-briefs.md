# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`split-a-disc-image-with-a-cue-sheet`  
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
- [x] **同意图相关搜索词已写入 02**（全部同意图相关搜法列入页面生成表，不只 03 的 3–5 个主方向词）
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（CUE、INDEX、WAV、FLAC、APE、BIN、ZIP）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁**：H1 用 *cue splitter* / *sound editor* 光杆头词当进攻句；拆 `/split-flac-cue` 近义 URL；首屏静音/等时长/YouTube 章节；Why choose 卖 FFmpeg；可见文案写「不拆 URL」；H1 禁止顿号罗列「INDEX、ZIP、WAV」；不要把 APE 解码写成已支持能力。

---

## 每语 brief

### en

- 检索词（3–5）：split a disc image with a cue sheet；cue splitter；split flac cue；split wav cue；split ape cue
- 语气：口语工具站
- Title / H1 方向：Split a disc image with a cue sheet（任务句；勿 Online Cue Splitter）
- 按钮短词：Split tracks / Download ZIP / Load sample / Clear
- 本地示例用词：6-second sample, three INDEX 01 cuts → 2.00 / 2.00 / 2.00 s named Intro / Middle / Outro
- 可保留英文/符号：CUE、INDEX、WAV、FLAC、APE、BIN、ZIP
- 额外禁用：Best free；把 split on silence 写进进攻 H1；宣称 in-browser APE decode
- SERP 竞品 title（1–3）：CUE Splitter: Split Albums and DJ Mixes Online（Vibes）；Split WAV CUE Online（AlienFusion）；APE to FLAC Converter（Digidust）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：用 cue 表把整轨镜像分轨；cue 分轨；flac cue 切割；ape cue 分轨；bin cue 分轨
- 语气：口语工具站
- Title / H1 方向：用 cue 表把整轨镜像分轨（勿「在线 CUE 分割器」光杆）
- 按钮短词：按曲目切开 / 下载 ZIP / 载入样例 / 清除
- 本地示例用词：6 秒样例、三处 INDEX 01 → 三段 2.00 / 2.00 / 2.00 秒，曲名 Intro / Middle / Outro
- 可保留英文/符号：CUE、INDEX、WAV、FLAC、APE、BIN、ZIP
- 额外禁用：把「按静音分割 / 按时长切割」当本页 H1；「本地处理」含糊不写不上服务器
- SERP 竞品 title（1–3）：CUE 分轨；APE+CUE 转 FLAC；整轨镜像拆轨
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：dividir una imagen de disco con una hoja cue；separar pistas con cue；dividir flac cue；dividir wav cue；extraer pistas de un cue
- 语气：口语工具站
- Title / H1 方向：Divide una imagen de disco con una hoja cue（勿 Splitter CUE online 光杆）
- 按钮短词：Separar pistas / Descargar ZIP / Cargar ejemplo / Borrar
- 本地示例用词：muestra de 6 s, tres cortes INDEX 01 → 2,00 / 2,00 / 2,00 s
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：altas y bajas；usar «página」当产品名进 H1
- SERP 竞品 title（1–3）：Separar pistas CUE；Dividir álbum FLAC+CUE
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：قسّم صورة قرص بملف cue；تقسيم ألبوم cue；تقسيم flac cue；استخراج مقاطع من cue；فاصل cue
- 语气：口语工具站
- Title / H1 方向：قسّم صورة قرص بملف cue（勿 مقسّم cue أونلاين 当进攻 H1）
- 按钮短词：تقسيم المقاطع / تنزيل ZIP / تحميل مثال / مسح
- 本地示例用词：عيّنة 6 ثوانٍ بثلاث نقاط INDEX 01 → 2.00 / 2.00 / 2.00 ث
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：把完整 استوديو 写进 H1
- SERP 竞品 title（1–3）：تقسيم ألبوم بملف cue
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：dividir uma imagem de disco com uma folha cue；separar faixas cue；dividir flac cue；dividir wav cue；extrair faixas do cue
- 语气：口语工具站
- Title / H1 方向：Divida uma imagem de disco com uma folha cue（勿 Splitter CUE online 光杆）
- 按钮短词：Separar faixas / Baixar ZIP / Carregar exemplo / Limpar
- 本地示例用词：amostra de 6 s, três cortes INDEX 01 → 2,00 / 2,00 / 2,00 s
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：H1 堆 grátis / online
- SERP 竞品 title（1–3）：Separar faixas CUE；Dividir álbum FLAC+CUE
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：pecah image disc dengan cue sheet；bagi trek cue；bagi flac cue；bagi wav cue；ekstrak trek dari cue
- 语气：口语工具站
- Title / H1 方向：Pecah image disc dengan cue sheet（勿 Cue Splitter Online 光杆）
- 按钮短词：Pecah trek / Unduh ZIP / Muat contoh / Hapus
- 本地示例用词：contoh 6 detik, tiga potong INDEX 01 → 2,00 / 2,00 / 2,00 d
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：场景标题写 Use case 当 H2
- SERP 竞品 title（1–3）：Pecah album cue；Bagi flac cue
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：découper une image disque avec une feuille cue；séparer les pistes cue；découper flac cue；découper wav cue；extraire les pistes d’un cue
- 语气：口语工具站
- Title / H1 方向：Découpez une image disque avec une feuille cue（勿 Découpeur CUE en ligne 光杆）
- 按钮短词：Séparer les pistes / Télécharger le ZIP / Charger un exemple / Effacer
- 本地示例用词：exemple de 6 s, trois coupes INDEX 01 → 2,00 / 2,00 / 2,00 s
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：H1 用 page / outil magique
- SERP 竞品 title（1–3）：Séparer un album CUE；Découper FLAC+CUE
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：キューシートでディスクイメージを分割；cue分割；flac cue 分割；wav cue 分割；ape cue 分割
- 语气：口语工具站
- Title / H1 方向：キューシートでディスクイメージを分割（勿「オンラインCUEスプリッター」光杆；勿写成「無音で分割」那是 A3）
- 按钮短词：トラックに分割 / ZIPをダウンロード / サンプルを読み込む / クリア
- 本地示例用词：6秒のサンプルを INDEX 01 で3切 → 2.00 / 2.00 / 2.00秒
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：H1 用ページ当产品名；把無音分割/秒数分割当本页进攻句
- SERP 竞品 title（1–3）：CUEシートで分割；FLAC+CUE 分割
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：разделить образ диска по cue；разрезать альбом по cue；разделить flac cue；извлечь треки из cue；cue splitter
- 语气：口语工具站
- Title / H1 方向：Разделите образ диска по cue-листу（勿 Онлайн сплиттер cue 光杆）
- 按钮短词：Разделить на треки / Скачать ZIP / Загрузить пример / Очистить
- 本地示例用词：пример 6 с, три INDEX 01 → 2,00 / 2,00 / 2,00 с
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：造词 аудио-сплиттер 当 H1
- SERP 竞品 title（1–3）：Разделить образ по CUE；FLAC+CUE на треки
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Disc-Image mit CUE-Sheet in Titel splitten；CUE Splitter；FLAC CUE splitten；WAV CUE splitten；Titel aus CUE extrahieren
- 语气：口语工具站
- Title / H1 方向：Disc-Image mit CUE-Sheet in Titel splitten（勿 Online-CUE-Splitter 光杆）
- 按钮短词：Titel splitten / ZIP herunterladen / Beispiel laden / Löschen
- 本地示例用词：6-s-Beispiel, drei INDEX-01-Schnitte → 2,00 / 2,00 / 2,00 s
- 可保留英文/符号：CUE、INDEX、WAV、ZIP
- 额外禁用：H1 堆 INDEX、ZIP、WAV 目录腔
- SERP 竞品 title（1–3）：CUE-Sheet splitten；FLAC+CUE in Titel
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-11 | 对照 12 S4 与 Vibes/AlienFusion/Digidust/FFcuesplitter/ArchWiki 及十语当地搜法，写满 02 覆盖表、同意图全表与意图审查；H1 锁定任务句 Split a disc image with a cue sheet，次词 cue splitter / split flac cue / split wav cue / split ape cue 进 desc/FAQ | slug 保留；吸收各容器 cue 与粘贴 cue；不吸静音切、等时长切、YouTube 章节与 APE 解码承诺 |
| 1 母版+lint | 2026-09-11 | 写 en 全键与 Page（cue INDEX 01 切开、曲名 ZIP、金标 HUD Parse/Decode/Split/Pack；JSZip 与 lamejs 点后加载；APE 明文失败） | lint:tool-page wiring 绿 |
| 1b 母版检索覆盖优化 | 2026-09-11 | 母版 title 定为 Split a disc image with a cue sheet；desc 前窗含 INDEX 01、named tracks、ZIP、not uploaded；次词 cue splitter / split flac cue / split wav cue / split ape cue 写入 FAQ q2 与 usecase | 主词在 H1；无 INDEX/ZIP/WAV 顿号目录腔 |
| 2 按 brief 重写 | 2026-09-11 | 十语按 03 独立重写（非英译骨架）；按钮与 How 对齐各语按曲目切开 / Separar pistas / トラックに分割 等；隐私均写设备+不上服务器；APE 解码诚实失败 | 键集与 en 对齐，各语 H1 为当地任务句 |
| 2b 抽查语检索覆盖优化 | 2026-09-11 | 抽查 en,zh,es,ja：en H1 Split a disc image with a cue sheet；zh 用 cue 表把整轨镜像分轨；es Divide una imagen de disco con una hoja cue；ja キューシートでディスクイメージを分割；desc 含 Steps/步骤/Pasos/手順 与 Example/示例 及不上服务器；次词 cue splitter / cue 分轨 / separar pistas cue / cue分割 进 FAQ | 主词落 H1；无 INDEX/ZIP 顿号目录腔 |
| 3 抽查+禁词+lint | 2026-09-11 | lint:seo 复查：无 page 当产品名、无 FFmpeg 卖点、Why choose 含各语 H1；ar/ja/ru 待母语抽查保持未勾 | 准备 coverage:gate phase=4 与 verify:tool |
