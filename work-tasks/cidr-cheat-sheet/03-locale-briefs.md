# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`cidr-cheat-sheet`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔
- [x] 隐私句非含糊「local/本地」：须说清「留在设备」+「不上服务器」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**（i18n 生成后步 2+4）

**本工具额外禁用**：H1 勿写成 CIDR Calculator；勿声称 CompTIA 官方大纲；可见正文勿写 doorway/slug；兽医 CIDR 只消歧一句。

---

## 每语 brief

### en

- 检索词（3–5）：cidr cheat sheet；cidr chart；cidr notation chart；cidr chart comptia；what is cidr
- 语气：口语工具站（偏学习/运维）
- Title / H1 方向：CIDR cheat sheet — Prefix, mask, and host counts you can click
- 按钮短词：Load sample；Clear；Jump
- 本地示例用词：/24 → 255.255.255.0，254 usable
- 可保留英文/符号：CIDR、/24、CompTIA、RFC
- 额外禁用：do not H1 “CIDR Calculator”
- SERP 竞品 title（1–3）：CIDR Subnet Mask Cheat Sheet — NetworkProGuide；Subnet Calculator — MxToolbox
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：CIDR 速查表；CIDR 对照表；子网掩码对照；CIDR 是什么；CompTIA CIDR
- 语气：口语工具站
- Title / H1 方向：CIDR 速查表 — 点选前缀看掩码和主机数
- 按钮短词：加载示例；清除高亮；跳转
- 本地示例用词：/24 → 255.255.255.0
- 可保留英文/符号：CIDR、CompTIA、/24
- 额外禁用：H1 不要「CIDR 计算器」；不要顿号罗列「/8、/16、/24、掩码、通配符」
- SERP 竞品 title（1–3）：英文 cheat sheet / 计算器混排
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：chuleta cidr；tabla cidr；notación cidr；máscara de subred cidr；qué es cidr
- 语气：口语工具站
- Title / H1 方向：Chuleta CIDR — Prefijo, máscara y hosts con un clic
- 按钮短词：Cargar ejemplo；Limpiar；Ir
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA
- 额外禁用：no H1 “calculadora CIDR”
- SERP 竞品 title（1–3）：cheat sheets EN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：ورقة غش cidr；جدول cidr；قناع الشبكة cidr；ما هو cidr
- 语气：偏正式开发者
- Title / H1 方向：ورقة مرجع CIDR — بادئة وقناع وعدد المضيفين بالنقر
- 按钮短词：تحميل مثال；مسح；انتقال
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA
- 额外禁用：لا تعلن منهج CompTIA الرسمي
- SERP 竞品 title（1–3）：جداول إنجليزية
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：cola cidr；tabela cidr；notação cidr；máscara cidr；o que é cidr
- 语气：口语工具站
- Title / H1 方向：Cola CIDR — Prefixo, máscara e hosts com um clique
- 按钮短词：Carregar exemplo；Limpar；Ir
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA
- 额外禁用：não H1 calculadora
- SERP 竞品 title（1–3）：tabelas EN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：lembar contekan cidr；tabel cidr；notasi cidr；subnet mask cidr
- 语气：口语工具站
- Title / H1 方向：Contekan CIDR — Prefiks, mask, dan jumlah host tinggal diklik
- 按钮短词：Muat contoh；Hapus；Lompat
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA
- 额外禁用：bukan kalkulator di H1
- SERP 竞品 title（1–3）：cheat sheet EN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：antisèche cidr；tableau cidr；notation cidr；masque de sous-réseau cidr；qu’est-ce que cidr
- 语气：口语工具站
- Title / H1 方向：Antisèche CIDR — Préfixe, masque et hôtes en un clic
- 按钮短词：Charger l’exemple；Effacer；Aller
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA
- 额外禁用：pas « calculatrice CIDR » en H1
- SERP 竞品 title（1–3）：antisèches EN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：CIDR 早見表；CIDR チートシート；サブネットマスク对照；CIDR とは；CompTIA CIDR
- 语气：口语工具站
- Title / H1 方向：CIDR 早見表 — クリックでマスクとホスト数
- 按钮短词：サンプル；クリア；ジャンプ
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA、/24
- 额外禁用：「ユースケース」空壳；H1 を計算機にしない
- SERP 竞品 title（1–3）：英語早見表
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：шпаргалка cidr；таблица cidr；маска подсети cidr；что такое cidr
- 语气：口语工具站
- Title / H1 方向：Шпаргалка CIDR — префикс, маска и хосты по клику
- 按钮短词：Пример；Сбросить；Перейти
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA
- 额外禁用：не выдавать за официальный CompTIA
- SERP 竞品 title（1–3）：EN шпаргалки
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：cidr spickzettel；cidr tabelle；cidr notation tabelle；subnetzmaske cidr；was ist cidr
- 语气：口语工具站
- Title / H1 方向：CIDR-Spickzettel — Präfix, Maske und Hosts per Klick
- 按钮短词：Beispiel；Leeren；Springen
- 本地示例用词：/24
- 可保留英文/符号：CIDR、CompTIA
- 额外禁用：kein „CIDR-Rechner“ als H1
- SERP 竞品 title（1–3）：EN Cheat Sheets
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-31 | slug/title/关键词/desc；`02` 覆盖表与意图审查；主词 CIDR cheat sheet 进 H1；chart/comptia/what-is 落 desc/FAQ | 保留 cidr-cheat-sheet；计算器有意不满足；phase=0b 已绿 |
| 1 母版+lint | 2026-08-31 | 写完 en 全键与可点选表页 | lint:tool-page 待跑 |
| 1b 母版检索覆盖优化 | 2026-08-31 | 母版 H1 用 Click a prefix to see mask and hosts，避免 /8、/16、Mask 逗号枚举；主词 cheat sheet 在破折号前；chart 进 desc | 结果向副标题；phase=2 待跑 |
| 2 按 brief 重写 | 2026-08-31 | 十语按当地说法重写（速查表/chuleta/早見表/antisèche 等），非 en 同构 | 各语主词进 H1 |
| 2b 抽查语检索覆盖优化 | 2026-08-31 | 抽查 en,zh,es,ja：en cheat sheet；zh 速查表；es chuleta；ja 早見表；chart/comptia/what-is 落各语 desc 或 FAQ | 四语 H1 结果向且无目录腔 |
| 3 抽查+禁词+lint | 2026-08-31 | 禁词表；隐私句说清不上服务器；未勾待母语抽查 | 可标 i18n-done |
| 3+ desc 示例词 | 2026-08-31 | 十语 `description` 补入当地 example/示例/ejemplo 等词，避免 lint:seo 缺计算/过程/示例关键词 | lint:seo 绿 |
