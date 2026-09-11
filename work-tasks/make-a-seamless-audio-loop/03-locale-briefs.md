# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`make-a-seamless-audio-loop`  
**母版语言**：en  
**状态**：`i18n-done`

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

技术专名（WAV、MP3、ms）可保留，**不可**替代本地主 title。  
**本工具额外禁**：H1 用 Audio Looper / Loop Maker / sound editor 光杆头词；拆 `/audio-looper`；承诺 AI 寻环或十小时文件；Why choose 卖「最快免费」；把两首歌 DJ 切歌当同一作业。

---

## 每语 brief

### en

- 检索词（3–5）：make a seamless audio loop；seamless loop；audio loop crossfade；loop audio；audio looper / loop maker（absorb）
- 语气：口语工具站
- Title / H1 方向：Make a seamless audio loop（任务句；勿 Online Audio Looper）
- 按钮短词：Make loop / Export WAV / Export MP3 / Load sample / Clear；Start；End；Crossfade；Play
- 本地示例用词：5-second sample；keep 1.00–3.00s；50 ms crossfade → about 1.95s
- 可保留英文/符号：WAV、MP3、ms、kbps
- 额外禁用：Best free looper；10-hour promise；DAW 当 H1
- SERP 竞品 title（1–3）：Free Online Loop Maker — Seamless Audio Loops；Audio Looper；Loop Maker | BPMsonic
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：把音频做成无缝循环；音频无缝循环；音频循环；交叉淡化循环；音频循环器（absorb）
- 语气：口语工具站
- Title / H1 方向：把音频做成无缝循环（勿「在线音频循环器」光杆）
- 按钮短词：做成循环 / 导出 WAV / 导出 MP3 / 载入样例 / 清除；起点；终点；交叉淡化；播放
- 本地示例用词：5 秒样例；保留 1.00–3.00 秒；50 毫秒交叉淡化 → 约 1.95 秒
- 可保留英文/符号：WAV、MP3
- 额外禁用：「本地处理」不写不上服务器；把两首歌切歌写进进攻 H1
- SERP 竞品 title（1–3）：音频循环器；音频循环工具；无缝循环
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：hacer un bucle de audio sin costura；bucle de audio；loop de audio；fundido cruzado；audio en bucle
- 语气：口语工具站
- Title / H1 方向：Haz un bucle de audio sin costura（勿 Looper de audio online 光杆）
- 按钮短词：Crear bucle / Exportar WAV / Exportar MP3 / Cargar ejemplo / Borrar；Inicio；Fin；Fundido cruzado；Reproducir
- 本地示例用词：tono de 5 s；1,00–3,00 s；50 ms → unos 1,95 s
- 可保留英文/符号：WAV、MP3、loop
- 额外禁用：altas y bajas；página 当产品名
- SERP 竞品 title（1–3）：Loop de audio online；Hacer un loop；Fundido cruzado
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حلقة صوتية سلسة؛ تكرار الصوت بلا فاصل؛ لوب صوتي؛ تداخل تلاشي؛ عمل لوب
- 语气：口语工具站
- Title / H1 方向：اصنع حلقة صوتية سلسة（勿 محرر صوت 当进攻 H1）
- 按钮短词：اصنع الحلقة / تصدير WAV / تصدير MP3 / تحميل مثال / مسح；البداية；النهاية；تداخل؛ تشغيل
- 本地示例用词：5 ثوان؛ 1.00–3.00؛ 50 مللي ثانية
- 可保留英文/符号：WAV、MP3
- 额外禁用：承诺十小时；AI 寻环
- SERP 竞品 title（1–3）：أداة تكرار الصوت؛ لوب صوتي
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：fazer um loop de áudio sem emenda；loop de áudio；áudio em loop；crossfade；repetir áudio
- 语气：口语工具站
- Title / H1 方向：Faça um loop de áudio sem emenda（勿 Looper online 光杆）
- 按钮短词：Fazer loop / Exportar WAV / Exportar MP3 / Carregar exemplo / Limpar；Início；Fim；Crossfade；Reproduzir
- 本地示例用词：tom de 5 s；1,00–3,00 s；50 ms
- 可保留英文/符号：WAV、MP3、loop
- 额外禁用：página 当产品名
- SERP 竞品 title（1–3）：Loop de áudio online；Criar loop perfeito
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：buat loop audio mulus；loop audio；pengulangan audio；crossfade；audio looping
- 语气：口语工具站
- Title / H1 方向：Buat loop audio yang mulus（勿 Audio Looper online 光杆）
- 按钮短词：Buat loop / Ekspor WAV / Ekspor MP3 / Muat contoh / Hapus；Awal；Akhir；Crossfade；Putar
- 本地示例用词：contoh 5 detik；1,00–3,00 dtk；50 md
- 可保留英文/符号：WAV、MP3、loop
- 额外禁用：halaman 当产品名进 H1
- SERP 竞品 title（1–3）：Audio looper；Loop audio online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：faire une boucle audio sans couture；boucle audio；loop audio；fondu enchaîné；boucle seamless
- 语气：口语工具站
- Title / H1 方向：Faire une boucle audio sans couture（勿 Looper audio en ligne 光杆）
- 按钮短词：Créer la boucle / Exporter WAV / Exporter MP3 / Charger un exemple / Effacer；Début；Fin；Fondu enchaîné；Lecture
- 本地示例用词：exemple 5 s；1,00–3,00 s；50 ms
- 可保留英文/符号：WAV、MP3
- 额外禁用：page 当产品名；promettre 10 heures
- SERP 竞品 title（1–3）：Boucle audio en ligne；Loop maker；Fondu enchaîné
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：シームレスな音声ループを作る；シームレスループ；音声ループ；クロスフェード；ループ音源
- 语气：口语工具站
- Title / H1 方向：シームレスな音声ループを作る（勿オンライン音声エディタ）
- 按钮短词：ループを作る / WAVを書き出す / MP3を書き出す / サンプルを読み込む / クリア；開始；終了；クロスフェード；再生
- 本地示例用词：5秒のサンプル；1.00–3.00秒；50ms → 約1.95秒
- 可保留英文/符号：WAV、MP3、ms
- 额外禁用：ユースケース；ページ当产品名
- SERP 竞品 title（1–3）：シームレスループ；音声ループ作成；ループメーカー
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：сделать бесшовный цикл аудио；бесшовный луп；зациклить аудио；кроссфейд；аудио луп
- 语气：口语工具站
- Title / H1 方向：Сделать бесшовный цикл аудио（勿 онлайн-редактор）
- 按钮短词：Сделать цикл / Экспорт WAV / Экспорт MP3 / Пример / Очистить；Начало；Конец；Кроссфейд；Играть
- 本地示例用词：5 с；1,00–3,00 с；50 мс
- 可保留英文/符号：WAV、MP3、loop
- 额外禁用：страница 当产品名
- SERP 竞品 title（1–3）：Зациклить аудио；Бесшовный луп
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：nahtlose Audio-Schleife erstellen；nahtlose Schleife；Audioschleife；Crossfade；Audio loop
- 语气：口语工具站
- Title / H1 方向：Eine nahtlose Audio-Schleife erstellen（勿 Online-Audio-Looper 光杆）
- 按钮短词：Schleife erstellen / WAV exportieren / MP3 exportieren / Beispiel laden / Leeren；Start；Ende；Crossfade；Abspielen
- 本地示例用词：5-s-Beispiel；1,00–3,00 s；50 ms → etwa 1,95 s
- 可保留英文/符号：WAV、MP3、ms
- 额外禁用：Seite 当产品名；10-Stunden-Versprechen
- SERP 竞品 title（1–3）：Audio-Loop erstellen；Nahtlose Schleife；Loop Maker
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-11 | slug 保留任务句；H1 用 make a seamless audio loop / 把音频做成无缝循环；looper/loop maker/crossfade 全表写入 02 同意图并指定 desc/FAQ/usecase；划界两文件切歌、铃声、寻环、Hub | 覆盖表+意图总判「满足」；主词进 H1；交叉淡化在输入区不进按钮行；gate 待跑 phase=0b |
| 1 母版+lint | 2026-09-11 | 写完 en 全键：H1 Make a seamless audio loop；How 动词对齐 Make loop / Export WAV / Export MP3；Rules 写清等功率缩短；FAQ 收 looper/loop maker/crossfade | 待 lint:tool-page |
| 1b 母版检索覆盖优化 | 2026-09-11 | 核对母版 title 含 make/seamless/audio loop；desc 前半含 crossfade 与不上服务器；次词 audio looper、loop maker、loop audio、looping background music 落入 FAQ q2 与 usecase；H1 无毫秒/码率枚举 | 主词在 H1；次词在 desc/FAQ/usecase |
| 2 按 brief 重写 | 2026-09-11 | 十语按当地检索独立重写：zh 做成循环/不上服务器；es bucle sin costura；ja シームレスな音声ループ；ar حلقة صوتية سلسة；pt loop sem emenda；id loop yang mulus；fr boucle sans couture；ru бесшовный цикл；de nahtlose Schleife。FAQ 题序与 Why 条切入随语变化 | 非英模同构灌语 |
| 2b 抽查语检索覆盖优化 | 2026-09-11 | 抽查 en,zh,es,ja：en H1 Make a seamless audio loop + desc crossfade/looper；zh H1 把音频做成无缝循环 + 音频循环器 FAQ；es H1 Haz un bucle de audio sin costura + fundido cruzado；ja H1 シームレスな音声ループを作る + ループメーカー FAQ。各语 title 无毫秒码率枚举 | 四语主词在 H1；次词在 desc/FAQ/usecase |
| 3 抽查+禁词+lint | 2026-09-11 | 扫 en+zh+es+ja title/按钮/隐私：无 page 当产品名；文件类写清设备+不上服务器；Why choose 含该语工具名且非快/免费空话；待母语抽查保持未勾 | verify:tool 绿；lint:seo 绿 |
