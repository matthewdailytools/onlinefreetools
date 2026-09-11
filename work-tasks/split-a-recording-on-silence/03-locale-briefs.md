# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`split-a-recording-on-silence`  
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

技术专名（WAV、MP3、ZIP、dB、RMS 仅 FAQ/Rules）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁**：H1 用 *silence splitter* / *sound editor* / *静音分割器* 光杆头词当进攻句；拆 `/split-mp3-on-silence` 近义；首屏等分/手标/视频；Why choose 卖 FFmpeg；可见文案写「不拆 URL」。H1 禁止顿号罗列「阈值、最短静音、ZIP」。不要把 S2「去掉静音仍一个文件」写进进攻 H1。

---

## 每语 brief

### en

- 检索词（3–5）：split a recording on silence；split audio by silence；split mp3 on silence；split audio at silence；detect silence and split
- 语气：口语工具站
- Title / H1 方向：Split a recording on silence（任务句；勿 Online Silence Splitter）
- 按钮短词：Split on silence / Download ZIP / Load sample / Clear
- 本地示例用词：5-second sample with two 1.20 s gaps → three clips 1.40 / 2.00 / 1.60 s
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：Best free；把 remove silence one-file 写进进攻 H1
- SERP 竞品 title（1–3）：Split Audio by Silence Online Free（FyleTools）；Audio Splitter – Split Audio by Silence（AudioForges）；Split Audio（TunePocket）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：按静音把一段录音切成多段；按静音分割音频；按停顿切片；按静音切 ZIP；检测静音并分割
- 语气：口语工具站
- Title / H1 方向：按静音把一段录音切成多段（勿「在线静音分割器」光杆）
- 按钮短词：按静音切开 / 下载 ZIP / 载入样例 / 清除
- 本地示例用词：5 秒样例夹两段 1.20 秒空白 → 三段 1.40 / 2.00 / 1.60 秒
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：把「去掉静音」当本页 H1；「本地处理」含糊不写不上服务器
- SERP 竞品 title（1–3）：按静音分割音频；音频按停顿切片
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：dividir una grabación por los silencios；dividir audio por silencios；partir grabación en silencios；separar pistas por silencios；exportar clips en ZIP
- 语气：口语工具站
- Title / H1 方向：Divide una grabación por los silencios（勿 Splitter de silencios online 光杆）
- 按钮短词：Dividir por silencios / Descargar ZIP / Cargar ejemplo / Borrar
- 本地示例用词：muestra de 5 s con dos huecos de 1,20 s → tres clips 1,40 / 2,00 / 1,60 s
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：altas y bajas；usar «página」当产品名进 H1
- SERP 竞品 title（1–3）：Dividir audio por silencios；Separar grabación en pausas
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：قسّم تسجيلاً عند الصمت；تقسيم الصوت عند الصمت；فصل التسجيل عند الوقفات；تقطيع المقطع عند الصمت；تنزيل المقاطع في ZIP
- 语气：口语工具站
- Title / H1 方向：قسّم تسجيلاً عند الصمت（勿 مقسّم الصمت أونلاين 当进攻 H1）
- 按钮短词：تقسيم عند الصمت / تنزيل ZIP / تحميل مثال / مسح
- 本地示例用词：عيّنة 5 ثوانٍ فيها فجوتان 1.20 ث → ثلاث مقاطع 1.40 / 2.00 / 1.60 ث
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：把完整 استوديو 写进 H1
- SERP 竞品 title（1–3）：تقسيم الصوت حسب الصمت
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：dividir uma gravação nos silêncios；dividir áudio por silêncios；separar gravação nas pausas；cortar faixas no silêncio；baixar clips em ZIP
- 语气：口语工具站
- Title / H1 方向：Divida uma gravação nos silêncios（勿 Splitter de silêncio online 光杆）
- 按钮短词：Dividir nos silêncios / Baixar ZIP / Carregar exemplo / Limpar
- 本地示例用词：amostra de 5 s com dois vãos de 1,20 s → três clips 1,40 / 2,00 / 1,60 s
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：H1 堆 grátis / online
- SERP 竞品 title（1–3）：Dividir áudio por silêncios；Separar gravação nas pausas
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：pecah rekaman pada jeda sunyi；bagi audio pada silence；potong rekaman di jeda；deteksi keheningan lalu pecah；unduh klip ZIP
- 语气：口语工具站
- Title / H1 方向：Pecah rekaman pada jeda sunyi（勿 Silence Splitter Online 光杆）
- 按钮短词：Pecah pada jeda / Unduh ZIP / Muat contoh / Hapus
- 本地示例用词：contoh 5 detik dengan dua jeda 1,20 d → tiga klip 1,40 / 2,00 / 1,60 d
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：场景标题写 Use case 当 H2
- SERP 竞品 title（1–3）：Pecah audio pada jeda sunyi；Bagi rekaman di silence
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：découper un enregistrement aux silences；séparer l’audio aux silences；couper un enregistrement aux pauses；détecter les silences et découper；ZIP de extraits
- 语气：口语工具站
- Title / H1 方向：Découpez un enregistrement aux silences（勿 Découpeur de silence en ligne 光杆）
- 按钮短词：Découper aux silences / Télécharger le ZIP / Charger un exemple / Effacer
- 本地示例用词：exemple de 5 s avec deux blancs de 1,20 s → trois extraits 1,40 / 2,00 / 1,60 s
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：H1 用 page / outil magique
- SERP 竞品 title（1–3）：Découper un audio aux silences；Séparer un enregistrement aux pauses
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：録音を無音で分割；無音で音声を分割；無音検出でカット；無音でファイルを分ける；ZIPで書き出す
- 语气：口语工具站
- Title / H1 方向：録音を無音で分割（勿「オンライン無音スプリッター」光杆；勿写成「無音を削除」那是 S2）
- 按钮短词：無音で分割 / ZIPをダウンロード / サンプルを読み込む / クリア
- 本地示例用词：5秒のサンプルに1.20秒の無音が2か所 → 3ファイル 1.40 / 2.00 / 1.60秒
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：H1 用ページ当产品名；把無音削除当本页进攻句
- SERP 竞品 title（1–3）：無音で音声を分割；無音検出で分割
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：разделите запись по тишине；нарезать аудио по паузам；разрезать запись по тишине；разделить mp3 по тишине；скачать клипы ZIP
- 语气：口语工具站
- Title / H1 方向：Разделите запись по тишине（勿 Онлайн сплиттер тишины 光杆）
- 按钮短词：Разделить по тишине / Скачать ZIP / Загрузить пример / Очистить
- 本地示例用词：пример 5 с с двумя паузами по 1,20 с → три клипа 1,40 / 2,00 / 1,60 с
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：造词 тишина-сплиттер 当 H1
- SERP 竞品 title（1–3）：Разделить аудио по тишине；Нарезать запись по паузам
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Aufnahme an Stille in mehrere Dateien teilen；Audio an Stille splitten；Aufnahme an Pausen zerlegen；Stille erkennen und teilen；Clips als ZIP
- 语气：口语工具站
- Title / H1 方向：Aufnahme an Stille in mehrere Dateien teilen（勿 Online-Stille-Splitter 光杆）
- 按钮短词：An Stille teilen / ZIP herunterladen / Beispiel laden / Löschen
- 本地示例用词：5-s-Beispiel mit zwei 1,20-s-Lücken → drei Clips 1,40 / 2,00 / 1,60 s
- 可保留英文/符号：WAV、MP3、ZIP、dB
- 额外禁用：H1 堆 Schwellenwert、Mindestdauer、ZIP 目录腔
- SERP 竞品 title（1–3）：Audio an Stille teilen；Aufnahme an Pausen splitten
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-11 | 对照 12 A3 与 FyleTools/TunePocket/AudioForges/SoniqTools/GigAI 及十语当地搜法，写满 02 覆盖表、同意图全表与意图审查；H1 锁定任务句 Split a recording on silence，次词 split audio by silence / split mp3 on silence / ZIP 进 desc/FAQ | slug 保留；不吸 S2 一文件、等时长切与 cue；`coverage:gate --phase=0b` 绿 |
| 1 母版+lint | 2026-09-11 | 写 en 全键与 Page（静音中点切开、ZIP、金标 HUD Decode/Detect/Split/Pack；JSZip 与 lamejs 点后加载） | lint:tool-page wiring 绿 |
| 1b 母版检索覆盖优化 | 2026-09-11 | 母版 title 定为 Split a recording on silence；desc 前窗含 ZIP of clips、not uploaded；次词 split audio by silence / split mp3 on silence / detect silence and split 写入 FAQ q2 与 usecase | 主词在 H1；无阈值顿号目录腔 |
| 2 按 brief 重写 | 2026-09-11 | 十语按 03 独立重写（非英译骨架）；按钮与 How 对齐各语按静音切开 / Dividir por silencios / 無音で分割 等；隐私均写设备+不上服务器 | 键集与 en 对齐，各语 H1 为当地任务句 |
| 2b 抽查语检索覆盖优化 | 2026-09-11 | 抽查 en,zh,es,ja：en H1 Split a recording on silence；zh 按静音把一段录音切成多段；es Divide una grabación por los silencios；ja 録音を無音で分割；desc 含 Steps/步骤/Pasos/手順 与 Example/示例 及不上服务器；次词 split audio by silence / 按静音分割音频 / dividir audio por silencios / 無音で分割 进 FAQ | 主词落 H1；无阈值顿号目录腔 |
| 3 抽查+禁词+lint | 2026-09-11 | lint:seo 复查：无 page 当产品名、无 FFmpeg 卖点、Why choose 含各语 H1；ar/ja/ru 待母语抽查保持未勾 | lint:seo 与 coverage:gate phase=4 绿 |
