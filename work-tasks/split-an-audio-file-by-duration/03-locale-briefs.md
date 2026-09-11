# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`split-an-audio-file-by-duration`  
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

技术专名（WAV、MP3、ZIP、秒）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁**：H1 用 *audio splitter* / *sound editor* / *音频分割器* 光杆头词当进攻句；拆 `/split-mp3` 近义；首屏静音/手标/按体积；Why choose 卖 FFmpeg；可见文案写「不拆 URL」。H1 禁止顿号罗列「秒数、ZIP、WAV」。不要把 A3「按静音切开」写进进攻 H1。

---

## 每语 brief

### en

- 检索词（3–5）：split an audio file by duration；split audio by duration；split mp3 into parts；split into equal parts；chunk audio
- 语气：口语工具站
- Title / H1 方向：Split an audio file by duration（任务句；勿 Online Audio Splitter）
- 按钮短词：Split by duration / Download ZIP / Load sample / Clear
- 本地示例用词：5-second sample, 2 s chunks → three clips 2.00 / 2.00 / 1.00 s
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：Best free；把 split on silence 写进进攻 H1
- SERP 竞品 title（1–3）：Split Audio Into Equal Parts（ChunkAudio）；Online Audio Splitter（Piliapp）；Split Audio by Duration（Elysia）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：按固定时长把音频切成多段；音频按时长切割；按秒分割 mp3；把音频切成等长多段；mp3 等分
- 语气：口语工具站
- Title / H1 方向：按固定时长把音频切成多段（勿「在线音频分割器」光杆）
- 按钮短词：按时长切开 / 下载 ZIP / 载入样例 / 清除
- 本地示例用词：5 秒样例、每段 2 秒 → 三段 2.00 / 2.00 / 1.00 秒
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：把「按静音分割」当本页 H1；「本地处理」含糊不写不上服务器
- SERP 竞品 title（1–3）：音频分割 - 按时长等分/按时间点切分MP3（Tools321）；按时长 / 时间点切分音频
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：dividir un archivo de audio por duración；dividir audio por duración；partir mp3 en partes iguales；trocear audio cada 60 segundos；exportar clips en ZIP
- 语气：口语工具站
- Title / H1 方向：Divide un archivo de audio por duración（勿 Splitter de audio online 光杆）
- 按钮短词：Dividir por duración / Descargar ZIP / Cargar ejemplo / Borrar
- 本地示例用词：muestra de 5 s, trozos de 2 s → tres clips 2,00 / 2,00 / 1,00 s
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：altas y bajas；usar «página」当产品名进 H1
- SERP 竞品 title（1–3）：Dividir audio por duración（Elysia）；Dividir audio en partes iguales（Piliapp）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：قسّم ملفًا صوتيًا حسب المدة；تقسيم الصوت حسب المدة；تقسيم mp3 إلى أجزاء متساوية；تقطيع المقطع كل 60 ثانية；تنزيل المقاطع في ZIP
- 语气：口语工具站
- Title / H1 方向：قسّم ملفًا صوتيًا حسب المدة（勿 مقسّم الصوت أونلاين 当进攻 H1）
- 按钮短词：تقسيم حسب المدة / تنزيل ZIP / تحميل مثال / مسح
- 本地示例用词：عيّنة 5 ثوانٍ بقطع 2 ث → ثلاث مقاطع 2.00 / 2.00 / 1.00 ث
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：把完整 استوديو 写进 H1
- SERP 竞品 title（1–3）：تقسيم الصوت حسب المدة
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：dividir um arquivo de áudio por duração；dividir áudio por duração；partir mp3 em partes iguais；cortar áudio a cada 60 segundos；baixar clips em ZIP
- 语气：口语工具站
- Title / H1 方向：Divida um arquivo de áudio por duração（勿 Splitter de áudio online 光杆）
- 按钮短词：Dividir por duração / Baixar ZIP / Carregar exemplo / Limpar
- 本地示例用词：amostra de 5 s, blocos de 2 s → três clips 2,00 / 2,00 / 1,00 s
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：H1 堆 grátis / online
- SERP 竞品 title（1–3）：Dividir áudio por duração；Partir mp3 em partes iguais
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：pecah berkas audio berdasarkan durasi；bagi audio menurut durasi；bagi mp3 jadi bagian sama；potong audio tiap 60 detik；unduh klip ZIP
- 语气：口语工具站
- Title / H1 方向：Pecah berkas audio berdasarkan durasi（勿 Audio Splitter Online 光杆）
- 按钮短词：Pecah menurut durasi / Unduh ZIP / Muat contoh / Hapus
- 本地示例用词：contoh 5 detik, potongan 2 d → tiga klip 2,00 / 2,00 / 1,00 d
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：场景标题写 Use case 当 H2
- SERP 竞品 title（1–3）：Pecah audio berdasarkan durasi；Bagi mp3 jadi bagian sama
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：découper un fichier audio par durée；découper audio par durée；partager un mp3 en parties égales；couper l’audio toutes les 60 secondes；ZIP d’extraits
- 语气：口语工具站
- Title / H1 方向：Découpez un fichier audio par durée（勿 Découpeur audio en ligne 光杆）
- 按钮短词：Découper par durée / Télécharger le ZIP / Charger un exemple / Effacer
- 本地示例用词：exemple de 5 s, morceaux de 2 s → trois extraits 2,00 / 2,00 / 1,00 s
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：H1 用 page / outil magique
- SERP 竞品 title（1–3）：Découper un audio par durée；Partager un mp3 en parties égales
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：音声ファイルを秒数で分割；長さで分割；等分割；60秒ごとに切る；ZIPで書き出す
- 语气：口语工具站
- Title / H1 方向：音声ファイルを秒数で分割（勿「オンライン音声スプリッター」光杆；勿写成「無音で分割」那是 A3）
- 按钮短词：秒数で分割 / ZIPをダウンロード / サンプルを読み込む / クリア
- 本地示例用词：5秒のサンプルを2秒ずつ → 3ファイル 2.00 / 2.00 / 1.00秒
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：H1 用ページ当产品名；把無音分割当本页进攻句
- SERP 竞品 title（1–3）：音声を秒数で分割；長さで等分割
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：разделите аудиофайл по длительности；нарезать аудио по длительности；нарезать mp3 на равные части；резать каждые 60 секунд；скачать клипы ZIP
- 语气：口语工具站
- Title / H1 方向：Разделите аудиофайл по длительности（勿 Онлайн сплиттер аудио 光杆）
- 按钮短词：Разделить по длительности / Скачать ZIP / Загрузить пример / Очистить
- 本地示例用词：пример 5 с кусками по 2 с → три клипа 2,00 / 2,00 / 1,00 с
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：造词 аудио-сплиттер 当 H1
- SERP 竞品 title（1–3）：Разделить аудио по длительности；Нарезать mp3 на равные части
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Audiodatei nach Dauer in mehrere Dateien teilen；Audio nach Dauer teilen；MP3 in gleiche Teile splitten；alle 60 Sekunden schneiden；Clips als ZIP
- 语气：口语工具站
- Title / H1 方向：Audiodatei nach Dauer in mehrere Dateien teilen（勿 Online-Audio-Splitter 光杆）
- 按钮短词：Nach Dauer teilen / ZIP herunterladen / Beispiel laden / Löschen
- 本地示例用词：5-s-Beispiel, 2-s-Stücke → drei Clips 2,00 / 2,00 / 1,00 s
- 可保留英文/符号：WAV、MP3、ZIP
- 额外禁用：H1 堆 Sekunden、ZIP、WAV 目录腔
- SERP 竞品 title（1–3）：Audio nach Dauer teilen；MP3 in gleiche Teile splitten（Piliapp / ComputerBase 用语）
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-11 | 对照 12 S3 与 ChunkAudio/Piliapp/Tools321/Elysia/MyConvert 及十语当地搜法，写满 02 覆盖表、同意图全表与意图审查；H1 锁定任务句 Split an audio file by duration，次词 split mp3 into parts / equal parts / chunk audio / ZIP 进 desc/FAQ | slug 保留；吸收等分 N；不吸静音切、cue、按体积与手裁；准备跑 coverage:gate phase=0b |
| 1 母版+lint | 2026-09-11 | 写 en 全键与 Page（按秒切开、ZIP、金标 HUD Decode/Split/Pack；JSZip 与 lamejs 点后加载；等分 N 在高级设置） | lint:tool-page wiring 绿 |
| 1b 母版检索覆盖优化 | 2026-09-11 | 母版 title 定为 Split an audio file by duration；desc 前窗含 equal-length clips、remainder、ZIP、not uploaded；次词 split mp3 into parts / split into equal parts / chunk audio / split every 60 seconds 写入 FAQ q2 与 usecase | 主词在 H1；无秒数顿号目录腔 |
| 2 按 brief 重写 | 2026-09-11 | 十语按 03 独立重写（非英译骨架）；按钮与 How 对齐各语按时长切开 / Dividir por duración / 秒数で分割 等；隐私均写设备+不上服务器 | 键集与 en 对齐，各语 H1 为当地任务句 |
| 2b 抽查语检索覆盖优化 | 2026-09-11 | 抽查 en,zh,es,ja：en H1 Split an audio file by duration；zh 按固定时长把音频切成多段；es Divide un archivo de audio por duración；ja 音声ファイルを秒数で分割；desc 含 Steps/步骤/Pasos/手順 与 Example/示例 及不上服务器；次词 split mp3 into parts / 按时长切割 / partir mp3 en partes iguales / 等分割 进 FAQ | 主词落 H1；无秒数顿号目录腔 |
| 3 抽查+禁词+lint | 2026-09-11 | lint:seo 复查：无 page 当产品名、无 FFmpeg 卖点、Why choose 含各语 H1；ar/ja/ru 待母语抽查保持未勾 | 准备 coverage:gate phase=4 与 verify:tool |
