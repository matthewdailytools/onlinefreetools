# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`measuring-magnetic-fields`  
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
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（tesla、gauss、Hall、N42、µT）可保留为符号，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

本工具无用户文件；desc/FAQ 仍用该语说清「计算在浏览器里完成、数字不上服务器」，禁止只写 local。

---

## 每语 brief

### en

- 检索词（3–5）：measuring magnetic fields；magnetic field strength；magnetic field calculator；gauss strength of magnet；magnetic field of magnet
- 语气：口语工具站（实验室/课堂能读懂，不写厂商手册腔）
- Title / H1 方向：Measuring Magnetic Fields — Field strength calculator
- 按钮短词：Convert；Load sample；Clear；Estimate field（次模式）
- 本地示例用词：Hall probe reads 200 G → 0.02 T；Earth ~50 µT；magnet strength chart
- 可保留英文/符号：T, G, µT, Hall, N42, μ₀
- 额外禁用：H1 不得写成 Tesla, Gauss, Oersted & N-grade 目录；**不得**用 magnetic force / Lorentz / coulomb 做主标题
- SERP 竞品 title（1–3）：Measuring Magnetic Flux Density With Hall Probe；Magnetic Field Converter — Free Conversion Calculator；Hall (magnetic) sensors（厂商）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：测量磁场；磁场强度；磁场计算器；磁铁高斯强度；条形磁铁磁场
- 语气：口语工具站
- Title / H1 方向：测量磁场 — 磁场强度计算器
- 按钮短词：换算；载入示例；清空；估算磁场
- 本地示例用词：霍尔探头 200 高斯 → 0.02 特斯拉；地磁场约 50 µT
- 可保留英文/符号：T、G、µT、N42、Hall
- 额外禁用：勿用「磁力链接」；勿把 H1 写成「特斯拉、高斯、奥斯特、牌号」顿号目录；勿主打「磁力 / 洛伦兹力 / 库仑力」
- SERP 竞品 title（1–3）：课堂实验「用霍尔元件测磁场」；厂商特斯拉计说明书；单位换算站「特斯拉和高斯」
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：medir campos magnéticos；intensidad del campo magnético；calculadora de campo magnético；gauss del imán；campo de un imán de barra
- 语气：口语工具站
- Title / H1 方向：Medir campos magnéticos — Calculadora de intensidad
- 按钮短词：Convertir；Cargar ejemplo；Borrar；Estimar campo
- 本地示例用词：sonda Hall 200 G → 0,02 T；campo terrestre ~50 µT
- 可保留英文/符号：T, G, Hall, N42
- 额外禁用：勿用 magnetismo 空泛百科题当 H1；勿参数枚举 tesla, gauss y oersted；H1 不用 fuerza de Lorentz / coulomb
- SERP 竞品 title（1–3）：cómo medir un campo magnético；convertir tesla a gauss；sonda de Hall
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：قياس المجال المغناطيسي；شدة المجال المغناطيسي；حاسبة المجال المغناطيسي；غاوس المغناطيس；مجال المغناطيس الشريطي
- 语气：口语工具站
- Title / H1 方向：قياس المجال المغناطيسي — حاسبة شدة المجال
- 按钮短词：تحويل；مثال；مسح；تقدير المجال
- 本地示例用词：مسبار هول 200 غاوس → 0.02 تسلا
- 可保留英文/符号：T, G, Hall, µT
- 额外禁用：勿与「رابط مغناطيسي」种子下载混淆；H1 不用 قوة لورنتز / كولوم
- SERP 竞品 title（1–3）：قياس المجال المغناطيسي بمسبار هول；تحويل تسلا وغاوس
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：medir campos magnéticos；intensidade do campo magnético；calculadora de campo magnético；gauss do ímã；campo de ímã de barra
- 语气：口语工具站
- Title / H1 方向：Medir campos magnéticos — Calculadora de intensidade
- 按钮短词：Converter；Carregar exemplo；Limpar；Estimar campo
- 本地示例用词：sonda Hall 200 G → 0,02 T
- 可保留英文/符号：T, G, Hall
- 额外禁用：勿 H1 罗列 tesla, gauss e oersted；H1 不用 força de Lorentz / Coulomb
- SERP 竞品 title（1–3）：como medir campo magnético；converter tesla em gauss
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：mengukur medan magnet；kekuatan medan magnet；kalkulator medan magnet；gauss magnet；medan magnet batang
- 语气：口语工具站
- Title / H1 方向：Mengukur medan magnet — Kalkulator kekuatan medan
- 按钮短词：Konversi；Contoh；Hapus；Perkiraan medan
- 本地示例用词：probe Hall 200 G → 0,02 T
- 可保留英文/符号：T, G, Hall
- 额外禁用：勿写成 daftar Tesla, Gauss, Oersted；H1 不用 gaya Lorentz / Coulomb
- SERP 竞品 title（1–3）：cara mengukur medan magnet；konversi tesla ke gauss
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：mesurer un champ magnétique；intensité du champ magnétique；calculateur de champ magnétique；gauss d’un aimant；champ d’un aimant droit
- 语气：口语工具站
- Title / H1 方向：Mesurer un champ magnétique — Calculateur d’intensité
- 按钮短词：Convertir；Exemple；Effacer；Estimer le champ
- 本地示例用词：sonde de Hall 200 G → 0,02 T
- 可保留英文/符号：T, G, Hall
- 额外禁用：勿 H1「Tesla, gauss, œrsted et grade N」；H1 不用 force de Lorentz / Coulomb
- SERP 竞品 title（1–3）：mesure d’un champ magnétique；convertir tesla en gauss；sonde de Hall
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：磁場 測定；磁場強度；磁場 計算；磁石 ガウス；棒磁石 磁場
- 语气：口语工具站
- Title / H1 方向：磁場を測る — 磁場強度の計算
- ボタン短词：換算；サンプル；クリア；磁場を見積もる
- 本地示例用词：ホールプローブ 200 G → 0.02 T；地磁気 約 50 µT
- 可保留英文/符号：T, G, Hall, N42
- 额外禁用：タイトルを「ユースケース」や「Tesla・Gauss・エルステッド」列挙にしない；磁力リンク（BitTorrent）と混同しない；H1 にローレンツ力・クーロン力を置かない
- SERP 竞品 title（1–3）：磁場の測定方法；テスラとガウスの換算；ホール素子
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：измерить магнитное поле；напряжённость магнитного поля；калькулятор магнитного поля；гаусс магнита；поле полосового магнита
- 语气：口语工具站
- Title / H1 方向：Измерение магнитного поля — Калькулятор напряжённости
- 按钮短词：Пересчитать；Пример；Очистить；Оценить поле
- 本地示例用词：датчик Холла 200 Гс → 0,02 Тл
- 可保留英文/符号：T, G, Hall；可用 Тл / Гс 作本地单位名
- 额外禁用：не путать с magnet-ссылкой торрента；H1 без силы Лоренца / Кулона
- SERP 竞品 title（1–3）：как измерить магнитное поле；перевод тесла в гаусс；датчик Холла
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Magnetfeld messen；magnetische Feldstärke；Magnetfeld-Rechner；Gauss eines Magneten；Feld eines Stabmagneten
- 语气：口语工具站
- Title / H1 方向：Magnetfeld messen — Feldstärke-Rechner
- 按钮短词：Umrechnen；Beispiel laden；Leeren；Feld schätzen
- 本地示例用词：Hall-Sonde 200 G → 0,02 T；Erdmagnetfeld ~50 µT
- 可保留英文/符号：T, G, Hall
- 额外禁用：kein Titel „Tesla, Gauss, Oersted und N-Grad“；H1 ohne Lorentz-/Coulomb-Kraft
- SERP 竞品 title（1–3）：Magnetfeld messen；Tesla in Gauss umrechnen；Hall-Sonde
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-28 | 按 keywords-search-volumns.txt 重跑 0b：H1 核心仍是 measuring magnetic fields；副标题改为 Field strength calculator 以吸收 magnetic field strength / calculator；gauss strength、magnetic field of magnet、magnet strength chart、bar magnet 写入 desc/FAQ/usecase；magnetic force 只进 FAQ；库仑/张力/洛伦兹作业题排除不拆页。意图审查后 How 改为先写仪器与摆放再换算，desc 去掉 Lorentz 元叙述 | 覆盖表已回写 02；主词仍在 H1；How 对齐「怎么测」 |
| 1 母版+lint | 2026-08-28 | 写 en 全键：H1 Measuring Magnetic Fields — Field strength calculator；desc 含 200 G 样例、magnetic field of a magnet、gauss strength、magnet strength chart、bar magnet、browser/no-server；How 五步先仪器后换算；FAQ 五条含场 vs 力 | 母版分片已落盘；主词在 H1 破折号前 |
| 1b 母版检索覆盖优化 | 2026-08-28 | 相对 brief 初稿核对母版：title 仍以 measuring magnetic fields 为核心、副标题 Field strength calculator 吸收 field strength / calculator，未改成 Tesla/Gauss/Oersted 目录；desc 前半写入 magnetic field of a magnet 与 200 G example，force 不进 H1 | 主词在 H1；次词在 desc/FAQ/usecase；phase=2 可验收 |
| 2 按 brief 重写 | 2026-08-28 | 按 03 各语检索词独立写 zh/es/ar/pt/id/fr/ja/ru/de：title 用当地「测磁场」说法；How 先仪器后换算；desc 写浏览器内计算且数字不上服务器；FAQ 场 vs 力不进 H1 | 十语键齐全；句式未锁死英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-28 | 抽查 en,zh,es,ja：en 保持 Measuring Magnetic Fields；zh H1「测量磁场」；es「Medir campos magnéticos」；ja「磁場を測る」。核对 desc 含 200 G 样例与磁铁高斯/对照表，未改成 Tesla/Gauss/Oersted 目录腔 | en,zh,es,ja 主词均在 title；次词在 desc/FAQ/usecase |
| 3 抽查+禁词+lint | 2026-08-28 | 禁词扫描：无磁力链接/Lorentz 作 H1；无 ユースケース；隐私句写清不上服务器；ar/ja/ru 抽查后清待母语勾选 | 禁词通过；可跑 phase=4/all |
