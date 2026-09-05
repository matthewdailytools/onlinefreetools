# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`text-diff`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

技术专名（CRLF、`.env`、JSON、diff、jsdiff）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：text diff online；compare two texts；online diff checker；line by line diff；diff two strings
- 语气：口语工具站（偏开发者可读）
- Title / H1 方向：Check difference between two texts（Planner 原句；禁营销后缀）
- 按钮短词：Compare / Swap sides / Clear；modes Line · Word · Character；Ignore spaces；Treat CRLF and LF the same
- 本地示例用词：Hello world → Hello there；三行中间改一行
- 可保留英文/符号：CRLF、LF、`.env`、YAML、jsdiff
- 额外禁用：granularity；hunk 作 UI 主词
- SERP 竞品 title（1–3）：Diffchecker；Text Compare；Online Diff Tool
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：在线文本对比；文本差异对比；两段文字对比；按行对比；文本 diff
- 语气：口语工具站
- Title / H1 方向：查看两段文本的差异（当地等价长尾，不直搬英文）
- 按钮短词：开始对比 / 左右对调 / 清空；按行 · 按词 · 按字符；忽略空格；忽略换行符差异
- 本地示例用词：你好世界 → 你好朋友；第二行 / 第三行
- 可保留英文/符号：CRLF、LF、`.env`、YAML、jsdiff
- 额外禁用：对比粒度；英式 Use cases 标题
- SERP 竞品 title（1–3）：在线文本对比；Diff 对比工具；文本差异检查
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comparar textos online；ver diferencias entre textos；comparar dos textos；diff online；comparar por línea
- 语气：口语工具站
- Title / H1 方向：Comprobar diferencias entre dos textos
- 按钮短词：Comparar / Intercambiar lados / Borrar；Línea · Palabra · Carácter；Ignorar espacios；Igualar CRLF y LF
- 本地示例用词：Hola mundo → Hola amigo
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：`altas y bajas` 表增删；granularity
- SERP 竞品 title（1–3）：Comparar textos；Diff online；Comparador de texto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مقارنة نصين؛ مقارنة نصوص أونلاين؛ فرق بين نصين؛ diff نص
- 语气：口语工具站
- Title / H1 方向：تحقق من الفرق بين نصين
- 按钮短词：قارن / بدّل الجانبين / امسح；سطر · كلمة · حرف
- 本地示例用词：مرحبا بالعالم → مرحبا صديقي（可用本地问候句）
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：英模造词直写
- SERP 竞品 title（1–3）：مقارنة نصوص؛ أداة فرق النصوص
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：comparar dois textos online；ver diferenças；diff de texto；comparar por linha
- 语气：口语工具站
- Title / H1 方向：Verificar diferenças entre dois textos
- 按钮短词：Comparar / Trocar lados / Limpar；Linha · Palavra · Caractere
- 本地示例用词：Olá mundo → Olá amigo
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：Granularitas 类造词
- SERP 竞品 title（1–3）：Comparar textos；Diff online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：bandingkan teks online；lihat perbedaan teks；diff teks；bandingkan baris
- 语气：口语工具站
- Title / H1 方向：Periksa perbedaan antara dua teks
- 按钮短词：Bandingkan / Tukar sisi / Hapus；Baris · Kata · Karakter
- 本地示例用词：Halo dunia → Halo teman
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：Granularitas
- SERP 竞品 title（1–3）：Bandingkan teks；Diff online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：comparer deux textes en ligne；voir les différences；diff en ligne；comparer ligne par ligne
- 语气：口语工具站
- Title / H1 方向：Vérifier les différences entre deux textes
- 按钮短词：Comparer / Inverser les côtés / Effacer；Ligne · Mot · Caractère
- 本地示例用词：Bonjour monde → Bonjour ami
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：granularité 作 Diff UI 主词
- SERP 竞品 title（1–3）：Comparer textes；Diff en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：テキスト比較；差分比較；テキスト 差分；オンライン diff；文章 比較
- 语气：口语工具站
- Title / H1 方向：2つのテキストの差分を確認
- 按钮短词：比較する / 左右を入れ替え / クリア；行 · 単語 · 文字
- 本地示例用词：こんにちは世界 → こんにちは友人
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：ユースケース；グラニュラリティ
- SERP 竞品 title（1–3）：テキスト比較；差分チェック
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：сравнить два текста онлайн；найти различия；diff текста；сравнение по строкам
- 语气：口语工具站
- Title / H1 方向：Проверить различия между двумя текстами
- 按钮短词：Сравнить / Поменять стороны / Очистить；Строка · Слово · Символ
- 本地示例用词：Привет мир → Привет друг
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：英模造词
- SERP 竞品 title（1–3）：Сравнить тексты；Онлайн diff
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：Texte online vergleichen；Text Unterschiede；Diff online；Zeilen vergleichen
- 语气：口语工具站
- Title / H1 方向：Unterschied zwischen zwei Texten prüfen
- 按钮短词：Vergleichen / Seiten tauschen / Leeren；Zeile · Wort · Zeichen
- 本地示例用词：Hallo Welt → Hallo Freund
- 可保留英文/符号：CRLF、LF、`.env`、jsdiff
- 额外禁用：Diff-Granularität；Hunk 德语化造词
- SERP 竞品 title（1–3）：Texte vergleichen；Online Diff；Text Diff Tool
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 锁定 Check difference between two texts；次长尾进 desc/FAQ；文件作业划界；覆盖表与意图审查写入 02 | 保留 slug text-diff；coverage:gate phase=0b |
| 1 母版+lint | 2026-08-06 | en/zh 母版 + 十语骨架；`lint:seo` | 通过结构门槛 |
| 1b 母版检索覆盖优化 | 2026-09-01 | 母版 title 去掉营销后缀，主词落入 H1；desc 吸收 compare two texts online / diff checker | 主词在 H1，非参数枚举 |
| 2 按 brief 重写 | 2026-08-06 | 检索向重写十语 title/FAQ/按钮；去造词 | es/de 等译腔明显改善 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja 的当地等价长尾 H1 与 desc/FAQ 划界（非英模直搬） | en,zh,es,ja 四语 title 均为任务句 |
| 3 抽查+禁词+lint | 2026-08-06 | 抽 en/zh/es/de；再 lint | 通过；补 locale brief 归档 |
| 4 规则对齐优化 | 2026-08-06 | 结构化 Rules、本地预填示例、隐私 FAQ 诚实说明 CDN、文档对齐 | 见 `02` 与页面改动 |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
| IG/交互修正复审 | 2026-09-05 | 十语补齐 Load sample 与四步 How；字符模式禁用无效的忽略空格，词模式按开关切换保留/忽略空白；FAQ 与 Rules 同步边界 | 样例、控件、How、Rules 与实际算法一致 |
