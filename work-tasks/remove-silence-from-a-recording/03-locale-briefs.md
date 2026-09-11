# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`remove-silence-from-a-recording`  
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

技术专名（WAV、MP3、dB、RMS 仅 FAQ/Rules）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁**：H1 用 *silence remover* / *sound editor* / *静音切除器* 光杆头词当进攻句；拆 `/delete-silence` 近义；首屏 Split ZIP / 视频跳剪；Why choose 卖 FFmpeg/AudioMass；可见文案写「不拆 URL」。H1 禁止顿号罗列「阈值、最短静音、保留时长」。

---

## 每语 brief

### en

- 检索词（3–5）：remove silence from a recording；remove silence from audio；silence remover；remove dead air；delete silence / cut silence / truncate silence（全部 absorb）
- 语气：口语工具站
- Title / H1 方向：Remove silence from a recording（任务句；勿 Online Silence Remover）
- 按钮短词：Remove silence / Export WAV / Export MP3 / Load sample / Clear
- 本地示例用词：5-second sample with two 1.20 s gaps → about 2.90 s
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：Best free；100% DAW；把 split at silence 写进进攻 H1
- SERP 竞品 title（1–3）：Remove Silence from Audio Online（Vesta）；Silence Remover（Tembrica / Notevibes）；Truncate Silence（Audacity 手册）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：从一段录音里去掉静音；去除音频静音；去掉空白；删除静音；自动剪静音（另 absorb：切除静音、去掉停顿、会议录音去空白）
- 语气：口语工具站
- Title / H1 方向：从一段录音里去掉静音（勿「在线静音切除器」光杆）
- 按钮短词：去掉静音 / 导出 WAV / 导出 MP3 / 载入样例 / 清除
- 本地示例用词：5 秒样例夹两段 1.20 秒空白 → 约 2.90 秒
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：把 sound editor 写进进攻 H1；「本地处理」含糊不写不上服务器；mute 视频当同一作业
- SERP 竞品 title（1–3）：在线音频自动剪静音工具；音频静音去除工具；去除所有静音
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：eliminar silencios de una grabación；quitar silencios；eliminar silencio del audio；aire muerto；eliminador de silencios
- 语气：口语工具站
- Title / H1 方向：Elimina los silencios de una grabación（勿 Eliminador de silencios online 光杆）
- 按钮短词：Quitar silencios / Exportar WAV / Exportar MP3 / Cargar ejemplo / Borrar
- 本地示例用词：muestra de 5 s con dos huecos de 1,20 s → unos 2,90 s
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：altas y bajas；usar «página」当产品名进 H1
- SERP 竞品 title（1–3）：Eliminar silencio del audio（Tembrica）；Quitar silencios de audio（DuneTools）；Eliminar silencios de podcasts
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：إزالة الصمت من تسجيل؛ إزالة الصمت من الصوت؛ حذف الفجوات الصامتة；قص الصمت；إزالة الوقفات الطويلة
- 语气：口语工具站
- Title / H1 方向：إزالة الصمت من تسجيل（勿 مزيل الصمت أونلاين 当进攻 H1）
- 按钮短词：إزالة الصمت / تصدير WAV / تصدير MP3 / تحميل مثال / مسح
- 本地示例用词：عيّنة 5 ثوانٍ فيها فجوتان 1.20 ث → نحو 2.90 ث
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：把完整 استوديو 写进 H1
- SERP 竞品 title（1–3）：إزالة الصمت من الصوت（Tembrica）
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：remover silêncios de uma gravação；remover silêncio do áudio；eliminar silêncios；cortar pausas；tirar silêncio do áudio
- 语气：口语工具站
- Title / H1 方向：Remova os silêncios de uma gravação（勿 Removedor de silêncio online 光杆）
- 按钮短词：Remover silêncios / Exportar WAV / Exportar MP3 / Carregar exemplo / Limpar
- 本地示例用词：amostra de 5 s com dois vãos de 1,20 s → cerca de 2,90 s
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：H1 堆 grátis / online
- SERP 竞品 title（1–3）：Remover silêncio do áudio；Cortar pausas de podcast
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：hapus keheningan dari rekaman；buang jeda sunyi；potong bagian senyap；hapus silence audio；buang jeda panjang
- 语气：口语工具站
- Title / H1 方向：Hapus keheningan dari rekaman（勿 Silence Remover Online 光杆）
- 按钮短词：Hapus keheningan / Ekspor WAV / Ekspor MP3 / Muat contoh / Hapus
- 本地示例用词：contoh 5 detik dengan dua jeda 1,20 d → sekitar 2,90 d
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：场景标题写 Use case 当 H2
- SERP 竞品 title（1–3）：Hapus keheningan audio；Buang jeda sunyi
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：supprimer les silences d’un enregistrement；enlever les silences；retirer les pauses；supprimer les blancs audio；couper les silences
- 语气：口语工具站
- Title / H1 方向：Supprimez les silences d’un enregistrement（勿 Suppresseur de silence en ligne 光杆）
- 按钮短词：Supprimer les silences / Exporter WAV / Exporter MP3 / Charger un exemple / Effacer
- 本地示例用词：exemple de 5 s avec deux blancs de 1,20 s → environ 2,90 s
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：H1 用 page / outil magique
- SERP 竞品 title（1–3）：Supprimer les silences audio；Enlever les pauses d’un podcast
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：録音から無音を削除；無音部分削除；無音カット；無音を消す；沈黙を削除
- 语气：口语工具站
- Title / H1 方向：録音から無音を削除（勿「オンライン無音リムーバー」光杆；「無音トリマー」偏头尾，本页中间也切，FAQ 写清）
- 按钮短词：無音を削除 / WAVを書き出す / MP3を書き出す / サンプルを読み込む / クリア
- 本地示例用词：5秒のサンプルに1.20秒の無音が2か所 → 約2.90秒
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：H1 用ページ当产品名；把動画ジャンプカット写进进攻句
- SERP 竞品 title（1–3）：オーディオから無音を削除（Kapwing）；無音を削除（gottrix）；無音部分削除
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：удалить тишину из записи；убрать паузы из аудио；вырезать тишину；удалить молчание；убрать длинные паузы
- 语气：口语工具站
- Title / H1 方向：Удалите тишину из записи（勿 Онлайн удалятор тишины 光杆）
- 按钮短词：Удалить тишину / Экспорт WAV / Экспорт MP3 / Загрузить пример / Очистить
- 本地示例用词：пример 5 с с двумя паузами по 1,20 с → около 2,90 с
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：造词 тишина-ремувер 当 H1
- SERP 竞品 title（1–3）：Удалить тишину из аудио；Убрать паузы
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Stille aus einer Aufnahme entfernen；Stille entfernen；Pausen löschen；Totluft entfernen；Stille rausschneiden
- 语气：口语工具站
- Title / H1 方向：Stille aus einer Aufnahme entfernen（勿 Online-Stille-Entferner 光杆）
- 按钮短词：Stille entfernen / WAV exportieren / MP3 exportieren / Beispiel laden / Löschen
- 本地示例用词：5-s-Beispiel mit zwei 1,20-s-Lücken → etwa 2,90 s
- 可保留英文/符号：WAV、MP3、dB
- 额外禁用：H1 堆 Schwellenwert、Mindestdauer、Padding 目录腔
- SERP 竞品 title（1–3）：Stille aus Audio entfernen（Tembrica / DuneTools）；Totluft entfernen
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-11 | 对照 12 S2 与 Vesta/Tembrica/Notevibes/Audacity Truncate Silence/土薯及西日德当地搜法，写满 02 覆盖表、同意图全表与意图审查；H1 锁定任务句 Remove silence from a recording，次词 silence remover/dead air/truncate silence 进 desc/FAQ | slug 保留；不吸 split-by-silence 与 mute video；`coverage:gate --phase=0b` 绿 |
| 1 母版+lint | 2026-09-11 | 写 en 全键与 Page（分窗 RMS、拼回一文件、金标 HUD Decode/Detect/Cut/Encode） | lint:tool-page wiring 绿 |
| 1b 母版检索覆盖优化 | 2026-09-11 | 母版 title 定为 Remove silence from a recording；desc 前窗含 dead air、one shorter file、not uploaded；次词 silence remover / delete silence / truncate silence / gap remover 写入 FAQ q2 与 usecase | 主词在 H1；无阈值顿号目录腔 |
| 2 按 brief 重写 | 2026-09-11 | 十语按 03 独立重写（非英译骨架）；按钮与 How 对齐各语去掉静音 / Quitar silencios / 無音を削除 等；隐私均写设备+不上服务器 | 键集与 en 对齐，各语 H1 为当地任务句 |
| 2b 抽查语检索覆盖优化 | 2026-09-11 | 抽查 en,zh,es,ja：en H1 Remove silence from a recording；zh 从一段录音里去掉静音；es Elimina los silencios de una grabación；ja 録音から無音を削除；desc 含 Steps/步骤/Pasos/手順 与 Example/示例 及不上服务器；次词 silence remover / 去掉空白 / aire muerto / 無音カット 进 FAQ | 主词落 H1；无阈值顿号目录腔 |
| 3 抽查+禁词+lint | 2026-09-11 | lint:seo 复查：无 page 当产品名、无 FFmpeg/AudioMass 卖点、Why choose 含各语 H1；ar/ja/ru 待母语抽查保持未勾 | lint:seo 与 coverage:gate phase=4 绿 |
