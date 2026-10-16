# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`write-countif-formula-in-excel`  
**母版语言**：en  
**状态**：`i18n-done`

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

### en

- 检索词（3–5）：write a COUNTIF formula in Excel；excel countif like / wildcards；count blank cells COUNTIF；privacy not uploaded
- 语气：口语工具站
- Title / H1 方向：**Write a COUNTIF Formula in Excel — Count Matches with Wildcards**（场景句，非 Range/Criteria 参数枚举）
- 按钮短词：Write formula / Clear / Load sample / Copy
- 本地示例用词：West/East、*west*、>10、blank ""
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel, A1
- 额外禁用：online excel 套件壳、page 当产品名、参数枚举 title
- SERP 竞品 title（1–3）：Microsoft COUNTIF support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]
### zh

- 检索词（3–5）：Excel COUNTIF 公式；COUNTIF 通配符；统计空白单元格；条件计数公式
- 语气：口语工具站
- Title / H1 方向：写出 Excel COUNTIF 公式（含通配符匹配计数），非参数枚举
- 按钮短词：写出公式 / 清空 / 加载样例 / 复制
- 本地示例用词：西区/东区 或保留 West；*west*；>10；空白 ""
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel, A1
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft COUNTIF / 公式站
- 轮次2已重写：[x]  轮次3已抽查：[x]
### es

- 检索词（3–5）：fórmula COUNTIF Excel；comodines COUNTIF；contar celdas en blanco；criterio COUNTIF
- 语气：口语工具站
- Title / H1 方向：escribir fórmula COUNTIF en Excel con comodines（场景句）
- 按钮短词：Escribir fórmula / Borrar / Ejemplo / Copiar
- 本地示例用词：Oeste/Este 或 West；*west*；>10
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft COUNTIF / plantillas
- 轮次2已重写：[x]  轮次3已抽查：[x]
### ar

- 检索词（3–5）：صيغة COUNTIF في Excel؛ أحرف البدل؛ عد الخلايا الفارغة
- 语气：口语工具站
- Title / H1 方向：كتابة صيغة COUNTIF مع أحرف البدل（场景句）
- 按钮短词：كتابة الصيغة / مسح / مثال / نسخ
- 本地示例用词：West/*west*/ >10 / فارغ
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft COUNTIF
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]
### pt

- 检索词（3–5）：fórmula COUNTIF Excel；curingas COUNTIF；contar células em branco
- 语气：口语工具站
- Title / H1 方向：escrever fórmula COUNTIF no Excel com curingas
- 按钮短词：Escrever fórmula / Limpar / Exemplo / Copiar
- 本地示例用词：West/*west*/ >10
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft COUNTIF
- 轮次2已重写：[x]  轮次3已抽查：[x]
### id

- 检索词（3–5）：rumus COUNTIF Excel；wildcard COUNTIF；hitung sel kosong
- 语气：口语工具站
- Title / H1 方向：tulis rumus COUNTIF di Excel dengan wildcard
- 按钮短词：Tulis rumus / Hapus / Contoh / Salin
- 本地示例用词：West/*west*/ >10
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft COUNTIF
- 轮次2已重写：[x]  轮次3已抽查：[x]
### fr

- 检索词（3–5）：formule COUNTIF Excel；jokers COUNTIF；compter cellules vides
- 语气：口语工具站
- Title / H1 方向：écrire une formule COUNTIF Excel avec jokers
- 按钮短词：Écrire la formule / Effacer / Exemple / Copier
- 本地示例用词：West/*west*/ >10
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft COUNTIF
- 轮次2已重写：[x]  轮次3已抽查：[x]
### ja

- 检索词（3–5）：Excel COUNTIF 書き方；COUNTIF ワイルドカード；空白セル カウント
- 语气：口语工具站
- Title / H1 方向：ExcelでCOUNTIF数式を書く（ワイルドカード対応）
- 按钮短词：数式を作成 / クリア / サンプル / コピー
- 本地示例用词：West/*west*/ >10
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel
- 额外禁用：online excel 套件壳、page 当产品名、ユースケース空壳
- SERP 竞品 title（1–3）：Microsoft COUNTIF
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]
### ru

- 检索词（3–5）：формула СЧЁТЕСЛИ Excel；подстановочные знаки；пустые ячейки
- 语气：口语工具站
- Title / H1 方向：написать формулу СЧЁТЕСЛИ / COUNTIF с подстановками（可用 COUNTIF 保留）
- 按钮短词：Создать формулу / Очистить / Пример / Копировать
- 本地示例用词：West/*west*/ >10
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel；可提 СЧЁТЕСЛИ
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft COUNTIF / СЧЁТЕСЛИ
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]
### de

- 检索词（3–5）：COUNTIF Formel Excel；Platzhalter COUNTIF；leere Zellen zählen；ZÄHLENWENN
- 语气：口语工具站
- Title / H1 方向：COUNTIF-/ZÄHLENWENN-Formel in Excel schreiben mit Platzhaltern
- 按钮短词：Formel schreiben / Leeren / Beispiel / Kopieren
- 本地示例用词：West/*west*/ >10
- 可保留英文/符号：COUNTIF, COUNTIFS, Excel；可提 ZÄHLENWENN
- 额外禁用：online excel 套件壳、page 当产品名、Granularität
- SERP 竞品 title（1–3）：Microsoft COUNTIF / ZÄHLENWENN
- 轮次2已重写：[x]  轮次3已抽查：[x]


## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-04 | slug 用场景 kebab；H1=Write a COUNTIF formula in Excel；次词进 FAQ；Planner 长尾写入 02 表 | 覆盖表已填；intent 总判满足；主词在 H1 |
| 1 母版+lint | 2026-09-04 | 写 en 全键与 opts 页 | 母版可过 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-04 | 核对 en title 含场景动词+Excel/spreadsheet；去掉头词进攻；次词落入 description 前半与 FAQ | 主词在 H1；无参数枚举 title |
| 2 按 brief 重写 | 2026-09-04 | 按每语当地检索词独立写 title/FAQ/How 开篇，不锁英模问序 | 十语分片齐 |
| 2b 抽查语检索覆盖优化 | 2026-09-04 | 抽查 en,zh,es,ja 的 title/desc：当地主词进 H1，次词进 FAQ；es/ja 句式不与 en 平行 | en,zh,es,ja 均再核落点 |
| 3 抽查+禁词+lint | 2026-09-04 | 扫 privacy 设备+服务器句；禁 page 产品名；清待母语抽查 | 可标 i18n-done |
| IG 修正复审 | 2026-09-05 | en/zh/es/ja 补完整 COUNTIF 与 wildcard Example；其余语补真实公式结果 | FAQ 明示 COUNTIFS、~ 转义及本地语法边界 |
| thin-rewrite #49 | 2026-10-16 | 样例表+匹配预览+芯片；en 加深 why_choose×5 / FAQ×7；title 场景向；九语独立重写 | phase=2 绿；待 phase=4 |
