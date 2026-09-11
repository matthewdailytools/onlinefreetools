# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`trim-an-audio-clip-and-export`  
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

技术专名（WAV、MP3、lamejs 仅 FAQ/Rules）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁**：H1 用 *sound editor* / *mp3 cutter* 光杆头词当进攻句；拆 `/cut-mp3` 近义；文案承诺 300 种格式；Why choose 卖 AudioMass/MIT。

---

## 每语 brief

### en

- 检索词（3–5）：trim audio；trim an audio clip；crop audio；cut audio；mp3 cutter / cut mp3 / trim mp3 / audio trimmer / audio cutter（全部 absorb）
- 语气：口语工具站
- Title / H1 方向：Trim an audio clip and export（任务句；勿 Online MP3 Cutter）
- 按钮短词：Trim / Export WAV / Export MP3 / Load sample / Clear；Start；End
- 本地示例用词：5-second sample tone；keep 1.00–3.00 seconds
- 可保留英文/符号：WAV、MP3、kbps
- 额外禁用：Best free；100% online editor；DAW 当 H1
- SERP 竞品 title（1–3）：MP3 Cutter and Editor（123apps 类）；Online Audio Cutter；Trim Audio Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：在线剪音频；裁剪音频；mp3剪切；剪mp3；音频裁剪（另 absorb：剪切mp3、切割mp3、裁剪mp3、音频剪切、音频剪辑、mp3切割、剪音频）
- 语气：口语工具站
- Title / H1 方向：裁剪一段音频并导出（勿「在线 MP3 剪切器」光杆）
- 按钮短词：裁剪 / 导出 WAV / 导出 MP3 / 载入样例 / 清除；起点；终点
- 本地示例用词：5 秒样例音；保留 1.00–3.00 秒
- 可保留英文/符号：WAV、MP3
- 额外禁用：把 sound editor 写进进攻 H1；「本地处理」含糊不写不上服务器
- SERP 竞品 title（1–3）：在线MP3剪切；音频剪辑；mp3切割
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：recortar audio；cortar mp3；recortar mp3；cortar audio；recortar canción / recortar clip
- 语气：口语工具站
- Title / H1 方向：Recorta un clip de audio y expórtalo（勿 Cortador MP3 online 光杆）
- 按钮短词：Recortar / Exportar WAV / Exportar MP3 / Cargar ejemplo / Borrar；Inicio；Fin
- 本地示例用词：tono de 5 s；conservar 1,00–3,00 s
- 可保留英文/符号：WAV、MP3
- 额外禁用：altas y bajas；usar «página» 当产品名进 H1
- SERP 竞品 title（1–3）：Cortar MP3 online；Recortar audio；Editor de audio online（头词 FAQ 划界）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：قص صوت؛ قص mp3؛ تقطيع مقطع صوتي؛ قص أغنية؛ تحرير صوت قصير（短剪，非完整 محرر）
- 语气：口语工具站
- Title / H1 方向：قص مقطع صوت وتصديره（勿 محرر صوت أونلاين 当进攻 H1）
- 按钮短词：قص / تصدير WAV / تصدير MP3 / تحميل مثال / مسح；البداية；النهاية
- 本地示例用词：نغمة 5 ثوانٍ؛ الإبقاء على 1.00–3.00 ث
- 可保留英文/符号：WAV、MP3
- 额外禁用：把完整 استوديو 写进 H1
- SERP 竞品 title（1–3）：قص mp3 اون لاين؛ تقطيع الصوت
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：cortar áudio；cortar mp3；recortar áudio；aparar áudio；cortar trecho de música
- 语气：口语工具站
- Title / H1 方向：Recorte um trecho de áudio e exporte（勿 Cortador de MP3 online 光杆）
- 按钮短词：Recortar / Exportar WAV / Exportar MP3 / Carregar exemplo / Limpar；Início；Fim
- 本地示例用词：tom de 5 s；manter 1,00–3,00 s
- 可保留英文/符号：WAV、MP3
- 额外禁用：H1 堆 grátis / online
- SERP 竞品 title（1–3）：Cortar MP3 online；Recortar áudio
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：potong audio；potong mp3；gunting lagu；potong klip audio；trim audio（借词 FAQ）
- 语气：口语工具站
- Title / H1 方向：Potong klip audio lalu ekspor（勿 MP3 Cutter Online 光杆）
- 按钮短词：Potong / Ekspor WAV / Ekspor MP3 / Muat contoh / Hapus；Mulai；Akhir
- 本地示例用词：nada 5 detik；simpan 1,00–3,00 detik
- 可保留英文/符号：WAV、MP3
- 额外禁用：场景标题写「ユースケース」式空壳（本语勿用 Use case 当 H2）
- SERP 竞品 title（1–3）：Potong MP3 online；Trim audio online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：couper un mp3；rogner un audio；découper un extrait audio；couper un morceau；trimmer audio（借词 FAQ）
- 语气：口语工具站
- Title / H1 方向：Rognez un extrait audio et exportez-le（勿 Coupeur MP3 en ligne 光杆）
- 按钮短词：Rogner / Exporter WAV / Exporter MP3 / Charger un exemple / Effacer；Début；Fin
- 本地示例用词：ton de 5 s；garder 1,00–3,00 s
- 可保留英文/符号：WAV、MP3
- 额外禁用：H1 用 page / outil magique
- SERP 竞品 title（1–3）：Couper MP3 en ligne；Rogner audio
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：音声カット；mp3カット；音声トリミング；音源切り取り；音声切り出し
- 语气：口语工具站
- Title / H1 方向：音声クリップを切り出して書き出す（勿「オンライン音声編集」当进攻 H1）
- 按钮短词：切り出し / WAV書き出し / MP3書き出し / サンプル読込 / クリア；開始；終了
- 本地示例用词：5秒のサンプル音；1.00〜3.00秒を残す
- 可保留英文/符号：WAV、MP3
- 额外禁用：场景 H2 写「ユースケース」；H1 写「ページ」
- SERP 竞品 title（1–3）：MP3カット；音声トリミング オンライン
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：обрезать mp3；обрезать аудио；вырезать фрагмент；обрезать песню；триммер аудио（借词 FAQ）
- 语气：口语工具站
- Title / H1 方向：Обрежьте аудиофрагмент и экспортируйте（勿 Онлайн звуковой редактор 当进攻 H1）
- 按钮短词：Обрезать / Экспорт WAV / Экспорт MP3 / Загрузить пример / Очистить；Начало；Конец
- 本地示例用词：тон 5 с；оставить 1,00–3,00 с
- 可保留英文/符号：WAV、MP3
- 额外禁用：H1 用 «страница»
- SERP 竞品 title（1–3）：Обрезать MP3 онлайн；Аудио триммер
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：mp3 schneiden；audio zuschneiden；audio trimmen；mp3 cutter（absorb FAQ）；audioclip zuschneiden
- 语气：口语工具站
- Title / H1 方向：Audioclip zuschneiden und exportieren（勿 Online MP3 Cutter 光杆）
- 按钮短词：Zuschneiden / WAV exportieren / MP3 exportieren / Beispiel laden / Leeren；Start；Ende
- 本地示例用词：5-Sekunden-Ton；1,00–3,00 s behalten
- 可保留英文/符号：WAV、MP3
- 额外禁用：Diff-Granularität 类造词；H1 用 Seite 当产品
- SERP 竞品 title（1–3）：MP3 schneiden online；Audio zuschneiden
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-11 | 在 02 写入「同意图相关搜索词」全表：trim/crop/cut/clipper、mp3 cutter 簇、song/music cutter、wav/m4a/ogg cutter、cut intro、十语当地等价说法；异意图 sound editor/铃声/抽音/split 进不吸列 | 页面生成按该表吸次词；H1 仍是任务句；coverage 指向全表而非只 3–5 词 |
| 1 母版+lint | 2026-09-10 | 写完 catalog、Page、en 分片、lamejs vendor 与图标；description 前窗写本标签页起止裁剪并导出 | lint:tool-page 与 coverage:gate phase=2 已绿 |
| 1b 母版检索覆盖优化 | 2026-09-11 | 扩写 en description 前窗为 Trim audio + crop + 不上服务器；把 cut mp3 / trim mp3 / crop mp3 / cut audio / mp3 cutter / mp3 trimmer / audio trimmer / audio cutter 写入 desc 与 FAQ q2；Use cases 含 trim audio 与 crop；去掉 FAQ「不拆 URL」 | 主词仍在 H1；同一作业近义全部有落点；无参数枚举目录腔 |
| 2b 抽查语检索覆盖优化 | 2026-09-11 | 抽查 en,zh,es,ja：各语 desc/FAQ/Use cases 按当地搜法收齐 cutter/cut/trim/crop 或 剪切/切割/剪音频/音声カット 等同一作业词；H1 未改成品类头词 | 四语 title 非参数枚举；次词落 desc/FAQ；en,zh,es,ja |
| 2 按 brief 重写 | 2026-09-10 | 九语按当地检索词独立写分片：zh 裁剪一段音频并导出、es Recorta un clip、ja 切り出して書き出す、de zuschneiden、fr Rognez un extrait；按钮与 How 对齐；隐私写设备+不上服务器 | 非 en 同构灌语；mp3 cutter 类只进 FAQ |
| 2b 抽查语检索覆盖优化 | 2026-09-10 | 抽查 en,zh,es,ja：en H1 仍是 Trim an audio clip and export；zh 主词「裁剪一段音频」；es recortar clip；ja 音声クリップを切り出して書き出す。desc 均含当地步骤/示例词与 cutter 吸收，sound editor 不进进攻 H1 | 四语 title 非参数枚举；次词落 desc/FAQ |
| 3 抽查+禁词+lint | 2026-09-10 | 对照禁词表：无 granularity 造词、无 es altas y bajas、无 ユースケース H2、无含糊 local；ar/ja/ru 已按 brief 重写且未勾待母语抽查 | 十语键齐全；build:site 预渲染通过；lint:vendor 需 git add lamejs；隔离门禁因新主题 sound-editor 需 CROSS_TOOL_UPDATE=1 |
