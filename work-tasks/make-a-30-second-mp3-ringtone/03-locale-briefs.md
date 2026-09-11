# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`make-a-30-second-mp3-ringtone`  
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

技术专名（MP3、s、kbps）可保留，**不可**替代本地主 title。  
**本工具额外禁**：H1 用 Ringtone Maker / 铃声制作器 光杆头词；拆 `/ringtone-maker`；H1 或主按钮许诺 M4R/iPhone 一键安装；Why choose 卖「最快免费」；把任意时长裁剪或无缝循环当同一作业。

---

## 每语 brief

### en

- 检索词（3–5）：make a 30-second mp3 ringtone；ringtone maker；mp3 to ringtone；android ringtone；ringtone cutter（absorb）
- 语气：口语工具站
- Title / H1 方向：Make a 30-second MP3 ringtone（任务句；勿 Online Ringtone Maker）
- 按钮短词：Make ringtone / Export MP3 / Load sample / Clear；Start；Duration；Fade in；Fade out；Play
- 本地示例用词：32-second sample；keep 1.00–31.00s（30s）；fade in 0.5s / fade out 1.5s
- 可保留英文/符号：MP3、s、kbps
- 额外禁用：Best free ringtone maker；M4R download button；DAW 当 H1
- SERP 竞品 title（1–3）：Free Ringtone Maker Online — iPhone (M4R) & Android (MP3)；Ringtone Maker Tool；Make Ringtone Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：做成 30 秒 MP3 铃声；铃声制作；手机铃声；mp3 转铃声；安卓铃声
- 语气：口语工具站
- Title / H1 方向：做成 30 秒 MP3 铃声（勿「在线铃声制作器」光杆）
- 按钮短词：做成铃声 / 导出 MP3 / 载入样例 / 清除；起点；时长；淡入；淡出；播放
- 本地示例用词：32 秒样例；保留 1.00–31.00 秒（30 秒）；淡入 0.5 秒 / 淡出 1.5 秒
- 可保留英文/符号：MP3
- 额外禁用：「本地处理」不写不上服务器；H1 许诺苹果 M4R
- SERP 竞品 title（1–3）：免费铃声制作器；制作铃声；MP3 转铃声
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：haz un tono de llamada MP3 de 30 segundos；tono de llamada；crear tono mp3；ringtone de 30 segundos；cortar canción para tono
- 语气：口语工具站
- Title / H1 方向：Haz un tono de llamada MP3 de 30 segundos（勿 Creador de tonos online 光杆）
- 按钮短词：Crear tono / Exportar MP3 / Cargar ejemplo / Borrar；Inicio；Duración；Fundido de entrada；Fundido de salida；Reproducir
- 本地示例用词：tono de 32 s；1,00–31,00 s；entrada 0,5 s / salida 1,5 s
- 可保留英文/符号：MP3
- 额外禁用：altas y bajas；página 当产品名；prometer M4R
- SERP 竞品 title（1–3）：Creador de tonos online；Tono de llamada MP3；Cortar canción
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：اصنع نغمة MP3 مدتها 30 ثانية؛ نغمة رنين؛ صنع نغمة؛ نغمة هاتف؛ قص أغنية لنغمة
- 语气：口语工具站
- Title / H1 方向：اصنع نغمة MP3 مدتها 30 ثانية（勿 صانع نغمات 光杆）
- 按钮短词：اصنع النغمة / تصدير MP3 / تحميل مثال / مسح；البداية；المدة；تلاشي دخول؛ تلاشي خروج؛ تشغيل
- 本地示例用词：32 ثانية؛ 1.00–31.00؛ دخول 0.5 / خروج 1.5
- 可保留英文/符号：MP3
- 额外禁用：承诺 M4R；AI 生成铃声
- SERP 竞品 title（1–3）：صانع نغمات؛ نغمة رنين MP3
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：faça um toque MP3 de 30 segundos；toque mp3；criar toque；ringtone 30 segundos；cortar música para toque
- 语气：口语工具站
- Title / H1 方向：Faça um toque MP3 de 30 segundos（勿 Criador de toques online 光杆）
- 按钮短词：Criar toque / Exportar MP3 / Carregar exemplo / Limpar；Início；Duração；Fade in；Fade out；Reproduzir
- 本地示例用词：tom de 32 s；1,00–31,00 s；entrada 0,5 s / saída 1,5 s
- 可保留英文/符号：MP3
- 额外禁用：página 当产品名；prometer M4R
- SERP 竞品 title（1–3）：Criador de toque；Toque MP3 online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：buat nada dering MP3 30 detik；nada dering mp3；pembuat nada dering；ringtone 30 detik；potong lagu jadi nada dering
- 语气：口语工具站
- Title / H1 方向：Buat nada dering MP3 30 detik（勿 Ringtone Maker online 光杆）
- 按钮短词：Buat nada dering / Ekspor MP3 / Muat contoh / Hapus；Awal；Durasi；Fade masuk；Fade keluar；Putar
- 本地示例用词：contoh 32 detik；1,00–31,00 dtk；masuk 0,5 dtk / keluar 1,5 dtk
- 可保留英文/符号：MP3
- 额外禁用：halaman 当产品名进 H1
- SERP 竞品 title（1–3）：Pembuat nada dering；Ringtone MP3 online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：faire une sonnerie MP3 de 30 secondes；sonnerie mp3；créer une sonnerie；sonnerie 30 secondes；couper une chanson en sonnerie
- 语气：口语工具站
- Title / H1 方向：Faire une sonnerie MP3 de 30 secondes（勿 Créateur de sonnerie en ligne 光杆）
- 按钮短词：Créer la sonnerie / Exporter MP3 / Charger un exemple / Effacer；Début；Durée；Fondu d’entrée；Fondu de sortie；Lecture
- 本地示例用词：exemple 32 s；1,00–31,00 s；entrée 0,5 s / sortie 1,5 s
- 可保留英文/符号：MP3
- 额外禁用：page 当产品名；promettre M4R
- SERP 竞品 title（1–3）：Créateur de sonnerie；Sonnerie MP3 en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：30秒のMP3着信音を作る；MP3着信音；着信音作成；30秒着信音；着メロ作成
- 语气：口语工具站
- Title / H1 方向：30秒のMP3着信音を作る（勿着信音メーカー光杆）
- 按钮短词：着信音を作る / MP3を書き出す / サンプルを読み込む / クリア；開始；長さ；フェードイン；フェードアウト；再生
- 本地示例用词：32秒サンプル；1.00〜31.00秒；フェードイン 0.5秒 / フェードアウト 1.5秒
- 可保留英文/符号：MP3
- 额外禁用：ユースケース；H1 で M4R を約束
- SERP 竞品 title（1–3）：着信音作成；MP3を着信音に；着メロ作成
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：сделать 30-секундный MP3-рингтон；рингтон mp3；сделать рингтон；обрезать песню для рингтона；рингтон 30 секунд
- 语气：口语工具站
- Title / H1 方向：Сделать 30-секундный MP3-рингтон（勿 Онлайн рингтон мейкер 光杆）
- 按钮短词：Сделать рингтон / Экспорт MP3 / Загрузить пример / Очистить；Старт；Длительность；Фейд-ин；Фейд-аут；Играть
- 本地示例用词：32 с；1,00–31,00 с；вход 0,5 с / выход 1,5 с
- 可保留英文/符号：MP3
- 额外禁用：страница 当产品名；обещать M4R
- SERP 竞品 title（1–3）：Сделать рингтон；MP3 рингтон онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：30-Sekunden-MP3-Klingelton erstellen；MP3 Klingelton；Klingelton erstellen；Lied als Klingelton；Klingelton schneiden
- 语气：口语工具站
- Title / H1 方向：30-Sekunden-MP3-Klingelton erstellen（勿 Klingelton-Maker 光杆）
- 按钮短词：Klingelton erstellen / MP3 exportieren / Beispiel laden / Löschen；Start；Dauer；Einblenden；Ausblenden；Abspielen
- 本地示例用词：32-s-Beispiel；1,00–31,00 s；Ein 0,5 s / Aus 1,5 s
- 可保留英文/符号：MP3
- 额外禁用：Seite 当产品名；M4R versprechen
- SERP 竞品 title（1–3）：Klingelton erstellen；MP3 Klingelton online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-11 | 对照 12 S6 与 SnipSound/Loopaloo/Notevibes/中文铃声制作 SERP，写满 02 覆盖表与同意图全表；H1 用 30 秒 MP3 任务句；ringtone maker / mp3 to ringtone / 安卓铃声吸进 desc/FAQ；M4R 有意不满足格式 | slug 保留 make-a-30-second-mp3-ringtone；主词落 H1；意图总判满足 + 划界 M4R/S1/S5/Hub；02 标 ready |
| 1 母版+lint | 2026-09-11 | 写完 en 全键：H1 Make a 30-second MP3 ringtone；How 与 Make ringtone / Export MP3 同词；FAQ 吸 ringtone maker / mp3 to ringtone / 安卓；划界 M4R | 母版可进 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-11 | 对照 02 再扫 title/desc：主词在 H1；次词 ringtone maker、mp3 to ringtone、android ringtone、fade 写入 desc 前半与 FAQ q2–q6；去掉参数枚举；meta 前窗含 30-second MP3 ringtone + 不上服务器 | 主词落 H1；次词有落点；coverage:gate phase=2 绿 |
| 2 按 brief 重写 | 2026-09-11 | 按十语 brief 独立重写 zh/es/ar/pt/id/fr/ja/ru/de：各语 H1 为当地 30 秒 MP3 铃声任务句；How 对齐做成铃声/Crear tono/着信音を作る 与 Export MP3；FAQ 吸 ringtone maker 当地词并划界 M4R | 十语分片齐全；非 en 骨架直译 |
| 2b 抽查语检索覆盖优化 | 2026-09-11 | 抽查 en,zh,es,ja：en H1 Make a 30-second MP3 ringtone + desc 补 song to ringtone；zh H1 做成 30 秒 MP3 铃声 + 歌曲做成铃声；es H1 Haz un tono de llamada MP3 de 30 segundos + creador de tonos；ja H1 30秒のMP3着信音を作る + 曲を着信音にする。各语 title 无码率枚举；desc 含步骤/示例与不上服务器 | 四语主词在 H1；次词落 desc/FAQ；en,zh,es,ja |
| 3 抽查+禁词+lint | 2026-09-11 | 扫 en+zh+es+ja title/按钮/隐私：无 page 当产品名；文件类写清设备+不上服务器；Why choose 含该语工具名且非快/免费空话；ar/ja/ru 待母语抽查保持未勾 | coverage:gate phase=4 与 phase=all 绿；CROSS_TOOL_UPDATE=1 verify:tool 绿 |
