# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-density`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（ρ、g/cm³、kg/m³、lb/ft³、mL、PVC 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把单位列表串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：fr 必须区分「masse volumique」（kg/m³，本工具计算的量）与「densité」（无量纲，等于本页的比重），不得把 g/cm³ 结果称为 densité；id 用「massa jenis」（可提 densitas）；ru 区分「плотность」与「относительная плотность」；Example 数字固定（9.65 g、20.0 → 20.5 mL、0.5 mL、19.3 g/cm³、19.32、20.6 mL → 16.1、10 × 5 × 2 cm、100 cm³、50 g、0.5 g/cm³）各语不得改动；`sg_tpl` 的 `{sg}`、`closest_tpl` 的 `{name}` `{rho}` 原样保留；How / FAQ 中引用的选项名须与该语控件文案一致。

---

## 每语 brief

### en
- 检索词：how to calculate density；density formula；density of irregular object；mass from density and volume；g/cm3 to kg/m3
- 语气：口语 + 作业友好
- Title：How to Calculate Density — Density Calculator That Also Solves for Mass or Volume, Even for Irregular Objects
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：密度怎么算；密度公式；排水法测密度；已知密度和体积求质量；g/cm³ 换算 kg/m³
- 语气：口语 + 初中物理
- Title：密度怎么算 — 质量除以体积就是密度，也能反求质量或体积并用排水法测不规则物体
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：密度の求め方；密度 公式；不規則な物体 体積 測り方 水；質量 求め方 密度 体積；g/cm3 kg/m3 換算
- 语气：です・ます
- Title：密度の求め方 — 質量と体積から密度を計算、質量や体積の逆算と不規則な物体にも対応
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：كيف تحسب الكثافة؛ قانون الكثافة؛ حساب كثافة جسم غير منتظم بالإزاحة؛ حساب الكتلة من الكثافة والحجم
- 语气：فصحى مبسطة
- Title：كيف تحسب الكثافة — حاسبة تجد الكثافة أو الكتلة أو الحجم حتى للأجسام غير المنتظمة
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：cómo calcular la densidad；fórmula de la densidad；densidad de un objeto irregular；calcular masa con densidad y volumen
- 语气：tú
- Title：Cómo calcular la densidad — Calculadora que también despeja la masa o el volumen, incluso de objetos irregulares
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：como calcular a densidade；fórmula da densidade；densidade de objeto irregular；calcular massa com densidade e volume
- 语气：você（pt-BR）
- Title：Como calcular a densidade — Calculadora que também encontra a massa ou o volume, até de objetos irregulares
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculer la masse volumique；formule masse volumique；calculer la densité；volume d’un objet irrégulier éprouvette
- 语气：vouvoiement
- Title：Calculer la masse volumique et la densité — Trouvez aussi la masse ou le volume, même d’un objet irrégulier
- 按钮：Calculer / Charger l’exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Dichte berechnen；Dichte Formel；Dichte unregelmäßiger Körper Wasserverdrängung；Masse aus Dichte und Volumen berechnen
- 语气：Sie-Form
- Title：Dichte berechnen — Masse durch Volumen teilen oder umgekehrt rechnen, auch per Wasserverdrängung für unregelmäßige Körper
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：как рассчитать плотность；формула плотности；плотность тела неправильной формы мензурка；масса через плотность и объём
- 语气：нейтральный，на «вы»
- Title：Как рассчитать плотность — найдите плотность по массе и объёму или наоборот, даже для тела неправильной формы
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：cara menghitung massa jenis；rumus massa jenis；massa jenis benda tidak beraturan gelas ukur；menghitung massa dari massa jenis dan volume
- 语气：Anda
- Title：Cara Menghitung Massa Jenis — Kalkulator yang Juga Mencari Massa atau Volume, Termasuk Benda Tidak Beraturan
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Density Calculator — Mass over Volume」改为问法 + 反求 + 不规则物体；02 同意图搜索全表（公式、反求质量 / 体积、排水法、长方体 / 圆柱、水的密度、单位换算、比重浮沉、按密度识别金属吸；气体密度、浮力不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 how to calculate density + solves for mass or volume + irregular objects；desc 写单位 + 排水 + 54 g / 20 mL 例子；排水法、换算、比重、材料对照分别落到 Why choose、Formula、FAQ q1–q7、Use cases | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（密度怎么算、密度の求め方、cómo calcular la densidad、Dichte berechnen、masse volumique、massa jenis 等）；fr 区分 masse volumique / densité；Example 数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | ρ = m/V 单一计算立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
