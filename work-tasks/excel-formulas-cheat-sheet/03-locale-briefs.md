# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`excel-formulas-cheat-sheet`  
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

- 检索词（3–5）：copy common Excel formulas；本工具场景句；隐私「不上服务器」
- 语气：口语工具站
- Title / H1 方向：当地检索向场景句（en 母版 **Copy common Excel formulas**），非参数枚举
- 按钮短词：Write / Clear / Load sample
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]
### zh

- 检索词（3–5）：复制常用 Excel 公式；Excel 函数速查；SUMIF 参数；VLOOKUP 公式
- 语气：口语工具站
- Title / H1 方向：复制常用 Excel 公式（任务句，无破折号枚举）
- 按钮短词：筛选 / 复制 / 加载示例
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]
### es

- 检索词（3–5）：fórmulas de Excel；copiar fórmula；BUSCARV；SUMAR.SI
- 语气：口语工具站
- Title / H1 方向：Copiar la fórmula de Excel que buscas
- 按钮短词：Filtrar / Copiar / Cargar ejemplo
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]
### ar

- 检索词（3–5）：صيغ إكسل；نسخ صيغة；SUMIF؛VLOOKUP
- 语气：口语工具站
- Title / H1 方向：انسخ صيغة إكسل الشائعة من البطاقة
- 按钮短词：تصفية / نسخ / تحميل المثال
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]
### pt

- 检索词（3–5）：fórmulas do Excel；copiar fórmula；PROCV；SOMASE
- 语气：口语工具站
- Title / H1 方向：Copiar a fórmula de Excel pronta no cartão
- 按钮短词：Filtrar / Copiar / Carregar exemplo
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]
### id

- 检索词（3–5）：rumus Excel；salin rumus；SUMIF；VLOOKUP
- 语气：口语工具站
- Title / H1 方向：Salin rumus Excel dari kartu yang cocok
- 按钮短词：Saring / Salin / Muat contoh
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]
### fr

- 检索词（3–5）：formules Excel；copier une formule；SOMME.SI；RECHERCHEV
- 语气：口语工具站
- Title / H1 方向：Copier une formule Excel depuis les fiches
- 按钮短词：Filtrer / Copier / Charger l'exemple
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]
### ja

- 检索词（3–5）：Excel 数式 コピー；関数 早見；SUMIF；XLOOKUP
- 语气：口语工具站
- Title / H1 方向：Excelの定番数式をカードからコピー
- 按钮短词：絞り込み / コピー / サンプルを読み込む
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]
### ru

- 检索词（3–5）：формулы Excel；скопировать формулу；ВПР；СУММЕСЛИ
- 语气：口语工具站
- Title / H1 方向：Скопировать готовую формулу Excel с карточки
- 按钮短词：Фильтр / Копировать / Загрузить пример
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]
### de

- 检索词（3–5）：Excel-Formeln kopieren；Formelsammlung；SVERWEIS；SUMMEWENN
- 语气：口语工具站
- Title / H1 方向：Excel-Formeln aus der Sammlung kopieren
- 按钮短词：Filtern / Kopieren / Beispiel laden
- 本地示例用词：West/East 或当地等价；发票行项目
- 可保留英文/符号：IF, IFS, IFNA, COUNTIF, xlsx, CSV, Excel
- 额外禁用：online excel 套件壳、page 当产品名
- SERP 竞品 title（1–3）：Microsoft support / 模板站 / Excel Online（本页不克隆）
- 轮次2已重写：[x]  轮次3已抽查：[x]


## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-04 | slug 用场景 kebab；H1=Copy common Excel formulas；次词进 FAQ；Planner 长尾写入 02 表 | 覆盖表已填；intent 总判满足；主词在 H1 |
| 1 母版+lint | 2026-09-04 | 写 en 全键与 opts 页 | 母版可过 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-04 | 核对 en title 含场景动词+Excel/spreadsheet；去掉头词进攻；次词落入 description 前半与 FAQ | 主词在 H1；无参数枚举 title |
| 2 按 brief 重写 | 2026-09-04 | 按每语当地检索词独立写 title/FAQ/How 开篇，不锁英模问序 | 十语分片齐 |
| 2b 抽查语检索覆盖优化 | 2026-09-04 | 抽查 en,zh,es,ja 的 title/desc：当地主词进 H1，次词进 FAQ；es/ja 句式不与 en 平行 | en,zh,es,ja 均再核落点 |
| 3 抽查+禁词+lint | 2026-09-04 | 扫 privacy 设备+服务器句；禁 page 产品名；清待母语抽查 | 可标 i18n-done |
| IG 修正复审 | 2026-09-05 | en/zh/es/ja 重写范围、步骤与 FAQ；其余语补真实 IF Input→Output | 实现四个 builder 直达链接；删除搜索/H1 元叙述 |
| 0b 清单前检索覆盖 | 2026-10-16 | thin-rewrite：八张公式卡 + 规则第 5 条划界 builder | 覆盖表已写入 02 |
| 1b 母版检索覆盖优化 | 2026-10-16 | desc 含 process / example / Load sample IF | 母版可合并 |
| 2b 抽查语检索覆盖优化 | 2026-10-16 | 九语按 brief 检索向重写 | 待 verify |
| 0b 清单前检索覆盖 | 2026-10-16 | thin-rewrite：八张公式卡 + 规则第 5 条划界 builder | 覆盖表已写入 02 |
| 1b 母版检索覆盖优化 | 2026-10-16 | desc 含 process / example / Load sample IF | 母版可合并 |
| 2b 抽查语检索覆盖优化 | 2026-10-16 | 抽查 en,zh,es,ja：主词进 H1（copy formulas / 复制常用公式 / fórmula / 数式），次词 SUMIF·VLOOKUP·Ctrl+` 进 FAQ 与 usecase；九语 desc 含步骤或示例且 ≥120 | en,zh,es,ja 落点已核；rules_item_5 划出嵌套 IF 生成器 |
